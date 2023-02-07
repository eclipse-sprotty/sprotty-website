(()=>{var _L=Object.create;var H_=Object.defineProperty;var TL=Object.getOwnPropertyDescriptor;var RL=Object.getOwnPropertyNames;var AL=Object.getPrototypeOf,bL=Object.prototype.hasOwnProperty;var Sc=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var d=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var SL=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of RL(e))!bL.call(t,i)&&i!==r&&H_(t,i,{get:()=>e[i],enumerable:!(n=TL(e,i))||n.enumerable});return t};var Hs=(t,e,r)=>(r=t!=null?_L(AL(t)):{},SL(e||!t||!t.__esModule?H_(r,"default",{value:t,enumerable:!0}):r,t));var ri=d(gp=>{"use strict";Object.defineProperty(gp,"__esModule",{value:!0});var hp;function mp(){if(hp===void 0)throw new Error("No runtime abstraction layer installed");return hp}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");hp=r}t.install=e})(mp||(mp={}));gp.default=mp});var yp=d(Ws=>{"use strict";Object.defineProperty(Ws,"__esModule",{value:!0});Ws.Disposable=void 0;var CL;(function(t){function e(r){return{dispose:r}}t.create=e})(CL=Ws.Disposable||(Ws.Disposable={}))});var mo=d(ho=>{"use strict";Object.defineProperty(ho,"__esModule",{value:!0});ho.Emitter=ho.Event=void 0;var EL=ri(),PL;(function(t){let e={dispose(){}};t.None=function(){return e}})(PL=ho.Event||(ho.Event={}));var vp=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,a=n.length;o<a;o++)try{r.push(n[o].apply(i[o],e))}catch(s){(0,EL.default)().console.error(s)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},ea=class{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new vp),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=ea._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};ho.Emitter=ea;ea._noop=function(){}});var W_=d(Cc=>{"use strict";Object.defineProperty(Cc,"__esModule",{value:!0});Cc.AbstractMessageBuffer=void 0;var NL=13,kL=10,wL=`\r
`,_p=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(){if(this._chunks.length===0)return;let e=0,r=0,n=0,i=0;e:for(;r<this._chunks.length;){let u=this._chunks[r];n=0;t:for(;n<u.length;){switch(u[n]){case NL:switch(e){case 0:e=1;break;case 2:e=3;break;default:e=0}break;case kL:switch(e){case 1:e=2;break;case 3:e=4,n++;break e;default:e=0}break;default:e=0}n++}i+=u.byteLength,r++}if(e!==4)return;let o=this._read(i+n),a=new Map,s=this.toString(o,"ascii").split(wL);if(s.length<2)return a;for(let u=0;u<s.length-2;u++){let c=s[u],l=c.indexOf(":");if(l===-1)throw new Error("Message header must separate key and value using :");let f=c.substr(0,l),h=c.substr(l+1).trim();a.set(f,h)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],a=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,a}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let a=o.slice(0,e);r.set(a,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};Cc.AbstractMessageBuffer=_p});var z_=d(bp=>{"use strict";Object.defineProperty(bp,"__esModule",{value:!0});var K_=ri(),ta=yp(),OL=mo(),DL=W_(),ra=class extends DL.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return ra.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};ra.emptyBuffer=new Uint8Array(0);var Tp=class{constructor(e){this.socket=e,this._onData=new OL.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,K_.default)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),ta.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),ta.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),ta.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},Rp=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),ta.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),ta.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),ta.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},IL=new TextEncoder,B_=Object.freeze({messageBuffer:Object.freeze({create:t=>new ra(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(IL.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new Tp(t),asWritableStream:t=>new Rp(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Ap(){return B_}(function(t){function e(){K_.default.install(B_)}t.install=e})(Ap||(Ap={}));bp.default=Ap});var na=d(Vt=>{"use strict";Object.defineProperty(Vt,"__esModule",{value:!0});Vt.stringArray=Vt.array=Vt.func=Vt.error=Vt.number=Vt.string=Vt.boolean=void 0;function xL(t){return t===!0||t===!1}Vt.boolean=xL;function V_(t){return typeof t=="string"||t instanceof String}Vt.string=V_;function qL(t){return typeof t=="number"||t instanceof Number}Vt.number=qL;function LL(t){return t instanceof Error}Vt.error=LL;function ML(t){return typeof t=="function"}Vt.func=ML;function Y_(t){return Array.isArray(t)}Vt.array=Y_;function $L(t){return Y_(t)&&t.every(e=>V_(e))}Vt.stringArray=$L});var Bp=d(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.Message=Y.NotificationType9=Y.NotificationType8=Y.NotificationType7=Y.NotificationType6=Y.NotificationType5=Y.NotificationType4=Y.NotificationType3=Y.NotificationType2=Y.NotificationType1=Y.NotificationType0=Y.NotificationType=Y.RequestType9=Y.RequestType8=Y.RequestType7=Y.RequestType6=Y.RequestType5=Y.RequestType4=Y.RequestType3=Y.RequestType2=Y.RequestType1=Y.RequestType=Y.RequestType0=Y.AbstractMessageSignature=Y.ParameterStructures=Y.ResponseError=Y.ErrorCodes=void 0;var go=na(),X_;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(X_=Y.ErrorCodes||(Y.ErrorCodes={}));var Ks=class extends Error{constructor(e,r,n){super(r),this.code=go.number(e)?e:X_.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,Ks.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};Y.ResponseError=Ks;var kt=class{constructor(e){this.kind=e}static is(e){return e===kt.auto||e===kt.byName||e===kt.byPosition}toString(){return this.kind}};Y.ParameterStructures=kt;kt.auto=new kt("auto");kt.byPosition=new kt("byPosition");kt.byName=new kt("byName");var We=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return kt.auto}};Y.AbstractMessageSignature=We;var Sp=class extends We{constructor(e){super(e,0)}};Y.RequestType0=Sp;var Cp=class extends We{constructor(e,r=kt.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Y.RequestType=Cp;var Ep=class extends We{constructor(e,r=kt.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Y.RequestType1=Ep;var Pp=class extends We{constructor(e){super(e,2)}};Y.RequestType2=Pp;var Np=class extends We{constructor(e){super(e,3)}};Y.RequestType3=Np;var kp=class extends We{constructor(e){super(e,4)}};Y.RequestType4=kp;var wp=class extends We{constructor(e){super(e,5)}};Y.RequestType5=wp;var Op=class extends We{constructor(e){super(e,6)}};Y.RequestType6=Op;var Dp=class extends We{constructor(e){super(e,7)}};Y.RequestType7=Dp;var Ip=class extends We{constructor(e){super(e,8)}};Y.RequestType8=Ip;var xp=class extends We{constructor(e){super(e,9)}};Y.RequestType9=xp;var qp=class extends We{constructor(e,r=kt.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Y.NotificationType=qp;var Lp=class extends We{constructor(e){super(e,0)}};Y.NotificationType0=Lp;var Mp=class extends We{constructor(e,r=kt.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};Y.NotificationType1=Mp;var $p=class extends We{constructor(e){super(e,2)}};Y.NotificationType2=$p;var Fp=class extends We{constructor(e){super(e,3)}};Y.NotificationType3=Fp;var jp=class extends We{constructor(e){super(e,4)}};Y.NotificationType4=jp;var Gp=class extends We{constructor(e){super(e,5)}};Y.NotificationType5=Gp;var Up=class extends We{constructor(e){super(e,6)}};Y.NotificationType6=Up;var Hp=class extends We{constructor(e){super(e,7)}};Y.NotificationType7=Hp;var Wp=class extends We{constructor(e){super(e,8)}};Y.NotificationType8=Wp;var Kp=class extends We{constructor(e){super(e,9)}};Y.NotificationType9=Kp;var FL;(function(t){function e(i){let o=i;return o&&go.string(o.method)&&(go.string(o.id)||go.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&go.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(go.string(o.id)||go.number(o.id)||o.id===null)}t.isResponse=n})(FL=Y.Message||(Y.Message={}))});var Vp=d(ni=>{"use strict";var J_;Object.defineProperty(ni,"__esModule",{value:!0});ni.LRUCache=ni.LinkedMap=ni.Touch=void 0;var nr;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(nr=ni.Touch||(ni.Touch={}));var Ec=class{constructor(){this[J_]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=nr.None){let n=this._map.get(e);if(n)return r!==nr.None&&this.touch(n,r),n.value}set(e,r,n=nr.None){let i=this._map.get(e);if(i)i.value=r,n!==nr.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case nr.None:this.addItemLast(i);break;case nr.First:this.addItemFirst(i);break;case nr.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(J_=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==nr.First&&r!==nr.Last)){if(r===nr.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===nr.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};ni.LinkedMap=Ec;var zp=class extends Ec{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=nr.AsNew){return super.get(e,r)}peek(e){return super.get(e,nr.None)}set(e,r){return super.set(e,r,nr.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};ni.LRUCache=zp});var Qp=d(yo=>{"use strict";Object.defineProperty(yo,"__esModule",{value:!0});yo.CancellationTokenSource=yo.CancellationToken=void 0;var jL=ri(),GL=na(),Yp=mo(),Xp;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Yp.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Yp.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||GL.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Xp=yo.CancellationToken||(yo.CancellationToken={}));var UL=Object.freeze(function(t,e){let r=(0,jL.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Pc=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?UL:(this._emitter||(this._emitter=new Yp.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Jp=class{get token(){return this._token||(this._token=new Pc),this._token}cancel(){this._token?this._token.cancel():this._token=Xp.Cancelled}dispose(){this._token?this._token instanceof Pc&&this._token.dispose():this._token=Xp.None}};yo.CancellationTokenSource=Jp});var Q_=d(ii=>{"use strict";Object.defineProperty(ii,"__esModule",{value:!0});ii.ReadableStreamMessageReader=ii.AbstractMessageReader=ii.MessageReader=void 0;var eh=ri(),ia=na(),Zp=mo(),HL;(function(t){function e(r){let n=r;return n&&ia.func(n.listen)&&ia.func(n.dispose)&&ia.func(n.onError)&&ia.func(n.onClose)&&ia.func(n.onPartialMessage)}t.is=e})(HL=ii.MessageReader||(ii.MessageReader={}));var Nc=class{constructor(){this.errorEmitter=new Zp.Emitter,this.closeEmitter=new Zp.Emitter,this.partialMessageEmitter=new Zp.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${ia.string(e.message)?e.message:"unknown"}`)}};ii.AbstractMessageReader=Nc;var th;(function(t){function e(r){let n,i,o,a=new Map,s,u=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,a.set(o.name,o)),r.contentDecoders!==void 0)for(let c of r.contentDecoders)a.set(c.name,c);if(r.contentTypeDecoder!==void 0&&(s=r.contentTypeDecoder,u.set(s.name,s)),r.contentTypeDecoders!==void 0)for(let c of r.contentTypeDecoders)u.set(c.name,c)}return s===void 0&&(s=(0,eh.default)().applicationJson.decoder,u.set(s.name,s)),{charset:n,contentDecoder:o,contentDecoders:a,contentTypeDecoder:s,contentTypeDecoders:u}}t.fromOptions=e})(th||(th={}));var rh=class extends Nc{constructor(e,r){super(),this.readable=e,this.options=th.fromOptions(r),this.buffer=(0,eh.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let i=this.buffer.tryReadHeaders();if(!i)return;let o=i.get("Content-Length");if(!o)throw new Error("Header must provide a Content-Length property.");let a=parseInt(o);if(isNaN(a))throw new Error("Content-Length value must be a number.");this.nextMessageLength=a}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1;let n;this.options.contentDecoder!==void 0?n=this.options.contentDecoder.decode(r):n=Promise.resolve(r),n.then(i=>{this.options.contentTypeDecoder.decode(i,this.options).then(o=>{this.callback(o)},o=>{this.fireError(o)})},i=>{this.fireError(i)})}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,eh.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};ii.ReadableStreamMessageReader=rh});var Z_=d(kc=>{"use strict";Object.defineProperty(kc,"__esModule",{value:!0});kc.Semaphore=void 0;var WL=ri(),nh=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,WL.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};kc.Semaphore=nh});var nT=d(oi=>{"use strict";Object.defineProperty(oi,"__esModule",{value:!0});oi.WriteableStreamMessageWriter=oi.AbstractMessageWriter=oi.MessageWriter=void 0;var eT=ri(),Bs=na(),KL=Z_(),tT=mo(),BL="Content-Length: ",rT=`\r
`,zL;(function(t){function e(r){let n=r;return n&&Bs.func(n.dispose)&&Bs.func(n.onClose)&&Bs.func(n.onError)&&Bs.func(n.write)}t.is=e})(zL=oi.MessageWriter||(oi.MessageWriter={}));var wc=class{constructor(){this.errorEmitter=new tT.Emitter,this.closeEmitter=new tT.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${Bs.string(e.message)?e.message:"unknown"}`)}};oi.AbstractMessageWriter=wc;var ih;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,eT.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,eT.default)().applicationJson.encoder}}t.fromOptions=e})(ih||(ih={}));var oh=class extends wc{constructor(e,r){super(),this.writable=e,this.options=ih.fromOptions(r),this.errorCount=0,this.writeSemaphore=new KL.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(BL,n.byteLength.toString(),rT),i.push(rT),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};oi.WriteableStreamMessageWriter=oh});var cT=d(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.createMessageConnection=Z.ConnectionOptions=Z.CancellationStrategy=Z.CancellationSenderStrategy=Z.CancellationReceiverStrategy=Z.ConnectionStrategy=Z.ConnectionError=Z.ConnectionErrors=Z.LogTraceNotification=Z.SetTraceNotification=Z.TraceFormat=Z.TraceValues=Z.Trace=Z.NullLogger=Z.ProgressType=Z.ProgressToken=void 0;var iT=ri(),bt=na(),te=Bp(),oT=Vp(),zs=mo(),ah=Qp(),Ys;(function(t){t.type=new te.NotificationType("$/cancelRequest")})(Ys||(Ys={}));var aT;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(aT=Z.ProgressToken||(Z.ProgressToken={}));var Vs;(function(t){t.type=new te.NotificationType("$/progress")})(Vs||(Vs={}));var sh=class{constructor(){}};Z.ProgressType=sh;var uh;(function(t){function e(r){return bt.func(r)}t.is=e})(uh||(uh={}));Z.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var Ne;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(Ne=Z.Trace||(Z.Trace={}));var VL;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(VL=Z.TraceValues||(Z.TraceValues={}));(function(t){function e(n){if(!bt.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(Ne=Z.Trace||(Z.Trace={}));var tn;(function(t){t.Text="text",t.JSON="json"})(tn=Z.TraceFormat||(Z.TraceFormat={}));(function(t){function e(r){return bt.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(tn=Z.TraceFormat||(Z.TraceFormat={}));var sT;(function(t){t.type=new te.NotificationType("$/setTrace")})(sT=Z.SetTraceNotification||(Z.SetTraceNotification={}));var ch;(function(t){t.type=new te.NotificationType("$/logTrace")})(ch=Z.LogTraceNotification||(Z.LogTraceNotification={}));var Oc;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(Oc=Z.ConnectionErrors||(Z.ConnectionErrors={}));var wi=class extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,wi.prototype)}};Z.ConnectionError=wi;var uT;(function(t){function e(r){let n=r;return n&&bt.func(n.cancelUndispatched)}t.is=e})(uT=Z.ConnectionStrategy||(Z.ConnectionStrategy={}));var lh;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new ah.CancellationTokenSource}});function e(r){let n=r;return n&&bt.func(n.createCancellationTokenSource)}t.is=e})(lh=Z.CancellationReceiverStrategy||(Z.CancellationReceiverStrategy={}));var dh;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(Ys.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&bt.func(n.sendCancellation)&&bt.func(n.cleanup)}t.is=e})(dh=Z.CancellationSenderStrategy||(Z.CancellationSenderStrategy={}));var fh;(function(t){t.Message=Object.freeze({receiver:lh.Message,sender:dh.Message});function e(r){let n=r;return n&&lh.is(n.receiver)&&dh.is(n.sender)}t.is=e})(fh=Z.CancellationStrategy||(Z.CancellationStrategy={}));var YL;(function(t){function e(r){let n=r;return n&&(fh.is(n.cancellationStrategy)||uT.is(n.connectionStrategy))}t.is=e})(YL=Z.ConnectionOptions||(Z.ConnectionOptions={}));var rn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(rn||(rn={}));function XL(t,e,r,n){let i=r!==void 0?r:Z.NullLogger,o=0,a=0,s=0,u="2.0",c,l=new Map,f,h=new Map,v=new Map,m,R=new oT.LinkedMap,P=new Map,C=new Set,b=new Map,A=Ne.Off,O=tn.Text,$,W=rn.New,ee=new zs.Emitter,Pe=new zs.Emitter,B=new zs.Emitter,Te=new zs.Emitter,ze=new zs.Emitter,He=n&&n.cancellationStrategy?n.cancellationStrategy:fh.Message;function L(S){if(S===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+S.toString()}function q(S){return S===null?"res-unknown-"+(++s).toString():"res-"+S.toString()}function F(){return"not-"+(++a).toString()}function K(S,x){te.Message.isRequest(x)?S.set(L(x.id),x):te.Message.isResponse(x)?S.set(q(x.id),x):S.set(F(),x)}function ie(S){}function oe(){return W===rn.Listening}function Q(){return W===rn.Closed}function ot(){return W===rn.Disposed}function Ve(){(W===rn.New||W===rn.Listening)&&(W=rn.Closed,Pe.fire(void 0))}function At(S){ee.fire([S,void 0,void 0])}function Yr(S){ee.fire(S)}t.onClose(Ve),t.onError(At),e.onClose(Ve),e.onError(Yr);function Tr(){m||R.size===0||(m=(0,iT.default)().timer.setImmediate(()=>{m=void 0,zo()}))}function zo(){if(R.size===0)return;let S=R.shift();try{te.Message.isRequest(S)?Vo(S):te.Message.isNotification(S)?Xo(S):te.Message.isResponse(S)?Yo(S):Gs(S)}finally{Tr()}}let rr=S=>{try{if(te.Message.isNotification(S)&&S.method===Ys.type.method){let x=S.params.id,j=L(x),z=R.get(j);if(te.Message.isRequest(z)){let xe=n?.connectionStrategy,Ye=xe&&xe.cancelUndispatched?xe.cancelUndispatched(z,ie):void 0;if(Ye&&(Ye.error!==void 0||Ye.result!==void 0)){R.delete(j),b.delete(x),Ye.id=z.id,Rn(Ye,S.method,Date.now()),e.write(Ye).catch(()=>i.error("Sending response for canceled message failed."));return}}let Ie=b.get(x);if(Ie!==void 0){Ie.cancel(),An(S);return}else C.add(x)}K(R,S)}finally{Tr()}};function Vo(S){if(ot())return;function x(he,$e,ve){let ct={jsonrpc:u,id:S.id};he instanceof te.ResponseError?ct.error=he.toJson():ct.result=he===void 0?null:he,Rn(ct,$e,ve),e.write(ct).catch(()=>i.error("Sending response failed."))}function j(he,$e,ve){let ct={jsonrpc:u,id:S.id,error:he.toJson()};Rn(ct,$e,ve),e.write(ct).catch(()=>i.error("Sending response failed."))}function z(he,$e,ve){he===void 0&&(he=null);let ct={jsonrpc:u,id:S.id,result:he};Rn(ct,$e,ve),e.write(ct).catch(()=>i.error("Sending response failed."))}fo(S);let Ie=l.get(S.method),xe,Ye;Ie&&(xe=Ie.type,Ye=Ie.handler);let dt=Date.now();if(Ye||c){let he=S.id??String(Date.now()),$e=He.receiver.createCancellationTokenSource(he);S.id!==null&&C.has(S.id)&&$e.cancel(),S.id!==null&&b.set(he,$e);try{let ve;if(Ye)if(S.params===void 0){if(xe!==void 0&&xe.numberOfParams!==0){j(new te.ResponseError(te.ErrorCodes.InvalidParams,`Request ${S.method} defines ${xe.numberOfParams} params but received none.`),S.method,dt);return}ve=Ye($e.token)}else if(Array.isArray(S.params)){if(xe!==void 0&&xe.parameterStructures===te.ParameterStructures.byName){j(new te.ResponseError(te.ErrorCodes.InvalidParams,`Request ${S.method} defines parameters by name but received parameters by position`),S.method,dt);return}ve=Ye(...S.params,$e.token)}else{if(xe!==void 0&&xe.parameterStructures===te.ParameterStructures.byPosition){j(new te.ResponseError(te.ErrorCodes.InvalidParams,`Request ${S.method} defines parameters by position but received parameters by name`),S.method,dt);return}ve=Ye(S.params,$e.token)}else c&&(ve=c(S.method,S.params,$e.token));let ct=ve;ve?ct.then?ct.then(zt=>{b.delete(he),x(zt,S.method,dt)},zt=>{b.delete(he),zt instanceof te.ResponseError?j(zt,S.method,dt):zt&&bt.string(zt.message)?j(new te.ResponseError(te.ErrorCodes.InternalError,`Request ${S.method} failed with message: ${zt.message}`),S.method,dt):j(new te.ResponseError(te.ErrorCodes.InternalError,`Request ${S.method} failed unexpectedly without providing any details.`),S.method,dt)}):(b.delete(he),x(ve,S.method,dt)):(b.delete(he),z(ve,S.method,dt))}catch(ve){b.delete(he),ve instanceof te.ResponseError?x(ve,S.method,dt):ve&&bt.string(ve.message)?j(new te.ResponseError(te.ErrorCodes.InternalError,`Request ${S.method} failed with message: ${ve.message}`),S.method,dt):j(new te.ResponseError(te.ErrorCodes.InternalError,`Request ${S.method} failed unexpectedly without providing any details.`),S.method,dt)}}else j(new te.ResponseError(te.ErrorCodes.MethodNotFound,`Unhandled method ${S.method}`),S.method,dt)}function Yo(S){if(!ot())if(S.id===null)S.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(S.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let x=S.id,j=P.get(x);if(po(S,j),j!==void 0){P.delete(x);try{if(S.error){let z=S.error;j.reject(new te.ResponseError(z.code,z.message,z.data))}else if(S.result!==void 0)j.resolve(S.result);else throw new Error("Should never happen.")}catch(z){z.message?i.error(`Response handler '${j.method}' failed with message: ${z.message}`):i.error(`Response handler '${j.method}' failed unexpectedly.`)}}}}function Xo(S){if(ot())return;let x,j;if(S.method===Ys.type.method){let z=S.params.id;C.delete(z),An(S);return}else{let z=h.get(S.method);z&&(j=z.handler,x=z.type)}if(j||f)try{if(An(S),j)if(S.params===void 0)x!==void 0&&x.numberOfParams!==0&&x.parameterStructures!==te.ParameterStructures.byName&&i.error(`Notification ${S.method} defines ${x.numberOfParams} params but received none.`),j();else if(Array.isArray(S.params)){let z=S.params;S.method===Vs.type.method&&z.length===2&&aT.is(z[0])?j({token:z[0],value:z[1]}):(x!==void 0&&(x.parameterStructures===te.ParameterStructures.byName&&i.error(`Notification ${S.method} defines parameters by name but received parameters by position`),x.numberOfParams!==S.params.length&&i.error(`Notification ${S.method} defines ${x.numberOfParams} params but received ${z.length} arguments`)),j(...z))}else x!==void 0&&x.parameterStructures===te.ParameterStructures.byPosition&&i.error(`Notification ${S.method} defines parameters by position but received parameters by name`),j(S.params);else f&&f(S.method,S.params)}catch(z){z.message?i.error(`Notification handler '${S.method}' failed with message: ${z.message}`):i.error(`Notification handler '${S.method}' failed unexpectedly.`)}else B.fire(S)}function Gs(S){if(!S){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(S,null,4)}`);let x=S;if(bt.string(x.id)||bt.number(x.id)){let j=x.id,z=P.get(j);z&&z.reject(new Error("The received response has neither a result nor an error property."))}}function ut(S){if(S!=null)switch(A){case Ne.Verbose:return JSON.stringify(S,null,4);case Ne.Compact:return JSON.stringify(S);default:return}}function Zn(S){if(!(A===Ne.Off||!$))if(O===tn.Text){let x;(A===Ne.Verbose||A===Ne.Compact)&&S.params&&(x=`Params: ${ut(S.params)}

`),$.log(`Sending request '${S.method} - (${S.id})'.`,x)}else Or("send-request",S)}function Us(S){if(!(A===Ne.Off||!$))if(O===tn.Text){let x;(A===Ne.Verbose||A===Ne.Compact)&&(S.params?x=`Params: ${ut(S.params)}

`:x=`No parameters provided.

`),$.log(`Sending notification '${S.method}'.`,x)}else Or("send-notification",S)}function Rn(S,x,j){if(!(A===Ne.Off||!$))if(O===tn.Text){let z;(A===Ne.Verbose||A===Ne.Compact)&&(S.error&&S.error.data?z=`Error data: ${ut(S.error.data)}

`:S.result?z=`Result: ${ut(S.result)}

`:S.error===void 0&&(z=`No result returned.

`)),$.log(`Sending response '${x} - (${S.id})'. Processing request took ${Date.now()-j}ms`,z)}else Or("send-response",S)}function fo(S){if(!(A===Ne.Off||!$))if(O===tn.Text){let x;(A===Ne.Verbose||A===Ne.Compact)&&S.params&&(x=`Params: ${ut(S.params)}

`),$.log(`Received request '${S.method} - (${S.id})'.`,x)}else Or("receive-request",S)}function An(S){if(!(A===Ne.Off||!$||S.method===ch.type.method))if(O===tn.Text){let x;(A===Ne.Verbose||A===Ne.Compact)&&(S.params?x=`Params: ${ut(S.params)}

`:x=`No parameters provided.

`),$.log(`Received notification '${S.method}'.`,x)}else Or("receive-notification",S)}function po(S,x){if(!(A===Ne.Off||!$))if(O===tn.Text){let j;if((A===Ne.Verbose||A===Ne.Compact)&&(S.error&&S.error.data?j=`Error data: ${ut(S.error.data)}

`:S.result?j=`Result: ${ut(S.result)}

`:S.error===void 0&&(j=`No result returned.

`)),x){let z=S.error?` Request failed: ${S.error.message} (${S.error.code}).`:"";$.log(`Received response '${x.method} - (${S.id})' in ${Date.now()-x.timerStart}ms.${z}`,j)}else $.log(`Received response ${S.id} without active response promise.`,j)}else Or("receive-response",S)}function Or(S,x){if(!$||A===Ne.Off)return;let j={isLSPMessage:!0,type:S,message:x,timestamp:Date.now()};$.log(j)}function Xr(){if(Q())throw new wi(Oc.Closed,"Connection is closed.");if(ot())throw new wi(Oc.Disposed,"Connection is disposed.")}function Jo(){if(oe())throw new wi(Oc.AlreadyListening,"Connection is already listening")}function Qo(){if(!oe())throw new Error("Call listen() first.")}function Rr(S){return S===void 0?null:S}function bn(S){if(S!==null)return S}function Nt(S){return S!=null&&!Array.isArray(S)&&typeof S=="object"}function Jr(S,x){switch(S){case te.ParameterStructures.auto:return Nt(x)?bn(x):[Rr(x)];case te.ParameterStructures.byName:if(!Nt(x))throw new Error("Received parameters by name but param is not an object literal.");return bn(x);case te.ParameterStructures.byPosition:return[Rr(x)];default:throw new Error(`Unknown parameter structure ${S.toString()}`)}}function Qr(S,x){let j,z=S.numberOfParams;switch(z){case 0:j=void 0;break;case 1:j=Jr(S.parameterStructures,x[0]);break;default:j=[];for(let Ie=0;Ie<x.length&&Ie<z;Ie++)j.push(Rr(x[Ie]));if(x.length<z)for(let Ie=x.length;Ie<z;Ie++)j.push(null);break}return j}let Sn={sendNotification:(S,...x)=>{Xr();let j,z;if(bt.string(S)){j=S;let xe=x[0],Ye=0,dt=te.ParameterStructures.auto;te.ParameterStructures.is(xe)&&(Ye=1,dt=xe);let he=x.length,$e=he-Ye;switch($e){case 0:z=void 0;break;case 1:z=Jr(dt,x[Ye]);break;default:if(dt===te.ParameterStructures.byName)throw new Error(`Received ${$e} parameters for 'by Name' notification parameter structure.`);z=x.slice(Ye,he).map(ve=>Rr(ve));break}}else{let xe=x;j=S.method,z=Qr(S,xe)}let Ie={jsonrpc:u,method:j,params:z};return Us(Ie),e.write(Ie).catch(()=>i.error("Sending notification failed."))},onNotification:(S,x)=>{Xr();let j;return bt.func(S)?f=S:x&&(bt.string(S)?(j=S,h.set(S,{type:void 0,handler:x})):(j=S.method,h.set(S.method,{type:S,handler:x}))),{dispose:()=>{j!==void 0?h.delete(j):f=void 0}}},onProgress:(S,x,j)=>{if(v.has(x))throw new Error(`Progress handler for token ${x} already registered`);return v.set(x,j),{dispose:()=>{v.delete(x)}}},sendProgress:(S,x,j)=>Sn.sendNotification(Vs.type,{token:x,value:j}),onUnhandledProgress:Te.event,sendRequest:(S,...x)=>{Xr(),Qo();let j,z,Ie;if(bt.string(S)){j=S;let he=x[0],$e=x[x.length-1],ve=0,ct=te.ParameterStructures.auto;te.ParameterStructures.is(he)&&(ve=1,ct=he);let zt=x.length;ah.CancellationToken.is($e)&&(zt=zt-1,Ie=$e);let ei=zt-ve;switch(ei){case 0:z=void 0;break;case 1:z=Jr(ct,x[ve]);break;default:if(ct===te.ParameterStructures.byName)throw new Error(`Received ${ei} parameters for 'by Name' request parameter structure.`);z=x.slice(ve,zt).map(Cn=>Rr(Cn));break}}else{let he=x;j=S.method,z=Qr(S,he);let $e=S.numberOfParams;Ie=ah.CancellationToken.is(he[$e])?he[$e]:void 0}let xe=o++,Ye;return Ie&&(Ye=Ie.onCancellationRequested(()=>{let he=He.sender.sendCancellation(Sn,xe);return he===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${xe}`),Promise.resolve()):he.catch(()=>{i.log(`Sending cancellation messages for id ${xe} failed`)})})),new Promise((he,$e)=>{let ve={jsonrpc:u,id:xe,method:j,params:z},ct=Cn=>{he(Cn),He.sender.cleanup(xe),Ye?.dispose()},zt=Cn=>{$e(Cn),He.sender.cleanup(xe),Ye?.dispose()},ei={method:j,timerStart:Date.now(),resolve:ct,reject:zt};Zn(ve);try{e.write(ve).catch(()=>i.error("Sending request failed."))}catch(Cn){ei.reject(new te.ResponseError(te.ErrorCodes.MessageWriteError,Cn.message?Cn.message:"Unknown reason")),ei=null}ei&&P.set(xe,ei)})},onRequest:(S,x)=>{Xr();let j=null;return uh.is(S)?(j=void 0,c=S):bt.string(S)?(j=null,x!==void 0&&(j=S,l.set(S,{handler:x,type:void 0}))):x!==void 0&&(j=S.method,l.set(S.method,{type:S,handler:x})),{dispose:()=>{j!==null&&(j!==void 0?l.delete(j):c=void 0)}}},hasPendingResponse:()=>P.size>0,trace:async(S,x,j)=>{let z=!1,Ie=tn.Text;j!==void 0&&(bt.boolean(j)?z=j:(z=j.sendNotification||!1,Ie=j.traceFormat||tn.Text)),A=S,O=Ie,A===Ne.Off?$=void 0:$=x,z&&!Q()&&!ot()&&await Sn.sendNotification(sT.type,{value:Ne.toString(S)})},onError:ee.event,onClose:Pe.event,onUnhandledNotification:B.event,onDispose:ze.event,end:()=>{e.end()},dispose:()=>{if(ot())return;W=rn.Disposed,ze.fire(void 0);let S=new te.ResponseError(te.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let x of P.values())x.reject(S);P=new Map,b=new Map,C=new Set,R=new oT.LinkedMap,bt.func(e.dispose)&&e.dispose(),bt.func(t.dispose)&&t.dispose()},listen:()=>{Xr(),Jo(),W=rn.Listening,t.listen(rr)},inspect:()=>{(0,iT.default)().console.log("inspect")}};return Sn.onNotification(ch.type,S=>{if(A===Ne.Off||!$)return;let x=A===Ne.Verbose||A===Ne.Compact;$.log(S.message,x?S.verbose:void 0)}),Sn.onNotification(Vs.type,S=>{let x=v.get(S.token);x?x(S.value):Te.fire(S)}),Sn}Z.createMessageConnection=XL});var gh=d(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.TraceFormat=D.TraceValues=D.Trace=D.ProgressType=D.ProgressToken=D.createMessageConnection=D.NullLogger=D.ConnectionOptions=D.ConnectionStrategy=D.WriteableStreamMessageWriter=D.AbstractMessageWriter=D.MessageWriter=D.ReadableStreamMessageReader=D.AbstractMessageReader=D.MessageReader=D.CancellationToken=D.CancellationTokenSource=D.Emitter=D.Event=D.Disposable=D.LRUCache=D.Touch=D.LinkedMap=D.ParameterStructures=D.NotificationType9=D.NotificationType8=D.NotificationType7=D.NotificationType6=D.NotificationType5=D.NotificationType4=D.NotificationType3=D.NotificationType2=D.NotificationType1=D.NotificationType0=D.NotificationType=D.ErrorCodes=D.ResponseError=D.RequestType9=D.RequestType8=D.RequestType7=D.RequestType6=D.RequestType5=D.RequestType4=D.RequestType3=D.RequestType2=D.RequestType1=D.RequestType0=D.RequestType=D.Message=D.RAL=void 0;D.CancellationStrategy=D.CancellationSenderStrategy=D.CancellationReceiverStrategy=D.ConnectionError=D.ConnectionErrors=D.LogTraceNotification=D.SetTraceNotification=void 0;var je=Bp();Object.defineProperty(D,"Message",{enumerable:!0,get:function(){return je.Message}});Object.defineProperty(D,"RequestType",{enumerable:!0,get:function(){return je.RequestType}});Object.defineProperty(D,"RequestType0",{enumerable:!0,get:function(){return je.RequestType0}});Object.defineProperty(D,"RequestType1",{enumerable:!0,get:function(){return je.RequestType1}});Object.defineProperty(D,"RequestType2",{enumerable:!0,get:function(){return je.RequestType2}});Object.defineProperty(D,"RequestType3",{enumerable:!0,get:function(){return je.RequestType3}});Object.defineProperty(D,"RequestType4",{enumerable:!0,get:function(){return je.RequestType4}});Object.defineProperty(D,"RequestType5",{enumerable:!0,get:function(){return je.RequestType5}});Object.defineProperty(D,"RequestType6",{enumerable:!0,get:function(){return je.RequestType6}});Object.defineProperty(D,"RequestType7",{enumerable:!0,get:function(){return je.RequestType7}});Object.defineProperty(D,"RequestType8",{enumerable:!0,get:function(){return je.RequestType8}});Object.defineProperty(D,"RequestType9",{enumerable:!0,get:function(){return je.RequestType9}});Object.defineProperty(D,"ResponseError",{enumerable:!0,get:function(){return je.ResponseError}});Object.defineProperty(D,"ErrorCodes",{enumerable:!0,get:function(){return je.ErrorCodes}});Object.defineProperty(D,"NotificationType",{enumerable:!0,get:function(){return je.NotificationType}});Object.defineProperty(D,"NotificationType0",{enumerable:!0,get:function(){return je.NotificationType0}});Object.defineProperty(D,"NotificationType1",{enumerable:!0,get:function(){return je.NotificationType1}});Object.defineProperty(D,"NotificationType2",{enumerable:!0,get:function(){return je.NotificationType2}});Object.defineProperty(D,"NotificationType3",{enumerable:!0,get:function(){return je.NotificationType3}});Object.defineProperty(D,"NotificationType4",{enumerable:!0,get:function(){return je.NotificationType4}});Object.defineProperty(D,"NotificationType5",{enumerable:!0,get:function(){return je.NotificationType5}});Object.defineProperty(D,"NotificationType6",{enumerable:!0,get:function(){return je.NotificationType6}});Object.defineProperty(D,"NotificationType7",{enumerable:!0,get:function(){return je.NotificationType7}});Object.defineProperty(D,"NotificationType8",{enumerable:!0,get:function(){return je.NotificationType8}});Object.defineProperty(D,"NotificationType9",{enumerable:!0,get:function(){return je.NotificationType9}});Object.defineProperty(D,"ParameterStructures",{enumerable:!0,get:function(){return je.ParameterStructures}});var ph=Vp();Object.defineProperty(D,"LinkedMap",{enumerable:!0,get:function(){return ph.LinkedMap}});Object.defineProperty(D,"LRUCache",{enumerable:!0,get:function(){return ph.LRUCache}});Object.defineProperty(D,"Touch",{enumerable:!0,get:function(){return ph.Touch}});var JL=yp();Object.defineProperty(D,"Disposable",{enumerable:!0,get:function(){return JL.Disposable}});var lT=mo();Object.defineProperty(D,"Event",{enumerable:!0,get:function(){return lT.Event}});Object.defineProperty(D,"Emitter",{enumerable:!0,get:function(){return lT.Emitter}});var dT=Qp();Object.defineProperty(D,"CancellationTokenSource",{enumerable:!0,get:function(){return dT.CancellationTokenSource}});Object.defineProperty(D,"CancellationToken",{enumerable:!0,get:function(){return dT.CancellationToken}});var hh=Q_();Object.defineProperty(D,"MessageReader",{enumerable:!0,get:function(){return hh.MessageReader}});Object.defineProperty(D,"AbstractMessageReader",{enumerable:!0,get:function(){return hh.AbstractMessageReader}});Object.defineProperty(D,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return hh.ReadableStreamMessageReader}});var mh=nT();Object.defineProperty(D,"MessageWriter",{enumerable:!0,get:function(){return mh.MessageWriter}});Object.defineProperty(D,"AbstractMessageWriter",{enumerable:!0,get:function(){return mh.AbstractMessageWriter}});Object.defineProperty(D,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return mh.WriteableStreamMessageWriter}});var Yt=cT();Object.defineProperty(D,"ConnectionStrategy",{enumerable:!0,get:function(){return Yt.ConnectionStrategy}});Object.defineProperty(D,"ConnectionOptions",{enumerable:!0,get:function(){return Yt.ConnectionOptions}});Object.defineProperty(D,"NullLogger",{enumerable:!0,get:function(){return Yt.NullLogger}});Object.defineProperty(D,"createMessageConnection",{enumerable:!0,get:function(){return Yt.createMessageConnection}});Object.defineProperty(D,"ProgressToken",{enumerable:!0,get:function(){return Yt.ProgressToken}});Object.defineProperty(D,"ProgressType",{enumerable:!0,get:function(){return Yt.ProgressType}});Object.defineProperty(D,"Trace",{enumerable:!0,get:function(){return Yt.Trace}});Object.defineProperty(D,"TraceValues",{enumerable:!0,get:function(){return Yt.TraceValues}});Object.defineProperty(D,"TraceFormat",{enumerable:!0,get:function(){return Yt.TraceFormat}});Object.defineProperty(D,"SetTraceNotification",{enumerable:!0,get:function(){return Yt.SetTraceNotification}});Object.defineProperty(D,"LogTraceNotification",{enumerable:!0,get:function(){return Yt.LogTraceNotification}});Object.defineProperty(D,"ConnectionErrors",{enumerable:!0,get:function(){return Yt.ConnectionErrors}});Object.defineProperty(D,"ConnectionError",{enumerable:!0,get:function(){return Yt.ConnectionError}});Object.defineProperty(D,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return Yt.CancellationReceiverStrategy}});Object.defineProperty(D,"CancellationSenderStrategy",{enumerable:!0,get:function(){return Yt.CancellationSenderStrategy}});Object.defineProperty(D,"CancellationStrategy",{enumerable:!0,get:function(){return Yt.CancellationStrategy}});var QL=ri();D.RAL=QL.default});var ai=d(Ar=>{"use strict";var ZL=Ar&&Ar.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),eM=Ar&&Ar.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&ZL(e,t,r)};Object.defineProperty(Ar,"__esModule",{value:!0});Ar.createMessageConnection=Ar.BrowserMessageWriter=Ar.BrowserMessageReader=void 0;var tM=z_();tM.default.install();var oa=gh();eM(gh(),Ar);var yh=class extends oa.AbstractMessageReader{constructor(e){super(),this._onData=new oa.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};Ar.BrowserMessageReader=yh;var vh=class extends oa.AbstractMessageWriter{constructor(e){super(),this.context=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.context.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Ar.BrowserMessageWriter=vh;function rM(t,e,r,n){return r===void 0&&(r=oa.NullLogger),oa.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,oa.createMessageConnection)(t,e,r,n)}Ar.createMessageConnection=rM});var _h=d((cse,fT)=>{"use strict";fT.exports=ai()});var aa=d((pT,Dc)=>{(function(t){if(typeof Dc=="object"&&typeof Dc.exports=="object"){var e=t(Sc,pT);e!==void 0&&(Dc.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(g){function E(N){return typeof N=="string"}g.is=E})(r=e.DocumentUri||(e.DocumentUri={}));var n;(function(g){function E(N){return typeof N=="string"}g.is=E})(n=e.URI||(e.URI={}));var i;(function(g){g.MIN_VALUE=-2147483648,g.MAX_VALUE=2147483647;function E(N){return typeof N=="number"&&g.MIN_VALUE<=N&&N<=g.MAX_VALUE}g.is=E})(i=e.integer||(e.integer={}));var o;(function(g){g.MIN_VALUE=0,g.MAX_VALUE=2147483647;function E(N){return typeof N=="number"&&g.MIN_VALUE<=N&&N<=g.MAX_VALUE}g.is=E})(o=e.uinteger||(e.uinteger={}));var a;(function(g){function E(_,p){return _===Number.MAX_VALUE&&(_=o.MAX_VALUE),p===Number.MAX_VALUE&&(p=o.MAX_VALUE),{line:_,character:p}}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&k.uinteger(p.line)&&k.uinteger(p.character)}g.is=N})(a=e.Position||(e.Position={}));var s;(function(g){function E(_,p,w,I){if(k.uinteger(_)&&k.uinteger(p)&&k.uinteger(w)&&k.uinteger(I))return{start:a.create(_,p),end:a.create(w,I)};if(a.is(_)&&a.is(p))return{start:_,end:p};throw new Error("Range#create called with invalid arguments[".concat(_,", ").concat(p,", ").concat(w,", ").concat(I,"]"))}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&a.is(p.start)&&a.is(p.end)}g.is=N})(s=e.Range||(e.Range={}));var u;(function(g){function E(_,p){return{uri:_,range:p}}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&s.is(p.range)&&(k.string(p.uri)||k.undefined(p.uri))}g.is=N})(u=e.Location||(e.Location={}));var c;(function(g){function E(_,p,w,I){return{targetUri:_,targetRange:p,targetSelectionRange:w,originSelectionRange:I}}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&s.is(p.targetRange)&&k.string(p.targetUri)&&s.is(p.targetSelectionRange)&&(s.is(p.originSelectionRange)||k.undefined(p.originSelectionRange))}g.is=N})(c=e.LocationLink||(e.LocationLink={}));var l;(function(g){function E(_,p,w,I){return{red:_,green:p,blue:w,alpha:I}}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&k.numberRange(p.red,0,1)&&k.numberRange(p.green,0,1)&&k.numberRange(p.blue,0,1)&&k.numberRange(p.alpha,0,1)}g.is=N})(l=e.Color||(e.Color={}));var f;(function(g){function E(_,p){return{range:_,color:p}}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&s.is(p.range)&&l.is(p.color)}g.is=N})(f=e.ColorInformation||(e.ColorInformation={}));var h;(function(g){function E(_,p,w){return{label:_,textEdit:p,additionalTextEdits:w}}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&k.string(p.label)&&(k.undefined(p.textEdit)||$.is(p))&&(k.undefined(p.additionalTextEdits)||k.typedArray(p.additionalTextEdits,$.is))}g.is=N})(h=e.ColorPresentation||(e.ColorPresentation={}));var v;(function(g){g.Comment="comment",g.Imports="imports",g.Region="region"})(v=e.FoldingRangeKind||(e.FoldingRangeKind={}));var m;(function(g){function E(_,p,w,I,ne,at){var Fe={startLine:_,endLine:p};return k.defined(w)&&(Fe.startCharacter=w),k.defined(I)&&(Fe.endCharacter=I),k.defined(ne)&&(Fe.kind=ne),k.defined(at)&&(Fe.collapsedText=at),Fe}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&k.uinteger(p.startLine)&&k.uinteger(p.startLine)&&(k.undefined(p.startCharacter)||k.uinteger(p.startCharacter))&&(k.undefined(p.endCharacter)||k.uinteger(p.endCharacter))&&(k.undefined(p.kind)||k.string(p.kind))}g.is=N})(m=e.FoldingRange||(e.FoldingRange={}));var R;(function(g){function E(_,p){return{location:_,message:p}}g.create=E;function N(_){var p=_;return k.defined(p)&&u.is(p.location)&&k.string(p.message)}g.is=N})(R=e.DiagnosticRelatedInformation||(e.DiagnosticRelatedInformation={}));var P;(function(g){g.Error=1,g.Warning=2,g.Information=3,g.Hint=4})(P=e.DiagnosticSeverity||(e.DiagnosticSeverity={}));var C;(function(g){g.Unnecessary=1,g.Deprecated=2})(C=e.DiagnosticTag||(e.DiagnosticTag={}));var b;(function(g){function E(N){var _=N;return k.objectLiteral(_)&&k.string(_.href)}g.is=E})(b=e.CodeDescription||(e.CodeDescription={}));var A;(function(g){function E(_,p,w,I,ne,at){var Fe={range:_,message:p};return k.defined(w)&&(Fe.severity=w),k.defined(I)&&(Fe.code=I),k.defined(ne)&&(Fe.source=ne),k.defined(at)&&(Fe.relatedInformation=at),Fe}g.create=E;function N(_){var p,w=_;return k.defined(w)&&s.is(w.range)&&k.string(w.message)&&(k.number(w.severity)||k.undefined(w.severity))&&(k.integer(w.code)||k.string(w.code)||k.undefined(w.code))&&(k.undefined(w.codeDescription)||k.string((p=w.codeDescription)===null||p===void 0?void 0:p.href))&&(k.string(w.source)||k.undefined(w.source))&&(k.undefined(w.relatedInformation)||k.typedArray(w.relatedInformation,R.is))}g.is=N})(A=e.Diagnostic||(e.Diagnostic={}));var O;(function(g){function E(_,p){for(var w=[],I=2;I<arguments.length;I++)w[I-2]=arguments[I];var ne={title:_,command:p};return k.defined(w)&&w.length>0&&(ne.arguments=w),ne}g.create=E;function N(_){var p=_;return k.defined(p)&&k.string(p.title)&&k.string(p.command)}g.is=N})(O=e.Command||(e.Command={}));var $;(function(g){function E(w,I){return{range:w,newText:I}}g.replace=E;function N(w,I){return{range:{start:w,end:w},newText:I}}g.insert=N;function _(w){return{range:w,newText:""}}g.del=_;function p(w){var I=w;return k.objectLiteral(I)&&k.string(I.newText)&&s.is(I.range)}g.is=p})($=e.TextEdit||(e.TextEdit={}));var W;(function(g){function E(_,p,w){var I={label:_};return p!==void 0&&(I.needsConfirmation=p),w!==void 0&&(I.description=w),I}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&k.string(p.label)&&(k.boolean(p.needsConfirmation)||p.needsConfirmation===void 0)&&(k.string(p.description)||p.description===void 0)}g.is=N})(W=e.ChangeAnnotation||(e.ChangeAnnotation={}));var ee;(function(g){function E(N){var _=N;return k.string(_)}g.is=E})(ee=e.ChangeAnnotationIdentifier||(e.ChangeAnnotationIdentifier={}));var Pe;(function(g){function E(w,I,ne){return{range:w,newText:I,annotationId:ne}}g.replace=E;function N(w,I,ne){return{range:{start:w,end:w},newText:I,annotationId:ne}}g.insert=N;function _(w,I){return{range:w,newText:"",annotationId:I}}g.del=_;function p(w){var I=w;return $.is(I)&&(W.is(I.annotationId)||ee.is(I.annotationId))}g.is=p})(Pe=e.AnnotatedTextEdit||(e.AnnotatedTextEdit={}));var B;(function(g){function E(_,p){return{textDocument:_,edits:p}}g.create=E;function N(_){var p=_;return k.defined(p)&&Q.is(p.textDocument)&&Array.isArray(p.edits)}g.is=N})(B=e.TextDocumentEdit||(e.TextDocumentEdit={}));var Te;(function(g){function E(_,p,w){var I={kind:"create",uri:_};return p!==void 0&&(p.overwrite!==void 0||p.ignoreIfExists!==void 0)&&(I.options=p),w!==void 0&&(I.annotationId=w),I}g.create=E;function N(_){var p=_;return p&&p.kind==="create"&&k.string(p.uri)&&(p.options===void 0||(p.options.overwrite===void 0||k.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||k.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ee.is(p.annotationId))}g.is=N})(Te=e.CreateFile||(e.CreateFile={}));var ze;(function(g){function E(_,p,w,I){var ne={kind:"rename",oldUri:_,newUri:p};return w!==void 0&&(w.overwrite!==void 0||w.ignoreIfExists!==void 0)&&(ne.options=w),I!==void 0&&(ne.annotationId=I),ne}g.create=E;function N(_){var p=_;return p&&p.kind==="rename"&&k.string(p.oldUri)&&k.string(p.newUri)&&(p.options===void 0||(p.options.overwrite===void 0||k.boolean(p.options.overwrite))&&(p.options.ignoreIfExists===void 0||k.boolean(p.options.ignoreIfExists)))&&(p.annotationId===void 0||ee.is(p.annotationId))}g.is=N})(ze=e.RenameFile||(e.RenameFile={}));var He;(function(g){function E(_,p,w){var I={kind:"delete",uri:_};return p!==void 0&&(p.recursive!==void 0||p.ignoreIfNotExists!==void 0)&&(I.options=p),w!==void 0&&(I.annotationId=w),I}g.create=E;function N(_){var p=_;return p&&p.kind==="delete"&&k.string(p.uri)&&(p.options===void 0||(p.options.recursive===void 0||k.boolean(p.options.recursive))&&(p.options.ignoreIfNotExists===void 0||k.boolean(p.options.ignoreIfNotExists)))&&(p.annotationId===void 0||ee.is(p.annotationId))}g.is=N})(He=e.DeleteFile||(e.DeleteFile={}));var L;(function(g){function E(N){var _=N;return _&&(_.changes!==void 0||_.documentChanges!==void 0)&&(_.documentChanges===void 0||_.documentChanges.every(function(p){return k.string(p.kind)?Te.is(p)||ze.is(p)||He.is(p):B.is(p)}))}g.is=E})(L=e.WorkspaceEdit||(e.WorkspaceEdit={}));var q=function(){function g(E,N){this.edits=E,this.changeAnnotations=N}return g.prototype.insert=function(E,N,_){var p,w;if(_===void 0?p=$.insert(E,N):ee.is(_)?(w=_,p=Pe.insert(E,N,_)):(this.assertChangeAnnotations(this.changeAnnotations),w=this.changeAnnotations.manage(_),p=Pe.insert(E,N,w)),this.edits.push(p),w!==void 0)return w},g.prototype.replace=function(E,N,_){var p,w;if(_===void 0?p=$.replace(E,N):ee.is(_)?(w=_,p=Pe.replace(E,N,_)):(this.assertChangeAnnotations(this.changeAnnotations),w=this.changeAnnotations.manage(_),p=Pe.replace(E,N,w)),this.edits.push(p),w!==void 0)return w},g.prototype.delete=function(E,N){var _,p;if(N===void 0?_=$.del(E):ee.is(N)?(p=N,_=Pe.del(E,N)):(this.assertChangeAnnotations(this.changeAnnotations),p=this.changeAnnotations.manage(N),_=Pe.del(E,p)),this.edits.push(_),p!==void 0)return p},g.prototype.add=function(E){this.edits.push(E)},g.prototype.all=function(){return this.edits},g.prototype.clear=function(){this.edits.splice(0,this.edits.length)},g.prototype.assertChangeAnnotations=function(E){if(E===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},g}(),F=function(){function g(E){this._annotations=E===void 0?Object.create(null):E,this._counter=0,this._size=0}return g.prototype.all=function(){return this._annotations},Object.defineProperty(g.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),g.prototype.manage=function(E,N){var _;if(ee.is(E)?_=E:(_=this.nextId(),N=E),this._annotations[_]!==void 0)throw new Error("Id ".concat(_," is already in use."));if(N===void 0)throw new Error("No annotation provided for id ".concat(_));return this._annotations[_]=N,this._size++,_},g.prototype.nextId=function(){return this._counter++,this._counter.toString()},g}(),K=function(){function g(E){var N=this;this._textEditChanges=Object.create(null),E!==void 0?(this._workspaceEdit=E,E.documentChanges?(this._changeAnnotations=new F(E.changeAnnotations),E.changeAnnotations=this._changeAnnotations.all(),E.documentChanges.forEach(function(_){if(B.is(_)){var p=new q(_.edits,N._changeAnnotations);N._textEditChanges[_.textDocument.uri]=p}})):E.changes&&Object.keys(E.changes).forEach(function(_){var p=new q(E.changes[_]);N._textEditChanges[_]=p})):this._workspaceEdit={}}return Object.defineProperty(g.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),g.prototype.getTextEditChange=function(E){if(Q.is(E)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var N={uri:E.uri,version:E.version},_=this._textEditChanges[N.uri];if(!_){var p=[],w={textDocument:N,edits:p};this._workspaceEdit.documentChanges.push(w),_=new q(p,this._changeAnnotations),this._textEditChanges[N.uri]=_}return _}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var _=this._textEditChanges[E];if(!_){var p=[];this._workspaceEdit.changes[E]=p,_=new q(p),this._textEditChanges[E]=_}return _}},g.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new F,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},g.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},g.prototype.createFile=function(E,N,_){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;W.is(N)||ee.is(N)?p=N:_=N;var w,I;if(p===void 0?w=Te.create(E,_):(I=ee.is(p)?p:this._changeAnnotations.manage(p),w=Te.create(E,_,I)),this._workspaceEdit.documentChanges.push(w),I!==void 0)return I},g.prototype.renameFile=function(E,N,_,p){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var w;W.is(_)||ee.is(_)?w=_:p=_;var I,ne;if(w===void 0?I=ze.create(E,N,p):(ne=ee.is(w)?w:this._changeAnnotations.manage(w),I=ze.create(E,N,p,ne)),this._workspaceEdit.documentChanges.push(I),ne!==void 0)return ne},g.prototype.deleteFile=function(E,N,_){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var p;W.is(N)||ee.is(N)?p=N:_=N;var w,I;if(p===void 0?w=He.create(E,_):(I=ee.is(p)?p:this._changeAnnotations.manage(p),w=He.create(E,_,I)),this._workspaceEdit.documentChanges.push(w),I!==void 0)return I},g}();e.WorkspaceChange=K;var ie;(function(g){function E(_){return{uri:_}}g.create=E;function N(_){var p=_;return k.defined(p)&&k.string(p.uri)}g.is=N})(ie=e.TextDocumentIdentifier||(e.TextDocumentIdentifier={}));var oe;(function(g){function E(_,p){return{uri:_,version:p}}g.create=E;function N(_){var p=_;return k.defined(p)&&k.string(p.uri)&&k.integer(p.version)}g.is=N})(oe=e.VersionedTextDocumentIdentifier||(e.VersionedTextDocumentIdentifier={}));var Q;(function(g){function E(_,p){return{uri:_,version:p}}g.create=E;function N(_){var p=_;return k.defined(p)&&k.string(p.uri)&&(p.version===null||k.integer(p.version))}g.is=N})(Q=e.OptionalVersionedTextDocumentIdentifier||(e.OptionalVersionedTextDocumentIdentifier={}));var ot;(function(g){function E(_,p,w,I){return{uri:_,languageId:p,version:w,text:I}}g.create=E;function N(_){var p=_;return k.defined(p)&&k.string(p.uri)&&k.string(p.languageId)&&k.integer(p.version)&&k.string(p.text)}g.is=N})(ot=e.TextDocumentItem||(e.TextDocumentItem={}));var Ve;(function(g){g.PlainText="plaintext",g.Markdown="markdown";function E(N){var _=N;return _===g.PlainText||_===g.Markdown}g.is=E})(Ve=e.MarkupKind||(e.MarkupKind={}));var At;(function(g){function E(N){var _=N;return k.objectLiteral(N)&&Ve.is(_.kind)&&k.string(_.value)}g.is=E})(At=e.MarkupContent||(e.MarkupContent={}));var Yr;(function(g){g.Text=1,g.Method=2,g.Function=3,g.Constructor=4,g.Field=5,g.Variable=6,g.Class=7,g.Interface=8,g.Module=9,g.Property=10,g.Unit=11,g.Value=12,g.Enum=13,g.Keyword=14,g.Snippet=15,g.Color=16,g.File=17,g.Reference=18,g.Folder=19,g.EnumMember=20,g.Constant=21,g.Struct=22,g.Event=23,g.Operator=24,g.TypeParameter=25})(Yr=e.CompletionItemKind||(e.CompletionItemKind={}));var Tr;(function(g){g.PlainText=1,g.Snippet=2})(Tr=e.InsertTextFormat||(e.InsertTextFormat={}));var zo;(function(g){g.Deprecated=1})(zo=e.CompletionItemTag||(e.CompletionItemTag={}));var rr;(function(g){function E(_,p,w){return{newText:_,insert:p,replace:w}}g.create=E;function N(_){var p=_;return p&&k.string(p.newText)&&s.is(p.insert)&&s.is(p.replace)}g.is=N})(rr=e.InsertReplaceEdit||(e.InsertReplaceEdit={}));var Vo;(function(g){g.asIs=1,g.adjustIndentation=2})(Vo=e.InsertTextMode||(e.InsertTextMode={}));var Yo;(function(g){function E(N){var _=N;return _&&(k.string(_.detail)||_.detail===void 0)&&(k.string(_.description)||_.description===void 0)}g.is=E})(Yo=e.CompletionItemLabelDetails||(e.CompletionItemLabelDetails={}));var Xo;(function(g){function E(N){return{label:N}}g.create=E})(Xo=e.CompletionItem||(e.CompletionItem={}));var Gs;(function(g){function E(N,_){return{items:N||[],isIncomplete:!!_}}g.create=E})(Gs=e.CompletionList||(e.CompletionList={}));var ut;(function(g){function E(_){return _.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}g.fromPlainText=E;function N(_){var p=_;return k.string(p)||k.objectLiteral(p)&&k.string(p.language)&&k.string(p.value)}g.is=N})(ut=e.MarkedString||(e.MarkedString={}));var Zn;(function(g){function E(N){var _=N;return!!_&&k.objectLiteral(_)&&(At.is(_.contents)||ut.is(_.contents)||k.typedArray(_.contents,ut.is))&&(N.range===void 0||s.is(N.range))}g.is=E})(Zn=e.Hover||(e.Hover={}));var Us;(function(g){function E(N,_){return _?{label:N,documentation:_}:{label:N}}g.create=E})(Us=e.ParameterInformation||(e.ParameterInformation={}));var Rn;(function(g){function E(N,_){for(var p=[],w=2;w<arguments.length;w++)p[w-2]=arguments[w];var I={label:N};return k.defined(_)&&(I.documentation=_),k.defined(p)?I.parameters=p:I.parameters=[],I}g.create=E})(Rn=e.SignatureInformation||(e.SignatureInformation={}));var fo;(function(g){g.Text=1,g.Read=2,g.Write=3})(fo=e.DocumentHighlightKind||(e.DocumentHighlightKind={}));var An;(function(g){function E(N,_){var p={range:N};return k.number(_)&&(p.kind=_),p}g.create=E})(An=e.DocumentHighlight||(e.DocumentHighlight={}));var po;(function(g){g.File=1,g.Module=2,g.Namespace=3,g.Package=4,g.Class=5,g.Method=6,g.Property=7,g.Field=8,g.Constructor=9,g.Enum=10,g.Interface=11,g.Function=12,g.Variable=13,g.Constant=14,g.String=15,g.Number=16,g.Boolean=17,g.Array=18,g.Object=19,g.Key=20,g.Null=21,g.EnumMember=22,g.Struct=23,g.Event=24,g.Operator=25,g.TypeParameter=26})(po=e.SymbolKind||(e.SymbolKind={}));var Or;(function(g){g.Deprecated=1})(Or=e.SymbolTag||(e.SymbolTag={}));var Xr;(function(g){function E(N,_,p,w,I){var ne={name:N,kind:_,location:{uri:w,range:p}};return I&&(ne.containerName=I),ne}g.create=E})(Xr=e.SymbolInformation||(e.SymbolInformation={}));var Jo;(function(g){function E(N,_,p,w){return w!==void 0?{name:N,kind:_,location:{uri:p,range:w}}:{name:N,kind:_,location:{uri:p}}}g.create=E})(Jo=e.WorkspaceSymbol||(e.WorkspaceSymbol={}));var Qo;(function(g){function E(_,p,w,I,ne,at){var Fe={name:_,detail:p,kind:w,range:I,selectionRange:ne};return at!==void 0&&(Fe.children=at),Fe}g.create=E;function N(_){var p=_;return p&&k.string(p.name)&&k.number(p.kind)&&s.is(p.range)&&s.is(p.selectionRange)&&(p.detail===void 0||k.string(p.detail))&&(p.deprecated===void 0||k.boolean(p.deprecated))&&(p.children===void 0||Array.isArray(p.children))&&(p.tags===void 0||Array.isArray(p.tags))}g.is=N})(Qo=e.DocumentSymbol||(e.DocumentSymbol={}));var Rr;(function(g){g.Empty="",g.QuickFix="quickfix",g.Refactor="refactor",g.RefactorExtract="refactor.extract",g.RefactorInline="refactor.inline",g.RefactorRewrite="refactor.rewrite",g.Source="source",g.SourceOrganizeImports="source.organizeImports",g.SourceFixAll="source.fixAll"})(Rr=e.CodeActionKind||(e.CodeActionKind={}));var bn;(function(g){g.Invoked=1,g.Automatic=2})(bn=e.CodeActionTriggerKind||(e.CodeActionTriggerKind={}));var Nt;(function(g){function E(_,p,w){var I={diagnostics:_};return p!=null&&(I.only=p),w!=null&&(I.triggerKind=w),I}g.create=E;function N(_){var p=_;return k.defined(p)&&k.typedArray(p.diagnostics,A.is)&&(p.only===void 0||k.typedArray(p.only,k.string))&&(p.triggerKind===void 0||p.triggerKind===bn.Invoked||p.triggerKind===bn.Automatic)}g.is=N})(Nt=e.CodeActionContext||(e.CodeActionContext={}));var Jr;(function(g){function E(_,p,w){var I={title:_},ne=!0;return typeof p=="string"?(ne=!1,I.kind=p):O.is(p)?I.command=p:I.edit=p,ne&&w!==void 0&&(I.kind=w),I}g.create=E;function N(_){var p=_;return p&&k.string(p.title)&&(p.diagnostics===void 0||k.typedArray(p.diagnostics,A.is))&&(p.kind===void 0||k.string(p.kind))&&(p.edit!==void 0||p.command!==void 0)&&(p.command===void 0||O.is(p.command))&&(p.isPreferred===void 0||k.boolean(p.isPreferred))&&(p.edit===void 0||L.is(p.edit))}g.is=N})(Jr=e.CodeAction||(e.CodeAction={}));var Qr;(function(g){function E(_,p){var w={range:_};return k.defined(p)&&(w.data=p),w}g.create=E;function N(_){var p=_;return k.defined(p)&&s.is(p.range)&&(k.undefined(p.command)||O.is(p.command))}g.is=N})(Qr=e.CodeLens||(e.CodeLens={}));var Sn;(function(g){function E(_,p){return{tabSize:_,insertSpaces:p}}g.create=E;function N(_){var p=_;return k.defined(p)&&k.uinteger(p.tabSize)&&k.boolean(p.insertSpaces)}g.is=N})(Sn=e.FormattingOptions||(e.FormattingOptions={}));var S;(function(g){function E(_,p,w){return{range:_,target:p,data:w}}g.create=E;function N(_){var p=_;return k.defined(p)&&s.is(p.range)&&(k.undefined(p.target)||k.string(p.target))}g.is=N})(S=e.DocumentLink||(e.DocumentLink={}));var x;(function(g){function E(_,p){return{range:_,parent:p}}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&s.is(p.range)&&(p.parent===void 0||g.is(p.parent))}g.is=N})(x=e.SelectionRange||(e.SelectionRange={}));var j;(function(g){g.namespace="namespace",g.type="type",g.class="class",g.enum="enum",g.interface="interface",g.struct="struct",g.typeParameter="typeParameter",g.parameter="parameter",g.variable="variable",g.property="property",g.enumMember="enumMember",g.event="event",g.function="function",g.method="method",g.macro="macro",g.keyword="keyword",g.modifier="modifier",g.comment="comment",g.string="string",g.number="number",g.regexp="regexp",g.operator="operator",g.decorator="decorator"})(j=e.SemanticTokenTypes||(e.SemanticTokenTypes={}));var z;(function(g){g.declaration="declaration",g.definition="definition",g.readonly="readonly",g.static="static",g.deprecated="deprecated",g.abstract="abstract",g.async="async",g.modification="modification",g.documentation="documentation",g.defaultLibrary="defaultLibrary"})(z=e.SemanticTokenModifiers||(e.SemanticTokenModifiers={}));var Ie;(function(g){function E(N){var _=N;return k.objectLiteral(_)&&(_.resultId===void 0||typeof _.resultId=="string")&&Array.isArray(_.data)&&(_.data.length===0||typeof _.data[0]=="number")}g.is=E})(Ie=e.SemanticTokens||(e.SemanticTokens={}));var xe;(function(g){function E(_,p){return{range:_,text:p}}g.create=E;function N(_){var p=_;return p!=null&&s.is(p.range)&&k.string(p.text)}g.is=N})(xe=e.InlineValueText||(e.InlineValueText={}));var Ye;(function(g){function E(_,p,w){return{range:_,variableName:p,caseSensitiveLookup:w}}g.create=E;function N(_){var p=_;return p!=null&&s.is(p.range)&&k.boolean(p.caseSensitiveLookup)&&(k.string(p.variableName)||p.variableName===void 0)}g.is=N})(Ye=e.InlineValueVariableLookup||(e.InlineValueVariableLookup={}));var dt;(function(g){function E(_,p){return{range:_,expression:p}}g.create=E;function N(_){var p=_;return p!=null&&s.is(p.range)&&(k.string(p.expression)||p.expression===void 0)}g.is=N})(dt=e.InlineValueEvaluatableExpression||(e.InlineValueEvaluatableExpression={}));var he;(function(g){function E(_,p){return{frameId:_,stoppedLocation:p}}g.create=E;function N(_){var p=_;return k.defined(p)&&s.is(_.stoppedLocation)}g.is=N})(he=e.InlineValueContext||(e.InlineValueContext={}));var $e;(function(g){g.Type=1,g.Parameter=2;function E(N){return N===1||N===2}g.is=E})($e=e.InlayHintKind||(e.InlayHintKind={}));var ve;(function(g){function E(_){return{value:_}}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&(p.tooltip===void 0||k.string(p.tooltip)||At.is(p.tooltip))&&(p.location===void 0||u.is(p.location))&&(p.command===void 0||O.is(p.command))}g.is=N})(ve=e.InlayHintLabelPart||(e.InlayHintLabelPart={}));var ct;(function(g){function E(_,p,w){var I={position:_,label:p};return w!==void 0&&(I.kind=w),I}g.create=E;function N(_){var p=_;return k.objectLiteral(p)&&a.is(p.position)&&(k.string(p.label)||k.typedArray(p.label,ve.is))&&(p.kind===void 0||$e.is(p.kind))&&p.textEdits===void 0||k.typedArray(p.textEdits,$.is)&&(p.tooltip===void 0||k.string(p.tooltip)||At.is(p.tooltip))&&(p.paddingLeft===void 0||k.boolean(p.paddingLeft))&&(p.paddingRight===void 0||k.boolean(p.paddingRight))}g.is=N})(ct=e.InlayHint||(e.InlayHint={}));var zt;(function(g){function E(N){var _=N;return k.objectLiteral(_)&&n.is(_.uri)&&k.string(_.name)}g.is=E})(zt=e.WorkspaceFolder||(e.WorkspaceFolder={})),e.EOL=[`
`,`\r
`,"\r"];var ei;(function(g){function E(w,I,ne,at){return new Cn(w,I,ne,at)}g.create=E;function N(w){var I=w;return!!(k.defined(I)&&k.string(I.uri)&&(k.undefined(I.languageId)||k.string(I.languageId))&&k.uinteger(I.lineCount)&&k.func(I.getText)&&k.func(I.positionAt)&&k.func(I.offsetAt))}g.is=N;function _(w,I){for(var ne=w.getText(),at=p(I,function(Zo,bc){var U_=Zo.range.start.line-bc.range.start.line;return U_===0?Zo.range.start.character-bc.range.start.character:U_}),Fe=ne.length,Zr=at.length-1;Zr>=0;Zr--){var en=at[Zr],ti=w.offsetAt(en.range.start),me=w.offsetAt(en.range.end);if(me<=Fe)ne=ne.substring(0,ti)+en.newText+ne.substring(me,ne.length);else throw new Error("Overlapping edit");Fe=ti}return ne}g.applyEdits=_;function p(w,I){if(w.length<=1)return w;var ne=w.length/2|0,at=w.slice(0,ne),Fe=w.slice(ne);p(at,I),p(Fe,I);for(var Zr=0,en=0,ti=0;Zr<at.length&&en<Fe.length;){var me=I(at[Zr],Fe[en]);me<=0?w[ti++]=at[Zr++]:w[ti++]=Fe[en++]}for(;Zr<at.length;)w[ti++]=at[Zr++];for(;en<Fe.length;)w[ti++]=Fe[en++];return w}})(ei=e.TextDocument||(e.TextDocument={}));var Cn=function(){function g(E,N,_,p){this._uri=E,this._languageId=N,this._version=_,this._content=p,this._lineOffsets=void 0}return Object.defineProperty(g.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),g.prototype.getText=function(E){if(E){var N=this.offsetAt(E.start),_=this.offsetAt(E.end);return this._content.substring(N,_)}return this._content},g.prototype.update=function(E,N){this._content=E.text,this._version=N,this._lineOffsets=void 0},g.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var E=[],N=this._content,_=!0,p=0;p<N.length;p++){_&&(E.push(p),_=!1);var w=N.charAt(p);_=w==="\r"||w===`
`,w==="\r"&&p+1<N.length&&N.charAt(p+1)===`
`&&p++}_&&N.length>0&&E.push(N.length),this._lineOffsets=E}return this._lineOffsets},g.prototype.positionAt=function(E){E=Math.max(Math.min(E,this._content.length),0);var N=this.getLineOffsets(),_=0,p=N.length;if(p===0)return a.create(0,E);for(;_<p;){var w=Math.floor((_+p)/2);N[w]>E?p=w:_=w+1}var I=_-1;return a.create(I,E-N[I])},g.prototype.offsetAt=function(E){var N=this.getLineOffsets();if(E.line>=N.length)return this._content.length;if(E.line<0)return 0;var _=N[E.line],p=E.line+1<N.length?N[E.line+1]:this._content.length;return Math.max(Math.min(_+E.character,p),_)},Object.defineProperty(g.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),g}(),k;(function(g){var E=Object.prototype.toString;function N(me){return typeof me<"u"}g.defined=N;function _(me){return typeof me>"u"}g.undefined=_;function p(me){return me===!0||me===!1}g.boolean=p;function w(me){return E.call(me)==="[object String]"}g.string=w;function I(me){return E.call(me)==="[object Number]"}g.number=I;function ne(me,Zo,bc){return E.call(me)==="[object Number]"&&Zo<=me&&me<=bc}g.numberRange=ne;function at(me){return E.call(me)==="[object Number]"&&-2147483648<=me&&me<=2147483647}g.integer=at;function Fe(me){return E.call(me)==="[object Number]"&&0<=me&&me<=2147483647}g.uinteger=Fe;function Zr(me){return E.call(me)==="[object Function]"}g.func=Zr;function en(me){return me!==null&&typeof me=="object"}g.objectLiteral=en;function ti(me,Zo){return Array.isArray(me)&&me.every(Zo)}g.typedArray=ti})(k||(k={}))})});var nt=d(ir=>{"use strict";Object.defineProperty(ir,"__esModule",{value:!0});ir.ProtocolNotificationType=ir.ProtocolNotificationType0=ir.ProtocolRequestType=ir.ProtocolRequestType0=ir.RegistrationType=ir.MessageDirection=void 0;var sa=ai(),nM;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(nM=ir.MessageDirection||(ir.MessageDirection={}));var Th=class{constructor(e){this.method=e}};ir.RegistrationType=Th;var Rh=class extends sa.RequestType0{constructor(e){super(e)}};ir.ProtocolRequestType0=Rh;var Ah=class extends sa.RequestType{constructor(e){super(e,sa.ParameterStructures.byName)}};ir.ProtocolRequestType=Ah;var bh=class extends sa.NotificationType0{constructor(e){super(e)}};ir.ProtocolNotificationType0=bh;var Sh=class extends sa.NotificationType{constructor(e){super(e,sa.ParameterStructures.byName)}};ir.ProtocolNotificationType=Sh});var Ic=d(ft=>{"use strict";Object.defineProperty(ft,"__esModule",{value:!0});ft.objectLiteral=ft.typedArray=ft.stringArray=ft.array=ft.func=ft.error=ft.number=ft.string=ft.boolean=void 0;function iM(t){return t===!0||t===!1}ft.boolean=iM;function hT(t){return typeof t=="string"||t instanceof String}ft.string=hT;function oM(t){return typeof t=="number"||t instanceof Number}ft.number=oM;function aM(t){return t instanceof Error}ft.error=aM;function sM(t){return typeof t=="function"}ft.func=sM;function mT(t){return Array.isArray(t)}ft.array=mT;function uM(t){return mT(t)&&t.every(e=>hT(e))}ft.stringArray=uM;function cM(t,e){return Array.isArray(t)&&t.every(e)}ft.typedArray=cM;function lM(t){return t!==null&&typeof t=="object"}ft.objectLiteral=lM});var yT=d(Xs=>{"use strict";Object.defineProperty(Xs,"__esModule",{value:!0});Xs.ImplementationRequest=void 0;var gT=nt(),dM;(function(t){t.method="textDocument/implementation",t.messageDirection=gT.MessageDirection.clientToServer,t.type=new gT.ProtocolRequestType(t.method)})(dM=Xs.ImplementationRequest||(Xs.ImplementationRequest={}))});var _T=d(Js=>{"use strict";Object.defineProperty(Js,"__esModule",{value:!0});Js.TypeDefinitionRequest=void 0;var vT=nt(),fM;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=vT.MessageDirection.clientToServer,t.type=new vT.ProtocolRequestType(t.method)})(fM=Js.TypeDefinitionRequest||(Js.TypeDefinitionRequest={}))});var TT=d(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.DidChangeWorkspaceFoldersNotification=Oi.WorkspaceFoldersRequest=void 0;var xc=nt(),pM;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=xc.MessageDirection.serverToClient,t.type=new xc.ProtocolRequestType0(t.method)})(pM=Oi.WorkspaceFoldersRequest||(Oi.WorkspaceFoldersRequest={}));var hM;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=xc.MessageDirection.clientToServer,t.type=new xc.ProtocolNotificationType(t.method)})(hM=Oi.DidChangeWorkspaceFoldersNotification||(Oi.DidChangeWorkspaceFoldersNotification={}))});var AT=d(Qs=>{"use strict";Object.defineProperty(Qs,"__esModule",{value:!0});Qs.ConfigurationRequest=void 0;var RT=nt(),mM;(function(t){t.method="workspace/configuration",t.messageDirection=RT.MessageDirection.serverToClient,t.type=new RT.ProtocolRequestType(t.method)})(mM=Qs.ConfigurationRequest||(Qs.ConfigurationRequest={}))});var bT=d(Di=>{"use strict";Object.defineProperty(Di,"__esModule",{value:!0});Di.ColorPresentationRequest=Di.DocumentColorRequest=void 0;var qc=nt(),gM;(function(t){t.method="textDocument/documentColor",t.messageDirection=qc.MessageDirection.clientToServer,t.type=new qc.ProtocolRequestType(t.method)})(gM=Di.DocumentColorRequest||(Di.DocumentColorRequest={}));var yM;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=qc.MessageDirection.clientToServer,t.type=new qc.ProtocolRequestType(t.method)})(yM=Di.ColorPresentationRequest||(Di.ColorPresentationRequest={}))});var CT=d(Zs=>{"use strict";Object.defineProperty(Zs,"__esModule",{value:!0});Zs.FoldingRangeRequest=void 0;var ST=nt(),vM;(function(t){t.method="textDocument/foldingRange",t.messageDirection=ST.MessageDirection.clientToServer,t.type=new ST.ProtocolRequestType(t.method)})(vM=Zs.FoldingRangeRequest||(Zs.FoldingRangeRequest={}))});var PT=d(eu=>{"use strict";Object.defineProperty(eu,"__esModule",{value:!0});eu.DeclarationRequest=void 0;var ET=nt(),_M;(function(t){t.method="textDocument/declaration",t.messageDirection=ET.MessageDirection.clientToServer,t.type=new ET.ProtocolRequestType(t.method)})(_M=eu.DeclarationRequest||(eu.DeclarationRequest={}))});var kT=d(tu=>{"use strict";Object.defineProperty(tu,"__esModule",{value:!0});tu.SelectionRangeRequest=void 0;var NT=nt(),TM;(function(t){t.method="textDocument/selectionRange",t.messageDirection=NT.MessageDirection.clientToServer,t.type=new NT.ProtocolRequestType(t.method)})(TM=tu.SelectionRangeRequest||(tu.SelectionRangeRequest={}))});var wT=d(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});nn.WorkDoneProgressCancelNotification=nn.WorkDoneProgressCreateRequest=nn.WorkDoneProgress=void 0;var RM=ai(),Lc=nt(),AM;(function(t){t.type=new RM.ProgressType;function e(r){return r===t.type}t.is=e})(AM=nn.WorkDoneProgress||(nn.WorkDoneProgress={}));var bM;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=Lc.MessageDirection.serverToClient,t.type=new Lc.ProtocolRequestType(t.method)})(bM=nn.WorkDoneProgressCreateRequest||(nn.WorkDoneProgressCreateRequest={}));var SM;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=Lc.MessageDirection.clientToServer,t.type=new Lc.ProtocolNotificationType(t.method)})(SM=nn.WorkDoneProgressCancelNotification||(nn.WorkDoneProgressCancelNotification={}))});var OT=d(on=>{"use strict";Object.defineProperty(on,"__esModule",{value:!0});on.CallHierarchyOutgoingCallsRequest=on.CallHierarchyIncomingCallsRequest=on.CallHierarchyPrepareRequest=void 0;var ua=nt(),CM;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=ua.MessageDirection.clientToServer,t.type=new ua.ProtocolRequestType(t.method)})(CM=on.CallHierarchyPrepareRequest||(on.CallHierarchyPrepareRequest={}));var EM;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=ua.MessageDirection.clientToServer,t.type=new ua.ProtocolRequestType(t.method)})(EM=on.CallHierarchyIncomingCallsRequest||(on.CallHierarchyIncomingCallsRequest={}));var PM;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=ua.MessageDirection.clientToServer,t.type=new ua.ProtocolRequestType(t.method)})(PM=on.CallHierarchyOutgoingCallsRequest||(on.CallHierarchyOutgoingCallsRequest={}))});var DT=d(pt=>{"use strict";Object.defineProperty(pt,"__esModule",{value:!0});pt.SemanticTokensRefreshRequest=pt.SemanticTokensRangeRequest=pt.SemanticTokensDeltaRequest=pt.SemanticTokensRequest=pt.SemanticTokensRegistrationType=pt.TokenFormat=void 0;var si=nt(),NM;(function(t){t.Relative="relative"})(NM=pt.TokenFormat||(pt.TokenFormat={}));var Mc;(function(t){t.method="textDocument/semanticTokens",t.type=new si.RegistrationType(t.method)})(Mc=pt.SemanticTokensRegistrationType||(pt.SemanticTokensRegistrationType={}));var kM;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=si.MessageDirection.clientToServer,t.type=new si.ProtocolRequestType(t.method),t.registrationMethod=Mc.method})(kM=pt.SemanticTokensRequest||(pt.SemanticTokensRequest={}));var wM;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=si.MessageDirection.clientToServer,t.type=new si.ProtocolRequestType(t.method),t.registrationMethod=Mc.method})(wM=pt.SemanticTokensDeltaRequest||(pt.SemanticTokensDeltaRequest={}));var OM;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=si.MessageDirection.clientToServer,t.type=new si.ProtocolRequestType(t.method),t.registrationMethod=Mc.method})(OM=pt.SemanticTokensRangeRequest||(pt.SemanticTokensRangeRequest={}));var DM;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=si.MessageDirection.clientToServer,t.type=new si.ProtocolRequestType0(t.method)})(DM=pt.SemanticTokensRefreshRequest||(pt.SemanticTokensRefreshRequest={}))});var xT=d(ru=>{"use strict";Object.defineProperty(ru,"__esModule",{value:!0});ru.ShowDocumentRequest=void 0;var IT=nt(),IM;(function(t){t.method="window/showDocument",t.messageDirection=IT.MessageDirection.serverToClient,t.type=new IT.ProtocolRequestType(t.method)})(IM=ru.ShowDocumentRequest||(ru.ShowDocumentRequest={}))});var LT=d(nu=>{"use strict";Object.defineProperty(nu,"__esModule",{value:!0});nu.LinkedEditingRangeRequest=void 0;var qT=nt(),xM;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=qT.MessageDirection.clientToServer,t.type=new qT.ProtocolRequestType(t.method)})(xM=nu.LinkedEditingRangeRequest||(nu.LinkedEditingRangeRequest={}))});var MT=d(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.WillDeleteFilesRequest=it.DidDeleteFilesNotification=it.DidRenameFilesNotification=it.WillRenameFilesRequest=it.DidCreateFilesNotification=it.WillCreateFilesRequest=it.FileOperationPatternKind=void 0;var Dr=nt(),qM;(function(t){t.file="file",t.folder="folder"})(qM=it.FileOperationPatternKind||(it.FileOperationPatternKind={}));var LM;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Dr.MessageDirection.clientToServer,t.type=new Dr.ProtocolRequestType(t.method)})(LM=it.WillCreateFilesRequest||(it.WillCreateFilesRequest={}));var MM;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Dr.MessageDirection.clientToServer,t.type=new Dr.ProtocolNotificationType(t.method)})(MM=it.DidCreateFilesNotification||(it.DidCreateFilesNotification={}));var $M;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Dr.MessageDirection.clientToServer,t.type=new Dr.ProtocolRequestType(t.method)})($M=it.WillRenameFilesRequest||(it.WillRenameFilesRequest={}));var FM;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Dr.MessageDirection.clientToServer,t.type=new Dr.ProtocolNotificationType(t.method)})(FM=it.DidRenameFilesNotification||(it.DidRenameFilesNotification={}));var jM;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Dr.MessageDirection.clientToServer,t.type=new Dr.ProtocolNotificationType(t.method)})(jM=it.DidDeleteFilesNotification||(it.DidDeleteFilesNotification={}));var GM;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Dr.MessageDirection.clientToServer,t.type=new Dr.ProtocolRequestType(t.method)})(GM=it.WillDeleteFilesRequest||(it.WillDeleteFilesRequest={}))});var FT=d(an=>{"use strict";Object.defineProperty(an,"__esModule",{value:!0});an.MonikerRequest=an.MonikerKind=an.UniquenessLevel=void 0;var $T=nt(),UM;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(UM=an.UniquenessLevel||(an.UniquenessLevel={}));var HM;(function(t){t.$import="import",t.$export="export",t.local="local"})(HM=an.MonikerKind||(an.MonikerKind={}));var WM;(function(t){t.method="textDocument/moniker",t.messageDirection=$T.MessageDirection.clientToServer,t.type=new $T.ProtocolRequestType(t.method)})(WM=an.MonikerRequest||(an.MonikerRequest={}))});var jT=d(sn=>{"use strict";Object.defineProperty(sn,"__esModule",{value:!0});sn.TypeHierarchySubtypesRequest=sn.TypeHierarchySupertypesRequest=sn.TypeHierarchyPrepareRequest=void 0;var ca=nt(),KM;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=ca.MessageDirection.clientToServer,t.type=new ca.ProtocolRequestType(t.method)})(KM=sn.TypeHierarchyPrepareRequest||(sn.TypeHierarchyPrepareRequest={}));var BM;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=ca.MessageDirection.clientToServer,t.type=new ca.ProtocolRequestType(t.method)})(BM=sn.TypeHierarchySupertypesRequest||(sn.TypeHierarchySupertypesRequest={}));var zM;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=ca.MessageDirection.clientToServer,t.type=new ca.ProtocolRequestType(t.method)})(zM=sn.TypeHierarchySubtypesRequest||(sn.TypeHierarchySubtypesRequest={}))});var GT=d(Ii=>{"use strict";Object.defineProperty(Ii,"__esModule",{value:!0});Ii.InlineValueRefreshRequest=Ii.InlineValueRequest=void 0;var $c=nt(),VM;(function(t){t.method="textDocument/inlineValue",t.messageDirection=$c.MessageDirection.clientToServer,t.type=new $c.ProtocolRequestType(t.method)})(VM=Ii.InlineValueRequest||(Ii.InlineValueRequest={}));var YM;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=$c.MessageDirection.clientToServer,t.type=new $c.ProtocolRequestType0(t.method)})(YM=Ii.InlineValueRefreshRequest||(Ii.InlineValueRefreshRequest={}))});var UT=d(un=>{"use strict";Object.defineProperty(un,"__esModule",{value:!0});un.InlayHintRefreshRequest=un.InlayHintResolveRequest=un.InlayHintRequest=void 0;var la=nt(),XM;(function(t){t.method="textDocument/inlayHint",t.messageDirection=la.MessageDirection.clientToServer,t.type=new la.ProtocolRequestType(t.method)})(XM=un.InlayHintRequest||(un.InlayHintRequest={}));var JM;(function(t){t.method="inlayHint/resolve",t.messageDirection=la.MessageDirection.clientToServer,t.type=new la.ProtocolRequestType(t.method)})(JM=un.InlayHintResolveRequest||(un.InlayHintResolveRequest={}));var QM;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=la.MessageDirection.clientToServer,t.type=new la.ProtocolRequestType0(t.method)})(QM=un.InlayHintRefreshRequest||(un.InlayHintRefreshRequest={}))});var WT=d(jt=>{"use strict";Object.defineProperty(jt,"__esModule",{value:!0});jt.DiagnosticRefreshRequest=jt.WorkspaceDiagnosticRequest=jt.DocumentDiagnosticRequest=jt.DocumentDiagnosticReportKind=jt.DiagnosticServerCancellationData=void 0;var HT=ai(),ZM=Ic(),da=nt(),e1;(function(t){function e(r){let n=r;return n&&ZM.boolean(n.retriggerRequest)}t.is=e})(e1=jt.DiagnosticServerCancellationData||(jt.DiagnosticServerCancellationData={}));var t1;(function(t){t.Full="full",t.Unchanged="unchanged"})(t1=jt.DocumentDiagnosticReportKind||(jt.DocumentDiagnosticReportKind={}));var r1;(function(t){t.method="textDocument/diagnostic",t.messageDirection=da.MessageDirection.clientToServer,t.type=new da.ProtocolRequestType(t.method),t.partialResult=new HT.ProgressType})(r1=jt.DocumentDiagnosticRequest||(jt.DocumentDiagnosticRequest={}));var n1;(function(t){t.method="workspace/diagnostic",t.messageDirection=da.MessageDirection.clientToServer,t.type=new da.ProtocolRequestType(t.method),t.partialResult=new HT.ProgressType})(n1=jt.WorkspaceDiagnosticRequest||(jt.WorkspaceDiagnosticRequest={}));var i1;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=da.MessageDirection.clientToServer,t.type=new da.ProtocolRequestType0(t.method)})(i1=jt.DiagnosticRefreshRequest||(jt.DiagnosticRefreshRequest={}))});var zT=d(Re=>{"use strict";Object.defineProperty(Re,"__esModule",{value:!0});Re.DidCloseNotebookDocumentNotification=Re.DidSaveNotebookDocumentNotification=Re.DidChangeNotebookDocumentNotification=Re.NotebookCellArrayChange=Re.DidOpenNotebookDocumentNotification=Re.NotebookDocumentSyncRegistrationType=Re.NotebookDocument=Re.NotebookCell=Re.ExecutionSummary=Re.NotebookCellKind=void 0;var iu=aa(),cn=Ic(),En=nt(),KT;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(KT=Re.NotebookCellKind||(Re.NotebookCellKind={}));var BT;(function(t){function e(i,o){let a={executionOrder:i};return(o===!0||o===!1)&&(a.success=o),a}t.create=e;function r(i){let o=i;return cn.objectLiteral(o)&&iu.uinteger.is(o.executionOrder)&&(o.success===void 0||cn.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(BT=Re.ExecutionSummary||(Re.ExecutionSummary={}));var Ch;(function(t){function e(o,a){return{kind:o,document:a}}t.create=e;function r(o){let a=o;return cn.objectLiteral(a)&&KT.is(a.kind)&&iu.DocumentUri.is(a.document)&&(a.metadata===void 0||cn.objectLiteral(a.metadata))}t.is=r;function n(o,a){let s=new Set;return o.document!==a.document&&s.add("document"),o.kind!==a.kind&&s.add("kind"),o.executionSummary!==a.executionSummary&&s.add("executionSummary"),(o.metadata!==void 0||a.metadata!==void 0)&&!i(o.metadata,a.metadata)&&s.add("metadata"),(o.executionSummary!==void 0||a.executionSummary!==void 0)&&!BT.equals(o.executionSummary,a.executionSummary)&&s.add("executionSummary"),s}t.diff=n;function i(o,a){if(o===a)return!0;if(o==null||a===null||a===void 0||typeof o!=typeof a||typeof o!="object")return!1;let s=Array.isArray(o),u=Array.isArray(a);if(s!==u)return!1;if(s&&u){if(o.length!==a.length)return!1;for(let c=0;c<o.length;c++)if(!i(o[c],a[c]))return!1}if(cn.objectLiteral(o)&&cn.objectLiteral(a)){let c=Object.keys(o),l=Object.keys(a);if(c.length!==l.length||(c.sort(),l.sort(),!i(c,l)))return!1;for(let f=0;f<c.length;f++){let h=c[f];if(!i(o[h],a[h]))return!1}}return!0}})(Ch=Re.NotebookCell||(Re.NotebookCell={}));var o1;(function(t){function e(n,i,o,a){return{uri:n,notebookType:i,version:o,cells:a}}t.create=e;function r(n){let i=n;return cn.objectLiteral(i)&&cn.string(i.uri)&&iu.integer.is(i.version)&&cn.typedArray(i.cells,Ch.is)}t.is=r})(o1=Re.NotebookDocument||(Re.NotebookDocument={}));var ou;(function(t){t.method="notebookDocument/sync",t.messageDirection=En.MessageDirection.clientToServer,t.type=new En.RegistrationType(t.method)})(ou=Re.NotebookDocumentSyncRegistrationType||(Re.NotebookDocumentSyncRegistrationType={}));var a1;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=En.MessageDirection.clientToServer,t.type=new En.ProtocolNotificationType(t.method),t.registrationMethod=ou.method})(a1=Re.DidOpenNotebookDocumentNotification||(Re.DidOpenNotebookDocumentNotification={}));var s1;(function(t){function e(n){let i=n;return cn.objectLiteral(i)&&iu.uinteger.is(i.start)&&iu.uinteger.is(i.deleteCount)&&(i.cells===void 0||cn.typedArray(i.cells,Ch.is))}t.is=e;function r(n,i,o){let a={start:n,deleteCount:i};return o!==void 0&&(a.cells=o),a}t.create=r})(s1=Re.NotebookCellArrayChange||(Re.NotebookCellArrayChange={}));var u1;(function(t){t.method="notebookDocument/didChange",t.messageDirection=En.MessageDirection.clientToServer,t.type=new En.ProtocolNotificationType(t.method),t.registrationMethod=ou.method})(u1=Re.DidChangeNotebookDocumentNotification||(Re.DidChangeNotebookDocumentNotification={}));var c1;(function(t){t.method="notebookDocument/didSave",t.messageDirection=En.MessageDirection.clientToServer,t.type=new En.ProtocolNotificationType(t.method),t.registrationMethod=ou.method})(c1=Re.DidSaveNotebookDocumentNotification||(Re.DidSaveNotebookDocumentNotification={}));var l1;(function(t){t.method="notebookDocument/didClose",t.messageDirection=En.MessageDirection.clientToServer,t.type=new En.ProtocolNotificationType(t.method),t.registrationMethod=ou.method})(l1=Re.DidCloseNotebookDocumentNotification||(Re.DidCloseNotebookDocumentNotification={}))});var rR=d(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.WorkspaceSymbolRequest=y.CodeActionResolveRequest=y.CodeActionRequest=y.DocumentSymbolRequest=y.DocumentHighlightRequest=y.ReferencesRequest=y.DefinitionRequest=y.SignatureHelpRequest=y.SignatureHelpTriggerKind=y.HoverRequest=y.CompletionResolveRequest=y.CompletionRequest=y.CompletionTriggerKind=y.PublishDiagnosticsNotification=y.WatchKind=y.RelativePattern=y.FileChangeType=y.DidChangeWatchedFilesNotification=y.WillSaveTextDocumentWaitUntilRequest=y.WillSaveTextDocumentNotification=y.TextDocumentSaveReason=y.DidSaveTextDocumentNotification=y.DidCloseTextDocumentNotification=y.DidChangeTextDocumentNotification=y.TextDocumentContentChangeEvent=y.DidOpenTextDocumentNotification=y.TextDocumentSyncKind=y.TelemetryEventNotification=y.LogMessageNotification=y.ShowMessageRequest=y.ShowMessageNotification=y.MessageType=y.DidChangeConfigurationNotification=y.ExitNotification=y.ShutdownRequest=y.InitializedNotification=y.InitializeErrorCodes=y.InitializeRequest=y.WorkDoneProgressOptions=y.TextDocumentRegistrationOptions=y.StaticRegistrationOptions=y.PositionEncodingKind=y.FailureHandlingKind=y.ResourceOperationKind=y.UnregistrationRequest=y.RegistrationRequest=y.DocumentSelector=y.NotebookCellTextDocumentFilter=y.NotebookDocumentFilter=y.TextDocumentFilter=void 0;y.TypeHierarchySubtypesRequest=y.TypeHierarchyPrepareRequest=y.MonikerRequest=y.MonikerKind=y.UniquenessLevel=y.WillDeleteFilesRequest=y.DidDeleteFilesNotification=y.WillRenameFilesRequest=y.DidRenameFilesNotification=y.WillCreateFilesRequest=y.DidCreateFilesNotification=y.FileOperationPatternKind=y.LinkedEditingRangeRequest=y.ShowDocumentRequest=y.SemanticTokensRegistrationType=y.SemanticTokensRefreshRequest=y.SemanticTokensRangeRequest=y.SemanticTokensDeltaRequest=y.SemanticTokensRequest=y.TokenFormat=y.CallHierarchyPrepareRequest=y.CallHierarchyOutgoingCallsRequest=y.CallHierarchyIncomingCallsRequest=y.WorkDoneProgressCancelNotification=y.WorkDoneProgressCreateRequest=y.WorkDoneProgress=y.SelectionRangeRequest=y.DeclarationRequest=y.FoldingRangeRequest=y.ColorPresentationRequest=y.DocumentColorRequest=y.ConfigurationRequest=y.DidChangeWorkspaceFoldersNotification=y.WorkspaceFoldersRequest=y.TypeDefinitionRequest=y.ImplementationRequest=y.ApplyWorkspaceEditRequest=y.ExecuteCommandRequest=y.PrepareRenameRequest=y.RenameRequest=y.PrepareSupportDefaultBehavior=y.DocumentOnTypeFormattingRequest=y.DocumentRangeFormattingRequest=y.DocumentFormattingRequest=y.DocumentLinkResolveRequest=y.DocumentLinkRequest=y.CodeLensRefreshRequest=y.CodeLensResolveRequest=y.CodeLensRequest=y.WorkspaceSymbolResolveRequest=void 0;y.DidCloseNotebookDocumentNotification=y.DidSaveNotebookDocumentNotification=y.DidChangeNotebookDocumentNotification=y.NotebookCellArrayChange=y.DidOpenNotebookDocumentNotification=y.NotebookDocumentSyncRegistrationType=y.NotebookDocument=y.NotebookCell=y.ExecutionSummary=y.NotebookCellKind=y.DiagnosticRefreshRequest=y.WorkspaceDiagnosticRequest=y.DocumentDiagnosticRequest=y.DocumentDiagnosticReportKind=y.DiagnosticServerCancellationData=y.InlayHintRefreshRequest=y.InlayHintResolveRequest=y.InlayHintRequest=y.InlineValueRefreshRequest=y.InlineValueRequest=y.TypeHierarchySupertypesRequest=void 0;var M=nt(),VT=aa(),Gt=Ic(),d1=yT();Object.defineProperty(y,"ImplementationRequest",{enumerable:!0,get:function(){return d1.ImplementationRequest}});var f1=_T();Object.defineProperty(y,"TypeDefinitionRequest",{enumerable:!0,get:function(){return f1.TypeDefinitionRequest}});var YT=TT();Object.defineProperty(y,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return YT.WorkspaceFoldersRequest}});Object.defineProperty(y,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return YT.DidChangeWorkspaceFoldersNotification}});var p1=AT();Object.defineProperty(y,"ConfigurationRequest",{enumerable:!0,get:function(){return p1.ConfigurationRequest}});var XT=bT();Object.defineProperty(y,"DocumentColorRequest",{enumerable:!0,get:function(){return XT.DocumentColorRequest}});Object.defineProperty(y,"ColorPresentationRequest",{enumerable:!0,get:function(){return XT.ColorPresentationRequest}});var h1=CT();Object.defineProperty(y,"FoldingRangeRequest",{enumerable:!0,get:function(){return h1.FoldingRangeRequest}});var m1=PT();Object.defineProperty(y,"DeclarationRequest",{enumerable:!0,get:function(){return m1.DeclarationRequest}});var g1=kT();Object.defineProperty(y,"SelectionRangeRequest",{enumerable:!0,get:function(){return g1.SelectionRangeRequest}});var Eh=wT();Object.defineProperty(y,"WorkDoneProgress",{enumerable:!0,get:function(){return Eh.WorkDoneProgress}});Object.defineProperty(y,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return Eh.WorkDoneProgressCreateRequest}});Object.defineProperty(y,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return Eh.WorkDoneProgressCancelNotification}});var Ph=OT();Object.defineProperty(y,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return Ph.CallHierarchyIncomingCallsRequest}});Object.defineProperty(y,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return Ph.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(y,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return Ph.CallHierarchyPrepareRequest}});var fa=DT();Object.defineProperty(y,"TokenFormat",{enumerable:!0,get:function(){return fa.TokenFormat}});Object.defineProperty(y,"SemanticTokensRequest",{enumerable:!0,get:function(){return fa.SemanticTokensRequest}});Object.defineProperty(y,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return fa.SemanticTokensDeltaRequest}});Object.defineProperty(y,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return fa.SemanticTokensRangeRequest}});Object.defineProperty(y,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return fa.SemanticTokensRefreshRequest}});Object.defineProperty(y,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return fa.SemanticTokensRegistrationType}});var y1=xT();Object.defineProperty(y,"ShowDocumentRequest",{enumerable:!0,get:function(){return y1.ShowDocumentRequest}});var v1=LT();Object.defineProperty(y,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return v1.LinkedEditingRangeRequest}});var vo=MT();Object.defineProperty(y,"FileOperationPatternKind",{enumerable:!0,get:function(){return vo.FileOperationPatternKind}});Object.defineProperty(y,"DidCreateFilesNotification",{enumerable:!0,get:function(){return vo.DidCreateFilesNotification}});Object.defineProperty(y,"WillCreateFilesRequest",{enumerable:!0,get:function(){return vo.WillCreateFilesRequest}});Object.defineProperty(y,"DidRenameFilesNotification",{enumerable:!0,get:function(){return vo.DidRenameFilesNotification}});Object.defineProperty(y,"WillRenameFilesRequest",{enumerable:!0,get:function(){return vo.WillRenameFilesRequest}});Object.defineProperty(y,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return vo.DidDeleteFilesNotification}});Object.defineProperty(y,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return vo.WillDeleteFilesRequest}});var Nh=FT();Object.defineProperty(y,"UniquenessLevel",{enumerable:!0,get:function(){return Nh.UniquenessLevel}});Object.defineProperty(y,"MonikerKind",{enumerable:!0,get:function(){return Nh.MonikerKind}});Object.defineProperty(y,"MonikerRequest",{enumerable:!0,get:function(){return Nh.MonikerRequest}});var kh=jT();Object.defineProperty(y,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return kh.TypeHierarchyPrepareRequest}});Object.defineProperty(y,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return kh.TypeHierarchySubtypesRequest}});Object.defineProperty(y,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return kh.TypeHierarchySupertypesRequest}});var JT=GT();Object.defineProperty(y,"InlineValueRequest",{enumerable:!0,get:function(){return JT.InlineValueRequest}});Object.defineProperty(y,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return JT.InlineValueRefreshRequest}});var wh=UT();Object.defineProperty(y,"InlayHintRequest",{enumerable:!0,get:function(){return wh.InlayHintRequest}});Object.defineProperty(y,"InlayHintResolveRequest",{enumerable:!0,get:function(){return wh.InlayHintResolveRequest}});Object.defineProperty(y,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return wh.InlayHintRefreshRequest}});var au=WT();Object.defineProperty(y,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return au.DiagnosticServerCancellationData}});Object.defineProperty(y,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return au.DocumentDiagnosticReportKind}});Object.defineProperty(y,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return au.DocumentDiagnosticRequest}});Object.defineProperty(y,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return au.WorkspaceDiagnosticRequest}});Object.defineProperty(y,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return au.DiagnosticRefreshRequest}});var Pn=zT();Object.defineProperty(y,"NotebookCellKind",{enumerable:!0,get:function(){return Pn.NotebookCellKind}});Object.defineProperty(y,"ExecutionSummary",{enumerable:!0,get:function(){return Pn.ExecutionSummary}});Object.defineProperty(y,"NotebookCell",{enumerable:!0,get:function(){return Pn.NotebookCell}});Object.defineProperty(y,"NotebookDocument",{enumerable:!0,get:function(){return Pn.NotebookDocument}});Object.defineProperty(y,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return Pn.NotebookDocumentSyncRegistrationType}});Object.defineProperty(y,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return Pn.DidOpenNotebookDocumentNotification}});Object.defineProperty(y,"NotebookCellArrayChange",{enumerable:!0,get:function(){return Pn.NotebookCellArrayChange}});Object.defineProperty(y,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return Pn.DidChangeNotebookDocumentNotification}});Object.defineProperty(y,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return Pn.DidSaveNotebookDocumentNotification}});Object.defineProperty(y,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return Pn.DidCloseNotebookDocumentNotification}});var QT;(function(t){function e(r){let n=r;return Gt.string(n.language)||Gt.string(n.scheme)||Gt.string(n.pattern)}t.is=e})(QT=y.TextDocumentFilter||(y.TextDocumentFilter={}));var ZT;(function(t){function e(r){let n=r;return Gt.objectLiteral(n)&&(Gt.string(n.notebookType)||Gt.string(n.scheme)||Gt.string(n.pattern))}t.is=e})(ZT=y.NotebookDocumentFilter||(y.NotebookDocumentFilter={}));var eR;(function(t){function e(r){let n=r;return Gt.objectLiteral(n)&&(Gt.string(n.notebook)||ZT.is(n.notebook))&&(n.language===void 0||Gt.string(n.language))}t.is=e})(eR=y.NotebookCellTextDocumentFilter||(y.NotebookCellTextDocumentFilter={}));var tR;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!Gt.string(n)&&!QT.is(n)&&!eR.is(n))return!1;return!0}t.is=e})(tR=y.DocumentSelector||(y.DocumentSelector={}));var _1;(function(t){t.method="client/registerCapability",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType(t.method)})(_1=y.RegistrationRequest||(y.RegistrationRequest={}));var T1;(function(t){t.method="client/unregisterCapability",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType(t.method)})(T1=y.UnregistrationRequest||(y.UnregistrationRequest={}));var R1;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(R1=y.ResourceOperationKind||(y.ResourceOperationKind={}));var A1;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(A1=y.FailureHandlingKind||(y.FailureHandlingKind={}));var b1;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(b1=y.PositionEncodingKind||(y.PositionEncodingKind={}));var S1;(function(t){function e(r){let n=r;return n&&Gt.string(n.id)&&n.id.length>0}t.hasId=e})(S1=y.StaticRegistrationOptions||(y.StaticRegistrationOptions={}));var C1;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||tR.is(n.documentSelector))}t.is=e})(C1=y.TextDocumentRegistrationOptions||(y.TextDocumentRegistrationOptions={}));var E1;(function(t){function e(n){let i=n;return Gt.objectLiteral(i)&&(i.workDoneProgress===void 0||Gt.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&Gt.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(E1=y.WorkDoneProgressOptions||(y.WorkDoneProgressOptions={}));var P1;(function(t){t.method="initialize",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(P1=y.InitializeRequest||(y.InitializeRequest={}));var N1;(function(t){t.unknownProtocolVersion=1})(N1=y.InitializeErrorCodes||(y.InitializeErrorCodes={}));var k1;(function(t){t.method="initialized",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(k1=y.InitializedNotification||(y.InitializedNotification={}));var w1;(function(t){t.method="shutdown",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType0(t.method)})(w1=y.ShutdownRequest||(y.ShutdownRequest={}));var O1;(function(t){t.method="exit",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType0(t.method)})(O1=y.ExitNotification||(y.ExitNotification={}));var D1;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(D1=y.DidChangeConfigurationNotification||(y.DidChangeConfigurationNotification={}));var I1;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4})(I1=y.MessageType||(y.MessageType={}));var x1;(function(t){t.method="window/showMessage",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolNotificationType(t.method)})(x1=y.ShowMessageNotification||(y.ShowMessageNotification={}));var q1;(function(t){t.method="window/showMessageRequest",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType(t.method)})(q1=y.ShowMessageRequest||(y.ShowMessageRequest={}));var L1;(function(t){t.method="window/logMessage",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolNotificationType(t.method)})(L1=y.LogMessageNotification||(y.LogMessageNotification={}));var M1;(function(t){t.method="telemetry/event",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolNotificationType(t.method)})(M1=y.TelemetryEventNotification||(y.TelemetryEventNotification={}));var $1;(function(t){t.None=0,t.Full=1,t.Incremental=2})($1=y.TextDocumentSyncKind||(y.TextDocumentSyncKind={}));var F1;(function(t){t.method="textDocument/didOpen",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(F1=y.DidOpenTextDocumentNotification||(y.DidOpenTextDocumentNotification={}));var j1;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(j1=y.TextDocumentContentChangeEvent||(y.TextDocumentContentChangeEvent={}));var G1;(function(t){t.method="textDocument/didChange",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(G1=y.DidChangeTextDocumentNotification||(y.DidChangeTextDocumentNotification={}));var U1;(function(t){t.method="textDocument/didClose",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(U1=y.DidCloseTextDocumentNotification||(y.DidCloseTextDocumentNotification={}));var H1;(function(t){t.method="textDocument/didSave",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(H1=y.DidSaveTextDocumentNotification||(y.DidSaveTextDocumentNotification={}));var W1;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(W1=y.TextDocumentSaveReason||(y.TextDocumentSaveReason={}));var K1;(function(t){t.method="textDocument/willSave",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(K1=y.WillSaveTextDocumentNotification||(y.WillSaveTextDocumentNotification={}));var B1;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(B1=y.WillSaveTextDocumentWaitUntilRequest||(y.WillSaveTextDocumentWaitUntilRequest={}));var z1;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolNotificationType(t.method)})(z1=y.DidChangeWatchedFilesNotification||(y.DidChangeWatchedFilesNotification={}));var V1;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(V1=y.FileChangeType||(y.FileChangeType={}));var Y1;(function(t){function e(r){let n=r;return Gt.objectLiteral(n)&&(VT.URI.is(n.baseUri)||VT.WorkspaceFolder.is(n.baseUri))&&Gt.string(n.pattern)}t.is=e})(Y1=y.RelativePattern||(y.RelativePattern={}));var X1;(function(t){t.Create=1,t.Change=2,t.Delete=4})(X1=y.WatchKind||(y.WatchKind={}));var J1;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolNotificationType(t.method)})(J1=y.PublishDiagnosticsNotification||(y.PublishDiagnosticsNotification={}));var Q1;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(Q1=y.CompletionTriggerKind||(y.CompletionTriggerKind={}));var Z1;(function(t){t.method="textDocument/completion",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(Z1=y.CompletionRequest||(y.CompletionRequest={}));var e$;(function(t){t.method="completionItem/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(e$=y.CompletionResolveRequest||(y.CompletionResolveRequest={}));var t$;(function(t){t.method="textDocument/hover",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(t$=y.HoverRequest||(y.HoverRequest={}));var r$;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(r$=y.SignatureHelpTriggerKind||(y.SignatureHelpTriggerKind={}));var n$;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(n$=y.SignatureHelpRequest||(y.SignatureHelpRequest={}));var i$;(function(t){t.method="textDocument/definition",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(i$=y.DefinitionRequest||(y.DefinitionRequest={}));var o$;(function(t){t.method="textDocument/references",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(o$=y.ReferencesRequest||(y.ReferencesRequest={}));var a$;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(a$=y.DocumentHighlightRequest||(y.DocumentHighlightRequest={}));var s$;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(s$=y.DocumentSymbolRequest||(y.DocumentSymbolRequest={}));var u$;(function(t){t.method="textDocument/codeAction",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(u$=y.CodeActionRequest||(y.CodeActionRequest={}));var c$;(function(t){t.method="codeAction/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(c$=y.CodeActionResolveRequest||(y.CodeActionResolveRequest={}));var l$;(function(t){t.method="workspace/symbol",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(l$=y.WorkspaceSymbolRequest||(y.WorkspaceSymbolRequest={}));var d$;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(d$=y.WorkspaceSymbolResolveRequest||(y.WorkspaceSymbolResolveRequest={}));var f$;(function(t){t.method="textDocument/codeLens",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(f$=y.CodeLensRequest||(y.CodeLensRequest={}));var p$;(function(t){t.method="codeLens/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(p$=y.CodeLensResolveRequest||(y.CodeLensResolveRequest={}));var h$;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType0(t.method)})(h$=y.CodeLensRefreshRequest||(y.CodeLensRefreshRequest={}));var m$;(function(t){t.method="textDocument/documentLink",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(m$=y.DocumentLinkRequest||(y.DocumentLinkRequest={}));var g$;(function(t){t.method="documentLink/resolve",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(g$=y.DocumentLinkResolveRequest||(y.DocumentLinkResolveRequest={}));var y$;(function(t){t.method="textDocument/formatting",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(y$=y.DocumentFormattingRequest||(y.DocumentFormattingRequest={}));var v$;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(v$=y.DocumentRangeFormattingRequest||(y.DocumentRangeFormattingRequest={}));var _$;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(_$=y.DocumentOnTypeFormattingRequest||(y.DocumentOnTypeFormattingRequest={}));var T$;(function(t){t.Identifier=1})(T$=y.PrepareSupportDefaultBehavior||(y.PrepareSupportDefaultBehavior={}));var R$;(function(t){t.method="textDocument/rename",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(R$=y.RenameRequest||(y.RenameRequest={}));var A$;(function(t){t.method="textDocument/prepareRename",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(A$=y.PrepareRenameRequest||(y.PrepareRenameRequest={}));var b$;(function(t){t.method="workspace/executeCommand",t.messageDirection=M.MessageDirection.clientToServer,t.type=new M.ProtocolRequestType(t.method)})(b$=y.ExecuteCommandRequest||(y.ExecuteCommandRequest={}));var S$;(function(t){t.method="workspace/applyEdit",t.messageDirection=M.MessageDirection.serverToClient,t.type=new M.ProtocolRequestType("workspace/applyEdit")})(S$=y.ApplyWorkspaceEditRequest||(y.ApplyWorkspaceEditRequest={}))});var iR=d(Fc=>{"use strict";Object.defineProperty(Fc,"__esModule",{value:!0});Fc.createProtocolConnection=void 0;var nR=ai();function C$(t,e,r,n){return nR.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,nR.createMessageConnection)(t,e,r,n)}Fc.createProtocolConnection=C$});var oR=d(or=>{"use strict";var E$=or&&or.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),jc=or&&or.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&E$(e,t,r)};Object.defineProperty(or,"__esModule",{value:!0});or.LSPErrorCodes=or.createProtocolConnection=void 0;jc(ai(),or);jc(aa(),or);jc(nt(),or);jc(rR(),or);var P$=iR();Object.defineProperty(or,"createProtocolConnection",{enumerable:!0,get:function(){return P$.createProtocolConnection}});var N$;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(N$=or.LSPErrorCodes||(or.LSPErrorCodes={}))});var ht=d(Nn=>{"use strict";var k$=Nn&&Nn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),aR=Nn&&Nn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&k$(e,t,r)};Object.defineProperty(Nn,"__esModule",{value:!0});Nn.createProtocolConnection=void 0;var w$=_h();aR(_h(),Nn);aR(oR(),Nn);function O$(t,e,r,n){return(0,w$.createMessageConnection)(t,e,r,n)}Nn.createProtocolConnection=O$});var Dh=d(xi=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.SemanticTokensBuilder=xi.SemanticTokensDiff=xi.SemanticTokensFeature=void 0;var Gc=ht(),D$=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(Gc.SemanticTokensRefreshRequest.type),on:e=>{let r=Gc.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=Gc.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=Gc.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};xi.SemanticTokensFeature=D$;var Uc=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let a=i-n+1,s=this.modifiedSequence.slice(n,o+1);return s.length===1&&s[0]===this.originalSequence[i]?[{start:n,deleteCount:a-1}]:[{start:n,deleteCount:a,data:s}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};xi.SemanticTokensDiff=Uc;var Oh=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let a=e,s=r;this._dataLen>0&&(a-=this._prevLine,a===0&&(s-=this._prevChar)),this._data[this._dataLen++]=a,this._data[this._dataLen++]=s,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new Uc(this._prevData,this._data).computeDiff()}:this.build()}};xi.SemanticTokensBuilder=Oh});var xh=d(Hc=>{"use strict";Object.defineProperty(Hc,"__esModule",{value:!0});Hc.TextDocuments=void 0;var _o=ht(),Ih=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new _o.Emitter,this._onDidOpen=new _o.Emitter,this._onDidClose=new _o.Emitter,this._onDidSave=new _o.Emitter,this._onWillSave=new _o.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=_o.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let a=Object.freeze({document:o});this._onDidOpen.fire(a),this._onDidChangeContent.fire(a)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:a}=i;if(a==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let s=this._syncedDocuments.get(i.uri);s!==void 0&&(s=this._configuration.update(s,o,a),this._syncedDocuments.set(i.uri,s),this._onDidChangeContent.fire(Object.freeze({document:s})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),_o.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};Hc.TextDocuments=Ih});var Lh=d(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.NotebookDocuments=pa.NotebookSyncFeature=void 0;var Ir=ht(),sR=xh(),I$=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(Ir.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(Ir.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(Ir.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(Ir.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};pa.NotebookSyncFeature=I$;var qi=class{onDidOpenTextDocument(e){return this.openHandler=e,Ir.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,Ir.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,Ir.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return qi.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return qi.NULL_DISPOSE}onDidSaveTextDocument(){return qi.NULL_DISPOSE}};qi.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var qh=class{constructor(e){e instanceof sR.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new sR.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Ir.Emitter,this._onDidChange=new Ir.Emitter,this._onDidSave=new Ir.Emitter,this._onDidClose=new Ir.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new qi,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let a=o.metadata,s=!1,u=i.change;u.metadata!==void 0&&(s=!0,o.metadata=u.metadata);let c=[],l=[],f=[],h=[];if(u.cells!==void 0){let C=u.cells;if(C.structure!==void 0){let b=C.structure.array;if(o.cells.splice(b.start,b.deleteCount,...b.cells!==void 0?b.cells:[]),C.structure.didOpen!==void 0)for(let A of C.structure.didOpen)r.openTextDocument({textDocument:A}),c.push(A.uri);if(C.structure.didClose)for(let A of C.structure.didClose)r.closeTextDocument({textDocument:A}),l.push(A.uri)}if(C.data!==void 0){let b=new Map(C.data.map(A=>[A.document,A]));for(let A=0;A<=o.cells.length;A++){let O=b.get(o.cells[A].document);if(O!==void 0){let $=o.cells.splice(A,1,O);if(f.push({old:$[0],new:O}),b.delete(O.document),b.size===0)break}}}if(C.textContent!==void 0)for(let b of C.textContent)r.changeTextDocument({textDocument:b.document,contentChanges:b.changes}),h.push(b.document.uri)}this.updateCellMap(o);let v={notebookDocument:o};s&&(v.metadata={old:a,new:o.metadata});let m=[];for(let C of c)m.push(this.getNotebookCell(C));let R=[];for(let C of l)R.push(this.getNotebookCell(C));let P=[];for(let C of h)P.push(this.getNotebookCell(C));(m.length>0||R.length>0||f.length>0||P.length>0)&&(v.cells={added:m,removed:R,changed:{data:f,textContent:P}}),(v.metadata!==void 0||v.cells!==void 0)&&this._onDidChange.fire(v)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let a of i.cellTextDocuments)r.closeTextDocument({textDocument:a});this.notebookDocuments.delete(i.notebookDocument.uri);for(let a of o.cells)this.notebookCellMap.delete(a.document)}})),Ir.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};pa.NotebookDocuments=qh});var Mh=d(mt=>{"use strict";Object.defineProperty(mt,"__esModule",{value:!0});mt.thenable=mt.typedArray=mt.stringArray=mt.array=mt.func=mt.error=mt.number=mt.string=mt.boolean=void 0;function x$(t){return t===!0||t===!1}mt.boolean=x$;function uR(t){return typeof t=="string"||t instanceof String}mt.string=uR;function q$(t){return typeof t=="number"||t instanceof Number}mt.number=q$;function L$(t){return t instanceof Error}mt.error=L$;function cR(t){return typeof t=="function"}mt.func=cR;function lR(t){return Array.isArray(t)}mt.array=lR;function M$(t){return lR(t)&&t.every(e=>uR(e))}mt.stringArray=M$;function $$(t,e){return Array.isArray(t)&&t.every(e)}mt.typedArray=$$;function F$(t){return t&&cR(t.then)}mt.thenable=F$});var $h=d(xr=>{"use strict";Object.defineProperty(xr,"__esModule",{value:!0});xr.generateUuid=xr.parse=xr.isUUID=xr.v4=xr.empty=void 0;var su=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},ae=class extends su{constructor(){super([ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),"-",ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),"-","4",ae._randomHex(),ae._randomHex(),ae._randomHex(),"-",ae._oneOf(ae._timeHighBits),ae._randomHex(),ae._randomHex(),ae._randomHex(),"-",ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex(),ae._randomHex()].join(""))}static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return ae._oneOf(ae._chars)}};ae._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];ae._timeHighBits=["8","9","a","b"];xr.empty=new su("00000000-0000-0000-0000-000000000000");function dR(){return new ae}xr.v4=dR;var j$=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function fR(t){return j$.test(t)}xr.isUUID=fR;function G$(t){if(!fR(t))throw new Error("invalid uuid");return new su(t)}xr.parse=G$;function U$(){return dR().asHex()}xr.generateUuid=U$});var pR=d(Mi=>{"use strict";Object.defineProperty(Mi,"__esModule",{value:!0});Mi.attachPartialResult=Mi.ProgressFeature=Mi.attachWorkDone=void 0;var Li=ht(),H$=$h(),kn=class{constructor(e,r){this._connection=e,this._token=r,kn.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(Li.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(Li.WorkDoneProgress.type,this._token,n)}done(){kn.Instances.delete(this._token),this._connection.sendProgress(Li.WorkDoneProgress.type,this._token,{kind:"end"})}};kn.Instances=new Map;var Wc=class extends kn{constructor(e,r){super(e,r),this._source=new Li.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},uu=class{constructor(){}begin(){}report(){}done(){}},Kc=class extends uu{constructor(){super(),this._source=new Li.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function W$(t,e){if(e===void 0||e.workDoneToken===void 0)return new uu;let r=e.workDoneToken;return delete e.workDoneToken,new kn(t,r)}Mi.attachWorkDone=W$;var K$=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(Li.WorkDoneProgressCancelNotification.type,r=>{let n=kn.Instances.get(r.token);(n instanceof Wc||n instanceof Kc)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new uu:new kn(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,H$.generateUuid)();return this.connection.sendRequest(Li.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Wc(this.connection,e))}else return Promise.resolve(new Kc)}};Mi.ProgressFeature=K$;var Fh;(function(t){t.type=new Li.ProgressType})(Fh||(Fh={}));var jh=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(Fh.type,this._token,e)}};function B$(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new jh(t,r)}Mi.attachPartialResult=B$});var hR=d(Bc=>{"use strict";Object.defineProperty(Bc,"__esModule",{value:!0});Bc.ConfigurationFeature=void 0;var z$=ht(),V$=Mh(),Y$=t=>class extends t{getConfiguration(e){return e?V$.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(z$.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};Bc.ConfigurationFeature=Y$});var mR=d(Vc=>{"use strict";Object.defineProperty(Vc,"__esModule",{value:!0});Vc.WorkspaceFoldersFeature=void 0;var zc=ht(),X$=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new zc.Emitter,this.connection.onNotification(zc.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(zc.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(zc.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Vc.WorkspaceFoldersFeature=X$});var gR=d(Yc=>{"use strict";Object.defineProperty(Yc,"__esModule",{value:!0});Yc.CallHierarchyFeature=void 0;var Gh=ht(),J$=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Gh.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=Gh.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=Gh.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Yc.CallHierarchyFeature=J$});var yR=d(Xc=>{"use strict";Object.defineProperty(Xc,"__esModule",{value:!0});Xc.ShowDocumentFeature=void 0;var Q$=ht(),Z$=t=>class extends t{showDocument(e){return this.connection.sendRequest(Q$.ShowDocumentRequest.type,e)}};Xc.ShowDocumentFeature=Z$});var vR=d(Jc=>{"use strict";Object.defineProperty(Jc,"__esModule",{value:!0});Jc.FileOperationsFeature=void 0;var ha=ht(),eF=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(ha.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(ha.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(ha.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(ha.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(ha.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(ha.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Jc.FileOperationsFeature=eF});var _R=d(Qc=>{"use strict";Object.defineProperty(Qc,"__esModule",{value:!0});Qc.LinkedEditingRangeFeature=void 0;var tF=ht(),rF=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(tF.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};Qc.LinkedEditingRangeFeature=rF});var TR=d(Zc=>{"use strict";Object.defineProperty(Zc,"__esModule",{value:!0});Zc.TypeHierarchyFeature=void 0;var Uh=ht(),nF=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Uh.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=Uh.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=Uh.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Zc.TypeHierarchyFeature=nF});var AR=d(el=>{"use strict";Object.defineProperty(el,"__esModule",{value:!0});el.InlineValueFeature=void 0;var RR=ht(),iF=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(RR.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(RR.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};el.InlineValueFeature=iF});var bR=d(tl=>{"use strict";Object.defineProperty(tl,"__esModule",{value:!0});tl.InlayHintFeature=void 0;var Hh=ht(),oF=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Hh.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Hh.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(Hh.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};tl.InlayHintFeature=oF});var SR=d(rl=>{"use strict";Object.defineProperty(rl,"__esModule",{value:!0});rl.DiagnosticFeature=void 0;var cu=ht(),aF=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(cu.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(cu.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(cu.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(cu.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(cu.WorkspaceDiagnosticRequest.partialResult,r)))}}};rl.DiagnosticFeature=aF});var CR=d(nl=>{"use strict";Object.defineProperty(nl,"__esModule",{value:!0});nl.MonikerFeature=void 0;var sF=ht(),uF=t=>class extends t{get moniker(){return{on:e=>{let r=sF.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};nl.MonikerFeature=uF});var $R=d(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.createConnection=ge.combineFeatures=ge.combineNotebooksFeatures=ge.combineLanguagesFeatures=ge.combineWorkspaceFeatures=ge.combineWindowFeatures=ge.combineClientFeatures=ge.combineTracerFeatures=ge.combineTelemetryFeatures=ge.combineConsoleFeatures=ge._NotebooksImpl=ge._LanguagesImpl=ge.BulkUnregistration=ge.BulkRegistration=ge.ErrorMessageTracker=void 0;var U=ht(),qr=Mh(),Kh=$h(),re=pR(),cF=hR(),lF=mR(),dF=gR(),fF=Dh(),pF=yR(),hF=vR(),mF=_R(),gF=TR(),yF=AR(),vF=bR(),_F=SR(),TF=Lh(),RF=CR();function Wh(t){if(t!==null)return t}var Bh=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};ge.ErrorMessageTracker=Bh;var il=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(U.MessageType.Error,e)}warn(e){this.send(U.MessageType.Warning,e)}info(e){this.send(U.MessageType.Info,e)}log(e){this.send(U.MessageType.Log,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(U.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,U.RAL)().console.error("Sending log message failed")})}},zh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:U.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(U.ShowMessageRequest.type,n).then(Wh)}showWarningMessage(e,...r){let n={type:U.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(U.ShowMessageRequest.type,n).then(Wh)}showInformationMessage(e,...r){let n={type:U.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(U.ShowMessageRequest.type,n).then(Wh)}},ER=(0,pF.ShowDocumentFeature)((0,re.ProgressFeature)(zh)),AF;(function(t){function e(){return new ol}t.create=e})(AF=ge.BulkRegistration||(ge.BulkRegistration={}));var ol=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=qr.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=Kh.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},bF;(function(t){function e(){return new lu(void 0,[])}t.create=e})(bF=ge.BulkUnregistration||(ge.BulkUnregistration={}));var lu=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(U.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=qr.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(U.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},al=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof ol?this.registerMany(e):e instanceof lu?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=qr.string(r)?r:r.method,o=Kh.generateUuid(),a={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(U.RegistrationRequest.type,a).then(s=>(e.add({id:o,method:i}),e),s=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(s)))}registerSingle2(e,r){let n=qr.string(e)?e:e.method,i=Kh.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(U.RegistrationRequest.type,o).then(a=>U.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),a=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(a)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(U.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(U.RegistrationRequest.type,r).then(()=>new lu(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Vh=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(U.ApplyWorkspaceEditRequest.type,n)}},PR=(0,hF.FileOperationsFeature)((0,lF.WorkspaceFoldersFeature)((0,cF.ConfigurationFeature)(Vh))),sl=class{constructor(){this._trace=U.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==U.Trace.Off&&this.connection.sendNotification(U.LogTraceNotification.type,{message:e,verbose:this._trace===U.Trace.Verbose?r:void 0}).catch(()=>{})}},ul=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(U.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},cl=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,re.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,re.attachPartialResult)(this.connection,r)}};ge._LanguagesImpl=cl;var NR=(0,RF.MonikerFeature)((0,_F.DiagnosticFeature)((0,vF.InlayHintFeature)((0,yF.InlineValueFeature)((0,gF.TypeHierarchyFeature)((0,mF.LinkedEditingRangeFeature)((0,fF.SemanticTokensFeature)((0,dF.CallHierarchyFeature)(cl)))))))),ll=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,re.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,re.attachPartialResult)(this.connection,r)}};ge._NotebooksImpl=ll;var kR=(0,TF.NotebookSyncFeature)(ll);function wR(t,e){return function(r){return e(t(r))}}ge.combineConsoleFeatures=wR;function OR(t,e){return function(r){return e(t(r))}}ge.combineTelemetryFeatures=OR;function DR(t,e){return function(r){return e(t(r))}}ge.combineTracerFeatures=DR;function IR(t,e){return function(r){return e(t(r))}}ge.combineClientFeatures=IR;function xR(t,e){return function(r){return e(t(r))}}ge.combineWindowFeatures=xR;function qR(t,e){return function(r){return e(t(r))}}ge.combineWorkspaceFeatures=qR;function LR(t,e){return function(r){return e(t(r))}}ge.combineLanguagesFeatures=LR;function MR(t,e){return function(r){return e(t(r))}}ge.combineNotebooksFeatures=MR;function SF(t,e){function r(i,o,a){return i&&o?a(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,wR),tracer:r(t.tracer,e.tracer,DR),telemetry:r(t.telemetry,e.telemetry,OR),client:r(t.client,e.client,IR),window:r(t.window,e.window,xR),workspace:r(t.workspace,e.workspace,qR),languages:r(t.languages,e.languages,LR),notebooks:r(t.notebooks,e.notebooks,MR)}}ge.combineFeatures=SF;function CF(t,e,r){let n=r&&r.console?new(r.console(il)):new il,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer(sl)):new sl,a=r&&r.telemetry?new(r.telemetry(ul)):new ul,s=r&&r.client?new(r.client(al)):new al,u=r&&r.window?new(r.window(ER)):new ER,c=r&&r.workspace?new(r.workspace(PR)):new PR,l=r&&r.languages?new(r.languages(NR)):new NR,f=r&&r.notebooks?new(r.notebooks(kR)):new kR,h=[n,o,a,s,u,c,l,f];function v(b){return b instanceof Promise?b:qr.thenable(b)?new Promise((A,O)=>{b.then($=>A($),$=>O($))}):Promise.resolve(b)}let m,R,P,C={listen:()=>i.listen(),sendRequest:(b,...A)=>i.sendRequest(qr.string(b)?b:b.method,...A),onRequest:(b,A)=>i.onRequest(b,A),sendNotification:(b,A)=>{let O=qr.string(b)?b:b.method;return arguments.length===1?i.sendNotification(O):i.sendNotification(O,A)},onNotification:(b,A)=>i.onNotification(b,A),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:b=>(R=b,{dispose:()=>{R=void 0}}),onInitialized:b=>i.onNotification(U.InitializedNotification.type,b),onShutdown:b=>(m=b,{dispose:()=>{m=void 0}}),onExit:b=>(P=b,{dispose:()=>{P=void 0}}),get console(){return n},get telemetry(){return a},get tracer(){return o},get client(){return s},get window(){return u},get workspace(){return c},get languages(){return l},get notebooks(){return f},onDidChangeConfiguration:b=>i.onNotification(U.DidChangeConfigurationNotification.type,b),onDidChangeWatchedFiles:b=>i.onNotification(U.DidChangeWatchedFilesNotification.type,b),__textDocumentSync:void 0,onDidOpenTextDocument:b=>i.onNotification(U.DidOpenTextDocumentNotification.type,b),onDidChangeTextDocument:b=>i.onNotification(U.DidChangeTextDocumentNotification.type,b),onDidCloseTextDocument:b=>i.onNotification(U.DidCloseTextDocumentNotification.type,b),onWillSaveTextDocument:b=>i.onNotification(U.WillSaveTextDocumentNotification.type,b),onWillSaveTextDocumentWaitUntil:b=>i.onRequest(U.WillSaveTextDocumentWaitUntilRequest.type,b),onDidSaveTextDocument:b=>i.onNotification(U.DidSaveTextDocumentNotification.type,b),sendDiagnostics:b=>i.sendNotification(U.PublishDiagnosticsNotification.type,b),onHover:b=>i.onRequest(U.HoverRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),void 0)),onCompletion:b=>i.onRequest(U.CompletionRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onCompletionResolve:b=>i.onRequest(U.CompletionResolveRequest.type,b),onSignatureHelp:b=>i.onRequest(U.SignatureHelpRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),void 0)),onDeclaration:b=>i.onRequest(U.DeclarationRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onDefinition:b=>i.onRequest(U.DefinitionRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onTypeDefinition:b=>i.onRequest(U.TypeDefinitionRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onImplementation:b=>i.onRequest(U.ImplementationRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onReferences:b=>i.onRequest(U.ReferencesRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onDocumentHighlight:b=>i.onRequest(U.DocumentHighlightRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onDocumentSymbol:b=>i.onRequest(U.DocumentSymbolRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onWorkspaceSymbol:b=>i.onRequest(U.WorkspaceSymbolRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onWorkspaceSymbolResolve:b=>i.onRequest(U.WorkspaceSymbolResolveRequest.type,b),onCodeAction:b=>i.onRequest(U.CodeActionRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onCodeActionResolve:b=>i.onRequest(U.CodeActionResolveRequest.type,(A,O)=>b(A,O)),onCodeLens:b=>i.onRequest(U.CodeLensRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onCodeLensResolve:b=>i.onRequest(U.CodeLensResolveRequest.type,(A,O)=>b(A,O)),onDocumentFormatting:b=>i.onRequest(U.DocumentFormattingRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),void 0)),onDocumentRangeFormatting:b=>i.onRequest(U.DocumentRangeFormattingRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),void 0)),onDocumentOnTypeFormatting:b=>i.onRequest(U.DocumentOnTypeFormattingRequest.type,(A,O)=>b(A,O)),onRenameRequest:b=>i.onRequest(U.RenameRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),void 0)),onPrepareRename:b=>i.onRequest(U.PrepareRenameRequest.type,(A,O)=>b(A,O)),onDocumentLinks:b=>i.onRequest(U.DocumentLinkRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onDocumentLinkResolve:b=>i.onRequest(U.DocumentLinkResolveRequest.type,(A,O)=>b(A,O)),onDocumentColor:b=>i.onRequest(U.DocumentColorRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onColorPresentation:b=>i.onRequest(U.ColorPresentationRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onFoldingRanges:b=>i.onRequest(U.FoldingRangeRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onSelectionRanges:b=>i.onRequest(U.SelectionRangeRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),(0,re.attachPartialResult)(i,A))),onExecuteCommand:b=>i.onRequest(U.ExecuteCommandRequest.type,(A,O)=>b(A,O,(0,re.attachWorkDone)(i,A),void 0)),dispose:()=>i.dispose()};for(let b of h)b.attach(C);return i.onRequest(U.InitializeRequest.type,b=>{e.initialize(b),qr.string(b.trace)&&(o.trace=U.Trace.fromString(b.trace));for(let A of h)A.initialize(b.capabilities);if(R){let A=R(b,new U.CancellationTokenSource().token,(0,re.attachWorkDone)(i,b),void 0);return v(A).then(O=>{if(O instanceof U.ResponseError)return O;let $=O;$||($={capabilities:{}});let W=$.capabilities;W||(W={},$.capabilities=W),W.textDocumentSync===void 0||W.textDocumentSync===null?W.textDocumentSync=qr.number(C.__textDocumentSync)?C.__textDocumentSync:U.TextDocumentSyncKind.None:!qr.number(W.textDocumentSync)&&!qr.number(W.textDocumentSync.change)&&(W.textDocumentSync.change=qr.number(C.__textDocumentSync)?C.__textDocumentSync:U.TextDocumentSyncKind.None);for(let ee of h)ee.fillServerCapabilities(W);return $})}else{let A={capabilities:{textDocumentSync:U.TextDocumentSyncKind.None}};for(let O of h)O.fillServerCapabilities(A.capabilities);return A}}),i.onRequest(U.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,m)return m(new U.CancellationTokenSource().token)}),i.onNotification(U.ExitNotification.type,()=>{try{P&&P()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(U.SetTraceNotification.type,b=>{o.trace=U.Trace.fromString(b.value)}),C}ge.createConnection=CF});var Yh=d(Ut=>{"use strict";var EF=Ut&&Ut.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),FR=Ut&&Ut.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&EF(e,t,r)};Object.defineProperty(Ut,"__esModule",{value:!0});Ut.ProposedFeatures=Ut.NotebookDocuments=Ut.TextDocuments=Ut.SemanticTokensBuilder=void 0;var PF=Dh();Object.defineProperty(Ut,"SemanticTokensBuilder",{enumerable:!0,get:function(){return PF.SemanticTokensBuilder}});FR(ht(),Ut);var NF=xh();Object.defineProperty(Ut,"TextDocuments",{enumerable:!0,get:function(){return NF.TextDocuments}});var kF=Lh();Object.defineProperty(Ut,"NotebookDocuments",{enumerable:!0,get:function(){return kF.NotebookDocuments}});FR($R(),Ut);var wF;(function(t){t.all={__brand:"features"}})(wF=Ut.ProposedFeatures||(Ut.ProposedFeatures={}))});var GR=d((gue,jR)=>{"use strict";jR.exports=ht()});var qe=d(wn=>{"use strict";var OF=wn&&wn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),HR=wn&&wn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&OF(e,t,r)};Object.defineProperty(wn,"__esModule",{value:!0});wn.createConnection=void 0;var dl=Yh();HR(GR(),wn);HR(Yh(),wn);var UR=!1,DF={initialize:t=>{},get shutdownReceived(){return UR},set shutdownReceived(t){UR=t},exit:t=>{}};function IF(t,e,r,n){let i,o,a,s;t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),dl.ConnectionStrategy.is(t)||dl.ConnectionOptions.is(t)?s=t:(o=t,a=e,s=r);let u=c=>(0,dl.createProtocolConnection)(o,a,c,s);return(0,dl.createConnection)(u,DF,i)}wn.createConnection=IF});var Xh=d((pl,fl)=>{var xF=pl&&pl.__spreadArray||function(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))};(function(t){if(typeof fl=="object"&&typeof fl.exports=="object"){var e=t(Sc,pl);e!==void 0&&(fl.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=void 0;var r=function(){function u(c,l,f,h){this._uri=c,this._languageId=l,this._version=f,this._content=h,this._lineOffsets=void 0}return Object.defineProperty(u.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),u.prototype.getText=function(c){if(c){var l=this.offsetAt(c.start),f=this.offsetAt(c.end);return this._content.substring(l,f)}return this._content},u.prototype.update=function(c,l){for(var f=0,h=c;f<h.length;f++){var v=h[f];if(u.isIncremental(v)){var m=a(v.range),R=this.offsetAt(m.start),P=this.offsetAt(m.end);this._content=this._content.substring(0,R)+v.text+this._content.substring(P,this._content.length);var C=Math.max(m.start.line,0),b=Math.max(m.end.line,0),A=this._lineOffsets,O=o(v.text,!1,R);if(b-C===O.length)for(var $=0,W=O.length;$<W;$++)A[$+C+1]=O[$];else O.length<1e4?A.splice.apply(A,xF([C+1,b-C],O,!1)):this._lineOffsets=A=A.slice(0,C+1).concat(O,A.slice(b+1));var ee=v.text.length-(P-R);if(ee!==0)for(var $=C+1+O.length,W=A.length;$<W;$++)A[$]=A[$]+ee}else if(u.isFull(v))this._content=v.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received")}this._version=l},u.prototype.getLineOffsets=function(){return this._lineOffsets===void 0&&(this._lineOffsets=o(this._content,!0)),this._lineOffsets},u.prototype.positionAt=function(c){c=Math.max(Math.min(c,this._content.length),0);var l=this.getLineOffsets(),f=0,h=l.length;if(h===0)return{line:0,character:c};for(;f<h;){var v=Math.floor((f+h)/2);l[v]>c?h=v:f=v+1}var m=f-1;return{line:m,character:c-l[m]}},u.prototype.offsetAt=function(c){var l=this.getLineOffsets();if(c.line>=l.length)return this._content.length;if(c.line<0)return 0;var f=l[c.line],h=c.line+1<l.length?l[c.line+1]:this._content.length;return Math.max(Math.min(f+c.character,h),f)},Object.defineProperty(u.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),u.isIncremental=function(c){var l=c;return l!=null&&typeof l.text=="string"&&l.range!==void 0&&(l.rangeLength===void 0||typeof l.rangeLength=="number")},u.isFull=function(c){var l=c;return l!=null&&typeof l.text=="string"&&l.range===void 0&&l.rangeLength===void 0},u}(),n;(function(u){function c(h,v,m,R){return new r(h,v,m,R)}u.create=c;function l(h,v,m){if(h instanceof r)return h.update(v,m),h;throw new Error("TextDocument.update: document must be created by TextDocument.create")}u.update=l;function f(h,v){for(var m=h.getText(),R=i(v.map(s),function(W,ee){var Pe=W.range.start.line-ee.range.start.line;return Pe===0?W.range.start.character-ee.range.start.character:Pe}),P=0,C=[],b=0,A=R;b<A.length;b++){var O=A[b],$=h.offsetAt(O.range.start);if($<P)throw new Error("Overlapping edit");$>P&&C.push(m.substring(P,$)),O.newText.length&&C.push(O.newText),P=h.offsetAt(O.range.end)}return C.push(m.substr(P)),C.join("")}u.applyEdits=f})(n=e.TextDocument||(e.TextDocument={}));function i(u,c){if(u.length<=1)return u;var l=u.length/2|0,f=u.slice(0,l),h=u.slice(l);i(f,c),i(h,c);for(var v=0,m=0,R=0;v<f.length&&m<h.length;){var P=c(f[v],h[m]);P<=0?u[R++]=f[v++]:u[R++]=h[m++]}for(;v<f.length;)u[R++]=f[v++];for(;m<h.length;)u[R++]=h[m++];return u}function o(u,c,l){l===void 0&&(l=0);for(var f=c?[l]:[],h=0;h<u.length;h++){var v=u.charCodeAt(h);(v===13||v===10)&&(v===13&&h+1<u.length&&u.charCodeAt(h+1)===10&&h++,f.push(l+h+1))}return f}function a(u){var c=u.start,l=u.end;return c.line>l.line||c.line===l.line&&c.character>l.character?{start:l,end:c}:u}function s(u){var c=a(u.range);return c!==u.range?{newText:u.newText,range:c}:u}})});var dr=d(wt=>{"use strict";Object.defineProperty(wt,"__esModule",{value:!0});wt.isRootCstNode=wt.isLeafCstNode=wt.isCompositeCstNode=wt.AbstractAstReflection=wt.isLinkingError=wt.isAstNodeDescription=wt.isReference=wt.isAstNode=void 0;function Qh(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}wt.isAstNode=Qh;function WR(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}wt.isReference=WR;function qF(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}wt.isAstNodeDescription=qF;function LF(t){return typeof t=="object"&&t!==null&&Qh(t.container)&&WR(t.reference)&&typeof t.message=="string"}wt.isLinkingError=LF;var Jh=class{constructor(){this.subtypes={}}isInstance(e,r){return Qh(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let i=n[r];if(i!==void 0)return i;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}};wt.AbstractAstReflection=Jh;function KR(t){return typeof t=="object"&&t!==null&&"children"in t}wt.isCompositeCstNode=KR;function MF(t){return typeof t=="object"&&t!==null&&"tokenType"in t}wt.isLeafCstNode=MF;function $F(t){return KR(t)&&"fullText"in t}wt.isRootCstNode=$F});var Ot=d(Ge=>{"use strict";Object.defineProperty(Ge,"__esModule",{value:!0});Ge.Reduction=Ge.TreeStreamImpl=Ge.stream=Ge.DONE_RESULT=Ge.EMPTY_STREAM=Ge.StreamImpl=void 0;var Ht=class{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){let e=this.iterator();return Boolean(e.next().done)}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new Ht(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return Ge.DONE_RESULT})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=FF(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new Ht(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?Ge.DONE_RESULT:{done:!1,value:e(i)}})}filter(e){return new Ht(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return Ge.DONE_RESULT})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new Ht(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(hl(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return Ge.DONE_RESULT})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new Ht(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let a=n.iterator.next();if(a.done)n.iterator=void 0;else return a}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(hl(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return Ge.DONE_RESULT})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new Ht(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new Ht(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?Ge.DONE_RESULT:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};Ge.StreamImpl=Ht;function FF(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function hl(t){return!!t&&typeof t[Symbol.iterator]=="function"}Ge.EMPTY_STREAM=new Ht(()=>{},()=>Ge.DONE_RESULT);Ge.DONE_RESULT=Object.freeze({done:!0,value:void 0});function jF(...t){if(t.length===1){let e=t[0];if(e instanceof Ht)return e;if(hl(e))return new Ht(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new Ht(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:Ge.DONE_RESULT)}return t.length>1?new Ht(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];hl(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return Ge.DONE_RESULT}):Ge.EMPTY_STREAM}Ge.stream=jF;var Zh=class extends Ht{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let a=i.iterators[i.iterators.length-1].next();if(a.done)i.iterators.pop();else return i.iterators.push(r(a.value)[Symbol.iterator]()),a}return Ge.DONE_RESULT})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}};Ge.TreeStreamImpl=Zh;var GF;(function(t){function e(o){return o.reduce((a,s)=>a+s,0)}t.sum=e;function r(o){return o.reduce((a,s)=>a*s,0)}t.product=r;function n(o){return o.reduce((a,s)=>Math.min(a,s))}t.min=n;function i(o){return o.reduce((a,s)=>Math.max(a,s))}t.max=i})(GF=Ge.Reduction||(Ge.Reduction={}))});var Xe=d(Se=>{"use strict";Object.defineProperty(Se,"__esModule",{value:!0});Se.getInteriorNodes=Se.getStartlineNode=Se.getNextNode=Se.getPreviousNode=Se.findLeafNodeAtOffset=Se.isCommentNode=Se.findCommentNode=Se.findDeclarationNodeAtOffset=Se.DefaultNameRegexp=Se.toDocumentSegment=Se.tokenToRange=Se.isCstChildNode=Se.flattenCst=Se.streamCst=void 0;var ma=dr(),UF=Ot();function zR(t){return new UF.TreeStreamImpl(t,e=>(0,ma.isCompositeCstNode)(e)?e.children:[],{includeRoot:!0})}Se.streamCst=zR;function HF(t){return zR(t).filter(ma.isLeafCstNode)}Se.flattenCst=HF;function WF(t,e){for(;t.parent;)if(t=t.parent,t===e)return!0;return!1}Se.isCstChildNode=WF;function KF(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}Se.tokenToRange=KF;function BF(t){let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}Se.toDocumentSegment=BF;Se.DefaultNameRegexp=/^[\w\p{L}]$/u;function zF(t,e,r=Se.DefaultNameRegexp){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return tm(t,e)}}Se.findDeclarationNodeAtOffset=zF;function VF(t,e){if(t){let r=VR(t,!0);if(r&&em(r,e))return r;if((0,ma.isRootCstNode)(t)){let n=t.children.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.children[i];if(em(o,e))return o}}}}Se.findCommentNode=VF;function em(t,e){return(0,ma.isLeafCstNode)(t)&&e.includes(t.tokenType.name)}Se.isCommentNode=em;function tm(t,e){if((0,ma.isLeafCstNode)(t))return t;if((0,ma.isCompositeCstNode)(t)){let r=0,n=t.children.length-1;for(;r<=n;){let i=Math.floor((r+n)/2),o=t.children[i];if(o.offset>e)n=i-1;else if(o.end<=e)r=i+1;else return tm(o,e)}}}Se.findLeafNodeAtOffset=tm;function VR(t,e=!0){for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);if(n===0)t=r;else{n--;let i=r.children[n];if(e||!i.hidden)return i}}}Se.getPreviousNode=VR;function YF(t,e=!0){for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);if(r.children.length-1===n)t=r;else{n++;let i=r.children[n];if(e||!i.hidden)return i}}}Se.getNextNode=YF;function XF(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.parent;){let i=t.parent,o=n??i.children.indexOf(t);if(o===0?(t=i,n=void 0):(n=o-1,t=i.children[n]),t.range.start.line!==e)break;r=t}return r}Se.getStartlineNode=XF;function JF(t,e){let r=QF(t,e);return r?r.parent.children.slice(r.a+1,r.b):[]}Se.getInteriorNodes=JF;function QF(t,e){let r=BR(t),n=BR(e),i;for(let o=0;o<r.length&&o<n.length;o++){let a=r[o],s=n[o];if(a.parent===s.parent)i={parent:a.parent,a:a.index,b:s.index};else break}return i}function BR(t){let e=[];for(;t.parent;){let r=t.parent,n=r.children.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}});var ui=d((du,rm)=>{(function(t,e){if(typeof du=="object"&&typeof rm=="object")rm.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var r=e();for(var n in r)(typeof du=="object"?du:t)[n]=r[n]}})(du,()=>(()=>{"use strict";var t={470:i=>{function o(u){if(typeof u!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(u))}function a(u,c){for(var l,f="",h=0,v=-1,m=0,R=0;R<=u.length;++R){if(R<u.length)l=u.charCodeAt(R);else{if(l===47)break;l=47}if(l===47){if(!(v===R-1||m===1))if(v!==R-1&&m===2){if(f.length<2||h!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var P=f.lastIndexOf("/");if(P!==f.length-1){P===-1?(f="",h=0):h=(f=f.slice(0,P)).length-1-f.lastIndexOf("/"),v=R,m=0;continue}}else if(f.length===2||f.length===1){f="",h=0,v=R,m=0;continue}}c&&(f.length>0?f+="/..":f="..",h=2)}else f.length>0?f+="/"+u.slice(v+1,R):f=u.slice(v+1,R),h=R-v-1;v=R,m=0}else l===46&&m!==-1?++m:m=-1}return f}var s={resolve:function(){for(var u,c="",l=!1,f=arguments.length-1;f>=-1&&!l;f--){var h;f>=0?h=arguments[f]:(u===void 0&&(u=process.cwd()),h=u),o(h),h.length!==0&&(c=h+"/"+c,l=h.charCodeAt(0)===47)}return c=a(c,!l),l?c.length>0?"/"+c:"/":c.length>0?c:"."},normalize:function(u){if(o(u),u.length===0)return".";var c=u.charCodeAt(0)===47,l=u.charCodeAt(u.length-1)===47;return(u=a(u,!c)).length!==0||c||(u="."),u.length>0&&l&&(u+="/"),c?"/"+u:u},isAbsolute:function(u){return o(u),u.length>0&&u.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var u,c=0;c<arguments.length;++c){var l=arguments[c];o(l),l.length>0&&(u===void 0?u=l:u+="/"+l)}return u===void 0?".":s.normalize(u)},relative:function(u,c){if(o(u),o(c),u===c||(u=s.resolve(u))===(c=s.resolve(c)))return"";for(var l=1;l<u.length&&u.charCodeAt(l)===47;++l);for(var f=u.length,h=f-l,v=1;v<c.length&&c.charCodeAt(v)===47;++v);for(var m=c.length-v,R=h<m?h:m,P=-1,C=0;C<=R;++C){if(C===R){if(m>R){if(c.charCodeAt(v+C)===47)return c.slice(v+C+1);if(C===0)return c.slice(v+C)}else h>R&&(u.charCodeAt(l+C)===47?P=C:C===0&&(P=0));break}var b=u.charCodeAt(l+C);if(b!==c.charCodeAt(v+C))break;b===47&&(P=C)}var A="";for(C=l+P+1;C<=f;++C)C!==f&&u.charCodeAt(C)!==47||(A.length===0?A+="..":A+="/..");return A.length>0?A+c.slice(v+P):(v+=P,c.charCodeAt(v)===47&&++v,c.slice(v))},_makeLong:function(u){return u},dirname:function(u){if(o(u),u.length===0)return".";for(var c=u.charCodeAt(0),l=c===47,f=-1,h=!0,v=u.length-1;v>=1;--v)if((c=u.charCodeAt(v))===47){if(!h){f=v;break}}else h=!1;return f===-1?l?"/":".":l&&f===1?"//":u.slice(0,f)},basename:function(u,c){if(c!==void 0&&typeof c!="string")throw new TypeError('"ext" argument must be a string');o(u);var l,f=0,h=-1,v=!0;if(c!==void 0&&c.length>0&&c.length<=u.length){if(c.length===u.length&&c===u)return"";var m=c.length-1,R=-1;for(l=u.length-1;l>=0;--l){var P=u.charCodeAt(l);if(P===47){if(!v){f=l+1;break}}else R===-1&&(v=!1,R=l+1),m>=0&&(P===c.charCodeAt(m)?--m==-1&&(h=l):(m=-1,h=R))}return f===h?h=R:h===-1&&(h=u.length),u.slice(f,h)}for(l=u.length-1;l>=0;--l)if(u.charCodeAt(l)===47){if(!v){f=l+1;break}}else h===-1&&(v=!1,h=l+1);return h===-1?"":u.slice(f,h)},extname:function(u){o(u);for(var c=-1,l=0,f=-1,h=!0,v=0,m=u.length-1;m>=0;--m){var R=u.charCodeAt(m);if(R!==47)f===-1&&(h=!1,f=m+1),R===46?c===-1?c=m:v!==1&&(v=1):c!==-1&&(v=-1);else if(!h){l=m+1;break}}return c===-1||f===-1||v===0||v===1&&c===f-1&&c===l+1?"":u.slice(c,f)},format:function(u){if(u===null||typeof u!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof u);return function(c,l){var f=l.dir||l.root,h=l.base||(l.name||"")+(l.ext||"");return f?f===l.root?f+h:f+"/"+h:h}(0,u)},parse:function(u){o(u);var c={root:"",dir:"",base:"",ext:"",name:""};if(u.length===0)return c;var l,f=u.charCodeAt(0),h=f===47;h?(c.root="/",l=1):l=0;for(var v=-1,m=0,R=-1,P=!0,C=u.length-1,b=0;C>=l;--C)if((f=u.charCodeAt(C))!==47)R===-1&&(P=!1,R=C+1),f===46?v===-1?v=C:b!==1&&(b=1):v!==-1&&(b=-1);else if(!P){m=C+1;break}return v===-1||R===-1||b===0||b===1&&v===R-1&&v===m+1?R!==-1&&(c.base=c.name=m===0&&h?u.slice(1,R):u.slice(m,R)):(m===0&&h?(c.name=u.slice(1,v),c.base=u.slice(1,R)):(c.name=u.slice(m,v),c.base=u.slice(m,R)),c.ext=u.slice(v,R)),m>0?c.dir=u.slice(0,m-1):h&&(c.dir="/"),c},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,i.exports=s},674:(i,o)=>{if(Object.defineProperty(o,"__esModule",{value:!0}),o.isWindows=void 0,typeof process=="object")o.isWindows=process.platform==="win32";else if(typeof navigator=="object"){var a=navigator.userAgent;o.isWindows=a.indexOf("Windows")>=0}},796:function(i,o,a){var s,u,c=this&&this.__extends||(s=function(L,q){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(F,K){F.__proto__=K}||function(F,K){for(var ie in K)Object.prototype.hasOwnProperty.call(K,ie)&&(F[ie]=K[ie])},s(L,q)},function(L,q){if(typeof q!="function"&&q!==null)throw new TypeError("Class extends value "+String(q)+" is not a constructor or null");function F(){this.constructor=L}s(L,q),L.prototype=q===null?Object.create(q):(F.prototype=q.prototype,new F)});Object.defineProperty(o,"__esModule",{value:!0}),o.uriToFsPath=o.URI=void 0;var l=a(674),f=/^\w[\w\d+.-]*$/,h=/^\//,v=/^\/\//;function m(L,q){if(!L.scheme&&q)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'.concat(L.authority,'", path: "').concat(L.path,'", query: "').concat(L.query,'", fragment: "').concat(L.fragment,'"}'));if(L.scheme&&!f.test(L.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(L.path){if(L.authority){if(!h.test(L.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(v.test(L.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}var R="",P="/",C=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,b=function(){function L(q,F,K,ie,oe,Q){Q===void 0&&(Q=!1),typeof q=="object"?(this.scheme=q.scheme||R,this.authority=q.authority||R,this.path=q.path||R,this.query=q.query||R,this.fragment=q.fragment||R):(this.scheme=function(ot,Ve){return ot||Ve?ot:"file"}(q,Q),this.authority=F||R,this.path=function(ot,Ve){switch(ot){case"https":case"http":case"file":Ve?Ve[0]!==P&&(Ve=P+Ve):Ve=P}return Ve}(this.scheme,K||R),this.query=ie||R,this.fragment=oe||R,m(this,Q))}return L.isUri=function(q){return q instanceof L||!!q&&typeof q.authority=="string"&&typeof q.fragment=="string"&&typeof q.path=="string"&&typeof q.query=="string"&&typeof q.scheme=="string"&&typeof q.fsPath=="string"&&typeof q.with=="function"&&typeof q.toString=="function"},Object.defineProperty(L.prototype,"fsPath",{get:function(){return Pe(this,!1)},enumerable:!1,configurable:!0}),L.prototype.with=function(q){if(!q)return this;var F=q.scheme,K=q.authority,ie=q.path,oe=q.query,Q=q.fragment;return F===void 0?F=this.scheme:F===null&&(F=R),K===void 0?K=this.authority:K===null&&(K=R),ie===void 0?ie=this.path:ie===null&&(ie=R),oe===void 0?oe=this.query:oe===null&&(oe=R),Q===void 0?Q=this.fragment:Q===null&&(Q=R),F===this.scheme&&K===this.authority&&ie===this.path&&oe===this.query&&Q===this.fragment?this:new O(F,K,ie,oe,Q)},L.parse=function(q,F){F===void 0&&(F=!1);var K=C.exec(q);return K?new O(K[2]||R,He(K[4]||R),He(K[5]||R),He(K[7]||R),He(K[9]||R),F):new O(R,R,R,R,R)},L.file=function(q){var F=R;if(l.isWindows&&(q=q.replace(/\\/g,P)),q[0]===P&&q[1]===P){var K=q.indexOf(P,2);K===-1?(F=q.substring(2),q=P):(F=q.substring(2,K),q=q.substring(K)||P)}return new O("file",F,q,R,R)},L.from=function(q){var F=new O(q.scheme,q.authority,q.path,q.query,q.fragment);return m(F,!0),F},L.prototype.toString=function(q){return q===void 0&&(q=!1),B(this,q)},L.prototype.toJSON=function(){return this},L.revive=function(q){if(q){if(q instanceof L)return q;var F=new O(q);return F._formatted=q.external,F._fsPath=q._sep===A?q.fsPath:null,F}return q},L}();o.URI=b;var A=l.isWindows?1:void 0,O=function(L){function q(){var F=L!==null&&L.apply(this,arguments)||this;return F._formatted=null,F._fsPath=null,F}return c(q,L),Object.defineProperty(q.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=Pe(this,!1)),this._fsPath},enumerable:!1,configurable:!0}),q.prototype.toString=function(F){return F===void 0&&(F=!1),F?B(this,!0):(this._formatted||(this._formatted=B(this,!1)),this._formatted)},q.prototype.toJSON=function(){var F={$mid:1};return this._fsPath&&(F.fsPath=this._fsPath,F._sep=A),this._formatted&&(F.external=this._formatted),this.path&&(F.path=this.path),this.scheme&&(F.scheme=this.scheme),this.authority&&(F.authority=this.authority),this.query&&(F.query=this.query),this.fragment&&(F.fragment=this.fragment),F},q}(b),$=((u={})[58]="%3A",u[47]="%2F",u[63]="%3F",u[35]="%23",u[91]="%5B",u[93]="%5D",u[64]="%40",u[33]="%21",u[36]="%24",u[38]="%26",u[39]="%27",u[40]="%28",u[41]="%29",u[42]="%2A",u[43]="%2B",u[44]="%2C",u[59]="%3B",u[61]="%3D",u[32]="%20",u);function W(L,q,F){for(var K=void 0,ie=-1,oe=0;oe<L.length;oe++){var Q=L.charCodeAt(oe);if(Q>=97&&Q<=122||Q>=65&&Q<=90||Q>=48&&Q<=57||Q===45||Q===46||Q===95||Q===126||q&&Q===47||F&&Q===91||F&&Q===93||F&&Q===58)ie!==-1&&(K+=encodeURIComponent(L.substring(ie,oe)),ie=-1),K!==void 0&&(K+=L.charAt(oe));else{K===void 0&&(K=L.substr(0,oe));var ot=$[Q];ot!==void 0?(ie!==-1&&(K+=encodeURIComponent(L.substring(ie,oe)),ie=-1),K+=ot):ie===-1&&(ie=oe)}}return ie!==-1&&(K+=encodeURIComponent(L.substring(ie))),K!==void 0?K:L}function ee(L){for(var q=void 0,F=0;F<L.length;F++){var K=L.charCodeAt(F);K===35||K===63?(q===void 0&&(q=L.substr(0,F)),q+=$[K]):q!==void 0&&(q+=L[F])}return q!==void 0?q:L}function Pe(L,q){var F;return F=L.authority&&L.path.length>1&&L.scheme==="file"?"//".concat(L.authority).concat(L.path):L.path.charCodeAt(0)===47&&(L.path.charCodeAt(1)>=65&&L.path.charCodeAt(1)<=90||L.path.charCodeAt(1)>=97&&L.path.charCodeAt(1)<=122)&&L.path.charCodeAt(2)===58?q?L.path.substr(1):L.path[1].toLowerCase()+L.path.substr(2):L.path,l.isWindows&&(F=F.replace(/\//g,"\\")),F}function B(L,q){var F=q?ee:W,K="",ie=L.scheme,oe=L.authority,Q=L.path,ot=L.query,Ve=L.fragment;if(ie&&(K+=ie,K+=":"),(oe||ie==="file")&&(K+=P,K+=P),oe){var At=oe.indexOf("@");if(At!==-1){var Yr=oe.substr(0,At);oe=oe.substr(At+1),(At=Yr.lastIndexOf(":"))===-1?K+=F(Yr,!1,!1):(K+=F(Yr.substr(0,At),!1,!1),K+=":",K+=F(Yr.substr(At+1),!1,!0)),K+="@"}(At=(oe=oe.toLowerCase()).lastIndexOf(":"))===-1?K+=F(oe,!1,!0):(K+=F(oe.substr(0,At),!1,!0),K+=oe.substr(At))}if(Q){if(Q.length>=3&&Q.charCodeAt(0)===47&&Q.charCodeAt(2)===58)(Tr=Q.charCodeAt(1))>=65&&Tr<=90&&(Q="/".concat(String.fromCharCode(Tr+32),":").concat(Q.substr(3)));else if(Q.length>=2&&Q.charCodeAt(1)===58){var Tr;(Tr=Q.charCodeAt(0))>=65&&Tr<=90&&(Q="".concat(String.fromCharCode(Tr+32),":").concat(Q.substr(2)))}K+=F(Q,!0,!1)}return ot&&(K+="?",K+=F(ot,!1,!1)),Ve&&(K+="#",K+=q?Ve:W(Ve,!1,!1)),K}function Te(L){try{return decodeURIComponent(L)}catch{return L.length>3?L.substr(0,3)+Te(L.substr(3)):L}}o.uriToFsPath=Pe;var ze=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function He(L){return L.match(ze)?L.replace(ze,function(q){return Te(q)}):L}},679:function(i,o,a){var s=this&&this.__spreadArray||function(h,v,m){if(m||arguments.length===2)for(var R,P=0,C=v.length;P<C;P++)!R&&P in v||(R||(R=Array.prototype.slice.call(v,0,P)),R[P]=v[P]);return h.concat(R||Array.prototype.slice.call(v))};Object.defineProperty(o,"__esModule",{value:!0}),o.Utils=void 0;var u,c=a(470),l=c.posix||c,f="/";(u=o.Utils||(o.Utils={})).joinPath=function(h){for(var v=[],m=1;m<arguments.length;m++)v[m-1]=arguments[m];return h.with({path:l.join.apply(l,s([h.path],v,!1))})},u.resolvePath=function(h){for(var v=[],m=1;m<arguments.length;m++)v[m-1]=arguments[m];var R=h.path,P=!1;R[0]!==f&&(R=f+R,P=!0);var C=l.resolve.apply(l,s([R],v,!1));return P&&C[0]===f&&!h.authority&&(C=C.substring(1)),h.with({path:C})},u.dirname=function(h){if(h.path.length===0||h.path===f)return h;var v=l.dirname(h.path);return v.length===1&&v.charCodeAt(0)===46&&(v=""),h.with({path:v})},u.basename=function(h){return l.basename(h.path)},u.extname=function(h){return l.extname(h.path)}}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,r),a.exports}var n={};return(()=>{var i=n;Object.defineProperty(i,"__esModule",{value:!0}),i.Utils=i.URI=void 0;var o=r(796);Object.defineProperty(i,"URI",{enumerable:!0,get:function(){return o.URI}});var a=r(679);Object.defineProperty(i,"Utils",{enumerable:!0,get:function(){return a.Utils}})})(),n})())});var fu=d(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.eagerLoad=ga.inject=void 0;function ZF(t,e,r,n){let i=[t,e,r,n].reduce(ZR,{});return QR(i)}ga.inject=ZF;var nm=Symbol("isProxy");function JR(t){if(t&&t[nm])for(let e of Object.values(t))JR(e);return t}ga.eagerLoad=JR;function QR(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>XR(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(XR(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),nm]});return r[nm]=!0,r}var YR=Symbol();function XR(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===YR)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/di/cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=YR;try{t[e]=typeof i=="function"?i(n):QR(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function ZR(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=ZR(i,n):t[r]=n}}return t}});var br=d(ml=>{"use strict";Object.defineProperty(ml,"__esModule",{value:!0});ml.MultiMap=void 0;var ya=Ot(),im=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return ya.Reduction.sum((0,ya.stream)(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return(0,ya.stream)(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return(0,ya.stream)(this.map.keys())}values(){return(0,ya.stream)(this.map.values()).flat()}entriesGroupedByKey(){return(0,ya.stream)(this.map.entries())}};ml.MultiMap=im});var ke=d(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.isParserRule=T.ParserRule=T.isParameterReference=T.ParameterReference=T.isParameter=T.Parameter=T.isNegation=T.Negation=T.isNegatedToken=T.NegatedToken=T.isNamedArgument=T.NamedArgument=T.isLiteralCondition=T.LiteralCondition=T.isKeyword=T.Keyword=T.isInterface=T.Interface=T.isInferredType=T.InferredType=T.isGroup=T.Group=T.isGrammarImport=T.GrammarImport=T.isGrammar=T.Grammar=T.isDisjunction=T.Disjunction=T.isCrossReference=T.CrossReference=T.isConjunction=T.Conjunction=T.isCharacterRange=T.CharacterRange=T.isAtomType=T.AtomType=T.isAssignment=T.Assignment=T.isAlternatives=T.Alternatives=T.isAction=T.Action=T.isAbstractElement=T.AbstractElement=T.isCondition=T.Condition=T.isAbstractType=T.AbstractType=T.isAbstractRule=T.AbstractRule=void 0;T.reflection=T.LangiumGrammarAstReflection=T.isWildcard=T.Wildcard=T.isUntilToken=T.UntilToken=T.isUnorderedGroup=T.UnorderedGroup=T.isTypeAttribute=T.TypeAttribute=T.isType=T.Type=T.isTerminalRuleCall=T.TerminalRuleCall=T.isTerminalRule=T.TerminalRule=T.isTerminalGroup=T.TerminalGroup=T.isTerminalAlternatives=T.TerminalAlternatives=T.isRuleCall=T.RuleCall=T.isReturnType=T.ReturnType=T.isRegexToken=T.RegexToken=void 0;var ej=dr();T.AbstractRule="AbstractRule";function tj(t){return T.reflection.isInstance(t,T.AbstractRule)}T.isAbstractRule=tj;T.AbstractType="AbstractType";function rj(t){return T.reflection.isInstance(t,T.AbstractType)}T.isAbstractType=rj;T.Condition="Condition";function nj(t){return T.reflection.isInstance(t,T.Condition)}T.isCondition=nj;T.AbstractElement="AbstractElement";function ij(t){return T.reflection.isInstance(t,T.AbstractElement)}T.isAbstractElement=ij;T.Action="Action";function oj(t){return T.reflection.isInstance(t,T.Action)}T.isAction=oj;T.Alternatives="Alternatives";function aj(t){return T.reflection.isInstance(t,T.Alternatives)}T.isAlternatives=aj;T.Assignment="Assignment";function sj(t){return T.reflection.isInstance(t,T.Assignment)}T.isAssignment=sj;T.AtomType="AtomType";function uj(t){return T.reflection.isInstance(t,T.AtomType)}T.isAtomType=uj;T.CharacterRange="CharacterRange";function cj(t){return T.reflection.isInstance(t,T.CharacterRange)}T.isCharacterRange=cj;T.Conjunction="Conjunction";function lj(t){return T.reflection.isInstance(t,T.Conjunction)}T.isConjunction=lj;T.CrossReference="CrossReference";function dj(t){return T.reflection.isInstance(t,T.CrossReference)}T.isCrossReference=dj;T.Disjunction="Disjunction";function fj(t){return T.reflection.isInstance(t,T.Disjunction)}T.isDisjunction=fj;T.Grammar="Grammar";function pj(t){return T.reflection.isInstance(t,T.Grammar)}T.isGrammar=pj;T.GrammarImport="GrammarImport";function hj(t){return T.reflection.isInstance(t,T.GrammarImport)}T.isGrammarImport=hj;T.Group="Group";function mj(t){return T.reflection.isInstance(t,T.Group)}T.isGroup=mj;T.InferredType="InferredType";function gj(t){return T.reflection.isInstance(t,T.InferredType)}T.isInferredType=gj;T.Interface="Interface";function yj(t){return T.reflection.isInstance(t,T.Interface)}T.isInterface=yj;T.Keyword="Keyword";function vj(t){return T.reflection.isInstance(t,T.Keyword)}T.isKeyword=vj;T.LiteralCondition="LiteralCondition";function _j(t){return T.reflection.isInstance(t,T.LiteralCondition)}T.isLiteralCondition=_j;T.NamedArgument="NamedArgument";function Tj(t){return T.reflection.isInstance(t,T.NamedArgument)}T.isNamedArgument=Tj;T.NegatedToken="NegatedToken";function Rj(t){return T.reflection.isInstance(t,T.NegatedToken)}T.isNegatedToken=Rj;T.Negation="Negation";function Aj(t){return T.reflection.isInstance(t,T.Negation)}T.isNegation=Aj;T.Parameter="Parameter";function bj(t){return T.reflection.isInstance(t,T.Parameter)}T.isParameter=bj;T.ParameterReference="ParameterReference";function Sj(t){return T.reflection.isInstance(t,T.ParameterReference)}T.isParameterReference=Sj;T.ParserRule="ParserRule";function Cj(t){return T.reflection.isInstance(t,T.ParserRule)}T.isParserRule=Cj;T.RegexToken="RegexToken";function Ej(t){return T.reflection.isInstance(t,T.RegexToken)}T.isRegexToken=Ej;T.ReturnType="ReturnType";function Pj(t){return T.reflection.isInstance(t,T.ReturnType)}T.isReturnType=Pj;T.RuleCall="RuleCall";function Nj(t){return T.reflection.isInstance(t,T.RuleCall)}T.isRuleCall=Nj;T.TerminalAlternatives="TerminalAlternatives";function kj(t){return T.reflection.isInstance(t,T.TerminalAlternatives)}T.isTerminalAlternatives=kj;T.TerminalGroup="TerminalGroup";function wj(t){return T.reflection.isInstance(t,T.TerminalGroup)}T.isTerminalGroup=wj;T.TerminalRule="TerminalRule";function Oj(t){return T.reflection.isInstance(t,T.TerminalRule)}T.isTerminalRule=Oj;T.TerminalRuleCall="TerminalRuleCall";function Dj(t){return T.reflection.isInstance(t,T.TerminalRuleCall)}T.isTerminalRuleCall=Dj;T.Type="Type";function Ij(t){return T.reflection.isInstance(t,T.Type)}T.isType=Ij;T.TypeAttribute="TypeAttribute";function xj(t){return T.reflection.isInstance(t,T.TypeAttribute)}T.isTypeAttribute=xj;T.UnorderedGroup="UnorderedGroup";function qj(t){return T.reflection.isInstance(t,T.UnorderedGroup)}T.isUnorderedGroup=qj;T.UntilToken="UntilToken";function Lj(t){return T.reflection.isInstance(t,T.UntilToken)}T.isUntilToken=Lj;T.Wildcard="Wildcard";function Mj(t){return T.reflection.isInstance(t,T.Wildcard)}T.isWildcard=Mj;var gl=class extends ej.AbstractAstReflection{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","Assignment","AtomType","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","LiteralCondition","NamedArgument","NegatedToken","Negation","Parameter","ParameterReference","ParserRule","RegexToken","ReturnType","RuleCall","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","UnorderedGroup","UntilToken","Wildcard"]}computeIsSubtype(e,r){switch(e){case T.Action:return this.isSubtype(T.AbstractElement,r)||this.isSubtype(T.AbstractType,r);case T.Alternatives:case T.Assignment:case T.CharacterRange:case T.CrossReference:case T.Group:case T.Keyword:case T.NegatedToken:case T.RegexToken:case T.RuleCall:case T.TerminalAlternatives:case T.TerminalGroup:case T.TerminalRuleCall:case T.UnorderedGroup:case T.UntilToken:case T.Wildcard:return this.isSubtype(T.AbstractElement,r);case T.Conjunction:case T.Disjunction:case T.LiteralCondition:case T.Negation:case T.ParameterReference:return this.isSubtype(T.Condition,r);case T.Interface:case T.Type:return this.isSubtype(T.AbstractType,r);case T.ParserRule:return this.isSubtype(T.AbstractRule,r)||this.isSubtype(T.AbstractType,r);case T.TerminalRule:return this.isSubtype(T.AbstractRule,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":return T.AbstractType;case"AtomType:refType":return T.AbstractType;case"CrossReference:type":return T.AbstractType;case"Grammar:hiddenTokens":return T.AbstractRule;case"Grammar:usedGrammars":return T.Grammar;case"Interface:superTypes":return T.AbstractType;case"NamedArgument:parameter":return T.Parameter;case"ParameterReference:parameter":return T.Parameter;case"ParserRule:hiddenTokens":return T.AbstractRule;case"ParserRule:returnType":return T.AbstractType;case"RuleCall:rule":return T.AbstractRule;case"TerminalRuleCall:rule":return T.TerminalRule;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Alternatives":return{name:"Alternatives",mandatory:[{name:"elements",type:"array"}]};case"AtomType":return{name:"AtomType",mandatory:[{name:"isArray",type:"boolean"},{name:"isRef",type:"boolean"}]};case"CrossReference":return{name:"CrossReference",mandatory:[{name:"deprecatedSyntax",type:"boolean"}]};case"Grammar":return{name:"Grammar",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"imports",type:"array"},{name:"interfaces",type:"array"},{name:"isDeclared",type:"boolean"},{name:"rules",type:"array"},{name:"types",type:"array"},{name:"usedGrammars",type:"array"}]};case"Group":return{name:"Group",mandatory:[{name:"elements",type:"array"}]};case"Interface":return{name:"Interface",mandatory:[{name:"attributes",type:"array"},{name:"superTypes",type:"array"}]};case"LiteralCondition":return{name:"LiteralCondition",mandatory:[{name:"true",type:"boolean"}]};case"NamedArgument":return{name:"NamedArgument",mandatory:[{name:"calledByName",type:"boolean"}]};case"ParserRule":return{name:"ParserRule",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"entry",type:"boolean"},{name:"fragment",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"parameters",type:"array"},{name:"wildcard",type:"boolean"}]};case"RuleCall":return{name:"RuleCall",mandatory:[{name:"arguments",type:"array"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",mandatory:[{name:"elements",type:"array"}]};case"TerminalGroup":return{name:"TerminalGroup",mandatory:[{name:"elements",type:"array"}]};case"TerminalRule":return{name:"TerminalRule",mandatory:[{name:"fragment",type:"boolean"},{name:"hidden",type:"boolean"}]};case"Type":return{name:"Type",mandatory:[{name:"typeAlternatives",type:"array"}]};case"TypeAttribute":return{name:"TypeAttribute",mandatory:[{name:"isOptional",type:"boolean"},{name:"typeAlternatives",type:"array"}]};case"UnorderedGroup":return{name:"UnorderedGroup",mandatory:[{name:"elements",type:"array"}]};default:return{name:e,mandatory:[]}}}};T.LangiumGrammarAstReflection=gl;T.reflection=new gl});var ci=d(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.sortInterfacesTopologically=Dt.mergeTypesAndInterfaces=Dt.mergeInterfaces=Dt.comparePropertyType=Dt.collectSuperTypes=Dt.collectChildrenTypes=Dt.distinctAndSorted=Dt.collectAllProperties=void 0;var $j=br(),To=ke();function Fj(t){let e=new $j.MultiMap;for(let r of t)e.addAll(r.name,r.properties);for(let r of t)for(let n of r.printingSuperTypes){let i=e.get(n);i&&e.addAll(r.name,i)}return e}Dt.collectAllProperties=Fj;function om(t,e){return Array.from(new Set(t)).sort(e)}Dt.distinctAndSorted=om;function eA(t,e,r,n){let i=new Set;return i.add(t),e.findReferences(t,{}).forEach(a=>{let s=r.getOrCreateDocument(a.sourceUri),u=n.getAstNode(s.parseResult.value,a.sourcePath);(0,To.isInterface)(u)?(i.add(u),eA(u,e,r,n).forEach(l=>i.add(l))):u&&(0,To.isType)(u.$container)&&i.add(u.$container)}),i}Dt.collectChildrenTypes=eA;function am(t){let e=new Set;return(0,To.isInterface)(t)?(e.add(t),t.superTypes.forEach(r=>{if((0,To.isInterface)(r.ref)){e.add(r.ref);let n=am(r.ref);for(let i of n)e.add(i)}})):(0,To.isType)(t)&&t.typeAlternatives.forEach(r=>{var n;if(!((n=r.refType)===null||n===void 0)&&n.ref&&((0,To.isInterface)(r.refType.ref)||(0,To.isType)(r.refType.ref))){let i=am(r.refType.ref);for(let o of i)e.add(o)}}),e}Dt.collectSuperTypes=am;function jj(t,e){return t.array===e.array&&t.reference===e.reference&&Gj(t.types,e.types)}Dt.comparePropertyType=jj;function Gj(t,e,r=(n,i)=>n===i){let n=om(t),i=om(e);return n.length!==i.length?!1:i.every((o,a)=>r(o,n[a]))}function Uj(t,e){return t.interfaces.concat(e.interfaces)}Dt.mergeInterfaces=Uj;function Hj(t){return t.interfaces.concat(t.unions)}Dt.mergeTypesAndInterfaces=Hj;function Wj(t){let e=t.sort((i,o)=>i.name.localeCompare(o.name)).map(i=>({value:i,nodes:[]}));for(let i of e)i.nodes=e.filter(o=>i.value.realSuperTypes.has(o.value.name));let r=[],n=e.filter(i=>i.nodes.length===0);for(;n.length>0;){let i=n.shift();r.includes(i)||(r.push(i),e.filter(o=>o.nodes.includes(i)).forEach(o=>n.push(o)))}return r.map(i=>i.value)}Dt.sortInterfacesTopologically=Wj});var um=d(yl=>{"use strict";Object.defineProperty(yl,"__esModule",{value:!0});yl.processGeneratorNode=void 0;var pu=va(),sm=class{constructor(e){this.defaultIndentation="    ",this.pendingIndent=!0,this.currentIndents=[],this.lines=[[]],typeof e=="string"?this.defaultIndentation=e:typeof e=="number"&&(this.defaultIndentation="".padStart(e))}get content(){return this.lines.map(e=>e.join("")).join("")}get currentLineNumber(){return this.lines.length-1}get currentLineContent(){return this.lines[this.currentLineNumber].join("")}append(e){e.length>0&&this.lines[this.currentLineNumber].push(e)}increaseIndent(e){this.currentIndents.push(e)}decreaseIndent(){this.currentIndents.pop()}resetCurrentLine(){this.lines[this.currentLineNumber]=[]}addNewLine(){this.pendingIndent=!0,this.lines.push([])}};function Kj(t,e){let r=new sm(e);return tA(t,r),r.content}yl.processGeneratorNode=Kj;function tA(t,e){typeof t=="string"?Bj(t,e):t instanceof pu.IndentNode?zj(t,e):t instanceof pu.CompositeGeneratorNode?iA(t,e):t instanceof pu.NewLineNode&&Vj(t,e)}function rA(t,e){return typeof t=="string"?oA(t):t instanceof pu.CompositeGeneratorNode?t.contents.some(r=>rA(r,e)):t instanceof pu.NewLineNode?!(t.ifNotEmpty&&e.currentLineContent.length===0):!1}function Bj(t,e){t&&(e.pendingIndent&&nA(e,!1),e.append(t))}function nA(t,e){var r;let n="";for(let i of t.currentIndents.filter(o=>o.indentEmptyLines||!e))n+=(r=i.indentation)!==null&&r!==void 0?r:t.defaultIndentation;t.append(n),t.pendingIndent=!1}function iA(t,e){for(let r of t.contents)tA(r,e)}function zj(t,e){var r;if(rA(t,e)){t.indentImmediately&&!e.pendingIndent&&e.append((r=t.indentation)!==null&&r!==void 0?r:e.defaultIndentation);try{e.increaseIndent(t),iA(t,e)}finally{e.decreaseIndent()}}}function Vj(t,e){t.ifNotEmpty&&!oA(e.currentLineContent)?e.resetCurrentLine():(e.pendingIndent&&nA(e,!0),e.append(t.lineDelimiter),e.addNewLine())}function oA(t){return t.trimStart()!==""}});var va=d(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});Je.NLEmpty=Je.NL=Je.NewLineNode=Je.IndentNode=Je.CompositeGeneratorNode=Je.toString=Je.isNewLineNode=Je.isGeneratorNode=Je.EOL=void 0;var Yj=um();Je.EOL=typeof process>"u"?`
`:process.platform==="win32"?`\r
`:`
`;function aA(t){return t instanceof hu||t instanceof mu||t instanceof Ro}Je.isGeneratorNode=aA;function Xj(t){return t instanceof Ro}Je.isNewLineNode=Xj;function Jj(t,e){return aA(t)?(0,Yj.processGeneratorNode)(t,e):String(t)}Je.toString=Jj;var hu=class{constructor(...e){this.contents=[],this.append(...e)}isEmpty(){return this.contents.length===0}append(...e){for(let r of e)typeof r=="function"?r(this):r&&this.contents.push(r);return this}appendIf(e,r){return e?this.append(...r):this}appendNewLine(){return this.append(Je.NL)}appendNewLineIf(e){return e?this.append(Je.NL):this}appendNewLineIfNotEmpty(){return this.append(Je.NLEmpty)}appendNewLineIfNotEmptyIf(e){return e?this.appendNewLineIfNotEmpty():this}indent(e,r){let n=new mu(r,!1);return this.contents.push(n),e&&e(n),this}};Je.CompositeGeneratorNode=hu;var mu=class extends hu{constructor(e,r=!0,n=!1){super(),this.indentImmediately=!0,this.indentEmptyLines=!1,typeof e=="string"?this.indentation=e:typeof e=="number"&&(this.indentation="".padStart(e)),this.indentImmediately=r,this.indentEmptyLines=n}};Je.IndentNode=mu;var Ro=class{constructor(e,r=!1){this.ifNotEmpty=!1,this.lineDelimiter=e??Je.EOL,this.ifNotEmpty=r}};Je.NewLineNode=Ro;Je.NL=new Ro;Je.NLEmpty=new Ro(void 0,!0)});var Ao=d(fr=>{"use strict";Object.defineProperty(fr,"__esModule",{value:!0});fr.propertyTypesToString=fr.TypeResolutionError=fr.InterfaceType=fr.UnionType=fr.isInterfaceType=fr.isUnionType=void 0;var gt=va(),vl=um(),Qj=br(),_a=ci();function Zj(t){return t&&"alternatives"in t}fr.isUnionType=Zj;function eG(t){return t&&"properties"in t}fr.isInterfaceType=eG;var cm=class{constructor(e,r,n){var i;this.realSuperTypes=new Set,this.subTypes=new Set,this.containerTypes=new Set,this.typeTypes=new Set,this.name=e,this.alternatives=r,this.reflection=(i=n?.reflection)!==null&&i!==void 0?i:!1}toAstTypesString(){let e=new gt.CompositeGeneratorNode;return e.append(`export type ${this.name} = ${_l(this.alternatives,"AstType")};`,gt.NL),this.reflection&&(e.append(gt.NL),uA(e,this.name)),(0,vl.processGeneratorNode)(e)}toDeclaredTypesString(e){let r=new gt.CompositeGeneratorNode;return r.append(`type ${fm(this.name,e)} = ${_l(this.alternatives,"DeclaredType")};`,gt.NL),(0,vl.processGeneratorNode)(r)}};fr.UnionType=cm;var lm=class{constructor(e,r,n){this.realSuperTypes=new Set,this.subTypes=new Set,this.containerTypes=new Set,this.typeTypes=new Set,this.printingSuperTypes=[],this.superProperties=new Qj.MultiMap,this.name=e,this.realSuperTypes=new Set(r),this.printingSuperTypes=[...r],this.properties=n,n.forEach(i=>this.superProperties.add(i.name,i))}toAstTypesString(){let e=new gt.CompositeGeneratorNode,r=this.printingSuperTypes.length>0?(0,_a.distinctAndSorted)([...this.printingSuperTypes]):["AstNode"];return e.append(`export interface ${this.name} extends ${r.join(", ")} {`,gt.NL),e.indent(n=>{this.containerTypes.size>0&&n.append(`readonly $container: ${(0,_a.distinctAndSorted)([...this.containerTypes]).join(" | ")};`,gt.NL),this.typeTypes.size>0&&n.append(`readonly $type: ${(0,_a.distinctAndSorted)([...this.typeTypes]).map(i=>`'${i}'`).join(" | ")};`,gt.NL),sA(n,this.properties,"AstType")}),e.append("}",gt.NL),e.append(gt.NL),uA(e,this.name),(0,vl.processGeneratorNode)(e)}toDeclaredTypesString(e){let r=new gt.CompositeGeneratorNode,n=fm(this.name,e),i=Array.from(this.printingSuperTypes).join(", ");return r.append(`interface ${n}${i.length>0?` extends ${i}`:""} {`,gt.NL),r.indent(o=>sA(o,this.properties,"DeclaredType",e)),r.append("}",gt.NL),(0,vl.processGeneratorNode)(r)}};fr.InterfaceType=lm;var dm=class extends Error{constructor(e,r){super(e),this.name="TypeResolutionError",this.target=r}};fr.TypeResolutionError=dm;function _l(t,e="AstType"){function r(n){let i=(0,_a.distinctAndSorted)(n.types).join(" | ");return i=n.reference?e==="AstType"?`Reference<${i}>`:`@${i}`:i,i=n.array?e==="AstType"?`Array<${i}>`:`${i}[]`:i,i}return(0,_a.distinctAndSorted)(t.map(r)).join(" | ")}fr.propertyTypesToString=_l;function sA(t,e,r,n=new Set){function i(o){let a=r==="AstType"?o.name:fm(o.name,n),s=o.optional&&!o.typeAlternatives.some(c=>c.array)&&!o.typeAlternatives.every(c=>c.types.length===1&&c.types[0]==="boolean"),u=_l(o.typeAlternatives,r);return`${a}${s?"?":""}: ${u}`}(0,_a.distinctAndSorted)(e,(o,a)=>o.name.localeCompare(a.name)).forEach(o=>t.append(i(o),gt.NL))}function uA(t,e){t.append(`export const ${e} = '${e}';`,gt.NL),t.append(gt.NL),t.append(`export function is${e}(item: unknown): item is ${e} {`,gt.NL),t.indent(r=>r.append(`return reflection.isInstance(item, ${e});`,gt.NL)),t.append("}",gt.NL)}function fm(t,e){return e.has(t)?`^${t}`:t}});var Ra=d(Ta=>{"use strict";Object.defineProperty(Ta,"__esModule",{value:!0});Ta.DefaultNameProvider=Ta.isNamed=void 0;var tG=St();function cA(t){return typeof t.name=="string"}Ta.isNamed=cA;var pm=class{getName(e){if(cA(e))return e.name}getNameNode(e){return(0,tG.findNodeForProperty)(e.$cstNode,"name")}};Ta.DefaultNameProvider=pm});var Oe=d(Qe=>{"use strict";Object.defineProperty(Qe,"__esModule",{value:!0});Qe.copyAstNode=Qe.findLocalReferences=Qe.streamReferences=Qe.streamAst=Qe.streamAllContents=Qe.streamContents=Qe.findRootNode=Qe.getDocument=Qe.hasContainerOfType=Qe.getContainerOfType=Qe.linkContentToContainer=void 0;var On=dr(),bo=Ot();function lA(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{(0,On.isAstNode)(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):(0,On.isAstNode)(r)&&(r.$container=t,r.$containerProperty=e))}Qe.linkContentToContainer=lA;function rG(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}Qe.getContainerOfType=rG;function nG(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}Qe.hasContainerOfType=nG;function dA(t){let r=fA(t).$document;if(!r)throw new Error("AST node has no document.");return r}Qe.getDocument=dA;function fA(t){for(;t.$container;)t=t.$container;return t}Qe.findRootNode=fA;function mm(t){if(!t)throw new Error("Node must be an AstNode.");return new bo.StreamImpl(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if((0,On.isAstNode)(n))return e.keyIndex++,{done:!1,value:n};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if((0,On.isAstNode)(o))return{done:!1,value:o}}e.arrayIndex=0}}e.keyIndex++}return bo.DONE_RESULT})}Qe.streamContents=mm;function iG(t){if(!t)throw new Error("Root node must be an AstNode.");return new bo.TreeStreamImpl(t,e=>mm(e))}Qe.streamAllContents=iG;function pA(t){if(!t)throw new Error("Root node must be an AstNode.");return new bo.TreeStreamImpl(t,e=>mm(e),{includeRoot:!0})}Qe.streamAst=pA;function hA(t){return new bo.StreamImpl(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if((0,On.isReference)(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if((0,On.isReference)(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return bo.DONE_RESULT})}Qe.streamReferences=hA;function oG(t,e=dA(t).parseResult.value){let r=[];return pA(e).forEach(n=>{hA(n).forEach(i=>{i.reference.ref===t&&r.push(i.reference)})}),(0,bo.stream)(r)}Qe.findLocalReferences=oG;function hm(t,e){let r={$type:t.$type};for(let[n,i]of Object.entries(t))if(!n.startsWith("$"))if((0,On.isAstNode)(i))r[n]=hm(i,e);else if((0,On.isReference)(i))r[n]=e(r,n,i.$refNode,i.$refText);else if(Array.isArray(i)){let o=[];for(let a of i)(0,On.isAstNode)(a)?o.push(hm(a,e)):(0,On.isReference)(a)?o.push(e(r,n,a.$refNode,a.$refText)):o.push(a);r[n]=o}else r[n]=i;return lA(r),r}Qe.copyAstNode=hm});var gu=d((mA,Tl)=>{(function(t,e){typeof define=="function"&&define.amd?define([],e):typeof Tl=="object"&&Tl.exports?Tl.exports=e():t.regexpToAst=e()})(typeof self<"u"?self:mA,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(m){this.idx=m.idx,this.input=m.input,this.groupIdx=m.groupIdx},t.prototype.pattern=function(m){this.idx=0,this.input=m,this.groupIdx=0,this.consumeChar("/");var R=this.disjunction();this.consumeChar("/");for(var P={type:"Flags",loc:{begin:this.idx,end:m.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":a(P,"global");break;case"i":a(P,"ignoreCase");break;case"m":a(P,"multiLine");break;case"u":a(P,"unicode");break;case"y":a(P,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:P,value:R,loc:this.loc(0)}},t.prototype.disjunction=function(){var m=[],R=this.idx;for(m.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),m.push(this.alternative());return{type:"Disjunction",value:m,loc:this.loc(R)}},t.prototype.alternative=function(){for(var m=[],R=this.idx;this.isTerm();)m.push(this.term());return{type:"Alternative",value:m,loc:this.loc(R)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var m=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(m)};case"$":return{type:"EndAnchor",loc:this.loc(m)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(m)};case"B":return{type:"NonWordBoundary",loc:this.loc(m)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var R;switch(this.popChar()){case"=":R="Lookahead";break;case"!":R="NegativeLookahead";break}s(R);var P=this.disjunction();return this.consumeChar(")"),{type:R,value:P,loc:this.loc(m)}}u()},t.prototype.quantifier=function(m){var R,P=this.idx;switch(this.popChar()){case"*":R={atLeast:0,atMost:1/0};break;case"+":R={atLeast:1,atMost:1/0};break;case"?":R={atLeast:0,atMost:1};break;case"{":var C=this.integerIncludingZero();switch(this.popChar()){case"}":R={atLeast:C,atMost:C};break;case",":var b;this.isDigit()?(b=this.integerIncludingZero(),R={atLeast:C,atMost:b}):R={atLeast:C,atMost:1/0},this.consumeChar("}");break}if(m===!0&&R===void 0)return;s(R);break}if(!(m===!0&&R===void 0))return s(R),this.peekChar(0)==="?"?(this.consumeChar("?"),R.greedy=!1):R.greedy=!0,R.type="Quantifier",R.loc=this.loc(P),R},t.prototype.atom=function(){var m,R=this.idx;switch(this.peekChar()){case".":m=this.dotAll();break;case"\\":m=this.atomEscape();break;case"[":m=this.characterClass();break;case"(":m=this.group();break}return m===void 0&&this.isPatternCharacter()&&(m=this.patternCharacter()),s(m),m.loc=this.loc(R),this.isQuantifier()&&(m.quantifier=this.quantifier()),m},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[i(`
`),i("\r"),i("\u2028"),i("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var m=this.positiveInteger();return{type:"GroupBackReference",value:m}},t.prototype.characterClassEscape=function(){var m,R=!1;switch(this.popChar()){case"d":m=l;break;case"D":m=l,R=!0;break;case"s":m=h;break;case"S":m=h,R=!0;break;case"w":m=f;break;case"W":m=f,R=!0;break}return s(m),{type:"Set",value:m,complement:R}},t.prototype.controlEscapeAtom=function(){var m;switch(this.popChar()){case"f":m=i("\f");break;case"n":m=i(`
`);break;case"r":m=i("\r");break;case"t":m=i("	");break;case"v":m=i("\v");break}return s(m),{type:"Character",value:m}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var m=this.popChar();if(/[a-zA-Z]/.test(m)===!1)throw Error("Invalid ");var R=m.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:R}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:i("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var m=this.popChar();return{type:"Character",value:i(m)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var m=this.popChar();return{type:"Character",value:i(m)}}},t.prototype.characterClass=function(){var m=[],R=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),R=!0);this.isClassAtom();){var P=this.classAtom(),C=P.type==="Character";if(C&&this.isRangeDash()){this.consumeChar("-");var b=this.classAtom(),A=b.type==="Character";if(A){if(b.value<P.value)throw Error("Range out of order in character class");m.push({from:P.value,to:b.value})}else o(P.value,m),m.push(i("-")),o(b.value,m)}else o(P.value,m)}return this.consumeChar("]"),{type:"Set",complement:R,value:m}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:i("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var m=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),m=!1;break;default:this.groupIdx++;break}var R=this.disjunction();this.consumeChar(")");var P={type:"Group",capturing:m,value:R};return m&&(P.idx=this.groupIdx),P},t.prototype.positiveInteger=function(){var m=this.popChar();if(n.test(m)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)m+=this.popChar();return parseInt(m,10)},t.prototype.integerIncludingZero=function(){var m=this.popChar();if(r.test(m)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)m+=this.popChar();return parseInt(m,10)},t.prototype.patternCharacter=function(){var m=this.popChar();switch(m){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:i(m)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(m){switch(m===void 0&&(m=0),this.peekChar(m)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var m=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(m)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(m){for(var R="",P=0;P<m;P++){var C=this.popChar();if(e.test(C)===!1)throw Error("Expecting a HexDecimal digits");R+=C}var b=parseInt(R,16);return{type:"Character",value:b}},t.prototype.peekChar=function(m){return m===void 0&&(m=0),this.input[this.idx+m]},t.prototype.popChar=function(){var m=this.peekChar(0);return this.consumeChar(),m},t.prototype.consumeChar=function(m){if(m!==void 0&&this.input[this.idx]!==m)throw Error("Expected: '"+m+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(m){return{begin:m,end:this.idx}};var e=/[0-9a-fA-F]/,r=/[0-9]/,n=/[1-9]/;function i(m){return m.charCodeAt(0)}function o(m,R){m.length!==void 0?m.forEach(function(P){R.push(P)}):R.push(m)}function a(m,R){if(m[R]===!0)throw"duplicate flag "+R;m[R]=!0}function s(m){if(m===void 0)throw Error("Internal Error - Should never get here!")}function u(){throw Error("Internal Error - Should never get here!")}var c,l=[];for(c=i("0");c<=i("9");c++)l.push(c);var f=[i("_")].concat(l);for(c=i("a");c<=i("z");c++)f.push(c);for(c=i("A");c<=i("Z");c++)f.push(c);var h=[i(" "),i("\f"),i(`
`),i("\r"),i("	"),i("\v"),i("	"),i("\xA0"),i("\u1680"),i("\u2000"),i("\u2001"),i("\u2002"),i("\u2003"),i("\u2004"),i("\u2005"),i("\u2006"),i("\u2007"),i("\u2008"),i("\u2009"),i("\u200A"),i("\u2028"),i("\u2029"),i("\u202F"),i("\u205F"),i("\u3000"),i("\uFEFF")];function v(){}return v.prototype.visitChildren=function(m){for(var R in m){var P=m[R];m.hasOwnProperty(R)&&(P.type!==void 0?this.visit(P):Array.isArray(P)&&P.forEach(function(C){this.visit(C)},this))}},v.prototype.visit=function(m){switch(m.type){case"Pattern":this.visitPattern(m);break;case"Flags":this.visitFlags(m);break;case"Disjunction":this.visitDisjunction(m);break;case"Alternative":this.visitAlternative(m);break;case"StartAnchor":this.visitStartAnchor(m);break;case"EndAnchor":this.visitEndAnchor(m);break;case"WordBoundary":this.visitWordBoundary(m);break;case"NonWordBoundary":this.visitNonWordBoundary(m);break;case"Lookahead":this.visitLookahead(m);break;case"NegativeLookahead":this.visitNegativeLookahead(m);break;case"Character":this.visitCharacter(m);break;case"Set":this.visitSet(m);break;case"Group":this.visitGroup(m);break;case"GroupBackReference":this.visitGroupBackReference(m);break;case"Quantifier":this.visitQuantifier(m);break}this.visitChildren(m)},v.prototype.visitPattern=function(m){},v.prototype.visitFlags=function(m){},v.prototype.visitDisjunction=function(m){},v.prototype.visitAlternative=function(m){},v.prototype.visitStartAnchor=function(m){},v.prototype.visitEndAnchor=function(m){},v.prototype.visitWordBoundary=function(m){},v.prototype.visitNonWordBoundary=function(m){},v.prototype.visitLookahead=function(m){},v.prototype.visitNegativeLookahead=function(m){},v.prototype.visitCharacter=function(m){},v.prototype.visitSet=function(m){},v.prototype.visitGroup=function(m){},v.prototype.visitGroupBackReference=function(m){},v.prototype.visitQuantifier=function(m){},{RegExpParser:t,BaseRegExpVisitor:v,VERSION:"0.5.0"}})});var Aa=d(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.partialRegex=Xt.partialMatches=Xt.getCaseInsensitivePattern=Xt.escapeRegExp=Xt.isWhitespaceRegExp=Xt.isMultilineComment=Xt.getTerminalParts=void 0;var gA=gu(),yA=new gA.RegExpParser,gm=class extends gA.BaseRegExpVisitor{constructor(){super(...arguments),this.isStarting=!0,this.endRegexStack=[],this.multiline=!1}get endRegex(){return this.endRegexStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegex="",this.isStarting=!0,this.endRegexStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let n=ym(r);this.endRegexStack.push(n),this.isStarting&&(this.startRegex+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=Boolean(`
`.match(n))}if(e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexStack.push(r),this.isStarting&&(this.startRegex+=r)}}},So=new gm;function aG(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=yA.pattern(t),r=[];for(let n of e.value.value)So.reset(t),So.visit(n),r.push({start:So.startRegex,end:So.endRegex});return r}catch{return[]}}Xt.getTerminalParts=aG;function sG(t){try{return typeof t!="string"&&(t=t.source),t=`/${t}/`,So.reset(t),So.visit(yA.pattern(t)),So.multiline}catch{return!1}}Xt.isMultilineComment=sG;function uG(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}Xt.isWhitespaceRegExp=uG;function ym(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}Xt.escapeRegExp=ym;function cG(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:ym(e)).join("")}Xt.getCaseInsensitivePattern=cG;function lG(t,e){let r=vA(t),n=e.match(r);return!!n&&n[0].length>0}Xt.partialMatches=lG;function vA(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",a;function s(c){o+=r.substr(n,c),n+=c}function u(c){o+="(?:"+r.substr(n,c)+"|$)",n+=c}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":u(3);break;case"x":u(4);break;case"u":e.unicode?r[n+2]==="{"?u(r.indexOf("}",n)-n+1):u(6):u(2);break;case"p":case"P":e.unicode?u(r.indexOf("}",n)-n+1):u(2);break;case"k":u(r.indexOf(">",n)-n+1);break;default:u(2);break}break;case"[":a=/\[(?:\\.|.)*?\]/g,a.lastIndex=n,a=a.exec(r)||[],u(a[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":s(1);break;case"{":a=/\{\d+,?\d*\}/g,a.lastIndex=n,a=a.exec(r),a?s(a[0].length):u(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":a=n,n+=3,i(),o+=r.substr(a,n-a);break;case"<":switch(r[n+3]){case"=":case"!":a=n,n+=4,i(),o+=r.substr(a,n-a);break;default:s(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else s(1),o+=i()+"|$)";break;case")":return++n,o;default:u(1);break}return o}return new RegExp(i(),t.flags)}Xt.partialRegex=vA});var Ct=d(se=>{"use strict";var dG=se&&se.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),fG=se&&se.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),pG=se&&se.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&dG(e,t,r);return fG(e,t),e};Object.defineProperty(se,"__esModule",{value:!0});se.isPrimitiveType=se.extractAssignments=se.resolveTransitiveImports=se.resolveImport=se.resolveImportUri=se.terminalRegex=se.getRuleType=se.getActionType=se.getExplicitRuleType=se.getTypeNameWithoutError=se.getTypeName=se.getActionAtElement=se.isDataTypeRule=se.isArrayOperator=se.isArrayCardinality=se.isOptionalCardinality=void 0;var Ae=pG(ke()),_A=ui(),Rl=Oe(),hG=Ao(),mG=Aa();function gG(t){return t==="?"||t==="*"}se.isOptionalCardinality=gG;function yG(t){return t==="*"||t==="+"}se.isArrayCardinality=yG;function vG(t){return t==="+="}se.isArrayOperator=vG;function Tm(t){return TA(t,new Set)}se.isDataTypeRule=Tm;function TA(t,e){if(e.has(t))return!0;e.add(t);for(let r of(0,Rl.streamAllContents)(t))if(Ae.isRuleCall(r)){if(!r.rule.ref||Ae.isParserRule(r.rule.ref)&&!TA(r.rule.ref,e))return!1}else{if(Ae.isAssignment(r))return!1;if(Ae.isAction(r))return!1}return Boolean(t.definition)}function RA(t){let e=t.$container;if(Ae.isGroup(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if(Ae.isAction(o))return o;{let a=(0,Rl.streamAllContents)(r[i]).find(Ae.isAction);if(a)return a}}}if(Ae.isAbstractElement(e))return RA(e)}se.getActionAtElement=RA;function Rm(t){var e;if(Ae.isParserRule(t))return Tm(t)?t.name:(e=Am(t))!==null&&e!==void 0?e:t.name;if(Ae.isInterface(t)||Ae.isType(t)||Ae.isReturnType(t))return t.name;if(Ae.isAction(t)){let r=AA(t);if(r)return r}else if(Ae.isInferredType(t))return t.name;throw new hG.TypeResolutionError("Cannot get name of Unknown Type",t.$cstNode)}se.getTypeName=Rm;function _G(t){try{return Rm(t)}catch{return"never"}}se.getTypeNameWithoutError=_G;function Am(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(Ae.isParserRule(e))return e.name;if(Ae.isInterface(e)||Ae.isType(e))return e.name}}}se.getExplicitRuleType=Am;function AA(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return Rm(t.type.ref)}se.getActionType=AA;function TG(t){var e,r,n;return Ae.isTerminalRule(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Tm(t)?t.name:(n=Am(t))!==null&&n!==void 0?n:t.name}se.getRuleType=TG;function bA(t){return yu(t.definition)}se.terminalRegex=bA;var bm=/[\s\S]/.source;function yu(t){if(Ae.isTerminalAlternatives(t))return RG(t);if(Ae.isTerminalGroup(t))return AG(t);if(Ae.isCharacterRange(t))return CG(t);if(Ae.isTerminalRuleCall(t)){let e=t.rule.ref;if(!e)throw new Error("Missing rule reference.");return li(bA(e),t.cardinality)}else{if(Ae.isNegatedToken(t))return SG(t);if(Ae.isUntilToken(t))return bG(t);if(Ae.isRegexToken(t))return li(t.regex,t.cardinality,!1);if(Ae.isWildcard(t))return li(bm,t.cardinality);throw new Error("Invalid terminal element.")}}function RG(t){return li(t.elements.map(yu).join("|"),t.cardinality)}function AG(t){return li(t.elements.map(yu).join(""),t.cardinality)}function bG(t){return li(`${bm}*?${yu(t.terminal)}`,t.cardinality)}function SG(t){return li(`(?!${yu(t.terminal)})${bm}*?`,t.cardinality)}function CG(t){return t.right?li(`[${vm(t.left)}-${vm(t.right)}]`,t.cardinality,!1):li(vm(t.left),t.cardinality,!1)}function vm(t){return(0,mG.escapeRegExp)(t.value)}function li(t,e,r=!0){return r&&(t=`(${t})`),e?`${t}${e}`:t}function SA(t){if(t.path===void 0||t.path.length===0)return;let e=_A.Utils.dirname((0,Rl.getDocument)(t).uri),r=t.path;return r.endsWith(".langium")||(r+=".langium"),_A.Utils.resolvePath(e,r)}se.resolveImportUri=SA;function Sm(t,e){let r=SA(e);try{if(r){let i=t.getOrCreateDocument(r).parseResult.value;if(Ae.isGrammar(i))return i}}catch{}}se.resolveImport=Sm;function EG(t,e){if(Ae.isGrammarImport(e)){let r=Sm(t,e);if(r){let n=_m(t,r);return n.push(r),n}return[]}else return _m(t,e)}se.resolveTransitiveImports=EG;function _m(t,e,r=e,n=new Set,i=new Set){let o=(0,Rl.getDocument)(e);if(r!==e&&i.add(e),!n.has(o.uri)){n.add(o.uri);for(let a of e.imports){let s=Sm(t,a);s&&_m(t,s,r,n,i)}}return Array.from(i)}function CA(t){return Ae.isAssignment(t)?[t]:Ae.isAlternatives(t)||Ae.isGroup(t)||Ae.isUnorderedGroup(t)?t.elements.flatMap(e=>CA(e)):[]}se.extractAssignments=CA;var PG=["string","number","boolean","Date","bigint"];function NG(t){return PG.includes(t)}se.isPrimitiveType=NG});var wA=d(bl=>{"use strict";Object.defineProperty(bl,"__esModule",{value:!0});bl.collectInferredTypes=void 0;var kG=Ra(),EA=br(),wG=Ot(),Et=ke(),di=Ct(),OG=ci(),Al=Ao(),Cm=class{constructor(e,r){this.context=e,this.root=r}getTypes(){let e={name:this.root.name,properties:this.root.properties,ruleCalls:this.root.ruleCalls,super:[]};return this.root.children.length===0?[{alt:e,next:[]}]:this.applyNext(this.root,{alt:e,next:this.root.children})}applyNext(e,r){let n=this.splitType(r.alt,r.next.length),i=[];for(let o=0;o<r.next.length;o++){let a=n[o],s=r.next[o];s.actionWithAssignment&&i.push({alt:this.copyTypeAlternative(a),next:[]}),s.name!==void 0&&s.name!==a.name&&(s.actionWithAssignment?(a.properties=[],a.ruleCalls=[],a.super=[e.name],a.name=s.name):(a.super=[a.name,...a.ruleCalls],a.properties=[],a.ruleCalls=[],a.name=s.name)),a.properties.push(...s.properties),a.ruleCalls.push(...s.ruleCalls);let u={alt:a,next:s.children};u.next.length===0?(u.alt.super=u.alt.super.filter(c=>c!==u.alt.name),i.push(u)):i.push(...this.applyNext(e,u))}return kA(i)}splitType(e,r){let n=[];for(let i=0;i<r;i++)n.push(this.copyTypeAlternative(e));return n}copyTypeAlternative(e){function r(n){return{name:n.name,optional:n.optional,typeAlternatives:n.typeAlternatives,astNodes:n.astNodes}}return{name:e.name,super:e.super,ruleCalls:e.ruleCalls,properties:e.properties.map(n=>r(n))}}getSuperTypes(e){let r=new Set;return this.collectSuperTypes(e,e,r),Array.from(r)}collectSuperTypes(e,r,n){if(r.ruleCalls.length>0){for(let i of r.ruleCalls)n.add(i);return}for(let i of r.parents)e.name===void 0?this.collectSuperTypes(i,i,n):i.name!==void 0&&i.name!==e.name?n.add(i.name):this.collectSuperTypes(e,i,n);r.parents.length===0&&r.name&&n.add(r.name)}connect(e,r){return r.parents.push(e),e.children.push(r),r}merge(...e){if(e.length===1)return e[0];if(e.length===0)throw new Error("No parts to merge");let r=Co();r.parents=e;for(let n of e)n.children.push(r);return r}};function DG(t,e){var r;let n=[],i={fragments:new Map};for(let u of t)n.push(...PA(i,u));let o=MG(n),a=FG(o),s=jG(o,a);for(let u of e){let c=(0,Et.isAlternatives)(u.definition)&&u.definition.elements.every(l=>(0,Et.isKeyword)(l))?(0,wG.stream)(u.definition.elements).filter(Et.isKeyword).map(l=>`'${l.value}'`).toArray():[(r=(0,di.getExplicitRuleType)(u))!==null&&r!==void 0?r:"string"];s.unions.push(new Al.UnionType(u.name,vu(!1,!1,c)))}return s}bl.collectInferredTypes=DG;function PA(t,e){let r=Co(e),n=new Cm(t,r);return e.definition&&Em(n,n.root,e.definition),n.getTypes()}function Co(t){return{name:(0,Et.isParserRule)(t)||(0,Et.isAction)(t)?(0,di.getTypeNameWithoutError)(t):t,properties:[],ruleCalls:[],children:[],parents:[],actionWithAssignment:!1}}function Em(t,e,r){let n=(0,di.isOptionalCardinality)(r.cardinality);if((0,Et.isAlternatives)(r)){let i=[];n&&i.push(t.connect(e,Co()));for(let o of r.elements){let a=t.connect(e,Co());i.push(Em(t,a,o))}return t.merge(...i)}else if((0,Et.isGroup)(r)||(0,Et.isUnorderedGroup)(r)){let i=t.connect(e,Co());for(let o of r.elements)i=Em(t,i,o);if(n){let o=t.connect(e,Co());return t.merge(o,i)}else return i}else{if((0,Et.isAction)(r))return IG(t,e,r);(0,Et.isAssignment)(r)?xG(e,r):(0,Et.isRuleCall)(r)&&qG(t,e,r)}return e}function IG(t,e,r){var n;let i=t.connect(e,Co(r));if(r.type){let o=(n=r.type)===null||n===void 0?void 0:n.ref;o&&(0,kG.isNamed)(o)&&(i.name=o.name)}return r.feature&&r.operator&&(i.actionWithAssignment=!0,i.properties.push({name:r.feature,optional:!1,typeAlternatives:vu(r.operator==="+=",!1,t.root.ruleCalls.length!==0?t.root.ruleCalls:t.getSuperTypes(i)),astNodes:new Set([r])})),i}function xG(t,e){let r={types:new Set,reference:!1};NA(e.terminal,r);let n=vu(e.operator==="+=",r.reference,e.operator==="?="?["boolean"]:Array.from(r.types));t.properties.push({name:e.feature,optional:(0,di.isOptionalCardinality)(e.cardinality),typeAlternatives:n,astNodes:new Set([e])})}function NA(t,e){if((0,Et.isAlternatives)(t)||(0,Et.isUnorderedGroup)(t)||(0,Et.isGroup)(t))for(let r of t.elements)NA(r,e);else(0,Et.isKeyword)(t)?e.types.add(`'${t.value}'`):(0,Et.isRuleCall)(t)&&t.rule.ref?e.types.add((0,di.getRuleType)(t.rule.ref)):(0,Et.isCrossReference)(t)&&t.type.ref&&(e.types.add((0,di.getTypeNameWithoutError)(t.type.ref)),e.reference=!0)}function qG(t,e,r){let n=r.rule.ref;if((0,Et.isParserRule)(n)&&n.fragment){let i=LG(n,t.context);(0,di.isOptionalCardinality)(r.cardinality)?e.properties.push(...i.map(o=>Object.assign(Object.assign({},o),{optional:!0}))):e.properties.push(...i)}else(0,Et.isParserRule)(n)&&e.ruleCalls.push((0,di.getRuleType)(n))}function LG(t,e){let r=e.fragments.get(t);if(r)return r;let n=[];e.fragments.set(t,n);let i=(0,di.getTypeNameWithoutError)(t),o=PA(e,t).filter(a=>a.alt.name===i);return n.push(...o.flatMap(a=>a.alt.properties)),n}function MG(t){let e=new Map,r=[],n=kA(t).map(i=>i.alt);for(let i of n){let o=new Al.InterfaceType(i.name,i.super,i.properties);e.set(o.name,o),i.ruleCalls.length>0&&(r.push(i),i.ruleCalls.forEach(a=>{a!==o.name&&o.subTypes.add(a)}))}for(let i of r)for(let o of i.ruleCalls){let a=e.get(o);a&&a.name!==i.name&&a.realSuperTypes.add(i.name)}return Array.from(e.values())}function kA(t){let e=t.reduce((n,i)=>n.add(i.alt.name,i),new EA.MultiMap),r=[];for(let[n,i]of e.entriesGroupedByKey()){let o=[],a=new Set,s={alt:{name:n,properties:o,ruleCalls:[],super:[]},next:[]};for(let u of i){let c=u.alt;s.alt.super.push(...c.super),s.next.push(...u.next);let l=c.properties;for(let f of l){let h=o.find(v=>v.name===f.name);h?(f.typeAlternatives.filter($G(h.typeAlternatives)).forEach(v=>h.typeAlternatives.push(v)),f.astNodes.forEach(v=>h.astNodes.add(v))):o.push(Object.assign({},f))}c.ruleCalls.forEach(f=>a.add(f))}for(let u of i){let c=u.alt;if(c.ruleCalls.length===0)for(let l of o)c.properties.find(f=>f.name===l.name)||(l.optional=!0)}s.alt.ruleCalls=Array.from(a),r.push(s)}return r}function $G(t){return e=>!t.some(r=>(0,OG.comparePropertyType)(r,e))}function FG(t){let e=[],r=new EA.MultiMap;for(let n of t)for(let i of n.realSuperTypes)r.add(i,n.name);for(let[n,i]of r.entriesGroupedByKey())t.some(o=>o.name===n)||e.push(new Al.UnionType(n,vu(!1,!1,i),{reflection:!0}));return e}function jG(t,e){var r;for(let o of t)for(let a of o.realSuperTypes)(r=t.find(s=>s.name===a))===null||r===void 0||r.subTypes.add(o.name);let n={interfaces:[],unions:e},i=new Set(e.map(o=>o.name));for(let o of t)if(o.properties.length===0&&o.subTypes.size>0){let a=vu(!1,!1,Array.from(o.subTypes)),s=e.find(u=>u.name===o.name);if(s)s.alternatives.push(...a);else{let u=new Al.UnionType(o.name,a,{reflection:!0});u.realSuperTypes=o.realSuperTypes,n.unions.push(u),i.add(o.name)}}else n.interfaces.push(o);for(let o of n.interfaces)o.printingSuperTypes=[...o.realSuperTypes].filter(a=>!i.has(a));return n}function vu(t,e,r){return t||e?[{array:t,reference:e,types:r}]:r.map(n=>({array:t,reference:e,types:[n]}))}});var xA=d(Sl=>{"use strict";Object.defineProperty(Sl,"__esModule",{value:!0});Sl.collectDeclaredTypes=void 0;var IA=Ct(),OA=Ao();function GG(t,e){let r={unions:[],interfaces:[]};for(let n of t){let i=n.superTypes.filter(a=>a.ref).map(a=>(0,IA.getTypeNameWithoutError)(a.ref)),o=n.attributes.map(a=>({name:a.name,optional:a.isOptional===!0,typeAlternatives:a.typeAlternatives.map(DA),astNodes:new Set([a])}));r.interfaces.push(new OA.InterfaceType(n.name,i,o))}for(let n of e){let i=n.typeAlternatives.map(DA),o=n.typeAlternatives.length>1&&n.typeAlternatives.some(a=>{var s;return((s=a.refType)===null||s===void 0?void 0:s.ref)!==void 0});r.unions.push(new OA.UnionType(n.name,i,{reflection:o}))}return r}Sl.collectDeclaredTypes=GG;function DA(t){var e,r;let n=[];return t.refType?n=[t.refType.ref?(0,IA.getTypeNameWithoutError)(t.refType.ref):t.refType.$refText]:n=[(e=t.primitiveType)!==null&&e!==void 0?e:`'${(r=t.keywordType)===null||r===void 0?void 0:r.value}'`],{types:n,reference:t.isRef===!0,array:t.isArray===!0}}});var Nm=d(ba=>{"use strict";Object.defineProperty(ba,"__esModule",{value:!0});ba.collectAllAstResources=ba.collectTypeResources=void 0;var UG=wA(),HG=xA(),WG=Oe(),KG=br(),BG=ke(),qA=Ct(),zG=ci(),VG=Ao();function YG(t,e){let r=Pm(t,e),n=(0,UG.collectInferredTypes)(r.parserRules,r.datatypeRules),i=(0,HG.collectDeclaredTypes)(r.interfaces,r.types);return JG(n,i),XG((0,zG.mergeInterfaces)(n,i)),{astResources:r,inferred:n,declared:i}}ba.collectTypeResources=YG;function XG(t){function e(r,n=new Set){if(!n.has(r)){n.add(r);for(let i of r.printingSuperTypes){let o=t.find(a=>a.name===i);o&&(0,VG.isInterfaceType)(o)&&(e(o),o.superProperties.entriesGroupedByKey().forEach(a=>r.superProperties.addAll(a[0],a[1])))}}}for(let r of t)e(r)}function JG(t,e){let r=new KG.MultiMap,n=t.unions.concat(e.unions);for(let o of n)if(o.reflection)for(let a of o.alternatives)a.types.forEach(s=>r.add(s,o.name));function i(o,a,s){var u;let c=(u=o.interfaces.find(l=>l.name===a))!==null&&u!==void 0?u:o.unions.find(l=>l.name===a);c&&s.forEach(l=>c.realSuperTypes.add(l))}for(let[o,a]of r.entriesGroupedByKey())i(t,o,a),i(e,o,a)}function Pm(t,e,r=new Set,n={parserRules:[],datatypeRules:[],interfaces:[],types:[]}){Array.isArray(t)||(t=[t]);for(let i of t){let o=(0,WG.getDocument)(i);if(!r.has(o.uri)){r.add(o.uri);for(let a of i.rules)(0,BG.isParserRule)(a)&&!a.fragment&&((0,qA.isDataTypeRule)(a)?n.datatypeRules.push(a):n.parserRules.push(a));if(i.interfaces.forEach(a=>n.interfaces.push(a)),i.types.forEach(a=>n.types.push(a)),e){let a=i.imports.map(s=>(0,qA.resolveImport)(e,s));Pm(a,e,r,n)}}}return n}ba.collectAllAstResources=Pm});var $A=d(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.specifyAstNodeProperties=Sa.collectAst=void 0;var QG=ci(),km=Ao(),ZG=Nm(),eU=Ct();function tU(t,e){let{inferred:r,declared:n}=(0,ZG.collectTypeResources)(t,e),i={interfaces:LA(r.interfaces,n.interfaces),unions:LA(r.unions,n.unions)};return(0,QG.sortInterfacesTopologically)(i.interfaces),i.unions.sort((o,a)=>o.name.localeCompare(a.name)),MA(i),i}Sa.collectAst=tU;function LA(t,e){return Array.from(t.concat(e).reduce((r,n)=>(r.set(n.name,n),r),new Map).values())}function MA(t){let e=nU(t);iU(e),oU(e),rU(e)}Sa.specifyAstNodeProperties=MA;function rU(t){let e=Array.from(t.values()).filter(n=>n.subTypes.size===0),r=new Set;for(let n of e){r.add(n),n.typeTypes.add(n.name);let i=Array.from(n.realSuperTypes).map(o=>t.get(o)).filter(o=>o!==void 0);for(let o of i)n.typeTypes.forEach(a=>o.typeTypes.add(a));e.push(...i.filter(o=>!r.has(o)))}}function nU({interfaces:t,unions:e}){let r=t.concat(e).reduce((o,a)=>(o.set(a.name,a),o),new Map),n=new Map;function i(o,a=new Set){if(n.has(o))return n.get(o);if(a.has(o))return!0;a.add(o);let s=o.alternatives.flatMap(u=>u.types).filter(u=>!(0,eU.isPrimitiveType)(u));if(s.length===0)return!0;for(let u of s){let c=r.get(u);if(c&&((0,km.isInterfaceType)(c)||(0,km.isUnionType)(c)&&!i(c,a)))return!1}return!0}for(let o of e){let a=i(o);n.set(o,a)}for(let[o,a]of n)a&&r.delete(o.name);return r}function iU(t){var e;for(let r of t.values())for(let n of r.realSuperTypes)(e=t.get(n))===null||e===void 0||e.subTypes.add(r.name)}function oU(t){var e;let r=Array.from(t.values()),n=r.filter(o=>(0,km.isInterfaceType)(o));for(let o of n){let a=o.properties.flatMap(s=>s.typeAlternatives.filter(u=>!u.reference).flatMap(u=>u.types));for(let s of a)(e=t.get(s))===null||e===void 0||e.containerTypes.add(o.name)}let i=aU(r);sU(i)}function aU(t){function e(i){let o=[i];n.add(i.name);let a=[...i.subTypes,...i.realSuperTypes];for(let s of a)if(!n.has(s)){let u=t.find(c=>c.name===s);u&&o.push(...e(u))}return o}let r=[],n=new Set;for(let i of t)n.has(i.name)||r.push(e(i));return r}function sU(t){for(let e of t){let r=new Set;e.forEach(n=>n.containerTypes.forEach(i=>r.add(i))),e.forEach(n=>n.containerTypes=r)}}});var wm=d(Cl=>{"use strict";Object.defineProperty(Cl,"__esModule",{value:!0});Cl.interpretAstReflection=void 0;var uU=dr(),FA=br(),cU=ke(),lU=$A(),dU=ci();function fU(t,e){let r;(0,cU.isGrammar)(t)?r=(0,lU.collectAst)(t,e):r=t;let n=r.interfaces.map(s=>s.name).concat(r.unions.map(s=>s.name)),i=pU(r),o=hU(r),a=gU(r);return{getAllTypes(){return n},getReferenceType(s){let u=`${s.container.$type}:${s.property}`,c=i.get(u);if(c)return c;throw new Error("Could not find reference type for "+u)},getTypeMetaData(s){var u;return(u=o.get(s))!==null&&u!==void 0?u:{name:s,mandatory:[]}},isInstance(s,u){return(0,uU.isAstNode)(s)&&this.isSubtype(s.$type,u)},isSubtype(s,u){if(s===u)return!0;let c=a.get(s);for(let l of c)if(this.isSubtype(l,u))return!0;return!1}}}Cl.interpretAstReflection=fU;function pU(t){let e=new FA.MultiMap;for(let n of t.interfaces){for(let i of n.properties)for(let o of i.typeAlternatives)o.reference&&e.add(n.name,[i.name,o.types[0]]);for(let i of n.printingSuperTypes){let o=e.get(i);e.addAll(n.name,o)}}let r=new Map;for(let[n,[i,o]]of e)r.set(`${n}:${i}`,o);return r}function hU(t){let e=new Map,r=(0,dU.collectAllProperties)(t.interfaces);for(let n of t.interfaces){let i=r.get(n.name),o=i.filter(s=>s.typeAlternatives.some(u=>u.array)),a=i.filter(s=>s.typeAlternatives.every(u=>!u.array&&u.types.includes("boolean")));(o.length>0||a.length>0)&&e.set(n.name,{name:n.name,mandatory:mU(o,a)})}return e}function mU(t,e){let r=[],n=t.concat(e).sort((i,o)=>i.name.localeCompare(o.name));for(let i of n){let o=t.includes(i)?"array":"boolean";r.push({name:i.name,type:o})}return r}function gU(t){let e=new FA.MultiMap;for(let r of t.interfaces)e.addAll(r.name,r.realSuperTypes);for(let r of t.unions)e.addAll(r.name,r.realSuperTypes);return e}});var jA=d(Pl=>{"use strict";Object.defineProperty(Pl,"__esModule",{value:!0});Pl.LangiumGrammarGrammar=void 0;var yU=St(),El,vU=()=>El??(El=(0,yU.loadGrammarFromJson)(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "LangiumGrammar",
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Grammar",
      "entry": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "isDeclared",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "grammar"
                }
              },
              {
                "$type": "Assignment",
                "feature": "name",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@57"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "with"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "usedGrammars",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$ref": "#/rules@0"
                      },
                      "terminal": {
                        "$type": "RuleCall",
                        "rule": {
                          "$ref": "#/rules@57"
                        },
                        "arguments": []
                      },
                      "deprecatedSyntax": false
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "usedGrammars",
                        "operator": "+=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/rules@0"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$ref": "#/rules@57"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "definesHiddenTokens",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "hidden"
                    }
                  },
                  {
                    "$type": "Keyword",
                    "value": "("
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "hiddenTokens",
                        "operator": "+=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/rules@8"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$ref": "#/rules@57"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      },
                      {
                        "$type": "Group",
                        "elements": [
                          {
                            "$type": "Keyword",
                            "value": ","
                          },
                          {
                            "$type": "Assignment",
                            "feature": "hiddenTokens",
                            "operator": "+=",
                            "terminal": {
                              "$type": "CrossReference",
                              "type": {
                                "$ref": "#/rules@8"
                              },
                              "terminal": {
                                "$type": "RuleCall",
                                "rule": {
                                  "$ref": "#/rules@57"
                                },
                                "arguments": []
                              },
                              "deprecatedSyntax": false
                            }
                          }
                        ],
                        "cardinality": "*"
                      }
                    ],
                    "cardinality": "?"
                  },
                  {
                    "$type": "Keyword",
                    "value": ")"
                  }
                ],
                "cardinality": "?"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "imports",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "rules",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@8"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "interfaces",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "types",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@7"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "+"
          }
        ]
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "interface"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "extends"
              },
              {
                "$type": "Assignment",
                "feature": "superTypes",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/types@0"
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "superTypes",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$ref": "#/types@0"
                      },
                      "deprecatedSyntax": false
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@2"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SchemaType",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "}"
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@56"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "isOptional",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "?"
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TypeAlternatives",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "typeAlternatives",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "|"
              },
              {
                "$type": "Assignment",
                "feature": "typeAlternatives",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@5"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AtomType",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "primitiveType",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@6"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "isRef",
                        "operator": "?=",
                        "terminal": {
                          "$type": "Keyword",
                          "value": "@"
                        },
                        "cardinality": "?"
                      },
                      {
                        "$type": "Assignment",
                        "feature": "refType",
                        "operator": "=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/types@0"
                          },
                          "deprecatedSyntax": false
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "isArray",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "[]"
                },
                "cardinality": "?"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "keywordType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PrimitiveType",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "string"
          },
          {
            "$type": "Keyword",
            "value": "number"
          },
          {
            "$type": "Keyword",
            "value": "boolean"
          },
          {
            "$type": "Keyword",
            "value": "Date"
          },
          {
            "$type": "Keyword",
            "value": "bigint"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Type",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "="
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractRule",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@43"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GrammarImport",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "import"
          },
          {
            "$type": "Assignment",
            "feature": "path",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@58"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";",
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParserRule",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "entry",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "entry"
                }
              },
              {
                "$type": "Assignment",
                "feature": "fragment",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "fragment"
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@12"
            },
            "arguments": []
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "wildcard",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "*"
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "returns"
                  },
                  {
                    "$type": "Alternatives",
                    "elements": [
                      {
                        "$type": "Assignment",
                        "feature": "returnType",
                        "operator": "=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/types@0"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$ref": "#/rules@57"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      },
                      {
                        "$type": "Assignment",
                        "feature": "dataType",
                        "operator": "=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$ref": "#/rules@6"
                          },
                          "arguments": []
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "inferredType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@11"
                  },
                  "arguments": [
                    {
                      "$type": "NamedArgument",
                      "value": {
                        "$type": "LiteralCondition",
                        "true": false
                      },
                      "calledByName": false
                    }
                  ]
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "definesHiddenTokens",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "hidden"
                }
              },
              {
                "$type": "Keyword",
                "value": "("
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "hiddenTokens",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$ref": "#/rules@8"
                      },
                      "terminal": {
                        "$type": "RuleCall",
                        "rule": {
                          "$ref": "#/rules@57"
                        },
                        "arguments": []
                      },
                      "deprecatedSyntax": false
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "hiddenTokens",
                        "operator": "+=",
                        "terminal": {
                          "$type": "CrossReference",
                          "type": {
                            "$ref": "#/rules@8"
                          },
                          "terminal": {
                            "$type": "RuleCall",
                            "rule": {
                              "$ref": "#/rules@57"
                            },
                            "arguments": []
                          },
                          "deprecatedSyntax": false
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "definition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@14"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "InferredType",
      "parameters": [
        {
          "$type": "Parameter",
          "name": "imperative"
        }
      ],
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Group",
                "guardCondition": {
                  "$type": "ParameterReference",
                  "parameter": {
                    "$ref": "#/rules@11/parameters@0"
                  }
                },
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "infer"
                  }
                ]
              },
              {
                "$type": "Group",
                "guardCondition": {
                  "$type": "Negation",
                  "value": {
                    "$type": "ParameterReference",
                    "parameter": {
                      "$ref": "#/rules@11/parameters@0"
                    }
                  }
                },
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "infers"
                  }
                ]
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RuleNameAndParams",
      "fragment": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "parameters",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@13"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "parameters",
                        "operator": "+=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$ref": "#/rules@13"
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "cardinality": "*"
                  }
                ],
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": ">"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Parameter",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@57"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Alternatives",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Alternatives"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "|"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@15"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ConditionalBranch",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Group"
                }
              },
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Assignment",
                "feature": "guardCondition",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@26"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Keyword",
                "value": ">"
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@18"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UnorderedGroup",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@17"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "UnorderedGroup"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "&"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@17"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Group",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@18"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Group"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@18"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@19"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@20"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractTokenWithCardinality",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@34"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@21"
                },
                "arguments": []
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "cardinality",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "?"
                },
                {
                  "$type": "Keyword",
                  "value": "*"
                },
                {
                  "$type": "Keyword",
                  "value": "+"
                }
              ]
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Action",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Action"
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "type",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/types@0"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@57"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Assignment",
                "feature": "inferredType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@11"
                  },
                  "arguments": [
                    {
                      "$type": "NamedArgument",
                      "value": {
                        "$type": "LiteralCondition",
                        "true": true
                      },
                      "calledByName": false
                    }
                  ]
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "Assignment",
                "feature": "feature",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@56"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Assignment",
                "feature": "operator",
                "operator": "=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "Keyword",
                      "value": "="
                    },
                    {
                      "$type": "Keyword",
                      "value": "+="
                    }
                  ]
                }
              },
              {
                "$type": "Keyword",
                "value": "current"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AbstractTerminal",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@22"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@23"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@40"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@33"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@41"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Keyword",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@58"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RuleCall",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "rule",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@8"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@57"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Assignment",
                "feature": "arguments",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@24"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "arguments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@24"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": ">"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "NamedArgument",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "parameter",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@13"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@57"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              },
              {
                "$type": "Assignment",
                "feature": "calledByName",
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "="
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "LiteralCondition",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "true",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "true"
            }
          },
          {
            "$type": "Keyword",
            "value": "false"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Disjunction",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@27"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Disjunction"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Keyword",
                "value": "|"
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@27"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Conjunction",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@28"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Conjunction"
                },
                "feature": "left",
                "operator": "="
              },
              {
                "$type": "Keyword",
                "value": "&"
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@28"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Negation",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@29"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Negation"
                }
              },
              {
                "$type": "Keyword",
                "value": "!"
              },
              {
                "$type": "Assignment",
                "feature": "value",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@28"
                  },
                  "arguments": []
                }
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Atom",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@31"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@30"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@25"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedCondition",
      "inferredType": {
        "$type": "InferredType",
        "name": "Condition"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@26"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParameterReference",
      "definition": {
        "$type": "Assignment",
        "feature": "parameter",
        "operator": "=",
        "terminal": {
          "$type": "CrossReference",
          "type": {
            "$ref": "#/rules@13"
          },
          "terminal": {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@57"
            },
            "arguments": []
          },
          "deprecatedSyntax": false
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PredicatedKeyword",
      "inferredType": {
        "$type": "InferredType",
        "name": "Keyword"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@58"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PredicatedRuleCall",
      "inferredType": {
        "$type": "InferredType",
        "name": "RuleCall"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "rule",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@8"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@57"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "<"
              },
              {
                "$type": "Assignment",
                "feature": "arguments",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@24"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "arguments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@24"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": ">"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Assignment",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Assignment"
            }
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "feature",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@56"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "operator",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "+="
                },
                {
                  "$type": "Keyword",
                  "value": "="
                },
                {
                  "$type": "Keyword",
                  "value": "?="
                }
              ]
            }
          },
          {
            "$type": "Assignment",
            "feature": "terminal",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AssignableTerminal",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@22"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@23"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@36"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@38"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedAssignableElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@37"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AssignableAlternatives",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@35"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "Alternatives"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "|"
                  },
                  {
                    "$type": "Assignment",
                    "feature": "elements",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@35"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CrossReference",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "CrossReference"
            }
          },
          {
            "$type": "Keyword",
            "value": "["
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/types@0"
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Alternatives",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "deprecatedSyntax",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "|"
                    }
                  },
                  {
                    "$type": "Keyword",
                    "value": ":"
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "terminal",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@39"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "]"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CrossReferenceableTerminal",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@22"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@23"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@14"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PredicatedGroup",
      "inferredType": {
        "$type": "InferredType",
        "name": "Group"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "=>"
              },
              {
                "$type": "Keyword",
                "value": "->"
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "elements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@14"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ReturnType",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalRule",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "hidden",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "hidden"
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "terminal"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "fragment",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "fragment"
                    }
                  },
                  {
                    "$type": "Assignment",
                    "feature": "name",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@57"
                      },
                      "arguments": []
                    }
                  }
                ]
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "name",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@57"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": "returns"
                      },
                      {
                        "$type": "Assignment",
                        "feature": "type",
                        "operator": "=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$ref": "#/rules@42"
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "cardinality": "?"
                  }
                ]
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "definition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@45"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "RegexLiteral",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/(?![*+?])(?:[^\\\\r\\\\n\\\\[/\\\\\\\\]|\\\\\\\\.|\\\\[(?:[^\\\\r\\\\n\\\\]\\\\\\\\]|\\\\\\\\.)*\\\\])+\\\\/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalAlternatives",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@46"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "TerminalAlternatives"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Keyword",
                "value": "|"
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@46"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalGroup",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@47"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "TerminalGroup"
                },
                "feature": "elements",
                "operator": "+="
              },
              {
                "$type": "Assignment",
                "feature": "elements",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@47"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@48"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "cardinality",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "?"
                },
                {
                  "$type": "Keyword",
                  "value": "*"
                },
                {
                  "$type": "Keyword",
                  "value": "+"
                }
              ]
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalTokenElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@55"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@50"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@49"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@51"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@52"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@53"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@54"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ParenthesizedTerminalElement",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@45"
            },
            "arguments": []
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TerminalRuleCall",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "TerminalRuleCall"
            }
          },
          {
            "$type": "Assignment",
            "feature": "rule",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@43"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@57"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "NegatedToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "NegatedToken"
            }
          },
          {
            "$type": "Keyword",
            "value": "!"
          },
          {
            "$type": "Assignment",
            "feature": "terminal",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@48"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UntilToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "UntilToken"
            }
          },
          {
            "$type": "Keyword",
            "value": "->"
          },
          {
            "$type": "Assignment",
            "feature": "terminal",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@48"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RegexToken",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "RegexToken"
            }
          },
          {
            "$type": "Assignment",
            "feature": "regex",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@44"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Wildcard",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "Wildcard"
            }
          },
          {
            "$type": "Keyword",
            "value": "."
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CharacterRange",
      "inferredType": {
        "$type": "InferredType",
        "name": "AbstractElement"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "inferredType": {
              "$type": "InferredType",
              "name": "CharacterRange"
            }
          },
          {
            "$type": "Assignment",
            "feature": "left",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ".."
              },
              {
                "$type": "Assignment",
                "feature": "right",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@22"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FeatureName",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "current"
          },
          {
            "$type": "Keyword",
            "value": "entry"
          },
          {
            "$type": "Keyword",
            "value": "extends"
          },
          {
            "$type": "Keyword",
            "value": "false"
          },
          {
            "$type": "Keyword",
            "value": "fragment"
          },
          {
            "$type": "Keyword",
            "value": "grammar"
          },
          {
            "$type": "Keyword",
            "value": "hidden"
          },
          {
            "$type": "Keyword",
            "value": "import"
          },
          {
            "$type": "Keyword",
            "value": "interface"
          },
          {
            "$type": "Keyword",
            "value": "returns"
          },
          {
            "$type": "Keyword",
            "value": "terminal"
          },
          {
            "$type": "Keyword",
            "value": "true"
          },
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Keyword",
            "value": "infer"
          },
          {
            "$type": "Keyword",
            "value": "infers"
          },
          {
            "$type": "Keyword",
            "value": "with"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@6"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@57"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\^?[_a-zA-Z][\\\\w_]*"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\"[^\\"]*\\"|'[^']*'"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\s+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
      },
      "fragment": false
    }
  ],
  "types": [
    {
      "$type": "Type",
      "typeAlternatives": [
        {
          "$type": "AtomType",
          "refType": {
            "$ref": "#/rules@1"
          },
          "isArray": false,
          "isRef": false
        },
        {
          "$type": "AtomType",
          "refType": {
            "$ref": "#/rules@7"
          },
          "isArray": false,
          "isRef": false
        },
        {
          "$type": "AtomType",
          "refType": {
            "$ref": "#/rules@20/definition/elements@0"
          },
          "isArray": false,
          "isRef": false
        },
        {
          "$type": "AtomType",
          "refType": {
            "$ref": "#/rules@10"
          },
          "isArray": false,
          "isRef": false
        }
      ],
      "name": "AbstractType"
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "imports": [],
  "interfaces": [],
  "usedGrammars": []
}`));Pl.LangiumGrammarGrammar=vU});var GA=d(Lr=>{"use strict";Object.defineProperty(Lr,"__esModule",{value:!0});Lr.LangiumGrammarGeneratedModule=Lr.LangiumGrammarGeneratedSharedModule=Lr.LangiumGrammarParserConfig=Lr.LangiumGrammarLanguageMetaData=void 0;var _U=ke(),TU=jA();Lr.LangiumGrammarLanguageMetaData={languageId:"langium",fileExtensions:[".langium"],caseInsensitive:!1};Lr.LangiumGrammarParserConfig={maxLookahead:3};Lr.LangiumGrammarGeneratedSharedModule={AstReflection:()=>new _U.LangiumGrammarAstReflection};Lr.LangiumGrammarGeneratedModule={Grammar:()=>(0,TU.LangiumGrammarGrammar)(),LanguageMetaData:()=>Lr.LangiumGrammarLanguageMetaData,parser:{ParserConfig:()=>Lr.LangiumGrammarParserConfig}}});var Mr=d(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.Deferred=yt.MutexLock=yt.interruptAndCheck=yt.isOperationCancelled=yt.OperationCancelled=yt.setInterruptionPeriod=yt.startCancelableOperation=yt.delayNextTick=void 0;var Nl=ai();function UA(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}yt.delayNextTick=UA;var Om=0,HA=10;function RU(){return Om=Date.now(),new Nl.CancellationTokenSource}yt.startCancelableOperation=RU;function AU(t){HA=t}yt.setInterruptionPeriod=AU;yt.OperationCancelled=Symbol("OperationCancelled");function WA(t){return t===yt.OperationCancelled}yt.isOperationCancelled=WA;async function bU(t){if(t===Nl.CancellationToken.None)return;let e=Date.now();if(e-Om>=HA&&(Om=e,await UA()),t.isCancellationRequested)throw yt.OperationCancelled}yt.interruptAndCheck=bU;var Dm=class{constructor(){this.previousAction=Promise.resolve(),this.previousTokenSource=new Nl.CancellationTokenSource}lock(e){this.cancel();let r=new Nl.CancellationTokenSource;return this.previousTokenSource=r,this.previousAction=this.previousAction.then(()=>e(r.token).catch(n=>{WA(n)||console.error("Error: ",n)}))}cancel(){this.previousTokenSource.cancel()}};yt.MutexLock=Dm;var Im=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};yt.Deferred=Im});var wl=d(kl=>{"use strict";Object.defineProperty(kl,"__esModule",{value:!0});kl.DefaultScopeComputation=void 0;var xm=ai(),KA=Oe(),SU=br(),BA=Mr(),qm=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=xm.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=KA.streamContents,i=xm.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let a of n(e))await(0,BA.interruptAndCheck)(i),this.exportNode(a,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=xm.CancellationToken.None){let n=e.parseResult.value,i=new SU.MultiMap;for(let o of(0,KA.streamAllContents)(n))await(0,BA.interruptAndCheck)(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}};kl.DefaultScopeComputation=qm});var Dl=d($i=>{"use strict";Object.defineProperty($i,"__esModule",{value:!0});$i.DefaultScopeProvider=$i.EMPTY_SCOPE=$i.StreamScope=void 0;var CU=Oe(),Ol=Ot(),Ca=class{constructor(e,r,n){this.elements=e,this.outerScope=r,this.caseInsensitive=n?.caseInsensitive}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}};$i.StreamScope=Ca;$i.EMPTY_SCOPE={getElement(){},getAllElements(){return Ol.EMPTY_STREAM}};var Lm=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=(0,CU.getDocument)(e.container).precomputedScopes;if(i){let a=e.container;do{let s=i.get(a);s.length>0&&r.push((0,Ol.stream)(s).filter(u=>this.reflection.isSubtype(u.type,n))),a=a.$container}while(a)}let o=this.getGlobalScope(n,e);for(let a=r.length-1;a>=0;a--)o=this.createScope(r[a],o);return o}createScope(e,r,n){return new Ca((0,Ol.stream)(e),r,n)}createScopeForNodes(e,r,n){let i=(0,Ol.stream)(e).map(o=>{let a=this.nameProvider.getName(o);if(a)return this.descriptions.createDescription(o,a)}).nonNullable();return new Ca(i,r,n)}getGlobalScope(e,r){return new Ca(this.indexManager.allElements(e))}};$i.DefaultScopeProvider=Lm});var fi=d(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.relativeURI=Ea.equalURI=void 0;function EU(t,e){return t?.toString()===e?.toString()}Ea.equalURI=EU;function PU(t,e){let r=t.path,n=e.path,i=r.split("/").filter(c=>c.length>0),o=n.split("/").filter(c=>c.length>0),a=0;for(;a<i.length&&i[a]===o[a];a++);let s="../".repeat(i.length-a),u=o.slice(a).join("/");return s+u}Ea.relativeURI=PU});var VA=d(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.LangiumGrammarScopeComputation=Pa.LangiumGrammarScopeProvider=void 0;var NU=wl(),Mm=Dl(),_u=Oe(),zA=Ot(),kU=fi(),$r=ke(),$m=Ct(),Fm=class extends Mm.DefaultScopeProvider{constructor(e){super(e)}getScope(e){let r=this.reflection.getReferenceType(e);return r===$r.AbstractType?this.getTypeScope(r,e):super.getScope(e)}getTypeScope(e,r){let n,i=(0,_u.getDocument)(r.container).precomputedScopes,o=(0,_u.findRootNode)(r.container);if(i&&o){let s=i.get(o);s.length>0&&(n=(0,zA.stream)(s).filter(u=>u.type===$r.Interface||u.type===$r.Type))}let a=this.getGlobalScope(e,r);return n?this.createScope(n,a):a}getGlobalScope(e,r){let n=(0,_u.getContainerOfType)(r.container,$r.isGrammar);if(!n)return Mm.EMPTY_SCOPE;let i=(0,zA.stream)(n.imports).map($m.resolveImportUri).nonNullable(),o=this.indexManager.allElements(e).filter(a=>i.some(s=>(0,kU.equalURI)(a.documentUri,s)));return e===$r.AbstractType&&(o=o.filter(a=>a.type===$r.Interface||a.type===$r.Type)),new Mm.StreamScope(o)}};Pa.LangiumGrammarScopeProvider=Fm;var jm=class extends NU.DefaultScopeComputation{constructor(e){super(e),this.astNodeLocator=e.workspace.AstNodeLocator}exportNode(e,r,n){var i;if(super.exportNode(e,r,n),(0,$r.isParserRule)(e)){if(!e.returnType&&!e.dataType){let o=(i=e.inferredType)!==null&&i!==void 0?i:e;r.push({node:o,name:o.name,type:"Interface",documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(o)})}(0,_u.streamAllContents)(e).forEach(o=>{if((0,$r.isAction)(o)&&o.inferredType){let a=(0,$m.getActionType)(o);a&&r.push({node:e,name:a,type:"Interface",documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(e)})}})}}processNode(e,r,n){(0,$r.isReturnType)(e)||(this.processTypeNode(e,r,n),this.processActionNode(e,r,n),super.processNode(e,r,n))}processTypeNode(e,r,n){var i;let o=e.$container;if(o&&(0,$r.isParserRule)(e)&&!e.returnType&&!e.dataType){let a=(i=e.inferredType)!==null&&i!==void 0?i:e;n.add(o,{node:a,name:a.name,type:"Interface",documentUri:r.uri,path:this.astNodeLocator.getAstNodePath(a)})}}processActionNode(e,r,n){let i=(0,_u.findRootNode)(e);if(i&&(0,$r.isAction)(e)&&e.inferredType){let o=(0,$m.getActionType)(e);o&&n.add(i,{node:e,name:o,type:"Interface",documentUri:r.uri,path:this.astNodeLocator.getAstNodePath(e)})}}};Pa.LangiumGrammarScopeComputation=jm});var Bm=d(sr=>{"use strict";var wU=sr&&sr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),OU=sr&&sr.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),DU=sr&&sr.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&wU(e,t,r);return OU(e,t),e};Object.defineProperty(sr,"__esModule",{value:!0});sr.LangiumGrammarValidator=sr.IssueCodes=sr.registerValidationChecks=void 0;var Gm=aa(),Fi=Oe(),ji=br(),Um=Xe(),Gi=St(),Hm=Ot(),Ke=DU(ke()),Wm=ke(),It=Ct();function IU(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarValidator,n={Action:[r.checkAssignmentReservedName],AbstractRule:r.checkRuleName,Assignment:[r.checkAssignmentWithFeatureName,r.checkAssignmentToFragmentRule,r.checkAssignmentTypes,r.checkAssignmentReservedName],ParserRule:[r.checkParserRuleDataType,r.checkRuleParametersUsed,r.checkParserRuleReservedName],TerminalRule:[r.checkTerminalRuleReturnType,r.checkHiddenTerminalRule,r.checkEmptyTerminalRule],InferredType:r.checkTypeReservedName,Keyword:r.checkKeyword,UnorderedGroup:r.checkUnorderedGroup,Grammar:[r.checkGrammarName,r.checkEntryGrammarRule,r.checkUniqueRuleName,r.checkUniqueTypeName,r.checkUniqueImportedRules,r.checkDuplicateImportedGrammar,r.checkGrammarHiddenTokens,r.checkGrammarForUnusedRules,r.checkGrammarTypeInfer,r.checkClashingTerminalNames],GrammarImport:r.checkPackageImport,CharacterRange:r.checkInvalidCharacterRange,Interface:[r.checkTypeReservedName,r.checkInterfacePropertyTypes],Type:[r.checkTypeReservedName],TypeAttribute:r.checkTypeReservedName,RuleCall:[r.checkUsedHiddenTerminalRule,r.checkUsedFragmentTerminalRule,r.checkRuleCallParameters],TerminalRuleCall:r.checkUsedHiddenTerminalRule,CrossReference:[r.checkCrossReferenceSyntax,r.checkCrossRefNameAssignment,r.checkCrossRefTerminalType,r.checkCrossRefType],AtomType:[r.checkAtomTypeRefType,r.checkFragmentsInTypes]};e.register(n,r)}sr.registerValidationChecks=IU;var ar;(function(t){t.GrammarNameUppercase="grammar-name-uppercase",t.RuleNameUppercase="rule-name-uppercase",t.HiddenGrammarTokens="hidden-grammar-tokens",t.UseRegexTokens="use-regex-tokens",t.EntryRuleTokenSyntax="entry-rule-token-syntax",t.CrossRefTokenSyntax="cross-ref-token-syntax",t.UnnecessaryFileExtension="unnecessary-file-extension",t.InvalidReturns="invalid-returns",t.InvalidInfers="invalid-infers",t.MissingInfer="missing-infer",t.MissingReturns="missing-returns",t.SuperfluousInfer="superfluous-infer",t.OptionalUnorderedGroup="optional-unordered-group"})(ar=sr.IssueCodes||(sr.IssueCodes={}));var Km=class{constructor(e){this.references=e.references.References,this.documents=e.shared.workspace.LangiumDocuments}checkGrammarName(e,r){if(e.name){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Grammar name should start with an upper case letter.",{node:e,property:"name",code:ar.GrammarNameUppercase})}}checkEntryGrammarRule(e,r){if(e.isDeclared&&!e.name)return;let n=e.rules.filter(i=>Ke.isParserRule(i)&&i.entry);if(e.isDeclared&&n.length===0){let i=e.rules.find(o=>Ke.isParserRule(o)&&!(0,It.isDataTypeRule)(o));i?r("error","The grammar is missing an entry parser rule. This rule can be an entry one.",{node:i,property:"name",code:ar.EntryRuleTokenSyntax}):r("error","This grammar is missing an entry parser rule.",{node:e,property:"name"})}else!e.isDeclared&&n.length>=1?n.forEach(i=>r("error","Cannot declare entry rules for unnamed grammars.",{node:i,property:"name"})):n.length>1?n.forEach(i=>r("error","The entry rule has to be unique.",{node:i,property:"name"})):n.length===1&&(0,It.isDataTypeRule)(n[0])&&r("error","The entry rule cannot be a data type rule.",{node:n[0],property:"name"})}checkUniqueRuleName(e,r){let n=i=>(0,Hm.stream)(i.rules).filter(o=>!Tu(o));this.checkUniqueName(e,r,n,"rule")}checkUniqueTypeName(e,r){let n=i=>(0,Hm.stream)(i.types).concat(i.interfaces);this.checkUniqueName(e,r,n,"type")}checkUniqueName(e,r,n,i){let o=new ji.MultiMap;n(e).forEach(u=>o.add(u.name,u));for(let[,u]of o.entriesGroupedByKey())u.length>1&&u.forEach(c=>{r("error",`A ${i}'s name has to be unique.`,{node:c,property:"name"})});let a=new Set,s=(0,It.resolveTransitiveImports)(this.documents,e);for(let u of s)n(u).forEach(c=>a.add(c.name));for(let u of o.keys())a.has(u)&&o.get(u).forEach(l=>{r("error",`A ${i} with the name '${l.name}' already exists in an imported grammar.`,{node:l,property:"name"})})}checkDuplicateImportedGrammar(e,r){let n=new ji.MultiMap;for(let i of e.imports){let o=(0,It.resolveImport)(this.documents,i);o&&n.add(o,i)}for(let[,i]of n.entriesGroupedByKey())i.length>1&&i.forEach((o,a)=>{a>0&&r("warning","The grammar is already being directly imported.",{node:o,tags:[Gm.DiagnosticTag.Unnecessary]})})}checkUniqueImportedRules(e,r){let n=new Map;for(let o of e.imports){let a=(0,It.resolveTransitiveImports)(this.documents,o);n.set(o,a)}let i=new ji.MultiMap;for(let o of e.imports){let a=n.get(o);for(let s of e.imports){if(o===s)continue;let u=n.get(s),c=this.getDuplicateExportedRules(a,u);for(let l of c)i.add(o,l)}}for(let o of e.imports){let a=i.get(o);a.length>0&&r("error","Some rules exported by this grammar are also included in other imports: "+(0,Hm.stream)(a).distinct().join(", "),{node:o,property:"path"})}}getDuplicateExportedRules(e,r){let i=e.filter(s=>!r.includes(s)).flatMap(s=>s.rules),o=r.flatMap(s=>s.rules),a=new Set;for(let s of i){let u=s.name;for(let c of o){let l=c.name;u===l&&a.add(c.name)}}return a}checkGrammarTypeInfer(e,r){var n,i,o;let a=new Set;for(let u of e.types)a.add(u.name);for(let u of e.interfaces)a.add(u.name);(0,It.resolveTransitiveImports)(this.documents,e).forEach(u=>{u.types.forEach(c=>a.add(c.name)),u.interfaces.forEach(c=>a.add(c.name))});for(let u of e.rules.filter(Ke.isParserRule)){if(Tu(u))continue;let c=(0,It.isDataTypeRule)(u),l=!u.returnType&&!u.dataType,f=(0,It.getTypeNameWithoutError)(u);if(!c&&f&&a.has(f)===l){if((l||((n=u.returnType)===null||n===void 0?void 0:n.ref)!==void 0)&&u.inferredType===void 0)r("error",s(f,l),{node:u,property:"name",code:ar.MissingReturns});else if(l||((i=u.returnType)===null||i===void 0?void 0:i.ref)!==void 0){let h=(0,Gi.findNodeForKeyword)(u.inferredType.$cstNode,"infers");r("error",s(f,l),{node:u.inferredType,property:"name",code:ar.InvalidInfers,data:h&&(0,Um.toDocumentSegment)(h)})}}else if(c&&l){let h=(0,Gi.findNodeForKeyword)(u.$cstNode,"infer");r("error","Data type rules cannot infer a type.",{node:u,property:"inferredType",code:ar.InvalidInfers,data:h&&(0,Um.toDocumentSegment)(h)})}}for(let u of(0,Fi.streamAllContents)(e).filter(Ke.isAction)){let c=this.getActionType(u);if(c){let l=Boolean(u.inferredType),f=(0,It.getTypeNameWithoutError)(u);if(u.type&&a.has(f)===l){let h=l?(0,Gi.findNodeForKeyword)(u.$cstNode,"infer"):(0,Gi.findNodeForKeyword)(u.$cstNode,"{");r("error",s(f,l),{node:u,property:"type",code:l?ar.SuperfluousInfer:ar.MissingInfer,data:h&&(0,Um.toDocumentSegment)(h)})}else if(c&&a.has(f)&&l&&u.$cstNode){let h=(0,Gi.findNodeForProperty)((o=u.inferredType)===null||o===void 0?void 0:o.$cstNode,"name"),v=(0,Gi.findNodeForKeyword)(u.$cstNode,"{");h&&v&&r("error",`${f} is a declared type and cannot be redefined.`,{node:u,property:"type",code:ar.SuperfluousInfer,data:{start:v.range.end,end:h.range.start}})}}}function s(u,c){return c?`The type '${u}' is already explicitly declared and cannot be inferred.`:`The type '${u}' is not explicitly declared and must be inferred.`}}getActionType(e){var r;if(e.type)return(r=e.type)===null||r===void 0?void 0:r.ref;if(e.inferredType)return e.inferredType}checkGrammarHiddenTokens(e,r){e.definesHiddenTokens&&r("error","Hidden terminals are declared at the terminal definition.",{node:e,property:"definesHiddenTokens",code:ar.HiddenGrammarTokens})}checkHiddenTerminalRule(e,r){e.hidden&&e.fragment&&r("error","Cannot use terminal fragments as hidden tokens.",{node:e,property:"hidden"})}checkEmptyTerminalRule(e,r){try{let n=(0,It.terminalRegex)(e);new RegExp(n).test("")&&r("error","This terminal could match an empty string.",{node:e,property:"name"})}catch{}}checkUsedHiddenTerminalRule(e,r){let n=(0,Fi.getContainerOfType)(e,i=>Ke.isTerminalRule(i)||Ke.isParserRule(i));if(n){if("hidden"in n&&n.hidden)return;let i=e.rule.ref;Ke.isTerminalRule(i)&&i.hidden&&r("error","Cannot use hidden terminal in non-hidden rule",{node:e,property:"rule"})}}checkUsedFragmentTerminalRule(e,r){let n=e.rule.ref;Ke.isTerminalRule(n)&&n.fragment&&(0,Fi.getContainerOfType)(e,Ke.isParserRule)&&r("error","Cannot use terminal fragments as part of parser rules.",{node:e,property:"rule"})}checkCrossReferenceSyntax(e,r){e.deprecatedSyntax&&r("error","'|' is deprecated. Please, use ':' instead.",{node:e,property:"deprecatedSyntax",code:ar.CrossRefTokenSyntax})}checkPackageImport(e,r){(0,It.resolveImport)(this.documents,e)===void 0?r("error","Import cannot be resolved.",{node:e,property:"path"}):e.path.endsWith(".langium")&&r("warning","Imports do not need file extensions.",{node:e,property:"path",code:ar.UnnecessaryFileExtension})}checkInvalidCharacterRange(e,r){if(e.right){let n="Character ranges cannot use more than one character",i=!1;e.left.value.length>1&&(i=!0,r("error",n,{node:e.left,property:"value"})),e.right.value.length>1&&(i=!0,r("error",n,{node:e.right,property:"value"})),i||r("hint","Consider using regex instead of character ranges",{node:e,code:ar.UseRegexTokens})}}checkGrammarForUnusedRules(e,r){let n=(0,Gi.getAllReachableRules)(e,!0);for(let i of e.rules)Ke.isTerminalRule(i)&&i.hidden||Tu(i)||n.has(i)||r("hint","This rule is declared but never referenced.",{node:i,property:"name",tags:[Gm.DiagnosticTag.Unnecessary]})}checkClashingTerminalNames(e,r){let n=new ji.MultiMap,i=new Set;for(let c of e.rules)Ke.isTerminalRule(c)&&c.name&&n.add(c.name,c),Ke.isParserRule(c)&&(0,Fi.streamAllContents)(c).filter(Ke.isKeyword).forEach(f=>i.add(f.value));let o=new ji.MultiMap,a=new ji.MultiMap;for(let c of e.imports){let l=(0,It.resolveTransitiveImports)(this.documents,c);for(let f of l)for(let h of f.rules)Ke.isTerminalRule(h)&&h.name?o.add(h.name,c):Ke.isParserRule(h)&&h.name&&(0,Fi.streamAllContents)(h).filter(Ke.isKeyword).forEach(m=>a.add(m.value,c))}for(let c of n.values())if(i.has(c.name))r("error","Terminal name clashes with existing keyword.",{node:c,property:"name"});else if(a.has(c.name)){let l=a.get(c.name);r("error",`Terminal name clashes with imported keyword from "${l[0].path}".`,{node:c,property:"name"})}let s=new ji.MultiMap;for(let c of i)for(let l of o.get(c))s.add(l,c);for(let[c,l]of s.entriesGroupedByKey())l.length>0&&r("error",`Imported terminals (${l.join(", ")}) clash with locally defined keywords.`,{node:c,property:"path"});let u=new ji.MultiMap;for(let[c,l]of o.entriesGroupedByKey()){let f=a.get(c);f.length>0&&l.filter(h=>!f.includes(h)).forEach(h=>u.add(h,c))}for(let[c,l]of u.entriesGroupedByKey())l.length>0&&r("error",`Imported terminals (${l.join(", ")}) clash with imported keywords.`,{node:c,property:"path"})}checkRuleName(e,r){if(e.name&&!Tu(e)){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Rule name should start with an upper case letter.",{node:e,property:"name",code:ar.RuleNameUppercase})}}checkTypeReservedName(e,r){this.checkReservedName(e,"name",r)}checkAssignmentReservedName(e,r){this.checkReservedName(e,"feature",r)}checkParserRuleReservedName(e,r){e.inferredType||this.checkReservedName(e,"name",r)}checkReservedName(e,r,n){let i=e[r];typeof i=="string"&&xU.has(i)&&n("error",`'${i}' is a reserved name of the JavaScript runtime.`,{node:e,property:r})}checkKeyword(e,r){(0,Fi.getContainerOfType)(e,Wm.isParserRule)&&(e.value.length===0?r("error","Keywords cannot be empty.",{node:e}):e.value.trim().length===0?r("error","Keywords cannot only consist of whitespace characters.",{node:e}):/\s/g.test(e.value)&&r("warning","Keywords should not contain whitespace characters.",{node:e}))}checkUnorderedGroup(e,r){e.elements.forEach(n=>{(0,It.isOptionalCardinality)(n.cardinality)&&r("error","Optional elements in Unordered groups are currently not supported",{node:n,code:ar.OptionalUnorderedGroup})})}checkRuleParametersUsed(e,r){let n=e.parameters;if(n.length>0){let i=(0,Fi.streamAllContents)(e).filter(Ke.isParameterReference);for(let o of n)i.some(a=>a.parameter.ref===o)||r("hint",`Parameter '${o.name}' is unused.`,{node:o,tags:[Gm.DiagnosticTag.Unnecessary]})}}checkParserRuleDataType(e,r){if(Tu(e))return;let n=e.dataType,i=(0,It.isDataTypeRule)(e);!n&&i?r("error","This parser rule does not create an object. Add a primitive return type or an action to the start of the rule to force object instantiation.",{node:e,property:"name"}):n&&!i&&r("error","Normal parser rules are not allowed to return a primitive value. Use a datatype rule for that.",{node:e,property:"dataType"})}checkAssignmentToFragmentRule(e,r){e.terminal&&(0,Wm.isRuleCall)(e.terminal)&&(0,Wm.isParserRule)(e.terminal.rule.ref)&&e.terminal.rule.ref.fragment&&r("error",`Cannot use fragment rule '${e.terminal.rule.ref.name}' for assignment of property '${e.feature}'.`,{node:e,property:"terminal"})}checkAssignmentTypes(e,r){if(!e.terminal)return;let n;(0,Fi.streamAllContents)(e.terminal).map(o=>Ke.isCrossReference(o)?"ref":"other").find(o=>n?o!==n:(n=o,!1))&&r("error",this.createMixedTypeError(e.feature),{node:e,property:"terminal"})}checkInterfacePropertyTypes(e,r){e.attributes.filter(n=>n.typeAlternatives.length>1).forEach(n=>{let i=a=>a.isRef?"ref":"other",o=i(n.typeAlternatives[0]);n.typeAlternatives.slice(1).some(a=>i(a)!==o)&&r("error",this.createMixedTypeError(n.name),{node:n,property:"typeAlternatives"})})}createMixedTypeError(e){return`Mixing a cross-reference with other types is not supported. Consider splitting property "${e}" into two or more different properties.`}checkTerminalRuleReturnType(e,r){var n;!((n=e.type)===null||n===void 0)&&n.name&&!(0,It.isPrimitiveType)(e.type.name)&&r("error","Terminal rules can only return primitive types like 'string', 'boolean', 'number', 'Date' or 'bigint'.",{node:e.type,property:"name"})}checkRuleCallParameters(e,r){let n=e.rule.ref;if(Ke.isParserRule(n)){let i=n.parameters.length,o=e.arguments.length;i!==o&&r("error",`Rule '${n.name}' expects ${i} arguments, but got ${o}.`,{node:e})}else Ke.isTerminalRule(n)&&e.arguments.length>0&&r("error","Terminal rules do not accept any arguments",{node:e})}checkCrossRefNameAssignment(e,r){!e.terminal&&e.type.ref&&!(0,Gi.findNameAssignment)(e.type.ref)&&r("error","Cannot infer terminal or data type rule for cross reference.",{node:e,property:"type"})}checkCrossRefTerminalType(e,r){Ke.isRuleCall(e.terminal)&&Ke.isParserRule(e.terminal.rule.ref)&&!(0,It.isDataTypeRule)(e.terminal.rule.ref)&&r("error","Parser rules cannot be used for cross references.",{node:e.terminal,property:"rule"})}checkCrossRefType(e,r){let n=this.checkReferenceToRuleButNotType(e?.type);n&&r("error",n,{node:e,property:"type"})}checkAtomTypeRefType(e,r){if(e?.refType){let n=this.checkReferenceToRuleButNotType(e?.refType);n&&r("error",n,{node:e,property:"refType"})}}checkFragmentsInTypes(e,r){var n,i;Ke.isParserRule((n=e.refType)===null||n===void 0?void 0:n.ref)&&(!((i=e.refType)===null||i===void 0)&&i.ref.fragment)&&r("error","Cannot use rule fragments in types.",{node:e,property:"refType"})}checkReferenceToRuleButNotType(e){if(e&&Ke.isParserRule(e.ref)&&!(0,It.isDataTypeRule)(e.ref)&&(e.ref.returnType||e.ref.inferredType)){let r=(0,It.getTypeNameWithoutError)(e.ref);if(r)return`Use the rule type '${r}' instead of the typed rule name '${e.ref.name}' for cross references.`}}checkAssignmentWithFeatureName(e,r){e.feature==="name"&&Ke.isCrossReference(e.terminal)&&r("warning",'The "name" property is not recommended for cross-references.',{node:e,property:"feature"})}};sr.LangiumGrammarValidator=Km;function Tu(t){return!t.definition||!t.definition.$cstNode||t.definition.$cstNode.length===0}var xU=new Set(["Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array","Map","Set","WeakMap","WeakSet","Error","AggregateError","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","BigInt","RegExp","Number","Object","Function","Symbol","String","Math","NaN","Infinity","isFinite","isNaN","Buffer","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","globalThis","decodeURIComponent","decodeURI","encodeURIComponent","encodeURI","parseInt","parseFloat","Promise","Generator","GeneratorFunction","AsyncFunction","AsyncGenerator","AsyncGeneratorFunction","Reflect","Proxy","Date","Intl","eval","undefined"])});var ql=d(ln=>{"use strict";Object.defineProperty(ln,"__esModule",{value:!0});ln.DocumentValidator=ln.toDiagnosticSeverity=ln.getDiagnosticRange=ln.DefaultDocumentValidator=void 0;var Fr=qe(),YA=St(),qU=Oe(),LU=Xe(),Il=Mr(),zm=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r=Fr.CancellationToken.None){let n=e.parseResult,i=[];await(0,Il.interruptAndCheck)(r);for(let o of n.lexerErrors){let a={severity:Fr.DiagnosticSeverity.Error,range:{start:{line:o.line-1,character:o.column-1},end:{line:o.line-1,character:o.column+o.length-1}},message:o.message,code:xl.LexingError,source:this.getSource()};i.push(a)}for(let o of n.parserErrors){let a;if(isNaN(o.token.startOffset)){if("previousToken"in o){let s=o.previousToken;if(isNaN(s.startOffset))a=Fr.Range.create(0,0,0,0);else{let u=Fr.Position.create(s.endLine-1,s.endColumn);a=Fr.Range.create(u,u)}}}else a=(0,LU.tokenToRange)(o.token);if(a){let s={severity:Fr.DiagnosticSeverity.Error,range:a,message:o.message,code:xl.ParsingError,source:this.getSource()};i.push(s)}}for(let o of e.references){let a=o.error;if(a){let s={containerType:a.container.$type,property:a.property,refText:a.reference.$refText},u={node:a.container,property:a.property,index:a.index,code:xl.LinkingError,data:s};i.push(this.toDiagnostic("error",a.message,u))}}try{i.push(...await this.validateAst(n.value,e,r))}catch(o){if((0,Il.isOperationCancelled)(o))throw o;console.error("An error occurred during validation:",o)}return await(0,Il.interruptAndCheck)(r),i}async validateAst(e,r,n=Fr.CancellationToken.None){let i=[],o=(a,s,u)=>{i.push(this.toDiagnostic(a,s,u))};return await Promise.all((0,qU.streamAst)(e).map(async a=>{await(0,Il.interruptAndCheck)(n);let s=this.validationRegistry.getChecks(a.$type);for(let u of s)await u(a,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:XA(n),severity:JA(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};ln.DefaultDocumentValidator=zm;function XA(t){if(Fr.Range.is(t.range))return t.range;let e;return typeof t.property=="string"?e=(0,YA.findNodeForProperty)(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=(0,YA.findNodeForKeyword)(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}ln.getDiagnosticRange=XA;function JA(t){switch(t){case"error":return Fr.DiagnosticSeverity.Error;case"warning":return Fr.DiagnosticSeverity.Warning;case"info":return Fr.DiagnosticSeverity.Information;case"hint":return Fr.DiagnosticSeverity.Hint;default:throw new Error("Invalid diagnostic severity: "+t)}}ln.toDiagnosticSeverity=JA;var xl;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(xl=ln.DocumentValidator||(ln.DocumentValidator={}))});var rb=d(Dn=>{"use strict";var MU=Dn&&Dn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),$U=Dn&&Dn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),FU=Dn&&Dn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&MU(e,t,r);return $U(e,t),e};Object.defineProperty(Dn,"__esModule",{value:!0});Dn.LangiumGrammarCodeActionProvider=void 0;var jr=qe(),jU=ui(),QA=Oe(),ZA=Xe(),GU=St(),eb=Aa(),tb=fi(),UU=ql(),Vm=FU(ke()),Gr=Bm(),Ym=class{constructor(e){this.reflection=e.shared.AstReflection,this.indexManager=e.shared.workspace.IndexManager}getCodeActions(e,r){let n=[],i=o=>o&&n.push(o);for(let o of r.context.diagnostics)this.createCodeActions(o,e,i);return n}createCodeActions(e,r,n){switch(e.code){case Gr.IssueCodes.GrammarNameUppercase:case Gr.IssueCodes.RuleNameUppercase:n(this.makeUpperCase(e,r));break;case Gr.IssueCodes.HiddenGrammarTokens:n(this.fixHiddenTerminals(e,r));break;case Gr.IssueCodes.UseRegexTokens:n(this.fixRegexTokens(e,r));break;case Gr.IssueCodes.EntryRuleTokenSyntax:n(this.addEntryKeyword(e,r));break;case Gr.IssueCodes.CrossRefTokenSyntax:n(this.fixCrossRefSyntax(e,r));break;case Gr.IssueCodes.UnnecessaryFileExtension:n(this.fixUnnecessaryFileExtension(e,r));break;case Gr.IssueCodes.MissingReturns:n(this.fixMissingReturns(e,r));break;case Gr.IssueCodes.InvalidInfers:case Gr.IssueCodes.InvalidReturns:n(this.fixInvalidReturnsInfers(e,r));break;case Gr.IssueCodes.MissingInfer:n(this.fixMissingInfer(e,r));break;case Gr.IssueCodes.SuperfluousInfer:n(this.fixSuperfluousInfer(e,r));break;case UU.DocumentValidator.LinkingError:{let i=e.data;i&&i.containerType==="RuleCall"&&i.property==="rule"&&n(this.addNewRule(e,i,r)),i&&this.lookInGlobalScope(e,i,r).forEach(n);break}}}fixMissingReturns(e,r){let n=r.textDocument.getText(e.range);if(n)return{title:`Add explicit return type for parser rule ${n}`,kind:jr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:`${n} returns ${n}`}]}}}}fixInvalidReturnsInfers(e,r){let n=e.data;if(n){let i=r.textDocument.getText(n.range);return{title:`Correct ${i} usage`,kind:jr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:n.range,newText:i==="infers"?"returns":"infers"}]}}}}}fixMissingInfer(e,r){let n=e.data;if(n)return{title:"Correct 'infer' usage",kind:jr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:{start:n.range.end,end:n.range.end},newText:"infer "}]}}}}fixSuperfluousInfer(e,r){if(e.data)return{title:"Remove the 'infer' keyword",kind:jr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:e.data,newText:""}]}}}}fixUnnecessaryFileExtension(e,r){let n=Object.assign({},e.range.end);n.character-=1;let i=Object.assign({},n);return i.character-=8,{title:"Remove file extension",kind:jr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:i,end:n},newText:""}]}}}}makeUpperCase(e,r){let n={start:e.range.start,end:{line:e.range.start.line,character:e.range.start.character+1}};return{title:"First letter to upper case",kind:jr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:n,newText:r.textDocument.getText(n).toUpperCase()}]}}}}addEntryKeyword(e,r){return{title:"Add entry keyword",kind:jr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:e.range.start,end:e.range.start},newText:"entry "}]}}}}fixRegexTokens(e,r){let n=r.textDocument.offsetAt(e.range.start),i=r.parseResult.value.$cstNode;if(i){let o=(0,ZA.findLeafNodeAtOffset)(i,n),a=(0,QA.getContainerOfType)(o?.element,Vm.isCharacterRange);if(a&&a.right&&a.$cstNode){let s=a.left.value,u=a.right.value;return{title:"Refactor into regular expression",kind:jr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:a.$cstNode.range,newText:`/[${(0,eb.escapeRegExp)(s)}-${(0,eb.escapeRegExp)(u)}]/`}]}}}}}}fixCrossRefSyntax(e,r){return{title:"Replace '|' with ':'",kind:jr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:":"}]}}}}fixHiddenTerminals(e,r){let n=r.parseResult.value,i=n.hiddenTokens,o=[],a=(0,GU.findNodeForProperty)(n.$cstNode,"definesHiddenTokens");if(a){let s=a.range.start,u=a.offset,c=n.$cstNode.text.indexOf(")",u)+1;o.push({newText:"",range:{start:s,end:r.textDocument.positionAt(c)}})}for(let s of i){let u=s.ref;if(u&&Vm.isTerminalRule(u)&&!u.hidden&&u.$cstNode){let c=u.$cstNode.range.start;o.push({newText:"hidden ",range:{start:c,end:c}})}}return{title:"Fix hidden terminals",kind:jr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:o}}}}addNewRule(e,r,n){let i=n.textDocument.offsetAt(e.range.start),o=n.parseResult.value.$cstNode;if(o){let a=(0,ZA.findLeafNodeAtOffset)(o,i),s=(0,QA.getContainerOfType)(a?.element,Vm.isParserRule);if(s&&s.$cstNode)return{title:`Add new rule '${r.refText}'`,kind:jr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:s.$cstNode.range.end,end:s.$cstNode.range.end},newText:`

`+r.refText+`:
    /* TODO implement rule */ {infer `+r.refText+"};"}]}}}}}lookInGlobalScope(e,r,n){var i,o;let a={container:{$type:r.containerType},property:r.property,reference:{$refText:r.refText}},s=this.reflection.getReferenceType(a),u=this.indexManager.allElements(s).filter(h=>h.name===r.refText),c=[],l=-1,f=-1;for(let h of u){if((0,tb.equalURI)(h.documentUri,n.uri))continue;let v=HU(n.uri,h.documentUri),m,R="",P=n.parseResult.value,C=P.imports.find(b=>b.path&&v<b.path);if(C)m=(i=C.$cstNode)===null||i===void 0?void 0:i.range.start;else if(P.imports.length>0){let b=P.imports[P.imports.length-1].$cstNode.range.end;b&&(m={line:b.line+1,character:0})}else P.rules.length>0&&(m=(o=P.rules[0].$cstNode)===null||o===void 0?void 0:o.range.start,R=`
`);m&&((l<0||v.length<f)&&(l=c.length,f=v.length),c.push({title:`Add import to '${v}'`,kind:jr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:m,end:m},newText:`import '${v}'
${R}`}]}}}))}return l>=0&&(c[l].isPreferred=!0),c}};Dn.LangiumGrammarCodeActionProvider=Ym;function HU(t,e){let r=jU.Utils.dirname(t),n=(0,tb.relativeURI)(r,e);return!n.startsWith("./")&&!n.startsWith("../")&&(n="./"+n),n.endsWith(".langium")&&(n=n.substring(0,n.length-8)),n}});var Ml=d(Ll=>{"use strict";Object.defineProperty(Ll,"__esModule",{value:!0});Ll.DefaultFoldingRangeProvider=void 0;var Xm=qe(),WU=Oe(),KU=Xe(),Jm=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=(0,WU.streamAllContents)(i).iterator(),a;do if(a=o.next(),!a.done){let s=a.value;this.shouldProcess(s)&&this.collectObjectFolding(e,s,r),this.shouldProcessContent(s)||o.prune()}while(!a.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of(0,KU.flattenCst)(i))if(this.commentNames.includes(o.tokenType.name)){let a=this.toFoldingRange(e,o,Xm.FoldingRangeKind.Comment);a&&n(a)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,a=i.end;if(!(a.line-o.line<2))return this.includeLastFoldingLine(r,n)||(a=e.textDocument.positionAt(e.textDocument.offsetAt({line:a.line,character:0})-1)),Xm.FoldingRange.create(o.line,a.line,o.character,a.character,n)}includeLastFoldingLine(e,r){if(r===Xm.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};Ll.DefaultFoldingRangeProvider=Jm});var nb=d($l=>{"use strict";Object.defineProperty($l,"__esModule",{value:!0});$l.LangiumGrammarFoldingRangeProvider=void 0;var BU=Ml(),zU=ke(),Qm=class extends BU.DefaultFoldingRangeProvider{shouldProcessContent(e){return!(0,zU.isParserRule)(e)}};$l.LangiumGrammarFoldingRangeProvider=Qm});var tg=d(dn=>{"use strict";Object.defineProperty(dn,"__esModule",{value:!0});dn.Formatting=dn.FormattingRegion=dn.DefaultNodeFormatter=dn.AbstractFormatter=void 0;var Fl=St(),Zm=dr(),VU=Oe(),ib=Xe(),Ru=Ot(),eg=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new jl(e,this.collector)}formatDocument(e,r){return this.doDocumentFormat(e,r.options)}formatDocumentRange(e,r){return this.doDocumentFormat(e,r.options,r.range)}formatDocumentOnType(e,r){return this.doDocumentFormat(e,r.options,{start:{character:0,line:r.position.line},end:r.position})}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(s,u,c)=>{var l,f;let h=this.nodeModeToKey(s,u),v=i.get(h),m=(l=c.options.priority)!==null&&l!==void 0?l:0,R=(f=v?.options.priority)!==null&&f!==void 0?f:0;(!v||R<=m)&&i.set(h,c)};this.collector=o,this.iterateAstFormatting(e,n);let a=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,a)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let a=e.offsetAt(i.range.start),s=e.offsetAt(o.range.end);a<s&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=(0,VU.streamAllContents)(n).iterator(),o;do if(o=i.next(),!o.done){let a=o.value;this.insideRange(a.$cstNode.range,r)?this.format(a):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},a=[],u=this.iterateCstTree(e,o).iterator(),c,l;do if(l=u.next(),!l.done){let f=l.value,h=(0,Zm.isLeafCstNode)(f),v=this.nodeModeToKey(f,"prepend"),m=r.get(v);if(r.delete(v),m){let C=this.createTextEdit(c,f,m,o);for(let b of C)b&&this.insideRange(b.range,i)&&this.isNecessary(b,e.textDocument)&&a.push(b)}let R=this.nodeModeToKey(f,"append"),P=r.get(R);if(r.delete(R),P){let C=(0,ib.getNextNode)(f);if(C){let b=this.createTextEdit(f,C,P,o);for(let A of b)A&&this.insideRange(A.range,i)&&this.isNecessary(A,e.textDocument)&&a.push(A)}}if(!m&&f.hidden){let C=this.createHiddenTextEdits(c,f,void 0,o);for(let b of C)b&&this.insideRange(b.range,i)&&this.isNecessary(b,e.textDocument)&&a.push(b)}h&&(c=f)}while(!l.done);return a}createHiddenTextEdits(e,r,n,i){var o;let a=r.range.start.line;if(e&&e.range.end.line===a)return[];let s=[],u={start:{character:0,line:a},end:r.range.start},c=i.document.getText(u),l=this.findFittingMove(u,(o=n?.moves)!==null&&o!==void 0?o:[],i),f=this.getExistingIndentationCharacterCount(c,i),v=this.getIndentationCharacterCount(i,l)-f;if(v===0)return[];let m="";v>0&&(m=(i.options.insertSpaces?" ":"	").repeat(v));let R=r.text.split(`
`);R[0]=c+R[0];for(let P=0;P<R.length;P++){let C=a+P,b={character:0,line:C};if(v>0)s.push({newText:m,range:{start:b,end:b}});else{let A=R[P],O=0;for(;O<A.length;O++){let $=A.charAt(O);if($!==" "&&$!=="	")break}s.push({newText:"",range:{start:b,end:{line:C,character:Math.min(O,Math.abs(v))}}})}}return s}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let a={start:(o=e?.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},s=this.findFittingMove(a,n.moves,i);if(!s)return[];let u=s.characters,c=s.lines,l=s.tabs,f=i.indentation;i.indentation+=l??0;let h=[];return u!==void 0?h.push(this.createSpaceTextEdit(a,u,n.options)):c!==void 0?h.push(this.createLineTextEdit(a,c,i,n.options)):l!==void 0&&h.push(this.createTabTextEdit(a,Boolean(e),i)),(0,Zm.isLeafCstNode)(r)&&(i.indentation=f),h}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let s=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${s}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),a=r?1:0,s=Math.max(e.end.line-e.start.line,a);return{newText:`${`
`.repeat(s)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new Ru.TreeStreamImpl(i,o=>this.iterateCst(o,r)):Ru.EMPTY_STREAM}iterateCst(e,r){if(!(0,Zm.isCompositeCstNode)(e))return Ru.EMPTY_STREAM;let n=r.indentation;return new Ru.StreamImpl(()=>({index:0}),i=>i.index<e.children.length?{done:!1,value:e.children[i.index++]}:(r.indentation=n,Ru.DONE_RESULT))}};dn.AbstractFormatter=eg;var jl=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new pr(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new pr(r,this.collector)}property(e,r){let n=(0,Fl.findNodeForProperty)(this.astNode.$cstNode,e,r);return new pr(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=(0,Fl.findNodesForProperty)(this.astNode.$cstNode,n);r.push(...i)}return new pr(r,this.collector)}keyword(e,r){let n=(0,Fl.findNodeForKeyword)(this.astNode.$cstNode,e,r);return new pr(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=(0,Fl.findNodesForKeyword)(this.astNode.$cstNode,n);r.push(...i)}return new pr(r,this.collector)}cst(e){return new pr([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new pr([],this.collector);let o=n[0],a=i[0];if(o.offset>a.offset){let s=o;o=a,a=s}return new pr((0,ib.getInteriorNodes)(o,a),this.collector)}};dn.DefaultNodeFormatter=jl;var pr=class{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new pr(this.nodes.slice(e,r),this.collector)}};dn.FormattingRegion=pr;var YU;(function(t){function e(...l){return{options:{},moves:l.flatMap(f=>f.moves).sort(c)}}t.fit=e;function r(l){return i(0,l)}t.noSpace=r;function n(l){return i(1,l)}t.oneSpace=n;function i(l,f){return{options:f??{},moves:[{characters:l}]}}t.spaces=i;function o(l){return a(1,l)}t.newLine=o;function a(l,f){return{options:f??{},moves:[{lines:l}]}}t.newLines=a;function s(l){return{options:l??{},moves:[{tabs:1,lines:1}]}}t.indent=s;function u(l){return{options:l??{},moves:[{tabs:0}]}}t.noIndent=u;function c(l,f){var h,v,m,R,P,C;let b=(h=l.lines)!==null&&h!==void 0?h:0,A=(v=f.lines)!==null&&v!==void 0?v:0,O=(m=l.tabs)!==null&&m!==void 0?m:0,$=(R=f.tabs)!==null&&R!==void 0?R:0,W=(P=l.characters)!==null&&P!==void 0?P:0,ee=(C=f.characters)!==null&&C!==void 0?C:0;return b<A?-1:b>A?1:O<$?-1:O>$?1:W<ee?-1:W>ee?1:0}})(YU=dn.Formatting||(dn.Formatting={}))});var ob=d(In=>{"use strict";var XU=In&&In.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),JU=In&&In.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),QU=In&&In.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&XU(e,t,r);return JU(e,t),e};Object.defineProperty(In,"__esModule",{value:!0});In.LangiumGrammarFormatter=void 0;var Ce=tg(),Ui=QU(ke()),rg=class extends Ce.AbstractFormatter{format(e){if(Ui.isCrossReference(e))this.getNodeFormatter(e).properties("type","terminal").surround(Ce.Formatting.noSpace());else if(Ui.isParserRule(e)){let r=this.getNodeFormatter(e);r.keywords("entry","fragment","returns").append(Ce.Formatting.oneSpace()),(e.inferredType||e.returnType||e.dataType)&&e.parameters.length===0?r.property("name").append(Ce.Formatting.oneSpace()):r.property("name").append(Ce.Formatting.noSpace()),r.properties("parameters").append(Ce.Formatting.noSpace()),r.keywords(",").append(Ce.Formatting.oneSpace()),r.keywords("<").append(Ce.Formatting.noSpace());let n=r.keyword(";"),i=r.keyword(":");i.prepend(Ce.Formatting.noSpace()),r.interior(i,n).prepend(Ce.Formatting.indent()),n.prepend(Ce.Formatting.fit(Ce.Formatting.noSpace(),Ce.Formatting.newLine())),r.node(e).prepend(Ce.Formatting.noIndent())}else if(Ui.isTerminalRule(e)){let r=this.getNodeFormatter(e);e.type&&(r.property("name").append(Ce.Formatting.oneSpace()),r.keyword("returns").append(Ce.Formatting.oneSpace())),r.keywords("hidden","terminal","fragment").append(Ce.Formatting.oneSpace()),r.keyword(":").prepend(Ce.Formatting.noSpace()),r.keyword(";").prepend(Ce.Formatting.fit(Ce.Formatting.noSpace(),Ce.Formatting.newLine())),r.node(e).prepend(Ce.Formatting.noIndent())}else if(Ui.isAction(e)){let r=this.getNodeFormatter(e);r.keyword("{").append(Ce.Formatting.noSpace()),r.keywords(".","+=","=").surround(Ce.Formatting.noSpace()),r.keyword("}").prepend(Ce.Formatting.noSpace())}else if(Ui.isInferredType(e))this.getNodeFormatter(e).keywords("infer","infers").append(Ce.Formatting.oneSpace());else if(Ui.isAssignment(e))this.getNodeFormatter(e).keywords("=","+=","?=").surround(Ce.Formatting.noSpace());else if(Ui.isRuleCall(e)){let r=this.getNodeFormatter(e);r.keyword("<").surround(Ce.Formatting.noSpace()),r.keyword(",").append(Ce.Formatting.oneSpace()),r.properties("arguments").append(Ce.Formatting.noSpace())}Ui.isAbstractElement(e)&&this.getNodeFormatter(e).property("cardinality").prepend(Ce.Formatting.noSpace())}};In.LangiumGrammarFormatter=rg});var Hl=d(vt=>{"use strict";Object.defineProperty(vt,"__esModule",{value:!0});vt.SemanticTokensDecoder=vt.AbstractSemanticTokenProvider=vt.SemanticTokensBuilder=vt.DefaultSemanticTokenOptions=vt.AllSemanticTokenModifiers=vt.AllSemanticTokenTypes=void 0;var de=qe(),Gl=St(),ZU=Oe();vt.AllSemanticTokenTypes={[de.SemanticTokenTypes.class]:0,[de.SemanticTokenTypes.comment]:1,[de.SemanticTokenTypes.enum]:2,[de.SemanticTokenTypes.enumMember]:3,[de.SemanticTokenTypes.event]:4,[de.SemanticTokenTypes.function]:5,[de.SemanticTokenTypes.interface]:6,[de.SemanticTokenTypes.keyword]:7,[de.SemanticTokenTypes.macro]:8,[de.SemanticTokenTypes.method]:9,[de.SemanticTokenTypes.modifier]:10,[de.SemanticTokenTypes.namespace]:11,[de.SemanticTokenTypes.number]:12,[de.SemanticTokenTypes.operator]:13,[de.SemanticTokenTypes.parameter]:14,[de.SemanticTokenTypes.property]:15,[de.SemanticTokenTypes.regexp]:16,[de.SemanticTokenTypes.string]:17,[de.SemanticTokenTypes.struct]:18,[de.SemanticTokenTypes.type]:19,[de.SemanticTokenTypes.typeParameter]:20,[de.SemanticTokenTypes.variable]:21};vt.AllSemanticTokenModifiers={[de.SemanticTokenModifiers.abstract]:1<<0,[de.SemanticTokenModifiers.async]:1<<1,[de.SemanticTokenModifiers.declaration]:1<<2,[de.SemanticTokenModifiers.defaultLibrary]:1<<3,[de.SemanticTokenModifiers.definition]:1<<4,[de.SemanticTokenModifiers.deprecated]:1<<5,[de.SemanticTokenModifiers.documentation]:1<<6,[de.SemanticTokenModifiers.modification]:1<<7,[de.SemanticTokenModifiers.readonly]:1<<8,[de.SemanticTokenModifiers.static]:1<<9};vt.DefaultSemanticTokenOptions={legend:{tokenTypes:Object.keys(vt.AllSemanticTokenTypes),tokenModifiers:Object.keys(vt.AllSemanticTokenModifiers)},full:{delta:!0},range:!0};var Ul=class extends de.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,r,n,i,o){this._tokens.push({line:e,char:r,length:n,tokenType:i,tokenModifiers:o})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}applyTokens(){for(let e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,r){return e.line===r.line?e.char-r.char:e.line-r.line}};vt.SemanticTokensBuilder=Ul;var ng=class{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(r=>{this.tokensBuilders.delete(r.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(r=>{var n;this.initialize((n=r.capabilities.textDocument)===null||n===void 0?void 0:n.semanticTokens)})}initialize(e){this.clientCapabilities=e}semanticHighlight(e,r,n=de.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}semanticHighlightRange(e,r,n=de.CancellationToken.None){return this.currentRange=r.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}semanticHighlightDelta(e,r,n=de.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(r.previousResultId),this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.buildEdits()}createAcceptor(){return r=>{"line"in r?this.highlightToken({range:{start:{line:r.line,character:r.char},end:{line:r.line,character:r.char+r.length}},type:r.type,modifier:r.modifier}):"range"in r?this.highlightToken(r):"keyword"in r?this.highlightKeyword(r):"property"in r?this.highlightProperty(r):this.highlightNode({node:r.cst,type:r.type,modifier:r.modifier})}}getDocumentTokensBuilder(e){let r=this.tokensBuilders.get(e.uri.toString());if(r)return r;let n=new Ul;return this.tokensBuilders.set(e.uri.toString(),n),n}computeHighlighting(e,r,n){let i=e.parseResult.value;if(this.highlightElement(i,r)==="prune")return;let o=(0,ZU.streamAllContents)(i).iterator(),a;do if(a=o.next(),!a.done){if(n.isCancellationRequested)break;let s=a.value,u=s.$cstNode.range,c=this.compareRange(u);if(c===1)break;if(c===-1)continue;this.highlightElement(s,r)==="prune"&&o.prune()}while(!a.done)}compareRange(e){if(!this.currentRange)return 0;let r=typeof e=="number"?e:e.start.line;return(typeof e=="number"?e:e.end.line)<this.currentRange.start.line?-1:r>this.currentRange.end.line?1:0}highlightToken(e){var r;let{range:n,type:i}=e,o=e.modifier;if(this.compareRange(n)!==0||!this.currentDocument||!this.currentTokensBuilder)return;let a=vt.AllSemanticTokenTypes[i],s=0;if(o!==void 0){typeof o=="string"&&(o=[o]);for(let l of o){let f=vt.AllSemanticTokenModifiers[l];s|=f}}let u=n.start.line,c=n.end.line;if(u===c){let l=n.start.character,f=n.end.character-l;this.currentTokensBuilder.push(u,l,f,a,s)}else if(!((r=this.clientCapabilities)===null||r===void 0)&&r.multilineTokenSupport){let l=n.start.character,f=this.currentDocument.textDocument.offsetAt(n.start),h=this.currentDocument.textDocument.offsetAt(n.end);this.currentTokensBuilder.push(u,l,h-f,a,s)}else{let l=n.start,f=this.currentDocument.textDocument.offsetAt({line:u+1,character:0});this.currentTokensBuilder.push(l.line,l.character,f-l.character-1,a,s);for(let h=u+1;h<c;h++){let v=f;f=this.currentDocument.textDocument.offsetAt({line:h+1,character:0}),this.currentTokensBuilder.push(h,0,f-v-1,a,s)}this.currentTokensBuilder.push(c,0,n.end.character,a,s)}}highlightProperty(e){let r=[];if(typeof e.index=="number"){let o=(0,Gl.findNodeForProperty)(e.node.$cstNode,e.property,e.index);o&&r.push(o)}else r.push(...(0,Gl.findNodesForProperty)(e.node.$cstNode,e.property));let{type:n,modifier:i}=e;for(let o of r)this.highlightNode({node:o,type:n,modifier:i})}highlightKeyword(e){let{node:r,keyword:n,type:i,index:o,modifier:a}=e,s=[];if(typeof o=="number"){let u=(0,Gl.findNodeForKeyword)(r.$cstNode,n,o);u&&s.push(u)}else s.push(...(0,Gl.findNodesForKeyword)(r.$cstNode,n));for(let u of s)this.highlightNode({node:u,type:i,modifier:a})}highlightNode(e){let{node:r,type:n,modifier:i}=e,o=r.range;this.highlightToken({range:o,type:n,modifier:i})}};vt.AbstractSemanticTokenProvider=ng;var eH;(function(t){function e(n,i){let o=new Map;Object.entries(vt.AllSemanticTokenTypes).forEach(([u,c])=>o.set(c,u));let a=0,s=0;return r(n.data,5).map(u=>{a+=u[0],u[0]!==0&&(s=0),s+=u[1];let c=u[2];return{offset:i.textDocument.offsetAt({line:a,character:s}),tokenType:o.get(u[3]),tokenModifiers:u[4],text:i.textDocument.getText({start:{line:a,character:s},end:{line:a,character:s+c}})}})}t.decode=e;function r(n,i){let o=[];for(let a=0;a<n.length;a+=i){let s=n.slice(a,a+i);o.push(s)}return o}})(eH=vt.SemanticTokensDecoder||(vt.SemanticTokensDecoder={}))});var ab=d(Wl=>{"use strict";Object.defineProperty(Wl,"__esModule",{value:!0});Wl.LangiumGrammarSemanticTokenProvider=void 0;var Hi=qe(),tH=Hl(),Wi=ke(),ig=class extends tH.AbstractSemanticTokenProvider{highlightElement(e,r){var n;(0,Wi.isAssignment)(e)?r({node:e,property:"feature",type:Hi.SemanticTokenTypes.property}):(0,Wi.isAction)(e)?e.feature&&r({node:e,property:"feature",type:Hi.SemanticTokenTypes.property}):(0,Wi.isReturnType)(e)?r({node:e,property:"name",type:Hi.SemanticTokenTypes.type}):(0,Wi.isAtomType)(e)?(e.primitiveType||e.refType)&&r({node:e,property:e.primitiveType?"primitiveType":"refType",type:Hi.SemanticTokenTypes.type}):(0,Wi.isParameter)(e)?r({node:e,property:"name",type:Hi.SemanticTokenTypes.parameter}):(0,Wi.isParameterReference)(e)?r({node:e,property:"parameter",type:Hi.SemanticTokenTypes.parameter}):(0,Wi.isRuleCall)(e)?!((n=e.rule.ref)===null||n===void 0)&&n.fragment&&r({node:e,property:"rule",type:Hi.SemanticTokenTypes.type}):(0,Wi.isTypeAttribute)(e)&&r({node:e,property:"name",type:Hi.SemanticTokenTypes.property})}};Wl.LangiumGrammarSemanticTokenProvider=ig});var ub=d(Kl=>{"use strict";Object.defineProperty(Kl,"__esModule",{value:!0});Kl.LangiumGrammarNameProvider=void 0;var rH=Ra(),nH=St(),sb=ke(),og=class extends rH.DefaultNameProvider{getName(e){return(0,sb.isAssignment)(e)?e.feature:super.getName(e)}getNameNode(e){return(0,sb.isAssignment)(e)?(0,nH.findNodeForProperty)(e.$cstNode,"feature"):super.getNameNode(e)}};Kl.LangiumGrammarNameProvider=og});var ug=d(Bl=>{"use strict";Object.defineProperty(Bl,"__esModule",{value:!0});Bl.DefaultReferences=void 0;var iH=St(),cb=dr(),Ki=Oe(),ag=Xe(),lb=Ot(),oH=fi(),sg=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=(0,iH.findAssignment)(e),n=e.element;if(r&&n){let i=n[r.feature];if((0,cb.isReference)(i))return i.ref;if(Array.isArray(i)){for(let o of i)if((0,cb.isReference)(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let i=this.nameProvider.getNameNode(n);if(i&&(i===e||(0,ag.isCstChildNode)(e,i)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n||r.$cstNode}}findReferences(e,r){return r.onlyLocal?this.findLocalReferences(e,r.includeDeclaration):this.findGlobalReferences(e,r.includeDeclaration)}findGlobalReferences(e,r=!1){let n=[];if(r){let i=this.getReferenceToSelf(e);i&&n.push(i)}return n.push(...this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e))),(0,lb.stream)(n)}findLocalReferences(e,r=!1){let i=(0,Ki.getDocument)(e).parseResult.value,o=[];if(r){let a=this.getReferenceToSelf(e);a&&o.push(a)}return(0,Ki.streamAst)(i).forEach(a=>{(0,Ki.streamReferences)(a).forEach(({reference:s})=>{if(s.ref===e&&s.$refNode){let u=s.$refNode;o.push({sourceUri:(0,Ki.getDocument)(u.element).uri,sourcePath:this.nodeLocator.getAstNodePath(u.element),targetUri:(0,Ki.getDocument)(e).uri,targetPath:this.nodeLocator.getAstNodePath(e),segment:(0,ag.toDocumentSegment)(u),local:(0,oH.equalURI)((0,Ki.getDocument)(u.element).uri,(0,Ki.getDocument)(e).uri)})}})}),(0,lb.stream)(o)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=(0,Ki.getDocument)(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:(0,ag.toDocumentSegment)(r),local:!0}}}};Bl.DefaultReferences=sg});var mb=d(Vl=>{"use strict";Object.defineProperty(Vl,"__esModule",{value:!0});Vl.LangiumGrammarReferences=void 0;var aH=ug(),Jt=Oe(),db=Xe(),fb=St(),pb=Ot(),cg=fi(),Wt=ke(),hb=Ct(),zl=ci(),lg=class extends aH.DefaultReferences{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}findDeclaration(e){let r=e.element,n=(0,fb.findAssignment)(e);if(n&&n.feature==="feature"){if((0,Wt.isAssignment)(r))return this.findAssignmentDeclaration(r);if((0,Wt.isAction)(r))return this.findActionDeclaration(r)}return super.findDeclaration(e)}findLocalReferences(e,r=!1){if((0,Wt.isTypeAttribute)(e)){let i=(0,Jt.getDocument)(e).parseResult.value;return this.findLocalReferencesToTypeAttribute(e,i,r)}else return super.findLocalReferences(e,r)}findGlobalReferences(e,r=!1){return(0,Wt.isTypeAttribute)(e)?this.findReferencesToTypeAttribute(e,r):super.findGlobalReferences(e,r)}findLocalReferencesToTypeAttribute(e,r,n){let i=[],o=(0,Jt.getContainerOfType)(e,Wt.isInterface);if(o){let a=(0,zl.collectChildrenTypes)(o,this,this.documents,this.nodeLocator),s=[];if(a.forEach(u=>{let c=this.findLocalRulesWithReturnType(u,r);s.push(...c)}),(0,cg.equalURI)((0,Jt.getDocument)(e).uri,(0,Jt.getDocument)(r).uri)&&n){let u=this.getReferenceToSelf(e);u&&i.push(u)}s.forEach(u=>{let c=this.createReferencesToAttribute(u,e);i.push(...c)})}return(0,pb.stream)(i)}findReferencesToTypeAttribute(e,r){let n=[],i=(0,Jt.getContainerOfType)(e,Wt.isInterface);if(i){if(r){let s=this.getReferenceToSelf(e);s&&n.push(s)}let o=(0,zl.collectChildrenTypes)(i,this,this.documents,this.nodeLocator),a=[];o.forEach(s=>{let u=this.findRulesWithReturnType(s);a.push(...u)}),a.forEach(s=>{let u=this.createReferencesToAttribute(s,e);n.push(...u)})}return(0,pb.stream)(n)}createReferencesToAttribute(e,r){let n=[];if((0,Wt.isParserRule)(e)){let i=(0,hb.extractAssignments)(e.definition).find(o=>o.feature===r.name);if(i?.$cstNode){let o=this.nameProvider.getNameNode(i);o&&n.push({sourceUri:(0,Jt.getDocument)(i).uri,sourcePath:this.nodeLocator.getAstNodePath(i),targetUri:(0,Jt.getDocument)(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:(0,db.toDocumentSegment)(o),local:(0,cg.equalURI)((0,Jt.getDocument)(i).uri,(0,Jt.getDocument)(r).uri)})}}else{if(e.feature===r.name){let o=(0,fb.findNodeForProperty)(e.$cstNode,"feature");o&&n.push({sourceUri:(0,Jt.getDocument)(e).uri,sourcePath:this.nodeLocator.getAstNodePath(e),targetUri:(0,Jt.getDocument)(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:(0,db.toDocumentSegment)(o),local:(0,cg.equalURI)((0,Jt.getDocument)(e).uri,(0,Jt.getDocument)(r).uri)})}let i=(0,Jt.getContainerOfType)(e,Wt.isParserRule);n.push(...this.createReferencesToAttribute(i,r))}return n}findAssignmentDeclaration(e){var r;let n=(0,Jt.getContainerOfType)(e,Wt.isParserRule),i=(0,hb.getActionAtElement)(e);if(i){let o=this.findActionDeclaration(i,e.feature);if(o)return o}if(!((r=n?.returnType)===null||r===void 0)&&r.ref&&((0,Wt.isInterface)(n.returnType.ref)||(0,Wt.isType)(n.returnType.ref))){let o=(0,zl.collectSuperTypes)(n.returnType.ref);for(let a of o){let s=a.attributes.find(u=>u.name===e.feature);if(s)return s}}return e}findActionDeclaration(e,r){var n;if(!((n=e.type)===null||n===void 0)&&n.ref){let i=r??e.feature,o=(0,zl.collectSuperTypes)(e.type.ref);for(let a of o){let s=a.attributes.find(u=>u.name===i);if(s)return s}}}findRulesWithReturnType(e){let r=[];return this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e)).forEach(i=>{let o=this.documents.getOrCreateDocument(i.sourceUri),a=this.nodeLocator.getAstNode(o.parseResult.value,i.sourcePath);((0,Wt.isParserRule)(a)||(0,Wt.isAction)(a))&&r.push(a)}),r}findLocalRulesWithReturnType(e,r){let n=[];return(0,Jt.streamAst)(r).filter(o=>{var a,s;return(0,Wt.isParserRule)(o)&&((a=o.returnType)===null||a===void 0?void 0:a.ref)===e||(0,Wt.isAction)(o)&&((s=o.type)===null||s===void 0?void 0:s.ref)===e}).forEach(o=>{((0,Wt.isParserRule)(o)||(0,Wt.isAction)(o))&&n.push(o)}),n}};Vl.LangiumGrammarReferences=lg});var pg=d(Ur=>{"use strict";var sH=Ur&&Ur.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),uH=Ur&&Ur.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),cH=Ur&&Ur.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&sH(e,t,r);return uH(e,t),e};Object.defineProperty(Ur,"__esModule",{value:!0});Ur.findFirstFeatures=Ur.findNextFeatures=void 0;var Qt=cH(ke()),pi=Ct(),lH=dr(),dH=Oe(),fH=St();function pH(t,e){let r={stacks:t,tokens:e};return hH(r),r.stacks.flat().forEach(i=>{i.property=void 0}),vb(r.stacks).map(i=>i[i.length-1])}Ur.findNextFeatures=pH;function dg(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],a=e.feature;if(n.has(a))return[];n.add(a);let s,u=a;for(;u.$container;)if(Qt.isGroup(u.$container)){s=u.$container;break}else if(Qt.isAbstractElement(u.$container))u=u.$container;else break;if((0,pi.isArrayCardinality)(u.cardinality)){let c=Na({next:{feature:u,type:e.type,new:!1},cardinalities:r,visited:n,plus:i});for(let l of c)i.add(l.feature);o.push(...c)}if(s){let c=s.elements.indexOf(u);c!==void 0&&c<s.elements.length-1&&o.push(...yb({feature:s,type:e.type,new:!1},c+1,r,n,i)),o.every(l=>(0,pi.isOptionalCardinality)(l.feature.cardinality)||(0,pi.isOptionalCardinality)(r.get(l.feature))||i.has(l.feature))&&o.push(...dg({next:{feature:s,type:e.type,new:!1},cardinalities:r,visited:n,plus:i}))}return o}function gb(t){return(0,lH.isAstNode)(t)&&(t={feature:t}),Na({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}Ur.findFirstFeatures=gb;function Na(t){var e,r,n;let{next:i,cardinalities:o,visited:a,plus:s}=t;if(i===void 0)return[];let{feature:u,type:c}=i;if(Qt.isGroup(u)){if(a.has(u))return[];a.add(u)}if(Qt.isGroup(u))return yb(i,0,o,a,s).map(l=>Yl(l,u.cardinality,o));if(Qt.isAlternatives(u)||Qt.isUnorderedGroup(u))return u.elements.flatMap(l=>Na({next:{feature:l,new:!1,type:c},cardinalities:o,visited:a,plus:s})).map(l=>Yl(l,u.cardinality,o));if(Qt.isAssignment(u)){let l={feature:u.terminal,new:!1,type:c,property:(e=i.property)!==null&&e!==void 0?e:u.feature};return Na({next:l,cardinalities:o,visited:a,plus:s}).map(f=>Yl(f,u.cardinality,o))}else{if(Qt.isAction(u))return dg({next:{feature:u,new:!0,type:(0,pi.getTypeName)(u),property:(r=i.property)!==null&&r!==void 0?r:u.feature},cardinalities:o,visited:a,plus:s});if(Qt.isRuleCall(u)&&Qt.isParserRule(u.rule.ref)){let l=u.rule.ref,f={feature:l.definition,new:!0,type:l.fragment?void 0:(n=(0,pi.getExplicitRuleType)(l))!==null&&n!==void 0?n:l.name,property:i.property};return Na({next:f,cardinalities:o,visited:a,plus:s}).map(h=>Yl(h,u.cardinality,o))}else return[i]}}function Yl(t,e,r){return r.set(t.feature,e),t}function yb(t,e,r,n,i){var o;let a=[],s;for(;e<t.feature.elements.length&&(s={feature:t.feature.elements[e++],new:!1,type:t.type},a.push(...Na({next:s,cardinalities:r,visited:n,plus:i})),!!(0,pi.isOptionalCardinality)((o=s.feature.cardinality)!==null&&o!==void 0?o:r.get(s.feature))););return a}function hH(t){for(let e of t.tokens){let r=vb(t.stacks,e);t.stacks=r}}function vb(t,e){let r=[];for(let n of t)r.push(...mH(n,e));return r}function mH(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(gH)),i=[];for(;t.length>0;){let o=t.pop(),a=dg({next:o,cardinalities:r,plus:n,visited:new Set}).filter(s=>e?fg(s.feature,e):!0);for(let s of a)i.push([...t,s]);if(!a.every(s=>(0,pi.isOptionalCardinality)(s.feature.cardinality)||(0,pi.isOptionalCardinality)(r.get(s.feature))))break}return i}function gH(t){if(t.cardinality==="+")return!0;let e=(0,dH.getContainerOfType)(t,Qt.isAssignment);return!!(e&&e.cardinality==="+")}function fg(t,e){if(Qt.isKeyword(t))return t.value===e.image;if(Qt.isRuleCall(t))return yH(t.rule.ref,e);if(Qt.isCrossReference(t)){let r=(0,fH.getCrossReferenceTerminal)(t);if(r)return fg(r,e)}return!1}function yH(t,e){return Qt.isParserRule(t)?gb(t.definition).some(n=>fg(n.feature,e)):Qt.isTerminalRule(t)?new RegExp((0,pi.terminalRegex)(t)).test(e.image):!1}});var mg=d(xn=>{"use strict";var vH=xn&&xn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),_H=xn&&xn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),TH=xn&&xn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&vH(e,t,r);return _H(e,t),e};Object.defineProperty(xn,"__esModule",{value:!0});xn.DefaultCompletionProvider=void 0;var Au=qe(),bu=TH(ke()),RH=Ct(),AH=Oe(),bH=Xe(),_b=St(),Tb=Ot(),Xl=pg(),hg=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async getCompletion(e,r){let i=e.parseResult.value.$cstNode;if(!i)return;let o=[],a=e.textDocument,s=a.getText(),u=a.offsetAt(r.position),c=C=>{let b=this.fillCompletionItem(a,u,C);b&&o.push(b)},l=(0,bH.findLeafNodeAtOffset)(i,this.backtrackToAnyToken(s,u)),f={document:e,textDocument:a,node:l?.element,offset:u,position:r.position};if(!l){let C=(0,_b.getEntryRule)(this.grammar);return await this.completionForRule(f,C,c),Au.CompletionList.create(o,!0)}let h=this.backtrackToTokenStart(s,u),v=this.findFeaturesAt(a,h),m=[],R=this.canReparse()&&u!==h;R&&(m=this.findFeaturesAt(a,u));let P=C=>bu.isKeyword(C.feature)?C.feature.value:C.feature;return await Promise.all((0,Tb.stream)(v).distinct(P).map(C=>this.completionFor(f,C,c))),R&&await Promise.all((0,Tb.stream)(m).exclude(v,P).distinct(P).map(C=>this.completionFor(f,C,c))),Au.CompletionList.create(o,!0)}canReparse(){return!1}findFeaturesAt(e,r){let n=e.getText({start:Au.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let u=(0,_b.getEntryRule)(this.grammar),c=(0,Xl.findFirstFeatures)({feature:u.definition,new:!0,type:(0,RH.getExplicitRuleType)(u)});return o.length>0?(o.shift(),(0,Xl.findNextFeatures)(c.map(l=>[l]),o)):c}let a=[...o].splice(i.tokenIndex);return(0,Xl.findNextFeatures)([i.elementStack.map(u=>({feature:u}))],a)}backtrackToAnyToken(e,r){for(r>=e.length&&(r=e.length-1);r>0&&/\s/.test(e.charAt(r));)r--;return r}backtrackToTokenStart(e,r){if(r<1)return r;let n=this.grammarConfig.nameRegexp,i=e.charAt(r-1);for(;r>0&&n.test(i);)r--,i=e.charAt(r-1);return r}async completionForRule(e,r,n){if(bu.isParserRule(r)){let i=(0,Xl.findFirstFeatures)(r.definition);await Promise.all(i.map(o=>this.completionFor(e,o,n)))}}completionFor(e,r,n){if(bu.isKeyword(r.feature))return this.completionForKeyword(e,r.feature,n);if(bu.isCrossReference(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let i=(0,AH.getContainerOfType)(r.feature,bu.isAssignment),o=e.node;if(i&&o){if(r.type&&(r.new||o.$type!==r.type)&&(o={$type:r.type,$container:o,$containerProperty:r.property}),!e)return;let a={reference:{},container:o,property:i.feature};try{let s=this.scopeProvider.getScope(a),u=new Set;s.getAllElements().forEach(c=>{!u.has(c.name)&&this.filterCrossReference(c)&&(n(this.createReferenceCompletionItem(c)),u.add(c.name))})}catch(s){console.error(s)}}}createReferenceCompletionItem(e){return{nodeDescription:e,kind:Au.CompletionItemKind.Reference,detail:e.type,sortText:"0"}}filterCrossReference(e){return!0}completionForKeyword(e,r,n){r.value.match(/[\w]/)&&n({label:r.value,kind:Au.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}fillCompletionItem(e,r,n){var i,o;let a;if(typeof n.label=="string")a=n.label;else if("node"in n){let l=this.nameProvider.getName(n.node);if(!l)return;a=l}else if("nodeDescription"in n)a=n.nodeDescription.name;else return;let s;typeof((i=n.textEdit)===null||i===void 0?void 0:i.newText)=="string"?s=n.textEdit.newText:typeof n.insertText=="string"?s=n.insertText:s=a;let u=(o=n.textEdit)!==null&&o!==void 0?o:this.buildCompletionTextEdit(e,r,a,s);return u?{additionalTextEdits:n.additionalTextEdits,command:n.command,commitCharacters:n.commitCharacters,data:n.data,detail:n.detail,documentation:n.documentation,filterText:n.filterText,insertText:n.insertText,insertTextFormat:n.insertTextFormat,insertTextMode:n.insertTextMode,kind:n.kind,labelDetails:n.labelDetails,preselect:n.preselect,sortText:n.sortText,tags:n.tags,textEditText:n.textEditText,textEdit:u,label:a}:void 0}buildCompletionTextEdit(e,r,n,i){let o=e.getText(),a=this.backtrackToTokenStart(o,r),s=o.substring(a,r);if(this.charactersFuzzyMatch(s,n)){let u=e.positionAt(a),c=e.positionAt(r);return{newText:i,range:{start:u,end:c}}}else return}isWordCharacterAt(e,r){return this.grammarConfig.nameRegexp.test(e.charAt(r))}charactersFuzzyMatch(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,i,o=0,a=r.length;for(let s=0;s<a;s++){let u=r.charCodeAt(s),c=e.charCodeAt(o);if((u===c||this.toUpperCharCode(u)===this.toUpperCharCode(c))&&(n||(n=i===void 0||this.isWordTransition(i,u)),n&&o++,o===e.length))return!0;i=u}return!1}isWordTransition(e,r){return Rb<=e&&e<=Ab&&SH<=r&&r<=CH||e===bb&&r!==bb}toUpperCharCode(e){return Rb<=e&&e<=Ab?e-32:e}};xn.DefaultCompletionProvider=hg;var Rb="a".charCodeAt(0),Ab="z".charCodeAt(0),SH="A".charCodeAt(0),CH="Z".charCodeAt(0),bb="_".charCodeAt(0)});var Cb=d(Sb=>{"use strict";Object.defineProperty(Sb,"__esModule",{value:!0})});var yg=d(Jl=>{"use strict";Object.defineProperty(Jl,"__esModule",{value:!0});Jl.DefaultDocumentHighlightProvider=void 0;var EH=qe(),PH=Oe(),NH=Xe(),kH=fi(),gg=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=(0,NH.findDeclarationNodeAtOffset)(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let a=[],u={onlyLocal:!0,includeDeclaration:(0,kH.equalURI)((0,PH.getDocument)(o).uri,e.uri)};return this.references.findReferences(o,u).forEach(c=>{a.push(this.createDocumentHighlight(c))}),a}}createDocumentHighlight(e){return EH.DocumentHighlight.create(e.segment.range)}};Jl.DefaultDocumentHighlightProvider=gg});var Pb=d(Eb=>{"use strict";Object.defineProperty(Eb,"__esModule",{value:!0})});var _g=d(Ql=>{"use strict";Object.defineProperty(Ql,"__esModule",{value:!0});Ql.DefaultDocumentSymbolProvider=void 0;var wH=qe(),OH=Oe(),vg=class{constructor(e){this.nameProvider=e.references.NameProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.getSymbolKind(r.$type),name:o??i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of(0,OH.streamContents)(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}getSymbolKind(e){return wH.SymbolKind.Field}};Ql.DefaultDocumentSymbolProvider=vg});var Nb=d(Zl=>{"use strict";Object.defineProperty(Zl,"__esModule",{value:!0});Zl.AbstractExecuteCommandHandler=void 0;var DH=qe(),Tg=class{get commands(){return Array.from(this.registeredCommands.keys())}constructor(){this.registeredCommands=new Map,this.registerCommands(this.createCommandAcceptor())}async executeCommand(e,r,n=DH.CancellationToken.None){let i=this.registeredCommands.get(e);if(i)return i(r,n)}createCommandAcceptor(){return(e,r)=>this.registeredCommands.set(e,r)}};Zl.AbstractExecuteCommandHandler=Tg});var Ag=d(ed=>{"use strict";Object.defineProperty(ed,"__esModule",{value:!0});ed.DefaultDefinitionProvider=void 0;var IH=qe(),xH=Oe(),qH=Xe(),Rg=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=(0,qH.findDeclarationNodeAtOffset)(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[IH.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.element.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.element){let n=(0,xH.getDocument)(r.element);if(r&&n)return{source:e,target:r,targetDocument:n}}}};ed.DefaultDefinitionProvider=Rg});var Sg=d(ka=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});ka.MultilineCommentHoverProvider=ka.AstNodeHoverProvider=void 0;var kb=Xe(),td=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let a=e.textDocument.offsetAt(r.position),s=(0,kb.findDeclarationNodeAtOffset)(o,a,this.grammarConfig.nameRegexp);if(s&&s.offset+s.length>a){let u=this.references.findDeclaration(s);if(u)return this.getAstNodeHoverContent(u)}}}};ka.AstNodeHoverProvider=td;var bg=class extends td{constructor(){super(...arguments),this.commentContentRegex=/\/\*([\s\S]*?)\*\//}getAstNodeHoverContent(e){let r=(0,kb.findCommentNode)(e.$cstNode,this.grammarConfig.multilineCommentRules),n;if(r){let i=this.commentContentRegex.exec(r.text);i&&i[1]&&(n=this.getCommentContent(i[1]))}if(n)return{contents:{kind:"markdown",value:n}}}getCommentContent(e){return e.split(`
`).map(n=>(n=n.trim(),n.startsWith("*")&&(n=n.substring(1).trim()),n)).join(" ").trim()}};ka.MultilineCommentHoverProvider=bg});var wb=d(rd=>{"use strict";Object.defineProperty(rd,"__esModule",{value:!0});rd.AbstractGoToImplementationProvider=void 0;var LH=qe(),MH=Xe(),Cg=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getImplementation(e,r,n=LH.CancellationToken.None){let i=e.parseResult.value;if(i.$cstNode){let o=(0,MH.findDeclarationNodeAtOffset)(i.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o){let a=this.references.findDeclaration(o);if(a)return this.collectGoToImplementationLocationLinks(a,n)}}}};rd.AbstractGoToImplementationProvider=Cg});var Bi=d(hi=>{"use strict";Object.defineProperty(hi,"__esModule",{value:!0});hi.DefaultLangiumDocuments=hi.DefaultLangiumDocumentFactory=hi.DocumentState=void 0;var $H=Xh(),FH=ui(),jH=Ot(),wa;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(wa=hi.DocumentState||(hi.DocumentState={}));var Eg=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}fromTextDocument(e,r){return this.create(r??FH.URI.parse(e.uri),e)}fromString(e,r){return this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(r??(r=this.textDocuments.get(e.toString())),r??(r=this.getContentFromFileSystem(e)),typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}createLangiumDocument(e,r,n,i){let o;if(n)o={parseResult:e,uri:r,state:wa.Parsed,references:[],textDocument:n};else{let a=this.createTextDocumentGetter(r,i);o={parseResult:e,uri:r,state:wa.Parsed,references:[],get textDocument(){return a()}}}return e.value.$document=o,o}update(e){let r=this.textDocuments.get(e.uri.toString()),n=r?r.getText():this.getContentFromFileSystem(e.uri);if(r)Object.defineProperty(e,"textDocument",{value:r});else{let i=this.createTextDocumentGetter(e.uri,n);Object.defineProperty(e,"textDocument",{get:i})}return e.parseResult=this.parse(e.uri,n),e.parseResult.value.$document=e,e.state=wa.Parsed,e}getContentFromFileSystem(e){return this.fileSystemProvider.readFileSync(e)}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,i;return()=>i??(i=$H.TextDocument.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r??""))}};hi.DefaultLangiumDocumentFactory=Eg;var Pg=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return(0,jH.stream)(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getOrCreateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n||(n=this.langiumDocumentFactory.create(e),this.documentMap.set(r,n),n)}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=wa.Changed,n.references=[],n.precomputedScopes=void 0,n.diagnostics=[]),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=wa.Changed,this.documentMap.delete(r)),n}};hi.DefaultLangiumDocuments=Pg});var kg=d(Oa=>{"use strict";Object.defineProperty(Oa,"__esModule",{value:!0});Oa.mergeSignatureHelpOptions=Oa.AbstractSignatureHelpProvider=void 0;var GH=qe(),UH=Xe(),Ng=class{provideSignatureHelp(e,r,n=GH.CancellationToken.None){let o=e.parseResult.value.$cstNode;if(o){let a=(0,UH.findLeafNodeAtOffset)(o,e.textDocument.offsetAt(r.position));if(a)return this.getSignatureFromElement(a.element,n)}}get signatureHelpOptions(){return{triggerCharacters:["("],retriggerCharacters:[","]}}};Oa.AbstractSignatureHelpProvider=Ng;function HH(t){let e=[],r=[];t.forEach(i=>{i?.triggerCharacters&&e.push(...i.triggerCharacters),i?.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}Oa.mergeSignatureHelpOptions=HH});var Dg=d(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.createRequestHandler=X.createServerRequestHandler=X.createCallHierarchyRequestHandler=X.addCallHierarchyHandler=X.addCodeLensHandler=X.addSignatureHelpHandler=X.addDocumentLinkHandler=X.addExecuteCommandHandler=X.addConfigurationChangeHandler=X.addSemanticTokenHandler=X.addRenameHandler=X.addFormattingHandler=X.addFoldingRangeHandler=X.addHoverHandler=X.addDocumentHighlightsHandler=X.addGoToDeclarationHandler=X.addGoToImplementationHandler=X.addGoToTypeDefinitionHandler=X.addGotoDefinitionHandler=X.addDocumentSymbolHandler=X.addCodeActionHandler=X.addFindReferencesHandler=X.addCompletionHandler=X.addDiagnosticsHandler=X.addDocumentsHandler=X.startLanguageServer=X.DefaultLanguageServer=void 0;var hr=qe(),Da=ui(),Ob=fu(),WH=Mr(),KH=Bi(),BH=Hl(),zH=kg(),wg=class{constructor(e){this.onInitializeEmitter=new hr.Emitter,this.onInitializedEmitter=new hr.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){(0,Ob.eagerLoad)(this.services),this.services.ServiceRegistry.all.forEach(e=>(0,Ob.eagerLoad)(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var r;let n=this.services.ServiceRegistry.all,i=this.hasService(B=>B.lsp.Formatter),o=n.map(B=>{var Te;return(Te=B.lsp.Formatter)===null||Te===void 0?void 0:Te.formatOnTypeOptions}).find(B=>Boolean(B)),a=this.hasService(B=>B.lsp.CodeActionProvider),s=this.hasService(B=>B.lsp.SemanticTokenProvider),u=(r=this.services.lsp.ExecuteCommandHandler)===null||r===void 0?void 0:r.commands,c=this.services.lsp.DocumentLinkProvider,l=(0,zH.mergeSignatureHelpOptions)(n.map(B=>{var Te;return(Te=B.lsp.SignatureHelp)===null||Te===void 0?void 0:Te.signatureHelpOptions})),f=this.hasService(B=>B.lsp.TypeProvider),h=this.hasService(B=>B.lsp.ImplementationProvider),v=this.hasService(B=>B.lsp.CompletionProvider),m=this.hasService(B=>B.lsp.ReferencesProvider),R=this.hasService(B=>B.lsp.DocumentSymbolProvider),P=this.hasService(B=>B.lsp.DefinitionProvider),C=this.hasService(B=>B.lsp.DocumentHighlightProvider),b=this.hasService(B=>B.lsp.FoldingRangeProvider),A=this.hasService(B=>B.lsp.HoverProvider),O=this.hasService(B=>B.lsp.RenameProvider),$=this.hasService(B=>B.lsp.CallHierarchyProvider),W=this.services.lsp.CodeLensProvider,ee=this.hasService(B=>B.lsp.DeclarationProvider);return{capabilities:{workspace:{workspaceFolders:{supported:!0}},executeCommandProvider:u&&{commands:u},textDocumentSync:hr.TextDocumentSyncKind.Incremental,completionProvider:v?{}:void 0,referencesProvider:m,documentSymbolProvider:R,definitionProvider:P,typeDefinitionProvider:f,documentHighlightProvider:C,codeActionProvider:a,documentFormattingProvider:i,documentRangeFormattingProvider:i,documentOnTypeFormattingProvider:o,foldingRangeProvider:b,hoverProvider:A,renameProvider:O?{prepareProvider:!0}:void 0,semanticTokensProvider:s?BH.DefaultSemanticTokenOptions:void 0,signatureHelpProvider:l,implementationProvider:h,callHierarchyProvider:$?{}:void 0,documentLinkProvider:c?{resolveProvider:Boolean(c.resolveDocumentLink)}:void 0,codeLensProvider:W?{resolveProvider:Boolean(W.resolveCodeLens)}:void 0,declarationProvider:ee}}}async initialized(e){this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}};X.DefaultLanguageServer=wg;function VH(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");Db(e,t),Ib(e,t),xb(e,t),qb(e,t),Mb(e,t),$b(e,t),Fb(e,t),jb(e,t),Ub(e,t),Wb(e,t),Kb(e,t),Lb(e,t),Bb(e,t),Hb(e,t),zb(e,t),Yb(e,t),Jb(e,t),Zb(e,t),Qb(e,t),Xb(e,t),Vb(e,t),Gb(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>t.lsp.LanguageServer.initialized(n)),t.workspace.TextDocuments.listen(e),e.listen()}X.startLanguageServer=VH;function Db(t,e){let r=e.workspace.DocumentBuilder,n=e.workspace.MutexLock;function i(a,s){n.lock(u=>r.update(a,s,u))}e.workspace.TextDocuments.onDidChangeContent(a=>{i([Da.URI.parse(a.document.uri)],[])}),t.onDidChangeWatchedFiles(a=>{let s=a.changes.filter(c=>c.type!==hr.FileChangeType.Deleted).map(c=>Da.URI.parse(c.uri)),u=a.changes.filter(c=>c.type===hr.FileChangeType.Deleted).map(c=>Da.URI.parse(c.uri));i(s,u)})}X.addDocumentsHandler=Db;function Ib(t,e){e.workspace.DocumentBuilder.onBuildPhase(KH.DocumentState.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}X.addDiagnosticsHandler=Ib;function xb(t,e){t.onCompletion(Kt((r,n,i,o)=>{var a;return(a=r.lsp.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(n,i,o)},e))}X.addCompletionHandler=xb;function qb(t,e){t.onReferences(Kt((r,n,i,o)=>{var a;return(a=r.lsp.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(n,i,o)},e))}X.addFindReferencesHandler=qb;function Lb(t,e){t.onCodeAction(Kt((r,n,i,o)=>{var a;return(a=r.lsp.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(n,i,o)},e))}X.addCodeActionHandler=Lb;function Mb(t,e){t.onDocumentSymbol(Kt((r,n,i,o)=>{var a;return(a=r.lsp.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(n,i,o)},e))}X.addDocumentSymbolHandler=Mb;function $b(t,e){t.onDefinition(Kt((r,n,i,o)=>{var a;return(a=r.lsp.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(n,i,o)},e))}X.addGotoDefinitionHandler=$b;function Fb(t,e){t.onTypeDefinition(Kt((r,n,i,o)=>{var a;return(a=r.lsp.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(n,i,o)},e))}X.addGoToTypeDefinitionHandler=Fb;function jb(t,e){t.onImplementation(Kt((r,n,i,o)=>{var a;return(a=r.lsp.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(n,i,o)},e))}X.addGoToImplementationHandler=jb;function Gb(t,e){t.onDeclaration(Kt((r,n,i,o)=>{var a;return(a=r.lsp.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(n,i,o)},e))}X.addGoToDeclarationHandler=Gb;function Ub(t,e){t.onDocumentHighlight(Kt((r,n,i,o)=>{var a;return(a=r.lsp.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(n,i,o)},e))}X.addDocumentHighlightsHandler=Ub;function Hb(t,e){t.onHover(Kt((r,n,i,o)=>{var a;return(a=r.lsp.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(n,i,o)},e))}X.addHoverHandler=Hb;function Wb(t,e){t.onFoldingRanges(Kt((r,n,i,o)=>{var a;return(a=r.lsp.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(n,i,o)},e))}X.addFoldingRangeHandler=Wb;function Kb(t,e){t.onDocumentFormatting(Kt((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocument(n,i,o)},e)),t.onDocumentRangeFormatting(Kt((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(n,i,o)},e)),t.onDocumentOnTypeFormatting(Kt((r,n,i,o)=>{var a;return(a=r.lsp.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(n,i,o)},e))}X.addFormattingHandler=Kb;function Bb(t,e){t.onRenameRequest(Kt((r,n,i,o)=>{var a;return(a=r.lsp.RenameProvider)===null||a===void 0?void 0:a.rename(n,i,o)},e)),t.onPrepareRename(Kt((r,n,i,o)=>{var a;return(a=r.lsp.RenameProvider)===null||a===void 0?void 0:a.prepareRename(n,i,o)},e))}X.addRenameHandler=Bb;function zb(t,e){let r="No semantic token provider registered";t.languages.semanticTokens.on(zi((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,a):new hr.ResponseError(0,r),e)),t.languages.semanticTokens.onDelta(zi((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,a):new hr.ResponseError(0,r),e)),t.languages.semanticTokens.onRange(zi((n,i,o,a)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,a):new hr.ResponseError(0,r),e))}X.addSemanticTokenHandler=zb;function Vb(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}X.addConfigurationChangeHandler=Vb;function Yb(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(a){return Ia(a)}})}X.addExecuteCommandHandler=Yb;function Xb(t,e){var r;let n=e.lsp.DocumentLinkProvider;if(n){t.onDocumentLinks(zi((o,a,s,u)=>n.getDocumentLinks(a,s,u),e));let i=(r=n.resolveDocumentLink)===null||r===void 0?void 0:r.bind(n);i&&t.onDocumentLinkResolve(async(o,a)=>{try{return await i(o,a)}catch(s){return Ia(s)}})}}X.addDocumentLinkHandler=Xb;function Jb(t,e){t.onSignatureHelp(zi((r,n,i,o)=>{var a;return(a=r.lsp.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(n,i,o)},e))}X.addSignatureHelpHandler=Jb;function Qb(t,e){var r;let n=e.lsp.CodeLensProvider;if(n){t.onCodeLens(zi((o,a,s,u)=>n.provideCodeLens(a,s,u),e));let i=(r=n.resolveCodeLens)===null||r===void 0?void 0:r.bind(n);i&&t.onCodeLensResolve(async(o,a)=>{try{return await i(o,a)}catch(s){return Ia(s)}})}}X.addCodeLensHandler=Qb;function Zb(t,e){let r="No call hierarchy provider registered";t.languages.callHierarchy.onPrepare(zi((n,i,o,a)=>{var s;return n.lsp.CallHierarchyProvider?(s=n.lsp.CallHierarchyProvider.prepareCallHierarchy(i,o,a))!==null&&s!==void 0?s:null:new hr.ResponseError(0,r)},e)),t.languages.callHierarchy.onIncomingCalls(Og((n,i,o)=>{var a;return n.lsp.CallHierarchyProvider?(a=n.lsp.CallHierarchyProvider.incomingCalls(i,o))!==null&&a!==void 0?a:null:new hr.ResponseError(0,r)},e)),t.languages.callHierarchy.onOutgoingCalls(Og((n,i,o)=>{var a;return n.lsp.CallHierarchyProvider?(a=n.lsp.CallHierarchyProvider.outgoingCalls(i,o))!==null&&a!==void 0?a:null:new hr.ResponseError(0,r)},e))}X.addCallHierarchyHandler=Zb;function Og(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=Da.URI.parse(n.item.uri),a=r.getServices(o);if(!a)throw console.error(`Could not find service instance for uri: '${o.toString()}'`),new Error;try{return await t(a,n,i)}catch(s){return Ia(s)}}}X.createCallHierarchyRequestHandler=Og;function zi(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let a=Da.URI.parse(i.textDocument.uri),s=n.getServices(a);if(!s)throw console.error(`Could not find service instance for uri: '${a.toString()}'`),new Error;let u=r.getOrCreateDocument(a);if(!u)throw new Error;try{return await t(s,u,i,o)}catch(c){return Ia(c)}}}X.createServerRequestHandler=zi;function Kt(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let a=Da.URI.parse(i.textDocument.uri),s=n.getServices(a);if(!s)return console.error(`Could not find service instance for uri: '${a.toString()}'`),null;let u=r.getOrCreateDocument(a);if(!u)return null;try{return await t(s,u,i,o)}catch(c){return Ia(c)}}}X.createRequestHandler=Kt;function Ia(t){if((0,WH.isOperationCancelled)(t))return new hr.ResponseError(hr.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof hr.ResponseError)return t;throw t}});var xg=d(nd=>{"use strict";Object.defineProperty(nd,"__esModule",{value:!0});nd.DefaultReferencesProvider=void 0;var YH=qe(),XH=Xe(),Ig=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=(0,XH.findDeclarationNodeAtOffset)(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let a={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,a).forEach(s=>{i.push(YH.Location.create(s.sourceUri.toString(),s.segment.range))})}return i}};nd.DefaultReferencesProvider=Ig});var Lg=d(id=>{"use strict";Object.defineProperty(id,"__esModule",{value:!0});id.DefaultRenameProvider=void 0;var JH=qe(),QH=Ra(),e0=Xe(),qg=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),a=(0,e0.findDeclarationNodeAtOffset)(i,o,this.grammarConfig.nameRegexp);if(!a)return;let s=this.references.findDeclaration(a);if(!s)return;let u={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(s,u).forEach(l=>{let f=JH.TextEdit.replace(l.segment.range,r.newName),h=l.sourceUri.toString();n[h]?n[h].push(f):n[h]=[f]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=(0,e0.findDeclarationNodeAtOffset)(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return e?.element&&(0,QH.isNamed)(e.element)&&e===this.nameProvider.getNameNode(e.element)}};id.DefaultRenameProvider=qg});var t0=d(od=>{"use strict";Object.defineProperty(od,"__esModule",{value:!0});od.AbstractTypeDefinitionProvider=void 0;var ZH=qe(),eW=Xe(),Mg=class{constructor(e){this.references=e.references.References}getTypeDefinition(e,r,n=ZH.CancellationToken.None){let i=e.parseResult.value;if(i.$cstNode){let o=(0,eW.findDeclarationNodeAtOffset)(i.$cstNode,e.textDocument.offsetAt(r.position));if(o){let a=this.references.findDeclaration(o);if(a)return this.collectGoToTypeLocationLinks(a,n)}}}};od.AbstractTypeDefinitionProvider=Mg});var $g=d(Ze=>{"use strict";var tW=Ze&&Ze.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),xt=Ze&&Ze.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&tW(e,t,r)};Object.defineProperty(Ze,"__esModule",{value:!0});xt(mg(),Ze);xt(pg(),Ze);xt(Cb(),Ze);xt(yg(),Ze);xt(Pb(),Ze);xt(_g(),Ze);xt(Nb(),Ze);xt(Ml(),Ze);xt(Ag(),Ze);xt(Sg(),Ze);xt(tg(),Ze);xt(wb(),Ze);xt(Dg(),Ze);xt(xg(),Ze);xt(Lg(),Ze);xt(Hl(),Ze);xt(kg(),Ze);xt(t0(),Ze)});var r0=d(ad=>{"use strict";Object.defineProperty(ad,"__esModule",{value:!0});ad.LangiumGrammarDefinitionProvider=void 0;var Fg=qe(),rW=$g(),nW=Oe(),iW=St(),oW=ke(),aW=Ct(),jg=class extends rW.DefaultDefinitionProvider{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}collectLocationLinks(e,r){var n,i,o,a,s,u;let c="path";if((0,oW.isGrammarImport)(e.element)&&((n=(0,iW.findAssignment)(e))===null||n===void 0?void 0:n.feature)===c){let l=(0,aW.resolveImport)(this.documents,e.element);if(l?.$document){let f=(i=this.findTargetObject(l))!==null&&i!==void 0?i:l,h=(a=(o=this.nameProvider.getNameNode(f))===null||o===void 0?void 0:o.range)!==null&&a!==void 0?a:Fg.Range.create(0,0,0,0),v=(u=(s=f.$cstNode)===null||s===void 0?void 0:s.range)!==null&&u!==void 0?u:Fg.Range.create(0,0,0,0);return[Fg.LocationLink.create(l.$document.uri.toString(),v,h,e.range)]}return}return super.collectLocationLinks(e,r)}findTargetObject(e){return e.isDeclared?e:(0,nW.streamContents)(e).head()}};ad.LangiumGrammarDefinitionProvider=jg});var i0=d(sd=>{"use strict";Object.defineProperty(sd,"__esModule",{value:!0});sd.AbstractCallHierarchyProvider=void 0;var sW=qe(),n0=ui(),Gg=Xe(),Ug=class{constructor(e){this.grammarConfig=e.parser.GrammarConfig,this.nameProvider=e.references.NameProvider,this.documents=e.shared.workspace.LangiumDocuments,this.references=e.references.References}prepareCallHierarchy(e,r){let n=e.parseResult.value,i=(0,Gg.findDeclarationNodeAtOffset)(n.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclarationNode(i);if(o)return this.getCallHierarchyItems(o.element,e)}getCallHierarchyItems(e,r){let n=this.nameProvider.getNameNode(e),i=this.nameProvider.getName(e);if(!(!n||!e.$cstNode||i===void 0))return[Object.assign({kind:sW.SymbolKind.Method,name:i,range:e.$cstNode.range,selectionRange:n.range,uri:r.uri.toString()},this.getCallHierarchyItem(e))]}getCallHierarchyItem(e){}incomingCalls(e){let r=this.documents.getOrCreateDocument(n0.URI.parse(e.item.uri)),n=r.parseResult.value,i=(0,Gg.findDeclarationNodeAtOffset)(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findReferences(i.element,{includeDeclaration:!1,onlyLocal:!1});return this.getIncomingCalls(i.element,o)}outgoingCalls(e){let r=this.documents.getOrCreateDocument(n0.URI.parse(e.item.uri)),n=r.parseResult.value,i=(0,Gg.findDeclarationNodeAtOffset)(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(i)return this.getOutgoingCalls(i.element)}};sd.AbstractCallHierarchyProvider=Ug});var a0=d(cd=>{"use strict";Object.defineProperty(cd,"__esModule",{value:!0});cd.LangiumGrammarCallHierarchyProvider=void 0;var o0=qe(),uW=i0(),Hg=Oe(),cW=Xe(),ud=ke(),Wg=class extends uW.AbstractCallHierarchyProvider{getIncomingCalls(e,r){if(!(0,ud.isParserRule)(e))return;let n=new Map;if(r.forEach(i=>{let a=this.documents.getOrCreateDocument(i.sourceUri).parseResult.value;if(!a.$cstNode)return;let s=(0,cW.findLeafNodeAtOffset)(a.$cstNode,i.segment.offset);if(!s)return;let u=(0,Hg.getContainerOfType)(s.element,ud.isParserRule);if(!u||!u.$cstNode)return;let c=this.nameProvider.getNameNode(u);if(!c)return;let l=i.sourceUri.toString(),f=l+"@"+c.text;n.has(f)?n.set(f,{parserRule:u.$cstNode,nameNode:c,targetNodes:[...n.get(f).targetNodes,s],docUri:l}):n.set(f,{parserRule:u.$cstNode,nameNode:c,targetNodes:[s],docUri:l})}),n.size!==0)return Array.from(n.values()).map(i=>({from:{kind:o0.SymbolKind.Method,name:i.nameNode.text,range:i.parserRule.range,selectionRange:i.nameNode.range,uri:i.docUri},fromRanges:i.targetNodes.map(o=>o.range)}))}getOutgoingCalls(e){if(!(0,ud.isParserRule)(e))return;let r=(0,Hg.streamAllContents)(e).filter(ud.isRuleCall).toArray(),n=new Map;if(r.forEach(i=>{var o;let a=i.$cstNode;if(!a)return;let s=(o=i.rule.ref)===null||o===void 0?void 0:o.$cstNode;if(!s)return;let u=this.nameProvider.getNameNode(s.element);if(!u)return;let c=(0,Hg.getDocument)(s.element).uri.toString(),l=c+"@"+u.text;n.has(l)?n.set(l,{refCstNode:s,to:u,from:[...n.get(l).from,a.range],docUri:c}):n.set(l,{refCstNode:s,to:u,from:[a.range],docUri:c})}),n.size!==0)return Array.from(n.values()).map(i=>({to:{kind:o0.SymbolKind.Method,name:i.to.text,range:i.refCstNode.range,selectionRange:i.to.range,uri:i.docUri},fromRanges:i.from}))}};cd.LangiumGrammarCallHierarchyProvider=Wg});var c0=d(dd=>{"use strict";Object.defineProperty(dd,"__esModule",{value:!0});dd.LangiumGrammarValidationResourcesCollector=void 0;var lW=br(),u0=Ot(),ld=ke(),s0=Ct(),dW=Nm(),Kg=ci(),Bg=class{constructor(e){this.documents=e.shared.workspace.LangiumDocuments}collectValidationResources(e){let r=(0,dW.collectTypeResources)(e,this.documents);return{typeToValidationInfo:this.collectValidationInfo(r),typeToSuperProperties:this.collectSuperProperties(r)}}collectValidationInfo({astResources:e,inferred:r,declared:n}){let i=new Map,o=fW(e);for(let s of(0,Kg.mergeTypesAndInterfaces)(r))i.set(s.name,{inferred:s,inferredNodes:o.get(s.name)});let a=(0,u0.stream)(e.interfaces).concat(e.types).reduce((s,u)=>s.set(u.name,u),new Map);for(let s of(0,Kg.mergeTypesAndInterfaces)(n)){let u=a.get(s.name);if(u){let c=i.get(s.name);i.set(s.name,c?Object.assign(Object.assign({},c),{declared:s,declaredNode:u}):{declared:s,declaredNode:u})}}return i}collectSuperProperties({inferred:e,declared:r}){let n=new Map;for(let i of(0,Kg.mergeInterfaces)(e,r))n.set(i.name,Array.from(i.superProperties.values()));return n}};dd.LangiumGrammarValidationResourcesCollector=Bg;function fW({parserRules:t,datatypeRules:e}){let r=new lW.MultiMap;(0,u0.stream)(t).concat(e).forEach(i=>r.add((0,s0.getRuleType)(i),i));function n(i){if((0,ld.isAction)(i)){let o=(0,s0.getActionType)(i);o&&r.add(o,i)}((0,ld.isAlternatives)(i)||(0,ld.isGroup)(i)||(0,ld.isUnorderedGroup)(i))&&i.elements.forEach(o=>n(o))}return t.forEach(i=>n(i.definition)),r}});var l0=d(Vi=>{"use strict";Object.defineProperty(Vi,"__esModule",{value:!0});Vi.isInferredAndDeclared=Vi.isInferred=Vi.isDeclared=void 0;function pW(t){return t&&"declared"in t}Vi.isDeclared=pW;function hW(t){return t&&"inferred"in t}Vi.isInferred=hW;function mW(t){return t&&"inferred"in t&&"declared"in t}Vi.isInferredAndDeclared=mW});var f0=d(Hr=>{"use strict";var gW=Hr&&Hr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),yW=Hr&&Hr.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),vW=Hr&&Hr.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&gW(e,t,r);return yW(e,t),e};Object.defineProperty(Hr,"__esModule",{value:!0});Hr.LangiumGrammarTypesValidator=Hr.registerTypeValidationChecks=void 0;var _W=br(),xa=vW(ke()),TW=Ct(),qn=Ao(),RW=ci(),Eo=l0();function AW(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarTypesValidator,n={Action:[r.checkActionIsNotUnionType],Grammar:[r.checkDeclaredTypesConsistency,r.checkDeclaredAndInferredTypesConsistency]};e.register(n,r)}Hr.registerTypeValidationChecks=AW;var zg=class{checkDeclaredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i){for(let o of i.typeToValidationInfo.values())if((0,Eo.isDeclared)(o)&&(0,qn.isInterfaceType)(o.declared)&&xa.isInterface(o.declaredNode)){let a=o;SW(a,i.typeToValidationInfo,r),CW(a,i.typeToSuperProperties,r)}}}checkDeclaredAndInferredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i)for(let o of i.typeToValidationInfo.values())(0,Eo.isInferred)(o)&&o.inferred instanceof qn.InterfaceType&&bW(o.inferred,r),(0,Eo.isInferredAndDeclared)(o)&&NW(o,r)}checkActionIsNotUnionType(e,r){xa.isType(e.type)&&r("error","Actions cannot create union types.",{node:e,property:"type"})}};Hr.LangiumGrammarTypesValidator=zg;function bW(t,e){t.properties.filter(r=>r.typeAlternatives.length>1).forEach(r=>{let n=o=>o.reference?"ref":"other",i=n(r.typeAlternatives[0]);if(r.typeAlternatives.slice(1).some(o=>n(o)!==i)){let o=r.astNodes.values().next().value;o&&e("error",`Mixing a cross-reference with other types is not supported. Consider splitting property "${r.name}" into two or more different properties.`,{node:o})}})}function SW({declared:t,declaredNode:e},r,n){t.printingSuperTypes.forEach((i,o)=>{let a=r.get(i);a&&(((0,Eo.isInferred)(a)&&(0,qn.isUnionType)(a.inferred)||(0,Eo.isDeclared)(a)&&(0,qn.isUnionType)(a.declared))&&n("error","Interfaces cannot extend union types.",{node:e,property:"superTypes",index:o}),(0,Eo.isInferred)(a)&&!(0,Eo.isDeclared)(a)&&n("error","Extending an inferred type is discouraged.",{node:e,property:"superTypes",index:o}))})}function CW({declared:t,declaredNode:e},r,n){var i,o,a;let s=t.properties.reduce((l,f)=>l.add(f.name,f),new _W.MultiMap);for(let[l,f]of s.entriesGroupedByKey())if(f.length>1)for(let h of f)n("error",`Cannot have two properties with the same name '${l}'.`,{node:Array.from(h.astNodes)[0],property:"name"});let u=t.printingSuperTypes;for(let l=0;l<u.length;l++)for(let f=l+1;f<u.length;f++){let h=u[l],v=u[f],m=(i=r.get(h))!==null&&i!==void 0?i:[],R=(o=r.get(v))!==null&&o!==void 0?o:[],P=EW(m,R);P.length>0&&n("error",`Cannot simultaneously inherit from '${h}' and '${v}'. Their ${P.map(C=>"'"+C+"'").join(", ")} properties are not identical.`,{node:e,property:"name"})}let c=new Set;for(let l of u){let f=(a=r.get(l))!==null&&a!==void 0?a:[];for(let h of f)c.add(h.name)}for(let l of t.properties)if(c.has(l.name)){let h=e.attributes.find(v=>v.name===l.name);h&&n("error",`Cannot redeclare property '${l.name}'. It is already inherited from another interface.`,{node:h,property:"name"})}}function EW(t,e){let r=[];for(let n of t){let i=e.find(o=>o.name===n.name);i&&!PW(n,i)&&r.push(n.name)}return r}function PW(t,e){if(t.optional!==e.optional||t.typeAlternatives.length!==e.typeAlternatives.length)return!1;for(let r of t.typeAlternatives)if(!e.typeAlternatives.some(i=>i.array===r.array&&i.reference===r.reference&&i.types.length===r.types.length&&i.types.every(o=>r.types.includes(o))))return!1;return!0}function NW(t,e){let{inferred:r,declared:n,declaredNode:i,inferredNodes:o}=t,a=n.name,s=l=>f=>o.forEach(h=>e("error",`${f}${l?` ${l}`:""}.`,h?.inferredType?{node:h?.inferredType,property:"name"}:{node:h,property:xa.isAction(h)?"type":"name"})),u=(l,f)=>l.forEach(h=>e("error",f,{node:h,property:xa.isAssignment(h)||xa.isAction(h)?"feature":"name"})),c=l=>{o.forEach(f=>{xa.isParserRule(f)&&(0,TW.extractAssignments)(f.definition).find(v=>v.feature===l)===void 0&&e("error",`Property '${l}' is missing in a rule '${f.name}', but is required in type '${a}'.`,{node:f,property:"parameters"})})};if((0,qn.isUnionType)(r)&&(0,qn.isUnionType)(n))kW(r.alternatives,n.alternatives,s(`in a rule that returns type '${a}'`));else if((0,qn.isInterfaceType)(r)&&(0,qn.isInterfaceType)(n))wW(r.superProperties,n.superProperties,s(`in a rule that returns type '${a}'`),u,c);else{let l=`Inferred and declared versions of type ${a} both have to be interfaces or unions.`;s()(l),e("error",l,{node:i,property:"name"})}}function kW(t,e,r){let n=d0(t,e);for(let i of n)r(`A type '${i.typeAsString}' ${i.errorMessage}`)}function d0(t,e){let r=(s,u)=>s.array&&!u.array&&s.reference&&!u.reference?"can't be an array and a reference":!s.array&&u.array&&!s.reference&&u.reference?"has to be an array and a reference":s.array&&!u.array?"can't be an array":!s.array&&u.array?"has to be an array":s.reference&&!u.reference?"can't be a reference":!s.reference&&u.reference?"has to be a reference":"",n=s=>s.reduce((u,c)=>u.set((0,RW.distinctAndSorted)(c.types).join(" | "),c),new Map),i=n(t),o=n(e),a=[];for(let[s,u]of i){let c=o.get(s);c?(c.array!==u.array||c.reference!==u.reference)&&a.push({typeAsString:s,errorMessage:r(u,c)}):a.push({typeAsString:s,errorMessage:"is not expected"})}return a}function wW(t,e,r,n,i){let o=(a,s)=>!(a.typeAlternatives.length===1&&a.typeAlternatives[0].array)&&!(s.typeAlternatives.length===1&&s.typeAlternatives[0].array);for(let[a,s]of t.entriesGroupedByKey()){let u=s[0],c=e.get(a)[0];if(c){let l=(0,qn.propertyTypesToString)(u.typeAlternatives),f=(0,qn.propertyTypesToString)(c.typeAlternatives);if(l!==f){let h=d0(u.typeAlternatives,c.typeAlternatives);if(h.length>0){let v=`The assigned type '${l}' is not compatible with the declared property '${a}' of type '${f}'`,m=h.map(R=>` '${R.typeAsString}' ${R.errorMessage}`).join("; ");n(u.astNodes,`${v}: ${m}.`)}}!c.optional&&u.optional&&o(u,c)&&i(a)}else n(u.astNodes,`A property '${a}' is not expected.`)}for(let[a,s]of e.entriesGroupedByKey())t.get(a).length===0&&!s.some(c=>c.optional)&&r(`A property '${a}' is expected`)}});var Vg=d(Po=>{"use strict";Object.defineProperty(Po,"__esModule",{value:!0});Po.createLangiumGrammarServices=Po.LangiumGrammarModule=void 0;var p0=fd(),h0=fu(),m0=GA(),g0=VA(),y0=Bm(),OW=rb(),DW=nb(),IW=ob(),xW=ab(),qW=ub(),LW=mb(),MW=r0(),$W=a0(),FW=c0(),v0=f0(),jW=Mr(),GW=Bi();Po.LangiumGrammarModule={validation:{LangiumGrammarValidator:t=>new y0.LangiumGrammarValidator(t),ValidationResourcesCollector:t=>new FW.LangiumGrammarValidationResourcesCollector(t),LangiumGrammarTypesValidator:()=>new v0.LangiumGrammarTypesValidator},lsp:{FoldingRangeProvider:t=>new DW.LangiumGrammarFoldingRangeProvider(t),CodeActionProvider:t=>new OW.LangiumGrammarCodeActionProvider(t),SemanticTokenProvider:t=>new xW.LangiumGrammarSemanticTokenProvider(t),Formatter:()=>new IW.LangiumGrammarFormatter,DefinitionProvider:t=>new MW.LangiumGrammarDefinitionProvider(t),CallHierarchyProvider:t=>new $W.LangiumGrammarCallHierarchyProvider(t)},references:{ScopeComputation:t=>new g0.LangiumGrammarScopeComputation(t),ScopeProvider:t=>new g0.LangiumGrammarScopeProvider(t),References:t=>new LW.LangiumGrammarReferences(t),NameProvider:()=>new qW.LangiumGrammarNameProvider}};function UW(t,e){let r=(0,h0.inject)((0,p0.createDefaultSharedModule)(t),m0.LangiumGrammarGeneratedSharedModule,e),n=(0,h0.inject)((0,p0.createDefaultModule)({shared:r}),m0.LangiumGrammarGeneratedModule,Po.LangiumGrammarModule);return HW(r,n),r.ServiceRegistry.register(n),(0,y0.registerValidationChecks)(n),(0,v0.registerTypeValidationChecks)(n),{shared:r,grammar:n}}Po.createLangiumGrammarServices=UW;function HW(t,e){t.workspace.DocumentBuilder.onBuildPhase(GW.DocumentState.IndexedReferences,async(n,i)=>{for(let o of n){await(0,jW.interruptAndCheck)(i);let a=e.validation.ValidationResourcesCollector,s=o.parseResult.value;o.validationResources=a.collectValidationResources(s)}})}});var Yg=d(qa=>{"use strict";Object.defineProperty(qa,"__esModule",{value:!0});qa.EmptyFileSystem=qa.EmptyFileSystemProvider=void 0;var pd=class{readFile(){throw new Error("Method not implemented.")}readFileSync(){throw new Error("Method not implemented.")}async readDirectory(){return[]}};qa.EmptyFileSystemProvider=pd;qa.EmptyFileSystem={fileSystemProvider:()=>new pd}});var St=d(ye=>{"use strict";var WW=ye&&ye.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),KW=ye&&ye.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),BW=ye&&ye.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&WW(e,t,r);return KW(e,t),e};Object.defineProperty(ye,"__esModule",{value:!0});ye.createServicesForGrammar=ye.loadGrammarFromJson=ye.findNameAssignment=ye.findAssignment=ye.findNodesForKeywordInternal=ye.findNodeForKeyword=ye.findNodesForKeyword=ye.findNodeForProperty=ye.findNodesForProperty=ye.isCommentTerminal=ye.getCrossReferenceTerminal=ye.getAllReachableRules=ye.getEntryRule=void 0;var R0=ui(),_0=fd(),T0=fu(),zW=wm(),mr=BW(ke()),VW=Ct(),A0=Vg(),YW=dr(),La=Oe(),XW=Xe(),Xg=Yg();function b0(t){return t.rules.find(e=>mr.isParserRule(e)&&e.entry)}ye.getEntryRule=b0;function JW(t,e){let r=new Set,n=b0(t);if(!n)return new Set(t.rules);S0(n,r,e);let i=new Set;for(let o of t.rules)(r.has(o.name)||mr.isTerminalRule(o)&&o.hidden)&&i.add(o);return i}ye.getAllReachableRules=JW;function S0(t,e,r){e.add(t.name),(0,La.streamAllContents)(t).forEach(n=>{if(mr.isRuleCall(n)||r&&mr.isTerminalRuleCall(n)){let i=n.rule.ref;i&&!e.has(i.name)&&S0(i,e,r)}})}function QW(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=C0(t.type.ref);return e?.terminal}}ye.getCrossReferenceTerminal=QW;function ZW(t){return t.hidden&&!" ".match((0,VW.terminalRegex)(t))}ye.isCommentTerminal=ZW;function eK(t,e){return!t||!e?[]:Jg(t,e,t.element,!0)}ye.findNodesForProperty=eK;function tK(t,e,r){if(!t||!e)return;let n=Jg(t,e,t.element,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}ye.findNodeForProperty=tK;function Jg(t,e,r,n){if(!n){let i=(0,La.getContainerOfType)(t.feature,mr.isAssignment);if(i&&i.feature===e)return[t]}return(0,YW.isCompositeCstNode)(t)&&t.element===r?t.children.flatMap(i=>Jg(i,e,r,!1)):[]}function rK(t,e){return t?Qg(t,e,t?.element):[]}ye.findNodesForKeyword=rK;function nK(t,e,r){if(!t)return;let n=Qg(t,e,t?.element);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}ye.findNodeForKeyword=nK;function Qg(t,e,r){if(t.element!==r)return[];if(mr.isKeyword(t.feature)&&t.feature.value===e)return[t];let n=(0,XW.streamCst)(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let a=i.value;a.element===r?mr.isKeyword(a.feature)&&a.feature.value===e&&o.push(a):n.prune()}while(!i.done);return o}ye.findNodesForKeywordInternal=Qg;function iK(t){var e;let r=t.element;for(;r===((e=t.parent)===null||e===void 0?void 0:e.element);){let n=(0,La.getContainerOfType)(t.feature,mr.isAssignment);if(n)return n;t=t.parent}}ye.findAssignment=iK;function C0(t){return mr.isInferredType(t)&&(t=t.$container),E0(t,new Map)}ye.findNameAssignment=C0;function E0(t,e){var r;function n(i,o){let a;return(0,La.getContainerOfType)(i,mr.isAssignment)||(a=E0(o,e)),e.set(t,a),a}if(e.has(t))return e.get(t);e.set(t,void 0);for(let i of(0,La.streamAllContents)(t)){if(mr.isAssignment(i)&&i.feature.toLowerCase()==="name")return e.set(t,i),i;if(mr.isRuleCall(i)&&mr.isParserRule(i.rule.ref))return n(i,i.rule.ref);if(mr.isAtomType(i)&&(!((r=i?.refType)===null||r===void 0)&&r.ref))return n(i,i.refType.ref)}}function oK(t){var e;let r=(0,A0.createLangiumGrammarServices)(Xg.EmptyFileSystem).grammar,n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,R0.URI.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}ye.loadGrammarFromJson=oK;async function aK(t){var e,r,n,i,o,a;let s=(e=t.grammarServices)!==null&&e!==void 0?e:(0,A0.createLangiumGrammarServices)(Xg.EmptyFileSystem).grammar,u=R0.URI.parse("memory:///grammar.langium"),c=s.shared.workspace.LangiumDocumentFactory,l=typeof t.grammar=="string"?c.fromString(t.grammar,u):(0,La.getDocument)(t.grammar),f=l.parseResult.value;await s.shared.workspace.DocumentBuilder.build([l],{validationChecks:"none"});let v=(r=t.parserConfig)!==null&&r!==void 0?r:{skipValidations:!1},m=(n=t.languageMetaData)!==null&&n!==void 0?n:{caseInsensitive:!1,fileExtensions:[`.${(o=(i=f.name)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"unknown"}`],languageId:(a=f.name)!==null&&a!==void 0?a:"UNKNOWN"},R={AstReflection:()=>(0,zW.interpretAstReflection)(f)},P={Grammar:()=>f,LanguageMetaData:()=>m,parser:{ParserConfig:()=>v}},C=(0,T0.inject)((0,_0.createDefaultSharedModule)(Xg.EmptyFileSystem),R,t.sharedModule),b=(0,T0.inject)((0,_0.createDefaultModule)({shared:C}),P,t.module);return C.ServiceRegistry.register(b),b}ye.createServicesForGrammar=aK});var P0=d(hd=>{"use strict";Object.defineProperty(hd,"__esModule",{value:!0});hd.createGrammarConfig=void 0;var sK=Xe(),uK=St(),cK=Aa(),lK=ke(),dK=Ct();function fK(t){let e=[],r=t.Grammar;for(let n of r.rules)(0,lK.isTerminalRule)(n)&&(0,uK.isCommentTerminal)(n)&&(0,cK.isMultilineComment)((0,dK.terminalRegex)(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:sK.DefaultNameRegexp}}hd.createGrammarConfig=fK});var Zg=d(md=>{"use strict";Object.defineProperty(md,"__esModule",{value:!0});md.VERSION=void 0;md.VERSION="10.4.2"});var Ma=d((Oce,N0)=>{var pK=Object.prototype;function hK(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||pK;return t===r}N0.exports=hK});var ey=d((Dce,k0)=>{function mK(t,e){return function(r){return t(e(r))}}k0.exports=mK});var O0=d((Ice,w0)=>{var gK=ey(),yK=gK(Object.keys,Object);w0.exports=yK});var ty=d((xce,D0)=>{var vK=Ma(),_K=O0(),TK=Object.prototype,RK=TK.hasOwnProperty;function AK(t){if(!vK(t))return _K(t);var e=[];for(var r in Object(t))RK.call(t,r)&&r!="constructor"&&e.push(r);return e}D0.exports=AK});var ry=d((qce,I0)=>{var bK=typeof global=="object"&&global&&global.Object===Object&&global;I0.exports=bK});var fn=d((Lce,x0)=>{var SK=ry(),CK=typeof self=="object"&&self&&self.Object===Object&&self,EK=SK||CK||Function("return this")();x0.exports=EK});var No=d((Mce,q0)=>{var PK=fn(),NK=PK.Symbol;q0.exports=NK});var F0=d(($ce,$0)=>{var L0=No(),M0=Object.prototype,kK=M0.hasOwnProperty,wK=M0.toString,Su=L0?L0.toStringTag:void 0;function OK(t){var e=kK.call(t,Su),r=t[Su];try{t[Su]=void 0;var n=!0}catch{}var i=wK.call(t);return n&&(e?t[Su]=r:delete t[Su]),i}$0.exports=OK});var G0=d((Fce,j0)=>{var DK=Object.prototype,IK=DK.toString;function xK(t){return IK.call(t)}j0.exports=xK});var Yi=d((jce,W0)=>{var U0=No(),qK=F0(),LK=G0(),MK="[object Null]",$K="[object Undefined]",H0=U0?U0.toStringTag:void 0;function FK(t){return t==null?t===void 0?$K:MK:H0&&H0 in Object(t)?qK(t):LK(t)}W0.exports=FK});var pn=d((Gce,K0)=>{function jK(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}K0.exports=jK});var $a=d((Uce,B0)=>{var GK=Yi(),UK=pn(),HK="[object AsyncFunction]",WK="[object Function]",KK="[object GeneratorFunction]",BK="[object Proxy]";function zK(t){if(!UK(t))return!1;var e=GK(t);return e==WK||e==KK||e==HK||e==BK}B0.exports=zK});var V0=d((Hce,z0)=>{var VK=fn(),YK=VK["__core-js_shared__"];z0.exports=YK});var J0=d((Wce,X0)=>{var ny=V0(),Y0=function(){var t=/[^.]+$/.exec(ny&&ny.keys&&ny.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function XK(t){return!!Y0&&Y0 in t}X0.exports=XK});var iy=d((Kce,Q0)=>{var JK=Function.prototype,QK=JK.toString;function ZK(t){if(t!=null){try{return QK.call(t)}catch{}try{return t+""}catch{}}return""}Q0.exports=ZK});var eS=d((Bce,Z0)=>{var eB=$a(),tB=J0(),rB=pn(),nB=iy(),iB=/[\\^$.*+?()[\]{}|]/g,oB=/^\[object .+?Constructor\]$/,aB=Function.prototype,sB=Object.prototype,uB=aB.toString,cB=sB.hasOwnProperty,lB=RegExp("^"+uB.call(cB).replace(iB,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dB(t){if(!rB(t)||tB(t))return!1;var e=eB(t)?lB:oB;return e.test(nB(t))}Z0.exports=dB});var rS=d((zce,tS)=>{function fB(t,e){return t?.[e]}tS.exports=fB});var Xi=d((Vce,nS)=>{var pB=eS(),hB=rS();function mB(t,e){var r=hB(t,e);return pB(r)?r:void 0}nS.exports=mB});var oS=d((Yce,iS)=>{var gB=Xi(),yB=fn(),vB=gB(yB,"DataView");iS.exports=vB});var gd=d((Xce,aS)=>{var _B=Xi(),TB=fn(),RB=_B(TB,"Map");aS.exports=RB});var uS=d((Jce,sS)=>{var AB=Xi(),bB=fn(),SB=AB(bB,"Promise");sS.exports=SB});var oy=d((Qce,cS)=>{var CB=Xi(),EB=fn(),PB=CB(EB,"Set");cS.exports=PB});var dS=d((Zce,lS)=>{var NB=Xi(),kB=fn(),wB=NB(kB,"WeakMap");lS.exports=wB});var ja=d((ele,vS)=>{var ay=oS(),sy=gd(),uy=uS(),cy=oy(),ly=dS(),yS=Yi(),Fa=iy(),fS="[object Map]",OB="[object Object]",pS="[object Promise]",hS="[object Set]",mS="[object WeakMap]",gS="[object DataView]",DB=Fa(ay),IB=Fa(sy),xB=Fa(uy),qB=Fa(cy),LB=Fa(ly),ko=yS;(ay&&ko(new ay(new ArrayBuffer(1)))!=gS||sy&&ko(new sy)!=fS||uy&&ko(uy.resolve())!=pS||cy&&ko(new cy)!=hS||ly&&ko(new ly)!=mS)&&(ko=function(t){var e=yS(t),r=e==OB?t.constructor:void 0,n=r?Fa(r):"";if(n)switch(n){case DB:return gS;case IB:return fS;case xB:return pS;case qB:return hS;case LB:return mS}return e});vS.exports=ko});var hn=d((tle,_S)=>{function MB(t){return t!=null&&typeof t=="object"}_S.exports=MB});var RS=d((rle,TS)=>{var $B=Yi(),FB=hn(),jB="[object Arguments]";function GB(t){return FB(t)&&$B(t)==jB}TS.exports=GB});var Cu=d((nle,SS)=>{var AS=RS(),UB=hn(),bS=Object.prototype,HB=bS.hasOwnProperty,WB=bS.propertyIsEnumerable,KB=AS(function(){return arguments}())?AS:function(t){return UB(t)&&HB.call(t,"callee")&&!WB.call(t,"callee")};SS.exports=KB});var we=d((ile,CS)=>{var BB=Array.isArray;CS.exports=BB});var yd=d((ole,ES)=>{var zB=9007199254740991;function VB(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=zB}ES.exports=VB});var mn=d((ale,PS)=>{var YB=$a(),XB=yd();function JB(t){return t!=null&&XB(t.length)&&!YB(t)}PS.exports=JB});var kS=d((sle,NS)=>{function QB(){return!1}NS.exports=QB});var Pu=d((Eu,Ga)=>{var ZB=fn(),ez=kS(),DS=typeof Eu=="object"&&Eu&&!Eu.nodeType&&Eu,wS=DS&&typeof Ga=="object"&&Ga&&!Ga.nodeType&&Ga,tz=wS&&wS.exports===DS,OS=tz?ZB.Buffer:void 0,rz=OS?OS.isBuffer:void 0,nz=rz||ez;Ga.exports=nz});var xS=d((ule,IS)=>{var iz=Yi(),oz=yd(),az=hn(),sz="[object Arguments]",uz="[object Array]",cz="[object Boolean]",lz="[object Date]",dz="[object Error]",fz="[object Function]",pz="[object Map]",hz="[object Number]",mz="[object Object]",gz="[object RegExp]",yz="[object Set]",vz="[object String]",_z="[object WeakMap]",Tz="[object ArrayBuffer]",Rz="[object DataView]",Az="[object Float32Array]",bz="[object Float64Array]",Sz="[object Int8Array]",Cz="[object Int16Array]",Ez="[object Int32Array]",Pz="[object Uint8Array]",Nz="[object Uint8ClampedArray]",kz="[object Uint16Array]",wz="[object Uint32Array]",Be={};Be[Az]=Be[bz]=Be[Sz]=Be[Cz]=Be[Ez]=Be[Pz]=Be[Nz]=Be[kz]=Be[wz]=!0;Be[sz]=Be[uz]=Be[Tz]=Be[cz]=Be[Rz]=Be[lz]=Be[dz]=Be[fz]=Be[pz]=Be[hz]=Be[mz]=Be[gz]=Be[yz]=Be[vz]=Be[_z]=!1;function Oz(t){return az(t)&&oz(t.length)&&!!Be[iz(t)]}IS.exports=Oz});var Ua=d((cle,qS)=>{function Dz(t){return function(e){return t(e)}}qS.exports=Dz});var wu=d((Nu,Ha)=>{var Iz=ry(),LS=typeof Nu=="object"&&Nu&&!Nu.nodeType&&Nu,ku=LS&&typeof Ha=="object"&&Ha&&!Ha.nodeType&&Ha,xz=ku&&ku.exports===LS,dy=xz&&Iz.process,qz=function(){try{var t=ku&&ku.require&&ku.require("util").types;return t||dy&&dy.binding&&dy.binding("util")}catch{}}();Ha.exports=qz});var vd=d((lle,FS)=>{var Lz=xS(),Mz=Ua(),MS=wu(),$S=MS&&MS.isTypedArray,$z=$S?Mz($S):Lz;FS.exports=$z});var Sr=d((dle,jS)=>{var Fz=ty(),jz=ja(),Gz=Cu(),Uz=we(),Hz=mn(),Wz=Pu(),Kz=Ma(),Bz=vd(),zz="[object Map]",Vz="[object Set]",Yz=Object.prototype,Xz=Yz.hasOwnProperty;function Jz(t){if(t==null)return!0;if(Hz(t)&&(Uz(t)||typeof t=="string"||typeof t.splice=="function"||Wz(t)||Bz(t)||Gz(t)))return!t.length;var e=jz(t);if(e==zz||e==Vz)return!t.size;if(Kz(t))return!Fz(t).length;for(var r in t)if(Xz.call(t,r))return!1;return!0}jS.exports=Jz});var Wa=d((fle,GS)=>{function Qz(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}GS.exports=Qz});var HS=d((ple,US)=>{function Zz(){this.__data__=[],this.size=0}US.exports=Zz});var Ka=d((hle,WS)=>{function e2(t,e){return t===e||t!==t&&e!==e}WS.exports=e2});var Ou=d((mle,KS)=>{var t2=Ka();function r2(t,e){for(var r=t.length;r--;)if(t2(t[r][0],e))return r;return-1}KS.exports=r2});var zS=d((gle,BS)=>{var n2=Ou(),i2=Array.prototype,o2=i2.splice;function a2(t){var e=this.__data__,r=n2(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():o2.call(e,r,1),--this.size,!0}BS.exports=a2});var YS=d((yle,VS)=>{var s2=Ou();function u2(t){var e=this.__data__,r=s2(e,t);return r<0?void 0:e[r][1]}VS.exports=u2});var JS=d((vle,XS)=>{var c2=Ou();function l2(t){return c2(this.__data__,t)>-1}XS.exports=l2});var ZS=d((_le,QS)=>{var d2=Ou();function f2(t,e){var r=this.__data__,n=d2(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}QS.exports=f2});var Du=d((Tle,eC)=>{var p2=HS(),h2=zS(),m2=YS(),g2=JS(),y2=ZS();function Ba(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ba.prototype.clear=p2;Ba.prototype.delete=h2;Ba.prototype.get=m2;Ba.prototype.has=g2;Ba.prototype.set=y2;eC.exports=Ba});var rC=d((Rle,tC)=>{var v2=Du();function _2(){this.__data__=new v2,this.size=0}tC.exports=_2});var iC=d((Ale,nC)=>{function T2(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}nC.exports=T2});var aC=d((ble,oC)=>{function R2(t){return this.__data__.get(t)}oC.exports=R2});var uC=d((Sle,sC)=>{function A2(t){return this.__data__.has(t)}sC.exports=A2});var Iu=d((Cle,cC)=>{var b2=Xi(),S2=b2(Object,"create");cC.exports=S2});var fC=d((Ele,dC)=>{var lC=Iu();function C2(){this.__data__=lC?lC(null):{},this.size=0}dC.exports=C2});var hC=d((Ple,pC)=>{function E2(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}pC.exports=E2});var gC=d((Nle,mC)=>{var P2=Iu(),N2="__lodash_hash_undefined__",k2=Object.prototype,w2=k2.hasOwnProperty;function O2(t){var e=this.__data__;if(P2){var r=e[t];return r===N2?void 0:r}return w2.call(e,t)?e[t]:void 0}mC.exports=O2});var vC=d((kle,yC)=>{var D2=Iu(),I2=Object.prototype,x2=I2.hasOwnProperty;function q2(t){var e=this.__data__;return D2?e[t]!==void 0:x2.call(e,t)}yC.exports=q2});var TC=d((wle,_C)=>{var L2=Iu(),M2="__lodash_hash_undefined__";function $2(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=L2&&e===void 0?M2:e,this}_C.exports=$2});var AC=d((Ole,RC)=>{var F2=fC(),j2=hC(),G2=gC(),U2=vC(),H2=TC();function za(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}za.prototype.clear=F2;za.prototype.delete=j2;za.prototype.get=G2;za.prototype.has=U2;za.prototype.set=H2;RC.exports=za});var CC=d((Dle,SC)=>{var bC=AC(),W2=Du(),K2=gd();function B2(){this.size=0,this.__data__={hash:new bC,map:new(K2||W2),string:new bC}}SC.exports=B2});var PC=d((Ile,EC)=>{function z2(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}EC.exports=z2});var xu=d((xle,NC)=>{var V2=PC();function Y2(t,e){var r=t.__data__;return V2(e)?r[typeof e=="string"?"string":"hash"]:r.map}NC.exports=Y2});var wC=d((qle,kC)=>{var X2=xu();function J2(t){var e=X2(this,t).delete(t);return this.size-=e?1:0,e}kC.exports=J2});var DC=d((Lle,OC)=>{var Q2=xu();function Z2(t){return Q2(this,t).get(t)}OC.exports=Z2});var xC=d((Mle,IC)=>{var eV=xu();function tV(t){return eV(this,t).has(t)}IC.exports=tV});var LC=d(($le,qC)=>{var rV=xu();function nV(t,e){var r=rV(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}qC.exports=nV});var _d=d((Fle,MC)=>{var iV=CC(),oV=wC(),aV=DC(),sV=xC(),uV=LC();function Va(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Va.prototype.clear=iV;Va.prototype.delete=oV;Va.prototype.get=aV;Va.prototype.has=sV;Va.prototype.set=uV;MC.exports=Va});var FC=d((jle,$C)=>{var cV=Du(),lV=gd(),dV=_d(),fV=200;function pV(t,e){var r=this.__data__;if(r instanceof cV){var n=r.__data__;if(!lV||n.length<fV-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new dV(n)}return r.set(t,e),this.size=r.size,this}$C.exports=pV});var Td=d((Gle,jC)=>{var hV=Du(),mV=rC(),gV=iC(),yV=aC(),vV=uC(),_V=FC();function Ya(t){var e=this.__data__=new hV(t);this.size=e.size}Ya.prototype.clear=mV;Ya.prototype.delete=gV;Ya.prototype.get=yV;Ya.prototype.has=vV;Ya.prototype.set=_V;jC.exports=Ya});var UC=d((Ule,GC)=>{var TV="__lodash_hash_undefined__";function RV(t){return this.__data__.set(t,TV),this}GC.exports=RV});var WC=d((Hle,HC)=>{function AV(t){return this.__data__.has(t)}HC.exports=AV});var Ad=d((Wle,KC)=>{var bV=_d(),SV=UC(),CV=WC();function Rd(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new bV;++e<r;)this.add(t[e])}Rd.prototype.add=Rd.prototype.push=SV;Rd.prototype.has=CV;KC.exports=Rd});var fy=d((Kle,BC)=>{function EV(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}BC.exports=EV});var bd=d((Ble,zC)=>{function PV(t,e){return t.has(e)}zC.exports=PV});var py=d((zle,VC)=>{var NV=Ad(),kV=fy(),wV=bd(),OV=1,DV=2;function IV(t,e,r,n,i,o){var a=r&OV,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var c=o.get(t),l=o.get(e);if(c&&l)return c==e&&l==t;var f=-1,h=!0,v=r&DV?new NV:void 0;for(o.set(t,e),o.set(e,t);++f<s;){var m=t[f],R=e[f];if(n)var P=a?n(R,m,f,e,t,o):n(m,R,f,t,e,o);if(P!==void 0){if(P)continue;h=!1;break}if(v){if(!kV(e,function(C,b){if(!wV(v,b)&&(m===C||i(m,C,r,n,o)))return v.push(b)})){h=!1;break}}else if(!(m===R||i(m,R,r,n,o))){h=!1;break}}return o.delete(t),o.delete(e),h}VC.exports=IV});var hy=d((Vle,YC)=>{var xV=fn(),qV=xV.Uint8Array;YC.exports=qV});var JC=d((Yle,XC)=>{function LV(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}XC.exports=LV});var Sd=d((Xle,QC)=>{function MV(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}QC.exports=MV});var nE=d((Jle,rE)=>{var ZC=No(),eE=hy(),$V=Ka(),FV=py(),jV=JC(),GV=Sd(),UV=1,HV=2,WV="[object Boolean]",KV="[object Date]",BV="[object Error]",zV="[object Map]",VV="[object Number]",YV="[object RegExp]",XV="[object Set]",JV="[object String]",QV="[object Symbol]",ZV="[object ArrayBuffer]",e3="[object DataView]",tE=ZC?ZC.prototype:void 0,my=tE?tE.valueOf:void 0;function t3(t,e,r,n,i,o,a){switch(r){case e3:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ZV:return!(t.byteLength!=e.byteLength||!o(new eE(t),new eE(e)));case WV:case KV:case VV:return $V(+t,+e);case BV:return t.name==e.name&&t.message==e.message;case YV:case JV:return t==e+"";case zV:var s=jV;case XV:var u=n&UV;if(s||(s=GV),t.size!=e.size&&!u)return!1;var c=a.get(t);if(c)return c==e;n|=HV,a.set(t,e);var l=FV(s(t),s(e),n,i,o,a);return a.delete(t),l;case QV:if(my)return my.call(t)==my.call(e)}return!1}rE.exports=t3});var Cd=d((Qle,iE)=>{function r3(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}iE.exports=r3});var gy=d((Zle,oE)=>{var n3=Cd(),i3=we();function o3(t,e,r){var n=e(t);return i3(t)?n:n3(n,r(t))}oE.exports=o3});var Ed=d((ede,aE)=>{function a3(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var a=t[r];e(a,r,t)&&(o[i++]=a)}return o}aE.exports=a3});var yy=d((tde,sE)=>{function s3(){return[]}sE.exports=s3});var Pd=d((rde,cE)=>{var u3=Ed(),c3=yy(),l3=Object.prototype,d3=l3.propertyIsEnumerable,uE=Object.getOwnPropertySymbols,f3=uE?function(t){return t==null?[]:(t=Object(t),u3(uE(t),function(e){return d3.call(t,e)}))}:c3;cE.exports=f3});var dE=d((nde,lE)=>{function p3(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}lE.exports=p3});var qu=d((ide,fE)=>{var h3=9007199254740991,m3=/^(?:0|[1-9]\d*)$/;function g3(t,e){var r=typeof t;return e=e??h3,!!e&&(r=="number"||r!="symbol"&&m3.test(t))&&t>-1&&t%1==0&&t<e}fE.exports=g3});var vy=d((ode,pE)=>{var y3=dE(),v3=Cu(),_3=we(),T3=Pu(),R3=qu(),A3=vd(),b3=Object.prototype,S3=b3.hasOwnProperty;function C3(t,e){var r=_3(t),n=!r&&v3(t),i=!r&&!n&&T3(t),o=!r&&!n&&!i&&A3(t),a=r||n||i||o,s=a?y3(t.length,String):[],u=s.length;for(var c in t)(e||S3.call(t,c))&&!(a&&(c=="length"||i&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||R3(c,u)))&&s.push(c);return s}pE.exports=C3});var Cr=d((ade,hE)=>{var E3=vy(),P3=ty(),N3=mn();function k3(t){return N3(t)?E3(t):P3(t)}hE.exports=k3});var _y=d((sde,mE)=>{var w3=gy(),O3=Pd(),D3=Cr();function I3(t){return w3(t,D3,O3)}mE.exports=I3});var vE=d((ude,yE)=>{var gE=_y(),x3=1,q3=Object.prototype,L3=q3.hasOwnProperty;function M3(t,e,r,n,i,o){var a=r&x3,s=gE(t),u=s.length,c=gE(e),l=c.length;if(u!=l&&!a)return!1;for(var f=u;f--;){var h=s[f];if(!(a?h in e:L3.call(e,h)))return!1}var v=o.get(t),m=o.get(e);if(v&&m)return v==e&&m==t;var R=!0;o.set(t,e),o.set(e,t);for(var P=a;++f<u;){h=s[f];var C=t[h],b=e[h];if(n)var A=a?n(b,C,h,e,t,o):n(C,b,h,t,e,o);if(!(A===void 0?C===b||i(C,b,r,n,o):A)){R=!1;break}P||(P=h=="constructor")}if(R&&!P){var O=t.constructor,$=e.constructor;O!=$&&"constructor"in t&&"constructor"in e&&!(typeof O=="function"&&O instanceof O&&typeof $=="function"&&$ instanceof $)&&(R=!1)}return o.delete(t),o.delete(e),R}yE.exports=M3});var EE=d((cde,CE)=>{var Ty=Td(),$3=py(),F3=nE(),j3=vE(),_E=ja(),TE=we(),RE=Pu(),G3=vd(),U3=1,AE="[object Arguments]",bE="[object Array]",Nd="[object Object]",H3=Object.prototype,SE=H3.hasOwnProperty;function W3(t,e,r,n,i,o){var a=TE(t),s=TE(e),u=a?bE:_E(t),c=s?bE:_E(e);u=u==AE?Nd:u,c=c==AE?Nd:c;var l=u==Nd,f=c==Nd,h=u==c;if(h&&RE(t)){if(!RE(e))return!1;a=!0,l=!1}if(h&&!l)return o||(o=new Ty),a||G3(t)?$3(t,e,r,n,i,o):F3(t,e,u,r,n,i,o);if(!(r&U3)){var v=l&&SE.call(t,"__wrapped__"),m=f&&SE.call(e,"__wrapped__");if(v||m){var R=v?t.value():t,P=m?e.value():e;return o||(o=new Ty),i(R,P,r,n,o)}}return h?(o||(o=new Ty),j3(t,e,r,n,i,o)):!1}CE.exports=W3});var Ry=d((lde,kE)=>{var K3=EE(),PE=hn();function NE(t,e,r,n,i){return t===e?!0:t==null||e==null||!PE(t)&&!PE(e)?t!==t&&e!==e:K3(t,e,r,n,NE,i)}kE.exports=NE});var OE=d((dde,wE)=>{var B3=Td(),z3=Ry(),V3=1,Y3=2;function X3(t,e,r,n){var i=r.length,o=i,a=!n;if(t==null)return!o;for(t=Object(t);i--;){var s=r[i];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<o;){s=r[i];var u=s[0],c=t[u],l=s[1];if(a&&s[2]){if(c===void 0&&!(u in t))return!1}else{var f=new B3;if(n)var h=n(c,l,u,t,e,f);if(!(h===void 0?z3(l,c,V3|Y3,n,f):h))return!1}}return!0}wE.exports=X3});var Ay=d((fde,DE)=>{var J3=pn();function Q3(t){return t===t&&!J3(t)}DE.exports=Q3});var xE=d((pde,IE)=>{var Z3=Ay(),e4=Cr();function t4(t){for(var e=e4(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,Z3(i)]}return e}IE.exports=t4});var by=d((hde,qE)=>{function r4(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}qE.exports=r4});var ME=d((mde,LE)=>{var n4=OE(),i4=xE(),o4=by();function a4(t){var e=i4(t);return e.length==1&&e[0][2]?o4(e[0][0],e[0][1]):function(r){return r===t||n4(r,t,e)}}LE.exports=a4});var Xa=d((gde,$E)=>{var s4=Yi(),u4=hn(),c4="[object Symbol]";function l4(t){return typeof t=="symbol"||u4(t)&&s4(t)==c4}$E.exports=l4});var kd=d((yde,FE)=>{var d4=we(),f4=Xa(),p4=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,h4=/^\w*$/;function m4(t,e){if(d4(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||f4(t)?!0:h4.test(t)||!p4.test(t)||e!=null&&t in Object(e)}FE.exports=m4});var UE=d((vde,GE)=>{var jE=_d(),g4="Expected a function";function Sy(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(g4);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Sy.Cache||jE),r}Sy.Cache=jE;GE.exports=Sy});var WE=d((_de,HE)=>{var y4=UE(),v4=500;function _4(t){var e=y4(t,function(n){return r.size===v4&&r.clear(),n}),r=e.cache;return e}HE.exports=_4});var BE=d((Tde,KE)=>{var T4=WE(),R4=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,A4=/\\(\\)?/g,b4=T4(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(R4,function(r,n,i,o){e.push(i?o.replace(A4,"$1"):n||r)}),e});KE.exports=b4});var QE=d((Rde,JE)=>{var zE=No(),S4=Wa(),C4=we(),E4=Xa(),P4=1/0,VE=zE?zE.prototype:void 0,YE=VE?VE.toString:void 0;function XE(t){if(typeof t=="string")return t;if(C4(t))return S4(t,XE)+"";if(E4(t))return YE?YE.call(t):"";var e=t+"";return e=="0"&&1/t==-P4?"-0":e}JE.exports=XE});var Cy=d((Ade,ZE)=>{var N4=QE();function k4(t){return t==null?"":N4(t)}ZE.exports=k4});var Lu=d((bde,eP)=>{var w4=we(),O4=kd(),D4=BE(),I4=Cy();function x4(t,e){return w4(t)?t:O4(t,e)?[t]:D4(I4(t))}eP.exports=x4});var Ja=d((Sde,tP)=>{var q4=Xa(),L4=1/0;function M4(t){if(typeof t=="string"||q4(t))return t;var e=t+"";return e=="0"&&1/t==-L4?"-0":e}tP.exports=M4});var wd=d((Cde,rP)=>{var $4=Lu(),F4=Ja();function j4(t,e){e=$4(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[F4(e[r++])];return r&&r==n?t:void 0}rP.exports=j4});var iP=d((Ede,nP)=>{var G4=wd();function U4(t,e,r){var n=t==null?void 0:G4(t,e);return n===void 0?r:n}nP.exports=U4});var aP=d((Pde,oP)=>{function H4(t,e){return t!=null&&e in Object(t)}oP.exports=H4});var Ey=d((Nde,sP)=>{var W4=Lu(),K4=Cu(),B4=we(),z4=qu(),V4=yd(),Y4=Ja();function X4(t,e,r){e=W4(e,t);for(var n=-1,i=e.length,o=!1;++n<i;){var a=Y4(e[n]);if(!(o=t!=null&&r(t,a)))break;t=t[a]}return o||++n!=i?o:(i=t==null?0:t.length,!!i&&V4(i)&&z4(a,i)&&(B4(t)||K4(t)))}sP.exports=X4});var cP=d((kde,uP)=>{var J4=aP(),Q4=Ey();function Z4(t,e){return t!=null&&Q4(t,e,J4)}uP.exports=Z4});var dP=d((wde,lP)=>{var e8=Ry(),t8=iP(),r8=cP(),n8=kd(),i8=Ay(),o8=by(),a8=Ja(),s8=1,u8=2;function c8(t,e){return n8(t)&&i8(e)?o8(a8(t),e):function(r){var n=t8(r,t);return n===void 0&&n===e?r8(r,t):e8(e,n,s8|u8)}}lP.exports=c8});var wo=d((Ode,fP)=>{function l8(t){return t}fP.exports=l8});var hP=d((Dde,pP)=>{function d8(t){return function(e){return e?.[t]}}pP.exports=d8});var gP=d((Ide,mP)=>{var f8=wd();function p8(t){return function(e){return f8(e,t)}}mP.exports=p8});var vP=d((xde,yP)=>{var h8=hP(),m8=gP(),g8=kd(),y8=Ja();function v8(t){return g8(t)?h8(y8(t)):m8(t)}yP.exports=v8});var Wr=d((qde,_P)=>{var _8=ME(),T8=dP(),R8=wo(),A8=we(),b8=vP();function S8(t){return typeof t=="function"?t:t==null?R8:typeof t=="object"?A8(t)?T8(t[0],t[1]):_8(t):b8(t)}_P.exports=S8});var RP=d((Lde,TP)=>{function C8(t){return function(e,r,n){for(var i=-1,o=Object(e),a=n(e),s=a.length;s--;){var u=a[t?s:++i];if(r(o[u],u,o)===!1)break}return e}}TP.exports=C8});var bP=d((Mde,AP)=>{var E8=RP(),P8=E8();AP.exports=P8});var CP=d(($de,SP)=>{var N8=bP(),k8=Cr();function w8(t,e){return t&&N8(t,e,k8)}SP.exports=w8});var PP=d((Fde,EP)=>{var O8=mn();function D8(t,e){return function(r,n){if(r==null)return r;if(!O8(r))return t(r,n);for(var i=r.length,o=e?i:-1,a=Object(r);(e?o--:++o<i)&&n(a[o],o,a)!==!1;);return r}}EP.exports=D8});var Ji=d((jde,NP)=>{var I8=CP(),x8=PP(),q8=x8(I8);NP.exports=q8});var wP=d((Gde,kP)=>{var L8=Ji(),M8=mn();function $8(t,e){var r=-1,n=M8(t)?Array(t.length):[];return L8(t,function(i,o,a){n[++r]=e(i,o,a)}),n}kP.exports=$8});var qt=d((Ude,OP)=>{var F8=Wa(),j8=Wr(),G8=wP(),U8=we();function H8(t,e){var r=U8(t)?F8:G8;return r(t,j8(e,3))}OP.exports=H8});var Py=d((Hde,DP)=>{function W8(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}DP.exports=W8});var xP=d((Wde,IP)=>{var K8=wo();function B8(t){return typeof t=="function"?t:K8}IP.exports=B8});var Lt=d((Kde,qP)=>{var z8=Py(),V8=Ji(),Y8=xP(),X8=we();function J8(t,e){var r=X8(t)?z8:V8;return r(t,Y8(e))}qP.exports=J8});var MP=d((Bde,LP)=>{var Q8=Wa();function Z8(t,e){return Q8(e,function(r){return t[r]})}LP.exports=Z8});var Ln=d((zde,$P)=>{var e6=MP(),t6=Cr();function r6(t){return t==null?[]:e6(t,t6(t))}$P.exports=r6});var jP=d((Vde,FP)=>{var n6=Object.prototype,i6=n6.hasOwnProperty;function o6(t,e){return t!=null&&i6.call(t,e)}FP.exports=o6});var Er=d((Yde,GP)=>{var a6=jP(),s6=Ey();function u6(t,e){return t!=null&&s6(t,e,a6)}GP.exports=u6});var Ny=d((Xde,UP)=>{var c6=Xi(),l6=function(){try{var t=c6(Object,"defineProperty");return t({},"",{}),t}catch{}}();UP.exports=l6});var Od=d((Jde,WP)=>{var HP=Ny();function d6(t,e,r){e=="__proto__"&&HP?HP(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}WP.exports=d6});var Mu=d((Qde,KP)=>{var f6=Od(),p6=Ka(),h6=Object.prototype,m6=h6.hasOwnProperty;function g6(t,e,r){var n=t[e];(!(m6.call(t,e)&&p6(n,r))||r===void 0&&!(e in t))&&f6(t,e,r)}KP.exports=g6});var Qa=d((Zde,BP)=>{var y6=Mu(),v6=Od();function _6(t,e,r,n){var i=!r;r||(r={});for(var o=-1,a=e.length;++o<a;){var s=e[o],u=n?n(r[s],t[s],s,r,t):void 0;u===void 0&&(u=t[s]),i?v6(r,s,u):y6(r,s,u)}return r}BP.exports=_6});var VP=d((efe,zP)=>{var T6=Qa(),R6=Cr();function A6(t,e){return t&&T6(e,R6(e),t)}zP.exports=A6});var XP=d((tfe,YP)=>{function b6(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}YP.exports=b6});var QP=d((rfe,JP)=>{var S6=pn(),C6=Ma(),E6=XP(),P6=Object.prototype,N6=P6.hasOwnProperty;function k6(t){if(!S6(t))return E6(t);var e=C6(t),r=[];for(var n in t)n=="constructor"&&(e||!N6.call(t,n))||r.push(n);return r}JP.exports=k6});var $u=d((nfe,ZP)=>{var w6=vy(),O6=QP(),D6=mn();function I6(t){return D6(t)?w6(t,!0):O6(t)}ZP.exports=I6});var tN=d((ife,eN)=>{var x6=Qa(),q6=$u();function L6(t,e){return t&&x6(e,q6(e),t)}eN.exports=L6});var aN=d((Fu,Za)=>{var M6=fn(),oN=typeof Fu=="object"&&Fu&&!Fu.nodeType&&Fu,rN=oN&&typeof Za=="object"&&Za&&!Za.nodeType&&Za,$6=rN&&rN.exports===oN,nN=$6?M6.Buffer:void 0,iN=nN?nN.allocUnsafe:void 0;function F6(t,e){if(e)return t.slice();var r=t.length,n=iN?iN(r):new t.constructor(r);return t.copy(n),n}Za.exports=F6});var uN=d((ofe,sN)=>{function j6(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}sN.exports=j6});var lN=d((afe,cN)=>{var G6=Qa(),U6=Pd();function H6(t,e){return G6(t,U6(t),e)}cN.exports=H6});var ky=d((sfe,dN)=>{var W6=ey(),K6=W6(Object.getPrototypeOf,Object);dN.exports=K6});var wy=d((ufe,fN)=>{var B6=Cd(),z6=ky(),V6=Pd(),Y6=yy(),X6=Object.getOwnPropertySymbols,J6=X6?function(t){for(var e=[];t;)B6(e,V6(t)),t=z6(t);return e}:Y6;fN.exports=J6});var hN=d((cfe,pN)=>{var Q6=Qa(),Z6=wy();function e5(t,e){return Q6(t,Z6(t),e)}pN.exports=e5});var Oy=d((lfe,mN)=>{var t5=gy(),r5=wy(),n5=$u();function i5(t){return t5(t,n5,r5)}mN.exports=i5});var yN=d((dfe,gN)=>{var o5=Object.prototype,a5=o5.hasOwnProperty;function s5(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&a5.call(t,"index")&&(r.index=t.index,r.input=t.input),r}gN.exports=s5});var Dd=d((ffe,_N)=>{var vN=hy();function u5(t){var e=new t.constructor(t.byteLength);return new vN(e).set(new vN(t)),e}_N.exports=u5});var RN=d((pfe,TN)=>{var c5=Dd();function l5(t,e){var r=e?c5(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}TN.exports=l5});var bN=d((hfe,AN)=>{var d5=/\w*$/;function f5(t){var e=new t.constructor(t.source,d5.exec(t));return e.lastIndex=t.lastIndex,e}AN.exports=f5});var NN=d((mfe,PN)=>{var SN=No(),CN=SN?SN.prototype:void 0,EN=CN?CN.valueOf:void 0;function p5(t){return EN?Object(EN.call(t)):{}}PN.exports=p5});var wN=d((gfe,kN)=>{var h5=Dd();function m5(t,e){var r=e?h5(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}kN.exports=m5});var DN=d((yfe,ON)=>{var g5=Dd(),y5=RN(),v5=bN(),_5=NN(),T5=wN(),R5="[object Boolean]",A5="[object Date]",b5="[object Map]",S5="[object Number]",C5="[object RegExp]",E5="[object Set]",P5="[object String]",N5="[object Symbol]",k5="[object ArrayBuffer]",w5="[object DataView]",O5="[object Float32Array]",D5="[object Float64Array]",I5="[object Int8Array]",x5="[object Int16Array]",q5="[object Int32Array]",L5="[object Uint8Array]",M5="[object Uint8ClampedArray]",$5="[object Uint16Array]",F5="[object Uint32Array]";function j5(t,e,r){var n=t.constructor;switch(e){case k5:return g5(t);case R5:case A5:return new n(+t);case w5:return y5(t,r);case O5:case D5:case I5:case x5:case q5:case L5:case M5:case $5:case F5:return T5(t,r);case b5:return new n;case S5:case P5:return new n(t);case C5:return v5(t);case E5:return new n;case N5:return _5(t)}}ON.exports=j5});var qN=d((vfe,xN)=>{var G5=pn(),IN=Object.create,U5=function(){function t(){}return function(e){if(!G5(e))return{};if(IN)return IN(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();xN.exports=U5});var MN=d((_fe,LN)=>{var H5=qN(),W5=ky(),K5=Ma();function B5(t){return typeof t.constructor=="function"&&!K5(t)?H5(W5(t)):{}}LN.exports=B5});var FN=d((Tfe,$N)=>{var z5=ja(),V5=hn(),Y5="[object Map]";function X5(t){return V5(t)&&z5(t)==Y5}$N.exports=X5});var HN=d((Rfe,UN)=>{var J5=FN(),Q5=Ua(),jN=wu(),GN=jN&&jN.isMap,Z5=GN?Q5(GN):J5;UN.exports=Z5});var KN=d((Afe,WN)=>{var e7=ja(),t7=hn(),r7="[object Set]";function n7(t){return t7(t)&&e7(t)==r7}WN.exports=n7});var YN=d((bfe,VN)=>{var i7=KN(),o7=Ua(),BN=wu(),zN=BN&&BN.isSet,a7=zN?o7(zN):i7;VN.exports=a7});var ek=d((Sfe,ZN)=>{var s7=Td(),u7=Py(),c7=Mu(),l7=VP(),d7=tN(),f7=aN(),p7=uN(),h7=lN(),m7=hN(),g7=_y(),y7=Oy(),v7=ja(),_7=yN(),T7=DN(),R7=MN(),A7=we(),b7=Pu(),S7=HN(),C7=pn(),E7=YN(),P7=Cr(),N7=$u(),k7=1,w7=2,O7=4,XN="[object Arguments]",D7="[object Array]",I7="[object Boolean]",x7="[object Date]",q7="[object Error]",JN="[object Function]",L7="[object GeneratorFunction]",M7="[object Map]",$7="[object Number]",QN="[object Object]",F7="[object RegExp]",j7="[object Set]",G7="[object String]",U7="[object Symbol]",H7="[object WeakMap]",W7="[object ArrayBuffer]",K7="[object DataView]",B7="[object Float32Array]",z7="[object Float64Array]",V7="[object Int8Array]",Y7="[object Int16Array]",X7="[object Int32Array]",J7="[object Uint8Array]",Q7="[object Uint8ClampedArray]",Z7="[object Uint16Array]",eY="[object Uint32Array]",Ue={};Ue[XN]=Ue[D7]=Ue[W7]=Ue[K7]=Ue[I7]=Ue[x7]=Ue[B7]=Ue[z7]=Ue[V7]=Ue[Y7]=Ue[X7]=Ue[M7]=Ue[$7]=Ue[QN]=Ue[F7]=Ue[j7]=Ue[G7]=Ue[U7]=Ue[J7]=Ue[Q7]=Ue[Z7]=Ue[eY]=!0;Ue[q7]=Ue[JN]=Ue[H7]=!1;function Id(t,e,r,n,i,o){var a,s=e&k7,u=e&w7,c=e&O7;if(r&&(a=i?r(t,n,i,o):r(t)),a!==void 0)return a;if(!C7(t))return t;var l=A7(t);if(l){if(a=_7(t),!s)return p7(t,a)}else{var f=v7(t),h=f==JN||f==L7;if(b7(t))return f7(t,s);if(f==QN||f==XN||h&&!i){if(a=u||h?{}:R7(t),!s)return u?m7(t,d7(a,t)):h7(t,l7(a,t))}else{if(!Ue[f])return i?t:{};a=T7(t,f,s)}}o||(o=new s7);var v=o.get(t);if(v)return v;o.set(t,a),E7(t)?t.forEach(function(P){a.add(Id(P,e,r,P,t,o))}):S7(t)&&t.forEach(function(P,C){a.set(C,Id(P,e,r,C,t,o))});var m=c?u?y7:g7:u?N7:P7,R=l?void 0:m(t);return u7(R||t,function(P,C){R&&(C=P,P=t[C]),c7(a,C,Id(P,e,r,C,t,o))}),a}ZN.exports=Id});var mi=d((Cfe,tk)=>{var tY=ek(),rY=4;function nY(t){return tY(t,rY)}tk.exports=nY});var rk=d(es=>{"use strict";Object.defineProperty(es,"__esModule",{value:!0});es.PRINT_WARNING=es.PRINT_ERROR=void 0;function iY(t){console&&console.error&&console.error("Error: ".concat(t))}es.PRINT_ERROR=iY;function oY(t){console&&console.warn&&console.warn("Warning: ".concat(t))}es.PRINT_WARNING=oY});var nk=d(xd=>{"use strict";Object.defineProperty(xd,"__esModule",{value:!0});xd.timer=void 0;function aY(t){var e=new Date().getTime(),r=t(),n=new Date().getTime(),i=n-e;return{time:i,value:r}}xd.timer=aY});var ik=d((exports,module)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.toFastProperties=void 0;function toFastProperties(toBecomeFast){function FakeConstructor(){}FakeConstructor.prototype=toBecomeFast;var fakeInstance=new FakeConstructor;function fakeAccess(){return typeof fakeInstance.bar}return fakeAccess(),fakeAccess(),toBecomeFast;eval(toBecomeFast)}exports.toFastProperties=toFastProperties});var ts=d(Mn=>{"use strict";Object.defineProperty(Mn,"__esModule",{value:!0});Mn.toFastProperties=Mn.timer=Mn.PRINT_ERROR=Mn.PRINT_WARNING=void 0;var ok=rk();Object.defineProperty(Mn,"PRINT_WARNING",{enumerable:!0,get:function(){return ok.PRINT_WARNING}});Object.defineProperty(Mn,"PRINT_ERROR",{enumerable:!0,get:function(){return ok.PRINT_ERROR}});var sY=nk();Object.defineProperty(Mn,"timer",{enumerable:!0,get:function(){return sY.timer}});var uY=ik();Object.defineProperty(Mn,"toFastProperties",{enumerable:!0,get:function(){return uY.toFastProperties}})});var qd=d((kfe,ak)=>{function cY(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}ak.exports=cY});var uk=d((wfe,sk)=>{var lY=/\s/;function dY(t){for(var e=t.length;e--&&lY.test(t.charAt(e)););return e}sk.exports=dY});var lk=d((Ofe,ck)=>{var fY=uk(),pY=/^\s+/;function hY(t){return t&&t.slice(0,fY(t)+1).replace(pY,"")}ck.exports=hY});var hk=d((Dfe,pk)=>{var mY=lk(),dk=pn(),gY=Xa(),fk=0/0,yY=/^[-+]0x[0-9a-f]+$/i,vY=/^0b[01]+$/i,_Y=/^0o[0-7]+$/i,TY=parseInt;function RY(t){if(typeof t=="number")return t;if(gY(t))return fk;if(dk(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=dk(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=mY(t);var r=vY.test(t);return r||_Y.test(t)?TY(t.slice(2),r?2:8):yY.test(t)?fk:+t}pk.exports=RY});var yk=d((Ife,gk)=>{var AY=hk(),mk=1/0,bY=17976931348623157e292;function SY(t){if(!t)return t===0?t:0;if(t=AY(t),t===mk||t===-mk){var e=t<0?-1:1;return e*bY}return t===t?t:0}gk.exports=SY});var rs=d((xfe,vk)=>{var CY=yk();function EY(t){var e=CY(t),r=e%1;return e===e?r?e-r:e:0}vk.exports=EY});var Ld=d((qfe,_k)=>{var PY=qd(),NY=rs();function kY(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:NY(e),PY(t,e<0?0:e,n)):[]}_k.exports=kY});var ju=d((Lfe,Tk)=>{var wY=Yi(),OY=we(),DY=hn(),IY="[object String]";function xY(t){return typeof t=="string"||!OY(t)&&DY(t)&&wY(t)==IY}Tk.exports=xY});var Ak=d((Mfe,Rk)=>{var qY=Yi(),LY=hn(),MY="[object RegExp]";function $Y(t){return LY(t)&&qY(t)==MY}Rk.exports=$Y});var Dy=d(($fe,Ck)=>{var FY=Ak(),jY=Ua(),bk=wu(),Sk=bk&&bk.isRegExp,GY=Sk?jY(Sk):FY;Ck.exports=GY});var Nk=d((Ffe,Pk)=>{var UY=Mu(),HY=Lu(),WY=qu(),Ek=pn(),KY=Ja();function BY(t,e,r,n){if(!Ek(t))return t;e=HY(e,t);for(var i=-1,o=e.length,a=o-1,s=t;s!=null&&++i<o;){var u=KY(e[i]),c=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return t;if(i!=a){var l=s[u];c=n?n(l,u,s):void 0,c===void 0&&(c=Ek(l)?l:WY(e[i+1])?[]:{})}UY(s,u,c),s=s[u]}return t}Pk.exports=BY});var wk=d((jfe,kk)=>{var zY=wd(),VY=Nk(),YY=Lu();function XY(t,e,r){for(var n=-1,i=e.length,o={};++n<i;){var a=e[n],s=zY(t,a);r(s,a)&&VY(o,YY(a,t),s)}return o}kk.exports=XY});var Iy=d((Gfe,Ok)=>{var JY=Wa(),QY=Wr(),ZY=wk(),eX=Oy();function tX(t,e){if(t==null)return{};var r=JY(eX(t),function(n){return[n]});return e=QY(e),ZY(t,r,function(n,i){return e(n,i[0])})}Ok.exports=tX});var Ik=d((Ufe,Dk)=>{function rX(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}Dk.exports=rX});var Lk=d((Hfe,qk)=>{var nX=Ik(),xk=Math.max;function iX(t,e,r){return e=xk(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=xk(n.length-e,0),a=Array(o);++i<o;)a[i]=n[e+i];i=-1;for(var s=Array(e+1);++i<e;)s[i]=n[i];return s[e]=r(a),nX(t,this,s)}}qk.exports=iX});var $k=d((Wfe,Mk)=>{function oX(t){return function(){return t}}Mk.exports=oX});var Gk=d((Kfe,jk)=>{var aX=$k(),Fk=Ny(),sX=wo(),uX=Fk?function(t,e){return Fk(t,"toString",{configurable:!0,enumerable:!1,value:aX(e),writable:!0})}:sX;jk.exports=uX});var Hk=d((Bfe,Uk)=>{var cX=800,lX=16,dX=Date.now;function fX(t){var e=0,r=0;return function(){var n=dX(),i=lX-(n-r);if(r=n,i>0){if(++e>=cX)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}Uk.exports=fX});var Kk=d((zfe,Wk)=>{var pX=Gk(),hX=Hk(),mX=hX(pX);Wk.exports=mX});var Md=d((Vfe,Bk)=>{var gX=wo(),yX=Lk(),vX=Kk();function _X(t,e){return vX(yX(t,e,gX),t+"")}Bk.exports=_X});var Gu=d((Yfe,zk)=>{var TX=Ka(),RX=mn(),AX=qu(),bX=pn();function SX(t,e,r){if(!bX(r))return!1;var n=typeof e;return(n=="number"?RX(r)&&AX(e,r.length):n=="string"&&e in r)?TX(r[e],t):!1}zk.exports=SX});var Yk=d((Xfe,Vk)=>{var CX=Md(),EX=Gu();function PX(t){return CX(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,a=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,a&&EX(r[0],r[1],a)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var s=r[n];s&&t(e,s,n,o)}return e})}Vk.exports=PX});var Uu=d((Jfe,Xk)=>{var NX=Mu(),kX=Qa(),wX=Yk(),OX=mn(),DX=Ma(),IX=Cr(),xX=Object.prototype,qX=xX.hasOwnProperty,LX=wX(function(t,e){if(DX(e)||OX(e)){kX(e,IX(e),t);return}for(var r in e)qX.call(e,r)&&NX(t,r,e[r])});Xk.exports=LX});var Fd=d(be=>{"use strict";var gi=be&&be.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),ns=be&&be.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(be,"__esModule",{value:!0});be.serializeProduction=be.serializeGrammar=be.Terminal=be.Alternation=be.RepetitionWithSeparator=be.Repetition=be.RepetitionMandatoryWithSeparator=be.RepetitionMandatory=be.Option=be.Alternative=be.Rule=be.NonTerminal=be.AbstractProduction=void 0;var Jk=ns(qt()),MX=ns(Lt()),xy=ns(ju()),$X=ns(Dy()),$n=ns(Iy()),Fn=ns(Uu());function FX(t){return jX(t)?t.LABEL:t.name}function jX(t){return(0,xy.default)(t.LABEL)&&t.LABEL!==""}var jn=function(){function t(e){this._definition=e}return Object.defineProperty(t.prototype,"definition",{get:function(){return this._definition},set:function(e){this._definition=e},enumerable:!1,configurable:!0}),t.prototype.accept=function(e){e.visit(this),(0,MX.default)(this.definition,function(r){r.accept(e)})},t}();be.AbstractProduction=jn;var Qk=function(t){gi(e,t);function e(r){var n=t.call(this,[])||this;return n.idx=1,(0,Fn.default)(n,(0,$n.default)(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(r){},enumerable:!1,configurable:!0}),e.prototype.accept=function(r){r.visit(this)},e}(jn);be.NonTerminal=Qk;var Zk=function(t){gi(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.orgText="",(0,Fn.default)(n,(0,$n.default)(r,function(i){return i!==void 0})),n}return e}(jn);be.Rule=Zk;var ew=function(t){gi(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.ignoreAmbiguities=!1,(0,Fn.default)(n,(0,$n.default)(r,function(i){return i!==void 0})),n}return e}(jn);be.Alternative=ew;var tw=function(t){gi(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Fn.default)(n,(0,$n.default)(r,function(i){return i!==void 0})),n}return e}(jn);be.Option=tw;var rw=function(t){gi(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Fn.default)(n,(0,$n.default)(r,function(i){return i!==void 0})),n}return e}(jn);be.RepetitionMandatory=rw;var nw=function(t){gi(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Fn.default)(n,(0,$n.default)(r,function(i){return i!==void 0})),n}return e}(jn);be.RepetitionMandatoryWithSeparator=nw;var iw=function(t){gi(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Fn.default)(n,(0,$n.default)(r,function(i){return i!==void 0})),n}return e}(jn);be.Repetition=iw;var ow=function(t){gi(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,(0,Fn.default)(n,(0,$n.default)(r,function(i){return i!==void 0})),n}return e}(jn);be.RepetitionWithSeparator=ow;var aw=function(t){gi(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,n.ignoreAmbiguities=!1,n.hasPredicates=!1,(0,Fn.default)(n,(0,$n.default)(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this._definition},set:function(r){this._definition=r},enumerable:!1,configurable:!0}),e}(jn);be.Alternation=aw;var $d=function(){function t(e){this.idx=1,(0,Fn.default)(this,(0,$n.default)(e,function(r){return r!==void 0}))}return t.prototype.accept=function(e){e.visit(this)},t}();be.Terminal=$d;function GX(t){return(0,Jk.default)(t,Hu)}be.serializeGrammar=GX;function Hu(t){function e(o){return(0,Jk.default)(o,Hu)}if(t instanceof Qk){var r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return(0,xy.default)(t.label)&&(r.label=t.label),r}else{if(t instanceof ew)return{type:"Alternative",definition:e(t.definition)};if(t instanceof tw)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof rw)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof nw)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:Hu(new $d({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof ow)return{type:"RepetitionWithSeparator",idx:t.idx,separator:Hu(new $d({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof iw)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof aw)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof $d){var n={type:"Terminal",name:t.terminalType.name,label:FX(t.terminalType),idx:t.idx};(0,xy.default)(t.label)&&(n.terminalLabel=t.label);var i=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(n.pattern=(0,$X.default)(i)?i.source:i),n}else{if(t instanceof Zk)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}be.serializeProduction=Hu});var sw=d(jd=>{"use strict";Object.defineProperty(jd,"__esModule",{value:!0});jd.GAstVisitor=void 0;var Gn=Fd(),UX=function(){function t(){}return t.prototype.visit=function(e){var r=e;switch(r.constructor){case Gn.NonTerminal:return this.visitNonTerminal(r);case Gn.Alternative:return this.visitAlternative(r);case Gn.Option:return this.visitOption(r);case Gn.RepetitionMandatory:return this.visitRepetitionMandatory(r);case Gn.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(r);case Gn.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(r);case Gn.Repetition:return this.visitRepetition(r);case Gn.Alternation:return this.visitAlternation(r);case Gn.Terminal:return this.visitTerminal(r);case Gn.Rule:return this.visitRule(r);default:throw Error("non exhaustive match")}},t.prototype.visitNonTerminal=function(e){},t.prototype.visitAlternative=function(e){},t.prototype.visitOption=function(e){},t.prototype.visitRepetition=function(e){},t.prototype.visitRepetitionMandatory=function(e){},t.prototype.visitRepetitionMandatoryWithSeparator=function(e){},t.prototype.visitRepetitionWithSeparator=function(e){},t.prototype.visitAlternation=function(e){},t.prototype.visitTerminal=function(e){},t.prototype.visitRule=function(e){},t}();jd.GAstVisitor=UX});var cw=d((epe,uw)=>{var HX=Ji();function WX(t,e){var r;return HX(t,function(n,i,o){return r=e(n,i,o),!r}),!!r}uw.exports=WX});var Gd=d((tpe,lw)=>{var KX=fy(),BX=Wr(),zX=cw(),VX=we(),YX=Gu();function XX(t,e,r){var n=VX(t)?KX:zX;return r&&YX(t,e,r)&&(e=void 0),n(t,BX(e,3))}lw.exports=XX});var fw=d((rpe,dw)=>{function JX(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}dw.exports=JX});var hw=d((npe,pw)=>{var QX=Ji();function ZX(t,e){var r=!0;return QX(t,function(n,i,o){return r=!!e(n,i,o),r}),r}pw.exports=ZX});var Wu=d((ipe,mw)=>{var e9=fw(),t9=hw(),r9=Wr(),n9=we(),i9=Gu();function o9(t,e,r){var n=n9(t)?e9:t9;return r&&i9(t,e,r)&&(e=void 0),n(t,r9(e,3))}mw.exports=o9});var qy=d((ope,gw)=>{function a9(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1}gw.exports=a9});var vw=d((ape,yw)=>{function s9(t){return t!==t}yw.exports=s9});var Tw=d((spe,_w)=>{function u9(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}_w.exports=u9});var Ud=d((upe,Rw)=>{var c9=qy(),l9=vw(),d9=Tw();function f9(t,e,r){return e===e?d9(t,e,r):c9(t,l9,r)}Rw.exports=f9});var yi=d((cpe,Aw)=>{var p9=Ud(),h9=mn(),m9=ju(),g9=rs(),y9=Ln(),v9=Math.max;function _9(t,e,r,n){t=h9(t)?t:y9(t),r=r&&!n?g9(r):0;var i=t.length;return r<0&&(r=v9(i+r,0)),m9(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&p9(t,e,r)>-1}Aw.exports=_9});var bw=d(Kr=>{"use strict";var My=Kr&&Kr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Kr,"__esModule",{value:!0});Kr.getProductionDslName=Kr.isBranchingProd=Kr.isOptionalProd=Kr.isSequenceProd=void 0;var T9=My(Gd()),R9=My(Wu()),A9=My(yi()),et=Fd();function b9(t){return t instanceof et.Alternative||t instanceof et.Option||t instanceof et.Repetition||t instanceof et.RepetitionMandatory||t instanceof et.RepetitionMandatoryWithSeparator||t instanceof et.RepetitionWithSeparator||t instanceof et.Terminal||t instanceof et.Rule}Kr.isSequenceProd=b9;function Ly(t,e){e===void 0&&(e=[]);var r=t instanceof et.Option||t instanceof et.Repetition||t instanceof et.RepetitionWithSeparator;return r?!0:t instanceof et.Alternation?(0,T9.default)(t.definition,function(n){return Ly(n,e)}):t instanceof et.NonTerminal&&(0,A9.default)(e,t)?!1:t instanceof et.AbstractProduction?(t instanceof et.NonTerminal&&e.push(t),(0,R9.default)(t.definition,function(n){return Ly(n,e)})):!1}Kr.isOptionalProd=Ly;function S9(t){return t instanceof et.Alternation}Kr.isBranchingProd=S9;function C9(t){if(t instanceof et.NonTerminal)return"SUBRULE";if(t instanceof et.Option)return"OPTION";if(t instanceof et.Alternation)return"OR";if(t instanceof et.RepetitionMandatory)return"AT_LEAST_ONE";if(t instanceof et.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(t instanceof et.RepetitionWithSeparator)return"MANY_SEP";if(t instanceof et.Repetition)return"MANY";if(t instanceof et.Terminal)return"CONSUME";throw Error("non exhaustive match")}Kr.getProductionDslName=C9});var lt=d(fe=>{"use strict";Object.defineProperty(fe,"__esModule",{value:!0});fe.isSequenceProd=fe.isBranchingProd=fe.isOptionalProd=fe.getProductionDslName=fe.GAstVisitor=fe.serializeProduction=fe.serializeGrammar=fe.Alternative=fe.Alternation=fe.RepetitionWithSeparator=fe.RepetitionMandatoryWithSeparator=fe.RepetitionMandatory=fe.Repetition=fe.Option=fe.NonTerminal=fe.Terminal=fe.Rule=void 0;var Br=Fd();Object.defineProperty(fe,"Rule",{enumerable:!0,get:function(){return Br.Rule}});Object.defineProperty(fe,"Terminal",{enumerable:!0,get:function(){return Br.Terminal}});Object.defineProperty(fe,"NonTerminal",{enumerable:!0,get:function(){return Br.NonTerminal}});Object.defineProperty(fe,"Option",{enumerable:!0,get:function(){return Br.Option}});Object.defineProperty(fe,"Repetition",{enumerable:!0,get:function(){return Br.Repetition}});Object.defineProperty(fe,"RepetitionMandatory",{enumerable:!0,get:function(){return Br.RepetitionMandatory}});Object.defineProperty(fe,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return Br.RepetitionMandatoryWithSeparator}});Object.defineProperty(fe,"RepetitionWithSeparator",{enumerable:!0,get:function(){return Br.RepetitionWithSeparator}});Object.defineProperty(fe,"Alternation",{enumerable:!0,get:function(){return Br.Alternation}});Object.defineProperty(fe,"Alternative",{enumerable:!0,get:function(){return Br.Alternative}});Object.defineProperty(fe,"serializeGrammar",{enumerable:!0,get:function(){return Br.serializeGrammar}});Object.defineProperty(fe,"serializeProduction",{enumerable:!0,get:function(){return Br.serializeProduction}});var E9=sw();Object.defineProperty(fe,"GAstVisitor",{enumerable:!0,get:function(){return E9.GAstVisitor}});var Hd=bw();Object.defineProperty(fe,"getProductionDslName",{enumerable:!0,get:function(){return Hd.getProductionDslName}});Object.defineProperty(fe,"isOptionalProd",{enumerable:!0,get:function(){return Hd.isOptionalProd}});Object.defineProperty(fe,"isBranchingProd",{enumerable:!0,get:function(){return Hd.isBranchingProd}});Object.defineProperty(fe,"isSequenceProd",{enumerable:!0,get:function(){return Hd.isSequenceProd}})});var Wd=d(is=>{"use strict";var Ew=is&&is.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(is,"__esModule",{value:!0});is.RestWalker=void 0;var P9=Ew(Ld()),Sw=Ew(Lt()),gr=lt(),N9=function(){function t(){}return t.prototype.walk=function(e,r){var n=this;r===void 0&&(r=[]),(0,Sw.default)(e.definition,function(i,o){var a=(0,P9.default)(e.definition,o+1);if(i instanceof gr.NonTerminal)n.walkProdRef(i,a,r);else if(i instanceof gr.Terminal)n.walkTerminal(i,a,r);else if(i instanceof gr.Alternative)n.walkFlat(i,a,r);else if(i instanceof gr.Option)n.walkOption(i,a,r);else if(i instanceof gr.RepetitionMandatory)n.walkAtLeastOne(i,a,r);else if(i instanceof gr.RepetitionMandatoryWithSeparator)n.walkAtLeastOneSep(i,a,r);else if(i instanceof gr.RepetitionWithSeparator)n.walkManySep(i,a,r);else if(i instanceof gr.Repetition)n.walkMany(i,a,r);else if(i instanceof gr.Alternation)n.walkOr(i,a,r);else throw Error("non exhaustive match")})},t.prototype.walkTerminal=function(e,r,n){},t.prototype.walkProdRef=function(e,r,n){},t.prototype.walkFlat=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkOption=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkAtLeastOne=function(e,r,n){var i=[new gr.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkAtLeastOneSep=function(e,r,n){var i=Cw(e,r,n);this.walk(e,i)},t.prototype.walkMany=function(e,r,n){var i=[new gr.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkManySep=function(e,r,n){var i=Cw(e,r,n);this.walk(e,i)},t.prototype.walkOr=function(e,r,n){var i=this,o=r.concat(n);(0,Sw.default)(e.definition,function(a){var s=new gr.Alternative({definition:[a]});i.walk(s,o)})},t}();is.RestWalker=N9;function Cw(t,e,r){var n=[new gr.Option({definition:[new gr.Terminal({terminalType:t.separator})].concat(t.definition)})],i=n.concat(e,r);return i}});var ww=d((ppe,kw)=>{var Pw=No(),k9=Cu(),w9=we(),Nw=Pw?Pw.isConcatSpreadable:void 0;function O9(t){return w9(t)||k9(t)||!!(Nw&&t&&t[Nw])}kw.exports=O9});var Kd=d((hpe,Dw)=>{var D9=Cd(),I9=ww();function Ow(t,e,r,n,i){var o=-1,a=t.length;for(r||(r=I9),i||(i=[]);++o<a;){var s=t[o];e>0&&r(s)?e>1?Ow(s,e-1,r,n,i):D9(i,s):n||(i[i.length]=s)}return i}Dw.exports=Ow});var gn=d((mpe,Iw)=>{var x9=Kd();function q9(t){var e=t==null?0:t.length;return e?x9(t,1):[]}Iw.exports=q9});var $y=d((gpe,xw)=>{var L9=Ud();function M9(t,e){var r=t==null?0:t.length;return!!r&&L9(t,e,0)>-1}xw.exports=M9});var Fy=d((ype,qw)=>{function $9(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}qw.exports=$9});var Bd=d((vpe,Lw)=>{function F9(){}Lw.exports=F9});var $w=d((_pe,Mw)=>{var jy=oy(),j9=Bd(),G9=Sd(),U9=1/0,H9=jy&&1/G9(new jy([,-0]))[1]==U9?function(t){return new jy(t)}:j9;Mw.exports=H9});var Gy=d((Tpe,Fw)=>{var W9=Ad(),K9=$y(),B9=Fy(),z9=bd(),V9=$w(),Y9=Sd(),X9=200;function J9(t,e,r){var n=-1,i=K9,o=t.length,a=!0,s=[],u=s;if(r)a=!1,i=B9;else if(o>=X9){var c=e?null:V9(t);if(c)return Y9(c);a=!1,i=z9,u=new W9}else u=e?[]:s;e:for(;++n<o;){var l=t[n],f=e?e(l):l;if(l=r||l!==0?l:0,a&&f===f){for(var h=u.length;h--;)if(u[h]===f)continue e;e&&u.push(f),s.push(l)}else i(u,f,r)||(u!==s&&u.push(f),s.push(l))}return s}Fw.exports=J9});var zd=d((Rpe,jw)=>{var Q9=Gy();function Z9(t){return t&&t.length?Q9(t):[]}jw.exports=Z9});var Wy=d(zr=>{"use strict";var Hy=zr&&zr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(zr,"__esModule",{value:!0});zr.firstForTerminal=zr.firstForBranching=zr.firstForSequence=zr.first=void 0;var eJ=Hy(gn()),Uw=Hy(zd()),tJ=Hy(qt()),Gw=lt(),Uy=lt();function Vd(t){if(t instanceof Gw.NonTerminal)return Vd(t.referencedRule);if(t instanceof Gw.Terminal)return Kw(t);if((0,Uy.isSequenceProd)(t))return Hw(t);if((0,Uy.isBranchingProd)(t))return Ww(t);throw Error("non exhaustive match")}zr.first=Vd;function Hw(t){for(var e=[],r=t.definition,n=0,i=r.length>n,o,a=!0;i&&a;)o=r[n],a=(0,Uy.isOptionalProd)(o),e=e.concat(Vd(o)),n=n+1,i=r.length>n;return(0,Uw.default)(e)}zr.firstForSequence=Hw;function Ww(t){var e=(0,tJ.default)(t.definition,function(r){return Vd(r)});return(0,Uw.default)((0,eJ.default)(e))}zr.firstForBranching=Ww;function Kw(t){return[t.terminalType]}zr.firstForTerminal=Kw});var Ky=d(Yd=>{"use strict";Object.defineProperty(Yd,"__esModule",{value:!0});Yd.IN=void 0;Yd.IN="_~IN~_"});var Xw=d(yr=>{"use strict";var rJ=yr&&yr.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Bw=yr&&yr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(yr,"__esModule",{value:!0});yr.buildInProdFollowPrefix=yr.buildBetweenProdsFollowPrefix=yr.computeAllProdsFollows=yr.ResyncFollowsWalker=void 0;var nJ=Wd(),iJ=Wy(),oJ=Bw(Lt()),aJ=Bw(Uu()),zw=Ky(),sJ=lt(),Vw=function(t){rJ(e,t);function e(r){var n=t.call(this)||this;return n.topProd=r,n.follows={},n}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},e.prototype.walkTerminal=function(r,n,i){},e.prototype.walkProdRef=function(r,n,i){var o=Yw(r.referencedRule,r.idx)+this.topProd.name,a=n.concat(i),s=new sJ.Alternative({definition:a}),u=(0,iJ.first)(s);this.follows[o]=u},e}(nJ.RestWalker);yr.ResyncFollowsWalker=Vw;function uJ(t){var e={};return(0,oJ.default)(t,function(r){var n=new Vw(r).startWalking();(0,aJ.default)(e,n)}),e}yr.computeAllProdsFollows=uJ;function Yw(t,e){return t.name+e+zw.IN}yr.buildBetweenProdsFollowPrefix=Yw;function cJ(t){var e=t.terminalType.name;return e+t.idx+zw.IN}yr.buildInProdFollowPrefix=cJ});var Oo=d((Cpe,Jw)=>{function lJ(t){return t===void 0}Jw.exports=lJ});var Zw=d((Epe,Qw)=>{function dJ(t){return t&&t.length?t[0]:void 0}Qw.exports=dJ});var os=d((Ppe,eO)=>{eO.exports=Zw()});var Ku=d((Npe,tO)=>{function fJ(t){for(var e=-1,r=t==null?0:t.length,n=0,i=[];++e<r;){var o=t[e];o&&(i[n++]=o)}return i}tO.exports=fJ});var By=d((kpe,rO)=>{var pJ=Ji();function hJ(t,e){var r=[];return pJ(t,function(n,i,o){e(n,i,o)&&r.push(n)}),r}rO.exports=hJ});var iO=d((wpe,nO)=>{var mJ="Expected a function";function gJ(t){if(typeof t!="function")throw new TypeError(mJ);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}nO.exports=gJ});var Xd=d((Ope,oO)=>{var yJ=Ed(),vJ=By(),_J=Wr(),TJ=we(),RJ=iO();function AJ(t,e){var r=TJ(t)?yJ:vJ;return r(t,RJ(_J(e,3)))}oO.exports=AJ});var sO=d((Dpe,aO)=>{var bJ=Ad(),SJ=$y(),CJ=Fy(),EJ=Wa(),PJ=Ua(),NJ=bd(),kJ=200;function wJ(t,e,r,n){var i=-1,o=SJ,a=!0,s=t.length,u=[],c=e.length;if(!s)return u;r&&(e=EJ(e,PJ(r))),n?(o=CJ,a=!1):e.length>=kJ&&(o=NJ,a=!1,e=new bJ(e));e:for(;++i<s;){var l=t[i],f=r==null?l:r(l);if(l=n||l!==0?l:0,a&&f===f){for(var h=c;h--;)if(e[h]===f)continue e;u.push(l)}else o(e,f,n)||u.push(l)}return u}aO.exports=wJ});var cO=d((Ipe,uO)=>{var OJ=mn(),DJ=hn();function IJ(t){return DJ(t)&&OJ(t)}uO.exports=IJ});var Jd=d((xpe,dO)=>{var xJ=sO(),qJ=Kd(),LJ=Md(),lO=cO(),MJ=LJ(function(t,e){return lO(t)?xJ(t,qJ(e,1,lO,!0)):[]});dO.exports=MJ});var pO=d((qpe,fO)=>{var $J=Ud(),FJ=rs(),jJ=Math.max;function GJ(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:FJ(r);return i<0&&(i=jJ(n+i,0)),$J(t,e,i)}fO.exports=GJ});var mO=d((Lpe,hO)=>{var UJ=Wr(),HJ=mn(),WJ=Cr();function KJ(t){return function(e,r,n){var i=Object(e);if(!HJ(e)){var o=UJ(r,3);e=WJ(e),r=function(s){return o(i[s],s,i)}}var a=t(e,r,n);return a>-1?i[o?e[a]:a]:void 0}}hO.exports=KJ});var yO=d((Mpe,gO)=>{var BJ=qy(),zJ=Wr(),VJ=rs(),YJ=Math.max;function XJ(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:VJ(r);return i<0&&(i=YJ(n+i,0)),BJ(t,zJ(e,3),i)}gO.exports=XJ});var Qd=d(($pe,vO)=>{var JJ=mO(),QJ=yO(),ZJ=JJ(QJ);vO.exports=ZJ});var Bu=d((Fpe,_O)=>{var eQ=Ed(),tQ=By(),rQ=Wr(),nQ=we();function iQ(t,e){var r=nQ(t)?eQ:tQ;return r(t,rQ(e,3))}_O.exports=iQ});var zy=d((jpe,RO)=>{var oQ=Md(),aQ=Ka(),sQ=Gu(),uQ=$u(),TO=Object.prototype,cQ=TO.hasOwnProperty,lQ=oQ(function(t,e){t=Object(t);var r=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&sQ(e[0],e[1],i)&&(n=1);++r<n;)for(var o=e[r],a=uQ(o),s=-1,u=a.length;++s<u;){var c=a[s],l=t[c];(l===void 0||aQ(l,TO[c])&&!cQ.call(t,c))&&(t[c]=o[c])}return t});RO.exports=lQ});var bO=d((Gpe,AO)=>{function dQ(t,e,r,n){var i=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}AO.exports=dQ});var CO=d((Upe,SO)=>{function fQ(t,e,r,n,i){return i(t,function(o,a,s){r=n?(n=!1,o):e(r,o,a,s)}),r}SO.exports=fQ});var vi=d((Hpe,EO)=>{var pQ=bO(),hQ=Ji(),mQ=Wr(),gQ=CO(),yQ=we();function vQ(t,e,r){var n=yQ(t)?pQ:gQ,i=arguments.length<3;return n(t,mQ(e,4),r,i,hQ)}EO.exports=vQ});var ef=d(as=>{"use strict";Object.defineProperty(as,"__esModule",{value:!0});as.clearRegExpParserCache=as.getRegExpAst=void 0;var _Q=gu(),Zd={},TQ=new _Q.RegExpParser;function RQ(t){var e=t.toString();if(Zd.hasOwnProperty(e))return Zd[e];var r=TQ.pattern(e);return Zd[e]=r,r}as.getRegExpAst=RQ;function AQ(){Zd={}}as.clearRegExpParserCache=AQ});var DO=d(Zt=>{"use strict";var bQ=Zt&&Zt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),ss=Zt&&Zt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Zt,"__esModule",{value:!0});Zt.canMatchCharCode=Zt.firstCharOptimizedIndices=Zt.getOptimizedStartCodesIndices=Zt.failedOptimizationPrefixMsg=void 0;var kO=gu(),SQ=ss(we()),CQ=ss(Wu()),EQ=ss(Lt()),Vy=ss(Qd()),PQ=ss(Ln()),Xy=ss(yi()),PO=ts(),wO=ef(),_i=Jy(),OO="Complement Sets are not supported for first char optimization";Zt.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function NQ(t,e){e===void 0&&(e=!1);try{var r=(0,wO.getRegExpAst)(t),n=rf(r.value,{},r.flags.ignoreCase);return n}catch(o){if(o.message===OO)e&&(0,PO.PRINT_WARNING)("".concat(Zt.failedOptimizationPrefixMsg)+"	Unable to optimize: < ".concat(t.toString(),` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var i="";e&&(i=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),(0,PO.PRINT_ERROR)("".concat(Zt.failedOptimizationPrefixMsg,`
`)+"	Failed parsing: < ".concat(t.toString(),` >
`)+"	Using the regexp-to-ast library version: ".concat(kO.VERSION,`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+i)}}return[]}Zt.getOptimizedStartCodesIndices=NQ;function rf(t,e,r){switch(t.type){case"Disjunction":for(var n=0;n<t.value.length;n++)rf(t.value[n],e,r);break;case"Alternative":for(var i=t.value,n=0;n<i.length;n++){var o=i[n];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var a=o;switch(a.type){case"Character":tf(a.value,e,r);break;case"Set":if(a.complement===!0)throw Error(OO);(0,EQ.default)(a.value,function(c){if(typeof c=="number")tf(c,e,r);else{var l=c;if(r===!0)for(var f=l.from;f<=l.to;f++)tf(f,e,r);else{for(var f=l.from;f<=l.to&&f<_i.minOptimizationVal;f++)tf(f,e,r);if(l.to>=_i.minOptimizationVal)for(var h=l.from>=_i.minOptimizationVal?l.from:_i.minOptimizationVal,v=l.to,m=(0,_i.charCodeToOptimizedIndex)(h),R=(0,_i.charCodeToOptimizedIndex)(v),P=m;P<=R;P++)e[P]=P}}});break;case"Group":rf(a.value,e,r);break;default:throw Error("Non Exhaustive Match")}var s=a.quantifier!==void 0&&a.quantifier.atLeast===0;if(a.type==="Group"&&Yy(a)===!1||a.type!=="Group"&&s===!1)break}break;default:throw Error("non exhaustive match!")}return(0,PQ.default)(e)}Zt.firstCharOptimizedIndices=rf;function tf(t,e,r){var n=(0,_i.charCodeToOptimizedIndex)(t);e[n]=n,r===!0&&kQ(t,e)}function kQ(t,e){var r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){var i=(0,_i.charCodeToOptimizedIndex)(n.charCodeAt(0));e[i]=i}else{var o=r.toLowerCase();if(o!==r){var i=(0,_i.charCodeToOptimizedIndex)(o.charCodeAt(0));e[i]=i}}}function NO(t,e){return(0,Vy.default)(t.value,function(r){if(typeof r=="number")return(0,Xy.default)(e,r);var n=r;return(0,Vy.default)(e,function(i){return n.from<=i&&i<=n.to})!==void 0})}function Yy(t){var e=t.quantifier;return e&&e.atLeast===0?!0:t.value?(0,SQ.default)(t.value)?(0,CQ.default)(t.value,Yy):Yy(t.value):!1}var wQ=function(t){bQ(e,t);function e(r){var n=t.call(this)||this;return n.targetCharCodes=r,n.found=!1,n}return e.prototype.visitChildren=function(r){if(this.found!==!0){switch(r.type){case"Lookahead":this.visitLookahead(r);return;case"NegativeLookahead":this.visitNegativeLookahead(r);return}t.prototype.visitChildren.call(this,r)}},e.prototype.visitCharacter=function(r){(0,Xy.default)(this.targetCharCodes,r.value)&&(this.found=!0)},e.prototype.visitSet=function(r){r.complement?NO(r,this.targetCharCodes)===void 0&&(this.found=!0):NO(r,this.targetCharCodes)!==void 0&&(this.found=!0)},e}(kO.BaseRegExpVisitor);function OQ(t,e){if(e instanceof RegExp){var r=(0,wO.getRegExpAst)(e),n=new wQ(t);return n.visit(r),n.found}else return(0,Vy.default)(e,function(i){return(0,Xy.default)(t,i.charCodeAt(0))})!==void 0}Zt.canMatchCharCode=OQ});var Jy=d(H=>{"use strict";var qO=H&&H.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),st=H&&H.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(H,"__esModule",{value:!0});H.charCodeToOptimizedIndex=H.minOptimizationVal=H.buildLineBreakIssueMessage=H.LineTerminatorOptimizedTester=H.isShortPattern=H.isCustomPattern=H.cloneEmptyGroups=H.performWarningRuntimeChecks=H.performRuntimeChecks=H.addStickyFlag=H.addStartOfInput=H.findUnreachablePatterns=H.findModesThatDoNotExist=H.findInvalidGroupType=H.findDuplicatePatterns=H.findUnsupportedFlags=H.findStartOfInputAnchor=H.findEmptyMatchRegExps=H.findEndOfInputAnchor=H.findInvalidPatterns=H.findMissingPatterns=H.validatePatterns=H.analyzeTokenTypes=H.enableSticky=H.disableSticky=H.SUPPORT_STICKY=H.MODES=H.DEFAULT_MODE=void 0;var LO=gu(),De=zu(),DQ=st(os()),MO=st(Sr()),$O=st(Ku()),of=st(we()),IQ=st(Ln()),xQ=st(gn()),FO=st(Xd()),jO=st(Jd()),IO=st(pO()),tt=st(qt()),Ti=st(Lt()),Ri=st(ju()),sf=st($a()),Zy=st(Oo()),qQ=st(Qd()),er=st(Er()),LQ=st(Cr()),Qi=st(Dy()),Un=st(Bu()),MQ=st(zy()),af=st(vi()),uf=st(yi()),xO=ts(),us=DO(),GO=ef(),Do="PATTERN";H.DEFAULT_MODE="defaultMode";H.MODES="modes";H.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function $Q(){H.SUPPORT_STICKY=!1}H.disableSticky=$Q;function FQ(){H.SUPPORT_STICKY=!0}H.enableSticky=FQ;function jQ(t,e){e=(0,MQ.default)(e,{useSticky:H.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(b,A){return A()}});var r=e.tracer;r("initCharCodeToOptimizedIndexMap",function(){XQ()});var n;r("Reject Lexer.NA",function(){n=(0,FO.default)(t,function(b){return b[Do]===De.Lexer.NA})});var i=!1,o;r("Transform Patterns",function(){i=!1,o=(0,tt.default)(n,function(b){var A=b[Do];if((0,Qi.default)(A)){var O=A.source;return O.length===1&&O!=="^"&&O!=="$"&&O!=="."&&!A.ignoreCase?O:O.length===2&&O[0]==="\\"&&!(0,uf.default)(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],O[1])?O[1]:e.useSticky?tv(A):ev(A)}else{if((0,sf.default)(A))return i=!0,{exec:A};if(typeof A=="object")return i=!0,A;if(typeof A=="string"){if(A.length===1)return A;var $=A.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),W=new RegExp($);return e.useSticky?tv(W):ev(W)}else throw Error("non exhaustive match")}})});var a,s,u,c,l;r("misc mapping",function(){a=(0,tt.default)(n,function(b){return b.tokenTypeIdx}),s=(0,tt.default)(n,function(b){var A=b.GROUP;if(A!==De.Lexer.SKIPPED){if((0,Ri.default)(A))return A;if((0,Zy.default)(A))return!1;throw Error("non exhaustive match")}}),u=(0,tt.default)(n,function(b){var A=b.LONGER_ALT;if(A){var O=(0,of.default)(A)?(0,tt.default)(A,function($){return(0,IO.default)(n,$)}):[(0,IO.default)(n,A)];return O}}),c=(0,tt.default)(n,function(b){return b.PUSH_MODE}),l=(0,tt.default)(n,function(b){return(0,er.default)(b,"POP_MODE")})});var f;r("Line Terminator Handling",function(){var b=tD(e.lineTerminatorCharacters);f=(0,tt.default)(n,function(A){return!1}),e.positionTracking!=="onlyOffset"&&(f=(0,tt.default)(n,function(A){return(0,er.default)(A,"LINE_BREAKS")?!!A.LINE_BREAKS:ZO(A,b)===!1&&(0,us.canMatchCharCode)(b,A.PATTERN)}))});var h,v,m,R;r("Misc Mapping #2",function(){h=(0,tt.default)(n,nv),v=(0,tt.default)(o,QO),m=(0,af.default)(n,function(b,A){var O=A.GROUP;return(0,Ri.default)(O)&&O!==De.Lexer.SKIPPED&&(b[O]=[]),b},{}),R=(0,tt.default)(o,function(b,A){return{pattern:o[A],longerAlt:u[A],canLineTerminator:f[A],isCustom:h[A],short:v[A],group:s[A],push:c[A],pop:l[A],tokenTypeIdx:a[A],tokenType:n[A]}})});var P=!0,C=[];return e.safeMode||r("First Char Optimization",function(){C=(0,af.default)(n,function(b,A,O){if(typeof A.PATTERN=="string"){var $=A.PATTERN.charCodeAt(0),W=rv($);Qy(b,W,R[O])}else if((0,of.default)(A.START_CHARS_HINT)){var ee;(0,Ti.default)(A.START_CHARS_HINT,function(B){var Te=typeof B=="string"?B.charCodeAt(0):B,ze=rv(Te);ee!==ze&&(ee=ze,Qy(b,ze,R[O]))})}else if((0,Qi.default)(A.PATTERN))if(A.PATTERN.unicode)P=!1,e.ensureOptimizations&&(0,xO.PRINT_ERROR)("".concat(us.failedOptimizationPrefixMsg)+"	Unable to analyze < ".concat(A.PATTERN.toString(),` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var Pe=(0,us.getOptimizedStartCodesIndices)(A.PATTERN,e.ensureOptimizations);(0,MO.default)(Pe)&&(P=!1),(0,Ti.default)(Pe,function(B){Qy(b,B,R[O])})}else e.ensureOptimizations&&(0,xO.PRINT_ERROR)("".concat(us.failedOptimizationPrefixMsg)+"	TokenType: <".concat(A.name,`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),P=!1;return b},[])}),{emptyGroups:m,patternIdxToConfig:R,charCodeToPatternIdxToConfig:C,hasCustom:i,canBeOptimized:P}}H.analyzeTokenTypes=jQ;function GQ(t,e){var r=[],n=UO(t);r=r.concat(n.errors);var i=HO(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(UQ(o)),r=r.concat(YO(o)),r=r.concat(XO(o,e)),r=r.concat(JO(o)),r}H.validatePatterns=GQ;function UQ(t){var e=[],r=(0,Un.default)(t,function(n){return(0,Qi.default)(n[Do])});return e=e.concat(WO(r)),e=e.concat(BO(r)),e=e.concat(zO(r)),e=e.concat(VO(r)),e=e.concat(KO(r)),e}function UO(t){var e=(0,Un.default)(t,function(i){return!(0,er.default)(i,Do)}),r=(0,tt.default)(e,function(i){return{message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:De.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[i]}}),n=(0,jO.default)(t,e);return{errors:r,valid:n}}H.findMissingPatterns=UO;function HO(t){var e=(0,Un.default)(t,function(i){var o=i[Do];return!(0,Qi.default)(o)&&!(0,sf.default)(o)&&!(0,er.default)(o,"exec")&&!(0,Ri.default)(o)}),r=(0,tt.default)(e,function(i){return{message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:De.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[i]}}),n=(0,jO.default)(t,e);return{errors:r,valid:n}}H.findInvalidPatterns=HO;var HQ=/[^\\][$]/;function WO(t){var e=function(i){qO(o,i);function o(){var a=i!==null&&i.apply(this,arguments)||this;return a.found=!1,a}return o.prototype.visitEndAnchor=function(a){this.found=!0},o}(LO.BaseRegExpVisitor),r=(0,Un.default)(t,function(i){var o=i.PATTERN;try{var a=(0,GO.getRegExpAst)(o),s=new e;return s.visit(a),s.found}catch{return HQ.test(o.source)}}),n=(0,tt.default)(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:De.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}H.findEndOfInputAnchor=WO;function KO(t){var e=(0,Un.default)(t,function(n){var i=n.PATTERN;return i.test("")}),r=(0,tt.default)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:De.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[n]}});return r}H.findEmptyMatchRegExps=KO;var WQ=/[^\\[][\^]|^\^/;function BO(t){var e=function(i){qO(o,i);function o(){var a=i!==null&&i.apply(this,arguments)||this;return a.found=!1,a}return o.prototype.visitStartAnchor=function(a){this.found=!0},o}(LO.BaseRegExpVisitor),r=(0,Un.default)(t,function(i){var o=i.PATTERN;try{var a=(0,GO.getRegExpAst)(o),s=new e;return s.visit(a),s.found}catch{return WQ.test(o.source)}}),n=(0,tt.default)(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:De.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}H.findStartOfInputAnchor=BO;function zO(t){var e=(0,Un.default)(t,function(n){var i=n[Do];return i instanceof RegExp&&(i.multiline||i.global)}),r=(0,tt.default)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:De.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}});return r}H.findUnsupportedFlags=zO;function VO(t){var e=[],r=(0,tt.default)(t,function(o){return(0,af.default)(t,function(a,s){return o.PATTERN.source===s.PATTERN.source&&!(0,uf.default)(e,s)&&s.PATTERN!==De.Lexer.NA&&(e.push(s),a.push(s)),a},[])});r=(0,$O.default)(r);var n=(0,Un.default)(r,function(o){return o.length>1}),i=(0,tt.default)(n,function(o){var a=(0,tt.default)(o,function(u){return u.name}),s=(0,DQ.default)(o).PATTERN;return{message:"The same RegExp pattern ->".concat(s,"<-")+"has been used in all of the following Token Types: ".concat(a.join(", ")," <-"),type:De.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}});return i}H.findDuplicatePatterns=VO;function YO(t){var e=(0,Un.default)(t,function(n){if(!(0,er.default)(n,"GROUP"))return!1;var i=n.GROUP;return i!==De.Lexer.SKIPPED&&i!==De.Lexer.NA&&!(0,Ri.default)(i)}),r=(0,tt.default)(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:De.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}});return r}H.findInvalidGroupType=YO;function XO(t,e){var r=(0,Un.default)(t,function(i){return i.PUSH_MODE!==void 0&&!(0,uf.default)(e,i.PUSH_MODE)}),n=(0,tt.default)(r,function(i){var o="Token Type: ->".concat(i.name,"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->").concat(i.PUSH_MODE,"<-")+"which does not exist";return{message:o,type:De.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}});return n}H.findModesThatDoNotExist=XO;function JO(t){var e=[],r=(0,af.default)(t,function(n,i,o){var a=i.PATTERN;return a===De.Lexer.NA||((0,Ri.default)(a)?n.push({str:a,idx:o,tokenType:i}):(0,Qi.default)(a)&&BQ(a)&&n.push({str:a.source,idx:o,tokenType:i})),n},[]);return(0,Ti.default)(t,function(n,i){(0,Ti.default)(r,function(o){var a=o.str,s=o.idx,u=o.tokenType;if(i<s&&KQ(a,n.PATTERN)){var c="Token: ->".concat(u.name,`<- can never be matched.
`)+"Because it appears AFTER the Token Type ->".concat(n.name,"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:c,type:De.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[n,u]})}})}),e}H.findUnreachablePatterns=JO;function KQ(t,e){if((0,Qi.default)(e)){var r=e.exec(t);return r!==null&&r.index===0}else{if((0,sf.default)(e))return e(t,0,[],{});if((0,er.default)(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function BQ(t){var e=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return(0,qQ.default)(e,function(r){return t.source.indexOf(r)!==-1})===void 0}function ev(t){var e=t.ignoreCase?"i":"";return new RegExp("^(?:".concat(t.source,")"),e)}H.addStartOfInput=ev;function tv(t){var e=t.ignoreCase?"iy":"y";return new RegExp("".concat(t.source),e)}H.addStickyFlag=tv;function zQ(t,e,r){var n=[];return(0,er.default)(t,H.DEFAULT_MODE)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+H.DEFAULT_MODE+`> property in its definition
`,type:De.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),(0,er.default)(t,H.MODES)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+H.MODES+`> property in its definition
`,type:De.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),(0,er.default)(t,H.MODES)&&(0,er.default)(t,H.DEFAULT_MODE)&&!(0,er.default)(t.modes,t.defaultMode)&&n.push({message:"A MultiMode Lexer cannot be initialized with a ".concat(H.DEFAULT_MODE,": <").concat(t.defaultMode,">")+`which does not exist
`,type:De.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),(0,er.default)(t,H.MODES)&&(0,Ti.default)(t.modes,function(i,o){(0,Ti.default)(i,function(a,s){if((0,Zy.default)(a))n.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+"<".concat(o,"> at index: <").concat(s,`>
`),type:De.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if((0,er.default)(a,"LONGER_ALT")){var u=(0,of.default)(a.LONGER_ALT)?a.LONGER_ALT:[a.LONGER_ALT];(0,Ti.default)(u,function(c){!(0,Zy.default)(c)&&!(0,uf.default)(i,c)&&n.push({message:"A MultiMode Lexer cannot be initialized with a longer_alt <".concat(c.name,"> on token <").concat(a.name,"> outside of mode <").concat(o,`>
`),type:De.LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}H.performRuntimeChecks=zQ;function VQ(t,e,r){var n=[],i=!1,o=(0,$O.default)((0,xQ.default)((0,IQ.default)(t.modes))),a=(0,FO.default)(o,function(u){return u[Do]===De.Lexer.NA}),s=tD(r);return e&&(0,Ti.default)(a,function(u){var c=ZO(u,s);if(c!==!1){var l=eD(u,c),f={message:l,type:c.issue,tokenType:u};n.push(f)}else(0,er.default)(u,"LINE_BREAKS")?u.LINE_BREAKS===!0&&(i=!0):(0,us.canMatchCharCode)(s,u.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:De.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),n}H.performWarningRuntimeChecks=VQ;function YQ(t){var e={},r=(0,LQ.default)(t);return(0,Ti.default)(r,function(n){var i=t[n];if((0,of.default)(i))e[n]=[];else throw Error("non exhaustive match")}),e}H.cloneEmptyGroups=YQ;function nv(t){var e=t.PATTERN;if((0,Qi.default)(e))return!1;if((0,sf.default)(e))return!0;if((0,er.default)(e,"exec"))return!0;if((0,Ri.default)(e))return!1;throw Error("non exhaustive match")}H.isCustomPattern=nv;function QO(t){return(0,Ri.default)(t)&&t.length===1?t.charCodeAt(0):!1}H.isShortPattern=QO;H.LineTerminatorOptimizedTester={test:function(t){for(var e=t.length,r=this.lastIndex;r<e;r++){var n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function ZO(t,e){if((0,er.default)(t,"LINE_BREAKS"))return!1;if((0,Qi.default)(t.PATTERN)){try{(0,us.canMatchCharCode)(e,t.PATTERN)}catch(r){return{issue:De.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if((0,Ri.default)(t.PATTERN))return!1;if(nv(t))return{issue:De.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function eD(t,e){if(e.issue===De.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+"	The problem is in the <".concat(t.name,`> Token Type
`)+"	 Root cause: ".concat(e.errMsg,`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(e.issue===De.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+"	The problem is in the <".concat(t.name,`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}H.buildLineBreakIssueMessage=eD;function tD(t){var e=(0,tt.default)(t,function(r){return(0,Ri.default)(r)?r.charCodeAt(0):r});return e}function Qy(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}H.minOptimizationVal=256;var nf=[];function rv(t){return t<H.minOptimizationVal?t:nf[t]}H.charCodeToOptimizedIndex=rv;function XQ(){if((0,MO.default)(nf)){nf=new Array(65536);for(var t=0;t<65536;t++)nf[t]=t>255?255+~~(t/255):t}}});var cf=d((zpe,rD)=>{function JQ(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}rD.exports=JQ});var xo=d(ce=>{"use strict";var Hn=ce&&ce.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ce,"__esModule",{value:!0});ce.isTokenType=ce.hasExtendingTokensTypesMapProperty=ce.hasExtendingTokensTypesProperty=ce.hasCategoriesProperty=ce.hasShortKeyProperty=ce.singleAssignCategoriesToksMap=ce.assignCategoriesMapProp=ce.assignCategoriesTokensProp=ce.assignTokenDefaultProps=ce.expandCategories=ce.augmentTokenTypes=ce.tokenIdxToClass=ce.tokenShortNameIdx=ce.tokenStructuredMatcherNoCategories=ce.tokenStructuredMatcher=void 0;var QQ=Hn(Sr()),ZQ=Hn(Ku()),eZ=Hn(we()),tZ=Hn(gn()),rZ=Hn(Jd()),nZ=Hn(qt()),Io=Hn(Lt()),Vu=Hn(Er()),iZ=Hn(yi()),oZ=Hn(mi());function aZ(t,e){var r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}ce.tokenStructuredMatcher=aZ;function sZ(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}ce.tokenStructuredMatcherNoCategories=sZ;ce.tokenShortNameIdx=1;ce.tokenIdxToClass={};function uZ(t){var e=nD(t);iD(e),aD(e),oD(e),(0,Io.default)(e,function(r){r.isParent=r.categoryMatches.length>0})}ce.augmentTokenTypes=uZ;function nD(t){for(var e=(0,oZ.default)(t),r=t,n=!0;n;){r=(0,ZQ.default)((0,tZ.default)((0,nZ.default)(r,function(o){return o.CATEGORIES})));var i=(0,rZ.default)(r,e);e=e.concat(i),(0,QQ.default)(i)?n=!1:r=i}return e}ce.expandCategories=nD;function iD(t){(0,Io.default)(t,function(e){sD(e)||(ce.tokenIdxToClass[ce.tokenShortNameIdx]=e,e.tokenTypeIdx=ce.tokenShortNameIdx++),iv(e)&&!(0,eZ.default)(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),iv(e)||(e.CATEGORIES=[]),uD(e)||(e.categoryMatches=[]),cD(e)||(e.categoryMatchesMap={})})}ce.assignTokenDefaultProps=iD;function oD(t){(0,Io.default)(t,function(e){e.categoryMatches=[],(0,Io.default)(e.categoryMatchesMap,function(r,n){e.categoryMatches.push(ce.tokenIdxToClass[n].tokenTypeIdx)})})}ce.assignCategoriesTokensProp=oD;function aD(t){(0,Io.default)(t,function(e){ov([],e)})}ce.assignCategoriesMapProp=aD;function ov(t,e){(0,Io.default)(t,function(r){e.categoryMatchesMap[r.tokenTypeIdx]=!0}),(0,Io.default)(e.CATEGORIES,function(r){var n=t.concat(e);(0,iZ.default)(n,r)||ov(n,r)})}ce.singleAssignCategoriesToksMap=ov;function sD(t){return(0,Vu.default)(t,"tokenTypeIdx")}ce.hasShortKeyProperty=sD;function iv(t){return(0,Vu.default)(t,"CATEGORIES")}ce.hasCategoriesProperty=iv;function uD(t){return(0,Vu.default)(t,"categoryMatches")}ce.hasExtendingTokensTypesProperty=uD;function cD(t){return(0,Vu.default)(t,"categoryMatchesMap")}ce.hasExtendingTokensTypesMapProperty=cD;function cZ(t){return(0,Vu.default)(t,"tokenTypeIdx")}ce.isTokenType=cZ});var av=d(lf=>{"use strict";Object.defineProperty(lf,"__esModule",{value:!0});lf.defaultLexerErrorProvider=void 0;lf.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(t){return"Unable to pop Lexer Mode after encountering Token ->".concat(t.image,"<- The Mode Stack is empty")},buildUnexpectedCharactersMessage:function(t,e,r,n,i){return"unexpected character: ->".concat(t.charAt(e),"<- at offset: ").concat(e,",")+" skipped ".concat(r," characters.")}}});var zu=d(bi=>{"use strict";var Pr=bi&&bi.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(bi,"__esModule",{value:!0});bi.Lexer=bi.LexerDefinitionErrorType=void 0;var Ai=Jy(),sv=Pr(Bd()),df=Pr(Sr()),lZ=Pr(we()),dZ=Pr(cf()),fZ=Pr(Xd()),lD=Pr(qt()),uv=Pr(Lt()),pZ=Pr(Cr()),hZ=Pr(Oo()),dD=Pr(wo()),fD=Pr(Uu()),mZ=Pr(vi()),pD=Pr(mi()),cv=ts(),gZ=xo(),yZ=av(),vZ=ef(),_Z;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(_Z=bi.LexerDefinitionErrorType||(bi.LexerDefinitionErrorType={}));var Yu={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:yZ.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Yu);var TZ=function(){function t(e,r){r===void 0&&(r=Yu);var n=this;if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=function(o,a){if(n.traceInitPerf===!0){n.traceInitIndent++;var s=new Array(n.traceInitIndent+1).join("	");n.traceInitIndent<n.traceInitMaxIdent&&console.log("".concat(s,"--> <").concat(o,">"));var u=(0,cv.timer)(a),c=u.time,l=u.value,f=c>10?console.warn:console.log;return n.traceInitIndent<n.traceInitMaxIdent&&f("".concat(s,"<-- <").concat(o,"> time: ").concat(c,"ms")),n.traceInitIndent--,l}else return a()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=(0,fD.default)({},Yu,r);var i=this.config.traceInitPerf;i===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof i=="number"&&(this.traceInitMaxIdent=i,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var o,a=!0;n.TRACE_INIT("Lexer Config handling",function(){if(n.config.lineTerminatorsPattern===Yu.lineTerminatorsPattern)n.config.lineTerminatorsPattern=Ai.LineTerminatorOptimizedTester;else if(n.config.lineTerminatorCharacters===Yu.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');n.trackStartLines=/full|onlyStart/i.test(n.config.positionTracking),n.trackEndLines=/full/i.test(n.config.positionTracking),(0,lZ.default)(e)?o={modes:{defaultMode:(0,pD.default)(e)},defaultMode:Ai.DEFAULT_MODE}:(a=!1,o=(0,pD.default)(e))}),n.config.skipValidations===!1&&(n.TRACE_INIT("performRuntimeChecks",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat((0,Ai.performRuntimeChecks)(o,n.trackStartLines,n.config.lineTerminatorCharacters))}),n.TRACE_INIT("performWarningRuntimeChecks",function(){n.lexerDefinitionWarning=n.lexerDefinitionWarning.concat((0,Ai.performWarningRuntimeChecks)(o,n.trackStartLines,n.config.lineTerminatorCharacters))})),o.modes=o.modes?o.modes:{},(0,uv.default)(o.modes,function(l,f){o.modes[f]=(0,fZ.default)(l,function(h){return(0,hZ.default)(h)})});var s=(0,pZ.default)(o.modes);if((0,uv.default)(o.modes,function(l,f){n.TRACE_INIT("Mode: <".concat(f,"> processing"),function(){if(n.modes.push(f),n.config.skipValidations===!1&&n.TRACE_INIT("validatePatterns",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat((0,Ai.validatePatterns)(l,s))}),(0,df.default)(n.lexerDefinitionErrors)){(0,gZ.augmentTokenTypes)(l);var h;n.TRACE_INIT("analyzeTokenTypes",function(){h=(0,Ai.analyzeTokenTypes)(l,{lineTerminatorCharacters:n.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:n.TRACE_INIT})}),n.patternIdxToConfig[f]=h.patternIdxToConfig,n.charCodeToPatternIdxToConfig[f]=h.charCodeToPatternIdxToConfig,n.emptyGroups=(0,fD.default)({},n.emptyGroups,h.emptyGroups),n.hasCustom=h.hasCustom||n.hasCustom,n.canModeBeOptimized[f]=h.canBeOptimized}})}),n.defaultMode=o.defaultMode,!(0,df.default)(n.lexerDefinitionErrors)&&!n.config.deferDefinitionErrorsHandling){var u=(0,lD.default)(n.lexerDefinitionErrors,function(l){return l.message}),c=u.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+c)}(0,uv.default)(n.lexerDefinitionWarning,function(l){(0,cv.PRINT_WARNING)(l.message)}),n.TRACE_INIT("Choosing sub-methods implementations",function(){if(Ai.SUPPORT_STICKY?(n.chopInput=dD.default,n.match=n.matchWithTest):(n.updateLastIndex=sv.default,n.match=n.matchWithExec),a&&(n.handleModes=sv.default),n.trackStartLines===!1&&(n.computeNewColumn=dD.default),n.trackEndLines===!1&&(n.updateTokenEndLineColumnLocation=sv.default),/full/i.test(n.config.positionTracking))n.createTokenInstance=n.createFullToken;else if(/onlyStart/i.test(n.config.positionTracking))n.createTokenInstance=n.createStartOnlyToken;else if(/onlyOffset/i.test(n.config.positionTracking))n.createTokenInstance=n.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'.concat(n.config.positionTracking,'"'));n.hasCustom?(n.addToken=n.addTokenUsingPush,n.handlePayload=n.handlePayloadWithCustom):(n.addToken=n.addTokenUsingMemberAccess,n.handlePayload=n.handlePayloadNoCustom)}),n.TRACE_INIT("Failed Optimization Warnings",function(){var l=(0,mZ.default)(n.canModeBeOptimized,function(f,h,v){return h===!1&&f.push(v),f},[]);if(r.ensureOptimizations&&!(0,df.default)(l))throw Error("Lexer Modes: < ".concat(l.join(", "),` > cannot be optimized.
`)+`	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),n.TRACE_INIT("clearRegExpParserCache",function(){(0,vZ.clearRegExpParserCache)()}),n.TRACE_INIT("toFastProperties",function(){(0,cv.toFastProperties)(n)})})}return t.prototype.tokenize=function(e,r){if(r===void 0&&(r=this.defaultMode),!(0,df.default)(this.lexerDefinitionErrors)){var n=(0,lD.default)(this.lexerDefinitionErrors,function(o){return o.message}),i=n.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,r)},t.prototype.tokenizeInternal=function(e,r){var n=this,i,o,a,s,u,c,l,f,h,v,m,R,P,C,b,A,O=e,$=O.length,W=0,ee=0,Pe=this.hasCustom?0:Math.floor(e.length/10),B=new Array(Pe),Te=[],ze=this.trackStartLines?1:void 0,He=this.trackStartLines?1:void 0,L=(0,Ai.cloneEmptyGroups)(this.emptyGroups),q=this.trackStartLines,F=this.config.lineTerminatorsPattern,K=0,ie=[],oe=[],Q=[],ot=[];Object.freeze(ot);var Ve;function At(){return ie}function Yr(Nt){var Jr=(0,Ai.charCodeToOptimizedIndex)(Nt),Qr=oe[Jr];return Qr===void 0?ot:Qr}var Tr=function(Nt){if(Q.length===1&&Nt.tokenType.PUSH_MODE===void 0){var Jr=n.config.errorMessageProvider.buildUnableToPopLexerModeMessage(Nt);Te.push({offset:Nt.startOffset,line:Nt.startLine,column:Nt.startColumn,length:Nt.image.length,message:Jr})}else{Q.pop();var Qr=(0,dZ.default)(Q);ie=n.patternIdxToConfig[Qr],oe=n.charCodeToPatternIdxToConfig[Qr],K=ie.length;var Sn=n.canModeBeOptimized[Qr]&&n.config.safeMode===!1;oe&&Sn?Ve=Yr:Ve=At}};function zo(Nt){Q.push(Nt),oe=this.charCodeToPatternIdxToConfig[Nt],ie=this.patternIdxToConfig[Nt],K=ie.length,K=ie.length;var Jr=this.canModeBeOptimized[Nt]&&this.config.safeMode===!1;oe&&Jr?Ve=Yr:Ve=At}zo.call(this,r);for(var rr,Vo=this.config.recoveryEnabled;W<$;){c=null;var Yo=O.charCodeAt(W),Xo=Ve(Yo),Gs=Xo.length;for(i=0;i<Gs;i++){rr=Xo[i];var ut=rr.pattern;l=null;var Zn=rr.short;if(Zn!==!1?Yo===Zn&&(c=ut):rr.isCustom===!0?(A=ut.exec(O,W,B,L),A!==null?(c=A[0],A.payload!==void 0&&(l=A.payload)):c=null):(this.updateLastIndex(ut,W),c=this.match(ut,e,W)),c!==null){if(u=rr.longerAlt,u!==void 0){var Us=u.length;for(a=0;a<Us;a++){var Rn=ie[u[a]],fo=Rn.pattern;if(f=null,Rn.isCustom===!0?(A=fo.exec(O,W,B,L),A!==null?(s=A[0],A.payload!==void 0&&(f=A.payload)):s=null):(this.updateLastIndex(fo,W),s=this.match(fo,e,W)),s&&s.length>c.length){c=s,l=f,rr=Rn;break}}}break}}if(c!==null){if(h=c.length,v=rr.group,v!==void 0&&(m=rr.tokenTypeIdx,R=this.createTokenInstance(c,W,m,rr.tokenType,ze,He,h),this.handlePayload(R,l),v===!1?ee=this.addToken(B,ee,R):L[v].push(R)),e=this.chopInput(e,h),W=W+h,He=this.computeNewColumn(He,h),q===!0&&rr.canLineTerminator===!0){var An=0,po=void 0,Or=void 0;F.lastIndex=0;do po=F.test(c),po===!0&&(Or=F.lastIndex-1,An++);while(po===!0);An!==0&&(ze=ze+An,He=h-Or,this.updateTokenEndLineColumnLocation(R,v,Or,An,ze,He,h))}this.handleModes(rr,Tr,zo,R)}else{for(var Xr=W,Jo=ze,Qo=He,Rr=Vo===!1;Rr===!1&&W<$;)for(e=this.chopInput(e,1),W++,o=0;o<K;o++){var bn=ie[o],ut=bn.pattern,Zn=bn.short;if(Zn!==!1?O.charCodeAt(W)===Zn&&(Rr=!0):bn.isCustom===!0?Rr=ut.exec(O,W,B,L)!==null:(this.updateLastIndex(ut,W),Rr=ut.exec(e)!==null),Rr===!0)break}if(P=W-Xr,b=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(O,Xr,P,Jo,Qo),Te.push({offset:Xr,line:Jo,column:Qo,length:P,message:b}),Vo===!1)break}}return this.hasCustom||(B.length=ee),{tokens:B,groups:L,errors:Te}},t.prototype.handleModes=function(e,r,n,i){if(e.pop===!0){var o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)},t.prototype.chopInput=function(e,r){return e.substring(r)},t.prototype.updateLastIndex=function(e,r){e.lastIndex=r},t.prototype.updateTokenEndLineColumnLocation=function(e,r,n,i,o,a,s){var u,c;r!==void 0&&(u=n===s-1,c=u?-1:0,i===1&&u===!0||(e.endLine=o+c,e.endColumn=a-1+-c))},t.prototype.computeNewColumn=function(e,r){return e+r},t.prototype.createOffsetOnlyToken=function(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}},t.prototype.createStartOnlyToken=function(e,r,n,i,o,a){return{image:e,startOffset:r,startLine:o,startColumn:a,tokenTypeIdx:n,tokenType:i}},t.prototype.createFullToken=function(e,r,n,i,o,a,s){return{image:e,startOffset:r,endOffset:r+s-1,startLine:o,endLine:o,startColumn:a,endColumn:a+s-1,tokenTypeIdx:n,tokenType:i}},t.prototype.addTokenUsingPush=function(e,r,n){return e.push(n),r},t.prototype.addTokenUsingMemberAccess=function(e,r,n){return e[r]=n,r++,r},t.prototype.handlePayloadNoCustom=function(e,r){},t.prototype.handlePayloadWithCustom=function(e,r){r!==null&&(e.payload=r)},t.prototype.matchWithTest=function(e,r,n){var i=e.test(r);return i===!0?r.substring(n,e.lastIndex):null},t.prototype.matchWithExec=function(e,r){var n=e.exec(r);return n!==null?n[0]:null},t.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",t.NA=/NOT_APPLICABLE/,t}();bi.Lexer=TZ});var qo=d(Pt=>{"use strict";var lv=Pt&&Pt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.tokenMatcher=Pt.createTokenInstance=Pt.EOF=Pt.createToken=Pt.hasTokenLabel=Pt.tokenName=Pt.tokenLabel=void 0;var RZ=lv(ju()),Si=lv(Er()),AZ=lv(Oo()),bZ=zu(),dv=xo();function SZ(t){return AD(t)?t.LABEL:t.name}Pt.tokenLabel=SZ;function CZ(t){return t.name}Pt.tokenName=CZ;function AD(t){return(0,RZ.default)(t.LABEL)&&t.LABEL!==""}Pt.hasTokenLabel=AD;var EZ="parent",hD="categories",mD="label",gD="group",yD="push_mode",vD="pop_mode",_D="longer_alt",TD="line_breaks",RD="start_chars_hint";function bD(t){return PZ(t)}Pt.createToken=bD;function PZ(t){var e=t.pattern,r={};if(r.name=t.name,(0,AZ.default)(e)||(r.PATTERN=e),(0,Si.default)(t,EZ))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return(0,Si.default)(t,hD)&&(r.CATEGORIES=t[hD]),(0,dv.augmentTokenTypes)([r]),(0,Si.default)(t,mD)&&(r.LABEL=t[mD]),(0,Si.default)(t,gD)&&(r.GROUP=t[gD]),(0,Si.default)(t,vD)&&(r.POP_MODE=t[vD]),(0,Si.default)(t,yD)&&(r.PUSH_MODE=t[yD]),(0,Si.default)(t,_D)&&(r.LONGER_ALT=t[_D]),(0,Si.default)(t,TD)&&(r.LINE_BREAKS=t[TD]),(0,Si.default)(t,RD)&&(r.START_CHARS_HINT=t[RD]),r}Pt.EOF=bD({name:"EOF",pattern:bZ.Lexer.NA});(0,dv.augmentTokenTypes)([Pt.EOF]);function NZ(t,e,r,n,i,o,a,s){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:a,endColumn:s,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}Pt.createTokenInstance=NZ;function kZ(t,e){return(0,dv.tokenStructuredMatcher)(t,e)}Pt.tokenMatcher=kZ});var ls=d(yn=>{"use strict";var hv=yn&&yn.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(yn,"__esModule",{value:!0});yn.defaultGrammarValidatorErrorProvider=yn.defaultGrammarResolverErrorProvider=yn.defaultParserErrorProvider=void 0;var cs=qo(),pv=hv(os()),Zi=hv(qt()),wZ=hv(vi()),fv=lt(),SD=lt();yn.defaultParserErrorProvider={buildMismatchTokenMessage:function(t){var e=t.expected,r=t.actual,n=t.previous,i=t.ruleName,o=(0,cs.hasTokenLabel)(e),a=o?"--> ".concat((0,cs.tokenLabel)(e)," <--"):"token of type --> ".concat(e.name," <--"),s="Expecting ".concat(a," but found --> '").concat(r.image,"' <--");return s},buildNotAllInputParsedMessage:function(t){var e=t.firstRedundant,r=t.ruleName;return"Redundant input, expecting EOF but found: "+e.image},buildNoViableAltMessage:function(t){var e=t.expectedPathsPerAlt,r=t.actual,n=t.previous,i=t.customUserDescription,o=t.ruleName,a="Expecting: ",s=(0,pv.default)(r).image,u=`
but found: '`+s+"'";if(i)return a+i+u;var c=(0,wZ.default)(e,function(v,m){return v.concat(m)},[]),l=(0,Zi.default)(c,function(v){return"[".concat((0,Zi.default)(v,function(m){return(0,cs.tokenLabel)(m)}).join(", "),"]")}),f=(0,Zi.default)(l,function(v,m){return"  ".concat(m+1,". ").concat(v)}),h=`one of these possible Token sequences:
`.concat(f.join(`
`));return a+h+u},buildEarlyExitMessage:function(t){var e=t.expectedIterationPaths,r=t.actual,n=t.customUserDescription,i=t.ruleName,o="Expecting: ",a=(0,pv.default)(r).image,s=`
but found: '`+a+"'";if(n)return o+n+s;var u=(0,Zi.default)(e,function(l){return"[".concat((0,Zi.default)(l,function(f){return(0,cs.tokenLabel)(f)}).join(","),"]")}),c=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+"<".concat(u.join(" ,"),">");return o+c+s}};Object.freeze(yn.defaultParserErrorProvider);yn.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(t,e){var r="Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-";return r}};yn.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(t,e){function r(l){return l instanceof fv.Terminal?l.terminalType.name:l instanceof fv.NonTerminal?l.nonTerminalName:""}var n=t.name,i=(0,pv.default)(e),o=i.idx,a=(0,SD.getProductionDslName)(i),s=r(i),u=o>0,c="->".concat(a).concat(u?o:"","<- ").concat(s?"with argument: ->".concat(s,"<-"):"",`
                  appears more than once (`).concat(e.length," times) in the top level rule: ->").concat(n,`<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `);return c=c.replace(/[ \t]+/g," "),c=c.replace(/\s\s+/g,`
`),c},buildNamespaceConflictError:function(t){var e=`Namespace conflict found in grammar.
`+"The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <".concat(t.name,`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return e},buildAlternationPrefixAmbiguityError:function(t){var e=(0,Zi.default)(t.prefixPath,function(i){return(0,cs.tokenLabel)(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous alternatives: <".concat(t.ambiguityIndices.join(" ,"),`> due to common lookahead prefix
`)+"in <OR".concat(r,"> inside <").concat(t.topLevelRule.name,`> Rule,
`)+"<".concat(e,`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return n},buildAlternationAmbiguityError:function(t){var e=(0,Zi.default)(t.prefixPath,function(i){return(0,cs.tokenLabel)(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous Alternatives Detected: <".concat(t.ambiguityIndices.join(" ,"),"> in <OR").concat(r,">")+" inside <".concat(t.topLevelRule.name,`> Rule,
`)+"<".concat(e,`> may appears as a prefix path in all these alternatives.
`);return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError:function(t){var e=(0,SD.getProductionDslName)(t.repetition);t.repetition.idx!==0&&(e+=t.repetition.idx);var r="The repetition <".concat(e,"> within Rule <").concat(t.topLevelRule.name,`> can never consume any tokens.
`)+"This could lead to an infinite loop.";return r},buildTokenNameError:function(t){return"deprecated"},buildEmptyAlternationError:function(t){var e="Ambiguous empty alternative: <".concat(t.emptyChoiceIdx+1,">")+" in <OR".concat(t.alternation.idx,"> inside <").concat(t.topLevelRule.name,`> Rule.
`)+"Only the last alternative may be an empty alternative.";return e},buildTooManyAlternativesError:function(t){var e=`An Alternation cannot have more than 256 alternatives:
`+"<OR".concat(t.alternation.idx,"> inside <").concat(t.topLevelRule.name,`> Rule.
 has `).concat(t.alternation.definition.length+1," alternatives.");return e},buildLeftRecursionError:function(t){var e=t.topLevelRule.name,r=(0,Zi.default)(t.leftRecursionPath,function(o){return o.name}),n="".concat(e," --> ").concat(r.concat([e]).join(" --> ")),i=`Left Recursion found in grammar.
`+"rule: <".concat(e,`> can be invoked from itself (directly or indirectly)
`)+`without consuming any Tokens. The grammar path that causes this is: 
 `.concat(n,`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;return i},buildInvalidRuleNameError:function(t){return"deprecated"},buildDuplicateRuleNameError:function(t){var e;t.topLevelRule instanceof fv.Rule?e=t.topLevelRule.name:e=t.topLevelRule;var r="Duplicate definition, rule: ->".concat(e,"<- is already defined in the grammar: ->").concat(t.grammarName,"<-");return r}}});var PD=d(Wn=>{"use strict";var OZ=Wn&&Wn.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),CD=Wn&&Wn.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Wn,"__esModule",{value:!0});Wn.GastRefResolverVisitor=Wn.resolveGrammar=void 0;var DZ=vr(),IZ=CD(Lt()),xZ=CD(Ln()),qZ=lt();function LZ(t,e){var r=new ED(t,e);return r.resolveRefs(),r.errors}Wn.resolveGrammar=LZ;var ED=function(t){OZ(e,t);function e(r,n){var i=t.call(this)||this;return i.nameToTopRule=r,i.errMsgProvider=n,i.errors=[],i}return e.prototype.resolveRefs=function(){var r=this;(0,IZ.default)((0,xZ.default)(this.nameToTopRule),function(n){r.currTopLevel=n,n.accept(r)})},e.prototype.visitNonTerminal=function(r){var n=this.nameToTopRule[r.nonTerminalName];if(n)r.referencedRule=n;else{var i=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,r);this.errors.push({message:i,type:DZ.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:r.nonTerminalName})}},e}(qZ.GAstVisitor);Wn.GastRefResolverVisitor=ED});var kD=d((ehe,ND)=>{function MZ(t,e,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;){var a=t[i];e(n,a,r(a),t)}return n}ND.exports=MZ});var OD=d((the,wD)=>{var $Z=Ji();function FZ(t,e,r,n){return $Z(t,function(i,o,a){e(n,i,r(i),a)}),n}wD.exports=FZ});var ID=d((rhe,DD)=>{var jZ=kD(),GZ=OD(),UZ=Wr(),HZ=we();function WZ(t,e){return function(r,n){var i=HZ(r)?jZ:GZ,o=e?e():{};return i(r,t,UZ(n,2),o)}}DD.exports=WZ});var mv=d((nhe,xD)=>{var KZ=Od(),BZ=ID(),zZ=Object.prototype,VZ=zZ.hasOwnProperty,YZ=BZ(function(t,e,r){VZ.call(t,r)?t[r].push(e):KZ(t,r,[e])});xD.exports=YZ});var ff=d((ihe,qD)=>{var XZ=Kd(),JZ=qt();function QZ(t,e){return XZ(JZ(t,e),1)}qD.exports=QZ});var pf=d((ohe,LD)=>{var ZZ=qd(),eee=rs();function tee(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:eee(e),e=n-e,ZZ(t,0,e<0?0:e)):[]}LD.exports=tee});var Ju=d(rt=>{"use strict";var Mo=rt&&rt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),$o=rt&&rt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(rt,"__esModule",{value:!0});rt.nextPossibleTokensAfter=rt.possiblePathsFrom=rt.NextTerminalAfterAtLeastOneSepWalker=rt.NextTerminalAfterAtLeastOneWalker=rt.NextTerminalAfterManySepWalker=rt.NextTerminalAfterManyWalker=rt.AbstractNextTerminalAfterProductionWalker=rt.NextAfterTokenWalker=rt.AbstractNextPossibleTokensWalker=void 0;var $D=Wd(),mf=$o(os()),hf=$o(Sr()),MD=$o(pf()),ur=$o(Ld()),ree=$o(cf()),nee=$o(Lt()),Lo=$o(mi()),iee=Wy(),le=lt(),FD=function(t){Mo(e,t);function e(r,n){var i=t.call(this)||this;return i.topProd=r,i.path=n,i.possibleTokTypes=[],i.nextProductionName="",i.nextProductionOccurrence=0,i.found=!1,i.isAtEndOfPath=!1,i}return e.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=(0,Lo.default)(this.path.ruleStack).reverse(),this.occurrenceStack=(0,Lo.default)(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},e.prototype.walk=function(r,n){n===void 0&&(n=[]),this.found||t.prototype.walk.call(this,r,n)},e.prototype.walkProdRef=function(r,n,i){if(r.referencedRule.name===this.nextProductionName&&r.idx===this.nextProductionOccurrence){var o=n.concat(i);this.updateExpectedNext(),this.walk(r.referencedRule,o)}},e.prototype.updateExpectedNext=function(){(0,hf.default)(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},e}($D.RestWalker);rt.AbstractNextPossibleTokensWalker=FD;var oee=function(t){Mo(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.path=n,i.nextTerminalName="",i.nextTerminalOccurrence=0,i.nextTerminalName=i.path.lastTok.name,i.nextTerminalOccurrence=i.path.lastTokOccurrence,i}return e.prototype.walkTerminal=function(r,n,i){if(this.isAtEndOfPath&&r.terminalType.name===this.nextTerminalName&&r.idx===this.nextTerminalOccurrence&&!this.found){var o=n.concat(i),a=new le.Alternative({definition:o});this.possibleTokTypes=(0,iee.first)(a),this.found=!0}},e}(FD);rt.NextAfterTokenWalker=oee;var Xu=function(t){Mo(e,t);function e(r,n){var i=t.call(this)||this;return i.topRule=r,i.occurrence=n,i.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},i}return e.prototype.startWalking=function(){return this.walk(this.topRule),this.result},e}($D.RestWalker);rt.AbstractNextTerminalAfterProductionWalker=Xu;var aee=function(t){Mo(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkMany=function(r,n,i){if(r.idx===this.occurrence){var o=(0,mf.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof le.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkMany.call(this,r,n,i)},e}(Xu);rt.NextTerminalAfterManyWalker=aee;var see=function(t){Mo(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkManySep=function(r,n,i){if(r.idx===this.occurrence){var o=(0,mf.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof le.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkManySep.call(this,r,n,i)},e}(Xu);rt.NextTerminalAfterManySepWalker=see;var uee=function(t){Mo(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOne=function(r,n,i){if(r.idx===this.occurrence){var o=(0,mf.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof le.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkAtLeastOne.call(this,r,n,i)},e}(Xu);rt.NextTerminalAfterAtLeastOneWalker=uee;var cee=function(t){Mo(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOneSep=function(r,n,i){if(r.idx===this.occurrence){var o=(0,mf.default)(n.concat(i));this.result.isEndOfRule=o===void 0,o instanceof le.Terminal&&(this.result.token=o.terminalType,this.result.occurrence=o.idx)}else t.prototype.walkAtLeastOneSep.call(this,r,n,i)},e}(Xu);rt.NextTerminalAfterAtLeastOneSepWalker=cee;function jD(t,e,r){r===void 0&&(r=[]),r=(0,Lo.default)(r);var n=[],i=0;function o(c){return c.concat((0,ur.default)(t,i+1))}function a(c){var l=jD(o(c),e,r);return n.concat(l)}for(;r.length<e&&i<t.length;){var s=t[i];if(s instanceof le.Alternative)return a(s.definition);if(s instanceof le.NonTerminal)return a(s.definition);if(s instanceof le.Option)n=a(s.definition);else if(s instanceof le.RepetitionMandatory){var u=s.definition.concat([new le.Repetition({definition:s.definition})]);return a(u)}else if(s instanceof le.RepetitionMandatoryWithSeparator){var u=[new le.Alternative({definition:s.definition}),new le.Repetition({definition:[new le.Terminal({terminalType:s.separator})].concat(s.definition)})];return a(u)}else if(s instanceof le.RepetitionWithSeparator){var u=s.definition.concat([new le.Repetition({definition:[new le.Terminal({terminalType:s.separator})].concat(s.definition)})]);n=a(u)}else if(s instanceof le.Repetition){var u=s.definition.concat([new le.Repetition({definition:s.definition})]);n=a(u)}else{if(s instanceof le.Alternation)return(0,nee.default)(s.definition,function(c){(0,hf.default)(c.definition)===!1&&(n=a(c.definition))}),n;if(s instanceof le.Terminal)r.push(s.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:(0,ur.default)(t,i)}),n}rt.possiblePathsFrom=jD;function lee(t,e,r,n){var i="EXIT_NONE_TERMINAL",o=[i],a="EXIT_ALTERNATIVE",s=!1,u=e.length,c=u-n-1,l=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!(0,hf.default)(f);){var h=f.pop();if(h===a){s&&(0,ree.default)(f).idx<=c&&f.pop();continue}var v=h.def,m=h.idx,R=h.ruleStack,P=h.occurrenceStack;if(!(0,hf.default)(v)){var C=v[0];if(C===i){var b={idx:m,def:(0,ur.default)(v),ruleStack:(0,MD.default)(R),occurrenceStack:(0,MD.default)(P)};f.push(b)}else if(C instanceof le.Terminal)if(m<u-1){var A=m+1,O=e[A];if(r(O,C.terminalType)){var b={idx:A,def:(0,ur.default)(v),ruleStack:R,occurrenceStack:P};f.push(b)}}else if(m===u-1)l.push({nextTokenType:C.terminalType,nextTokenOccurrence:C.idx,ruleStack:R,occurrenceStack:P}),s=!0;else throw Error("non exhaustive match");else if(C instanceof le.NonTerminal){var $=(0,Lo.default)(R);$.push(C.nonTerminalName);var W=(0,Lo.default)(P);W.push(C.idx);var b={idx:m,def:C.definition.concat(o,(0,ur.default)(v)),ruleStack:$,occurrenceStack:W};f.push(b)}else if(C instanceof le.Option){var ee={idx:m,def:(0,ur.default)(v),ruleStack:R,occurrenceStack:P};f.push(ee),f.push(a);var Pe={idx:m,def:C.definition.concat((0,ur.default)(v)),ruleStack:R,occurrenceStack:P};f.push(Pe)}else if(C instanceof le.RepetitionMandatory){var B=new le.Repetition({definition:C.definition,idx:C.idx}),Te=C.definition.concat([B],(0,ur.default)(v)),b={idx:m,def:Te,ruleStack:R,occurrenceStack:P};f.push(b)}else if(C instanceof le.RepetitionMandatoryWithSeparator){var ze=new le.Terminal({terminalType:C.separator}),B=new le.Repetition({definition:[ze].concat(C.definition),idx:C.idx}),Te=C.definition.concat([B],(0,ur.default)(v)),b={idx:m,def:Te,ruleStack:R,occurrenceStack:P};f.push(b)}else if(C instanceof le.RepetitionWithSeparator){var ee={idx:m,def:(0,ur.default)(v),ruleStack:R,occurrenceStack:P};f.push(ee),f.push(a);var ze=new le.Terminal({terminalType:C.separator}),He=new le.Repetition({definition:[ze].concat(C.definition),idx:C.idx}),Te=C.definition.concat([He],(0,ur.default)(v)),Pe={idx:m,def:Te,ruleStack:R,occurrenceStack:P};f.push(Pe)}else if(C instanceof le.Repetition){var ee={idx:m,def:(0,ur.default)(v),ruleStack:R,occurrenceStack:P};f.push(ee),f.push(a);var He=new le.Repetition({definition:C.definition,idx:C.idx}),Te=C.definition.concat([He],(0,ur.default)(v)),Pe={idx:m,def:Te,ruleStack:R,occurrenceStack:P};f.push(Pe)}else if(C instanceof le.Alternation)for(var L=C.definition.length-1;L>=0;L--){var q=C.definition[L],F={idx:m,def:q.definition.concat((0,ur.default)(v)),ruleStack:R,occurrenceStack:P};f.push(F),f.push(a)}else if(C instanceof le.Alternative)f.push({idx:m,def:C.definition.concat((0,ur.default)(v)),ruleStack:R,occurrenceStack:P});else if(C instanceof le.Rule)f.push(dee(C,m,R,P));else throw Error("non exhaustive match")}}return l}rt.nextPossibleTokensAfter=lee;function dee(t,e,r,n){var i=(0,Lo.default)(r);i.push(t.name);var o=(0,Lo.default)(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}});var ds=d(_e=>{"use strict";var WD=_e&&_e.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Go=_e&&_e.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(_e,"__esModule",{value:!0});_e.areTokenCategoriesNotUsed=_e.isStrictPrefixOfPath=_e.containsPath=_e.getLookaheadPathsForOptionalProd=_e.getLookaheadPathsForOr=_e.lookAheadSequenceFromAlternatives=_e.buildSingleAlternativeLookaheadFunction=_e.buildAlternativesLookAheadFunc=_e.buildLookaheadFuncForOptionalProd=_e.buildLookaheadFuncForOr=_e.getLookaheadPaths=_e.getProdType=_e.PROD_TYPE=void 0;var yv=Go(Sr()),KD=Go(gn()),jo=Go(Wu()),gf=Go(qt()),Fo=Go(Lt()),GD=Go(Er()),BD=Go(vi()),UD=Ju(),fee=Wd(),yf=xo(),eo=lt(),pee=lt(),_t;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(_t=_e.PROD_TYPE||(_e.PROD_TYPE={}));function zD(t){if(t instanceof eo.Option||t==="Option")return _t.OPTION;if(t instanceof eo.Repetition||t==="Repetition")return _t.REPETITION;if(t instanceof eo.RepetitionMandatory||t==="RepetitionMandatory")return _t.REPETITION_MANDATORY;if(t instanceof eo.RepetitionMandatoryWithSeparator||t==="RepetitionMandatoryWithSeparator")return _t.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof eo.RepetitionWithSeparator||t==="RepetitionWithSeparator")return _t.REPETITION_WITH_SEPARATOR;if(t instanceof eo.Alternation||t==="Alternation")return _t.ALTERNATION;throw Error("non exhaustive match")}_e.getProdType=zD;function hee(t){var e=t.occurrence,r=t.rule,n=t.prodType,i=t.maxLookahead,o=zD(n);return o===_t.ALTERNATION?_v(e,r,i):Tv(e,r,o,i)}_e.getLookaheadPaths=hee;function mee(t,e,r,n,i,o){var a=_v(t,e,r),s=Rv(a)?yf.tokenStructuredMatcherNoCategories:yf.tokenStructuredMatcher;return o(a,n,s,i)}_e.buildLookaheadFuncForOr=mee;function gee(t,e,r,n,i,o){var a=Tv(t,e,i,r),s=Rv(a)?yf.tokenStructuredMatcherNoCategories:yf.tokenStructuredMatcher;return o(a[0],s,n)}_e.buildLookaheadFuncForOptionalProd=gee;function yee(t,e,r,n){var i=t.length,o=(0,jo.default)(t,function(u){return(0,jo.default)(u,function(c){return c.length===1})});if(e)return function(u){for(var c=(0,gf.default)(u,function(A){return A.GATE}),l=0;l<i;l++){var f=t[l],h=f.length,v=c[l];if(v!==void 0&&v.call(this)===!1)continue;e:for(var m=0;m<h;m++){for(var R=f[m],P=R.length,C=0;C<P;C++){var b=this.LA(C+1);if(r(b,R[C])===!1)continue e}return l}}};if(o&&!n){var a=(0,gf.default)(t,function(u){return(0,KD.default)(u)}),s=(0,BD.default)(a,function(u,c,l){return(0,Fo.default)(c,function(f){(0,GD.default)(u,f.tokenTypeIdx)||(u[f.tokenTypeIdx]=l),(0,Fo.default)(f.categoryMatches,function(h){(0,GD.default)(u,h)||(u[h]=l)})}),u},{});return function(){var u=this.LA(1);return s[u.tokenTypeIdx]}}else return function(){for(var u=0;u<i;u++){var c=t[u],l=c.length;e:for(var f=0;f<l;f++){for(var h=c[f],v=h.length,m=0;m<v;m++){var R=this.LA(m+1);if(r(R,h[m])===!1)continue e}return u}}}}_e.buildAlternativesLookAheadFunc=yee;function vee(t,e,r){var n=(0,jo.default)(t,function(c){return c.length===1}),i=t.length;if(n&&!r){var o=(0,KD.default)(t);if(o.length===1&&(0,yv.default)(o[0].categoryMatches)){var a=o[0],s=a.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===s}}else{var u=(0,BD.default)(o,function(c,l,f){return c[l.tokenTypeIdx]=!0,(0,Fo.default)(l.categoryMatches,function(h){c[h]=!0}),c},[]);return function(){var c=this.LA(1);return u[c.tokenTypeIdx]===!0}}}else return function(){e:for(var c=0;c<i;c++){for(var l=t[c],f=l.length,h=0;h<f;h++){var v=this.LA(h+1);if(e(v,l[h])===!1)continue e}return!0}return!1}}_e.buildSingleAlternativeLookaheadFunction=vee;var _ee=function(t){WD(e,t);function e(r,n,i){var o=t.call(this)||this;return o.topProd=r,o.targetOccurrence=n,o.targetProdType=i,o}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},e.prototype.checkIsTarget=function(r,n,i,o){return r.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=i.concat(o),!0):!1},e.prototype.walkOption=function(r,n,i){this.checkIsTarget(r,_t.OPTION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOne=function(r,n,i){this.checkIsTarget(r,_t.REPETITION_MANDATORY,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOneSep=function(r,n,i){this.checkIsTarget(r,_t.REPETITION_MANDATORY_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkMany=function(r,n,i){this.checkIsTarget(r,_t.REPETITION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkManySep=function(r,n,i){this.checkIsTarget(r,_t.REPETITION_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e}(fee.RestWalker),VD=function(t){WD(e,t);function e(r,n,i){var o=t.call(this)||this;return o.targetOccurrence=r,o.targetProdType=n,o.targetRef=i,o.result=[],o}return e.prototype.checkIsTarget=function(r,n){r.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||r===this.targetRef)&&(this.result=r.definition)},e.prototype.visitOption=function(r){this.checkIsTarget(r,_t.OPTION)},e.prototype.visitRepetition=function(r){this.checkIsTarget(r,_t.REPETITION)},e.prototype.visitRepetitionMandatory=function(r){this.checkIsTarget(r,_t.REPETITION_MANDATORY)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.checkIsTarget(r,_t.REPETITION_MANDATORY_WITH_SEPARATOR)},e.prototype.visitRepetitionWithSeparator=function(r){this.checkIsTarget(r,_t.REPETITION_WITH_SEPARATOR)},e.prototype.visitAlternation=function(r){this.checkIsTarget(r,_t.ALTERNATION)},e}(pee.GAstVisitor);function HD(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=[];return e}function gv(t){for(var e=[""],r=0;r<t.length;r++){for(var n=t[r],i=[],o=0;o<e.length;o++){var a=e[o];i.push(a+"_"+n.tokenTypeIdx);for(var s=0;s<n.categoryMatches.length;s++){var u="_"+n.categoryMatches[s];i.push(a+u)}}e=i}return e}function Tee(t,e,r){for(var n=0;n<t.length;n++)if(n!==r)for(var i=t[n],o=0;o<e.length;o++){var a=e[o];if(i[a]===!0)return!1}return!0}function vv(t,e){for(var r=(0,gf.default)(t,function(l){return(0,UD.possiblePathsFrom)([l],1)}),n=HD(r.length),i=(0,gf.default)(r,function(l){var f={};return(0,Fo.default)(l,function(h){var v=gv(h.partialPath);(0,Fo.default)(v,function(m){f[m]=!0})}),f}),o=r,a=1;a<=e;a++){var s=o;o=HD(s.length);for(var u=function(l){for(var f=s[l],h=0;h<f.length;h++){var v=f[h].partialPath,m=f[h].suffixDef,R=gv(v),P=Tee(i,R,l);if(P||(0,yv.default)(m)||v.length===e){var C=n[l];if(YD(C,v)===!1){C.push(v);for(var b=0;b<R.length;b++){var A=R[b];i[l][A]=!0}}}else{var O=(0,UD.possiblePathsFrom)(m,a+1,v);o[l]=o[l].concat(O),(0,Fo.default)(O,function($){var W=gv($.partialPath);(0,Fo.default)(W,function(ee){i[l][ee]=!0})})}}},c=0;c<s.length;c++)u(c)}return n}_e.lookAheadSequenceFromAlternatives=vv;function _v(t,e,r,n){var i=new VD(t,_t.ALTERNATION,n);return e.accept(i),vv(i.result,r)}_e.getLookaheadPathsForOr=_v;function Tv(t,e,r,n){var i=new VD(t,r);e.accept(i);var o=i.result,a=new _ee(e,t,r),s=a.startWalking(),u=new eo.Alternative({definition:o}),c=new eo.Alternative({definition:s});return vv([u,c],n)}_e.getLookaheadPathsForOptionalProd=Tv;function YD(t,e){e:for(var r=0;r<t.length;r++){var n=t[r];if(n.length===e.length){for(var i=0;i<n.length;i++){var o=e[i],a=n[i],s=o===a||a.categoryMatchesMap[o.tokenTypeIdx]!==void 0;if(s===!1)continue e}return!0}}return!1}_e.containsPath=YD;function Ree(t,e){return t.length<e.length&&(0,jo.default)(t,function(r,n){var i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}_e.isStrictPrefixOfPath=Ree;function Rv(t){return(0,jo.default)(t,function(e){return(0,jo.default)(e,function(r){return(0,jo.default)(r,function(n){return(0,yv.default)(n.categoryMatches)})})})}_e.areTokenCategoriesNotUsed=Rv});var ec=d(pe=>{"use strict";var bv=pe&&pe.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Av=pe&&pe.__assign||function(){return Av=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Av.apply(this,arguments)},Mt=pe&&pe.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(pe,"__esModule",{value:!0});pe.checkPrefixAlternativesAmbiguities=pe.validateSomeNonEmptyLookaheadPath=pe.validateTooManyAlts=pe.RepetitionCollector=pe.validateAmbiguousAlternationAlternatives=pe.validateEmptyOrAlternative=pe.getFirstNoneTerminal=pe.validateNoLeftRecursion=pe.validateRuleIsOverridden=pe.validateRuleDoesNotAlreadyExist=pe.OccurrenceValidationCollector=pe.identifyProductionForDuplicates=pe.validateGrammar=pe.validateLookahead=void 0;var XD=Mt(os()),vf=Mt(Sr()),Aee=Mt(Ld()),JD=Mt(gn()),bee=Mt(Bu()),See=Mt(Xd()),Cee=Mt(Jd()),to=Mt(qt()),Zu=Mt(Lt()),Eee=Mt(mv()),Sv=Mt(vi()),Pee=Mt(Iy()),Nee=Mt(Ln()),Cv=Mt(yi()),Ci=Mt(ff()),kee=Mt(mi()),_n=vr(),Ev=lt(),fs=ds(),wee=Ju(),vn=lt(),Pv=lt(),Oee=Mt(pf()),Dee=Mt(Ku()),Iee=xo();function xee(t){var e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return(0,to.default)(e,function(r){return Av({type:_n.ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION},r)})}pe.validateLookahead=xee;function qee(t,e,r,n){var i=(0,Ci.default)(t,function(u){return Lee(u,r)}),o=Uee(t,e,r),a=(0,Ci.default)(t,function(u){return iI(u,r)}),s=(0,Ci.default)(t,function(u){return tI(u,t,n,r)});return i.concat(o,a,s)}pe.validateGrammar=qee;function Lee(t,e){var r=new eI;t.accept(r);var n=r.allProductions,i=(0,Eee.default)(n,QD),o=(0,Pee.default)(i,function(s){return s.length>1}),a=(0,to.default)((0,Nee.default)(o),function(s){var u=(0,XD.default)(s),c=e.buildDuplicateFoundError(t,s),l=(0,Ev.getProductionDslName)(u),f={message:c,type:_n.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:l,occurrence:u.idx},h=ZD(u);return h&&(f.parameter=h),f});return a}function QD(t){return"".concat((0,Ev.getProductionDslName)(t),"_#_").concat(t.idx,"_#_").concat(ZD(t))}pe.identifyProductionForDuplicates=QD;function ZD(t){return t instanceof vn.Terminal?t.terminalType.name:t instanceof vn.NonTerminal?t.nonTerminalName:""}var eI=function(t){bv(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitNonTerminal=function(r){this.allProductions.push(r)},e.prototype.visitOption=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e.prototype.visitAlternation=function(r){this.allProductions.push(r)},e.prototype.visitTerminal=function(r){this.allProductions.push(r)},e}(Pv.GAstVisitor);pe.OccurrenceValidationCollector=eI;function tI(t,e,r,n){var i=[],o=(0,Sv.default)(e,function(s,u){return u.name===t.name?s+1:s},0);if(o>1){var a=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:a,type:_n.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}pe.validateRuleDoesNotAlreadyExist=tI;function Mee(t,e,r){var n=[],i;return(0,Cv.default)(e,t)||(i="Invalid rule override, rule: ->".concat(t,"<- cannot be overridden in the grammar: ->").concat(r,"<-")+"as it is not defined in any of the super grammars ",n.push({message:i,type:_n.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:t})),n}pe.validateRuleIsOverridden=Mee;function rI(t,e,r,n){n===void 0&&(n=[]);var i=[],o=Qu(e.definition);if((0,vf.default)(o))return[];var a=t.name,s=(0,Cv.default)(o,t);s&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:_n.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:a});var u=(0,Cee.default)(o,n.concat([t])),c=(0,Ci.default)(u,function(l){var f=(0,kee.default)(n);return f.push(l),rI(t,l,r,f)});return i.concat(c)}pe.validateNoLeftRecursion=rI;function Qu(t){var e=[];if((0,vf.default)(t))return e;var r=(0,XD.default)(t);if(r instanceof vn.NonTerminal)e.push(r.referencedRule);else if(r instanceof vn.Alternative||r instanceof vn.Option||r instanceof vn.RepetitionMandatory||r instanceof vn.RepetitionMandatoryWithSeparator||r instanceof vn.RepetitionWithSeparator||r instanceof vn.Repetition)e=e.concat(Qu(r.definition));else if(r instanceof vn.Alternation)e=(0,JD.default)((0,to.default)(r.definition,function(a){return Qu(a.definition)}));else if(!(r instanceof vn.Terminal))throw Error("non exhaustive match");var n=(0,Ev.isOptionalProd)(r),i=t.length>1;if(n&&i){var o=(0,Aee.default)(t);return e.concat(Qu(o))}else return e}pe.getFirstNoneTerminal=Qu;var Nv=function(t){bv(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.alternations=[],r}return e.prototype.visitAlternation=function(r){this.alternations.push(r)},e}(Pv.GAstVisitor);function $ee(t,e){var r=new Nv;t.accept(r);var n=r.alternations,i=(0,Ci.default)(n,function(o){var a=(0,Oee.default)(o.definition);return(0,Ci.default)(a,function(s,u){var c=(0,wee.nextPossibleTokensAfter)([s],[],Iee.tokenStructuredMatcher,1);return(0,vf.default)(c)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:u}),type:_n.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:u+1}]:[]})});return i}pe.validateEmptyOrAlternative=$ee;function Fee(t,e,r){var n=new Nv;t.accept(n);var i=n.alternations;i=(0,See.default)(i,function(a){return a.ignoreAmbiguities===!0});var o=(0,Ci.default)(i,function(a){var s=a.idx,u=a.maxLookahead||e,c=(0,fs.getLookaheadPathsForOr)(s,t,u,a),l=Gee(c,a,t,r),f=oI(c,a,t,r);return l.concat(f)});return o}pe.validateAmbiguousAlternationAlternatives=Fee;var nI=function(t){bv(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e}(Pv.GAstVisitor);pe.RepetitionCollector=nI;function iI(t,e){var r=new Nv;t.accept(r);var n=r.alternations,i=(0,Ci.default)(n,function(o){return o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:_n.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[]});return i}pe.validateTooManyAlts=iI;function jee(t,e,r){var n=[];return(0,Zu.default)(t,function(i){var o=new nI;i.accept(o);var a=o.allProductions;(0,Zu.default)(a,function(s){var u=(0,fs.getProdType)(s),c=s.maxLookahead||e,l=s.idx,f=(0,fs.getLookaheadPathsForOptionalProd)(l,i,u,c),h=f[0];if((0,vf.default)((0,JD.default)(h))){var v=r.buildEmptyRepetitionError({topLevelRule:i,repetition:s});n.push({message:v,type:_n.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}pe.validateSomeNonEmptyLookaheadPath=jee;function Gee(t,e,r,n){var i=[],o=(0,Sv.default)(t,function(s,u,c){return e.definition[c].ignoreAmbiguities===!0||(0,Zu.default)(u,function(l){var f=[c];(0,Zu.default)(t,function(h,v){c!==v&&(0,fs.containsPath)(h,l)&&e.definition[v].ignoreAmbiguities!==!0&&f.push(v)}),f.length>1&&!(0,fs.containsPath)(i,l)&&(i.push(l),s.push({alts:f,path:l}))}),s},[]),a=(0,to.default)(o,function(s){var u=(0,to.default)(s.alts,function(l){return l+1}),c=n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:u,prefixPath:s.path});return{message:c,type:_n.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:s.alts}});return a}function oI(t,e,r,n){var i=(0,Sv.default)(t,function(a,s,u){var c=(0,to.default)(s,function(l){return{idx:u,path:l}});return a.concat(c)},[]),o=(0,Dee.default)((0,Ci.default)(i,function(a){var s=e.definition[a.idx];if(s.ignoreAmbiguities===!0)return[];var u=a.idx,c=a.path,l=(0,bee.default)(i,function(h){return e.definition[h.idx].ignoreAmbiguities!==!0&&h.idx<u&&(0,fs.isStrictPrefixOfPath)(h.path,c)}),f=(0,to.default)(l,function(h){var v=[h.idx+1,u+1],m=e.idx===0?"":e.idx,R=n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:v,prefixPath:h.path});return{message:R,type:_n.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:m,alternatives:v}});return f}));return o}pe.checkPrefixAlternativesAmbiguities=oI;function Uee(t,e,r){var n=[],i=(0,to.default)(e,function(o){return o.name});return(0,Zu.default)(t,function(o){var a=o.name;if((0,Cv.default)(i,a)){var s=r.buildNamespaceConflictError(o);n.push({message:s,type:_n.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:a})}}),n}});var cI=d(ro=>{"use strict";var aI=ro&&ro.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ro,"__esModule",{value:!0});ro.validateGrammar=ro.resolveGrammar=void 0;var Hee=aI(Lt()),sI=aI(zy()),Wee=PD(),Kee=ec(),uI=ls();function Bee(t){var e=(0,sI.default)(t,{errMsgProvider:uI.defaultGrammarResolverErrorProvider}),r={};return(0,Hee.default)(t.rules,function(n){r[n.name]=n}),(0,Wee.resolveGrammar)(r,e.errMsgProvider)}ro.resolveGrammar=Bee;function zee(t){return t=(0,sI.default)(t,{errMsgProvider:uI.defaultGrammarValidatorErrorProvider}),(0,Kee.validateGrammar)(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}ro.validateGrammar=zee});var ps=d(tr=>{"use strict";var tc=tr&&tr.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Vee=tr&&tr.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(tr,"__esModule",{value:!0});tr.EarlyExitException=tr.NotAllInputParsedException=tr.NoViableAltException=tr.MismatchedTokenException=tr.isRecognitionException=void 0;var Yee=Vee(yi()),lI="MismatchedTokenException",dI="NoViableAltException",fI="EarlyExitException",pI="NotAllInputParsedException",hI=[lI,dI,fI,pI];Object.freeze(hI);function Xee(t){return(0,Yee.default)(hI,t.name)}tr.isRecognitionException=Xee;var _f=function(t){tc(e,t);function e(r,n){var i=this.constructor,o=t.call(this,r)||this;return o.token=n,o.resyncedTokens=[],Object.setPrototypeOf(o,i.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,o.constructor),o}return e}(Error),Jee=function(t){tc(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=lI,o}return e}(_f);tr.MismatchedTokenException=Jee;var Qee=function(t){tc(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=dI,o}return e}(_f);tr.NoViableAltException=Qee;var Zee=function(t){tc(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.name=pI,i}return e}(_f);tr.NotAllInputParsedException=Zee;var ete=function(t){tc(e,t);function e(r,n,i){var o=t.call(this,r,n)||this;return o.previousToken=i,o.name=fI,o}return e}(_f);tr.EarlyExitException=ete});var wv=d(Tt=>{"use strict";var tte=Tt&&Tt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),no=Tt&&Tt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.attemptInRepetitionRecovery=Tt.Recoverable=Tt.InRuleRecoveryException=Tt.IN_RULE_RECOVERY_EXCEPTION=Tt.EOF_FOLLOW_KEY=void 0;var rc=qo(),rte=no(Sr()),mI=no(pf()),nte=no(gn()),kv=no(qt()),gI=no(Qd()),ite=no(Er()),ote=no(yi()),ate=no(mi()),ste=ps(),ute=Ky(),cte=vr();Tt.EOF_FOLLOW_KEY={};Tt.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";var yI=function(t){tte(e,t);function e(r){var n=t.call(this,r)||this;return n.name=Tt.IN_RULE_RECOVERY_EXCEPTION,n}return e}(Error);Tt.InRuleRecoveryException=yI;var lte=function(){function t(){}return t.prototype.initRecoverable=function(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=(0,ite.default)(e,"recoveryEnabled")?e.recoveryEnabled:cte.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=vI)},t.prototype.getTokenToInsert=function(e){var r=(0,rc.createTokenInstance)(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r},t.prototype.canTokenTypeBeInsertedInRecovery=function(e){return!0},t.prototype.canTokenTypeBeDeletedInRecovery=function(e){return!0},t.prototype.tryInRepetitionRecovery=function(e,r,n,i){for(var o=this,a=this.findReSyncTokenType(),s=this.exportLexerState(),u=[],c=!1,l=this.LA(1),f=this.LA(1),h=function(){var v=o.LA(0),m=o.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:l,previous:v,ruleName:o.getCurrRuleFullName()}),R=new ste.MismatchedTokenException(m,l,o.LA(0));R.resyncedTokens=(0,mI.default)(u),o.SAVE_ERROR(R)};!c;)if(this.tokenMatcher(f,i)){h();return}else if(n.call(this)){h(),e.apply(this,r);return}else this.tokenMatcher(f,a)?c=!0:(f=this.SKIP_TOKEN(),this.addToResyncTokens(f,u));this.importLexerState(s)},t.prototype.shouldInRepetitionRecoveryBeTried=function(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))},t.prototype.getFollowsForInRuleRecovery=function(e,r){var n=this.getCurrentGrammarPath(e,r),i=this.getNextPossibleTokenTypes(n);return i},t.prototype.tryInRuleRecovery=function(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r)){var n=this.getTokenToInsert(e);return n}if(this.canRecoverWithSingleTokenDeletion(e)){var i=this.SKIP_TOKEN();return this.consumeToken(),i}throw new yI("sad sad panda")},t.prototype.canPerformInRuleRecovery=function(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)},t.prototype.canRecoverWithSingleTokenInsertion=function(e,r){var n=this;if(!this.canTokenTypeBeInsertedInRecovery(e)||(0,rte.default)(r))return!1;var i=this.LA(1),o=(0,gI.default)(r,function(a){return n.tokenMatcher(i,a)})!==void 0;return o},t.prototype.canRecoverWithSingleTokenDeletion=function(e){if(!this.canTokenTypeBeDeletedInRecovery(e))return!1;var r=this.tokenMatcher(this.LA(2),e);return r},t.prototype.isInCurrentRuleReSyncSet=function(e){var r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return(0,ote.default)(n,e)},t.prototype.findReSyncTokenType=function(){for(var e=this.flattenFollowSet(),r=this.LA(1),n=2;;){var i=(0,gI.default)(e,function(o){var a=(0,rc.tokenMatcher)(r,o);return a});if(i!==void 0)return i;r=this.LA(n),n++}},t.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return Tt.EOF_FOLLOW_KEY;var e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}},t.prototype.buildFullFollowKeyStack=function(){var e=this,r=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return(0,kv.default)(r,function(i,o){return o===0?Tt.EOF_FOLLOW_KEY:{ruleName:e.shortRuleNameToFullName(i),idxInCallingRule:n[o],inRule:e.shortRuleNameToFullName(r[o-1])}})},t.prototype.flattenFollowSet=function(){var e=this,r=(0,kv.default)(this.buildFullFollowKeyStack(),function(n){return e.getFollowSetFromFollowKey(n)});return(0,nte.default)(r)},t.prototype.getFollowSetFromFollowKey=function(e){if(e===Tt.EOF_FOLLOW_KEY)return[rc.EOF];var r=e.ruleName+e.idxInCallingRule+ute.IN+e.inRule;return this.resyncFollows[r]},t.prototype.addToResyncTokens=function(e,r){return this.tokenMatcher(e,rc.EOF)||r.push(e),r},t.prototype.reSyncTo=function(e){for(var r=[],n=this.LA(1);this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return(0,mI.default)(r)},t.prototype.attemptInRepetitionRecovery=function(e,r,n,i,o,a,s){},t.prototype.getCurrentGrammarPath=function(e,r){var n=this.getHumanReadableRuleStack(),i=(0,ate.default)(this.RULE_OCCURRENCE_STACK),o={ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r};return o},t.prototype.getHumanReadableRuleStack=function(){var e=this;return(0,kv.default)(this.RULE_STACK,function(r){return e.shortRuleNameToFullName(r)})},t}();Tt.Recoverable=lte;function vI(t,e,r,n,i,o,a){var s=this.getKeyForAutomaticLookahead(n,i),u=this.firstAfterRepMap[s];if(u===void 0){var c=this.getCurrRuleFullName(),l=this.getGAstProductions()[c],f=new o(l,i);u=f.startWalking(),this.firstAfterRepMap[s]=u}var h=u.token,v=u.occurrence,m=u.isEndOfRule;this.RULE_STACK.length===1&&m&&h===void 0&&(h=rc.EOF,v=1),!(h===void 0||v===void 0)&&this.shouldInRepetitionRecoveryBeTried(h,v,a)&&this.tryInRepetitionRecovery(t,e,r,h)}Tt.attemptInRepetitionRecovery=vI});var Tf=d(Ee=>{"use strict";Object.defineProperty(Ee,"__esModule",{value:!0});Ee.getKeyForAutomaticLookahead=Ee.AT_LEAST_ONE_SEP_IDX=Ee.MANY_SEP_IDX=Ee.AT_LEAST_ONE_IDX=Ee.MANY_IDX=Ee.OPTION_IDX=Ee.OR_IDX=Ee.BITS_FOR_ALT_IDX=Ee.BITS_FOR_RULE_IDX=Ee.BITS_FOR_OCCURRENCE_IDX=Ee.BITS_FOR_METHOD_TYPE=void 0;Ee.BITS_FOR_METHOD_TYPE=4;Ee.BITS_FOR_OCCURRENCE_IDX=8;Ee.BITS_FOR_RULE_IDX=12;Ee.BITS_FOR_ALT_IDX=8;Ee.OR_IDX=1<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.OPTION_IDX=2<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.MANY_IDX=3<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.AT_LEAST_ONE_IDX=4<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.MANY_SEP_IDX=5<<Ee.BITS_FOR_OCCURRENCE_IDX;Ee.AT_LEAST_ONE_SEP_IDX=6<<Ee.BITS_FOR_OCCURRENCE_IDX;function dte(t,e,r){return r|e|t}Ee.getKeyForAutomaticLookahead=dte;var fhe=32-Ee.BITS_FOR_ALT_IDX});var Dv=d(io=>{"use strict";var Rf=io&&io.__spreadArray||function(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))},_I=io&&io.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(io,"__esModule",{value:!0});io.LLkLookaheadStrategy=void 0;var Ov=_I(ff()),fte=_I(Sr()),Af=ls(),pte=vr(),bf=ec(),nc=ds(),hte=function(){function t(e){var r;this.maxLookahead=(r=e?.maxLookahead)!==null&&r!==void 0?r:pte.DEFAULT_PARSER_CONFIG.maxLookahead}return t.prototype.validate=function(e){var r=this.validateNoLeftRecursion(e.rules);if((0,fte.default)(r)){var n=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead),a=Rf(Rf(Rf(Rf([],r,!0),n,!0),i,!0),o,!0);return a}return r},t.prototype.validateNoLeftRecursion=function(e){return(0,Ov.default)(e,function(r){return(0,bf.validateNoLeftRecursion)(r,r,Af.defaultGrammarValidatorErrorProvider)})},t.prototype.validateEmptyOrAlternatives=function(e){return(0,Ov.default)(e,function(r){return(0,bf.validateEmptyOrAlternative)(r,Af.defaultGrammarValidatorErrorProvider)})},t.prototype.validateAmbiguousAlternationAlternatives=function(e,r){return(0,Ov.default)(e,function(n){return(0,bf.validateAmbiguousAlternationAlternatives)(n,r,Af.defaultGrammarValidatorErrorProvider)})},t.prototype.validateSomeNonEmptyLookaheadPath=function(e,r){return(0,bf.validateSomeNonEmptyLookaheadPath)(e,r,Af.defaultGrammarValidatorErrorProvider)},t.prototype.buildLookaheadForAlternation=function(e){return(0,nc.buildLookaheadFuncForOr)(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,nc.buildAlternativesLookAheadFunc)},t.prototype.buildLookaheadForOptional=function(e){return(0,nc.buildLookaheadFuncForOptionalProd)(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,(0,nc.getProdType)(e.prodType),nc.buildSingleAlternativeLookaheadFunction)},t}();io.LLkLookaheadStrategy=hte});var bI=d(Kn=>{"use strict";var mte=Kn&&Kn.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),RI=Kn&&Kn.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Kn,"__esModule",{value:!0});Kn.collectMethods=Kn.LooksAhead=void 0;var Uo=RI(Lt()),Iv=RI(Er()),TI=vr(),Ei=Tf(),gte=lt(),hs=lt(),yte=Dv(),vte=function(){function t(){}return t.prototype.initLooksAhead=function(e){this.dynamicTokensEnabled=(0,Iv.default)(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:TI.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=(0,Iv.default)(e,"maxLookahead")?e.maxLookahead:TI.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookaheadStrategy=(0,Iv.default)(e,"lookaheadStrategy")?e.lookaheadStrategy:new yte.LLkLookaheadStrategy({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map},t.prototype.preComputeLookaheadFunctions=function(e){var r=this;(0,Uo.default)(e,function(n){r.TRACE_INIT("".concat(n.name," Rule Lookahead"),function(){var i=AI(n),o=i.alternation,a=i.repetition,s=i.option,u=i.repetitionMandatory,c=i.repetitionMandatoryWithSeparator,l=i.repetitionWithSeparator;(0,Uo.default)(o,function(f){var h=f.idx===0?"":f.idx;r.TRACE_INIT("".concat((0,hs.getProductionDslName)(f)).concat(h),function(){var v=r.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:f.idx,rule:n,maxLookahead:f.maxLookahead||r.maxLookahead,hasPredicates:f.hasPredicates,dynamicTokensEnabled:r.dynamicTokensEnabled}),m=(0,Ei.getKeyForAutomaticLookahead)(r.fullRuleNameToShort[n.name],Ei.OR_IDX,f.idx);r.setLaFuncCache(m,v)})}),(0,Uo.default)(a,function(f){r.computeLookaheadFunc(n,f.idx,Ei.MANY_IDX,"Repetition",f.maxLookahead,(0,hs.getProductionDslName)(f))}),(0,Uo.default)(s,function(f){r.computeLookaheadFunc(n,f.idx,Ei.OPTION_IDX,"Option",f.maxLookahead,(0,hs.getProductionDslName)(f))}),(0,Uo.default)(u,function(f){r.computeLookaheadFunc(n,f.idx,Ei.AT_LEAST_ONE_IDX,"RepetitionMandatory",f.maxLookahead,(0,hs.getProductionDslName)(f))}),(0,Uo.default)(c,function(f){r.computeLookaheadFunc(n,f.idx,Ei.AT_LEAST_ONE_SEP_IDX,"RepetitionMandatoryWithSeparator",f.maxLookahead,(0,hs.getProductionDslName)(f))}),(0,Uo.default)(l,function(f){r.computeLookaheadFunc(n,f.idx,Ei.MANY_SEP_IDX,"RepetitionWithSeparator",f.maxLookahead,(0,hs.getProductionDslName)(f))})})})},t.prototype.computeLookaheadFunc=function(e,r,n,i,o,a){var s=this;this.TRACE_INIT("".concat(a).concat(r===0?"":r),function(){var u=s.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||s.maxLookahead,dynamicTokensEnabled:s.dynamicTokensEnabled,prodType:i}),c=(0,Ei.getKeyForAutomaticLookahead)(s.fullRuleNameToShort[e.name],n,r);s.setLaFuncCache(c,u)})},t.prototype.getKeyForAutomaticLookahead=function(e,r){var n=this.getLastExplicitRuleShortName();return(0,Ei.getKeyForAutomaticLookahead)(n,e,r)},t.prototype.getLaFuncFromCache=function(e){return this.lookAheadFuncsCache.get(e)},t.prototype.setLaFuncCache=function(e,r){this.lookAheadFuncsCache.set(e,r)},t}();Kn.LooksAhead=vte;var _te=function(t){mte(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},r}return e.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},e.prototype.visitOption=function(r){this.dslMethods.option.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.dslMethods.repetitionWithSeparator.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.dslMethods.repetitionMandatory.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.dslMethods.repetitionMandatoryWithSeparator.push(r)},e.prototype.visitRepetition=function(r){this.dslMethods.repetition.push(r)},e.prototype.visitAlternation=function(r){this.dslMethods.alternation.push(r)},e}(gte.GAstVisitor),Sf=new _te;function AI(t){Sf.reset(),t.accept(Sf);var e=Sf.dslMethods;return Sf.reset(),e}Kn.collectMethods=AI});var SI=d(Bn=>{"use strict";Object.defineProperty(Bn,"__esModule",{value:!0});Bn.addNoneTerminalToCst=Bn.addTerminalToCst=Bn.setNodeLocationFull=Bn.setNodeLocationOnlyOffset=void 0;function Tte(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}Bn.setNodeLocationOnlyOffset=Tte;function Rte(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}Bn.setNodeLocationFull=Rte;function Ate(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}Bn.addTerminalToCst=Ate;function bte(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}Bn.addNoneTerminalToCst=bte});var CI=d(Cf=>{"use strict";Object.defineProperty(Cf,"__esModule",{value:!0});Cf.defineNameProp=void 0;var Ste="name";function Cte(t,e){Object.defineProperty(t,Ste,{enumerable:!1,configurable:!0,writable:!1,value:e})}Cf.defineNameProp=Cte});var DI=d(Bt=>{"use strict";var Pi=Bt&&Bt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.validateMissingCstMethods=Bt.validateVisitor=Bt.CstVisitorDefinitionError=Bt.createBaseVisitorConstructorWithDefaults=Bt.createBaseSemanticVisitorConstructor=Bt.defaultVisit=void 0;var Ete=Pi(Sr()),Pte=Pi(Ku()),Nte=Pi(we()),EI=Pi(qt()),kte=Pi(Lt()),wte=Pi(Bu()),Ote=Pi(Cr()),Dte=Pi($a()),Ite=Pi(Oo()),PI=CI();function NI(t,e){for(var r=(0,Ote.default)(t),n=r.length,i=0;i<n;i++)for(var o=r[i],a=t[o],s=a.length,u=0;u<s;u++){var c=a[u];c.tokenTypeIdx===void 0&&this[c.name](c.children,e)}}Bt.defaultVisit=NI;function xte(t,e){var r=function(){};(0,PI.defineNameProp)(r,t+"BaseSemantics");var n={visit:function(i,o){if((0,Nte.default)(i)&&(i=i[0]),!(0,Ite.default)(i))return this[i.name](i.children,o)},validateVisitor:function(){var i=wI(this,e);if(!(0,Ete.default)(i)){var o=(0,EI.default)(i,function(a){return a.msg});throw Error("Errors Detected in CST Visitor <".concat(this.constructor.name,`>:
	`)+"".concat(o.join(`

`).replace(/\n/g,`
	`)))}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}Bt.createBaseSemanticVisitorConstructor=xte;function qte(t,e,r){var n=function(){};(0,PI.defineNameProp)(n,t+"BaseSemanticsWithDefaults");var i=Object.create(r.prototype);return(0,kte.default)(e,function(o){i[o]=NI}),n.prototype=i,n.prototype.constructor=n,n}Bt.createBaseVisitorConstructorWithDefaults=qte;var kI;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(kI=Bt.CstVisitorDefinitionError||(Bt.CstVisitorDefinitionError={}));function wI(t,e){var r=OI(t,e);return r}Bt.validateVisitor=wI;function OI(t,e){var r=(0,wte.default)(e,function(i){return(0,Dte.default)(t[i])===!1}),n=(0,EI.default)(r,function(i){return{msg:"Missing visitor method: <".concat(i,"> on ").concat(t.constructor.name," CST Visitor."),type:kI.MISSING_METHOD,methodName:i}});return(0,Pte.default)(n)}Bt.validateMissingCstMethods=OI});var LI=d(gs=>{"use strict";var Ef=gs&&gs.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(gs,"__esModule",{value:!0});gs.TreeBuilder=void 0;var ms=SI(),cr=Ef(Bd()),Lte=Ef(Er()),II=Ef(Cr()),xI=Ef(Oo()),qI=DI(),Mte=vr(),$te=function(){function t(){}return t.prototype.initTreeBuilder=function(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=(0,Lte.default)(e,"nodeLocationTracking")?e.nodeLocationTracking:Mte.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=cr.default,this.cstFinallyStateUpdate=cr.default,this.cstPostTerminal=cr.default,this.cstPostNonTerminal=cr.default,this.cstPostRule=cr.default;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=ms.setNodeLocationFull,this.setNodeLocationFromNode=ms.setNodeLocationFull,this.cstPostRule=cr.default,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=cr.default,this.setNodeLocationFromNode=cr.default,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=ms.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=ms.setNodeLocationOnlyOffset,this.cstPostRule=cr.default,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=cr.default,this.setNodeLocationFromNode=cr.default,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=cr.default,this.setNodeLocationFromNode=cr.default,this.cstPostRule=cr.default,this.setInitialNodeLocation=cr.default;else throw Error('Invalid <nodeLocationTracking> config option: "'.concat(e.nodeLocationTracking,'"'))},t.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(e){e.location={startOffset:NaN,endOffset:NaN}},t.prototype.setInitialNodeLocationOnlyOffsetRegular=function(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},t.prototype.setInitialNodeLocationFullRecovery=function(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.setInitialNodeLocationFullRegular=function(e){var r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.cstInvocationStateUpdate=function(e){var r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)},t.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},t.prototype.cstPostRuleFull=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)},t.prototype.cstPostRuleOnlyOffset=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN},t.prototype.cstPostTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];(0,ms.addTerminalToCst)(n,r,e),this.setNodeLocationFromToken(n.location,r)},t.prototype.cstPostNonTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];(0,ms.addNoneTerminalToCst)(n,r,e),this.setNodeLocationFromNode(n.location,e.location)},t.prototype.getBaseCstVisitorConstructor=function(){if((0,xI.default)(this.baseCstVisitorConstructor)){var e=(0,qI.createBaseSemanticVisitorConstructor)(this.className,(0,II.default)(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor},t.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if((0,xI.default)(this.baseCstVisitorWithDefaultsConstructor)){var e=(0,qI.createBaseVisitorConstructorWithDefaults)(this.className,(0,II.default)(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor},t.prototype.getLastExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-1]},t.prototype.getPreviousExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-2]},t.prototype.getLastExplicitRuleOccurrenceIndex=function(){var e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]},t}();gs.TreeBuilder=$te});var $I=d(Pf=>{"use strict";Object.defineProperty(Pf,"__esModule",{value:!0});Pf.LexerAdapter=void 0;var MI=vr(),Fte=function(){function t(){}return t.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(t.prototype,"input",{get:function(){return this.tokVector},set:function(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length},enumerable:!1,configurable:!0}),t.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):MI.END_OF_FILE},t.prototype.LA=function(e){var r=this.currIdx+e;return r<0||this.tokVectorLength<=r?MI.END_OF_FILE:this.tokVector[r]},t.prototype.consumeToken=function(){this.currIdx++},t.prototype.exportLexerState=function(){return this.currIdx},t.prototype.importLexerState=function(e){this.currIdx=e},t.prototype.resetLexerState=function(){this.currIdx=-1},t.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},t.prototype.getLexerPosition=function(){return this.exportLexerState()},t}();Pf.LexerAdapter=Fte});var jI=d(ys=>{"use strict";var FI=ys&&ys.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ys,"__esModule",{value:!0});ys.RecognizerApi=void 0;var jte=FI(Ln()),Gte=FI(yi()),Ute=ps(),xv=vr(),Hte=ls(),Wte=ec(),Kte=lt(),Bte=function(){function t(){}return t.prototype.ACTION=function(e){return e.call(this)},t.prototype.consume=function(e,r,n){return this.consumeInternal(r,e,n)},t.prototype.subrule=function(e,r,n){return this.subruleInternal(r,e,n)},t.prototype.option=function(e,r){return this.optionInternal(r,e)},t.prototype.or=function(e,r){return this.orInternal(r,e)},t.prototype.many=function(e,r){return this.manyInternal(e,r)},t.prototype.atLeastOne=function(e,r){return this.atLeastOneInternal(e,r)},t.prototype.CONSUME=function(e,r){return this.consumeInternal(e,0,r)},t.prototype.CONSUME1=function(e,r){return this.consumeInternal(e,1,r)},t.prototype.CONSUME2=function(e,r){return this.consumeInternal(e,2,r)},t.prototype.CONSUME3=function(e,r){return this.consumeInternal(e,3,r)},t.prototype.CONSUME4=function(e,r){return this.consumeInternal(e,4,r)},t.prototype.CONSUME5=function(e,r){return this.consumeInternal(e,5,r)},t.prototype.CONSUME6=function(e,r){return this.consumeInternal(e,6,r)},t.prototype.CONSUME7=function(e,r){return this.consumeInternal(e,7,r)},t.prototype.CONSUME8=function(e,r){return this.consumeInternal(e,8,r)},t.prototype.CONSUME9=function(e,r){return this.consumeInternal(e,9,r)},t.prototype.SUBRULE=function(e,r){return this.subruleInternal(e,0,r)},t.prototype.SUBRULE1=function(e,r){return this.subruleInternal(e,1,r)},t.prototype.SUBRULE2=function(e,r){return this.subruleInternal(e,2,r)},t.prototype.SUBRULE3=function(e,r){return this.subruleInternal(e,3,r)},t.prototype.SUBRULE4=function(e,r){return this.subruleInternal(e,4,r)},t.prototype.SUBRULE5=function(e,r){return this.subruleInternal(e,5,r)},t.prototype.SUBRULE6=function(e,r){return this.subruleInternal(e,6,r)},t.prototype.SUBRULE7=function(e,r){return this.subruleInternal(e,7,r)},t.prototype.SUBRULE8=function(e,r){return this.subruleInternal(e,8,r)},t.prototype.SUBRULE9=function(e,r){return this.subruleInternal(e,9,r)},t.prototype.OPTION=function(e){return this.optionInternal(e,0)},t.prototype.OPTION1=function(e){return this.optionInternal(e,1)},t.prototype.OPTION2=function(e){return this.optionInternal(e,2)},t.prototype.OPTION3=function(e){return this.optionInternal(e,3)},t.prototype.OPTION4=function(e){return this.optionInternal(e,4)},t.prototype.OPTION5=function(e){return this.optionInternal(e,5)},t.prototype.OPTION6=function(e){return this.optionInternal(e,6)},t.prototype.OPTION7=function(e){return this.optionInternal(e,7)},t.prototype.OPTION8=function(e){return this.optionInternal(e,8)},t.prototype.OPTION9=function(e){return this.optionInternal(e,9)},t.prototype.OR=function(e){return this.orInternal(e,0)},t.prototype.OR1=function(e){return this.orInternal(e,1)},t.prototype.OR2=function(e){return this.orInternal(e,2)},t.prototype.OR3=function(e){return this.orInternal(e,3)},t.prototype.OR4=function(e){return this.orInternal(e,4)},t.prototype.OR5=function(e){return this.orInternal(e,5)},t.prototype.OR6=function(e){return this.orInternal(e,6)},t.prototype.OR7=function(e){return this.orInternal(e,7)},t.prototype.OR8=function(e){return this.orInternal(e,8)},t.prototype.OR9=function(e){return this.orInternal(e,9)},t.prototype.MANY=function(e){this.manyInternal(0,e)},t.prototype.MANY1=function(e){this.manyInternal(1,e)},t.prototype.MANY2=function(e){this.manyInternal(2,e)},t.prototype.MANY3=function(e){this.manyInternal(3,e)},t.prototype.MANY4=function(e){this.manyInternal(4,e)},t.prototype.MANY5=function(e){this.manyInternal(5,e)},t.prototype.MANY6=function(e){this.manyInternal(6,e)},t.prototype.MANY7=function(e){this.manyInternal(7,e)},t.prototype.MANY8=function(e){this.manyInternal(8,e)},t.prototype.MANY9=function(e){this.manyInternal(9,e)},t.prototype.MANY_SEP=function(e){this.manySepFirstInternal(0,e)},t.prototype.MANY_SEP1=function(e){this.manySepFirstInternal(1,e)},t.prototype.MANY_SEP2=function(e){this.manySepFirstInternal(2,e)},t.prototype.MANY_SEP3=function(e){this.manySepFirstInternal(3,e)},t.prototype.MANY_SEP4=function(e){this.manySepFirstInternal(4,e)},t.prototype.MANY_SEP5=function(e){this.manySepFirstInternal(5,e)},t.prototype.MANY_SEP6=function(e){this.manySepFirstInternal(6,e)},t.prototype.MANY_SEP7=function(e){this.manySepFirstInternal(7,e)},t.prototype.MANY_SEP8=function(e){this.manySepFirstInternal(8,e)},t.prototype.MANY_SEP9=function(e){this.manySepFirstInternal(9,e)},t.prototype.AT_LEAST_ONE=function(e){this.atLeastOneInternal(0,e)},t.prototype.AT_LEAST_ONE1=function(e){return this.atLeastOneInternal(1,e)},t.prototype.AT_LEAST_ONE2=function(e){this.atLeastOneInternal(2,e)},t.prototype.AT_LEAST_ONE3=function(e){this.atLeastOneInternal(3,e)},t.prototype.AT_LEAST_ONE4=function(e){this.atLeastOneInternal(4,e)},t.prototype.AT_LEAST_ONE5=function(e){this.atLeastOneInternal(5,e)},t.prototype.AT_LEAST_ONE6=function(e){this.atLeastOneInternal(6,e)},t.prototype.AT_LEAST_ONE7=function(e){this.atLeastOneInternal(7,e)},t.prototype.AT_LEAST_ONE8=function(e){this.atLeastOneInternal(8,e)},t.prototype.AT_LEAST_ONE9=function(e){this.atLeastOneInternal(9,e)},t.prototype.AT_LEAST_ONE_SEP=function(e){this.atLeastOneSepFirstInternal(0,e)},t.prototype.AT_LEAST_ONE_SEP1=function(e){this.atLeastOneSepFirstInternal(1,e)},t.prototype.AT_LEAST_ONE_SEP2=function(e){this.atLeastOneSepFirstInternal(2,e)},t.prototype.AT_LEAST_ONE_SEP3=function(e){this.atLeastOneSepFirstInternal(3,e)},t.prototype.AT_LEAST_ONE_SEP4=function(e){this.atLeastOneSepFirstInternal(4,e)},t.prototype.AT_LEAST_ONE_SEP5=function(e){this.atLeastOneSepFirstInternal(5,e)},t.prototype.AT_LEAST_ONE_SEP6=function(e){this.atLeastOneSepFirstInternal(6,e)},t.prototype.AT_LEAST_ONE_SEP7=function(e){this.atLeastOneSepFirstInternal(7,e)},t.prototype.AT_LEAST_ONE_SEP8=function(e){this.atLeastOneSepFirstInternal(8,e)},t.prototype.AT_LEAST_ONE_SEP9=function(e){this.atLeastOneSepFirstInternal(9,e)},t.prototype.RULE=function(e,r,n){if(n===void 0&&(n=xv.DEFAULT_RULE_CONFIG),(0,Gte.default)(this.definedRulesNames,e)){var i=Hte.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),o={message:i,type:xv.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(o)}this.definedRulesNames.push(e);var a=this.defineRule(e,r,n);return this[e]=a,a},t.prototype.OVERRIDE_RULE=function(e,r,n){n===void 0&&(n=xv.DEFAULT_RULE_CONFIG);var i=(0,Wte.validateRuleIsOverridden)(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);var o=this.defineRule(e,r,n);return this[e]=o,o},t.prototype.BACKTRACK=function(e,r){return function(){this.isBackTrackingStack.push(1);var n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if((0,Ute.isRecognitionException)(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}},t.prototype.getGAstProductions=function(){return this.gastProductionsCache},t.prototype.getSerializedGastProductions=function(){return(0,Kte.serializeGrammar)((0,jte.default)(this.gastProductionsCache))},t}();ys.RecognizerApi=Bte});var VI=d(_s=>{"use strict";var zn=_s&&_s.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(_s,"__esModule",{value:!0});_s.RecognizerEngine=void 0;var GI=zn(Sr()),qv=zn(we()),Lv=zn(gn()),UI=zn(Wu()),zte=zn(zd()),Vte=zn(pn()),ic=zn(Er()),oc=zn(Ln()),HI=zn(vi()),WI=zn(mi()),Nr=Tf(),Nf=ps(),KI=ds(),vs=Ju(),BI=vr(),Yte=wv(),zI=qo(),ac=xo(),Xte=function(){function t(){}return t.prototype.initRecognizerEngine=function(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=ac.tokenStructuredMatcherNoCategories,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},(0,ic.default)(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if((0,qv.default)(e)){if((0,GI.default)(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if((0,qv.default)(e))this.tokensMap=(0,HI.default)(e,function(s,u){return s[u.name]=u,s},{});else if((0,ic.default)(e,"modes")&&(0,UI.default)((0,Lv.default)((0,oc.default)(e.modes)),ac.isTokenType)){var n=(0,Lv.default)((0,oc.default)(e.modes)),i=(0,zte.default)(n);this.tokensMap=(0,HI.default)(i,function(s,u){return s[u.name]=u,s},{})}else if((0,Vte.default)(e))this.tokensMap=(0,WI.default)(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=zI.EOF;var o=(0,ic.default)(e,"modes")?(0,Lv.default)((0,oc.default)(e.modes)):(0,oc.default)(e),a=(0,UI.default)(o,function(s){return(0,GI.default)(s.categoryMatches)});this.tokenMatcher=a?ac.tokenStructuredMatcherNoCategories:ac.tokenStructuredMatcher,(0,ac.augmentTokenTypes)((0,oc.default)(this.tokensMap))},t.prototype.defineRule=function(e,r,n){if(this.selfAnalysisDone)throw Error("Grammar rule <".concat(e,`> may not be defined after the 'performSelfAnalysis' method has been called'
`)+"Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");var i=(0,ic.default)(n,"resyncEnabled")?n.resyncEnabled:BI.DEFAULT_RULE_CONFIG.resyncEnabled,o=(0,ic.default)(n,"recoveryValueFunc")?n.recoveryValueFunc:BI.DEFAULT_RULE_CONFIG.recoveryValueFunc,a=this.ruleShortNameIdx<<Nr.BITS_FOR_METHOD_TYPE+Nr.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[a]=e,this.fullRuleNameToShort[e]=a;var s;this.outputCst===!0?s=function(){for(var l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];try{this.ruleInvocationStateUpdate(a,e,this.subruleIdx),r.apply(this,l);var h=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(h),h}catch(v){return this.invokeRuleCatch(v,i,o)}finally{this.ruleFinallyStateUpdate()}}:s=function(){for(var l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];try{return this.ruleInvocationStateUpdate(a,e,this.subruleIdx),r.apply(this,l)}catch(h){return this.invokeRuleCatch(h,i,o)}finally{this.ruleFinallyStateUpdate()}};var u=Object.assign(s,{ruleName:e,originalGrammarAction:r});return u},t.prototype.invokeRuleCatch=function(e,r,n){var i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if((0,Nf.isRecognitionException)(e)){var a=e;if(o){var s=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(s))if(a.resyncedTokens=this.reSyncTo(s),this.outputCst){var u=this.CST_STACK[this.CST_STACK.length-1];return u.recoveredNode=!0,u}else return n();else{if(this.outputCst){var u=this.CST_STACK[this.CST_STACK.length-1];u.recoveredNode=!0,a.partialCstResult=u}throw a}}else{if(i)return this.moveToTerminatedState(),n();throw a}}else throw e},t.prototype.optionInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(Nr.OPTION_IDX,r);return this.optionInternalLogic(e,r,n)},t.prototype.optionInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a;if(typeof e!="function"){a=e.DEF;var s=e.GATE;if(s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=e;if(o.call(this)===!0)return a.call(this)},t.prototype.atLeastOneInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(Nr.AT_LEAST_ONE_IDX,e);return this.atLeastOneInternalLogic(e,r,n)},t.prototype.atLeastOneInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a;if(typeof r!="function"){a=r.DEF;var s=r.GATE;if(s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=r;if(o.call(this)===!0)for(var c=this.doSingleRepetition(a);o.call(this)===!0&&c===!0;)c=this.doSingleRepetition(a);else throw this.raiseEarlyExitException(e,KI.PROD_TYPE.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],o,Nr.AT_LEAST_ONE_IDX,e,vs.NextTerminalAfterAtLeastOneWalker)},t.prototype.atLeastOneSepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(Nr.AT_LEAST_ONE_SEP_IDX,e);this.atLeastOneSepFirstInternalLogic(e,r,n)},t.prototype.atLeastOneSepFirstInternalLogic=function(e,r,n){var i=this,o=r.DEF,a=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){o.call(this);for(var u=function(){return i.tokenMatcher(i.LA(1),a)};this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,u,o,vs.NextTerminalAfterAtLeastOneSepWalker],u,Nr.AT_LEAST_ONE_SEP_IDX,e,vs.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(e,KI.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)},t.prototype.manyInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(Nr.MANY_IDX,e);return this.manyInternalLogic(e,r,n)},t.prototype.manyInternalLogic=function(e,r,n){var i=this,o=this.getLaFuncFromCache(n),a;if(typeof r!="function"){a=r.DEF;var s=r.GATE;if(s!==void 0){var u=o;o=function(){return s.call(i)&&u.call(i)}}}else a=r;for(var c=!0;o.call(this)===!0&&c===!0;)c=this.doSingleRepetition(a);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],o,Nr.MANY_IDX,e,vs.NextTerminalAfterManyWalker,c)},t.prototype.manySepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(Nr.MANY_SEP_IDX,e);this.manySepFirstInternalLogic(e,r,n)},t.prototype.manySepFirstInternalLogic=function(e,r,n){var i=this,o=r.DEF,a=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){o.call(this);for(var u=function(){return i.tokenMatcher(i.LA(1),a)};this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),o.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,a,u,o,vs.NextTerminalAfterManySepWalker],u,Nr.MANY_SEP_IDX,e,vs.NextTerminalAfterManySepWalker)}},t.prototype.repetitionSepSecondInternal=function(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,Nr.AT_LEAST_ONE_SEP_IDX,e,o)},t.prototype.doSingleRepetition=function(e){var r=this.getLexerPosition();e.call(this);var n=this.getLexerPosition();return n>r},t.prototype.orInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(Nr.OR_IDX,r),i=(0,qv.default)(e)?e:e.DEF,o=this.getLaFuncFromCache(n),a=o.call(this,i);if(a!==void 0){var s=i[a];return s.ALT.call(this)}this.raiseNoAltException(r,e.ERR_MSG)},t.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new Nf.NotAllInputParsedException(r,e))}},t.prototype.subruleInternal=function(e,r,n){var i;try{var o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,i=e.apply(this,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(a){throw this.subruleInternalError(a,n,e.ruleName)}},t.prototype.subruleInternalError=function(e,r,n){throw(0,Nf.isRecognitionException)(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e},t.prototype.consumeInternal=function(e,r,n){var i;try{var o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(a){i=this.consumeInternalRecovery(e,r,a)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i},t.prototype.consumeInternalError=function(e,r,n){var i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Nf.MismatchedTokenException(i,r,o))},t.prototype.consumeInternalRecovery=function(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){var i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===Yte.IN_RULE_RECOVERY_EXCEPTION?n:o}}else throw n},t.prototype.saveRecogState=function(){var e=this.errors,r=(0,WI.default)(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}},t.prototype.reloadRecogState=function(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK},t.prototype.ruleInvocationStateUpdate=function(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)},t.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},t.prototype.getCurrRuleFullName=function(){var e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]},t.prototype.shortRuleNameToFullName=function(e){return this.shortRuleNameToFull[e]},t.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),zI.EOF)},t.prototype.reset=function(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},t}();_s.RecognizerEngine=Xte});var QI=d(Ts=>{"use strict";var JI=Ts&&Ts.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ts,"__esModule",{value:!0});Ts.ErrorHandler=void 0;var Mv=ps(),Jte=JI(Er()),YI=JI(mi()),XI=ds(),Qte=vr(),Zte=function(){function t(){}return t.prototype.initErrorHandler=function(e){this._errors=[],this.errorMessageProvider=(0,Jte.default)(e,"errorMessageProvider")?e.errorMessageProvider:Qte.DEFAULT_PARSER_CONFIG.errorMessageProvider},t.prototype.SAVE_ERROR=function(e){if((0,Mv.isRecognitionException)(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:(0,YI.default)(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(t.prototype,"errors",{get:function(){return(0,YI.default)(this._errors)},set:function(e){this._errors=e},enumerable:!1,configurable:!0}),t.prototype.raiseEarlyExitException=function(e,r,n){for(var i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=(0,XI.getLookaheadPathsForOptionalProd)(e,o,r,this.maxLookahead),s=a[0],u=[],c=1;c<=this.maxLookahead;c++)u.push(this.LA(c));var l=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:s,actual:u,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new Mv.EarlyExitException(l,this.LA(1),this.LA(0)))},t.prototype.raiseNoAltException=function(e,r){for(var n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=(0,XI.getLookaheadPathsForOr)(e,i,this.maxLookahead),a=[],s=1;s<=this.maxLookahead;s++)a.push(this.LA(s));var u=this.LA(0),c=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:a,previous:u,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new Mv.NoViableAltException(c,this.LA(1),u))},t}();Ts.ErrorHandler=Zte});var tx=d(Rs=>{"use strict";var ex=Rs&&Rs.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Rs,"__esModule",{value:!0});Rs.ContentAssist=void 0;var ZI=Ju(),ere=ex(os()),tre=ex(Oo()),rre=function(){function t(){}return t.prototype.initContentAssist=function(){},t.prototype.computeContentAssist=function(e,r){var n=this.gastProductionsCache[e];if((0,tre.default)(n))throw Error("Rule ->".concat(e,"<- does not exist in this grammar."));return(0,ZI.nextPossibleTokensAfter)([n],r,this.tokenMatcher,this.maxLookahead)},t.prototype.getNextPossibleTokenTypes=function(e){var r=(0,ere.default)(e.ruleStack),n=this.getGAstProductions(),i=n[r],o=new ZI.NextAfterTokenWalker(i,e).startWalking();return o},t}();Rs.ContentAssist=rre});var lx=d(As=>{"use strict";var bs=As&&As.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(As,"__esModule",{value:!0});As.GastRecorder=void 0;var kf=bs(cf()),nre=bs(we()),ire=bs(Gd()),ore=bs(Lt()),ox=bs($a()),uc=bs(Er()),Vn=lt(),are=zu(),ax=xo(),sx=qo(),sre=vr(),ure=Tf(),Of={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Of);var rx=!0,nx=Math.pow(2,ure.BITS_FOR_OCCURRENCE_IDX)-1,ux=(0,sx.createToken)({name:"RECORDING_PHASE_TOKEN",pattern:are.Lexer.NA});(0,ax.augmentTokenTypes)([ux]);var cx=(0,sx.createTokenInstance)(ux,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(cx);var cre={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},lre=function(){function t(){}return t.prototype.initGastRecorder=function(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1},t.prototype.enableRecording=function(){var e=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var r=function(i){var o=i>0?i:"";e["CONSUME".concat(o)]=function(a,s){return this.consumeInternalRecord(a,i,s)},e["SUBRULE".concat(o)]=function(a,s){return this.subruleInternalRecord(a,i,s)},e["OPTION".concat(o)]=function(a){return this.optionInternalRecord(a,i)},e["OR".concat(o)]=function(a){return this.orInternalRecord(a,i)},e["MANY".concat(o)]=function(a){this.manyInternalRecord(i,a)},e["MANY_SEP".concat(o)]=function(a){this.manySepFirstInternalRecord(i,a)},e["AT_LEAST_ONE".concat(o)]=function(a){this.atLeastOneInternalRecord(i,a)},e["AT_LEAST_ONE_SEP".concat(o)]=function(a){this.atLeastOneSepFirstInternalRecord(i,a)}},n=0;n<10;n++)r(n);e.consume=function(i,o,a){return this.consumeInternalRecord(o,i,a)},e.subrule=function(i,o,a){return this.subruleInternalRecord(o,i,a)},e.option=function(i,o){return this.optionInternalRecord(o,i)},e.or=function(i,o){return this.orInternalRecord(o,i)},e.many=function(i,o){this.manyInternalRecord(i,o)},e.atLeastOne=function(i,o){this.atLeastOneInternalRecord(i,o)},e.ACTION=e.ACTION_RECORD,e.BACKTRACK=e.BACKTRACK_RECORD,e.LA=e.LA_RECORD})},t.prototype.disableRecording=function(){var e=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var r=e,n=0;n<10;n++){var i=n>0?n:"";delete r["CONSUME".concat(i)],delete r["SUBRULE".concat(i)],delete r["OPTION".concat(i)],delete r["OR".concat(i)],delete r["MANY".concat(i)],delete r["MANY_SEP".concat(i)],delete r["AT_LEAST_ONE".concat(i)],delete r["AT_LEAST_ONE_SEP".concat(i)]}delete r.consume,delete r.subrule,delete r.option,delete r.or,delete r.many,delete r.atLeastOne,delete r.ACTION,delete r.BACKTRACK,delete r.LA})},t.prototype.ACTION_RECORD=function(e){},t.prototype.BACKTRACK_RECORD=function(e,r){return function(){return!0}},t.prototype.LA_RECORD=function(e){return sre.END_OF_FILE},t.prototype.topLevelRuleRecord=function(e,r){try{var n=new Vn.Rule({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(i){if(i.KNOWN_RECORDER_ERROR!==!0)try{i.message=i.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw i}throw i}},t.prototype.optionInternalRecord=function(e,r){return sc.call(this,Vn.Option,e,r)},t.prototype.atLeastOneInternalRecord=function(e,r){sc.call(this,Vn.RepetitionMandatory,r,e)},t.prototype.atLeastOneSepFirstInternalRecord=function(e,r){sc.call(this,Vn.RepetitionMandatoryWithSeparator,r,e,rx)},t.prototype.manyInternalRecord=function(e,r){sc.call(this,Vn.Repetition,r,e)},t.prototype.manySepFirstInternalRecord=function(e,r){sc.call(this,Vn.RepetitionWithSeparator,r,e,rx)},t.prototype.orInternalRecord=function(e,r){return dre.call(this,e,r)},t.prototype.subruleInternalRecord=function(e,r,n){if(wf(r),!e||(0,uc.default)(e,"ruleName")===!1){var i=new Error("<SUBRULE".concat(ix(r),"> argument is invalid")+" expecting a Parser method reference but got: <".concat(JSON.stringify(e),">")+`
 inside top level rule: <`.concat(this.recordingProdStack[0].name,">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var o=(0,kf.default)(this.recordingProdStack),a=e.ruleName,s=new Vn.NonTerminal({idx:r,nonTerminalName:a,label:n?.LABEL,referencedRule:void 0});return o.definition.push(s),this.outputCst?cre:Of},t.prototype.consumeInternalRecord=function(e,r,n){if(wf(r),!(0,ax.hasShortKeyProperty)(e)){var i=new Error("<CONSUME".concat(ix(r),"> argument is invalid")+" expecting a TokenType reference but got: <".concat(JSON.stringify(e),">")+`
 inside top level rule: <`.concat(this.recordingProdStack[0].name,">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var o=(0,kf.default)(this.recordingProdStack),a=new Vn.Terminal({idx:r,terminalType:e,label:n?.LABEL});return o.definition.push(a),cx},t}();As.GastRecorder=lre;function sc(t,e,r,n){n===void 0&&(n=!1),wf(r);var i=(0,kf.default)(this.recordingProdStack),o=(0,ox.default)(e)?e:e.DEF,a=new t({definition:[],idx:r});return n&&(a.separator=e.SEP),(0,uc.default)(e,"MAX_LOOKAHEAD")&&(a.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(a),o.call(this),i.definition.push(a),this.recordingProdStack.pop(),Of}function dre(t,e){var r=this;wf(e);var n=(0,kf.default)(this.recordingProdStack),i=(0,nre.default)(t)===!1,o=i===!1?t:t.DEF,a=new Vn.Alternation({definition:[],idx:e,ignoreAmbiguities:i&&t.IGNORE_AMBIGUITIES===!0});(0,uc.default)(t,"MAX_LOOKAHEAD")&&(a.maxLookahead=t.MAX_LOOKAHEAD);var s=(0,ire.default)(o,function(u){return(0,ox.default)(u.GATE)});return a.hasPredicates=s,n.definition.push(a),(0,ore.default)(o,function(u){var c=new Vn.Alternative({definition:[]});a.definition.push(c),(0,uc.default)(u,"IGNORE_AMBIGUITIES")?c.ignoreAmbiguities=u.IGNORE_AMBIGUITIES:(0,uc.default)(u,"GATE")&&(c.ignoreAmbiguities=!0),r.recordingProdStack.push(c),u.ALT.call(r),r.recordingProdStack.pop()}),Of}function ix(t){return t===0?"":"".concat(t)}function wf(t){if(t<0||t>nx){var e=new Error("Invalid DSL Method idx value: <".concat(t,`>
	`)+"Idx value must be a none negative value smaller than ".concat(nx+1));throw e.KNOWN_RECORDER_ERROR=!0,e}}});var dx=d(Ss=>{"use strict";var fre=Ss&&Ss.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ss,"__esModule",{value:!0});Ss.PerformanceTracer=void 0;var pre=fre(Er()),hre=ts(),mre=vr(),gre=function(){function t(){}return t.prototype.initPerformanceTracer=function(e){if((0,pre.default)(e,"traceInitPerf")){var r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=mre.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},t.prototype.TRACE_INIT=function(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;var n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log("".concat(n,"--> <").concat(e,">"));var i=(0,hre.timer)(r),o=i.time,a=i.value,s=o>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s("".concat(n,"<-- <").concat(e,"> time: ").concat(o,"ms")),this.traceInitIndent--,a}else return r()},t}();Ss.PerformanceTracer=gre});var fx=d(Df=>{"use strict";Object.defineProperty(Df,"__esModule",{value:!0});Df.applyMixins=void 0;function yre(t,e){e.forEach(function(r){var n=r.prototype;Object.getOwnPropertyNames(n).forEach(function(i){if(i!=="constructor"){var o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]}})})}Df.applyMixins=yre});var vr=d(Le=>{"use strict";var gx=Le&&Le.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Cs=Le&&Le.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Le,"__esModule",{value:!0});Le.EmbeddedActionsParser=Le.CstParser=Le.Parser=Le.EMPTY_ALT=Le.ParserDefinitionErrorType=Le.DEFAULT_RULE_CONFIG=Le.DEFAULT_PARSER_CONFIG=Le.END_OF_FILE=void 0;var $v=Cs(Sr()),vre=Cs(qt()),_re=Cs(Lt()),oo=Cs(Ln()),px=Cs(Er()),yx=Cs(mi()),Tre=ts(),Rre=Xw(),hx=qo(),vx=ls(),mx=cI(),Are=wv(),bre=bI(),Sre=LI(),Cre=$I(),Ere=jI(),Pre=VI(),Nre=QI(),kre=tx(),wre=lx(),Ore=dx(),Dre=fx(),Ire=ec();Le.END_OF_FILE=(0,hx.createTokenInstance)(hx.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Le.END_OF_FILE);Le.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:vx.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1});Le.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0});var xre;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(xre=Le.ParserDefinitionErrorType||(Le.ParserDefinitionErrorType={}));function qre(t){return t===void 0&&(t=void 0),function(){return t}}Le.EMPTY_ALT=qre;var If=function(){function t(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;var n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),(0,px.default)(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=(0,px.default)(r,"skipValidations")?r.skipValidations:Le.DEFAULT_PARSER_CONFIG.skipValidations}return t.performSelfAnalysis=function(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},t.prototype.performSelfAnalysis=function(){var e=this;this.TRACE_INIT("performSelfAnalysis",function(){var r;e.selfAnalysisDone=!0;var n=e.className;e.TRACE_INIT("toFastProps",function(){(0,Tre.toFastProperties)(e)}),e.TRACE_INIT("Grammar Recording",function(){try{e.enableRecording(),(0,_re.default)(e.definedRulesNames,function(o){var a=e[o],s=a.originalGrammarAction,u;e.TRACE_INIT("".concat(o," Rule"),function(){u=e.topLevelRuleRecord(o,s)}),e.gastProductionsCache[o]=u})}finally{e.disableRecording()}});var i=[];if(e.TRACE_INIT("Grammar Resolving",function(){i=(0,mx.resolveGrammar)({rules:(0,oo.default)(e.gastProductionsCache)}),e.definitionErrors=e.definitionErrors.concat(i)}),e.TRACE_INIT("Grammar Validations",function(){if((0,$v.default)(i)&&e.skipValidations===!1){var o=(0,mx.validateGrammar)({rules:(0,oo.default)(e.gastProductionsCache),tokenTypes:(0,oo.default)(e.tokensMap),errMsgProvider:vx.defaultGrammarValidatorErrorProvider,grammarName:n}),a=(0,Ire.validateLookahead)({lookaheadStrategy:e.lookaheadStrategy,rules:(0,oo.default)(e.gastProductionsCache),tokenTypes:(0,oo.default)(e.tokensMap),grammarName:n});e.definitionErrors=e.definitionErrors.concat(o,a)}}),(0,$v.default)(e.definitionErrors)&&(e.recoveryEnabled&&e.TRACE_INIT("computeAllProdsFollows",function(){var o=(0,Rre.computeAllProdsFollows)((0,oo.default)(e.gastProductionsCache));e.resyncFollows=o}),e.TRACE_INIT("ComputeLookaheadFunctions",function(){var o,a;(a=(o=e.lookaheadStrategy).initialize)===null||a===void 0||a.call(o,{rules:(0,oo.default)(e.gastProductionsCache)}),e.preComputeLookaheadFunctions((0,oo.default)(e.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!(0,$v.default)(e.definitionErrors))throw r=(0,vre.default)(e.definitionErrors,function(o){return o.message}),new Error(`Parser Definition Errors detected:
 `.concat(r.join(`
-------------------------------
`)))})},t.DEFER_DEFINITION_ERRORS_HANDLING=!1,t}();Le.Parser=If;(0,Dre.applyMixins)(If,[Are.Recoverable,bre.LooksAhead,Sre.TreeBuilder,Cre.LexerAdapter,Pre.RecognizerEngine,Ere.RecognizerApi,Nre.ErrorHandler,kre.ContentAssist,wre.GastRecorder,Ore.PerformanceTracer]);var Lre=function(t){gx(e,t);function e(r,n){n===void 0&&(n=Le.DEFAULT_PARSER_CONFIG);var i=(0,yx.default)(n);return i.outputCst=!0,t.call(this,r,i)||this}return e}(If);Le.CstParser=Lre;var Mre=function(t){gx(e,t);function e(r,n){n===void 0&&(n=Le.DEFAULT_PARSER_CONFIG);var i=(0,yx.default)(n);return i.outputCst=!1,t.call(this,r,i)||this}return e}(If);Le.EmbeddedActionsParser=Mre});var Tx=d(ao=>{"use strict";var $re=ao&&ao.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Es=ao&&ao.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ao,"__esModule",{value:!0});ao.buildModel=void 0;var _x=lt(),cc=Es(qt()),Fre=Es(gn()),jre=Es(Ln()),Gre=Es(Gd()),Ure=Es(mv()),Hre=Es(Uu());function Wre(t){var e=new Kre,r=(0,jre.default)(t);return(0,cc.default)(r,function(n){return e.visitRule(n)})}ao.buildModel=Wre;var Kre=function(t){$re(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.visitRule=function(r){var n=this.visitEach(r.definition),i=(0,Ure.default)(n,function(a){return a.propertyName}),o=(0,cc.default)(i,function(a,s){var u=!(0,Gre.default)(a,function(l){return!l.canBeNull}),c=a[0].type;return a.length>1&&(c=(0,cc.default)(a,function(l){return l.type})),{name:s,type:c,optional:u}});return{name:r.name,properties:o}},e.prototype.visitAlternative=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitOption=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitRepetition=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitRepetitionMandatory=function(r){return this.visitEach(r.definition)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){return this.visitEach(r.definition).concat({propertyName:r.separator.name,canBeNull:!0,type:xf(r.separator)})},e.prototype.visitRepetitionWithSeparator=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0}).concat({propertyName:r.separator.name,canBeNull:!0,type:xf(r.separator)})},e.prototype.visitAlternation=function(r){return this.visitEachAndOverrideWith(r.definition,{canBeNull:!0})},e.prototype.visitTerminal=function(r){return[{propertyName:r.label||r.terminalType.name,canBeNull:!1,type:xf(r)}]},e.prototype.visitNonTerminal=function(r){return[{propertyName:r.label||r.nonTerminalName,canBeNull:!1,type:xf(r)}]},e.prototype.visitEachAndOverrideWith=function(r,n){return(0,cc.default)(this.visitEach(r),function(i){return(0,Hre.default)({},i,n)})},e.prototype.visitEach=function(r){var n=this;return(0,Fre.default)((0,cc.default)(r,function(i){return n.visit(i)}))},e}(_x.GAstVisitor);function xf(t){return t instanceof _x.NonTerminal?{kind:"rule",name:t.referencedRule.name}:{kind:"token"}}});var Ax=d((whe,Rx)=>{var Bre=qd();function zre(t,e,r){var n=t.length;return r=r===void 0?n:r,!e&&r>=n?t:Bre(t,e,r)}Rx.exports=zre});var Fv=d((Ohe,bx)=>{var Vre="\\ud800-\\udfff",Yre="\\u0300-\\u036f",Xre="\\ufe20-\\ufe2f",Jre="\\u20d0-\\u20ff",Qre=Yre+Xre+Jre,Zre="\\ufe0e\\ufe0f",ene="\\u200d",tne=RegExp("["+ene+Vre+Qre+Zre+"]");function rne(t){return tne.test(t)}bx.exports=rne});var Cx=d((Dhe,Sx)=>{function nne(t){return t.split("")}Sx.exports=nne});var Ix=d((Ihe,Dx)=>{var Ex="\\ud800-\\udfff",ine="\\u0300-\\u036f",one="\\ufe20-\\ufe2f",ane="\\u20d0-\\u20ff",sne=ine+one+ane,une="\\ufe0e\\ufe0f",cne="["+Ex+"]",jv="["+sne+"]",Gv="\\ud83c[\\udffb-\\udfff]",lne="(?:"+jv+"|"+Gv+")",Px="[^"+Ex+"]",Nx="(?:\\ud83c[\\udde6-\\uddff]){2}",kx="[\\ud800-\\udbff][\\udc00-\\udfff]",dne="\\u200d",wx=lne+"?",Ox="["+une+"]?",fne="(?:"+dne+"(?:"+[Px,Nx,kx].join("|")+")"+Ox+wx+")*",pne=Ox+wx+fne,hne="(?:"+[Px+jv+"?",jv,Nx,kx,cne].join("|")+")",mne=RegExp(Gv+"(?="+Gv+")|"+hne+pne,"g");function gne(t){return t.match(mne)||[]}Dx.exports=gne});var qx=d((xhe,xx)=>{var yne=Cx(),vne=Fv(),_ne=Ix();function Tne(t){return vne(t)?_ne(t):yne(t)}xx.exports=Tne});var Mx=d((qhe,Lx)=>{var Rne=Ax(),Ane=Fv(),bne=qx(),Sne=Cy();function Cne(t){return function(e){e=Sne(e);var r=Ane(e)?bne(e):void 0,n=r?r[0]:e.charAt(0),i=r?Rne(r,1).join(""):e.slice(1);return n[t]()+i}}Lx.exports=Cne});var Fx=d((Lhe,$x)=>{var Ene=Mx(),Pne=Ene("toUpperCase");$x.exports=Pne});var Hx=d(Ps=>{"use strict";var Ns=Ps&&Ps.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Ps,"__esModule",{value:!0});Ps.genDts=void 0;var Nne=Ns(gn()),kne=Ns(we()),qf=Ns(qt()),wne=Ns(vi()),One=Ns(zd()),Gx=Ns(Fx());function Dne(t,e){var r=[];return r=r.concat('import type { CstNode, ICstVisitor, IToken } from "chevrotain";'),r=r.concat((0,Nne.default)((0,qf.default)(t,function(n){return Ine(n)}))),e.includeVisitorInterface&&(r=r.concat(Mne(e.visitorInterfaceName,t))),r.join(`

`)+`
`}Ps.genDts=Dne;function Ine(t){var e=xne(t),r=qne(t);return[e,r]}function xne(t){var e=Ux(t.name),r=Uv(t.name);return"export interface ".concat(e,` extends CstNode {
  name: "`).concat(t.name,`";
  children: `).concat(r,`;
}`)}function qne(t){var e=Uv(t.name);return"export type ".concat(e,` = {
  `).concat((0,qf.default)(t.properties,function(r){return Lne(r)}).join(`
  `),`
};`)}function Lne(t){var e=Fne(t.type);return"".concat(t.name).concat(t.optional?"?":"",": ").concat(e,"[];")}function Mne(t,e){return"export interface ".concat(t,`<IN, OUT> extends ICstVisitor<IN, OUT> {
  `).concat((0,qf.default)(e,function(r){return $ne(r)}).join(`
  `),`
}`)}function $ne(t){var e=Uv(t.name);return"".concat(t.name,"(children: ").concat(e,", param?: IN): OUT;")}function Fne(t){if((0,kne.default)(t)){var e=(0,One.default)((0,qf.default)(t,function(n){return jx(n)})),r=(0,wne.default)(e,function(n,i){return n+" | "+i});return"("+r+")"}else return jx(t)}function jx(t){return t.kind==="token"?"IToken":Ux(t.name)}function Ux(t){return(0,Gx.default)(t)+"CstNode"}function Uv(t){return(0,Gx.default)(t)+"CstChildren"}});var Wx=d(ks=>{"use strict";var Lf=ks&&ks.__assign||function(){return Lf=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Lf.apply(this,arguments)};Object.defineProperty(ks,"__esModule",{value:!0});ks.generateCstDts=void 0;var jne=Tx(),Gne=Hx(),Une={includeVisitorInterface:!0,visitorInterfaceName:"ICstNodeVisitor"};function Hne(t,e){var r=Lf(Lf({},Une),e),n=(0,jne.buildModel)(t);return(0,Gne.genDts)(n,r)}ks.generateCstDts=Hne});var Bx=d(Mf=>{"use strict";Object.defineProperty(Mf,"__esModule",{value:!0});Mf.createSyntaxDiagramsCode=void 0;var Kx=Zg();function Wne(t,e){var r=e===void 0?{}:e,n=r.resourceBase,i=n===void 0?"https://unpkg.com/chevrotain@".concat(Kx.VERSION,"/diagrams/"):n,o=r.css,a=o===void 0?"https://unpkg.com/chevrotain@".concat(Kx.VERSION,"/diagrams/diagrams.css"):o,s=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,u=`
<link rel='stylesheet' href='`.concat(a,`'>
`),c=`
<script src='`.concat(i,`vendor/railroad-diagrams.js'><\/script>
<script src='`).concat(i,`src/diagrams_builder.js'><\/script>
<script src='`).concat(i,`src/diagrams_behavior.js'><\/script>
<script src='`).concat(i,`src/main.js'><\/script>
`),l=`
<div id="diagrams" align="center"></div>    
`,f=`
<script>
    window.serializedGrammar = `.concat(JSON.stringify(t,null,"  "),`;
<\/script>
`),h=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return s+u+c+l+f+h}Mf.createSyntaxDiagramsCode=Wne});var Ho=d(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.Parser=G.createSyntaxDiagramsCode=G.clearCache=G.generateCstDts=G.GAstVisitor=G.serializeProduction=G.serializeGrammar=G.Terminal=G.Rule=G.RepetitionWithSeparator=G.RepetitionMandatoryWithSeparator=G.RepetitionMandatory=G.Repetition=G.Option=G.NonTerminal=G.Alternative=G.Alternation=G.defaultLexerErrorProvider=G.NoViableAltException=G.NotAllInputParsedException=G.MismatchedTokenException=G.isRecognitionException=G.EarlyExitException=G.defaultParserErrorProvider=G.LLkLookaheadStrategy=G.getLookaheadPaths=G.tokenName=G.tokenMatcher=G.tokenLabel=G.EOF=G.createTokenInstance=G.createToken=G.LexerDefinitionErrorType=G.Lexer=G.EMPTY_ALT=G.ParserDefinitionErrorType=G.EmbeddedActionsParser=G.CstParser=G.VERSION=void 0;var Kne=Zg();Object.defineProperty(G,"VERSION",{enumerable:!0,get:function(){return Kne.VERSION}});var $f=vr();Object.defineProperty(G,"CstParser",{enumerable:!0,get:function(){return $f.CstParser}});Object.defineProperty(G,"EmbeddedActionsParser",{enumerable:!0,get:function(){return $f.EmbeddedActionsParser}});Object.defineProperty(G,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return $f.ParserDefinitionErrorType}});Object.defineProperty(G,"EMPTY_ALT",{enumerable:!0,get:function(){return $f.EMPTY_ALT}});var zx=zu();Object.defineProperty(G,"Lexer",{enumerable:!0,get:function(){return zx.Lexer}});Object.defineProperty(G,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return zx.LexerDefinitionErrorType}});var ws=qo();Object.defineProperty(G,"createToken",{enumerable:!0,get:function(){return ws.createToken}});Object.defineProperty(G,"createTokenInstance",{enumerable:!0,get:function(){return ws.createTokenInstance}});Object.defineProperty(G,"EOF",{enumerable:!0,get:function(){return ws.EOF}});Object.defineProperty(G,"tokenLabel",{enumerable:!0,get:function(){return ws.tokenLabel}});Object.defineProperty(G,"tokenMatcher",{enumerable:!0,get:function(){return ws.tokenMatcher}});Object.defineProperty(G,"tokenName",{enumerable:!0,get:function(){return ws.tokenName}});var Bne=ds();Object.defineProperty(G,"getLookaheadPaths",{enumerable:!0,get:function(){return Bne.getLookaheadPaths}});var zne=Dv();Object.defineProperty(G,"LLkLookaheadStrategy",{enumerable:!0,get:function(){return zne.LLkLookaheadStrategy}});var Vne=ls();Object.defineProperty(G,"defaultParserErrorProvider",{enumerable:!0,get:function(){return Vne.defaultParserErrorProvider}});var lc=ps();Object.defineProperty(G,"EarlyExitException",{enumerable:!0,get:function(){return lc.EarlyExitException}});Object.defineProperty(G,"isRecognitionException",{enumerable:!0,get:function(){return lc.isRecognitionException}});Object.defineProperty(G,"MismatchedTokenException",{enumerable:!0,get:function(){return lc.MismatchedTokenException}});Object.defineProperty(G,"NotAllInputParsedException",{enumerable:!0,get:function(){return lc.NotAllInputParsedException}});Object.defineProperty(G,"NoViableAltException",{enumerable:!0,get:function(){return lc.NoViableAltException}});var Yne=av();Object.defineProperty(G,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return Yne.defaultLexerErrorProvider}});var Yn=lt();Object.defineProperty(G,"Alternation",{enumerable:!0,get:function(){return Yn.Alternation}});Object.defineProperty(G,"Alternative",{enumerable:!0,get:function(){return Yn.Alternative}});Object.defineProperty(G,"NonTerminal",{enumerable:!0,get:function(){return Yn.NonTerminal}});Object.defineProperty(G,"Option",{enumerable:!0,get:function(){return Yn.Option}});Object.defineProperty(G,"Repetition",{enumerable:!0,get:function(){return Yn.Repetition}});Object.defineProperty(G,"RepetitionMandatory",{enumerable:!0,get:function(){return Yn.RepetitionMandatory}});Object.defineProperty(G,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return Yn.RepetitionMandatoryWithSeparator}});Object.defineProperty(G,"RepetitionWithSeparator",{enumerable:!0,get:function(){return Yn.RepetitionWithSeparator}});Object.defineProperty(G,"Rule",{enumerable:!0,get:function(){return Yn.Rule}});Object.defineProperty(G,"Terminal",{enumerable:!0,get:function(){return Yn.Terminal}});var Hv=lt();Object.defineProperty(G,"serializeGrammar",{enumerable:!0,get:function(){return Hv.serializeGrammar}});Object.defineProperty(G,"serializeProduction",{enumerable:!0,get:function(){return Hv.serializeProduction}});Object.defineProperty(G,"GAstVisitor",{enumerable:!0,get:function(){return Hv.GAstVisitor}});var Xne=Wx();Object.defineProperty(G,"generateCstDts",{enumerable:!0,get:function(){return Xne.generateCstDts}});function Jne(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}G.clearCache=Jne;var Qne=Bx();Object.defineProperty(G,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return Qne.createSyntaxDiagramsCode}});var Zne=function(){function t(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.	
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return t}();G.Parser=Zne});var Zx=d(V=>{"use strict";var Vx=V&&V.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(V,"__esModule",{value:!0});V.createATN=V.RuleTransition=V.EpsilonTransition=V.AtomTransition=V.AbstractTransition=V.ATN_LOOP_END=V.ATN_PLUS_LOOP_BACK=V.ATN_STAR_LOOP_ENTRY=V.ATN_STAR_LOOP_BACK=V.ATN_BLOCK_END=V.ATN_RULE_STOP=V.ATN_TOKEN_START=V.ATN_STAR_BLOCK_START=V.ATN_PLUS_BLOCK_START=V.ATN_RULE_START=V.ATN_BASIC=V.ATN_INVALID_TYPE=V.buildATNKey=void 0;var Yx=Vx(qt()),eie=Vx(Bu()),_r=Ho();function fc(t,e,r){return`${t.name}_${e}_${r}`}V.buildATNKey=fc;V.ATN_INVALID_TYPE=0;V.ATN_BASIC=1;V.ATN_RULE_START=2;V.ATN_PLUS_BLOCK_START=4;V.ATN_STAR_BLOCK_START=5;V.ATN_TOKEN_START=6;V.ATN_RULE_STOP=7;V.ATN_BLOCK_END=8;V.ATN_STAR_LOOP_BACK=9;V.ATN_STAR_LOOP_ENTRY=10;V.ATN_PLUS_LOOP_BACK=11;V.ATN_LOOP_END=12;var Os=class{constructor(e){this.target=e}isEpsilon(){return!1}};V.AbstractTransition=Os;var Ff=class extends Os{constructor(e,r){super(e),this.tokenType=r}};V.AtomTransition=Ff;var jf=class extends Os{constructor(e){super(e)}isEpsilon(){return!0}};V.EpsilonTransition=jf;var dc=class extends Os{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};V.RuleTransition=dc;function tie(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};rie(e,t);let r=t.length;for(let n=0;n<r;n++){let i=t[n],o=Wo(e,i,i);o!==void 0&&pie(e,i,o)}return e}V.createATN=tie;function rie(t,e){let r=e.length;for(let n=0;n<r;n++){let i=e[n],o=$t(t,i,void 0,{type:V.ATN_RULE_START}),a=$t(t,i,void 0,{type:V.ATN_RULE_STOP});o.stop=a,t.ruleToStartState.set(i,o),t.ruleToStopState.set(i,a)}}function Xx(t,e,r){return r instanceof _r.Terminal?Wv(t,e,r.terminalType,r):r instanceof _r.NonTerminal?fie(t,e,r):r instanceof _r.Alternation?sie(t,e,r):r instanceof _r.Option?uie(t,e,r):r instanceof _r.Repetition?nie(t,e,r):r instanceof _r.RepetitionWithSeparator?iie(t,e,r):r instanceof _r.RepetitionMandatory?oie(t,e,r):r instanceof _r.RepetitionMandatoryWithSeparator?aie(t,e,r):Wo(t,e,r)}function nie(t,e,r){let n=$t(t,e,r,{type:V.ATN_STAR_BLOCK_START});so(t,n);let i=Ds(t,e,n,r,Wo(t,e,r));return Qx(t,e,r,i)}function iie(t,e,r){let n=$t(t,e,r,{type:V.ATN_STAR_BLOCK_START});so(t,n);let i=Ds(t,e,n,r,Wo(t,e,r)),o=Wv(t,e,r.separator,r);return Qx(t,e,r,i,o)}function oie(t,e,r){let n=$t(t,e,r,{type:V.ATN_PLUS_BLOCK_START});so(t,n);let i=Ds(t,e,n,r,Wo(t,e,r));return Jx(t,e,r,i)}function aie(t,e,r){let n=$t(t,e,r,{type:V.ATN_PLUS_BLOCK_START});so(t,n);let i=Ds(t,e,n,r,Wo(t,e,r)),o=Wv(t,e,r.separator,r);return Jx(t,e,r,i,o)}function sie(t,e,r){let n=$t(t,e,r,{type:V.ATN_BASIC});so(t,n);let i=(0,Yx.default)(r.definition,a=>Xx(t,e,a));return Ds(t,e,n,r,...i)}function uie(t,e,r){let n=$t(t,e,r,{type:V.ATN_BASIC});so(t,n);let i=Ds(t,e,n,r,Wo(t,e,r));return cie(t,e,r,i)}function Wo(t,e,r){let n=(0,eie.default)((0,Yx.default)(r.definition,i=>Xx(t,e,i)),i=>i!==void 0);return n.length===1?n[0]:n.length===0?void 0:die(t,n)}function Jx(t,e,r,n,i){let o=n.left,a=n.right,s=$t(t,e,r,{type:V.ATN_PLUS_LOOP_BACK});so(t,s);let u=$t(t,e,r,{type:V.ATN_LOOP_END});return o.loopback=s,u.loopback=s,t.decisionMap[fc(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=s,Rt(a,s),i===void 0?(Rt(s,o),Rt(s,u)):(Rt(s,u),Rt(s,i.left),Rt(i.right,o)),{left:o,right:u}}function Qx(t,e,r,n,i){let o=n.left,a=n.right,s=$t(t,e,r,{type:V.ATN_STAR_LOOP_ENTRY});so(t,s);let u=$t(t,e,r,{type:V.ATN_LOOP_END}),c=$t(t,e,r,{type:V.ATN_STAR_LOOP_BACK});return s.loopback=c,u.loopback=c,Rt(s,o),Rt(s,u),Rt(a,c),i!==void 0?(Rt(c,u),Rt(c,i.left),Rt(i.right,o)):Rt(c,s),t.decisionMap[fc(e,i?"RepetitionWithSeparator":"Repetition",r.idx)]=s,{left:s,right:u}}function cie(t,e,r,n){let i=n.left,o=n.right;return Rt(i,o),t.decisionMap[fc(e,"Option",r.idx)]=i,n}function so(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Ds(t,e,r,n,...i){let o=$t(t,e,n,{type:V.ATN_BLOCK_END,start:r});r.end=o;for(let s of i)s!==void 0?(Rt(r,s.left),Rt(s.right,o)):Rt(r,o);let a={left:r,right:o};return t.decisionMap[fc(e,lie(n),n.idx)]=r,a}function lie(t){if(t instanceof _r.Alternation)return"Alternation";if(t instanceof _r.Option)return"Option";if(t instanceof _r.Repetition)return"Repetition";if(t instanceof _r.RepetitionWithSeparator)return"RepetitionWithSeparator";if(t instanceof _r.RepetitionMandatory)return"RepetitionMandatory";if(t instanceof _r.RepetitionMandatoryWithSeparator)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function die(t,e){let r=e.length;for(let o=0;o<r-1;o++){let a=e[o],s;a.left.transitions.length===1&&(s=a.left.transitions[0]);let u=s instanceof dc,c=s,l=e[o+1].left;a.left.type===V.ATN_BASIC&&a.right.type===V.ATN_BASIC&&s!==void 0&&(u&&c.followState===a.right||s.target===a.right)?(u?c.followState=l:s.target=l,hie(t,a.right)):Rt(a.right,l)}let n=e[0],i=e[r-1];return{left:n.left,right:i.right}}function Wv(t,e,r,n){let i=$t(t,e,n,{type:V.ATN_BASIC}),o=$t(t,e,n,{type:V.ATN_BASIC});return Kv(i,new Ff(o,r)),{left:i,right:o}}function fie(t,e,r){let n=r.referencedRule,i=t.ruleToStartState.get(n),o=$t(t,e,r,{type:V.ATN_BASIC}),a=$t(t,e,r,{type:V.ATN_BASIC}),s=new dc(i,n,a);return Kv(o,s),{left:o,right:a}}function pie(t,e,r){let n=t.ruleToStartState.get(e);Rt(n,r.left);let i=t.ruleToStopState.get(e);return Rt(r.right,i),{left:n,right:i}}function Rt(t,e){let r=new jf(e);Kv(t,r)}function $t(t,e,r,n){let i=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(i),i}function Kv(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function hie(t,e){t.states.splice(t.states.indexOf(e),1)}});var tq=d(Xn=>{"use strict";var mie=Xn&&Xn.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Xn,"__esModule",{value:!0});Xn.getATNConfigKey=Xn.ATNConfigSet=Xn.DFA_ERROR=void 0;var gie=mie(qt());Xn.DFA_ERROR={};var Bv=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=eq(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return(0,gie.default)(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};Xn.ATNConfigSet=Bv;function eq(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}Xn.getATNConfigKey=eq});var nq=d((Hhe,rq)=>{var yie=Xa();function vie(t,e,r){for(var n=-1,i=t.length;++n<i;){var o=t[n],a=e(o);if(a!=null&&(s===void 0?a===a&&!yie(a):r(a,s)))var s=a,u=o}return u}rq.exports=vie});var oq=d((Whe,iq)=>{function _ie(t,e){return t<e}iq.exports=_ie});var sq=d((Khe,aq)=>{var Tie=nq(),Rie=oq(),Aie=wo();function bie(t){return t&&t.length?Tie(t,Aie,Rie):void 0}aq.exports=bie});var cq=d((Bhe,uq)=>{var Sie=Wr(),Cie=Gy();function Eie(t,e){return t&&t.length?Cie(t,Sie(e,2)):[]}uq.exports=Eie});var gq=d(Is=>{"use strict";var co=Is&&Is.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Is,"__esModule",{value:!0});Is.LLStarLookaheadStrategy=void 0;var kr=Ho(),Tn=Zx(),uo=tq(),Pie=co(sq()),Nie=co(ff()),kie=co(cq()),pc=co(qt()),wie=co(gn()),zv=co(Lt()),Oie=co(Sr()),lq=co(vi());function Die(t,e){let r={};return n=>{let i=n.toString(),o=r[i];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[i]=o),o}}var Gf=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},dq=new Gf,Yv=class extends kr.LLkLookaheadStrategy{constructor(e){var r;super(),this.logging=(r=e?.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=(0,Tn.createATN)(e.rules),this.dfas=Iie(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:i,dynamicTokensEnabled:o}=e,a=this.dfas,s=this.logging,u=(0,Tn.buildATNKey)(n,"Alternation",r),l=this.atn.decisionMap[u].decision,f=(0,pc.default)((0,kr.getLookaheadPaths)({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),h=>(0,pc.default)(h,v=>v[0]));if(fq(f,!1)&&!o){let h=(0,lq.default)(f,(v,m,R)=>((0,zv.default)(m,P=>{P&&(v[P.tokenTypeIdx]=R,(0,zv.default)(P.categoryMatches,C=>{v[C]=R}))}),v),{});return i?function(v){var m;let R=this.LA(1),P=h[R.tokenTypeIdx];if(v!==void 0&&P!==void 0){let C=(m=v[P])===null||m===void 0?void 0:m.GATE;if(C!==void 0&&C.call(this)===!1)return}return P}:function(){let v=this.LA(1);return h[v.tokenTypeIdx]}}else return i?function(h){let v=new Gf,m=h===void 0?0:h.length;for(let P=0;P<m;P++){let C=h?.[P].GATE;v.set(P,C===void 0||C.call(this))}let R=Vv.call(this,a,l,v,s);return typeof R=="number"?R:void 0}:function(){let h=Vv.call(this,a,l,dq,s);return typeof h=="number"?h:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:i,dynamicTokensEnabled:o}=e,a=this.dfas,s=this.logging,u=(0,Tn.buildATNKey)(n,i,r),l=this.atn.decisionMap[u].decision,f=(0,pc.default)((0,kr.getLookaheadPaths)({maxLookahead:1,occurrence:r,prodType:i,rule:n}),h=>(0,pc.default)(h,v=>v[0]));if(fq(f)&&f[0][0]&&!o){let h=f[0],v=(0,wie.default)(h);if(v.length===1&&(0,Oie.default)(v[0].categoryMatches)){let R=v[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===R}}else{let m=(0,lq.default)(v,(R,P)=>(P!==void 0&&(R[P.tokenTypeIdx]=!0,(0,zv.default)(P.categoryMatches,C=>{R[C]=!0})),R),{});return function(){let R=this.LA(1);return m[R.tokenTypeIdx]===!0}}}return function(){let h=Vv.call(this,a,l,dq,s);return typeof h=="object"?!1:h===0}}};Is.LLStarLookaheadStrategy=Yv;function fq(t,e=!0){let r=new Set;for(let n of t){let i=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let a=[o.tokenTypeIdx].concat(o.categoryMatches);for(let s of a)if(r.has(s)){if(!i.has(s))return!1}else r.add(s),i.add(s)}}return!0}function Iie(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=Die(t.decisionStates[n],n);return r}function Vv(t,e,r,n){let i=t[e](r),o=i.start;if(o===void 0){let s=Wie(i.atnStartState);o=mq(i,hq(s)),i.start=o}return xie.apply(this,[i,o,r,n])}function xie(t,e,r,n){let i=e,o=1,a=[],s=this.LA(o++);for(;;){let u=jie(i,s);if(u===void 0&&(u=qie.apply(this,[t,i,s,o,r,n])),u===uo.DFA_ERROR)return Fie(a,i,s);if(u.isAcceptState===!0)return u.prediction;i=u,a.push(s),s=this.LA(o++)}}function qie(t,e,r,n,i,o){let a=Gie(e.configs,r,i);if(a.size===0)return pq(t,e,r,uo.DFA_ERROR),uo.DFA_ERROR;let s=hq(a),u=Hie(a,i);if(u!==void 0)s.isAcceptState=!0,s.prediction=u,s.configs.uniqueAlt=u;else if(Vie(a)){let c=(0,Pie.default)(a.alts);s.isAcceptState=!0,s.prediction=c,s.configs.uniqueAlt=c,Lie.apply(this,[t,n,a.alts,o])}return s=pq(t,e,r,s),s}function Lie(t,e,r,n){let i=[];for(let c=1;c<=e;c++)i.push(this.LA(c).tokenType);let o=t.atnStartState,a=o.rule,s=o.production,u=Mie({topLevelRule:a,ambiguityIndices:r,production:s,prefixPath:i});n(u)}function Mie(t){let e=(0,pc.default)(t.prefixPath,i=>(0,kr.tokenLabel)(i)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${$ie(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function $ie(t){if(t instanceof kr.NonTerminal)return"SUBRULE";if(t instanceof kr.Option)return"OPTION";if(t instanceof kr.Alternation)return"OR";if(t instanceof kr.RepetitionMandatory)return"AT_LEAST_ONE";if(t instanceof kr.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(t instanceof kr.RepetitionWithSeparator)return"MANY_SEP";if(t instanceof kr.Repetition)return"MANY";if(t instanceof kr.Terminal)return"CONSUME";throw Error("non exhaustive match")}function Fie(t,e,r){let n=(0,Nie.default)(e.configs.elements,o=>o.state.transitions),i=(0,kie.default)(n.filter(o=>o instanceof Tn.AtomTransition).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:i,tokenPath:t}}function jie(t,e){return t.edges[e.tokenTypeIdx]}function Gie(t,e,r){let n=new uo.ATNConfigSet,i=[];for(let a of t.elements){if(r.is(a.alt)===!1)continue;if(a.state.type===Tn.ATN_RULE_STOP){i.push(a);continue}let s=a.state.transitions.length;for(let u=0;u<s;u++){let c=a.state.transitions[u],l=Uie(c,e);l!==void 0&&n.add({state:l,alt:a.alt,stack:a.stack})}}let o;if(i.length===0&&n.size===1&&(o=n),o===void 0){o=new uo.ATNConfigSet;for(let a of n.elements)Uf(a,o)}if(i.length>0&&!Bie(o))for(let a of i)o.add(a);return o}function Uie(t,e){if(t instanceof Tn.AtomTransition&&(0,kr.tokenMatcher)(e,t.tokenType))return t.target}function Hie(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function hq(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function pq(t,e,r,n){return n=mq(t,n),e.edges[r.tokenTypeIdx]=n,n}function mq(t,e){if(e===uo.DFA_ERROR)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function Wie(t){let e=new uo.ATNConfigSet,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};Uf(o,e)}return e}function Uf(t,e){let r=t.state;if(r.type===Tn.ATN_RULE_STOP){if(t.stack.length>0){let i=[...t.stack],a={state:i.pop(),alt:t.alt,stack:i};Uf(a,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let i=0;i<n;i++){let o=r.transitions[i],a=Kie(t,o);a!==void 0&&Uf(a,e)}}function Kie(t,e){if(e instanceof Tn.EpsilonTransition)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof Tn.RuleTransition){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function Bie(t){for(let e of t.elements)if(e.state.type===Tn.ATN_RULE_STOP)return!0;return!1}function zie(t){for(let e of t.elements)if(e.state.type!==Tn.ATN_RULE_STOP)return!1;return!0}function Vie(t){if(zie(t))return!0;let e=Yie(t.elements);return Xie(e)&&!Jie(e)}function Yie(t){let e=new Map;for(let r of t){let n=(0,uo.getATNConfigKey)(r,!1),i=e.get(n);i===void 0&&(i={},e.set(n,i)),i[r.alt]=!0}return e}function Xie(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function Jie(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}});var yq=d(Hf=>{"use strict";Object.defineProperty(Hf,"__esModule",{value:!0});Hf.LLStarLookaheadStrategy=void 0;var Qie=gq();Object.defineProperty(Hf,"LLStarLookaheadStrategy",{enumerable:!0,get:function(){return Qie.LLStarLookaheadStrategy}})});var Tq=d(Vr=>{"use strict";Object.defineProperty(Vr,"__esModule",{value:!0});Vr.RootCstNodeImpl=Vr.CompositeCstNodeImpl=Vr.LeafCstNodeImpl=Vr.AbstractCstNode=Vr.CstNodeBuilder=void 0;var vq=aa(),Zie=dr(),_q=Xe(),Xv=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new Wf(e),this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new gc;return r.feature=e,r.root=this.rootNode,this.current.children.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new mc(e.startOffset,e.image.length,(0,_q.tokenToRange)(e),e.tokenType,!1);return n.feature=r,n.root=this.rootNode,this.current.children.push(n),n}removeNode(e){let r=e.parent;if(r){let n=r.children.indexOf(e);n>=0&&r.children.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.element=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.children.length===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new mc(r.startOffset,r.image.length,(0,_q.tokenToRange)(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.children.length;o++){let a=e.children[o],{offset:s,end:u}=a;if((0,Zie.isCompositeCstNode)(a)&&n>s&&i<u){this.addHiddenToken(a,r);return}else if(i<=s){e.children.splice(o,0,r);return}}e.children.push(r)}};Vr.CstNodeBuilder=Xv;var hc=class{get hidden(){return!1}get element(){var e,r;let n=typeof((e=this._element)===null||e===void 0?void 0:e.$type)=="string"?this._element:(r=this.parent)===null||r===void 0?void 0:r.element;if(!n)throw new Error("This node has no associated AST element");return n}set element(e){this._element=e}get text(){return this.root.fullText.substring(this.offset,this.end)}};Vr.AbstractCstNode=hc;var mc=class extends hc{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}};Vr.LeafCstNodeImpl=mc;var gc=class extends hc{constructor(){super(...arguments),this.children=new yc(this)}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:vq.Position.create(0,0),end:vq.Position.create(0,0)}}get firstNonHiddenNode(){for(let e of this.children)if(!e.hidden)return e;return this.children[0]}get lastNonHiddenNode(){for(let e=this.children.length-1;e>=0;e--){let r=this.children[e];if(!r.hidden)return r}return this.children[this.children.length-1]}};Vr.CompositeCstNodeImpl=gc;var yc=class extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,yc.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.parent=this.parent}},Wf=class extends gc{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}};Vr.RootCstNodeImpl=Wf});var Vf=d(lr=>{"use strict";Object.defineProperty(lr,"__esModule",{value:!0});lr.LangiumCompletionParser=lr.LangiumParserErrorMessageProvider=lr.LangiumParser=lr.AbstractLangiumParser=lr.DatatypeSymbol=void 0;var Bf=Ho(),eoe=yq(),Kf=ke(),Rq=Ct(),Aq=Oe(),toe=Tq();lr.DatatypeSymbol=Symbol("Datatype");function Jv(t){return t.$type===lr.DatatypeSymbol}var bq="\u200B",Sq=t=>t.endsWith(bq)?t:t+bq,vc=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new e_(r,e.parser.ParserConfig)}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}};lr.AbstractLangiumParser=vc;var Qv=class extends vc{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new toe.CstNodeBuilder,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:(0,Rq.isDataTypeRule)(e)?lr.DatatypeSymbol:(0,Rq.getTypeName)(e),i=this.wrapper.DEFINE_RULE(Sq(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===lr.DatatypeSymbol&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&!i.isInsertedInRecovery){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:a,isCrossRef:s}=this.getAssignment(n),u=this.current;if(a){let c=(0,Kf.isKeyword)(n)?i.image:this.converter.convert(i.image,o);this.assign(a.operator,a.feature,c,o,s)}else if(Jv(u)){let c=i.image;(0,Kf.isKeyword)(n)||(c=this.converter.convert(c,o).toString()),u.value+=c}}}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let a=this.wrapper.wrapSubrule(e,r,i);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(a,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i)this.assign(i.operator,i.feature,e,n,o);else if(!i){let a=this.current;if(Jv(a))a.value+=e.toString();else{let s=e.$type,u=this.assignWithoutOverride(e,a);s&&(u.$type=s);let c=u;this.stack.pop(),this.stack.push(c)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return(0,Aq.linkContentToContainer)(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),Jv(r)?this.converter.convert(r.value,r.$cstNode):(this.assignMandatoryProperties(r),r)}assignMandatoryProperties(e){let r=this.astReflection.getTypeMetaData(e.$type);for(let n of r.mandatory){let i=e[n.name];n.type==="array"&&!Array.isArray(i)?e[n.name]=[]:n.type==="boolean"&&i===void 0&&(e[n.name]=!1)}}getAssignment(e){if(!this.assignmentMap.has(e)){let r=(0,Aq.getContainerOfType)(e,Kf.isAssignment);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?(0,Kf.isCrossReference)(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let a=this.current,s;switch(o&&typeof n=="string"?s=this.linker.buildReference(a,r,i,n):s=n,e){case"=":{a[r]=s;break}case"?=":{a[r]=!0;break}case"+=":Array.isArray(a[r])||(a[r]=[]),a[r].push(s)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r))e[n]===void 0&&(e[n]=i);return e}get definitionErrors(){return this.wrapper.definitionErrors}};lr.LangiumParser=Qv;var zf=class{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}buildNoViableAltMessage(e){return Bf.defaultParserErrorProvider.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Bf.defaultParserErrorProvider.buildEarlyExitMessage(e)}};lr.LangiumParserErrorMessageProvider=zf;var Zv=class extends vc{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(Sq(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}};lr.LangiumCompletionParser=Zv;var roe={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new zf},e_=class extends Bf.EmbeddedActionsParser{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},roe),{lookaheadStrategy:n?new Bf.LLkLookaheadStrategy({maxLookahead:r.maxLookahead}):new eoe.LLStarLookaheadStrategy}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}}});var Cq=d(xs=>{"use strict";Object.defineProperty(xs,"__esModule",{value:!0});xs.assertUnreachable=xs.ErrorWithLocation=void 0;var t_=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};xs.ErrorWithLocation=t_;function noe(t){throw new Error("Error! The input value was not handled.")}xs.assertUnreachable=noe});var n_=d(Xf=>{"use strict";Object.defineProperty(Xf,"__esModule",{value:!0});Xf.createParser=void 0;var Eq=Ho(),Me=ke(),_c=Cq(),ioe=Ot(),Pq=Ct(),Nq=St();function ooe(t,e,r){return aoe({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}Xf.createParser=ooe;function aoe(t,e){let r=(0,Nq.getAllReachableRules)(e,!1),n=(0,ioe.stream)(e.rules).filter(Me.isParserRule).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,Ko(o,i.definition)))}}function Ko(t,e,r=!1){let n;if((0,Me.isKeyword)(e))n=poe(t,e);else if((0,Me.isAction)(e))n=soe(t,e);else if((0,Me.isAssignment)(e))n=Ko(t,e.terminal);else if((0,Me.isCrossReference)(e))n=kq(t,e);else if((0,Me.isRuleCall)(e))n=uoe(t,e);else if((0,Me.isAlternatives)(e))n=loe(t,e);else if((0,Me.isUnorderedGroup)(e))n=doe(t,e);else if((0,Me.isGroup)(e))n=foe(t,e);else throw new _c.ErrorWithLocation(e.$cstNode,`Unexpected element type: ${e.$type}`);return wq(t,r?void 0:Yf(e),n,e.cardinality)}function soe(t,e){let r=(0,Pq.getTypeName)(e);return()=>t.parser.action(r,e)}function uoe(t,e){let r=e.rule.ref;if((0,Me.isParserRule)(r)){let n=t.subrule++,i=e.arguments.length>0?coe(r,e.arguments):()=>({});return o=>t.parser.subrule(n,Oq(t,r),e,i(o))}else if((0,Me.isTerminalRule)(r)){let n=t.consume++,i=r_(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)(0,_c.assertUnreachable)(r);else throw new _c.ErrorWithLocation(e.$cstNode,`Undefined rule type: ${e.$type}`)}function coe(t,e){let r=e.map(n=>Ni(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let a=t.parameters[o],s=r[o];i[a.name]=s(n)}return i}}function Ni(t){if((0,Me.isDisjunction)(t)){let e=Ni(t.left),r=Ni(t.right);return n=>e(n)||r(n)}else if((0,Me.isConjunction)(t)){let e=Ni(t.left),r=Ni(t.right);return n=>e(n)&&r(n)}else if((0,Me.isNegation)(t)){let e=Ni(t.value);return r=>!e(r)}else if((0,Me.isParameterReference)(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if((0,Me.isLiteralCondition)(t)){let e=Boolean(t.true);return()=>e}(0,_c.assertUnreachable)(t)}function loe(t,e){if(e.elements.length===1)return Ko(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:Ko(t,i,!0)},a=Yf(i);a&&(o.GATE=Ni(a)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let a={ALT:()=>o.ALT(i)},s=o.GATE;return s&&(a.GATE=()=>s(i)),a}))}}function doe(t,e){if(e.elements.length===1)return Ko(t,e.elements[0]);let r=[];for(let s of e.elements){let u={ALT:Ko(t,s,!0)},c=Yf(s);c&&(u.GATE=Ni(c)),r.push(u)}let n=t.or++,i=(s,u)=>{let c=u.getRuleStack().join("-");return`uGroup_${s}_${c}`},o=s=>t.parser.alternatives(n,r.map((u,c)=>{let l={ALT:()=>!0},f=t.parser;l.ALT=()=>{if(u.ALT(s),!f.isRecording()){let v=i(n,f);f.unorderedGroups.get(v)||f.unorderedGroups.set(v,[]);let m=f.unorderedGroups.get(v);typeof m?.[c]>"u"&&(m[c]=!0)}};let h=u.GATE;return h?l.GATE=()=>h(s):l.GATE=()=>{let v=f.unorderedGroups.get(i(n,f));return!v?.[c]},l})),a=wq(t,Yf(e),o,"*");return s=>{a(s),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function foe(t,e){let r=e.elements.map(n=>Ko(t,n));return n=>r.forEach(i=>i(n))}function Yf(t){if((0,Me.isGroup)(t))return t.guardCondition}function kq(t,e,r=e.terminal){if(r)if((0,Me.isRuleCall)(r)&&(0,Me.isParserRule)(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,Oq(t,r.rule.ref),e,i)}else if((0,Me.isRuleCall)(r)&&(0,Me.isTerminalRule)(r.rule.ref)){let n=t.consume++,i=r_(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if((0,Me.isKeyword)(r)){let n=t.consume++,i=r_(t,r.value);return()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=(0,Nq.findNameAssignment)(e.type.ref),i=n?.terminal;if(!i)throw new Error("Could not find name assignment for type: "+(0,Pq.getTypeName)(e.type.ref));return kq(t,e,i)}}function poe(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function wq(t,e,r,n){let i=e&&Ni(e);if(!n)if(i){let o=t.or++;return a=>t.parser.alternatives(o,[{ALT:()=>r(a),GATE:()=>i(a)},{ALT:(0,Eq.EMPTY_ALT)(),GATE:()=>!i(a)}])}else return r;if(n==="*"){let o=t.many++;return a=>t.parser.many(o,{DEF:()=>r(a),GATE:i?()=>i(a):void 0})}else if(n==="+"){let o=t.many++;if(i){let a=t.or++;return s=>t.parser.alternatives(a,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(s)}),GATE:()=>i(s)},{ALT:(0,Eq.EMPTY_ALT)(),GATE:()=>!i(s)}])}else return a=>t.parser.atLeastOne(o,{DEF:()=>r(a)})}else if(n==="?"){let o=t.optional++;return a=>t.parser.optional(o,{DEF:()=>r(a),GATE:i?()=>i(a):void 0})}else(0,_c.assertUnreachable)(n)}function Oq(t,e){let r=hoe(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function hoe(t,e){if((0,Me.isParserRule)(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!(0,Me.isParserRule)(n);)((0,Me.isGroup)(n)||(0,Me.isAlternatives)(n)||(0,Me.isUnorderedGroup)(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function r_(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}});var Dq=d(Jf=>{"use strict";Object.defineProperty(Jf,"__esModule",{value:!0});Jf.createCompletionParser=void 0;var moe=Vf(),goe=n_();function yoe(t){let e=t.Grammar,r=t.parser.Lexer,n=new moe.LangiumCompletionParser(t);return(0,goe.createParser)(e,n,r.definition),n.finalize(),n}Jf.createCompletionParser=yoe});var i_=d(qs=>{"use strict";Object.defineProperty(qs,"__esModule",{value:!0});qs.prepareLangiumParser=qs.createLangiumParser=void 0;var voe=Vf(),_oe=n_();function Toe(t){let e=Iq(t);return e.finalize(),e}qs.createLangiumParser=Toe;function Iq(t){let e=t.Grammar,r=t.parser.Lexer,n=new voe.LangiumParser(t);return(0,_oe.createParser)(e,n,r.definition)}qs.prepareLangiumParser=Iq});var s_=d(Zf=>{"use strict";Object.defineProperty(Zf,"__esModule",{value:!0});Zf.DefaultTokenBuilder=void 0;var Roe=Ho(),o_=ke(),Aoe=Ct(),boe=Oe(),Soe=St(),Qf=Aa(),Coe=Ot(),a_=class{buildTokens(e,r){let n=(0,Coe.stream)((0,Soe.getAllReachableRules)(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(a=>{let s=a.PATTERN;typeof s=="object"&&s&&"test"in s&&(0,Qf.isWhitespaceRegExp)(s)?o.unshift(a):o.push(a)}),o}buildTerminalTokens(e){return e.filter(o_.isTerminalRule).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=(0,Aoe.terminalRegex)(e),n={name:e.name,PATTERN:new RegExp(r)};return e.hidden&&(n.GROUP=(0,Qf.isWhitespaceRegExp)(r)?Roe.Lexer.SKIPPED:"hidden"),n}buildKeywordTokens(e,r,n){return e.filter(o_.isParserRule).flatMap(i=>(0,boe.streamAllContents)(i).filter(o_.isKeyword)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,Boolean(n?.caseInsensitive)))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp((0,Qf.getCaseInsensitivePattern)(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i?.PATTERN;return o?.source&&(0,Qf.partialMatches)("^"+o.source+"$",e.value)&&n.push(i),n},[])}};Zf.DefaultTokenBuilder=a_});var l_=d(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.convertBoolean=Ft.convertNumber=Ft.convertDate=Ft.convertBigint=Ft.convertInt=Ft.convertID=Ft.convertString=Ft.DefaultValueConverter=void 0;var xq=ke(),Eoe=Ct(),Poe=St(),u_=class{convert(e,r){let n=r.feature;if((0,xq.isCrossReference)(n)&&(n=(0,Poe.getCrossReferenceTerminal)(n)),(0,xq.isRuleCall)(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return Lq(r);case"STRING":return c_(r);case"ID":return qq(r);case"REGEXLITERAL":return c_(r)}switch((i=(0,Eoe.getRuleType)(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return Fq(r);case"boolean":return jq(r);case"bigint":return Mq(r);case"date":return $q(r);default:return r}}};Ft.DefaultValueConverter=u_;function c_(t){return t.substring(1,t.length-1)}Ft.convertString=c_;function qq(t){return t.charAt(0)==="^"?t.substring(1):t}Ft.convertID=qq;function Lq(t){return parseInt(t)}Ft.convertInt=Lq;function Mq(t){return BigInt(t)}Ft.convertBigint=Mq;function $q(t){return new Date(t)}Ft.convertDate=$q;function Fq(t){return Number(t)}Ft.convertNumber=Fq;function jq(t){return t.toLowerCase()==="true"}Ft.convertBoolean=jq});var p_=d(tp=>{"use strict";Object.defineProperty(tp,"__esModule",{value:!0});tp.DefaultLinker=void 0;var Noe=qe(),Ls=dr(),ep=Oe(),koe=Mr(),d_=Bi(),f_=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=Noe.CancellationToken.None){for(let n of(0,ep.streamAst)(e.parseResult.value))await(0,koe.interruptAndCheck)(r),(0,ep.streamReferences)(n).forEach(i=>this.doLink(i,e));e.state=d_.DocumentState.Linked}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if((0,Ls.isLinkingError)(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o??this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,a={$refNode:n,$refText:i,get ref(){var s;if((0,Ls.isAstNode)(this._ref))return this._ref;if((0,Ls.isAstNodeDescription)(this._nodeDescription)){let u=o.loadAstNode(this._nodeDescription);this._ref=u??o.createLinkingError({reference:a,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let u=o.getLinkedNode({reference:a,container:e,property:r});if(u.error&&(0,ep.getDocument)(e).state<d_.DocumentState.ComputedScopes)return;this._ref=(s=u.node)!==null&&s!==void 0?s:u.error,this._nodeDescription=u.descr}return(0,Ls.isAstNode)(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return(0,Ls.isLinkingError)(this._ref)?this._ref:void 0}};return a}getLinkedNode(e){try{let r=this.getCandidate(e);if((0,Ls.isLinkingError)(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getOrCreateDocument(e.documentUri);return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=(0,ep.getDocument)(e.container);n.state<d_.DocumentState.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};tp.DefaultLinker=f_});var g_=d(rp=>{"use strict";Object.defineProperty(rp,"__esModule",{value:!0});rp.DefaultJsonSerializer=void 0;var h_=dr();function Gq(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var m_=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}serialize(e,r){return JSON.stringify(e,(n,i)=>this.replacer(n,i,r?.refText),r?.space)}deserialize(e){let r=JSON.parse(e);return this.linkNode(r,r),r}replacer(e,r,n){var i,o;if(!this.ignoreProperties.has(e)){if((0,h_.isReference)(r)){let a=r.ref,s=n?r.$refText:void 0;return a?{$refText:s,$ref:"#"+(a&&this.astNodeLocator.getAstNodePath(a))}:{$refText:s,$error:(o=(i=r.error)===null||i===void 0?void 0:i.message)!==null&&o!==void 0?o:"Could not resolve reference"}}return r}}linkNode(e,r,n,i,o){for(let[s,u]of Object.entries(e))if(Array.isArray(u))for(let c=0;c<u.length;c++){let l=u[c];Gq(l)?u[c]=this.reviveReference(e,s,r,l):(0,h_.isAstNode)(l)&&this.linkNode(l,r,e,s,c)}else Gq(u)?e[s]=this.reviveReference(e,s,r,u):(0,h_.isAstNode)(u)&&this.linkNode(u,r,e,s);let a=e;a.$container=n,a.$containerProperty=i,a.$containerIndex=o}reviveReference(e,r,n,i){let o=i.$refText;if(i.$ref){let a=this.getRefNode(n,i.$ref);return o||(o=this.nameProvider.getName(a)),{$refText:o??"",ref:a}}else if(i.$error){let a={$refText:o??""};return a.error={container:e,property:r,message:i.$error,reference:a},a}else return}getRefNode(e,r){return this.astNodeLocator.getAstNode(e,r.substring(1))}};rp.DefaultJsonSerializer=m_});var v_=d(np=>{"use strict";Object.defineProperty(np,"__esModule",{value:!0});np.DefaultServiceRegistry=void 0;var woe=ui(),y_=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=woe.Utils.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};np.DefaultServiceRegistry=y_});var T_=d(ip=>{"use strict";Object.defineProperty(ip,"__esModule",{value:!0});ip.ValidationRegistry=void 0;var Ooe=br(),Doe=Mr(),__=class{constructor(e){this.validationChecks=new Ooe.MultiMap,this.reflection=e.shared.AstReflection}register(e,r=this){for(let[n,i]of Object.entries(e)){let o=i;if(Array.isArray(o))for(let a of o)this.doRegister(n,this.wrapValidationException(a,r));else typeof o=="function"&&this.doRegister(n,this.wrapValidationException(o,r))}}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(a){if((0,Doe.isOperationCancelled)(a))throw a;console.error("An error occurred during validation:",a);let s=a instanceof Error?a.message:String(a);a instanceof Error&&a.stack&&console.error(a.stack),i("error","An error occurred during validation: "+s,{node:n})}}}doRegister(e,r){for(let n of this.reflection.getAllTypes())this.reflection.isSubtype(n,e)&&this.validationChecks.add(n,r)}getChecks(e){return this.validationChecks.get(e)}};ip.ValidationRegistry=__});var b_=d(Ms=>{"use strict";Object.defineProperty(Ms,"__esModule",{value:!0});Ms.DefaultReferenceDescriptionProvider=Ms.DefaultAstNodeDescriptionProvider=void 0;var Ioe=qe(),xoe=dr(),op=Oe(),qoe=Xe(),Loe=Mr(),Moe=fi(),R_=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator}createDescription(e,r,n=(0,op.getDocument)(e)){return{node:e,name:r,type:e.$type,documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(e)}}};Ms.DefaultAstNodeDescriptionProvider=R_;var A_=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=Ioe.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of(0,op.streamAst)(i))await(0,Loe.interruptAndCheck)(r),(0,op.streamReferences)(o).filter(a=>!(0,xoe.isLinkingError)(a)).forEach(a=>{let s=this.createDescription(a);s&&n.push(s)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let i=(0,op.getDocument)(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:(0,qoe.toDocumentSegment)(n),local:(0,Moe.equalURI)(r.documentUri,i)}}};Ms.DefaultReferenceDescriptionProvider=A_});var Uq=d(ap=>{"use strict";Object.defineProperty(ap,"__esModule",{value:!0});ap.DefaultAstNodeLocator=void 0;var S_=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let a=o.indexOf(this.indexSeparator);if(a>0){let s=o.substring(0,a),u=parseInt(o.substring(a+1)),c=i[s];return c?.[u]}return i[o]},e)}};ap.DefaultAstNodeLocator=S_});var E_=d(sp=>{"use strict";Object.defineProperty(sp,"__esModule",{value:!0});sp.DefaultConfigurationProvider=void 0;var $oe=ht(),C_=class{constructor(e){this.settings={},this.workspaceConfig=!1,this.initialized=!1,this.serviceRegistry=e.ServiceRegistry,this.connection=e.lsp.Connection,e.lsp.LanguageServer.onInitialize(r=>{var n,i;this.workspaceConfig=(i=(n=r.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&i!==void 0?i:!1}),e.lsp.LanguageServer.onInitialized(r=>{var n;let i=this.serviceRegistry.all;(n=e.lsp.Connection)===null||n===void 0||n.client.register($oe.DidChangeConfigurationNotification.type,{section:i.map(o=>this.toSectionName(o.LanguageMetaData.languageId))})})}async initialize(){if(this.workspaceConfig&&this.connection){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await this.connection.workspace.getConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}this.initialized=!0}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){this.initialized||await this.initialize();let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};sp.DefaultConfigurationProvider=C_});var k_=d(cp=>{"use strict";Object.defineProperty(cp,"__esModule",{value:!0});cp.DefaultDocumentBuilder=void 0;var up=qe(),Foe=br(),P_=Mr(),Jn=Bi(),N_=class{constructor(e){this.updateListeners=[],this.buildPhaseListeners=new Foe.MultiMap,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=up.CancellationToken.None){await this.buildDocuments(e,r,n)}async update(e,r,n=up.CancellationToken.None){for(let s of r)this.langiumDocuments.deleteDocument(s);this.indexManager.remove(r);for(let s of e)this.langiumDocuments.invalidateDocument(s);for(let s of this.updateListeners)s(e,r);await(0,P_.interruptAndCheck)(n);let i=e.map(s=>this.langiumDocuments.getOrCreateDocument(s)),o=this.collectDocuments(i,r),a={validationChecks:"all"};await this.buildDocuments(o,a,n)}onUpdate(e){return this.updateListeners.push(e),up.Disposable.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}collectDocuments(e,r){let n=e.map(a=>a.uri).concat(r),i=this.indexManager.getAffectedDocuments(n).toArray();i.forEach(a=>{this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a),a.state=Math.min(a.state,Jn.DocumentState.ComputedScopes)});let o=new Set([...e,...i,...this.langiumDocuments.all.filter(a=>a.state<Jn.DocumentState.Validated)]);return Array.from(o)}async buildDocuments(e,r,n){await this.runCancelable(e,Jn.DocumentState.Parsed,n,o=>this.langiumDocumentFactory.update(o)),await this.runCancelable(e,Jn.DocumentState.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,Jn.DocumentState.ComputedScopes,n,o=>this.computeScopes(o,n)),await this.runCancelable(e,Jn.DocumentState.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,Jn.DocumentState.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o,r));await this.runCancelable(i,Jn.DocumentState.Validated,n,o=>this.validate(o,n))}async runCancelable(e,r,n,i){let o=e.filter(a=>a.state<r);for(let a of o)await(0,P_.interruptAndCheck)(n),await i(a);await this.notifyBuildPhase(o,r,n)}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),up.Disposable.create(()=>{this.buildPhaseListeners.delete(e,r)})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await(0,P_.interruptAndCheck)(n),await o(e,n)}async computeScopes(e,r){let n=this.serviceRegistry.getServices(e.uri).references.ScopeComputation;e.precomputedScopes=await n.computeLocalScopes(e,r),e.state=Jn.DocumentState.ComputedScopes}shouldValidate(e,r){return r.validationChecks==="all"}async validate(e,r){let i=await this.serviceRegistry.getServices(e.uri).validation.DocumentValidator.validateDocument(e,r);e.diagnostics=i,e.state=Jn.DocumentState.Validated}};cp.DefaultDocumentBuilder=N_});var I_=d(lp=>{"use strict";Object.defineProperty(lp,"__esModule",{value:!0});lp.DefaultIndexManager=void 0;var Hq=qe(),joe=Oe(),w_=Ot(),O_=fi(),Wq=Bi(),D_=class{constructor(e){this.simpleIndex=new Map,this.referenceIndex=new Map,this.globalScopeCache=new Map,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection,this.langiumDocuments=()=>e.workspace.LangiumDocuments}findAllReferences(e,r){let n=(0,joe.getDocument)(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(a=>{(0,O_.equalURI)(a.targetUri,n)&&a.targetPath===r&&i.push(a)})}),(0,w_.stream)(i)}allElements(e=""){this.globalScopeCache.has("")||this.globalScopeCache.set("",Array.from(this.simpleIndex.values()).flat());let r=this.globalScopeCache.get(e);if(r)return(0,w_.stream)(r);{let n=this.globalScopeCache.get("").filter(i=>this.astReflection.isSubtype(i.type,e));return this.globalScopeCache.set(e,n),(0,w_.stream)(n)}}remove(e){for(let r of e){let n=r.toString();this.simpleIndex.delete(n),this.referenceIndex.delete(n),this.globalScopeCache.clear()}}async updateContent(e,r=Hq.CancellationToken.None){this.globalScopeCache.clear();let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r);for(let o of i)o.node=void 0;this.simpleIndex.set(e.uri.toString(),i),e.state=Wq.DocumentState.IndexedContent}async updateReferences(e,r=Hq.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i),e.state=Wq.DocumentState.IndexedReferences}getAffectedDocuments(e){return this.langiumDocuments().all.filter(r=>{if(e.some(n=>(0,O_.equalURI)(r.uri,n)))return!1;for(let n of e)if(this.isAffected(r,n))return!0;return!1})}isAffected(e,r){let n=r.toString(),i=e.uri.toString();if(e.references.some(a=>a.error!==void 0))return!0;let o=this.referenceIndex.get(i);return o?o.filter(a=>!a.local).some(a=>(0,O_.equalURI)(a.targetUri,n)):!1}};lp.DefaultIndexManager=D_});var L_=d(dp=>{"use strict";Object.defineProperty(dp,"__esModule",{value:!0});dp.DefaultWorkspaceManager=void 0;var Goe=qe(),x_=ui(),Uoe=Mr(),q_=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.MutexLock,e.lsp.LanguageServer.onInitialize(r=>{var n;this.folders=(n=r.workspaceFolders)!==null&&n!==void 0?n:void 0}),e.lsp.LanguageServer.onInitialized(r=>{this.mutex.lock(n=>{var i;return this.initializeWorkspace((i=this.folders)!==null&&i!==void 0?i:[],n)})})}async initializeWorkspace(e,r=Goe.CancellationToken.None){let n=this.serviceRegistry.all.flatMap(a=>a.LanguageMetaData.fileExtensions),i=[],o=a=>{i.push(a),this.langiumDocuments.hasDocument(a.uri)||this.langiumDocuments.addDocument(a)};await this.loadAdditionalDocuments(e,o),await Promise.all(e.map(a=>[a,this.getRootFolder(a)]).map(async a=>this.traverseFolder(...a,n,o))),await(0,Uoe.interruptAndCheck)(r),await this.documentBuilder.build(i,void 0,r)}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return x_.URI.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async a=>{if(this.includeEntry(e,a,n)){if(a.isDirectory)await this.traverseFolder(e,a.uri,n,i);else if(a.isFile){let s=this.langiumDocuments.getOrCreateDocument(a.uri);i(s)}}}))}includeEntry(e,r,n){let i=x_.Utils.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=x_.Utils.extname(r.uri);return n.includes(o)}return!1}};dp.DefaultWorkspaceManager=q_});var j_=d(Qn=>{"use strict";Object.defineProperty(Qn,"__esModule",{value:!0});Qn.isTokenTypeDictionary=Qn.isIMultiModeLexerDefinition=Qn.isTokenTypeArray=Qn.DefaultLexer=void 0;var Hoe=Ho(),M_=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=$_(r)?Object.values(r):r;this.chevrotainLexer=new Hoe.Lexer(n)}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if($_(e))return e;let r=F_(e)?Object.values(e.modes).flat():e,n={};return r.forEach(i=>n[i.name]=i),n}};Qn.DefaultLexer=M_;function Kq(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}Qn.isTokenTypeArray=Kq;function F_(t){return t&&"modes"in t&&"defaultMode"in t}Qn.isIMultiModeLexerDefinition=F_;function $_(t){return!Kq(t)&&!F_(t)}Qn.isTokenTypeDictionary=$_});var fd=d($s=>{"use strict";Object.defineProperty($s,"__esModule",{value:!0});$s.createDefaultSharedModule=$s.createDefaultModule=void 0;var Woe=qe(),Koe=Xh(),Boe=P0(),zoe=Dq(),Voe=mg(),Yoe=yg(),Xoe=_g(),Joe=Ml(),Qoe=Ag(),Zoe=Sg(),eae=Dg(),tae=xg(),rae=Lg(),nae=i_(),iae=s_(),oae=l_(),aae=p_(),sae=Ra(),uae=ug(),cae=wl(),lae=Dl(),dae=g_(),fae=v_(),pae=Mr(),hae=ql(),mae=T_(),Bq=b_(),gae=Uq(),yae=E_(),vae=k_(),zq=Bi(),_ae=I_(),Tae=L_(),Rae=j_();function Aae(t){return{parser:{GrammarConfig:e=>(0,Boe.createGrammarConfig)(e),LangiumParser:e=>(0,nae.createLangiumParser)(e),CompletionParser:e=>(0,zoe.createCompletionParser)(e),ValueConverter:()=>new oae.DefaultValueConverter,TokenBuilder:()=>new iae.DefaultTokenBuilder,Lexer:e=>new Rae.DefaultLexer(e)},lsp:{CompletionProvider:e=>new Voe.DefaultCompletionProvider(e),DocumentSymbolProvider:e=>new Xoe.DefaultDocumentSymbolProvider(e),HoverProvider:e=>new Zoe.MultilineCommentHoverProvider(e),FoldingRangeProvider:e=>new Joe.DefaultFoldingRangeProvider(e),ReferencesProvider:e=>new tae.DefaultReferencesProvider(e),DefinitionProvider:e=>new Qoe.DefaultDefinitionProvider(e),DocumentHighlightProvider:e=>new Yoe.DefaultDocumentHighlightProvider(e),RenameProvider:e=>new rae.DefaultRenameProvider(e)},workspace:{AstNodeLocator:()=>new gae.DefaultAstNodeLocator,AstNodeDescriptionProvider:e=>new Bq.DefaultAstNodeDescriptionProvider(e),ReferenceDescriptionProvider:e=>new Bq.DefaultReferenceDescriptionProvider(e)},references:{Linker:e=>new aae.DefaultLinker(e),NameProvider:()=>new sae.DefaultNameProvider,ScopeProvider:e=>new lae.DefaultScopeProvider(e),ScopeComputation:e=>new cae.DefaultScopeComputation(e),References:e=>new uae.DefaultReferences(e)},serializer:{JsonSerializer:e=>new dae.DefaultJsonSerializer(e)},validation:{DocumentValidator:e=>new hae.DefaultDocumentValidator(e),ValidationRegistry:e=>new mae.ValidationRegistry(e)},shared:()=>t.shared}}$s.createDefaultModule=Aae;function bae(t){return{ServiceRegistry:()=>new fae.DefaultServiceRegistry,lsp:{Connection:()=>t.connection,LanguageServer:e=>new eae.DefaultLanguageServer(e)},workspace:{LangiumDocuments:e=>new zq.DefaultLangiumDocuments(e),LangiumDocumentFactory:e=>new zq.DefaultLangiumDocumentFactory(e),DocumentBuilder:e=>new vae.DefaultDocumentBuilder(e),TextDocuments:()=>new Woe.TextDocuments(Koe.TextDocument),IndexManager:e=>new _ae.DefaultIndexManager(e),WorkspaceManager:e=>new Tae.DefaultWorkspaceManager(e),FileSystemProvider:e=>t.fileSystemProvider(e),MutexLock:()=>new pae.MutexLock,ConfigurationProvider:e=>new yae.DefaultConfigurationProvider(e)}}}$s.createDefaultSharedModule=bae});var G_=d(wr=>{"use strict";Object.defineProperty(wr,"__esModule",{value:!0});wr.findIndentation=wr.SNLE=wr.expandToString=wr.expandToStringWithNL=void 0;var Tc=va();function Sae(t,...e){return Vq(t,...e)+Tc.EOL}wr.expandToStringWithNL=Sae;function Vq(t,...e){let r=e.reduce((a,s,u)=>{var c;return a+(s===void 0?wr.SNLE:Pae((0,Tc.toString)(s),a))+((c=t[u+1])!==null&&c!==void 0?c:"")},t[0]).split(Tc.EOL).filter(a=>a.trim()!==wr.SNLE).map(a=>a.replace(wr.SNLE,"").trimRight());r=r.length>1&&r[0].trim().length===0?r.slice(1):r,r=r.length!==0&&r[r.length-1].trimRight().length===0?r.slice(0,r.length-1):r;let o=Yq(r);return r.map(a=>a.slice(o).trimRight()).join(`
`)}wr.expandToString=Vq;wr.SNLE=Object.freeze("__\xABSKIP^NEW^LINE^IF^EMPTY\xBB__");var Cae=new RegExp(Tc.EOL,"g"),Eae=/\S|$/;function Pae(t,e){let r=Math.max(0,e.length-e.lastIndexOf(`
`)-1),n=" ".repeat(r);return t.replace(Cae,Tc.EOL+n)}function Yq(t){let e=t.filter(n=>n.length>0).map(n=>n.search(Eae)),r=e.length===0?0:Math.min(...e);return Math.max(0,r)}wr.findIndentation=Yq});var Jq=d(Fs=>{"use strict";Object.defineProperty(Fs,"__esModule",{value:!0});Fs.joinToNode=Fs.expandToNode=void 0;var ki=va(),Nae=G_(),fp=Object.freeze(new ki.NewLineNode),Xq=Object.freeze(new ki.CompositeGeneratorNode);function kae(t,...e){let r=wae(t),n=Oae(t,e,r);return Dae(n)}Fs.expandToNode=kae;function wae(t){let e=t.join("_").split(ki.EOL),r=e.length>1&&e[0].trim().length===0,n=r&&e.length>1&&e[e.length-1].trim().length===0;if(e.length===1||e.length!==0&&e[0].trim().length!==0||e.length===2&&e[1].trim().length===0)return{indentation:0,omitFirstLine:r,omitLastLine:n,trimLastLine:e.length!==1&&e[e.length-1].trim().length===0};{let i=r?e.slice(1):e;i=n?i.slice(0,i.length-1):i,i=i.filter(a=>a.length!==0);let o=(0,Nae.findIndentation)(i);return{indentation:o,omitFirstLine:r,omitLastLine:n&&(e[e.length-1].length<o||!e[e.length-1].startsWith(i[0].substring(0,o)))}}}function Oae(t,e,{indentation:r,omitFirstLine:n,omitLastLine:i,trimLastLine:o}){let a=[];t.forEach((c,l)=>{a.push(...c.split(ki.EOL).map((f,h)=>h===0||f.length<r?f:f.substring(r)).reduce(l===0?(f,h,v)=>v===0?n?[]:[h]:v===1&&f.length===0?[h]:f.concat(fp,h):(f,h,v)=>v===0?[h]:f.concat(fp,h),[]).filter(f=>!(typeof f=="string"&&f.length===0)).concat((0,ki.isGeneratorNode)(e[l])?e[l]:e[l]!==void 0?new ki.CompositeGeneratorNode(String(e[l])):l<e.length?Xq:[]))});let s=a.length,u=s!==0?a[s-1]:void 0;return(i||o)&&typeof u=="string"&&u.trim().length===0?n&&s!==1&&a[s-2]===fp?a.slice(0,s-2):a.slice(0,s-1):a}function Dae(t){return t.reduce((r,n,i)=>n===Xq?r:n===fp?{indent:"",node:i===0||(0,ki.isNewLineNode)(t[i-1])||typeof t[i-1]=="string"?r.node.appendNewLine():r.node.appendNewLineIfNotEmpty()}:(()=>({indent:r.indent===""&&typeof n=="string"&&n.length!==0?"".padStart(n.length-n.trimLeft().length):r.indent,node:r.indent.length===0?r.node.append(n):r.node.indent(a=>a.append(n),r.indent)}))(),{indent:"",node:new ki.CompositeGeneratorNode}).node}function Iae(t,e=String,{prefix:r,suffix:n,appendNewLineIfNotEmpty:i}={}){return xae(t,(o,a,s,u)=>(o??(o=new ki.CompositeGeneratorNode),o.append(r&&r(a,s,u)).append(e(a,s,u)).append(n&&n(a,s,u)).appendNewLineIfNotEmptyIf(!o.isEmpty()&&!!i)))}Fs.joinToNode=Iae;function xae(t,e,r){let n=t[Symbol.iterator](),i=n.next(),o=0,a=r;for(;!i.done;){let s=n.next();a=e(a,i.value,o,Boolean(s.done)),i=s,o++}return a}});var Zq=d(Qq=>{"use strict";Object.defineProperty(Qq,"__esModule",{value:!0})});var tL=d(eL=>{"use strict";Object.defineProperty(eL,"__esModule",{value:!0})});var nL=d(rL=>{"use strict";Object.defineProperty(rL,"__esModule",{value:!0})});var Rc=d(J=>{"use strict";var iL=J&&J.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),qae=J&&J.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),ue=J&&J.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&iL(e,t,r)},Lae=J&&J.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&iL(e,t,r);return qae(e,t),e};Object.defineProperty(J,"__esModule",{value:!0});J.GrammarAST=J.expandToStringWithNL=J.expandToString=void 0;ue(fd(),J);ue(fu(),J);ue(va(),J);ue(Jq(),J);var oL=G_();Object.defineProperty(J,"expandToString",{enumerable:!0,get:function(){return oL.expandToString}});Object.defineProperty(J,"expandToStringWithNL",{enumerable:!0,get:function(){return oL.expandToStringWithNL}});ue(wm(),J);ue(Vg(),J);ue(Zq(),J);ue($g(),J);ue(Vf(),J);ue(i_(),J);ue(tL(),J);ue(s_(),J);ue(l_(),J);ue(j_(),J);ue(p_(),J);ue(Ra(),J);ue(wl(),J);ue(Dl(),J);ue(g_(),J);ue(v_(),J);ue(nL(),J);ue(dr(),J);ue(Oe(),J);ue(br(),J);ue(Xe(),J);ue(St(),J);ue(Mr(),J);ue(fi(),J);ue(Aa(),J);ue(Ot(),J);ue(ql(),J);ue(T_(),J);ue(b_(),J);ue(k_(),J);ue(Bi(),J);ue(I_(),J);ue(Yg(),J);ue(L_(),J);ue(E_(),J);var Mae=Lae(ke());J.GrammarAST=Mae});var sL=d((Rme,aL)=>{"use strict";aL.exports=qe()});var js=Hs(Rc()),lo=Hs(sL());var Bo=Hs(Rc());var cL=Hs(Rc()),$ae="Command";var Fae="Event";var uL="State";var Ac=class extends cL.AbstractAstReflection{getAllTypes(){return["Command","Event","State","Statemachine","Transition"]}computeIsSubtype(e,r){switch(e){default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"State:actions":return $ae;case"Statemachine:init":return uL;case"Transition:event":return Fae;case"Transition:state":return uL;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"State":return{name:"State",mandatory:[{name:"actions",type:"array"},{name:"transitions",type:"array"}]};case"Statemachine":return{name:"Statemachine",mandatory:[{name:"commands",type:"array"},{name:"events",type:"array"},{name:"states",type:"array"}]};default:return{name:e,mandatory:[]}}}},Eme=new Ac;var dL=Hs(Rc()),lL,fL=()=>lL??(lL=(0,dL.loadGrammarFromJson)(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "Statemachine",
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Statemachine",
      "entry": true,
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "statemachine"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "events"
              },
              {
                "$type": "Assignment",
                "feature": "events",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "commands"
              },
              {
                "$type": "Assignment",
                "feature": "commands",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@2"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "initialState"
          },
          {
            "$type": "Assignment",
            "feature": "init",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@3"
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Assignment",
            "feature": "states",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Event",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@6"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Command",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@6"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "State",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "state"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "actions"
              },
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "actions",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@2"
                  },
                  "deprecatedSyntax": false
                },
                "cardinality": "+"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "transitions",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@4"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "end"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Transition",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "event",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@1"
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Keyword",
            "value": "=>"
          },
          {
            "$type": "Assignment",
            "feature": "state",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@3"
              },
              "deprecatedSyntax": false
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\s+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "[_a-zA-Z][\\\\w_]*"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "[0-9]+"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\"[^\\"]*\\"|'[^']*'"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
      },
      "fragment": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "imports": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`));var jae={languageId:"statemachine",fileExtensions:[".statemachine"],caseInsensitive:!1},pL={AstReflection:()=>new Ac},hL={Grammar:()=>fL(),LanguageMetaData:()=>jae,parser:{}};function mL(t){let e=t.validation.ValidationRegistry,r=t.validation.StatemachineValidator,n={State:r.checkStateNameStartsWithCapital};e.register(n,r)}var pp=class{checkStateNameStartsWithCapital(e,r){if(e.name){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","State name should start with a capital letter.",{node:e,property:"name"})}}};var Gae={validation:{StatemachineValidator:()=>new pp}};function gL(t){let e=(0,Bo.inject)((0,Bo.createDefaultSharedModule)(t),pL),r=(0,Bo.inject)((0,Bo.createDefaultModule)({shared:e}),hL,Gae);return e.ServiceRegistry.register(r),mL(r),{shared:e,statemachine:r}}var Uae=new lo.BrowserMessageReader(self),Hae=new lo.BrowserMessageWriter(self),yL=(0,lo.createConnection)(Uae,Hae),{shared:vL,statemachine:Wae}=gL({connection:yL,...js.EmptyFileSystem});(0,js.startLanguageServer)(vL);var Kae=new lo.NotificationType("browser/DocumentChange"),Bae=Wae.serializer.JsonSerializer;vL.workspace.DocumentBuilder.onBuildPhase(js.DocumentState.Validated,t=>{for(let e of t){let r=Bae.serialize(e.parseResult.value);yL.sendNotification(Kae,{uri:e.uri.toString(),content:r,diagnostics:e.diagnostics??[]})}});})();
//# sourceMappingURL=languageServer.js.map
