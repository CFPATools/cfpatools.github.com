var ye=Object.defineProperty;var De=(o,e,t)=>e in o?ye(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var y=(o,e)=>()=>(o&&(e=o(o=0)),e);var H=(o,e)=>{for(var t in e)ye(o,t,{get:e[t],enumerable:!0})};var w=(o,e,t)=>(De(o,typeof e!="symbol"?e+"":e,t),t);var Ie,D,G=y(()=>{Ie={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File},D=Ie});var $={};H($,{FileHandle:()=>_,FolderHandle:()=>M,Sink:()=>V,default:()=>je});var z,Be,p,Re,g,ve,We,ie,br,Oe,V,_,M,Ne,je,X=y(()=>{A();G();({File:z,Blob:Be,DOMException:p}=D),{INVALID:Re,GONE:g,MISMATCH:ve,MOD_ERR:We,SYNTAX:ie,SECURITY:br,DISALLOWED:Oe}=T,V=class{constructor(e,t){this.fileHandle=e,this.file=t,this.size=t.size,this.position=0}write(e){let t=this.file;if(typeof e=="object"){if(e.type==="write"){if(Number.isInteger(e.position)&&e.position>=0&&(this.position=e.position,this.size<e.position&&(this.file=new z([this.file,new ArrayBuffer(e.position-this.size)],this.file.name,this.file))),!("data"in e))throw new p(...ie("write requires a data argument"));e=e.data}else if(e.type==="seek")if(Number.isInteger(e.position)&&e.position>=0){if(this.size<e.position)throw new p(...Re);this.position=e.position;return}else throw new p(...ie("seek requires a position argument"));else if(e.type==="truncate")if(Number.isInteger(e.size)&&e.size>=0){t=e.size<this.size?new z([t.slice(0,e.size)],t.name,t):new z([t,new Uint8Array(e.size-this.size)],t.name),this.size=t.size,this.position>t.size&&(this.position=t.size),this.file=t;return}else throw new p(...ie("truncate requires a size argument"))}e=new Be([e]);let r=this.file,i=r.slice(0,this.position),n=r.slice(this.position+e.size),a=this.position-i.size;a<0&&(a=0),r=new z([i,new Uint8Array(a),e,n],r.name),this.size=r.size,this.position+=e.size,this.file=r}close(){if(this.fileHandle._deleted)throw new p(...g);this.fileHandle._file=this.file,this.file=this.position=this.size=null,this.fileHandle.onclose&&this.fileHandle.onclose(this.fileHandle)}},_=class{constructor(e="",t=new z([],e),r=!0){this._file=t,this.name=e,this.kind="file",this._deleted=!1,this.writable=r,this.readable=!0}async getFile(){if(this._deleted)throw new p(...g);return this._file}async createWritable(e){if(!this.writable)throw new p(...Oe);if(this._deleted)throw new p(...g);let t=e.keepExistingData?await this.getFile():new z([],this.name);return new V(this,t)}async isSameEntry(e){return this===e}async _destroy(){this._deleted=!0,this._file=null}},M=class{constructor(e,t=!0){this.name=e,this.kind="directory",this._deleted=!1,this._entries={},this.writable=t,this.readable=!0}async*entries(){if(this._deleted)throw new p(...g);yield*Object.entries(this._entries)}async isSameEntry(e){return this===e}async getDirectoryHandle(e,t){if(this._deleted)throw new p(...g);let r=this._entries[e];if(r){if(r instanceof _)throw new p(...ve);return r}else{if(t.create)return this._entries[e]=new M(e);throw new p(...g)}}async getFileHandle(e,t){let r=this._entries[e],i=r instanceof _;if(r&&i)return r;if(r&&!i)throw new p(...ve);if(!r&&!t.create)throw new p(...g);if(!r&&t.create)return this._entries[e]=new _(e)}async removeEntry(e,t){let r=this._entries[e];if(!r)throw new p(...g);await r._destroy(t.recursive),delete this._entries[e]}async _destroy(e){for(let t of Object.values(this._entries)){if(!e)throw new p(...We);await t._destroy(e)}this._entries={},this._deleted=!0}},Ne=new M(""),je=()=>Ne});var ne={};H(ne,{FileHandle:()=>O,FolderHandle:()=>v,default:()=>qe});var Ue,Y,O,v,qe,ae=y(()=>{A();({DISALLOWED:Ue}=T),Y=class{constructor(e,t){this.writer=e,this.fileEntry=t}async write(e){if(typeof e=="object"){if(e.type==="write"){if(Number.isInteger(e.position)&&e.position>=0&&(this.writer.seek(e.position),this.writer.position!==e.position&&(await new Promise((t,r)=>{this.writer.onwriteend=t,this.writer.onerror=r,this.writer.truncate(e.position)}),this.writer.seek(e.position))),!("data"in e))throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. write requires a data argument","SyntaxError");e=e.data}else if(e.type==="seek")if(Number.isInteger(e.position)&&e.position>=0){if(this.writer.seek(e.position),this.writer.position!==e.position)throw new DOMException("seeking position failed","InvalidStateError");return}else throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. seek requires a position argument","SyntaxError");else if(e.type==="truncate")return new Promise(t=>{if(Number.isInteger(e.size)&&e.size>=0)this.writer.onwriteend=r=>t(),this.writer.truncate(e.size);else throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. truncate requires a size argument","SyntaxError")})}await new Promise((t,r)=>{this.writer.onwriteend=t,this.writer.onerror=r,this.writer.write(new Blob([e]))})}close(){return new Promise(this.fileEntry.file.bind(this.fileEntry))}},O=class{constructor(e,t=!0){this.file=e,this.kind="file",this.writable=t,this.readable=!0}get name(){return this.file.name}isSameEntry(e){return this.file.toURL()===e.file.toURL()}getFile(){return new Promise(this.file.file.bind(this.file))}createWritable(e){if(!this.writable)throw new DOMException(...Ue);return new Promise((t,r)=>this.file.createWriter(i=>{e.keepExistingData===!1?(i.onwriteend=n=>t(new Y(i,this.file)),i.truncate(0)):t(new Y(i,this.file))},r))}},v=class{constructor(e,t=!0){this.dir=e,this.writable=t,this.readable=!0,this.kind="directory",this.name=e.name}isSameEntry(e){return this.dir.fullPath===e.dir.fullPath}async*entries(){let e=this.dir.createReader(),t=await new Promise(e.readEntries.bind(e));for(let r of t)yield[r.name,r.isFile?new O(r,this.writable):new v(r,this.writable)]}getDirectoryHandle(e,t){return new Promise((r,i)=>{this.dir.getDirectory(e,t,n=>{r(new v(n))},i)})}getFileHandle(e,t){return new Promise((r,i)=>this.dir.getFile(e,t,n=>r(new O(n)),i))}async removeEntry(e,t){let r=await this.getDirectoryHandle(e,{create:!1}).catch(i=>i.name==="TypeMismatchError"?this.getFileHandle(e,{create:!1}):i);if(r instanceof Error)throw r;return new Promise((i,n)=>{r instanceof v?t.recursive?r.dir.removeRecursively(()=>i(),n):r.dir.remove(()=>i(),n):r.file&&r.file.remove(()=>i(),n)})}},qe=(o={})=>new Promise((e,t)=>window.webkitRequestFileSystem(o._persistent,0,r=>e(new v(r.root)),t))});var S,Ke,Q,N,J=y(()=>{S=Symbol("adapter"),Q=class{constructor(e){w(this,Ke);w(this,"name");w(this,"kind");this.kind=e.kind,this.name=e.name,this[S]=e}async queryPermission({mode:e="read"}={}){let t=this[S];if(t.queryPermission)return t.queryPermission({mode:e});if(e==="read")return"granted";if(e==="readwrite")return t.writable?"granted":"denied";throw new TypeError(`Mode ${e} must be 'read' or 'readwrite'`)}async requestPermission({mode:e="read"}={}){let t=this[S];if(t.requestPermission)return t.requestPermission({mode:e});if(e==="read")return"granted";if(e==="readwrite")return t.writable?"granted":"denied";throw new TypeError(`Mode ${e} must be 'read' or 'readwrite'`)}async remove(e={}){await this[S].remove(e)}async isSameEntry(e){return this===e?!0:!e||typeof e!="object"||this.kind!==e.kind||!e[S]?!1:this[S].isSameEntry(e[S])}};Ke=S;Object.defineProperty(Q.prototype,Symbol.toStringTag,{value:"FileSystemHandle",writable:!1,enumerable:!1,configurable:!0});N=Q});var Ge,C,oe,se=y(()=>{G();({WritableStream:Ge}=D),C=class extends Ge{constructor(...e){super(...e),Object.setPrototypeOf(this,C.prototype),this._closed=!1}close(){this._closed=!0;let e=this.getWriter(),t=e.close();return e.releaseLock(),t}seek(e){return this.write({type:"seek",position:e})}truncate(e){return this.write({type:"truncate",size:e})}write(e){if(this._closed)return Promise.reject(new TypeError("Cannot write to a CLOSED writable stream"));let t=this.getWriter(),r=t.write(e);return t.releaseLock(),r}};Object.defineProperty(C.prototype,Symbol.toStringTag,{value:"FileSystemWritableFileStream",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(C.prototype,{close:{enumerable:!0},seek:{enumerable:!0},truncate:{enumerable:!0},write:{enumerable:!0}});oe=C});var F={};H(F,{FileSystemFileHandle:()=>I,default:()=>Se});var Z,Ve,I,Se,E=y(()=>{J();se();Z=Symbol("adapter"),I=class extends N{constructor(t){super(t);w(this,Ve);this[Z]=t}async createWritable(t={}){return new oe(await this[Z].createWritable(t))}async getFile(){return this[Z].getFile()}};Ve=Z;Object.defineProperty(I.prototype,Symbol.toStringTag,{value:"FileSystemFileHandle",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(I.prototype,{createWritable:{enumerable:!0},getFile:{enumerable:!0}});Se=I});var ee={};H(ee,{FileSystemDirectoryHandle:()=>f,default:()=>Ee});var x,$e,f,Ee,j=y(()=>{J();x=Symbol("adapter"),f=class extends N{constructor(t){super(t);w(this,$e);this[x]=t}async getDirectoryHandle(t,r={}){if(t==="")throw new TypeError("Name can't be an empty string.");if(t==="."||t===".."||t.includes("/"))throw new TypeError("Name contains invalid characters.");r.create=!!r.create;let i=await this[x].getDirectoryHandle(t,r);return new f(i)}async*entries(){let{FileSystemFileHandle:t}=await Promise.resolve().then(()=>(E(),F));for await(let[r,i]of this[x].entries())yield[i.name,i.kind==="file"?new t(i):new f(i)]}async*getEntries(){let{FileSystemFileHandle:t}=await Promise.resolve().then(()=>(E(),F));console.warn("deprecated, use .entries() instead");for await(let r of this[x].entries())yield r.kind==="file"?new t(r):new f(r)}async getFileHandle(t,r={}){let{FileSystemFileHandle:i}=await Promise.resolve().then(()=>(E(),F));if(t==="")throw new TypeError("Name can't be an empty string.");if(t==="."||t===".."||t.includes("/"))throw new TypeError("Name contains invalid characters.");r.create=!!r.create;let n=await this[x].getFileHandle(t,r);return new i(n)}async removeEntry(t,r={}){if(t==="")throw new TypeError("Name can't be an empty string.");if(t==="."||t===".."||t.includes("/"))throw new TypeError("Name contains invalid characters.");return r.recursive=!!r.recursive,this[x].removeEntry(t,r)}async resolve(t){if(await t.isSameEntry(this))return[];let r=[{handle:this,path:[]}];for(;r.length;){let{handle:i,path:n}=r.pop();for await(let a of i.values()){if(await a.isSameEntry(t))return[...n,a.name];a.kind==="directory"&&r.push({handle:a,path:[...n,a.name]})}}return null}async*keys(){for await(let[t]of this[x].entries())yield t}async*values(){for await(let[t,r]of this)yield r}[($e=x,Symbol.asyncIterator)](){return this.entries()}};Object.defineProperty(f.prototype,Symbol.toStringTag,{value:"FileSystemDirectoryHandle",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(f.prototype,{getDirectoryHandle:{enumerable:!0},entries:{enumerable:!0},getFileHandle:{enumerable:!0},removeEntry:{enumerable:!0}});Ee=f});var le={};H(le,{config:()=>Xe,errors:()=>T,fromDataTransfer:()=>Ye,getDirHandlesFromInput:()=>Qe,getFileHandlesFromInput:()=>Je});async function Ye(o){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");let[e,t,r]=await Promise.all([Promise.resolve().then(()=>(X(),$)),Promise.resolve().then(()=>(ae(),ne)),Promise.resolve().then(()=>(j(),ee))]),i=new e.FolderHandle("",!1);return i._entries=o.map(n=>n.isFile?new t.FileHandle(n,!1):new t.FolderHandle(n,!1)),new r.FileSystemDirectoryHandle(i)}async function Qe(o){let{FolderHandle:e,FileHandle:t}=await Promise.resolve().then(()=>(X(),$)),{FileSystemDirectoryHandle:r}=await Promise.resolve().then(()=>(j(),ee)),i=Array.from(o.files),n=i[0].webkitRelativePath.split("/",1)[0],a=new e(n,!1);return i.forEach(s=>{let c=s.webkitRelativePath.split("/");c.shift();let u=c.pop(),d=c.reduce((m,l)=>(m._entries[l]||(m._entries[l]=new e(l,!1)),m._entries[l]),a);d._entries[u]=new t(s.name,s,!1)}),new r(a)}async function Je(o){let{FileHandle:e}=await Promise.resolve().then(()=>(X(),$)),{FileSystemFileHandle:t}=await Promise.resolve().then(()=>(E(),F));return Array.from(o.files).map(r=>new t(new e(r.name,r,!1)))}var T,Xe,A=y(()=>{T={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:o=>[`Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${o}`,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},Xe={writable:globalThis.WritableStream}});var ke={};H(ke,{FileHandle:()=>ue});var Te,Ce,rt,Fe,it,nt,ue,at,ot,st,lt,ct,pe,me,He=y(()=>{A();G();({WritableStream:Te,TransformStream:Ce,DOMException:rt,Blob:Fe}=D),{GONE:it}=T,nt=/constructor/i.test(window.HTMLElement)||window.safari||window.WebKitPoint,ue=class{constructor(e="unkown"){this.name=e,this.kind="file"}async getFile(){throw new rt(...it)}async isSameEntry(e){return this===e}async createWritable(e={}){var a;let t=await((a=navigator.serviceWorker)==null?void 0:a.getRegistration()),r=document.createElement("a"),i=new Ce,n=i.writable;if(r.download=this.name,nt||!t){let s=[];i.readable.pipeTo(new Te({write(c){s.push(new Fe([c]))},close(){let c=new Fe(s,{type:"application/octet-stream; charset=utf-8"});s=[],r.href=URL.createObjectURL(c),r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),1e4)}}))}else{let{writable:s,readablePort:c}=new me(Te),u=encodeURIComponent(this.name).replace(/['()]/g,escape).replace(/\*/g,"%2A"),d={"content-disposition":"attachment; filename*=UTF-8''"+u,"content-type":"application/octet-stream; charset=utf-8",...e.size?{"content-length":e.size}:{}},m=setTimeout(()=>t.active.postMessage(0),1e4);i.readable.pipeThrough(new Ce({transform(h,k){if(h instanceof Uint8Array)return k.enqueue(h);let U=new Response(h).body.getReader(),B=ut=>U.read().then(fe=>fe.done?0:B(k.enqueue(fe.value)));return B()}})).pipeTo(s).finally(()=>{clearInterval(m)}),t.active.postMessage({url:t.scope+u,headers:d,readablePort:c},[c]);let l=document.createElement("iframe");l.hidden=!0,l.src=t.scope+u,document.body.appendChild(l)}return n.getWriter()}},at=0,ot=0,st=1,lt=1,ct=2,pe=class{constructor(e){e.onmessage=t=>this._onMessage(t.data),this._port=e,this._resetReady()}start(e){return this._controller=e,this._readyPromise}write(e){let t={type:at,chunk:e};return this._port.postMessage(t,[e.buffer]),this._resetReady(),this._readyPromise}close(){this._port.postMessage({type:ct}),this._port.close()}abort(e){this._port.postMessage({type:lt,reason:e}),this._port.close()}_onMessage(e){e.type===ot&&this._resolveReady(),e.type===st&&this._onError(e.reason)}_onError(e){this._controller.error(e),this._rejectReady(e),this._port.close()}_resetReady(){this._readyPromise=new Promise((e,t)=>{this._readyResolve=e,this._readyReject=t}),this._readyPending=!0}_resolveReady(){this._readyResolve(),this._readyPending=!1}_rejectReady(e){this._readyPending||this._resetReady(),this._readyPromise.catch(()=>{}),this._readyReject(e),this._readyPending=!1}},me=class{constructor(e){let t=new MessageChannel;this.readablePort=t.port1,this.writable=new e(new pe(t.port2))}}});var te=class{constructor(e){this.database=e}openStore(e,t){return this.database.transaction(e,t).objectStore(e)}async put(e,t,r){let i=this.openStore(e,"readwrite");return await new Promise((n,a)=>{let s=i.put(t,r);s.onsuccess=()=>{n(s.result)},s.onerror=()=>{a(s.error)}})}get(e,t){let r=this.openStore(e,"readonly");return new Promise((i,n)=>{let a=r.get(t);a.onsuccess=()=>{i(a.result)},a.onerror=()=>{n(a.error)}})}async delete(e,t){let r=this.openStore(e,"readwrite");return await new Promise((i,n)=>{let a=r.delete(t);a.onsuccess=()=>{i()},a.onerror=()=>{n(a.error)}})}close(){this.database.close()}},re=class{constructor(e,t){this.databaseName=e;this.objectStores=t}async connect(){let e=window.indexedDB.open(this.databaseName,1);return e.onupgradeneeded=t=>{let r=t.target.result;this.objectStores.forEach(i=>{r.createObjectStore(i)})},await new Promise((t,r)=>{e.onsuccess=i=>{t(new te(i.target.result))},e.onerror=i=>{r(i.target.error)}})}},L="fileBookmarks",R=new re("AvaloniaDb",[L]);var q=class{static getCaretCoordinates(e,t,r){var m,l;if(!we)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");let i=(m=r==null?void 0:r.debug)!=null?m:!1;if(i){let h=document.querySelector("#input-textarea-caret-position-mirror-div");h&&((l=h.parentNode)==null||l.removeChild(h))}let n=document.createElement("div");n.id="input-textarea-caret-position-mirror-div",document.body.appendChild(n);let a=n.style,s=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,c=e.nodeName==="INPUT";a.whiteSpace="pre-wrap",c||(a.wordWrap="break-word"),a.position="absolute",i||(a.visibility="hidden"),ze.forEach(h=>{if(c&&h==="lineHeight")if(s.boxSizing==="border-box"){let k=parseInt(s.height),U=parseInt(s.paddingTop)+parseInt(s.paddingBottom)+parseInt(s.borderTopWidth)+parseInt(s.borderBottomWidth),B=U+parseInt(s.lineHeight);k>B?a.lineHeight=`${k-U}px`:k===B?a.lineHeight=s.lineHeight:a.lineHeight="0"}else a.lineHeight=s.height;else a[h]=s[h]}),_e?e.scrollHeight>parseInt(s.height)&&(a.overflowY="scroll"):a.overflow="hidden",n.textContent=e.value.substring(0,t),c&&(n.textContent=n.textContent.replace(/\s/g,"\xA0"));let u=document.createElement("span");u.textContent=e.value.substring(t)||".",n.appendChild(u);let d={top:u.offsetTop+parseInt(s.borderTopWidth),left:u.offsetLeft+parseInt(s.borderLeftWidth),height:parseInt(s.lineHeight)};return i?u.style.backgroundColor="#aaa":document.body.removeChild(n),d}},ze=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],we=typeof window!="undefined",_e=we&&window.mozInnerScreenX!=null;var K=class{static initializeBackgroundHandlers(){this.clipboardState===0&&(globalThis.addEventListener("paste",e=>{this.clipboardState===2&&this.resolveClipboard(e.clipboardData.getData("text"))}),this.clipboardState=1)}static async readClipboardText(){if(globalThis.navigator.clipboard.readText)return await globalThis.navigator.clipboard.readText();try{return await new Promise((e,t)=>{this.clipboardState=2,this.resolveClipboard=e,this.rejectClipboard=t})}finally{this.clipboardState=1,this.resolveClipboard=null,this.rejectClipboard=null}}static subscribeKeyEvents(e,t,r){let i=a=>{t(a.code,a.key,this.getModifiers(a))&&this.clipboardState!==2&&a.preventDefault()};e.addEventListener("keydown",i);let n=a=>{r(a.code,a.key,this.getModifiers(a))&&a.preventDefault(),this.rejectClipboard&&this.rejectClipboard()};return e.addEventListener("keyup",n),()=>{e.removeEventListener("keydown",i),e.removeEventListener("keyup",n)}}static subscribeTextEvents(e,t,r,i,n){let a=d=>{r(d)&&d.preventDefault()};e.addEventListener("compositionstart",a);let s=d=>{let m=d.getTargetRanges(),l=-1,h=-1;m.length>0&&(l=m[0].startOffset,h=m[0].endOffset),d.inputType==="insertCompositionText"&&(l=2,h=l+2),t(d,l,h)&&d.preventDefault()};e.addEventListener("beforeinput",s);let c=d=>{i(d)&&d.preventDefault()};e.addEventListener("compositionupdate",c);let u=d=>{n(d)&&d.preventDefault()};return e.addEventListener("compositionend",u),()=>{e.removeEventListener("compositionstart",a),e.removeEventListener("compositionupdate",c),e.removeEventListener("compositionend",u)}}static subscribePointerEvents(e,t,r,i,n,a){let s=l=>{t(l),l.preventDefault()},c=l=>{r(l),l.preventDefault()},u=l=>{i(l),l.preventDefault()},d=l=>{n(l),l.preventDefault()},m=l=>{a(l),l.preventDefault()};return e.addEventListener("pointermove",s),e.addEventListener("pointerdown",c),e.addEventListener("pointerup",u),e.addEventListener("wheel",m),e.addEventListener("pointercancel",d),()=>{e.removeEventListener("pointerover",s),e.removeEventListener("pointerdown",c),e.removeEventListener("pointerup",u),e.removeEventListener("pointercancel",d),e.removeEventListener("wheel",m)}}static subscribeInputEvents(e,t){let r=i=>{t(i.value)&&i.preventDefault()};return e.addEventListener("input",r),()=>{e.removeEventListener("input",r)}}static subscribeDropEvents(e,t){let r=i=>{t(i)&&i.preventDefault()};return e.addEventListener("dragover",r),e.addEventListener("dragenter",r),e.addEventListener("dragleave",r),e.addEventListener("drop",r),()=>{e.removeEventListener("dragover",r),e.removeEventListener("dragenter",r),e.removeEventListener("dragleave",r),e.removeEventListener("drop",r)}}static getCoalescedEvents(e){return e.getCoalescedEvents()}static subscribeKeyboardGeometryChange(e,t){"virtualKeyboard"in navigator&&navigator.virtualKeyboard.addEventListener("geometrychange",r=>{let i=e.getBoundingClientRect(),n=r.target.boundingRect;t({x:n.x-i.x,y:n.y-i.y,width:n.width,height:n.height})})}static subscribeVisibilityChange(e){return document.addEventListener("visibilitychange",()=>{e(document.visibilityState==="visible")}),document.visibilityState==="visible"}static clearInput(e){e.value=""}static focusElement(e){e.focus()}static setCursor(e,t){t==="default"?e.style.removeProperty("cursor"):e.style.cursor=t}static setBounds(e,t,r,i,n,a){e.style.left=t.toFixed(0)+"px",e.style.top=r.toFixed(0)+"px";let{left:s,top:c}=q.getCaretCoordinates(e,a);e.style.left=(t-s).toFixed(0)+"px",e.style.top=(r-c).toFixed(0)+"px"}static hide(e){e.style.display="none"}static show(e){e.style.display="block"}static setSurroundingText(e,t,r,i){!e||(e.value=t,e.setSelectionRange(r,i),e.style.width="20px",e.style.width=`${e.scrollWidth}px`)}static getModifiers(e){let t=0;return e.ctrlKey&&(t|=2),e.altKey&&(t|=1),e.shiftKey&&(t|=4),e.metaKey&&(t|=8),t}static setPointerCapture(e,t){e.setPointerCapture(t)}static releasePointerCapture(e,t){e.hasPointerCapture(t)&&e.releasePointerCapture(t)}};K.clipboardState=0;var P=class{static hasNativeFilePicker(){return"showSaveFilePicker"in globalThis}static isMobile(){var n;let e=(n=globalThis.navigator)==null?void 0:n.userAgentData;if(e)return e.mobile;let t=navigator.userAgent,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i;return r.test(t)||i.test(t.substr(0,4))}static isTv(){return navigator.userAgent.includes("SmartTV")}};var b=class{constructor(e,t,r,i){this.handle=e;this.file=t;this.bookmarkId=r;this.wellKnownType=i}get name(){var e;return this.handle?this.handle.name:this.file?this.file.name:(e=this.wellKnownType)!=null?e:""}get kind(){return this.handle?this.handle.kind:this.file?"file":"directory"}static createFromHandle(e,t){return new b(e,void 0,t,void 0)}static createFromFile(e){return new b(void 0,e,void 0,void 0)}static createWellKnownDirectory(e){return new b(void 0,void 0,void 0,e)}static async openRead(e){if(e.file)return e.file;if(!e.handle||e.kind!=="file")throw new Error("StorageItem is not a file");return await e.verityPermissions("read"),await e.handle.getFile()}static async openWrite(e){if(!e.handle||e.kind!=="file")throw new Error("StorageItem is not a writeable file");return await e.verityPermissions("readwrite"),await e.handle.createWritable({keepExistingData:!0})}static async getProperties(e){try{let t=e.handle&&"getFile"in e.handle?await e.handle.getFile():e.file;return t?{Size:t.size,LastModified:t.lastModified,Type:t.type}:null}catch(t){return null}}static getItemsIterator(e){return e.kind!=="directory"||!e.handle?null:e.handle.entries()}static async createFile(e,t){if(e.kind!=="directory"||!e.handle)throw new TypeError("Unable to create item in the requested directory");return await e.verityPermissions("readwrite"),await e.handle.getFileHandle(t,{create:!0})}static async createFolder(e,t){if(e.kind!=="directory"||!e.handle)throw new TypeError("Unable to create item in the requested directory");return await e.verityPermissions("readwrite"),await e.handle.getDirectoryHandle(t,{create:!0})}static async deleteAsync(e){return e.handle?(await e.verityPermissions("readwrite"),await e.handle.remove({recursive:!0})):null}static async moveAsync(e,t){if(!e.handle)return null;if(t.kind!=="directory"||!t.handle)throw new TypeError("Unable to move item to the requested directory");return await e.verityPermissions("readwrite"),await e.handle.move(t)}async verityPermissions(e){if(!!this.handle&&!!P.hasNativeFilePicker()&&await this.handle.queryPermission({mode:e})!=="granted"&&await this.handle.requestPermission({mode:e})==="denied")throw new Error("Permissions denied")}static async saveBookmark(e){if(e.bookmarkId)return e.bookmarkId;if(!e.handle||!P.hasNativeFilePicker())return null;let t=await R.connect();try{return await t.put(L,e.handle,e.generateBookmarkId())}finally{t.close()}}static async deleteBookmark(e){if(!e.bookmarkId||!P.hasNativeFilePicker())return;let t=await R.connect();try{await t.delete(L,e.bookmarkId)}finally{t.close()}}generateBookmarkId(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}},W=class{constructor(e){this.items=e}static itemsArray(e){return e.items}static filesToItemsArray(e){if(!e)return[];let t=[];for(let r=0;r<e.length;r++)t[r]=b.createFromFile(e[r]);return t}};var xe=globalThis.showDirectoryPicker;async function Ze(o={}){if(xe&&!o._preferPolyfill)return xe(o);let e=document.createElement("input");if(e.type="file",!("webkitdirectory"in e))throw new Error("HTMLInputElement.webkitdirectory is not supported");e.style.position="fixed",e.style.top="-100000px",e.style.left="-100000px",document.body.appendChild(e),e.webkitdirectory=!0;let t=Promise.resolve().then(()=>(A(),le));return await new Promise(r=>{e.addEventListener("change",r),e.click()}),t.then(r=>r.getDirHandlesFromInput(e))}var ce=Ze;var et={accepts:[]},Pe=globalThis.showOpenFilePicker;async function tt(o={}){let e={...et,...o};if(Pe&&!o._preferPolyfill)return Pe(e);let t=document.createElement("input");t.type="file",t.multiple=e.multiple,t.accept=(e.accepts||[]).map(i=>[...(i.extensions||[]).map(n=>"."+n),...i.mimeTypes||[]]).flat().join(","),t.style.position="fixed",t.style.top="-100000px",t.style.left="-100000px",document.body.appendChild(t);let r=Promise.resolve().then(()=>(A(),le));return await new Promise(i=>{t.addEventListener("change",i),t.click()}),r.then(i=>i.getFileHandlesFromInput(t))}var de=tt;var Le=globalThis.showSaveFilePicker;async function dt(o={}){if(Le&&!o._preferPolyfill)return Le(o);o._name&&(console.warn("deprecated _name, spec now have `suggestedName`"),o.suggestedName=o._name);let{FileSystemFileHandle:e}=await Promise.resolve().then(()=>(E(),F)),{FileHandle:t}=await Promise.resolve().then(()=>(He(),ke));return new e(new t(o.suggestedName))}var he=dt;globalThis.DataTransferItem&&!DataTransferItem.prototype.getAsFileSystemHandle&&(DataTransferItem.prototype.getAsFileSystemHandle=async function(){let o=this.webkitGetAsEntry(),[{FileHandle:e,FolderHandle:t},{FileSystemDirectoryHandle:r},{FileSystemFileHandle:i}]=await Promise.all([Promise.resolve().then(()=>(ae(),ne)),Promise.resolve().then(()=>(j(),ee)),Promise.resolve().then(()=>(E(),F))]);return o.isFile?new i(new e(o,!1)):new r(new t(o,!1))});j();E();J();se();var be=class{static async selectFolderDialog(e,t){var n,a;let r={startIn:(a=(n=e==null?void 0:e.wellKnownType)!=null?n:e==null?void 0:e.handle)!=null?a:void 0,_preferPolyfill:t},i=await ce(r);return b.createFromHandle(i)}static async openFileDialog(e,t,r,i,n){var c,u;let a={startIn:(u=(c=e==null?void 0:e.wellKnownType)!=null?c:e==null?void 0:e.handle)!=null?u:void 0,multiple:t,excludeAcceptAllOption:i,types:r!=null?r:void 0,_preferPolyfill:n},s=await de(a);return new W(s.map(d=>b.createFromHandle(d)))}static async saveFileDialog(e,t,r,i,n){var c,u;let a={startIn:(u=(c=e==null?void 0:e.wellKnownType)!=null?c:e==null?void 0:e.handle)!=null?u:void 0,suggestedName:t!=null?t:void 0,excludeAcceptAllOption:i,types:r!=null?r:void 0,_preferPolyfill:n},s=await he(a);return b.createFromHandle(s)}static async openBookmark(e){let t=await R.connect();try{let r=await t.get(L,e);return r&&b.createFromHandle(r,e)}finally{t.close()}}static createAcceptType(e,t,r){let i={};return t.forEach(n=>{i[n]=r!=null?r:[]}),{description:e,accept:i}}};export{b as StorageItem,W as StorageItems,be as StorageProvider};
//# sourceMappingURL=storage.js.map
