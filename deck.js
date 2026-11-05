(()=>{var Be=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var Bh=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function Fu(i,t){return(i%t+t)%t}function Gr(i,t,e){return(1-e)*i+e*t}function Rc(i){return(i&i-1)===0&&i!==0}function Ea(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Ll(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ou(){let i=Xs("canvas");return i.style.display="block",i}function Wi(i){i in Cc||(Cc[i]=!0,console.warn(i))}function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function $r(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vn.fromArray(i,r);let a=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),c=t.dot(Vn),l=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Ku(i,t,e,n,s,r,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Pn,a),c===null)return null;Ps.copy(a),Ps.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ps);return l<e.near||l>e.far?null:{distance:l,point:Ps.clone(),object:i}}function Ls(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ui),i.getVertexPosition(c,di),i.getVertexPosition(l,fi);let h=Ku(i,t,e,n,ui,di,fi,Cs);if(h){s&&(Ts.fromBufferAttribute(s,a),As.fromBufferAttribute(s,c),Rs.fromBufferAttribute(s,l),h.uv=xi.getInterpolation(Cs,ui,di,fi,Ts,As,Rs,new ut)),r&&(Ts.fromBufferAttribute(r,a),As.fromBufferAttribute(r,c),Rs.fromBufferAttribute(r,l),h.uv1=xi.getInterpolation(Cs,ui,di,fi,Ts,As,Rs,new ut),h.uv2=h.uv1),o&&(Vc.fromBufferAttribute(o,a),Gc.fromBufferAttribute(o,c),Wc.fromBufferAttribute(o,l),h.normal=xi.getInterpolation(Cs,ui,di,fi,Vc,Gc,Wc,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new C,materialIndex:0};xi.getNormal(ui,di,fi,u.normal),h.face=u}return h}function Ai(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){let t={};for(let e=0;e<i.length;e++){let n=Ai(i[e]);for(let s in n)t[s]=n[s]}return t}function Qu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dl(i){return i.getRenderTarget()===null?i.outputColorSpace:Xt.workingColorSpace}function Ul(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sd(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,p=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,p),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let p=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,p),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];e?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(u,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}function zp(i,t,e,n,s,r,o){let a=new Ft(0),c=r===!0?0:1,l,h,u=null,p=0,f=null;function g(m,d){let S=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===_r)?(h===void 0&&(h=new ce(new Ji(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Ai(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Xt.getTransfer(x.colorSpace)!==Zt,(u!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ce(new Ri(2,2),new gn({name:"BackgroundMaterial",uniforms:Ai(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(x.colorSpace)!==Zt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Ds,Dl(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function kp(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,B,k,W,X){let G=!1;if(o){let J=_(W,k,B);l!==J&&(l=J,f(l.object)),G=d(L,W,k,X),G&&S(L,W,k,X)}else{let J=B.wireframe===!0;(l.geometry!==W.id||l.program!==k.id||l.wireframe!==J)&&(l.geometry=W.id,l.program=k.id,l.wireframe=J,G=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,V(L,B,k,W),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,B,k){let W=k.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let G=X[B.id];G===void 0&&(G={},X[B.id]=G);let J=G[W];return J===void 0&&(J=m(p()),G[W]=J),J}function m(L){let B=[],k=[],W=[];for(let X=0;X<s;X++)B[X]=0,k[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:W,object:L,attributes:{},index:null}}function d(L,B,k,W){let X=l.attributes,G=B.attributes,J=0,j=k.getAttributes();for(let ct in j)if(j[ct].location>=0){let Y=X[ct],at=G[ct];if(at===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),Y===void 0||Y.attribute!==at||at&&Y.data!==at.data)return!0;J++}return l.attributesNum!==J||l.index!==W}function S(L,B,k,W){let X={},G=B.attributes,J=0,j=k.getAttributes();for(let ct in j)if(j[ct].location>=0){let Y=G[ct];Y===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));let at={};at.attribute=Y,Y&&Y.data&&(at.data=Y.data),X[ct]=at,J++}l.attributes=X,l.attributesNum=J,l.index=W}function x(){let L=l.newAttributes;for(let B=0,k=L.length;B<k;B++)L[B]=0}function T(L){P(L,0)}function P(L,B){let k=l.newAttributes,W=l.enabledAttributes,X=l.attributeDivisors;k[L]=1,W[L]===0&&(i.enableVertexAttribArray(L),W[L]=1),X[L]!==B&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),X[L]=B)}function A(){let L=l.newAttributes,B=l.enabledAttributes;for(let k=0,W=B.length;k<W;k++)B[k]!==L[k]&&(i.disableVertexAttribArray(k),B[k]=0)}function w(L,B,k,W,X,G,J){J===!0?i.vertexAttribIPointer(L,B,k,X,G):i.vertexAttribPointer(L,B,k,W,X,G)}function V(L,B,k,W){if(n.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=W.attributes,G=k.getAttributes(),J=B.defaultAttributeValues;for(let j in G){let ct=G[j];if(ct.location>=0){let H=X[j];if(H===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let Y=H.normalized,at=H.itemSize,gt=e.get(H);if(gt===void 0)continue;let mt=gt.buffer,Rt=gt.type,Pt=gt.bytesPerElement,St=n.isWebGL2===!0&&(Rt===i.INT||Rt===i.UNSIGNED_INT||H.gpuType===Ml);if(H.isInterleavedBufferAttribute){let Ht=H.data,D=Ht.stride,Se=H.offset;if(Ht.isInstancedInterleavedBuffer){for(let xt=0;xt<ct.locationSize;xt++)P(ct.location+xt,Ht.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let xt=0;xt<ct.locationSize;xt++)T(ct.location+xt);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let xt=0;xt<ct.locationSize;xt++)w(ct.location+xt,at/ct.locationSize,Rt,Y,D*Pt,(Se+at/ct.locationSize*xt)*Pt,St)}else{if(H.isInstancedBufferAttribute){for(let Ht=0;Ht<ct.locationSize;Ht++)P(ct.location+Ht,H.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ht=0;Ht<ct.locationSize;Ht++)T(ct.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Ht=0;Ht<ct.locationSize;Ht++)w(ct.location+Ht,at/ct.locationSize,Rt,Y,at*Pt,at/ct.locationSize*Ht*Pt,St)}}else if(J!==void 0){let Y=J[j];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(ct.location,Y);break;case 3:i.vertexAttrib3fv(ct.location,Y);break;case 4:i.vertexAttrib4fv(ct.location,Y);break;default:i.vertexAttrib1fv(ct.location,Y)}}}}A()}function v(){q();for(let L in a){let B=a[L];for(let k in B){let W=B[k];for(let X in W)g(W[X].object),delete W[X];delete B[k]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let B=a[L.id];for(let k in B){let W=B[k];for(let X in W)g(W[X].object),delete W[X];delete B[k]}delete a[L.id]}function N(L){for(let B in a){let k=a[B];if(k[L.id]===void 0)continue;let W=k[L.id];for(let X in W)g(W[X].object),delete W[X];delete k[L.id]}}function q(){tt(),h=!0,l!==c&&(l=c,f(l.object))}function tt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:q,resetDefaultState:tt,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:T,disableUnusedAttributes:A}}function Hp(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,p){if(p===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,p),e.update(u,r,p)}function l(h,u,p){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<p;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,p);let g=0;for(let _=0;_<p;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Vp(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,T=o||t.has("OES_texture_float"),P=x&&T,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:A}}function Gp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new un,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,x=S*4,T=d.clippingState||null;c.value=T,T=h(g,p,x,f);for(let P=0;P!==x;++P)T[P]=e[P];d.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=f+_*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,T=f;x!==_;++x,T+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Wp(i){let t=new WeakMap;function e(o,a){return a===xa?o.mapping=Ei:a===ya&&(o.mapping=wi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xa||a===ya)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ca(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function Xp(i){let t=[],e=[],n=[],s=i,r=i-yi+1+Xc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-yi?c=Xc[o-i+yi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*f),x=new Float32Array(m*g*f),T=new Float32Array(d*g*f);for(let A=0;A<f;A++){let w=A%3*2/3-1,V=A>2?0:-1,v=[w,V,0,w+2/3,V,0,w+2/3,V+1,0,w,V,0,w+2/3,V+1,0,w,V+1,0];S.set(v,_*g*A),x.set(p,m*g*A);let E=[A,A,A,A,A,A];T.set(E,d*g*A)}let P=new Ve;P.setAttribute("position",new _e(S,_)),P.setAttribute("uv",new _e(x,m)),P.setAttribute("faceIndex",new _e(T,d)),t.push(P),s>yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $c(i,t,e){let n=new pn(i,t,e);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qp(i,t,e){let n=new Float32Array(Yn),s=new C(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uo(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Zc(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Jc(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function uo(){return`

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
	`}function Yp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===xa||c===ya,h=c===Ei||c===wi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ir(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ir(i));let p=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $p(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zp(i,t,e,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){let p=u.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let p=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let S=f.array;_=f.version;for(let x=0,T=S.length;x<T;x+=3){let P=S[x+0],A=S[x+1],w=S[x+2];p.push(P,A,A,w,w,P)}}else if(g!==void 0){let S=g.array;_=g.version;for(let x=0,T=S.length/3-1;x<T;x+=3){let P=x+0,A=x+1,w=x+2;p.push(P,A,A,w,w,P)}}else return;let m=new(Ll(p)?js:Qs)(p,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let p=r.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jp(i,t,e,n){let s=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*c),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,f*c,_),e.update(g,r,_)}function p(f,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(f[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let d=0;for(let S=0;S<_;S++)d+=g[S];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function Kp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qp(i,t){return i[0]-t[0]}function jp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function tm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new me,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let p=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let S=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],V=0;S===!0&&(V=1),x===!0&&(V=2),T===!0&&(V=3);let v=h.attributes.position.count*V,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let N=new Float32Array(v*E*4*g),q=new $s(N,v,E,g);q.type=Tn,q.needsUpdate=!0;let tt=V*4;for(let B=0;B<g;B++){let k=P[B],W=A[B],X=w[B],G=v*E*4*B;for(let J=0;J<k.count;J++){let j=J*tt;S===!0&&(o.fromBufferAttribute(k,J),N[G+j+0]=o.x,N[G+j+1]=o.y,N[G+j+2]=o.z,N[G+j+3]=0),x===!0&&(o.fromBufferAttribute(W,J),N[G+j+4]=o.x,N[G+j+5]=o.y,N[G+j+6]=o.z,N[G+j+7]=0),T===!0&&(o.fromBufferAttribute(X,J),N[G+j+8]=o.x,N[G+j+9]=o.y,N[G+j+10]=o.z,N[G+j+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new ut(v,E)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let S=0;S<p.length;S++)m+=p[S];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=p===void 0?0:p.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let T=g[x];T[0]=x,T[1]=p[x]}g.sort(jp);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Qp);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let T=a[x],P=T[0],A=T[1];P!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+x)!==_[P]&&h.setAttribute("morphTarget"+x,_[P]),m&&h.getAttribute("morphNormal"+x)!==m[P]&&h.setAttribute("morphNormal"+x,m[P]),s[x]=A,d+=A):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let S=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function em(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}function Pi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yr(i,t){let e=Qc[t];e===void 0&&(e=new Int32Array(t),Qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),ue(e,n)}}function om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;tl.set(n),i.uniformMatrix3fv(this.addr,!1,tl),ue(e,n)}}function cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),ue(e,n)}}function lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function _m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Fl:Nl;e.setTexture2D(t||r,s)}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bl,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zl,s)}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ol,s)}function Mm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return cm;case 5124:case 35670:return lm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return vm}}function Sm(i,t){i.uniform1fv(this.addr,t)}function bm(i,t){let e=Pi(t,this.size,2);i.uniform2fv(this.addr,e)}function Em(i,t){let e=Pi(t,this.size,3);i.uniform3fv(this.addr,e)}function wm(i,t){let e=Pi(t,this.size,4);i.uniform4fv(this.addr,e)}function Tm(i,t){let e=Pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Am(i,t){let e=Pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Rm(i,t){let e=Pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cm(i,t){i.uniform1iv(this.addr,t)}function Pm(i,t){i.uniform2iv(this.addr,t)}function Lm(i,t){i.uniform3iv(this.addr,t)}function Im(i,t){i.uniform4iv(this.addr,t)}function Dm(i,t){i.uniform1uiv(this.addr,t)}function Um(i,t){i.uniform2uiv(this.addr,t)}function Nm(i,t){i.uniform3uiv(this.addr,t)}function Fm(i,t){i.uniform4uiv(this.addr,t)}function Om(i,t,e){let n=this.cache,s=t.length,r=yr(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Nl,r[o])}function Bm(i,t,e){let n=this.cache,s=t.length,r=yr(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bl,r[o])}function zm(i,t,e){let n=this.cache,s=t.length,r=yr(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zl,r[o])}function km(i,t,e){let n=this.cache,s=t.length,r=yr(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ol,r[o])}function Hm(i){switch(i){case 5126:return Sm;case 35664:return bm;case 35665:return Em;case 35666:return wm;case 35674:return Tm;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Dm;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return km}}function nl(i,t){i.seq.push(t),i.map[t.id]=t}function Vm(i,t,e){let n=i.name,s=n.length;for(ua.lastIndex=0;;){let r=ua.exec(n),o=ua.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){nl(e,l===void 0?new Pa(a,i,t):new La(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ia(a),nl(e,u)),e=u}}}function il(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function Xm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function qm(i){let t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(i),n;switch(t===e?n="":t===Gs&&e===Vs?n="LinearDisplayP3ToLinearSRGB":t===Vs&&e===Gs&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case xr:return[n,"LinearTransferOETF"];case ae:case ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Xm(i.getShaderSource(t),o)}else return s}function Ym(i,t){let e=qm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $m(i,t){let e;switch(t){case du:e="Linear";break;case fu:e="Reinhard";break;case pu:e="OptimizedCineon";break;case co:e="ACESFilmic";break;case gu:e="AgX";break;case mu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function Jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vi).join(`
`)}function Km(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vi(i){return i!==""}function rl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Da(i){return i.replace(jm,eg)}function eg(i,t){let e=It[t];if(e===void 0){let n=tg.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Da(e)}function ol(i){return i.replace(ng,ig)}function ig(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function rg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case wi:t="ENVMAP_TYPE_CUBE";break;case _r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ag(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===wi&&(t="ENVMAP_MODE_REFRACTION"),t}function og(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yl:t="ENVMAP_BLENDING_MULTIPLY";break;case hu:t="ENVMAP_BLENDING_MIX";break;case uu:t="ENVMAP_BLENDING_ADD";break}return t}function cg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=sg(e),l=rg(e),h=ag(e),u=og(e),p=cg(e),f=e.isWebGL2?"":Zm(e),g=Jm(e),_=Km(r),m=s.createProgram(),d,S,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vi).join(`
`),d.length>0&&(d+=`
`),S=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vi).join(`
`),S.length>0&&(S+=`
`)):(d=[cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),S=[f,cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?It.tonemapping_pars_fragment:"",e.toneMapping!==Rn?$m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vi).join(`
`)),o=Da(o),o=rl(o,e),o=al(o,e),a=Da(a),a=rl(a,e),a=al(a,e),o=ol(o),a=ol(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let T=x+d+o,P=x+S+a,A=il(s,s.VERTEX_SHADER,T),w=il(s,s.FRAGMENT_SHADER,P);s.attachShader(m,A),s.attachShader(m,w),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function V(q){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(A).trim(),B=s.getShaderInfoLog(w).trim(),k=!0,W=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,w);else{let X=sl(s,A,"vertex"),G=sl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+X+`
`+G)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(L===""||B==="")&&(W=!1);W&&(q.diagnostics={runnable:k,programLog:tt,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:S}})}s.deleteShader(A),s.deleteShader(w),v=new bi(s,m),E=Qm(s,m)}let v;this.getUniforms=function(){return v===void 0&&V(this),v};let E;this.getAttributes=function(){return E===void 0&&V(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,Gm)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=w,this}function ug(i,t,e,n,s,r,o){let a=new Js,c=new Ua,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,E,N,q,tt){let L=q.fog,B=tt.geometry,k=v.isMeshStandardMaterial?q.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||k),X=W&&W.mapping===_r?W.image.height:null,G=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,j=J!==void 0?J.length:0,ct=0;B.morphAttributes.position!==void 0&&(ct=1),B.morphAttributes.normal!==void 0&&(ct=2),B.morphAttributes.color!==void 0&&(ct=3);let H,Y,at,gt;if(G){let be=je[G];H=be.vertexShader,Y=be.fragmentShader}else H=v.vertexShader,Y=v.fragmentShader,c.update(v),at=c.getVertexShaderID(v),gt=c.getFragmentShaderID(v);let mt=i.getRenderTarget(),Rt=tt.isInstancedMesh===!0,Pt=tt.isBatchedMesh===!0,St=!!v.map,Ht=!!v.matcap,D=!!W,Se=!!v.aoMap,xt=!!v.lightMap,Tt=!!v.bumpMap,dt=!!v.normalMap,Qt=!!v.displacementMap,Dt=!!v.emissiveMap,b=!!v.metalnessMap,y=!!v.roughnessMap,F=v.anisotropy>0,K=v.clearcoat>0,Z=v.iridescence>0,Q=v.sheen>0,ft=v.transmission>0,rt=F&&!!v.anisotropyMap,lt=K&&!!v.clearcoatMap,Mt=K&&!!v.clearcoatNormalMap,Ut=K&&!!v.clearcoatRoughnessMap,$=Z&&!!v.iridescenceMap,Wt=Z&&!!v.iridescenceThicknessMap,kt=Q&&!!v.sheenColorMap,wt=Q&&!!v.sheenRoughnessMap,_t=!!v.specularMap,ht=!!v.specularColorMap,Lt=!!v.specularIntensityMap,Gt=ft&&!!v.transmissionMap,ee=ft&&!!v.thicknessMap,Ot=!!v.gradientMap,et=!!v.alphaMap,R=v.alphaTest>0,it=!!v.alphaHash,st=!!v.extensions,bt=!!B.attributes.uv1,yt=!!B.attributes.uv2,qt=!!B.attributes.uv3,Yt=Rn;return v.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Yt=i.toneMapping),{isWebGL2:h,shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:H,fragmentShader:Y,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Pt,instancing:Rt,instancingColor:Rt&&tt.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:fn,map:St,matcap:Ht,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:X,aoMap:Se,lightMap:xt,bumpMap:Tt,normalMap:dt,displacementMap:p&&Qt,emissiveMap:Dt,normalMapObjectSpace:dt&&v.normalMapType===Ru,normalMapTangentSpace:dt&&v.normalMapType===Cl,metalnessMap:b,roughnessMap:y,anisotropy:F,anisotropyMap:rt,clearcoat:K,clearcoatMap:lt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Ut,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:Wt,sheen:Q,sheenColorMap:kt,sheenRoughnessMap:wt,specularMap:_t,specularColorMap:ht,specularIntensityMap:Lt,transmission:ft,transmissionMap:Gt,thicknessMap:ee,gradientMap:Ot,opaque:v.transparent===!1&&v.blending===Mi,alphaMap:et,alphaTest:R,alphaHash:it,combine:v.combine,mapUv:St&&_(v.map.channel),aoMapUv:Se&&_(v.aoMap.channel),lightMapUv:xt&&_(v.lightMap.channel),bumpMapUv:Tt&&_(v.bumpMap.channel),normalMapUv:dt&&_(v.normalMap.channel),displacementMapUv:Qt&&_(v.displacementMap.channel),emissiveMapUv:Dt&&_(v.emissiveMap.channel),metalnessMapUv:b&&_(v.metalnessMap.channel),roughnessMapUv:y&&_(v.roughnessMap.channel),anisotropyMapUv:rt&&_(v.anisotropyMap.channel),clearcoatMapUv:lt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(v.sheenRoughnessMap.channel),specularMapUv:_t&&_(v.specularMap.channel),specularColorMapUv:ht&&_(v.specularColorMap.channel),specularIntensityMapUv:Lt&&_(v.specularIntensityMap.channel),transmissionMapUv:Gt&&_(v.transmissionMap.channel),thicknessMapUv:ee&&_(v.thicknessMap.channel),alphaMapUv:et&&_(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:bt,vertexUv2s:yt,vertexUv3s:qt,pointsUvs:tt.isPoints===!0&&!!B.attributes.uv&&(St||et),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ct,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&v.map.isVideoTexture===!0&&Xt.getTransfer(v.map.colorSpace)===Zt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===oe,flipSided:v.side===Le,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:st&&v.extensions.derivatives===!0,extensionFragDepth:st&&v.extensions.fragDepth===!0,extensionDrawBuffers:st&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:st&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:st&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)E.push(N),E.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(S(E,v),x(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function S(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function T(v){let E=g[v.type],N;if(E){let q=je[E];N=ju.clone(q.uniforms)}else N=v.uniforms;return N}function P(v,E){let N;for(let q=0,tt=l.length;q<tt;q++){let L=l[q];if(L.cacheKey===E){N=L,++N.usedTimes;break}}return N===void 0&&(N=new lg(i,E,v,r),l.push(N)),N}function A(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),v.destroy()}}function w(v){c.remove(v)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:P,releaseProgram:A,releaseShaderCache:w,programs:l,dispose:V}}function dg(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ll(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,f,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,p,f,g,_,m){let d=o(u,p,f,g,_,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(u,p,f,g,_,m){let d=o(u,p,f,g,_,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,p){e.length>1&&e.sort(u||fg),n.length>1&&n.sort(p||ll),s.length>1&&s.sort(p||ll)}function h(){for(let u=t,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function pg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hl,i.set(n,[o])):s>=r.length?(o=new hl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ft};break;case"SpotLight":e={position:new C,direction:new C,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function gg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yg(i,t){let e=new mg,n=gg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,o=new Vt,a=new Vt;function c(h,u){let p=0,f=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,m=0,d=0,S=0,x=0,T=0,P=0,A=0,w=0,V=0,v=0;h.sort(xg);let E=u===!0?Math.PI:1;for(let q=0,tt=h.length;q<tt;q++){let L=h[q],B=L.color,k=L.intensity,W=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=B.r*k*E,f+=B.g*k*E,g+=B.b*k*E;else if(L.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(L.sh.coefficients[G],k);v++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let J=L.shadow,j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.directionalShadow[_]=j,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=L.shadow.matrix,T++}s.directional[_]=G,_++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(B).multiplyScalar(k*E),G.distance=W,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,s.spot[d]=G;let J=L.shadow;if(L.map&&(s.spotLightMap[w]=L.map,w++,J.updateMatrices(L),L.castShadow&&V++),s.spotLightMatrix[d]=J.matrix,L.castShadow){let j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.spotShadow[d]=j,s.spotShadowMap[d]=X,A++}d++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(B).multiplyScalar(k),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),s.rectArea[S]=G,S++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*E),G.distance=L.distance,G.decay=L.decay,L.castShadow){let J=L.shadow,j=n.get(L);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,s.pointShadow[m]=j,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=L.shadow.matrix,P++}s.point[m]=G,m++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(k*E),G.groundColor.copy(L.groundColor).multiplyScalar(k*E),s.hemi[x]=G,x++}}S>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==d||N.rectAreaLength!==S||N.hemiLength!==x||N.numDirectionalShadows!==T||N.numPointShadows!==P||N.numSpotShadows!==A||N.numSpotMaps!==w||N.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=S,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+w-V,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=v,N.directionalLength=_,N.pointLength=m,N.spotLength=d,N.rectAreaLength=S,N.hemiLength=x,N.numDirectionalShadows=T,N.numPointShadows=P,N.numSpotShadows=A,N.numSpotMaps=w,N.numLightProbes=v,s.version=_g++)}function l(h,u){let p=0,f=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){let T=h[S];if(T.isDirectionalLight){let P=s.directional[p];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),p++}else if(T.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(T.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){let P=s.point[f];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(d),f++}else if(T.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function ul(i,t){let e=new yg(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function vg(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new ul(i,t),e.set(r,[c])):o>=a.length?(c=new ul(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}function bg(i,t,e){let n=new Ki,s=new ut,r=new ut,o=new me,a=new Fa({depthPacking:Au}),c=new Oa,l={},h=e.maxTextureSize,u={[Pn]:Le,[Le]:Pn,[oe]:oe},p=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ce(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let d=this.type;this.render=function(A,w,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let v=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),q=i.state;q.setBlending(An),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let tt=d!==hn&&this.type===hn,L=d===hn&&this.type!==hn;for(let B=0,k=A.length;B<k;B++){let W=A[B],X=W.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let G=X.getFrameExtents();if(s.multiply(G),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,X.mapSize.y=r.y)),X.map===null||tt===!0||L===!0){let j=this.type!==hn?{minFilter:Te,magFilter:Te}:{};X.map!==null&&X.map.dispose(),X.map=new pn(s.x,s.y,j),X.map.texture.name=W.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let J=X.getViewportCount();for(let j=0;j<J;j++){let ct=X.getViewport(j);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),q.viewport(o),X.updateMatrices(W,j),n=X.getFrustum(),T(w,V,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===hn&&S(X,V),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(v,E,N)};function S(A,w){let V=t.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pn(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,V,p,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,V,f,_,null)}function x(A,w,V,v){let E=null,N=V.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)E=N;else if(E=V.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let q=E.uuid,tt=w.uuid,L=l[q];L===void 0&&(L={},l[q]=L);let B=L[tt];B===void 0&&(B=E.clone(),L[tt]=B,w.addEventListener("dispose",P)),E=B}if(E.visible=w.visible,E.wireframe=w.wireframe,v===hn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let q=i.properties.get(E);q.light=V}return E}function T(A,w,V,v,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===hn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld);let tt=t.update(A),L=A.material;if(Array.isArray(L)){let B=tt.groups;for(let k=0,W=B.length;k<W;k++){let X=B[k],G=L[X.materialIndex];if(G&&G.visible){let J=x(A,G,v,E);A.onBeforeShadow(i,A,w,V,tt,J,X),i.renderBufferDirect(V,null,tt,J,A,X),A.onAfterShadow(i,A,w,V,tt,J,X)}}}else if(L.visible){let B=x(A,L,v,E);A.onBeforeShadow(i,A,w,V,tt,B,null),i.renderBufferDirect(V,null,tt,B,A,null),A.onAfterShadow(i,A,w,V,tt,B,null)}}let q=A.children;for(let tt=0,L=q.length;tt<L;tt++)T(q[tt],w,V,v,E)}function P(A){A.target.removeEventListener("dispose",P);for(let V in l){let v=l[V],E=A.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function Eg(i,t,e){let n=e.isWebGL2;function s(){let R=!1,it=new me,st=null,bt=new me(0,0,0,0);return{setMask:function(yt){st!==yt&&!R&&(i.colorMask(yt,yt,yt,yt),st=yt)},setLocked:function(yt){R=yt},setClear:function(yt,qt,Yt,de,be){be===!0&&(yt*=de,qt*=de,Yt*=de),it.set(yt,qt,Yt,de),bt.equals(it)===!1&&(i.clearColor(yt,qt,Yt,de),bt.copy(it))},reset:function(){R=!1,st=null,bt.set(-1,0,0,0)}}}function r(){let R=!1,it=null,st=null,bt=null;return{setTest:function(yt){yt?Pt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(yt){it!==yt&&!R&&(i.depthMask(yt),it=yt)},setFunc:function(yt){if(st!==yt){switch(yt){case iu:i.depthFunc(i.NEVER);break;case su:i.depthFunc(i.ALWAYS);break;case ru:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case au:i.depthFunc(i.EQUAL);break;case ou:i.depthFunc(i.GEQUAL);break;case cu:i.depthFunc(i.GREATER);break;case lu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=yt}},setLocked:function(yt){R=yt},setClear:function(yt){bt!==yt&&(i.clearDepth(yt),bt=yt)},reset:function(){R=!1,it=null,st=null,bt=null}}}function o(){let R=!1,it=null,st=null,bt=null,yt=null,qt=null,Yt=null,de=null,be=null;return{setTest:function($t){R||($t?Pt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function($t){it!==$t&&!R&&(i.stencilMask($t),it=$t)},setFunc:function($t,Ee,Qe){(st!==$t||bt!==Ee||yt!==Qe)&&(i.stencilFunc($t,Ee,Qe),st=$t,bt=Ee,yt=Qe)},setOp:function($t,Ee,Qe){(qt!==$t||Yt!==Ee||de!==Qe)&&(i.stencilOp($t,Ee,Qe),qt=$t,Yt=Ee,de=Qe)},setLocked:function($t){R=$t},setClear:function($t){be!==$t&&(i.clearStencil($t),be=$t)},reset:function(){R=!1,it=null,st=null,bt=null,yt=null,qt=null,Yt=null,de=null,be=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,p={},f={},g=new WeakMap,_=[],m=null,d=!1,S=null,x=null,T=null,P=null,A=null,w=null,V=null,v=new Ft(0,0,0),E=0,N=!1,q=null,tt=null,L=null,B=null,k=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,G=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=G>=2);let j=null,ct={},H=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),at=new me().fromArray(H),gt=new me().fromArray(Y);function mt(R,it,st,bt){let yt=new Uint8Array(4),qt=i.createTexture();i.bindTexture(R,qt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<st;Yt++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(it,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(it+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return qt}let Rt={};Rt[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pt(i.DEPTH_TEST),c.setFunc(Bs),Dt(!1),b(Wo),Pt(i.CULL_FACE),dt(An);function Pt(R){p[R]!==!0&&(i.enable(R),p[R]=!0)}function St(R){p[R]!==!1&&(i.disable(R),p[R]=!1)}function Ht(R,it){return f[R]!==it?(i.bindFramebuffer(R,it),f[R]=it,n&&(R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=it),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=it)),!0):!1}function D(R,it){let st=_,bt=!1;if(R)if(st=g.get(it),st===void 0&&(st=[],g.set(it,st)),R.isWebGLMultipleRenderTargets){let yt=R.texture;if(st.length!==yt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,Yt=yt.length;qt<Yt;qt++)st[qt]=i.COLOR_ATTACHMENT0+qt;st.length=yt.length,bt=!0}}else st[0]!==i.COLOR_ATTACHMENT0&&(st[0]=i.COLOR_ATTACHMENT0,bt=!0);else st[0]!==i.BACK&&(st[0]=i.BACK,bt=!0);bt&&(e.isWebGL2?i.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function Se(R){return m!==R?(i.useProgram(R),m=R,!0):!1}let xt={[qn]:i.FUNC_ADD,[Vh]:i.FUNC_SUBTRACT,[Gh]:i.FUNC_REVERSE_SUBTRACT};if(n)xt[$o]=i.MIN,xt[Zo]=i.MAX;else{let R=t.get("EXT_blend_minmax");R!==null&&(xt[$o]=R.MIN_EXT,xt[Zo]=R.MAX_EXT)}let Tt={[Wh]:i.ZERO,[Xh]:i.ONE,[qh]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[Qh]:i.SRC_ALPHA_SATURATE,[Jh]:i.DST_COLOR,[$h]:i.DST_ALPHA,[Yh]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[Kh]:i.ONE_MINUS_DST_COLOR,[Zh]:i.ONE_MINUS_DST_ALPHA,[jh]:i.CONSTANT_COLOR,[tu]:i.ONE_MINUS_CONSTANT_COLOR,[eu]:i.CONSTANT_ALPHA,[nu]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(R,it,st,bt,yt,qt,Yt,de,be,$t){if(R===An){d===!0&&(St(i.BLEND),d=!1);return}if(d===!1&&(Pt(i.BLEND),d=!0),R!==Hh){if(R!==S||$t!==N){if((x!==qn||A!==qn)&&(i.blendEquation(i.FUNC_ADD),x=qn,A=qn),$t)switch(R){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,P=null,w=null,V=null,v.set(0,0,0),E=0,S=R,N=$t}return}yt=yt||it,qt=qt||st,Yt=Yt||bt,(it!==x||yt!==A)&&(i.blendEquationSeparate(xt[it],xt[yt]),x=it,A=yt),(st!==T||bt!==P||qt!==w||Yt!==V)&&(i.blendFuncSeparate(Tt[st],Tt[bt],Tt[qt],Tt[Yt]),T=st,P=bt,w=qt,V=Yt),(de.equals(v)===!1||be!==E)&&(i.blendColor(de.r,de.g,de.b,be),v.copy(de),E=be),S=R,N=!1}function Qt(R,it){R.side===oe?St(i.CULL_FACE):Pt(i.CULL_FACE);let st=R.side===Le;it&&(st=!st),Dt(st),R.blending===Mi&&R.transparent===!1?dt(An):dt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);let bt=R.stencilWrite;l.setTest(bt),bt&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),F(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Pt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(R){q!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),q=R)}function b(R){R!==zh?(Pt(i.CULL_FACE),R!==tt&&(R===Wo?i.cullFace(i.BACK):R===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),tt=R}function y(R){R!==L&&(X&&i.lineWidth(R),L=R)}function F(R,it,st){R?(Pt(i.POLYGON_OFFSET_FILL),(B!==it||k!==st)&&(i.polygonOffset(it,st),B=it,k=st)):St(i.POLYGON_OFFSET_FILL)}function K(R){R?Pt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Z(R){R===void 0&&(R=i.TEXTURE0+W-1),j!==R&&(i.activeTexture(R),j=R)}function Q(R,it,st){st===void 0&&(j===null?st=i.TEXTURE0+W-1:st=j);let bt=ct[st];bt===void 0&&(bt={type:void 0,texture:void 0},ct[st]=bt),(bt.type!==R||bt.texture!==it)&&(j!==st&&(i.activeTexture(st),j=st),i.bindTexture(R,it||Rt[R]),bt.type=R,bt.texture=it)}function ft(){let R=ct[j];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function wt(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Lt(R){at.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),at.copy(R))}function Gt(R){gt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),gt.copy(R))}function ee(R,it){let st=u.get(it);st===void 0&&(st=new WeakMap,u.set(it,st));let bt=st.get(R);bt===void 0&&(bt=i.getUniformBlockIndex(it,R.name),st.set(R,bt))}function Ot(R,it){let bt=u.get(it).get(R);h.get(it)!==bt&&(i.uniformBlockBinding(it,bt,R.__bindingPointIndex),h.set(it,bt))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},j=null,ct={},f={},g=new WeakMap,_=[],m=null,d=!1,S=null,x=null,T=null,P=null,A=null,w=null,V=null,v=new Ft(0,0,0),E=0,N=!1,q=null,tt=null,L=null,B=null,k=null,at.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Pt,disable:St,bindFramebuffer:Ht,drawBuffers:D,useProgram:Se,setBlending:dt,setMaterial:Qt,setFlipSided:Dt,setCullFace:b,setLineWidth:y,setPolygonOffset:F,setScissorTest:K,activeTexture:Z,bindTexture:Q,unbindTexture:ft,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:_t,texImage3D:ht,updateUBOMapping:ee,uniformBlockBinding:Ot,texStorage2D:kt,texStorage3D:wt,texSubImage2D:Mt,texSubImage3D:Ut,compressedTexSubImage2D:$,compressedTexSubImage3D:Wt,scissor:Lt,viewport:Gt,reset:et}}function wg(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return f?new OffscreenCanvas(b,y):Xs("canvas")}function _(b,y,F,K){let Z=1;if((b.width>K||b.height>K)&&(Z=K/Math.max(b.width,b.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let Q=y?Ea:Math.floor,ft=Q(Z*b.width),rt=Q(Z*b.height);u===void 0&&(u=g(ft,rt));let lt=F?g(ft,rt):u;return lt.width=ft,lt.height=rt,lt.getContext("2d").drawImage(b,0,0,ft,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ft+"x"+rt+")."),lt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Rc(b.width)&&Rc(b.height)}function d(b){return a?!1:b.wrapS!==$e||b.wrapT!==$e||b.minFilter!==Te&&b.minFilter!==ke}function S(b,y){return b.generateMipmaps&&y&&b.minFilter!==Te&&b.minFilter!==ke}function x(b){i.generateMipmap(b)}function T(b,y,F,K,Z=!1){if(a===!1)return y;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=y;if(y===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),y===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),y===i.RGBA){let ft=Z?Hs:Xt.getTransfer(K);F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=ft===Zt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function P(b,y,F){return S(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==Te&&b.minFilter!==ke?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function A(b){return b===Te||b===Jo||b===Nr?i.NEAREST:i.LINEAR}function w(b){let y=b.target;y.removeEventListener("dispose",w),v(y),y.isVideoTexture&&h.delete(y)}function V(b){let y=b.target;y.removeEventListener("dispose",V),N(y)}function v(b){let y=n.get(b);if(y.__webglInit===void 0)return;let F=b.source,K=p.get(F);if(K){let Z=K[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(b),Object.keys(K).length===0&&p.delete(F)}n.remove(b)}function E(b){let y=n.get(b);i.deleteTexture(y.__webglTexture);let F=b.source,K=p.get(F);delete K[y.__cacheKey],o.memory.textures--}function N(b){let y=b.texture,F=n.get(b),K=n.get(y);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let Q=0;Q<F.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(F.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)i.deleteFramebuffer(F.__webglFramebuffer[Z]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,Q=y.length;Z<Q;Z++){let ft=n.get(y[Z]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(y[Z])}n.remove(y),n.remove(b)}let q=0;function tt(){q=0}function L(){let b=q;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),q+=1,b}function B(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function k(b,y){let F=n.get(b);if(b.isVideoTexture&&Qt(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){let K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(F,b,y);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function W(b,y){let F=n.get(b);if(b.version>0&&F.__version!==b.version){at(F,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function X(b,y){let F=n.get(b);if(b.version>0&&F.__version!==b.version){at(F,b,y);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function G(b,y){let F=n.get(b);if(b.version>0&&F.__version!==b.version){gt(F,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}let J={[va]:i.REPEAT,[$e]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},j={[Te]:i.NEAREST,[Jo]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[_u]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},ct={[Cu]:i.NEVER,[Nu]:i.ALWAYS,[Pu]:i.LESS,[Pl]:i.LEQUAL,[Lu]:i.EQUAL,[Uu]:i.GEQUAL,[Iu]:i.GREATER,[Du]:i.NOTEQUAL};function H(b,y,F){if(F?(i.texParameteri(b,i.TEXTURE_WRAP_S,J[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,J[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,J[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,j[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,j[y.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==$e||y.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,A(y.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==Te&&y.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Te||y.minFilter!==Nr&&y.minFilter!==$i||y.type===Tn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===Zi&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Y(b,y){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",w));let K=y.source,Z=p.get(K);Z===void 0&&(Z={},p.set(K,Z));let Q=B(y);if(Q!==b.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[Q].usedTimes++;let ft=Z[b.__cacheKey];ft!==void 0&&(Z[b.__cacheKey].usedTimes--,ft.usedTimes===0&&E(y)),b.__cacheKey=Q,b.__webglTexture=Z[Q].texture}return F}function at(b,y,F){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);let Z=Y(b,y),Q=y.source;e.bindTexture(K,b.__webglTexture,i.TEXTURE0+F);let ft=n.get(Q);if(Q.version!==ft.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);let rt=Xt.getPrimaries(Xt.workingColorSpace),lt=y.colorSpace===He?null:Xt.getPrimaries(y.colorSpace),Mt=y.colorSpace===He||rt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Ut=d(y)&&m(y.image)===!1,$=_(y.image,Ut,!1,s.maxTextureSize);$=Dt(y,$);let Wt=m($)||a,kt=r.convert(y.format,y.colorSpace),wt=r.convert(y.type),_t=T(y.internalFormat,kt,wt,y.colorSpace,y.isVideoTexture);H(K,y,Wt);let ht,Lt=y.mipmaps,Gt=a&&y.isVideoTexture!==!0&&_t!==Al,ee=ft.__version===void 0||Z===!0,Ot=P(y,$,Wt);if(y.isDepthTexture)_t=i.DEPTH_COMPONENT,a?y.type===Tn?_t=i.DEPTH_COMPONENT32F:y.type===wn?_t=i.DEPTH_COMPONENT24:y.type===$n?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:y.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Zn&&_t===i.DEPTH_COMPONENT&&y.type!==lo&&y.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=wn,wt=r.convert(y.type)),y.format===Ti&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,y.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=$n,wt=r.convert(y.type))),ee&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,_t,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,_t,$.width,$.height,0,kt,wt,null));else if(y.isDataTexture)if(Lt.length>0&&Wt){Gt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,Lt[0].width,Lt[0].height);for(let et=0,R=Lt.length;et<R;et++)ht=Lt[et],Gt?e.texSubImage2D(i.TEXTURE_2D,et,0,0,ht.width,ht.height,kt,wt,ht.data):e.texImage2D(i.TEXTURE_2D,et,_t,ht.width,ht.height,0,kt,wt,ht.data);y.generateMipmaps=!1}else Gt?(ee&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,$.width,$.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,kt,wt,$.data)):e.texImage2D(i.TEXTURE_2D,0,_t,$.width,$.height,0,kt,wt,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Gt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,_t,Lt[0].width,Lt[0].height,$.depth);for(let et=0,R=Lt.length;et<R;et++)ht=Lt[et],y.format!==Ze?kt!==null?Gt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,$.depth,kt,ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,_t,ht.width,ht.height,$.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,$.depth,kt,wt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,_t,ht.width,ht.height,$.depth,0,kt,wt,ht.data)}else{Gt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,Lt[0].width,Lt[0].height);for(let et=0,R=Lt.length;et<R;et++)ht=Lt[et],y.format!==Ze?kt!==null?Gt?e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,ht.width,ht.height,kt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,et,_t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(i.TEXTURE_2D,et,0,0,ht.width,ht.height,kt,wt,ht.data):e.texImage2D(i.TEXTURE_2D,et,_t,ht.width,ht.height,0,kt,wt,ht.data)}else if(y.isDataArrayTexture)Gt?(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,_t,$.width,$.height,$.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,kt,wt,$.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,$.width,$.height,$.depth,0,kt,wt,$.data);else if(y.isData3DTexture)Gt?(ee&&e.texStorage3D(i.TEXTURE_3D,Ot,_t,$.width,$.height,$.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,kt,wt,$.data)):e.texImage3D(i.TEXTURE_3D,0,_t,$.width,$.height,$.depth,0,kt,wt,$.data);else if(y.isFramebufferTexture){if(ee)if(Gt)e.texStorage2D(i.TEXTURE_2D,Ot,_t,$.width,$.height);else{let et=$.width,R=$.height;for(let it=0;it<Ot;it++)e.texImage2D(i.TEXTURE_2D,it,_t,et,R,0,kt,wt,null),et>>=1,R>>=1}}else if(Lt.length>0&&Wt){Gt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,Lt[0].width,Lt[0].height);for(let et=0,R=Lt.length;et<R;et++)ht=Lt[et],Gt?e.texSubImage2D(i.TEXTURE_2D,et,0,0,kt,wt,ht):e.texImage2D(i.TEXTURE_2D,et,_t,kt,wt,ht);y.generateMipmaps=!1}else Gt?(ee&&e.texStorage2D(i.TEXTURE_2D,Ot,_t,$.width,$.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,wt,$)):e.texImage2D(i.TEXTURE_2D,0,_t,kt,wt,$);S(y,Wt)&&x(K),ft.__version=Q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function gt(b,y,F){if(y.image.length!==6)return;let K=Y(b,y),Z=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);let Q=n.get(Z);if(Z.version!==Q.__version||K===!0){e.activeTexture(i.TEXTURE0+F);let ft=Xt.getPrimaries(Xt.workingColorSpace),rt=y.colorSpace===He?null:Xt.getPrimaries(y.colorSpace),lt=y.colorSpace===He||ft===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ut=y.image[0]&&y.image[0].isDataTexture,$=[];for(let et=0;et<6;et++)!Mt&&!Ut?$[et]=_(y.image[et],!1,!0,s.maxCubemapSize):$[et]=Ut?y.image[et].image:y.image[et],$[et]=Dt(y,$[et]);let Wt=$[0],kt=m(Wt)||a,wt=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),ht=T(y.internalFormat,wt,_t,y.colorSpace),Lt=a&&y.isVideoTexture!==!0,Gt=Q.__version===void 0||K===!0,ee=P(y,Wt,kt);H(i.TEXTURE_CUBE_MAP,y,kt);let Ot;if(Mt){Lt&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ee,ht,Wt.width,Wt.height);for(let et=0;et<6;et++){Ot=$[et].mipmaps;for(let R=0;R<Ot.length;R++){let it=Ot[R];y.format!==Ze?wt!==null?Lt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,0,0,it.width,it.height,wt,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,ht,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,0,0,it.width,it.height,wt,_t,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,ht,it.width,it.height,0,wt,_t,it.data)}}}else{Ot=y.mipmaps,Lt&&Gt&&(Ot.length>0&&ee++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ee,ht,$[0].width,$[0].height));for(let et=0;et<6;et++)if(Ut){Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,$[et].width,$[et].height,wt,_t,$[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ht,$[et].width,$[et].height,0,wt,_t,$[et].data);for(let R=0;R<Ot.length;R++){let st=Ot[R].image[et].image;Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,0,0,st.width,st.height,wt,_t,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,ht,st.width,st.height,0,wt,_t,st.data)}}else{Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,wt,_t,$[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ht,wt,_t,$[et]);for(let R=0;R<Ot.length;R++){let it=Ot[R];Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,0,0,wt,_t,it.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,ht,wt,_t,it.image[et])}}}S(y,kt)&&x(i.TEXTURE_CUBE_MAP),Q.__version=Z.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function mt(b,y,F,K,Z,Q){let ft=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),lt=T(F.internalFormat,ft,rt,F.colorSpace);if(!n.get(y).__hasExternalTextures){let Ut=Math.max(1,y.width>>Q),$=Math.max(1,y.height>>Q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Q,lt,Ut,$,y.depth,0,ft,rt,null):e.texImage2D(Z,Q,lt,Ut,$,0,ft,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),dt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,n.get(F).__webglTexture,0,Tt(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,n.get(F).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(b,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let K=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||dt(y)){let Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Tn?K=i.DEPTH_COMPONENT32F:Z.type===wn&&(K=i.DEPTH_COMPONENT24));let Q=Tt(y);dt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,K,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,K,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){let K=Tt(y);F&&dt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,y.width,y.height):dt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let K=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<K.length;Z++){let Q=K[Z],ft=r.convert(Q.format,Q.colorSpace),rt=r.convert(Q.type),lt=T(Q.internalFormat,ft,rt,Q.colorSpace),Mt=Tt(y);F&&dt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,lt,y.width,y.height):dt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,lt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,lt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);let K=n.get(y.depthTexture).__webglTexture,Z=Tt(y);if(y.depthTexture.format===Zn)dt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===Ti)dt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function St(b){let y=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(y.__webglFramebuffer,b)}else if(F){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]=i.createRenderbuffer(),Rt(y.__webglDepthbuffer[K],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Rt(y.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(b,y,F){let K=n.get(b);y!==void 0&&mt(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&St(b)}function D(b){let y=b.texture,F=n.get(b),K=n.get(y);b.addEventListener("dispose",V),b.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,o.memory.textures++);let Z=b.isWebGLCubeRenderTarget===!0,Q=b.isWebGLMultipleRenderTargets===!0,ft=m(b)||a;if(Z){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let lt=0;lt<y.mipmaps.length;lt++)F.__webglFramebuffer[rt][lt]=i.createFramebuffer()}else F.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)F.__webglFramebuffer[rt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Q)if(s.drawBuffers){let rt=b.texture;for(let lt=0,Mt=rt.length;lt<Mt;lt++){let Ut=n.get(rt[lt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&dt(b)===!1){let rt=Q?y:[y];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<rt.length;lt++){let Mt=rt[lt];F.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);let Ut=r.convert(Mt.format,Mt.colorSpace),$=r.convert(Mt.type),Wt=T(Mt.internalFormat,Ut,$,Mt.colorSpace,b.isXRRenderTarget===!0),kt=Tt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Wt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),H(i.TEXTURE_CUBE_MAP,y,ft);for(let rt=0;rt<6;rt++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)mt(F.__webglFramebuffer[rt][lt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else mt(F.__webglFramebuffer[rt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);S(y,ft)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){let rt=b.texture;for(let lt=0,Mt=rt.length;lt<Mt;lt++){let Ut=rt[lt],$=n.get(Ut);e.bindTexture(i.TEXTURE_2D,$.__webglTexture),H(i.TEXTURE_2D,Ut,ft),mt(F.__webglFramebuffer,b,Ut,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),S(Ut,ft)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?rt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,K.__webglTexture),H(rt,y,ft),a&&y.mipmaps&&y.mipmaps.length>0)for(let lt=0;lt<y.mipmaps.length;lt++)mt(F.__webglFramebuffer[lt],b,y,i.COLOR_ATTACHMENT0,rt,lt);else mt(F.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,rt,0);S(y,ft)&&x(rt),e.unbindTexture()}b.depthBuffer&&St(b)}function Se(b){let y=m(b)||a,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let K=0,Z=F.length;K<Z;K++){let Q=F[K];if(S(Q,y)){let ft=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,rt=n.get(Q).__webglTexture;e.bindTexture(ft,rt),x(ft),e.unbindTexture()}}}function xt(b){if(a&&b.samples>0&&dt(b)===!1){let y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,K=b.height,Z=i.COLOR_BUFFER_BIT,Q=[],ft=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(b),lt=b.isWebGLMultipleRenderTargets===!0;if(lt)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){Q.push(i.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&Q.push(ft);let Ut=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(Ut===!1&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),lt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[Mt]),Ut===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ft]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ft])),lt){let $=n.get(y[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,Z,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[Mt]);let Ut=n.get(y[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function Tt(b){return Math.min(s.maxSamples,b.samples)}function dt(b){let y=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Qt(b){let y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Dt(b,y){let F=b.colorSpace,K=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Sa||F!==fn&&F!==He&&(Xt.getTransfer(F)===Zt?a===!1?t.has("EXT_sRGB")===!0&&K===Ze?(b.format=Sa,b.minFilter=ke,b.generateMipmaps=!1):y=qs.sRGBToLinear(y):(K!==Ze||Z!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}this.allocateTextureUnit=L,this.resetTextureUnits=tt,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ht,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=dt}function Tg(i,t,e){let n=e.isWebGL2;function s(r,o=He){let a,c=Xt.getTransfer(o);if(r===Cn)return i.UNSIGNED_BYTE;if(r===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===xu)return i.BYTE;if(r===yu)return i.SHORT;if(r===lo)return i.UNSIGNED_SHORT;if(r===Ml)return i.INT;if(r===wn)return i.UNSIGNED_INT;if(r===Tn)return i.FLOAT;if(r===Zi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===vu)return i.ALPHA;if(r===Ze)return i.RGBA;if(r===Mu)return i.LUMINANCE;if(r===Su)return i.LUMINANCE_ALPHA;if(r===Zn)return i.DEPTH_COMPONENT;if(r===Ti)return i.DEPTH_STENCIL;if(r===Sa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===bu)return i.RED;if(r===El)return i.RED_INTEGER;if(r===Eu)return i.RG;if(r===wl)return i.RG_INTEGER;if(r===Tl)return i.RGBA_INTEGER;if(r===Fr||r===Or||r===Br||r===zr)if(c===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Br)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ko||r===Qo||r===jo||r===tc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ko)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Al)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ec||r===nc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ec)return c===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===nc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ic||r===sc||r===rc||r===ac||r===oc||r===cc||r===lc||r===hc||r===uc||r===dc||r===fc||r===pc||r===mc||r===gc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ic)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ac)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gc)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kr||r===_c||r===xc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===kr)return c===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_c)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wu||r===yc||r===vc||r===Mc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===kr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===yc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$n?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function Rg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Dl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,x,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,S,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Le&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Le&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=t.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Le&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){let T=x.program;n.uniformBlockBinding(S,T)}function l(S,x){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",m));let P=x.program;n.updateUBOMapping(S,P);let A=t.render.frame;r[S.id]!==A&&(p(S),r[S.id]=A)}function h(S){let x=u();S.__bindingPointIndex=x;let T=i.createBuffer(),P=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,T),T}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let x=s[S.id],T=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,w=T.length;A<w;A++){let V=Array.isArray(T[A])?T[A]:[T[A]];for(let v=0,E=V.length;v<E;v++){let N=V[v];if(f(N,A,v,P)===!0){let q=N.__offset,tt=Array.isArray(N.value)?N.value:[N.value],L=0;for(let B=0;B<tt.length;B++){let k=tt[B],W=_(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,q+L,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,x,T,P){let A=S.value,w=x+"_"+T;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{let V=P[w];if(typeof A=="number"||typeof A=="boolean"){if(V!==A)return P[w]=A,!0}else if(V.equals(A)===!1)return V.copy(A),!0}return!1}function g(S){let x=S.uniforms,T=0,P=16;for(let w=0,V=x.length;w<V;w++){let v=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,N=v.length;E<N;E++){let q=v[E],tt=Array.isArray(q.value)?q.value:[q.value];for(let L=0,B=tt.length;L<B;L++){let k=tt[L],W=_(k),X=T%P;X!==0&&P-X<W.boundary&&(T+=P-X),q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=W.storage}}}let A=T%P;return A>0&&(T+=P-A),S.__size=T,S.__cache={},this}function _(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function fo(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,f*=h,s(o,a,p,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function pl(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Lg(i,t){let e=1-i;return e*e*t}function Ig(i,t){return 2*(1-i)*i*t}function Dg(i,t){return i*i*t}function qi(i,t,e,n){return Lg(i,t)+Ig(i,e)+Dg(i,n)}function Ug(i,t){let e=1-i;return e*e*e*t}function Ng(i,t){let e=1-i;return 3*e*e*i*t}function Fg(i,t){return 3*(1-i)*i*i*t}function Og(i,t){return i*i*i*t}function Yi(i,t,e,n,s){return Ug(i,t)+Ng(i,e)+Fg(i,n)+Og(i,s)}function Os(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zh,Wo,kh,xl,oo,hn,Pn,Le,oe,An,Mi,Xo,qo,Yo,Hh,qn,Vh,Gh,$o,Zo,Wh,Xh,qh,Yh,ga,_a,$h,Zh,Jh,Kh,Qh,jh,tu,eu,nu,iu,su,ru,Bs,au,ou,cu,lu,yl,hu,uu,Rn,du,fu,pu,co,mu,gu,vl,Ei,wi,xa,ya,_r,va,$e,Ma,Te,Jo,Nr,ke,_u,$i,Cn,xu,yu,lo,Ml,wn,Tn,Zi,Sl,bl,$n,vu,Ze,Mu,Su,Zn,Ti,bu,El,Eu,wl,Tl,Fr,Or,Br,zr,Ko,Qo,jo,tc,Al,ec,nc,ic,sc,rc,ac,oc,cc,lc,hc,uc,dc,fc,pc,mc,gc,kr,_c,xc,wu,yc,vc,Mc,zs,ks,Hr,Sc,bc,Ec,Rl,Jn,Tu,Au,Cl,Ru,He,ae,fn,ho,xr,Hs,Zt,Vs,Gs,ei,wc,Cu,Pu,Lu,Pl,Iu,Du,Uu,Nu,Tc,Ac,Sa,dn,Ws,Ln,ve,Vr,ba,ut,zt,Wr,Cc,Pc,Lc,fs,Bu,Xt,ni,qs,zu,Ys,ku,Je,me,wa,pn,$s,Ta,In,C,Yr,Ic,mn,rn,Xe,ps,ii,si,ri,vn,Mn,Hn,Bi,ms,gs,Vn,Hu,zi,Zr,Kn,an,Jr,_s,Sn,Kr,xs,Qr,Aa,Vt,ai,qe,Vu,Gu,bn,ys,De,Dc,Uc,Zs,Js,Wu,Nc,oi,on,vs,ki,Xu,qu,Fc,Oc,Bc,Yu,$u,Ce,Ye,cn,jr,ln,ci,li,zc,ta,ea,na,Ms,xi,Il,En,Ss,Ft,Me,Zu,Dn,Ks,re,bs,_e,Qs,js,Re,Ju,ze,sa,hi,Ue,Hi,pe,Ve,kc,Gn,Es,Hc,ui,di,fi,ra,ws,Ts,As,Rs,Vc,Gc,Wc,Cs,Ps,ce,Ji,ju,td,ed,gn,tr,Ae,pi,mi,Ra,er,Ca,aa,nd,id,un,Wn,Is,Ki,Ri,rd,ad,od,cd,ld,hd,ud,dd,fd,pd,md,gd,_d,xd,yd,vd,Md,Sd,bd,Ed,wd,Td,Ad,Rd,Cd,Pd,Ld,Id,Dd,Ud,Nd,Fd,Od,Bd,zd,kd,Hd,Vd,Gd,Wd,Xd,qd,Yd,$d,Zd,Jd,Kd,Qd,jd,tf,ef,nf,sf,rf,af,of,cf,lf,hf,uf,df,ff,pf,mf,gf,_f,xf,yf,vf,Mf,Sf,bf,Ef,wf,Tf,Af,Rf,Cf,Pf,Lf,If,Df,Uf,Nf,Ff,Of,Bf,zf,kf,Hf,Vf,Gf,Wf,Xf,qf,Yf,$f,Zf,Jf,Kf,Qf,jf,tp,ep,np,ip,sp,rp,ap,op,cp,lp,hp,up,dp,fp,pp,mp,gp,_p,xp,yp,vp,Mp,Sp,bp,Ep,wp,Tp,Ap,Rp,Cp,Pp,Lp,Ip,Dp,Up,Np,Fp,Op,Bp,It,nt,je,Ds,nr,yi,Xc,Yn,oa,qc,ca,la,ha,Xn,gi,Yc,ir,sr,Nl,Fl,Ol,Bl,zl,Kc,Qc,jc,tl,el,Pa,La,Ia,ua,bi,Gm,Wm,jm,tg,ng,hg,Ua,Na,_g,Fa,Oa,Mg,Sg,Ba,le,Ag,Xi,za,Qi,ka,rr,ar,_i,dl,Ns,fl,Pg,Vi,Gi,or,Ge,ji,Ha,Fs,da,fa,pa,Va,cr,Ga,lr,Wa,hr,Xa,ur,ml,qa,Ya,$a,dr,ts,fr,_n,Ci,Za,Ja,Ka,Ke,Qn,Qa,ja,to,es,jn,eo,no,zg,io,pr,mr,ma,gl,_l,so,ro,gr,po,kg,mo,Hg,Vg,Gg,Wg,Xg,qg,Yg,ao,Jt,w0,vr=Be(()=>{zh=0,Wo=1,kh=2,xl=1,oo=2,hn=3,Pn=0,Le=1,oe=2,An=0,Mi=1,Xo=2,qo=3,Yo=4,Hh=5,qn=100,Vh=101,Gh=102,$o=103,Zo=104,Wh=200,Xh=201,qh=202,Yh=203,ga=204,_a=205,$h=206,Zh=207,Jh=208,Kh=209,Qh=210,jh=211,tu=212,eu=213,nu=214,iu=0,su=1,ru=2,Bs=3,au=4,ou=5,cu=6,lu=7,yl=0,hu=1,uu=2,Rn=0,du=1,fu=2,pu=3,co=4,mu=5,gu=6,vl=300,Ei=301,wi=302,xa=303,ya=304,_r=306,va=1e3,$e=1001,Ma=1002,Te=1003,Jo=1004,Nr=1005,ke=1006,_u=1007,$i=1008,Cn=1009,xu=1010,yu=1011,lo=1012,Ml=1013,wn=1014,Tn=1015,Zi=1016,Sl=1017,bl=1018,$n=1020,vu=1021,Ze=1023,Mu=1024,Su=1025,Zn=1026,Ti=1027,bu=1028,El=1029,Eu=1030,wl=1031,Tl=1033,Fr=33776,Or=33777,Br=33778,zr=33779,Ko=35840,Qo=35841,jo=35842,tc=35843,Al=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,ac=37811,oc=37812,cc=37813,lc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,kr=36492,_c=36494,xc=36495,wu=36283,yc=36284,vc=36285,Mc=36286,zs=2300,ks=2301,Hr=2302,Sc=2400,bc=2401,Ec=2402,Rl=3e3,Jn=3001,Tu=3200,Au=3201,Cl=0,Ru=1,He="",ae="srgb",fn="srgb-linear",ho="display-p3",xr="display-p3-linear",Hs="linear",Zt="srgb",Vs="rec709",Gs="p3",ei=7680,wc=519,Cu=512,Pu=513,Lu=514,Pl=515,Iu=516,Du=517,Uu=518,Nu=519,Tc=35044,Ac="300 es",Sa=1035,dn=2e3,Ws=2001,Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,ba=180/Math.PI;ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],f=n[5],g=n[8],_=s[0],m=s[3],d=s[6],S=s[1],x=s[4],T=s[7],P=s[2],A=s[5],w=s[8];return r[0]=o*_+a*S+c*P,r[3]=o*m+a*x+c*A,r[6]=o*d+a*T+c*w,r[1]=l*_+h*S+u*P,r[4]=l*m+h*x+u*A,r[7]=l*d+h*T+u*w,r[2]=p*_+f*S+g*P,r[5]=p*m+f*x+g*A,r[8]=p*d+f*T+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,f=l*r-o*c,g=e*u+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wr.makeScale(t,e)),this}rotate(t){return this.premultiply(Wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wr=new zt;Cc={};Pc=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lc=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[fn]:{transfer:Hs,primaries:Vs,toReference:i=>i,fromReference:i=>i},[ae]:{transfer:Zt,primaries:Vs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xr]:{transfer:Hs,primaries:Gs,toReference:i=>i.applyMatrix3(Lc),fromReference:i=>i.applyMatrix3(Pc)},[ho]:{transfer:Zt,primaries:Gs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Lc),fromReference:i=>i.applyMatrix3(Pc).convertLinearToSRGB()}},Bu=new Set([fn,xr]),Xt={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=fs[t].toReference,s=fs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return fs[i].primaries},getTransfer:function(i){return i===He?Hs:fs[i].transfer}};qs=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=Xs("canvas")),ni.width=t.width,ni.height=t.height;let n=ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zu=0,Ys=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=ns(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qr(s[o].image)):r.push(qr(s[o]))}else r=qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};ku=0,Je=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$e,s=$e,r=ke,o=$i,a=Ze,c=Cn,l=i.DEFAULT_ANISOTROPY,h=He){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=ns(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Jn?ae:He),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case va:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case va:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ae?Jn:Rl}set encoding(t){Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Jn?ae:He}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=vl;Je.DEFAULT_ANISOTROPY=1;me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],f=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,T=(f+1)/2,P=(d+1)/2,A=(h+p)/4,w=(u+_)/4,V=(g+m)/4;return x>T&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=w/n):T>P?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=V/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=V/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(p-h)/S,this.w=Math.acos((l+f+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wa=class extends Ln{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?ae:He),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ys(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends wa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$s=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ta=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==p||l!==f||h!==g){let m=1-a,d=c*p+l*f+h*g+u*_,S=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let P=Math.sqrt(x),A=Math.atan2(P,d*S);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}let T=a*S;if(c=c*m+p*T,l=l*m+f*T,h=h*m+g*T,u=u*m+_*T,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*p,t[e+1]=c*g+h*p+l*u-a*f,t[e+2]=l*g+h*f+a*p-c*u,t[e+3]=h*g-a*u-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"YXZ":this._x=p*h*u+l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"ZXY":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u-p*f*g;break;case"ZYX":this._x=p*h*u-l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u+p*f*g;break;case"YZX":this._x=p*h*u+l*f*g,this._y=l*f*u+p*h*g,this._z=l*h*g-p*f*u,this._w=l*h*u-p*f*g;break;case"XZY":this._x=p*h*u-l*f*g,this._y=l*f*u-p*h*g,this._z=l*h*g+p*f*u,this._w=l*h*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yr=new C,Ic=new In,mn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(t.matrixWorld),this.union(ps)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),ms.subVectors(this.max,Bi),ii.subVectors(t.a,Bi),si.subVectors(t.b,Bi),ri.subVectors(t.c,Bi),vn.subVectors(si,ii),Mn.subVectors(ri,si),Hn.subVectors(ii,ri);let e=[0,-vn.z,vn.y,0,-Mn.z,Mn.y,0,-Hn.z,Hn.y,vn.z,0,-vn.x,Mn.z,0,-Mn.x,Hn.z,0,-Hn.x,-vn.y,vn.x,0,-Mn.y,Mn.x,0,-Hn.y,Hn.x,0];return!$r(e,ii,si,ri,ms)||(e=[1,0,0,0,1,0,0,0,1],!$r(e,ii,si,ri,ms))?!1:(gs.crossVectors(vn,Mn),e=[gs.x,gs.y,gs.z],$r(e,ii,si,ri,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},rn=[new C,new C,new C,new C,new C,new C,new C,new C],Xe=new C,ps=new mn,ii=new C,si=new C,ri=new C,vn=new C,Mn=new C,Hn=new C,Bi=new C,ms=new C,gs=new C,Vn=new C;Hu=new mn,zi=new C,Zr=new C,Kn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);let e=zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(Zr)),this.expandByPoint(zi.copy(t.center).sub(Zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},an=new C,Jr=new C,_s=new C,Sn=new C,Kr=new C,xs=new C,Qr=new C,Aa=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(Jr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_s),a=Sn.dot(this.direction),c=-Sn.dot(_s),l=Sn.lengthSq(),h=Math.abs(1-o*o),u,p,f,g;if(h>0)if(u=o*c-a,p=o*a-c,g=r*h,u>=0)if(p>=-g)if(p<=g){let _=1/h;u*=_,p*=_,f=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jr).addScaledVector(_s,p),f}intersectSphere(t,e){an.subVectors(t.center,this.origin);let n=an.dot(this.direction),s=an.dot(an)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),xs.subVectors(n,t),Qr.crossVectors(Kr,xs);let o=this.direction.dot(Qr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);let c=a*this.direction.dot(xs.crossVectors(Sn,xs));if(c<0)return null;let l=a*this.direction.dot(Kr.cross(Sn));if(l<0||c+l>o)return null;let h=-a*Sn.dot(Qr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vt=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,p,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,p,f,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ai.setFromMatrixColumn(t,0).length(),r=1/ai.setFromMatrixColumn(t,1).length(),o=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let p=c*h,f=c*u,g=l*h,_=l*u;e[0]=p+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*h,f=c*u,g=l*h,_=l*u;e[0]=p-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+_,e[1]=c*u,e[5]=_*l+p,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=p-_*u}else if(t.order==="XZY"){let p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vu,t,Gu)}lookAt(t,e,n){let s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),bn.crossVectors(n,De),bn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),bn.crossVectors(n,De)),bn.normalize(),ys.crossVectors(De,bn),s[0]=bn.x,s[4]=ys.x,s[8]=De.x,s[1]=bn.y,s[5]=ys.y,s[9]=De.y,s[2]=bn.z,s[6]=ys.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],f=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],x=n[7],T=n[11],P=n[15],A=s[0],w=s[4],V=s[8],v=s[12],E=s[1],N=s[5],q=s[9],tt=s[13],L=s[2],B=s[6],k=s[10],W=s[14],X=s[3],G=s[7],J=s[11],j=s[15];return r[0]=o*A+a*E+c*L+l*X,r[4]=o*w+a*N+c*B+l*G,r[8]=o*V+a*q+c*k+l*J,r[12]=o*v+a*tt+c*W+l*j,r[1]=h*A+u*E+p*L+f*X,r[5]=h*w+u*N+p*B+f*G,r[9]=h*V+u*q+p*k+f*J,r[13]=h*v+u*tt+p*W+f*j,r[2]=g*A+_*E+m*L+d*X,r[6]=g*w+_*N+m*B+d*G,r[10]=g*V+_*q+m*k+d*J,r[14]=g*v+_*tt+m*W+d*j,r[3]=S*A+x*E+T*L+P*X,r[7]=S*w+x*N+T*B+P*G,r[11]=S*V+x*q+T*k+P*J,r[15]=S*v+x*tt+T*W+P*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],f=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*f-n*c*f)+_*(+e*c*f-e*l*p+r*o*p-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],f=t[11],g=t[12],_=t[13],m=t[14],d=t[15],S=u*m*l-_*p*l+_*c*f-a*m*f-u*c*d+a*p*d,x=g*p*l-h*m*l-g*c*f+o*m*f+h*c*d-o*p*d,T=h*_*l-g*u*l+g*a*f-o*_*f-h*a*d+o*u*d,P=g*u*c-h*_*c-g*a*p+o*_*p+h*a*m-o*u*m,A=e*S+n*x+s*T+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=S*w,t[1]=(_*p*r-u*m*r-_*s*f+n*m*f+u*s*d-n*p*d)*w,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*w,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*f-n*c*f)*w,t[4]=x*w,t[5]=(h*m*r-g*p*r+g*s*f-e*m*f-h*s*d+e*p*d)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*w,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*f+e*c*f)*w,t[8]=T*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*d-e*u*d)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*d+e*a*d)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*w,t[12]=P*w,t[13]=(h*_*s-g*u*s+g*n*p-e*_*p-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,f=r*h,g=r*u,_=o*h,m=o*u,d=a*u,S=c*l,x=c*h,T=c*u,P=n.x,A=n.y,w=n.z;return s[0]=(1-(_+d))*P,s[1]=(f+T)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(f-T)*A,s[5]=(1-(p+d))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+x)*w,s[9]=(m-S)*w,s[10]=(1-(p+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ai.set(s[0],s[1],s[2]).length(),o=ai.set(s[4],s[5],s[6]).length(),a=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);let l=1/r,h=1/o,u=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=dn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),f,g;if(a===dn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ws)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=dn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),p=(e+t)*l,f=(n+s)*h,g,_;if(a===dn)g=(o+r)*u,_=-2*u;else if(a===Ws)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ai=new C,qe=new Vt,Vu=new C(0,0,0),Gu=new C(1,1,1),bn=new C,ys=new C,De=new C,Dc=new Vt,Uc=new In,Zs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zs.DEFAULT_ORDER="XYZ";Js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wu=0,Nc=new C,oi=new In,on=new Vt,vs=new C,ki=new C,Xu=new C,qu=new In,Fc=new C(1,0,0),Oc=new C(0,1,0),Bc=new C(0,0,1),Yu={type:"added"},$u={type:"removed"},Ce=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Zs,n=new In,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new zt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return Nc.copy(t).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(ki,vs,this.up):on.lookAt(vs,ki,this.up),this.quaternion.setFromRotationMatrix(on),s&&(on.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(on),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($u)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new C(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ye=new C,cn=new C,jr=new C,ln=new C,ci=new C,li=new C,zc=new C,ta=new C,ea=new C,na=new C,Ms=!1,xi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),cn.subVectors(n,e),jr.subVectors(t,e);let o=Ye.dot(Ye),a=Ye.dot(cn),c=Ye.dot(jr),l=cn.dot(cn),h=cn.dot(jr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,f=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(t,e,n,s,r,o,a,c){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ln.x),c.addScaledVector(o,ln.y),c.addScaledVector(a,ln.z),c)}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),cn.subVectors(t,e),Ye.cross(cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ye.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ci.subVectors(s,n),li.subVectors(r,n),ta.subVectors(t,n);let c=ci.dot(ta),l=li.dot(ta);if(c<=0&&l<=0)return e.copy(n);ea.subVectors(t,s);let h=ci.dot(ea),u=li.dot(ea);if(h>=0&&u<=h)return e.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ci,o);na.subVectors(t,r);let f=ci.dot(na),g=li.dot(na);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(li,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return zc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(zc,a);let d=1/(m+_+p);return o=_*d,a=p*d,e.copy(n).addScaledVector(ci,o).addScaledVector(li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Ss={h:0,s:0,l:0};Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Fu(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ia(o,r,t+1/3),this.g=ia(o,r,t),this.b=ia(o,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){let n=Il[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return Xt.fromWorkingColorSpace(Me.copy(this),t),Math.round(ge(Me.r*255,0,255))*65536+Math.round(ge(Me.g*255,0,255))*256+Math.round(ge(Me.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Me.copy(this),e);let n=Me.r,s=Me.g,r=Me.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=ae){Xt.fromWorkingColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,s=Me.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(Ss);let n=Gr(En.h,Ss.h,e),s=Gr(En.s,Ss.s,e),r=Gr(En.l,Ss.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new Ft;Ft.NAMES=Il;Zu=0,Dn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Mi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ks=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},re=new C,bs=new ut,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}},Qs=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}},js=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Re=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ju=0,ze=new Vt,sa=new Ce,hi=new C,Ue=new mn,Hi=new mn,pe=new C,Ve=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ll(t)?js:Qs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(Ue.min,Hi.min),Ue.expandByPoint(pe),pe.addVectors(Ue.max,Hi.max),Ue.expandByPoint(pe)):(Ue.expandByPoint(Hi.min),Ue.expandByPoint(Hi.max))}Ue.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)pe.fromBufferAttribute(a,l),c&&(hi.fromBufferAttribute(t,l),pe.add(hi)),s=Math.max(s,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new C,h[E]=new C;let u=new C,p=new C,f=new C,g=new ut,_=new ut,m=new ut,d=new C,S=new C;function x(E,N,q){u.fromArray(s,E*3),p.fromArray(s,N*3),f.fromArray(s,q*3),g.fromArray(o,E*2),_.fromArray(o,N*2),m.fromArray(o,q*2),p.sub(u),f.sub(u),_.sub(g),m.sub(g);let tt=1/(_.x*m.y-m.x*_.y);isFinite(tt)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(tt),S.copy(f).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(tt),l[E].add(d),l[N].add(d),l[q].add(d),h[E].add(S),h[N].add(S),h[q].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,N=T.length;E<N;++E){let q=T[E],tt=q.start,L=q.count;for(let B=tt,k=tt+L;B<k;B+=3)x(n[B+0],n[B+1],n[B+2])}let P=new C,A=new C,w=new C,V=new C;function v(E){w.fromArray(r,E*3),V.copy(w);let N=l[E];P.copy(N),P.sub(w.multiplyScalar(w.dot(N))).normalize(),A.crossVectors(V,N);let tt=A.dot(h[E])<0?-1:1;c[E*4]=P.x,c[E*4+1]=P.y,c[E*4+2]=P.z,c[E*4+3]=tt}for(let E=0,N=T.length;E<N;++E){let q=T[E],tt=q.start,L=q.count;for(let B=tt,k=tt+L;B<k;B+=3)v(n[B+0]),v(n[B+1]),v(n[B+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let p=0,f=t.count;p<f;p+=3){let g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let d=0;d<h;d++)p[g++]=l[f++]}return new _e(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kc=new Vt,Gn=new Aa,Es=new Kn,Hc=new C,ui=new C,di=new C,fi=new C,ra=new C,ws=new C,Ts=new ut,As=new ut,Rs=new ut,Vc=new C,Gc=new C,Wc=new C,Cs=new C,Ps=new C,ce=class extends Ce{constructor(t=new Ve,e=new Ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ra.fromBufferAttribute(u,t),o?ws.addScaledVector(ra,h):ws.addScaledVector(ra.sub(e),h))}e.add(ws)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(Es.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Es,Hc)===null||Gn.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],d=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,P=x;T<P;T+=3){let A=a.getX(T),w=a.getX(T+1),V=a.getX(T+2);s=Ls(this,d,t,n,l,h,u,A,w,V),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let S=a.getX(m),x=a.getX(m+1),T=a.getX(m+2);s=Ls(this,o,t,n,l,h,u,S,x,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],d=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,P=x;T<P;T+=3){let A=T,w=T+1,V=T+2;s=Ls(this,d,t,n,l,h,u,A,w,V),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let S=m,x=m+1,T=m+2;s=Ls(this,o,t,n,l,h,u,S,x,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};Ji=class i extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function g(_,m,d,S,x,T,P,A,w,V,v){let E=T/w,N=P/V,q=T/2,tt=P/2,L=A/2,B=w+1,k=V+1,W=0,X=0,G=new C;for(let J=0;J<k;J++){let j=J*N-tt;for(let ct=0;ct<B;ct++){let H=ct*E-q;G[_]=H*S,G[m]=j*x,G[d]=L,l.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[d]=A>0?1:-1,h.push(G.x,G.y,G.z),u.push(ct/w),u.push(1-J/V),W+=1}}for(let J=0;J<V;J++)for(let j=0;j<w;j++){let ct=p+j+B*J,H=p+j+B*(J+1),Y=p+(j+1)+B*(J+1),at=p+(j+1)+B*J;c.push(ct,H,at),c.push(H,Y,at),X+=6}a.addGroup(f,X,v),f+=X,p+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};ju={clone:Ai,merge:we},td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=td,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=Qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},tr=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ae=class extends tr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},pi=-90,mi=1,Ra=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ae(pi,mi,t,e);s.layers=this.layers,this.add(s);let r=new Ae(pi,mi,t,e);r.layers=this.layers,this.add(r);let o=new Ae(pi,mi,t,e);o.layers=this.layers,this.add(o);let a=new Ae(pi,mi,t,e);a.layers=this.layers,this.add(a);let c=new Ae(pi,mi,t,e);c.layers=this.layers,this.add(c);let l=new Ae(pi,mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},er=class extends Je{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ca=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Jn?ae:He),this.texture=new er(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:An});r.uniforms.tEquirect.value=e;let o=new ce(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=ke),new Ra(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},aa=new C,nd=new C,id=new zt,un=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=aa.subVectors(n,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||id.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new Kn,Is=new C,Ki=class{constructor(t=new un,e=new un,n=new un,s=new un,r=new un,o=new un){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],f=s[8],g=s[9],_=s[10],m=s[11],d=s[12],S=s[13],x=s[14],T=s[15];if(n[0].setComponents(c-r,p-l,m-f,T-d).normalize(),n[1].setComponents(c+r,p+l,m+f,T+d).normalize(),n[2].setComponents(c+o,p+h,m+g,T+S).normalize(),n[3].setComponents(c-o,p-h,m-g,T-S).normalize(),n[4].setComponents(c-a,p-u,m-_,T-x).normalize(),e===dn)n[5].setComponents(c+a,p+u,m+_,T+x).normalize();else if(e===Ws)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Is.x=s.normal.x>0?t.max.x:t.min.x,Is.y=s.normal.y>0?t.max.y:t.min.y,Is.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ri=class i extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,f=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let S=d*p-o;for(let x=0;x<l;x++){let T=x*u-r;g.push(T,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<a;S++){let x=S+l*d,T=S+l*(d+1),P=S+1+l*(d+1),A=S+1+l*d;f.push(x,T,A),f.push(T,P,A)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
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
#endif`,od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ud=`#ifdef USE_AOMAP
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
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xd=`#ifdef USE_IRIDESCENCE
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
#endif`,yd=`#ifdef USE_BUMPMAP
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rd=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Od=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
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
}`,Yd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Qd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,af=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gf=`#if defined( USE_POINTS_UV )
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
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
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
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,Yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
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
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jf=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
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
}`,dp=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fp=`#define DISTANCE
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
}`,pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
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
}`,vp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mp=`#define LAMBERT
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
}`,Sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wp=`#define NORMAL
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
}`,Tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ap=`#define PHONG
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
}`,Rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cp=`#define STANDARD
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
}`,Pp=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Lp=`#define TOON
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
}`,Ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dp=`uniform float size;
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
}`,Up=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Bp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,It={alphahash_fragment:rd,alphahash_pars_fragment:ad,alphamap_fragment:od,alphamap_pars_fragment:cd,alphatest_fragment:ld,alphatest_pars_fragment:hd,aomap_fragment:ud,aomap_pars_fragment:dd,batching_pars_vertex:fd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:_d,iridescence_fragment:xd,bumpmap_pars_fragment:yd,clipping_planes_fragment:vd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:Sd,clipping_planes_vertex:bd,color_fragment:Ed,color_pars_fragment:wd,color_pars_vertex:Td,color_vertex:Ad,common:Rd,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Id,emissivemap_fragment:Dd,emissivemap_pars_fragment:Ud,colorspace_fragment:Nd,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Qd,envmap_vertex:Hd,fog_vertex:Vd,fog_pars_vertex:Gd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:qd,lightmap_fragment:Yd,lightmap_pars_fragment:$d,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:Jd,lights_pars_begin:Kd,lights_toon_fragment:jd,lights_toon_pars_fragment:tf,lights_phong_fragment:ef,lights_phong_pars_fragment:nf,lights_physical_fragment:sf,lights_physical_pars_fragment:rf,lights_fragment_begin:af,lights_fragment_maps:of,lights_fragment_end:cf,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:xf,morphcolor_vertex:yf,morphnormal_vertex:vf,morphtarget_pars_vertex:Mf,morphtarget_vertex:Sf,normal_fragment_begin:bf,normal_fragment_maps:Ef,normal_pars_fragment:wf,normal_pars_vertex:Tf,normal_vertex:Af,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:If,opaque_fragment:Df,packing:Uf,premultiplied_alpha_fragment:Nf,project_vertex:Ff,dithering_fragment:Of,dithering_pars_fragment:Bf,roughnessmap_fragment:zf,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Vf,shadowmap_vertex:Gf,shadowmask_pars_fragment:Wf,skinbase_vertex:Xf,skinning_pars_vertex:qf,skinning_vertex:Yf,skinnormal_vertex:$f,specularmap_fragment:Zf,specularmap_pars_fragment:Jf,tonemapping_fragment:Kf,tonemapping_pars_fragment:Qf,transmission_fragment:jf,transmission_pars_fragment:tp,uv_pars_fragment:ep,uv_pars_vertex:np,uv_vertex:ip,worldpos_vertex:sp,background_vert:rp,background_frag:ap,backgroundCube_vert:op,backgroundCube_frag:cp,cube_vert:lp,cube_frag:hp,depth_vert:up,depth_frag:dp,distanceRGBA_vert:fp,distanceRGBA_frag:pp,equirect_vert:mp,equirect_frag:gp,linedashed_vert:_p,linedashed_frag:xp,meshbasic_vert:yp,meshbasic_frag:vp,meshlambert_vert:Mp,meshlambert_frag:Sp,meshmatcap_vert:bp,meshmatcap_frag:Ep,meshnormal_vert:wp,meshnormal_frag:Tp,meshphong_vert:Ap,meshphong_frag:Rp,meshphysical_vert:Cp,meshphysical_frag:Pp,meshtoon_vert:Lp,meshtoon_frag:Ip,points_vert:Dp,points_frag:Up,shadow_vert:Np,shadow_frag:Fp,sprite_vert:Op,sprite_frag:Bp},nt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},je={basic:{uniforms:we([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:we([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:we([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:we([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:we([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:we([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:we([nt.points,nt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:we([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:we([nt.common,nt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:we([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:we([nt.sprite,nt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:we([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:we([nt.lights,nt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};je.physical={uniforms:we([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};Ds={r:0,b:0,g:0};nr=class extends tr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yi=4,Xc=[.125,.215,.35,.446,.526,.582],Yn=20,oa=new nr,qc=new Ft,ca=null,la=0,ha=0,Xn=(1+Math.sqrt(5))/2,gi=1/Xn,Yc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Xn,gi),new C(0,Xn,-gi),new C(gi,0,Xn),new C(-gi,0,Xn),new C(Xn,gi,0),new C(-Xn,gi,0)],ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,la,ha),t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Zi,format:Ze,colorSpace:fn,depthBuffer:!1},s=$c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xp(r)),this._blurMaterial=qp(r,t,e)}return s}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s){let a=new Ae(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(qc),h.toneMapping=Rn,h.autoClear=!1;let f=new Ks({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new ce(new Ji,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(qc),_=!0);for(let d=0;d<6;d++){let S=d%3;S===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):S===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let x=this._cubeSize;Us(s,S*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ei||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Us(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Yc[(s-1)%Yc.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ce(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);let d=[],S=0;for(let w=0;w<Yn;++w){let V=w/_,v=Math.exp(-V*V/2);d.push(v),w===0?S+=v:w<m&&(S+=2*v)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;let T=this._sizeLods[s],P=3*T*(s>x-yi?s-x+yi:0),A=4*(this._cubeSize-T);Us(e,P,A,3*T,2*T),c.setRenderTarget(e),c.render(u,oa)}};sr=class extends Je{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Zn,h!==Zn&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zn&&(n=wn),n===void 0&&h===Ti&&(n=$n),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Te,this.minFilter=c!==void 0?c:Te,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nl=new Je,Fl=new sr(1,1);Fl.compareFunction=Pl;Ol=new $s,Bl=new Ta,zl=new er,Kc=[],Qc=[],jc=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);Pa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mm(e.type)}},La=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}},Ia=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ua=/(\w+)(\])?(\[|\.)?/g;bi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Vm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};Gm=37297,Wm=0;jm=/^[ \t]*#include +<([\w\d./]+)>/gm;tg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;hg=0,Ua=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Na(t),e.set(t,n)),n}},Na=class{constructor(t){this.id=hg++,this.code=t,this.usedTimes=0}};_g=0;Fa=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oa=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Ba=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ag={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},za=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,f=null,g=null,_=e.getContextAttributes(),m=null,d=null,S=[],x=[],T=new ut,P=null,A=new Ae;A.layers.enable(1),A.viewport=new me;let w=new Ae;w.layers.enable(2),w.viewport=new me;let V=[A,w],v=new Ba;v.layers.enable(1),v.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=S[H];return Y===void 0&&(Y=new Xi,S[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=S[H];return Y===void 0&&(Y=new Xi,S[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=S[H];return Y===void 0&&(Y=new Xi,S[H]=Y),Y.getHandSpace()};function q(H){let Y=x.indexOf(H.inputSource);if(Y===-1)return;let at=S[Y];at!==void 0&&(at.update(H.inputSource,H.frame,l||o),at.dispatchEvent({type:H.type,data:H.inputSource}))}function tt(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",L);for(let H=0;H<S.length;H++){let Y=x[H];Y!==null&&(x[H]=null,S[H].disconnect(Y))}E=null,N=null,t.setRenderTarget(m),f=null,p=null,u=null,s=null,d=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Y={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),d=new pn(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,at=null,gt=null;_.depth&&(gt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=_.stencil?Ti:Zn,at=_.stencil?$n:wn);let mt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(mt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),d=new pn(p.textureWidth,p.textureHeight,{format:Ze,type:Cn,depthTexture:new sr(p.textureWidth,p.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Rt=t.properties.get(d);Rt.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(H){for(let Y=0;Y<H.removed.length;Y++){let at=H.removed[Y],gt=x.indexOf(at);gt>=0&&(x[gt]=null,S[gt].disconnect(at))}for(let Y=0;Y<H.added.length;Y++){let at=H.added[Y],gt=x.indexOf(at);if(gt===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=x.length){x.push(at),gt=Rt;break}else if(x[Rt]===null){x[Rt]=at,gt=Rt;break}if(gt===-1)break}let mt=S[gt];mt&&mt.connect(at)}}let B=new C,k=new C;function W(H,Y,at){B.setFromMatrixPosition(Y.matrixWorld),k.setFromMatrixPosition(at.matrixWorld);let gt=B.distanceTo(k),mt=Y.projectionMatrix.elements,Rt=at.projectionMatrix.elements,Pt=mt[14]/(mt[10]-1),St=mt[14]/(mt[10]+1),Ht=(mt[9]+1)/mt[5],D=(mt[9]-1)/mt[5],Se=(mt[8]-1)/mt[0],xt=(Rt[8]+1)/Rt[0],Tt=Pt*Se,dt=Pt*xt,Qt=gt/(-Se+xt),Dt=Qt*-Se;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Dt),H.translateZ(Qt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let b=Pt+Qt,y=St+Qt,F=Tt-Dt,K=dt+(gt-Dt),Z=Ht*St/y*b,Q=D*St/y*b;H.projectionMatrix.makePerspective(F,K,Z,Q,b,y),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;v.near=w.near=A.near=H.near,v.far=w.far=A.far=H.far,(E!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,N=v.far);let Y=H.parent,at=v.cameras;X(v,Y);for(let gt=0;gt<at.length;gt++)X(at[gt],Y);at.length===2?W(v,A,w):v.projectionMatrix.copy(A.projectionMatrix),G(H,v,Y)};function G(H,Y,at){at===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(at.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ba*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(H){c=H,p!==null&&(p.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let J=null;function j(H,Y){if(h=Y.getViewerPose(l||o),g=Y,h!==null){let at=h.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let gt=!1;at.length!==v.cameras.length&&(v.cameras.length=0,gt=!0);for(let mt=0;mt<at.length;mt++){let Rt=at[mt],Pt=null;if(f!==null)Pt=f.getViewport(Rt);else{let Ht=u.getViewSubImage(p,Rt);Pt=Ht.viewport,mt===0&&(t.setRenderTargetTextures(d,Ht.colorTexture,p.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(d))}let St=V[mt];St===void 0&&(St=new Ae,St.layers.enable(mt),St.viewport=new me,V[mt]=St),St.matrix.fromArray(Rt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Rt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),mt===0&&(v.matrix.copy(St.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),gt===!0&&v.cameras.push(St)}}for(let at=0;at<S.length;at++){let gt=x[at],mt=S[at];gt!==null&&mt!==void 0&&mt.update(gt,Y,l||o)}J&&J(H,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let ct=new Ul;ct.setAnimationLoop(j),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}};Qi=class{constructor(t={}){let{canvas:e=Ou(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ae,this._useLegacyLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1;let x=this,T=!1,P=0,A=0,w=null,V=-1,v=null,E=new me,N=new me,q=null,tt=new Ft(0),L=0,B=e.width,k=e.height,W=1,X=null,G=null,J=new me(0,0,B,k),j=new me(0,0,B,k),ct=!1,H=new Ki,Y=!1,at=!1,gt=null,mt=new Vt,Rt=new ut,Pt=new C,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ht(){return w===null?W:1}let D=n;function Se(M,I){for(let O=0;O<M.length;O++){let z=M[O],U=e.getContext(z,I);if(U!==null)return U}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",it,!1),D===null){let I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),D=Se(I,M),D===null)throw Se(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xt,Tt,dt,Qt,Dt,b,y,F,K,Z,Q,ft,rt,lt,Mt,Ut,$,Wt,kt,wt,_t,ht,Lt,Gt;function ee(){xt=new $p(D),Tt=new Vp(D,xt,t),xt.init(Tt),ht=new Tg(D,xt,Tt),dt=new Eg(D,xt,Tt),Qt=new Kp(D),Dt=new dg,b=new wg(D,xt,dt,Dt,Tt,ht,Qt),y=new Wp(x),F=new Yp(x),K=new sd(D,Tt),Lt=new kp(D,xt,K,Tt),Z=new Zp(D,K,Qt,Lt),Q=new em(D,Z,K,Qt),kt=new tm(D,Tt,b),Ut=new Gp(Dt),ft=new ug(x,y,F,xt,Tt,Lt,Ut),rt=new Rg(x,Dt),lt=new pg,Mt=new vg(xt,Tt),Wt=new zp(x,y,F,dt,Q,p,c),$=new bg(x,Q,Tt),Gt=new Cg(D,Qt,Tt,dt),wt=new Hp(D,xt,Qt,Tt),_t=new Jp(D,xt,Qt,Tt),Qt.programs=ft.programs,x.capabilities=Tt,x.extensions=xt,x.properties=Dt,x.renderLists=lt,x.shadowMap=$,x.state=dt,x.info=Qt}ee();let Ot=new za(x,D);this.xr=Ot,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(B,k,!1))},this.getSize=function(M){return M.set(B,k)},this.setSize=function(M,I,O=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,k=I,e.width=Math.floor(M*W),e.height=Math.floor(I*W),O===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(B*W,k*W).floor()},this.setDrawingBufferSize=function(M,I,O){B=M,k=I,W=O,e.width=Math.floor(M*O),e.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,I,O,z){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,I,O,z),dt.viewport(E.copy(J).multiplyScalar(W).floor())},this.getScissor=function(M){return M.copy(j)},this.setScissor=function(M,I,O,z){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,I,O,z),dt.scissor(N.copy(j).multiplyScalar(W).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(M){dt.setScissorTest(ct=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){G=M},this.getClearColor=function(M){return M.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(M=!0,I=!0,O=!0){let z=0;if(M){let U=!1;if(w!==null){let ot=w.texture.format;U=ot===Tl||ot===wl||ot===El}if(U){let ot=w.texture.type,pt=ot===Cn||ot===wn||ot===lo||ot===$n||ot===Sl||ot===bl,vt=Wt.getClearColor(),Et=Wt.getClearAlpha(),Nt=vt.r,At=vt.g,Ct=vt.b;pt?(f[0]=Nt,f[1]=At,f[2]=Ct,f[3]=Et,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=Nt,g[1]=At,g[2]=Ct,g[3]=Et,D.clearBufferiv(D.COLOR,0,g))}else z|=D.COLOR_BUFFER_BIT}I&&(z|=D.DEPTH_BUFFER_BIT),O&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",it,!1),lt.dispose(),Mt.dispose(),Dt.dispose(),y.dispose(),F.dispose(),Q.dispose(),Lt.dispose(),Gt.dispose(),ft.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",be),Ot.removeEventListener("sessionend",$t),gt&&(gt.dispose(),gt=null),Ee.stop()};function et(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=Qt.autoReset,I=$.enabled,O=$.autoUpdate,z=$.needsUpdate,U=$.type;ee(),Qt.autoReset=M,$.enabled=I,$.autoUpdate=O,$.needsUpdate=z,$.type=U}function it(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function st(M){let I=M.target;I.removeEventListener("dispose",st),bt(I)}function bt(M){yt(M),Dt.remove(M)}function yt(M){let I=Dt.get(M).programs;I!==void 0&&(I.forEach(function(O){ft.releaseProgram(O)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,z,U,ot){I===null&&(I=St);let pt=U.isMesh&&U.matrixWorld.determinant()<0,vt=Uh(M,I,O,z,U);dt.setMaterial(z,pt);let Et=O.index,Nt=1;if(z.wireframe===!0){if(Et=Z.getWireframeAttribute(O),Et===void 0)return;Nt=2}let At=O.drawRange,Ct=O.attributes.position,se=At.start*Nt,Ie=(At.start+At.count)*Nt;ot!==null&&(se=Math.max(se,ot.start*Nt),Ie=Math.min(Ie,(ot.start+ot.count)*Nt)),Et!==null?(se=Math.max(se,0),Ie=Math.min(Ie,Et.count)):Ct!=null&&(se=Math.max(se,0),Ie=Math.min(Ie,Ct.count));let fe=Ie-se;if(fe<0||fe===1/0)return;Lt.setup(U,z,vt,O,Et);let sn,jt=wt;if(Et!==null&&(sn=K.get(Et),jt=_t,jt.setIndex(sn)),U.isMesh)z.wireframe===!0?(dt.setLineWidth(z.wireframeLinewidth*Ht()),jt.setMode(D.LINES)):jt.setMode(D.TRIANGLES);else if(U.isLine){let Bt=z.linewidth;Bt===void 0&&(Bt=1),dt.setLineWidth(Bt*Ht()),U.isLineSegments?jt.setMode(D.LINES):U.isLineLoop?jt.setMode(D.LINE_LOOP):jt.setMode(D.LINE_STRIP)}else U.isPoints?jt.setMode(D.POINTS):U.isSprite&&jt.setMode(D.TRIANGLES);if(U.isBatchedMesh)jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)jt.renderInstances(se,fe,U.count);else if(O.isInstancedBufferGeometry){let Bt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Lr=Math.min(O.instanceCount,Bt);jt.renderInstances(se,fe,Lr)}else jt.render(se,fe)};function qt(M,I,O){M.transparent===!0&&M.side===oe&&M.forceSinglePass===!1?(M.side=Le,M.needsUpdate=!0,ds(M,I,O),M.side=Pn,M.needsUpdate=!0,ds(M,I,O),M.side=oe):ds(M,I,O)}this.compile=function(M,I,O=null){O===null&&(O=M),m=Mt.get(O),m.init(),S.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),M!==O&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights(x._useLegacyLights);let z=new Set;return M.traverse(function(U){let ot=U.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){let vt=ot[pt];qt(vt,O,U),z.add(vt)}else qt(ot,O,U),z.add(ot)}),S.pop(),m=null,z},this.compileAsync=function(M,I,O=null){let z=this.compile(M,I,O);return new Promise(U=>{function ot(){if(z.forEach(function(pt){Dt.get(pt).currentProgram.isReady()&&z.delete(pt)}),z.size===0){U(M);return}setTimeout(ot,10)}xt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Yt=null;function de(M){Yt&&Yt(M)}function be(){Ee.stop()}function $t(){Ee.start()}let Ee=new Ul;Ee.setAnimationLoop(de),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(M){Yt=M,Ot.setAnimationLoop(M),M===null?Ee.stop():Ee.start()},Ot.addEventListener("sessionstart",be),Ot.addEventListener("sessionend",$t),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(I),I=Ot.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,w),m=Mt.get(M,S.length),m.init(),S.push(m),mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H.setFromProjectionMatrix(mt),at=this.localClippingEnabled,Y=Ut.init(this.clippingPlanes,at),_=lt.get(M,d.length),_.init(),d.push(_),Qe(M,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,G),this.info.render.frame++,Y===!0&&Ut.beginShadows();let O=m.state.shadowsArray;if($.render(O,M,I),Y===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Wt.render(_,M),m.setupLights(x._useLegacyLights),I.isArrayCamera){let z=I.cameras;for(let U=0,ot=z.length;U<ot;U++){let pt=z[U];Bo(_,M,pt,pt.viewport)}}else Bo(_,M,I);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(x,M,I),Lt.resetDefaultState(),V=-1,v=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Qe(M,I,O,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||H.intersectsSprite(M)){z&&Pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(mt);let pt=Q.update(M),vt=M.material;vt.visible&&_.push(M,pt,vt,O,Pt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||H.intersectsObject(M))){let pt=Q.update(M),vt=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pt.copy(M.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(M.matrixWorld).applyMatrix4(mt)),Array.isArray(vt)){let Et=pt.groups;for(let Nt=0,At=Et.length;Nt<At;Nt++){let Ct=Et[Nt],se=vt[Ct.materialIndex];se&&se.visible&&_.push(M,pt,se,O,Pt.z,Ct)}}else vt.visible&&_.push(M,pt,vt,O,Pt.z,null)}}let ot=M.children;for(let pt=0,vt=ot.length;pt<vt;pt++)Qe(ot[pt],I,O,z)}function Bo(M,I,O,z){let U=M.opaque,ot=M.transmissive,pt=M.transparent;m.setupLightsView(O),Y===!0&&Ut.setGlobalState(x.clippingPlanes,O),ot.length>0&&Dh(U,ot,I,O),z&&dt.viewport(E.copy(z)),U.length>0&&us(U,I,O),ot.length>0&&us(ot,I,O),pt.length>0&&us(pt,I,O),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Dh(M,I,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let ot=Tt.isWebGL2;gt===null&&(gt=new pn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Zi:Cn,minFilter:$i,samples:ot?4:0})),x.getDrawingBufferSize(Rt),ot?gt.setSize(Rt.x,Rt.y):gt.setSize(Ea(Rt.x),Ea(Rt.y));let pt=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(tt),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let vt=x.toneMapping;x.toneMapping=Rn,us(M,O,z),b.updateMultisampleRenderTarget(gt),b.updateRenderTargetMipmap(gt);let Et=!1;for(let Nt=0,At=I.length;Nt<At;Nt++){let Ct=I[Nt],se=Ct.object,Ie=Ct.geometry,fe=Ct.material,sn=Ct.group;if(fe.side===oe&&se.layers.test(z.layers)){let jt=fe.side;fe.side=Le,fe.needsUpdate=!0,zo(se,O,z,Ie,fe,sn),fe.side=jt,fe.needsUpdate=!0,Et=!0}}Et===!0&&(b.updateMultisampleRenderTarget(gt),b.updateRenderTargetMipmap(gt)),x.setRenderTarget(pt),x.setClearColor(tt,L),x.toneMapping=vt}function us(M,I,O){let z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ot=M.length;U<ot;U++){let pt=M[U],vt=pt.object,Et=pt.geometry,Nt=z===null?pt.material:z,At=pt.group;vt.layers.test(O.layers)&&zo(vt,I,O,Et,Nt,At)}}function zo(M,I,O,z,U,ot){M.onBeforeRender(x,I,O,z,U,ot),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,I,O,z,M,ot),U.transparent===!0&&U.side===oe&&U.forceSinglePass===!1?(U.side=Le,U.needsUpdate=!0,x.renderBufferDirect(O,I,z,U,M,ot),U.side=Pn,U.needsUpdate=!0,x.renderBufferDirect(O,I,z,U,M,ot),U.side=oe):x.renderBufferDirect(O,I,z,U,M,ot),M.onAfterRender(x,I,O,z,U,ot)}function ds(M,I,O){I.isScene!==!0&&(I=St);let z=Dt.get(M),U=m.state.lights,ot=m.state.shadowsArray,pt=U.state.version,vt=ft.getParameters(M,U.state,ot,I,O),Et=ft.getProgramCacheKey(vt),Nt=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?F:y).get(M.envMap||z.environment),Nt===void 0&&(M.addEventListener("dispose",st),Nt=new Map,z.programs=Nt);let At=Nt.get(Et);if(At!==void 0){if(z.currentProgram===At&&z.lightsStateVersion===pt)return Ho(M,vt),At}else vt.uniforms=ft.getUniforms(M),M.onBuild(O,vt,x),M.onBeforeCompile(vt,x),At=ft.acquireProgram(vt,Et),Nt.set(Et,At),z.uniforms=vt.uniforms;let Ct=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=Ut.uniform),Ho(M,vt),z.needsLights=Fh(M),z.lightsStateVersion=pt,z.needsLights&&(Ct.ambientLightColor.value=U.state.ambient,Ct.lightProbe.value=U.state.probe,Ct.directionalLights.value=U.state.directional,Ct.directionalLightShadows.value=U.state.directionalShadow,Ct.spotLights.value=U.state.spot,Ct.spotLightShadows.value=U.state.spotShadow,Ct.rectAreaLights.value=U.state.rectArea,Ct.ltc_1.value=U.state.rectAreaLTC1,Ct.ltc_2.value=U.state.rectAreaLTC2,Ct.pointLights.value=U.state.point,Ct.pointLightShadows.value=U.state.pointShadow,Ct.hemisphereLights.value=U.state.hemi,Ct.directionalShadowMap.value=U.state.directionalShadowMap,Ct.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ct.spotShadowMap.value=U.state.spotShadowMap,Ct.spotLightMatrix.value=U.state.spotLightMatrix,Ct.spotLightMap.value=U.state.spotLightMap,Ct.pointShadowMap.value=U.state.pointShadowMap,Ct.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=At,z.uniformsList=null,At}function ko(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=bi.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ho(M,I){let O=Dt.get(M);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Uh(M,I,O,z,U){I.isScene!==!0&&(I=St),b.resetTextureUnits();let ot=I.fog,pt=z.isMeshStandardMaterial?I.environment:null,vt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:fn,Et=(z.isMeshStandardMaterial?F:y).get(z.envMap||pt),Nt=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,At=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ct=!!O.morphAttributes.position,se=!!O.morphAttributes.normal,Ie=!!O.morphAttributes.color,fe=Rn;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(fe=x.toneMapping);let sn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,jt=sn!==void 0?sn.length:0,Bt=Dt.get(z),Lr=m.state.lights;if(Y===!0&&(at===!0||M!==v)){let Oe=M===v&&z.id===V;Ut.setState(z,M,Oe)}let ne=!1;z.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Lr.state.version||Bt.outputColorSpace!==vt||U.isBatchedMesh&&Bt.batching===!1||!U.isBatchedMesh&&Bt.batching===!0||U.isInstancedMesh&&Bt.instancing===!1||!U.isInstancedMesh&&Bt.instancing===!0||U.isSkinnedMesh&&Bt.skinning===!1||!U.isSkinnedMesh&&Bt.skinning===!0||U.isInstancedMesh&&Bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Bt.instancingColor===!1&&U.instanceColor!==null||Bt.envMap!==Et||z.fog===!0&&Bt.fog!==ot||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Ut.numPlanes||Bt.numIntersection!==Ut.numIntersection)||Bt.vertexAlphas!==Nt||Bt.vertexTangents!==At||Bt.morphTargets!==Ct||Bt.morphNormals!==se||Bt.morphColors!==Ie||Bt.toneMapping!==fe||Tt.isWebGL2===!0&&Bt.morphTargetsCount!==jt)&&(ne=!0):(ne=!0,Bt.__version=z.version);let zn=Bt.currentProgram;ne===!0&&(zn=ds(z,I,U));let Vo=!1,Fi=!1,Ir=!1,ye=zn.getUniforms(),kn=Bt.uniforms;if(dt.useProgram(zn.program)&&(Vo=!0,Fi=!0,Ir=!0),z.id!==V&&(V=z.id,Fi=!0),Vo||v!==M){ye.setValue(D,"projectionMatrix",M.projectionMatrix),ye.setValue(D,"viewMatrix",M.matrixWorldInverse);let Oe=ye.map.cameraPosition;Oe!==void 0&&Oe.setValue(D,Pt.setFromMatrixPosition(M.matrixWorld)),Tt.logarithmicDepthBuffer&&ye.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ye.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Fi=!0,Ir=!0)}if(U.isSkinnedMesh){ye.setOptional(D,U,"bindMatrix"),ye.setOptional(D,U,"bindMatrixInverse");let Oe=U.skeleton;Oe&&(Tt.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),ye.setValue(D,"boneTexture",Oe.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(ye.setOptional(D,U,"batchingTexture"),ye.setValue(D,"batchingTexture",U._matricesTexture,b));let Dr=O.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0&&Tt.isWebGL2===!0)&&kt.update(U,O,zn),(Fi||Bt.receiveShadow!==U.receiveShadow)&&(Bt.receiveShadow=U.receiveShadow,ye.setValue(D,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(kn.envMap.value=Et,kn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),Fi&&(ye.setValue(D,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&Nh(kn,Ir),ot&&z.fog===!0&&rt.refreshFogUniforms(kn,ot),rt.refreshMaterialUniforms(kn,z,W,k,gt),bi.upload(D,ko(Bt),kn,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(bi.upload(D,ko(Bt),kn,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ye.setValue(D,"center",U.center),ye.setValue(D,"modelViewMatrix",U.modelViewMatrix),ye.setValue(D,"normalMatrix",U.normalMatrix),ye.setValue(D,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Oe=z.uniformsGroups;for(let Ur=0,Oh=Oe.length;Ur<Oh;Ur++)if(Tt.isWebGL2){let Go=Oe[Ur];Gt.update(Go,zn),Gt.bind(Go,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function Nh(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Fh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,I,O){Dt.get(M.texture).__webglTexture=I,Dt.get(M.depthTexture).__webglTexture=O;let z=Dt.get(M);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){let O=Dt.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,O=0){w=M,P=I,A=O;let z=!0,U=null,ot=!1,pt=!1;if(M){let Et=Dt.get(M);Et.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):Et.__webglFramebuffer===void 0?b.setupRenderTarget(M):Et.__hasExternalTextures&&b.rebindTextures(M,Dt.get(M.texture).__webglTexture,Dt.get(M.depthTexture).__webglTexture);let Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(pt=!0);let At=Dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[I])?U=At[I][O]:U=At[I],ot=!0):Tt.isWebGL2&&M.samples>0&&b.useMultisampledRTT(M)===!1?U=Dt.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?U=At[O]:U=At,E.copy(M.viewport),N.copy(M.scissor),q=M.scissorTest}else E.copy(J).multiplyScalar(W).floor(),N.copy(j).multiplyScalar(W).floor(),q=ct;if(dt.bindFramebuffer(D.FRAMEBUFFER,U)&&Tt.drawBuffers&&z&&dt.drawBuffers(M,U),dt.viewport(E),dt.scissor(N),dt.setScissorTest(q),ot){let Et=Dt.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Et.__webglTexture,O)}else if(pt){let Et=Dt.get(M.texture),Nt=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,O||0,Nt)}V=-1},this.readRenderTargetPixels=function(M,I,O,z,U,ot,pt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(vt=vt[pt]),vt){dt.bindFramebuffer(D.FRAMEBUFFER,vt);try{let Et=M.texture,Nt=Et.format,At=Et.type;if(Nt!==Ze&&ht.convert(Nt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ct=At===Zi&&(xt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(At!==Cn&&ht.convert(At)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===Tn&&(Tt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&O>=0&&O<=M.height-U&&D.readPixels(I,O,z,U,ht.convert(Nt),ht.convert(At),ot)}finally{let Et=w!==null?Dt.get(w).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(M,I,O=0){let z=Math.pow(2,-O),U=Math.floor(I.image.width*z),ot=Math.floor(I.image.height*z);b.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,M.x,M.y,U,ot),dt.unbindTexture()},this.copyTextureToTexture=function(M,I,O,z=0){let U=I.image.width,ot=I.image.height,pt=ht.convert(O.format),vt=ht.convert(O.type);b.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,M.x,M.y,U,ot,pt,vt,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,pt,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,M.x,M.y,pt,vt,I.image),z===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O,z,U=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ot=M.max.x-M.min.x+1,pt=M.max.y-M.min.y+1,vt=M.max.z-M.min.z+1,Et=ht.convert(z.format),Nt=ht.convert(z.type),At;if(z.isData3DTexture)b.setTexture3D(z,0),At=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)b.setTexture2DArray(z,0),At=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Ct=D.getParameter(D.UNPACK_ROW_LENGTH),se=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ie=D.getParameter(D.UNPACK_SKIP_PIXELS),fe=D.getParameter(D.UNPACK_SKIP_ROWS),sn=D.getParameter(D.UNPACK_SKIP_IMAGES),jt=O.isCompressedTexture?O.mipmaps[U]:O.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,jt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,M.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,M.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,M.min.z),O.isDataTexture||O.isData3DTexture?D.texSubImage3D(At,U,I.x,I.y,I.z,ot,pt,vt,Et,Nt,jt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(At,U,I.x,I.y,I.z,ot,pt,vt,Et,jt.data)):D.texSubImage3D(At,U,I.x,I.y,I.z,ot,pt,vt,Et,Nt,jt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ct),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,sn),U===0&&z.generateMipmaps&&D.generateMipmap(At),dt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),dt.unbindTexture()},this.resetState=function(){P=0,A=0,w=null,dt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ho?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===xr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ae?Jn:Rl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Jn?ae:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ka=class extends Qi{};ka.prototype.isWebGL1Renderer=!0;rr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},ar=class extends _e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_i=new Vt,dl=new Vt,Ns=[],fl=new mn,Pg=new Vt,Vi=new ce,Gi=new Kn,or=class extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),fl.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union(fl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Gi.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Gi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(n),t.ray.intersectsSphere(Gi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_i),dl.multiplyMatrices(n,_i),Vi.matrixWorld=dl,Vi.raycast(t,Ns);for(let o=0,a=Ns.length;o<a;o++){let c=Ns[o];c.instanceId=r,c.object=this,e.push(c)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,f=(o-h)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ut:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,c=new Vt;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ge(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ge(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ji=class extends Ge{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new ut,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*u+this.aX,l=p*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ha=class extends ji{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Fs=new C,da=new fo,fa=new fo,pa=new fo,Va=class extends Ge{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Fs.subVectors(s[0],s[1]).add(s[0]),l=Fs);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),da.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,_,m),fa.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,_,m),pa.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(da.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),fa.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),pa.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(da.calc(c),fa.calc(c),pa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};cr=class extends Ge{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yi(t,s.x,r.x,o.x,a.x),Yi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ga=class extends Ge{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yi(t,s.x,r.x,o.x,a.x),Yi(t,s.y,r.y,o.y,a.y),Yi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lr=class extends Ge{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends Ge{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hr=class extends Ge{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qi(t,s.x,r.x,o.x),qi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends Ge{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qi(t,s.x,r.x,o.x),qi(t,s.y,r.y,o.y),qi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ur=class extends Ge{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(pl(a,c.x,l.x,h.x,u.x),pl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},ml=Object.freeze({__proto__:null,ArcCurve:Ha,CatmullRomCurve3:Va,CubicBezierCurve:cr,CubicBezierCurve3:Ga,EllipseCurve:ji,LineCurve:lr,LineCurve3:Wa,QuadraticBezierCurve:hr,QuadraticBezierCurve3:Xa,SplineCurve:ur}),qa=class extends Ge{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ml[s.type]().fromJSON(s))}return this}},Ya=class extends qa{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lr(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new hr(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new cr(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ur(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new ji(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},$a=class i extends Ve{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ge(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new C,p=new ut,f=new C,g=new C,_=new C,m=0,d=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,f.x=d*1,f.y=-m,f.z=d*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,f.x=d*1,f.y=-m,f.z=d*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=e;S++){let x=n+S*h*s,T=Math.sin(x),P=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*T,u.y=t[A].y,u.z=t[A].x*P,o.push(u.x,u.y,u.z),p.x=S/e,p.y=A/(t.length-1),a.push(p.x,p.y);let w=c[3*A+0]*T,V=c[3*A+1],v=c[3*A+0]*P;l.push(w,V,v)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){let T=x+S*t.length,P=T,A=T+t.length,w=T+t.length+1,V=T+1;r.push(P,A,V),r.push(w,V,A)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},dr=class i extends $a{constructor(t=1,e=1,n=4,s=8){let r=new Ya;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},ts=class i extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,p=new C,f=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let S=[],x=d/n,T=0;d===0&&o===0?T=.5/e:d===n&&c===Math.PI&&(T=-.5/e);for(let P=0;P<=e;P++){let A=P/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(A+T,1-x),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){let x=h[d][S+1],T=h[d][S],P=h[d+1][S],A=h[d+1][S+1];(d!==0||o>0)&&f.push(x,T,A),(d!==n-1||c<Math.PI)&&f.push(T,P,A)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},fr=class extends Dn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ft(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},_n=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};Ci=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Za=class extends Ci{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=t,a=2*e-n;break;case Ec:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bc:o=t,c=2*n-e;break;case Ec:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-p*m+2*p*_-p*g,S=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,T=f*m-f*_;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+S*o[l+P]+x*o[c+P]+T*o[u+P];return r}},Ja=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},Ka=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Os(e,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Os(t.times,Array),values:Os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Za(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zs:e=this.InterpolantFactoryMethodDiscrete;break;case ks:e=this.InterpolantFactoryMethodLinear;break;case Hr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Hr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Bg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,p=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[p+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=ks;Qn=class extends Ke{};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=zs;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;Qa=class extends Ke{};Qa.prototype.ValueTypeName="color";ja=class extends Ke{};ja.prototype.ValueTypeName="number";to=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}},es=class extends Ke{InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}};es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=ks;es.prototype.InterpolantFactoryMethodSmooth=void 0;jn=class extends Ke{};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=zs;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;eo=class extends Ke{};eo.prototype.ValueTypeName="vector";no=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},zg=new no,io=class{constructor(t){this.manager=t!==void 0?t:zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};io.DEFAULT_MATERIAL_NAME="__DEFAULT";pr=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},mr=class extends pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ma=new Vt,gl=new C,_l=new C,so=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(gl),_l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_l),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ro=class extends so{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new ro}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},po="\\[\\]\\.:\\/",kg=new RegExp("["+po+"]","g"),mo="[^"+po+"]",Hg="[^"+po.replace("\\.","")+"]",Vg=/((?:WC+[\/:])*)/.source.replace("WC",mo),Gg=/(WCOD+)?/.source.replace("WCOD",Hg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mo),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mo),qg=new RegExp("^"+Vg+Gg+Wg+Xg+"$"),Yg=["material","materials","bones","map"],ao=class{constructor(t,e,n){let s=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Jt=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(t){let e=qg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=ao;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];w0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});  var HWV = (window.HWV = { w: 1920, h: 1080, ox: 0, oy: 0 });
  function is(i, t, e) {
    return (
      Hl.makeTranslation(e.x, e.y, e.z),
      Vl.makeTranslation(-e.x, -e.y, -e.z),
      kl.makeRotationAxis(i.clone().normalize(), Gl(t)),
      new Vt().multiplyMatrices(Hl, kl).multiply(Vl)
    );
  }
  function _o(i, t, e) {
    let n = Gl(72 * t),
      s = new C(Math.cos(n), Math.sin(n), 0),
      r = new C(-Math.sin(n), Math.cos(n), 0),
      o = s
        .clone()
        .multiplyScalar(0.9814)
        .add(new C(0, 0, 0.1922))
        .normalize(),
      a = s
        .clone()
        .multiplyScalar(-0.48)
        .add(new C(0, 0, 2.44)),
      c = s.clone().multiplyScalar(0.85),
      l = is(r, e[2], c.clone().add(new C(0, 0, 2.7))),
      h = is(new C(0, 0, 1), e[1], c),
      u = new Vt().makeTranslation(0, 0, e[0]),
      p = new Vt().multiplyMatrices(u, h).multiply(l),
      f = is(o.clone().negate(), e[3], a),
      g = is(o, e[4], a);
    for (let _ of i.lower[t]) {
      let m = _.userData.side;
      (_.matrix.copy(p),
        m === "left"
          ? _.matrix.multiply(f)
          : m === "right" && _.matrix.multiply(g),
        (_.matrixWorldNeedsUpdate = !0));
    }
  }
  function xo(i, t, e) {
    let n = $g[t],
      s = is(new C(0, 0, 1), e, new C(n[0], n[1], 0));
    for (let r of i.upper[t])
      (r.matrix.copy(s), (r.matrixWorldNeedsUpdate = !0));
  }
  function Wl(i) {
    return i.upper.map((t) => {
      let e = t.find((s) => s.userData.mat.includes("SCREEN")) || t[0];
      e.geometry.computeBoundingBox();
      let n = new C();
      return (
        e.geometry.boundingBox.getCenter(n),
        (Math.atan2(n.y, n.x) * 180) / Math.PI
      );
    });
  }
  function Xl(i) {
    for (let t of i.static)
      (t.matrix.identity(), (t.matrixWorldNeedsUpdate = !0));
  }
  var Gl,
    $g,
    kl,
    Hl,
    Vl,
    ql = Be(() => {
      vr();
      ((Gl = (i) => (i * Math.PI) / 180),
        ($g = [
          [0.21, 0.06],
          [-0.15, 0.15],
          [-0.06, -0.21],
        ]),
        (kl = new Vt()),
        (Hl = new Vt()),
        (Vl = new Vt()));
    });
  function Li(i) {
    return ((i = ((((i + 180) % 360) + 360) % 360) - 180), i);
  }
  function Kg(i) {
    let t = tn(1 - i / 2.4, 0, 1);
    return t * t * (3 - 2 * t);
  }
  function Jl(i) {
    let t = i.mode,
      e = yo[i.posture],
      n = e + Zg[t],
      s;
    if (t === 0) s = tn((6 + 0.2 * i.lean) * (0.7 + 0.3 * i.Cs), 0, 12);
    else if (t === 1) s = tn(2 + 0.1 * i.lean, -6, 8);
    else {
      let a = e - 0.12,
        c = vo(i.alpha + 15),
        l = a + 1.7 * Math.tan(c);
      ((s = ss(Math.asin(tn((2.7 - l) / (2.28 - 0.85), -1, 1)))),
        (s = tn(s, -8, 0)));
    }
    let r = Yl[t] * i.pressL * (1 - i.openL),
      o = Yl[t] * i.pressR * (1 - i.openR);
    return { head: e, zTarget: n, theta: s, dL: r, dR: o };
  }
  function Qg(i) {
    return [
      -tn(i.zTarget - 2.6995, -0.6, 0) / 0.6,
      1,
      Math.abs(i.theta) / 12,
      i.dL / 0.2,
      i.dR / 0.2,
    ];
  }
  function Kl(i, t) {
    let e = Qg(t),
      n = 1,
      s = i.wEnv,
      r = i.wPer,
      o = Math.max(n + s + r, 1e-4),
      a = Jg.map(() => new Float32Array(441));
    for (let c = 0; c < 21; c++)
      for (let l = 0; l < 21; l++) {
        let h = -3.15 + (l + 0.5) * 0.3,
          u = -3.15 + (c + 0.5) * 0.3,
          p = i.valid ? Kg(Math.hypot(h - i.px, u - i.py)) : 0;
        for (let f = 0; f < 5; f++) {
          let g = (n * e[f] * p + s * i.envScore * p + r * i.perScore * p) / o;
          a[f][c * 21 + l] = tn(g, 0, 1);
        }
      }
    return a;
  }
  function jg(i, t, e) {
    let n = (t + 3.15) / 0.3 - 0.5,
      s = (e + 3.15) / 0.3 - 0.5,
      r = Math.floor(n),
      o = Math.floor(s),
      a = n - r,
      c = s - o,
      l = (h, u) => (h < 0 || u < 0 || h >= 21 || u >= 21 ? 0 : i[h * 21 + u]);
    return (
      (l(o, r) * (1 - a) + l(o, r + 1) * a) * (1 - c) +
      (l(o + 1, r) * (1 - a) + l(o + 1, r + 1) * a) * c
    );
  }
  function t0(i, t) {
    let e = Mr(t),
      n = [];
    for (let s = 0; s < 5; s++) {
      let r = 0;
      for (let o of [0.95, 1.35, 1.75, 2.15])
        r += jg(i[s], o * Math.cos(e), o * Math.sin(e));
      n.push(r / 4);
    }
    return n;
  }
  function Ql(i, t, e) {
    let n = [];
    for (let s = 0; s < 5; s++) {
      let r = t0(e, s),
        o = Mr(s);
      if (!i.valid) {
        n.push([0, 0, 0, 0, 0]);
        continue;
      }
      let a = t.theta === 0 ? 0 : Math.min(1, r[2] / (Math.abs(t.theta) / 12)),
        c = tn(t.theta * a, -8, 8),
        l = Math.max(0, Math.sin(vo(c))) * (2.28 - 0.85),
        h = 0.2 * r[3],
        u = 0.2 * r[4],
        p = 2.6995 - l - Math.max(h, u),
        f = -0.6 * r[0];
      f = tn(Math.max(f, t.zTarget - p), -0.6, 0);
      let g = 0.85 * Math.cos(o),
        _ = 0.85 * Math.sin(o),
        m = ss(Math.atan2(i.py - _, i.px - g)),
        d = 0 * m * r[1],
        S = -ss(Math.atan(Math.max(h, u) / $l)),
        x = S;
      n.push([f, d, c, S, x]);
    }
    return n;
  }
  var Zg,
    Yl,
    $l,
    Zl,
    yo,
    Jg,
    tn,
    ss,
    vo,
    Mr,
    rs = Be(() => {
      ((Zg = [0.35, 0.55, 0.75]),
        (Yl = [0.2, 0.1, 0.05]),
        ($l = 0.7),
        (Zl = 3),
        (yo = [1.75, 1.3, 1]),
        (Jg = ["H", "Y", "P", "L", "R"]),
        (tn = (i, t, e) => Math.max(t, Math.min(e, i))),
        (ss = (i) => (i * 180) / Math.PI),
        (vo = (i) => (i * Math.PI) / 180),
        (Mr = (i) => vo(72 * i)));
    });
  function n0(i) {
    let t = i.mat;
    return t.includes("SHADOW")
      ? null
      : t.includes("SCREEN")
        ? "screen"
        : t.includes("BRONZE")
          ? "rib"
          : t.includes("JOINT")
            ? "joint"
            : t.includes("IVORY")
              ? i.kind === "static"
                ? "column"
                : "membrane"
              : {
                  Concrete: "concrete",
                  Timber: "timber",
                  Planter: "planter",
                  Mechanism: "mech",
                }[t] || "concrete";
  }
  function i0() {
    let i = window.HW_MODEL,
      t = Uint8Array.from(atob(i.b64), (o) => o.charCodeAt(0)).buffer,
      e = new le(),
      n = { static: [], lower: [[], [], [], [], []], upper: [[], [], []] },
      s = { lower: [], upper: [] },
      r = {};
    for (let o of i.meta) {
      let a = n0(o);
      if (!a) continue;
      let c = new Int16Array(t, o.pOff, o.pN),
        l = new Float32Array(o.pN);
      for (let f = 0; f < o.pN; f++) l[f] = c[f] / 1e3;
      let h = new Ve();
      (h.setAttribute("position", new _e(l, 3)),
        h.setIndex(
          new _e(new Uint16Array(new Uint16Array(t, o.iOff, o.iN)), 1),
        ),
        h.computeVertexNormals());
      let u;
      if ((a === "membrane" || a === "screen") && o.kind !== "static") {
        let f = s[o.kind],
          g = o.leaf - 1;
        ((f[g] = f[g] || new _n(Mo[a])), (u = f[g]));
      } else u = r[a] = r[a] || new _n(Mo[a]);
      let p = new ce(h, u);
      ((p.castShadow = !0),
        (p.receiveShadow = a !== "screen"),
        (p.matrixAutoUpdate = !1),
        (p.userData = { side: o.side, leaf: o.leaf, mat: o.mat }),
        e.add(p),
        o.kind === "lower"
          ? n.lower[o.leaf - 1].push(p)
          : o.kind === "upper"
            ? n.upper[o.leaf - 1].push(p)
            : n.static.push(p));
    }
    return { root: e, parts: n, leafMats: s };
  }
  function s0() {
    let i = new Ri(0.3 * 0.86, 0.3 * 0.86),
      t = new _n({ roughness: 1, transparent: !0, opacity: 0 }),
      e = new or(i, t, 441),
      n = new Vt(),
      s = new Ft(0.5, 0.5, 0.5);
    for (let r = 0; r < 21; r++)
      for (let o = 0; o < 21; o++)
        (n.makeTranslation(
          -3.15 + (o + 0.5) * 0.3,
          -3.15 + (r + 0.5) * 0.3,
          0.004,
        ),
          e.setMatrixAt(r * 21 + o, n),
          e.setColorAt(r * 21 + o, s));
    return ((e.receiveShadow = !0), e);
  }
  function eh(i) {
    let t = new Qi({
      canvas: i,
      antialias: !0,
      alpha: !0,
      preserveDrawingBuffer: !0,
    });
    (t.setClearColor(0, 0),
      (t.shadowMap.enabled = !0),
      (t.shadowMap.type = oo),
      (t.outputColorSpace = ae),
      (t.toneMapping = co),
      (t.toneMappingExposure = 1));
    let e = new rr(),
      n = new Ae(30, 1920 / 1080, 0.1, 200),
      s = new le();
    ((s.rotation.x = -Math.PI / 2), e.add(s));
    let r = new mr(16777215, 10133668, 0.9);
    e.add(r);
    let o = new gr(16773340, 2.6);
    ((o.castShadow = !0),
      o.shadow.mapSize.set(4096, 4096),
      Object.assign(o.shadow.camera, {
        left: -8,
        right: 8,
        top: 8,
        bottom: -8,
        near: 1,
        far: 50,
      }),
      (o.shadow.bias = -3e-4),
      (o.shadow.normalBias = 0.02),
      (o.shadow.radius = 5),
      e.add(o),
      e.add(o.target));
    let a = new ce(new Ri(80, 80), new fr({ color: 2372155, opacity: 0.26 }));
    ((a.receiveShadow = !0), s.add(a));
    let c = s0();
    s.add(c);
    let { root: l, parts: h, leafMats: u } = i0();
    (s.add(l), Xl(h));
    let p = Wl(h);
    for (let w = 0; w < 5; w++) _o(h, w, [0, 0, 0, 0, 0]);
    for (let w = 0; w < 3; w++) xo(h, w, 0);
    function f(w, V) {
      let v = th(w),
        E = th(V),
        N = 20;
      (o.position.set(
        Math.sin(v) * Math.cos(E) * N,
        Math.sin(E) * N,
        -Math.cos(v) * Math.cos(E) * N,
      ),
        (o.intensity = 1 + 1.9 * Math.sin(Math.max(E, 0.05))),
        o.color.setHSL(0.09, 0.9, 0.86 + 0.12 * Math.sin(Math.max(E, 0))));
    }
    let g = new Ft();
    function _(w, V, v = 0.22, E = 0.97) {
      if (((c.material.opacity = V), (c.visible = V > 0.01), !!w)) {
        for (let N = 0; N < 441; N++) {
          let q = v + (E - v) * w[N];
          (g.setRGB(q, q, q, ae), c.setColorAt(N, g));
        }
        c.instanceColor.needsUpdate = !0;
      }
    }
    function m(w, V, v) {
      let E = u[w][V];
      E &&
        (E.color.set(
          v ? 16777215 : Mo[w === "lower" ? "membrane" : "screen"].color,
        ),
        E.emissive.set(v ? 15698749 : 0),
        (E.emissiveIntensity = v ? 0.32 : 0));
    }
    let d = {
      t: new C(0, 0, 1.6),
      p: new C(8, -9, 4.5),
      fov: 30,
      sx: 960,
      sy: 540,
    };
    function S() {
      ((n.fov = d.fov),
        n.position.set(d.p.x, d.p.z, -d.p.y),
        n.lookAt(d.t.x, d.t.z, -d.t.y),
        n.setViewOffset(1920, 1080, 960 - d.sx - HWV.ox, 540 - d.sy - HWV.oy, HWV.w, HWV.h),
        n.updateProjectionMatrix());
    }
    let x = new C();
    function T(w, V, v) {
      return (x.set(w, v, -V).project(n), [((x.x + 1) * HWV.w) / 2 - HWV.ox, ((1 - x.y) * HWV.h) / 2 - HWV.oy]);
    }
    function P(w) {
      (t.setPixelRatio(w), t.setSize(HWV.w, HWV.h, !1));
    }
    function A() {
      (S(), t.render(e, n));
    }
    return {
      renderer: t,
      scene: e,
      world: s,
      parts: h,
      UB: p,
      cam: d,
      setSun: f,
      setField: _,
      highlight: m,
      project: T,
      setSize: P,
      render: A,
      poseLower: (w, V) => _o(h, w, V),
      poseUpper: (w, V) => xo(h, w, V),
      catcher: a,
    };
  }
  var th,
    Mo,
    nh = Be(() => {
      vr();
      ql();
      rs();
      ((th = (i) => (i * Math.PI) / 180),
        (Mo = {
          membrane: {
            color: 15987696,
            roughness: 0.92,
            transparent: !0,
            opacity: 0.93,
            side: oe,
          },
          screen: {
            color: 15526887,
            roughness: 0.95,
            transparent: !0,
            opacity: 0.86,
            side: oe,
          },
          rib: { color: 8028550, roughness: 0.6, metalness: 0.1, side: oe },
          column: { color: 15329766, roughness: 0.8, side: oe },
          concrete: { color: 14606300, roughness: 0.95, side: oe },
          timber: { color: 12039341, roughness: 0.85, side: oe },
          planter: { color: 10134170, roughness: 0.95, side: oe },
          mech: { color: 5791331, roughness: 0.6, metalness: 0.3, side: oe },
          joint: { color: 2896181, roughness: 0.5, side: oe },
        }));
    });
  function So(i = 15698749, t = 1) {
    let e = new _n({
        color: i,
        roughness: 0.6,
        transparent: t < 1,
        opacity: t,
      }),
      n = new le(),
      s = new le();
    n.add(s);
    let r = new le();
    s.add(r);
    let o = new le();
    r.add(o);
    let a = (d, S) => {
        let x = new dr(d, S, 6, 16);
        x.rotateX(Math.PI / 2);
        let T = new ce(x, e);
        return ((T.castShadow = !0), T);
      },
      c = a(0.16, 0.36);
    ((c.position.z = 0.33), o.add(c));
    let l = new le();
    ((l.position.z = 0.62), o.add(l));
    let h = new le();
    l.add(h);
    let u = new ce(new ts(0.105, 28, 18), e);
    ((u.position.z = 0.14), (u.castShadow = !0), h.add(u));
    let p = new ce(new ts(0.03, 12, 8), e);
    (p.position.set(0.1, 0, 0.15), h.add(p));
    let f = [];
    for (let d of [-1, 1]) {
      let S = new le();
      (S.position.set(0, d * 0.2, 0.55), o.add(S));
      let x = a(0.05, 0.42);
      ((x.position.z = -0.24), S.add(x), f.push(S));
    }
    let g = [],
      _ = [];
    for (let d of [-1, 1]) {
      let S = new le();
      (S.position.set(0, d * 0.1, 0), r.add(S));
      let x = a(0.07, 0.33);
      ((x.position.z = -0.22), S.add(x));
      let T = new le();
      ((T.position.z = -0.44), S.add(T));
      let P = a(0.06, 0.32);
      ((P.position.z = -0.22), T.add(P), g.push(S), _.push(T));
    }
    function m(d, S = 0, x = 0, T = 0, P = 0) {
      s.rotation.z = (T * Math.PI) / 180;
      let A,
        w,
        V,
        v = 0;
      (d === 0
        ? ((A = 0.93), (w = 0), (V = 0))
        : d === 1
          ? ((A = 0.48), (w = -90), (V = 90))
          : ((A = 0.32), (w = -125), (V = 145), (v = 28)),
        (r.position.z = A),
        (o.rotation.y = ((S + v) * Math.PI) / 180),
        (h.rotation.y = (x * Math.PI) / 180),
        g.forEach(
          (E, N) =>
            (E.rotation.y =
              ((w + (d === 0 ? (N ? P : -P) : 0)) * Math.PI) / 180),
        ),
        _.forEach((E) => (E.rotation.y = (V * Math.PI) / 180)),
        f.forEach(
          (E, N) =>
            (E.rotation.y =
              ((d === 1 ? -35 : (N ? -P : P) * 0.8) * Math.PI) / 180),
        ));
    }
    return { root: n, pose: m, mat: e };
  }
  var ih = Be(() => {
    vr();
  });
  var sh,
    r0,
    a0,
    ti,
    bo = Be(() => {
      ((sh = [0.02, 2, 2, 2, 2]),
        (r0 = [0.03, 3, 3, 3, 3]),
        (a0 = 0.5),
        (ti = class {
          constructor() {
            ((this.cmd = []),
              (this.cand = []),
              (this.candT = []),
              (this.act = []));
            for (let t = 0; t < 5; t++)
              (this.cmd.push([0, 0, 0, 0, 0]),
                this.cand.push([0, 0, 0, 0, 0]),
                this.candT.push([0, 0, 0, 0, 0]),
                this.act.push([0, 0, 0, 0, 0]));
            this.speed = 1;
          }
          step(t, e, n, s, r) {
            let o = s === 0 ? 1 + 2 * r : 1.5,
              a = 1 - Math.exp(-n / o);
            for (let c = 0; c < 5; c++)
              for (let l = 0; l < 5; l++) {
                let h = t[c][l];
                Math.abs(h - this.cmd[c][l]) > sh[l]
                  ? Math.abs(h - this.cand[c][l]) > sh[l] * 0.5
                    ? ((this.cand[c][l] = h), (this.candT[c][l] = e))
                    : e - this.candT[c][l] >= a0 && (this.cmd[c][l] = h)
                  : (this.cand[c][l] = h);
                let u = a * (this.cmd[c][l] - this.act[c][l]),
                  p = r0[l] * n;
                ((u = Math.max(-p, Math.min(p, u))), (this.act[c][l] += u));
              }
            return this.act;
          }
        }));
    });
  function Er() {
    return {
      px: 1.45,
      py: -0.84,
      mode: 1,
      posture: 1,
      lean: 0,
      alpha: 0,
      Cs: 0.85,
      face: 150,
      pressL: 0,
      pressR: 0,
      openL: 0,
      openR: 0,
      wEnv: 0,
      wPer: 0,
      envScore: 0,
      perScore: 0,
      valid: !0,
      sunAz: 215,
      sunEl: 58,
    };
  }
  var br,
    wo = Be(() => {
      rs();
      bo();
      br = class {
        constructor(t) {
          ((this.st = t),
            (this.f = new ti()),
            (this.t = 0),
            (this.up = [0, 0, 0]),
            (this.F = null),
            (this.src = null),
            (this.T = null));
        }
        reset() {
          ((this.f = new ti()), (this.t = 0));
        }
        step(t, e, n = !1, s = 1) {
          t.valid = t.valid !== !1 && Math.hypot(t.px, t.py) <= Zl;
          let r = Jl(t),
            o = Kl(t, r),
            a = Ql(t, r, o);
          ((this.src = r), (this.F = o), (this.T = a), (this.t += e * s));
          let c;
          n
            ? ((c = a.map((l) => l.slice())),
              (this.f.act = c.map((l) => l.slice())),
              (this.f.cmd = c.map((l) => l.slice())),
              (this.f.cand = c.map((l) => l.slice())))
            : (c = this.f.step(a, this.t, e * s, t.mode, t.Cs));
          for (let l = 0; l < 5; l++) this.st.poseLower(l, c[l]);
          return ((this.act = c), c);
        }
        upper(t, e, n = !1) {
          let s = (t.sunAz * Math.PI) / 180,
            r = (Math.max(t.sunEl, 8) * Math.PI) / 180,
            o = Math.min(3.05 / Math.tan(r), 2),
            a = t.px + Math.sin(s) * o,
            c = t.py + Math.cos(s) * o,
            l = (Math.atan2(c, a) * 180) / Math.PI,
            h = [-62, 0, 62],
            u = [
              [0, 1, 2],
              [0, 2, 1],
              [1, 0, 2],
              [1, 2, 0],
              [2, 0, 1],
              [2, 1, 0],
            ],
            p = null;
          for (let f of u) {
            let g = f.map((m, d) => Li(l + h[m] - this.st.UB[d])),
              _ = g.reduce((m, d, S) => m + Math.abs(Li(d - this.up[S])), 0);
            (!p || _ < p.c) && (p = { y: g, c: _ });
          }
          for (let f = 0; f < 3; f++) {
            let g = Li(p.y[f] - this.up[f]);
            ((this.up[f] = n
              ? p.y[f]
              : this.up[f] +
                Math.max(
                  -14 * e,
                  Math.min(14 * e, g * (1 - Math.exp(-e / 1.2))),
                )),
              this.st.poseUpper(f, this.up[f]));
          }
        }
        clearance(t) {
          let e = null;
          for (let n = 0; n < 5; n++) {
            let s = Mr(n),
              r = Math.hypot(t.px, t.py);
            if (
              Math.abs(Li((Math.atan2(t.py, t.px) * 180) / Math.PI - 72 * n)) >
              36
            )
              continue;
            let a = this.act[n],
              c =
                Math.max(0, Math.sin((a[2] * Math.PI) / 180)) *
                Math.max(0, r - 0.85),
              l = 2.6995 + a[0] - c;
            e = { leaf: n, z: l, gap: l - this.src.head };
          }
          return e;
        }
      };
    });
  function Un(i, t, e, n, s, r, o = Nn.x, a = Nn.y) {
    Object.assign(i.s, {
      mode: t,
      posture: e,
      lean: n,
      alpha: s,
      Cs: r,
      px: o,
      py: a,
      face: rh(o, a),
    });
  }
  function xn(i, t) {
    i.fig.root.visible = t;
  }
  function ah(i, t) {
    (i.root.position.set(t.px, t.py, 0),
      i.pose(t.posture, t.lean, t.alpha, t.face));
  }
  var Nn,
    rh,
    c0,
    oh,
    ch = Be(() => {
      wo();
      ((Nn = { x: 1.45, y: -0.84 }),
        (rh = (i, t) => (Math.atan2(t, i) * 180) / Math.PI),
        (c0 = (i) => (i < 0 ? 0 : i > 1 ? 1 : i * i * (3 - 2 * i))));
      oh = {
        cover: {
          cam: {
            t: [0, 0, 1.75],
            p: [8.6, -9.8, 4],
            fov: 27,
            sx: 1330,
            sy: 545,
          },
          enter(i) {
            (Object.assign(i.s, Er()),
              Un(i, 1, 1, -5, 0, 0.8),
              (i.s.sunAz = 215),
              (i.s.sunEl = 58),
              xn(i, !0),
              (i.field = 0));
          },
          tick(i, t, e) {
            i.orbit = Math.sin(e * 0.09) * 10;
          },
        },
        agent: {
          cam: {
            t: [0, 0, 1.65],
            p: [7.4, -8.6, 3.2],
            fov: 30,
            sx: 1270,
            sy: 560,
          },
          enter(i) {
            (Un(i, 1, 1, -5, 0, 0.8),
              (i.s.sunAz = 215),
              (i.s.sunEl = 58),
              xn(i, !0),
              (i.field = 0));
          },
          tick(i, t, e) {
            i.orbit = e * 3.5;
          },
        },
        dof: {
          cam: {
            t: [1.1, 0, 2.1],
            p: [7.4, -9.4, 5.2],
            fov: 25,
            sx: 1360,
            sy: 500,
          },
          enter(i) {
            (xn(i, !1),
              (i.field = 0),
              (i.manual = !0),
              i.st.highlight("lower", 0, !0),
              (i.s.sunAz = 200),
              (i.s.sunEl = 62));
          },
          leave(i) {
            ((i.manual = !1), i.st.highlight("lower", 0, !1));
          },
          tick(i, t, e) {
            let s = Math.floor(e / 3.2) % 5,
              r = (e % 3.2) / 3.2,
              o = Math.sin(Math.PI * c0(r * 1.25)),
              a = [0, 0, 0, 0, 0];
            ((a[s] = [-0.45, 12, 8, -16, -16][s] * Math.max(0, o)),
              i.st.poseLower(0, a));
            for (let c = 1; c < 5; c++) i.st.poseLower(c, [0, 0, 0, 0, 0]);
            i.$(".dof").forEach((c) =>
              c.classList.toggle("on", +c.dataset.k === s),
            );
          },
        },
        eye: {
          cam: {
            t: [0.4, -0.3, 0.3],
            p: [4.2, -10.5, 23.5],
            fov: 22,
            sx: 1360,
            sy: 545,
          },
          enter(i) {
            (Un(i, 0, 1, 15, 30, 0.9),
              (i.s.sunAz = 230),
              (i.s.sunEl = 52),
              xn(i, !0),
              (i.field = 0.85),
              (i.fieldCh = 2));
          },
        },
        weather: {
          cam: {
            t: [0, 0, 0.4],
            p: [5.6, -8.2, 11.6],
            fov: 31,
            sx: 1290,
            sy: 590,
          },
          WX: [
            [110, 40, "\u4E0A\u5348"],
            [180, 74, "\u6B63\u5348"],
            [250, 36, "\u5348\u540E\u897F\u6652"],
            [288, 14, "\u508D\u665A"],
          ],
          enter(i) {
            (Un(i, 1, 1, -5, 0, 0.8),
              xn(i, !0),
              (i.field = 0),
              (this.i = 2),
              (this.t0 = -99),
              (this.az = i.s.sunAz),
              (this.el = i.s.sunEl),
              (this.user = !1),
              i.$("#wxTabs .tab").forEach(
                (t) =>
                  (t.onclick = () => {
                    ((this.i = +t.dataset.i), (this.user = !0));
                  }),
              ));
          },
          tick(i, t, e) {
            !this.user &&
              e - this.t0 > 5 &&
              ((this.t0 = e), (this.i = (this.i + 1) % 4));
            let [n, s, r] = this.WX[this.i];
            ((this.az += (n - this.az) * Math.min(1, t * 1.6)),
              (this.el += (s - this.el) * Math.min(1, t * 1.6)),
              (i.s.sunAz = this.az),
              (i.s.sunEl = this.el),
              i
                .$("#wxTabs .tab")
                .forEach((o) =>
                  o.classList.toggle("on", +o.dataset.i === this.i),
                ),
              (i.$("#wxRead")[0].textContent =
                `${r}\uFF1A\u592A\u9633\u65B9\u4F4D ${Math.round(this.az)}\xB0\uFF0C\u9AD8\u5EA6 ${Math.round(this.el)}\xB0`));
          },
        },
        modes: {
          cam: {
            t: [1, -0.55, 1.75],
            p: [7.6, -7.4, 2.3],
            fov: 30,
            sx: 1270,
            sy: 520,
          },
          M: [
            {
              d: "\u5750\u7740\u4F4E\u5934\u770B\u624B\u673A\u3002\u53F6\u5B50\u538B\u4F4E\u3001\u5411\u524D\u7FFB\uFF0C\u5F62\u6210\u7D27\u51D1\u3001\u5C11\u5E72\u6270\u7684\u4E2A\u4EBA\u7A7A\u95F4\u3002",
              p: [0, 1, 15, 30, 0.9],
              c: "0.35 m",
              th: "\u03B8 = clamp((6 + 0.2\u03BB)(0.7 + 0.3Cs), 0\xB0, 12\xB0)",
              dl: "0.20 m",
            },
            {
              d: "\u9760\u7740\u4F11\u606F\u3002\u53F6\u5B50\u62AC\u8D77\u4E00\u4E9B\uFF0C\u8F7B\u8F7B\u7F69\u4F4F\uFF0C\u4E0D\u523B\u610F\u9694\u5F00\u3002",
              p: [1, 1, -5, 0, 0.8],
              c: "0.55 m",
              th: "\u03B8 = clamp(2\xB0 + 0.1\u03BB, \u22126\xB0, 8\xB0)",
              dl: "0.10 m",
            },
            {
              d: "\u7AD9\u7740\u5F20\u671B\u8857\u9053\u3001\u7B49\u4EBA\u3002\u53F6\u5B50\u62AC\u9AD8\uFF0C\u524D\u7F18\u8BA9\u51FA\u89C6\u7EBF\u3002",
              p: [2, 0, 0, -12, 0.5],
              c: "0.75 m",
              th: "\u819C\u8FB9\u4EF0\u89D2 \u2265 \u5934\u90E8\u4FEF\u4EF0 + 15\xB0",
              dl: "0.05 m",
            },
          ],
          enter(i) {
            ((this.i = 0),
              (this.t0 = 0),
              (this.user = !1),
              xn(i, !0),
              (i.field = 0),
              (i.s.sunAz = 215),
              (i.s.sunEl = 58),
              this.apply(i),
              i.$("#modeTabs .tab").forEach(
                (t) =>
                  (t.onclick = () => {
                    ((this.i = +t.dataset.i), (this.user = !0), this.apply(i));
                  }),
              ));
          },
          apply(i) {
            let t = this.M[this.i],
              [e, n, s, r, o] = t.p,
              a = e === 2;
            (Un(i, e, n, s, r, o, a ? 1.9 : Nn.x, a ? -1.1 : Nn.y),
              (i.$("#mDesc")[0].textContent = t.d),
              (i.$("#mClear")[0].textContent = t.c),
              (i.$("#mTheta")[0].textContent = t.th),
              (i.$("#mDelta")[0].textContent = t.dl),
              i
                .$("#modeTabs .tab")
                .forEach((c) =>
                  c.classList.toggle("on", +c.dataset.i === this.i),
                ));
          },
          tick(i, t, e) {
            (!this.user &&
              e - this.t0 > 6 &&
              ((this.t0 = e), (this.i = (this.i + 1) % 3), this.apply(i)),
              (i.dim = !0));
          },
        },
        fields: {
          cam: {
            t: [0.2, -0.2, 0.6],
            p: [5.4, -9.6, 11.8],
            fov: 30,
            sx: 1310,
            sy: 560,
          },
          enter(i) {
            (Un(i, 0, 1, 12, 25, 0.85),
              (i.s.pressL = 0.6),
              xn(i, !0),
              (i.field = 0.95),
              (i.fieldCh = 0),
              (i.minis = !0),
              (i.s.sunAz = 215),
              (i.s.sunEl = 58));
          },
          leave(i) {
            ((i.minis = !1), (i.s.pressL = 0));
          },
          tick(i, t, e) {
            let n = -0.55 + Math.sin(e * 0.22) * 0.75,
              s = 1.55 + Math.sin(e * 0.31) * 0.35;
            ((i.s.px = s * Math.cos(n)),
              (i.s.py = s * Math.sin(n)),
              (i.s.face = rh(i.s.px, i.s.py)),
              (i.fieldCh = Math.floor(e / 3.5) % 5));
          },
        },
        sides: {
          cam: {
            t: [0.8, -0.5, 1.3],
            p: [-3.6, -13.6, 6.2],
            fov: 29,
            sx: 1360,
            sy: 560,
          },
          enter(i) {
            (Un(i, 0, 1, 10, 25, 0.9),
              xn(i, !0),
              (i.ghost.root.visible = !0),
              (i.field = 0.9),
              (i.fieldCh = 3),
              (i.s.sunAz = 215),
              (i.s.sunEl = 58));
          },
          leave(i) {
            ((i.ghost.root.visible = !1), (i.s.pressL = 0), (i.s.pressR = 0));
          },
          tick(i, t, e) {
            let s = (e % 10) / 10,
              r = Math.atan2(Nn.y, Nn.x),
              o = (s - 0.5) * 6.4,
              a = Math.cos(r),
              c = Math.sin(r),
              l = -c,
              h = a,
              u = 3.2 * a + l * o,
              p = 3.2 * c + h * o;
            (i.ghost.root.position.set(u, p, 0),
              i.ghost.pose(
                0,
                0,
                0,
                (Math.atan2(h, l) * 180) / Math.PI,
                Math.sin(e * 7) * 22,
              ));
            let f = Math.max(0, 1 - Math.hypot(u - Nn.x, p - Nn.y) / 2.8),
              g = o * i.leftSign > 0;
            ((i.s.pressL = g ? Math.min(1, f * 1.7) : 0),
              (i.s.pressR = g ? 0 : Math.min(1, f * 1.7)),
              (i.$("#sideRead")[0].textContent =
                `\u5DE6\u7AEF\u4E0B\u538B ${(0.2 * i.s.pressL).toFixed(2)} m\u3000\u53F3\u7AEF\u4E0B\u538B ${(0.2 * i.s.pressR).toFixed(2)} m`));
          },
        },
        end: {
          cam: {
            t: [0, 0, 1.7],
            p: [10.6, -10.2, 3.4],
            fov: 27,
            sx: 1380,
            sy: 540,
          },
          enter(i) {
            (Un(i, 1, 1, -5, 0, 0.8),
              (i.s.sunAz = 292),
              (i.s.sunEl = 12),
              xn(i, !0),
              (i.field = 0));
          },
          tick(i, t, e) {
            i.orbit = -e * 2.2;
          },
        },
      };
    });
  function hh(i) {
    if (i <= 230.17) return lh(l0, h0, Math.pow(i / 230.17, 0.8));
    for (let t = 0; t < Fn.length - 1; t++)
      if (i <= Fn[t + 1][0])
        return lh(
          Fn[t][1],
          Fn[t + 1][1],
          (i - Fn[t][0]) / (Fn[t + 1][0] - Fn[t][0]),
        );
    return Fn[2][1];
  }
  function To() {
    if (wr) return wr;
    let i = window.HW_HEAT,
      t = atob(i.b64),
      e = new Float32Array(t.length);
    for (let n = 0; n < t.length; n++) {
      let s = t.charCodeAt(n);
      e[n] = s === 255 ? -1 : (s / 254) * i.max;
    }
    return ((wr = { w: i.w, h: i.h, v: e, D: i }), wr);
  }
  function Ao(i, t = 1) {
    let e = To(),
      n = i.getContext("2d"),
      s = i.width / e.w,
      r = Math.floor(e.w * t);
    n.clearRect(0, 0, i.width, i.height);
    let o = n.createImageData(i.width, i.height),
      a = o.data,
      c = Math.round(s),
      l = c >= 4 ? 1 : 0;
    for (let h = 0; h < r; h++)
      for (let u = 0; u < e.h; u++) {
        let p = e.v[u * e.w + h];
        if (p < 0) continue;
        let f = hh(p);
        for (let g = 0; g < c - l; g++)
          for (let _ = 0; _ < c - l; _++) {
            let m = ((u * c + g) * i.width + (h * c + _)) * 4;
            ((a[m] = f[0]),
              (a[m + 1] = f[1]),
              (a[m + 2] = f[2]),
              (a[m + 3] = 255));
          }
      }
    n.putImageData(o, 0, 0);
  }
  function uh(i) {
    let t = i.getContext("2d");
    for (let e = 0; e < i.width; e++) {
      let n = hh((e / i.width) * 575.43);
      ((t.fillStyle = `rgb(${n})`), t.fillRect(e, 0, 1, i.height));
    }
  }
  function dh() {
    let i = To(),
      t = 0,
      e = 0;
    for (let n of i.v) n >= 0 && (t++, n > 230.17 && e++);
    return e / t;
  }
  function fh(i, t) {
    let e = To();
    i.addEventListener("pointermove", (n) => {
      let s = i.getBoundingClientRect(),
        r = Math.floor(((n.clientX - s.left) / s.width) * e.w),
        o = Math.floor(((n.clientY - s.top) / s.height) * e.h);
      if (o < 0 || r < 0 || o >= e.h || r >= e.w) return;
      let a = e.v[o * e.w + r];
      if (a < 0) return;
      let c = (e.D.x0 + r * e.D.cell).toFixed(1),
        l = (e.D.y0 + (e.h - 1 - o) * e.D.cell).toFixed(1);
      t.innerHTML = `<span class="num" style="color:${a > 230.17 ? "var(--h3)" : "var(--ink2)"}">${Math.round(a)} Wh/m\xB2</span>\u3000${a > 230.17 ? "exposed 暴晒" : "in shade 阴影"}\uFF0C\u5750\u6807 <span class="num">${c}, ${l} m</span>`;
    });
  }
  var as,
    l0,
    h0,
    Fn,
    lh,
    wr,
    ph = Be(() => {
      ((as = (i) => [1, 3, 5].map((t) => parseInt(i.slice(t, t + 2), 16))),
        (l0 = as("#8E959A")),
        (h0 = as("#E2E3E1")),
        (Fn = [
          [230.17, as("#F6C979")],
          [380, as("#EF8B3D")],
          [575.43, as("#D2392A")],
        ]),
        (lh = (i, t, e) => i.map((n, s) => Math.round(n + (t[s] - n) * e))));
      wr = null;
    });
  function Cr(i, t, e) {
    return [i[0] + Math.sin(e) * t, i[1] + Math.cos(e) * t];
  }
  function mh(i, t) {
    let e = 9 + 7 * Math.sin(t * 0.5),
      n =
        Math.sin(t * 5.3) * 2.2 +
        Math.sin(t * 8.1) * 1.4 +
        (Math.sin(t * 0.37) > 0.6 ? Math.sin(t * 11) * 6 : 0),
      s = 22 + 12 * Math.sin(t * 0.5 + 0.6) + n;
    (On.push([t, s]), (On = On.filter((k) => t - k[0] < 3)));
    let r = On.reduce((k, W) => k + W[1], 0) / On.length,
      o = Math.sqrt(On.reduce((k, W) => k + (W[1] - r) ** 2, 0) / On.length),
      a = Math.max(0, 1 - Math.min(1, o / 10)),
      c = [0, 0.48],
      l = Tr(e),
      h = Cr(c, 0.26, l),
      u = Cr(c, 0.5, l),
      p = Cr(c, 0.62, l),
      f = [p[0] + 0.05 + Math.sin(Tr(s)) * 0.03, p[1] + 0.12],
      g = [f[0], f[1] + 0.11],
      _ = [0.44, 0.5],
      m = [0.47, 0.08],
      d = [0.62, 0.04],
      S = [u[0] + 0.1, u[1] - 0.26],
      x = [u[0] + 0.32, u[1] - 0.12 + (s > 20 ? 0 : 0.1)],
      T = [
        [c, h],
        [h, u],
        [u, p],
        [p, f],
        [c, _],
        [_, m],
        [m, d],
        [u, S],
        [S, x],
      ],
      P = [c, h, u, p, f, _, m, d, S, x],
      A = (k) => `${Kt(k[0]).toFixed(1)},${te(k[1]).toFixed(1)}`,
      w = "";
    ((w += `<line x1="40" y1="800" x2="1000" y2="800" stroke="${en}" stroke-opacity=".35"/>`),
      (w += `<rect x="${Kt(-0.75)}" y="${te(0.45)}" width="${0.95 * 330}" height="${0.45 * 330}" fill="#B9BFC2" fill-opacity=".55"/>`));
    for (let k of On) {
      let W = Tr(k[1]),
        X = [f[0] + Math.cos(W) * 1.1, f[1] - Math.sin(W) * 1.1];
      w += `<line x1="${Kt(f[0])}" y1="${te(f[1])}" x2="${Kt(X[0])}" y2="${te(X[1])}" stroke="${Rr}" stroke-opacity=".06" stroke-width="2"/>`;
    }
    let V = Tr(s),
      v = [f[0] + Math.cos(V) * 1.25, f[1] - Math.sin(V) * 1.25];
    w += `<line x1="${Kt(f[0])}" y1="${te(f[1])}" x2="${Kt(v[0])}" y2="${te(v[1])}" stroke="${Rr}" stroke-width="2" stroke-dasharray="6 6"/>`;
    for (let [k, W] of T)
      w += `<line x1="${Kt(k[0])}" y1="${te(k[1])}" x2="${Kt(W[0])}" y2="${te(W[1])}" stroke="${en}" stroke-width="7" stroke-linecap="round"/>`;
    w += `<circle cx="${Kt(f[0])}" cy="${te(f[1])}" r="${0.1 * 330}" fill="#C9CDCD" stroke="${en}" stroke-width="4"/>`;
    for (let k of P)
      w += `<circle cx="${Kt(k[0])}" cy="${te(k[1])}" r="7" fill="#F5F5F3" stroke="${en}" stroke-width="3"/>`;
    ((w += `<line x1="${Kt(g[0])}" y1="${te(g[1])}" x2="${Kt(1.55)}" y2="${te(g[1])}" stroke="${en}" stroke-dasharray="2 6"/>`),
      (w += `<line x1="${Kt(1.55)}" y1="${te(g[1])}" x2="${Kt(1.55)}" y2="800" stroke="${en}" stroke-width="1.5"/>`),
      (w += `<text x="${Kt(1.6)}" y="${te(g[1]) + 8}" font-family="Bahnschrift" font-size="30" fill="${en}">${g[1].toFixed(2)} m</text>`),
      (w += `<text x="${Kt(1.6)}" y="${te(g[1]) + 36}" font-family="DengXian" font-size="18" fill="${Ar}">head top 头顶高度</text>`));
    let E = 0.3,
      N = [c[0], c[1] + E],
      q = Cr(c, E, l);
    ((w += `<line x1="${Kt(c[0])}" y1="${te(c[1])}" x2="${Kt(N[0])}" y2="${te(N[1])}" stroke="${Ar}" stroke-dasharray="3 5"/>`),
      (w += `<path d="M${A(N)} A${E * 330} ${E * 330} 0 0 1 ${A(q)}" fill="none" stroke="${en}" stroke-width="2"/>`),
      (w += `<text x="${Kt(c[0]) - 150}" y="${te(c[1] + 0.18)}" font-family="Bahnschrift" font-size="28" fill="${en}">\u03BB ${e.toFixed(0)}\xB0</text>`));
    let tt = 0.42,
      L = [f[0] + tt, f[1]],
      B = [f[0] + Math.cos(V) * tt, f[1] - Math.sin(V) * tt];
    ((w += `<line x1="${Kt(f[0])}" y1="${te(f[1])}" x2="${Kt(L[0])}" y2="${te(L[1])}" stroke="${Ar}" stroke-dasharray="3 5"/>`),
      (w += `<path d="M${A(L)} A${tt * 330} ${tt * 330} 0 0 1 ${A(B)}" fill="none" stroke="${Rr}" stroke-width="2"/>`),
      (w += `<text x="${Kt(f[0] + tt + 0.06)}" y="${te(f[1] - 0.05)}" font-family="Bahnschrift" font-size="28" fill="${Rr}">\u03B1 ${s.toFixed(0)}\xB0</text>`),
      (w += `<text x="${Kt(v[0]) - 40}" y="${te(v[1]) + 54}" font-family="Bahnschrift" font-size="28" fill="${en}">Cs ${a.toFixed(2)}</text>`),
      (w += `<text x="${Kt(v[0]) - 40}" y="${te(v[1]) + 82}" font-family="DengXian" font-size="18" fill="${Ar}">3 s head-direction fan 近 3 秒头部朝向</text>`),
      (i.innerHTML = w));
  }
  var Kt,
    te,
    Tr,
    en,
    Ar,
    Rr,
    On,
    gh = Be(() => {
      ((Kt = (i) => 330 + i * 330),
        (te = (i) => 800 - i * 330),
        (Tr = (i) => (i * Math.PI) / 180),
        (en = "#22272B"),
        (Ar = "#5D666C"),
        (Rr = "#D2392A"),
        (On = []));
    });
  function u0() {
    let i = new ti(),
      t = [],
      e = [],
      n = 3,
      s = () => (n = (n * 16807) % 2147483647) / 2147483647 - 0.5;
    for (let r = 0; r <= Lo * Ui; r++) {
      let o = r / Ui,
        c = o > 6 && o < 12 ? 1.3 : 1.75;
      c += s() * 0.035 + (Math.sin(o * 2.7) > 0.93 ? 0.06 : 0);
      let l = Math.max(-0.6, Math.min(0, c + 0.55 - 2.6995)),
        h = [
          [l, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        u = i.step(h, o, 1 / Ui, 1, 0.8);
      (t.push(l), e.push(u[0][0]));
    }
    return { tgt: t, act: e };
  }
  function xh(i, t) {
    Ii = Ii || u0();
    let e = t % (Lo + 3),
      n = Math.min(Ii.tgt.length, Math.floor(e * Ui) + 1),
      s = "";
    for (let a of [0, -0.2, -0.4, -0.6])
      ((s += `<line x1="${cs}" y1="${os(a)}" x2="${Ro - Co}" y2="${os(a)}" stroke="#22272B" stroke-opacity=".12"/>`),
        (s += `<text x="${cs - 14}" y="${os(a) + 6}" text-anchor="end" font-family="Bahnschrift" font-size="17" fill="#5D666C">${a.toFixed(1)}</text>`));
    for (let a of [0, 6, 12, 18])
      s += `<text x="${Bn(a)}" y="${Pr - Po + 32}" text-anchor="middle" font-family="Bahnschrift" font-size="17" fill="#5D666C">${a} s</text>`;
    ((s += `<rect x="${Bn(6)}" y="${Di}" width="${Bn(12) - Bn(6)}" height="${Pr - Di - Po}" fill="#22272B" fill-opacity=".05"/>`),
      (s += `<text x="${(Bn(6) + Bn(12)) / 2}" y="${Di + 28}" text-anchor="middle" font-family="DengXian" font-size="18" fill="#5D666C">sits 坐下</text>`),
      (s += `<text x="${cs}" y="${Di - 2}" font-family="DengXian" font-size="17" fill="#5D666C">Leaf lift h (m) 叶片升降</text>`),
      (s += `<path d="${_h(Ii.tgt, n)}" fill="none" stroke="#8E959A" stroke-width="1.6"/>`),
      (s += `<path d="${_h(Ii.act, n)}" fill="none" stroke="#22272B" stroke-width="4" stroke-linejoin="round"/>`));
    let r = n - 1,
      o = Bn(r / Ui);
    ((s += `<circle cx="${o}" cy="${os(Ii.act[r])}" r="7" fill="#EF8B3D"/>`),
      (s += `<text x="${Ro - Co}" y="${Pr - 8}" text-anchor="end" font-family="DengXian" font-size="17" fill="#5D666C">light: target · dark: actual 浅线目标 深线实际</text>`),
      (i.innerHTML = s));
  }
  var Ro,
    Pr,
    cs,
    Co,
    Di,
    Po,
    Lo,
    Ui,
    Bn,
    os,
    Ii,
    _h,
    yh = Be(() => {
      bo();
      rs();
      ((Ro = 1100),
        (Pr = 470),
        (cs = 80),
        (Co = 20),
        (Di = 20),
        (Po = 60),
        (Lo = 18),
        (Ui = 30),
        (Bn = (i) => cs + (i / Lo) * (Ro - cs - Co)),
        (os = (i) => Di + ((0.02 - i) / 0.7) * (Pr - Di - Po)),
        (Ii = null));
      _h = (i, t) =>
        i
          .slice(0, t)
          .map(
            (e, n) =>
              `${n ? "L" : "M"}${Bn(n / Ui).toFixed(1)} ${os(e).toFixed(1)}`,
          )
          .join(" ");
    });
  function Mh(i, t) {
    let e = document.getElementById("notes");
    addEventListener("keydown", (o) => {
      if (o.target.closest && o.target.closest("iframe")) return;
      let a = o.key;
      ["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(a)
        ? (o.preventDefault(), t.go(t.cur() + 1))
        : ["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(a)
          ? (o.preventDefault(), t.go(t.cur() - 1))
          : a === "Home"
            ? t.go(0)
            : a === "End"
              ? t.go(i.length - 1)
              : a === "f" || a === "F"
                ? document.fullscreenElement
                  ? document.exitFullscreen()
                  : document.documentElement.requestFullscreen()
                : (a === "n" || a === "N") && e.classList.toggle("show");
    });
    let n = document.getElementById("simFrame"),
      s = document.getElementById("simVideo");
    document.querySelectorAll("#simTabs .tab").forEach((o) =>
      o.addEventListener("click", () => {
        let a = o.dataset.i === "1";
        (document
          .querySelectorAll("#simTabs .tab")
          .forEach((c) => c.classList.toggle("on", c === o)),
          (n.style.display = a ? "none" : "block"),
          (s.style.display = a ? "block" : "none"),
          a ? s.play().catch(() => {}) : s.pause());
      }),
    );
    let r = document.getElementById("mrVideo");
    r &&
      r.addEventListener("error", () => {
        ((r.style.display = "none"),
          (document.getElementById("mrEmpty").style.display = "grid"));
      });
  }
  function Sh(i, t) {
    let e = t[i],
      n = +e.dataset.chapter,
      r = e.classList.contains("dark") ? "#F5F5F3" : "#22272B";
    ((document.getElementById("counter").textContent =
      `${String(i + 1).padStart(2, "0")} / ${t.length}`),
      (document.getElementById("counter").style.color = r),
      (document.getElementById("notes").textContent =
        (e.querySelector(".notes") || {}).textContent || ""));
    let o = document.getElementById("sunpath");
    o.style.opacity = n < 0 ? 0 : 1;
    let a = t.filter((g) => +g.dataset.chapter === n),
      c = a.indexOf(e),
      l = (n + (c + 0.5) / Math.max(1, a.length)) / 4,
      h = `<svg viewBox="0 0 1680 40" preserveAspectRatio="none"><path d="M0 34 Q${1680 / 2} -18 1680 34" fill="none" stroke="${r}" stroke-opacity=".22" stroke-width="1.5"/>`;
    d0.forEach((g, _) => {
      let m = ((_ + 0.5) / 4) * 1680,
        d = vh((_ + 0.5) / 4);
      h += `<text class="lbl" x="${m}" y="${d + 24}" text-anchor="middle" fill="${r}" fill-opacity="${_ === n ? 0.9 : 0.38}">${g}</text>`;
    });
    let u = l * 1680,
      p = vh(l) - 2;
    ((h += `<circle cx="${u}" cy="${p}" r="7" fill="#EF8B3D"/><circle cx="${u}" cy="${p}" r="14" fill="#EF8B3D" fill-opacity=".18"/></svg>`),
      (o.innerHTML = h));
    let f = document.getElementById("simFrame");
    f && e.contains(f) && !f.src && (f.src = f.dataset.src);
  }
  var d0,
    vh,
    bh = Be(() => {
      ((d0 = [
        "Where the heat comes from 热从哪里来",
        "A shade that moves 会动的遮阳者",
        "How it decides 它如何判断",
        "Does it really move? 真的会这样动吗",
      ]),
        (vh = (i) => 34 - 104 * i * (1 - i)));
    });
  var b0 = Bh(() => {
    nh();
    ih();
    wo();
    ch();
    ph();
    gh();
    yh();
    bh();
    rs();
    var wh = (i, t = document) => [...t.querySelectorAll(i)],
      yn = wh(".slide"),
      f0 = document.getElementById("stage"),
      p0 = document.getElementById("viewport"),
      m0 = document.getElementById("bg"),
      Th = document.getElementById("gl"),
      Uo = document.getElementById("overlay"),
      Ah = matchMedia("(prefers-reduced-motion: reduce)").matches,
      xe = eh(Th),
      nn = new br(xe),
      No = So(15698749),
      Fo = So(9344410, 0.85);
    xe.world.add(No.root);
    xe.world.add(Fo.root);
    Fo.root.visible = !1;
    /* ===== HW v3: ZED BODY_34 skeletons, C1–C4 scenes, airflow ===== */
    var HWD = Math.PI / 180;
    var vadd = (a, ...bs) => { let r = a.slice(); for (let i = 0; i < bs.length; i += 2) { let b = bs[i], k = bs[i + 1]; r[0] += b[0] * k; r[1] += b[1] * k; r[2] += b[2] * k; } return r; };
    function skel34(o, tt) {
      let fa = o.face * HWD, f = [Math.cos(fa), Math.sin(fa), 0], l = [-Math.sin(fa), Math.cos(fa), 0], U = [0, 0, 1];
      let ph = o.post === "walk" ? tt * 5.2 : 0, br = Math.sin(tt * 1.7) * 0.006;
      let pz = o.post === "sit" ? 0.52 : 0.95 + (o.post === "walk" ? 0.018 * Math.cos(2 * ph) : 0);
      let P = [o.x, o.y, pz], ln = (o.lean || 0) * HWD;
      let s = [f[0] * Math.sin(ln), f[1] * Math.sin(ln), Math.cos(ln)];
      let naval = vadd(P, s, 0.12), chest = vadd(P, s, 0.3 + br), neck = vadd(P, s, 0.5 + br);
      let hy = ((o.hyaw || 0) + (o.jit ? Math.sin(tt * 2.3) * o.jit * 1.6 + Math.sin(tt * 3.7) * o.jit : 0)) * HWD;
      let al = ((o.alpha || 0) + (o.jit ? Math.sin(tt * 1.9 + 1) * o.jit * 0.6 : 0)) * HWD;
      let fh = [Math.cos(fa + hy), Math.sin(fa + hy), 0], lh = [-fh[1], fh[0], 0];
      let hf = [fh[0] * Math.cos(al), fh[1] * Math.cos(al), -Math.sin(al)];
      let head = vadd(neck, s, 0.1, hf, 0.02);
      let nose = vadd(head, hf, 0.1), leye = vadd(head, hf, 0.08, lh, 0.032, U, 0.025), reye = vadd(head, hf, 0.08, lh, -0.032, U, 0.025);
      let lear = vadd(head, lh, 0.075, hf, -0.01), rear = vadd(head, lh, -0.075, hf, -0.01);
      let lcl = vadd(neck, s, -0.04, l, 0.05), rcl = vadd(neck, s, -0.04, l, -0.05);
      let lsh = vadd(neck, s, -0.05, l, 0.18), rsh = vadd(neck, s, -0.05, l, -0.18);
      let lhip = vadd(P, l, 0.1, U, -0.02), rhip = vadd(P, l, -0.1, U, -0.02);
      let arm = (sh, sd) => {
        let el, wr, m = o.arms || "hang";
        if (m === "push") { el = vadd(sh, f, 0.3, U, -0.16, l, sd * 0.02); wr = vadd(sh, f, 0.62, U, -0.4, l, -sd * 0.04); }
        else if (m === "phone") { el = vadd(sh, s, -0.25, f, 0.07, l, -sd * 0.03); wr = vadd(el, f, 0.2, U, 0.13, l, -sd * 0.07); }
        else if (m === "rest") { el = vadd(sh, U, -0.26, f, 0.07); wr = vadd(sd > 0 ? lhip : rhip, f, 0.3, U, 0.07); }
        else if (m === "talk" && sd < 0) { let g = Math.sin(tt * 2.1) * 0.04; el = vadd(sh, U, -0.25, f, 0.08); wr = vadd(el, f, 0.2, U, 0.1 + g, l, 0.04); }
        else if (m === "walk") { let w = Math.sin(ph + (sd > 0 ? Math.PI : 0)) * 0.4; el = vadd(sh, U, -0.28 * Math.cos(w), f, 0.28 * Math.sin(w)); wr = vadd(el, U, -0.25 * Math.cos(w * 1.4), f, 0.25 * Math.sin(w * 1.4 + 0.2)); }
        else { el = vadd(sh, U, -0.28, f, 0.02, l, sd * 0.02); wr = vadd(el, U, -0.25, f, 0.04); }
        let d = [wr[0] - el[0], wr[1] - el[1], wr[2] - el[2]], dl = Math.hypot(...d) || 1; d = d.map((q) => q / dl);
        let hand = vadd(wr, d, 0.07), tip = vadd(hand, d, 0.06), th = vadd(wr, d, 0.04, l, -sd * 0.035);
        return [el, wr, hand, tip, th];
      };
      let leg = (hip, sd) => {
        let kn, an;
        if (o.post === "sit") { kn = vadd(hip, f, 0.44, U, 0.02, l, sd * 0.03); an = vadd(kn, U, -0.42, f, 0.06); }
        else if (o.post === "walk") { let a0 = ph + (sd > 0 ? 0 : Math.PI), th = Math.sin(a0) * 0.38, bd = Math.max(0, Math.sin(a0 - 1.2)) * 0.7; kn = vadd(hip, U, -0.45 * Math.cos(th), f, 0.45 * Math.sin(th)); an = vadd(kn, U, -0.42 * Math.cos(th - bd), f, 0.42 * Math.sin(th - bd)); }
        else { kn = vadd(hip, U, -0.45, f, 0.015); an = vadd(kn, U, -0.42); }
        let heel = vadd(an, f, -0.05, U, -0.06), foot = vadd(an, f, 0.15, U, -0.07);
        if (heel[2] < 0.005) heel[2] = 0.005; if (foot[2] < 0.005) foot[2] = 0.005;
        return [kn, an, foot, heel];
      };
      let L = arm(lsh, 1), R = arm(rsh, -1), LL = leg(lhip, 1), RL = leg(rhip, -1);
      return [P, naval, chest, neck, lcl, lsh, L[0], L[1], L[2], L[3], L[4], rcl, rsh, R[0], R[1], R[2], R[3], R[4],
        lhip, LL[0], LL[1], LL[2], rhip, RL[0], RL[1], RL[2], head, nose, leye, lear, reye, rear, LL[3], RL[3]];
    }
    var BONES = [[0, 1], [1, 2], [2, 3], [3, 26], [26, 27], [27, 28], [28, 29], [27, 30], [30, 31], [2, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [7, 10],
      [2, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [14, 17], [0, 18], [18, 19], [19, 20], [20, 21], [20, 32], [32, 21], [0, 22], [22, 23], [23, 24], [24, 25], [24, 33], [33, 25]];
    var SKG = new le(), SKMAX = 3;
    var skJ = new or(new ts(0.026, 12, 8), new _n({ color: 15698749, emissive: 15698749, emissiveIntensity: 0.35, roughness: 0.5 }), 34 * SKMAX);
    var skB = new or(new dr(0.011, 1, 3, 8), new _n({ color: 2238251, roughness: 0.6 }), BONES.length * SKMAX);
    var skH = new or(new ts(0.085, 18, 12), new _n({ color: 15698749, transparent: !0, opacity: 0.22, roughness: 0.6, depthWrite: !1 }), SKMAX);
    var skG = new or(new dr(0.008, 1, 3, 6), new Ks({ color: 13777194 }), SKMAX);
    skJ.castShadow = !0; skB.castShadow = !0;
    [skJ, skB, skH, skG].forEach((q) => (q.frustumCulled = !1));
    SKG.add(skJ, skB, skH, skG); SKG.visible = !1; xe.world.add(SKG);
    var _m = new Vt(), _q = new In(), _p = new C(), _s = new C(), _y = new C(0, 1, 0), _d = new C();
    function barM(a, b, r) {
      _d.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]); let L = _d.length() || 1e-4; _d.multiplyScalar(1 / L);
      _q.setFromUnitVectors(_y, _d); _p.set((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2); _s.set(1, L / (1 + 2 * r), 1);
      return _m.compose(_p, _q, _s);
    }
    function drawSkels(list) {
      let nj = 0, nb = 0;
      list.forEach((S, k) => {
        S.forEach((p, j) => { if (j === 26) return; _m.makeTranslation(p[0], p[1], p[2]); skJ.setMatrixAt(nj++, _m); });
        BONES.forEach(([a, b]) => skB.setMatrixAt(nb++, barM(S[a], S[b], 0.011)));
        _m.makeTranslation(S[26][0], S[26][1], S[26][2]); skH.setMatrixAt(k, _m);
        let e = [(S[28][0] + S[30][0]) / 2, (S[28][1] + S[30][1]) / 2, (S[28][2] + S[30][2]) / 2], n = S[27];
        let dv = [n[0] - S[26][0], n[1] - S[26][1], n[2] - S[26][2]], dl = Math.hypot(...dv);
        skG.setMatrixAt(k, barM(e, [e[0] + dv[0] / dl * 0.7, e[1] + dv[1] / dl * 0.7, e[2] + dv[2] / dl * 0.7], 0.008));
      });
      skJ.count = nj; skB.count = nb; skH.count = list.length; skG.count = list.length;
      [skJ, skB, skH, skG].forEach((q) => (q.instanceMatrix.needsUpdate = !0));
    }
    /* airflow: cool air in through the slots, up the hollow column, out of the top */
    var AIRN = 260, airM = new or(new ts(0.026, 8, 6), new Ks({ color: 16777215, transparent: !0, opacity: 0.9, depthWrite: !1 }), AIRN);
    airM.visible = !1; airM.frustumCulled = !1; xe.world.add(airM);
    var airSrc = [];
    (function () {
      for (let k = 0; k < 3; k++) {
        let az = (30 + 120 * k) * HWD, u = [Math.cos(az), Math.sin(az)];
        for (let i = 0; i < 15; i++) {
          let ph = (-26.7 + (53.4 * i) / 14) * HWD, w = [u[0] * Math.cos(ph) - u[1] * Math.sin(ph), u[0] * Math.sin(ph) + u[1] * Math.cos(ph)];
          let p = [u[0] * 3.613 - w[0] * 2.73, u[1] * 3.613 - w[1] * 2.73, 0.25];
          let r = Math.hypot(p[0], p[1]); airSrc.push({ p, o: [p[0] / r, p[1] / r] });
        }
        let ta = (90 + 120 * k) * HWD, t = [Math.cos(ta), Math.sin(ta)];
        for (let j = -1; j <= 1; j++) airSrc.push({ p: [t[0] * 2.05 - t[1] * j * 0.2, t[1] * 2.05 + t[0] * j * 0.2, 0.18], o: t });
      }
    })();
    var airP = [];
    for (let n = 0; n < AIRN; n++) airP.push({ s: airSrc[n % airSrc.length], t: Math.random(), sp: 0.1 + Math.random() * 0.05, j: Math.random() * 6.28 });
    var airC1 = new Ft(0x6aa6cc), airC2 = new Ft(0xef8b3d), airCc = new Ft();
    function airStep(dt, tt) {
      airP.forEach((a, n) => {
        a.t += a.sp * dt; if (a.t > 1) { a.t -= 1; a.s = airSrc[Math.floor(Math.random() * airSrc.length)]; }
        let t = a.t, p = a.s.p, o = a.s.o, x, y, z, sc = 1, mix = 0;
        if (t < 0.22) { let q = t / 0.22; x = p[0] + o[0] * 0.7 * (1 - q); y = p[1] + o[1] * 0.7 * (1 - q); z = 0.06 + (p[2] - 0.06) * q; sc = Math.min(1, q * 4); }
        else if (t < 0.36) { let q = (t - 0.22) / 0.14; x = p[0] * (1 - q) + o[0] * 0.3 * q; y = p[1] * (1 - q) + o[1] * 0.3 * q; z = p[2] + (0.5 - p[2]) * q; }
        else if (t < 0.84) { let q = (t - 0.36) / 0.48, r = 0.3 * Math.max(0, 1 - q * 6) + 0.06; x = o[0] * r; y = o[1] * r; z = 0.5 + 3.2 * q; mix = q; }
        else { let q = (t - 0.84) / 0.16, r = 0.12 + 0.35 * q; x = o[0] * r + Math.sin(tt + a.j) * 0.05 * q; y = o[1] * r; z = 3.7 + 0.9 * q; sc = 1 - q; mix = 1; }
        _p.set(x, y, z); _q.identity(); _s.set(sc, sc, sc); _m.compose(_p, _q, _s); airM.setMatrixAt(n, _m);
        airCc.copy(airC1).lerp(airC2, mix); airM.setColorAt(n, airCc);
      });
      airM.instanceMatrix.needsUpdate = !0; airM.instanceColor && (airM.instanceColor.needsUpdate = !0);
    }
    /* ---- surrounding environment ground: 0614 13:00 direct radiation over 40 × 28 m of 大学路 ---- */
    var HE = window.HW_ENV, ENVG = new le();
    var envV = (() => { let b = atob(HE.env), a = new Float32Array(b.length); for (let i = 0; i < b.length; i++) a[i] = b.charCodeAt(i) / 255; return a; })();
    var envCv = document.createElement("canvas"); envCv.width = HE.NX; envCv.height = HE.NY;
    var envCx = envCv.getContext("2d"), envImg = envCx.createImageData(HE.NX, HE.NY);
    var envTex = new Je(envCv); envTex.magFilter = 1003; envTex.minFilter = 1006; envTex.generateMipmaps = !1; envTex.colorSpace = ae;
    var envMesh = new ce(new Ri(2 * HE.HX, 2 * HE.HY), new _n({ map: envTex, roughness: 1, transparent: !0, depthWrite: !1 }));
    envMesh.position.z = 0.003; envMesh.receiveShadow = !0; ENVG.add(envMesh);
    var plImg = new Image(), plTex = new Je(plImg); plTex.colorSpace = ae;
    plImg.onload = () => (plTex.needsUpdate = !0); plImg.src = HE.plan;
    var plMesh = new ce(new Ri(2 * HE.HX, 2 * HE.HY), new Ks({ map: plTex, transparent: !0, opacity: 0.42, depthWrite: !1 }));
    plMesh.position.z = 0.008; ENVG.add(plMesh); ENVG.visible = !1; xe.world.add(ENVG);
    function envAt(x, y) { let c = Math.floor((x + HE.HX) / HE.CELL), r = Math.floor((y + HE.HY) / HE.CELL); return c < 0 || r < 0 || c >= HE.NX || r >= HE.NY ? 0.5 : envV[r * HE.NX + c]; }
    function envDraw(loc, nofade) {
      let d = envImg.data, NX = HE.NX, NY = HE.NY;
      for (let r = 0; r < NY; r++) for (let c = 0; c < NX; c++) {
        let x = -HE.HX + (c + 0.5) * HE.CELL, y = -HE.HY + (r + 0.5) * HE.CELL, v = 0.34 + 0.42 * envV[r * NX + c], rr = Math.hypot(x, y * 1.15), al = nofade ? 1 - sm((Math.abs(x) - 17) / 3) : 1 - sm((rr - 4.8) / 4.2);
        if (loc && Math.abs(x) < 3.15 && Math.abs(y) < 3.15) { let q = jg(loc, x, y); if (q > 0.01) v = Math.max(v, 0.2 + 0.78 * q); }
        let g = Math.round(255 * v), i = ((NY - 1 - r) * NX + c) * 4; d[i] = d[i + 1] = d[i + 2] = g; d[i + 3] = Math.round(255 * al);
      }
      envCx.putImageData(envImg, 0, 0); envTex.needsUpdate = !0;
    }
    /* ---- scenes: each one is a timeline, people move, fields and leaves follow ---- */
    var lerp = (a, b, t) => a + (b - a) * t, sm = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
    var ARC = (az, r) => [r * Math.cos(az * HWD), r * Math.sin(az * HWD)];
    function pth(pts, u) {
      let L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
      let d = tn(u, 0, 1) * L[L.length - 1], i = 1; while (i < pts.length - 1 && L[i] < d) i++;
      let a = pts[i - 1], b = pts[i], t = (d - L[i - 1]) / (L[i] - L[i - 1] || 1);
      return { x: lerp(a[0], b[0], t), y: lerp(a[1], b[1], t), face: (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI };
    }
    var angLerp = (a, b, t) => a + Li(b - a) * t;
    function person(o) { return Object.assign({ vis: !0, sitk: 0, alpha: 0, hyaw: 0, lean: 0, jit: 2, arms: "hang", mode: "wait", wp: 0 }, o); }
    function walker(id, pts, u, extra) { let p = pth(pts, u); return person(Object.assign({ id, x: p.x, y: p.y, face: p.face, mode: "walk", arms: "walk", post: "walk", jit: 14, lean: 4, wp: u }, extra || {})); }
    // sitter that can stand up / sit down in place: seat pelvis at r0, standing pelvis 0.33 m further out
    function seated(id, az, k, o) { let [sx, sy] = ARC(az, 0.8), [px, py] = ARC(az, 1.13); return person(Object.assign({ id, x: lerp(px, sx, k), y: lerp(py, sy, k), face: az, sitk: k, post: k > 0.5 ? "sit" : "stand" }, o)); }
    var SCN = [
      { c: 1, T: 15, dom: 0, full: !0, tag: "Waiting → a friend arrives → leaves　等人 → 同伴到来 → 离开",
        sayE: ["Friend arrives", "Density ↑", "Upper fusion", "Upper leaves overlap", "Thicker shade", "People stay"],
        say: ["同伴到来", "密度升高", "上层融合", "上层叠合", "阴影加厚", "停留更久"],
        capE: "When two people form a group, density rises: the three upper leaves gather and overlap above them, while the lower leaves fold up to keep the conversation open.",
        cap: "两人成组、密度升高：上层三片收拢叠合，下层向上翻开，留出交谈空间。",
        people(t) {
          let B = null, talk = 0;
          if (t < 3) B = person({ id: "B", vis: !1, x: 4.6, y: 2.4, face: 0, post: "stand" });
          else if (t < 6) B = walker("B", [[4.6, 2.4], [3.2, 1.3], [2.35, 0.42]], (t - 3) / 3);
          else if (t < 11.5) { B = person({ id: "B", x: 2.35, y: 0.42, face: -90, post: "stand", mode: "talk", arms: "talk", alpha: -3, jit: 3 }); talk = sm((t - 6) / 1) * (1 - sm((t - 10.8) / 0.7)); }
          else B = walker("B", [[2.35, 0.42], [3.3, 1.5], [4.7, 2.6]], (t - 11.5) / 3.5);
          let A = person({ id: "A", x: 2.35, y: -0.5, post: "stand", face: angLerp(25, 90, sm((t - 4.5) / 1.5) * (1 - sm((t - 11.5) / 1.5))), mode: talk > 0.4 ? "talk" : "wait", arms: talk > 0.4 ? "talk" : "hang", alpha: -3, jit: 3 });
          return [A, B];
        },
        phase(t) { return t < 3 ? "A waits alone · A 独自等人" : t < 6 ? "B arrives · B 走来" : t < 11.5 ? "Talking (group) · 交谈" : "B leaves · B 离开"; } },
      { c: 2, T: 14, dom: 1, tag: "A sits → stands → sits; B stands　A 坐 → 起身 → 再坐；B 站",
        sayE: ["Head height changes", "Clearance", "Lower control C2", "Each leaf lifts / lowers", "Clearance kept", "Re-solve"],
        say: ["头高变化", "净空需求", "下层控制", "各片分别升降", "保住净空", "重新求解"],
        capE: "Each leaf serves the person beneath it: above seated A it lowers, and lifts again when A stands up. Above standing B it stays high.",
        cap: "每片叶子只服务下面的人：A 坐下时降低，起身时抬起；B 站着，上方保持抬高。",
        people(t) {
          let k = 1 - sm((t - 5.5) / 1.3) + sm((t - 10.5) / 1.3);
          let A = seated("A", 272, k, { mode: k > 0.5 ? "rest" : "wait", arms: k > 0.5 ? "rest" : "hang", alpha: k > 0.5 ? 8 : -4, hyaw: k > 0.5 ? 0 : 35 * Math.sin((t - 6.8) * 1.3) * (t > 6.8 && t < 10.5 ? 1 : 0), lean: k > 0.5 ? -4 : 0, jit: k > 0.5 ? 1 : 3 });
          let B = person({ id: "B", x: 2.05 + 0.12 * Math.sin(t * 0.6), y: -0.62, face: 175, post: "stand", mode: "wait", alpha: -2, jit: 3 });
          return [A, B];
        },
        phase(t) { return t < 5.5 ? "A sits · B stands · A 坐 B 站" : t < 6.8 ? "A stands up · A 起身" : t < 10.5 ? "A looks around · A 张望" : t < 11.8 ? "A sits down · A 坐下" : "A sits · B stands · A 坐 B 站"; } },
      { c: 3, T: 14, dom: 2, tag: "Phone, head down → looks up → head down　低头看手机 → 抬头 → 再低头",
        sayE: ["Head pitch changes", "Pitch & consistency", "Lower control C3", "Tilt + fold down", "Less glare", "Look up → release"],
        say: ["俯仰变化", "俯仰与一致性", "下层控制", "前翻、下折", "减少眩光", "抬头即放开"],
        capE: "Head down and steady: the leaf tilts forward and folds down into a compact personal space. When A looks up, it opens again; after 3 s of steady head-down, it closes back.",
        cap: "低头且稳定：前翻、下折，形成个人空间；抬头时放开，再低头 3 秒后收拢。",
        people(t) {
          let up = sm((t - 6) / 0.6) * (1 - sm((t - 9) / 0.7)), gl = Math.max(0, Math.sin(Math.PI * tn((t - 11.6) / 0.9, 0, 1)));
          return [seated("A", 286, 1, { mode: "work", arms: up > 0.5 ? "rest" : "phone", alpha: lerp(38, -6, up), hyaw: up * 38 * Math.sin((t - 6) * 1.6) + gl * 26, lean: lerp(15, 2, up), jit: 1.2 })];
        },
        phase(t) { return t < 6 ? "Head down · 低头" : t < 9.7 ? "Looks up · 抬头" : "Head down again · 再低头"; } },
      { c: 4, T: 21, dom: 3, tag: "Arrives → rests (passer-by) → leaves　坐下 → 休息（路人经过）→ 离开",
        sayE: ["Posture changes", "Stability", "Lower control C4", "Slow fold down", "Passer-by ignored", "Leaves → reset"],
        say: ["姿态变化", "姿态稳定", "下层控制", "缓慢下折", "忽略路人", "离开即复位"],
        capE: "The steadier A sits, the more the leaf folds down around him. The passer-by is unstable and ignored. When A leaves, the field fades and the leaf returns to neutral.",
        cap: "越稳定，包裹越多；路人不稳定，被忽略；离开后灰阶消失、叶片复位。",
        people(t) {
          let A, seat = ARC(30, 1.13);
          if (t < 2.6) A = walker("A", [[3.7, 1.2], [seat[0], seat[1]]], t / 2.6);
          else if (t < 12.3) { let k = sm((t - 2.6) / 1.2) * (1 - sm((t - 11) / 1.3)); A = seated("A", 30, k, { mode: k > 0.5 ? "rest" : "wait", arms: k > 0.5 ? "rest" : "hang", alpha: -6 * k, lean: -9 * k, jit: k > 0.5 ? 1 : 3 }); }
          else if (t < 15.6) A = walker("A", [[seat[0], seat[1]], [2.2, 2.6], [3.2, 3.8]], (t - 12.3) / 3.3);
          else A = person({ id: "A", vis: !1, x: 4, y: 4, face: 0 });
          let B = t > 5 && t < 10.5 ? walker("B", [[-1.6, -3.5], [1.4, -2.6], [3.9, -0.6]], (t - 5) / 5.5) : person({ id: "B", vis: !1, x: -3, y: -4, face: 0 });
          return [A, B];
        },
        phase(t) { return t < 2.6 ? "A arrives · A 走来" : t < 3.8 ? "A sits down · A 坐下" : t < 11 ? (t > 5 && t < 10.5 ? "Resting · passer-by · 路人经过" : "Resting · 静坐") : t < 12.3 ? "A stands up · A 起身" : t < 15.6 ? "A leaves · A 离开" : "Empty · reset · 复位"; } },
    ];
    var FLD = ["U upper 上层", "H lift 升降", "P tilt 翻转", "F fold 折叠"];
    var MODE = { work: { d: 0.95, u: 0 }, rest: { d: 0.85, u: 0 }, talk: { d: 0, u: 0.8 }, wait: { d: 0, u: 0.5 }, walk: { d: 0.05, u: 0 } };
    var scCs = {};
    function headAngles(S) { let d = [S[27][0] - S[26][0], S[27][1] - S[26][1], S[27][2] - S[26][2]]; return [(Math.atan2(d[1], d[0]) * 180) / Math.PI, (Math.atan2(-d[2], Math.hypot(d[0], d[1])) * 180) / Math.PI]; }
    function updCs(key, t, S) {
      let [yw, pt] = headAngles(S), H = (scCs[key] = (scCs[key] || []).filter((h) => t - h[0] < 3 && t >= h[0]));
      if (H.length) yw = H[H.length - 1][1] + Li(yw - H[H.length - 1][1]);
      H.push([t, yw, pt]);
      let sd = (k) => { let m = H.reduce((a, h) => a + h[k], 0) / H.length; return Math.sqrt(H.reduce((a, h) => a + (h[k] - m) ** 2, 0) / H.length); };
      return { Cs: 1 - tn(Math.hypot(sd(1), sd(2)) / 10, 0, 1), alpha: pt };
    }
    function scFields(ppl) {
      let F = FLD.map(() => new Float32Array(441)), Fu = new Float32Array(441), Fd = new Float32Array(441), pk = 0;
      let on = ppl.filter((q) => q.vis);
      for (let c = 0; c < 21; c++) for (let l = 0; l < 21; l++) {
        let x = -3.15 + (l + 0.5) * 0.3, y = -3.15 + (c + 0.5) * 0.3;
        let u = 0, h = 0, p = 0, fd = 0, fu = 0, dens = 0;
        on.forEach((q) => {
          let k = Kg(Math.hypot(x - q.x, y - q.y) * 1.4), w = 0.25 + 0.75 * q.Cs, M = MODE[q.mode] || MODE.wait;
          dens += k * (q.mode === "walk" ? 0.3 : 1); u += k * (q.mode === "walk" ? 0.3 : 1);
          h = Math.max(h, k * (q.mode === "walk" ? 0.05 : 0.12 + 0.72 * q.sitk) * w);
          p = Math.max(p, k * tn((q.alpha - 6) / 30, 0, 1) * w);
          fd = Math.max(fd, k * M.d * w); fu = Math.max(fu, k * M.u * w);
        });
        let i = c * 21 + l; pk = Math.max(pk, dens);
        F[0][i] = tn(0.3 * envAt(x, y) + 0.6 * u * (0.6 + 0.4 * Math.min(2, dens)), 0, 1); F[1][i] = tn(h, 0, 1); F[2][i] = tn(p, 0, 1);
        Fd[i] = tn(fd, 0, 1); Fu[i] = tn(fu, 0, 1); F[3][i] = Math.max(Fd[i], Fu[i]);
      }
      return { F, Fd, Fu, pk };
    }
    var scMiniEls = [];
    function scMinisInit() {
      let t = document.getElementById("scMinis"); if (!t || scMiniEls.length) return;
      FLD.forEach((e) => { let n = document.createElement("div"); n.className = "mini"; n.innerHTML = `<canvas width="168" height="168" style="width:84px;height:84px;display:block;border-radius:3px"></canvas><div class="small">${e}</div>`; t.appendChild(n); scMiniEls.push(n); });
    }
    function scMinisDraw(F, dom) {
      scMiniEls.forEach((e, n) => {
        let g = e.querySelector("canvas").getContext("2d"), r = 8; g.clearRect(0, 0, 168, 168);
        for (let o = 0; o < 21; o++) for (let a = 0; a < 21; a++) { let c = Math.round(255 * (0.22 + 0.75 * F[n][o * 21 + a])); g.fillStyle = `rgb(${c},${c},${c})`; g.fillRect(a * r, (20 - o) * r, r - 0.6, r - 0.6); }
        e.style.opacity = n === dom ? 1 : 0.5;
      });
    }
    function scDecode(R) {
      let out = [], smp = (A, a) => { let r = 0; for (let o of [0.95, 1.35, 1.75, 2.15]) r += jg(A, o * Math.cos(a), o * Math.sin(a)); return r / 4; };
      for (let s = 0; s < 5; s++) {
        let a = Mr(s);
        out.push({ h: -0.55 * tn(smp(R.F[1], a) * 1.7, 0, 1), th: 8 * tn(smp(R.F[2], a) * 1.7, 0, 1), dl: -0.35 * tn(smp(R.Fd, a) * 1.8, 0, 1) + 0.3 * tn(smp(R.Fu, a) * 3, 0, 1) });
      }
      let sx = 0, sy = 0;
      for (let c = 0; c < 21; c++) for (let l = 0; l < 21; l++) { let w = R.F[0][c * 21 + l] ** 3; sx += w * (-3.15 + (l + 0.5) * 0.3); sy += w * (-3.15 + (c + 0.5) * 0.3); }
      return { low: out, uaz: (Math.atan2(sy, sx) * 180) / Math.PI, spread: Math.round(55 - 40 * tn(R.pk - 1, 0, 1)) };
    }

    /* loop diagram (redrawn from the HeatWeave Cybernetic Feedback Loop) */
    var LC = { ink: "#22272B", ink2: "#5D666C", hi: "#EF8B3D", hot: "#D2392A", paper: "#F5F5F3" };
    function scLoopSVG(sc, live, tt) {
      let a = sc.c, EN = "Segoe UI,Bahnschrift,sans-serif";
      let box = (x, y, w, h, n, t, tc) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="#F5F5F3" fill-opacity=".38" stroke="${LC.ink}" stroke-opacity=".28" stroke-dasharray="4 4"/><text x="${x + 12}" y="${y + 23}" font-family="Bahnschrift" font-size="16" fill="${LC.ink2}">${n}</text><text x="${x + 40}" y="${y + 23}" font-family="${EN}" font-weight="700" font-size="15" fill="${LC.ink}">${t}<tspan font-family="DengXian" font-weight="400" fill="${LC.ink2}">  ${tc}</tspan></text>`;
      let chip = (x, y, w, h, t1, t2, t3, on, fs) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${on ? LC.ink : "#F5F5F3"}" fill-opacity="${on ? 1 : 0.7}"/><text x="${x + w / 2}" y="${y + 21}" text-anchor="middle" font-family="Bahnschrift,DengXian" font-size="${fs || 19}" fill="${on ? LC.hi : LC.ink}">${t1}</text><text x="${x + w / 2}" y="${y + 37}" text-anchor="middle" font-family="${EN}" font-size="11.5" fill="${on ? "#E4E6E5" : LC.ink2}">${t2}</text><text x="${x + w / 2}" y="${y + 52}" text-anchor="middle" font-family="DengXian" font-size="12" fill="${on ? "#E4E6E5" : LC.ink2}">${t3}</text>`;
      let tx = (x, y, e, c, col, fw) => `<text x="${x}" y="${y}" font-family="${EN}" font-size="13.5" font-weight="${fw || 400}" fill="${col || LC.ink}">${e}<tspan font-family="DengXian" font-size="13" fill="${LC.ink2}" font-weight="400"> ${c}</tspan></text>`;
      let s = `<defs><marker id="scAr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${LC.ink}"/></marker></defs>`;
      s += box(0, 0, 196, 128, "01", "Sensing", "多源感知");
      s += tx(14, 58, "ENV radiation · sun", "辐射") + tx(14, 82, "ZED skeleton", "骨骼 BODY_34") + tx(14, 106, "VLM labels", "活动标签", LC.ink2);
      s += box(226, 0, 464, 128, "02", "Evaluation", "多维评价");
      [["ENV", "Radiation", "辐射与投影"], ["P1", "Density", "密度与需求"], ["C2", "Head height", "头高与净空"], ["C3", "Head pitch", "头部俯仰"], ["C4", "Stability", "姿态稳定"]].forEach((q, k) => (s += chip(238 + k * 89, 38, 81, 60, q[0], q[1], q[2], k === a || (a === 1 && k === 0))));
      s += box(226, 156, 464, 92, "03", "Rules & decision", "规则与决策");
      let upOn = a === 1, loOn = a !== 1;
      s += chip(238, 184, 210, 58, "Upper fusion", "ENV + P1", "上层融合", upOn, 16);
      s += chip(468, 184, 210, 58, "Lower shared control", "C2 / C3 / C4", "下层共享控制", loOn, 16);
      s += box(226, 276, 464, 104, "04", "Adaptive form", "自适应形态");
      s += tx(240, 322, "Upper · rotation", "上层旋转", upOn ? LC.hot : LC.ink, upOn ? 700 : 400) + `<text x="420" y="322" font-family="Bahnschrift" font-size="14" fill="${LC.ink}">${live.up}</text>`;
      s += tx(240, 352, "Lower · lift/tilt/fold", "下层", loOn ? LC.hot : LC.ink, loOn ? 700 : 400) + `<text x="420" y="352" font-family="Bahnschrift" font-size="14" fill="${LC.ink}">${live.lo}</text>`;
      s += box(0, 276, 196, 104, "05", "Feedback", "反馈");
      s += tx(14, 320, "F3 Environment", "环境") + tx(14, 342, "F4 Behaviour", "行为") + tx(14, 364, "F2 Motion", "人体动态");
      s += `<path d="M196 64 H222" stroke="${LC.ink}" stroke-width="1.5" marker-end="url(#scAr)"/><path d="M458 128 V152" stroke="${LC.ink}" stroke-width="1.5" marker-end="url(#scAr)"/><path d="M458 248 V272" stroke="${LC.ink}" stroke-width="1.5" marker-end="url(#scAr)"/><path d="M226 328 H200" stroke="${LC.ink}" stroke-width="1.5" marker-end="url(#scAr)"/><path d="M98 276 V132" stroke="${LC.ink}" stroke-width="1.5" marker-end="url(#scAr)"/>`;
      let L = [[98, 64], [458, 64], [458, 214], [458, 328], [98, 328], [98, 64]], per = 6, ph = ((tt % per) / per) * 5, k = Math.floor(ph), q = ph - k, A = L[k], B = L[k + 1];
      s += `<circle cx="${A[0] + (B[0] - A[0]) * q}" cy="${A[1] + (B[1] - A[1]) * q}" r="7" fill="${LC.hi}"/>`;
      let cur = k + 1;
      [["sayE", EN, 13.5, 406], ["say", "DengXian", 14, 430]].forEach(([key, ff, fz, y]) => {
        s += `<text x="0" y="${y}" font-family="${ff}" font-size="${fz}">`;
        sc[key].forEach((w, i) => { s += `<tspan fill="${i === cur ? LC.hot : key === "say" ? LC.ink2 : LC.ink}" font-weight="${i === cur ? 700 : 400}">${w}</tspan>${i < sc[key].length - 1 ? '<tspan fill="#8E959A"> → </tspan>' : ""}`; });
        s += `</text>`;
      });
      return s;
    }
    /* behaviour panel: sagittal section of each skeleton */
    function skelP(q, t) {
      if (q.post === "walk" || q.sitk <= 0 || q.sitk >= 1) return skel34(Object.assign({}, q, { post: q.post === "walk" ? "walk" : q.sitk >= 1 ? "sit" : "stand" }), t);
      let a = skel34(Object.assign({}, q, { post: "sit", arms: q.arms }), t), b = skel34(Object.assign({}, q, { post: "stand", arms: "hang" }), t), k = q.sitk;
      return a.map((p, j) => [lerp(b[j][0], p[0], k), lerp(b[j][1], p[1], k), lerp(b[j][2], p[2], k)]);
    }
    var scHist = {};
    function scBehSVG(sc, ppl, sks, tt) {
      let G = 292, S = 142, s = `<line x1="0" y1="${G}" x2="670" y2="${G}" stroke="${LC.ink}" stroke-opacity=".35"/>`;
      let slots = sc.c === 1 ? [300, 300 + 0.9 * S] : ppl.length === 1 ? [260] : [170, 420];
      ppl.forEach((q, k) => {
        if (!q.vis) return;
        let S34 = sks[k], fa = q.face * HWD, f = [Math.cos(fa), Math.sin(fa)], P = S34[0];
        let mir = sc.c === 1 && k === 1 && q.mode !== "walk" ? -1 : 1, cx = slots[k];
        if (q.mode === "walk") cx = slots[k] - 80 + q.wp * 160;
        let X = (p) => cx + ((p[0] - P[0]) * f[0] + (p[1] - P[1]) * f[1]) * S * mir, Y = (p) => G - p[2] * S;
        if (q.sitk > 0.02) s += `<rect x="${cx - 0.36 * S}" y="${G - 0.45 * S}" width="${0.42 * S}" height="${0.45 * S}" fill="#9AA0A4" fill-opacity="${(0.35 * Math.min(1, q.sitk * 3)).toFixed(2)}"/>`;
        if (q.mode === "walk") for (let g = 1; g <= 3; g++) { let gx = -g * 38; BONES.forEach(([a, b]) => (s += `<line x1="${(X(S34[a]) + gx).toFixed(1)}" y1="${Y(S34[a]).toFixed(1)}" x2="${(X(S34[b]) + gx).toFixed(1)}" y2="${Y(S34[b]).toFixed(1)}" stroke="${LC.ink}" stroke-opacity="${(0.14 / g).toFixed(3)}" stroke-width="4"/>`)); }
        let hid = sc.c + q.id; scHist[hid] = (scHist[hid] || []).filter((h) => tt - h[0] < 3 && tt >= h[0]);
        let e = [(S34[28][0] + S34[30][0]) / 2, (S34[28][1] + S34[30][1]) / 2, (S34[28][2] + S34[30][2]) / 2], ns = S34[27], hd = S34[26];
        let dv = [ns[0] - hd[0], ns[1] - hd[1], ns[2] - hd[2]], hor = dv[0] * f[0] + dv[1] * f[1], al = Math.atan2(-dv[2], hor);
        scHist[hid].push([tt, al]);
        scHist[hid].forEach((h, j) => { if (j % 3) return; s += `<line x1="${X(e).toFixed(1)}" y1="${Y(e).toFixed(1)}" x2="${(X(e) + Math.cos(h[1]) * 120 * mir).toFixed(1)}" y2="${(Y(e) + Math.sin(h[1]) * 120).toFixed(1)}" stroke="${LC.hot}" stroke-opacity=".08" stroke-width="2"/>`; });
        s += `<line x1="${X(e)}" y1="${Y(e)}" x2="${X(e) + Math.cos(al) * 130 * mir}" y2="${Y(e) + Math.sin(al) * 130}" stroke="${LC.hot}" stroke-width="2" stroke-dasharray="6 5"/>`;
        BONES.forEach(([a, b]) => (s += `<line x1="${X(S34[a]).toFixed(1)}" y1="${Y(S34[a]).toFixed(1)}" x2="${X(S34[b]).toFixed(1)}" y2="${Y(S34[b]).toFixed(1)}" stroke="${LC.ink}" stroke-width="5" stroke-linecap="round"/>`));
        s += `<circle cx="${X(hd).toFixed(1)}" cy="${Y(hd).toFixed(1)}" r="${0.1 * S}" fill="#C9CDCD" fill-opacity=".6" stroke="${LC.ink}" stroke-width="3"/>`;
        [0, 2, 3, 5, 6, 7, 12, 13, 14, 18, 19, 20, 22, 23, 24, 27].forEach((j) => (s += `<circle cx="${X(S34[j]).toFixed(1)}" cy="${Y(S34[j]).toFixed(1)}" r="5" fill="${LC.paper}" stroke="${LC.hot}" stroke-width="2.5"/>`));
        let top = hd[2] + 0.11, ty0 = Y([0, 0, top]);
        let lr = sc.c === 1 && k === 1, dx = sc.c === 1 ? (k === 0 ? cx - 56 : cx + 56) : X(hd) - 58;
        if (q.mode !== "walk") {
          s += `<line x1="${dx}" y1="${G}" x2="${dx}" y2="${ty0}" stroke="${LC.ink}" stroke-width="1.3"/><line x1="${dx - 7}" y1="${ty0}" x2="${dx + 7}" y2="${ty0}" stroke="${LC.ink}" stroke-width="1.3"/><line x1="${dx}" y1="${ty0}" x2="${X(hd)}" y2="${ty0}" stroke="${LC.ink}" stroke-dasharray="2 4"/>`;
          s += `<text x="${dx + (lr ? 10 : -10)}" y="${ty0 - 8}" text-anchor="${lr ? "start" : "end"}" font-family="Bahnschrift" font-size="18" fill="${sc.c === 2 ? LC.hot : LC.ink}">${top.toFixed(2)} m</text>`;
        }
        let tx = ppl.length === 1 ? 470 : k === 0 ? 10 : 520, ty = 26, hl = (c) => (c === sc.c ? LC.hot : LC.ink);
        s += `<text x="${tx}" y="${ty}" font-family="Segoe UI,DengXian" font-weight="700" font-size="15" fill="${LC.ink}">${q.id === "A" ? "A" : "B"}${q.mode === "walk" ? " · walking 行走" : q.sitk > 0.5 ? " · seated 坐" : " · standing 站"}</text>`;
        s += `<text x="${tx}" y="${ty + 20}" font-family="Bahnschrift" font-size="14" fill="${hl(3)}">α ${((al * 180) / Math.PI).toFixed(0)}°  pitch 俯仰</text>`;
        s += `<text x="${tx}" y="${ty + 38}" font-family="Bahnschrift" font-size="14" fill="${LC.ink}">λ ${q.lean.toFixed(0)}°  lean 前倾</text>`;
        s += `<text x="${tx}" y="${ty + 56}" font-family="Bahnschrift" font-size="14" fill="${hl(4)}">Cs ${q.Cs.toFixed(2)}  stability 稳定</text>`;
      });
      let A = ppl[0], B = ppl[1];
      if (sc.c === 1 && A && B && A.vis && B.vis && B.mode === "talk") s += `<line x1="${slots[0]}" y1="${G + 12}" x2="${slots[1]}" y2="${G + 12}" stroke="${LC.hot}" stroke-width="1.5"/><text x="${(slots[0] + slots[1]) / 2}" y="${G + 28}" text-anchor="middle" font-family="Bahnschrift" font-size="15" fill="${LC.hot}">${Math.hypot(A.x - B.x, A.y - B.y).toFixed(2)} m · group 同组 · density ↑</text>`;
      return s;
    }
    oh.scene = {
      cam: { t: [0.3, 0.1, 1.2], p: [10.9, -13.9, 10.4], fov: 29, sx: 1215, sy: 430 },
      enter(i) {
        xn(i, !1); i.ghost.root.visible = !1; i.manual = !0; i.field = 0; i.s.sunAz = 215; i.s.sunEl = 58; SKG.visible = !0; ENVG.visible = !0; scMinisInit();
        this.i = this.i || 0; this.user = !1; this.lo = [0, 1, 2, 3, 4].map(() => ({ h: 0, th: 0, dl: 0 })); this.up = [0, 0, 0];
        i.$("#scBtns .cbtn").forEach((b) => (b.onclick = () => { this.i = +b.dataset.i; this.user = !0; this.apply(i); }));
        this.apply(i);
      },
      leave(i) { i.manual = !1; SKG.visible = !1; ENVG.visible = !1; i.fieldArr = null; },
      apply(i) {
        let sc = SCN[this.i]; this.ts = null; scCs = {}; scHist = {};
        i.$("#scBtns .cbtn").forEach((b) => b.classList.toggle("on", +b.dataset.i === this.i));
        i.$("#scBehTag")[0].textContent = sc.tag; i.$("#scCap")[0].innerHTML = `<div style="color:#22272B">${sc.capE}</div><div style="margin-top:4px">${sc.cap}</div>`;
      },
      tick(i, dt, e) {
        if (this.ts == null) this.ts = e;
        let sc = SCN[this.i];
        if (e - this.ts >= sc.T) { if (this.user) this.ts += sc.T; else { this.i = (this.i + 1) % 4; this.apply(i); this.ts = e; sc = SCN[this.i]; } }
        let T = e - this.ts;
        let ppl = sc.people(T);
        let sks = ppl.map((q) => skelP(q, e));
        ppl.forEach((q, k) => { let r = updCs(sc.c + q.id, e, sks[k]); q.Cs = q.vis ? r.Cs : 0; q.alpha = r.alpha; });
        SKG.visible = !0; drawSkels(sks.filter((S, k) => ppl[k].vis));
        let R = scFields(ppl); scMinisDraw(R.F, sc.dom);
        if (sc.full) { i.field = 0; i.fieldArr = null; ENVG.visible = !0; envDraw(R.F[sc.dom]); } else { i.field = 0.95; i.fieldArr = R.F[sc.dom]; ENVG.visible = !1; }
        let D = scDecode(R), k = 1 - Math.exp(-dt / 1.3);
        for (let s = 0; s < 5; s++) {
          let L = this.lo[s], Tg = D.low[s];
          L.h += (Tg.h - L.h) * k; L.th += (Tg.th - L.th) * k; L.dl += (Tg.dl - L.dl) * k;
          let fd = (Math.atan(L.dl / $l) * 180) / Math.PI;
          i.st.poseLower(s, [L.h, 0, L.th, fd, fd]);
        }
        let offs = [-1, 0, 1], perms = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]], best = null;
        for (let pm of perms) { let g = pm.map((m, d) => Li(D.uaz + offs[m] * D.spread - i.st.UB[d])), c = g.reduce((a, d, S) => a + Math.abs(Li(d - this.up[S])), 0); if (!best || c < best.c) best = { g, c }; }
        for (let f = 0; f < 3; f++) { this.up[f] += Li(best.g[f] - this.up[f]) * Math.min(1, dt * 1.2); i.st.poseUpper(f, this.up[f]); }
        let sc0 = (L) => Math.abs(L.h) + L.th / 20 + Math.abs(L.dl), sv = 0;
        for (let s = 1; s < 5; s++) if (sc0(this.lo[s]) > sc0(this.lo[sv])) sv = s;
        let Ls = this.lo[sv], sgn = (v) => (v > 0.005 ? "+" : "") + v.toFixed(2);
        let live = { up: `${Math.round((D.uaz + 360) % 360)}° · ±${D.spread}°`, lo: `L${sv + 1} h ${Ls.h.toFixed(2)} θ ${Ls.th.toFixed(1)}° δ ${sgn(Ls.dl)}` };
        i.$("#scLoop")[0].innerHTML = scLoopSVG(sc, live, e);
        i.$("#scBeh")[0].innerHTML = scBehSVG(sc, ppl, sks, e);
        i.$("#scBehTag")[0].innerHTML = `<span style="color:#D2392A;font-weight:700">${sc.phase(T)}</span>　<span class="num">${T.toFixed(1)} / ${sc.T} s</span>`;
        i.$("#scOut")[0].innerHTML = `<div class="small" style="font-weight:700;margin-bottom:6px">Live output <span style="font-weight:400;color:#5D666C">此刻输出</span></div>` +
          `<div class="rr"><span>Upper spread 上层</span><span>±${D.spread}°</span></div>` +
          [0, 1, 2, 3, 4].map((s) => `<div class="rr" style="${s === sv ? "font-weight:700" : "opacity:.6"}"><span>L${s + 1}</span><span>${this.lo[s].h.toFixed(2)} · ${this.lo[s].th.toFixed(1)}° · ${sgn(this.lo[s].dl)}</span></div>`).join("") +
          `<div class="small muted" style="margin-top:6px;font-size:13px">h (m) · θ · δ (m, − down / + up 下折/上折)</div>`;
      },
    };
    /* the eye slide also shows the whole street field */
    oh.eye.enter = (function (f) { return function (i) { f.call(this, i); i.field = 0; ENVG.visible = !0; }; })(oh.eye.enter);
    oh.eye.leave = function () { ENVG.visible = !1; };
    oh.eye.tick = function (i) { envDraw(i.ag.F ? i.ag.F[2] : null); };
    /* four actions demo: fold goes down, then up (like a foldable screen) */
    oh.dof.enter = function (i) {
      xn(i, !1); i.field = 0; i.manual = !0; i.st.highlight("lower", 0, !0); i.st.highlight("upper", 0, !0); i.s.sunAz = 200; i.s.sunEl = 62;
      for (let f = 0; f < 3; f++) i.st.poseUpper(f, 0);
    };
    oh.dof.leave = function (i) { i.manual = !1; i.st.highlight("lower", 0, !1); i.st.highlight("upper", 0, !1); };
    oh.dof.tick = function (i, t, e) {
      let cyc = [3.2, 3.2, 3.2, 5.2], tot = 14.8, q = e % tot, s = 0;
      while (q > cyc[s]) { q -= cyc[s]; s++; }
      let r = q / cyc[s], o = Math.max(0, Math.sin(Math.PI * c0(r * 1.25))), a = [0, 0, 0, 0, 0];
      i.st.poseUpper(0, s === 0 ? 55 * o : 0);
      if (s === 1) a[0] = -0.45 * o; if (s === 2) a[2] = 8 * o;
      if (s === 3) { let w = Math.sin(2 * Math.PI * c0(Math.min(1, r * 1.12))); a[3] = a[4] = -27 * w; }
      i.st.poseLower(0, a); for (let c = 1; c < 5; c++) i.st.poseLower(c, [0, 0, 0, 0, 0]);
      i.$(".dof").forEach((c) => c.classList.toggle("on", +c.dataset.k === s));
      let tag = i.$("#foldTag")[0]; if (tag) tag.textContent = s === 3 ? (a[3] < -1 ? `Fold down 下折 ${(-0.7 * Math.tan(a[3] * HWD)).toFixed(2)} m` : a[3] > 1 ? `Fold up 上折 ${(0.7 * Math.tan(a[3] * HWD)).toFixed(2)} m` : "") : "";
    };
    /* airflow on the agent slide */
    oh.agent.enter = (function (f) { return function (i) { f.call(this, i); airM.visible = !0; }; })(oh.agent.enter);
    oh.agent.leave = function () { airM.visible = !1; };
    oh.agent.tick = (function (f) { return function (i, t, e) { f.call(this, i, t, e); airStep(t, e); }; })(oh.agent.tick);
    /* ===== end v4 ===== */
    /* ===== v6: axonometric device page, fold-down only, Environment push scene ===== */
    var ROOT = xe.parts.lower[0][0].parent, FIELDM = xe.world.children.find((c) => c.isInstancedMesh && c.count === 441);
    var SUNL = xe.scene.children.find((c) => c.isDirectionalLight);
    function setRoot(x, y, rotDeg) { ROOT.position.set(x, y, 0); ROOT.rotation.set(0, 0, (rotDeg || 0) * HWD); ROOT.updateMatrixWorld(!0); }
    /* --- axonometric device page: keep the street field, label the parts in 3D --- */
    var AXO = [
      { p: [-1.55, 0.95, 3.48], en: "Rotating translucent leaves", zh: "可旋转的半透明叶片", side: -1, dy: -40 },
      { p: [0, 0, 3.72], en: "Hollow chimney column", zh: "烟囱效应中筒", side: 1, dy: -70 },
      { p: [1.9, -0.6, 2.85], en: "Lower leaves: boundary", zh: "下层叶片 · 空间边界", side: 1, dy: 40 },
      { p: [1.6, -1.15, 0.36], en: "Vented seat, always cool", zh: "通风座椅 · 始终凉爽", side: 1, dy: 60 },
    ];
    oh.device = {
      cam: { t: [0.1, 0, 1.55], p: [52, -62, 44], fov: 5.4, sx: 1310, sy: 545 },
      enter(i) {
        Un(i, 1, 1, -5, 0, 0.8, 1.45, -0.84); xn(i, !1); i.field = 0; i.manual = !0; ENVG.visible = !0; i.s.sunAz = 215; i.s.sunEl = 58;
        for (let s = 0; s < 5; s++) i.st.poseLower(s, [0, 0, 0, 0, 0]);
        this.up = [0, 0, 0];
      },
      leave(i) { i.manual = !1; ENVG.visible = !1; },
      tick(i, t, e) {
        envDraw(null);
        for (let f = 0; f < 3; f++) i.st.poseUpper(f, 22 * Math.sin(e * 0.35 + f * 2.1));
        let s = '<g font-family="Inter Tight,Segoe UI,sans-serif" paint-order="stroke" stroke-linejoin="round">';
        AXO.forEach((a, k) => {
          let [x, y] = i.st.project(a.p[0], a.p[1], a.p[2]), lx = a.side < 0 ? x - 120 : x + 120, ly = y + a.dy, tx = a.side < 0 ? lx - 12 : lx + 12, an = a.side < 0 ? "end" : "start";
          s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" fill="#D2392A"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="13" fill="none" stroke="#D2392A" stroke-opacity=".35"/>`;
          s += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} L${lx.toFixed(1)} ${ly.toFixed(1)} L${(lx + (a.side < 0 ? -4 : 4)).toFixed(1)} ${ly.toFixed(1)}" fill="none" stroke="#22272B" stroke-width="1.4"/>`;
          s += `<text x="${tx.toFixed(1)}" y="${(ly - 4).toFixed(1)}" text-anchor="${an}" font-size="19" font-weight="650" fill="#22272B" stroke="#F1F2F0" stroke-width="6">${a.en}</text><text x="${tx.toFixed(1)}" y="${(ly + 20).toFixed(1)}" text-anchor="${an}" font-family="Noto Sans SC,Microsoft YaHei,sans-serif" font-size="16" font-weight="600" fill="#3f474c" stroke="#F1F2F0" stroke-width="6">${a.zh}</text>`;
        });
        Uo.innerHTML = s + "</g>";
      },
    };
    /* --- four moves: the synced fold only goes down; no readout --- */
    oh.dof.tick = function (i, t, e) {
      let s = Math.floor(e / 3.2) % 4, r = (e % 3.2) / 3.2, o = Math.max(0, Math.sin(Math.PI * c0(r * 1.25))), a = [0, 0, 0, 0, 0];
      i.st.poseUpper(0, s === 0 ? 55 * o : 0);
      if (s === 1) a[0] = -0.45 * o; if (s === 2) a[2] = 8 * o; if (s === 3) a[3] = a[4] = -27 * o;
      i.st.poseLower(0, a); for (let c = 1; c < 5; c++) i.st.poseLower(c, [0, 0, 0, 0, 0]);
      i.$(".dof").forEach((c) => c.classList.toggle("on", +c.dataset.k === s));
    };
    /* --- Environment: a person (ZED skeleton) pushes the unit along Daxue Road --- */
    var ENV_X = [-9, 9], ENV_ROT = -30, ENV_T = 24;
    var envProfile = (() => { let o = []; for (let x = ENV_X[0]; x <= ENV_X[1] + 1e-6; x += 0.25) { let s = 0, n = 0; for (let a = -2.4; a <= 2.4; a += 0.3) for (let b = -2.4; b <= 2.4; b += 0.3) if (a * a + b * b <= 5.76) { s += envAt(x + a, b); n++; } o.push([x, s / n]); } return o; })();
    var ENV_STOPS = (() => { let lo = envProfile.reduce((m, q) => (q[1] < m[1] && q[0] < 2 ? q : m), [0, 9]), hi = envProfile.reduce((m, q) => (q[1] > m[1] && q[0] > lo[0] + 4 ? q : m), [0, -1]); return [lo[0], hi[0]].sort((a, b) => a - b); })();
    function envLocal(cx) {
      let F = new Float32Array(441), sx = 0, sy = 0, tot = 0;
      for (let c = 0; c < 21; c++) for (let l = 0; l < 21; l++) {
        let x = -3.15 + (l + 0.5) * 0.3, y = -3.15 + (c + 0.5) * 0.3, v = envAt(cx + x, y);
        F[c * 21 + l] = v; if (x * x + y * y < 7.3) { sx += v * x; sy += v * y; tot += v; }
      }
      let n = 0; for (let c = 0; c < 21; c++) for (let l = 0; l < 21; l++) { let x = -3.15 + (l + 0.5) * 0.3, y = -3.15 + (c + 0.5) * 0.3; if (x * x + y * y < 7.3) n++; }
      return { F, mean: tot / n, az: (Math.atan2(sy, sx) * 180) / Math.PI };
    }
    oh.envpush = {
      cam: { t: [0, 0.4, 1.3], p: [24, -37, 25], fov: 12.5, sx: 1330, sy: 560 },
      enter(i) {
        xn(i, !1); i.ghost.root.visible = !1; i.manual = !0; i.field = 0.95; i.s.sunAz = 215; i.s.sunEl = 58; ENVG.visible = !0; SKG.visible = !0;
        if (SUNL) { Object.assign(SUNL.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16 }); SUNL.shadow.camera.updateProjectionMatrix(); }
        for (let s = 0; s < 5; s++) i.st.poseLower(s, [0, 0, 0, 0, 0]);
        this.up = [0, 0, 0]; this.x = ENV_X[0];
        envDraw(null, !0);
      },
      leave(i) {
        this.cam.t[0] = 0; this.cam.p[0] = 24; envDraw(null);
        i.manual = !1; ENVG.visible = !1; SKG.visible = !1; i.fieldArr = null; setRoot(0, 0, 0); if (FIELDM) FIELDM.position.set(0, 0, 0);
        if (SUNL) { Object.assign(SUNL.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8 }); SUNL.shadow.camera.updateProjectionMatrix(); }
      },
      tick(i, dt, e) {
        // timeline: drive to stop 1, pause, drive to stop 2, pause, drive to the end, loop
        let T = e % ENV_T, A = ENV_X[0], S1 = ENV_STOPS[0], S2 = ENV_STOPS[1], B = ENV_X[1], seg = [[0, 5, A, S1], [5, 9, S1, S1], [9, 14, S1, S2], [14, 18, S2, S2], [18, 22, S2, B], [22, 24, B, B]];
        let g = seg.find((q) => T >= q[0] && T < q[1]) || seg[5], u = sm((T - g[0]) / (g[1] - g[0])), x = lerp(g[2], g[3], u), moving = g[2] !== g[3];
        setRoot(x, 0, ENV_ROT);
        this.cam.t[0] = x * 0.75; this.cam.p[0] = 24 + x * 0.75;
        if (FIELDM) FIELDM.position.set(x, 0, 0);
        let L = envLocal(x); i.fieldArr = L.F;
        // upper leaves: turn toward the exposed side; overlap more as exposure rises
        let spread = Math.round(62 - 46 * tn((L.mean - 0.25) / 0.6, 0, 1)), offs = [-1, 0, 1], perms = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]], best = null;
        for (let pm of perms) { let q = pm.map((m, d) => Li(L.az - ENV_ROT + offs[m] * spread - i.st.UB[d])), c = q.reduce((a, d, S) => a + Math.abs(Li(d - this.up[S])), 0); if (!best || c < best.c) best = { q, c }; }
        for (let f = 0; f < 3; f++) { this.up[f] += Li(best.q[f] - this.up[f]) * Math.min(1, dt * 1.4); i.st.poseUpper(f, this.up[f]); }
        // the pusher: ZED skeleton behind the tip, walking while the unit moves
        let pr = { id: "P", x: x - 2.05, y: -1.05, face: 0, post: moving ? "walk" : "stand", arms: "push", lean: moving ? 14 : 6, alpha: 4, jit: moving ? 3 : 1 };
        drawSkels([skel34(pr, moving ? e : 0)]);
        let pct = Math.round(L.mean * 100), lbl = x < S1 + 0.6 && x > S1 - 0.6 ? "Under the tree crowns · 树荫下" : x < S2 + 0.6 && x > S2 - 0.6 ? "In the sun gap · 阳光缺口" : moving ? "Moving · 移动中" : "End of the block · 街段尽头";
        let el = i.$("#envRead")[0];
        if (el) el.innerHTML = `<div class="er-k">${lbl}</div><div class="er-row"><span>Sun under the canopy<em>冠下直射</em></span><b>${pct}<small>%</small></b></div><div class="er-row"><span>Upper leaves face<em>上层朝向</em></span><b>${Math.round((L.az + 360) % 360)}<small>°</small></b></div><div class="er-row"><span>Overlap between leaves<em>片间夹角</em></span><b>±${spread}<small>°</small></b></div><div class="er-bar"><i style="left:${(((x - ENV_X[0]) / (ENV_X[1] - ENV_X[0])) * 100).toFixed(1)}%"></i></div><div class="er-scale"><span>${ENV_X[0]} m</span><span>Position along the road 沿街位置</span><span>+${ENV_X[1]} m</span></div>`;
      },
    };
    /* ===== end v6 ===== */
    oh.dof.cam = Object.assign({}, oh.dof.cam, { sx: 1470, fov: 26.5 });

    var Rh = xe.parts.lower[0].find((i) => i.userData.side === "left");
    Rh.geometry.computeBoundingBox();
    var g0 =
        Math.sign(
          Rh.geometry.boundingBox.getCenter(new xe.world.position.constructor())
            .y,
        ) || 1,
      ie = {
        st: xe,
        ag: nn,
        fig: No,
        ghost: Fo,
        s: Er(),
        field: 0,
        fieldCh: 0,
        orbit: 0,
        leftSign: g0,
        $: (i) => wh(i, yn[Ni] || document),
      },
      Ni = -1,
      Fe = null,
      Ch = 0,
      Io = 0,
      We = { t: [0, 0, 1.75], p: [8.6, -9.8, 4], fov: 27, sx: 1330, sy: 545 },
      ls = null,
      hs = 1;
    function Ph() {
      let i = Math.min(innerWidth / 1920, innerHeight / 1080);
      HWV.w = Math.ceil(innerWidth / i); HWV.h = Math.ceil(innerHeight / i); HWV.ox = (HWV.w - 1920) / 2; HWV.oy = (HWV.h - 1080) / 2;
      Object.assign(f0.style, { width: HWV.w + "px", height: HWV.h + "px", marginLeft: -HWV.w / 2 + "px", marginTop: -HWV.h / 2 + "px", transform: `scale(${i})` });
      f0.style.setProperty("--ox", HWV.ox + "px"); f0.style.setProperty("--oy", HWV.oy + "px");
      Th.style.width = HWV.w + "px"; Th.style.height = HWV.h + "px";
      xe.setSize(Math.min(2, (devicePixelRatio || 1) * i * 1.25));
    }
    addEventListener("resize", Ph);
    Ph();
    function Oo(i, t = !1) {
      if (((i = Math.max(0, Math.min(yn.length - 1, i))), i === Ni)) return;
      (Fe && Fe.leave && Fe.leave(ie),
        yn.forEach((s, r) => s.classList.toggle("on", r === i)),
        (Ni = i));
      let e = yn[i];
      ((m0.style.backgroundColor = p0.style.backgroundColor = e.dataset.bg),
        (Fe = oh[e.dataset.shot] || null),
        (Th.style.opacity = Fe ? 1 : 0),
        (Uo.innerHTML = ""),
        (Ch = performance.now() / 1e3),
        (ie.orbit = 0),
        (ie.dim = !1),
        Fe &&
          (Fe.enter && Fe.enter(ie),
          nn.step(ie.s, 0.016, !0),
          nn.upper(ie.s, 0.016, !0),
          (ls = JSON.parse(JSON.stringify(We))),
          (hs = t || Ah ? 1 : 0)),
        e.dataset.anim === "heat" && x0(),
        Sh(i, yn),
        history.replaceState(null, "", "#" + (i + 1)));
      document.querySelectorAll("video.mrv").forEach((v) => { if (!e.contains(v)) { v.pause(); v.closest(".mrq") && v.closest(".mrq").classList.remove("on"); } });
      let n = document.getElementById("simVideo");
      n && i !== _0(n) && n.pause();
    }
    var _0 = (i) => yn.indexOf(i.closest(".slide")),
      Do = !1;
    function x0() {
      let i = document.getElementById("heatStrip");
      if (Do || Ah) {
        (Ao(i, 1), (Do = !0));
        return;
      }
      Do = !0;
      let t = performance.now(),
        e = () => {
          let n = Math.min(1, (performance.now() - t) / 1600);
          (Ao(i, n), n < 1 && requestAnimationFrame(e));
        };
      e();
    }
    uh(document.getElementById("heatLegend"));
    fh(
      document.getElementById("heatStrip"),
      document.getElementById("heatProbe"),
    );
    document.getElementById("heatShare").textContent = Math.round(dh() * 100);
    var Lh = [];
    (function () {
      let t = document.getElementById("fieldMinis");
      t &&
        [
          "H \u9AD8\u5EA6",
          "Y \u671D\u5411",
          "P \u7FFB\u8F6C",
          "L \u5DE6\u7AEF",
          "R \u53F3\u7AEF",
        ].forEach((e) => {
          let n = document.createElement("div");
          ((n.innerHTML = `<canvas width="210" height="210" style="width:104px;height:104px;display:block"></canvas><div class="small" style="margin-top:8px">${e}</div>`),
            t.appendChild(n),
            Lh.push(n));
        });
    })();
    function y0(i, t) {
      Lh.forEach((e, n) => {
        let s = e.querySelector("canvas").getContext("2d"),
          r = 10;
        s.clearRect(0, 0, 210, 210);
        for (let o = 0; o < 21; o++)
          for (let a = 0; a < 21; a++) {
            let c = Math.round(255 * (0.22 + 0.75 * i[n][o * 21 + a]));
            ((s.fillStyle = `rgb(${c},${c},${c})`),
              s.fillRect(a * r, (20 - o) * r, r - 1, r - 1));
          }
        e.style.opacity = n === t ? 1 : 0.55;
      });
    }
    function v0(i) {
      return i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2;
    }
    function M0(i) {
      let t = Fe ? Fe.cam : We;
      hs < 1 && (hs = Math.min(1, hs + i / 1.6));
      let e = v0(hs),
        n = (l, h) => l + (h - l) * e;
      for (let l of ["t", "p"])
        for (let h = 0; h < 3; h++)
          We[l][h] = n(ls ? ls[l][h] : t[l][h], t[l][h]);
      for (let l of ["fov", "sx", "sy"]) We[l] = n(ls ? ls[l] : t[l], t[l]);
      let s = ((ie.orbit || 0) * Math.PI) / 180,
        [r, o] = We.t,
        a = We.p[0] - r,
        c = We.p[1] - o;
      (xe.cam.t.set(...We.t),
        xe.cam.p.set(
          r + a * Math.cos(s) - c * Math.sin(s),
          o + a * Math.sin(s) + c * Math.cos(s),
          We.p[2],
        ),
        (xe.cam.fov = We.fov),
        (xe.cam.sx = We.sx),
        (xe.cam.sy = We.sy));
    }
    function S0() {
      let i = nn.clearance(ie.s);
      if (!i) {
        Uo.innerHTML = "";
        return;
      }
      let t = yo[ie.s.posture],
        e = ie.s,
        [n, s] = xe.project(e.px, e.py, t),
        [r, o] = xe.project(e.px, e.py, i.z),
        a = n + 70;
      Uo.innerHTML = `<g stroke="#22272B" stroke-width="1.5"><line x1="${n}" y1="${s}" x2="${a + 10}" y2="${s}" stroke-dasharray="3 4"/><line x1="${r}" y1="${o}" x2="${a + 10}" y2="${o}" stroke-dasharray="3 4"/><line x1="${a}" y1="${s}" x2="${a}" y2="${o}"/></g>
  <text x="${a + 18}" y="${(s + o) / 2 + 10}" font-family="Bahnschrift" font-size="30" fill="#22272B">${i.gap.toFixed(2)} m</text>
  <text x="${a + 18}" y="${(s + o) / 2 + 36}" font-family="DengXian" font-size="17" fill="#5D666C">\u5934\u9876\u5230\u53F6\u7247\u6700\u4F4E\u70B9</text>`;
    }
    var Eh = performance.now() / 1e3;
    function Ih() {
      let i = performance.now() / 1e3,
        t = Math.min(0.05, i - Eh);
      Eh = i;
      let e = i - Ch,
        n = yn[Ni];
      (Fe &&
        (Fe.tick && Fe.tick(ie, t, e),
        ie.manual || (nn.step(ie.s, t), nn.upper(ie.s, t)),
        ah(No, ie.s),
        xe.setSun(ie.s.sunAz, ie.s.sunEl),
        (Io += ((ie.field || 0) - Io) * Math.min(1, t * 3)),
        xe.setField(ie.fieldArr || (nn.F ? nn.F[ie.fieldCh || 0] : null), Io),
        ie.minis && nn.F && y0(nn.F, ie.fieldCh),
        M0(t),
        xe.render(),
        ie.dim && S0()),
        n &&
          n.dataset.anim === "skel" &&
          mh(document.getElementById("skel"), e),
        n &&
          n.dataset.anim === "trace" &&
          xh(document.getElementById("trace"), e),
        requestAnimationFrame(Ih));
    }
    Mh(yn, { go: (i) => Oo(i), cur: () => Ni });
    Oo(Math.max(0, (parseInt(location.hash.slice(1)) || 1) - 1), !0);
    requestAnimationFrame(Ih);
    window.HW_DECK = { go: Oo, count: yn.length, cur: () => Ni };
    window.HW_DBG = { xe, ie, nn, shots: oh };
  });
  b0();
})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
