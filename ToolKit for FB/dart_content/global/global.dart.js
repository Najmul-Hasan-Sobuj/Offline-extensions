{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.c_(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){var u=null
return e?function(f){if(u===null)u=H.aR(this,a,b,c,false,true,d)
return new u(this,a[0],f,d)}:function(){if(u===null)u=H.aR(this,a,b,c,false,false,d)
return new u(this,a[0],null,d)}}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.aR(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={aM:function aM(){},a_:function a_(){},A:function A(a){this.a=a},
O:function(a){var u=v.mangledGlobalNames[a]
if(typeof u==="string")return u
u="minified:"+a
return u},
bP:function(a){return v.types[a]},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.P(a)
if(typeof u!=="string")throw H.e(H.bF(a))
return u},
y:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
z:function(a){return H.bv(a)+H.b7(H.bO(a),0,null)},
bv:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.h(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.p||!!l.$iH){r=C.c(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.e.T(t,0)===36){if(1>n)H.aI(P.aO(1,m))
if(n>n)H.aI(P.aO(n,m))
t=t.substring(1,n)}return H.O(t)},
o:function(a,b,c){var u,t,s={}
s.a=0
u=[]
t=[]
s.a=b.length
C.a.I(u,b)
s.b=""
if(c!=null&&c.a!==0)c.l(0,new H.an(s,t,u))
""+s.a
return J.bh(a,new H.a7(C.t,0,u,t,0))},
bw:function(a,b,c){var u,t,s,r
if(b instanceof Array)u=c==null||c.a===0
else u=!1
if(u){t=b
s=t.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(t[0])}else if(s===2){if(!!a.$2)return a.$2(t[0],t[1])}else if(s===3){if(!!a.$3)return a.$3(t[0],t[1],t[2])}else if(s===4){if(!!a.$4)return a.$4(t[0],t[1],t[2],t[3])}else if(s===5)if(!!a.$5)return a.$5(t[0],t[1],t[2],t[3],t[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,t)}return H.bu(a,b,c)},
bu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j
if(b!=null)u=b instanceof Array?b:P.bt(b)
else u=[]
t=u.length
s=a.$R
if(t<s)return H.o(a,u,c)
r=a.$D
q=r==null
p=!q?r():null
o=J.h(a)
n=o.$C
if(typeof n==="string")n=o[n]
if(q){if(c!=null&&c.a!==0)return H.o(a,u,c)
if(t===s)return n.apply(a,u)
return H.o(a,u,c)}if(p instanceof Array){if(c!=null&&c.a!==0)return H.o(a,u,c)
if(t>s+p.length)return H.o(a,u,null)
C.a.I(u,p.slice(t-s))
return n.apply(a,u)}else{if(t>s)return H.o(a,u,c)
m=Object.keys(p)
if(c==null)for(q=m.length,l=0;l<m.length;m.length===q||(0,H.N)(m),++l)C.a.C(u,p[m[l]])
else{for(q=m.length,k=0,l=0;l<m.length;m.length===q||(0,H.N)(m),++l){j=m[l]
if(c.X(j)){++k
C.a.C(u,c.F(0,j))}else C.a.C(u,p[j])}if(k!==c.a)return H.o(a,u,c)}return n.apply(a,u)}},
bI:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.k(b,s,null)
u=J.bM(a)
t=u.gj(a)
if(b<0||b>=t){u=t==null?u.gj(a):t
return new P.a2(u,b,s,"Index out of range")}return P.aO(b,s)},
bF:function(a){return new P.k(a,null,null)},
e:function(a){var u
if(a==null)a=new P.al()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.bf})
u.name=""}else u.toString=H.bf
return u},
bf:function(){return J.P(this.dartException)},
aI:function(a){throw H.e(a)},
N:function(a){throw H.e(P.aK(a))},
bL:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.G(0,a[u],a[t])}return b},
bo:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ar().constructor.prototype):Object.create(new H.r(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else u=function tear_off(h,i,a0,a1){this.$initialize(h,i,a0,a1)}
j.constructor=u
u.prototype=j
if(!e){t=H.b0(a,l,f)
t.$reflectionInfo=d}else{j.$static_name=g
t=l}if(typeof d=="number")s=function(h,i){return function(){return h(i)}}(H.bP,d)
else if(typeof d=="function")if(e)s=d
else{r=f?H.aZ:H.aJ
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,r)}else throw H.e("Error in reflectionInfo.")
j.$S=s
j[k]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.b0(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
bl:function(a,b,c,d){var u=H.aJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
b0:function(a,b,c){var u,t,s,r
if(c)return H.bn(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=H.bl(t,b==null?s!=null:b!==s,u,b)
return r},
bm:function(a,b,c,d){var u=H.aJ,t=H.aZ
switch(b?-1:a){case 0:throw H.e(H.bx("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
bn:function(a,b){var u,t,s,r=$.b_
r==null?$.b_=H.aX("self"):r
r=$.aY
r==null?$.aY=H.aX("receiver"):r
u=b.$stubName
t=b.length
s=a[u]
r=H.bm(t,b==null?s!=null:b!==s,u,b)
return r},
aR:function(a,b,c,d,e,f,g){return H.bo(a,b,c,d,!!e,!!f,g)},
aJ:function(a){return a.a},
aZ:function(a){return a.c},
aX:function(a){var u,t,s,r=new H.r("self","target","receiver","name"),q=J.b2(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
bY:function(a,b){throw H.e(H.bk(a,H.O(b.substring(2))))},
bV:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.h(a)[b]
else u=!0
if(u)return a
H.bY(a,b)},
bJ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
bk:function(a,b){return new H.T("CastError: "+P.u(a)+": type '"+H.bE(a)+"' is not a subtype of type '"+b+"'")},
bE:function(a){var u,t=J.h(a)
if(!!t.$it){u=H.bJ(t)
if(u!=null)return H.bZ(u)
return"Closure"}return H.z(a)},
c_:function(a){throw H.e(new P.Y(a))},
bx:function(a){return new H.ap(a)},
ba:function(a){return v.getIsolateTag(a)},
bO:function(a){if(a==null)return
return a.$ti},
bZ:function(a){return H.i(a,null)},
i:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.O(a[0].name)+H.b7(a,1,b)
if(typeof a=="function")return H.O(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.c(a)
return H.c(b[b.length-a-1])}if('func' in a)return H.bC(a,b)
if('futureOr' in a)return"FutureOr<"+H.i("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
bC:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=[]
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p=C.e.O(p+o,a0[a0.length-q-1])
n=u[q]
if(n!=null&&n!==P.f)p+=" extends "+H.i(n,a0)}p+=">"}else{p=""
t=null}m=!!a.v?"void":H.i(a.ret,a0)
if("args" in a){l=a.args
for(k=l.length,j="",i="",h=0;h<k;++h,i=b){g=l[h]
j=j+i+H.i(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(k=f.length,i="",h=0;h<k;++h,i=b){g=f[h]
j=j+i+H.i(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(k=H.bK(e),d=k.length,i="",h=0;h<d;++h,i=b){c=k[h]
j=j+i+H.i(e[c],a0)+(" "+H.c(c))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+m},
b7:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.p("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.i(p,c)}return"<"+u.h(0)+">"},
c3:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
bW:function(a){var u,t,s,r,q=$.bb.$1(a),p=$.aB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.aG[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.b9.$2(a,q)
if(q!=null){p=$.aB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.aG[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.aH(u)
$.aB[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.aG[q]=u
return u}if(s==="-"){r=H.aH(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.bd(a,u)
if(s==="*")throw H.e(P.aP(q))
if(v.leafTags[q]===true){r=H.aH(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.bd(a,u)},
bd:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.aU(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
aH:function(a){return J.aU(a,!1,null,!!a.$ic2)},
bX:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.aH(u)
else return J.aU(u,c,null,null)},
bT:function(){if(!0===$.aT)return
$.aT=!0
H.bU()},
bU:function(){var u,t,s,r,q,p,o,n
$.aB=Object.create(null)
$.aG=Object.create(null)
H.bS()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.be.$1(q)
if(p!=null){o=H.bX(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
bS:function(){var u,t,s,r,q,p,o=C.j()
o=H.q(C.k,H.q(C.l,H.q(C.d,H.q(C.d,H.q(C.m,H.q(C.n,H.q(C.o(C.c),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.bb=new H.aD(r)
$.b9=new H.aE(q)
$.be=new H.aF(p)},
q:function(a,b){return a(b)||b},
W:function W(a){this.a=a},
V:function V(){},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
t:function t(){},
at:function at(){},
ar:function ar(){},
r:function r(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a){this.a=a},
ap:function ap(a){this.a=a},
F:function F(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
aa:function aa(a,b){this.a=a
this.b=b
this.c=null},
ab:function ab(a){this.a=a},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aD:function aD(a){this.a=a},
aE:function aE(a){this.a=a},
aF:function aF(a){this.a=a},
bK:function(a){return J.bs(a?Object.keys(a):[])}},J={
aU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aS:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.aT==null){H.bT()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.aP("Return interceptor for "+H.c(u(a,q))))}s=a.constructor
r=s==null?null:s[$.aW()]
if(r!=null)return r
r=H.bW(a)
if(r!=null)return r
if(typeof a=="function")return C.q
u=Object.getPrototypeOf(a)
if(u==null)return C.i
if(u===Object.prototype)return C.i
if(typeof s=="function"){Object.defineProperty(s,$.aW(),{value:C.b,enumerable:false,writable:true,configurable:true})
return C.b}return C.b},
bs:function(a){return J.b2(a)},
b2:function(a){a.fixed$length=Array
return a},
h:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a6.prototype
return J.a5.prototype}if(typeof a=="string")return J.w.prototype
if(a==null)return J.a8.prototype
if(typeof a=="boolean")return J.a4.prototype
if(a.constructor==Array)return J.l.prototype
if(typeof a!="object"){if(typeof a=="function")return J.m.prototype
return a}if(a instanceof P.f)return a
return J.aS(a)},
bM:function(a){if(typeof a=="string")return J.w.prototype
if(a==null)return a
if(a.constructor==Array)return J.l.prototype
if(typeof a!="object"){if(typeof a=="function")return J.m.prototype
return a}if(a instanceof P.f)return a
return J.aS(a)},
bN:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.m.prototype
return a}if(a instanceof P.f)return a
return J.aS(a)},
bg:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.h(a).m(a,b)},
C:function(a){return J.h(a).gi(a)},
bh:function(a,b){return J.h(a).p(a,b)},
bi:function(a,b,c){return J.bN(a).N(a,b,c)},
P:function(a){return J.h(a).h(a)},
d:function d(){},
a4:function a4(){},
a8:function a8(){},
E:function E(){},
am:function am(){},
H:function H(){},
m:function m(){},
l:function l(){},
aL:function aL(){},
S:function S(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
a9:function a9(){},
a6:function a6(){},
a5:function a5(){},
w:function w(){}},P={
b3:function(a){return H.bL(a,new H.F())},
br:function(a,b,c){var u,t
if(P.aQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=[]
$.j.push(a)
try{P.bD(a,u)}finally{$.j.pop()}t=P.b5(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
bq:function(a,b,c){var u,t
if(P.aQ(a))return b+"..."+c
u=new P.p(b)
$.j.push(a)
try{t=u
t.a=P.b5(t.a,a,", ")}finally{$.j.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
aQ:function(a){var u,t
for(u=$.j.length,t=0;t<u;++t)if(a===$.j[t])return!0
return!1},
bD:function(a,b){var u,t,s,r,q,p,o,n=a.gE(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.k())return
u=H.c(n.d)
b.push(u)
m+=u.length+2;++l}if(!n.k()){if(l<=5)return
t=b.pop()
s=b.pop()}else{r=n.d;++l
if(!n.k()){if(l<=4){b.push(H.c(r))
return}t=H.c(r)
s=b.pop()
m+=t.length+2}else{q=n.d;++l
for(;n.k();r=q,q=p){p=n.d;++l
if(l>100){while(!0){if(!(m>75&&l>3))break
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.c(r)
t=H.c(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
ae:function(a){var u,t={}
if(P.aQ(a))return"{...}"
u=new P.p("")
try{$.j.push(a)
u.a+="{"
t.a=!0
a.l(0,new P.af(t,u))
u.a+="}"}finally{$.j.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ad:function ad(){},
af:function af(a,b){this.a=a
this.b=b},
ag:function ag(){},
aA:function aA(){},
ah:function ah(){},
av:function av(){},
K:function K(){},
bp:function(a){if(a instanceof H.t)return a.h(0)
return"Instance of '"+H.z(a)+"'"},
bt:function(a){var u,t,s=[]
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.N)(a),++t)s.push(a[t])
return s},
b5:function(a,b,c){var u=new J.S(b,b.length)
if(!u.k())return a
if(c.length===0){do a+=H.c(u.d)
while(u.k())}else{a+=H.c(u.d)
for(;u.k();)a=a+c+H.c(u.d)}return a},
b4:function(a,b,c,d){return new P.ai(a,b,c,d)},
u:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.P(a)
if(typeof a==="string")return JSON.stringify(a)
return P.bp(a)},
bj:function(a,b,c){return new P.k(a,b,c)},
aO:function(a,b){return new P.ao(null,null,a,b,"Value not in range")},
b6:function(a){return new P.aw(a)},
aP:function(a){return new P.au(a)},
aK:function(a){return new P.U(a)},
aj:function aj(a,b){this.a=a
this.b=b},
L:function L(){},
aC:function aC(){},
a0:function a0(){},
al:function al(){},
k:function k(a,b,c){this.b=a
this.c=b
this.d=c},
ao:function ao(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.b=c
_.c=d
_.d=e},
a2:function a2(a,b,c,d){var _=this
_.f=a
_.b=b
_.c=c
_.d=d},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a){this.a=a},
au:function au(a){this.a=a},
U:function U(a){this.a=a},
Y:function Y(a){this.a=a},
M:function M(){},
a3:function a3(){},
x:function x(){},
ak:function ak(){},
B:function B(){},
f:function f(){},
G:function G(){},
p:function p(a){this.a=a},
as:function as(){},
ay:function ay(){},
az:function az(a,b){this.a=a
this.b=b},
J:function J(a,b){this.a=a
this.b=b},
bA:function(a){var u,t=a.$dart_jsFunction
if(t!=null)return t
u=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.bz,a)
u[$.aV()]=a
a.$dart_jsFunction=u
return u},
bz:function(a,b){return H.bw(a,b,null)},
b8:function(a){if(typeof a=="function")return a
else return P.bA(a)}},W={
bB:function(a){return W.by(a)},
by:function(a){if(a===window)return a
else return new W.ax(a)},
b:function b(){},
Q:function Q(){},
R:function R(){},
Z:function Z(){},
a:function a(){},
D:function D(){},
a1:function a1(){},
v:function v(){},
n:function n(){},
aq:function aq(){},
I:function I(){},
ax:function ax(a){this.a=a}},F={
b1:function(a,b){var u=document.getElementById(a)
if(u==null)return
J.bi(W.bB(H.bV(u,"$iv").contentWindow),b,"*")}},M={
bc:function(){window.dartEnableSubmit=P.b8(M.bR())
window.dartDisableSubmit=P.b8(M.bQ())},
bH:function(){F.b1("tff-content-toolbox-iframe",P.b3(["to_do","enableSubmit"]))},
bG:function(){F.b1("tff-content-toolbox-iframe",P.b3(["to_do","disableSubmit"]))}}
var w=[C,H,J,P,W,F,M]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.aM.prototype={}
J.d.prototype={
m:function(a,b){return a===b},
gi:function(a){return H.y(a)},
h:function(a){return"Instance of '"+H.z(a)+"'"},
p:function(a,b){throw H.e(P.b4(a,b.gK(),b.gM(),b.gL()))}}
J.a4.prototype={
h:function(a){return String(a)},
gi:function(a){return a?519018:218159},
$iL:1}
J.a8.prototype={
m:function(a,b){return null==b},
h:function(a){return"null"},
gi:function(a){return 0},
p:function(a,b){return this.P(a,b)}}
J.E.prototype={
gi:function(a){return 0},
h:function(a){return String(a)}}
J.am.prototype={}
J.H.prototype={}
J.m.prototype={
h:function(a){var u=a[$.aV()]
if(u==null)return this.S(a)
return"JavaScript function for "+H.c(J.P(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.l.prototype={
C:function(a,b){if(!!a.fixed$length)H.aI(P.b6("add"))
a.push(b)},
I:function(a,b){var u,t
if(!!a.fixed$length)H.aI(P.b6("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.N)(b),++t)a.push(b[t])},
h:function(a){return P.bq(a,"[","]")},
gi:function(a){return H.y(a)},
gj:function(a){return a.length},
$ix:1}
J.aL.prototype={}
J.S.prototype={
k:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.N(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.a9.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
$iB:1}
J.a6.prototype={$iM:1}
J.a5.prototype={}
J.w.prototype={
T:function(a,b){if(b>=a.length)throw H.e(H.bI(a,b))
return a.charCodeAt(b)},
O:function(a,b){if(typeof b!=="string")throw H.e(P.bj(b,null,null))
return a+b},
h:function(a){return a},
gi:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$iG:1}
H.a_.prototype={}
H.A.prototype={
gi:function(a){var u=this._hashCode
if(u!=null)return u
u=536870911&664597*J.C(this.a)
this._hashCode=u
return u},
h:function(a){return'Symbol("'+H.c(this.a)+'")'},
m:function(a,b){if(b==null)return!1
return b instanceof H.A&&this.a==b.a},
$ias:1}
H.W.prototype={}
H.V.prototype={
h:function(a){return P.ae(this)},
$iaN:1}
H.X.prototype={
gj:function(a){return this.a},
W:function(a){return this.b[a]},
l:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.W(s))}}}
H.a7.prototype={
gK:function(){var u=this.a
return u},
gM:function(){var u,t,s,r,q=this
if(q.c===1)return C.f
u=q.d
t=u.length-q.e.length-q.f
if(t===0)return C.f
s=[]
for(r=0;r<t;++r)s.push(u[r])
s.fixed$length=Array
s.immutable$list=Array
return s},
gL:function(){var u,t,s,r,q,p,o=this
if(o.c!==0)return C.h
u=o.e
t=u.length
s=o.d
r=s.length-t-o.f
if(t===0)return C.h
q=new H.F()
for(p=0;p<t;++p)q.G(0,new H.A(u[p]),s[r+p])
return new H.W(q)}}
H.an.prototype={
$2:function(a,b){var u=this.a
u.b=u.b+"$"+H.c(a)
this.b.push(a)
this.c.push(b);++u.a}}
H.t.prototype={
h:function(a){return"Closure '"+H.z(this).trim()+"'"},
ga0:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.at.prototype={}
H.ar.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.O(u)+"'"}}
H.r.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.r))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gi:function(a){var u,t=this.c
if(t==null)u=H.y(this.a)
else u=typeof t!=="object"?J.C(t):H.y(t)
return(u^H.y(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.z(u)+"'")}}
H.T.prototype={
h:function(a){return this.a}}
H.ap.prototype={
h:function(a){return"RuntimeError: "+H.c(this.a)}}
H.F.prototype={
gj:function(a){return this.a},
X:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.U(u,a)}else{t=this.Z(a)
return t}},
Z:function(a){var u=this.d
if(u==null)return!1
return this.D(this.v(u,J.C(a)&0x3ffffff),a)>=0},
F:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.n(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.n(r,b)
s=t==null?null:t.b
return s}else return q.a_(b)},
a_:function(a){var u,t,s=this.d
if(s==null)return
u=this.v(s,J.C(a)&0x3ffffff)
t=this.D(u,a)
if(t<0)return
return u[t].b},
G:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.H(u==null?o.b=o.w():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.H(t==null?o.c=o.w():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.w()
r=J.C(b)&0x3ffffff
q=o.v(s,r)
if(q==null)o.B(s,r,[o.A(b,c)])
else{p=o.D(q,b)
if(p>=0)q[p].b=c
else q.push(o.A(b,c))}}},
l:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.e(P.aK(u))
t=t.c}},
H:function(a,b,c){var u=this.n(a,b)
if(u==null)this.B(a,b,this.A(b,c))
else u.b=c},
A:function(a,b){var u=this,t=new H.aa(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
D:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.bg(a[t].a,b))return t
return-1},
h:function(a){return P.ae(this)},
n:function(a,b){return a[b]},
v:function(a,b){return a[b]},
B:function(a,b,c){a[b]=c},
V:function(a,b){delete a[b]},
U:function(a,b){return this.n(a,b)!=null},
w:function(){var u="<non-identifier-key>",t=Object.create(null)
this.B(t,u,t)
this.V(t,u)
return t}}
H.aa.prototype={}
H.ab.prototype={
gj:function(a){return this.a.a},
gE:function(a){var u=this.a,t=new H.ac(u,u.r)
t.c=u.e
return t}}
H.ac.prototype={
k:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.aK(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.aD.prototype={
$1:function(a){return this.a(a)}}
H.aE.prototype={
$2:function(a,b){return this.a(a,b)}}
H.aF.prototype={
$1:function(a){return this.a(a)}}
P.ad.prototype={}
P.af.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.c(a)
t.a=u+": "
t.a+=H.c(b)}}
P.ag.prototype={
l:function(a,b){var u,t
for(u=new H.ab(this),u=u.gE(u);u.k();){t=u.d
b.$2(t,this.F(0,t))}},
gj:function(a){return this.a},
h:function(a){return P.ae(this)},
$iaN:1}
P.aA.prototype={}
P.ah.prototype={
l:function(a,b){this.a.l(0,b)},
gj:function(a){return this.a.a},
h:function(a){return P.ae(this.a)},
$iaN:1}
P.av.prototype={}
P.K.prototype={}
P.aj.prototype={
$2:function(a,b){var u,t=this.b,s=this.a
t.a+=s.a
u=t.a+=H.c(a.a)
t.a=u+": "
t.a+=P.u(b)
s.a=", "}}
P.L.prototype={
gi:function(a){return P.f.prototype.gi.call(this,this)},
h:function(a){return this?"true":"false"}}
P.aC.prototype={}
P.a0.prototype={}
P.al.prototype={
h:function(a){return"Throw of null."}}
P.k.prototype={
gu:function(){return"Invalid argument"},
gt:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gu()+o+u
s=q.gt()
r=P.u(q.b)
return t+s+": "+r}}
P.ao.prototype={
gu:function(){return"RangeError"},
gt:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.c(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.c(s)
else if(t>s)u=": Not in range "+H.c(s)+".."+H.c(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.c(s)}return u}}
P.a2.prototype={
gu:function(){return"RangeError"},
gt:function(){if(this.b<0)return": index must not be negative"
var u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.c(u)},
gj:function(a){return this.f}}
P.ai.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m=this,l={},k=new P.p("")
l.a=""
for(u=m.c,t=u.length,s=0,r="",q="";s<t;++s,q=", "){p=u[s]
k.a=r+q
r=k.a+=P.u(p)
l.a=", "}m.d.l(0,new P.aj(l,k))
o=P.u(m.a)
n=k.h(0)
u="NoSuchMethodError: method not found: '"+H.c(m.b.a)+"'\nReceiver: "+o+"\nArguments: ["+n+"]"
return u}}
P.aw.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.au.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.U.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.u(u)+"."}}
P.Y.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.M.prototype={}
P.a3.prototype={
gj:function(a){var u,t=this.gE(this)
for(u=0;t.k();)++u
return u},
h:function(a){return P.br(this,"(",")")}}
P.x.prototype={}
P.ak.prototype={
gi:function(a){return P.f.prototype.gi.call(this,this)},
h:function(a){return"null"}}
P.B.prototype={}
P.f.prototype={constructor:P.f,$if:1,
m:function(a,b){return this===b},
gi:function(a){return H.y(this)},
h:function(a){return"Instance of '"+H.z(this)+"'"},
p:function(a,b){throw H.e(P.b4(this,b.gK(),b.gM(),b.gL()))},
toString:function(){return this.h(this)}}
P.G.prototype={}
P.p.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.as.prototype={}
W.b.prototype={}
W.Q.prototype={
h:function(a){return String(a)}}
W.R.prototype={
h:function(a){return String(a)}}
W.Z.prototype={
h:function(a){return String(a)}}
W.a.prototype={
h:function(a){return a.localName}}
W.D.prototype={}
W.a1.prototype={
gj:function(a){return a.length}}
W.v.prototype={$iv:1}
W.n.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.R(a):u}}
W.aq.prototype={
gj:function(a){return a.length}}
W.I.prototype={
N:function(a,b,c){a.postMessage(new P.J([],[]).q(b),c)
return}}
W.ax.prototype={
N:function(a,b,c){this.a.postMessage(new P.J([],[]).q(b),c)}}
P.ay.prototype={
J:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
q:function(a){var u,t,s,r=this,q={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.h(a)
if(!!u.$iaN){t=r.J(a)
u=r.b
s=q.a=u[t]
if(s!=null)return s
s={}
q.a=s
u[t]=s
a.l(0,new P.az(q,r))
return q.a}if(!!u.$ix){t=r.J(a)
s=r.b[t]
if(s!=null)return s
return r.Y(a,t)}throw H.e(P.aP("structured clone of other type"))},
Y:function(a,b){var u,t=a.length,s=new Array(t)
this.b[b]=s
for(u=0;u<t;++u)s[u]=this.q(a[u])
return s}}
P.az.prototype={
$2:function(a,b){this.a.a[a]=this.b.q(b)}}
P.J.prototype={};(function aliases(){var u=J.d.prototype
u.R=u.h
u.P=u.p
u=J.E.prototype
u.S=u.h})();(function installTearOffs(){var u=hunkHelpers._static_0
u(M,"bR","bH",0)
u(M,"bQ","bG",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.f,null)
s(P.f,[H.aM,J.d,J.S,P.a3,H.A,P.ah,H.V,H.a7,H.t,P.a0,P.ag,H.aa,H.ac,P.aA,P.L,P.B,P.x,P.ak,P.G,P.p,P.as,W.ax,P.ay])
s(J.d,[J.a4,J.a8,J.E,J.l,J.a9,J.w,W.D,W.Z])
s(J.E,[J.am,J.H,J.m])
t(J.aL,J.l)
s(J.a9,[J.a6,J.a5])
t(H.a_,P.a3)
t(P.K,P.ah)
t(P.av,P.K)
t(H.W,P.av)
t(H.X,H.V)
s(H.t,[H.an,H.at,H.aD,H.aE,H.aF,P.af,P.aj,P.az])
s(H.at,[H.ar,H.r])
s(P.a0,[H.T,H.ap,P.al,P.k,P.ai,P.aw,P.au,P.U,P.Y])
t(P.ad,P.ag)
t(H.F,P.ad)
t(H.ab,H.a_)
s(P.B,[P.aC,P.M])
s(P.k,[P.ao,P.a2])
s(W.D,[W.n,W.I])
t(W.a,W.n)
t(W.b,W.a)
s(W.b,[W.Q,W.R,W.a1,W.v,W.aq])
t(P.J,P.ay)
u(P.K,P.aA)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=J.d.prototype
C.a=J.l.prototype
C.e=J.w.prototype
C.q=J.m.prototype
C.i=J.am.prototype
C.b=J.H.prototype
C.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.j=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.o=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.k=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.l=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.n=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.d=function(hooks) { return hooks; }

C.f=u([])
C.r=u([])
C.h=new H.X(0,{},C.r)
C.t=new H.A("call")})()
var v={mangledGlobalNames:{M:"int",aC:"double",B:"num",G:"String",L:"bool",ak:"Null",x:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b_=null
$.aY=null
$.bb=null
$.b9=null
$.be=null
$.aB=null
$.aG=null
$.aT=null
$.j=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"c0","aV",function(){return H.ba("_$dart_dartClosure")})
u($,"c1","aW",function(){return H.ba("_$dart_js")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.d,DOMError:J.d,ErrorEvent:J.d,Event:J.d,InputEvent:J.d,MediaError:J.d,NavigatorUserMediaError:J.d,OverconstrainedError:J.d,PositionError:J.d,SensorErrorEvent:J.d,SpeechRecognitionError:J.d,SQLError:J.d,HTMLAudioElement:W.b,HTMLBRElement:W.b,HTMLBaseElement:W.b,HTMLBodyElement:W.b,HTMLButtonElement:W.b,HTMLCanvasElement:W.b,HTMLContentElement:W.b,HTMLDListElement:W.b,HTMLDataElement:W.b,HTMLDataListElement:W.b,HTMLDetailsElement:W.b,HTMLDialogElement:W.b,HTMLDivElement:W.b,HTMLEmbedElement:W.b,HTMLFieldSetElement:W.b,HTMLHRElement:W.b,HTMLHeadElement:W.b,HTMLHeadingElement:W.b,HTMLHtmlElement:W.b,HTMLImageElement:W.b,HTMLInputElement:W.b,HTMLLIElement:W.b,HTMLLabelElement:W.b,HTMLLegendElement:W.b,HTMLLinkElement:W.b,HTMLMapElement:W.b,HTMLMediaElement:W.b,HTMLMenuElement:W.b,HTMLMetaElement:W.b,HTMLMeterElement:W.b,HTMLModElement:W.b,HTMLOListElement:W.b,HTMLObjectElement:W.b,HTMLOptGroupElement:W.b,HTMLOptionElement:W.b,HTMLOutputElement:W.b,HTMLParagraphElement:W.b,HTMLParamElement:W.b,HTMLPictureElement:W.b,HTMLPreElement:W.b,HTMLProgressElement:W.b,HTMLQuoteElement:W.b,HTMLScriptElement:W.b,HTMLShadowElement:W.b,HTMLSlotElement:W.b,HTMLSourceElement:W.b,HTMLSpanElement:W.b,HTMLStyleElement:W.b,HTMLTableCaptionElement:W.b,HTMLTableCellElement:W.b,HTMLTableDataCellElement:W.b,HTMLTableHeaderCellElement:W.b,HTMLTableColElement:W.b,HTMLTableElement:W.b,HTMLTableRowElement:W.b,HTMLTableSectionElement:W.b,HTMLTemplateElement:W.b,HTMLTextAreaElement:W.b,HTMLTimeElement:W.b,HTMLTitleElement:W.b,HTMLTrackElement:W.b,HTMLUListElement:W.b,HTMLUnknownElement:W.b,HTMLVideoElement:W.b,HTMLDirectoryElement:W.b,HTMLFontElement:W.b,HTMLFrameElement:W.b,HTMLFrameSetElement:W.b,HTMLMarqueeElement:W.b,HTMLElement:W.b,HTMLAnchorElement:W.Q,HTMLAreaElement:W.R,DOMException:W.Z,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,EventTarget:W.D,HTMLFormElement:W.a1,HTMLIFrameElement:W.v,Document:W.n,HTMLDocument:W.n,Node:W.n,HTMLSelectElement:W.aq,Window:W.I,DOMWindow:W.I})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,EventTarget:false,HTMLFormElement:true,HTMLIFrameElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.bc,[])
else M.bc([])})})()
//# sourceMappingURL=global.dart.js.map
