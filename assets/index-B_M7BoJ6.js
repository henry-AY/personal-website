(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var yd={exports:{}},pl={};var sx;function iA(){if(sx)return pl;sx=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:i,type:s,key:u,ref:o!==void 0?o:null,props:c}}return pl.Fragment=t,pl.jsx=n,pl.jsxs=n,pl}var rx;function aA(){return rx||(rx=1,yd.exports=iA()),yd.exports}var $t=aA(),Sd={exports:{}},le={};var ox;function sA(){if(ox)return le;ox=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function x(F,j,gt){this.props=F,this.context=j,this.refs=M,this.updater=gt||E}x.prototype.isReactComponent={},x.prototype.setState=function(F,j){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,j,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function w(){}w.prototype=x.prototype;function D(F,j,gt){this.props=F,this.context=j,this.refs=M,this.updater=gt||E}var U=D.prototype=new w;U.constructor=D,R(U,x.prototype),U.isPureReactComponent=!0;var B=Array.isArray;function z(){}var P={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function L(F,j,gt){var bt=gt.ref;return{$$typeof:i,type:F,key:j,ref:bt!==void 0?bt:null,props:gt}}function ot(F,j){return L(F.type,j,F.props)}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function Y(F){var j={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(gt){return j[gt]})}var $=/\/+/g;function st(F,j){return typeof F=="object"&&F!==null&&F.key!=null?Y(""+F.key):j.toString(36)}function K(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(z,z):(F.status="pending",F.then(function(j){F.status==="pending"&&(F.status="fulfilled",F.value=j)},function(j){F.status==="pending"&&(F.status="rejected",F.reason=j)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function O(F,j,gt,bt,Nt){var nt=typeof F;(nt==="undefined"||nt==="boolean")&&(F=null);var _t=!1;if(F===null)_t=!0;else switch(nt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(F.$$typeof){case i:case t:_t=!0;break;case g:return _t=F._init,O(_t(F._payload),j,gt,bt,Nt)}}if(_t)return Nt=Nt(F),_t=bt===""?"."+st(F,0):bt,B(Nt)?(gt="",_t!=null&&(gt=_t.replace($,"$&/")+"/"),O(Nt,j,gt,"",function(Qt){return Qt})):Nt!=null&&(V(Nt)&&(Nt=ot(Nt,gt+(Nt.key==null||F&&F.key===Nt.key?"":(""+Nt.key).replace($,"$&/")+"/")+_t)),j.push(Nt)),1;_t=0;var Tt=bt===""?".":bt+":";if(B(F))for(var Xt=0;Xt<F.length;Xt++)bt=F[Xt],nt=Tt+st(bt,Xt),_t+=O(bt,j,gt,nt,Nt);else if(Xt=y(F),typeof Xt=="function")for(F=Xt.call(F),Xt=0;!(bt=F.next()).done;)bt=bt.value,nt=Tt+st(bt,Xt++),_t+=O(bt,j,gt,nt,Nt);else if(nt==="object"){if(typeof F.then=="function")return O(K(F),j,gt,bt,Nt);throw j=String(F),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return _t}function I(F,j,gt){if(F==null)return F;var bt=[],Nt=0;return O(F,bt,"","",function(nt){return j.call(gt,nt,Nt++)}),bt}function et(F){if(F._status===-1){var j=F._result;j=j(),j.then(function(gt){(F._status===0||F._status===-1)&&(F._status=1,F._result=gt)},function(gt){(F._status===0||F._status===-1)&&(F._status=2,F._result=gt)}),F._status===-1&&(F._status=0,F._result=j)}if(F._status===1)return F._result.default;throw F._result}var ut=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},yt={map:I,forEach:function(F,j,gt){I(F,function(){j.apply(this,arguments)},gt)},count:function(F){var j=0;return I(F,function(){j++}),j},toArray:function(F){return I(F,function(j){return j})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return le.Activity=_,le.Children=yt,le.Component=x,le.Fragment=n,le.Profiler=o,le.PureComponent=D,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,le.__COMPILER_RUNTIME={__proto__:null,c:function(F){return P.H.useMemoCache(F)}},le.cache=function(F){return function(){return F.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(F,j,gt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var bt=R({},F.props),Nt=F.key;if(j!=null)for(nt in j.key!==void 0&&(Nt=""+j.key),j)!b.call(j,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&j.ref===void 0||(bt[nt]=j[nt]);var nt=arguments.length-2;if(nt===1)bt.children=gt;else if(1<nt){for(var _t=Array(nt),Tt=0;Tt<nt;Tt++)_t[Tt]=arguments[Tt+2];bt.children=_t}return L(F.type,Nt,bt)},le.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},le.createElement=function(F,j,gt){var bt,Nt={},nt=null;if(j!=null)for(bt in j.key!==void 0&&(nt=""+j.key),j)b.call(j,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Nt[bt]=j[bt]);var _t=arguments.length-2;if(_t===1)Nt.children=gt;else if(1<_t){for(var Tt=Array(_t),Xt=0;Xt<_t;Xt++)Tt[Xt]=arguments[Xt+2];Nt.children=Tt}if(F&&F.defaultProps)for(bt in _t=F.defaultProps,_t)Nt[bt]===void 0&&(Nt[bt]=_t[bt]);return L(F,nt,Nt)},le.createRef=function(){return{current:null}},le.forwardRef=function(F){return{$$typeof:h,render:F}},le.isValidElement=V,le.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:et}},le.memo=function(F,j){return{$$typeof:d,type:F,compare:j===void 0?null:j}},le.startTransition=function(F){var j=P.T,gt={};P.T=gt;try{var bt=F(),Nt=P.S;Nt!==null&&Nt(gt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(z,ut)}catch(nt){ut(nt)}finally{j!==null&&gt.types!==null&&(j.types=gt.types),P.T=j}},le.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},le.use=function(F){return P.H.use(F)},le.useActionState=function(F,j,gt){return P.H.useActionState(F,j,gt)},le.useCallback=function(F,j){return P.H.useCallback(F,j)},le.useContext=function(F){return P.H.useContext(F)},le.useDebugValue=function(){},le.useDeferredValue=function(F,j){return P.H.useDeferredValue(F,j)},le.useEffect=function(F,j){return P.H.useEffect(F,j)},le.useEffectEvent=function(F){return P.H.useEffectEvent(F)},le.useId=function(){return P.H.useId()},le.useImperativeHandle=function(F,j,gt){return P.H.useImperativeHandle(F,j,gt)},le.useInsertionEffect=function(F,j){return P.H.useInsertionEffect(F,j)},le.useLayoutEffect=function(F,j){return P.H.useLayoutEffect(F,j)},le.useMemo=function(F,j){return P.H.useMemo(F,j)},le.useOptimistic=function(F,j){return P.H.useOptimistic(F,j)},le.useReducer=function(F,j,gt){return P.H.useReducer(F,j,gt)},le.useRef=function(F){return P.H.useRef(F)},le.useState=function(F){return P.H.useState(F)},le.useSyncExternalStore=function(F,j,gt){return P.H.useSyncExternalStore(F,j,gt)},le.useTransition=function(){return P.H.useTransition()},le.version="19.2.4",le}var lx;function zm(){return lx||(lx=1,Sd.exports=sA()),Sd.exports}var Bt=zm(),Md={exports:{}},ml={},Ed={exports:{}},Td={};var cx;function rA(){return cx||(cx=1,(function(i){function t(O,I){var et=O.length;O.push(I);t:for(;0<et;){var ut=et-1>>>1,yt=O[ut];if(0<o(yt,I))O[ut]=I,O[et]=yt,et=ut;else break t}}function n(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var I=O[0],et=O.pop();if(et!==I){O[0]=et;t:for(var ut=0,yt=O.length,F=yt>>>1;ut<F;){var j=2*(ut+1)-1,gt=O[j],bt=j+1,Nt=O[bt];if(0>o(gt,et))bt<yt&&0>o(Nt,gt)?(O[ut]=Nt,O[bt]=et,ut=bt):(O[ut]=gt,O[j]=et,ut=j);else if(bt<yt&&0>o(Nt,et))O[ut]=Nt,O[bt]=et,ut=bt;else break t}}return I}function o(O,I){var et=O.sortIndex-I.sortIndex;return et!==0?et:O.id-I.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,y=!1,E=!1,R=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var I=n(d);I!==null;){if(I.callback===null)s(d);else if(I.startTime<=O)s(d),I.sortIndex=I.expirationTime,t(m,I);else break;I=n(d)}}function B(O){if(R=!1,U(O),!E)if(n(m)!==null)E=!0,z||(z=!0,Y());else{var I=n(d);I!==null&&K(B,I.startTime-O)}}var z=!1,P=-1,b=5,L=-1;function ot(){return M?!0:!(i.unstable_now()-L<b)}function V(){if(M=!1,z){var O=i.unstable_now();L=O;var I=!0;try{t:{E=!1,R&&(R=!1,w(P),P=-1),y=!0;var et=v;try{e:{for(U(O),_=n(m);_!==null&&!(_.expirationTime>O&&ot());){var ut=_.callback;if(typeof ut=="function"){_.callback=null,v=_.priorityLevel;var yt=ut(_.expirationTime<=O);if(O=i.unstable_now(),typeof yt=="function"){_.callback=yt,U(O),I=!0;break e}_===n(m)&&s(m),U(O)}else s(m);_=n(m)}if(_!==null)I=!0;else{var F=n(d);F!==null&&K(B,F.startTime-O),I=!1}}break t}finally{_=null,v=et,y=!1}I=void 0}}finally{I?Y():z=!1}}}var Y;if(typeof D=="function")Y=function(){D(V)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,st=$.port2;$.port1.onmessage=V,Y=function(){st.postMessage(null)}}else Y=function(){x(V,0)};function K(O,I){P=x(function(){O(i.unstable_now())},I)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_next=function(O){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var et=v;v=I;try{return O()}finally{v=et}},i.unstable_requestPaint=function(){M=!0},i.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var et=v;v=O;try{return I()}finally{v=et}},i.unstable_scheduleCallback=function(O,I,et){var ut=i.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?ut+et:ut):et=ut,O){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=et+yt,O={id:g++,callback:I,priorityLevel:O,startTime:et,expirationTime:yt,sortIndex:-1},et>ut?(O.sortIndex=et,t(d,O),n(m)===null&&O===n(d)&&(R?(w(P),P=-1):R=!0,K(B,et-ut))):(O.sortIndex=yt,t(m,O),E||y||(E=!0,z||(z=!0,Y()))),O},i.unstable_shouldYield=ot,i.unstable_wrapCallback=function(O){var I=v;return function(){var et=v;v=I;try{return O.apply(this,arguments)}finally{v=et}}}})(Td)),Td}var ux;function oA(){return ux||(ux=1,Ed.exports=rA()),Ed.exports}var bd={exports:{}},Nn={};var fx;function lA(){if(fx)return Nn;fx=1;var i=zm();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Nn.flushSync=function(m){var d=u.T,g=s.p;try{if(u.T=null,s.p=2,m)return m()}finally{u.T=d,s.p=g,s.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},Nn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var hx;function cA(){if(hx)return bd.exports;hx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),bd.exports=lA(),bd.exports}var dx;function uA(){if(dx)return ml;dx=1;var i=oA(),t=zm(),n=cA();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function u(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var f=r.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===r)return m(f),e;if(p===l)return m(f),a;p=p.sibling}throw Error(s(188))}if(r.return!==l.return)r=f,l=p;else{for(var S=!1,A=f.child;A;){if(A===r){S=!0,r=f,l=p;break}if(A===l){S=!0,l=f,r=p;break}A=A.sibling}if(!S){for(A=p.child;A;){if(A===r){S=!0,r=p,l=f;break}if(A===l){S=!0,l=p,r=f;break}A=A.sibling}if(!S)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function g(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=g(e),a!==null)return a;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),ot=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case z:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case U:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return a=e.displayName||null,a!==null?a:st(e.type)||"Memo";case b:a=e._payload,e=e._init;try{return st(e(a))}catch{}}return null}var K=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},ut=[],yt=-1;function F(e){return{current:e}}function j(e){0>yt||(e.current=ut[yt],ut[yt]=null,yt--)}function gt(e,a){yt++,ut[yt]=e.current,e.current=a}var bt=F(null),Nt=F(null),nt=F(null),_t=F(null);function Tt(e,a){switch(gt(nt,a),gt(Nt,e),gt(bt,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?C_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=C_(a),e=w_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(bt),gt(bt,e)}function Xt(){j(bt),j(Nt),j(nt)}function Qt(e){e.memoizedState!==null&&gt(_t,e);var a=bt.current,r=w_(a,e.type);a!==r&&(gt(Nt,e),gt(bt,r))}function ee(e){Nt.current===e&&(j(bt),j(Nt)),_t.current===e&&(j(_t),ul._currentValue=et)}var tn,xe;function ge(e){if(tn===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);tn=a&&a[1]||"",xe=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+e+xe}var Le=!1;function ce(e,a){if(!e||Le)return"";Le=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var at=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){at=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){at=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],A=p[1];if(S&&A){var H=S.split(`
`),tt=A.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<tt.length&&!tt[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===tt.length)for(l=H.length-1,f=tt.length-1;1<=l&&0<=f&&H[l]!==tt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==tt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==tt[f]){var dt=`
`+H[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=f);break}}}finally{Le=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ge(r):""}function Je(e,a){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==a&&a!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return ge("Activity");default:return""}}function G(e){try{var a="",r=null;do a+=Je(e,r),r=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var je=Object.prototype.hasOwnProperty,Te=i.unstable_scheduleCallback,Pe=i.unstable_cancelCallback,Yt=i.unstable_shouldYield,N=i.unstable_requestPaint,T=i.unstable_now,q=i.unstable_getCurrentPriorityLevel,pt=i.unstable_ImmediatePriority,xt=i.unstable_UserBlockingPriority,ht=i.unstable_NormalPriority,Wt=i.unstable_LowPriority,Ct=i.unstable_IdlePriority,Kt=i.log,ne=i.unstable_setDisableYieldValue,Et=null,St=null;function Pt(e){if(typeof Kt=="function"&&ne(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Et,e)}catch{}}var Lt=Math.clz32?Math.clz32:W,Ot=Math.log,fe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ot(e)/fe|0)|0}var Rt=256,At=262144,Ft=4194304;function Mt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,a,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,p=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~p,l!==0?f=Mt(l):(S&=A,S!==0?f=Mt(S):r||(r=A&~e,r!==0&&(f=Mt(r))))):(A=l&~p,A!==0?f=Mt(A):S!==0?f=Mt(S):r||(r=l&~e,r!==0&&(f=Mt(r)))),f===0?0:a!==0&&a!==f&&(a&p)===0&&(p=f&-f,r=a&-a,p>=r||p===32&&(r&4194048)!==0)?a:f}function zt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function ae(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function be(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function Bn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bi(e,a,r,l,f,p){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,tt=e.hiddenUpdates;for(r=S&~r;0<r;){var dt=31-Lt(r),vt=1<<dt;A[dt]=0,H[dt]=-1;var at=tt[dt];if(at!==null)for(tt[dt]=null,dt=0;dt<at.length;dt++){var ct=at[dt];ct!==null&&(ct.lane&=-536870913)}r&=~vt}l!==0&&bo(e,l,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(S&~a))}function bo(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Lt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function lr(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-Lt(r),f=1<<l;f&a|e[l]&a&&(e[l]|=a),r&=~f}}function jl(e,a){var r=a&-a;return r=(r&42)!==0?1:cr(r),(r&(e.suspendedLanes|a))!==0?0:r}function cr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ki(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:J_(e.type))}function fr(e,a){var r=I.p;try{return I.p=e,a()}finally{I.p=r}}var Ai=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ai,_n="__reactProps$"+Ai,oa="__reactContainer$"+Ai,Ga="__reactEvents$"+Ai,Zl="__reactListeners$"+Ai,Kl="__reactHandles$"+Ai,Ql="__reactResources$"+Ai,As="__reactMarker$"+Ai;function Ao(e){delete e[ln],delete e[_n],delete e[Ga],delete e[Zl],delete e[Kl]}function ka(e){var a=e[ln];if(a)return a;for(var r=e.parentNode;r;){if(a=r[oa]||r[ln]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=F_(e);e!==null;){if(r=e[ln])return r;e=F_(e)}return a}e=r,r=e.parentNode}return null}function Xa(e){if(e=e[ln]||e[oa]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Rs(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function C(e){var a=e[Ql];return a||(a=e[Ql]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function X(e){e[As]=!0}var lt=new Set,it={};function Q(e,a){wt(e,a),wt(e+"Capture",a)}function wt(e,a){for(it[e]=a,e=0;e<a.length;e++)lt.add(a[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dt={},qt={};function Zt(e){return je.call(qt,e)?!0:je.call(Dt,e)?!1:It.test(e)?qt[e]=!0:(Dt[e]=!0,!1)}function ie(e,a,r){if(Zt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function oe(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function Vt(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ze(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ke(e,a,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return f.call(this)},set:function(S){r=""+S,p.call(this,S)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ce(e){if(!e._valueTracker){var a=Ze(e)?"checked":"value";e._valueTracker=Ke(e,a,""+e[a])}}function xn(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=Ze(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function Gt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function se(e){return e.replace(In,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function zn(e,a,r,l,f,p,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),a!=null?S==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+he(a)):e.value!==""+he(a)&&(e.value=""+he(a)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),a!=null?Ri(e,S,he(a)):r!=null?Ri(e,S,he(r)):l!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+he(A):e.removeAttribute("name")}function ti(e,a,r,l,f,p,S,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),a!=null||r!=null){if(!(p!=="submit"&&p!=="reset"||a!=null)){Ce(e);return}r=r!=null?""+he(r):"",a=a!=null?""+he(a):r,A||a===e.value||(e.value=a),e.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ce(e)}function Ri(e,a,r){a==="number"&&Gt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ei(e,a,r,l){if(e=e.options,a){a={};for(var f=0;f<r.length;f++)a["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=a.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),a=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}a!==null||e[f].disabled||(a=e[f])}a!==null&&(a.selected=!0)}}function Oe(e,a,r){if(a!=null&&(a=""+he(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+he(r):""}function cn(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(K(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=he(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ce(e)}function Vn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ci(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||un.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function la(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&r[f]!==l&&Ci(e,f,l)}else for(var p in a)a.hasOwnProperty(p)&&Ci(e,p,a[p])}function hr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $E=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return tT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ca(){}var vf=null;function _f(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,pr=null;function Rg(e){var a=Xa(e);if(a&&(e=a.stateNode)){var r=e[_n]||null;t:switch(e=a.stateNode,a.type){case"input":if(zn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+se(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var f=l[_n]||null;if(!f)throw Error(s(90));zn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&xn(l)}break t;case"textarea":Oe(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&ei(e,!!r.multiple,a,!1)}}}var xf=!1;function Cg(e,a,r){if(xf)return e(a,r);xf=!0;try{var l=e(a);return l}finally{if(xf=!1,(dr!==null||pr!==null)&&(zc(),dr&&(a=dr,e=pr,pr=dr=null,Rg(a),e)))for(a=0;a<e.length;a++)Rg(e[a])}}function Ro(e,a){var r=e.stateNode;if(r===null)return null;var l=r[_n]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=!1;if(ua)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{yf=!1}var Wa=null,Sf=null,$l=null;function wg(){if($l)return $l;var e,a=Sf,r=a.length,l,f="value"in Wa?Wa.value:Wa.textContent,p=f.length;for(e=0;e<r&&a[e]===f[e];e++);var S=r-e;for(l=1;l<=S&&a[r-l]===f[p-l];l++);return $l=f.slice(e,1<l?1-l:void 0)}function tc(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ec(){return!0}function Dg(){return!1}function qn(e){function a(r,l,f,p,S){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ec:Dg,this.isPropagationStopped=Dg,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),a}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=qn(Cs),wo=_({},Cs,{view:0,detail:0}),eT=qn(wo),Mf,Ef,Do,ic=_({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Do&&(Do&&e.type==="mousemove"?(Mf=e.screenX-Do.screenX,Ef=e.screenY-Do.screenY):Ef=Mf=0,Do=e),Mf)},movementY:function(e){return"movementY"in e?e.movementY:Ef}}),Ug=qn(ic),nT=_({},ic,{dataTransfer:0}),iT=qn(nT),aT=_({},wo,{relatedTarget:0}),Tf=qn(aT),sT=_({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),rT=qn(sT),oT=_({},Cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lT=qn(oT),cT=_({},Cs,{data:0}),Lg=qn(cT),uT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dT(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=hT[e])?!!a[e]:!1}function bf(){return dT}var pT=_({},wo,{key:function(e){if(e.key){var a=uT[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=tc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(e){return e.type==="keypress"?tc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mT=qn(pT),gT=_({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ng=qn(gT),vT=_({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),_T=qn(vT),xT=_({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),yT=qn(xT),ST=_({},ic,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),MT=qn(ST),ET=_({},Cs,{newState:0,oldState:0}),TT=qn(ET),bT=[9,13,27,32],Af=ua&&"CompositionEvent"in window,Uo=null;ua&&"documentMode"in document&&(Uo=document.documentMode);var AT=ua&&"TextEvent"in window&&!Uo,Pg=ua&&(!Af||Uo&&8<Uo&&11>=Uo),Og=" ",Fg=!1;function Bg(e,a){switch(e){case"keyup":return bT.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function RT(e,a){switch(e){case"compositionend":return Ig(a);case"keypress":return a.which!==32?null:(Fg=!0,Og);case"textInput":return e=a.data,e===Og&&Fg?null:e;default:return null}}function CT(e,a){if(mr)return e==="compositionend"||!Af&&Bg(e,a)?(e=wg(),$l=Sf=Wa=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Pg&&a.locale!=="ko"?null:a.data;default:return null}}var wT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zg(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!wT[e.type]:a==="textarea"}function Vg(e,a,r,l){dr?pr?pr.push(l):pr=[l]:dr=l,a=qc(a,"onChange"),0<a.length&&(r=new nc("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var Lo=null,No=null;function DT(e){M_(e,0)}function ac(e){var a=Rs(e);if(xn(a))return e}function Hg(e,a){if(e==="change")return a}var Gg=!1;if(ua){var Rf;if(ua){var Cf="oninput"in document;if(!Cf){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),Cf=typeof kg.oninput=="function"}Rf=Cf}else Rf=!1;Gg=Rf&&(!document.documentMode||9<document.documentMode)}function Xg(){Lo&&(Lo.detachEvent("onpropertychange",Wg),No=Lo=null)}function Wg(e){if(e.propertyName==="value"&&ac(No)){var a=[];Vg(a,No,e,_f(e)),Cg(DT,a)}}function UT(e,a,r){e==="focusin"?(Xg(),Lo=a,No=r,Lo.attachEvent("onpropertychange",Wg)):e==="focusout"&&Xg()}function LT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ac(No)}function NT(e,a){if(e==="click")return ac(a)}function PT(e,a){if(e==="input"||e==="change")return ac(a)}function OT(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ni=typeof Object.is=="function"?Object.is:OT;function Po(e,a){if(ni(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!je.call(a,f)||!ni(e[f],a[f]))return!1}return!0}function qg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yg(e,a){var r=qg(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=qg(r)}}function jg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?jg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Zg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Gt(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Gt(e.document)}return a}function wf(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var FT=ua&&"documentMode"in document&&11>=document.documentMode,gr=null,Df=null,Oo=null,Uf=!1;function Kg(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Uf||gr==null||gr!==Gt(l)||(l=gr,"selectionStart"in l&&wf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Oo&&Po(Oo,l)||(Oo=l,l=qc(Df,"onSelect"),0<l.length&&(a=new nc("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=gr)))}function ws(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var vr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},Lf={},Qg={};ua&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Ds(e){if(Lf[e])return Lf[e];if(!vr[e])return e;var a=vr[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in Qg)return Lf[e]=a[r];return e}var Jg=Ds("animationend"),$g=Ds("animationiteration"),t0=Ds("animationstart"),BT=Ds("transitionrun"),IT=Ds("transitionstart"),zT=Ds("transitioncancel"),e0=Ds("transitionend"),n0=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function wi(e,a){n0.set(e,a),Q(a,[e])}var sc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],_r=0,Pf=0;function rc(){for(var e=_r,a=Pf=_r=0;a<e;){var r=di[a];di[a++]=null;var l=di[a];di[a++]=null;var f=di[a];di[a++]=null;var p=di[a];if(di[a++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&i0(r,f,p)}}function oc(e,a,r,l){di[_r++]=e,di[_r++]=a,di[_r++]=r,di[_r++]=l,Pf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Of(e,a,r,l){return oc(e,a,r,l),lc(e)}function Us(e,a){return oc(e,null,null,a),lc(e)}function i0(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,p=e.return;p!==null;)p.childLanes|=r,l=p.alternate,l!==null&&(l.childLanes|=r),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&a!==null&&(f=31-Lt(r),e=p.hiddenUpdates,l=e[f],l===null?e[f]=[a]:l.push(a),a.lane=r|536870912),p):null}function lc(e){if(50<il)throw il=0,Xh=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var xr={};function VT(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,a,r,l){return new VT(e,a,r,l)}function Ff(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,a){var r=e.alternate;return r===null?(r=ii(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function a0(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function cc(e,a,r,l,f,p){var S=0;if(l=e,typeof e=="function")Ff(e)&&(S=1);else if(typeof e=="string")S=Wb(e,r,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ii(31,r,a,f),e.elementType=L,e.lanes=p,e;case R:return Ls(r.children,f,p,a);case M:S=8,f|=24;break;case x:return e=ii(12,r,a,f|2),e.elementType=x,e.lanes=p,e;case B:return e=ii(13,r,a,f),e.elementType=B,e.lanes=p,e;case z:return e=ii(19,r,a,f),e.elementType=z,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case w:S=9;break t;case U:S=11;break t;case P:S=14;break t;case b:S=16,l=null;break t}S=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=ii(S,r,a,f),a.elementType=e,a.type=l,a.lanes=p,a}function Ls(e,a,r,l){return e=ii(7,e,l,a),e.lanes=r,e}function Bf(e,a,r){return e=ii(6,e,null,a),e.lanes=r,e}function s0(e){var a=ii(18,null,null,0);return a.stateNode=e,a}function If(e,a,r){return a=ii(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var r0=new WeakMap;function pi(e,a){if(typeof e=="object"&&e!==null){var r=r0.get(e);return r!==void 0?r:(a={value:e,source:a,stack:G(a)},r0.set(e,a),a)}return{value:e,source:a,stack:G(a)}}var yr=[],Sr=0,uc=null,Fo=0,mi=[],gi=0,qa=null,Xi=1,Wi="";function ha(e,a){yr[Sr++]=Fo,yr[Sr++]=uc,uc=e,Fo=a}function o0(e,a,r){mi[gi++]=Xi,mi[gi++]=Wi,mi[gi++]=qa,qa=e;var l=Xi;e=Wi;var f=32-Lt(l)-1;l&=~(1<<f),r+=1;var p=32-Lt(a)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Xi=1<<32-Lt(a)+f|r<<f|l,Wi=p+e}else Xi=1<<p|r<<f|l,Wi=e}function zf(e){e.return!==null&&(ha(e,1),o0(e,1,0))}function Vf(e){for(;e===uc;)uc=yr[--Sr],yr[Sr]=null,Fo=yr[--Sr],yr[Sr]=null;for(;e===qa;)qa=mi[--gi],mi[gi]=null,Wi=mi[--gi],mi[gi]=null,Xi=mi[--gi],mi[gi]=null}function l0(e,a){mi[gi++]=Xi,mi[gi++]=Wi,mi[gi++]=qa,Xi=a.id,Wi=a.overflow,qa=e}var Rn=null,qe=null,Me=!1,Ya=null,vi=!1,Hf=Error(s(519));function ja(e){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bo(pi(a,e)),Hf}function c0(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[ln]=e,a[_n]=l,r){case"dialog":_e("cancel",a),_e("close",a);break;case"iframe":case"object":case"embed":_e("load",a);break;case"video":case"audio":for(r=0;r<sl.length;r++)_e(sl[r],a);break;case"source":_e("error",a);break;case"img":case"image":case"link":_e("error",a),_e("load",a);break;case"details":_e("toggle",a);break;case"input":_e("invalid",a),ti(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":_e("invalid",a);break;case"textarea":_e("invalid",a),cn(a,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||A_(a.textContent,r)?(l.popover!=null&&(_e("beforetoggle",a),_e("toggle",a)),l.onScroll!=null&&_e("scroll",a),l.onScrollEnd!=null&&_e("scrollend",a),l.onClick!=null&&(a.onclick=ca),a=!0):a=!1,a||ja(e,!0)}function u0(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Rn=Rn.return}}function Mr(e){if(e!==Rn)return!1;if(!Me)return u0(e),Me=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||sd(e.type,e.memoizedProps)),r=!r),r&&qe&&ja(e),u0(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=O_(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=O_(e)}else a===27?(a=qe,ls(e.type)?(e=ud,ud=null,qe=e):qe=a):qe=Rn?xi(e.stateNode.nextSibling):null;return!0}function Ns(){qe=Rn=null,Me=!1}function Gf(){var e=Ya;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Ya=null),e}function Bo(e){Ya===null?Ya=[e]:Ya.push(e)}var kf=F(null),Ps=null,da=null;function Za(e,a,r){gt(kf,a._currentValue),a._currentValue=r}function pa(e){e._currentValue=kf.current,j(kf)}function Xf(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function Wf(e,a,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;t:for(;p!==null;){var A=p;p=f;for(var H=0;H<a.length;H++)if(A.context===a[H]){p.lanes|=r,A=p.alternate,A!==null&&(A.lanes|=r),Xf(p.return,r,e),l||(S=null);break t}p=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(s(341));S.lanes|=r,p=S.alternate,p!==null&&(p.lanes|=r),Xf(S,r,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Er(e,a,r,l){e=null;for(var f=a,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=f.type;ni(f.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(f===_t.current){if(S=f.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ul):e=[ul])}f=f.return}e!==null&&Wf(a,e,r,l),a.flags|=262144}function fc(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Os(e){Ps=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return f0(Ps,e)}function hc(e,a){return Ps===null&&Os(e),f0(e,a)}function f0(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},da===null){if(e===null)throw Error(s(308));da=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else da=da.next=a;return r}var HT=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},GT=i.unstable_scheduleCallback,kT=i.unstable_NormalPriority,fn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new HT,data:new Map,refCount:0}}function Io(e){e.refCount--,e.refCount===0&&GT(kT,function(){e.controller.abort()})}var zo=null,Yf=0,Tr=0,br=null;function XT(e,a){if(zo===null){var r=zo=[];Yf=0,Tr=Kh(),br={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Yf++,a.then(h0,h0),a}function h0(){if(--Yf===0&&zo!==null){br!==null&&(br.status="fulfilled");var e=zo;zo=null,Tr=0,br=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function WT(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<r.length;f++)(0,r[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var d0=O.S;O.S=function(e,a){Kv=T(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&XT(e,a),d0!==null&&d0(e,a)};var Fs=F(null);function jf(){var e=Fs.current;return e!==null?e:We.pooledCache}function dc(e,a){a===null?gt(Fs,Fs.current):gt(Fs,a.pool)}function p0(){var e=jf();return e===null?null:{parent:fn._currentValue,pool:e}}var Ar=Error(s(460)),Zf=Error(s(474)),pc=Error(s(542)),mc={then:function(){}};function m0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function g0(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(ca,ca),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,_0(e),e;default:if(typeof a.status=="string")a.then(ca,ca);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,_0(e),e}throw Is=a,Ar}}function Bs(e){try{var a=e._init;return a(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Is=r,Ar):r}}var Is=null;function v0(){if(Is===null)throw Error(s(459));var e=Is;return Is=null,e}function _0(e){if(e===Ar||e===pc)throw Error(s(483))}var Rr=null,Vo=0;function gc(e){var a=Vo;return Vo+=1,Rr===null&&(Rr=[]),g0(Rr,e,a)}function Ho(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function vc(e,a){throw a.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function x0(e){function a(Z,k){if(e){var J=Z.deletions;J===null?(Z.deletions=[k],Z.flags|=16):J.push(k)}}function r(Z,k){if(!e)return null;for(;k!==null;)a(Z,k),k=k.sibling;return null}function l(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function f(Z,k){return Z=fa(Z,k),Z.index=0,Z.sibling=null,Z}function p(Z,k,J){return Z.index=J,e?(J=Z.alternate,J!==null?(J=J.index,J<k?(Z.flags|=67108866,k):J):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,J,mt){return k===null||k.tag!==6?(k=Bf(J,Z.mode,mt),k.return=Z,k):(k=f(k,J),k.return=Z,k)}function H(Z,k,J,mt){var Jt=J.type;return Jt===R?dt(Z,k,J.props.children,mt,J.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===b&&Bs(Jt)===k.type)?(k=f(k,J.props),Ho(k,J),k.return=Z,k):(k=cc(J.type,J.key,J.props,null,Z.mode,mt),Ho(k,J),k.return=Z,k)}function tt(Z,k,J,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=If(J,Z.mode,mt),k.return=Z,k):(k=f(k,J.children||[]),k.return=Z,k)}function dt(Z,k,J,mt,Jt){return k===null||k.tag!==7?(k=Ls(J,Z.mode,mt,Jt),k.return=Z,k):(k=f(k,J),k.return=Z,k)}function vt(Z,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Bf(""+k,Z.mode,J),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return J=cc(k.type,k.key,k.props,null,Z.mode,J),Ho(J,k),J.return=Z,J;case E:return k=If(k,Z.mode,J),k.return=Z,k;case b:return k=Bs(k),vt(Z,k,J)}if(K(k)||Y(k))return k=Ls(k,Z.mode,J,null),k.return=Z,k;if(typeof k.then=="function")return vt(Z,gc(k),J);if(k.$$typeof===D)return vt(Z,hc(Z,k),J);vc(Z,k)}return null}function at(Z,k,J,mt){var Jt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Jt!==null?null:A(Z,k,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===Jt?H(Z,k,J,mt):null;case E:return J.key===Jt?tt(Z,k,J,mt):null;case b:return J=Bs(J),at(Z,k,J,mt)}if(K(J)||Y(J))return Jt!==null?null:dt(Z,k,J,mt,null);if(typeof J.then=="function")return at(Z,k,gc(J),mt);if(J.$$typeof===D)return at(Z,k,hc(Z,J),mt);vc(Z,J)}return null}function ct(Z,k,J,mt,Jt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(J)||null,A(k,Z,""+mt,Jt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return Z=Z.get(mt.key===null?J:mt.key)||null,H(k,Z,mt,Jt);case E:return Z=Z.get(mt.key===null?J:mt.key)||null,tt(k,Z,mt,Jt);case b:return mt=Bs(mt),ct(Z,k,J,mt,Jt)}if(K(mt)||Y(mt))return Z=Z.get(J)||null,dt(k,Z,mt,Jt,null);if(typeof mt.then=="function")return ct(Z,k,J,gc(mt),Jt);if(mt.$$typeof===D)return ct(Z,k,J,hc(k,mt),Jt);vc(k,mt)}return null}function Ht(Z,k,J,mt){for(var Jt=null,we=null,jt=k,de=k=0,Se=null;jt!==null&&de<J.length;de++){jt.index>de?(Se=jt,jt=null):Se=jt.sibling;var De=at(Z,jt,J[de],mt);if(De===null){jt===null&&(jt=Se);break}e&&jt&&De.alternate===null&&a(Z,jt),k=p(De,k,de),we===null?Jt=De:we.sibling=De,we=De,jt=Se}if(de===J.length)return r(Z,jt),Me&&ha(Z,de),Jt;if(jt===null){for(;de<J.length;de++)jt=vt(Z,J[de],mt),jt!==null&&(k=p(jt,k,de),we===null?Jt=jt:we.sibling=jt,we=jt);return Me&&ha(Z,de),Jt}for(jt=l(jt);de<J.length;de++)Se=ct(jt,Z,de,J[de],mt),Se!==null&&(e&&Se.alternate!==null&&jt.delete(Se.key===null?de:Se.key),k=p(Se,k,de),we===null?Jt=Se:we.sibling=Se,we=Se);return e&&jt.forEach(function(ds){return a(Z,ds)}),Me&&ha(Z,de),Jt}function te(Z,k,J,mt){if(J==null)throw Error(s(151));for(var Jt=null,we=null,jt=k,de=k=0,Se=null,De=J.next();jt!==null&&!De.done;de++,De=J.next()){jt.index>de?(Se=jt,jt=null):Se=jt.sibling;var ds=at(Z,jt,De.value,mt);if(ds===null){jt===null&&(jt=Se);break}e&&jt&&ds.alternate===null&&a(Z,jt),k=p(ds,k,de),we===null?Jt=ds:we.sibling=ds,we=ds,jt=Se}if(De.done)return r(Z,jt),Me&&ha(Z,de),Jt;if(jt===null){for(;!De.done;de++,De=J.next())De=vt(Z,De.value,mt),De!==null&&(k=p(De,k,de),we===null?Jt=De:we.sibling=De,we=De);return Me&&ha(Z,de),Jt}for(jt=l(jt);!De.done;de++,De=J.next())De=ct(jt,Z,de,De.value,mt),De!==null&&(e&&De.alternate!==null&&jt.delete(De.key===null?de:De.key),k=p(De,k,de),we===null?Jt=De:we.sibling=De,we=De);return e&&jt.forEach(function(nA){return a(Z,nA)}),Me&&ha(Z,de),Jt}function Ge(Z,k,J,mt){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var Jt=J.key;k!==null;){if(k.key===Jt){if(Jt=J.type,Jt===R){if(k.tag===7){r(Z,k.sibling),mt=f(k,J.props.children),mt.return=Z,Z=mt;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===b&&Bs(Jt)===k.type){r(Z,k.sibling),mt=f(k,J.props),Ho(mt,J),mt.return=Z,Z=mt;break t}r(Z,k);break}else a(Z,k);k=k.sibling}J.type===R?(mt=Ls(J.props.children,Z.mode,mt,J.key),mt.return=Z,Z=mt):(mt=cc(J.type,J.key,J.props,null,Z.mode,mt),Ho(mt,J),mt.return=Z,Z=mt)}return S(Z);case E:t:{for(Jt=J.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){r(Z,k.sibling),mt=f(k,J.children||[]),mt.return=Z,Z=mt;break t}else{r(Z,k);break}else a(Z,k);k=k.sibling}mt=If(J,Z.mode,mt),mt.return=Z,Z=mt}return S(Z);case b:return J=Bs(J),Ge(Z,k,J,mt)}if(K(J))return Ht(Z,k,J,mt);if(Y(J)){if(Jt=Y(J),typeof Jt!="function")throw Error(s(150));return J=Jt.call(J),te(Z,k,J,mt)}if(typeof J.then=="function")return Ge(Z,k,gc(J),mt);if(J.$$typeof===D)return Ge(Z,k,hc(Z,J),mt);vc(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(r(Z,k.sibling),mt=f(k,J),mt.return=Z,Z=mt):(r(Z,k),mt=Bf(J,Z.mode,mt),mt.return=Z,Z=mt),S(Z)):r(Z,k)}return function(Z,k,J,mt){try{Vo=0;var Jt=Ge(Z,k,J,mt);return Rr=null,Jt}catch(jt){if(jt===Ar||jt===pc)throw jt;var we=ii(29,jt,null,Z.mode);return we.lanes=mt,we.return=Z,we}}}var zs=x0(!0),y0=x0(!1),Ka=!1;function Kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qf(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=lc(e),i0(e,null,r),a}return oc(e,l,a,r),lc(e)}function Go(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,lr(e,r)}}function Jf(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,r=r.next}while(r!==null);p===null?f=p=a:p=p.next=a}else f=p=a;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var $f=!1;function ko(){if($f){var e=br;if(e!==null)throw e}}function Xo(e,a,r,l){$f=!1;var f=e.updateQueue;Ka=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var H=A,tt=H.next;H.next=null,S===null?p=tt:S.next=tt,S=H;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==S&&(A===null?dt.firstBaseUpdate=tt:A.next=tt,dt.lastBaseUpdate=H))}if(p!==null){var vt=f.baseState;S=0,dt=tt=H=null,A=p;do{var at=A.lane&-536870913,ct=at!==A.lane;if(ct?(ye&at)===at:(l&at)===at){at!==0&&at===Tr&&($f=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=e,te=A;at=a;var Ge=r;switch(te.tag){case 1:if(Ht=te.payload,typeof Ht=="function"){vt=Ht.call(Ge,vt,at);break t}vt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=te.payload,at=typeof Ht=="function"?Ht.call(Ge,vt,at):Ht,at==null)break t;vt=_({},vt,at);break t;case 2:Ka=!0}}at=A.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=f.callbacks,ct===null?f.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(tt=dt=ct,H=vt):dt=dt.next=ct,S|=at;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,f.lastBaseUpdate=ct,f.shared.pending=null}}while(!0);dt===null&&(H=vt),f.baseState=H,f.firstBaseUpdate=tt,f.lastBaseUpdate=dt,p===null&&(f.shared.lanes=0),is|=S,e.lanes=S,e.memoizedState=vt}}function S0(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function M0(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)S0(r[e],a)}var Cr=F(null),_c=F(0);function E0(e,a){e=Ea,gt(_c,e),gt(Cr,a),Ea=e|a.baseLanes}function th(){gt(_c,Ea),gt(Cr,Cr.current)}function eh(){Ea=_c.current,j(Cr),j(_c)}var ai=F(null),_i=null;function $a(e){var a=e.alternate;gt(sn,sn.current&1),gt(ai,e),_i===null&&(a===null||Cr.current!==null||a.memoizedState!==null)&&(_i=e)}function nh(e){gt(sn,sn.current),gt(ai,e),_i===null&&(_i=e)}function T0(e){e.tag===22?(gt(sn,sn.current),gt(ai,e),_i===null&&(_i=e)):ts()}function ts(){gt(sn,sn.current),gt(ai,ai.current)}function si(e){j(ai),_i===e&&(_i=null),j(sn)}var sn=F(0);function xc(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||ld(r)||cd(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ma=0,ue=null,Ve=null,hn=null,yc=!1,wr=!1,Vs=!1,Sc=0,Wo=0,Dr=null,qT=0;function en(){throw Error(s(321))}function ih(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!ni(e[r],a[r]))return!1;return!0}function ah(e,a,r,l,f,p){return ma=p,ue=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,O.H=e===null||e.memoizedState===null?ov:xh,Vs=!1,p=r(l,f),Vs=!1,wr&&(p=A0(a,r,l,f)),b0(e),p}function b0(e){O.H=jo;var a=Ve!==null&&Ve.next!==null;if(ma=0,hn=Ve=ue=null,yc=!1,Wo=0,Dr=null,a)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&fc(e)&&(dn=!0))}function A0(e,a,r,l){ue=e;var f=0;do{if(wr&&(Dr=null),Wo=0,wr=!1,25<=f)throw Error(s(301));if(f+=1,hn=Ve=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}O.H=lv,p=a(r,l)}while(wr);return p}function YT(){var e=O.H,a=e.useState()[0];return a=typeof a.then=="function"?qo(a):a,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(ue.flags|=1024),a}function sh(){var e=Sc!==0;return Sc=0,e}function rh(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function oh(e){if(yc){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}yc=!1}ma=0,hn=Ve=ue=null,wr=!1,Wo=Sc=0,Dr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ue.memoizedState=hn=e:hn=hn.next=e,hn}function rn(){if(Ve===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var a=hn===null?ue.memoizedState:hn.next;if(a!==null)hn=a,Ve=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},hn===null?ue.memoizedState=hn=e:hn=hn.next=e}return hn}function Mc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(e){var a=Wo;return Wo+=1,Dr===null&&(Dr=[]),e=g0(Dr,e,a),a=ue,(hn===null?a.memoizedState:hn.next)===null&&(a=a.alternate,O.H=a===null||a.memoizedState===null?ov:xh),e}function Ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qo(e);if(e.$$typeof===D)return Cn(e)}throw Error(s(438,String(e)))}function lh(e){var a=null,r=ue.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Mc(),ue.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=ot;return a.index++,r}function ga(e,a){return typeof a=="function"?a(e):a}function Tc(e){var a=rn();return ch(a,Ve,e)}function ch(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var f=e.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}a.baseQueue=f=p,l.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{a=f.next;var A=S=null,H=null,tt=a,dt=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(ye&vt)===vt:(ma&vt)===vt){var at=tt.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Tr&&(dt=!0);else if((ma&at)===at){tt=tt.next,at===Tr&&(dt=!0);continue}else vt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(A=H=vt,S=p):H=H.next=vt,ue.lanes|=at,is|=at;vt=tt.action,Vs&&r(p,vt),p=tt.hasEagerState?tt.eagerState:r(p,vt)}else at={lane:vt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(A=H=at,S=p):H=H.next=at,ue.lanes|=vt,is|=vt;tt=tt.next}while(tt!==null&&tt!==a);if(H===null?S=p:H.next=A,!ni(p,e.memoizedState)&&(dn=!0,dt&&(r=br,r!==null)))throw r;e.memoizedState=p,e.baseState=S,e.baseQueue=H,l.lastRenderedState=p}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function uh(e){var a=rn(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,p=a.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do p=e(p,S.action),S=S.next;while(S!==f);ni(p,a.memoizedState)||(dn=!0),a.memoizedState=p,a.baseQueue===null&&(a.baseState=p),r.lastRenderedState=p}return[p,l]}function R0(e,a,r){var l=ue,f=rn(),p=Me;if(p){if(r===void 0)throw Error(s(407));r=r()}else r=a();var S=!ni((Ve||f).memoizedState,r);if(S&&(f.memoizedState=r,dn=!0),f=f.queue,dh(D0.bind(null,l,f,e),[e]),f.getSnapshot!==a||S||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,Ur(9,{destroy:void 0},w0.bind(null,l,f,r,a),null),We===null)throw Error(s(349));p||(ma&127)!==0||C0(l,a,r)}return r}function C0(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=ue.updateQueue,a===null?(a=Mc(),ue.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function w0(e,a,r,l){a.value=r,a.getSnapshot=l,U0(a)&&L0(e)}function D0(e,a,r){return r(function(){U0(a)&&L0(e)})}function U0(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!ni(e,r)}catch{return!0}}function L0(e){var a=Us(e,2);a!==null&&Qn(a,e,2)}function fh(e){var a=Hn();if(typeof e=="function"){var r=e;if(e=r(),Vs){Pt(!0);try{r()}finally{Pt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},a}function N0(e,a,r,l){return e.baseState=r,ch(e,Ve,typeof l=="function"?l:ga)}function jT(e,a,r,l,f){if(Rc(e))throw Error(s(485));if(e=a.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};O.T!==null?r(!0):p.isTransition=!1,l(p),r=a.pending,r===null?(p.next=a.pending=p,P0(a,p)):(p.next=r.next,a.pending=r.next=p)}}function P0(e,a){var r=a.action,l=a.payload,f=e.state;if(a.isTransition){var p=O.T,S={};O.T=S;try{var A=r(f,l),H=O.S;H!==null&&H(S,A),O0(e,a,A)}catch(tt){hh(e,a,tt)}finally{p!==null&&S.types!==null&&(p.types=S.types),O.T=p}}else try{p=r(f,l),O0(e,a,p)}catch(tt){hh(e,a,tt)}}function O0(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){F0(e,a,l)},function(l){return hh(e,a,l)}):F0(e,a,r)}function F0(e,a,r){a.status="fulfilled",a.value=r,B0(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,P0(e,r)))}function hh(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,B0(a),a=a.next;while(a!==l)}e.action=null}function B0(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function I0(e,a){return a}function z0(e,a){if(Me){var r=We.formState;if(r!==null){t:{var l=ue;if(Me){if(qe){e:{for(var f=qe,p=vi;f.nodeType!==8;){if(!p){f=null;break e}if(f=xi(f.nextSibling),f===null){f=null;break e}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){qe=xi(f.nextSibling),l=f.data==="F!";break t}}ja(l)}l=!1}l&&(a=r[0])}}return r=Hn(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I0,lastRenderedState:a},r.queue=l,r=av.bind(null,ue,l),l.dispatch=r,l=fh(!1),p=_h.bind(null,ue,!1,l.queue),l=Hn(),f={state:a,dispatch:null,action:e,pending:null},l.queue=f,r=jT.bind(null,ue,f,p,r),f.dispatch=r,l.memoizedState=e,[a,r,!1]}function V0(e){var a=rn();return H0(a,Ve,e)}function H0(e,a,r){if(a=ch(e,a,I0)[0],e=Tc(ga)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=qo(a)}catch(S){throw S===Ar?pc:S}else l=a;a=rn();var f=a.queue,p=f.dispatch;return r!==a.memoizedState&&(ue.flags|=2048,Ur(9,{destroy:void 0},ZT.bind(null,f,r),null)),[l,p,e]}function ZT(e,a){e.action=a}function G0(e){var a=rn(),r=Ve;if(r!==null)return H0(a,r,e);rn(),a=a.memoizedState,r=rn();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function Ur(e,a,r,l){return e={tag:e,create:r,deps:l,inst:a,next:null},a=ue.updateQueue,a===null&&(a=Mc(),ue.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function k0(){return rn().memoizedState}function bc(e,a,r,l){var f=Hn();ue.flags|=e,f.memoizedState=Ur(1|a,{destroy:void 0},r,l===void 0?null:l)}function Ac(e,a,r,l){var f=rn();l=l===void 0?null:l;var p=f.memoizedState.inst;Ve!==null&&l!==null&&ih(l,Ve.memoizedState.deps)?f.memoizedState=Ur(a,p,r,l):(ue.flags|=e,f.memoizedState=Ur(1|a,p,r,l))}function X0(e,a){bc(8390656,8,e,a)}function dh(e,a){Ac(2048,8,e,a)}function KT(e){ue.flags|=4;var a=ue.updateQueue;if(a===null)a=Mc(),ue.updateQueue=a,a.events=[e];else{var r=a.events;r===null?a.events=[e]:r.push(e)}}function W0(e){var a=rn().memoizedState;return KT({ref:a,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function q0(e,a){return Ac(4,2,e,a)}function Y0(e,a){return Ac(4,4,e,a)}function j0(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Z0(e,a,r){r=r!=null?r.concat([e]):null,Ac(4,4,j0.bind(null,a,e),r)}function ph(){}function K0(e,a){var r=rn();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&ih(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function Q0(e,a){var r=rn();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&ih(a,l[1]))return l[0];if(l=e(),Vs){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[l,a],l}function mh(e,a,r){return r===void 0||(ma&1073741824)!==0&&(ye&261930)===0?e.memoizedState=a:(e.memoizedState=r,e=Jv(),ue.lanes|=e,is|=e,r)}function J0(e,a,r,l){return ni(r,a)?r:Cr.current!==null?(e=mh(e,r,l),ni(e,a)||(dn=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(ye&261930)===0?(dn=!0,e.memoizedState=r):(e=Jv(),ue.lanes|=e,is|=e,a)}function $0(e,a,r,l,f){var p=I.p;I.p=p!==0&&8>p?p:8;var S=O.T,A={};O.T=A,_h(e,!1,a,r);try{var H=f(),tt=O.S;if(tt!==null&&tt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=WT(H,l);Yo(e,a,dt,li(e))}else Yo(e,a,l,li(e))}catch(vt){Yo(e,a,{then:function(){},status:"rejected",reason:vt},li())}finally{I.p=p,S!==null&&A.types!==null&&(S.types=A.types),O.T=S}}function QT(){}function gh(e,a,r,l){if(e.tag!==5)throw Error(s(476));var f=tv(e).queue;$0(e,f,a,et,r===null?QT:function(){return ev(e),r(l)})}function tv(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:et},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function ev(e){var a=tv(e);a.next===null&&(a=e.alternate.memoizedState),Yo(e,a.next.queue,{},li())}function vh(){return Cn(ul)}function nv(){return rn().memoizedState}function iv(){return rn().memoizedState}function JT(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=li();e=Qa(r);var l=Ja(a,e,r);l!==null&&(Qn(l,a,r),Go(l,a,r)),a={cache:qf()},e.payload=a;return}a=a.return}}function $T(e,a,r){var l=li();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rc(e)?sv(a,r):(r=Of(e,a,r,l),r!==null&&(Qn(r,e,l),rv(r,a,l)))}function av(e,a,r){var l=li();Yo(e,a,r,l)}function Yo(e,a,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Rc(e))sv(a,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=a.lastRenderedReducer,p!==null))try{var S=a.lastRenderedState,A=p(S,r);if(f.hasEagerState=!0,f.eagerState=A,ni(A,S))return oc(e,a,f,0),We===null&&rc(),!1}catch{}if(r=Of(e,a,f,l),r!==null)return Qn(r,e,l),rv(r,a,l),!0}return!1}function _h(e,a,r,l){if(l={lane:2,revertLane:Kh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Rc(e)){if(a)throw Error(s(479))}else a=Of(e,r,l,2),a!==null&&Qn(a,e,2)}function Rc(e){var a=e.alternate;return e===ue||a!==null&&a===ue}function sv(e,a){wr=yc=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function rv(e,a,r){if((r&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,lr(e,r)}}var jo={readContext:Cn,use:Ec,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};jo.useEffectEvent=en;var ov={readContext:Cn,use:Ec,useCallback:function(e,a){return Hn().memoizedState=[e,a===void 0?null:a],e},useContext:Cn,useEffect:X0,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,bc(4194308,4,j0.bind(null,a,e),r)},useLayoutEffect:function(e,a){return bc(4194308,4,e,a)},useInsertionEffect:function(e,a){bc(4,2,e,a)},useMemo:function(e,a){var r=Hn();a=a===void 0?null:a;var l=e();if(Vs){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=Hn();if(r!==void 0){var f=r(a);if(Vs){Pt(!0);try{r(a)}finally{Pt(!1)}}}else f=a;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=$T.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var a=Hn();return e={current:e},a.memoizedState=e},useState:function(e){e=fh(e);var a=e.queue,r=av.bind(null,ue,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:ph,useDeferredValue:function(e,a){var r=Hn();return mh(r,e,a)},useTransition:function(){var e=fh(!1);return e=$0.bind(null,ue,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=ue,f=Hn();if(Me){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),We===null)throw Error(s(349));(ye&127)!==0||C0(l,a,r)}f.memoizedState=r;var p={value:r,getSnapshot:a};return f.queue=p,X0(D0.bind(null,l,p,e),[e]),l.flags|=2048,Ur(9,{destroy:void 0},w0.bind(null,l,p,r,a),null),r},useId:function(){var e=Hn(),a=We.identifierPrefix;if(Me){var r=Wi,l=Xi;r=(l&~(1<<32-Lt(l)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Sc++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=qT++,a="_"+a+"r_"+r.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:vh,useFormState:z0,useActionState:z0,useOptimistic:function(e){var a=Hn();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=_h.bind(null,ue,!0,r),r.dispatch=a,[e,a]},useMemoCache:lh,useCacheRefresh:function(){return Hn().memoizedState=JT.bind(null,ue)},useEffectEvent:function(e){var a=Hn(),r={impl:e};return a.memoizedState=r,function(){if((Ne&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},xh={readContext:Cn,use:Ec,useCallback:K0,useContext:Cn,useEffect:dh,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:Y0,useMemo:Q0,useReducer:Tc,useRef:k0,useState:function(){return Tc(ga)},useDebugValue:ph,useDeferredValue:function(e,a){var r=rn();return J0(r,Ve.memoizedState,e,a)},useTransition:function(){var e=Tc(ga)[0],a=rn().memoizedState;return[typeof e=="boolean"?e:qo(e),a]},useSyncExternalStore:R0,useId:nv,useHostTransitionStatus:vh,useFormState:V0,useActionState:V0,useOptimistic:function(e,a){var r=rn();return N0(r,Ve,e,a)},useMemoCache:lh,useCacheRefresh:iv};xh.useEffectEvent=W0;var lv={readContext:Cn,use:Ec,useCallback:K0,useContext:Cn,useEffect:dh,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:Y0,useMemo:Q0,useReducer:uh,useRef:k0,useState:function(){return uh(ga)},useDebugValue:ph,useDeferredValue:function(e,a){var r=rn();return Ve===null?mh(r,e,a):J0(r,Ve.memoizedState,e,a)},useTransition:function(){var e=uh(ga)[0],a=rn().memoizedState;return[typeof e=="boolean"?e:qo(e),a]},useSyncExternalStore:R0,useId:nv,useHostTransitionStatus:vh,useFormState:G0,useActionState:G0,useOptimistic:function(e,a){var r=rn();return Ve!==null?N0(r,Ve,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:lh,useCacheRefresh:iv};lv.useEffectEvent=W0;function yh(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:_({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Sh={enqueueSetState:function(e,a,r){e=e._reactInternals;var l=li(),f=Qa(l);f.payload=a,r!=null&&(f.callback=r),a=Ja(e,f,l),a!==null&&(Qn(a,e,l),Go(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=li(),f=Qa(l);f.tag=1,f.payload=a,r!=null&&(f.callback=r),a=Ja(e,f,l),a!==null&&(Qn(a,e,l),Go(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=li(),l=Qa(r);l.tag=2,a!=null&&(l.callback=a),a=Ja(e,l,r),a!==null&&(Qn(a,e,r),Go(a,e,r))}};function cv(e,a,r,l,f,p,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,S):a.prototype&&a.prototype.isPureReactComponent?!Po(r,l)||!Po(f,p):!0}function uv(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&Sh.enqueueReplaceState(a,a.state,null)}function Hs(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=_({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function fv(e){sc(e)}function hv(e){console.error(e)}function dv(e){sc(e)}function Cc(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function pv(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Mh(e,a,r){return r=Qa(r),r.tag=3,r.payload={element:null},r.callback=function(){Cc(e,a)},r}function mv(e){return e=Qa(e),e.tag=3,e}function gv(e,a,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;e.payload=function(){return f(p)},e.callback=function(){pv(a,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){pv(a,r,l),typeof f!="function"&&(as===null?as=new Set([this]):as.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function tb(e,a,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&Er(a,r,f,!0),r=ai.current,r!==null){switch(r.tag){case 31:case 13:return _i===null?Vc():r.alternate===null&&nn===0&&(nn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===mc?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),Yh(e,l,f)),!1;case 22:return r.flags|=65536,l===mc?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),Yh(e,l,f)),!1}throw Error(s(435,r.tag))}return Yh(e,l,f),Vc(),!1}if(Me)return a=ai.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==Hf&&(e=Error(s(422),{cause:l}),Bo(pi(e,r)))):(l!==Hf&&(a=Error(s(423),{cause:l}),Bo(pi(a,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=pi(l,r),f=Mh(e.stateNode,l,f),Jf(e,f),nn!==4&&(nn=2)),!1;var p=Error(s(520),{cause:l});if(p=pi(p,r),nl===null?nl=[p]:nl.push(p),nn!==4&&(nn=2),a===null)return!0;l=pi(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=Mh(r.stateNode,l,e),Jf(r,e),!1;case 1:if(a=r.type,p=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(as===null||!as.has(p))))return r.flags|=65536,f&=-f,r.lanes|=f,f=mv(f),gv(f,e,r,l),Jf(r,f),!1}r=r.return}while(r!==null);return!1}var Eh=Error(s(461)),dn=!1;function wn(e,a,r,l){a.child=e===null?y0(a,null,r,l):zs(a,e.child,r,l)}function vv(e,a,r,l,f){r=r.render;var p=a.ref;if("ref"in l){var S={};for(var A in l)A!=="ref"&&(S[A]=l[A])}else S=l;return Os(a),l=ah(e,a,r,S,p,f),A=sh(),e!==null&&!dn?(rh(e,a,f),va(e,a,f)):(Me&&A&&zf(a),a.flags|=1,wn(e,a,l,f),a.child)}function _v(e,a,r,l,f){if(e===null){var p=r.type;return typeof p=="function"&&!Ff(p)&&p.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=p,xv(e,a,p,l,f)):(e=cc(r.type,null,l,a,a.mode,f),e.ref=a.ref,e.return=a,a.child=e)}if(p=e.child,!Uh(e,f)){var S=p.memoizedProps;if(r=r.compare,r=r!==null?r:Po,r(S,l)&&e.ref===a.ref)return va(e,a,f)}return a.flags|=1,e=fa(p,l),e.ref=a.ref,e.return=a,a.child=e}function xv(e,a,r,l,f){if(e!==null){var p=e.memoizedProps;if(Po(p,l)&&e.ref===a.ref)if(dn=!1,a.pendingProps=l=p,Uh(e,f))(e.flags&131072)!==0&&(dn=!0);else return a.lanes=e.lanes,va(e,a,f)}return Th(e,a,r,l,f)}function yv(e,a,r,l){var f=l.children,p=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(p=p!==null?p.baseLanes|r:r,e!==null){for(l=a.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,a.child=null;return Sv(e,a,p,r,l)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&dc(a,p!==null?p.cachePool:null),p!==null?E0(a,p):th(),T0(a);else return l=a.lanes=536870912,Sv(e,a,p!==null?p.baseLanes|r:r,r,l)}else p!==null?(dc(a,p.cachePool),E0(a,p),ts(),a.memoizedState=null):(e!==null&&dc(a,null),th(),ts());return wn(e,a,f,r),a.child}function Zo(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Sv(e,a,r,l,f){var p=jf();return p=p===null?null:{parent:fn._currentValue,pool:p},a.memoizedState={baseLanes:r,cachePool:p},e!==null&&dc(a,null),th(),T0(a),e!==null&&Er(e,a,l,!0),a.childLanes=f,null}function wc(e,a){return a=Uc({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Mv(e,a,r){return zs(a,e.child,null,r),e=wc(a,a.pendingProps),e.flags|=2,si(a),a.memoizedState=null,e}function eb(e,a,r){var l=a.pendingProps,f=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Me){if(l.mode==="hidden")return e=wc(a,l),a.lanes=536870912,Zo(null,e);if(nh(a),(e=qe)?(e=P_(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},r=s0(e),r.return=a,a.child=r,Rn=a,qe=null)):e=null,e===null)throw ja(a);return a.lanes=536870912,null}return wc(a,l)}var p=e.memoizedState;if(p!==null){var S=p.dehydrated;if(nh(a),f)if(a.flags&256)a.flags&=-257,a=Mv(e,a,r);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(s(558));else if(dn||Er(e,a,r,!1),f=(r&e.childLanes)!==0,dn||f){if(l=We,l!==null&&(S=jl(l,r),S!==0&&S!==p.retryLane))throw p.retryLane=S,Us(e,S),Qn(l,e,S),Eh;Vc(),a=Mv(e,a,r)}else e=p.treeContext,qe=xi(S.nextSibling),Rn=a,Me=!0,Ya=null,vi=!1,e!==null&&l0(a,e),a=wc(a,l),a.flags|=4096;return a}return e=fa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Dc(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function Th(e,a,r,l,f){return Os(a),r=ah(e,a,r,l,void 0,f),l=sh(),e!==null&&!dn?(rh(e,a,f),va(e,a,f)):(Me&&l&&zf(a),a.flags|=1,wn(e,a,r,f),a.child)}function Ev(e,a,r,l,f,p){return Os(a),a.updateQueue=null,r=A0(a,l,r,f),b0(e),l=sh(),e!==null&&!dn?(rh(e,a,p),va(e,a,p)):(Me&&l&&zf(a),a.flags|=1,wn(e,a,r,p),a.child)}function Tv(e,a,r,l,f){if(Os(a),a.stateNode===null){var p=xr,S=r.contextType;typeof S=="object"&&S!==null&&(p=Cn(S)),p=new r(l,p),a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Sh,a.stateNode=p,p._reactInternals=a,p=a.stateNode,p.props=l,p.state=a.memoizedState,p.refs={},Kf(a),S=r.contextType,p.context=typeof S=="object"&&S!==null?Cn(S):xr,p.state=a.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(yh(a,r,S,l),p.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Sh.enqueueReplaceState(p,p.state,null),Xo(a,l,p,f),ko(),p.state=a.memoizedState),typeof p.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){p=a.stateNode;var A=a.memoizedProps,H=Hs(r,A);p.props=H;var tt=p.context,dt=r.contextType;S=xr,typeof dt=="object"&&dt!==null&&(S=Cn(dt));var vt=r.getDerivedStateFromProps;dt=typeof vt=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,dt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||tt!==S)&&uv(a,p,l,S),Ka=!1;var at=a.memoizedState;p.state=at,Xo(a,l,p,f),ko(),tt=a.memoizedState,A||at!==tt||Ka?(typeof vt=="function"&&(yh(a,r,vt,l),tt=a.memoizedState),(H=Ka||cv(a,r,H,l,at,tt,S))?(dt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(a.flags|=4194308)):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=tt),p.props=l,p.state=tt,p.context=S,l=H):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{p=a.stateNode,Qf(e,a),S=a.memoizedProps,dt=Hs(r,S),p.props=dt,vt=a.pendingProps,at=p.context,tt=r.contextType,H=xr,typeof tt=="object"&&tt!==null&&(H=Cn(tt)),A=r.getDerivedStateFromProps,(tt=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==vt||at!==H)&&uv(a,p,l,H),Ka=!1,at=a.memoizedState,p.state=at,Xo(a,l,p,f),ko();var ct=a.memoizedState;S!==vt||at!==ct||Ka||e!==null&&e.dependencies!==null&&fc(e.dependencies)?(typeof A=="function"&&(yh(a,r,A,l),ct=a.memoizedState),(dt=Ka||cv(a,r,dt,l,at,ct,H)||e!==null&&e.dependencies!==null&&fc(e.dependencies))?(tt||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,ct,H),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,ct,H)),typeof p.componentDidUpdate=="function"&&(a.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=ct),p.props=l,p.state=ct,p.context=H,l=dt):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(a.flags|=1024),l=!1)}return p=l,Dc(e,a),l=(a.flags&128)!==0,p||l?(p=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:p.render(),a.flags|=1,e!==null&&l?(a.child=zs(a,e.child,null,f),a.child=zs(a,null,r,f)):wn(e,a,r,f),a.memoizedState=p.state,e=a.child):e=va(e,a,f),e}function bv(e,a,r,l){return Ns(),a.flags|=256,wn(e,a,r,l),a.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ah(e){return{baseLanes:e,cachePool:p0()}}function Rh(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=oi),e}function Av(e,a,r){var l=a.pendingProps,f=!1,p=(a.flags&128)!==0,S;if((S=p)||(S=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),S&&(f=!0,a.flags&=-129),S=(a.flags&32)!==0,a.flags&=-33,e===null){if(Me){if(f?$a(a):ts(),(e=qe)?(e=P_(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},r=s0(e),r.return=a,a.child=r,Rn=a,qe=null)):e=null,e===null)throw ja(a);return cd(e)?a.lanes=32:a.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(ts(),f=a.mode,A=Uc({mode:"hidden",children:A},f),l=Ls(l,f,r,null),A.return=a,l.return=a,A.sibling=l,a.child=A,l=a.child,l.memoizedState=Ah(r),l.childLanes=Rh(e,S,r),a.memoizedState=bh,Zo(null,l)):($a(a),Ch(a,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(p)a.flags&256?($a(a),a.flags&=-257,a=wh(e,a,r)):a.memoizedState!==null?(ts(),a.child=e.child,a.flags|=128,a=null):(ts(),A=l.fallback,f=a.mode,l=Uc({mode:"visible",children:l.children},f),A=Ls(A,f,r,null),A.flags|=2,l.return=a,A.return=a,l.sibling=A,a.child=l,zs(a,e.child,null,r),l=a.child,l.memoizedState=Ah(r),l.childLanes=Rh(e,S,r),a.memoizedState=bh,a=Zo(null,l));else if($a(a),cd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var tt=S.dgst;S=tt,l=Error(s(419)),l.stack="",l.digest=S,Bo({value:l,source:null,stack:null}),a=wh(e,a,r)}else if(dn||Er(e,a,r,!1),S=(r&e.childLanes)!==0,dn||S){if(S=We,S!==null&&(l=jl(S,r),l!==0&&l!==H.retryLane))throw H.retryLane=l,Us(e,l),Qn(S,e,l),Eh;ld(A)||Vc(),a=wh(e,a,r)}else ld(A)?(a.flags|=192,a.child=e.child,a=null):(e=H.treeContext,qe=xi(A.nextSibling),Rn=a,Me=!0,Ya=null,vi=!1,e!==null&&l0(a,e),a=Ch(a,l.children),a.flags|=4096);return a}return f?(ts(),A=l.fallback,f=a.mode,H=e.child,tt=H.sibling,l=fa(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,tt!==null?A=fa(tt,A):(A=Ls(A,f,r,null),A.flags|=2),A.return=a,l.return=a,l.sibling=A,a.child=l,Zo(null,l),l=a.child,A=e.child.memoizedState,A===null?A=Ah(r):(f=A.cachePool,f!==null?(H=fn._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=p0(),A={baseLanes:A.baseLanes|r,cachePool:f}),l.memoizedState=A,l.childLanes=Rh(e,S,r),a.memoizedState=bh,Zo(e.child,l)):($a(a),r=e.child,e=r.sibling,r=fa(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(S=a.deletions,S===null?(a.deletions=[e],a.flags|=16):S.push(e)),a.child=r,a.memoizedState=null,r)}function Ch(e,a){return a=Uc({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Uc(e,a){return e=ii(22,e,null,a),e.lanes=0,e}function wh(e,a,r){return zs(a,e.child,null,r),e=Ch(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Rv(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Xf(e.return,a,r)}function Dh(e,a,r,l,f,p){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:p}:(S.isBackwards=a,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=f,S.treeForkCount=p)}function Cv(e,a,r){var l=a.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=sn.current,A=(S&2)!==0;if(A?(S=S&1|2,a.flags|=128):S&=1,gt(sn,S),wn(e,a,l,r),l=Me?Fo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rv(e,r,a);else if(e.tag===19)Rv(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=a.child,f=null;r!==null;)e=r.alternate,e!==null&&xc(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=a.child,a.child=null):(f=r.sibling,r.sibling=null),Dh(a,!1,f,r,p,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=a.child,a.child=null;f!==null;){if(e=f.alternate,e!==null&&xc(e)===null){a.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}Dh(a,!0,r,null,p,l);break;case"together":Dh(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function va(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),is|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Er(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=fa(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=fa(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function Uh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&fc(e)))}function nb(e,a,r){switch(a.tag){case 3:Tt(a,a.stateNode.containerInfo),Za(a,fn,e.memoizedState.cache),Ns();break;case 27:case 5:Qt(a);break;case 4:Tt(a,a.stateNode.containerInfo);break;case 10:Za(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,nh(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?($a(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Av(e,a,r):($a(a),e=va(e,a,r),e!==null?e.sibling:null);$a(a);break;case 19:var f=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(Er(e,a,r,!1),l=(r&a.childLanes)!==0),f){if(l)return Cv(e,a,r);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),gt(sn,sn.current),l)break;return null;case 22:return a.lanes=0,yv(e,a,r,a.pendingProps);case 24:Za(a,fn,e.memoizedState.cache)}return va(e,a,r)}function wv(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)dn=!0;else{if(!Uh(e,r)&&(a.flags&128)===0)return dn=!1,nb(e,a,r);dn=(e.flags&131072)!==0}else dn=!1,Me&&(a.flags&1048576)!==0&&o0(a,Fo,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(e=Bs(a.elementType),a.type=e,typeof e=="function")Ff(e)?(l=Hs(e,l),a.tag=1,a=Tv(null,a,e,l,r)):(a.tag=0,a=Th(null,a,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===U){a.tag=11,a=vv(null,a,e,l,r);break t}else if(f===P){a.tag=14,a=_v(null,a,e,l,r);break t}}throw a=st(e)||e,Error(s(306,a,""))}}return a;case 0:return Th(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,f=Hs(l,a.pendingProps),Tv(e,a,l,f,r);case 3:t:{if(Tt(a,a.stateNode.containerInfo),e===null)throw Error(s(387));l=a.pendingProps;var p=a.memoizedState;f=p.element,Qf(e,a),Xo(a,l,null,r);var S=a.memoizedState;if(l=S.cache,Za(a,fn,l),l!==p.cache&&Wf(a,[fn],r,!0),ko(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},a.updateQueue.baseState=p,a.memoizedState=p,a.flags&256){a=bv(e,a,l,r);break t}else if(l!==f){f=pi(Error(s(424)),a),Bo(f),a=bv(e,a,l,r);break t}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=xi(e.firstChild),Rn=a,Me=!0,Ya=null,vi=!0,r=y0(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ns(),l===f){a=va(e,a,r);break t}wn(e,a,l,r)}a=a.child}return a;case 26:return Dc(e,a),e===null?(r=V_(a.type,null,a.pendingProps,null))?a.memoizedState=r:Me||(r=a.type,e=a.pendingProps,l=Yc(nt.current).createElement(r),l[ln]=a,l[_n]=e,Dn(l,r,e),X(l),a.stateNode=l):a.memoizedState=V_(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Qt(a),e===null&&Me&&(l=a.stateNode=B_(a.type,a.pendingProps,nt.current),Rn=a,vi=!0,f=qe,ls(a.type)?(ud=f,qe=xi(l.firstChild)):qe=f),wn(e,a,a.pendingProps.children,r),Dc(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Me&&((f=l=qe)&&(l=Lb(l,a.type,a.pendingProps,vi),l!==null?(a.stateNode=l,Rn=a,qe=xi(l.firstChild),vi=!1,f=!0):f=!1),f||ja(a)),Qt(a),f=a.type,p=a.pendingProps,S=e!==null?e.memoizedProps:null,l=p.children,sd(f,p)?l=null:S!==null&&sd(f,S)&&(a.flags|=32),a.memoizedState!==null&&(f=ah(e,a,YT,null,null,r),ul._currentValue=f),Dc(e,a),wn(e,a,l,r),a.child;case 6:return e===null&&Me&&((e=r=qe)&&(r=Nb(r,a.pendingProps,vi),r!==null?(a.stateNode=r,Rn=a,qe=null,e=!0):e=!1),e||ja(a)),null;case 13:return Av(e,a,r);case 4:return Tt(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=zs(a,null,l,r):wn(e,a,l,r),a.child;case 11:return vv(e,a,a.type,a.pendingProps,r);case 7:return wn(e,a,a.pendingProps,r),a.child;case 8:return wn(e,a,a.pendingProps.children,r),a.child;case 12:return wn(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,Za(a,a.type,l.value),wn(e,a,l.children,r),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,Os(a),f=Cn(f),l=l(f),a.flags|=1,wn(e,a,l,r),a.child;case 14:return _v(e,a,a.type,a.pendingProps,r);case 15:return xv(e,a,a.type,a.pendingProps,r);case 19:return Cv(e,a,r);case 31:return eb(e,a,r);case 22:return yv(e,a,r,a.pendingProps);case 24:return Os(a),l=Cn(fn),e===null?(f=jf(),f===null&&(f=We,p=qf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=r),f=p),a.memoizedState={parent:l,cache:f},Kf(a),Za(a,fn,f)):((e.lanes&r)!==0&&(Qf(e,a),Xo(a,null,null,r),ko()),f=e.memoizedState,p=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Za(a,fn,l)):(l=p.cache,Za(a,fn,l),l!==f.cache&&Wf(a,[fn],r,!0))),wn(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function _a(e){e.flags|=4}function Lh(e,a,r,l,f){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(n_())e.flags|=8192;else throw Is=mc,Zf}else e.flags&=-16777217}function Dv(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W_(a))if(n_())e.flags|=8192;else throw Is=mc,Zf}function Lc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Fe():536870912,e.lanes|=a,Or|=a)}function Ko(e,a){if(!Me)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ye(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function ib(e,a,r){var l=a.pendingProps;switch(Vf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(a),null;case 1:return Ye(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),pa(fn),Xt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mr(a)?_a(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Gf())),Ye(a),null;case 26:var f=a.type,p=a.memoizedState;return e===null?(_a(a),p!==null?(Ye(a),Dv(a,p)):(Ye(a),Lh(a,f,null,l,r))):p?p!==e.memoizedState?(_a(a),Ye(a),Dv(a,p)):(Ye(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&_a(a),Ye(a),Lh(a,f,e,l,r)),null;case 27:if(ee(a),r=nt.current,f=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&_a(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ye(a),null}e=bt.current,Mr(a)?c0(a):(e=B_(f,l,r),a.stateNode=e,_a(a))}return Ye(a),null;case 5:if(ee(a),f=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&_a(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ye(a),null}if(p=bt.current,Mr(a))c0(a);else{var S=Yc(nt.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[ln]=a,p[_n]=l;t:for(S=a.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===a)break t;for(;S.sibling===null;){if(S.return===null||S.return===a)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}a.stateNode=p;t:switch(Dn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&_a(a)}}return Ye(a),Lh(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,r),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&_a(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=nt.current,Mr(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,f=Rn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[ln]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||A_(e.nodeValue,r)),e||ja(a,!0)}else e=Yc(e).createTextNode(l),e[ln]=a,a.stateNode=e}return Ye(a),null;case 31:if(r=a.memoizedState,e===null||e.memoizedState!==null){if(l=Mr(a),r!==null){if(e===null){if(!l)throw Error(s(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=a}else Ns(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),e=!1}else r=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return a.flags&256?(si(a),a):(si(a),null);if((a.flags&128)!==0)throw Error(s(558))}return Ye(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Mr(a),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[ln]=a}else Ns(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),f=!1}else f=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(si(a),a):(si(a),null)}return si(a),(a.flags&128)!==0?(a.lanes=r,a):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),r!==e&&r&&(a.child.flags|=8192),Lc(a,a.updateQueue),Ye(a),null);case 4:return Xt(),e===null&&td(a.stateNode.containerInfo),Ye(a),null;case 10:return pa(a.type),Ye(a),null;case 19:if(j(sn),l=a.memoizedState,l===null)return Ye(a),null;if(f=(a.flags&128)!==0,p=l.rendering,p===null)if(f)Ko(l,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(p=xc(e),p!==null){for(a.flags|=128,Ko(l,!1),e=p.updateQueue,a.updateQueue=e,Lc(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)a0(r,e),r=r.sibling;return gt(sn,sn.current&1|2),Me&&ha(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&T()>Bc&&(a.flags|=128,f=!0,Ko(l,!1),a.lanes=4194304)}else{if(!f)if(e=xc(p),e!==null){if(a.flags|=128,f=!0,e=e.updateQueue,a.updateQueue=e,Lc(a,e),Ko(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Me)return Ye(a),null}else 2*T()-l.renderingStartTime>Bc&&r!==536870912&&(a.flags|=128,f=!0,Ko(l,!1),a.lanes=4194304);l.isBackwards?(p.sibling=a.child,a.child=p):(e=l.last,e!==null?e.sibling=p:a.child=p,l.last=p)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=T(),e.sibling=null,r=sn.current,gt(sn,f?r&1|2:r&1),Me&&ha(a,l.treeForkCount),e):(Ye(a),null);case 22:case 23:return si(a),eh(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(Ye(a),a.subtreeFlags&6&&(a.flags|=8192)):Ye(a),r=a.updateQueue,r!==null&&Lc(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&j(Fs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),pa(fn),Ye(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function ab(e,a){switch(Vf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return pa(fn),Xt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return ee(a),null;case 31:if(a.memoizedState!==null){if(si(a),a.alternate===null)throw Error(s(340));Ns()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(si(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Ns()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return j(sn),null;case 4:return Xt(),null;case 10:return pa(a.type),null;case 22:case 23:return si(a),eh(),e!==null&&j(Fs),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return pa(fn),null;case 25:return null;default:return null}}function Uv(e,a){switch(Vf(a),a.tag){case 3:pa(fn),Xt();break;case 26:case 27:case 5:ee(a);break;case 4:Xt();break;case 31:a.memoizedState!==null&&si(a);break;case 13:si(a);break;case 19:j(sn);break;case 10:pa(a.type);break;case 22:case 23:si(a),eh(),e!==null&&j(Fs);break;case 24:pa(fn)}}function Qo(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var p=r.create,S=r.inst;l=p(),S.destroy=l}r=r.next}while(r!==f)}}catch(A){Ie(a,a.return,A)}}function es(e,a,r){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&e)===e){var S=l.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=a;var H=r,tt=A;try{tt()}catch(dt){Ie(f,H,dt)}}}l=l.next}while(l!==p)}}catch(dt){Ie(a,a.return,dt)}}function Lv(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{M0(a,r)}catch(l){Ie(e,e.return,l)}}}function Nv(e,a,r){r.props=Hs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ie(e,a,l)}}function Jo(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){Ie(e,a,f)}}function qi(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Ie(e,a,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Ie(e,a,f)}else r.current=null}function Pv(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Ie(e,e.return,f)}}function Nh(e,a,r){try{var l=e.stateNode;Ab(l,e.type,r,a),l[_n]=a}catch(f){Ie(e,e.return,f)}}function Ov(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ls(e.type)||e.tag===4}function Ph(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ov(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ls(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oh(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=ca));else if(l!==4&&(l===27&&ls(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(Oh(e,a,r),e=e.sibling;e!==null;)Oh(e,a,r),e=e.sibling}function Nc(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(l===27&&ls(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Nc(e,a,r),e=e.sibling;e!==null;)Nc(e,a,r),e=e.sibling}function Fv(e){var a=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Dn(a,l,r),a[ln]=e,a[_n]=r}catch(p){Ie(e,e.return,p)}}var xa=!1,pn=!1,Fh=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function sb(e,a){if(e=e.containerInfo,id=tu,e=Zg(e),wf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var S=0,A=-1,H=-1,tt=0,dt=0,vt=e,at=null;e:for(;;){for(var ct;vt!==r||f!==0&&vt.nodeType!==3||(A=S+f),vt!==p||l!==0&&vt.nodeType!==3||(H=S+l),vt.nodeType===3&&(S+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)at=vt,vt=ct;for(;;){if(vt===e)break e;if(at===r&&++tt===f&&(A=S),at===p&&++dt===l&&(H=S),(ct=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=ct}r=A===-1||H===-1?null:{start:A,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(ad={focusedElem:e,selectionRange:r},tu=!1,Tn=a;Tn!==null;)if(a=Tn,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Tn=e;else for(;Tn!==null;){switch(a=Tn,p=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,r=a,f=p.memoizedProps,p=p.memoizedState,l=r.stateNode;try{var Ht=Hs(r.type,f);e=l.getSnapshotBeforeUpdate(Ht,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ie(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)od(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Tn=e;break}Tn=a.return}}function Iv(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Sa(e,r),l&4&&Qo(5,r);break;case 1:if(Sa(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(S){Ie(r,r.return,S)}else{var f=Hs(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(f,a,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(r,r.return,S)}}l&64&&Lv(r),l&512&&Jo(r,r.return);break;case 3:if(Sa(e,r),l&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{M0(e,a)}catch(S){Ie(r,r.return,S)}}break;case 27:a===null&&l&4&&Fv(r);case 26:case 5:Sa(e,r),a===null&&l&4&&Pv(r),l&512&&Jo(r,r.return);break;case 12:Sa(e,r);break;case 31:Sa(e,r),l&4&&Hv(e,r);break;case 13:Sa(e,r),l&4&&Gv(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=pb.bind(null,r),Pb(e,r))));break;case 22:if(l=r.memoizedState!==null||xa,!l){a=a!==null&&a.memoizedState!==null||pn,f=xa;var p=pn;xa=l,(pn=a)&&!p?Ma(e,r,(r.subtreeFlags&8772)!==0):Sa(e,r),xa=f,pn=p}break;case 30:break;default:Sa(e,r)}}function zv(e){var a=e.alternate;a!==null&&(e.alternate=null,zv(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ao(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Yn=!1;function ya(e,a,r){for(r=r.child;r!==null;)Vv(e,a,r),r=r.sibling}function Vv(e,a,r){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Et,r)}catch{}switch(r.tag){case 26:pn||qi(r,a),ya(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:pn||qi(r,a);var l=Qe,f=Yn;ls(r.type)&&(Qe=r.stateNode,Yn=!1),ya(e,a,r),ol(r.stateNode),Qe=l,Yn=f;break;case 5:pn||qi(r,a);case 6:if(l=Qe,f=Yn,Qe=null,ya(e,a,r),Qe=l,Yn=f,Qe!==null)if(Yn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(r.stateNode)}catch(p){Ie(r,a,p)}else try{Qe.removeChild(r.stateNode)}catch(p){Ie(r,a,p)}break;case 18:Qe!==null&&(Yn?(e=Qe,L_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),kr(e)):L_(Qe,r.stateNode));break;case 4:l=Qe,f=Yn,Qe=r.stateNode.containerInfo,Yn=!0,ya(e,a,r),Qe=l,Yn=f;break;case 0:case 11:case 14:case 15:es(2,r,a),pn||es(4,r,a),ya(e,a,r);break;case 1:pn||(qi(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Nv(r,a,l)),ya(e,a,r);break;case 21:ya(e,a,r);break;case 22:pn=(l=pn)||r.memoizedState!==null,ya(e,a,r),pn=l;break;default:ya(e,a,r)}}function Hv(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kr(e)}catch(r){Ie(a,a.return,r)}}}function Gv(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kr(e)}catch(r){Ie(a,a.return,r)}}function rb(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Bv),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Bv),a;default:throw Error(s(435,e.tag))}}function Pc(e,a){var r=rb(e);a.forEach(function(l){if(!r.has(l)){r.add(l);var f=mb.bind(null,e,l);l.then(f,f)}})}function jn(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],p=e,S=a,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(ls(A.type)){Qe=A.stateNode,Yn=!1;break t}break;case 5:Qe=A.stateNode,Yn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if(Qe===null)throw Error(s(160));Vv(p,S,f),Qe=null,Yn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)kv(a,e),a=a.sibling}var Di=null;function kv(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(a,e),Zn(e),l&4&&(es(3,e,e.return),Qo(3,e),es(5,e,e.return));break;case 1:jn(a,e),Zn(e),l&512&&(pn||r===null||qi(r,r.return)),l&64&&xa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Di;if(jn(a,e),Zn(e),l&512&&(pn||r===null||qi(r,r.return)),l&4){var p=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[As]||p[ln]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Dn(p,l,r),p[ln]=e,X(p),l=p;break t;case"link":var S=k_("link","href",f).get(l+(r.href||""));if(S){for(var A=0;A<S.length;A++)if(p=S[A],p.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&p.getAttribute("rel")===(r.rel==null?null:r.rel)&&p.getAttribute("title")===(r.title==null?null:r.title)&&p.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(A,1);break e}}p=f.createElement(l),Dn(p,l,r),f.head.appendChild(p);break;case"meta":if(S=k_("meta","content",f).get(l+(r.content||""))){for(A=0;A<S.length;A++)if(p=S[A],p.getAttribute("content")===(r.content==null?null:""+r.content)&&p.getAttribute("name")===(r.name==null?null:r.name)&&p.getAttribute("property")===(r.property==null?null:r.property)&&p.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&p.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(A,1);break e}}p=f.createElement(l),Dn(p,l,r),f.head.appendChild(p);break;default:throw Error(s(468,l))}p[ln]=e,X(p),l=p}e.stateNode=l}else X_(f,e.type,e.stateNode);else e.stateNode=G_(f,l,e.memoizedProps);else p!==l?(p===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):p.count--,l===null?X_(f,e.type,e.stateNode):G_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Nh(e,e.memoizedProps,r.memoizedProps)}break;case 27:jn(a,e),Zn(e),l&512&&(pn||r===null||qi(r,r.return)),r!==null&&l&4&&Nh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(jn(a,e),Zn(e),l&512&&(pn||r===null||qi(r,r.return)),e.flags&32){f=e.stateNode;try{Vn(f,"")}catch(Ht){Ie(e,e.return,Ht)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Nh(e,f,r!==null?r.memoizedProps:f)),l&1024&&(Fh=!0);break;case 6:if(jn(a,e),Zn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Ht){Ie(e,e.return,Ht)}}break;case 3:if(Kc=null,f=Di,Di=jc(a.containerInfo),jn(a,e),Di=f,Zn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{kr(a.containerInfo)}catch(Ht){Ie(e,e.return,Ht)}Fh&&(Fh=!1,Xv(e));break;case 4:l=Di,Di=jc(e.stateNode.containerInfo),jn(a,e),Zn(e),Di=l;break;case 12:jn(a,e),Zn(e);break;case 31:jn(a,e),Zn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pc(e,l)));break;case 13:jn(a,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Fc=T()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pc(e,l)));break;case 22:f=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,tt=xa,dt=pn;if(xa=tt||f,pn=dt||H,jn(a,e),pn=dt,xa=tt,Zn(e),l&8192)t:for(a=e.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(r===null||H||xa||pn||Gs(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){H=r=a;try{if(p=H.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var vt=H.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Ht){Ie(H,H.return,Ht)}}}else if(a.tag===6){if(r===null){H=a;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(Ht){Ie(H,H.return,Ht)}}}else if(a.tag===18){if(r===null){H=a;try{var ct=H.stateNode;f?N_(ct,!0):N_(H.stateNode,!1)}catch(Ht){Ie(H,H.return,Ht)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Pc(e,r))));break;case 19:jn(a,e),Zn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Pc(e,l)));break;case 30:break;case 21:break;default:jn(a,e),Zn(e)}}function Zn(e){var a=e.flags;if(a&2){try{for(var r,l=e.return;l!==null;){if(Ov(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var f=r.stateNode,p=Ph(e);Nc(e,p,f);break;case 5:var S=r.stateNode;r.flags&32&&(Vn(S,""),r.flags&=-33);var A=Ph(e);Nc(e,A,S);break;case 3:case 4:var H=r.stateNode.containerInfo,tt=Ph(e);Oh(e,tt,H);break;default:throw Error(s(161))}}catch(dt){Ie(e,e.return,dt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Xv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Xv(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Sa(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Iv(e,a.alternate,a),a=a.sibling}function Gs(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:es(4,a,a.return),Gs(a);break;case 1:qi(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Nv(a,a.return,r),Gs(a);break;case 27:ol(a.stateNode);case 26:case 5:qi(a,a.return),Gs(a);break;case 22:a.memoizedState===null&&Gs(a);break;case 30:Gs(a);break;default:Gs(a)}e=e.sibling}}function Ma(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=e,p=a,S=p.flags;switch(p.tag){case 0:case 11:case 15:Ma(f,p,r),Qo(4,p);break;case 1:if(Ma(f,p,r),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(tt){Ie(l,l.return,tt)}if(l=p,f=l.updateQueue,f!==null){var A=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)S0(H[f],A)}catch(tt){Ie(l,l.return,tt)}}r&&S&64&&Lv(p),Jo(p,p.return);break;case 27:Fv(p);case 26:case 5:Ma(f,p,r),r&&l===null&&S&4&&Pv(p),Jo(p,p.return);break;case 12:Ma(f,p,r);break;case 31:Ma(f,p,r),r&&S&4&&Hv(f,p);break;case 13:Ma(f,p,r),r&&S&4&&Gv(f,p);break;case 22:p.memoizedState===null&&Ma(f,p,r),Jo(p,p.return);break;case 30:break;default:Ma(f,p,r)}a=a.sibling}}function Bh(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Io(r))}function Ih(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Io(e))}function Ui(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Wv(e,a,r,l),a=a.sibling}function Wv(e,a,r,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Ui(e,a,r,l),f&2048&&Qo(9,a);break;case 1:Ui(e,a,r,l);break;case 3:Ui(e,a,r,l),f&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Io(e)));break;case 12:if(f&2048){Ui(e,a,r,l),e=a.stateNode;try{var p=a.memoizedProps,S=p.id,A=p.onPostCommit;typeof A=="function"&&A(S,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ie(a,a.return,H)}}else Ui(e,a,r,l);break;case 31:Ui(e,a,r,l);break;case 13:Ui(e,a,r,l);break;case 23:break;case 22:p=a.stateNode,S=a.alternate,a.memoizedState!==null?p._visibility&2?Ui(e,a,r,l):$o(e,a):p._visibility&2?Ui(e,a,r,l):(p._visibility|=2,Lr(e,a,r,l,(a.subtreeFlags&10256)!==0||!1)),f&2048&&Bh(S,a);break;case 24:Ui(e,a,r,l),f&2048&&Ih(a.alternate,a);break;default:Ui(e,a,r,l)}}function Lr(e,a,r,l,f){for(f=f&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var p=e,S=a,A=r,H=l,tt=S.flags;switch(S.tag){case 0:case 11:case 15:Lr(p,S,A,H,f),Qo(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?Lr(p,S,A,H,f):$o(p,S):(dt._visibility|=2,Lr(p,S,A,H,f)),f&&tt&2048&&Bh(S.alternate,S);break;case 24:Lr(p,S,A,H,f),f&&tt&2048&&Ih(S.alternate,S);break;default:Lr(p,S,A,H,f)}a=a.sibling}}function $o(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,f=l.flags;switch(l.tag){case 22:$o(r,l),f&2048&&Bh(l.alternate,l);break;case 24:$o(r,l),f&2048&&Ih(l.alternate,l);break;default:$o(r,l)}a=a.sibling}}var tl=8192;function Nr(e,a,r){if(e.subtreeFlags&tl)for(e=e.child;e!==null;)qv(e,a,r),e=e.sibling}function qv(e,a,r){switch(e.tag){case 26:Nr(e,a,r),e.flags&tl&&e.memoizedState!==null&&qb(r,Di,e.memoizedState,e.memoizedProps);break;case 5:Nr(e,a,r);break;case 3:case 4:var l=Di;Di=jc(e.stateNode.containerInfo),Nr(e,a,r),Di=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=tl,tl=16777216,Nr(e,a,r),tl=l):Nr(e,a,r));break;default:Nr(e,a,r)}}function Yv(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function el(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Tn=l,Zv(l,e)}Yv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jv(e),e=e.sibling}function jv(e){switch(e.tag){case 0:case 11:case 15:el(e),e.flags&2048&&es(9,e,e.return);break;case 3:el(e);break;case 12:el(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Oc(e)):el(e);break;default:el(e)}}function Oc(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Tn=l,Zv(l,e)}Yv(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:es(8,a,a.return),Oc(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Oc(a));break;default:Oc(a)}e=e.sibling}}function Zv(e,a){for(;Tn!==null;){var r=Tn;switch(r.tag){case 0:case 11:case 15:es(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Io(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Tn=l;else t:for(r=e;Tn!==null;){l=Tn;var f=l.sibling,p=l.return;if(zv(l),l===r){Tn=null;break t}if(f!==null){f.return=p,Tn=f;break t}Tn=p}}}var ob={getCacheForType:function(e){var a=Cn(fn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r},cacheSignal:function(){return Cn(fn).controller.signal}},lb=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,ve=null,ye=0,Be=0,ri=null,ns=!1,Pr=!1,zh=!1,Ea=0,nn=0,is=0,ks=0,Vh=0,oi=0,Or=0,nl=null,Kn=null,Hh=!1,Fc=0,Kv=0,Bc=1/0,Ic=null,as=null,yn=0,ss=null,Fr=null,Ta=0,Gh=0,kh=null,Qv=null,il=0,Xh=null;function li(){return(Ne&2)!==0&&ye!==0?ye&-ye:O.T!==null?Kh():ki()}function Jv(){if(oi===0)if((ye&536870912)===0||Me){var e=At;At<<=1,(At&3932160)===0&&(At=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function Qn(e,a,r){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Br(e,0),rs(e,ye,oi,!1)),Bn(e,r),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(ks|=r),nn===4&&rs(e,ye,oi,!1)),Yi(e))}function $v(e,a,r){if((Ne&6)!==0)throw Error(s(327));var l=!r&&(a&127)===0&&(a&e.expiredLanes)===0||zt(e,a),f=l?fb(e,a):qh(e,a,!0),p=l;do{if(f===0){Pr&&!l&&rs(e,a,0,!1);break}else{if(r=e.current.alternate,p&&!cb(r)){f=qh(e,a,!1),p=!1;continue}if(f===2){if(p=a,e.errorRecoveryDisabledLanes&p)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){a=S;t:{var A=e;f=nl;var H=A.current.memoizedState.isDehydrated;if(H&&(Br(A,S).flags|=256),S=qh(A,S,!1),S!==2){if(zh&&!H){A.errorRecoveryDisabledLanes|=p,ks|=p,f=4;break t}p=Kn,Kn=f,p!==null&&(Kn===null?Kn=p:Kn.push.apply(Kn,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Br(e,0),rs(e,a,0,!0);break}t:{switch(l=e,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:rs(l,a,oi,!ns);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(f=Fc+300-T(),10<f)){if(rs(l,a,oi,!ns),ft(l,0,!0)!==0)break t;Ta=a,l.timeoutHandle=D_(t_.bind(null,l,r,Kn,Ic,Hh,a,oi,ks,Or,ns,p,"Throttled",-0,0),f);break t}t_(l,r,Kn,Ic,Hh,a,oi,ks,Or,ns,p,null,-0,0)}}break}while(!0);Yi(e)}function t_(e,a,r,l,f,p,S,A,H,tt,dt,vt,at,ct){if(e.timeoutHandle=-1,vt=a.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},qv(a,p,vt);var Ht=(p&62914560)===p?Fc-T():(p&4194048)===p?Kv-T():0;if(Ht=Yb(vt,Ht),Ht!==null){Ta=p,e.cancelPendingCommit=Ht(l_.bind(null,e,a,p,r,l,f,S,A,H,dt,vt,null,at,ct)),rs(e,p,S,!tt);return}}l_(e,a,p,r,l,f,S,A,H)}function cb(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],p=f.getSnapshot;f=f.value;try{if(!ni(p(),f))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function rs(e,a,r,l){a&=~Vh,a&=~ks,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var f=a;0<f;){var p=31-Lt(f),S=1<<p;l[p]=-1,f&=~S}r!==0&&bo(e,r,a)}function zc(){return(Ne&6)===0?(al(0),!1):!0}function Wh(){if(ve!==null){if(Be===0)var e=ve.return;else e=ve,da=Ps=null,oh(e),Rr=null,Vo=0,e=ve;for(;e!==null;)Uv(e.alternate,e),e=e.return;ve=null}}function Br(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,wb(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ta=0,Wh(),We=e,ve=r=fa(e.current,null),ye=a,Be=0,ri=null,ns=!1,Pr=zt(e,a),zh=!1,Or=oi=Vh=ks=is=nn=0,Kn=nl=null,Hh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var f=31-Lt(l),p=1<<f;a|=e[f],l&=~p}return Ea=a,rc(),r}function e_(e,a){ue=null,O.H=jo,a===Ar||a===pc?(a=v0(),Be=3):a===Zf?(a=v0(),Be=4):Be=a===Eh?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ri=a,ve===null&&(nn=1,Cc(e,pi(a,e.current)))}function n_(){var e=ai.current;return e===null?!0:(ye&4194048)===ye?_i===null:(ye&62914560)===ye||(ye&536870912)!==0?e===_i:!1}function i_(){var e=O.H;return O.H=jo,e===null?jo:e}function a_(){var e=O.A;return O.A=ob,e}function Vc(){nn=4,ns||(ye&4194048)!==ye&&ai.current!==null||(Pr=!0),(is&134217727)===0&&(ks&134217727)===0||We===null||rs(We,ye,oi,!1)}function qh(e,a,r){var l=Ne;Ne|=2;var f=i_(),p=a_();(We!==e||ye!==a)&&(Ic=null,Br(e,a)),a=!1;var S=nn;t:do try{if(Be!==0&&ve!==null){var A=ve,H=ri;switch(Be){case 8:Wh(),S=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(a=!0);var tt=Be;if(Be=0,ri=null,Ir(e,A,H,tt),r&&Pr){S=0;break t}break;default:tt=Be,Be=0,ri=null,Ir(e,A,H,tt)}}ub(),S=nn;break}catch(dt){e_(e,dt)}while(!0);return a&&e.shellSuspendCounter++,da=Ps=null,Ne=l,O.H=f,O.A=p,ve===null&&(We=null,ye=0,rc()),S}function ub(){for(;ve!==null;)s_(ve)}function fb(e,a){var r=Ne;Ne|=2;var l=i_(),f=a_();We!==e||ye!==a?(Ic=null,Bc=T()+500,Br(e,a)):Pr=zt(e,a);t:do try{if(Be!==0&&ve!==null){a=ve;var p=ri;e:switch(Be){case 1:Be=0,ri=null,Ir(e,a,p,1);break;case 2:case 9:if(m0(p)){Be=0,ri=null,r_(a);break}a=function(){Be!==2&&Be!==9||We!==e||(Be=7),Yi(e)},p.then(a,a);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:m0(p)?(Be=0,ri=null,r_(a)):(Be=0,ri=null,Ir(e,a,p,7));break;case 5:var S=null;switch(ve.tag){case 26:S=ve.memoizedState;case 5:case 27:var A=ve;if(S?W_(S):A.stateNode.complete){Be=0,ri=null;var H=A.sibling;if(H!==null)ve=H;else{var tt=A.return;tt!==null?(ve=tt,Hc(tt)):ve=null}break e}}Be=0,ri=null,Ir(e,a,p,5);break;case 6:Be=0,ri=null,Ir(e,a,p,6);break;case 8:Wh(),nn=6;break t;default:throw Error(s(462))}}hb();break}catch(dt){e_(e,dt)}while(!0);return da=Ps=null,O.H=l,O.A=f,Ne=r,ve!==null?0:(We=null,ye=0,rc(),nn)}function hb(){for(;ve!==null&&!Yt();)s_(ve)}function s_(e){var a=wv(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,a===null?Hc(e):ve=a}function r_(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=Ev(r,a,a.pendingProps,a.type,void 0,ye);break;case 11:a=Ev(r,a,a.pendingProps,a.type.render,a.ref,ye);break;case 5:oh(a);default:Uv(r,a),a=ve=a0(a,Ea),a=wv(r,a,Ea)}e.memoizedProps=e.pendingProps,a===null?Hc(e):ve=a}function Ir(e,a,r,l){da=Ps=null,oh(a),Rr=null,Vo=0;var f=a.return;try{if(tb(e,f,a,r,ye)){nn=1,Cc(e,pi(r,e.current)),ve=null;return}}catch(p){if(f!==null)throw ve=f,p;nn=1,Cc(e,pi(r,e.current)),ve=null;return}a.flags&32768?(Me||l===1?e=!0:Pr||(ye&536870912)!==0?e=!1:(ns=e=!0,(l===2||l===9||l===3||l===6)&&(l=ai.current,l!==null&&l.tag===13&&(l.flags|=16384))),o_(a,e)):Hc(a)}function Hc(e){var a=e;do{if((a.flags&32768)!==0){o_(a,ns);return}e=a.return;var r=ib(a.alternate,a,Ea);if(r!==null){ve=r;return}if(a=a.sibling,a!==null){ve=a;return}ve=a=e}while(a!==null);nn===0&&(nn=5)}function o_(e,a){do{var r=ab(e.alternate,e);if(r!==null){r.flags&=32767,ve=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){ve=e;return}ve=e=r}while(e!==null);nn=6,ve=null}function l_(e,a,r,l,f,p,S,A,H){e.cancelPendingCommit=null;do Gc();while(yn!==0);if((Ne&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(p=a.lanes|a.childLanes,p|=Pf,bi(e,r,p,S,A,H),e===We&&(ve=We=null,ye=0),Fr=a,ss=e,Ta=r,Gh=p,kh=f,Qv=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gb(ht,function(){return d_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,f=I.p,I.p=2,S=Ne,Ne|=4;try{sb(e,a,r)}finally{Ne=S,I.p=f,O.T=l}}yn=1,c_(),u_(),f_()}}function c_(){if(yn===1){yn=0;var e=ss,a=Fr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var l=I.p;I.p=2;var f=Ne;Ne|=4;try{kv(a,e);var p=ad,S=Zg(e.containerInfo),A=p.focusedElem,H=p.selectionRange;if(S!==A&&A&&A.ownerDocument&&jg(A.ownerDocument.documentElement,A)){if(H!==null&&wf(A)){var tt=H.start,dt=H.end;if(dt===void 0&&(dt=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(dt,A.value.length);else{var vt=A.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var ct=at.getSelection(),Ht=A.textContent.length,te=Math.min(H.start,Ht),Ge=H.end===void 0?te:Math.min(H.end,Ht);!ct.extend&&te>Ge&&(S=Ge,Ge=te,te=S);var Z=Yg(A,te),k=Yg(A,Ge);if(Z&&k&&(ct.rangeCount!==1||ct.anchorNode!==Z.node||ct.anchorOffset!==Z.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var J=vt.createRange();J.setStart(Z.node,Z.offset),ct.removeAllRanges(),te>Ge?(ct.addRange(J),ct.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ct.addRange(J))}}}}for(vt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var mt=vt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}tu=!!id,ad=id=null}finally{Ne=f,I.p=l,O.T=r}}e.current=a,yn=2}}function u_(){if(yn===2){yn=0;var e=ss,a=Fr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var l=I.p;I.p=2;var f=Ne;Ne|=4;try{Iv(e,a.alternate,a)}finally{Ne=f,I.p=l,O.T=r}}yn=3}}function f_(){if(yn===4||yn===3){yn=0,N();var e=ss,a=Fr,r=Ta,l=Qv;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?yn=5:(yn=0,Fr=ss=null,h_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(as=null),ur(r),a=a.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Et,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=O.T,f=I.p,I.p=2,O.T=null;try{for(var p=e.onRecoverableError,S=0;S<l.length;S++){var A=l[S];p(A.value,{componentStack:A.stack})}}finally{O.T=a,I.p=f}}(Ta&3)!==0&&Gc(),Yi(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===Xh?il++:(il=0,Xh=e):il=0,al(0)}}function h_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Io(a)))}function Gc(){return c_(),u_(),f_(),d_()}function d_(){if(yn!==5)return!1;var e=ss,a=Gh;Gh=0;var r=ur(Ta),l=O.T,f=I.p;try{I.p=32>r?32:r,O.T=null,r=kh,kh=null;var p=ss,S=Ta;if(yn=0,Fr=ss=null,Ta=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,jv(p.current),Wv(p,p.current,S,r),Ne=A,al(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Et,p)}catch{}return!0}finally{I.p=f,O.T=l,h_(e,a)}}function p_(e,a,r){a=pi(r,a),a=Mh(e.stateNode,a,2),e=Ja(e,a,2),e!==null&&(Bn(e,2),Yi(e))}function Ie(e,a,r){if(e.tag===3)p_(e,e,r);else for(;a!==null;){if(a.tag===3){p_(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(as===null||!as.has(l))){e=pi(r,e),r=mv(2),l=Ja(a,r,2),l!==null&&(gv(r,l,a,e),Bn(l,2),Yi(l));break}}a=a.return}}function Yh(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new lb;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(r)||(zh=!0,f.add(r),e=db.bind(null,e,a,r),a.then(e,e))}function db(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,We===e&&(ye&r)===r&&(nn===4||nn===3&&(ye&62914560)===ye&&300>T()-Fc?(Ne&2)===0&&Br(e,0):Vh|=r,Or===ye&&(Or=0)),Yi(e)}function m_(e,a){a===0&&(a=Fe()),e=Us(e,a),e!==null&&(Bn(e,a),Yi(e))}function pb(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),m_(e,r)}function mb(e,a){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),m_(e,r)}function gb(e,a){return Te(e,a)}var kc=null,zr=null,jh=!1,Xc=!1,Zh=!1,os=0;function Yi(e){e!==zr&&e.next===null&&(zr===null?kc=zr=e:zr=zr.next=e),Xc=!0,jh||(jh=!0,_b())}function al(e,a){if(!Zh&&Xc){Zh=!0;do for(var r=!1,l=kc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,A=l.pingedLanes;p=(1<<31-Lt(42|e)+1)-1,p&=f&~(S&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(r=!0,x_(l,p))}else p=ye,p=ft(l,l===We?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||zt(l,p)||(r=!0,x_(l,p));l=l.next}while(r);Zh=!1}}function vb(){g_()}function g_(){Xc=jh=!1;var e=0;os!==0&&Cb()&&(e=os);for(var a=T(),r=null,l=kc;l!==null;){var f=l.next,p=v_(l,a);p===0?(l.next=null,r===null?kc=f:r.next=f,f===null&&(zr=r)):(r=l,(e!==0||(p&3)!==0)&&(Xc=!0)),l=f}yn!==0&&yn!==5||al(e),os!==0&&(os=0)}function v_(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var S=31-Lt(p),A=1<<S,H=f[S];H===-1?((A&r)===0||(A&l)!==0)&&(f[S]=ae(A,a)):H<=a&&(e.expiredLanes|=A),p&=~A}if(a=We,r=ye,r=ft(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===a&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Pe(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||zt(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&Pe(l),ur(r)){case 2:case 8:r=xt;break;case 32:r=ht;break;case 268435456:r=Ct;break;default:r=ht}return l=__.bind(null,e),r=Te(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&Pe(l),e.callbackPriority=2,e.callbackNode=null,2}function __(e,a){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Gc()&&e.callbackNode!==r)return null;var l=ye;return l=ft(e,e===We?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:($v(e,l,a),v_(e,T()),e.callbackNode!=null&&e.callbackNode===r?__.bind(null,e):null)}function x_(e,a){if(Gc())return null;$v(e,a,!0)}function _b(){Db(function(){(Ne&6)!==0?Te(pt,vb):g_()})}function Kh(){if(os===0){var e=Tr;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),os=e}return os}function y_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(""+e)}function S_(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function xb(e,a,r,l,f){if(a==="submit"&&r&&r.stateNode===f){var p=y_((f[_n]||null).action),S=l.submitter;S&&(a=(a=S[_n]||null)?y_(a.formAction):S.getAttribute("formAction"),a!==null&&(p=a,S=null));var A=new nc("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(os!==0){var H=S?S_(f,S):new FormData(f);gh(r,{pending:!0,data:H,method:f.method,action:p},null,H)}}else typeof p=="function"&&(A.preventDefault(),H=S?S_(f,S):new FormData(f),gh(r,{pending:!0,data:H,method:f.method,action:p},p,H))},currentTarget:f}]})}}for(var Qh=0;Qh<Nf.length;Qh++){var Jh=Nf[Qh],yb=Jh.toLowerCase(),Sb=Jh[0].toUpperCase()+Jh.slice(1);wi(yb,"on"+Sb)}wi(Jg,"onAnimationEnd"),wi($g,"onAnimationIteration"),wi(t0,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(BT,"onTransitionRun"),wi(IT,"onTransitionStart"),wi(zT,"onTransitionCancel"),wi(e0,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function M_(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var p=void 0;if(a)for(var S=l.length-1;0<=S;S--){var A=l[S],H=A.instance,tt=A.currentTarget;if(A=A.listener,H!==p&&f.isPropagationStopped())break t;p=A,f.currentTarget=tt;try{p(f)}catch(dt){sc(dt)}f.currentTarget=null,p=H}else for(S=0;S<l.length;S++){if(A=l[S],H=A.instance,tt=A.currentTarget,A=A.listener,H!==p&&f.isPropagationStopped())break t;p=A,f.currentTarget=tt;try{p(f)}catch(dt){sc(dt)}f.currentTarget=null,p=H}}}}function _e(e,a){var r=a[Ga];r===void 0&&(r=a[Ga]=new Set);var l=e+"__bubble";r.has(l)||(E_(a,e,2,!1),r.add(l))}function $h(e,a,r){var l=0;a&&(l|=4),E_(r,e,l,a)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function td(e){if(!e[Wc]){e[Wc]=!0,lt.forEach(function(r){r!=="selectionchange"&&(Mb.has(r)||$h(r,!1,e),$h(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Wc]||(a[Wc]=!0,$h("selectionchange",!1,a))}}function E_(e,a,r,l){switch(J_(a)){case 2:var f=Kb;break;case 8:f=Qb;break;default:f=md}r=f.bind(null,a,r,e),f=void 0,!yf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(a,r,{capture:!0,passive:f}):e.addEventListener(a,r,!0):f!==void 0?e.addEventListener(a,r,{passive:f}):e.addEventListener(a,r,!1)}function ed(e,a,r,l,f){var p=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var A=l.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=l.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=ka(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){l=p=S;continue t}A=A.parentNode}}l=l.return}Cg(function(){var tt=p,dt=_f(r),vt=[];t:{var at=n0.get(e);if(at!==void 0){var ct=nc,Ht=e;switch(e){case"keypress":if(tc(r)===0)break t;case"keydown":case"keyup":ct=mT;break;case"focusin":Ht="focus",ct=Tf;break;case"focusout":Ht="blur",ct=Tf;break;case"beforeblur":case"afterblur":ct=Tf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=iT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=_T;break;case Jg:case $g:case t0:ct=rT;break;case e0:ct=yT;break;case"scroll":case"scrollend":ct=eT;break;case"wheel":ct=MT;break;case"copy":case"cut":case"paste":ct=lT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Ng;break;case"toggle":case"beforetoggle":ct=TT}var te=(a&4)!==0,Ge=!te&&(e==="scroll"||e==="scrollend"),Z=te?at!==null?at+"Capture":null:at;te=[];for(var k=tt,J;k!==null;){var mt=k;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Z===null||(mt=Ro(k,Z),mt!=null&&te.push(rl(k,mt,J))),Ge)break;k=k.return}0<te.length&&(at=new ct(at,Ht,null,r,dt),vt.push({event:at,listeners:te}))}}if((a&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&r!==vf&&(Ht=r.relatedTarget||r.fromElement)&&(ka(Ht)||Ht[oa]))break t;if((ct||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Ht=r.relatedTarget||r.toElement,ct=tt,Ht=Ht?ka(Ht):null,Ht!==null&&(Ge=c(Ht),te=Ht.tag,Ht!==Ge||te!==5&&te!==27&&te!==6)&&(Ht=null)):(ct=null,Ht=tt),ct!==Ht)){if(te=Ug,mt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Ng,mt="onPointerLeave",Z="onPointerEnter",k="pointer"),Ge=ct==null?at:Rs(ct),J=Ht==null?at:Rs(Ht),at=new te(mt,k+"leave",ct,r,dt),at.target=Ge,at.relatedTarget=J,mt=null,ka(dt)===tt&&(te=new te(Z,k+"enter",Ht,r,dt),te.target=J,te.relatedTarget=Ge,mt=te),Ge=mt,ct&&Ht)e:{for(te=Eb,Z=ct,k=Ht,J=0,mt=Z;mt;mt=te(mt))J++;mt=0;for(var Jt=k;Jt;Jt=te(Jt))mt++;for(;0<J-mt;)Z=te(Z),J--;for(;0<mt-J;)k=te(k),mt--;for(;J--;){if(Z===k||k!==null&&Z===k.alternate){te=Z;break e}Z=te(Z),k=te(k)}te=null}else te=null;ct!==null&&T_(vt,at,ct,te,!1),Ht!==null&&Ge!==null&&T_(vt,Ge,Ht,te,!0)}}t:{if(at=tt?Rs(tt):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var we=Hg;else if(zg(at))if(Gg)we=PT;else{we=LT;var jt=UT}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&hr(tt.elementType)&&(we=Hg):we=NT;if(we&&(we=we(e,tt))){Vg(vt,we,r,dt);break t}jt&&jt(e,at,tt),e==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&Ri(at,"number",at.value)}switch(jt=tt?Rs(tt):window,e){case"focusin":(zg(jt)||jt.contentEditable==="true")&&(gr=jt,Df=tt,Oo=null);break;case"focusout":Oo=Df=gr=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,Kg(vt,r,dt);break;case"selectionchange":if(FT)break;case"keydown":case"keyup":Kg(vt,r,dt)}var de;if(Af)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else mr?Bg(e,r)&&(Se="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Se="onCompositionStart");Se&&(Pg&&r.locale!=="ko"&&(mr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&mr&&(de=wg()):(Wa=dt,Sf="value"in Wa?Wa.value:Wa.textContent,mr=!0)),jt=qc(tt,Se),0<jt.length&&(Se=new Lg(Se,e,null,r,dt),vt.push({event:Se,listeners:jt}),de?Se.data=de:(de=Ig(r),de!==null&&(Se.data=de)))),(de=AT?RT(e,r):CT(e,r))&&(Se=qc(tt,"onBeforeInput"),0<Se.length&&(jt=new Lg("onBeforeInput","beforeinput",null,r,dt),vt.push({event:jt,listeners:Se}),jt.data=de)),xb(vt,e,tt,r,dt)}M_(vt,a)})}function rl(e,a,r){return{instance:e,listener:a,currentTarget:r}}function qc(e,a){for(var r=a+"Capture",l=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Ro(e,r),f!=null&&l.unshift(rl(e,f,p)),f=Ro(e,a),f!=null&&l.push(rl(e,f,p))),e.tag===3)return l;e=e.return}return[]}function Eb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function T_(e,a,r,l,f){for(var p=a._reactName,S=[];r!==null&&r!==l;){var A=r,H=A.alternate,tt=A.stateNode;if(A=A.tag,H!==null&&H===l)break;A!==5&&A!==26&&A!==27||tt===null||(H=tt,f?(tt=Ro(r,p),tt!=null&&S.unshift(rl(r,tt,H))):f||(tt=Ro(r,p),tt!=null&&S.push(rl(r,tt,H)))),r=r.return}S.length!==0&&e.push({event:a,listeners:S})}var Tb=/\r\n?/g,bb=/\u0000|\uFFFD/g;function b_(e){return(typeof e=="string"?e:""+e).replace(Tb,`
`).replace(bb,"")}function A_(e,a){return a=b_(a),b_(e)===a}function He(e,a,r,l,f,p){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Vn(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Vn(e,""+l);break;case"className":oe(e,"class",l);break;case"tabIndex":oe(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,r,l);break;case"style":la(e,l,p);break;case"data":if(a!=="object"){oe(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Jl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(r==="formAction"?(a!=="input"&&He(e,a,"name",f.name,f,null),He(e,a,"formEncType",f.formEncType,f,null),He(e,a,"formMethod",f.formMethod,f,null),He(e,a,"formTarget",f.formTarget,f,null)):(He(e,a,"encType",f.encType,f,null),He(e,a,"method",f.method,f,null),He(e,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Jl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=ca);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Jl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":_e("beforetoggle",e),_e("toggle",e),ie(e,"popover",l);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ie(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=$E.get(r)||r,ie(e,r,l))}}function nd(e,a,r,l,f,p){switch(r){case"style":la(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Vn(e,l):(typeof l=="number"||typeof l=="bigint")&&Vn(e,""+l);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),a=r.slice(2,f?r.length-7:void 0),p=e[_n]||null,p=p!=null?p[r]:null,typeof p=="function"&&e.removeEventListener(a,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):ie(e,r,l)}}}function Dn(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var l=!1,f=!1,p;for(p in r)if(r.hasOwnProperty(p)){var S=r[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:He(e,a,p,S,r,null)}}f&&He(e,a,"srcSet",r.srcSet,r,null),l&&He(e,a,"src",r.src,r,null);return;case"input":_e("invalid",e);var A=p=S=f=null,H=null,tt=null;for(l in r)if(r.hasOwnProperty(l)){var dt=r[l];if(dt!=null)switch(l){case"name":f=dt;break;case"type":S=dt;break;case"checked":H=dt;break;case"defaultChecked":tt=dt;break;case"value":p=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,a));break;default:He(e,a,l,dt,r,null)}}ti(e,p,A,H,tt,S,f,!1);return;case"select":_e("invalid",e),l=S=p=null;for(f in r)if(r.hasOwnProperty(f)&&(A=r[f],A!=null))switch(f){case"value":p=A;break;case"defaultValue":S=A;break;case"multiple":l=A;default:He(e,a,f,A,r,null)}a=p,r=S,e.multiple=!!l,a!=null?ei(e,!!l,a,!1):r!=null&&ei(e,!!l,r,!0);return;case"textarea":_e("invalid",e),p=f=l=null;for(S in r)if(r.hasOwnProperty(S)&&(A=r[S],A!=null))switch(S){case"value":l=A;break;case"defaultValue":f=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:He(e,a,S,A,r,null)}cn(e,l,f,p);return;case"option":for(H in r)r.hasOwnProperty(H)&&(l=r[H],l!=null)&&(H==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":He(e,a,H,l,r,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(l=0;l<sl.length;l++)_e(sl[l],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in r)if(r.hasOwnProperty(tt)&&(l=r[tt],l!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:He(e,a,tt,l,r,null)}return;default:if(hr(a)){for(dt in r)r.hasOwnProperty(dt)&&(l=r[dt],l!==void 0&&nd(e,a,dt,l,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(l=r[A],l!=null&&He(e,a,A,l,r,null))}function Ab(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,A=null,H=null,tt=null,dt=null;for(ct in r){var vt=r[ct];if(r.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=vt;default:l.hasOwnProperty(ct)||He(e,a,ct,null,l,vt)}}for(var at in l){var ct=l[at];if(vt=r[at],l.hasOwnProperty(at)&&(ct!=null||vt!=null))switch(at){case"type":p=ct;break;case"name":f=ct;break;case"checked":tt=ct;break;case"defaultChecked":dt=ct;break;case"value":S=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,a));break;default:ct!==vt&&He(e,a,at,ct,l,vt)}}zn(e,S,A,H,tt,dt,p,f);return;case"select":ct=S=A=at=null;for(p in r)if(H=r[p],r.hasOwnProperty(p)&&H!=null)switch(p){case"value":break;case"multiple":ct=H;default:l.hasOwnProperty(p)||He(e,a,p,null,l,H)}for(f in l)if(p=l[f],H=r[f],l.hasOwnProperty(f)&&(p!=null||H!=null))switch(f){case"value":at=p;break;case"defaultValue":A=p;break;case"multiple":S=p;default:p!==H&&He(e,a,f,p,l,H)}a=A,r=S,l=ct,at!=null?ei(e,!!r,at,!1):!!l!=!!r&&(a!=null?ei(e,!!r,a,!0):ei(e,!!r,r?[]:"",!1));return;case"textarea":ct=at=null;for(A in r)if(f=r[A],r.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,a,A,null,l,f)}for(S in l)if(f=l[S],p=r[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":at=f;break;case"defaultValue":ct=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&He(e,a,S,f,l,p)}Oe(e,at,ct);return;case"option":for(var Ht in r)at=r[Ht],r.hasOwnProperty(Ht)&&at!=null&&!l.hasOwnProperty(Ht)&&(Ht==="selected"?e.selected=!1:He(e,a,Ht,null,l,at));for(H in l)at=l[H],ct=r[H],l.hasOwnProperty(H)&&at!==ct&&(at!=null||ct!=null)&&(H==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":He(e,a,H,at,l,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)at=r[te],r.hasOwnProperty(te)&&at!=null&&!l.hasOwnProperty(te)&&He(e,a,te,null,l,at);for(tt in l)if(at=l[tt],ct=r[tt],l.hasOwnProperty(tt)&&at!==ct&&(at!=null||ct!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,a));break;default:He(e,a,tt,at,l,ct)}return;default:if(hr(a)){for(var Ge in r)at=r[Ge],r.hasOwnProperty(Ge)&&at!==void 0&&!l.hasOwnProperty(Ge)&&nd(e,a,Ge,void 0,l,at);for(dt in l)at=l[dt],ct=r[dt],!l.hasOwnProperty(dt)||at===ct||at===void 0&&ct===void 0||nd(e,a,dt,at,l,ct);return}}for(var Z in r)at=r[Z],r.hasOwnProperty(Z)&&at!=null&&!l.hasOwnProperty(Z)&&He(e,a,Z,null,l,at);for(vt in l)at=l[vt],ct=r[vt],!l.hasOwnProperty(vt)||at===ct||at==null&&ct==null||He(e,a,vt,at,l,ct)}function R_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],p=f.transferSize,S=f.initiatorType,A=f.duration;if(p&&A&&R_(S)){for(S=0,A=f.responseEnd,l+=1;l<r.length;l++){var H=r[l],tt=H.startTime;if(tt>A)break;var dt=H.transferSize,vt=H.initiatorType;dt&&R_(vt)&&(H=H.responseEnd,S+=dt*(H<A?1:(A-tt)/(H-tt)))}if(--l,a+=8*(p+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var id=null,ad=null;function Yc(e){return e.nodeType===9?e:e.ownerDocument}function C_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function sd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var rd=null;function Cb(){var e=window.event;return e&&e.type==="popstate"?e===rd?!1:(rd=e,!0):(rd=null,!1)}var D_=typeof setTimeout=="function"?setTimeout:void 0,wb=typeof clearTimeout=="function"?clearTimeout:void 0,U_=typeof Promise=="function"?Promise:void 0,Db=typeof queueMicrotask=="function"?queueMicrotask:typeof U_<"u"?function(e){return U_.resolve(null).then(e).catch(Ub)}:D_;function Ub(e){setTimeout(function(){throw e})}function ls(e){return e==="head"}function L_(e,a){var r=a,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),kr(a);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")ol(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,ol(r);for(var p=r.firstChild;p;){var S=p.nextSibling,A=p.nodeName;p[As]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=S}}else r==="body"&&ol(e.ownerDocument.body);r=f}while(r);kr(a)}function N_(e,a){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function od(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":od(r),Ao(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Lb(e,a,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[As])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function Nb(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=xi(e.nextSibling),e===null))return null;return e}function P_(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function ld(e){return e.data==="$?"||e.data==="$~"}function cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Pb(e,a){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||r.readyState!=="loading")a();else{var l=function(){a(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function xi(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var ud=null;function O_(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(a===0)return xi(e.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}e=e.nextSibling}return null}function F_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return e;a--}else r!=="/$"&&r!=="/&"||a++}e=e.previousSibling}return null}function B_(e,a,r){switch(a=Yc(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ol(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ao(e)}var yi=new Map,I_=new Set;function jc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=I.d;I.d={f:Ob,r:Fb,D:Bb,C:Ib,L:zb,m:Vb,X:Gb,S:Hb,M:kb};function Ob(){var e=ba.f(),a=zc();return e||a}function Fb(e){var a=Xa(e);a!==null&&a.tag===5&&a.type==="form"?ev(a):ba.r(e)}var Vr=typeof document>"u"?null:document;function z_(e,a,r){var l=Vr;if(l&&typeof a=="string"&&a){var f=se(a);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),I_.has(f)||(I_.add(f),e={rel:e,crossOrigin:r,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),Dn(a,"link",e),X(a),l.head.appendChild(a)))}}function Bb(e){ba.D(e),z_("dns-prefetch",e,null)}function Ib(e,a){ba.C(e,a),z_("preconnect",e,a)}function zb(e,a,r){ba.L(e,a,r);var l=Vr;if(l&&e&&a){var f='link[rel="preload"][as="'+se(a)+'"]';a==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+se(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+se(r.imageSizes)+'"]')):f+='[href="'+se(e)+'"]';var p=f;switch(a){case"style":p=Hr(e);break;case"script":p=Gr(e)}yi.has(p)||(e=_({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),yi.set(p,e),l.querySelector(f)!==null||a==="style"&&l.querySelector(ll(p))||a==="script"&&l.querySelector(cl(p))||(a=l.createElement("link"),Dn(a,"link",e),X(a),l.head.appendChild(a)))}}function Vb(e,a){ba.m(e,a);var r=Vr;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+se(l)+'"][href="'+se(e)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Gr(e)}if(!yi.has(p)&&(e=_({rel:"modulepreload",href:e},a),yi.set(p,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(cl(p)))return}l=r.createElement("link"),Dn(l,"link",e),X(l),r.head.appendChild(l)}}}function Hb(e,a,r){ba.S(e,a,r);var l=Vr;if(l&&e){var f=C(l).hoistableStyles,p=Hr(e);a=a||"default";var S=f.get(p);if(!S){var A={loading:0,preload:null};if(S=l.querySelector(ll(p)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":a},r),(r=yi.get(p))&&fd(e,r);var H=S=l.createElement("link");X(H),Dn(H,"link",e),H._p=new Promise(function(tt,dt){H.onload=tt,H.onerror=dt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Zc(S,a,l)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(p,S)}}}function Gb(e,a){ba.X(e,a);var r=Vr;if(r&&e){var l=C(r).hoistableScripts,f=Gr(e),p=l.get(f);p||(p=r.querySelector(cl(f)),p||(e=_({src:e,async:!0},a),(a=yi.get(f))&&hd(e,a),p=r.createElement("script"),X(p),Dn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function kb(e,a){ba.M(e,a);var r=Vr;if(r&&e){var l=C(r).hoistableScripts,f=Gr(e),p=l.get(f);p||(p=r.querySelector(cl(f)),p||(e=_({src:e,async:!0,type:"module"},a),(a=yi.get(f))&&hd(e,a),p=r.createElement("script"),X(p),Dn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function V_(e,a,r,l){var f=(f=nt.current)?jc(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Hr(r.href),r=C(f).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Hr(r.href);var p=C(f).hoistableStyles,S=p.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,S),(p=f.querySelector(ll(e)))&&!p._p&&(S.instance=p,S.state.loading=5),yi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},yi.set(e,r),p||Xb(f,e,r,S.state))),a&&l===null)throw Error(s(528,""));return S}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Gr(r),r=C(f).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Hr(e){return'href="'+se(e)+'"'}function ll(e){return'link[rel="stylesheet"]['+e+"]"}function H_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Xb(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Dn(a,"link",r),X(a),e.head.appendChild(a))}function Gr(e){return'[src="'+se(e)+'"]'}function cl(e){return"script[async]"+e}function G_(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+se(r.href)+'"]');if(l)return a.instance=l,X(l),l;var f=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),X(l),Dn(l,"style",f),Zc(l,r.precedence,e),a.instance=l;case"stylesheet":f=Hr(r.href);var p=e.querySelector(ll(f));if(p)return a.state.loading|=4,a.instance=p,X(p),p;l=H_(r),(f=yi.get(f))&&fd(l,f),p=(e.ownerDocument||e).createElement("link"),X(p);var S=p;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Dn(p,"link",l),a.state.loading|=4,Zc(p,r.precedence,e),a.instance=p;case"script":return p=Gr(r.src),(f=e.querySelector(cl(p)))?(a.instance=f,X(f),f):(l=r,(f=yi.get(p))&&(l=_({},r),hd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),X(f),Dn(f,"link",l),e.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Zc(l,r.precedence,e));return a.instance}function Zc(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var A=l[S];if(A.dataset.precedence===a)p=A;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function fd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function hd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Kc=null;function k_(e,a,r){if(Kc===null){var l=new Map,f=Kc=new Map;f.set(r,l)}else f=Kc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var p=r[f];if(!(p[As]||p[ln]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(a)||"";S=e+S;var A=l.get(S);A?A.push(p):l.set(S,[p])}}return l}function X_(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function Wb(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function W_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qb(e,a,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Hr(l.href),p=a.querySelector(ll(f));if(p){a=p._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Qc.bind(e),a.then(e,e)),r.state.loading|=4,r.instance=p,X(p);return}p=a.ownerDocument||a,l=H_(l),(f=yi.get(f))&&fd(l,f),p=p.createElement("link"),X(p);var S=p;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Dn(p,"link",l),r.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Qc.bind(e),a.addEventListener("load",r),a.addEventListener("error",r))}}var dd=0;function Yb(e,a){return e.stylesheets&&e.count===0&&$c(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+a);0<e.imgBytes&&dd===0&&(dd=62500*Rb());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>dd?50:800)+a);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jc=null;function $c(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jc=new Map,a.forEach(jb,e),Jc=null,Qc.call(e))}function jb(e,a){if(!(a.state.loading&4)){var r=Jc.get(e);if(r)var l=r.get(null);else{r=new Map,Jc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}f=a.instance,S=f.getAttribute("data-precedence"),p=r.get(S)||l,p===l&&r.set(null,f),r.set(S,f),this.count++,l=Qc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),a.state.loading|=4}}var ul={$$typeof:D,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function Zb(e,a,r,l,f,p,S,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function q_(e,a,r,l,f,p,S,A,H,tt,dt,vt){return e=new Zb(e,a,r,S,H,tt,dt,vt,A),a=1,p===!0&&(a|=24),p=ii(3,null,null,a),e.current=p,p.stateNode=e,a=qf(),a.refCount++,e.pooledCache=a,a.refCount++,p.memoizedState={element:l,isDehydrated:r,cache:a},Kf(p),e}function Y_(e){return e?(e=xr,e):xr}function j_(e,a,r,l,f,p){f=Y_(f),l.context===null?l.context=f:l.pendingContext=f,l=Qa(a),l.payload={element:r},p=p===void 0?null:p,p!==null&&(l.callback=p),r=Ja(e,l,a),r!==null&&(Qn(r,e,a),Go(r,e,a))}function Z_(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function pd(e,a){Z_(e,a),(e=e.alternate)&&Z_(e,a)}function K_(e){if(e.tag===13||e.tag===31){var a=Us(e,67108864);a!==null&&Qn(a,e,67108864),pd(e,67108864)}}function Q_(e){if(e.tag===13||e.tag===31){var a=li();a=cr(a);var r=Us(e,a);r!==null&&Qn(r,e,a),pd(e,a)}}var tu=!0;function Kb(e,a,r,l){var f=O.T;O.T=null;var p=I.p;try{I.p=2,md(e,a,r,l)}finally{I.p=p,O.T=f}}function Qb(e,a,r,l){var f=O.T;O.T=null;var p=I.p;try{I.p=8,md(e,a,r,l)}finally{I.p=p,O.T=f}}function md(e,a,r,l){if(tu){var f=gd(l);if(f===null)ed(e,a,l,eu,r),$_(e,l);else if($b(f,e,a,r,l))l.stopPropagation();else if($_(e,l),a&4&&-1<Jb.indexOf(e)){for(;f!==null;){var p=Xa(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Mt(p.pendingLanes);if(S!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-Lt(S);A.entanglements[1]|=H,S&=~H}Yi(p),(Ne&6)===0&&(Bc=T()+500,al(0))}}break;case 31:case 13:A=Us(p,2),A!==null&&Qn(A,p,2),zc(),pd(p,2)}if(p=gd(l),p===null&&ed(e,a,l,eu,r),p===f)break;f=p}f!==null&&l.stopPropagation()}else ed(e,a,l,null,r)}}function gd(e){return e=_f(e),vd(e)}var eu=null;function vd(e){if(eu=null,e=ka(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=u(a),e!==null)return e;e=null}else if(r===31){if(e=h(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return eu=e,null}function J_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case xt:return 8;case ht:case Wt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var _d=!1,cs=null,us=null,fs=null,fl=new Map,hl=new Map,hs=[],Jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $_(e,a){switch(e){case"focusin":case"focusout":cs=null;break;case"dragenter":case"dragleave":us=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":fl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(a.pointerId)}}function dl(e,a,r,l,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},a!==null&&(a=Xa(a),a!==null&&K_(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),e)}function $b(e,a,r,l,f){switch(a){case"focusin":return cs=dl(cs,e,a,r,l,f),!0;case"dragenter":return us=dl(us,e,a,r,l,f),!0;case"mouseover":return fs=dl(fs,e,a,r,l,f),!0;case"pointerover":var p=f.pointerId;return fl.set(p,dl(fl.get(p)||null,e,a,r,l,f)),!0;case"gotpointercapture":return p=f.pointerId,hl.set(p,dl(hl.get(p)||null,e,a,r,l,f)),!0}return!1}function tx(e){var a=ka(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=u(r),a!==null){e.blockedOn=a,fr(e.priority,function(){Q_(r)});return}}else if(a===31){if(a=h(r),a!==null){e.blockedOn=a,fr(e.priority,function(){Q_(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=gd(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);vf=l,r.target.dispatchEvent(l),vf=null}else return a=Xa(r),a!==null&&K_(a),e.blockedOn=r,!1;a.shift()}return!0}function ex(e,a,r){nu(e)&&r.delete(a)}function tA(){_d=!1,cs!==null&&nu(cs)&&(cs=null),us!==null&&nu(us)&&(us=null),fs!==null&&nu(fs)&&(fs=null),fl.forEach(ex),hl.forEach(ex)}function iu(e,a){e.blockedOn===a&&(e.blockedOn=null,_d||(_d=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,tA)))}var au=null;function nx(e){au!==e&&(au=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){au===e&&(au=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],f=e[a+2];if(typeof l!="function"){if(vd(l||r)===null)continue;break}var p=Xa(r);p!==null&&(e.splice(a,3),a-=3,gh(p,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function kr(e){function a(H){return iu(H,e)}cs!==null&&iu(cs,e),us!==null&&iu(us,e),fs!==null&&iu(fs,e),fl.forEach(a),hl.forEach(a);for(var r=0;r<hs.length;r++){var l=hs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<hs.length&&(r=hs[0],r.blockedOn===null);)tx(r),r.blockedOn===null&&hs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],p=r[l+1],S=f[_n]||null;if(typeof p=="function")S||nx(r);else if(S){var A=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[_n]||null)A=S.formAction;else if(vd(f)!==null)continue}else A=S.action;typeof A=="function"?r[l+1]=A:(r.splice(l,3),l-=3),nx(r)}}}function ix(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function a(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),f!==null&&(f(),f=null)}}}function xd(e){this._internalRoot=e}su.prototype.render=xd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=li();j_(r,l,e,a,null,null)},su.prototype.unmount=xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;j_(e.current,2,null,e,null,null),zc(),a[oa]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var a=ki();e={blockedOn:null,target:e,priority:a};for(var r=0;r<hs.length&&a!==0&&a<hs[r].priority;r++);hs.splice(r,0,e),r===0&&tx(e)}};var ax=t.version;if(ax!=="19.2.4")throw Error(s(527,ax,"19.2.4"));I.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(a),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var eA={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Et=ru.inject(eA),St=ru}catch{}}return ml.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",f=fv,p=hv,S=dv;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError)),a=q_(e,1,!1,null,null,r,l,null,f,p,S,ix),e[oa]=a.current,td(e),new xd(a)},ml.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,f="",p=fv,S=hv,A=dv,H=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),a=q_(e,1,!0,a,r??null,l,f,H,p,S,A,ix),a.context=Y_(null),r=a.current,l=li(),l=cr(l),f=Qa(l),f.callback=null,Ja(r,f,l),r=l,a.current.lanes=r,Bn(a,r),Yi(a),e[oa]=a.current,td(e),new su(a)},ml.version="19.2.4",ml}var px;function fA(){if(px)return Md.exports;px=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Md.exports=uA(),Md.exports}var hA=fA();const Vm="183",dA=0,mx=1,pA=2,Nu=1,mA=2,Tl=3,Ts=0,$n=1,Ua=2,Na=0,uo=1,gx=2,vx=3,_x=4,gA=5,$s=100,vA=101,_A=102,xA=103,yA=104,SA=200,MA=201,EA=202,TA=203,Tp=204,bp=205,bA=206,AA=207,RA=208,CA=209,wA=210,DA=211,UA=212,LA=213,NA=214,Ap=0,Rp=1,Cp=2,po=3,wp=4,Dp=5,Up=6,Lp=7,wS=0,PA=1,OA=2,ta=0,DS=1,US=2,LS=3,NS=4,PS=5,OS=6,FS=7,BS=300,rr=301,mo=302,Ad=303,Rd=304,of=306,Np=1e3,La=1001,Pp=1002,Ln=1003,FA=1004,ou=1005,Fn=1006,Cd=1007,er=1008,Mi=1009,IS=1010,zS=1011,Ll=1012,Hm=1013,aa=1014,Ji=1015,Fa=1016,Gm=1017,km=1018,Nl=1020,VS=35902,HS=35899,GS=1021,kS=1022,zi=1023,Ba=1026,nr=1027,XS=1028,Xm=1029,go=1030,Wm=1031,qm=1033,Pu=33776,Ou=33777,Fu=33778,Bu=33779,Op=35840,Fp=35841,Bp=35842,Ip=35843,zp=36196,Vp=37492,Hp=37496,Gp=37488,kp=37489,Xp=37490,Wp=37491,qp=37808,Yp=37809,jp=37810,Zp=37811,Kp=37812,Qp=37813,Jp=37814,$p=37815,tm=37816,em=37817,nm=37818,im=37819,am=37820,sm=37821,rm=36492,om=36494,lm=36495,cm=36283,um=36284,fm=36285,hm=36286,BA=3200,IA=0,zA=1,Ss="",fi="srgb",vo="srgb-linear",Yu="linear",ze="srgb",Xr=7680,xx=519,VA=512,HA=513,GA=514,Ym=515,kA=516,XA=517,jm=518,WA=519,yx=35044,Sx="300 es",$i=2e3,ju=2001;function qA(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zu(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function YA(){const i=Zu("canvas");return i.style.display="block",i}const Mx={};function Ex(...i){const t="THREE."+i.shift();console.log(t,...i)}function WS(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=i[1];n&&n.isStackTrace?i[0]+=" "+n.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function re(...i){i=WS(i);const t="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...i)}}function Ue(...i){i=WS(i);const t="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...i)}}function Ku(...i){const t=i.join(" ");t in Mx||(Mx[t]=!0,re(...i))}function jA(i,t,n){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const ZA={[Ap]:Rp,[Cp]:Up,[wp]:Lp,[po]:Dp,[Rp]:Ap,[Up]:Cp,[Lp]:wp,[Dp]:po};class xo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=Math.PI/180,dm=180/Math.PI;function Vl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Ee(i,t,n){return Math.max(t,Math.min(n,i))}function KA(i,t){return(i%t+t)%t}function Dd(i,t,n){return(1-n)*i+n*t}function gl(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Re{constructor(t=0,n=0){Re.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*o+t.x,this.y=c*o+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yo{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,u,h){let m=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3],v=c[u+0],y=c[u+1],E=c[u+2],R=c[u+3];if(_!==R||m!==v||d!==y||g!==E){let M=m*v+d*y+g*E+_*R;M<0&&(v=-v,y=-y,E=-E,R=-R,M=-M);let x=1-h;if(M<.9995){const w=Math.acos(M),D=Math.sin(w);x=Math.sin(x*w)/D,h=Math.sin(h*w)/D,m=m*x+v*h,d=d*x+y*h,g=g*x+E*h,_=_*x+R*h}else{m=m*x+v*h,d=d*x+y*h,g=g*x+E*h,_=_*x+R*h;const w=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=w,d*=w,g*=w,_*=w}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,o,c,u){const h=s[o],m=s[o+1],d=s[o+2],g=s[o+3],_=c[u],v=c[u+1],y=c[u+2],E=c[u+3];return t[n]=h*E+g*_+m*y-d*v,t[n+1]=m*E+g*v+d*_-h*y,t[n+2]=d*E+g*y+h*v-m*_,t[n+3]=g*E-h*_-m*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,d=h(s/2),g=h(o/2),_=h(c/2),v=m(s/2),y=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"YZX":this._x=v*g*_+d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_-v*y*E;break;case"XZY":this._x=v*g*_-d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_+v*y*E;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],d=n[2],g=n[6],_=n[10],v=s+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,u=t._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=s*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-s*d,this._z=c*g+u*d+s*m-o*h,this._w=u*g-s*h-o*m-c*d,this._onChangeCallback(),this}slerp(t,n){let s=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(s=-s,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,n=Math.sin(n*d)/g,this._x=this._x*m+s*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,n=0,s=0){rt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Tx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Tx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,u=t.y,h=t.z,m=t.w,d=2*(u*o-h*s),g=2*(h*n-c*o),_=2*(c*s-u*n);return this.x=n+m*d+u*_-h*g,this.y=s+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-s*m,this.z=s*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ud.copy(this).projectOnVector(t),this.sub(Ud)}reflect(t){return this.sub(Ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ud=new rt,Tx=new yo;class pe{constructor(t,n,s,o,c,u,h,m,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,h,m,d)}set(t,n,s,o,c,u,h,m,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=s,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],h=s[3],m=s[6],d=s[1],g=s[4],_=s[7],v=s[2],y=s[5],E=s[8],R=o[0],M=o[3],x=o[6],w=o[1],D=o[4],U=o[7],B=o[2],z=o[5],P=o[8];return c[0]=u*R+h*w+m*B,c[3]=u*M+h*D+m*z,c[6]=u*x+h*U+m*P,c[1]=d*R+g*w+_*B,c[4]=d*M+g*D+_*z,c[7]=d*x+g*U+_*P,c[2]=v*R+y*w+E*B,c[5]=v*M+y*D+E*z,c[8]=v*x+y*U+E*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return n*u*g-n*h*d-s*c*g+s*h*m+o*c*d-o*u*m}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=g*u-h*d,v=h*m-g*c,y=d*c-u*m,E=n*_+s*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=_*R,t[1]=(o*d-g*s)*R,t[2]=(h*s-o*u)*R,t[3]=v*R,t[4]=(g*n-o*m)*R,t[5]=(o*c-h*n)*R,t[6]=y*R,t[7]=(s*m-d*n)*R,t[8]=(u*n-s*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*u+d*h)+u+t,-o*d,o*m,-o*(-d*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ld.makeScale(t,n)),this}rotate(t){return this.premultiply(Ld.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ld.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ld=new pe,bx=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ax=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QA(){const i={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ze&&(o.r=Pa(o.r),o.g=Pa(o.g),o.b=Pa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ze&&(o.r=fo(o.r),o.g=fo(o.g),o.b=fo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ss?Yu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ku("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ku("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[vo]:{primaries:t,whitePoint:s,transfer:Yu,toXYZ:bx,fromXYZ:Ax,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:bx,fromXYZ:Ax,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),i}const Ae=QA();function Pa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wr;class JA{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Wr===void 0&&(Wr=Zu("canvas")),Wr.width=t.width,Wr.height=t.height;const o=Wr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Wr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Zu("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Pa(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Pa(n[s]/255)*255):n[s]=Pa(n[s]);return{data:n,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $A=0;class Zm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=Vl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Nd(o[u].image)):c.push(Nd(o[u]))}else c=Nd(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function Nd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?JA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let t1=0;const Pd=new rt;class Wn extends xo{constructor(t=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,s=La,o=La,c=Fn,u=er,h=zi,m=Mi,d=Wn.DEFAULT_ANISOTROPY,g=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Vl(),this.name="",this.source=new Zm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){re(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==BS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Np:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case Pp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Np:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case Pp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=BS;Wn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,n=0,s=0,o=1){on.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const m=t.elements,d=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],R=m[2],M=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(E+M)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,U=(y+1)/2,B=(x+1)/2,z=(g+v)/4,P=(_+R)/4,b=(E+M)/4;return D>U&&D>B?D<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(D),o=z/s,c=P/s):U>B?U<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),s=z/o,c=b/o):B<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(B),s=P/c,o=b/c),this.set(s,o,c,n),this}let w=Math.sqrt((M-E)*(M-E)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(_-R)/w,this.z=(v-g)/w,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e1 extends xo{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:s.depth},c=new Wn(o),u=s.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Zm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends e1{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class qS extends Wn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n1 extends Wn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(t,n,s,o,c,u,h,m,d,g,_,v,y,E,R,M){vn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,h,m,d,g,_,v,y,E,R,M)}set(t,n,s,o,c,u,h,m,d,g,_,v,y,E,R,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=m,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/qr.setFromMatrixColumn(t,0).length(),c=1/qr.setFromMatrixColumn(t,1).length(),u=1/qr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,u=Math.cos(s),h=Math.sin(s),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,y=u*_,E=h*g,R=h*_;n[0]=m*g,n[4]=-m*_,n[8]=d,n[1]=y+E*d,n[5]=v-R*d,n[9]=-h*m,n[2]=R-v*d,n[6]=E+y*d,n[10]=u*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=d*g,R=d*_;n[0]=v+R*h,n[4]=E*h-y,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=y*h-E,n[6]=R+v*h,n[10]=u*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=d*g,R=d*_;n[0]=v-R*h,n[4]=-u*_,n[8]=E+y*h,n[1]=y+E*h,n[5]=u*g,n[9]=R-v*h,n[2]=-u*d,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const v=u*g,y=u*_,E=h*g,R=h*_;n[0]=m*g,n[4]=E*d-y,n[8]=v*d+R,n[1]=m*_,n[5]=R*d+v,n[9]=y*d-E,n[2]=-d,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,y=u*d,E=h*m,R=h*d;n[0]=m*g,n[4]=R-v*_,n[8]=E*_+y,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=y*_+E,n[10]=v-R*_}else if(t.order==="XZY"){const v=u*m,y=u*d,E=h*m,R=h*d;n[0]=m*g,n[4]=-_,n[8]=d*g,n[1]=v*_+R,n[5]=u*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=h*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(i1,t,a1)}lookAt(t,n,s){const o=this.elements;return ci.subVectors(t,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ps.crossVectors(s,ci),ps.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ps.crossVectors(s,ci)),ps.normalize(),lu.crossVectors(ci,ps),o[0]=ps.x,o[4]=lu.x,o[8]=ci.x,o[1]=ps.y,o[5]=lu.y,o[9]=ci.y,o[2]=ps.z,o[6]=lu.z,o[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],h=s[4],m=s[8],d=s[12],g=s[1],_=s[5],v=s[9],y=s[13],E=s[2],R=s[6],M=s[10],x=s[14],w=s[3],D=s[7],U=s[11],B=s[15],z=o[0],P=o[4],b=o[8],L=o[12],ot=o[1],V=o[5],Y=o[9],$=o[13],st=o[2],K=o[6],O=o[10],I=o[14],et=o[3],ut=o[7],yt=o[11],F=o[15];return c[0]=u*z+h*ot+m*st+d*et,c[4]=u*P+h*V+m*K+d*ut,c[8]=u*b+h*Y+m*O+d*yt,c[12]=u*L+h*$+m*I+d*F,c[1]=g*z+_*ot+v*st+y*et,c[5]=g*P+_*V+v*K+y*ut,c[9]=g*b+_*Y+v*O+y*yt,c[13]=g*L+_*$+v*I+y*F,c[2]=E*z+R*ot+M*st+x*et,c[6]=E*P+R*V+M*K+x*ut,c[10]=E*b+R*Y+M*O+x*yt,c[14]=E*L+R*$+M*I+x*F,c[3]=w*z+D*ot+U*st+B*et,c[7]=w*P+D*V+U*K+B*ut,c[11]=w*b+D*Y+U*O+B*yt,c[15]=w*L+D*$+U*I+B*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],u=t[1],h=t[5],m=t[9],d=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],R=t[7],M=t[11],x=t[15],w=m*y-d*v,D=h*y-d*_,U=h*v-m*_,B=u*y-d*g,z=u*v-m*g,P=u*_-h*g;return n*(R*w-M*D+x*U)-s*(E*w-M*B+x*z)+o*(E*D-R*B+x*P)-c*(E*U-R*z+M*P)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],R=t[13],M=t[14],x=t[15],w=n*h-s*u,D=n*m-o*u,U=n*d-c*u,B=s*m-o*h,z=s*d-c*h,P=o*d-c*m,b=g*R-_*E,L=g*M-v*E,ot=g*x-y*E,V=_*M-v*R,Y=_*x-y*R,$=v*x-y*M,st=w*$-D*Y+U*V+B*ot-z*L+P*b;if(st===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/st;return t[0]=(h*$-m*Y+d*V)*K,t[1]=(o*Y-s*$-c*V)*K,t[2]=(R*P-M*z+x*B)*K,t[3]=(v*z-_*P-y*B)*K,t[4]=(m*ot-u*$-d*L)*K,t[5]=(n*$-o*ot+c*L)*K,t[6]=(M*U-E*P-x*D)*K,t[7]=(g*P-v*U+y*D)*K,t[8]=(u*Y-h*ot+d*b)*K,t[9]=(s*ot-n*Y-c*b)*K,t[10]=(E*z-R*U+x*w)*K,t[11]=(_*U-g*z-y*w)*K,t[12]=(h*L-u*V-m*b)*K,t[13]=(n*V-s*L+o*b)*K,t[14]=(R*D-E*B-M*w)*K,t[15]=(g*B-_*D+v*w)*K,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=t.x,h=t.y,m=t.z,d=c*u,g=c*h;return this.set(d*u+s,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+s,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,u){return this.set(1,s,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,d=c+c,g=u+u,_=h+h,v=c*d,y=c*g,E=c*_,R=u*g,M=u*_,x=h*_,w=m*d,D=m*g,U=m*_,B=s.x,z=s.y,P=s.z;return o[0]=(1-(R+x))*B,o[1]=(y+U)*B,o[2]=(E-D)*B,o[3]=0,o[4]=(y-U)*z,o[5]=(1-(v+x))*z,o[6]=(M+w)*z,o[7]=0,o[8]=(E+D)*P,o[9]=(M-w)*P,o[10]=(1-(v+R))*P,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinant();if(c===0)return s.set(1,1,1),n.identity(),this;let u=qr.set(o[0],o[1],o[2]).length();const h=qr.set(o[4],o[5],o[6]).length(),m=qr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Li.copy(this);const d=1/u,g=1/h,_=1/m;return Li.elements[0]*=d,Li.elements[1]*=d,Li.elements[2]*=d,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,n.setFromRotationMatrix(Li),s.x=u,s.y=h,s.z=m,this}makePerspective(t,n,s,o,c,u,h=$i,m=!1){const d=this.elements,g=2*c/(n-t),_=2*c/(s-o),v=(n+t)/(n-t),y=(s+o)/(s-o);let E,R;if(m)E=c/(u-c),R=u*c/(u-c);else if(h===$i)E=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(h===ju)E=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,s,o,c,u,h=$i,m=!1){const d=this.elements,g=2/(n-t),_=2/(s-o),v=-(n+t)/(n-t),y=-(s+o)/(s-o);let E,R;if(m)E=1/(u-c),R=u/(u-c);else if(h===$i)E=-2/(u-c),R=-(u+c)/(u-c);else if(h===ju)E=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const qr=new rt,Li=new vn,i1=new rt(0,0,0),a1=new rt(1,1,1),ps=new rt,lu=new rt,ci=new rt,Rx=new vn,Cx=new yo;class Ia{constructor(t=0,n=0,s=0,o=Ia.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return Rx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rx,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Cx.setFromEuler(this),this.setFromQuaternion(Cx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ia.DEFAULT_ORDER="XYZ";class YS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let s1=0;const wx=new rt,Yr=new yo,Aa=new vn,cu=new rt,vl=new rt,r1=new rt,o1=new yo,Dx=new rt(1,0,0),Ux=new rt(0,1,0),Lx=new rt(0,0,1),Nx={type:"added"},l1={type:"removed"},jr={type:"childadded",child:null},Od={type:"childremoved",child:null};class hi extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DEFAULT_UP.clone();const t=new rt,n=new Ia,s=new yo,o=new rt(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new vn},normalMatrix:{value:new pe}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=hi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new YS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Yr.setFromAxisAngle(t,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,n){return Yr.setFromAxisAngle(t,n),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(Dx,t)}rotateY(t){return this.rotateOnAxis(Ux,t)}rotateZ(t){return this.rotateOnAxis(Lx,t)}translateOnAxis(t,n){return wx.copy(t).applyQuaternion(this.quaternion),this.position.add(wx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Dx,t)}translateY(t){return this.translateOnAxis(Ux,t)}translateZ(t){return this.translateOnAxis(Lx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?cu.copy(t):cu.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(vl,cu,this.up):Aa.lookAt(cu,vl,this.up),this.quaternion.setFromRotationMatrix(Aa),o&&(Aa.extractRotation(o.matrixWorld),Yr.setFromRotationMatrix(Aa),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nx),jr.child=t,this.dispatchEvent(jr),jr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(l1),Od.child=t,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nx),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,t,r1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,o1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,s=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*s-c[8]*o,c[13]+=s-c[1]*n-c[5]*s-c[9]*o,c[14]+=o-c[2]*n-c[6]*s-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),d=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),E=u(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}hi.DEFAULT_UP=new rt(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class uu extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c1={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const R of t.hand.values()){const M=n.getJointPose(R,s),x=this._getHandJoint(d,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new uu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}const jS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},fu={h:0,s:0,l:0};function Bd(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class ke{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ae.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Ae.workingColorSpace){if(t=KA(t,1),n=Ee(n,0,1),s=Ee(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=Bd(u,c,t+1/3),this.g=Bd(u,c,t),this.b=Bd(u,c,t-1/3)}return Ae.colorSpaceToWorking(this,o),this}setStyle(t,n=fi){function s(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:re("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=fi){const s=jS[t.toLowerCase()];return s!==void 0?this.setHex(s,n):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Ae.workingToColorSpace(On.copy(this),t),Math.round(Ee(On.r*255,0,255))*65536+Math.round(Ee(On.g*255,0,255))*256+Math.round(Ee(On.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(On.copy(this),n);const s=On.r,o=On.g,c=On.b,u=Math.max(s,o,c),h=Math.min(s,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case s:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-s)/_+2;break;case c:m=(s-o)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=fi){Ae.workingToColorSpace(On.copy(this),t);const n=On.r,s=On.g,o=On.b;return t!==fi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(ms),this.setHSL(ms.h+t,ms.s+n,ms.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(ms),t.getHSL(fu);const s=Dd(ms.h,fu.h,n),o=Dd(ms.s,fu.s,n),c=Dd(ms.l,fu.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new ke;ke.NAMES=jS;class u1 extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ia,this.environmentIntensity=1,this.environmentRotation=new Ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ni=new rt,Ra=new rt,Id=new rt,Ca=new rt,Zr=new rt,Kr=new rt,Px=new rt,zd=new rt,Vd=new rt,Hd=new rt,Gd=new on,kd=new on,Xd=new on;class Ii{constructor(t=new rt,n=new rt,s=new rt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Ni.subVectors(t,n),o.cross(Ni);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){Ni.subVectors(o,n),Ra.subVectors(s,n),Id.subVectors(t,n);const u=Ni.dot(Ni),h=Ni.dot(Ra),m=Ni.dot(Id),d=Ra.dot(Ra),g=Ra.dot(Id),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*m-h*g)*v,E=(u*g-h*m)*v;return c.set(1-y-E,E,y)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(t,n,s,o,c,u,h,m){return this.getBarycoord(t,n,s,o,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(u,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(t,n,s,o,c,u){return Gd.setScalar(0),kd.setScalar(0),Xd.setScalar(0),Gd.fromBufferAttribute(t,n),kd.fromBufferAttribute(t,s),Xd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Gd,c.x),u.addScaledVector(kd,c.y),u.addScaledVector(Xd,c.z),u}static isFrontFacing(t,n,s,o){return Ni.subVectors(s,n),Ra.subVectors(t,n),Ni.cross(Ra).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Ni.cross(Ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ii.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return Ii.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return Ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let u,h;Zr.subVectors(o,s),Kr.subVectors(c,s),zd.subVectors(t,s);const m=Zr.dot(zd),d=Kr.dot(zd);if(m<=0&&d<=0)return n.copy(s);Vd.subVectors(t,o);const g=Zr.dot(Vd),_=Kr.dot(Vd);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(s).addScaledVector(Zr,u);Hd.subVectors(t,c);const y=Zr.dot(Hd),E=Kr.dot(Hd);if(E>=0&&y<=E)return n.copy(c);const R=y*d-m*E;if(R<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(s).addScaledVector(Kr,h);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return Px.subVectors(c,o),h=(_-g)/(_-g+(y-E)),n.copy(o).addScaledVector(Px,h);const x=1/(M+R+v);return u=R*x,h=v*x,n.copy(s).addScaledVector(Zr,u).addScaledVector(Kr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Hl{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Pi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Pi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Pi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Pi):Pi.fromBufferAttribute(c,u),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hu.copy(s.boundingBox)),hu.applyMatrix4(t.matrixWorld),this.union(hu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_l),du.subVectors(this.max,_l),Qr.subVectors(t.a,_l),Jr.subVectors(t.b,_l),$r.subVectors(t.c,_l),gs.subVectors(Jr,Qr),vs.subVectors($r,Jr),Xs.subVectors(Qr,$r);let n=[0,-gs.z,gs.y,0,-vs.z,vs.y,0,-Xs.z,Xs.y,gs.z,0,-gs.x,vs.z,0,-vs.x,Xs.z,0,-Xs.x,-gs.y,gs.x,0,-vs.y,vs.x,0,-Xs.y,Xs.x,0];return!Wd(n,Qr,Jr,$r,du)||(n=[1,0,0,0,1,0,0,0,1],!Wd(n,Qr,Jr,$r,du))?!1:(pu.crossVectors(gs,vs),n=[pu.x,pu.y,pu.z],Wd(n,Qr,Jr,$r,du))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wa=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Pi=new rt,hu=new Hl,Qr=new rt,Jr=new rt,$r=new rt,gs=new rt,vs=new rt,Xs=new rt,_l=new rt,du=new rt,pu=new rt,Ws=new rt;function Wd(i,t,n,s,o){for(let c=0,u=i.length-3;c<=u;c+=3){Ws.fromArray(i,c);const h=o.x*Math.abs(Ws.x)+o.y*Math.abs(Ws.y)+o.z*Math.abs(Ws.z),m=t.dot(Ws),d=n.dot(Ws),g=s.dot(Ws);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const mn=new rt,mu=new Re;let f1=0;class na{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=yx,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)mu.fromBufferAttribute(this,n),mu.applyMatrix3(t),this.setXY(n,mu.x,mu.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix3(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(t),this.setXYZ(n,mn.x,mn.y,mn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=gl(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Jn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=gl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=gl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=gl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=gl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),s=Jn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),s=Jn(s,this.array),o=Jn(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),s=Jn(s,this.array),o=Jn(o,this.array),c=Jn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yx&&(t.usage=this.usage),t}}class ZS extends na{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class KS extends na{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Oa extends na{constructor(t,n,s){super(new Float32Array(t),n,s)}}const h1=new Hl,xl=new rt,qd=new rt;class Km{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):h1.setFromPoints(t).getCenter(s);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xl.subVectors(t,this.center);const n=xl.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(xl,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xl.copy(t.center).add(qd)),this.expandByPoint(xl.copy(t.center).sub(qd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let d1=0;const Si=new vn,Yd=new hi,to=new rt,ui=new Hl,yl=new Hl,bn=new rt;class Ha extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qA(t)?KS:ZS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,n,s){return Si.makeTranslation(t,n,s),this.applyMatrix4(Si),this}scale(t,n,s){return Si.makeScale(t,n,s),this.applyMatrix4(Si),this}lookAt(t){return Yd.lookAt(t),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Oa(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Km);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ui.min,yl.min),ui.expandByPoint(bn),bn.addVectors(ui.max,yl.max),ui.expandByPoint(bn)):(ui.expandByPoint(yl.min),ui.expandByPoint(yl.max))}ui.getCenter(s);let o=0;for(let c=0,u=t.count;c<u;c++)bn.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(bn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)bn.fromBufferAttribute(h,d),m&&(to.fromBufferAttribute(t,d),bn.add(to)),o=Math.max(o,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new na(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new rt,m[b]=new rt;const d=new rt,g=new rt,_=new rt,v=new Re,y=new Re,E=new Re,R=new rt,M=new rt;function x(b,L,ot){d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,L),_.fromBufferAttribute(s,ot),v.fromBufferAttribute(c,b),y.fromBufferAttribute(c,L),E.fromBufferAttribute(c,ot),g.sub(d),_.sub(d),y.sub(v),E.sub(v);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(V),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),h[b].add(R),h[L].add(R),h[ot].add(R),m[b].add(M),m[L].add(M),m[ot].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,L=w.length;b<L;++b){const ot=w[b],V=ot.start,Y=ot.count;for(let $=V,st=V+Y;$<st;$+=3)x(t.getX($+0),t.getX($+1),t.getX($+2))}const D=new rt,U=new rt,B=new rt,z=new rt;function P(b){B.fromBufferAttribute(o,b),z.copy(B);const L=h[b];D.copy(L),D.sub(B.multiplyScalar(B.dot(L))).normalize(),U.crossVectors(z,L);const V=U.dot(m[b])<0?-1:1;u.setXYZW(b,D.x,D.y,D.z,V)}for(let b=0,L=w.length;b<L;++b){const ot=w[b],V=ot.start,Y=ot.count;for(let $=V,st=V+Y;$<st;$+=3)P(t.getX($+0)),P(t.getX($+1)),P(t.getX($+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new na(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const o=new rt,c=new rt,u=new rt,h=new rt,m=new rt,d=new rt,g=new rt,_=new rt;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),R=t.getX(v+1),M=t.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),d.fromBufferAttribute(s,M),h.add(g),m.add(g),d.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let y=0,E=0;for(let R=0,M=m.length;R<M;R++){h.isInterleavedBufferAttribute?y=m[R]*h.data.stride+h.offset:y=m[R]*g;for(let x=0;x<g;x++)v[E++]=d[y++]}return new na(v,g,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ha,s=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=t(m,s);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=t(v,s);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let p1=0;class lf extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Vl(),this.name="",this.type="Material",this.blending=uo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tp,this.blendDst=bp,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){re(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){re(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(s.blending=this.blending),this.side!==Ts&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Tp&&(s.blendSrc=this.blendSrc),this.blendDst!==bp&&(s.blendDst=this.blendDst),this.blendEquation!==$s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Da=new rt,jd=new rt,gu=new rt,_s=new rt,Zd=new rt,vu=new rt,Kd=new rt;class m1{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){jd.copy(t).add(n).multiplyScalar(.5),gu.copy(n).sub(t).normalize(),_s.copy(this.origin).sub(jd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(gu),h=_s.dot(this.direction),m=-_s.dot(gu),d=_s.lengthSq(),g=Math.abs(1-u*u);let _,v,y,E;if(g>0)if(_=u*m-h,v=u*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const R=1/g;_*=R,v*=R,y=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(jd).addScaledVector(gu,v),y}intersectSphere(t,n){Da.subVectors(t.center,this.origin);const s=Da.dot(this.direction),o=Da.dot(Da)-s*s,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=s-u,m=s+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(s=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(s=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||h>o)||((h>s||s!==s)&&(s=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,n,s,o,c){Zd.subVectors(n,t),vu.subVectors(s,t),Kd.crossVectors(Zd,vu);let u=this.direction.dot(Kd),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;_s.subVectors(this.origin,t);const m=h*this.direction.dot(vu.crossVectors(_s,vu));if(m<0)return null;const d=h*this.direction.dot(Zd.cross(_s));if(d<0||m+d>u)return null;const g=-h*_s.dot(Kd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class QS extends lf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ia,this.combine=wS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ox=new vn,qs=new m1,_u=new Km,Fx=new rt,xu=new rt,yu=new rt,Su=new rt,Qd=new rt,Mu=new rt,Bx=new rt,Eu=new rt;class sa extends hi{constructor(t=new Ha,n=new QS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Mu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(Qd.fromBufferAttribute(_,t),u?Mu.addScaledVector(Qd,g):Mu.addScaledVector(Qd.sub(n),g))}n.add(Mu)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_u.copy(s.boundingSphere),_u.applyMatrix4(c),qs.copy(t.ray).recast(t.near),!(_u.containsPoint(qs.origin)===!1&&(qs.intersectSphere(_u,Fx)===null||qs.origin.distanceToSquared(Fx)>(t.far-t.near)**2))&&(Ox.copy(c).invert(),qs.copy(t.ray).applyMatrix4(Ox),!(s.boundingBox!==null&&qs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,qs)))}_computeIntersections(t,n,s){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,R=v.length;E<R;E++){const M=v[E],x=u[M.materialIndex],w=Math.max(M.start,y.start),D=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let U=w,B=D;U<B;U+=3){const z=h.getX(U),P=h.getX(U+1),b=h.getX(U+2);o=Tu(this,x,t,s,d,g,_,z,P,b),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let M=E,x=R;M<x;M+=3){const w=h.getX(M),D=h.getX(M+1),U=h.getX(M+2);o=Tu(this,u,t,s,d,g,_,w,D,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,R=v.length;E<R;E++){const M=v[E],x=u[M.materialIndex],w=Math.max(M.start,y.start),D=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=w,B=D;U<B;U+=3){const z=U,P=U+1,b=U+2;o=Tu(this,x,t,s,d,g,_,z,P,b),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=E,x=R;M<x;M+=3){const w=M,D=M+1,U=M+2;o=Tu(this,u,t,s,d,g,_,w,D,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function g1(i,t,n,s,o,c,u,h){let m;if(t.side===$n?m=s.intersectTriangle(u,c,o,!0,h):m=s.intersectTriangle(o,c,u,t.side===Ts,h),m===null)return null;Eu.copy(h),Eu.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(Eu);return d<n.near||d>n.far?null:{distance:d,point:Eu.clone(),object:i}}function Tu(i,t,n,s,o,c,u,h,m,d){i.getVertexPosition(h,xu),i.getVertexPosition(m,yu),i.getVertexPosition(d,Su);const g=g1(i,t,n,s,xu,yu,Su,Bx);if(g){const _=new rt;Ii.getBarycoord(Bx,xu,yu,Su,_),o&&(g.uv=Ii.getInterpolatedAttribute(o,h,m,d,_,new Re)),c&&(g.uv1=Ii.getInterpolatedAttribute(c,h,m,d,_,new Re)),u&&(g.normal=Ii.getInterpolatedAttribute(u,h,m,d,_,new rt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new rt,materialIndex:0};Ii.getNormal(xu,yu,Su,v.normal),g.face=v,g.barycoord=_}return g}class v1 extends Wn{constructor(t=null,n=1,s=1,o,c,u,h,m,d=Ln,g=Ln,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new rt,_1=new rt,x1=new pe;class Qs{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=Jd.subVectors(s,n).cross(_1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Jd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||x1.getNormalMatrix(t),o=this.coplanarPoint(Jd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ys=new Km,y1=new Re(.5,.5),bu=new rt;class JS{constructor(t=new Qs,n=new Qs,s=new Qs,o=new Qs,c=new Qs,u=new Qs){this.planes=[t,n,s,o,c,u]}set(t,n,s,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=$i,s=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],y=c[7],E=c[8],R=c[9],M=c[10],x=c[11],w=c[12],D=c[13],U=c[14],B=c[15];if(o[0].setComponents(d-u,y-g,x-E,B-w).normalize(),o[1].setComponents(d+u,y+g,x+E,B+w).normalize(),o[2].setComponents(d+h,y+_,x+R,B+D).normalize(),o[3].setComponents(d-h,y-_,x-R,B-D).normalize(),s)o[4].setComponents(m,v,M,U).normalize(),o[5].setComponents(d-m,y-v,x-M,B-U).normalize();else if(o[4].setComponents(d-m,y-v,x-M,B-U).normalize(),n===$i)o[5].setComponents(d+m,y+v,x+M,B+U).normalize();else if(n===ju)o[5].setComponents(m,v,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(t){Ys.center.set(0,0,0);const n=y1.distanceTo(t.center);return Ys.radius=.7071067811865476+n,Ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(bu.x=o.normal.x>0?t.max.x:t.min.x,bu.y=o.normal.y>0?t.max.y:t.min.y,bu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(bu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $S extends Wn{constructor(t=[],n=rr,s,o,c,u,h,m,d,g){super(t,n,s,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pl extends Wn{constructor(t,n,s=aa,o,c,u,h=Ln,m=Ln,d,g=Ba,_=1){if(g!==Ba&&g!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,u,h,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class S1 extends Pl{constructor(t,n=aa,s=rr,o,c,u=Ln,h=Ln,m,d=Ba){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,s,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class tM extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gl extends Ha{constructor(t=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,s,n,t,u,c,0),E("z","y","x",1,-1,s,n,-t,u,c,1),E("x","z","y",1,1,t,s,n,o,u,2),E("x","z","y",1,-1,t,s,-n,o,u,3),E("x","y","z",1,-1,t,n,s,o,c,4),E("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(m),this.setAttribute("position",new Oa(d,3)),this.setAttribute("normal",new Oa(g,3)),this.setAttribute("uv",new Oa(_,2));function E(R,M,x,w,D,U,B,z,P,b,L){const ot=U/P,V=B/b,Y=U/2,$=B/2,st=z/2,K=P+1,O=b+1;let I=0,et=0;const ut=new rt;for(let yt=0;yt<O;yt++){const F=yt*V-$;for(let j=0;j<K;j++){const gt=j*ot-Y;ut[R]=gt*w,ut[M]=F*D,ut[x]=st,d.push(ut.x,ut.y,ut.z),ut[R]=0,ut[M]=0,ut[x]=z>0?1:-1,g.push(ut.x,ut.y,ut.z),_.push(j/P),_.push(1-yt/b),I+=1}}for(let yt=0;yt<b;yt++)for(let F=0;F<P;F++){const j=v+F+K*yt,gt=v+F+K*(yt+1),bt=v+(F+1)+K*(yt+1),Nt=v+(F+1)+K*yt;m.push(j,gt,Nt),m.push(gt,bt,Nt),et+=6}h.addGroup(y,et,L),y+=et,v+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class kl extends Ha{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(s),m=Math.floor(o),d=h+1,g=m+1,_=t/h,v=n/m,y=[],E=[],R=[],M=[];for(let x=0;x<g;x++){const w=x*v-u;for(let D=0;D<d;D++){const U=D*_-c;E.push(U,-w,0),R.push(0,0,1),M.push(D/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let w=0;w<h;w++){const D=w+d*x,U=w+d*(x+1),B=w+1+d*(x+1),z=w+1+d*x;y.push(D,U,z),y.push(U,B,z)}this.setIndex(y),this.setAttribute("position",new Oa(E,3)),this.setAttribute("normal",new Oa(R,3)),this.setAttribute("uv",new Oa(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.width,t.height,t.widthSegments,t.heightSegments)}}function _o(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function Gn(i){const t={};for(let n=0;n<i.length;n++){const s=_o(i[n]);for(const o in s)t[o]=s[o]}return t}function M1(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function eM(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const E1={clone:_o,merge:Gn};var T1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends lf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T1,this.fragmentShader=b1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=M1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class A1 extends Gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class R1 extends lf{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class C1 extends lf{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Au=new rt,Ru=new yo,ji=new rt;class nM extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Au,Ru,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,ji.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Au,Ru,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new rt,Ix=new Re,zx=new Re;class Bi extends nM{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=dm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dm*2*Math.atan(Math.tan(wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,n){return this.getViewBounds(t,Ix,zx),n.subVectors(zx,Ix)}setViewOffset(t,n,s,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(wd*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*s/d,o*=u.width/m,s*=u.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Qm extends nM{constructor(t=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,u=s+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const eo=-90,no=1;class w1 extends hi{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Bi(eo,no,t,n);o.layers=this.layers,this.add(o);const c=new Bi(eo,no,t,n);c.layers=this.layers,this.add(c);const u=new Bi(eo,no,t,n);u.layers=this.layers,this.add(u);const h=new Bi(eo,no,t,n);h.layers=this.layers,this.add(h);const m=new Bi(eo,no,t,n);m.layers=this.layers,this.add(m);const d=new Bi(eo,no,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,h,m]=n;for(const d of n)this.remove(d);if(t===$i)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ju)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(s,1,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(s,2,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(s,3,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(s,4,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class D1 extends Bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class U1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,re("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Vx(i,t,n,s){const o=L1(s);switch(n){case GS:return i*t;case XS:return i*t/o.components*o.byteLength;case Xm:return i*t/o.components*o.byteLength;case go:return i*t*2/o.components*o.byteLength;case Wm:return i*t*2/o.components*o.byteLength;case kS:return i*t*3/o.components*o.byteLength;case zi:return i*t*4/o.components*o.byteLength;case qm:return i*t*4/o.components*o.byteLength;case Pu:case Ou:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fu:case Bu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fp:case Ip:return Math.max(i,16)*Math.max(t,8)/4;case Op:case Bp:return Math.max(i,8)*Math.max(t,8)/2;case zp:case Vp:case Gp:case kp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hp:case Xp:case Wp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jp:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kp:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qp:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jp:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $p:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tm:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case em:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nm:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case im:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case am:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sm:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rm:case om:case lm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cm:case um:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fm:case hm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function L1(i){switch(i){case Mi:case IS:return{byteLength:1,components:1};case Ll:case zS:case Fa:return{byteLength:2,components:1};case Gm:case km:return{byteLength:2,components:4};case aa:case Hm:case Ji:return{byteLength:4,components:1};case VS:case HS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vm}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vm);function iM(){let i=null,t=!1,n=null,s=null;function o(c,u){n(c,u),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function N1(i){const t=new WeakMap;function n(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=i.createBuffer();i.bindBuffer(m,v),i.bufferData(m,d,g),h.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,d){const g=m.array,_=m.updateRanges;if(i.bindBuffer(d,h),_.length===0)i.bufferSubData(d,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],R=_[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++v,_[v]=R)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const R=_[y];i.bufferSubData(d,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(i.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var P1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,k1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,iR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uR="gl_FragColor = linearToOutputTexel( gl_FragColor );",fR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_R=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ER=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$R=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_C=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$C=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:P1,alphahash_pars_fragment:O1,alphamap_fragment:F1,alphamap_pars_fragment:B1,alphatest_fragment:I1,alphatest_pars_fragment:z1,aomap_fragment:V1,aomap_pars_fragment:H1,batching_pars_vertex:G1,batching_vertex:k1,begin_vertex:X1,beginnormal_vertex:W1,bsdfs:q1,iridescence_fragment:Y1,bumpmap_pars_fragment:j1,clipping_planes_fragment:Z1,clipping_planes_pars_fragment:K1,clipping_planes_pars_vertex:Q1,clipping_planes_vertex:J1,color_fragment:$1,color_pars_fragment:tR,color_pars_vertex:eR,color_vertex:nR,common:iR,cube_uv_reflection_fragment:aR,defaultnormal_vertex:sR,displacementmap_pars_vertex:rR,displacementmap_vertex:oR,emissivemap_fragment:lR,emissivemap_pars_fragment:cR,colorspace_fragment:uR,colorspace_pars_fragment:fR,envmap_fragment:hR,envmap_common_pars_fragment:dR,envmap_pars_fragment:pR,envmap_pars_vertex:mR,envmap_physical_pars_fragment:AR,envmap_vertex:gR,fog_vertex:vR,fog_pars_vertex:_R,fog_fragment:xR,fog_pars_fragment:yR,gradientmap_pars_fragment:SR,lightmap_pars_fragment:MR,lights_lambert_fragment:ER,lights_lambert_pars_fragment:TR,lights_pars_begin:bR,lights_toon_fragment:RR,lights_toon_pars_fragment:CR,lights_phong_fragment:wR,lights_phong_pars_fragment:DR,lights_physical_fragment:UR,lights_physical_pars_fragment:LR,lights_fragment_begin:NR,lights_fragment_maps:PR,lights_fragment_end:OR,logdepthbuf_fragment:FR,logdepthbuf_pars_fragment:BR,logdepthbuf_pars_vertex:IR,logdepthbuf_vertex:zR,map_fragment:VR,map_pars_fragment:HR,map_particle_fragment:GR,map_particle_pars_fragment:kR,metalnessmap_fragment:XR,metalnessmap_pars_fragment:WR,morphinstance_vertex:qR,morphcolor_vertex:YR,morphnormal_vertex:jR,morphtarget_pars_vertex:ZR,morphtarget_vertex:KR,normal_fragment_begin:QR,normal_fragment_maps:JR,normal_pars_fragment:$R,normal_pars_vertex:tC,normal_vertex:eC,normalmap_pars_fragment:nC,clearcoat_normal_fragment_begin:iC,clearcoat_normal_fragment_maps:aC,clearcoat_pars_fragment:sC,iridescence_pars_fragment:rC,opaque_fragment:oC,packing:lC,premultiplied_alpha_fragment:cC,project_vertex:uC,dithering_fragment:fC,dithering_pars_fragment:hC,roughnessmap_fragment:dC,roughnessmap_pars_fragment:pC,shadowmap_pars_fragment:mC,shadowmap_pars_vertex:gC,shadowmap_vertex:vC,shadowmask_pars_fragment:_C,skinbase_vertex:xC,skinning_pars_vertex:yC,skinning_vertex:SC,skinnormal_vertex:MC,specularmap_fragment:EC,specularmap_pars_fragment:TC,tonemapping_fragment:bC,tonemapping_pars_fragment:AC,transmission_fragment:RC,transmission_pars_fragment:CC,uv_pars_fragment:wC,uv_pars_vertex:DC,uv_vertex:UC,worldpos_vertex:LC,background_vert:NC,background_frag:PC,backgroundCube_vert:OC,backgroundCube_frag:FC,cube_vert:BC,cube_frag:IC,depth_vert:zC,depth_frag:VC,distance_vert:HC,distance_frag:GC,equirect_vert:kC,equirect_frag:XC,linedashed_vert:WC,linedashed_frag:qC,meshbasic_vert:YC,meshbasic_frag:jC,meshlambert_vert:ZC,meshlambert_frag:KC,meshmatcap_vert:QC,meshmatcap_frag:JC,meshnormal_vert:$C,meshnormal_frag:tw,meshphong_vert:ew,meshphong_frag:nw,meshphysical_vert:iw,meshphysical_frag:aw,meshtoon_vert:sw,meshtoon_frag:rw,points_vert:ow,points_frag:lw,shadow_vert:cw,shadow_frag:uw,sprite_vert:fw,sprite_frag:hw},Ut={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Qi={basic:{uniforms:Gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ke(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([Ut.points,Ut.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([Ut.common,Ut.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([Ut.sprite,Ut.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Gn([Ut.common,Ut.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Gn([Ut.lights,Ut.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Qi.physical={uniforms:Gn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Cu={r:0,b:0,g:0},js=new Ia,dw=new vn;function pw(i,t,n,s,o,c){const u=new ke(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function y(w){let D=w.isScene===!0?w.background:null;if(D&&D.isTexture){const U=w.backgroundBlurriness>0;D=t.get(D,U)}return D}function E(w){let D=!1;const U=y(w);U===null?M(u,h):U&&U.isColor&&(M(U,1),D=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(w,D){const U=y(D);U&&(U.isCubeTexture||U.mapping===of)?(d===void 0&&(d=new sa(new Gl(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:_o(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,z,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),js.copy(D.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(dw.makeRotationFromEuler(js)),d.material.toneMapped=Ae.getTransfer(U.colorSpace)!==ze,(g!==U||_!==U.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,g=U,_=U.version,v=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new sa(new kl(2,2),new Gi({name:"BackgroundMaterial",uniforms:_o(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ae.getTransfer(U.colorSpace)!==ze,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||_!==U.version||v!==i.toneMapping)&&(m.material.needsUpdate=!0,g=U,_=U.version,v=i.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,D){w.getRGB(Cu,eM(i)),n.buffers.color.setClear(Cu.r,Cu.g,Cu.b,D,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,D=1){u.set(w),h=D,M(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,M(u,h)},render:E,addToRenderList:R,dispose:x}}function mw(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=v(null);let c=o,u=!1;function h(V,Y,$,st,K){let O=!1;const I=_(V,st,$,Y);c!==I&&(c=I,d(c.object)),O=y(V,st,$,K),O&&E(V,st,$,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,U(V,Y,$,st),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function m(){return i.createVertexArray()}function d(V){return i.bindVertexArray(V)}function g(V){return i.deleteVertexArray(V)}function _(V,Y,$,st){const K=st.wireframe===!0;let O=s[Y.id];O===void 0&&(O={},s[Y.id]=O);const I=V.isInstancedMesh===!0?V.id:0;let et=O[I];et===void 0&&(et={},O[I]=et);let ut=et[$.id];ut===void 0&&(ut={},et[$.id]=ut);let yt=ut[K];return yt===void 0&&(yt=v(m()),ut[K]=yt),yt}function v(V){const Y=[],$=[],st=[];for(let K=0;K<n;K++)Y[K]=0,$[K]=0,st[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:$,attributeDivisors:st,object:V,attributes:{},index:null}}function y(V,Y,$,st){const K=c.attributes,O=Y.attributes;let I=0;const et=$.getAttributes();for(const ut in et)if(et[ut].location>=0){const F=K[ut];let j=O[ut];if(j===void 0&&(ut==="instanceMatrix"&&V.instanceMatrix&&(j=V.instanceMatrix),ut==="instanceColor"&&V.instanceColor&&(j=V.instanceColor)),F===void 0||F.attribute!==j||j&&F.data!==j.data)return!0;I++}return c.attributesNum!==I||c.index!==st}function E(V,Y,$,st){const K={},O=Y.attributes;let I=0;const et=$.getAttributes();for(const ut in et)if(et[ut].location>=0){let F=O[ut];F===void 0&&(ut==="instanceMatrix"&&V.instanceMatrix&&(F=V.instanceMatrix),ut==="instanceColor"&&V.instanceColor&&(F=V.instanceColor));const j={};j.attribute=F,F&&F.data&&(j.data=F.data),K[ut]=j,I++}c.attributes=K,c.attributesNum=I,c.index=st}function R(){const V=c.newAttributes;for(let Y=0,$=V.length;Y<$;Y++)V[Y]=0}function M(V){x(V,0)}function x(V,Y){const $=c.newAttributes,st=c.enabledAttributes,K=c.attributeDivisors;$[V]=1,st[V]===0&&(i.enableVertexAttribArray(V),st[V]=1),K[V]!==Y&&(i.vertexAttribDivisor(V,Y),K[V]=Y)}function w(){const V=c.newAttributes,Y=c.enabledAttributes;for(let $=0,st=Y.length;$<st;$++)Y[$]!==V[$]&&(i.disableVertexAttribArray($),Y[$]=0)}function D(V,Y,$,st,K,O,I){I===!0?i.vertexAttribIPointer(V,Y,$,K,O):i.vertexAttribPointer(V,Y,$,st,K,O)}function U(V,Y,$,st){R();const K=st.attributes,O=$.getAttributes(),I=Y.defaultAttributeValues;for(const et in O){const ut=O[et];if(ut.location>=0){let yt=K[et];if(yt===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(yt=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(yt=V.instanceColor)),yt!==void 0){const F=yt.normalized,j=yt.itemSize,gt=t.get(yt);if(gt===void 0)continue;const bt=gt.buffer,Nt=gt.type,nt=gt.bytesPerElement,_t=Nt===i.INT||Nt===i.UNSIGNED_INT||yt.gpuType===Hm;if(yt.isInterleavedBufferAttribute){const Tt=yt.data,Xt=Tt.stride,Qt=yt.offset;if(Tt.isInstancedInterleavedBuffer){for(let ee=0;ee<ut.locationSize;ee++)x(ut.location+ee,Tt.meshPerAttribute);V.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let ee=0;ee<ut.locationSize;ee++)M(ut.location+ee);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let ee=0;ee<ut.locationSize;ee++)D(ut.location+ee,j/ut.locationSize,Nt,F,Xt*nt,(Qt+j/ut.locationSize*ee)*nt,_t)}else{if(yt.isInstancedBufferAttribute){for(let Tt=0;Tt<ut.locationSize;Tt++)x(ut.location+Tt,yt.meshPerAttribute);V.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Tt=0;Tt<ut.locationSize;Tt++)M(ut.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let Tt=0;Tt<ut.locationSize;Tt++)D(ut.location+Tt,j/ut.locationSize,Nt,F,j*nt,j/ut.locationSize*Tt*nt,_t)}}else if(I!==void 0){const F=I[et];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(ut.location,F);break;case 3:i.vertexAttrib3fv(ut.location,F);break;case 4:i.vertexAttrib4fv(ut.location,F);break;default:i.vertexAttrib1fv(ut.location,F)}}}}w()}function B(){L();for(const V in s){const Y=s[V];for(const $ in Y){const st=Y[$];for(const K in st){const O=st[K];for(const I in O)g(O[I].object),delete O[I];delete st[K]}}delete s[V]}}function z(V){if(s[V.id]===void 0)return;const Y=s[V.id];for(const $ in Y){const st=Y[$];for(const K in st){const O=st[K];for(const I in O)g(O[I].object),delete O[I];delete st[K]}}delete s[V.id]}function P(V){for(const Y in s){const $=s[Y];for(const st in $){const K=$[st];if(K[V.id]===void 0)continue;const O=K[V.id];for(const I in O)g(O[I].object),delete O[I];delete K[V.id]}}}function b(V){for(const Y in s){const $=s[Y],st=V.isInstancedMesh===!0?V.id:0,K=$[st];if(K!==void 0){for(const O in K){const I=K[O];for(const et in I)g(I[et].object),delete I[et];delete K[O]}delete $[st],Object.keys($).length===0&&delete s[Y]}}}function L(){ot(),u=!0,c!==o&&(c=o,d(c.object))}function ot(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:L,resetDefaultState:ot,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:M,disableUnusedAttributes:w}}function gw(i,t,n){let s;function o(d){s=d}function c(d,g){i.drawArrays(s,d,g),n.update(g,s,1)}function u(d,g,_){_!==0&&(i.drawArraysInstanced(s,d,g,_),n.update(g,s,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,s,1)}function m(d,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,g,0,v,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*v[R];n.update(E,s,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function vw(i,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(P){return!(P!==zi&&s.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const b=P===Fa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Mi&&s.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ji&&!b)}function m(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(re("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),U=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=i.getParameter(i.MAX_SAMPLES),z=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:U,maxSamples:B,samples:z}}function _w(i){const t=this;let n=null,s=0,o=!1,c=!1;const u=new Qs,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||o;return o=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,x=i.get(_);if(!o||E===null||E.length===0||c&&!M)c?g(null):d();else{const w=c?0:s,D=w*4;let U=x.clippingState||null;m.value=U,U=g(E,v,D,y);for(let B=0;B!==D;++B)U[B]=n[B];x.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=w}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,y,E){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const x=y+R*4,w=v.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<x)&&(M=new Float32Array(x));for(let D=0,U=y;D!==R;++D,U+=4)u.copy(_[D]).applyMatrix4(w,h),u.normal.toArray(M,U),M[U+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}const Ms=4,Hx=[.125,.215,.35,.446,.526,.582],tr=20,xw=256,Sl=new Qm,Gx=new ke;let $d=null,tp=0,ep=0,np=!1;const yw=new rt;class kx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:u=256,position:h=yw}=c;$d=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($d,tp,ep),this._renderer.xr.enabled=np,t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===rr||t.mapping===mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$d=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Fa,format:zi,colorSpace:vo,depthBuffer:!1},o=Xx(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xx(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sw(c)),this._blurMaterial=Ew(c,t,n),this._ggxMaterial=Mw(c,t,n)}return o}_compileMaterial(t){const n=new sa(new Ha,t);this._renderer.compile(n,Sl)}_sceneToCubeUV(t,n,s,o,c){const m=new Bi(90,1,n,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Gx),_.toneMapping=ta,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sa(new Gl,new QS({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let x=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,x=!0):(M.color.copy(Gx),x=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):U===1?(m.up.set(0,0,d[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const B=this._cubeSize;io(o,U*B,D>2?B:0,B,B),_.setRenderTarget(o),x&&_.render(R,m),_.render(t,m)}_.toneMapping=y,_.autoClear=v,t.background=w}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===rr||t.mapping===mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=qx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;io(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(u,Sl)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[s];h.material=u;const m=u.uniforms,d=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,y=_*v,{_lodMax:E}=this,R=this._sizeLods[s],M=3*R*(s>E-Ms?s-E+Ms:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-n,io(c,M,x,3*R,2*R),o.setRenderTarget(c),o.render(h,Sl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,io(t,M,x,3*R,2*R),o.setRenderTarget(t),o.render(h,Sl)}_blur(t,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,o,"latitudinal",c),this._halfBlur(u,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*tr-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):tr;M>tr&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${tr}`);const x=[];let w=0;for(let P=0;P<tr;++P){const b=P/R,L=Math.exp(-b*b/2);x.push(L),P===0?w+=L:P<M&&(w+=2*L)}for(let P=0;P<x.length;P++)x[P]=x[P]/w;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-s;const U=this._sizeLods[o],B=3*U*(o>D-Ms?o-D+Ms:0),z=4*(this._cubeSize-U);io(n,B,z,3*U,2*U),m.setRenderTarget(n),m.render(_,Sl)}}function Sw(i){const t=[],n=[],s=[];let o=i;const c=i-Ms+1+Hx.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let m=1/h;u>i-Ms?m=Hx[u-i+Ms-1]:u===0&&(m=0),n.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,R=3,M=2,x=1,w=new Float32Array(R*E*y),D=new Float32Array(M*E*y),U=new Float32Array(x*E*y);for(let z=0;z<y;z++){const P=z%3*2/3-1,b=z>2?0:-1,L=[P,b,0,P+2/3,b,0,P+2/3,b+1,0,P,b,0,P+2/3,b+1,0,P,b+1,0];w.set(L,R*E*z),D.set(v,M*E*z);const ot=[z,z,z,z,z,z];U.set(ot,x*E*z)}const B=new Ha;B.setAttribute("position",new na(w,R)),B.setAttribute("uv",new na(D,M)),B.setAttribute("faceIndex",new na(U,x)),s.push(new sa(B,null)),o>Ms&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function Xx(i,t,n){const s=new ea(i,t,n);return s.texture.mapping=of,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function io(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function Mw(i,t,n){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Ew(i,t,n){const s=new Float32Array(tr),o=new rt(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Wx(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function qx(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class aM extends ea{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new $S(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Gl(5,5,5),c=new Gi({name:"CubemapFromEquirect",uniforms:_o(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Na});c.uniforms.tEquirect.value=n;const u=new sa(o,c),h=n.minFilter;return n.minFilter===er&&(n.minFilter=Fn),new w1(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,o);t.setRenderTarget(c)}}function Tw(i){let t=new WeakMap,n=new WeakMap,s=null;function o(v,y=!1){return v==null?null:y?u(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Ad||y===Rd)if(t.has(v)){const E=t.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const R=new aM(E.height);return R.fromEquirectangularTexture(i,v),t.set(v,R),v.addEventListener("dispose",d),h(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const y=v.mapping,E=y===Ad||y===Rd,R=y===rr||y===mo;if(E||R){let M=n.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new kx(i)),M=E?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),M.texture;if(M!==void 0)return M.texture;{const w=v.image;return E&&w&&w.height>0||R&&w&&m(w)?(s===null&&(s=new kx(i)),M=E?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,n.set(v,M),v.addEventListener("dispose",g),M.texture):null}}}return v}function h(v,y){return y===Ad?v.mapping=rr:y===Rd&&(v.mapping=mo),v}function m(v){let y=0;const E=6;for(let R=0;R<E;R++)v[R]!==void 0&&y++;return y===E}function d(v){const y=v.target;y.removeEventListener("dispose",d);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function g(v){const y=v.target;y.removeEventListener("dispose",g);const E=n.get(y);E!==void 0&&(n.delete(y),E.dispose())}function _(){t=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function bw(i){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=i.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&Ku("WebGLRenderer: "+s+" extension not supported."),o}}}function Aw(i,t,n,s){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],i.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,E=_.attributes.position;let R=0;if(E===void 0)return;if(y!==null){const w=y.array;R=y.version;for(let D=0,U=w.length;D<U;D+=3){const B=w[D+0],z=w[D+1],P=w[D+2];v.push(B,z,z,P,P,B)}}else{const w=E.array;R=E.version;for(let D=0,U=w.length/3-1;D<U;D+=3){const B=D+0,z=D+1,P=D+2;v.push(B,z,z,P,P,B)}}const M=new(E.count>=65535?KS:ZS)(v,1);M.version=R;const x=c.get(_);x&&t.remove(x),c.set(_,M)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function Rw(i,t,n){let s;function o(v){s=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,y){i.drawElements(s,y,c,v*u),n.update(y,s,1)}function d(v,y,E){E!==0&&(i.drawElementsInstanced(s,y,c,v*u,E),n.update(y,s,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];n.update(M,s,1)}function _(v,y,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)d(v[x]/u,y[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,R,0,E);let x=0;for(let w=0;w<E;w++)x+=y[w]*R[w];n.update(x,s,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Cw(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,h){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=h*(c/3);break;case i.LINES:n.lines+=h*(c/2);break;case i.LINE_STRIP:n.lines+=h*(c-1);break;case i.LINE_LOOP:n.lines+=h*c;break;case i.POINTS:n.points+=h*c;break;default:Ue("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function ww(i,t,n){const s=new WeakMap,o=new on;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let ot=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",ot)};var y=ot;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let U=0;E===!0&&(U=1),R===!0&&(U=2),M===!0&&(U=3);let B=h.attributes.position.count*U,z=1;B>t.maxTextureSize&&(z=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const P=new Float32Array(B*z*4*_),b=new qS(P,B,z,_);b.type=Ji,b.needsUpdate=!0;const L=U*4;for(let V=0;V<_;V++){const Y=x[V],$=w[V],st=D[V],K=B*z*4*V;for(let O=0;O<Y.count;O++){const I=O*L;E===!0&&(o.fromBufferAttribute(Y,O),P[K+I+0]=o.x,P[K+I+1]=o.y,P[K+I+2]=o.z,P[K+I+3]=0),R===!0&&(o.fromBufferAttribute($,O),P[K+I+4]=o.x,P[K+I+5]=o.y,P[K+I+6]=o.z,P[K+I+7]=0),M===!0&&(o.fromBufferAttribute(st,O),P[K+I+8]=o.x,P[K+I+9]=o.y,P[K+I+10]=o.z,P[K+I+11]=st.itemSize===4?o.w:1)}}v={count:_,texture:b,size:new Re(B,z)},s.set(h,v),h.addEventListener("dispose",ot)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<d.length;M++)E+=d[M];const R=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(i,"morphTargetBaseInfluence",R),m.getUniforms().setValue(i,"morphTargetInfluences",d)}m.getUniforms().setValue(i,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:c}}function Dw(i,t,n,s,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=t.get(d,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(n.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,i.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const Uw={[DS]:"LINEAR_TONE_MAPPING",[US]:"REINHARD_TONE_MAPPING",[LS]:"CINEON_TONE_MAPPING",[NS]:"ACES_FILMIC_TONE_MAPPING",[OS]:"AGX_TONE_MAPPING",[FS]:"NEUTRAL_TONE_MAPPING",[PS]:"CUSTOM_TONE_MAPPING"};function Lw(i,t,n,s,o){const c=new ea(t,n,{type:i,depthBuffer:s,stencilBuffer:o}),u=new ea(t,n,{type:Fa,depthBuffer:!1,stencilBuffer:!1}),h=new Ha;h.setAttribute("position",new Oa([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Oa([0,2,0,0,2,0],2));const m=new A1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new sa(h,m),g=new Qm(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,R=null,M=[],x=!1;this.setSize=function(w,D){c.setSize(w,D),u.setSize(w,D);for(let U=0;U<M.length;U++){const B=M[U];B.setSize&&B.setSize(w,D)}},this.setEffects=function(w){M=w,x=M.length>0&&M[0].isRenderPass===!0;const D=c.width,U=c.height;for(let B=0;B<M.length;B++){const z=M[B];z.setSize&&z.setSize(D,U)}},this.begin=function(w,D){if(y||w.toneMapping===ta&&M.length===0)return!1;if(R=D,D!==null){const U=D.width,B=D.height;(c.width!==U||c.height!==B)&&this.setSize(U,B)}return x===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=ta,!0},this.hasRenderPass=function(){return x},this.end=function(w,D){w.toneMapping=E,y=!0;let U=c,B=u;for(let z=0;z<M.length;z++){const P=M[z];if(P.enabled!==!1&&(P.render(w,B,U,D),P.needsSwap!==!1)){const b=U;U=B,B=b}}if(_!==w.outputColorSpace||v!==w.toneMapping){_=w.outputColorSpace,v=w.toneMapping,m.defines={},Ae.getTransfer(_)===ze&&(m.defines.SRGB_TRANSFER="");const z=Uw[v];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(R),w.render(d,g),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),h.dispose(),m.dispose()}}const sM=new Wn,pm=new Pl(1,1),rM=new qS,oM=new n1,lM=new $S,Yx=[],jx=[],Zx=new Float32Array(16),Kx=new Float32Array(9),Qx=new Float32Array(4);function So(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let c=Yx[o];if(c===void 0&&(c=new Float32Array(o),Yx[o]=c),t!==0){s.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,i[u].toArray(c,h)}return c}function Mn(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function En(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function uf(i,t){let n=jx[t];n===void 0&&(n=new Int32Array(t),jx[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function Nw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function Pw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;i.uniform2fv(this.addr,t),En(n,t)}}function Ow(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;i.uniform3fv(this.addr,t),En(n,t)}}function Fw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;i.uniform4fv(this.addr,t),En(n,t)}}function Bw(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(Mn(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,s))return;Qx.set(s),i.uniformMatrix2fv(this.addr,!1,Qx),En(n,s)}}function Iw(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(Mn(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,s))return;Kx.set(s),i.uniformMatrix3fv(this.addr,!1,Kx),En(n,s)}}function zw(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(Mn(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,s))return;Zx.set(s),i.uniformMatrix4fv(this.addr,!1,Zx),En(n,s)}}function Vw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function Hw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;i.uniform2iv(this.addr,t),En(n,t)}}function Gw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;i.uniform3iv(this.addr,t),En(n,t)}}function kw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;i.uniform4iv(this.addr,t),En(n,t)}}function Xw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function Ww(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;i.uniform2uiv(this.addr,t),En(n,t)}}function qw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;i.uniform3uiv(this.addr,t),En(n,t)}}function Yw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;i.uniform4uiv(this.addr,t),En(n,t)}}function jw(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(pm.compareFunction=n.isReversedDepthBuffer()?jm:Ym,c=pm):c=sM,n.setTexture2D(t||c,o)}function Zw(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||oM,o)}function Kw(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||lM,o)}function Qw(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||rM,o)}function Jw(i){switch(i){case 5126:return Nw;case 35664:return Pw;case 35665:return Ow;case 35666:return Fw;case 35674:return Bw;case 35675:return Iw;case 35676:return zw;case 5124:case 35670:return Vw;case 35667:case 35671:return Hw;case 35668:case 35672:return Gw;case 35669:case 35673:return kw;case 5125:return Xw;case 36294:return Ww;case 36295:return qw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Qw}}function $w(i,t){i.uniform1fv(this.addr,t)}function t2(i,t){const n=So(t,this.size,2);i.uniform2fv(this.addr,n)}function e2(i,t){const n=So(t,this.size,3);i.uniform3fv(this.addr,n)}function n2(i,t){const n=So(t,this.size,4);i.uniform4fv(this.addr,n)}function i2(i,t){const n=So(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function a2(i,t){const n=So(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function s2(i,t){const n=So(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function r2(i,t){i.uniform1iv(this.addr,t)}function o2(i,t){i.uniform2iv(this.addr,t)}function l2(i,t){i.uniform3iv(this.addr,t)}function c2(i,t){i.uniform4iv(this.addr,t)}function u2(i,t){i.uniform1uiv(this.addr,t)}function f2(i,t){i.uniform2uiv(this.addr,t)}function h2(i,t){i.uniform3uiv(this.addr,t)}function d2(i,t){i.uniform4uiv(this.addr,t)}function p2(i,t,n){const s=this.cache,o=t.length,c=uf(n,o);Mn(s,c)||(i.uniform1iv(this.addr,c),En(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=pm:u=sM;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||u,c[h])}function m2(i,t,n){const s=this.cache,o=t.length,c=uf(n,o);Mn(s,c)||(i.uniform1iv(this.addr,c),En(s,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||oM,c[u])}function g2(i,t,n){const s=this.cache,o=t.length,c=uf(n,o);Mn(s,c)||(i.uniform1iv(this.addr,c),En(s,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||lM,c[u])}function v2(i,t,n){const s=this.cache,o=t.length,c=uf(n,o);Mn(s,c)||(i.uniform1iv(this.addr,c),En(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||rM,c[u])}function _2(i){switch(i){case 5126:return $w;case 35664:return t2;case 35665:return e2;case 35666:return n2;case 35674:return i2;case 35675:return a2;case 35676:return s2;case 5124:case 35670:return r2;case 35667:case 35671:return o2;case 35668:case 35672:return l2;case 35669:case 35673:return c2;case 5125:return u2;case 36294:return f2;case 36295:return h2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return v2}}class x2{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=Jw(n.type)}}class y2{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_2(n.type)}}class S2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],s)}}}const ip=/(\w+)(\])?(\[|\.)?/g;function Jx(i,t){i.seq.push(t),i.map[t.id]=t}function M2(i,t,n){const s=i.name,o=s.length;for(ip.lastIndex=0;;){const c=ip.exec(s),u=ip.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){Jx(n,d===void 0?new x2(h,i,t):new y2(h,i,t));break}else{let _=n.map[h];_===void 0&&(_=new S2(h),Jx(n,_)),n=_}}}class Iu{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const h=t.getActiveUniform(n,u),m=t.getUniformLocation(n,h.name);M2(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&s.push(u)}return s}}function $x(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const E2=37297;let T2=0;function b2(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;s.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return s.join(`
`)}const ty=new pe;function A2(i){Ae._getMatrix(ty,Ae.workingColorSpace,i);const t=`mat3( ${ty.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(i)){case Yu:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ey(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),c=(i.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+b2(i.getShaderSource(t),h)}else return c}function R2(i,t){const n=A2(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const C2={[DS]:"Linear",[US]:"Reinhard",[LS]:"Cineon",[NS]:"ACESFilmic",[OS]:"AgX",[FS]:"Neutral",[PS]:"Custom"};function w2(i,t){const n=C2[t];return n===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wu=new rt;function D2(){Ae.getLuminanceCoefficients(wu);const i=wu.x.toFixed(4),t=wu.y.toFixed(4),n=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function L2(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function N2(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(t,o),u=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:h}}return n}function bl(i){return i!==""}function ny(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iy(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P2=/^[ \t]*#include +<([\w\d./]+)>/gm;function mm(i){return i.replace(P2,F2)}const O2=new Map;function F2(i,t){let n=me[t];if(n===void 0){const s=O2.get(t);if(s!==void 0)n=me[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return mm(n)}const B2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ay(i){return i.replace(B2,I2)}function I2(i,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function sy(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const z2={[Nu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function V2(i){return z2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H2={[rr]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[of]:"ENVMAP_TYPE_CUBE_UV"};function G2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":H2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const k2={[mo]:"ENVMAP_MODE_REFRACTION"};function X2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":k2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const W2={[wS]:"ENVMAP_BLENDING_MULTIPLY",[PA]:"ENVMAP_BLENDING_MIX",[OA]:"ENVMAP_BLENDING_ADD"};function q2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":W2[i.combine]||"ENVMAP_BLENDING_NONE"}function Y2(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function j2(i,t,n,s){const o=i.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=V2(n),d=G2(n),g=X2(n),_=q2(n),v=Y2(n),y=U2(n),E=L2(c),R=o.createProgram();let M,x,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(bl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(bl).join(`
`),x.length>0&&(x+=`
`)):(M=[sy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),x=[sy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ta?"#define TONE_MAPPING":"",n.toneMapping!==ta?me.tonemapping_pars_fragment:"",n.toneMapping!==ta?w2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,R2("linearToOutputTexel",n.outputColorSpace),D2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bl).join(`
`)),u=mm(u),u=ny(u,n),u=iy(u,n),h=mm(h),h=ny(h,n),h=iy(h,n),u=ay(u),h=ay(h),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===Sx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=w+M+u,U=w+x+h,B=$x(o,o.VERTEX_SHADER,D),z=$x(o,o.FRAGMENT_SHADER,U);o.attachShader(R,B),o.attachShader(R,z),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function P(V){if(i.debug.checkShaderErrors){const Y=o.getProgramInfoLog(R)||"",$=o.getShaderInfoLog(B)||"",st=o.getShaderInfoLog(z)||"",K=Y.trim(),O=$.trim(),I=st.trim();let et=!0,ut=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,R,B,z);else{const yt=ey(o,B,"vertex"),F=ey(o,z,"fragment");Ue("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+K+`
`+yt+`
`+F)}else K!==""?re("WebGLProgram: Program Info Log:",K):(O===""||I==="")&&(ut=!1);ut&&(V.diagnostics={runnable:et,programLog:K,vertexShader:{log:O,prefix:M},fragmentShader:{log:I,prefix:x}})}o.deleteShader(B),o.deleteShader(z),b=new Iu(o,R),L=N2(o,R)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let ot=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ot===!1&&(ot=o.getProgramParameter(R,E2)),ot},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=T2++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=z,this}let Z2=0;class K2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new Q2(t),n.set(t,s)),s}}class Q2{constructor(t){this.id=Z2++,this.code=t,this.usedTimes=0}}function J2(i,t,n,s,o,c){const u=new YS,h=new K2,m=new Set,d=[],g=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function R(b,L,ot,V,Y){const $=V.fog,st=Y.geometry,K=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,I=t.get(b.envMap||K,O),et=I&&I.mapping===of?I.image.height:null,ut=y[b.type];b.precision!==null&&(v=s.getMaxPrecision(b.precision),v!==b.precision&&re("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const yt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,F=yt!==void 0?yt.length:0;let j=0;st.morphAttributes.position!==void 0&&(j=1),st.morphAttributes.normal!==void 0&&(j=2),st.morphAttributes.color!==void 0&&(j=3);let gt,bt,Nt,nt;if(ut){const be=Qi[ut];gt=be.vertexShader,bt=be.fragmentShader}else gt=b.vertexShader,bt=b.fragmentShader,h.update(b),Nt=h.getVertexShaderID(b),nt=h.getFragmentShaderID(b);const _t=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Xt=Y.isInstancedMesh===!0,Qt=Y.isBatchedMesh===!0,ee=!!b.map,tn=!!b.matcap,xe=!!I,ge=!!b.aoMap,Le=!!b.lightMap,ce=!!b.bumpMap,Je=!!b.normalMap,G=!!b.displacementMap,je=!!b.emissiveMap,Te=!!b.metalnessMap,Pe=!!b.roughnessMap,Yt=b.anisotropy>0,N=b.clearcoat>0,T=b.dispersion>0,q=b.iridescence>0,pt=b.sheen>0,xt=b.transmission>0,ht=Yt&&!!b.anisotropyMap,Wt=N&&!!b.clearcoatMap,Ct=N&&!!b.clearcoatNormalMap,Kt=N&&!!b.clearcoatRoughnessMap,ne=q&&!!b.iridescenceMap,Et=q&&!!b.iridescenceThicknessMap,St=pt&&!!b.sheenColorMap,Pt=pt&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,Ot=!!b.specularColorMap,fe=!!b.specularIntensityMap,W=xt&&!!b.transmissionMap,Rt=xt&&!!b.thicknessMap,At=!!b.gradientMap,Ft=!!b.alphaMap,Mt=b.alphaTest>0,ft=!!b.alphaHash,zt=!!b.extensions;let ae=ta;b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Fe={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:gt,fragmentShader:bt,defines:b.defines,customVertexShaderID:Nt,customFragmentShaderID:nt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:Qt,batchingColor:Qt&&Y._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&Y.instanceColor!==null,instancingMorph:Xt&&Y.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:vo,alphaToCoverage:!!b.alphaToCoverage,map:ee,matcap:tn,envMap:xe,envMapMode:xe&&I.mapping,envMapCubeUVHeight:et,aoMap:ge,lightMap:Le,bumpMap:ce,normalMap:Je,displacementMap:G,emissiveMap:je,normalMapObjectSpace:Je&&b.normalMapType===zA,normalMapTangentSpace:Je&&b.normalMapType===IA,metalnessMap:Te,roughnessMap:Pe,anisotropy:Yt,anisotropyMap:ht,clearcoat:N,clearcoatMap:Wt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Kt,dispersion:T,iridescence:q,iridescenceMap:ne,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:St,sheenRoughnessMap:Pt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:fe,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:At,opaque:b.transparent===!1&&b.blending===uo&&b.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:ft,combine:b.combine,mapUv:ee&&E(b.map.channel),aoMapUv:ge&&E(b.aoMap.channel),lightMapUv:Le&&E(b.lightMap.channel),bumpMapUv:ce&&E(b.bumpMap.channel),normalMapUv:Je&&E(b.normalMap.channel),displacementMapUv:G&&E(b.displacementMap.channel),emissiveMapUv:je&&E(b.emissiveMap.channel),metalnessMapUv:Te&&E(b.metalnessMap.channel),roughnessMapUv:Pe&&E(b.roughnessMap.channel),anisotropyMapUv:ht&&E(b.anisotropyMap.channel),clearcoatMapUv:Wt&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&E(b.sheenRoughnessMap.channel),specularMapUv:Lt&&E(b.specularMap.channel),specularColorMapUv:Ot&&E(b.specularColorMap.channel),specularIntensityMapUv:fe&&E(b.specularIntensityMap.channel),transmissionMapUv:W&&E(b.transmissionMap.channel),thicknessMapUv:Rt&&E(b.thicknessMap.channel),alphaMapUv:Ft&&E(b.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Je||Yt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!st.attributes.uv&&(ee||Ft),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||st.attributes.normal===void 0&&Je===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Tt,skinning:Y.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:j,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&ot.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:ee&&b.map.isVideoTexture===!0&&Ae.getTransfer(b.map.colorSpace)===ze,decodeVideoTextureEmissive:je&&b.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(b.emissiveMap.colorSpace)===ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ua,flipSided:b.side===$n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Fe.vertexUv1s=m.has(1),Fe.vertexUv2s=m.has(2),Fe.vertexUv3s=m.has(3),m.clear(),Fe}function M(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ot in b.defines)L.push(ot),L.push(b.defines[ot]);return b.isRawShaderMaterial===!1&&(x(L,b),w(L,b),L.push(i.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function x(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function w(b,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),b.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),b.push(u.mask)}function D(b){const L=y[b.type];let ot;if(L){const V=Qi[L];ot=E1.clone(V.uniforms)}else ot=b.uniforms;return ot}function U(b,L){let ot=g.get(L);return ot!==void 0?++ot.usedTimes:(ot=new j2(i,L,b,o),d.push(ot),g.set(L,ot)),ot}function B(b){if(--b.usedTimes===0){const L=d.indexOf(b);d[L]=d[d.length-1],d.pop(),g.delete(b.cacheKey),b.destroy()}}function z(b){h.remove(b)}function P(){h.dispose()}return{getParameters:R,getProgramCacheKey:M,getUniforms:D,acquireProgram:U,releaseProgram:B,releaseShaderCache:z,programs:d,dispose:P}}function $2(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function s(u){i.delete(u)}function o(u,h,m){i.get(u)[h]=m}function c(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function t3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ry(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oy(){const i=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function u(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,E,R,M,x){let w=i[t];return w===void 0?(w={id:v.id,object:v,geometry:y,material:E,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:M,group:x},i[t]=w):(w.id=v.id,w.object=v,w.geometry=y,w.material=E,w.materialVariant=u(v),w.groupOrder=R,w.renderOrder=v.renderOrder,w.z=M,w.group=x),t++,w}function m(v,y,E,R,M,x){const w=h(v,y,E,R,M,x);E.transmission>0?s.push(w):E.transparent===!0?o.push(w):n.push(w)}function d(v,y,E,R,M,x){const w=h(v,y,E,R,M,x);E.transmission>0?s.unshift(w):E.transparent===!0?o.unshift(w):n.unshift(w)}function g(v,y){n.length>1&&n.sort(v||t3),s.length>1&&s.sort(y||ry),o.length>1&&o.sort(y||ry)}function _(){for(let v=t,y=i.length;v<y;v++){const E=i[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function e3(){let i=new WeakMap;function t(s,o){const c=i.get(s);let u;return c===void 0?(u=new oy,i.set(s,[u])):o>=c.length?(u=new oy,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function n3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new ke};break;case"SpotLight":n={position:new rt,direction:new rt,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return i[t.id]=n,n}}}function i3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let a3=0;function s3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r3(i){const t=new n3,n=i3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new rt);const o=new rt,c=new vn,u=new vn;function h(d){let g=0,_=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,E=0,R=0,M=0,x=0,w=0,D=0,U=0,B=0,z=0,P=0;d.sort(s3);for(let L=0,ot=d.length;L<ot;L++){const V=d[L],Y=V.color,$=V.intensity,st=V.distance;let K=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===go?K=V.shadow.map.texture:K=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Y.r*$,_+=Y.g*$,v+=Y.b*$;else if(V.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(V.sh.coefficients[O],$);P++}else if(V.isDirectionalLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const I=V.shadow,et=n.get(V);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,s.directionalShadow[y]=et,s.directionalShadowMap[y]=K,s.directionalShadowMatrix[y]=V.shadow.matrix,w++}s.directional[y]=O,y++}else if(V.isSpotLight){const O=t.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(Y).multiplyScalar($),O.distance=st,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,s.spot[R]=O;const I=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,I.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[R]=I.matrix,V.castShadow){const et=n.get(V);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,s.spotShadow[R]=et,s.spotShadowMap[R]=K,U++}R++}else if(V.isRectAreaLight){const O=t.get(V);O.color.copy(Y).multiplyScalar($),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=O,M++}else if(V.isPointLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const I=V.shadow,et=n.get(V);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,et.shadowCameraNear=I.camera.near,et.shadowCameraFar=I.camera.far,s.pointShadow[E]=et,s.pointShadowMap[E]=K,s.pointShadowMatrix[E]=V.shadow.matrix,D++}s.point[E]=O,E++}else if(V.isHemisphereLight){const O=t.get(V);O.skyColor.copy(V.color).multiplyScalar($),O.groundColor.copy(V.groundColor).multiplyScalar($),s.hemi[x]=O,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const b=s.hash;(b.directionalLength!==y||b.pointLength!==E||b.spotLength!==R||b.rectAreaLength!==M||b.hemiLength!==x||b.numDirectionalShadows!==w||b.numPointShadows!==D||b.numSpotShadows!==U||b.numSpotMaps!==B||b.numLightProbes!==P)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+B-z,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,b.directionalLength=y,b.pointLength=E,b.spotLength=R,b.rectAreaLength=M,b.hemiLength=x,b.numDirectionalShadows=w,b.numPointShadows=D,b.numSpotShadows=U,b.numSpotMaps=B,b.numLightProbes=P,s.version=a3++)}function m(d,g){let _=0,v=0,y=0,E=0,R=0;const M=g.matrixWorldInverse;for(let x=0,w=d.length;x<w;x++){const D=d[x];if(D.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),_++}else if(D.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),u.identity(),c.copy(D.matrixWorld),c.premultiply(M),u.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const U=s.point[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const U=s.hemi[R];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(M),R++}}}return{setup:h,setupView:m,state:s}}function ly(i){const t=new r3(i),n=[],s=[];function o(g){d.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u}}function o3(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new ly(i),t.set(o,[h])):c>=u.length?(h=new ly(i),u.push(h)):h=u[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const l3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,u3=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],f3=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],cy=new vn,Ml=new rt,ap=new rt;function h3(i,t,n){let s=new JS;const o=new Re,c=new Re,u=new on,h=new R1,m=new C1,d={},g=n.maxTextureSize,_={[Ts]:$n,[$n]:Ts,[Ua]:Ua},v=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:l3,fragmentShader:c3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ha;E.setAttribute("position",new na(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new sa(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu;let x=this.type;this.render=function(z,P,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;this.type===mA&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nu);const L=i.getRenderTarget(),ot=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Na),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const $=x!==this.type;$&&P.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(K=>K.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,K=z.length;st<K;st++){const O=z[st],I=O.shadow;if(I===void 0){re("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;o.copy(I.mapSize);const et=I.getFrameExtents();o.multiply(et),c.copy(I.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/et.x),o.x=c.x*et.x,I.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/et.y),o.y=c.y*et.y,I.mapSize.y=c.y));const ut=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ut,I.map===null||$===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Tl){if(O.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new ea(o.x,o.y,{format:go,type:Fa,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new Pl(o.x,o.y,Ji),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=Ba,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ln,I.map.depthTexture.magFilter=Ln}else O.isPointLight?(I.map=new aM(o.x),I.map.depthTexture=new S1(o.x,aa)):(I.map=new ea(o.x,o.y),I.map.depthTexture=new Pl(o.x,o.y,aa)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=Ba,this.type===Nu?(I.map.depthTexture.compareFunction=ut?jm:Ym,I.map.depthTexture.minFilter=Fn,I.map.depthTexture.magFilter=Fn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ln,I.map.depthTexture.magFilter=Ln);I.camera.updateProjectionMatrix()}const yt=I.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<yt;F++){if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,F),i.clear();else{F===0&&(i.setRenderTarget(I.map),i.clear());const j=I.getViewport(F);u.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),Y.viewport(u)}if(O.isPointLight){const j=I.camera,gt=I.matrix,bt=O.distance||j.far;bt!==j.far&&(j.far=bt,j.updateProjectionMatrix()),Ml.setFromMatrixPosition(O.matrixWorld),j.position.copy(Ml),ap.copy(j.position),ap.add(u3[F]),j.up.copy(f3[F]),j.lookAt(ap),j.updateMatrixWorld(),gt.makeTranslation(-Ml.x,-Ml.y,-Ml.z),cy.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),I._frustum.setFromProjectionMatrix(cy,j.coordinateSystem,j.reversedDepth)}else I.updateMatrices(O);s=I.getFrustum(),U(P,b,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Tl&&w(I,b),I.needsUpdate=!1}x=this.type,M.needsUpdate=!1,i.setRenderTarget(L,ot,V)};function w(z,P){const b=t.update(R);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ea(o.x,o.y,{format:go,type:Fa})),v.uniforms.shadow_pass.value=z.map.depthTexture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(P,null,b,v,R,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(P,null,b,y,R,null)}function D(z,P,b,L){let ot=null;const V=b.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)ot=V;else if(ot=b.isPointLight===!0?m:h,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=ot.uuid,$=P.uuid;let st=d[Y];st===void 0&&(st={},d[Y]=st);let K=st[$];K===void 0&&(K=ot.clone(),st[$]=K,P.addEventListener("dispose",B)),ot=K}if(ot.visible=P.visible,ot.wireframe=P.wireframe,L===Tl?ot.side=P.shadowSide!==null?P.shadowSide:P.side:ot.side=P.shadowSide!==null?P.shadowSide:_[P.side],ot.alphaMap=P.alphaMap,ot.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,ot.map=P.map,ot.clipShadows=P.clipShadows,ot.clippingPlanes=P.clippingPlanes,ot.clipIntersection=P.clipIntersection,ot.displacementMap=P.displacementMap,ot.displacementScale=P.displacementScale,ot.displacementBias=P.displacementBias,ot.wireframeLinewidth=P.wireframeLinewidth,ot.linewidth=P.linewidth,b.isPointLight===!0&&ot.isMeshDistanceMaterial===!0){const Y=i.properties.get(ot);Y.light=b}return ot}function U(z,P,b,L,ot){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&ot===Tl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,z.matrixWorld);const $=t.update(z),st=z.material;if(Array.isArray(st)){const K=$.groups;for(let O=0,I=K.length;O<I;O++){const et=K[O],ut=st[et.materialIndex];if(ut&&ut.visible){const yt=D(z,ut,L,ot);z.onBeforeShadow(i,z,P,b,$,yt,et),i.renderBufferDirect(b,null,$,yt,z,et),z.onAfterShadow(i,z,P,b,$,yt,et)}}}else if(st.visible){const K=D(z,st,L,ot);z.onBeforeShadow(i,z,P,b,$,K,null),i.renderBufferDirect(b,null,$,K,z,null),z.onAfterShadow(i,z,P,b,$,K,null)}}const Y=z.children;for(let $=0,st=Y.length;$<st;$++)U(Y[$],P,b,L,ot)}function B(z){z.target.removeEventListener("dispose",B);for(const b in d){const L=d[b],ot=z.target.uuid;ot in L&&(L[ot].dispose(),delete L[ot])}}}function d3(i,t){function n(){let W=!1;const Rt=new on;let At=null;const Ft=new on(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!W&&(i.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,ft,zt,ae,Fe){Fe===!0&&(Mt*=ae,ft*=ae,zt*=ae),Rt.set(Mt,ft,zt,ae),Ft.equals(Rt)===!1&&(i.clearColor(Mt,ft,zt,ae),Ft.copy(Rt))},reset:function(){W=!1,At=null,Ft.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,At=null,Ft=null,Mt=null;return{setReversed:function(ft){if(Rt!==ft){const zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Rt=ft;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return Rt},setTest:function(ft){ft?_t(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ft){At!==ft&&!W&&(i.depthMask(ft),At=ft)},setFunc:function(ft){if(Rt&&(ft=ZA[ft]),Ft!==ft){switch(ft){case Ap:i.depthFunc(i.NEVER);break;case Rp:i.depthFunc(i.ALWAYS);break;case Cp:i.depthFunc(i.LESS);break;case po:i.depthFunc(i.LEQUAL);break;case wp:i.depthFunc(i.EQUAL);break;case Dp:i.depthFunc(i.GEQUAL);break;case Up:i.depthFunc(i.GREATER);break;case Lp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=ft}},setLocked:function(ft){W=ft},setClear:function(ft){Mt!==ft&&(Mt=ft,Rt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){W=!1,At=null,Ft=null,Mt=null,Rt=!1}}}function o(){let W=!1,Rt=null,At=null,Ft=null,Mt=null,ft=null,zt=null,ae=null,Fe=null;return{setTest:function(be){W||(be?_t(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(be){Rt!==be&&!W&&(i.stencilMask(be),Rt=be)},setFunc:function(be,Bn,bi){(At!==be||Ft!==Bn||Mt!==bi)&&(i.stencilFunc(be,Bn,bi),At=be,Ft=Bn,Mt=bi)},setOp:function(be,Bn,bi){(ft!==be||zt!==Bn||ae!==bi)&&(i.stencilOp(be,Bn,bi),ft=be,zt=Bn,ae=bi)},setLocked:function(be){W=be},setClear:function(be){Fe!==be&&(i.clearStencil(be),Fe=be)},reset:function(){W=!1,Rt=null,At=null,Ft=null,Mt=null,ft=null,zt=null,ae=null,Fe=null}}}const c=new n,u=new s,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,R=!1,M=null,x=null,w=null,D=null,U=null,B=null,z=null,P=new ke(0,0,0),b=0,L=!1,ot=null,V=null,Y=null,$=null,st=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,I=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(et)[1]),O=I>=1):et.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),O=I>=2);let ut=null,yt={};const F=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),gt=new on().fromArray(F),bt=new on().fromArray(j);function Nt(W,Rt,At,Ft){const Mt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(W,ft),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<At;zt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(Rt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return ft}const nt={};nt[i.TEXTURE_2D]=Nt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),_t(i.DEPTH_TEST),u.setFunc(po),ce(!1),Je(mx),_t(i.CULL_FACE),ge(Na);function _t(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function Tt(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function Xt(W,Rt){return _[W]!==Rt?(i.bindFramebuffer(W,Rt),_[W]=Rt,W===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Rt),W===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Qt(W,Rt){let At=y,Ft=!1;if(W){At=v.get(Rt),At===void 0&&(At=[],v.set(Rt,At));const Mt=W.textures;if(At.length!==Mt.length||At[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,zt=Mt.length;ft<zt;ft++)At[ft]=i.COLOR_ATTACHMENT0+ft;At.length=Mt.length,Ft=!0}}else At[0]!==i.BACK&&(At[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(At)}function ee(W){return E!==W?(i.useProgram(W),E=W,!0):!1}const tn={[$s]:i.FUNC_ADD,[vA]:i.FUNC_SUBTRACT,[_A]:i.FUNC_REVERSE_SUBTRACT};tn[xA]=i.MIN,tn[yA]=i.MAX;const xe={[SA]:i.ZERO,[MA]:i.ONE,[EA]:i.SRC_COLOR,[Tp]:i.SRC_ALPHA,[wA]:i.SRC_ALPHA_SATURATE,[RA]:i.DST_COLOR,[bA]:i.DST_ALPHA,[TA]:i.ONE_MINUS_SRC_COLOR,[bp]:i.ONE_MINUS_SRC_ALPHA,[CA]:i.ONE_MINUS_DST_COLOR,[AA]:i.ONE_MINUS_DST_ALPHA,[DA]:i.CONSTANT_COLOR,[UA]:i.ONE_MINUS_CONSTANT_COLOR,[LA]:i.CONSTANT_ALPHA,[NA]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(W,Rt,At,Ft,Mt,ft,zt,ae,Fe,be){if(W===Na){R===!0&&(Tt(i.BLEND),R=!1);return}if(R===!1&&(_t(i.BLEND),R=!0),W!==gA){if(W!==M||be!==L){if((x!==$s||U!==$s)&&(i.blendEquation(i.FUNC_ADD),x=$s,U=$s),be)switch(W){case uo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gx:i.blendFunc(i.ONE,i.ONE);break;case vx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _x:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",W);break}else switch(W){case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gx:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vx:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _x:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",W);break}w=null,D=null,B=null,z=null,P.set(0,0,0),b=0,M=W,L=be}return}Mt=Mt||Rt,ft=ft||At,zt=zt||Ft,(Rt!==x||Mt!==U)&&(i.blendEquationSeparate(tn[Rt],tn[Mt]),x=Rt,U=Mt),(At!==w||Ft!==D||ft!==B||zt!==z)&&(i.blendFuncSeparate(xe[At],xe[Ft],xe[ft],xe[zt]),w=At,D=Ft,B=ft,z=zt),(ae.equals(P)===!1||Fe!==b)&&(i.blendColor(ae.r,ae.g,ae.b,Fe),P.copy(ae),b=Fe),M=W,L=!1}function Le(W,Rt){W.side===Ua?Tt(i.CULL_FACE):_t(i.CULL_FACE);let At=W.side===$n;Rt&&(At=!At),ce(At),W.blending===uo&&W.transparent===!1?ge(Na):ge(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ft=W.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),je(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(W){ot!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),ot=W)}function Je(W){W!==dA?(_t(i.CULL_FACE),W!==V&&(W===mx?i.cullFace(i.BACK):W===pA?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),V=W}function G(W){W!==Y&&(O&&i.lineWidth(W),Y=W)}function je(W,Rt,At){W?(_t(i.POLYGON_OFFSET_FILL),($!==Rt||st!==At)&&($=Rt,st=At,u.getReversed()&&(Rt=-Rt),i.polygonOffset(Rt,At))):Tt(i.POLYGON_OFFSET_FILL)}function Te(W){W?_t(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function Pe(W){W===void 0&&(W=i.TEXTURE0+K-1),ut!==W&&(i.activeTexture(W),ut=W)}function Yt(W,Rt,At){At===void 0&&(ut===null?At=i.TEXTURE0+K-1:At=ut);let Ft=yt[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},yt[At]=Ft),(Ft.type!==W||Ft.texture!==Rt)&&(ut!==At&&(i.activeTexture(At),ut=At),i.bindTexture(W,Rt||nt[W]),Ft.type=W,Ft.texture=Rt)}function N(){const W=yt[ut];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function pt(){try{i.texSubImage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function xt(){try{i.texSubImage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function ht(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function Wt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function Ct(){try{i.texStorage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function Kt(){try{i.texStorage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function ne(){try{i.texImage2D(...arguments)}catch(W){Ue("WebGLState:",W)}}function Et(){try{i.texImage3D(...arguments)}catch(W){Ue("WebGLState:",W)}}function St(W){gt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Pt(W){bt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),bt.copy(W))}function Lt(W,Rt){let At=d.get(Rt);At===void 0&&(At=new WeakMap,d.set(Rt,At));let Ft=At.get(W);Ft===void 0&&(Ft=i.getUniformBlockIndex(Rt,W.name),At.set(W,Ft))}function Ot(W,Rt){const Ft=d.get(Rt).get(W);m.get(Rt)!==Ft&&(i.uniformBlockBinding(Rt,Ft,W.__bindingPointIndex),m.set(Rt,Ft))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},ut=null,yt={},_={},v=new WeakMap,y=[],E=null,R=!1,M=null,x=null,w=null,D=null,U=null,B=null,z=null,P=new ke(0,0,0),b=0,L=!1,ot=null,V=null,Y=null,$=null,st=null,gt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:_t,disable:Tt,bindFramebuffer:Xt,drawBuffers:Qt,useProgram:ee,setBlending:ge,setMaterial:Le,setFlipSided:ce,setCullFace:Je,setLineWidth:G,setPolygonOffset:je,setScissorTest:Te,activeTexture:Pe,bindTexture:Yt,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:ne,texImage3D:Et,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Wt,scissor:St,viewport:Pt,reset:fe}}function p3(i,t,n,s,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Re,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return y?new OffscreenCanvas(N,T):Zu("canvas")}function R(N,T,q){let pt=1;const xt=Yt(N);if((xt.width>q||xt.height>q)&&(pt=q/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ht=Math.floor(pt*xt.width),Wt=Math.floor(pt*xt.height);_===void 0&&(_=E(ht,Wt));const Ct=T?E(ht,Wt):_;return Ct.width=ht,Ct.height=Wt,Ct.getContext("2d").drawImage(N,0,0,ht,Wt),re("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ht+"x"+Wt+")."),Ct}else return"data"in N&&re("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){i.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(N,T,q,pt,xt=!1){if(N!==null){if(i[N]!==void 0)return i[N];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht=T;if(T===i.RED&&(q===i.FLOAT&&(ht=i.R32F),q===i.HALF_FLOAT&&(ht=i.R16F),q===i.UNSIGNED_BYTE&&(ht=i.R8)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ht=i.R8UI),q===i.UNSIGNED_SHORT&&(ht=i.R16UI),q===i.UNSIGNED_INT&&(ht=i.R32UI),q===i.BYTE&&(ht=i.R8I),q===i.SHORT&&(ht=i.R16I),q===i.INT&&(ht=i.R32I)),T===i.RG&&(q===i.FLOAT&&(ht=i.RG32F),q===i.HALF_FLOAT&&(ht=i.RG16F),q===i.UNSIGNED_BYTE&&(ht=i.RG8)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ht=i.RG8UI),q===i.UNSIGNED_SHORT&&(ht=i.RG16UI),q===i.UNSIGNED_INT&&(ht=i.RG32UI),q===i.BYTE&&(ht=i.RG8I),q===i.SHORT&&(ht=i.RG16I),q===i.INT&&(ht=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),q===i.UNSIGNED_INT&&(ht=i.RGB32UI),q===i.BYTE&&(ht=i.RGB8I),q===i.SHORT&&(ht=i.RGB16I),q===i.INT&&(ht=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),q===i.UNSIGNED_INT&&(ht=i.RGBA32UI),q===i.BYTE&&(ht=i.RGBA8I),q===i.SHORT&&(ht=i.RGBA16I),q===i.INT&&(ht=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ht=i.R11F_G11F_B10F)),T===i.RGBA){const Wt=xt?Yu:Ae.getTransfer(pt);q===i.FLOAT&&(ht=i.RGBA32F),q===i.HALF_FLOAT&&(ht=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ht=Wt===ze?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function U(N,T){let q;return N?T===null||T===aa||T===Nl?q=i.DEPTH24_STENCIL8:T===Ji?q=i.DEPTH32F_STENCIL8:T===Ll&&(q=i.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===aa||T===Nl?q=i.DEPTH_COMPONENT24:T===Ji?q=i.DEPTH_COMPONENT32F:T===Ll&&(q=i.DEPTH_COMPONENT16),q}function B(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==Fn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function z(N){const T=N.target;T.removeEventListener("dispose",z),b(T),T.isVideoTexture&&g.delete(T)}function P(N){const T=N.target;T.removeEventListener("dispose",P),ot(T)}function b(N){const T=s.get(N);if(T.__webglInit===void 0)return;const q=N.source,pt=v.get(q);if(pt){const xt=pt[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&L(N),Object.keys(pt).length===0&&v.delete(q)}s.remove(N)}function L(N){const T=s.get(N);i.deleteTexture(T.__webglTexture);const q=N.source,pt=v.get(q);delete pt[T.__cacheKey],u.memory.textures--}function ot(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let xt=0;xt<T.__webglFramebuffer[pt].length;xt++)i.deleteFramebuffer(T.__webglFramebuffer[pt][xt]);else i.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)i.deleteFramebuffer(T.__webglFramebuffer[pt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=N.textures;for(let pt=0,xt=q.length;pt<xt;pt++){const ht=s.get(q[pt]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),u.memory.textures--),s.remove(q[pt])}s.remove(N)}let V=0;function Y(){V=0}function $(){const N=V;return N>=o.maxTextures&&re("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),V+=1,N}function st(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function K(N,T){const q=s.get(N);if(N.isVideoTexture&&Te(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const pt=N.image;if(pt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,N,T);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function O(N,T){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,T);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function I(N,T){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,T);return}n.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function et(N,T){const q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){_t(q,N,T);return}n.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}const ut={[Np]:i.REPEAT,[La]:i.CLAMP_TO_EDGE,[Pp]:i.MIRRORED_REPEAT},yt={[Ln]:i.NEAREST,[FA]:i.NEAREST_MIPMAP_NEAREST,[ou]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Cd]:i.LINEAR_MIPMAP_NEAREST,[er]:i.LINEAR_MIPMAP_LINEAR},F={[VA]:i.NEVER,[WA]:i.ALWAYS,[HA]:i.LESS,[Ym]:i.LEQUAL,[GA]:i.EQUAL,[jm]:i.GEQUAL,[kA]:i.GREATER,[XA]:i.NOTEQUAL};function j(N,T){if(T.type===Ji&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Fn||T.magFilter===Cd||T.magFilter===ou||T.magFilter===er||T.minFilter===Fn||T.minFilter===Cd||T.minFilter===ou||T.minFilter===er)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ut[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ut[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ut[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,yt[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ln||T.minFilter!==ou&&T.minFilter!==er||T.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function gt(N,T){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",z));const pt=T.source;let xt=v.get(pt);xt===void 0&&(xt={},v.set(pt,xt));const ht=st(T);if(ht!==N.__cacheKey){xt[ht]===void 0&&(xt[ht]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,q=!0),xt[ht].usedTimes++;const Wt=xt[N.__cacheKey];Wt!==void 0&&(xt[N.__cacheKey].usedTimes--,Wt.usedTimes===0&&L(T)),N.__cacheKey=ht,N.__webglTexture=xt[ht].texture}return q}function bt(N,T,q){return Math.floor(Math.floor(N/q)/T)}function Nt(N,T,q,pt){const ht=N.updateRanges;if(ht.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,pt,T.data);else{ht.sort((Et,St)=>Et.start-St.start);let Wt=0;for(let Et=1;Et<ht.length;Et++){const St=ht[Wt],Pt=ht[Et],Lt=St.start+St.count,Ot=bt(Pt.start,T.width,4),fe=bt(St.start,T.width,4);Pt.start<=Lt+1&&Ot===fe&&bt(Pt.start+Pt.count-1,T.width,4)===Ot?St.count=Math.max(St.count,Pt.start+Pt.count-St.start):(++Wt,ht[Wt]=Pt)}ht.length=Wt+1;const Ct=i.getParameter(i.UNPACK_ROW_LENGTH),Kt=i.getParameter(i.UNPACK_SKIP_PIXELS),ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Et=0,St=ht.length;Et<St;Et++){const Pt=ht[Et],Lt=Math.floor(Pt.start/4),Ot=Math.ceil(Pt.count/4),fe=Lt%T.width,W=Math.floor(Lt/T.width),Rt=Ot,At=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),n.texSubImage2D(i.TEXTURE_2D,0,fe,W,Rt,At,q,pt,T.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ne)}}function nt(N,T,q){let pt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=i.TEXTURE_3D);const xt=gt(N,T),ht=T.source;n.bindTexture(pt,N.__webglTexture,i.TEXTURE0+q);const Wt=s.get(ht);if(ht.version!==Wt.__version||xt===!0){n.activeTexture(i.TEXTURE0+q);const Ct=Ae.getPrimaries(Ae.workingColorSpace),Kt=T.colorSpace===Ss?null:Ae.getPrimaries(T.colorSpace),ne=T.colorSpace===Ss||Ct===Kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Et=R(T.image,!1,o.maxTextureSize);Et=Pe(T,Et);const St=c.convert(T.format,T.colorSpace),Pt=c.convert(T.type);let Lt=D(T.internalFormat,St,Pt,T.colorSpace,T.isVideoTexture);j(pt,T);let Ot;const fe=T.mipmaps,W=T.isVideoTexture!==!0,Rt=Wt.__version===void 0||xt===!0,At=ht.dataReady,Ft=B(T,Et);if(T.isDepthTexture)Lt=U(T.format===nr,T.type),Rt&&(W?n.texStorage2D(i.TEXTURE_2D,1,Lt,Et.width,Et.height):n.texImage2D(i.TEXTURE_2D,0,Lt,Et.width,Et.height,0,St,Pt,null));else if(T.isDataTexture)if(fe.length>0){W&&Rt&&n.texStorage2D(i.TEXTURE_2D,Ft,Lt,fe[0].width,fe[0].height);for(let Mt=0,ft=fe.length;Mt<ft;Mt++)Ot=fe[Mt],W?At&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Pt,Ot.data):n.texImage2D(i.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Pt,Ot.data);T.generateMipmaps=!1}else W?(Rt&&n.texStorage2D(i.TEXTURE_2D,Ft,Lt,Et.width,Et.height),At&&Nt(T,Et,St,Pt)):n.texImage2D(i.TEXTURE_2D,0,Lt,Et.width,Et.height,0,St,Pt,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Rt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Lt,fe[0].width,fe[0].height,Et.depth);for(let Mt=0,ft=fe.length;Mt<ft;Mt++)if(Ot=fe[Mt],T.format!==zi)if(St!==null)if(W){if(At)if(T.layerUpdates.size>0){const zt=Vx(Ot.width,Ot.height,T.format,T.type);for(const ae of T.layerUpdates){const Fe=Ot.data.subarray(ae*zt/Ot.data.BYTES_PER_ELEMENT,(ae+1)*zt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,ae,Ot.width,Ot.height,1,St,Fe)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,Et.depth,St,Ot.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,Et.depth,0,Ot.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,Et.depth,St,Pt,Ot.data):n.texImage3D(i.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,Et.depth,0,St,Pt,Ot.data)}else{W&&Rt&&n.texStorage2D(i.TEXTURE_2D,Ft,Lt,fe[0].width,fe[0].height);for(let Mt=0,ft=fe.length;Mt<ft;Mt++)Ot=fe[Mt],T.format!==zi?St!==null?W?At&&n.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Ot.data):n.compressedTexImage2D(i.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,Ot.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Pt,Ot.data):n.texImage2D(i.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Pt,Ot.data)}else if(T.isDataArrayTexture)if(W){if(Rt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Lt,Et.width,Et.height,Et.depth),At)if(T.layerUpdates.size>0){const Mt=Vx(Et.width,Et.height,T.format,T.type);for(const ft of T.layerUpdates){const zt=Et.data.subarray(ft*Mt/Et.data.BYTES_PER_ELEMENT,(ft+1)*Mt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,Et.width,Et.height,1,St,Pt,zt)}T.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,St,Pt,Et.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,Et.width,Et.height,Et.depth,0,St,Pt,Et.data);else if(T.isData3DTexture)W?(Rt&&n.texStorage3D(i.TEXTURE_3D,Ft,Lt,Et.width,Et.height,Et.depth),At&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,St,Pt,Et.data)):n.texImage3D(i.TEXTURE_3D,0,Lt,Et.width,Et.height,Et.depth,0,St,Pt,Et.data);else if(T.isFramebufferTexture){if(Rt)if(W)n.texStorage2D(i.TEXTURE_2D,Ft,Lt,Et.width,Et.height);else{let Mt=Et.width,ft=Et.height;for(let zt=0;zt<Ft;zt++)n.texImage2D(i.TEXTURE_2D,zt,Lt,Mt,ft,0,St,Pt,null),Mt>>=1,ft>>=1}}else if(fe.length>0){if(W&&Rt){const Mt=Yt(fe[0]);n.texStorage2D(i.TEXTURE_2D,Ft,Lt,Mt.width,Mt.height)}for(let Mt=0,ft=fe.length;Mt<ft;Mt++)Ot=fe[Mt],W?At&&n.texSubImage2D(i.TEXTURE_2D,Mt,0,0,St,Pt,Ot):n.texImage2D(i.TEXTURE_2D,Mt,Lt,St,Pt,Ot);T.generateMipmaps=!1}else if(W){if(Rt){const Mt=Yt(Et);n.texStorage2D(i.TEXTURE_2D,Ft,Lt,Mt.width,Mt.height)}At&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Pt,Et)}else n.texImage2D(i.TEXTURE_2D,0,Lt,St,Pt,Et);M(T)&&x(pt),Wt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function _t(N,T,q){if(T.image.length!==6)return;const pt=gt(N,T),xt=T.source;n.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+q);const ht=s.get(xt);if(xt.version!==ht.__version||pt===!0){n.activeTexture(i.TEXTURE0+q);const Wt=Ae.getPrimaries(Ae.workingColorSpace),Ct=T.colorSpace===Ss?null:Ae.getPrimaries(T.colorSpace),Kt=T.colorSpace===Ss||Wt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const ne=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,St=[];for(let ft=0;ft<6;ft++)!ne&&!Et?St[ft]=R(T.image[ft],!0,o.maxCubemapSize):St[ft]=Et?T.image[ft].image:T.image[ft],St[ft]=Pe(T,St[ft]);const Pt=St[0],Lt=c.convert(T.format,T.colorSpace),Ot=c.convert(T.type),fe=D(T.internalFormat,Lt,Ot,T.colorSpace),W=T.isVideoTexture!==!0,Rt=ht.__version===void 0||pt===!0,At=xt.dataReady;let Ft=B(T,Pt);j(i.TEXTURE_CUBE_MAP,T);let Mt;if(ne){W&&Rt&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,fe,Pt.width,Pt.height);for(let ft=0;ft<6;ft++){Mt=St[ft].mipmaps;for(let zt=0;zt<Mt.length;zt++){const ae=Mt[zt];T.format!==zi?Lt!==null?W?At&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,ae.width,ae.height,Lt,ae.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,fe,ae.width,ae.height,0,ae.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,ae.width,ae.height,Lt,Ot,ae.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,fe,ae.width,ae.height,0,Lt,Ot,ae.data)}}}else{if(Mt=T.mipmaps,W&&Rt){Mt.length>0&&Ft++;const ft=Yt(St[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,fe,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Et){W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,St[ft].width,St[ft].height,Lt,Ot,St[ft].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,fe,St[ft].width,St[ft].height,0,Lt,Ot,St[ft].data);for(let zt=0;zt<Mt.length;zt++){const Fe=Mt[zt].image[ft].image;W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Fe.width,Fe.height,Lt,Ot,Fe.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,fe,Fe.width,Fe.height,0,Lt,Ot,Fe.data)}}else{W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Lt,Ot,St[ft]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,fe,Lt,Ot,St[ft]);for(let zt=0;zt<Mt.length;zt++){const ae=Mt[zt];W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Lt,Ot,ae.image[ft]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,fe,Lt,Ot,ae.image[ft])}}}M(T)&&x(i.TEXTURE_CUBE_MAP),ht.__version=xt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Tt(N,T,q,pt,xt,ht){const Wt=c.convert(q.format,q.colorSpace),Ct=c.convert(q.type),Kt=D(q.internalFormat,Wt,Ct,q.colorSpace),ne=s.get(T),Et=s.get(q);if(Et.__renderTarget=T,!ne.__hasExternalTextures){const St=Math.max(1,T.width>>ht),Pt=Math.max(1,T.height>>ht);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?n.texImage3D(xt,ht,Kt,St,Pt,T.depth,0,Wt,Ct,null):n.texImage2D(xt,ht,Kt,St,Pt,0,Wt,Ct,null)}n.bindFramebuffer(i.FRAMEBUFFER,N),je(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,xt,Et.__webglTexture,0,G(T)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,xt,Et.__webglTexture,ht),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(N,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){const pt=T.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ht=U(T.stencilBuffer,xt),Wt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;je(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(T),ht,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(T),ht,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ht,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Wt,i.RENDERBUFFER,N)}else{const pt=T.textures;for(let xt=0;xt<pt.length;xt++){const ht=pt[xt],Wt=c.convert(ht.format,ht.colorSpace),Ct=c.convert(ht.type),Kt=D(ht.internalFormat,Wt,Ct,ht.colorSpace);je(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(T),Kt,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(T),Kt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Kt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(N,T,q){const pt=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(T.depthTexture);if(xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),xt.__webglTexture===void 0){xt.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),j(i.TEXTURE_CUBE_MAP,T.depthTexture);const ne=c.convert(T.depthTexture.format),Et=c.convert(T.depthTexture.type);let St;T.depthTexture.format===Ba?St=i.DEPTH_COMPONENT24:T.depthTexture.format===nr&&(St=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,St,T.width,T.height,0,ne,Et,null)}}else K(T.depthTexture,0);const ht=xt.__webglTexture,Wt=G(T),Ct=pt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Kt=T.depthTexture.format===nr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ba)je(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Kt,Ct,ht,0,Wt):i.framebufferTexture2D(i.FRAMEBUFFER,Kt,Ct,ht,0);else if(T.depthTexture.format===nr)je(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Kt,Ct,ht,0,Wt):i.framebufferTexture2D(i.FRAMEBUFFER,Kt,Ct,ht,0);else throw new Error("Unknown depthTexture format")}function ee(N){const T=s.get(N),q=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const pt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=pt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Qt(T.__webglFramebuffer[pt],N,pt);else{const pt=N.texture.mipmaps;pt&&pt.length>0?Qt(T.__webglFramebuffer[0],N,0):Qt(T.__webglFramebuffer,N,0)}else if(q){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=i.createRenderbuffer(),Xt(T.__webglDepthbuffer[pt],N,!1);else{const xt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[pt];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,ht)}}else{const pt=N.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Xt(T.__webglDepthbuffer,N,!1);else{const xt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,ht)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function tn(N,T,q){const pt=s.get(N);T!==void 0&&Tt(pt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ee(N)}function xe(N){const T=N.texture,q=s.get(N),pt=s.get(T);N.addEventListener("dispose",P);const xt=N.textures,ht=N.isWebGLCubeRenderTarget===!0,Wt=xt.length>1;if(Wt||(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=T.version,u.memory.textures++),ht){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Kt=0;Kt<T.mipmaps.length;Kt++)q.__webglFramebuffer[Ct][Kt]=i.createFramebuffer()}else q.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Wt)for(let Ct=0,Kt=xt.length;Ct<Kt;Ct++){const ne=s.get(xt[Ct]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),u.memory.textures++)}if(N.samples>0&&je(N)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Kt=xt[Ct];q.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);const ne=c.convert(Kt.format,Kt.colorSpace),Et=c.convert(Kt.type),St=D(Kt.internalFormat,ne,Et,Kt.colorSpace,N.isXRRenderTarget===!0),Pt=G(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,St,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){n.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),j(i.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)Tt(q.__webglFramebuffer[Ct][Kt],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt);else Tt(q.__webglFramebuffer[Ct],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(T)&&x(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Wt){for(let Ct=0,Kt=xt.length;Ct<Kt;Ct++){const ne=xt[Ct],Et=s.get(ne);let St=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(St=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(St,Et.__webglTexture),j(St,ne),Tt(q.__webglFramebuffer,N,ne,i.COLOR_ATTACHMENT0+Ct,St,0),M(ne)&&x(St)}n.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Ct,pt.__webglTexture),j(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)Tt(q.__webglFramebuffer[Kt],N,T,i.COLOR_ATTACHMENT0,Ct,Kt);else Tt(q.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,Ct,0);M(T)&&x(Ct),n.unbindTexture()}N.depthBuffer&&ee(N)}function ge(N){const T=N.textures;for(let q=0,pt=T.length;q<pt;q++){const xt=T[q];if(M(xt)){const ht=w(N),Wt=s.get(xt).__webglTexture;n.bindTexture(ht,Wt),x(ht),n.unbindTexture()}}}const Le=[],ce=[];function Je(N){if(N.samples>0){if(je(N)===!1){const T=N.textures,q=N.width,pt=N.height;let xt=i.COLOR_BUFFER_BIT;const ht=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Wt=s.get(N),Ct=T.length>1;if(Ct)for(let ne=0;ne<T.length;ne++)n.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Kt=N.texture.mipmaps;Kt&&Kt.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let ne=0;ne<T.length;ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[ne]);const Et=s.get(T[ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,q,pt,0,0,q,pt,xt,i.NEAREST),m===!0&&(Le.length=0,ce.length=0,Le.push(i.COLOR_ATTACHMENT0+ne),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Le.push(ht),ce.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let ne=0;ne<T.length;ne++){n.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[ne]);const Et=s.get(T[ne]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,Et,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function G(N){return Math.min(o.maxSamples,N.samples)}function je(N){const T=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Te(N){const T=u.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Pe(N,T){const q=N.colorSpace,pt=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==vo&&q!==Ss&&(Ae.getTransfer(q)===ze?(pt!==zi||xt!==Mi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",q)),T}function Yt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=$,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=O,this.setTexture3D=I,this.setTextureCube=et,this.rebindTextures=tn,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function m3(i,t){function n(s,o=Ss){let c;const u=Ae.getTransfer(o);if(s===Mi)return i.UNSIGNED_BYTE;if(s===Gm)return i.UNSIGNED_SHORT_4_4_4_4;if(s===km)return i.UNSIGNED_SHORT_5_5_5_1;if(s===VS)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===HS)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===IS)return i.BYTE;if(s===zS)return i.SHORT;if(s===Ll)return i.UNSIGNED_SHORT;if(s===Hm)return i.INT;if(s===aa)return i.UNSIGNED_INT;if(s===Ji)return i.FLOAT;if(s===Fa)return i.HALF_FLOAT;if(s===GS)return i.ALPHA;if(s===kS)return i.RGB;if(s===zi)return i.RGBA;if(s===Ba)return i.DEPTH_COMPONENT;if(s===nr)return i.DEPTH_STENCIL;if(s===XS)return i.RED;if(s===Xm)return i.RED_INTEGER;if(s===go)return i.RG;if(s===Wm)return i.RG_INTEGER;if(s===qm)return i.RGBA_INTEGER;if(s===Pu||s===Ou||s===Fu||s===Bu)if(u===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Op||s===Fp||s===Bp||s===Ip)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Op)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ip)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zp||s===Vp||s===Hp||s===Gp||s===kp||s===Xp||s===Wp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===zp||s===Vp)return u===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Hp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Gp)return c.COMPRESSED_R11_EAC;if(s===kp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Xp)return c.COMPRESSED_RG11_EAC;if(s===Wp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===qp||s===Yp||s===jp||s===Zp||s===Kp||s===Qp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===qp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$p)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===em)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===im)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===am)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rm||s===om||s===lm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===rm)return u===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===om)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cm||s===um||s===fm||s===hm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===cm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===um)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nl?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const g3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new tM(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Gi({vertexShader:g3,fragmentShader:v3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sa(new kl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x3 extends xo{constructor(t,n){super();const s=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",M=new _3,x={},w=n.getContextAttributes();let D=null,U=null;const B=[],z=[],P=new Re;let b=null;const L=new Bi;L.viewport=new on;const ot=new Bi;ot.viewport=new on;const V=[L,ot],Y=new D1;let $=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let _t=B[nt];return _t===void 0&&(_t=new Fd,B[nt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(nt){let _t=B[nt];return _t===void 0&&(_t=new Fd,B[nt]=_t),_t.getGripSpace()},this.getHand=function(nt){let _t=B[nt];return _t===void 0&&(_t=new Fd,B[nt]=_t),_t.getHandSpace()};function K(nt){const _t=z.indexOf(nt.inputSource);if(_t===-1)return;const Tt=B[_t];Tt!==void 0&&(Tt.update(nt.inputSource,nt.frame,d||u),Tt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",O),o.removeEventListener("inputsourceschange",I);for(let nt=0;nt<B.length;nt++){const _t=z[nt];_t!==null&&(z[nt]=null,B[nt].disconnect(_t))}$=null,st=null,M.reset();for(const nt in x)delete x[nt];t.setRenderTarget(D),y=null,v=null,_=null,o=null,U=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(nt){d=nt},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(nt){if(o=nt,o!==null){if(D=t.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",O),o.addEventListener("inputsourceschange",I),w.xrCompatible!==!0&&await n.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Xt=null,Qt=null;w.depth&&(Qt=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Tt=w.stencil?nr:Ba,Xt=w.stencil?Nl:aa);const ee={colorFormat:n.RGBA8,depthFormat:Qt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(ee),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new ea(v.textureWidth,v.textureHeight,{format:zi,type:Mi,depthTexture:new Pl(v.textureWidth,v.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Tt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new ea(y.framebufferWidth,y.framebufferHeight,{format:zi,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),Nt.setContext(o),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function I(nt){for(let _t=0;_t<nt.removed.length;_t++){const Tt=nt.removed[_t],Xt=z.indexOf(Tt);Xt>=0&&(z[Xt]=null,B[Xt].disconnect(Tt))}for(let _t=0;_t<nt.added.length;_t++){const Tt=nt.added[_t];let Xt=z.indexOf(Tt);if(Xt===-1){for(let ee=0;ee<B.length;ee++)if(ee>=z.length){z.push(Tt),Xt=ee;break}else if(z[ee]===null){z[ee]=Tt,Xt=ee;break}if(Xt===-1)break}const Qt=B[Xt];Qt&&Qt.connect(Tt)}}const et=new rt,ut=new rt;function yt(nt,_t,Tt){et.setFromMatrixPosition(_t.matrixWorld),ut.setFromMatrixPosition(Tt.matrixWorld);const Xt=et.distanceTo(ut),Qt=_t.projectionMatrix.elements,ee=Tt.projectionMatrix.elements,tn=Qt[14]/(Qt[10]-1),xe=Qt[14]/(Qt[10]+1),ge=(Qt[9]+1)/Qt[5],Le=(Qt[9]-1)/Qt[5],ce=(Qt[8]-1)/Qt[0],Je=(ee[8]+1)/ee[0],G=tn*ce,je=tn*Je,Te=Xt/(-ce+Je),Pe=Te*-ce;if(_t.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Pe),nt.translateZ(Te),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Qt[10]===-1)nt.projectionMatrix.copy(_t.projectionMatrix),nt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Yt=tn+Te,N=xe+Te,T=G-Pe,q=je+(Xt-Pe),pt=ge*xe/N*Yt,xt=Le*xe/N*Yt;nt.projectionMatrix.makePerspective(T,q,pt,xt,Yt,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function F(nt,_t){_t===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(_t.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(o===null)return;let _t=nt.near,Tt=nt.far;M.texture!==null&&(M.depthNear>0&&(_t=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),Y.near=ot.near=L.near=_t,Y.far=ot.far=L.far=Tt,($!==Y.near||st!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),$=Y.near,st=Y.far),Y.layers.mask=nt.layers.mask|6,L.layers.mask=Y.layers.mask&-5,ot.layers.mask=Y.layers.mask&-3;const Xt=nt.parent,Qt=Y.cameras;F(Y,Xt);for(let ee=0;ee<Qt.length;ee++)F(Qt[ee],Xt);Qt.length===2?yt(Y,L,ot):Y.projectionMatrix.copy(L.projectionMatrix),j(nt,Y,Xt)};function j(nt,_t,Tt){Tt===null?nt.matrix.copy(_t.matrixWorld):(nt.matrix.copy(Tt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(_t.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(_t.projectionMatrix),nt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=dm*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(nt){m=nt,v!==null&&(v.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(nt){return x[nt]};let gt=null;function bt(nt,_t){if(g=_t.getViewerPose(d||u),E=_t,g!==null){const Tt=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Xt=!1;Tt.length!==Y.cameras.length&&(Y.cameras.length=0,Xt=!0);for(let xe=0;xe<Tt.length;xe++){const ge=Tt[xe];let Le=null;if(y!==null)Le=y.getViewport(ge);else{const Je=_.getViewSubImage(v,ge);Le=Je.viewport,xe===0&&(t.setRenderTargetTextures(U,Je.colorTexture,Je.depthStencilTexture),t.setRenderTarget(U))}let ce=V[xe];ce===void 0&&(ce=new Bi,ce.layers.enable(xe),ce.viewport=new on,V[xe]=ce),ce.matrix.fromArray(ge.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ge.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Le.x,Le.y,Le.width,Le.height),xe===0&&(Y.matrix.copy(ce.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Xt===!0&&Y.cameras.push(ce)}const Qt=o.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=s.getBinding();const xe=_.getDepthInformation(Tt[0]);xe&&xe.isValid&&xe.texture&&M.init(xe,o.renderState)}if(Qt&&Qt.includes("camera-access")&&R){t.state.unbindTexture(),_=s.getBinding();for(let xe=0;xe<Tt.length;xe++){const ge=Tt[xe].camera;if(ge){let Le=x[ge];Le||(Le=new tM,x[ge]=Le);const ce=_.getCameraImage(ge);Le.sourceTexture=ce}}}}for(let Tt=0;Tt<B.length;Tt++){const Xt=z[Tt],Qt=B[Tt];Xt!==null&&Qt!==void 0&&Qt.update(Xt,_t,d||u)}gt&&gt(nt,_t),_t.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:_t}),E=null}const Nt=new iM;Nt.setAnimationLoop(bt),this.setAnimationLoop=function(nt){gt=nt},this.dispose=function(){}}}const Zs=new Ia,y3=new vn;function S3(i,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,eM(i)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,w,D,U){x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,U)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),R(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,w,D):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===$n&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===$n&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const w=t.get(x),D=w.envMap,U=w.envMapRotation;D&&(M.envMap.value=D,Zs.copy(U),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),M.envMapRotation.value.setFromMatrix4(y3.makeRotationFromEuler(Zs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,w,D){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*w,M.scale.value=D*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,w){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const w=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function M3(i,t,n,s){let o={},c={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,D){const U=D.program;s.uniformBlockBinding(w,U)}function d(w,D){let U=o[w.id];U===void 0&&(E(w),U=g(w),o[w.id]=U,w.addEventListener("dispose",M));const B=D.program;s.updateUBOMapping(w,B);const z=t.render.frame;c[w.id]!==z&&(v(w),c[w.id]=z)}function g(w){const D=_();w.__bindingPointIndex=D;const U=i.createBuffer(),B=w.__size,z=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,B,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,U),U}function _(){for(let w=0;w<h;w++)if(u.indexOf(w)===-1)return u.push(w),w;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const D=o[w.id],U=w.uniforms,B=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let z=0,P=U.length;z<P;z++){const b=Array.isArray(U[z])?U[z]:[U[z]];for(let L=0,ot=b.length;L<ot;L++){const V=b[L];if(y(V,z,L,B)===!0){const Y=V.__offset,$=Array.isArray(V.value)?V.value:[V.value];let st=0;for(let K=0;K<$.length;K++){const O=$[K],I=R(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,Y+st,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,st),st+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(w,D,U,B){const z=w.value,P=D+"_"+U;if(B[P]===void 0)return typeof z=="number"||typeof z=="boolean"?B[P]=z:B[P]=z.clone(),!0;{const b=B[P];if(typeof z=="number"||typeof z=="boolean"){if(b!==z)return B[P]=z,!0}else if(b.equals(z)===!1)return b.copy(z),!0}return!1}function E(w){const D=w.uniforms;let U=0;const B=16;for(let P=0,b=D.length;P<b;P++){const L=Array.isArray(D[P])?D[P]:[D[P]];for(let ot=0,V=L.length;ot<V;ot++){const Y=L[ot],$=Array.isArray(Y.value)?Y.value:[Y.value];for(let st=0,K=$.length;st<K;st++){const O=$[st],I=R(O),et=U%B,ut=et%I.boundary,yt=et+ut;U+=ut,yt!==0&&B-yt<I.storage&&(U+=B-yt),Y.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=I.storage}}}const z=U%B;return z>0&&(U+=B-z),w.__size=U,w.__cache={},this}function R(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",w),D}function M(w){const D=w.target;D.removeEventListener("dispose",M);const U=u.indexOf(D.__bindingPointIndex);u.splice(U,1),i.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function x(){for(const w in o)i.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:m,update:d,dispose:x}}const E3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function T3(){return Zi===null&&(Zi=new v1(E3,16,16,go,Fa),Zi.name="DFG_LUT",Zi.minFilter=Fn,Zi.magFilter=Fn,Zi.wrapS=La,Zi.wrapT=La,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class b3{constructor(t={}){const{canvas:n=YA(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Mi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const R=y,M=new Set([qm,Wm,Xm]),x=new Set([Mi,aa,Ll,Nl,Gm,km]),w=new Uint32Array(4),D=new Int32Array(4);let U=null,B=null;const z=[],P=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let ot=!1;this._outputColorSpace=fi;let V=0,Y=0,$=null,st=-1,K=null;const O=new on,I=new on;let et=null;const ut=new ke(0);let yt=0,F=n.width,j=n.height,gt=1,bt=null,Nt=null;const nt=new on(0,0,F,j),_t=new on(0,0,F,j);let Tt=!1;const Xt=new JS;let Qt=!1,ee=!1;const tn=new vn,xe=new rt,ge=new on,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Je(){return $===null?gt:1}let G=s;function je(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vm}`),n.addEventListener("webglcontextlost",zt,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),G===null){const X="webgl2";if(G=je(X,C),G===null)throw je(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ue("WebGLRenderer: "+C.message),C}let Te,Pe,Yt,N,T,q,pt,xt,ht,Wt,Ct,Kt,ne,Et,St,Pt,Lt,Ot,fe,W,Rt,At,Ft;function Mt(){Te=new bw(G),Te.init(),Rt=new m3(G,Te),Pe=new vw(G,Te,t,Rt),Yt=new d3(G,Te),Pe.reversedDepthBuffer&&v&&Yt.buffers.depth.setReversed(!0),N=new Cw(G),T=new $2,q=new p3(G,Te,Yt,T,Pe,Rt,N),pt=new Tw(L),xt=new N1(G),At=new mw(G,xt),ht=new Aw(G,xt,N,At),Wt=new Dw(G,ht,xt,At,N),Ot=new ww(G,Pe,q),St=new _w(T),Ct=new J2(L,pt,Te,Pe,At,St),Kt=new S3(L,T),ne=new e3,Et=new o3(Te),Lt=new pw(L,pt,Yt,Wt,E,m),Pt=new h3(L,Wt,Pe),Ft=new M3(G,N,Pe,Yt),fe=new gw(G,Te,N),W=new Rw(G,Te,N),N.programs=Ct.programs,L.capabilities=Pe,L.extensions=Te,L.properties=T,L.renderLists=ne,L.shadowMap=Pt,L.state=Yt,L.info=N}Mt(),R!==Mi&&(b=new Lw(R,n.width,n.height,o,c));const ft=new x3(L,G);this.xr=ft,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(C){C!==void 0&&(gt=C,this.setSize(F,j,!1))},this.getSize=function(C){return C.set(F,j)},this.setSize=function(C,X,lt=!0){if(ft.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,j=X,n.width=Math.floor(C*gt),n.height=Math.floor(X*gt),lt===!0&&(n.style.width=C+"px",n.style.height=X+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(F*gt,j*gt).floor()},this.setDrawingBufferSize=function(C,X,lt){F=C,j=X,gt=lt,n.width=Math.floor(C*lt),n.height=Math.floor(X*lt),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(R===Mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,X,lt,it){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,X,lt,it),Yt.viewport(O.copy(nt).multiplyScalar(gt).round())},this.getScissor=function(C){return C.copy(_t)},this.setScissor=function(C,X,lt,it){C.isVector4?_t.set(C.x,C.y,C.z,C.w):_t.set(C,X,lt,it),Yt.scissor(I.copy(_t).multiplyScalar(gt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(C){Yt.setScissorTest(Tt=C)},this.setOpaqueSort=function(C){bt=C},this.setTransparentSort=function(C){Nt=C},this.getClearColor=function(C){return C.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,lt=!0){let it=0;if(C){let Q=!1;if($!==null){const wt=$.texture.format;Q=M.has(wt)}if(Q){const wt=$.texture.type,It=x.has(wt),Dt=Lt.getClearColor(),qt=Lt.getClearAlpha(),Zt=Dt.r,ie=Dt.g,oe=Dt.b;It?(w[0]=Zt,w[1]=ie,w[2]=oe,w[3]=qt,G.clearBufferuiv(G.COLOR,0,w)):(D[0]=Zt,D[1]=ie,D[2]=oe,D[3]=qt,G.clearBufferiv(G.COLOR,0,D))}else it|=G.COLOR_BUFFER_BIT}X&&(it|=G.DEPTH_BUFFER_BIT),lt&&(it|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&G.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",zt,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),Lt.dispose(),ne.dispose(),Et.dispose(),T.dispose(),pt.dispose(),Wt.dispose(),At.dispose(),Ft.dispose(),Ct.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",cr),ft.removeEventListener("sessionend",ur),ki.stop()};function zt(C){C.preventDefault(),Ex("WebGLRenderer: Context Lost."),ot=!0}function ae(){Ex("WebGLRenderer: Context Restored."),ot=!1;const C=N.autoReset,X=Pt.enabled,lt=Pt.autoUpdate,it=Pt.needsUpdate,Q=Pt.type;Mt(),N.autoReset=C,Pt.enabled=X,Pt.autoUpdate=lt,Pt.needsUpdate=it,Pt.type=Q}function Fe(C){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function be(C){const X=C.target;X.removeEventListener("dispose",be),Bn(X)}function Bn(C){bi(C),T.remove(C)}function bi(C){const X=T.get(C).programs;X!==void 0&&(X.forEach(function(lt){Ct.releaseProgram(lt)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,lt,it,Q,wt){X===null&&(X=Le);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,Dt=Ql(C,X,lt,it,Q);Yt.setMaterial(it,It);let qt=lt.index,Zt=1;if(it.wireframe===!0){if(qt=ht.getWireframeAttribute(lt),qt===void 0)return;Zt=2}const ie=lt.drawRange,oe=lt.attributes.position;let Vt=ie.start*Zt,he=(ie.start+ie.count)*Zt;wt!==null&&(Vt=Math.max(Vt,wt.start*Zt),he=Math.min(he,(wt.start+wt.count)*Zt)),qt!==null?(Vt=Math.max(Vt,0),he=Math.min(he,qt.count)):oe!=null&&(Vt=Math.max(Vt,0),he=Math.min(he,oe.count));const Ze=he-Vt;if(Ze<0||Ze===1/0)return;At.setup(Q,it,Dt,lt,qt);let Ke,Ce=fe;if(qt!==null&&(Ke=xt.get(qt),Ce=W,Ce.setIndex(Ke)),Q.isMesh)it.wireframe===!0?(Yt.setLineWidth(it.wireframeLinewidth*Je()),Ce.setMode(G.LINES)):Ce.setMode(G.TRIANGLES);else if(Q.isLine){let xn=it.linewidth;xn===void 0&&(xn=1),Yt.setLineWidth(xn*Je()),Q.isLineSegments?Ce.setMode(G.LINES):Q.isLineLoop?Ce.setMode(G.LINE_LOOP):Ce.setMode(G.LINE_STRIP)}else Q.isPoints?Ce.setMode(G.POINTS):Q.isSprite&&Ce.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ku("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const xn=Q._multiDrawStarts,Gt=Q._multiDrawCounts,In=Q._multiDrawCount,se=qt?xt.get(qt).bytesPerElement:1,zn=T.get(it).currentProgram.getUniforms();for(let ti=0;ti<In;ti++)zn.setValue(G,"_gl_DrawID",ti),Ce.render(xn[ti]/se,Gt[ti])}else if(Q.isInstancedMesh)Ce.renderInstances(Vt,Ze,Q.count);else if(lt.isInstancedBufferGeometry){const xn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Gt=Math.min(lt.instanceCount,xn);Ce.renderInstances(Vt,Ze,Gt)}else Ce.render(Vt,Ze)};function bo(C,X,lt){C.transparent===!0&&C.side===Ua&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,Ga(C,X,lt),C.side=Ts,C.needsUpdate=!0,Ga(C,X,lt),C.side=Ua):Ga(C,X,lt)}this.compile=function(C,X,lt=null){lt===null&&(lt=C),B=Et.get(lt),B.init(X),P.push(B),lt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),C!==lt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),B.setupLights();const it=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const wt=Q.material;if(wt)if(Array.isArray(wt))for(let It=0;It<wt.length;It++){const Dt=wt[It];bo(Dt,lt,Q),it.add(Dt)}else bo(wt,lt,Q),it.add(wt)}),B=P.pop(),it},this.compileAsync=function(C,X,lt=null){const it=this.compile(C,X,lt);return new Promise(Q=>{function wt(){if(it.forEach(function(It){T.get(It).currentProgram.isReady()&&it.delete(It)}),it.size===0){Q(C);return}setTimeout(wt,10)}Te.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let lr=null;function jl(C){lr&&lr(C)}function cr(){ki.stop()}function ur(){ki.start()}const ki=new iM;ki.setAnimationLoop(jl),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(C){lr=C,ft.setAnimationLoop(C),C===null?ki.stop():ki.start()},ft.addEventListener("sessionstart",cr),ft.addEventListener("sessionend",ur),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ot===!0)return;const lt=ft.enabled===!0&&ft.isPresenting===!0,it=b!==null&&($===null||lt)&&b.begin(L,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(X),X=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,X,$),B=Et.get(C,P.length),B.init(X),P.push(B),tn.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Xt.setFromProjectionMatrix(tn,$i,X.reversedDepth),ee=this.localClippingEnabled,Qt=St.init(this.clippingPlanes,ee),U=ne.get(C,z.length),U.init(),z.push(U),ft.enabled===!0&&ft.isPresenting===!0){const It=L.xr.getDepthSensingMesh();It!==null&&fr(It,X,-1/0,L.sortObjects)}fr(C,X,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(bt,Nt),ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ce&&Lt.addToRenderList(U,C),this.info.render.frame++,Qt===!0&&St.beginShadows();const Q=B.state.shadowsArray;if(Pt.render(Q,C,X),Qt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&b.hasRenderPass())===!1){const It=U.opaque,Dt=U.transmissive;if(B.setupLights(),X.isArrayCamera){const qt=X.cameras;if(Dt.length>0)for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const oe=qt[Zt];ln(It,Dt,C,oe)}ce&&Lt.render(C);for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const oe=qt[Zt];Ai(U,C,oe,oe.viewport)}}else Dt.length>0&&ln(It,Dt,C,X),ce&&Lt.render(C),Ai(U,C,X)}$!==null&&Y===0&&(q.updateMultisampleRenderTarget($),q.updateRenderTargetMipmap($)),it&&b.end(L),C.isScene===!0&&C.onAfterRender(L,C,X),At.resetDefaultState(),st=-1,K=null,P.pop(),P.length>0?(B=P[P.length-1],Qt===!0&&St.setGlobalState(L.clippingPlanes,B.state.camera)):B=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function fr(C,X,lt,it){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)B.pushLight(C),C.castShadow&&B.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xt.intersectsSprite(C)){it&&ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tn);const It=Wt.update(C),Dt=C.material;Dt.visible&&U.push(C,It,Dt,lt,ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xt.intersectsObject(C))){const It=Wt.update(C),Dt=C.material;if(it&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ge.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ge.copy(It.boundingSphere.center)),ge.applyMatrix4(C.matrixWorld).applyMatrix4(tn)),Array.isArray(Dt)){const qt=It.groups;for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const oe=qt[Zt],Vt=Dt[oe.materialIndex];Vt&&Vt.visible&&U.push(C,It,Vt,lt,ge.z,oe)}}else Dt.visible&&U.push(C,It,Dt,lt,ge.z,null)}}const wt=C.children;for(let It=0,Dt=wt.length;It<Dt;It++)fr(wt[It],X,lt,it)}function Ai(C,X,lt,it){const{opaque:Q,transmissive:wt,transparent:It}=C;B.setupLightsView(lt),Qt===!0&&St.setGlobalState(L.clippingPlanes,lt),it&&Yt.viewport(O.copy(it)),Q.length>0&&_n(Q,X,lt),wt.length>0&&_n(wt,X,lt),It.length>0&&_n(It,X,lt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function ln(C,X,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[it.id]===void 0){const Vt=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[it.id]=new ea(1,1,{generateMipmaps:!0,type:Vt?Fa:Mi,minFilter:er,samples:Pe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const wt=B.state.transmissionRenderTarget[it.id],It=it.viewport||O;wt.setSize(It.z*L.transmissionResolutionScale,It.w*L.transmissionResolutionScale);const Dt=L.getRenderTarget(),qt=L.getActiveCubeFace(),Zt=L.getActiveMipmapLevel();L.setRenderTarget(wt),L.getClearColor(ut),yt=L.getClearAlpha(),yt<1&&L.setClearColor(16777215,.5),L.clear(),ce&&Lt.render(lt);const ie=L.toneMapping;L.toneMapping=ta;const oe=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),B.setupLightsView(it),Qt===!0&&St.setGlobalState(L.clippingPlanes,it),_n(C,lt,it),q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let he=0,Ze=X.length;he<Ze;he++){const Ke=X[he],{object:Ce,geometry:xn,material:Gt,group:In}=Ke;if(Gt.side===Ua&&Ce.layers.test(it.layers)){const se=Gt.side;Gt.side=$n,Gt.needsUpdate=!0,oa(Ce,lt,it,xn,Gt,In),Gt.side=se,Gt.needsUpdate=!0,Vt=!0}}Vt===!0&&(q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt))}L.setRenderTarget(Dt,qt,Zt),L.setClearColor(ut,yt),oe!==void 0&&(it.viewport=oe),L.toneMapping=ie}function _n(C,X,lt){const it=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,wt=C.length;Q<wt;Q++){const It=C[Q],{object:Dt,geometry:qt,group:Zt}=It;let ie=It.material;ie.allowOverride===!0&&it!==null&&(ie=it),Dt.layers.test(lt.layers)&&oa(Dt,X,lt,qt,ie,Zt)}}function oa(C,X,lt,it,Q,wt){C.onBeforeRender(L,X,lt,it,Q,wt),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(L,X,lt,it,C,wt),Q.transparent===!0&&Q.side===Ua&&Q.forceSinglePass===!1?(Q.side=$n,Q.needsUpdate=!0,L.renderBufferDirect(lt,X,it,Q,C,wt),Q.side=Ts,Q.needsUpdate=!0,L.renderBufferDirect(lt,X,it,Q,C,wt),Q.side=Ua):L.renderBufferDirect(lt,X,it,Q,C,wt),C.onAfterRender(L,X,lt,it,Q,wt)}function Ga(C,X,lt){X.isScene!==!0&&(X=Le);const it=T.get(C),Q=B.state.lights,wt=B.state.shadowsArray,It=Q.state.version,Dt=Ct.getParameters(C,Q.state,wt,X,lt),qt=Ct.getProgramCacheKey(Dt);let Zt=it.programs;it.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,it.fog=X.fog;const ie=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;it.envMap=pt.get(C.envMap||it.environment,ie),it.envMapRotation=it.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Zt===void 0&&(C.addEventListener("dispose",be),Zt=new Map,it.programs=Zt);let oe=Zt.get(qt);if(oe!==void 0){if(it.currentProgram===oe&&it.lightsStateVersion===It)return Kl(C,Dt),oe}else Dt.uniforms=Ct.getUniforms(C),C.onBeforeCompile(Dt,L),oe=Ct.acquireProgram(Dt,qt),Zt.set(qt,oe),it.uniforms=Dt.uniforms;const Vt=it.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=St.uniform),Kl(C,Dt),it.needsLights=Ao(C),it.lightsStateVersion=It,it.needsLights&&(Vt.ambientLightColor.value=Q.state.ambient,Vt.lightProbe.value=Q.state.probe,Vt.directionalLights.value=Q.state.directional,Vt.directionalLightShadows.value=Q.state.directionalShadow,Vt.spotLights.value=Q.state.spot,Vt.spotLightShadows.value=Q.state.spotShadow,Vt.rectAreaLights.value=Q.state.rectArea,Vt.ltc_1.value=Q.state.rectAreaLTC1,Vt.ltc_2.value=Q.state.rectAreaLTC2,Vt.pointLights.value=Q.state.point,Vt.pointLightShadows.value=Q.state.pointShadow,Vt.hemisphereLights.value=Q.state.hemi,Vt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Vt.spotLightMatrix.value=Q.state.spotLightMatrix,Vt.spotLightMap.value=Q.state.spotLightMap,Vt.pointShadowMatrix.value=Q.state.pointShadowMatrix),it.currentProgram=oe,it.uniformsList=null,oe}function Zl(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Iu.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Kl(C,X){const lt=T.get(C);lt.outputColorSpace=X.outputColorSpace,lt.batching=X.batching,lt.batchingColor=X.batchingColor,lt.instancing=X.instancing,lt.instancingColor=X.instancingColor,lt.instancingMorph=X.instancingMorph,lt.skinning=X.skinning,lt.morphTargets=X.morphTargets,lt.morphNormals=X.morphNormals,lt.morphColors=X.morphColors,lt.morphTargetsCount=X.morphTargetsCount,lt.numClippingPlanes=X.numClippingPlanes,lt.numIntersection=X.numClipIntersection,lt.vertexAlphas=X.vertexAlphas,lt.vertexTangents=X.vertexTangents,lt.toneMapping=X.toneMapping}function Ql(C,X,lt,it,Q){X.isScene!==!0&&(X=Le),q.resetTextureUnits();const wt=X.fog,It=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?X.environment:null,Dt=$===null?L.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:vo,qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Zt=pt.get(it.envMap||It,qt),ie=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Vt=!!lt.morphAttributes.position,he=!!lt.morphAttributes.normal,Ze=!!lt.morphAttributes.color;let Ke=ta;it.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ke=L.toneMapping);const Ce=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,xn=Ce!==void 0?Ce.length:0,Gt=T.get(it),In=B.state.lights;if(Qt===!0&&(ee===!0||C!==K)){const un=C===K&&it.id===st;St.setState(it,C,un)}let se=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==In.state.version||Gt.outputColorSpace!==Dt||Q.isBatchedMesh&&Gt.batching===!1||!Q.isBatchedMesh&&Gt.batching===!0||Q.isBatchedMesh&&Gt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Gt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Gt.instancing===!1||!Q.isInstancedMesh&&Gt.instancing===!0||Q.isSkinnedMesh&&Gt.skinning===!1||!Q.isSkinnedMesh&&Gt.skinning===!0||Q.isInstancedMesh&&Gt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Gt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Gt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Gt.instancingMorph===!1&&Q.morphTexture!==null||Gt.envMap!==Zt||it.fog===!0&&Gt.fog!==wt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==St.numPlanes||Gt.numIntersection!==St.numIntersection)||Gt.vertexAlphas!==ie||Gt.vertexTangents!==oe||Gt.morphTargets!==Vt||Gt.morphNormals!==he||Gt.morphColors!==Ze||Gt.toneMapping!==Ke||Gt.morphTargetsCount!==xn)&&(se=!0):(se=!0,Gt.__version=it.version);let zn=Gt.currentProgram;se===!0&&(zn=Ga(it,X,Q));let ti=!1,Ri=!1,ei=!1;const Oe=zn.getUniforms(),cn=Gt.uniforms;if(Yt.useProgram(zn.program)&&(ti=!0,Ri=!0,ei=!0),it.id!==st&&(st=it.id,Ri=!0),ti||K!==C){Yt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",C.projectionMatrix),Oe.setValue(G,"viewMatrix",C.matrixWorldInverse);const Ci=Oe.map.cameraPosition;Ci!==void 0&&Ci.setValue(G,xe.setFromMatrixPosition(C.matrixWorld)),Pe.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),K!==C&&(K=C,Ri=!0,ei=!0)}if(Gt.needsLights&&(In.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",In.state.directionalShadowMap,q),In.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",In.state.spotShadowMap,q),In.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",In.state.pointShadowMap,q)),Q.isSkinnedMesh){Oe.setOptional(G,Q,"bindMatrix"),Oe.setOptional(G,Q,"bindMatrixInverse");const un=Q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Oe.setValue(G,"boneTexture",un.boneTexture,q))}Q.isBatchedMesh&&(Oe.setOptional(G,Q,"batchingTexture"),Oe.setValue(G,"batchingTexture",Q._matricesTexture,q),Oe.setOptional(G,Q,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",Q._indirectTexture,q),Oe.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",Q._colorsTexture,q));const Vn=lt.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&Ot.update(Q,lt,zn),(Ri||Gt.receiveShadow!==Q.receiveShadow)&&(Gt.receiveShadow=Q.receiveShadow,Oe.setValue(G,"receiveShadow",Q.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&X.environment!==null&&(cn.envMapIntensity.value=X.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=T3()),Ri&&(Oe.setValue(G,"toneMappingExposure",L.toneMappingExposure),Gt.needsLights&&As(cn,ei),wt&&it.fog===!0&&Kt.refreshFogUniforms(cn,wt),Kt.refreshMaterialUniforms(cn,it,gt,j,B.state.transmissionRenderTarget[C.id]),Iu.upload(G,Zl(Gt),cn,q)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Iu.upload(G,Zl(Gt),cn,q),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Oe.setValue(G,"center",Q.center),Oe.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Oe.setValue(G,"normalMatrix",Q.normalMatrix),Oe.setValue(G,"modelMatrix",Q.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const un=it.uniformsGroups;for(let Ci=0,la=un.length;Ci<la;Ci++){const hr=un[Ci];Ft.update(hr,zn),Ft.bind(hr,zn)}}return zn}function As(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Ao(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,X,lt){const it=T.get(C);it.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),T.get(C.texture).__webglTexture=X,T.get(C.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const lt=T.get(C);lt.__webglFramebuffer=X,lt.__useDefaultFramebuffer=X===void 0};const ka=G.createFramebuffer();this.setRenderTarget=function(C,X=0,lt=0){$=C,V=X,Y=lt;let it=null,Q=!1,wt=!1;if(C){const Dt=T.get(C);if(Dt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Dt.__webglFramebuffer),O.copy(C.viewport),I.copy(C.scissor),et=C.scissorTest,Yt.viewport(O),Yt.scissor(I),Yt.setScissorTest(et),st=-1;return}else if(Dt.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Dt.__hasExternalTextures)q.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ie=C.depthTexture;if(Dt.__boundDepthTexture!==ie){if(ie!==null&&T.has(ie)&&(C.width!==ie.image.width||C.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(wt=!0);const Zt=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Zt[X])?it=Zt[X][lt]:it=Zt[X],Q=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?it=T.get(C).__webglMultisampledFramebuffer:Array.isArray(Zt)?it=Zt[lt]:it=Zt,O.copy(C.viewport),I.copy(C.scissor),et=C.scissorTest}else O.copy(nt).multiplyScalar(gt).floor(),I.copy(_t).multiplyScalar(gt).floor(),et=Tt;if(lt!==0&&(it=ka),Yt.bindFramebuffer(G.FRAMEBUFFER,it)&&Yt.drawBuffers(C,it),Yt.viewport(O),Yt.scissor(I),Yt.setScissorTest(et),Q){const Dt=T.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Dt.__webglTexture,lt)}else if(wt){const Dt=X;for(let qt=0;qt<C.textures.length;qt++){const Zt=T.get(C.textures[qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,lt,Dt)}}else if(C!==null&&lt!==0){const Dt=T.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dt.__webglTexture,lt)}st=-1},this.readRenderTargetPixels=function(C,X,lt,it,Q,wt,It,Dt=0){if(!(C&&C.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(qt=qt[It]),qt){Yt.bindFramebuffer(G.FRAMEBUFFER,qt);try{const Zt=C.textures[Dt],ie=Zt.format,oe=Zt.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Dt),!Pe.textureFormatReadable(ie)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(oe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-it&&lt>=0&&lt<=C.height-Q&&G.readPixels(X,lt,it,Q,Rt.convert(ie),Rt.convert(oe),wt)}finally{const Zt=$!==null?T.get($).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(C,X,lt,it,Q,wt,It,Dt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(qt=qt[It]),qt)if(X>=0&&X<=C.width-it&&lt>=0&&lt<=C.height-Q){Yt.bindFramebuffer(G.FRAMEBUFFER,qt);const Zt=C.textures[Dt],ie=Zt.format,oe=Zt.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Dt),!Pe.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Vt),G.bufferData(G.PIXEL_PACK_BUFFER,wt.byteLength,G.STREAM_READ),G.readPixels(X,lt,it,Q,Rt.convert(ie),Rt.convert(oe),0);const he=$!==null?T.get($).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,he);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await jA(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Vt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,wt),G.deleteBuffer(Vt),G.deleteSync(Ze),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,lt=0){const it=Math.pow(2,-lt),Q=Math.floor(C.image.width*it),wt=Math.floor(C.image.height*it),It=X!==null?X.x:0,Dt=X!==null?X.y:0;q.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,lt,0,0,It,Dt,Q,wt),Yt.unbindTexture()};const Xa=G.createFramebuffer(),Rs=G.createFramebuffer();this.copyTextureToTexture=function(C,X,lt=null,it=null,Q=0,wt=0){let It,Dt,qt,Zt,ie,oe,Vt,he,Ze;const Ke=C.isCompressedTexture?C.mipmaps[wt]:C.image;if(lt!==null)It=lt.max.x-lt.min.x,Dt=lt.max.y-lt.min.y,qt=lt.isBox3?lt.max.z-lt.min.z:1,Zt=lt.min.x,ie=lt.min.y,oe=lt.isBox3?lt.min.z:0;else{const cn=Math.pow(2,-Q);It=Math.floor(Ke.width*cn),Dt=Math.floor(Ke.height*cn),C.isDataArrayTexture?qt=Ke.depth:C.isData3DTexture?qt=Math.floor(Ke.depth*cn):qt=1,Zt=0,ie=0,oe=0}it!==null?(Vt=it.x,he=it.y,Ze=it.z):(Vt=0,he=0,Ze=0);const Ce=Rt.convert(X.format),xn=Rt.convert(X.type);let Gt;X.isData3DTexture?(q.setTexture3D(X,0),Gt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Gt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Gt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const In=G.getParameter(G.UNPACK_ROW_LENGTH),se=G.getParameter(G.UNPACK_IMAGE_HEIGHT),zn=G.getParameter(G.UNPACK_SKIP_PIXELS),ti=G.getParameter(G.UNPACK_SKIP_ROWS),Ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ie),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oe);const ei=C.isDataArrayTexture||C.isData3DTexture,Oe=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const cn=T.get(C),Vn=T.get(X),un=T.get(cn.__renderTarget),Ci=T.get(Vn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,un.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let la=0;la<qt;la++)ei&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(C).__webglTexture,Q,oe+la),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(X).__webglTexture,wt,Ze+la)),G.blitFramebuffer(Zt,ie,It,Dt,Vt,he,It,Dt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||T.has(C)){const cn=T.get(C),Vn=T.get(X);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,Xa),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Rs);for(let un=0;un<qt;un++)ei?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,cn.__webglTexture,Q,oe+un):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,cn.__webglTexture,Q),Oe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vn.__webglTexture,wt,Ze+un):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Vn.__webglTexture,wt),Q!==0?G.blitFramebuffer(Zt,ie,It,Dt,Vt,he,It,Dt,G.COLOR_BUFFER_BIT,G.NEAREST):Oe?G.copyTexSubImage3D(Gt,wt,Vt,he,Ze+un,Zt,ie,It,Dt):G.copyTexSubImage2D(Gt,wt,Vt,he,Zt,ie,It,Dt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Oe?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Gt,wt,Vt,he,Ze,It,Dt,qt,Ce,xn,Ke.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Gt,wt,Vt,he,Ze,It,Dt,qt,Ce,Ke.data):G.texSubImage3D(Gt,wt,Vt,he,Ze,It,Dt,qt,Ce,xn,Ke):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,wt,Vt,he,It,Dt,Ce,xn,Ke.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,wt,Vt,he,Ke.width,Ke.height,Ce,Ke.data):G.texSubImage2D(G.TEXTURE_2D,wt,Vt,he,It,Dt,Ce,xn,Ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,In),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,se),G.pixelStorei(G.UNPACK_SKIP_PIXELS,zn),G.pixelStorei(G.UNPACK_SKIP_ROWS,ti),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ri),wt===0&&X.generateMipmaps&&G.generateMipmap(Gt),Yt.unbindTexture()},this.initRenderTarget=function(C){T.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),Yt.unbindTexture()},this.resetState=function(){V=0,Y=0,$=null,Yt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}const zu=8,A3=`
#define MAX_COLORS ${zu}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,R3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function C3({className:i,style:t,rotation:n=45,speed:s=.2,colors:o=[],transparent:c=!0,autoRotate:u=0,scale:h=1,frequency:m=1,warpStrength:d=1,mouseInfluence:g=1,parallax:_=.5,noise:v=.1}){const y=Bt.useRef(null),E=Bt.useRef(null),R=Bt.useRef(null),M=Bt.useRef(null),x=Bt.useRef(null),w=Bt.useRef(n),D=Bt.useRef(u),U=Bt.useRef(new Re(0,0)),B=Bt.useRef(new Re(0,0)),z=Bt.useRef(8);return Bt.useEffect(()=>{const P=y.current,b=new u1,L=new Qm(-1,1,1,-1,0,1),ot=new kl(2,2),V=Array.from({length:zu},()=>new rt(0,0,0)),Y=new Gi({vertexShader:R3,fragmentShader:A3,uniforms:{uCanvas:{value:new Re(1,1)},uTime:{value:0},uSpeed:{value:s},uRot:{value:new Re(1,0)},uColorCount:{value:0},uColors:{value:V},uTransparent:{value:c?1:0},uScale:{value:h},uFrequency:{value:m},uWarpStrength:{value:d},uPointer:{value:new Re(0,0)},uMouseInfluence:{value:g},uParallax:{value:_},uNoise:{value:v}},premultipliedAlpha:!0,transparent:!0});M.current=Y;const $=new sa(ot,Y);b.add($);const st=new b3({antialias:!1,powerPreference:"high-performance",alpha:!0});E.current=st,st.outputColorSpace=fi,st.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),st.setClearColor(0,c?0:1),st.domElement.style.width="100%",st.domElement.style.height="100%",st.domElement.style.display="block",P.appendChild(st.domElement);const K=new U1,O=()=>{const et=P.clientWidth||1,ut=P.clientHeight||1;st.setSize(et,ut,!1),Y.uniforms.uCanvas.value.set(et,ut)};if(O(),"ResizeObserver"in window){const et=new ResizeObserver(O);et.observe(P),x.current=et}else window.addEventListener("resize",O);const I=()=>{const et=K.getDelta(),ut=K.elapsedTime;Y.uniforms.uTime.value=ut;const F=(w.current%360+D.current*ut)*Math.PI/180,j=Math.cos(F),gt=Math.sin(F);Y.uniforms.uRot.value.set(j,gt);const bt=B.current,Nt=U.current,nt=Math.min(1,et*z.current);bt.lerp(Nt,nt),Y.uniforms.uPointer.value.copy(bt),st.render(b,L),R.current=requestAnimationFrame(I)};return R.current=requestAnimationFrame(I),()=>{R.current!==null&&cancelAnimationFrame(R.current),x.current?x.current.disconnect():window.removeEventListener("resize",O),ot.dispose(),Y.dispose(),st.dispose(),st.domElement&&st.domElement.parentElement===P&&P.removeChild(st.domElement)}},[m,g,v,_,h,s,c,d]),Bt.useEffect(()=>{const P=M.current,b=E.current;if(!P)return;w.current=n,D.current=u,P.uniforms.uSpeed.value=s,P.uniforms.uScale.value=h,P.uniforms.uFrequency.value=m,P.uniforms.uWarpStrength.value=d,P.uniforms.uMouseInfluence.value=g,P.uniforms.uParallax.value=_,P.uniforms.uNoise.value=v;const L=V=>{const Y=V.replace("#","").trim(),$=Y.length===3?[parseInt(Y[0]+Y[0],16),parseInt(Y[1]+Y[1],16),parseInt(Y[2]+Y[2],16)]:[parseInt(Y.slice(0,2),16),parseInt(Y.slice(2,4),16),parseInt(Y.slice(4,6),16)];return new rt($[0]/255,$[1]/255,$[2]/255)},ot=(o||[]).filter(Boolean).slice(0,zu).map(L);for(let V=0;V<zu;V++){const Y=P.uniforms.uColors.value[V];V<ot.length?Y.copy(ot[V]):Y.set(0,0,0)}P.uniforms.uColorCount.value=ot.length,P.uniforms.uTransparent.value=c?1:0,b&&b.setClearColor(0,c?0:1)},[n,u,s,h,m,d,g,_,v,o,c]),Bt.useEffect(()=>{const P=M.current,b=y.current;if(!P||!b)return;const L=ot=>{const V=b.getBoundingClientRect(),Y=(ot.clientX-V.left)/(V.width||1)*2-1,$=-((ot.clientY-V.top)/(V.height||1)*2-1);U.current.set(Y,$)};return b.addEventListener("pointermove",L),()=>{b.removeEventListener("pointermove",L)}},[]),$t.jsx("div",{ref:y,className:`color-bends-container ${i}`,style:t})}const cM=Bt.createContext({});function Jm(i){const t=Bt.useRef(null);return t.current===null&&(t.current=i()),t.current}const uM=typeof window<"u",fM=uM?Bt.useLayoutEffect:Bt.useEffect,$m=Bt.createContext(null);function tg(i,t){i.indexOf(t)===-1&&i.push(t)}function Qu(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const ra=(i,t,n)=>n>t?t:n<i?i:n;let eg=()=>{};const za={},hM=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function dM(i){return typeof i=="object"&&i!==null}const pM=i=>/^0[^.\s]+$/u.test(i);function mM(i){let t;return()=>(t===void 0&&(t=i()),t)}const Ti=i=>i,w3=(i,t)=>n=>t(i(n)),Xl=(...i)=>i.reduce(w3),Ol=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class ng{constructor(){this.subscriptions=[]}add(t){return tg(this.subscriptions,t),()=>Qu(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Vi=i=>i*1e3,Ei=i=>i/1e3;function gM(i,t){return t?i*(1e3/t):0}const vM=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,D3=1e-7,U3=12;function L3(i,t,n,s,o){let c,u,h=0;do u=t+(n-t)/2,c=vM(u,s,o)-i,c>0?n=u:t=u;while(Math.abs(c)>D3&&++h<U3);return u}function Wl(i,t,n,s){if(i===t&&n===s)return Ti;const o=c=>L3(c,0,1,i,n);return c=>c===0||c===1?c:vM(o(c),t,s)}const _M=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,xM=i=>t=>1-i(1-t),yM=Wl(.33,1.53,.69,.99),ig=xM(yM),SM=_M(ig),MM=i=>(i*=2)<1?.5*ig(i):.5*(2-Math.pow(2,-10*(i-1))),ag=i=>1-Math.sin(Math.acos(i)),EM=xM(ag),TM=_M(ag),N3=Wl(.42,0,1,1),P3=Wl(0,0,.58,1),bM=Wl(.42,0,.58,1),O3=i=>Array.isArray(i)&&typeof i[0]!="number",AM=i=>Array.isArray(i)&&typeof i[0]=="number",F3={linear:Ti,easeIn:N3,easeInOut:bM,easeOut:P3,circIn:ag,circInOut:TM,circOut:EM,backIn:ig,backInOut:SM,backOut:yM,anticipate:MM},B3=i=>typeof i=="string",uy=i=>{if(AM(i)){eg(i.length===4);const[t,n,s,o]=i;return Wl(t,n,s,o)}else if(B3(i))return F3[i];return i},Du=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function I3(i,t){let n=new Set,s=new Set,o=!1,c=!1;const u=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function m(g){u.has(g)&&(d.schedule(g),i()),g(h)}const d={schedule:(g,_=!1,v=!1)=>{const E=v&&o?n:s;return _&&u.add(g),E.has(g)||E.add(g),g},cancel:g=>{s.delete(g),u.delete(g)},process:g=>{if(h=g,o){c=!0;return}o=!0,[n,s]=[s,n],n.forEach(m),n.clear(),o=!1,c&&(c=!1,d.process(g))}};return d}const z3=40;function RM(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=Du.reduce((D,U)=>(D[U]=I3(c),D),{}),{setup:h,read:m,resolveKeyframes:d,preUpdate:g,update:_,preRender:v,render:y,postRender:E}=u,R=()=>{const D=za.useManualTiming?o.timestamp:performance.now();n=!1,za.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(D-o.timestamp,z3),1)),o.timestamp=D,o.isProcessing=!0,h.process(o),m.process(o),d.process(o),g.process(o),_.process(o),v.process(o),y.process(o),E.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(R))},M=()=>{n=!0,s=!0,o.isProcessing||i(R)};return{schedule:Du.reduce((D,U)=>{const B=u[U];return D[U]=(z,P=!1,b=!1)=>(n||M(),B.schedule(z,P,b)),D},{}),cancel:D=>{for(let U=0;U<Du.length;U++)u[Du[U]].cancel(D)},state:o,steps:u}}const{schedule:Xe,cancel:Va,state:Un,steps:sp}=RM(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ti,!0);let Vu;function V3(){Vu=void 0}const kn={now:()=>(Vu===void 0&&kn.set(Un.isProcessing||za.useManualTiming?Un.timestamp:performance.now()),Vu),set:i=>{Vu=i,queueMicrotask(V3)}},CM=i=>t=>typeof t=="string"&&t.startsWith(i),wM=CM("--"),H3=CM("var(--"),sg=i=>H3(i)?G3.test(i.split("/*")[0].trim()):!1,G3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function fy(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const Mo={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Fl={...Mo,transform:i=>ra(0,1,i)},Uu={...Mo,default:1},Rl=i=>Math.round(i*1e5)/1e5,rg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function k3(i){return i==null}const X3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,og=(i,t)=>n=>!!(typeof n=="string"&&X3.test(n)&&n.startsWith(i)||t&&!k3(n)&&Object.prototype.hasOwnProperty.call(n,t)),DM=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,c,u,h]=s.match(rg);return{[i]:parseFloat(o),[t]:parseFloat(c),[n]:parseFloat(u),alpha:h!==void 0?parseFloat(h):1}},W3=i=>ra(0,255,i),rp={...Mo,transform:i=>Math.round(W3(i))},ir={test:og("rgb","red"),parse:DM("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+rp.transform(i)+", "+rp.transform(t)+", "+rp.transform(n)+", "+Rl(Fl.transform(s))+")"};function q3(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const gm={test:og("#"),parse:q3,transform:ir.transform},ql=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),ys=ql("deg"),ia=ql("%"),kt=ql("px"),Y3=ql("vh"),j3=ql("vw"),hy={...ia,parse:i=>ia.parse(i)/100,transform:i=>ia.transform(i*100)},so={test:og("hsl","hue"),parse:DM("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+ia.transform(Rl(t))+", "+ia.transform(Rl(n))+", "+Rl(Fl.transform(s))+")"},gn={test:i=>ir.test(i)||gm.test(i)||so.test(i),parse:i=>ir.test(i)?ir.parse(i):so.test(i)?so.parse(i):gm.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?ir.transform(i):so.transform(i),getAnimatableNone:i=>{const t=gn.parse(i);return t.alpha=0,gn.transform(t)}},Z3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function K3(i){return isNaN(i)&&typeof i=="string"&&(i.match(rg)?.length||0)+(i.match(Z3)?.length||0)>0}const UM="number",LM="color",Q3="var",J3="var(",dy="${}",$3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Bl(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let c=0;const h=t.replace($3,m=>(gn.test(m)?(s.color.push(c),o.push(LM),n.push(gn.parse(m))):m.startsWith(J3)?(s.var.push(c),o.push(Q3),n.push(m)):(s.number.push(c),o.push(UM),n.push(parseFloat(m))),++c,dy)).split(dy);return{values:n,split:h,indexes:s,types:o}}function NM(i){return Bl(i).values}function PM(i){const{split:t,types:n}=Bl(i),s=t.length;return o=>{let c="";for(let u=0;u<s;u++)if(c+=t[u],o[u]!==void 0){const h=n[u];h===UM?c+=Rl(o[u]):h===LM?c+=gn.transform(o[u]):c+=o[u]}return c}}const tD=i=>typeof i=="number"?0:gn.test(i)?gn.getAnimatableNone(i):i;function eD(i){const t=NM(i);return PM(i)(t.map(tD))}const Hi={test:K3,parse:NM,createTransformer:PM,getAnimatableNone:eD};function op(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function nD({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,c=0,u=0;if(!t)o=c=u=n;else{const h=n<.5?n*(1+t):n+t-n*t,m=2*n-h;o=op(m,h,i+1/3),c=op(m,h,i),u=op(m,h,i-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:s}}function Ju(i,t){return n=>n>0?t:i}const $e=(i,t,n)=>i+(t-i)*n,lp=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},iD=[gm,ir,so],aD=i=>iD.find(t=>t.test(i));function py(i){const t=aD(i);if(!t)return!1;let n=t.parse(i);return t===so&&(n=nD(n)),n}const my=(i,t)=>{const n=py(i),s=py(t);if(!n||!s)return Ju(i,t);const o={...n};return c=>(o.red=lp(n.red,s.red,c),o.green=lp(n.green,s.green,c),o.blue=lp(n.blue,s.blue,c),o.alpha=$e(n.alpha,s.alpha,c),ir.transform(o))},vm=new Set(["none","hidden"]);function sD(i,t){return vm.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function rD(i,t){return n=>$e(i,t,n)}function lg(i){return typeof i=="number"?rD:typeof i=="string"?sg(i)?Ju:gn.test(i)?my:cD:Array.isArray(i)?OM:typeof i=="object"?gn.test(i)?my:oD:Ju}function OM(i,t){const n=[...i],s=n.length,o=i.map((c,u)=>lg(c)(c,t[u]));return c=>{for(let u=0;u<s;u++)n[u]=o[u](c);return n}}function oD(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=lg(i[o])(i[o],t[o]));return o=>{for(const c in s)n[c]=s[c](o);return n}}function lD(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],u=i.indexes[c][s[c]],h=i.values[u]??0;n[o]=h,s[c]++}return n}const cD=(i,t)=>{const n=Hi.createTransformer(t),s=Bl(i),o=Bl(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?vm.has(i)&&!o.values.length||vm.has(t)&&!s.values.length?sD(i,t):Xl(OM(lD(s,o),o.values),n):Ju(i,t)};function FM(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?$e(i,t,n):lg(i)(i,t)}const uD=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>Xe.update(t,n),stop:()=>Va(t),now:()=>Un.isProcessing?Un.timestamp:kn.now()}},BM=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let c=0;c<o;c++)s+=Math.round(i(c/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},$u=2e4;function cg(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<$u;)t+=n,s=i.next(t);return t>=$u?1/0:t}function fD(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(cg(s),$u);return{type:"keyframes",ease:c=>s.next(o*c).value/t,duration:Ei(o)}}const hD=5;function IM(i,t,n){const s=Math.max(t-hD,0);return gM(n-i(s),t-s)}const an={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},cp=.001;function dD({duration:i=an.duration,bounce:t=an.bounce,velocity:n=an.velocity,mass:s=an.mass}){let o,c,u=1-t;u=ra(an.minDamping,an.maxDamping,u),i=ra(an.minDuration,an.maxDuration,Ei(i)),u<1?(o=d=>{const g=d*u,_=g*i,v=g-n,y=_m(d,u),E=Math.exp(-_);return cp-v/y*E},c=d=>{const _=d*u*i,v=_*n+n,y=Math.pow(u,2)*Math.pow(d,2)*i,E=Math.exp(-_),R=_m(Math.pow(d,2),u);return(-o(d)+cp>0?-1:1)*((v-y)*E)/R}):(o=d=>{const g=Math.exp(-d*i),_=(d-n)*i+1;return-cp+g*_},c=d=>{const g=Math.exp(-d*i),_=(n-d)*(i*i);return g*_});const h=5/i,m=mD(o,c,h);if(i=Vi(i),isNaN(m))return{stiffness:an.stiffness,damping:an.damping,duration:i};{const d=Math.pow(m,2)*s;return{stiffness:d,damping:u*2*Math.sqrt(s*d),duration:i}}}const pD=12;function mD(i,t,n){let s=n;for(let o=1;o<pD;o++)s=s-i(s)/t(s);return s}function _m(i,t){return i*Math.sqrt(1-t*t)}const gD=["duration","bounce"],vD=["stiffness","damping","mass"];function gy(i,t){return t.some(n=>i[n]!==void 0)}function _D(i){let t={velocity:an.velocity,stiffness:an.stiffness,damping:an.damping,mass:an.mass,isResolvedFromDuration:!1,...i};if(!gy(i,vD)&&gy(i,gD))if(t.velocity=0,i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,c=2*ra(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:an.mass,stiffness:o,damping:c}}else{const n=dD({...i,velocity:0});t={...t,...n,mass:an.mass},t.isResolvedFromDuration=!0}return t}function tf(i=an.visualDuration,t=an.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const c=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],h={done:!1,value:c},{stiffness:m,damping:d,mass:g,duration:_,velocity:v,isResolvedFromDuration:y}=_D({...n,velocity:-Ei(n.velocity||0)}),E=v||0,R=d/(2*Math.sqrt(m*g)),M=u-c,x=Ei(Math.sqrt(m/g)),w=Math.abs(M)<5;s||(s=w?an.restSpeed.granular:an.restSpeed.default),o||(o=w?an.restDelta.granular:an.restDelta.default);let D;if(R<1){const B=_m(x,R);D=z=>{const P=Math.exp(-R*x*z);return u-P*((E+R*x*M)/B*Math.sin(B*z)+M*Math.cos(B*z))}}else if(R===1)D=B=>u-Math.exp(-x*B)*(M+(E+x*M)*B);else{const B=x*Math.sqrt(R*R-1);D=z=>{const P=Math.exp(-R*x*z),b=Math.min(B*z,300);return u-P*((E+R*x*M)*Math.sinh(b)+B*M*Math.cosh(b))/B}}const U={calculatedDuration:y&&_||null,next:B=>{const z=D(B);if(y)h.done=B>=_;else{let P=B===0?E:0;R<1&&(P=B===0?Vi(E):IM(D,B,z));const b=Math.abs(P)<=s,L=Math.abs(u-z)<=o;h.done=b&&L}return h.value=h.done?u:z,h},toString:()=>{const B=Math.min(cg(U),$u),z=BM(P=>U.next(B*P).value,B,30);return B+"ms "+z},toTransition:()=>{}};return U}tf.applyToOptions=i=>{const t=fD(i,100,tf);return i.ease=t.ease,i.duration=Vi(t.duration),i.type="keyframes",i};function xm({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:h,max:m,restDelta:d=.5,restSpeed:g}){const _=i[0],v={done:!1,value:_},y=b=>h!==void 0&&b<h||m!==void 0&&b>m,E=b=>h===void 0?m:m===void 0||Math.abs(h-b)<Math.abs(m-b)?h:m;let R=n*t;const M=_+R,x=u===void 0?M:u(M);x!==M&&(R=x-_);const w=b=>-R*Math.exp(-b/s),D=b=>x+w(b),U=b=>{const L=w(b),ot=D(b);v.done=Math.abs(L)<=d,v.value=v.done?x:ot};let B,z;const P=b=>{y(v.value)&&(B=b,z=tf({keyframes:[v.value,E(v.value)],velocity:IM(D,b,v.value),damping:o,stiffness:c,restDelta:d,restSpeed:g}))};return P(0),{calculatedDuration:null,next:b=>{let L=!1;return!z&&B===void 0&&(L=!0,U(b),P(b)),B!==void 0&&b>=B?z.next(b-B):(!L&&U(b),v)}}}function xD(i,t,n){const s=[],o=n||za.mix||FM,c=i.length-1;for(let u=0;u<c;u++){let h=o(i[u],i[u+1]);if(t){const m=Array.isArray(t)?t[u]||Ti:t;h=Xl(m,h)}s.push(h)}return s}function zM(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const c=i.length;if(eg(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const u=i[0]===i[1];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const h=xD(t,s,o),m=h.length,d=g=>{if(u&&g<i[0])return t[0];let _=0;if(m>1)for(;_<i.length-2&&!(g<i[_+1]);_++);const v=Ol(i[_],i[_+1],g);return h[_](v)};return n?g=>d(ra(i[0],i[c-1],g)):d}function yD(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=Ol(0,t,s);i.push($e(n,1,o))}}function SD(i){const t=[0];return yD(t,i.length-1),t}function MD(i,t){return i.map(n=>n*t)}function ED(i,t){return i.map(()=>t||bM).splice(0,i.length-1)}function Cl({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=O3(s)?s.map(uy):uy(s),c={done:!1,value:t[0]},u=MD(n&&n.length===t.length?n:SD(t),i),h=zM(u,t,{ease:Array.isArray(o)?o:ED(t,o)});return{calculatedDuration:i,next:m=>(c.value=h(m),c.done=m>=i,c)}}const TD=i=>i!==null;function ug(i,{repeat:t,repeatType:n="loop"},s,o=1){const c=i.filter(TD),h=o<0||t&&n!=="loop"&&t%2===1?0:c.length-1;return!h||s===void 0?c[h]:s}const bD={decay:xm,inertia:xm,tween:Cl,keyframes:Cl,spring:tf};function VM(i){typeof i.type=="string"&&(i.type=bD[i.type])}class fg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const AD=i=>i/100;class ff extends fg{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==kn.now()&&this.tick(kn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;VM(t);const{type:n=Cl,repeat:s=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=t;let{keyframes:h}=t;const m=n||Cl;m!==Cl&&typeof h[0]!="number"&&(this.mixKeyframes=Xl(AD,FM(h[0],h[1])),h=[0,100]);const d=m({...t,keyframes:h});c==="mirror"&&(this.mirroredGenerator=m({...t,keyframes:[...h].reverse(),velocity:-u})),d.calculatedDuration===null&&(d.calculatedDuration=cg(d));const{calculatedDuration:g}=d;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:h,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:d=0,keyframes:g,repeat:_,repeatType:v,repeatDelay:y,type:E,onUpdate:R,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-d*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?x<0:x>o;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let D=this.currentTime,U=s;if(_){const b=Math.min(this.currentTime,o)/h;let L=Math.floor(b),ot=b%1;!ot&&b>=1&&(ot=1),ot===1&&L--,L=Math.min(L,_+1),L%2&&(v==="reverse"?(ot=1-ot,y&&(ot-=y/h)):v==="mirror"&&(U=u)),D=ra(0,1,ot)*h}const B=w?{done:!1,value:g[0]}:U.next(D);c&&(B.value=c(B.value));let{done:z}=B;!w&&m!==null&&(z=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&z);return P&&E!==xm&&(B.value=ug(g,this.options,M,this.speed)),R&&R(B.value),P&&this.finish(),B}then(t,n){return this.finished.then(t,n)}get duration(){return Ei(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ei(t)}get time(){return Ei(this.currentTime)}set time(t){t=Vi(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(kn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ei(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=uD,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(kn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function RD(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const ar=i=>i*180/Math.PI,ym=i=>{const t=ar(Math.atan2(i[1],i[0]));return Sm(t)},CD={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:ym,rotateZ:ym,skewX:i=>ar(Math.atan(i[1])),skewY:i=>ar(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Sm=i=>(i=i%360,i<0&&(i+=360),i),vy=ym,_y=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),xy=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),wD={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:_y,scaleY:xy,scale:i=>(_y(i)+xy(i))/2,rotateX:i=>Sm(ar(Math.atan2(i[6],i[5]))),rotateY:i=>Sm(ar(Math.atan2(-i[2],i[0]))),rotateZ:vy,rotate:vy,skewX:i=>ar(Math.atan(i[4])),skewY:i=>ar(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Mm(i){return i.includes("scale")?1:0}function Em(i,t){if(!i||i==="none")return Mm(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=wD,o=n;else{const h=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=CD,o=h}if(!o)return Mm(t);const c=s[t],u=o[1].split(",").map(UD);return typeof c=="function"?c(u):u[c]}const DD=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return Em(n,t)};function UD(i){return parseFloat(i.trim())}const Eo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],To=new Set(Eo),yy=i=>i===Mo||i===kt,LD=new Set(["x","y","z"]),ND=Eo.filter(i=>!LD.has(i));function PD(i){const t=[];return ND.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const Es={width:({x:i},{paddingLeft:t="0",paddingRight:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),height:({y:i},{paddingTop:t="0",paddingBottom:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>Em(t,"x"),y:(i,{transform:t})=>Em(t,"y")};Es.translateX=Es.x;Es.translateY=Es.y;const sr=new Set;let Tm=!1,bm=!1,Am=!1;function HM(){if(bm){const i=Array.from(sr).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=PD(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([c,u])=>{s.getValue(c)?.set(u)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}bm=!1,Tm=!1,sr.forEach(i=>i.complete(Am)),sr.clear()}function GM(){sr.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(bm=!0)})}function OD(){Am=!0,GM(),HM(),Am=!1}class hg{constructor(t,n,s,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(sr.add(this),Tm||(Tm=!0,Xe.read(GM),Xe.resolveKeyframes(HM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const c=o?.get(),u=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&n){const h=s.readValue(n,u);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=u),o&&c===void 0&&o.set(t[0])}RD(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),sr.delete(this)}cancel(){this.state==="scheduled"&&(sr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const FD=i=>i.startsWith("--");function BD(i,t,n){FD(t)?i.style.setProperty(t,n):i.style[t]=n}const ID={};function kM(i,t){const n=mM(i);return()=>ID[t]??n()}const zD=kM(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),XM=kM(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Al=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,Sy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Al([0,.65,.55,1]),circOut:Al([.55,0,1,.45]),backIn:Al([.31,.01,.66,-.59]),backOut:Al([.33,1.53,.69,.99])};function WM(i,t){if(i)return typeof i=="function"?XM()?BM(i,t):"ease-out":AM(i)?Al(i):Array.isArray(i)?i.map(n=>WM(n,t)||Sy.easeOut):Sy[i]}function VD(i,t,n,{delay:s=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:h="easeOut",times:m}={},d=void 0){const g={[t]:n};m&&(g.offset=m);const _=WM(h,o);Array.isArray(_)&&(g.easing=_);const v={delay:s,duration:o,easing:Array.isArray(_)?"linear":_,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return d&&(v.pseudoElement=d),i.animate(g,v)}function qM(i){return typeof i=="function"&&"applyToOptions"in i}function HD({type:i,...t}){return qM(i)&&XM()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class YM extends fg{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:h,onComplete:m}=t;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=t,eg(typeof t.type!="string");const d=HD(t);this.animation=VD(n,s,o,d,c),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=ug(o,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(g):BD(n,s,g),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Ei(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ei(t)}get time(){return Ei(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Vi(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&zD()?(this.animation.timeline=t,Ti):n(this)}}const jM={anticipate:MM,backInOut:SM,circInOut:TM};function GD(i){return i in jM}function kD(i){typeof i.ease=="string"&&GD(i.ease)&&(i.ease=jM[i.ease])}const up=10;class XD extends YM{constructor(t){kD(t),VM(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:c,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const h=new ff({...u,autoplay:!1}),m=Math.max(up,kn.now()-this.startTime),d=ra(0,up,m-up);n.setWithVelocity(h.sample(Math.max(0,m-d)).value,h.sample(m).value,d),h.stop()}}const My=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Hi.test(i)||i==="0")&&!i.startsWith("url("));function WD(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function qD(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=i[i.length-1],u=My(o,t),h=My(c,t);return!u||!h?!1:WD(i)||(n==="spring"||qM(n))&&s}function Rm(i){i.duration=0,i.type="keyframes"}const YD=new Set(["opacity","clipPath","filter","transform"]),jD=mM(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ZD(i){const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:c,type:u}=i;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:d}=t.owner.getProps();return jD()&&n&&YD.has(n)&&(n!=="transform"||!d)&&!m&&!s&&o!=="mirror"&&c!==0&&u!=="inertia"}const KD=40;class QD extends fg{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:h,name:m,motionValue:d,element:g,..._}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=kn.now();const v={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:c,repeatType:u,name:m,motionValue:d,element:g,..._},y=g?.KeyframeResolver||hg;this.keyframeResolver=new y(h,(E,R,M)=>this.onKeyframesResolved(E,R,v,!M),m,d,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,n,s,o){this.keyframeResolver=void 0;const{name:c,type:u,velocity:h,delay:m,isHandoff:d,onUpdate:g}=s;this.resolvedAt=kn.now(),qD(t,c,u,h)||((za.instantAnimations||!m)&&g?.(ug(t,s,n)),t[0]=t[t.length-1],Rm(s),s.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>KD?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},y=!d&&ZD(v),E=v.motionValue?.owner?.current,R=y?new XD({...v,element:E}):new ff(v);R.finished.then(()=>{this.notifyFinished()}).catch(Ti),this.pendingTimeline&&(this.stopTimeline=R.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=R}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),OD()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function ZM(i,t,n,s=0,o=1){const c=Array.from(i).sort((d,g)=>d.sortNodePosition(g)).indexOf(t),u=i.size,h=(u-1)*s;return typeof n=="function"?n(c,u):o===1?c*s:h-c*s}const JD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $D(i){const t=JD.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function KM(i,t,n=1){const[s,o]=$D(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const u=c.trim();return hM(u)?parseFloat(u):u}return sg(o)?KM(o,t,n+1):o}const tU={type:"spring",stiffness:500,damping:25,restSpeed:10},eU=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),nU={type:"keyframes",duration:.8},iU={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},aU=(i,{keyframes:t})=>t.length>2?nU:To.has(i)?i.startsWith("scale")?eU(t[1]):tU:iU,sU=i=>i!==null;function rU(i,{repeat:t,repeatType:n="loop"},s){const o=i.filter(sU),c=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[c]}function QM(i,t){if(i?.inherit&&t){const{inherit:n,...s}=i;return{...t,...s}}return i}function dg(i,t){const n=i?.[t]??i?.default??i;return n!==i?QM(n,i):n}function oU({when:i,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:h,from:m,elapsed:d,...g}){return!!Object.keys(g).length}const pg=(i,t,n,s={},o,c)=>u=>{const h=dg(s,i)||{},m=h.delay||s.delay||0;let{elapsed:d=0}=s;d=d-Vi(m);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...h,delay:-d,onUpdate:v=>{t.set(v),h.onUpdate&&h.onUpdate(v)},onComplete:()=>{u(),h.onComplete&&h.onComplete()},name:i,motionValue:t,element:c?void 0:o};oU(h)||Object.assign(g,aU(i,g)),g.duration&&(g.duration=Vi(g.duration)),g.repeatDelay&&(g.repeatDelay=Vi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let _=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Rm(g),g.delay===0&&(_=!0)),(za.instantAnimations||za.skipAnimations||o?.shouldSkipAnimations)&&(_=!0,Rm(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,_&&!c&&t.get()!==void 0){const v=rU(g.keyframes,h);if(v!==void 0){Xe.update(()=>{g.onUpdate(v),g.onComplete()});return}}return h.isSync?new ff(g):new QD(g)};function Ey(i){const t=[{},{}];return i?.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function mg(i,t,n,s){if(typeof t=="function"){const[o,c]=Ey(s);t=t(n!==void 0?n:i.custom,o,c)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,c]=Ey(s);t=t(n!==void 0?n:i.custom,o,c)}return t}function ho(i,t,n){const s=i.getProps();return mg(s,t,n!==void 0?n:s.custom,i)}const JM=new Set(["width","height","top","left","right","bottom",...Eo]),Ty=30,lU=i=>!isNaN(parseFloat(i)),wl={current:void 0};class cU{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const o=kn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=kn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=lU(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new ng);const s=this.events[t].add(n);return t==="change"?()=>{s(),Xe.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return wl.current&&wl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=kn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Ty)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ty);return gM(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function or(i,t){return new cU(i,t)}const Cm=i=>Array.isArray(i);function uU(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,or(n))}function fU(i){return Cm(i)?i[i.length-1]||0:i}function hU(i,t){const n=ho(i,t);let{transitionEnd:s={},transition:o={},...c}=n||{};c={...c,...s};for(const u in c){const h=fU(c[u]);uU(i,u,h)}}const An=i=>!!(i&&i.getVelocity);function dU(i){return!!(An(i)&&i.add)}function wm(i,t){const n=i.getValue("willChange");if(dU(n))return n.add(t);if(!n&&za.WillChange){const s=new za.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function gg(i){return i.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const pU="framerAppearId",$M="data-"+gg(pU);function tE(i){return i.props[$M]}function mU({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function eE(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:c,transitionEnd:u,...h}=t;const m=i.getDefaultTransition();c=c?QM(c,m):m;const d=c?.reduceMotion;s&&(c=s);const g=[],_=o&&i.animationState&&i.animationState.getState()[o];for(const v in h){const y=i.getValue(v,i.latestValues[v]??null),E=h[v];if(E===void 0||_&&mU(_,v))continue;const R={delay:n,...dg(c||{},v)},M=y.get();if(M!==void 0&&!y.isAnimating&&!Array.isArray(E)&&E===M&&!R.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const U=tE(i);if(U){const B=window.MotionHandoffAnimation(U,v,Xe);B!==null&&(R.startTime=B,x=!0)}}wm(i,v);const w=d??i.shouldReduceMotion;y.start(pg(v,y,E,w&&JM.has(v)?{type:!1}:R,i,x));const D=y.animation;D&&g.push(D)}if(u){const v=()=>Xe.update(()=>{u&&hU(i,u)});g.length?Promise.all(g).then(v):v()}return g}function Dm(i,t,n={}){const s=ho(i,t,n.type==="exit"?i.presenceContext?.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const c=s?()=>Promise.all(eE(i,s,n)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(m=0)=>{const{delayChildren:d=0,staggerChildren:g,staggerDirection:_}=o;return gU(i,t,m,d,g,_,n)}:()=>Promise.resolve(),{when:h}=o;if(h){const[m,d]=h==="beforeChildren"?[c,u]:[u,c];return m().then(()=>d())}else return Promise.all([c(),u(n.delay)])}function gU(i,t,n=0,s=0,o=0,c=1,u){const h=[];for(const m of i.variantChildren)m.notify("AnimationStart",t),h.push(Dm(m,t,{...u,delay:n+(typeof s=="function"?0:s)+ZM(i.variantChildren,m,s,o,c)}).then(()=>m.notify("AnimationComplete",t)));return Promise.all(h)}function vU(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(c=>Dm(i,c,n));s=Promise.all(o)}else if(typeof t=="string")s=Dm(i,t,n);else{const o=typeof t=="function"?ho(i,t,n.custom):t;s=Promise.all(eE(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}const _U={test:i=>i==="auto",parse:i=>i},nE=i=>t=>t.test(i),iE=[Mo,kt,ia,ys,j3,Y3,_U],by=i=>iE.find(nE(i));function xU(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||pM(i):!0}const yU=new Set(["brightness","contrast","saturate","opacity"]);function SU(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(rg)||[];if(!s)return i;const o=n.replace(s,"");let c=yU.has(t)?1:0;return s!==n&&(c*=100),t+"("+c+o+")"}const MU=/\b([a-z-]*)\(.*?\)/gu,Um={...Hi,getAnimatableNone:i=>{const t=i.match(MU);return t?t.map(SU).join(" "):i}},Lm={...Hi,getAnimatableNone:i=>{const t=Hi.parse(i);return Hi.createTransformer(i)(t.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},Ay={...Mo,transform:Math.round},EU={rotate:ys,rotateX:ys,rotateY:ys,rotateZ:ys,scale:Uu,scaleX:Uu,scaleY:Uu,scaleZ:Uu,skew:ys,skewX:ys,skewY:ys,distance:kt,translateX:kt,translateY:kt,translateZ:kt,x:kt,y:kt,z:kt,perspective:kt,transformPerspective:kt,opacity:Fl,originX:hy,originY:hy,originZ:kt},vg={borderWidth:kt,borderTopWidth:kt,borderRightWidth:kt,borderBottomWidth:kt,borderLeftWidth:kt,borderRadius:kt,borderTopLeftRadius:kt,borderTopRightRadius:kt,borderBottomRightRadius:kt,borderBottomLeftRadius:kt,width:kt,maxWidth:kt,height:kt,maxHeight:kt,top:kt,right:kt,bottom:kt,left:kt,inset:kt,insetBlock:kt,insetBlockStart:kt,insetBlockEnd:kt,insetInline:kt,insetInlineStart:kt,insetInlineEnd:kt,padding:kt,paddingTop:kt,paddingRight:kt,paddingBottom:kt,paddingLeft:kt,paddingBlock:kt,paddingBlockStart:kt,paddingBlockEnd:kt,paddingInline:kt,paddingInlineStart:kt,paddingInlineEnd:kt,margin:kt,marginTop:kt,marginRight:kt,marginBottom:kt,marginLeft:kt,marginBlock:kt,marginBlockStart:kt,marginBlockEnd:kt,marginInline:kt,marginInlineStart:kt,marginInlineEnd:kt,fontSize:kt,backgroundPositionX:kt,backgroundPositionY:kt,...EU,zIndex:Ay,fillOpacity:Fl,strokeOpacity:Fl,numOctaves:Ay},TU={...vg,color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,filter:Um,WebkitFilter:Um,mask:Lm,WebkitMask:Lm},aE=i=>TU[i],bU=new Set([Um,Lm]);function sE(i,t){let n=aE(i);return bU.has(n)||(n=Hi),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const AU=new Set(["auto","none","0"]);function RU(i,t,n){let s=0,o;for(;s<i.length&&!o;){const c=i[s];typeof c=="string"&&!AU.has(c)&&Bl(c).values.length&&(o=i[s]),s++}if(o&&n)for(const c of t)i[c]=sE(n,o)}class CU extends hg{constructor(t,n,s,o,c){super(t,n,s,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let g=0;g<t.length;g++){let _=t[g];if(typeof _=="string"&&(_=_.trim(),sg(_))){const v=KM(_,n.current);v!==void 0&&(t[g]=v),g===t.length-1&&(this.finalKeyframe=_)}}if(this.resolveNoneKeyframes(),!JM.has(s)||t.length!==2)return;const[o,c]=t,u=by(o),h=by(c),m=fy(o),d=fy(c);if(m!==d&&Es[s]){this.needsMeasurement=!0;return}if(u!==h)if(yy(u)&&yy(h))for(let g=0;g<t.length;g++){const _=t[g];typeof _=="string"&&(t[g]=parseFloat(_))}else Es[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||xU(t[o]))&&s.push(o);s.length&&RU(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Es[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const c=s.length-1,u=s[c];s[c]=Es[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,m])=>{t.getValue(h).set(m)}),this.resolveNoneKeyframes()}}const wU=new Set(["opacity","clipPath","filter","transform"]);function rE(i,t,n){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const o=n?.[i]??s.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i).filter(s=>s!=null)}const oE=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function DU(i){return dM(i)&&"offsetHeight"in i}const{schedule:_g}=RM(queueMicrotask,!1),Fi={x:!1,y:!1};function lE(){return Fi.x||Fi.y}function UU(i){return i==="x"||i==="y"?Fi[i]?null:(Fi[i]=!0,()=>{Fi[i]=!1}):Fi.x||Fi.y?null:(Fi.x=Fi.y=!0,()=>{Fi.x=Fi.y=!1})}function cE(i,t){const n=rE(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function LU(i){return!(i.pointerType==="touch"||lE())}function NU(i,t,n={}){const[s,o,c]=cE(i,n);return s.forEach(u=>{let h=!1,m=!1,d;const g=()=>{u.removeEventListener("pointerleave",E)},_=M=>{d&&(d(M),d=void 0),g()},v=M=>{h=!1,window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),m&&(m=!1,_(M))},y=()=>{h=!0,window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",v,o)},E=M=>{if(M.pointerType!=="touch"){if(h){m=!0;return}_(M)}},R=M=>{if(!LU(M))return;m=!1;const x=t(u,M);typeof x=="function"&&(d=x,u.addEventListener("pointerleave",E,o))};u.addEventListener("pointerenter",R,o),u.addEventListener("pointerdown",y,o)}),c}const uE=(i,t)=>t?i===t?!0:uE(i,t.parentElement):!1,xg=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,PU=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function OU(i){return PU.has(i.tagName)||i.isContentEditable===!0}const FU=new Set(["INPUT","SELECT","TEXTAREA"]);function BU(i){return FU.has(i.tagName)||i.isContentEditable===!0}const Hu=new WeakSet;function Ry(i){return t=>{t.key==="Enter"&&i(t)}}function fp(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const IU=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=Ry(()=>{if(Hu.has(n))return;fp(n,"down");const o=Ry(()=>{fp(n,"up")}),c=()=>fp(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",c,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function Cy(i){return xg(i)&&!lE()}const wy=new WeakSet;function zU(i,t,n={}){const[s,o,c]=cE(i,n),u=h=>{const m=h.currentTarget;if(!Cy(h)||wy.has(h))return;Hu.add(m),n.stopPropagation&&wy.add(h);const d=t(m,h),g=(y,E)=>{window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",v),Hu.has(m)&&Hu.delete(m),Cy(y)&&typeof d=="function"&&d(y,{success:E})},_=y=>{g(y,m===window||m===document||n.useGlobalTarget||uE(m,y.target))},v=y=>{g(y,!1)};window.addEventListener("pointerup",_,o),window.addEventListener("pointercancel",v,o)};return s.forEach(h=>{(n.useGlobalTarget?window:h).addEventListener("pointerdown",u,o),DU(h)&&(h.addEventListener("focus",d=>IU(d,o)),!OU(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),c}function yg(i){return dM(i)&&"ownerSVGElement"in i}const Gu=new WeakMap;let ku;const fE=(i,t,n)=>(s,o)=>o&&o[0]?o[0][i+"Size"]:yg(s)&&"getBBox"in s?s.getBBox()[t]:s[n],VU=fE("inline","width","offsetWidth"),HU=fE("block","height","offsetHeight");function GU({target:i,borderBoxSize:t}){Gu.get(i)?.forEach(n=>{n(i,{get width(){return VU(i,t)},get height(){return HU(i,t)}})})}function kU(i){i.forEach(GU)}function XU(){typeof ResizeObserver>"u"||(ku=new ResizeObserver(kU))}function WU(i,t){ku||XU();const n=rE(i);return n.forEach(s=>{let o=Gu.get(s);o||(o=new Set,Gu.set(s,o)),o.add(t),ku?.observe(s)}),()=>{n.forEach(s=>{const o=Gu.get(s);o?.delete(t),o?.size||ku?.unobserve(s)})}}const Xu=new Set;let ro;function qU(){ro=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};Xu.forEach(t=>t(i))},window.addEventListener("resize",ro)}function YU(i){return Xu.add(i),ro||qU(),()=>{Xu.delete(i),!Xu.size&&typeof ro=="function"&&(window.removeEventListener("resize",ro),ro=void 0)}}function Dy(i,t){return typeof i=="function"?YU(i):WU(i,t)}function jU(i){return yg(i)&&i.tagName==="svg"}function ZU(...i){const t=!Array.isArray(i[0]),n=t?0:-1,s=i[0+n],o=i[1+n],c=i[2+n],u=i[3+n],h=zM(o,c,u);return t?h(s):h}function KU(i,t,n={}){const s=i.get();let o=null,c=s,u;const h=typeof s=="string"?s.replace(/[\d.-]/g,""):void 0,m=()=>{o&&(o.stop(),o=null)},d=()=>{m();const g=Ly(i.get()),_=Ly(c);g!==_&&(o=new ff({keyframes:[g,_],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:u}))};if(i.attach((g,_)=>{c=g,u=v=>_(Uy(v,h)),Xe.postRender(()=>{d(),i.events.animationStart?.notify(),o?.then(()=>{i.events.animationComplete?.notify()})})},m),An(t)){const g=t.on("change",v=>i.set(Uy(v,h))),_=i.on("destroy",g);return()=>{g(),_()}}return m}function Uy(i,t){return t?i+t:i}function Ly(i){return typeof i=="number"?i:parseFloat(i)}const QU=[...iE,gn,Hi],JU=i=>QU.find(nE(i)),Ny=()=>({translate:0,scale:1,origin:0,originPoint:0}),oo=()=>({x:Ny(),y:Ny()}),Py=()=>({min:0,max:0}),Sn=()=>({x:Py(),y:Py()}),$U=new WeakMap;function hf(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Il(i){return typeof i=="string"||Array.isArray(i)}const Sg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Mg=["initial",...Sg];function df(i){return hf(i.animate)||Mg.some(t=>Il(i[t]))}function hE(i){return!!(df(i)||i.variants)}function tL(i,t,n){for(const s in t){const o=t[s],c=n[s];if(An(o))i.addValue(s,o);else if(An(c))i.addValue(s,or(o,{owner:i}));else if(c!==o)if(i.hasValue(s)){const u=i.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=i.getStaticValue(s);i.addValue(s,or(u!==void 0?u:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const Nm={current:null},dE={current:!1},eL=typeof window<"u";function nL(){if(dE.current=!0,!!eL)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>Nm.current=i.matches;i.addEventListener("change",t),t()}else Nm.current=!1}const Oy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ef={};function pE(i){ef=i}function iL(){return ef}class aL{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:u,visualState:h},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=hg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=kn.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Xe.render(this.render,!1,!0))};const{latestValues:d,renderState:g}=h;this.latestValues=d,this.baseTarget={...d},this.initialValues=n.initial?{...d}:{},this.renderState=g,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=df(n),this.isVariantNode=hE(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:_,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in v){const E=v[y];d[y]!==void 0&&An(E)&&E.set(d[y])}}mount(t){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=t,$U.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(dE.current||nL(),this.shouldReduceMotion=Nm.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Va(this.notifyUpdate),Va(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&wU.has(t)&&this.current instanceof HTMLElement){const{factory:u,keyframes:h,times:m,ease:d,duration:g}=n.accelerate,_=new YM({element:this.current,name:t,keyframes:h,times:m,ease:d,duration:Vi(g)}),v=u(_);this.valueSubscriptions.set(t,()=>{v(),_.cancel()});return}const s=To.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Xe.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ef){const n=ef[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Sn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<Oy.length;s++){const o=Oy[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=t[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=tL(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=or(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(hM(s)||pM(s))?s=parseFloat(s):!JU(s)&&Hi.test(n)&&(s=sE(t,n)),this.setBaseTarget(t,An(s)?s.get():s)),An(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const c=mg(this.props,n,this.presenceContext?.custom);c&&(s=c[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!An(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new ng),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){_g.render(this.render)}}class mE extends aL{constructor(){super(...arguments),this.KeyframeResolver=CU}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const s=t.style;return s?s[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;An(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class bs{constructor(t){this.isMounted=!1,this.node=t}update(){}}function gE({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function sL({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function rL(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function hp(i){return i===void 0||i===1}function Pm({scale:i,scaleX:t,scaleY:n}){return!hp(i)||!hp(t)||!hp(n)}function Js(i){return Pm(i)||vE(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function vE(i){return Fy(i.x)||Fy(i.y)}function Fy(i){return i&&i!=="0%"}function nf(i,t,n){const s=i-n,o=t*s;return n+o}function By(i,t,n,s,o){return o!==void 0&&(i=nf(i,o,s)),nf(i,n,s)+t}function Om(i,t=0,n=1,s,o){i.min=By(i.min,t,n,s,o),i.max=By(i.max,t,n,s,o)}function _E(i,{x:t,y:n}){Om(i.x,t.translate,t.scale,t.originPoint),Om(i.y,n.translate,n.scale,n.originPoint)}const Iy=.999999999999,zy=1.0000000000001;function oL(i,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let c,u;for(let h=0;h<o;h++){c=n[h],u=c.projectionDelta;const{visualElement:m}=c.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&co(i,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,_E(i,u)),s&&Js(c.latestValues)&&co(i,c.latestValues))}t.x<zy&&t.x>Iy&&(t.x=1),t.y<zy&&t.y>Iy&&(t.y=1)}function lo(i,t){i.min=i.min+t,i.max=i.max+t}function Vy(i,t,n,s,o=.5){const c=$e(i.min,i.max,o);Om(i,t,n,c,s)}function co(i,t){Vy(i.x,t.x,t.scaleX,t.scale,t.originX),Vy(i.y,t.y,t.scaleY,t.scale,t.originY)}function xE(i,t){return gE(rL(i.getBoundingClientRect(),t))}function lL(i,t,n){const s=xE(i,n),{scroll:o}=t;return o&&(lo(s.x,o.offset.x),lo(s.y,o.offset.y)),s}const cL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},uL=Eo.length;function fL(i,t,n){let s="",o=!0;for(let c=0;c<uL;c++){const u=Eo[c],h=i[u];if(h===void 0)continue;let m=!0;if(typeof h=="number")m=h===(u.startsWith("scale")?1:0);else{const d=parseFloat(h);m=u.startsWith("scale")?d===1:d===0}if(!m||n){const d=oE(h,vg[u]);if(!m){o=!1;const g=cL[u]||u;s+=`${g}(${d}) `}n&&(t[u]=d)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function Eg(i,t,n){const{style:s,vars:o,transformOrigin:c}=i;let u=!1,h=!1;for(const m in t){const d=t[m];if(To.has(m)){u=!0;continue}else if(wM(m)){o[m]=d;continue}else{const g=oE(d,vg[m]);m.startsWith("origin")?(h=!0,c[m]=g):s[m]=g}}if(t.transform||(u||n?s.transform=fL(t,i.transform,n):s.transform&&(s.transform="none")),h){const{originX:m="50%",originY:d="50%",originZ:g=0}=c;s.transformOrigin=`${m} ${d} ${g}`}}function yE(i,{style:t,vars:n},s,o){const c=i.style;let u;for(u in t)c[u]=t[u];o?.applyProjectionStyles(c,s);for(u in n)c.setProperty(u,n[u])}function Hy(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const El={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(kt.test(i))i=parseFloat(i);else return i;const n=Hy(i,t.target.x),s=Hy(i,t.target.y);return`${n}% ${s}%`}},hL={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=Hi.parse(i);if(o.length>5)return s;const c=Hi.createTransformer(i),u=typeof o[0]!="number"?1:0,h=n.x.scale*t.x,m=n.y.scale*t.y;o[0+u]/=h,o[1+u]/=m;const d=$e(h,m,.5);return typeof o[2+u]=="number"&&(o[2+u]/=d),typeof o[3+u]=="number"&&(o[3+u]/=d),c(o)}},Fm={borderRadius:{...El,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:El,borderTopRightRadius:El,borderBottomLeftRadius:El,borderBottomRightRadius:El,boxShadow:hL};function SE(i,{layout:t,layoutId:n}){return To.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!Fm[i]||i==="opacity")}function Tg(i,t,n){const s=i.style,o=t?.style,c={};if(!s)return c;for(const u in s)(An(s[u])||o&&An(o[u])||SE(u,i)||n?.getValue(u)?.liveStyle!==void 0)&&(c[u]=s[u]);return c}function dL(i){return window.getComputedStyle(i)}class pL extends mE{constructor(){super(...arguments),this.type="html",this.renderInstance=yE}readValueFromInstance(t,n){if(To.has(n))return this.projection?.isProjecting?Mm(n):DD(t,n);{const s=dL(t),o=(wM(n)?s.getPropertyValue(n):s[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return xE(t,n)}build(t,n,s){Eg(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return Tg(t,n,s)}}const mL={offset:"stroke-dashoffset",array:"stroke-dasharray"},gL={offset:"strokeDashoffset",array:"strokeDasharray"};function vL(i,t,n=1,s=0,o=!0){i.pathLength=1;const c=o?mL:gL;i[c.offset]=`${-s}`,i[c.array]=`${t} ${n}`}const _L=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ME(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...h},m,d,g){if(Eg(i,h,d),m){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:_,style:v}=i;_.transform&&(v.transform=_.transform,delete _.transform),(v.transform||_.transformOrigin)&&(v.transformOrigin=_.transformOrigin??"50% 50%",delete _.transformOrigin),v.transform&&(v.transformBox=g?.transformBox??"fill-box",delete _.transformBox);for(const y of _L)_[y]!==void 0&&(v[y]=_[y],delete _[y]);t!==void 0&&(_.x=t),n!==void 0&&(_.y=n),s!==void 0&&(_.scale=s),o!==void 0&&vL(_,o,c,u,!1)}const EE=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),TE=i=>typeof i=="string"&&i.toLowerCase()==="svg";function xL(i,t,n,s){yE(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(EE.has(o)?o:gg(o),t.attrs[o])}function bE(i,t,n){const s=Tg(i,t,n);for(const o in i)if(An(i[o])||An(t[o])){const c=Eo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[c]=i[o]}return s}class yL extends mE{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Sn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(To.has(n)){const s=aE(n);return s&&s.default||0}return n=EE.has(n)?n:gg(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return bE(t,n,s)}build(t,n,s){ME(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){xL(t,n,s,o)}mount(t){this.isSVGTag=TE(t.tagName),super.mount(t)}}const SL=Mg.length;function AE(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?AE(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<SL;n++){const s=Mg[n],o=i.props[s];(Il(o)||o===!1)&&(t[s]=o)}return t}function RE(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const ML=[...Sg].reverse(),EL=Sg.length;function TL(i){return t=>Promise.all(t.map(({animation:n,options:s})=>vU(i,n,s)))}function bL(i){let t=TL(i),n=Gy(),s=!0;const o=m=>(d,g)=>{const _=ho(i,g,m==="exit"?i.presenceContext?.custom:void 0);if(_){const{transition:v,transitionEnd:y,...E}=_;d={...d,...E,...y}}return d};function c(m){t=m(i)}function u(m){const{props:d}=i,g=AE(i.parent)||{},_=[],v=new Set;let y={},E=1/0;for(let M=0;M<EL;M++){const x=ML[M],w=n[x],D=d[x]!==void 0?d[x]:g[x],U=Il(D),B=x===m?w.isActive:null;B===!1&&(E=M);let z=D===g[x]&&D!==d[x]&&U;if(z&&s&&i.manuallyAnimateOnMount&&(z=!1),w.protectedKeys={...y},!w.isActive&&B===null||!D&&!w.prevProp||hf(D)||typeof D=="boolean")continue;if(x==="exit"&&w.isActive&&B!==!0){w.prevResolvedValues&&(y={...y,...w.prevResolvedValues});continue}const P=AL(w.prevProp,D);let b=P||x===m&&w.isActive&&!z&&U||M>E&&U,L=!1;const ot=Array.isArray(D)?D:[D];let V=ot.reduce(o(x),{});B===!1&&(V={});const{prevResolvedValues:Y={}}=w,$={...Y,...V},st=I=>{b=!0,v.has(I)&&(L=!0,v.delete(I)),w.needsAnimating[I]=!0;const et=i.getValue(I);et&&(et.liveStyle=!1)};for(const I in $){const et=V[I],ut=Y[I];if(y.hasOwnProperty(I))continue;let yt=!1;Cm(et)&&Cm(ut)?yt=!RE(et,ut):yt=et!==ut,yt?et!=null?st(I):v.add(I):et!==void 0&&v.has(I)?st(I):w.protectedKeys[I]=!0}w.prevProp=D,w.prevResolvedValues=V,w.isActive&&(y={...y,...V}),s&&i.blockInitialAnimation&&(b=!1);const K=z&&P;b&&(!K||L)&&_.push(...ot.map(I=>{const et={type:x};if(typeof I=="string"&&s&&!K&&i.manuallyAnimateOnMount&&i.parent){const{parent:ut}=i,yt=ho(ut,I);if(ut.enteringChildren&&yt){const{delayChildren:F}=yt.transition||{};et.delay=ZM(ut.enteringChildren,i,F)}}return{animation:I,options:et}}))}if(v.size){const M={};if(typeof d.initial!="boolean"){const x=ho(i,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(M.transition=x.transition)}v.forEach(x=>{const w=i.getBaseTarget(x),D=i.getValue(x);D&&(D.liveStyle=!0),M[x]=w??null}),_.push({animation:M})}let R=!!_.length;return s&&(d.initial===!1||d.initial===d.animate)&&!i.manuallyAnimateOnMount&&(R=!1),s=!1,R?t(_):Promise.resolve()}function h(m,d){if(n[m].isActive===d)return Promise.resolve();i.variantChildren?.forEach(_=>_.animationState?.setActive(m,d)),n[m].isActive=d;const g=u(m);for(const _ in n)n[_].protectedKeys={};return g}return{animateChanges:u,setActive:h,setAnimateFunction:c,getState:()=>n,reset:()=>{n=Gy()}}}function AL(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!RE(t,i):!1}function Ks(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Gy(){return{animate:Ks(!0),whileInView:Ks(),whileHover:Ks(),whileTap:Ks(),whileDrag:Ks(),whileFocus:Ks(),exit:Ks()}}function ky(i,t){i.min=t.min,i.max=t.max}function Oi(i,t){ky(i.x,t.x),ky(i.y,t.y)}function Xy(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}const CE=1e-4,RL=1-CE,CL=1+CE,wE=.01,wL=0-wE,DL=0+wE;function Xn(i){return i.max-i.min}function UL(i,t,n){return Math.abs(i-t)<=n}function Wy(i,t,n,s=.5){i.origin=s,i.originPoint=$e(t.min,t.max,i.origin),i.scale=Xn(n)/Xn(t),i.translate=$e(n.min,n.max,i.origin)-i.originPoint,(i.scale>=RL&&i.scale<=CL||isNaN(i.scale))&&(i.scale=1),(i.translate>=wL&&i.translate<=DL||isNaN(i.translate))&&(i.translate=0)}function Dl(i,t,n,s){Wy(i.x,t.x,n.x,s?s.originX:void 0),Wy(i.y,t.y,n.y,s?s.originY:void 0)}function qy(i,t,n){i.min=n.min+t.min,i.max=i.min+Xn(t)}function LL(i,t,n){qy(i.x,t.x,n.x),qy(i.y,t.y,n.y)}function Yy(i,t,n){i.min=t.min-n.min,i.max=i.min+Xn(t)}function af(i,t,n){Yy(i.x,t.x,n.x),Yy(i.y,t.y,n.y)}function jy(i,t,n,s,o){return i-=t,i=nf(i,1/n,s),o!==void 0&&(i=nf(i,1/o,s)),i}function NL(i,t=0,n=1,s=.5,o,c=i,u=i){if(ia.test(t)&&(t=parseFloat(t),t=$e(u.min,u.max,t/100)-u.min),typeof t!="number")return;let h=$e(c.min,c.max,s);i===c&&(h-=t),i.min=jy(i.min,t,n,h,o),i.max=jy(i.max,t,n,h,o)}function Zy(i,t,[n,s,o],c,u){NL(i,t[n],t[s],t[o],t.scale,c,u)}const PL=["x","scaleX","originX"],OL=["y","scaleY","originY"];function Ky(i,t,n,s){Zy(i.x,t,PL,n?n.x:void 0,s?s.x:void 0),Zy(i.y,t,OL,n?n.y:void 0,s?s.y:void 0)}function Qy(i){return i.translate===0&&i.scale===1}function DE(i){return Qy(i.x)&&Qy(i.y)}function Jy(i,t){return i.min===t.min&&i.max===t.max}function FL(i,t){return Jy(i.x,t.x)&&Jy(i.y,t.y)}function $y(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function UE(i,t){return $y(i.x,t.x)&&$y(i.y,t.y)}function tS(i){return Xn(i.x)/Xn(i.y)}function eS(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}function Ki(i){return[i("x"),i("y")]}function BL(i,t,n){let s="";const o=i.x.translate/t.x,c=i.y.translate/t.y,u=n?.z||0;if((o||c||u)&&(s=`translate3d(${o}px, ${c}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:g,rotateX:_,rotateY:v,skewX:y,skewY:E}=n;d&&(s=`perspective(${d}px) ${s}`),g&&(s+=`rotate(${g}deg) `),_&&(s+=`rotateX(${_}deg) `),v&&(s+=`rotateY(${v}deg) `),y&&(s+=`skewX(${y}deg) `),E&&(s+=`skewY(${E}deg) `)}const h=i.x.scale*t.x,m=i.y.scale*t.y;return(h!==1||m!==1)&&(s+=`scale(${h}, ${m})`),s||"none"}const LE=["TopLeft","TopRight","BottomLeft","BottomRight"],IL=LE.length,nS=i=>typeof i=="string"?parseFloat(i):i,iS=i=>typeof i=="number"||kt.test(i);function zL(i,t,n,s,o,c){o?(i.opacity=$e(0,n.opacity??1,VL(s)),i.opacityExit=$e(t.opacity??1,0,HL(s))):c&&(i.opacity=$e(t.opacity??1,n.opacity??1,s));for(let u=0;u<IL;u++){const h=`border${LE[u]}Radius`;let m=aS(t,h),d=aS(n,h);if(m===void 0&&d===void 0)continue;m||(m=0),d||(d=0),m===0||d===0||iS(m)===iS(d)?(i[h]=Math.max($e(nS(m),nS(d),s),0),(ia.test(d)||ia.test(m))&&(i[h]+="%")):i[h]=d}(t.rotate||n.rotate)&&(i.rotate=$e(t.rotate||0,n.rotate||0,s))}function aS(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const VL=NE(0,.5,EM),HL=NE(.5,.95,Ti);function NE(i,t,n){return s=>s<i?0:s>t?1:n(Ol(i,t,s))}function GL(i,t,n){const s=An(i)?i:or(i);return s.start(pg("",s,t,n)),s.animation}function zl(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}const kL=(i,t)=>i.depth-t.depth;class XL{constructor(){this.children=[],this.isDirty=!1}add(t){tg(this.children,t),this.isDirty=!0}remove(t){Qu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(kL),this.isDirty=!1,this.children.forEach(t)}}function WL(i,t){const n=kn.now(),s=({timestamp:o})=>{const c=o-n;c>=t&&(Va(s),i(c-t))};return Xe.setup(s,!0),()=>Va(s)}function Wu(i){return An(i)?i.get():i}class qL{constructor(){this.members=[]}add(t){tg(this.members,t);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===t||s===this.lead||s===this.prevLead)continue;const o=s.instance;o&&o.isConnected===!1&&s.isPresent!==!1&&!s.snapshot&&Qu(this.members,s)}t.scheduleRender()}remove(t){if(Qu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let s;for(let o=n;o>=0;o--){const c=this.members[o],u=c.instance;if(c.isPresent!==!1&&(!u||u.isConnected!==!1)){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender();const o=s.options.layoutDependency,c=t.options.layoutDependency;if(!(o!==void 0&&c!==void 0&&o===c)){const m=s.instance;m&&m.isConnected===!1&&!s.snapshot||(t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0))}const{crossfade:h}=t.options;h===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const qu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},dp=["","X","Y","Z"],YL=1e3;let jL=0;function pp(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function PE(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=tE(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:c}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",Xe,!(o||c))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&PE(s)}function OE({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},h=t?.()){this.id=jL++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(QL),this.nodes.forEach(eN),this.nodes.forEach(nN),this.nodes.forEach(JL)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new XL)}addEventListener(u,h){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new ng),this.eventHandlers.get(u).add(h)}notifyListeners(u,...h){const m=this.eventHandlers.get(u);m&&m.notify(...h)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=yg(u)&&!jU(u),this.instance=u;const{layoutId:h,layout:m,visualElement:d}=this.options;if(d&&!d.current&&d.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||h)&&(this.isLayoutDirty=!0),i){let g,_=0;const v=()=>this.root.updateBlockedByResize=!1;Xe.read(()=>{_=window.innerWidth}),i(u,()=>{const y=window.innerWidth;y!==_&&(_=y,this.root.updateBlockedByResize=!0,g&&g(),g=WL(v,250),qu.hasAnimatedSinceResize&&(qu.hasAnimatedSinceResize=!1,this.nodes.forEach(oS)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&d&&(h||m)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:_,hasRelativeLayoutChanged:v,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||d.getDefaultTransition()||oN,{onLayoutAnimationStart:R,onLayoutAnimationComplete:M}=d.getProps(),x=!this.targetLayout||!UE(this.targetLayout,y),w=!_&&v;if(this.options.layoutRoot||this.resumeFrom||w||_&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...dg(E,"layout"),onPlay:R,onComplete:M};(d.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(g,w)}else _||oS(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Va(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(iN),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&PE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const _=this.path[g];_.shouldResetTransform=!0,_.updateScroll("snapshot"),_.options.layoutRoot&&_.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(sS);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(rS);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(tN),this.nodes.forEach(ZL),this.nodes.forEach(KL)):this.nodes.forEach(rS),this.clearAllSnapshots();const h=kn.now();Un.delta=ra(0,1e3/60,h-Un.timestamp),Un.timestamp=h,Un.isProcessing=!0,sp.update.process(Un),sp.preRender.process(Un),sp.render.process(Un),Un.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_g.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($L),this.sharedNodes.forEach(aN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Xe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Xe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Xn(this.snapshot.measuredBox.x)&&!Xn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Sn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(h=!1),h&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!DE(this.projectionDelta),m=this.getTransformTemplate(),d=m?m(this.latestValues,""):void 0,g=d!==this.prevTransformTemplateValue;u&&this.instance&&(h||Js(this.latestValues)||g)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return u&&(m=this.removeTransform(m)),lN(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Sn();const h=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(cN))){const{scroll:d}=this.root;d&&(lo(h.x,d.offset.x),lo(h.y,d.offset.y))}return h}removeElementScroll(u){const h=Sn();if(Oi(h,u),this.scroll?.wasRoot)return h;for(let m=0;m<this.path.length;m++){const d=this.path[m],{scroll:g,options:_}=d;d!==this.root&&g&&_.layoutScroll&&(g.wasRoot&&Oi(h,u),lo(h.x,g.offset.x),lo(h.y,g.offset.y))}return h}applyTransform(u,h=!1){const m=Sn();Oi(m,u);for(let d=0;d<this.path.length;d++){const g=this.path[d];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&co(m,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Js(g.latestValues)&&co(m,g.latestValues)}return Js(this.latestValues)&&co(m,this.latestValues),m}removeTransform(u){const h=Sn();Oi(h,u);for(let m=0;m<this.path.length;m++){const d=this.path[m];if(!d.instance||!Js(d.latestValues))continue;Pm(d.latestValues)&&d.updateSnapshot();const g=Sn(),_=d.measurePageBox();Oi(g,_),Ky(h,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,g)}return Js(this.latestValues)&&Ky(h,this.latestValues),h}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Un.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(u||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:_}=this.options;if(!this.layout||!(g||_))return;this.resolvedRelativeTargetAt=Un.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Sn(),this.targetWithTransforms=Sn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),LL(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Oi(this.target,this.layout.layoutBox),_E(this.target,this.targetDelta)):Oi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Pm(this.parent.latestValues)||vE(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,h,m){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Sn(),this.relativeTargetOrigin=Sn(),af(this.relativeTargetOrigin,h,m),Oi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),h=!!this.resumingFrom||this!==u;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Un.timestamp&&(m=!1),m)return;const{layout:d,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||g))return;Oi(this.layoutCorrected,this.layout.layoutBox);const _=this.treeScale.x,v=this.treeScale.y;oL(this.layoutCorrected,this.treeScale,this.path,h),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Sn());const{target:y}=u;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xy(this.prevProjectionDelta.x,this.projectionDelta.x),Xy(this.prevProjectionDelta.y,this.projectionDelta.y)),Dl(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==_||this.treeScale.y!==v||!eS(this.projectionDelta.x,this.prevProjectionDelta.x)||!eS(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=oo(),this.projectionDelta=oo(),this.projectionDeltaWithTransform=oo()}setAnimationOrigin(u,h=!1){const m=this.snapshot,d=m?m.latestValues:{},g={...this.latestValues},_=oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const v=Sn(),y=m?m.source:void 0,E=this.layout?this.layout.source:void 0,R=y!==E,M=this.getStack(),x=!M||M.members.length<=1,w=!!(R&&!x&&this.options.crossfade===!0&&!this.path.some(rN));this.animationProgress=0;let D;this.mixTargetDelta=U=>{const B=U/1e3;lS(_.x,u.x,B),lS(_.y,u.y,B),this.setTargetDelta(_),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(af(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),sN(this.relativeTarget,this.relativeTargetOrigin,v,B),D&&FL(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=Sn()),Oi(D,this.relativeTarget)),R&&(this.animationValues=g,zL(g,d,this.latestValues,B,w,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=B},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Va(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Xe.update(()=>{qu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=or(0)),this.motionValue.jump(0,!1),this.currentAnimation=GL(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),u.onUpdate&&u.onUpdate(h)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(YL),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:h,target:m,layout:d,latestValues:g}=u;if(!(!h||!m||!d)){if(this!==u&&this.layout&&d&&FE(this.options.animationType,this.layout.layoutBox,d.layoutBox)){m=this.target||Sn();const _=Xn(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+_;const v=Xn(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+v}Oi(h,m),co(h,g),Dl(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(u,h){this.sharedNodes.has(u)||this.sharedNodes.set(u,new qL),this.sharedNodes.get(u).add(h);const d=h.options.initialPromotionConfig;h.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(h):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:h,preserveFollowOpacity:m}={}){const d=this.getStack();d&&d.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let h=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const d={};m.z&&pp("z",u,d,this.animationValues);for(let g=0;g<dp.length;g++)pp(`rotate${dp[g]}`,u,d,this.animationValues),pp(`skew${dp[g]}`,u,d,this.animationValues);u.render();for(const g in d)u.setStaticValue(g,d[g]),this.animationValues&&(this.animationValues[g]=d[g]);u.scheduleRender()}applyProjectionStyles(u,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Wu(h?.pointerEvents)||"",u.transform=m?m(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Wu(h?.pointerEvents)||""),this.hasProjected&&!Js(this.latestValues)&&(u.transform=m?m({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=d.animationValues||d.latestValues;this.applyTransformsToTarget();let _=BL(this.projectionDeltaWithTransform,this.treeScale,g);m&&(_=m(g,_)),u.transform=_;const{x:v,y}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${y.origin*100}% 0`,d.animationValues?u.opacity=d===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=d===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in Fm){if(g[E]===void 0)continue;const{correct:R,applyTo:M,isCSSVariable:x}=Fm[E],w=_==="none"?g[E]:R(g[E],d);if(M){const D=M.length;for(let U=0;U<D;U++)u[M[U]]=w}else x?this.options.visualElement.renderState.vars[E]=w:u[E]=w}this.options.layoutId&&(u.pointerEvents=d===this?Wu(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(sS),this.root.sharedNodes.clear()}}}function ZL(i){i.updateLayout()}function KL(i){const t=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=i.layout,{animationType:o}=i.options,c=t.source!==i.layout.source;o==="size"?Ki(g=>{const _=c?t.measuredBox[g]:t.layoutBox[g],v=Xn(_);_.min=n[g].min,_.max=_.min+v}):FE(o,t.layoutBox,n)&&Ki(g=>{const _=c?t.measuredBox[g]:t.layoutBox[g],v=Xn(n[g]);_.max=_.min+v,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[g].max=i.relativeTarget[g].min+v)});const u=oo();Dl(u,n,t.layoutBox);const h=oo();c?Dl(h,i.applyTransform(s,!0),t.measuredBox):Dl(h,n,t.layoutBox);const m=!DE(u);let d=!1;if(!i.resumeFrom){const g=i.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:_,layout:v}=g;if(_&&v){const y=Sn();af(y,t.layoutBox,_.layoutBox);const E=Sn();af(E,n,v.layoutBox),UE(y,E)||(d=!0),g.options.layoutRoot&&(i.relativeTarget=E,i.relativeTargetOrigin=y,i.relativeParent=g)}}}i.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:h,layoutDelta:u,hasLayoutChanged:m,hasRelativeLayoutChanged:d})}else if(i.isLead()){const{onExitComplete:n}=i.options;n&&n()}i.options.transition=void 0}function QL(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function JL(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function $L(i){i.clearSnapshot()}function sS(i){i.clearMeasurements()}function rS(i){i.isLayoutDirty=!1}function tN(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function oS(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function eN(i){i.resolveTargetDelta()}function nN(i){i.calcProjection()}function iN(i){i.resetSkewAndRotation()}function aN(i){i.removeLeadSnapshot()}function lS(i,t,n){i.translate=$e(t.translate,0,n),i.scale=$e(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function cS(i,t,n,s){i.min=$e(t.min,n.min,s),i.max=$e(t.max,n.max,s)}function sN(i,t,n,s){cS(i.x,t.x,n.x,s),cS(i.y,t.y,n.y,s)}function rN(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const oN={duration:.45,ease:[.4,0,.1,1]},uS=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),fS=uS("applewebkit/")&&!uS("chrome/")?Math.round:Ti;function hS(i){i.min=fS(i.min),i.max=fS(i.max)}function lN(i){hS(i.x),hS(i.y)}function FE(i,t,n){return i==="position"||i==="preserve-aspect"&&!UL(tS(t),tS(n),.2)}function cN(i){return i!==i.root&&i.scroll?.wasRoot}const uN=OE({attachResizeListener:(i,t)=>zl(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),mp={current:void 0},BE=OE({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!mp.current){const i=new uN({});i.mount(window),i.setOptions({layoutScroll:!0}),mp.current=i}return mp.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),pf=Bt.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function fN(i=!0){const t=Bt.useContext($m);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,c=Bt.useId();Bt.useEffect(()=>{if(i)return o(c)},[i]);const u=Bt.useCallback(()=>i&&s&&s(c),[c,s,i]);return!n&&s?[!1,u]:[!0]}const IE=Bt.createContext({strict:!1}),dS={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let pS=!1;function hN(){if(pS)return;const i={};for(const t in dS)i[t]={isEnabled:n=>dS[t].some(s=>!!n[s])};pE(i),pS=!0}function zE(){return hN(),iL()}function dN(i){const t=zE();for(const n in i)t[n]={...t[n],...i[n]};pE(t)}const pN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function sf(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||pN.has(i)}let VE=i=>!sf(i);function mN(i){typeof i=="function"&&(VE=t=>t.startsWith("on")?!sf(t):i(t))}try{mN(require("@emotion/is-prop-valid").default)}catch{}function gN(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||(VE(o)||n===!0&&sf(o)||!t&&!sf(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const mf=Bt.createContext({});function vN(i,t){if(df(i)){const{initial:n,animate:s}=i;return{initial:n===!1||Il(n)?n:void 0,animate:Il(s)?s:void 0}}return i.inherit!==!1?t:{}}function _N(i){const{initial:t,animate:n}=vN(i,Bt.useContext(mf));return Bt.useMemo(()=>({initial:t,animate:n}),[mS(t),mS(n)])}function mS(i){return Array.isArray(i)?i.join(" "):i}const bg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function HE(i,t,n){for(const s in t)!An(t[s])&&!SE(s,n)&&(i[s]=t[s])}function xN({transformTemplate:i},t){return Bt.useMemo(()=>{const n=bg();return Eg(n,t,i),Object.assign({},n.vars,n.style)},[t])}function yN(i,t){const n=i.style||{},s={};return HE(s,n,i),Object.assign(s,xN(i,t)),s}function SN(i,t){const n={},s=yN(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const GE=()=>({...bg(),attrs:{}});function MN(i,t,n,s){const o=Bt.useMemo(()=>{const c=GE();return ME(c,t,TE(s),i.transformTemplate,i.style),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};HE(c,i.style,i),o.style={...c,...o.style}}return o}const EN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ag(i){return typeof i!="string"||i.includes("-")?!1:!!(EN.indexOf(i)>-1||/[A-Z]/u.test(i))}function TN(i,t,n,{latestValues:s},o,c=!1,u){const m=(u??Ag(i)?MN:SN)(t,s,o,i),d=gN(t,typeof i=="string",c),g=i!==Bt.Fragment?{...d,...m,ref:n}:{},{children:_}=t,v=Bt.useMemo(()=>An(_)?_.get():_,[_]);return Bt.createElement(i,{...g,children:v})}function bN({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:AN(n,s,o,i),renderState:t()}}function AN(i,t,n,s){const o={},c=s(i,{});for(const v in c)o[v]=Wu(c[v]);let{initial:u,animate:h}=i;const m=df(i),d=hE(i);t&&d&&!m&&i.inherit!==!1&&(u===void 0&&(u=t.initial),h===void 0&&(h=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const _=g?h:u;if(_&&typeof _!="boolean"&&!hf(_)){const v=Array.isArray(_)?_:[_];for(let y=0;y<v.length;y++){const E=mg(i,v[y]);if(E){const{transitionEnd:R,transition:M,...x}=E;for(const w in x){let D=x[w];if(Array.isArray(D)){const U=g?D.length-1:0;D=D[U]}D!==null&&(o[w]=D)}for(const w in R)o[w]=R[w]}}}return o}const kE=i=>(t,n)=>{const s=Bt.useContext(mf),o=Bt.useContext($m),c=()=>bN(i,t,s,o);return n?c():Jm(c)},RN=kE({scrapeMotionValuesFromProps:Tg,createRenderState:bg}),CN=kE({scrapeMotionValuesFromProps:bE,createRenderState:GE}),wN=Symbol.for("motionComponentSymbol");function DN(i,t,n){const s=Bt.useRef(n);Bt.useInsertionEffect(()=>{s.current=n});const o=Bt.useRef(null);return Bt.useCallback(c=>{c&&i.onMount?.(c),t&&(c?t.mount(c):t.unmount());const u=s.current;if(typeof u=="function")if(c){const h=u(c);typeof h=="function"&&(o.current=h)}else o.current?(o.current(),o.current=null):u(c);else u&&(u.current=c)},[t])}const XE=Bt.createContext({});function ao(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function UN(i,t,n,s,o,c){const{visualElement:u}=Bt.useContext(mf),h=Bt.useContext(IE),m=Bt.useContext($m),d=Bt.useContext(pf),g=d.reducedMotion,_=d.skipAnimations,v=Bt.useRef(null),y=Bt.useRef(!1);s=s||h.renderer,!v.current&&s&&(v.current=s(i,{visualState:t,parent:u,props:n,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g,skipAnimations:_,isSVG:c}),y.current&&v.current&&(v.current.manuallyAnimateOnMount=!0));const E=v.current,R=Bt.useContext(XE);E&&!E.projection&&o&&(E.type==="html"||E.type==="svg")&&LN(v.current,n,o,R);const M=Bt.useRef(!1);Bt.useInsertionEffect(()=>{E&&M.current&&E.update(n,m)});const x=n[$M],w=Bt.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return fM(()=>{y.current=!0,E&&(M.current=!0,window.MotionIsMounted=!0,E.updateFeatures(),E.scheduleRenderMicrotask(),w.current&&E.animationState&&E.animationState.animateChanges())}),Bt.useEffect(()=>{E&&(!w.current&&E.animationState&&E.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),w.current=!1),E.enteringChildren=void 0)}),E}function LN(i,t,n,s){const{layoutId:o,layout:c,drag:u,dragConstraints:h,layoutScroll:m,layoutRoot:d,layoutCrossfade:g}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:WE(i.parent)),i.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||h&&ao(h),visualElement:i,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:m,layoutRoot:d})}function WE(i){if(i)return i.options.allowProjection!==!1?i.projection:WE(i.parent)}function gp(i,{forwardMotionProps:t=!1,type:n}={},s,o){s&&dN(s);const c=n?n==="svg":Ag(i),u=c?CN:RN;function h(d,g){let _;const v={...Bt.useContext(pf),...d,layoutId:NN(d)},{isStatic:y}=v,E=_N(d),R=u(d,y);if(!y&&uM){PN();const M=ON(v);_=M.MeasureLayout,E.visualElement=UN(i,R,v,o,M.ProjectionNode,c)}return $t.jsxs(mf.Provider,{value:E,children:[_&&E.visualElement?$t.jsx(_,{visualElement:E.visualElement,...v}):null,TN(i,d,DN(R,E.visualElement,g),R,y,t,c)]})}h.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const m=Bt.forwardRef(h);return m[wN]=i,m}function NN({layoutId:i}){const t=Bt.useContext(cM).id;return t&&i!==void 0?t+"-"+i:i}function PN(i,t){Bt.useContext(IE).strict}function ON(i){const t=zE(),{drag:n,layout:s}=t;if(!n&&!s)return{};const o={...n,...s};return{MeasureLayout:n?.isEnabled(i)||s?.isEnabled(i)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function FN(i,t){if(typeof Proxy>"u")return gp;const n=new Map,s=(c,u)=>gp(c,u,i,t),o=(c,u)=>s(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?s:(n.has(u)||n.set(u,gp(u,void 0,i,t)),n.get(u))})}const BN=(i,t)=>t.isSVG??Ag(i)?new yL(t):new pL(t,{allowProjection:i!==Bt.Fragment});class IN extends bs{constructor(t){super(t),t.animationState||(t.animationState=bL(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();hf(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let zN=0;class VN extends bs{constructor(){super(...arguments),this.id=zN++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const HN={animation:{Feature:IN},exit:{Feature:VN}};function Yl(i){return{point:{x:i.pageX,y:i.pageY}}}const GN=i=>t=>xg(t)&&i(t,Yl(t));function Ul(i,t,n,s){return zl(i,t,GN(n),s)}const qE=({current:i})=>i?i.ownerDocument.defaultView:null,gS=(i,t)=>Math.abs(i-t);function kN(i,t){const n=gS(i.x,t.x),s=gS(i.y,t.y);return Math.sqrt(n**2+s**2)}const vS=new Set(["auto","scroll"]);class YE{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=_p(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,R=kN(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!R)return;const{point:M}=y,{timestamp:x}=Un;this.history.push({...M,timestamp:x});const{onStart:w,onMove:D}=this.handlers;E||(w&&w(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,y)},this.handlePointerMove=(y,E)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=vp(E,this.transformPagePoint),Xe.update(this.updatePoint,!0)},this.handlePointerUp=(y,E)=>{this.end();const{onEnd:R,onSessionEnd:M,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=_p(y.type==="pointercancel"?this.lastMoveEventInfo:vp(E,this.transformPagePoint),this.history);this.startEvent&&R&&R(y,w),M&&M(y,w)},!xg(t))return;this.dragSnapToOrigin=c,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const m=Yl(t),d=vp(m,this.transformPagePoint),{point:g}=d,{timestamp:_}=Un;this.history=[{...g,timestamp:_}];const{onSessionStart:v}=n;v&&v(t,_p(d,this.history)),this.removeListeners=Xl(Ul(this.contextWindow,"pointermove",this.handlePointerMove),Ul(this.contextWindow,"pointerup",this.handlePointerUp),Ul(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(vS.has(s.overflowX)||vS.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},c={x:o.x-n.x,y:o.y-n.y};c.x===0&&c.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(t,o),Xe.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Va(this.updatePoint)}}function vp(i,t){return t?{point:t(i.point)}:i}function _S(i,t){return{x:i.x-t.x,y:i.y-t.y}}function _p({point:i},t){return{point:i,delta:_S(i,jE(t)),offset:_S(i,XN(t)),velocity:WN(t,.1)}}function XN(i){return i[0]}function jE(i){return i[i.length-1]}function WN(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=jE(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>Vi(t)));)n--;if(!s)return{x:0,y:0};s===i[0]&&i.length>2&&o.timestamp-s.timestamp>Vi(t)*2&&(s=i[1]);const c=Ei(o.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function qN(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?$e(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?$e(n,i,s.max):Math.min(i,n)),i}function xS(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function YN(i,{top:t,left:n,bottom:s,right:o}){return{x:xS(i.x,n,o),y:xS(i.y,t,s)}}function yS(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function jN(i,t){return{x:yS(i.x,t.x),y:yS(i.y,t.y)}}function ZN(i,t){let n=.5;const s=Xn(i),o=Xn(t);return o>s?n=Ol(t.min,t.max-s,i.min):s>o&&(n=Ol(i.min,i.max-o,t.min)),ra(0,1,n)}function KN(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const Bm=.35;function QN(i=Bm){return i===!1?i=0:i===!0&&(i=Bm),{x:SS(i,"left","right"),y:SS(i,"top","bottom")}}function SS(i,t,n){return{min:MS(i,t),max:MS(i,n)}}function MS(i,t){return typeof i=="number"?i:i[t]||0}const JN=new WeakMap;class $N{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Sn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=_=>{n&&this.snapToCursor(Yl(_).point),this.stopAnimation()},u=(_,v)=>{const{drag:y,dragPropagation:E,onDragStart:R}=this.getProps();if(y&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=UU(y),!this.openDragLock))return;this.latestPointerEvent=_,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ki(x=>{let w=this.getAxisMotionValue(x).get()||0;if(ia.test(w)){const{projection:D}=this.visualElement;if(D&&D.layout){const U=D.layout.layoutBox[x];U&&(w=Xn(U)*(parseFloat(w)/100))}}this.originPoint[x]=w}),R&&Xe.update(()=>R(_,v),!1,!0),wm(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},h=(_,v)=>{this.latestPointerEvent=_,this.latestPanInfo=v;const{dragPropagation:y,dragDirectionLock:E,onDirectionLock:R,onDrag:M}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:x}=v;if(E&&this.currentDirection===null){this.currentDirection=eP(x),this.currentDirection!==null&&R&&R(this.currentDirection);return}this.updateAxis("x",v.point,x),this.updateAxis("y",v.point,x),this.visualElement.render(),M&&Xe.update(()=>M(_,v),!1,!0)},m=(_,v)=>{this.latestPointerEvent=_,this.latestPanInfo=v,this.stop(_,v),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:_}=this.getProps();(_||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new YE(t,{onSessionStart:c,onStart:u,onMove:h,onSessionEnd:m,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:qE(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:h}=this.getProps();h&&Xe.postRender(()=>h(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!Lu(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=qN(u,this.constraints[t],this.elastic[t])),c.set(u)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;t&&ao(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=YN(s.layoutBox,t):this.constraints=!1,this.elastic=QN(n),o!==this.constraints&&!ao(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&Ki(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=KN(s.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ao(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=lL(s,o.root,this.visualElement.getTransformPagePoint());let u=jN(o.layout.layoutBox,c);if(n){const h=n(sL(u));this.hasMutatedConstraints=!!h,h&&(u=gE(h))}return u}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},d=Ki(g=>{if(!Lu(g,n,this.currentDirection))return;let _=m&&m[g]||{};u&&(_={min:0,max:0});const v=o?200:1e6,y=o?40:1e7,E={type:"inertia",velocity:s?t[g]:0,bounceStiffness:v,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...c,..._};return this.startAxisValueAnimation(g,E)});return Promise.all(d).then(h)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return wm(this.visualElement,t),s.start(pg(t,s,0,n,this.visualElement,!1))}stopAnimation(){Ki(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){Ki(n=>{const{drag:s}=this.getProps();if(!Lu(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:h}=o.layout.layoutBox[n],m=c.get()||0;c.set(t[n]-$e(u,h,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!ao(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ki(u=>{const h=this.getAxisMotionValue(u);if(h&&this.constraints!==!1){const m=h.get();o[u]=ZN({min:m,max:m},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ki(u=>{if(!Lu(u,t,null))return;const h=this.getAxisMotionValue(u),{min:m,max:d}=this.constraints[u];h.set($e(m,d,o[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;JN.set(this.visualElement,this);const t=this.visualElement.current,n=Ul(t,"pointerdown",d=>{const{drag:g,dragListener:_=!0}=this.getProps(),v=d.target,y=v!==t&&BU(v);g&&_&&!y&&this.start(d)});let s;const o=()=>{const{dragConstraints:d}=this.getProps();ao(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),s||(s=tP(t,d.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,u=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Xe.read(o);const h=zl(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:g})=>{this.isDragging&&g&&(Ki(_=>{const v=this.getAxisMotionValue(_);v&&(this.originPoint[_]+=d[_].translate,v.set(v.get()+d[_].translate))}),this.visualElement.render())}));return()=>{h(),n(),u(),m&&m(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=Bm,dragMomentum:h=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:h}}}function ES(i){let t=!0;return()=>{if(t){t=!1;return}i()}}function tP(i,t,n){const s=Dy(i,ES(n)),o=Dy(t,ES(n));return()=>{s(),o()}}function Lu(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function eP(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class nP extends bs{constructor(t){super(t),this.removeGroupControls=Ti,this.removeListeners=Ti,this.controls=new $N(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ti}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const xp=i=>(t,n)=>{i&&Xe.update(()=>i(t,n),!1,!0)};class iP extends bs{constructor(){super(...arguments),this.removePointerDownListener=Ti}onPointerDown(t){this.session=new YE(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:qE(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:xp(t),onStart:xp(n),onMove:xp(s),onEnd:(c,u)=>{delete this.session,o&&Xe.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Ul(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let yp=!1;class aP extends Bt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:c}=t;c&&(n.group&&n.group.add(c),s&&s.register&&o&&s.register(c),yp&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),qu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:c}=this.props,{projection:u}=s;return u&&(u.isPresent=c,t.layoutDependency!==n&&u.setOptions({...u.options,layoutDependency:n}),yp=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==c?u.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?u.promote():u.relegate()||Xe.postRender(()=>{const h=u.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),_g.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;yp=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ZE(i){const[t,n]=fN(),s=Bt.useContext(cM);return $t.jsx(aP,{...i,layoutGroup:s,switchLayoutGroup:Bt.useContext(XE),isPresent:t,safeToRemove:n})}const sP={pan:{Feature:iP},drag:{Feature:nP,ProjectionNode:BE,MeasureLayout:ZE}};function TS(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,c=s[o];c&&Xe.postRender(()=>c(t,Yl(t)))}class rP extends bs{mount(){const{current:t}=this.node;t&&(this.unmount=NU(t,(n,s)=>(TS(this.node,s,"Start"),o=>TS(this.node,o,"End"))))}unmount(){}}class oP extends bs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Xl(zl(this.node.current,"focus",()=>this.onFocus()),zl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function bS(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),c=s[o];c&&Xe.postRender(()=>c(t,Yl(t)))}class lP extends bs{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=zU(t,(o,c)=>(bS(this.node,c,"Start"),(u,{success:h})=>bS(this.node,u,h?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:s?.tap===!1})}unmount(){}}const Im=new WeakMap,Sp=new WeakMap,cP=i=>{const t=Im.get(i.target);t&&t(i)},uP=i=>{i.forEach(cP)};function fP({root:i,...t}){const n=i||document;Sp.has(n)||Sp.set(n,{});const s=Sp.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(uP,{root:i,...t})),s[o]}function hP(i,t,n){const s=fP(t);return Im.set(i,n),s.observe(i),()=>{Im.delete(i),s.unobserve(i)}}const dP={some:0,all:1};class pP extends bs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:c}=t,u={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:dP[o]},h=m=>{const{isIntersecting:d}=m;if(this.isInView===d||(this.isInView=d,c&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:g,onViewportLeave:_}=this.node.getProps(),v=d?g:_;v&&v(m)};return hP(this.node.current,u,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(mP(t,n))&&this.startObserver()}unmount(){}}function mP({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const gP={inView:{Feature:pP},tap:{Feature:lP},focus:{Feature:oP},hover:{Feature:rP}},vP={layout:{ProjectionNode:BE,MeasureLayout:ZE}},_P={...HN,...gP,...sP,...vP},KE=FN(_P,BN);function rf(i){const t=Jm(()=>or(i)),{isStatic:n}=Bt.useContext(pf);if(n){const[,s]=Bt.useState(i);Bt.useEffect(()=>t.on("change",s),[])}return t}function QE(i,t){const n=rf(t()),s=()=>n.set(t());return s(),fM(()=>{const o=()=>Xe.preRender(s,!1,!0),c=i.map(u=>u.on("change",o));return()=>{c.forEach(u=>u()),Va(s)}}),n}function xP(i){wl.current=[],i();const t=QE(wl.current,i);return wl.current=void 0,t}function yP(i,t,n,s){if(typeof i=="function")return xP(i);const c=ZU(t,n,s),u=Array.isArray(i)?AS(i,c):AS([i],([m])=>c(m)),h=Array.isArray(i)?void 0:i.accelerate;return h&&!h.isTransformed&&typeof t!="function"&&Array.isArray(n)&&s?.clamp!==!1&&(u.accelerate={...h,times:t,keyframes:n,isTransformed:!0}),u}function AS(i,t){const n=Jm(()=>[]);return QE(i,()=>{n.length=0;const s=i.length;for(let o=0;o<s;o++)n[o]=i[o].get();return t(n)})}function SP(i,t={}){const{isStatic:n}=Bt.useContext(pf),s=()=>An(i)?i.get():i;if(n)return yP(s);const o=rf(s());return Bt.useInsertionEffect(()=>KU(o,i,t),[o,JSON.stringify(t)]),o}function Mp(i,t={}){return SP(i,{type:"spring",...t})}const Ep={damping:30,stiffness:100,mass:2};function MP({children:i,scaleOnHover:t=1.02,rotateAmplitude:n=8}){const s=Bt.useRef(null),o=Mp(rf(0),Ep),c=Mp(rf(0),Ep),u=Mp(1,Ep);function h(g){if(!s.current)return;const _=s.current.getBoundingClientRect(),v=g.clientX-_.left-_.width/2,E=(g.clientY-_.top-_.height/2)/(_.height/2)*-n,R=v/(_.width/2)*n;o.set(E),c.set(R)}function m(){u.set(t)}function d(){u.set(1),o.set(0),c.set(0)}return $t.jsx("div",{ref:s,className:"tilted-card-wrapper",onMouseMove:h,onMouseEnter:m,onMouseLeave:d,children:$t.jsx(KE.div,{className:"tilted-card-inner",style:{rotateX:o,rotateY:c,scale:u},children:i})})}const JE=(...i)=>i.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();const EP=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const TP=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase());const RS=i=>{const t=TP(i);return t.charAt(0).toUpperCase()+t.slice(1)};var bP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const AP=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const RP=Bt.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...h},m)=>Bt.createElement("svg",{ref:m,...bP,width:t,height:t,stroke:i,strokeWidth:s?Number(n)*24/Number(t):n,className:JE("lucide",o),...!c&&!AP(h)&&{"aria-hidden":"true"},...h},[...u.map(([d,g])=>Bt.createElement(d,g)),...Array.isArray(c)?c:[c]]));const gf=(i,t)=>{const n=Bt.forwardRef(({className:s,...o},c)=>Bt.createElement(RP,{ref:c,iconNode:t,className:JE(`lucide-${EP(RS(i))}`,`lucide-${i}`,s),...o}));return n.displayName=RS(i),n};const CP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],wP=gf("chevron-down",CP);const DP=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],CS=gf("github",DP);const UP=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],LP=gf("linkedin",UP);const NP=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],PP=gf("mail",NP),OP=[{title:"Aura Analytics",description:"A high-frequency financial dashboard processing real-time market data with millisecond latency.",imageSrc:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",tech:["React","Node.js","PostgreSQL"],github:"https://github.com/yourusername/aura-analytics"},{title:"Synapse AI",description:"An AI-driven content generation engine that contextualizes brand voice across multiple social platforms.",imageSrc:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",tech:["Next.js","OpenAI API","Tailwind"],github:"https://github.com/yourusername/synapse-ai"},{title:"Lumina Commerce",description:"A headless e-commerce storefront featuring dynamic cart state management and global edge caching.",imageSrc:"https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",tech:["React","Stripe","GraphQL"],github:"https://github.com/yourusername/lumina-commerce"},{title:"Velocity Sync",description:"A WebSocket-based collaboration tool allowing distributed teams to edit complex documents in real-time.",imageSrc:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",tech:["TypeScript","Redis","WebSockets"],github:"https://github.com/yourusername/velocity-sync"}];function FP(){return $t.jsxs($t.Fragment,{children:[$t.jsxs("nav",{children:[$t.jsxs("div",{className:"logo",children:["Henry",$t.jsx("span",{children:"Yost"})]}),$t.jsx("div",{className:"nav-links",children:$t.jsx("a",{href:"https://linkedin.com/in/yourusername",target:"_blank",rel:"noreferrer",children:"Connect"})})]}),$t.jsxs("header",{className:"hero",children:[$t.jsx("div",{className:"hero-bg",children:$t.jsx(C3,{colors:["#ff5c7a","#8a5cff","#00ffd1"],rotation:0,speed:.2,scale:1,frequency:1,warpStrength:1,mouseInfluence:1,parallax:.5,noise:.1,transparent:!0,autoRotate:0})}),$t.jsxs("div",{className:"hero-content",children:[$t.jsx("h1",{children:"Henry Yost."}),$t.jsx("p",{className:"bio",children:"Data Science Student building AI/ML solutions, scalable backends & pipelines, and high-performance digital experiences "})]}),$t.jsx("div",{className:"scroll-indicator",children:$t.jsx(wP,{size:32})})]}),$t.jsxs("section",{id:"projects",className:"projects-section",children:[$t.jsxs("div",{className:"section-header",children:[$t.jsx("h2",{children:"Selected Works"}),$t.jsx("p",{children:"01 — 04"})]}),$t.jsx("div",{className:"project-grid",children:OP.map((i,t)=>$t.jsx(KE.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,delay:t*.15,ease:[.21,.47,.32,.98]},children:$t.jsx(MP,{scaleOnHover:1.02,rotateAmplitude:8,children:$t.jsxs("a",{href:i.github,target:"_blank",rel:"noreferrer",className:"project-card",children:[$t.jsx("div",{className:"card-image-container",children:$t.jsx("img",{src:i.imageSrc,alt:i.title,className:"card-image"})}),$t.jsxs("div",{className:"card-bottom",children:[$t.jsxs("div",{className:"card-title-row",children:[$t.jsx("h3",{children:i.title}),$t.jsx("span",{className:"project-link","aria-label":`View ${i.title} on GitHub`,children:$t.jsx(CS,{size:28})})]}),$t.jsx("p",{children:i.description}),$t.jsx("div",{className:"tech-stack",children:i.tech.map((n,s)=>$t.jsx("span",{className:"tech-pill",children:n},s))})]})]})})},t))})]}),$t.jsxs("footer",{id:"contact",className:"stacking-footer",children:[$t.jsxs("div",{className:"footer-content",children:[$t.jsx("h2",{children:"Let's connect."}),$t.jsxs("div",{className:"social-links",children:[$t.jsx("a",{href:"mailto:your.email@example.com","aria-label":"Email",children:$t.jsx(PP,{size:32})}),$t.jsx("a",{href:"https://github.com/yourusername",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:$t.jsx(CS,{size:32})}),$t.jsx("a",{href:"https://linkedin.com/in/yourusername",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:$t.jsx(LP,{size:32})})]})]}),$t.jsxs("div",{className:"footer-bottom",children:[$t.jsx("p",{children:"© 2026 Your Name."}),$t.jsx("p",{children:"Designed and built with React."})]})]})]})}hA.createRoot(document.getElementById("root")).render($t.jsx(Bt.StrictMode,{children:$t.jsx(FP,{})}));
