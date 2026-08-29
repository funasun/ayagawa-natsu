(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,te=1030,ne=1031,re=1033,O=33776,k=33777,ie=33778,ae=33779,A=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,fe=37488,j=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,Ie=2300,M=2301,Le=2302,Re=2303,ze=2400,N=2401,Be=2402,P=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=2e3;function Je(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ye(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ze(){let e=Xe(`canvas`);return e.style.display=`block`,e}var Qe={};function $e(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function F(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function I(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tt(...e){let t=e.join(` `);t in Qe||(Qe[t]=!0,F(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},it=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},at=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ot=1234567,st=Math.PI/180,ct=180/Math.PI;function lt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(at[e&255]+at[e>>8&255]+at[e>>16&255]+at[e>>24&255]+`-`+at[t&255]+at[t>>8&255]+`-`+at[t>>16&15|64]+at[t>>24&255]+`-`+at[n&63|128]+at[n>>8&255]+`-`+at[n>>16&255]+at[n>>24&255]+at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]).toLowerCase()}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function pt(e,t,n){return e===t?0:(n-e)/(t-e)}function mt(e,t,n){return(1-n)*e+n*t}function ht(e,t,n,r){return mt(e,t,1-Math.exp(-n*r))}function gt(e,t=1){return t-Math.abs(dt(e,t*2)-t)}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function yt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function bt(e,t){return e+Math.random()*(t-e)}function xt(e){return e*(.5-Math.random())}function St(e){e!==void 0&&(ot=e);let t=ot+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ct(e){return e*st}function wt(e){return e*ct}function Tt(e){return(e&e-1)==0&&e!==0}function Et(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Dt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ot(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:F(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var jt={DEG2RAD:st,RAD2DEG:ct,generateUUID:lt,clamp:ut,euclideanModulo:dt,mapLinear:ft,inverseLerp:pt,lerp:mt,damp:ht,pingpong:gt,smoothstep:_t,smootherstep:vt,randInt:yt,randFloat:bt,randFloatSpread:xt,seededRandom:St,degToRad:Ct,radToDeg:wt,isPowerOfTwo:Tt,ceilPowerOfTwo:Et,floorPowerOfTwo:Dt,setQuaternionFromProperEuler:Ot,normalize:At,denormalize:kt},L=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:F(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nt.copy(this).projectOnVector(e),this.sub(Nt)}reflect(e){return this.sub(Nt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nt=new R,Pt=new Mt,z=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ft.makeScale(e,t)),this}rotate(e){return tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ft.makeRotation(-e)),this}translate(e,t){return tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ft=new z,It=new z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lt=new z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return tt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return tt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var zt=Rt();function Bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ht,Ut=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ht===void 0&&(Ht=Xe(`canvas`)),Ht.width=e.width,Ht.height=e.height;let t=Ht.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ht}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Bt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Bt(t[e]/255)*255):t[e]=Bt(t[e]);return{data:t,width:e.width,height:e.height}}else return F(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Wt=0,Gt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=lt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Kt(r[t].image)):e.push(Kt(r[t]))}else e=Kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ut.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(F(`Texture: Unable to serialize Texture.`),{})}var qt=0,Jt=new R,Yt=class r extends it{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=lt(),this.name=``,this.source=new Gt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jt).x}get height(){return this.source.getSize(Jt).y}get depth(){return this.source.getSize(Jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){F(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){F(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=300,Yt.DEFAULT_ANISOTROPY=1;var Xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zt=class extends it{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=new Yt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qt=class extends Zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$t=class extends Yt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},en=class extends Yt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/nn.setFromMatrixColumn(e,0).length(),i=1/nn.setFromMatrixColumn(e,1).length(),a=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(an,e,on)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),sn.crossVectors(n,ln),sn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),sn.crossVectors(n,ln)),sn.normalize(),cn.crossVectors(ln,sn),r[0]=sn.x,r[4]=cn.x,r[8]=ln.x,r[1]=sn.y,r[5]=cn.y,r[9]=ln.y,r[2]=sn.z,r[6]=cn.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],ne=r[6],re=r[10],O=r[14],k=r[3],ie=r[7],ae=r[11],A=r[15];return i[0]=a*x+o*T+s*te+c*k,i[4]=a*S+o*E+s*ne+c*ie,i[8]=a*C+o*D+s*re+c*ae,i[12]=a*w+o*ee+s*O+c*A,i[1]=l*x+u*T+d*te+f*k,i[5]=l*S+u*E+d*ne+f*ie,i[9]=l*C+u*D+d*re+f*ae,i[13]=l*w+u*ee+d*O+f*A,i[2]=p*x+m*T+h*te+g*k,i[6]=p*S+m*E+h*ne+g*ie,i[10]=p*C+m*D+h*re+g*ae,i[14]=p*w+m*ee+h*O+g*A,i[3]=_*x+v*T+y*te+b*k,i[7]=_*S+v*E+y*ne+b*ie,i[11]=_*C+v*D+y*re+b*ae,i[15]=_*w+v*ee+y*O+b*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ne=1/te;return e[0]=(o*ee-s*D+c*E)*ne,e[1]=(r*D-n*ee-i*E)*ne,e[2]=(m*S-h*x+g*b)*ne,e[3]=(d*x-u*S-f*b)*ne,e[4]=(s*T-a*ee-c*w)*ne,e[5]=(t*ee-r*T+i*w)*ne,e[6]=(h*y-p*S-g*v)*ne,e[7]=(l*S-d*y+f*v)*ne,e[8]=(a*D-o*T+c*C)*ne,e[9]=(n*T-t*D-i*C)*ne,e[10]=(p*x-m*y+g*_)*ne,e[11]=(u*y-l*x-f*_)*ne,e[12]=(o*w-a*E-s*C)*ne,e[13]=(t*E-n*w+r*C)*ne,e[14]=(m*v-p*b-h*_)*ne,e[15]=(l*b-u*v+d*_)*ne,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=nn.set(r[0],r[1],r[2]).length(),o=nn.set(r[4],r[5],r[6]).length(),s=nn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),rn.copy(this);let c=1/a,l=1/o,u=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=l,rn.elements[5]*=l,rn.elements[6]*=l,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nn=new R,rn=new tn,an=new R(0,0,0),on=new R(1,1,1),sn=new R,cn=new R,ln=new R,un=new tn,dn=new Mt,fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ut(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:F(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dn.setFromEuler(this),this.setFromQuaternion(dn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER=`XYZ`;var pn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},mn=0,hn=new R,gn=new Mt,_n=new tn,vn=new R,yn=new R,bn=new R,xn=new Mt,Sn=new R(1,0,0),Cn=new R(0,1,0),wn=new R(0,0,1),Tn={type:`added`},En={type:`removed`},Dn={type:`childadded`,child:null},On={type:`childremoved`,child:null},kn=class e extends it{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mn++}),this.uuid=lt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new fn,r=new Mt,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tn},normalMatrix:{value:new z}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Sn,e)}rotateY(e){return this.rotateOnAxis(Cn,e)}rotateZ(e){return this.rotateOnAxis(wn,e)}translateOnAxis(e,t){return hn.copy(e).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sn,e)}translateY(e){return this.translateOnAxis(Cn,e)}translateZ(e){return this.translateOnAxis(wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vn.copy(e):vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(yn,vn,this.up):_n.lookAt(vn,yn,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gn.setFromRotationMatrix(_n),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(I(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):I(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,e,bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};kn.DEFAULT_UP=new R(0,1,0),kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var B=class extends kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},An={type:`move`},jn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new B,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new B,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new B,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(An)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new B;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Pn={h:0,s:0,l:0};function Fn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var V=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=zt.workingColorSpace){if(e=dt(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Fn(i,r,e+1/3),this.g=Fn(i,r,e),this.b=Fn(i,r,e-1/3)}return zt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&F(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:F(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);F(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=Mn[e.toLowerCase()];return n===void 0?F(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}copyLinearToSRGB(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return zt.workingToColorSpace(In.copy(this),e),Math.round(ut(In.r*255,0,255))*65536+Math.round(ut(In.g*255,0,255))*256+Math.round(ut(In.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(In.copy(this),t);let n=In.r,r=In.g,i=In.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Ve){zt.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,r=In.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Pn);let n=mt(Nn.h,Pn.h,t),r=mt(Nn.s,Pn.s,t),i=mt(Nn.l,Pn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new V;V.NAMES=Mn;var Ln=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new V(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rn=class extends kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new R,Bn=new R,Vn=new R,Hn=new R,Un=new R,Wn=new R,Gn=new R,Kn=new R,qn=new R,Jn=new R,Yn=new Xt,Xn=new Xt,Zn=new Xt,Qn=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){zn.subVectors(r,t),Bn.subVectors(n,t),Vn.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(Bn),s=zn.dot(Vn),c=Bn.dot(Bn),l=Bn.dot(Vn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Hn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Hn.x),s.addScaledVector(a,Hn.y),s.addScaledVector(o,Hn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Yn.setScalar(0),Xn.setScalar(0),Zn.setScalar(0),Yn.fromBufferAttribute(e,t),Xn.fromBufferAttribute(e,n),Zn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yn,i.x),a.addScaledVector(Xn,i.y),a.addScaledVector(Zn,i.z),a}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),Bn.subVectors(e,t),zn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),zn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Un.subVectors(r,n),Wn.subVectors(i,n),Kn.subVectors(e,n);let s=Un.dot(Kn),c=Wn.dot(Kn);if(s<=0&&c<=0)return t.copy(n);qn.subVectors(e,r);let l=Un.dot(qn),u=Wn.dot(qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Un,a);Jn.subVectors(e,i);let f=Un.dot(Jn),p=Wn.dot(Jn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Wn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Gn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Gn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Un,a).addScaledVector(Wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$n=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,tr):tr.fromBufferAttribute(r,t),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),ur.subVectors(this.max,lr),rr.subVectors(e.a,lr),ir.subVectors(e.b,lr),ar.subVectors(e.c,lr),or.subVectors(ir,rr),sr.subVectors(ar,ir),cr.subVectors(rr,ar);let t=[0,-or.z,or.y,0,-sr.z,sr.y,0,-cr.z,cr.y,or.z,0,-or.x,sr.z,0,-sr.x,cr.z,0,-cr.x,-or.y,or.x,0,-sr.y,sr.x,0,-cr.y,cr.x,0];return!pr(t,rr,ir,ar,ur)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,rr,ir,ar,ur))?!1:(dr.crossVectors(or,sr),t=[dr.x,dr.y,dr.z],pr(t,rr,ir,ar,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},er=[new R,new R,new R,new R,new R,new R,new R,new R],tr=new R,nr=new $n,rr=new R,ir=new R,ar=new R,or=new R,sr=new R,cr=new R,lr=new R,ur=new R,dr=new R,fr=new R;function pr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){fr.fromArray(e,a);let o=i.x*Math.abs(fr.x)+i.y*Math.abs(fr.y)+i.z*Math.abs(fr.z),s=t.dot(fr),c=n.dot(fr),l=r.dot(fr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var mr=new R,hr=new L,gr=0,_r=class extends it{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix4(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyNormalMatrix(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.transformDirection(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},vr=class extends _r{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yr=class extends _r{constructor(e,t,n){super(new Uint32Array(e),t,n)}},br=class extends _r{constructor(e,t,n){super(new Float32Array(e),t,n)}},xr=new $n,Sr=new R,Cr=new R,wr=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?xr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Sr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Cr)),this.expandByPoint(Sr.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tr=0,Er=new tn,Dr=new kn,Or=new R,kr=new $n,Ar=new $n,jr=new R,Mr=class e extends it{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tr++}),this.uuid=lt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Je(e)?yr:vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Er.makeRotationFromQuaternion(e),this.applyMatrix4(Er),this}rotateX(e){return Er.makeRotationX(e),this.applyMatrix4(Er),this}rotateY(e){return Er.makeRotationY(e),this.applyMatrix4(Er),this}rotateZ(e){return Er.makeRotationZ(e),this.applyMatrix4(Er),this}translate(e,t,n){return Er.makeTranslation(e,t,n),this.applyMatrix4(Er),this}scale(e,t,n){return Er.makeScale(e,t,n),this.applyMatrix4(Er),this}lookAt(e){return Dr.lookAt(e),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new br(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&F(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(this.boundingBox.min,kr.min),this.boundingBox.expandByPoint(jr),jr.addVectors(this.boundingBox.max,kr.max),this.boundingBox.expandByPoint(jr)):(this.boundingBox.expandByPoint(kr.min),this.boundingBox.expandByPoint(kr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&I(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(kr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(jr.addVectors(kr.min,Ar.min),kr.expandByPoint(jr),jr.addVectors(kr.max,Ar.max),kr.expandByPoint(jr)):(kr.expandByPoint(Ar.min),kr.expandByPoint(Ar.max))}kr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)jr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(jr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)jr.fromBufferAttribute(a,t),o&&(Or.fromBufferAttribute(e,t),jr.add(Or)),r=Math.max(r,n.distanceToSquared(jr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&I(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){I(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new _r(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let c=new R,l=new R,u=new R,d=new L,f=new L,p=new L,m=new R,h=new R;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new R,y=new R,b=new R,x=new R;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new _r(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jr.fromBufferAttribute(e,t),jr.normalize(),e.setXYZ(t,jr.x,jr.y,jr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new _r(a,r,i)}if(this.index===null)return F(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ke,this.updateRanges=[],this.version=0,this.uuid=lt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pr=new R,Fr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix4(e),this.setXYZ(t,Pr.x,Pr.y,Pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyNormalMatrix(e),this.setXYZ(t,Pr.x,Pr.y,Pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.transformDirection(e),this.setXYZ(t,Pr.x,Pr.y,Pr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){$e(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new _r(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$e(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ir=0,Lr=class extends it{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=lt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new V(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){F(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){F(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new V().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new L().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new L().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Rr=class extends Lr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new V(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zr,Br=new R,Vr=new R,Hr=new R,Ur=new L,Wr=new L,Gr=new tn,Kr=new R,qr=new R,Jr=new R,Yr=new L,Xr=new L,Zr=new L,Qr=class extends kn{constructor(e=new Rr){if(super(),this.isSprite=!0,this.type=`Sprite`,zr===void 0){zr=new Mr;let e=new Nr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute(`position`,new Fr(e,3,0,!1)),zr.setAttribute(`uv`,new Fr(e,2,3,!1))}this.geometry=zr,this.material=e,this.center=new L(.5,.5),this.count=1}raycast(e,t){e.camera===null&&I(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Vr.setFromMatrixScale(this.matrixWorld),Gr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Hr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;$r(Kr.set(-.5,-.5,0),Hr,a,Vr,r,i),$r(qr.set(.5,-.5,0),Hr,a,Vr,r,i),$r(Jr.set(.5,.5,0),Hr,a,Vr,r,i),Yr.set(0,0),Xr.set(1,0),Zr.set(1,1);let o=e.ray.intersectTriangle(Kr,qr,Jr,!1,Br);if(o===null&&($r(qr.set(-.5,.5,0),Hr,a,Vr,r,i),Xr.set(0,1),o=e.ray.intersectTriangle(Kr,Jr,qr,!1,Br),o===null))return;let s=e.ray.origin.distanceTo(Br);s<e.near||s>e.far||t.push({distance:s,point:Br.clone(),uv:Qn.getInterpolation(Br,Kr,qr,Jr,Yr,Xr,Zr,new L),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $r(e,t,n,r,i,a){Ur.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Wr.copy(Ur):(Wr.x=a*Ur.x-i*Ur.y,Wr.y=i*Ur.x+a*Ur.y),e.copy(t),e.x+=Wr.x,e.y+=Wr.y,e.applyMatrix4(Gr)}var ei=new R,ti=new R,ni=new R,ri=new R,ii=new R,ai=new R,oi=new R,si=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ti.copy(e).add(t).multiplyScalar(.5),ni.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(ti);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ni),o=ri.dot(this.direction),s=-ri.dot(ni),c=ri.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ti).addScaledVector(ni,d),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),r=ei.dot(ei)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,i){ii.subVectors(t,e),ai.subVectors(n,e),oi.crossVectors(ii,ai);let a=this.direction.dot(oi),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);let s=o*this.direction.dot(ai.crossVectors(ri,ai));if(s<0)return null;let c=o*this.direction.dot(ii.cross(ri));if(c<0||s+c>a)return null;let l=-o*ri.dot(oi);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},li=new tn,ui=new si,di=new wr,fi=new R,pi=new R,mi=new R,hi=new R,gi=new R,_i=new R,vi=new R,yi=new R,H=class extends kn{constructor(e=new Mr,t=new ci){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){_i.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(gi.fromBufferAttribute(s,e),a?_i.addScaledVector(gi,r):_i.addScaledVector(gi.sub(t),r))}t.add(_i)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(i),ui.copy(e.ray).recast(e.near),!(di.containsPoint(ui.origin)===!1&&(ui.intersectSphere(di,fi)===null||ui.origin.distanceToSquared(fi)>(e.far-e.near)**2))&&(li.copy(i).invert(),ui.copy(e.ray).applyMatrix4(li),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=xi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=xi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=xi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=xi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function bi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;yi.copy(s),yi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(yi);return l<n.near||l>n.far?null:{distance:l,point:yi.clone(),object:e}}function xi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,pi),e.getVertexPosition(c,mi),e.getVertexPosition(l,hi);let u=bi(e,t,n,r,pi,mi,hi,vi);if(u){let e=new R;Qn.getBarycoord(vi,pi,mi,hi,e),i&&(u.uv=Qn.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=Qn.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=Qn.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};Qn.getNormal(pi,mi,hi,t.normal),u.face=t,u.barycoord=e}return u}var Si=class extends Yt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ci=class extends _r{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wi=new tn,Ti=new tn,Ei=[],Di=new $n,Oi=new tn,ki=new H,Ai=new wr,ji=class extends H{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Oi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Di.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(Di)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Ai.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Ai)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ai.copy(this.boundingSphere),Ai.applyMatrix4(n),e.ray.intersectsSphere(Ai)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,wi),Ti.multiplyMatrices(n,wi),ki.matrixWorld=Ti,ki.raycast(e,Ei);for(let e=0,n=Ei.length;e<n;e++){let n=Ei[e];n.instanceId=i,n.object=this,t.push(n)}Ei.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Si(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mi=new R,Ni=new R,Pi=new z,Fi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Mi.subVectors(n,t).cross(Ni.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Mi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pi.getNormalMatrix(e),r=this.coplanarPoint(Mi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new wr,Li=new L(.5,.5),Ri=new R,zi=class{constructor(e=new Fi,t=new Fi,n=new Fi,r=new Fi,i=new Fi,a=new Fi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476+Li.distanceTo(e.center),Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ri.x=r.normal.x>0?e.max.x:e.min.x,Ri.y=r.normal.y>0?e.max.y:e.min.y,Ri.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ri)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bi=class extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new V(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vi=new tn,Hi=new si,Ui=new wr,Wi=new R,Gi=class extends kn{constructor(e=new Mr,t=new Bi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere),Ui.applyMatrix4(r),Ui.radius+=i,e.ray.intersectsSphere(Ui)===!1)return;Vi.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Vi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Wi.fromBufferAttribute(l,n),Ki(Wi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Wi.fromBufferAttribute(l,a),Ki(Wi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ki(e,t,n,r,i,a,o){let s=Hi.distanceSqToPoint(e);if(s<n){let n=new R;Hi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var qi=class extends Yt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ji=class extends Yt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yi=class extends Yt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xi=class extends Yi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zi=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},U=class e extends Mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new br(c,3)),this.setAttribute(`normal`,new br(l,3)),this.setAttribute(`uv`,new br(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qi=class e extends Mr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new R,g=new R;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new br(o,3)),this.setAttribute(`normal`,new br(s,3)),this.setAttribute(`uv`,new br(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},$i=class e extends Mr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new R,l=new L;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new br(a,3)),this.setAttribute(`normal`,new br(o,3)),this.setAttribute(`uv`,new br(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},W=class e extends Mr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new br(u,3)),this.setAttribute(`normal`,new br(d,3)),this.setAttribute(`uv`,new br(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class e extends W{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class e extends Mr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new br(i,3)),this.setAttribute(`normal`,new br(i.slice(),3)),this.setAttribute(`uv`,new br(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new L,s=new L,c=new L;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},na=class e extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ra=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){F(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new L:new R);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,r=[],i=[],a=[],o=new R,s=new tn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new R)}i[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ut(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ut(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ia=class extends ra{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new L){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},aa=class extends ia{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function oa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var sa=new R,ca=new R,la=new oa,ua=new oa,da=new oa,fa=class extends ra{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ca.subVectors(r[0],r[1]).add(r[0]),c=ca);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(sa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=sa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),la.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ua.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),da.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(la.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ua.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),da.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(la.calc(s),ua.calc(s),da.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ma(e,t){let n=1-e;return n*n*t}function ha(e,t){return 2*(1-e)*e*t}function ga(e,t){return e*e*t}function _a(e,t,n,r){return ma(e,t)+ha(e,n)+ga(e,r)}function va(e,t){let n=1-e;return n*n*n*t}function ya(e,t){let n=1-e;return 3*n*n*e*t}function ba(e,t){return 3*(1-e)*e*e*t}function xa(e,t){return e*e*e*t}function Sa(e,t,n,r,i){return va(e,t)+ya(e,n)+ba(e,r)+xa(e,i)}var Ca=class extends ra{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Sa(e,r.x,i.x,a.x,o.x),Sa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wa=class extends ra{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Sa(e,r.x,i.x,a.x,o.x),Sa(e,r.y,i.y,a.y,o.y),Sa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ta=class extends ra{constructor(e=new L,t=new L){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends ra{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends ra{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(_a(e,r.x,i.x,a.x),_a(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends ra{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(_a(e,r.x,i.x,a.x),_a(e,r.y,i.y,a.y),_a(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=Object.freeze({__proto__:null,ArcCurve:aa,CatmullRomCurve3:fa,CubicBezierCurve:Ca,CubicBezierCurve3:wa,EllipseCurve:ia,LineCurve:Ta,LineCurve3:Ea,QuadraticBezierCurve:Da,QuadraticBezierCurve3:Oa,SplineCurve:class extends ra{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new L){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(pa(o,s.x,c.x,l.x,u.x),pa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this}}}),Aa=class e extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ja=class e extends Mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new br(p,3)),this.setAttribute(`normal`,new br(m,3)),this.setAttribute(`uv`,new br(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ma=class e extends Mr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new br(p,3)),this.setAttribute(`normal`,new br(m,3)),this.setAttribute(`uv`,new br(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Na=class e extends Mr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new R,f=new R,p=new R;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new br(c,3)),this.setAttribute(`normal`,new br(l,3)),this.setAttribute(`uv`,new br(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Pa=class e extends Mr{constructor(e=new Oa(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,s=new R,c=new L,l=new R,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new br(u,3)),this.setAttribute(`normal`,new br(d,3)),this.setAttribute(`uv`,new br(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ka[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Fa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(La(i))i.isRenderTargetTexture?(F(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(La(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Ia(e){let t={};for(let n=0;n<e.length;n++){let r=Fa(e[n]);for(let e in r)t[e]=r[e]}return t}function La(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ra(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function za(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var Ba={clone:Fa,merge:Ia},Va=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ha=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ua=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Va,this.fragmentShader=Ha,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fa(e.uniforms),this.uniformsGroups=Ra(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new V().setHex(r.value);break;case`v2`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new tn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wa=class extends Ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ga=class extends Lr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ka=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=P,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qa=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ja(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Ya=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Xa=class extends Ya{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case N:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case N:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Za=class extends Ya{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Qa=class extends Ya{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},$a=class extends Ya{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},eo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ja(t,this.TimeBufferType),this.values=Ja(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ja(e.times,Array),values:Ja(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $a(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case M:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return F(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return M;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(I(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(I(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){I(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){I(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ye(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){I(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};eo.prototype.ValueTypeName=``,eo.prototype.TimeBufferType=Float32Array,eo.prototype.ValueBufferType=Float32Array,eo.prototype.DefaultInterpolation=M;var to=class extends eo{constructor(e,t,n){super(e,t,n)}};to.prototype.ValueTypeName=`bool`,to.prototype.ValueBufferType=Array,to.prototype.DefaultInterpolation=Ie,to.prototype.InterpolantFactoryMethodLinear=void 0,to.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}};no.prototype.ValueTypeName=`color`;var ro=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}};ro.prototype.ValueTypeName=`number`;var io=class extends Ya{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ao=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}};ao.prototype.ValueTypeName=`quaternion`,ao.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends eo{constructor(e,t,n){super(e,t,n)}};oo.prototype.ValueTypeName=`string`,oo.prototype.ValueBufferType=Array,oo.prototype.DefaultInterpolation=Ie,oo.prototype.InterpolantFactoryMethodLinear=void 0,oo.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends eo{constructor(e,t,n,r){super(e,t,n,r)}};so.prototype.ValueTypeName=`vector`;var co=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},lo=class{constructor(e){this.manager=e===void 0?co:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};lo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var uo=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new V(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fo=class extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new V(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},po=new tn,mo=new R,ho=new R,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mo.setFromMatrixPosition(e.matrixWorld),t.position.copy(mo),ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ho),t.updateMatrixWorld(),po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_o=new R,vo=new Mt,yo=new R,bo=class extends kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_o,vo,yo),yo.x===1&&yo.y===1&&yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,yo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_o,vo,yo),yo.x===1&&yo.y===1&&yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,yo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xo=new R,So=new L,Co=new L,wo=class extends bo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(st*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ct*2*Math.atan(Math.tan(st*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xo.x,xo.y).multiplyScalar(-e/xo.z),xo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xo.x,xo.y).multiplyScalar(-e/xo.z)}getViewSize(e,t){return this.getViewBounds(e,So,Co),t.subVectors(Co,So)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(st*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},To=class extends go{constructor(){super(new wo(90,1,.5,500)),this.isPointLightShadow=!0}},Eo=class extends uo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new To}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Do=class extends bo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oo=class extends go{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new Oo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ao=-90,jo=1,Mo=class extends kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wo(Ao,jo,e,t);r.layers=this.layers,this.add(r);let i=new wo(Ao,jo,e,t);i.layers=this.layers,this.add(i);let a=new wo(Ao,jo,e,t);a.layers=this.layers,this.add(a);let o=new wo(Ao,jo,e,t);o.layers=this.layers,this.add(o);let s=new wo(Ao,jo,e,t);s.layers=this.layers,this.add(s);let c=new wo(Ao,jo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},No=class extends wo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Po=`\\[\\]\\.:\\/`,Fo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Io=`[^\\[\\]\\.:\\/]`,Lo=`[^`+Po.replace(`\\.`,``)+`]`,Ro=`((?:WC+[\\/:])*)`.replace(`WC`,Io),zo=`(WCOD+)?`.replace(`WCOD`,Lo),Bo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Io),Vo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Io),Ho=RegExp(`^`+Ro+zo+Bo+Vo+`$`),Uo=[`material`,`materials`,`bones`,`map`],Wo=class{constructor(e,t,n){let r=n||Go.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Go=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Fo,``)}static parseTrackName(e){let t=Ho.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Uo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){F(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){I(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){I(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){I(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){I(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){I(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;I(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Go.Composite=Wo,Go.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Go.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Go.prototype.GetterByBindingType=[Go.prototype._getValue_direct,Go.prototype._getValue_array,Go.prototype._getValue_arrayElement,Go.prototype._getValue_toArray],Go.prototype.SetterByBindingTypeAndVersioning=[[Go.prototype._setValue_direct,Go.prototype._setValue_direct_setNeedsUpdate,Go.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Go.prototype._setValue_array,Go.prototype._setValue_array_setNeedsUpdate,Go.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Go.prototype._setValue_arrayElement,Go.prototype._setValue_arrayElement_setNeedsUpdate,Go.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Go.prototype._setValue_fromArray,Go.prototype._setValue_fromArray_setNeedsUpdate,Go.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ko=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,F(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function qo(e,t,n,r){let i=Jo(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case O:case k:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case A:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case fe:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Jo(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?F(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Yo(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Xo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Zo={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
}`,lights_fragment_begin:`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},G={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},Qo={basic:{uniforms:Ia([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:Zo.meshbasic_vert,fragmentShader:Zo.meshbasic_frag},lambert:{uniforms:Ia([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:Zo.meshlambert_vert,fragmentShader:Zo.meshlambert_frag},phong:{uniforms:Ia([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zo.meshphong_vert,fragmentShader:Zo.meshphong_frag},standard:{uniforms:Ia([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zo.meshphysical_vert,fragmentShader:Zo.meshphysical_frag},toon:{uniforms:Ia([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new V(0)}}]),vertexShader:Zo.meshtoon_vert,fragmentShader:Zo.meshtoon_frag},matcap:{uniforms:Ia([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:Zo.meshmatcap_vert,fragmentShader:Zo.meshmatcap_frag},points:{uniforms:Ia([G.points,G.fog]),vertexShader:Zo.points_vert,fragmentShader:Zo.points_frag},dashed:{uniforms:Ia([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zo.linedashed_vert,fragmentShader:Zo.linedashed_frag},depth:{uniforms:Ia([G.common,G.displacementmap]),vertexShader:Zo.depth_vert,fragmentShader:Zo.depth_frag},normal:{uniforms:Ia([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:Zo.meshnormal_vert,fragmentShader:Zo.meshnormal_frag},sprite:{uniforms:Ia([G.sprite,G.fog]),vertexShader:Zo.sprite_vert,fragmentShader:Zo.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zo.background_vert,fragmentShader:Zo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:Zo.backgroundCube_vert,fragmentShader:Zo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zo.cube_vert,fragmentShader:Zo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zo.equirect_vert,fragmentShader:Zo.equirect_frag},distance:{uniforms:Ia([G.common,G.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zo.distance_vert,fragmentShader:Zo.distance_frag},shadow:{uniforms:Ia([G.lights,G.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:Zo.shadow_vert,fragmentShader:Zo.shadow_frag}};Qo.physical={uniforms:Ia([Qo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:Zo.meshphysical_vert,fragmentShader:Zo.meshphysical_frag};var $o={r:0,b:0,g:0},es=new tn,ts=new z;ts.set(-1,0,0,0,1,0,0,0,1);function ns(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new H(new U(1,1,1),new Ua({name:`BackgroundCubeMaterial`,uniforms:Fa(Qo.backgroundCube.uniforms),vertexShader:Qo.backgroundCube.vertexShader,fragmentShader:Qo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(es.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ts),l.material.toneMapped=zt.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new H(new ja(2,2),new Ua({name:`BackgroundMaterial`,uniforms:Fa(Qo.background.uniforms),vertexShader:Qo.background.vertexShader,fragmentShader:Qo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=zt.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB($o,za(e)),n.buffers.color.setClear($o.r,$o.g,$o.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function rs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function is(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function as(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(F(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&F(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function os(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fi,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ss=4,cs=[.125,.215,.35,.446,.526,.582],ls=20,us=256,ds=new Do,fs=new V,ps=null,ms=0,hs=0,gs=!1,_s=new R,vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_s}=i;ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ts(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ws(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ps,ms,hs),this._renderer.xr.enabled=gs,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:He,depthBuffer:!1},r=bs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ys(r)),this._blurMaterial=Cs(r,e,t),this._ggxMaterial=Ss(r,e,t)}return r}_compileMaterial(e){let t=new H(new Mr,e);this._renderer.compile(t,ds)}_sceneToCubeUV(e,t,n,r,i){let a=new wo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(fs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new H(new U,new ci({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(fs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;xs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ts()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ws());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;xs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ds)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ss?n-d+ss:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,xs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ds),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,xs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ds)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&I(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*ls-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):ls;m>ls&&F(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);let h=[],g=0;for(let e=0;e<ls;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];xs(t,3*v*(r>_-ss?r-_+ss:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,ds)}};function ys(e){let t=[],n=[],r=[],i=e,a=e-ss+1+cs.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-ss?s=cs[o-e+ss-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Mr;h.setAttribute(`position`,new _r(f,3)),h.setAttribute(`uv`,new _r(p,2)),h.setAttribute(`faceIndex`,new _r(m,1)),r.push(new H(h,null)),i>ss&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function bs(e,t,n){let r=new Qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function xs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ss(e,t,n){return new Ua({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Es(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cs(e,t,n){let r=new Float32Array(ls),i=new R(0,1,0);return new Ua({name:`SphericalGaussianBlur`,defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Es(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ws(){return new Ua({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Es(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ts(){return new Ua({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Es(){return`

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
	`}var Ds=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new U(5,5,5),i=new Ua({name:`CubemapFromEquirect`,uniforms:Fa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new H(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Mo(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Os(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Ds(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new vs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new vs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ks(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function As(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?yr:vr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function js(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ms(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:I(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ns(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new $t(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new L(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ps(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Fs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Is(e,t,n,r,i,a){let o=new Qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Yi(t,n):void 0}),s=new Qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Mr;c.setAttribute(`position`,new br([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new br([0,2,0,0,2,0],2));let l=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new H(c,l),d=new Do(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},zt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Fs[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(u,d),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Ls=new Yt,Rs=new Yi(1,1),zs=new $t,Bs=new en,Vs=new qi,Hs=[],Us=[],Ws=new Float32Array(16),Gs=new Float32Array(9),Ks=new Float32Array(4);function qs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Hs[i];if(a===void 0&&(a=new Float32Array(i),Hs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Js(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ys(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Xs(e,t){let n=Us[t];n===void 0&&(n=new Int32Array(t),Us[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Zs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Js(n,t))return;e.uniform2fv(this.addr,t),Ys(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Js(n,t))return;e.uniform3fv(this.addr,t),Ys(n,t)}}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Js(n,t))return;e.uniform4fv(this.addr,t),Ys(n,t)}}function tc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Js(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ys(n,t)}else{if(Js(n,r))return;Ks.set(r),e.uniformMatrix2fv(this.addr,!1,Ks),Ys(n,r)}}function nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Js(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ys(n,t)}else{if(Js(n,r))return;Gs.set(r),e.uniformMatrix3fv(this.addr,!1,Gs),Ys(n,r)}}function rc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Js(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ys(n,t)}else{if(Js(n,r))return;Ws.set(r),e.uniformMatrix4fv(this.addr,!1,Ws),Ys(n,r)}}function ic(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Js(n,t))return;e.uniform2iv(this.addr,t),Ys(n,t)}}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Js(n,t))return;e.uniform3iv(this.addr,t),Ys(n,t)}}function sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Js(n,t))return;e.uniform4iv(this.addr,t),Ys(n,t)}}function cc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Js(n,t))return;e.uniform2uiv(this.addr,t),Ys(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Js(n,t))return;e.uniform3uiv(this.addr,t),Ys(n,t)}}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Js(n,t))return;e.uniform4uiv(this.addr,t),Ys(n,t)}}function fc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Rs.compareFunction=n.isReversedDepthBuffer()?518:515,a=Rs):a=Ls,n.setTexture2D(t||a,i)}function pc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Bs,i)}function mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Vs,i)}function hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||zs,i)}function gc(e){switch(e){case 5126:return Zs;case 35664:return Qs;case 35665:return $s;case 35666:return ec;case 35674:return tc;case 35675:return nc;case 35676:return rc;case 5124:case 35670:return ic;case 35667:case 35671:return ac;case 35668:case 35672:return oc;case 35669:case 35673:return sc;case 5125:return cc;case 36294:return lc;case 36295:return uc;case 36296:return dc;case 35678:case 36198:case 36298:case 36306:case 35682:return fc;case 35679:case 36299:case 36307:return pc;case 35680:case 36300:case 36308:case 36293:return mc;case 36289:case 36303:case 36311:case 36292:return hc}}function _c(e,t){e.uniform1fv(this.addr,t)}function vc(e,t){let n=qs(t,this.size,2);e.uniform2fv(this.addr,n)}function yc(e,t){let n=qs(t,this.size,3);e.uniform3fv(this.addr,n)}function bc(e,t){let n=qs(t,this.size,4);e.uniform4fv(this.addr,n)}function xc(e,t){let n=qs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Sc(e,t){let n=qs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Cc(e,t){let n=qs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function wc(e,t){e.uniform1iv(this.addr,t)}function Tc(e,t){e.uniform2iv(this.addr,t)}function Ec(e,t){e.uniform3iv(this.addr,t)}function Dc(e,t){e.uniform4iv(this.addr,t)}function Oc(e,t){e.uniform1uiv(this.addr,t)}function kc(e,t){e.uniform2uiv(this.addr,t)}function Ac(e,t){e.uniform3uiv(this.addr,t)}function jc(e,t){e.uniform4uiv(this.addr,t)}function Mc(e,t,n){let r=this.cache,i=t.length,a=Xs(n,i);Js(r,a)||(e.uniform1iv(this.addr,a),Ys(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Rs:Ls;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Nc(e,t,n){let r=this.cache,i=t.length,a=Xs(n,i);Js(r,a)||(e.uniform1iv(this.addr,a),Ys(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Bs,a[e])}function Pc(e,t,n){let r=this.cache,i=t.length,a=Xs(n,i);Js(r,a)||(e.uniform1iv(this.addr,a),Ys(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Vs,a[e])}function Fc(e,t,n){let r=this.cache,i=t.length,a=Xs(n,i);Js(r,a)||(e.uniform1iv(this.addr,a),Ys(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||zs,a[e])}function Ic(e){switch(e){case 5126:return _c;case 35664:return vc;case 35665:return yc;case 35666:return bc;case 35674:return xc;case 35675:return Sc;case 35676:return Cc;case 5124:case 35670:return wc;case 35667:case 35671:return Tc;case 35668:case 35672:return Ec;case 35669:case 35673:return Dc;case 5125:return Oc;case 36294:return kc;case 36295:return Ac;case 36296:return jc;case 35678:case 36198:case 36298:case 36306:case 35682:return Mc;case 35679:case 36299:case 36307:return Nc;case 35680:case 36300:case 36308:case 36293:return Pc;case 36289:case 36303:case 36311:case 36292:return Fc}}var Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gc(t.type)}},Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ic(t.type)}},zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Bc=/(\w+)(\])?(\[|\.)?/g;function Vc(e,t){e.seq.push(t),e.map[t.id]=t}function Hc(e,t,n){let r=e.name,i=r.length;for(Bc.lastIndex=0;;){let a=Bc.exec(r),o=Bc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Vc(n,l===void 0?new Lc(s,e,t):new Rc(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new zc(s),Vc(n,e)),n=e}}}var Uc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Hc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Wc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Gc=37297,Kc=0;function qc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Jc=new z;function Yc(e){zt._getMatrix(Jc,zt.workingColorSpace,e);let t=`mat3( ${Jc.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return F(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Xc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+qc(e.getShaderSource(t),r)}else return i}function Zc(e,t){let n=Yc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Qc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function $c(e,t){let n=Qc[t];return n===void 0?(F(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var el=new R;function tl(){return zt.getLuminanceCoefficients(el),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${el.x.toFixed(4)}, ${el.y.toFixed(4)}, ${el.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function nl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(al).join(`
`)}function rl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function il(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function al(e){return e!==``}function ol(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cl=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(e){return e.replace(cl,dl)}var ul=new Map;function dl(e,t){let n=Zo[t];if(n===void 0){let e=ul.get(t);if(e!==void 0)n=Zo[e],F(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ll(n)}var fl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(e){return e.replace(fl,ml)}function ml(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function hl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var gl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function _l(e){return gl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var vl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function yl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:vl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var bl={302:`ENVMAP_MODE_REFRACTION`};function xl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:bl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Sl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Cl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Sl[e.combine]||`ENVMAP_BLENDING_NONE`}function wl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Tl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=_l(n),l=yl(n),u=xl(n),d=Cl(n),f=wl(n),p=nl(n),m=rl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(al).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(al).join(`
`),_.length>0&&(_+=`
`)):(g=[hl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(al).join(`
`),_=[hl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Zo.tonemapping_pars_fragment,n.toneMapping===0?``:$c(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Zo.colorspace_pars_fragment,Zc(`linearToOutputTexel`,n.outputColorSpace),tl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(al).join(`
`)),o=ll(o),o=ol(o,n),o=sl(o,n),s=ll(s),s=ol(s,n),s=sl(s,n),o=pl(o),s=pl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Wc(i,i.VERTEX_SHADER,y),S=Wc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Xc(i,x,`vertex`),n=Xc(i,S,`fragment`);I(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):F(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Uc(i,h),T=il(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Gc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var El=0,Dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ol(e),t.set(e,n)),n}},Ol=class{constructor(e){this.id=El++,this.code=e,this.usedTimes=0}};function kl(e){return e===1030||e===37490||e===36285}function Al(e,t,n,r,i,a){let o=new pn,s=new Dl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&F(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,te,ne;if(C){let e=Qo[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),te=e.id,ne=t.id}let re=e.getRenderTarget(),O=e.state.buffers.depth.getReversed(),k=h.isInstancedMesh===!0,ie=h.isBatchedMesh===!0,ae=!!i.map,A=!!i.matcap,oe=!!x,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,ue=!!i.normalMap,de=!!i.displacementMap,fe=!!i.emissiveMap,j=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=me&&!!i.anisotropyMap,xe=he&&!!i.clearcoatMap,Se=he&&!!i.clearcoatNormalMap,Ce=he&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,Ie=!!i.alphaHash,M=!!i.extensions,Le=0;i.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ie,batchingColor:ie&&h._colorsTexture!==null,instancing:k,instancingColor:k&&h.instanceColor!==null,instancingMorph:k&&h.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:A,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:se,lightMap:ce,bumpMap:le,normalMap:ue,displacementMap:de,emissiveMap:fe,normalMapObjectSpace:ue&&i.normalMapType===1,normalMapTangentSpace:ue&&i.normalMapType===0,packedNormalMap:ue&&i.normalMapType===0&&kl(i.normalMap.format),metalnessMap:j,roughnessMap:pe,anisotropy:me,anisotropyMap:be,clearcoat:he,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:Ie,combine:i.combine,mapUv:ae&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:ce&&m(i.lightMap.channel),bumpMapUv:le&&m(i.bumpMap.channel),normalMapUv:ue&&m(i.normalMap.channel),displacementMapUv:de&&m(i.displacementMap.channel),emissiveMapUv:fe&&m(i.emissiveMap.channel),metalnessMapUv:j&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ue||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ae||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ue===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:O,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&zt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:fe&&i.emissiveMap.isVideoTexture===!0&&zt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:M&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(M&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Qo[t];n=Ba.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Tl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function jl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ml(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Nl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Ml),r.length>1&&r.sort(t||Nl),i.length>1&&i.sort(t||Nl),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Fl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Pl,e.set(t,[i])):n>=r.length?(i=new Pl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Il(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new R,color:new V};break;case`SpotLight`:n={position:new R,direction:new R,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=n,n}}}function Ll(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Rl=0;function zl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Bl(e){let t=new Il,n=Ll(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new tn,o=new tn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(zl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Rl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Vl(e){let t=new Bl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Hl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Vl(e),t.set(n,[a])):r>=i.length?(a=new Vl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ul=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wl=`uniform sampler2D shadow_pass;
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
}`,Gl=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Kl=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],ql=new tn,Jl=new R,Yl=new R;function Xl(e,t,n){let i=new zi,a=new L,s=new L,c=new Xt,l=new Ka,u=new qa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:Ul,fragmentShader:Wl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Mr;y.setAttribute(`position`,new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new H(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(F(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){F(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){F(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Qt(a.x,a.y,{format:te,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Yi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Ds(a.x),p.map.depthTexture=new Xi(a.x,m)):(p.map=new Qt(a.x,a.y),p.map.depthTexture=new Yi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Jl.setFromMatrixPosition(d.matrixWorld),e.position.copy(Jl),Yl.copy(e.position),Yl.add(Gl[t]),e.up.copy(Kl[t]),e.lookAt(Yl),e.updateMatrixWorld(),n.makeTranslation(-Jl.x,-Jl.y,-Jl.z),ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(ql,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);i=p.getFrustum(),E(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Qt(a.x,a.y,{format:te,type:g})),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value=n.mapSize,_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value=n.mapSize,v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Zl(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?j(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?j(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,ee=null,te=null,ne=null,re=null,O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),k=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),k=ie>=1);let A=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new Xt().fromArray(se),ue=new Xt().fromArray(ce);function de(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let fe={};fe[e.TEXTURE_2D]=de(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=de(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=de(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=de(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),j(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),j(e.CULL_FACE),ye(0);function j(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(pe(e.BLEND),g=!1);return}if(g===!1&&(j(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:I(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:I(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:I(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:I(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):j(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(j(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Ce(t){t!==te&&(k&&e.lineWidth(t),te=t)}function we(t,n,r){t?(j(e.POLYGON_OFFSET_FILL),(ne!==n||re!==r)&&(ne=n,re=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?j(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+O-1),A!==t&&(e.activeTexture(t),A=t)}function De(t,n,r){r===void 0&&(r=A===null?e.TEXTURE0+O-1:A);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(A!==r&&(e.activeTexture(r),A=r),e.bindTexture(t,n||fe[t]),i.type=t,i.texture=n)}function Oe(){let t=oe[A];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function M(){try{e.texImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function N(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t){ue.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ue.copy(t))}function P(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ve(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},A=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,ee=null,te=null,ne=null,re=null,le.set(0,0,e.canvas.width,e.canvas.height),ue.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:j,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:M,texImage3D:Le,pixelStorei:ze,getParameter:Re,updateUBOMapping:P,uniformBlockBinding:Ve,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:N,viewport:Be,reset:He}}function Ql(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new L,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Xe(`canvas`)}function T(e,t,n){let r=1,i=Re(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),F(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&F(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function ne(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];F(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||F(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ue:zt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function re(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,F(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function O(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function k(e){let t=e.target;t.removeEventListener(`dispose`,k),ae(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function ie(e){let t=e.target;t.removeEventListener(`dispose`,ie),oe(t)}function ae(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&A(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function A(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function oe(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let se=0;function ce(){se=0}function le(){return se}function ue(e){se=e}function de(){let e=se;return e>=p.maxTextures&&F(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),se+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function j(e,t){let n=f.get(e);if(e.isVideoTexture&&M(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)F(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)F(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){Ce(n,e,t);return}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){Ce(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){we(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ge={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},_e={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ve={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ye(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&F(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ge[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ge[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ge[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,_e[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,_e[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ve[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function be(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,k));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=fe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&A(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=xe(r.start,t.width,4),c=xe(n.start,t.width,4);r.start<=o+1&&s===c&&xe(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Ce(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=be(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=zt.getPrimaries(zt.workingColorSpace),n=t.colorSpace===``?null:zt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Le(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=ne(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ye(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=O(t,e);if(t.isDepthTexture)u=re(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Se(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data);else if(t.isCompressedTexture)if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023)if(s!==null)if(g){if(v)if(t.layerUpdates.size>0){let e=qo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0);else F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data)}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}else if(t.isDataArrayTexture)if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v)if(t.layerUpdates.size>0){let n=qo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_)if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Re(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Re(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n){if(t.image.length!==6)return;let r=be(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=zt.getPrimaries(zt.workingColorSpace),o=t.colorSpace===``?null:zt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Le(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=ne(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=O(t,h);ye(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Re(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Te(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=ne(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Ie(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Fe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=re(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Ie(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Fe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Fe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=ne(i.internalFormat,a,o,i.normalized,i.colorSpace);Ie(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Fe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Fe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function De(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,k)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ye(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else j(t.depthTexture,0);let a=i.__webglTexture,o=Fe(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Ie(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Ie(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer)if(n)for(let n=0;n<6;n++)De(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?De(t.__webglFramebuffer[0],e,0):De(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ee(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ee(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function ke(e,t,n){let r=f.get(e);t!==void 0&&Te(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Oe(e)}function Ae(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ie);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Ie(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=ne(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Fe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ee(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ye(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Te(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ye(o,r),Te(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ye(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Te(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&Oe(e)}function je(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let Me=[],Ne=[];function Pe(e){if(e.samples>0){if(Ie(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Me.length=0,Ne.length=0,Me.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(Me.push(a),Ne.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Ne)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Me))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Fe(e){return Math.min(p.maxSamples,e.samples)}function Ie(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function M(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(zt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&F(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):I(`WebGLTextures: Unsupported texture color space:`,n)),t}function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ce,this.getTextureUnits=le,this.setTextureUnits=ue,this.setTexture2D=j,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function $l(e,t){function n(n,r=``){let i,a=zt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var eu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tu=`
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

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ua({vertexShader:eu,fragmentShader:tu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ru=class extends it{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new nu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new L,te=null,ne=new wo;ne.viewport=new Xt;let re=new wo;re.viewport=new Xt;let O=[ne,re],k=new No,ie=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getHandSpace()};function A(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ie=null,ae=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(te),e.setSize(ee.width,ee.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),b.xrCompatible!==!0&&await t.makeXRCompatible(),te=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Yi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new R,le=new R;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),k.near=re.near=ne.near=t,k.far=re.far=ne.far=n,(ie!==k.near||ae!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ie=k.near,ae=k.far),k.layers.mask=e.layers.mask|6,ne.layers.mask=k.layers.mask&-5,re.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;de(k,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(k,ne,re):k.projectionMatrix.copy(ne.projectionMatrix),fe(e,k,i)};function fe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(e){return v[e]};let j=null;function pe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=O[n];o===void 0&&(o=new wo,o.layers.enable(n),o.viewport=new Xt,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Zi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}j&&j(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let me=new Yo;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){j=e},this.dispose=function(){}}},iu=new tn,au=new z;au.set(-1,0,0,0,1,0,0,0,1);function ou(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,za(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(iu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(au),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function su(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return I(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?F(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):F(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var cu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),lu=null;function uu(){return lu===null&&(lu=new Si(cu,16,16,te,g),lu.name=`DFG_LUT`,lu.minFilter=o,lu.magFilter=o,lu.wrapS=t,lu.wrapT=t,lu.generateMipmaps=!1,lu.needsUpdate=!0),lu}var du=class{constructor(e={}){let{canvas:t=Ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([re,ne,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new R,te=null,O=null,k=[],ie=[],ae=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,oe=!1,se=null,ce=null,le=null,ue=null;this._outputColorSpace=Ve;let de=0,fe=0,j=null,pe=-1,me=null,he=new Xt,ge=new Xt,_e=null,ve=new V(0),ye=0,be=t.width,xe=t.height,Se=1,Ce=null,we=null,Te=new Xt(0,0,be,xe),Ee=new Xt(0,0,be,xe),De=!1,Oe=new zi,ke=!1,Ae=!1,je=new tn,Me=new R,Ne=new Xt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return j===null?Se:1}let M=n;function Le(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,ft,!1),t.addEventListener(`webglcontextrestored`,pt,!1),t.addEventListener(`webglcontextcreationerror`,mt,!1),M===null){let t=`webgl2`;if(M=Le(t,e),M===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw I(`WebGLRenderer: `+e.message),e}let Re,ze,N,Be,P,He,Ue,We,Ge,Ke,Je,Ye,Xe,Qe,et,tt,rt,it,at,ot,st,ct,lt;function ut(){Re=new ks(M),Re.init(),st=new $l(M,Re),ze=new as(M,Re,e,st),N=new Zl(M,Re),ze.reversedDepthBuffer&&h&&N.buffers.depth.setReversed(!0),ce=M.createFramebuffer(),le=M.createFramebuffer(),ue=M.createFramebuffer(),Be=new Ms(M),P=new jl,He=new Ql(M,Re,N,P,ze,st,Be),Ue=new Os(A),We=new Xo(M),ct=new rs(M,We),Ge=new As(M,We,Be,ct),Ke=new Ps(M,Ge,We,ct,Be),it=new Ns(M,ze,He),et=new os(P),Je=new Al(A,Ue,Re,ze,ct,et),Ye=new ou(A,P),Xe=new Fl,Qe=new Hl(Re),rt=new ns(A,Ue,N,Ke,x,s),tt=new Xl(A,Ke,ze),lt=new su(M,Be,ze,N),at=new is(M,Re,Be),ot=new js(M,Re,Be),Be.programs=Je.programs,A.capabilities=ze,A.extensions=Re,A.properties=P,A.renderLists=Xe,A.shadowMap=tt,A.state=N,A.info=Be}ut(),S!==1009&&(ae=new Is(S,t.width,t.height,o,r,i));let dt=new ru(A,M);this.xr=dt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(e){e!==void 0&&(Se=e,this.setSize(be,xe,!1))},this.getSize=function(e){return e.set(be,xe)},this.setSize=function(e,n,r=!0){if(dt.isPresenting){F(`WebGLRenderer: Can't change size while VR device is presenting.`);return}be=e,xe=n,t.width=Math.floor(e*Se),t.height=Math.floor(n*Se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ae!==null&&ae.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(be*Se,xe*Se).floor()},this.setDrawingBufferSize=function(e,n,r){be=e,xe=n,Se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){I(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){F(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ae.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(he)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(he.copy(Te).multiplyScalar(Se).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(ge.copy(Ee).multiplyScalar(Se).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=C.has(t)}if(e){let e=j.texture.type,t=w.has(e),n=rt.getClearColor(),r=rt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,M.clearBufferuiv(M.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,M.clearBufferiv(M.COLOR,0,E))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),se=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),rt.dispose(),Xe.dispose(),Qe.dispose(),P.dispose(),Ue.dispose(),Ke.dispose(),ct.dispose(),lt.dispose(),Je.dispose(),dt.dispose(),dt.removeEventListener(`sessionstart`,xt),dt.removeEventListener(`sessionend`,St),Ct.stop()};function ft(e){e.preventDefault(),$e(`WebGLRenderer: Context Lost.`),oe=!0}function pt(){$e(`WebGLRenderer: Context Restored.`),oe=!1;let e=Be.autoReset,t=tt.enabled,n=tt.autoUpdate,r=tt.needsUpdate,i=tt.type;ut(),Be.autoReset=e,tt.enabled=t,tt.autoUpdate=n,tt.needsUpdate=r,tt.type=i}function mt(e){I(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ht(e){let t=e.target;t.removeEventListener(`dispose`,ht),gt(t)}function gt(e){_t(e),P.remove(e)}function _t(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){Je.releaseProgram(e)}),e.isShaderMaterial&&Je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Mt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ct.setup(i,r,s,n,c);let h,g=at;if(c!==null&&(h=We.get(c),g=ot,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh)if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function vt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,n),e.side=0,e.needsUpdate=!0,kt(e,t,n),e.side=2):kt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),O=Qe.get(n),O.init(t),ie.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];vt(a,n,e),r.add(a)}else vt(t,n,e),r.add(t)}),O=ie.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){P.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let yt=null;function bt(e){yt&&yt(e)}function xt(){Ct.stop()}function St(){Ct.start()}let Ct=new Yo;Ct.setAnimationLoop(bt),typeof self<`u`&&Ct.setContext(self),this.setAnimationLoop=function(e){yt=e,dt.setAnimationLoop(e),e===null?Ct.stop():Ct.start()},dt.addEventListener(`sessionstart`,xt),dt.addEventListener(`sessionend`,St),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){I(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(oe===!0)return;se!==null&&se.renderStart(e,t);let n=dt.enabled===!0&&dt.isPresenting===!0,r=ae!==null&&(j===null||n)&&ae.begin(A,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(ae===null||ae.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(t),t=dt.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,j),O=Qe.get(e,ie.length),O.init(t),O.state.textureUnits=He.getTextureUnits(),ie.push(O),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Oe.setFromProjectionMatrix(je,qe,t.reversedDepth),Ae=this.localClippingEnabled,ke=et.init(this.clippingPlanes,Ae),te=Xe.get(e,k.length),te.init(),k.push(te),dt.enabled===!0&&dt.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&wt(e,t,-1/0,A.sortObjects)}wt(e,t,0,A.sortObjects),te.finish(),A.sortObjects===!0&&te.sort(Ce,we,t.reversedDepth),Fe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Fe&&rt.addToRenderList(te,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&et.beginShadows();let i=O.state.shadowsArray;if(tt.render(i,e,t),ke===!0&&et.endShadows(),(r&&ae.hasRenderPass())===!1){let n=te.opaque,r=te.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Et(n,r,e,a)}Fe&&rt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Tt(te,e,n,n.viewport)}}else r.length>0&&Et(n,r,e,t),Fe&&rt.render(e),Tt(te,e,t)}j!==null&&fe===0&&(He.updateMultisampleRenderTarget(j),He.updateRenderTargetMipmap(j)),r&&ae.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),ct.resetDefaultState(),pe=-1,me=null,ie.pop(),ie.length>0?(O=ie[ie.length-1],He.setTextureUnits(O.state.textureUnits),ke===!0&&et.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,k.pop(),te=k.length>0?k[k.length-1]:null,se!==null&&se.renderEnd()};function wt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Oe.intersectsSprite(e)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let t=Ke.update(e),i=e.material;i.visible&&te.push(e,t,i,n,Ne.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Oe.intersectsObject(e))){let t=Ke.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ne.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&te.push(e,t,s,n,Ne.z,o)}}else i.visible&&te.push(e,t,i,n,Ne.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)wt(i[e],t,n,r)}function Tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),ke===!0&&et.setGlobalState(A.clippingPlanes,n),r&&N.viewport(he.copy(r)),i.length>0&&Dt(i,t,n),a.length>0&&Dt(a,t,n),o.length>0&&Dt(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new Qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||he;a.setSize(o.z*A.transmissionResolutionScale,o.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),u=A.getActiveCubeFace(),d=A.getActiveMipmapLevel();A.setRenderTarget(a),A.getClearColor(ve),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),Fe&&rt.render(n);let f=A.toneMapping;A.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),ke===!0&&et.setGlobalState(A.clippingPlanes,r),Dt(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}A.setRenderTarget(s,u,d),A.setClearColor(ve,ye),p!==void 0&&(r.viewport=p),A.toneMapping=f}function Dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ot(o,t,n,s,l,c)}}function Ot(e,t,n,r,i,a){e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function kt(e,t,n){t.isScene!==!0&&(t=Pe);let r=P.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Je.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ht),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return jt(e,s),d}else s.uniforms=Je.getUniforms(e),se!==null&&e.isNodeMaterial&&se.build(e,n,s),e.onBeforeCompile(s,A),d=Je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=et.uniform),jt(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function At(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Uc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function jt(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function L(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Mt(e,t,n,r,i){t.isScene!==!0&&(t=Pe),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:zt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),y=O.state.lights;if(ke===!0&&(Ae===!0||e!==me)){let t=e===me&&r.id===pe;et.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==et.numPlanes||v.numIntersection!==et.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=kt(r,t,i),se&&r.isNodeMaterial&&se.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(N.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==pe&&(pe=r.id,C=!0),v.needsLights){let e=L(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||me!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(M,`projectionMatrix`,e.projectionMatrix),T.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(M,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&T.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&T.setValue(M,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&T.setValue(M,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){T.setOptional(M,i,`bindMatrix`),T.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(M,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(T.setOptional(M,i,`batchingTexture`),T.setValue(M,`batchingTexture`,i._matricesTexture,He),T.setOptional(M,i,`batchingIdTexture`),T.setValue(M,`batchingIdTexture`,i._indirectTexture,He),T.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(M,`batchingColorTexture`,i._colorsTexture,He));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&it.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=uu()),C){if(T.setValue(M,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&Nt(E,w),a&&r.fog===!0&&Ye.refreshFogUniforms(E,a),Ye.refreshMaterialUniforms(E,r,Se,xe,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Uc.upload(M,At(v),E,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Uc.upload(M,At(v),E,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(M,`center`,i.center),T.setValue(M,`modelViewMatrix`,i.modelViewMatrix),T.setValue(M,`normalMatrix`,i.normalMatrix),T.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];lt.update(n,x),lt.bind(n,x)}}return x}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,de=t,fe=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest,N.viewport(he),N.scissor(ge),N.setScissorTest(_e),pe=-1;return}else if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest}else he.copy(Te).multiplyScalar(Se).floor(),ge.copy(Ee).multiplyScalar(Se).floor(),_e=De;if(n!==0&&(r=ce),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(he),N.scissor(ge),N.setScissorTest(_e),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}pe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s),!ze.textureFormatReadable(c)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ze.textureTypeReadable(l)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,st.convert(c),st.convert(l),a)}finally{let e=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s),!ze.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ze.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,d),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,st.convert(l),st.convert(u),0);let f=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,f);let p=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await nt(M,p,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,d),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.deleteBuffer(d),M.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=st.convert(t.format),_=st.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,le),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,ue);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){de=0,fe=0,j=null,N.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}},fu=`ayagawa_natsu_save_v1`,pu=`ayagawa_natsu_album_v1`;function mu(e){try{localStorage.setItem(pu,JSON.stringify(e))}catch{}}function hu(){try{let e=JSON.parse(localStorage.getItem(pu));return e&&e.diary?e:null}catch{return null}}function gu(){return{day:1,min:360,bugs:{},fish:{},friend:{},talkedToday:{},stamps:0,udon:0,money:150,caps:{},zukanReward:0,today:[],diary:[],flags:{}}}function _u(e){try{localStorage.setItem(fu,JSON.stringify(e))}catch{}}function vu(){try{let e=localStorage.getItem(fu);if(!e)return null;let t=JSON.parse(e);return typeof t.day==`number`?Object.assign(gu(),t):null}catch{return null}}function yu(){try{localStorage.removeItem(fu)}catch{}}function K(e,t){e.today.includes(t)||e.today.push(t)}function bu(e){return Object.keys(e.bugs).length}function xu(e){return Object.keys(e.fish).length}function Su(e){return Object.keys(e.caps).length}var Cu=[{id:`aburazemi`,name:`アブラゼミ`,rarity:1,spot:`tree`,time:[420,1080],color:9067051,size:.32,desc:`ジリジリジリ…あついこえでなく、なつのぬし。`},{id:`kumazemi`,name:`クマゼミ`,rarity:2,spot:`tree`,time:[360,720],color:1842204,size:.38,desc:`シャアシャアシャア! あさいちばんのおおごえ。`},{id:`niinii`,name:`ニイニイゼミ`,rarity:1,spot:`tree`,time:[400,1050],color:7827548,size:.22,desc:`チーー…と、ひかえめになく小さなセミ。`},{id:`higurashi`,name:`ヒグラシ`,rarity:2,spot:`tree`,time:[960,1170],color:10251071,size:.3,desc:`カナカナカナ…ゆうぐれのこえは、すこしせつない。`},{id:`kabuto`,name:`カブトムシ`,rarity:3,spot:`tree`,time:[1080,1290],time2:[360,470],color:3809296,size:.42,desc:`なつやすみの王さま。あさはやくか、よるにあらわれる。`},{id:`nokogiri`,name:`ノコギリクワガタ`,rarity:3,spot:`tree`,time:[1080,1290],color:4857360,size:.4,desc:`りっぱなあご! みつけたらしずかにちかづこう。`},{id:`kanabun`,name:`カナブン`,rarity:1,spot:`tree`,time:[420,1020],color:5601075,size:.22,desc:`ブーンととんできて、きのしるをなめている。`},{id:`oniyanma`,name:`オニヤンマ`,rarity:3,spot:`water`,time:[480,1020],color:2254404,size:.45,desc:`にほんさいだいのトンボ。かわのうえをパトロール中。`},{id:`shiokara`,name:`シオカラトンボ`,rarity:1,spot:`water`,time:[420,1080],color:8956620,size:.3,desc:`みずべのじょうれんさん。おすは青っぽい。`},{id:`ageha`,name:`アゲハチョウ`,rarity:2,spot:`grass`,time:[420,1020],color:14535748,size:.35,desc:`ひらひらまいながら、はなからはなへ。`},{id:`monshiro`,name:`モンシロチョウ`,rarity:1,spot:`grass`,time:[380,1e3],color:16119278,size:.25,desc:`はたけのちかくでよく見かける白いチョウ。`},{id:`suzumushi`,name:`スズムシ`,rarity:2,spot:`grass`,time:[1140,1290],color:3355460,size:.18,desc:`リーンリーン…よるの草むらのおんがくか。`},{id:`hotaru`,name:`ヘイケボタル`,rarity:2,spot:`river`,time:[1150,1290],days:[1,6],glow:!0,color:4478259,size:.16,desc:`8月はじめのよる、かわべでひかる。いまだけのきせき。`},{id:`tsukutsuku`,name:`ツクツクボウシ`,rarity:2,spot:`tree`,time:[420,1050],days:[15,31],color:5925706,size:.26,desc:`このこえが きこえたら、なつやすみは おりかえし。`},{id:`akiakane`,name:`アキアカネ`,rarity:2,spot:`grass`,time:[480,1080],days:[20,31],color:13386803,size:.28,desc:`あかとんぼ。なつのおわりに、やまから おりてくる。`}],wu=[{id:`oikawa`,name:`オイカワ`,rarity:1,zone:`river`,len:`12cm`,desc:`キラッとひかる、あやがわのにんきもの。`},{id:`funa`,name:`ギンブナ`,rarity:1,zone:`both`,len:`18cm`,desc:`どっしりかまえた、ため池のぬし気どり。`},{id:`koi`,name:`コイ`,rarity:2,zone:`river`,len:`45cm`,desc:`ひっぱるちからがすごい! うでがなる。`},{id:`dojo`,name:`ドジョウ`,rarity:1,zone:`river`,len:`10cm`,desc:`にゅるにゅる。たんぼのみぞにもいるらしい。`},{id:`namazu`,name:`ナマズ`,rarity:3,zone:`river`,time:[960,1290],len:`50cm`,desc:`ゆうがたからうごきだす、ひげのぬし。`},{id:`unagi`,name:`ウナギ`,rarity:3,zone:`river`,time:[1140,1290],len:`60cm`,desc:`よるのかわのたからもの。げんじいのあこがれ。`},{id:`tenagaebi`,name:`テナガエビ`,rarity:2,zone:`river`,len:`9cm`,desc:`ながいうでのエビ。いしのすきまがすみか。`},{id:`bass`,name:`ブラックバス`,rarity:2,zone:`pond`,len:`35cm`,desc:`ため池のあばれんぼう。ひきがつよい!`},{id:`bluegill`,name:`ブルーギル`,rarity:1,zone:`pond`,len:`15cm`,desc:`ため池ならどこにでもいる、げんきなやつ。`},{id:`medaka`,name:`メダカ`,rarity:2,zone:`pond`,len:`3cm`,desc:`ちいさなちいさな、すいめんのきらめき。`},{id:`ayu`,name:`アユ`,rarity:3,zone:`sawa`,len:`17cm`,desc:`つつみやまの たきつぼのぬし。てづかみでしか つかまえられん。しおやきは さいこう!`},{id:`ugui`,name:`ウグイ`,rarity:2,zone:`river`,weather:[`rain`,`storm`],len:`21cm`,desc:`あめの日にだけ うわずってくる。あめつりの あいぼう。`},{id:`donko`,name:`ドンコ`,rarity:2,zone:`river`,time:[1080,1290],weather:[`cloudy`,`rain`],len:`13cm`,desc:`くもりの よるに いしのかげから ぬっと でてくる。`},{id:`nushi`,name:`ぬしさま`,rarity:3,nushi:!0,zone:`pond`,time:[1020,1170],weather:[`sunny`,`cloudy`],flag:`nushiHint`,len:`88cm`,desc:`ほうじょういけの ぬし。じいちゃんと げんじいが おいつづけた、まぼろしの 大ゴイ。`}],Tu=[{id:`cider`,name:`サイダー`,color:5944552,w:26},{id:`mikan`,name:`みかん`,color:15765818,w:20},{id:`budo`,name:`ぶどう`,color:9067208,w:15},{id:`cola`,name:`コーラ`,color:8014376,w:13},{id:`melon`,name:`メロン`,color:6736220,w:10},{id:`ichigo`,name:`いちご`,color:15227506,w:8},{id:`olive`,name:`オリーブ`,color:9083466,w:6},{id:`kin`,name:`きんの王冠`,color:15777856,w:2}],Eu=[null,{weather:`sunny`,event:`hotaru`,note:`なつやすみ、はじまる`},{weather:`sunny`,event:`hotaru`},{weather:`cloudy`,event:`hotaru`},{weather:`sunny`,event:`hotaru`},{weather:`rain`,event:`hotaru`},{weather:`sunny`,event:`hotaru`,note:`ホタルはこよいまで…`},{weather:`sunny`},{weather:`cloudy`},{weather:`sunny`,event:`gakusai`,note:`しょうがっこうの なつまつり`},{weather:`rain`},{weather:`sunny`},{weather:`cloudy`},{weather:`sunny`,event:`obon`,note:`おぼんのいりび`},{weather:`sunny`,event:`obon`,note:`おはかまいり`},{weather:`cloudy`,event:`obon`,note:`おぼんのあけび`},{weather:`rain`},{weather:`sunny`},{weather:`sunny`},{weather:`cloudy`},{weather:`storm`,event:`typhoon`,note:`たいふうがくる!`},{weather:`sunny`,note:`たいふういっか`},{weather:`sunny`},{weather:`cloudy`},{weather:`sunny`,event:`matsuriEve`,note:`あすはまつり`},{weather:`sunny`,event:`matsuri`,note:`滝宮の夏まつり!`},{weather:`sunny`},{weather:`rain`},{weather:`cloudy`},{weather:`sunny`},{weather:`sunny`},{weather:`sunny`,event:`last`,note:`なつやすみ、さいごのひ`}],Du={1:`まちを あるいてみよう。かどの みちを いくと 川に でる`,2:`あさ6時すぎ、じんじゃの ひろばで ラジオたいそう (スタンプ)`,3:`くもりの日は 虫とりびより。木を Eで しらべてみよう`,4:`ため池の げんじいに あいさつ。つりざおを かしてくれるかも`,5:`雨の日の 川では ウグイが つれるらしい`,6:`ホタルは こよいまで。よる、かわべに いってみよう`,7:`ゆうびんうけに なにか とどいとるかも`,8:`だがしやで ラムネ。王冠あつめと ガチャも わすれずに`,9:`きょうは 小学校の なつまつり! ゆうがた 校庭へ`,10:`雨の日。ばあちゃんと はなしたり、2かいの コレクションを ながめよう`,11:`はれた ひるまは、はしの まんなかから 川に とびこめる`,12:`かわらで みずきり しょうぶ。じこベストを のばそう`,13:`ゆうがた、いえのまえで ばあちゃんと むかえびを たく`,14:`おぼんの まんなか。ばあちゃんに はなしかけると ええはなしが きける`,15:`ゆうがた、おくりびで ご先祖さまを みおくる`,16:`ツクツクボウシが なきはじめた。あたらしい セミを ずかんへ`,17:`げんじいが なにか おしえたそうに しとる (ため池)`,18:`ゆうがたの ため池に「ぬしさま」の かげが 出るらしい`,19:`つつみやまへ。たきつぼで アユの てづかみに ちょうせん`,20:`たいふうの日。そとは あぶない。いえで ばあちゃんと すごそう`,21:`たいふういっかの あおぞら。みはらしだいから けしきを みよう`,22:`ことでんに のって 高松の まちへ いってみよう`,23:`たきつぼの アユ、きょうは なんびき つかまえられる?`,24:`あすは まつり! じんじゃの じゅんびを のぞいてみよう`,25:`よるは 滝宮の なつまつり! じんじゃへ くりだそう`,26:`まつりの あとの じんじゃで、おみくじを ひいてみよう`,27:`ずかんの あなうめ。まだ見ぬ 虫や さかなを さがそう`,28:`ケンタや ミナと あそべる日は のこりわずか。こえを かけよう`,29:`こころのこりは ないか、すきな ばしょを まわっておこう`,30:`さいごの まえの日。ゆうがたの まちを ゆっくり あるこう`,31:`きょうが さいごの日。みんなに おわかれを いいにいこう`},Ou=[`土`,`日`,`月`,`火`,`水`,`木`,`金`];function ku(e){return Ou[(e-1)%7]}function Au(e){return Eu[Math.min(e,31)]}var ju={sunny:`はれ`,cloudy:`くもり`,rain:`あめ`,storm:`たいふう`};function Mu(e){return e<600?`morning`:e<960?`day`:e<1140?`evening`:`night`}var Nu=1290,Pu=1.7,Fu=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)},Iu=e=>Au(e).weather===`sunny`&&Fu(e)<.34,Lu=class{constructor(e){this.state=e,this.onDayEnd=null,this.rate=1}tick(e){let t=this.state;if(t.min>=1290)return;let n=t.min>=1e3&&t.min<1170?.62:1;t.min+=e*Pu*this.rate*n,t.min>=1290&&(t.min=Nu,this.onDayEnd&&this.onDayEnd())}get min(){return this.state.min}get day(){return this.state.day}get phase(){return Mu(this.state.min)}get yudachi(){return Iu(this.state.day)&&this.state.min>=855&&this.state.min<895}get rainbow(){return Iu(this.state.day)&&this.state.min>=895&&this.state.min<945}get weather(){return this.yudachi?`rain`:Au(this.state.day).weather}get event(){return Au(this.state.day).event||null}fmt(){let e=Math.floor(this.state.min/60),t=Math.floor(this.state.min%60);return`${e}:${String(t).padStart(2,`0`)}`}get sunT(){return(this.state.min-300)/900}},Ru=(e,t={})=>new Ga({color:e,flatShading:!0,...t}),q=(e,t={})=>new Ga({color:e,...t});function J(e,t,n=0,r=0,i=0){let a=new H(e,t);return a.position.set(n,r,i),a}function zu(t,n,r=[1,1]){let i=document.createElement(`canvas`);i.width=i.height=t,n(i.getContext(`2d`),t);let a=new Ji(i);return a.wrapS=a.wrapT=e,a.repeat.set(r[0],r[1]),a.colorSpace=Ve,a}var Bu=new Map,Vu=(e,t)=>(Bu.has(e)||Bu.set(e,t()),Bu.get(e)),Hu=(e=`#4a5560`)=>Vu(`kawara|${e}`,()=>zu(64,(t,n)=>{t.fillStyle=e,t.fillRect(0,0,n,n);for(let e=0;e<n;e+=8){t.fillStyle=`rgba(0,0,0,0.28)`,t.fillRect(0,e+6,n,2),t.fillStyle=`rgba(255,255,255,0.10)`,t.fillRect(0,e,n,1);for(let r=e/8%2?8:0;r<n;r+=16)t.fillStyle=`rgba(0,0,0,0.12)`,t.fillRect(r,e,1,8)}},[3,2])),Uu=(e=`#7a5a38`)=>Vu(`wood|${e}`,()=>zu(64,(t,n)=>{t.fillStyle=e,t.fillRect(0,0,n,n);for(let e=0;e<n;e+=6)t.fillStyle=`rgba(30,15,5,${.1+(e%12?.06:.16)})`,t.fillRect(e,0,2,n);for(let e=0;e<26;e++)t.fillStyle=`rgba(35,18,6,0.25)`,t.fillRect(Math.random()*n,Math.random()*n,1,3+Math.random()*8)},[2,1])),Wu=()=>Vu(`plaster`,()=>zu(64,(e,t)=>{e.fillStyle=`#f1e7d0`,e.fillRect(0,0,t,t);for(let n=0;n<240;n++)e.fillStyle=`rgba(150,130,95,${Math.random()*.12})`,e.fillRect(Math.random()*t,Math.random()*t,2,2)})),Gu=()=>Vu(`grass`,()=>zu(256,(e,t)=>{e.fillStyle=`#6d9646`,e.fillRect(0,0,t,t);for(let n=0;n<90;n++){let n=Math.random()*t,r=Math.random()*t;e.fillStyle=Math.random()<.5?`rgba(70,105,45,0.25)`:`rgba(160,150,90,0.14)`,e.beginPath(),e.arc(n,r,6+Math.random()*16,0,7),e.fill()}for(let n=0;n<6500;n++){let n=105+Math.random()*85;e.fillStyle=`rgba(${n*.52},${n},${n*.34},0.55)`,e.fillRect(Math.random()*t,Math.random()*t,1,2+Math.random()*3)}for(let n=0;n<260;n++)e.fillStyle=`rgba(150,190,95,0.35)`,e.fillRect(Math.random()*t,Math.random()*t,2,2)},[40,40])),Ku=()=>zu(128,(e,t)=>{e.fillStyle=`#3f7e94`,e.fillRect(0,0,t,t);for(let n=0;n<26;n++)e.fillStyle=`rgba(18,58,78,0.18)`,e.beginPath(),e.arc(Math.random()*t,Math.random()*t,6+Math.random()*14,0,7),e.fill();for(let n=0;n<34;n++){let r=Math.random()*t;e.strokeStyle=`rgba(220,240,250,${.06+Math.random()*.12})`,e.lineWidth=1+Math.random()*1.2,e.beginPath(),e.moveTo(r,0);for(let i=0;i<=t;i+=14)e.lineTo(r+Math.sin(i*.18+n*2.1)*3.5,i);e.stroke()}});function qu(e=!1,t=0){let n=new B,r=e=>(Math.sin(t*127.1+e*311.7)*43758.5%1+1)%1,i=e?2.6:.95+r(1)*.6,a=2.6*i,o=J(new W(.16*i,.34*i,a,7),q(6112556),0,a/2,0);o.rotation.z=(r(2)-.5)*.1,o.castShadow=!0,n.add(o),n.userData.camBlock={r:(e?2.5:1.5)*i,y0:a*.5,y1:a+2.4*i};for(let r=0;r<(e?3:2);r++){let e=J(new W(.05*i,.09*i,1.1*i,5),q(6112556),Math.sin(r*2.4+t)*.5*i,a*(.62+r*.14),Math.cos(r*2.4+t)*.5*i);e.rotation.set(Math.cos(r*2.4+t)*.8,0,-Math.sin(r*2.4+t)*.8),n.add(e)}let s=.27+r(3)*.05,c=e?9:5;for(let o=0;o<c;o++){let l=(e?2.1:1.15)*i*(1-o/c*.35)*(.75+r(o+4)*.4),u=new V().setHSL(s,.5+r(o+9)*.14,.19+o/c*.13+r(o+5)*.05),d=J(new Aa(l,1),q(u),Math.sin(t+o*2.4)*l*.75,a*.85+o%3*.8*i+l*.4,Math.cos(t*2+o*1.7)*l*.75);d.scale.y=.82,d.castShadow=!0,n.add(d)}return n.userData.radius=.5*i,n}function Ju(e=0){let t=new B,n=1+e%3*.25,r=J(new W(.12*n,.26*n,3.4*n,6),q(5521450),0,1.7*n,0);r.rotation.z=Math.sin(e)*.12,r.castShadow=!0,t.add(r),t.userData.camBlock={r:1.6*n,y0:1.6*n,y1:6.2*n};for(let e=0;e<4;e++){let r=J(new ea((1.5-e*.28)*n,1.3*n,8),q(new V().setHSL(.32,.35,.2+e*.03)),0,(2.4+e*1.05)*n,0);r.castShadow=!0,t.add(r)}return t}function Yu(e=0){let t=new B,n=t=>(Math.sin(e*91.3+t*47.7)*4375.85%1+1)%1,r=7+n(1)*3,i=J(new W(.09,.12,r,6),q(new V().setHSL(.24,.4,.32+n(2)*.1)),0,r/2,0);i.rotation.z=(n(3)-.5)*.16,t.add(i);for(let e=1;e<5;e++)t.add(J(new Na(.105,.015,4,8),q(3824170),0,r/5*e,0)).children.at(-1).rotation.x=Math.PI/2;for(let e=0;e<3;e++){let i=J(new Aa(.7+n(e+4)*.4,0),q(5933628),(n(e+5)-.5)*1.4,r-e*.9,(n(e+6)-.5)*1.4);i.scale.y=.5,t.add(i)}return t}function Xu({w:e=8,d:t=6,h:n=3,roofC:r=`#454f5a`,engawa:i=!0,doorSide:a=1}={}){let o=new B,s=new Ga({map:Wu()}),c=new Ga({map:Uu()}),l=new Ga({map:Hu(r)});o.add(J(new U(e+.3,.4,t+.3),Ru(9143672),0,.2,0));let u=J(new U(e,n*.55,t),c,0,.4+n*.275,0);u.castShadow=!0,o.add(u);let d=J(new U(e,n*.45,t),s,0,.4+n*.775,0);d.castShadow=!0,o.add(d);for(let r of[-1,1])for(let i of[-1,1])o.add(J(new U(.22,n,.22),c,e/2*r,.4+n/2,t/2*i));let f=1.1,p=1.6+e*.08,m=J(new ea(1,1,4),l,0,.4+n+p/2,0);m.rotation.y=Math.PI/4,m.scale.set((e/2+f)*1.42,p,(t/2+f)*1.42),m.castShadow=!0,o.add(m),o.add(J(new U(e+f*1.6,.14,t+f*1.6),Ru(3025444),0,.4+n+.02,0)),o.add(J(new U(e*.5,.22,.5),l,0,.4+n+p-.06,0));let h=a*(t/2+.02),g=q(16117725),_=q(4863268);o.add(J(new U(1.5,1.9,.08),_,e*.22,1.35,h)),o.add(J(new U(1.3,1.7,.06),g,e*.22,1.35,h+a*.02));for(let t of[-e*.24,-e*.02])o.add(J(new U(1.3,1.1,.08),_,t,1.7,h)),o.add(J(new U(1.14,.95,.06),g,t,1.7,h+a*.02));if(i){o.add(J(new U(e*.9,.14,1.2),c,0,.55,a*(t/2+.65)));for(let n of[-1,0,1])o.add(J(new U(.12,.5,.12),c,n*e*.4,.25,a*(t/2+1.1)))}return o}function Zu(e=1){let t=new B,n=q(11876140);for(let r of[-1,1]){let i=J(new W(.2*e,.27*e,4*e,10),n,r*1.8*e,2*e,0);i.castShadow=!0,t.add(i)}let r=J(new U(5.6*e,.34*e,.42*e),q(3025448),0,4.25*e,0);r.castShadow=!0,t.add(r);let i=J(new U(5.3*e,.22*e,.38*e),n,0,3.98*e,0);return t.add(i),t.add(J(new U(4.2*e,.26*e,.3*e),n,0,3.2*e,0)),t.add(J(new U(.16*e,.7*e,.24*e),n,0,3.6*e,0)),t}function Qu(){let e=new B,t=new Ga({map:Hu(`#39463f`)}),n=new Ga({map:Uu(`#6a4a2e`)});e.add(J(new U(9.4,1,7.4),Ru(9668988),0,.5,0));let r=J(new U(7.5,3,5.5),n,0,2.5,0);r.castShadow=!0,e.add(r);for(let t of[-1,-.33,.33,1])e.add(J(new U(.26,3.2,.26),q(5257764),t*3.6,2.5,2.7));let i=J(new ea(1,1,4),t,0,5.3,0);return i.rotation.y=Math.PI/4,i.scale.set(7.4,2.6,5.6),i.castShadow=!0,e.add(i),e.add(J(new U(4,.3,.6),t,0,6.4,0)),e.add(J(new U(2.6,.6,2.2),Ru(8879472),0,.8,4)),e.add(J(new U(2,1.7,.12),q(4140830),0,2.1,2.79)),e.add(J(new W(.09,.09,2.4,6),q(13218688),0,3.6,2.85)).children.at(-1).rotation.z=Math.PI/2,e.add(J(new Ma(.16,8,6),q(14201402),0,3.2,2.9)),e}function $u(){let e=new B,t=Ru(9079426);return e.add(J(new W(.3,.36,.18,8),t,0,.09,0)),e.add(J(new W(.14,.2,1.1,6),t,0,.7,0)),e.add(J(new U(.62,.14,.62),t,0,1.32,0)),e.add(J(new U(.48,.44,.48),Ru(10132112),0,1.6,0)),e.add(J(new ea(.55,.42,4),t,0,2.05,0)).children.at(-1).rotation.y=Math.PI/4,e.add(J(new Ma(.12,6,5),t,0,2.34,0)),e}function ed(){let e=new B,t=new Ga({map:Uu(`#8a6538`)}),n=J(new U(4.4,.28,16),t,0,.3,0);n.castShadow=!0,e.add(n);for(let t=-7;t<=7;t++)e.add(J(new U(4.4,.06,.5),Ru(7163176),0,.46,t*1.05));for(let n of[-1,1]){e.add(J(new U(.14,.1,16),t,n*2.05,1.05,0));for(let r=-3;r<=3;r++)e.add(J(new U(.13,.75,.13),t,n*2.05,.72,r*2.4));for(let r of[-6,0,6])e.add(J(new W(.16,.18,1.6,6),t,n*1.9,-.4,r))}return e}function td(e=0){let t=new B,n=1.5+e*13%10/18;t.add(J(new W(.035,.05,n,5),q(4880948),0,n/2,0));for(let e=0;e<3;e++){let r=J(new Aa(.16,0),q(5607488),Math.sin(e*2.2)*.22,n*(.35+e*.2),Math.cos(e*2.2)*.15);r.scale.set(1.4,.35,.9),t.add(r)}let r=new B;r.position.set(0,n,.06);for(let e=0;e<12;e++){let t=J(new U(.1,.02,.26),q(16173106),Math.sin(e/12*7)*.32,0,Math.cos(e/12*7)*.32);t.rotation.y=e/12*Math.PI*2,r.add(t)}return r.add(J(new W(.2,.2,.09,10),q(5519388))),r.rotation.x=Math.PI/2-.45,t.add(r),t}function nd(e){let t=new ea(.2,.85,5);return t.translate(0,.42,0),new ji(t,q(5213998),e)}function rd(e){let t=new B,n=q(8020552),r=Math.max(1,Math.round(e/2.2));for(let i=0;i<=r;i++)t.add(J(new W(.05,.065,.95,5),n,-e/2+i*e/r,.47,0));return t.add(J(new U(e,.06,.05),n,0,.78,0)),t.add(J(new U(e,.06,.05),n,0,.42,0)),t}function id(){let e=new B,t=q(10123850);e.add(J(new U(1.8,.08,.5),t,0,.5,0)),e.add(J(new U(1.8,.38,.08),t,0,.88,-.24));for(let t of[-.7,.7])e.add(J(new U(.1,.5,.42),q(7829360),t,.25,0));return e}function ad(){let e=new B;e.add(J(new U(1.4,.35,.9),Ru(9078138),0,.17,0));let t=J(new U(.85,1.7,.4),Ru(7828074),0,1.15,0);return t.castShadow=!0,e.add(t),e.add(J(new U(.55,1.2,.03),q(5920076),0,1.2,.21)),e}function od(e=0){let t=new B,n=t=>(Math.sin(e*57.3+t*213.7)*43758.5%1+1)%1,r=J(new W(.09,.16,1.1,6),q(6965806),0,.55,0);r.castShadow=!0,t.add(r);let i=J(new Aa(1.05+n(1)*.25,1),q(new V().setHSL(.3,.45,.27+n(2)*.05)),0,1.75,0);i.scale.y=.9,i.castShadow=!0,t.add(i),t.userData.camBlock={r:1.35,y0:.9,y1:2.9};for(let e=0;e<6;e++){let r=n(e+3)*Math.PI*2,i=.4+n(e+9)*2.2;t.add(J(new Ma(.09,6,5),q(12729134),Math.cos(r)*Math.sin(i)*1,1.75+Math.cos(i)*.75,Math.sin(r)*Math.sin(i)*1))}return t}function sd(){let e=new B;for(let t=0;t<10;t++){let n=t/10*Math.PI*1.2-.6,r=J(new na(.4,0),Ru(9077624),Math.cos(n)*1.6,.25,Math.sin(n)*1.1);r.scale.set(1,.7,.8),r.rotation.y=t*2.1,e.add(r)}e.add(J(new U(2.2,.3,1.6),Ru(7827562),0,.12,0));let t=J(new W(.34,.24,.5,8,1,!0),Ru(10119754,{side:2}),1.3,.24,.9);return t.rotation.z=.8,e.add(t),e.add(J(new W(.26,.2,.34,7,1,!0),Ru(11041362,{side:2}),-1.1,.16,1.1)),e.add(J(new U(.08,1,.08),q(8020552),-1.5,.5,.4)),e.add(J(new U(.9,.5,.06),q(15261640),-1.5,1.1,.4)),e}function cd(){let e=new B,t=q(9407876),n=J(new W(.13,.19,8.5,7),t,0,4.25,0);n.castShadow=!0,e.add(n),e.add(J(new U(2.6,.12,.12),t,0,7.9,0)),e.add(J(new U(1.8,.1,.1),t,0,7.2,0));for(let t of[-.9,.9])e.add(J(new W(.06,.06,.25,5),q(15262936),t,8.05,0));let r=J(new W(.3,.3,.8,8),t,.35,6.6,0);return e.add(r),e}function ld(e=6){let t=new B;for(let n=0;n<e;n+=.75)for(let r=0;r<2;r++){let i=J(new na(.42,0),Ru(9275516),n-e/2+r%2*.3,.3+r*.5,0);i.scale.set(1,.72,.7),i.rotation.y=n*2+r,i.castShadow=!0,t.add(i)}return t}function ud(){let e=new B,t=J(new U(1.1,1.9,.8),q(14212578),0,.95,0);t.castShadow=!0,e.add(t),e.add(J(new U(.95,.85,.05),q(3493995),0,1.45,.41));for(let t=0;t<4;t++)e.add(J(new U(.16,.3,.06),q([14174778,3832536,15251514,4892760][t]),-.32+t*.21,1.5,.44));return e.add(J(new U(.5,.3,.05),q(2763306),.2,.55,.41)),e}function dd(){let e=new B,t=q(12597802);return e.add(J(new W(.16,.16,.9,8),t,0,.45,0)),e.add(J(new W(.34,.34,.8,10),t,0,1.25,0)),e.add(J(new Ma(.34,10,6,0,Math.PI*2,0,Math.PI/2),t,0,1.65,0)),e.add(J(new U(.4,.05,.1),q(2763306),0,1.5,.3)),e}function fd(){let e=new B;e.add(J(new W(.05,.05,2.4,6),q(8947840),0,1.2,0));let t=J(new W(.42,.42,.05,12),q(15262416),0,2.3,0);t.rotation.x=Math.PI/2,e.add(t),e.add(J(new W(.5,.55,.2,8),Ru(7829360),0,.1,0));let n=J(new U(1.8,.08,.45),q(10123850),1.6,.5,0);e.add(n);for(let t of[.9,2.3])e.add(J(new U(.1,.5,.4),q(7829360),t,.25,0));return e}function pd(e=14172987){let t=new B,n=new Ga({map:Uu()});t.add(J(new U(2.6,1,1.4),n,0,.5,0)),t.add(J(new U(2.7,.08,1.5),q(15390896),0,1.04,0));for(let e of[-1,1])t.add(J(new W(.05,.05,2.4,5),n,e*1.2,1.2,0));let r=J(new U(3,.1,2),q(e),0,2.45,0);r.rotation.z=.06,t.add(r);let i=J(new U(3.02,.35,2.02),q(16117728),0,2.25,0);return t.add(i),t}function md(){let e=new B,t=J(new Ma(.24,10,8),new Ga({color:16758861,emissive:14248727,emissiveIntensity:0}));return t.scale.y=1.15,t.userData.lantern=!0,e.add(t),e.add(J(new W(.11,.13,.07,8),q(2236962),0,.28,0)),e.add(J(new W(.13,.11,.07,8),q(2236962),0,-.28,0)),e}function hd(){let e=new B;for(let t=0;t<2;t++){let n=new B;n.position.x=t*9.6;let r=J(new U(9,2.4,2.4),q(16118504),0,2,0);r.castShadow=!0,n.add(r),n.add(J(new U(9.04,.7,2.44),q(14656826),0,1.5,0)),n.add(J(new U(8.6,.35,2.2),q(9078910),0,3.35,0));for(let e=-1;e<=1;e++)n.add(J(new U(1.6,.75,2.46),q(4218991),e*2.7,2.5,0));for(let e of[-3.2,3.2])n.add(J(new W(.4,.4,2.2,8),q(3355443),e,.5,0)).children.at(-1).rotation.x=Math.PI/2;e.add(n)}return e}function gd(){let e=new B;e.add(J(new U(16,2.4,3.4),Ru(11709342),0,-.29999999999999993,0)),e.add(J(new U(16,.06,.3),q(15259722),0,.93,1.4));let t=Xu({w:6,d:3.4,h:2.6,roofC:`#6b4438`,engawa:!1});t.position.set(0,.9,.2),t.scale.setScalar(.9),e.add(t);let n=J(new U(2.6,.8,.08),q(16118506),5.5,2.2,1.2);return e.add(n),e.add(J(new U(.1,1.8,.1),q(6710880),5.5,1,1.2)),e}function _d(e,{bg:t=`#ffffff`,fg:n=`#333333`,w:r=6,h:i=1.4}={}){let a=i/r,o=zu(256,(r,i)=>{r.fillStyle=t,r.fillRect(0,0,i,i),r.fillStyle=n,r.font=`bold ${Math.floor(i*a*.72)}px sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,i/2,i/2,i*.94)});return o.repeat.set(1,a),o.offset.set(0,(1-a)/2),new H(new ja(r,i),new Ga({map:o}))}function vd(){let e=new B,t=7.5,n=J(new U(34,t,16),q(15919832),0,t/2,0);n.castShadow=!0,n.receiveShadow=!0,e.add(n),e.add(J(new U(34.6,.7,16.6),q(14208952),0,7.85,0)),e.add(J(new U(9,4.2,.2),q(10471640,{emissive:2242624}),0,2.1,8.06)),e.add(J(new U(10,.5,2.4),q(14174858),0,4.6,9.1));for(let t of[-4.6,4.6])e.add(J(new U(.24,4.4,.24),q(8947840),t,2.2,10.1));for(let t of[-1,1])e.add(J(new U(9,1.6,.16),q(11060432),t*11.5,3.2,8.05));let r=_d(`あやがわモール`,{bg:`#d84a8a`,fg:`#ffffff`,w:13,h:2});return r.position.set(0,t-1.4,8.12),e.add(r),e.add(J(new U(4,1.4,3),q(12104872),-9,8.9,-2)),e.add(J(new U(2.6,1,2.4),q(12894388),7,8.7,3)),e}function yd(){let e=new B,t=6.4,n=J(new U(13,t,8),q(15659244),0,t/2,0);n.castShadow=!0,n.receiveShadow=!0,e.add(n),e.add(J(new U(13.4,.5,8.4),q(13159620),0,6.65,0));for(let t of[2.1,4.7])for(let n=-2;n<=2;n++)t<3&&n===0||e.add(J(new U(1.6,1.1,.12),q(9417924),n*2.4,t,4.05));e.add(J(new U(2.2,2.4,.16),q(5599360),0,1.2,4.06)),e.add(J(new U(3.6,.3,1.8),q(14212308),0,2.6,4.8));let r=_d(`あやがわちょう やくば`,{bg:`#f4f4f0`,fg:`#445544`,w:8,h:1.3});return r.position.set(0,t-.9,4.1),e.add(r),e}function bd(){let e=new B,t=5.6,n=J(new U(17,t,5.2),q(15788502),0,t/2,0);n.castShadow=!0,n.receiveShadow=!0,e.add(n),e.add(J(new U(17.5,.5,5.7),q(11578008),0,5.85,0));for(let t of[1.9,4.2])for(let n=-3;n<=3;n++)t<3&&n===0||e.add(J(new U(1.5,1.2,.12),q(10272976),n*2.3,t,2.65));e.add(J(new U(2.4,2.5,.16),q(6981013),0,1.25,2.66)),e.add(J(new U(3.4,.28,1.6),q(14209728),0,2.7,3.3)),e.add(J(new U(1.6,1.5,.6),q(15262416),0,6.6,0));let r=J(new W(.55,.55,.08,16),q(16448244),0,6.6499999999999995,.32);r.rotation.x=Math.PI/2,e.add(r);let i=_d(`あやがわ しょうがっこう`,{bg:`#f4f2ea`,fg:`#3f4a55`,w:8,h:1.1});return i.position.set(0,t-.85,2.7),e.add(i),e}function xd(){let e=new B;e.add(J(new U(4.4,.24,3.4),q(8018494),0,.12,0));for(let t=0;t<3;t++){let n=-1+t*1;e.add(J(new U(3.9,.2,.52),q(9070664),0,.28,n));for(let r=0;r<5;r++){let i=-1.6+r*.8,a=J(new ea(.24,.44,5),q(t===2?4885050:4160053),i,.55,n);a.castShadow=!0,e.add(a),t===1&&r%2==0&&e.add(J(new Ma(.09,6,5),q(14172971),i+.14,.46,n+.14))}}for(let t of[-1.5,-.1,1.3])e.add(J(new W(.03,.03,1.5,4),q(10127974),t,.85,0));return e}function Sd(e=13685976){let t=new B,n=J(new U(3.6,.8,1.7),q(e),0,.75,0);n.castShadow=!0,t.add(n),t.add(J(new U(2,.65,1.5),q(e),-.2,1.45,0)),t.add(J(new U(1.9,.5,1.54),q(5267568),-.2,1.42,0));for(let e of[-1.2,1.2]){let n=J(new W(.32,.32,1.8,8),q(2763306),e,.34,0);n.rotation.x=Math.PI/2,t.add(n)}return t}function Cd({body:e=4491468,head:t=15977380,hat:n=null,hair:r=2760728,scale:i=1,elder:a=!1}={}){let o=new B,s={},c=q(t),l=J(new Qi(.34,.42,4,10),q(e),0,.95,0);l.castShadow=!0,o.add(l),s.body=l;let u=J(new Ma(.4,14,12),c,0,1.72,0);u.scale.set(1,.95,.95),u.castShadow=!0,o.add(u),s.head=u;let d=J(new Ma(.42,14,10,0,Math.PI*2,0,Math.PI*.62),q(r),0,1.76,-.02);if(o.add(d),n!=null){o.add(J(new Ma(.43,12,8,0,Math.PI*2,0,Math.PI*.5),q(n),0,1.84,0));let e=J(new W(.55,.58,.04,14),q(n),0,1.88,.05);o.add(e)}let f=q(4207658);for(let e of[-1,1]){if(a){let t=J(new Na(.062,.016,5,10,Math.PI*.75),f,e*.16,1.665,.335);t.rotation.z=Math.PI*.125,o.add(t)}else o.add(J(new Ma(.052,8,6),f,e*.16,1.69,.335)),o.add(J(new Ma(.016,5,4),q(16777215),e*.16+.018,1.705,.378));o.add(J(new Ma(.042,6,5),q(16037020),e*.245,1.615,.295))}let p=J(new Na(.055,.014,5,10,Math.PI*.8),f,0,1.6,.345);p.rotation.z=Math.PI+Math.PI*.1,o.add(p);let m=(e,t,n,r,i)=>{let a=new Qi(e,t,3,8);a.translate(0,-t/2,0);let s=J(a,q(n),r,i,0);return s.castShadow=!0,o.add(s),s};return s.armL=m(.1,.42,t,-.42,1.3),s.armR=m(.1,.42,t,.42,1.3),s.legL=m(.12,.4,3820126,-.16,.52),s.legR=m(.12,.4,3820126,.16,.52),o.scale.setScalar(i),{group:o,parts:s}}function wd(e){let t=new B,n=e.size;if(e.spot===`grass`){let r=new U(n*1.6,.02,n*1.2);r.translate(n*.8,0,0);let i=J(r,q(e.color),0,0,0);i.rotation.y=Math.PI;let a=J(r.clone(),q(e.color));t.add(i,a),t.userData.wings=[i,a],t.add(J(new Qi(.035,n*.8,3,6),q(3355443)).rotateX(Math.PI/2))}else if(e.spot===`water`){t.add(J(new Qi(.035,n*1.7,3,6),q(e.color)).rotateX(Math.PI/2));let r=new Ga({color:16777215,transparent:!0,opacity:.45});t.add(J(new U(n*1.7,.02,.14),r,0,.03,-n*.3)),t.add(J(new U(n*1.5,.02,.14),r,0,.05,n*.1))}else{let r=J(new Ma(n*.62,8,6),e.glow?new Ga({color:e.color,emissive:11206485,emissiveIntensity:.9}):q(e.color));r.scale.set(.85,.5,1.25),t.add(r),e.id===`kabuto`&&t.add(J(new W(.02,.03,n,4),q(2757896),0,n*.35,-n*.85)),e.id===`nokogiri`&&(t.add(J(new U(.04,.04,n*.6),q(2757896),-n*.2,0,-n*.9)),t.add(J(new U(.04,.04,n*.6),q(2757896),n*.2,0,-n*.9)))}return t}function Td(e){let t=new B,n=J(new W(.07,.09,2,6),q(8020552),0,1,0);return n.castShadow=!0,t.add(n),e.forEach((e,n)=>{let r=1.7,i=.4,a=zu(128,(t,n)=>{t.fillStyle=`#efe6ce`,t.fillRect(0,0,n,n),t.fillStyle=`#4a3a28`,t.font=`bold ${Math.floor(n*.3)}px sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(e.text,n/2,n/2,n*.92)});a.repeat.set(1,i/r),a.offset.set(0,(1-i/r)/2);let o=new Ga({map:a}),s=1.75-n*.5,c=J(new U(r,i,.06),o,(e.side||1)*.45,s,0);c.castShadow=!0,t.add(c);let l=J(new ea(i/2*1.05,.32,4),q(15722190),(e.side||1)*1.44,s,0);l.rotation.z=(e.side||1)*-Math.PI/2,l.rotation.y=Math.PI/4,t.add(l)}),t}function Ed(){let e=new B,t=new Ga({map:Uu(`#8a6a44`)}),n=new Ga({map:Uu(`#6e5236`)});for(let[t,r,i]of[[-1.1,-.9,.06],[1.1,-.9,-.04],[-1.1,.9,.03],[1.1,.9,-.06]]){let a=J(new U(.14,1.9,.14),n,t,.95,r);a.rotation.z=i,a.castShadow=!0,e.add(a)}for(let r=0;r<5;r++){let i=J(new U(.5,1.5+r%2*.2,.05),r%2?t:n,-1.09,.8,-.85+r*.44);i.rotation.x=(r%3-1)*.03,e.add(i)}for(let r=0;r<4;r++){let i=J(new U(.55,1.4,.05),r%2?n:t,-.9+r*.55,.75,-.92);i.rotation.y=Math.PI/2+(r%2?.04:-.05),e.add(i)}let r=J(new U(2.9,.06,2.5),q(9081496),0,1.95,0);r.rotation.z=.12,r.castShadow=!0,e.add(r);for(let t=0;t<6;t++){let n=J(new U(2.9,.02,.06),q(7765636),0,1.99+t*.001,-1.05+t*.42);n.rotation.z=.12,e.add(n)}e.add(J(new U(.7,.5,.5),t,.2,.25,.1)),e.add(J(new W(.09,.09,.14,8),q(12103840),.05,.57,.05)),e.add(J(new W(.07,.07,.2,8),q(8960204,{transparent:!0,opacity:.7}),.4,.6,.2));let i=zu(128,(e,t)=>{e.fillStyle=`#d8cfb0`,e.fillRect(0,0,t,t),e.fillStyle=`#a03428`,e.font=`bold ${Math.floor(t*.17)}px sans-serif`,e.textAlign=`center`,e.fillText(`たちいり`,t/2,t*.42),e.fillText(`きんし!!`,t/2,t*.62)}),a=J(new ja(.8,.8),new Ga({map:i}),1.15,.9,1);return a.rotation.y=.4,e.add(a),e}function Dd(e=0){let t=new B,n=Ru(9078140),r=Ru(7828074);t.add(J(new U(.9,.22,.9),r,0,.11,0)),t.add(J(new U(.62,.3,.62),n,0,.35,0));let i=J(new U(.34,1+e%3*.12,.34),n,0,1,0);i.castShadow=!0,t.add(i);for(let e of[-.26,.26])t.add(J(new W(.05,.04,.16,6),r,e,.55,.28));return t}function Od(){let e=new B,t=new Ga({map:Uu(`#8a6a44`)}),n=J(new U(4.6,.18,3.2),t,0,.09,0);n.receiveShadow=!0,e.add(n);for(let n=0;n<5;n++)e.add(J(new U(.1,.9,.1),t,-2.1+n*1.05,.55,-1.5));e.add(J(new U(4.5,.1,.1),t,0,.95,-1.5)),e.add(J(new U(4.5,.08,.08),t,0,.6,-1.5));let r=id();return r.position.set(.4,.16,.8),r.rotation.y=Math.PI,e.add(r),e}function kd(e){let t=new B,n=(e,n,r,i,a)=>{let o=new H(e,n);return o.position.set(r,-80+i,a),t.add(o),o},r=new H(new U(40,36,44),new ci({color:1709072,side:1,fog:!1}));r.position.set(0,-72,6),t.add(r);let i=new Ga({map:Uu(`#6b4e30`)}),a=new Ga({map:Uu(`#4e3820`)}),o=q(15787724),s=q(11055736),c=q(12042118);n(new U(18.8,.3,9.5),i,0,-.15,0);for(let e=0;e<3;e++)for(let t=0;t<2;t++)n(new U(1.95,.06,4),(e+t)%2?s:c,-1.85+e*2.08,.03,-2.05+t*4.1);for(let e=0;e<2;e++)n(new U(2.55,.06,4.6),e%2?s:c,4.95+e*2.6,.03,-1.85);n(new U(5.4,.09,2.9),q(6971992),6.3,.05,2.95),n(new U(5.4,.14,.22),a,6.3,.1,1.42),n(new U(18.8,6,.3),o,0,3,-4.4),n(new U(.3,6,9.5),o,-9.25,3,0),n(new U(.3,6,9.5),o,9.25,3,0),n(new U(18.8,.25,9.3),i,0,5.85,-.1),n(new U(18.8,.35,.35),a,0,5.55,-3),n(new U(18.8,.35,.35),a,0,5.55,1.5),n(new U(13.6,1.1,.3),o,-2.45,.55,4.4),n(new U(1.4,1.1,.3),o,8.75,.55,4.4),n(new U(.18,2.3,.22),a,4.45,1.15,4.4),n(new U(.18,2.3,.22),a,8,1.15,4.4),n(new U(3.8,.22,.26),a,6.2,2.35,4.4),n(new U(.24,6,5.7),o,-3.1,3,-1.55),n(new U(.24,6,5.1),o,3.55,3,-1.85),n(new U(.24,1.9,3.2),o,-3.1,4.9,2.9),n(new U(.24,1.9,3.5),o,3.55,4.9,2.6),n(new U(2.5,.82,1),q(8955040),-6.9,.41,-3.8),n(new U(2.6,.08,1.06),q(12897488),-6.9,.86,-3.8),n(new U(.9,.06,.62),q(10135724),-7.3,.9,-3.8),n(new W(.035,.035,.4,6),q(14211288),-7.3,1.1,-4.1),n(new U(1.3,.82,1),q(15261904),-5,.41,-3.8),n(new W(.3,.34,.26,10),q(8026738),-5,1,-3.8),n(new W(.05,.05,.3,6),q(3815990),-4.65,1.05,-3.8).rotation.z=1.2,n(new U(1.5,1,.08),q(12375260,{emissive:3557199}),-6.9,2.5,-4.22),n(new U(.95,1.75,.85),q(15788760),-8.6,.88,-3.6),n(new U(.06,.5,.08),q(9078136),-8.1,1.2,-3.14),n(new U(.72,1.95,1.5),i,-8.75,.98,-.5),n(new U(.1,.7,1.3),q(14214376),-8.35,1.45,-.5),n(new W(.16,.2,.22,8),q(13674568),-6.3,1,-3.75),n(new W(1,1,.12,16),i,0,.46,.3);for(let[e,t]of[[-.6,-.2],[.6,-.2],[-.6,.8],[.6,.8]])n(new U(.1,.4,.1),i,e,.2,t);n(new W(.26,.3,.12,10),q(14208692),.3,.58,.15),n(new U(.85,.09,.85),q(10111548),0,.05,1.85).rotation.y=.1,n(new U(.85,.09,.85),q(9067068),-1.75,.05,.3).rotation.y=-.15,n(new U(.85,.09,.85),q(6978132),1.75,.05,.3).rotation.y=.2,n(new U(1.3,.5,1),i,-2,.25,-3.55),n(new U(1.1,.85,.85),q(8022610),-2,.95,-3.55);let l=n(new U(.8,.6,.05),q(1845280,{emissive:659980}),-2,.98,-3.1);n(new W(.015,.015,.9,4),q(13421772),-2.2,1.75,-3.6).rotation.z=.5,n(new W(.015,.015,.9,4),q(13421772),-1.8,1.75,-3.6).rotation.z=-.5,n(new U(1.7,1.3,.08),q(12375260,{emissive:3557199}),-.6,2.2,-4.22),n(new U(1.8,.12,.14),i,-.6,1.5,-4.2),n(new U(.5,.85,.12),a,1.3,2.6,-4.22),n(new W(.16,.16,.05,12),q(16051933),1.3,2.75,-4.14).rotation.x=Math.PI/2,n(new W(.35,.4,.1,12),q(10470588),-2.3,.05,1.7),n(new W(.05,.05,.95,8),q(14211280),-2.3,.55,1.7);let u=new B;u.position.set(-2.3,-78.9,1.7);let d=new H(new W(.42,.42,.22,14),q(10470588));d.rotation.x=Math.PI/2,u.add(d);let f=new H(new Ma(.06,6,5),q(3690572));f.position.z=.16,u.add(f),t.add(u);for(let e=0;e<7;e++)n(new U(1.3,.32,.4),a,2.75,.16+e*.32,-2.35-e*.32);n(new U(.06,.9,2.3),a,2.06,1.4,-3.3),n(new U(1.25,1.7,.75),a,6.2,.85,-3.9),n(new U(.95,1,.1),q(10123816,{emissive:5586960}),6.2,1.05,-3.5),n(new U(.34,.44,.06),q(16052452),6.2,1.1,-3.44),n(new U(1.05,.4,.5),a,6.2,.2,-3.1),n(new Ma(.09,8,6,0,Math.PI*2,0,Math.PI*.5),q(13148216),5.9,.4,-3.05),n(new W(.02,.02,.22,5),q(6309936),6.5,.5,-3.05),n(new U(.75,2.3,1.7),i,8.7,1.15,-1.5);for(let e of[.5,1.05,1.6])n(new U(.06,.06,1.5),q(2760728),8.3,e,-1.5);n(new U(.85,.09,.85),q(10111548),5,.05,-1.2).rotation.y=-.1,n(new U(.62,1.25,.04),q(15261896),7.6,2.35,-4.22),n(new U(.3,.4,.05),q(11550776),7.6,2.5,-4.19),n(new U(1.5,.85,.5),i,8.7,.43,2.2),n(new W(.14,.17,.7,8),q(7371396),4.9,.4,3.6),n(new W(.02,.02,.8,4),q(11550776),4.95,.75,3.6).rotation.z=.15,n(new U(.26,.09,.6),q(4866104),5.9,.12,3.1),n(new U(.26,.09,.6),q(4866104),6.3,.12,3.15);for(let[e,t]of[[0,.3],[6.2,-1.2],[-6,-1.5]])n(new W(.02,.02,2.8,4),q(1710616),e,4.35,t),n(new Ma(.13,10,8),new Ga({color:16771248,emissive:16762992,emissiveIntensity:.9}),e,2.95,t);let p=new Eo(16768936,1.6,22,1.4);p.position.set(0,-77.2,.3),t.add(p);let m=new Eo(16768936,1.2,18,1.4);m.position.set(6.2,-77.2,-1.2),t.add(m);let h=new Eo(16770232,1.1,18,1.4);h.position.set(-6,-77.2,-1.5),t.add(h);let g=new Eo(16771272,.6,40,1.2);g.position.set(0,-75,7),t.add(g);let _=Cd({body:8943530,head:1578e4,hair:13421772,elder:!0});return _.group.position.set(-6,-80,-2.2),_.group.visible=!1,t.add(_.group),e.add(t),{floorY:-80,entry:{x:6.2,z:2.8},bounds:{minX:-8.9,maxX:8.9,minZ:-3.85,maxZ:3.9},rects:[{x:-3.1,z:-1.55,hx:.2,hz:2.9},{x:3.55,z:-1.85,hx:.2,hz:2.6},{x:-6,z:-3.8,hx:2,hz:.6},{x:-8.6,z:-3.6,hx:.55,hz:.5},{x:-8.75,z:-.5,hx:.45,hz:.8},{x:0,z:.3,hx:1.1,hz:1.1},{x:-2,z:-3.55,hx:.7,hz:.6},{x:-2.3,z:1.7,hx:.42,hz:.42},{x:2.75,z:-3.3,hx:.72,hz:1.15},{x:6.2,z:-3.7,hx:.68,hz:.6},{x:8.7,z:-1.5,hx:.5,hz:.9},{x:8.7,z:2.2,hx:.5,hz:.35}],fanHead:u,tvScreen:l.material,baachan:_.group}}function Ad(e){let t=new B,n=(e,n,r,i,a)=>{let o=new H(e,n);return o.position.set(40+r,-80+i,a),t.add(o),o},r=new H(new U(50,36,50),new ci({color:1709072,side:1,fog:!1}));r.position.set(40,-72,4),t.add(r);let i=new Ga({map:Uu(`#7a5a38`)}),a=new Ga({map:Uu(`#4e3820`)}),o=q(15722706);n(new U(9.4,.3,8.4),i,0,-.15,0);for(let e=0;e<2;e++)for(let t=0;t<2;t++)n(new U(3.3,.06,3.3),(e+t)%2?q(11055736):q(12042118),-1.7+e*3.4,.03,-1.8+t*3.4);n(new U(9.4,5.6,.3),o,0,2.8,-4.1),n(new U(.3,5.6,8.4),o,-4.55,2.8,0),n(new U(.3,5.6,8.4),o,4.55,2.8,0),n(new U(9.4,.25,8.2),i,0,5.55,-.1),n(new U(9.4,.3,.3),a,0,5.3,-2),n(new U(3.4,1,.3),o,-2.9,.5,4.1),n(new U(3.4,1,.3),o,2.9,.5,4.1),n(new U(1.4,.06,2),q(2365968),-3.6,.05,2.6),n(new U(.08,.75,2),a,-2.85,.55,2.6),n(new U(.08,.75,.08),a,-2.85,.55,1.6),n(new U(.08,.75,.08),a,-2.85,.55,3.55),n(new U(1.3,.14,2.4),q(15920866),-2.6,.11,-2.2),n(new U(1.32,.14,1.6),q(8363967),-2.6,.22,-1.85),n(new U(.68,.14,.36),q(14472896),-2.6,.23,-3.15),n(new U(1.9,.08,1),i,2.6,.78,-3.3),n(new U(.08,.78,.95),i,1.72,.39,-3.3),n(new U(.08,.78,.95),i,3.48,.39,-3.3),n(new U(.6,.35,.9),i,3.15,.6,-3.3),n(new U(.4,.55,.06),q(3824196,{emissive:1319962}),2.1,1.1,-3.68),n(new U(.34,.02,.46),q(16777215),2.7,.83,-3.2),n(new W(.012,.012,.3,4),q(14196784),2.95,.84,-3.1).rotation.z=1.3,n(new W(.09,.11,.04,8),q(4745304),1.95,.82,-3.45),n(new W(.02,.02,.5,5),q(4745304),1.95,1.06,-3.45).rotation.x=.3,n(new Ma(.1,8,6,0,Math.PI*2,0,Math.PI*.6),new Ga({color:9421988,emissive:2769972}),1.95,1.32,-3.28),n(new U(.5,.08,.5),i,2.6,.45,-2.5);for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])n(new U(.06,.45,.06),i,2.6+e,.22,-2.5+t);n(new U(.5,.55,.06),i,2.6,.75,-2.28),n(new U(.55,1.65,1.5),i,4.2,.83,.4);let s=[11550776,3828378,6982202,13144106,8014474];for(let e=0;e<5;e++)n(new U(.36,.42,.16),q(s[e]),4.15,1.25,-.2+e*.22);for(let e=0;e<4;e++)n(new U(.36,.36,.18),q(s[(e+2)%5]),4.15,.68,-.1+e*.24);n(new U(.5,.3,.34),q(9062456),4.2,1.82,.85),n(new W(.012,.012,.5,4),q(14211288),4.3,2.2,.85).rotation.z=.5,n(new W(.06,.06,.02,8),q(14208692),4.05,1.85,.75).rotation.x=Math.PI/2,n(new U(.4,.34,.3),q(6986314,{emissive:1714706}),4.2,1.85,.05),n(new U(.42,.05,.32),q(3824170),4.2,2.04,.05),n(new U(.7,2.5,2.1),a,4.2,1.25,2.5),n(new U(.06,2.26,.98),q(15920344),3.82,1.23,2.02),n(new U(.06,2.26,.98),q(15261894),3.88,1.23,2.98),n(new U(.05,.18,.1),a,3.78,1.2,1.72),n(new U(.14,.1,2.14),a,3.84,2.44,2.5),n(new U(.14,.1,2.14),a,3.84,.06,2.5),n(new U(2.3,.06,.28),i,1.6,2,-3.9),n(new U(.05,.16,.2),a,.6,1.9,-3.92),n(new U(.05,.16,.2),a,2.6,1.9,-3.92);let c=[];Tu.forEach((e,t)=>{let r=n(new W(.1,.115,.04,10),q(e.color,e.id===`kin`?{emissive:6967312}:{}),.62+t*.27,2.14,-3.82);r.rotation.x=-.4,r.visible=!1,c.push(r)});let l=[];for(let e=0;e<6;e++){let t=n(new W(.1,.115,.03,10),q(Tu[(e*3+1)%Tu.length].color),3.3+e%2*.06-.03,.84+Math.floor(e/2)*.034,-3.05+e%3*.04-.04);t.visible=!1,l.push(t)}let u={refresh(e){let t=0,n=0;Tu.forEach((r,i)=>{let a=e.caps&&e.caps[r.id]||0;c[i].visible=a>0,t+=a,a>0&&(n+=1)});let r=Math.min(l.length,t-n);l.forEach((e,t)=>{e.visible=t<r})}};n(new U(2,1.4,.08),q(12375260,{emissive:3557199}),-.5,2.3,-3.94),n(new U(2.1,.12,.14),i,-.5,1.55,-3.9),n(new U(.06,1.4,.1),i,-.5,2.3,-3.92),n(new U(.7,1,.04),q(16052448),-3.2,2.5,-3.94),n(new U(.5,.5,.05),q(14178880),-3.2,2.6,-3.9),n(new W(.02,.02,2.4,4),q(1710616),0,4.3,.3),n(new Ma(.13,10,8),new Ga({color:16771248,emissive:16762992,emissiveIntensity:.9}),0,3,.3);let d=new Eo(16768936,1.5,20,1.4);d.position.set(40,-77.1,.3),t.add(d);let f=new Eo(16771272,.55,30,1.2);return f.position.set(40,-75.5,6),t.add(f),e.add(t),{floorY:-80,entry:{x:38,z:2.5},bounds:{minX:35.8,maxX:44.2,minZ:-3.55,maxZ:3.6},rects:[{x:36.4,z:2.6,hx:.75,hz:1.05},{x:37.4,z:-2.2,hx:.75,hz:1.3},{x:42.6,z:-3.15,hx:1.05,hz:.65},{x:42.6,z:-2.5,hx:.35,hz:.35},{x:44.2,z:.4,hx:.4,hz:.85},{x:44.2,z:2.5,hx:.5,hz:1.1}],spots:{stairs:{x:36.45,z:1.2},futon:{x:37.4,z:-2.2},desk:{x:42.6,z:-1.7},shelf:{x:43.5,z:.4},window:{x:39.5,z:-2.9},closet:{x:43.3,z:2.5},caps:{x:41.2,z:-2.7}},capShelf:u}}var jd={x:660,z:420},Md=15;function Nd(e){let t=new B;t.position.set(jd.x,0,jd.z);let n=(e,n,r,i,a)=>{let o=new H(e,n);return o.position.set(r,i,a),t.add(o),o},r=.98,i=q(14656826),a=q(15789280),o=q(12104872);n(new U(16,.16,2.9),q(9077880),0,r-.08,0),n(new U(16,.95,3),i,0,.5,0);for(let e of[-5.6,-2.2,2.2,5.6]){let t=n(new W(.34,.34,2.4,8),q(3355443),e,.34,0);t.rotation.x=Math.PI/2}n(new U(16,.86,.1),a,0,1.41,-1.42),n(new U(16,.42,.1),a,0,3.09,-1.42);for(let e=-4;e<=4;e++)n(new U(.14,.9,.1),a,e*1.9,2.29,-1.42);for(let e of[-8,8])n(new U(.14,2.35,2.9),a,e,2.15,0);n(new U(.1,1.8,.9),q(8022610),-7.9,1.88,0),n(new U(16,.12,1.7),a,0,3.36,-.6),n(new U(16,.5,.08),a,0,1.53,1.42);for(let e of[-4.8,0,4.8])n(new W(.03,.03,2.3,6),o,e,2.13,.7);n(new U(13,.14,.6),q(4155986),0,1.4,-1.05),n(new U(13,.5,.1),q(4880990),0,1.83,-1.33);let s=n(new W(.025,.025,14,6),o,0,3.03,-.45);s.rotation.z=Math.PI/2;let c=[];for(let e=-6;e<=6;e++){let n=new B;n.position.set(e*1.05,3.03,-.45);let r=new H(new U(.03,.3,.02),q(15262936));r.position.y=-.15,n.add(r);let i=new H(new Na(.07,.018,5,10),q(16118506));i.position.y=-.36,n.add(i),t.add(n),c.push(n)}let l=[];for(let[e,n]of[[-4.5,8030874],[2.8,10512986]]){let i=Cd({body:n,head:1578e4,hair:3811866,scale:.9});i.group.position.set(e,r-.35,-1.02),i.parts.legL.rotation.x=-1.4,i.parts.legR.rotation.x=-1.4,t.add(i.group),l.push(i)}n(new ja(340,200),Ru(8231514),0,-.03,0).rotation.x=-Math.PI/2;for(let e of[-.8,.8])n(new U(340,.08,.12),q(6973278),0,.06,e);let u=n(new U(340,.06,3.4),Ru(9274484),0,.02,0);u.position.y=.01;let d=new B,f=new B;t.add(d,f);let p=[],m=(e,t,n,r=d)=>{e.position.set(t,0,n),r.add(e),p.push({obj:e,far:r===f})};for(let e=-320/2;e<320/2;e+=1.4)m(new H(new U(.28,.05,2.2),q(4866104)),e,0);for(let e=-320/2;e<320/2;e+=16){let t=new B,n=new H(new W(.09,.11,7,6),q(7038040));n.position.y=3.5,t.add(n);let r=new H(new U(.08,.08,1.6),q(5919560));r.position.y=6.4,t.add(r),m(t,e+3,-3.4)}let h=3,g=()=>(h=h*16807%2147483647)/2147483647;for(let e=-320/2;e<320/2;e+=22)for(let t of[-1,1]){let n=g();if(n<.42)m(new H(new U(16,.1,9),Ru(6195774)),e+g()*8,t*(9+g()*8));else if(n<.72){let n=Xu({w:5.5+g()*2,d:4.2,h:2.6,roofC:[`#5f5346`,`#6b4438`,`#4e5a4e`][Math.floor(g()*3)]});n.rotation.y=g()*Math.PI,m(n,e+g()*8,t*(10+g()*10))}else m(qu(g()<.3,Math.floor(g()*30)),e+g()*8,t*(7+g()*12))}for(let e=-320/2;e<320/2;e+=40)m(new H(new ea(22+g()*14,14+g()*10,8),Ru(new V().setHSL(.36,.25,.34))),e+g()*20,-(60+g()*20),f);e.add(t);let _=0;return{group:t,floorY:r,entry:{x:jd.x+.5,z:jd.z+.4},bounds:{minX:jd.x-7.4,maxX:jd.x+7.4,minZ:jd.z-.55,maxZ:jd.z+.9},rects:[{x:jd.x-4.8,z:jd.z+.7,hx:.12,hz:.12},{x:jd.x,z:jd.z+.7,hx:.12,hz:.12},{x:jd.x+4.8,z:jd.z+.7,hx:.12,hz:.12},{x:jd.x-4.5,z:jd.z-1,hx:.6,hz:.4},{x:jd.x+2.8,z:jd.z-1,hx:.6,hz:.4}],update(e,n){_+=e;let r=Md*e*n;for(let e of p)e.obj.position.x-=r*(e.far?.22:1),e.obj.position.x<-320/2&&(e.obj.position.x+=320),e.obj.position.x>320/2&&(e.obj.position.x-=320);let i=Math.sin(_*2.6)*.09+Math.sin(_*7.3)*.03;for(let e of c)e.rotation.x=i;t.position.y=Math.sin(_*9.1)*.012}}}var Pd={x:660,z:0};function Fd(e){let t=new B;t.position.set(Pd.x,0,Pd.z);let n=(e,n,r,i,a)=>{let o=new H(e,n);return o.position.set(r,i,a),t.add(o),o},r=[],i=(e,t,n,i)=>r.push({x:Pd.x+e,z:Pd.z+t,hx:n,hz:i}),a=[],o=(e,t,n,r,i)=>{let o=new Set;e.traverse(e=>{e.isMesh&&o.add(e.material)}),a.push({obj:e,x:Pd.x+t,z:Pd.z+n,r,topY:i,mats:[...o],fade:1})};n(new ja(240,240),Ru(11052186),0,-.02,0).rotation.x=-Math.PI/2,n(new U(140,.04,7),q(6578522),0,0,6);for(let e=-8;e<=8;e++)n(new U(2,.05,.35),q(15263453),e*8+2,.01,6);for(let e=0;e<6;e++)n(new U(.55,.05,6.4),q(15263453),-3+e*1.1,.02,6);let s=new B;t.add(s);let c=(e,t,n,r,i)=>{let a=new H(e,t);return a.position.set(n,r,i),s.add(a),a};c(new U(26,22,14),q(14209732),0,11,-26);for(let e=1;e<7;e++)c(new U(24.5,1.1,14.2),q(5925496,{emissive:2240570,emissiveIntensity:.25}),0,2.4+e*2.9,-26);c(new U(10,3.6,.4),q(2897472,{emissive:1582126,emissiveIntensity:.4}),0,1.8,-18.9),c(new U(12,.35,3),q(12894126),0,3.9,-17.6);let l=_d(`かわらまちえき`,{bg:`#f5f2ea`,fg:`#334455`,w:8,h:1.4});l.position.set(0,4.9,-18.85),s.add(l);let u=_d(`コトデン かわらまち ビル`,{bg:`#33475a`,fg:`#ffffff`,w:15,h:1.8});u.position.set(0,20.5,-18.9),s.add(u),i(0,-26,13.3,7.3);let d=n(new U(17,.8,3),Ru(11709342),25,.4,-29.5);d.castShadow=!1;let f=hd();f.position.set(17,0,-33),t.add(f),i(25,-30.5,10,4.5);let p=new B;t.add(p);let m=(e,t,n,r,i)=>{let a=new H(e,t);return a.position.set(n,r,i),p.add(a),a};m(new U(8.6,.18,42),q(14673128,{transparent:!0,opacity:.85}),-20,8.8,10.5),m(new U(9,.5,1),q(4881034),-20,8.6,31.2);let h=_d(`かわらまち しょうてんがい`,{bg:`#3a6a7a`,fg:`#ffffff`,w:8.6,h:1.3});h.position.set(-20,7.6,31.3),p.add(h);for(let e=-8;e<=30;e+=7.6)for(let t of[-23.9,-16.1])m(new W(.12,.14,8.8,6),q(9080466),t,4.4,e),i(t,e,.3,.3);for(let[e,t,n,r]of[[-27,-5,`ゲームセンター`,`#c94a6a`],[-27,3,`ほんや`,`#3a6a4a`],[-27,11,`おみやげ`,`#c9873a`],[-27,19,`きっさ てんまど`,`#6a5a4a`],[-27,27,`レコード`,`#4a5a8a`],[-13,-1,`ふくや`,`#8a4a7a`],[-13,7,`くすり`,`#3a8a8a`],[-13,15,`パンや`,`#b8763a`],[-13,23,`カメラ`,`#555560`]]){let a=m(new U(5.6,4.2,7),q(14209215),e,2.1,t);a.castShadow=!0,m(new U(5.8,.5,7.2),q(9077880),e,4.45,t);let o=e<-20?e+2.85:e-2.85,s=m(new U(.12,2.2,5.4),q(3490382,{emissive:1713712,emissiveIntensity:.35}),o,1.3,t);s.castShadow=!1,m(new U(.9,.14,5.8),q(new V(r)),o+(e<-20?.45:-.45),2.7,t);let c=_d(n,{bg:`#fdfaf2`,fg:r,w:3.2,h:.85});c.position.set(e<-20?-22.4:-17.6,3.6,t+.2),p.add(c),i(e,t,2.9,3.6)}o(p,-20,11,13,4.8);let g=new B;t.add(g);let _=(e,t,n,r,i)=>{let a=new H(e,t);return a.position.set(n,r,i),g.add(a),a};_(new U(20,18,14),q(13617339),24,9,17);for(let e=1;e<6;e++)_(new U(20.2,.9,12.6),q(6713466,{emissive:2436662,emissiveIntensity:.25}),24,e*3,17);_(new U(.4,3.4,8),q(3160644,{emissive:1713196,emissiveIntensity:.4}),13.9,1.7,17),_(new U(2.6,.3,9),q(12564648),13,3.7,17);let v=_d(`たかまつ デパート`,{bg:`#a83a4a`,fg:`#ffffff`,w:12,h:1.9});v.position.set(24,17.2,9.9),g.add(v);let y=_d(`おくじょう ゆうえんち`,{bg:`#f5f2ea`,fg:`#a83a4a`,w:6,h:1});y.position.set(24,14.6,9.9),g.add(y),i(24,17,10.3,7.3),o(g,24,17,12.5,18);for(let[e,r]of[[-8,-12],[8,-12]]){n(new W(1.6,1.7,.55,10),Ru(10130314),e,.27,r);let a=qu(!1,e+9);a.position.set(e,.3,r),a.scale.setScalar(.7),t.add(a),i(e,r,1.8,1.8)}let b=ud();b.position.set(12.5,0,-13),b.rotation.y=Math.PI,t.add(b),i(12.5,-13,.7,.6);for(let[e,n,r,a]of[[-10,4.8,13191738,0],[12,7.4,4876954,Math.PI],[30,4.8,14210248,0]]){let o=Sd(r);o.position.set(e,0,n),o.rotation.y=Math.PI/2+a,t.add(o),i(e,n,2.1,1.1)}for(let[e,t]of[[-5.5,1.8],[4.5,10.2]])n(new W(.08,.1,4.6,6),q(7040626),e,2.3,t),n(new U(1.3,.45,.3),q(2764339),e+.4,4.4,t),n(new Ma(.14,8,6),q(3852650,{emissive:1735226,emissiveIntensity:.8}),e+.85,4.4,t+.17),i(e,t,.25,.25);for(let[e,n,r,a]of[[-4,-8,8030874,2.6],[3,-11,10512986,-.4],[-20,2,5929562,.6],[-20,16,9067130,3.4],[15,1,4872842,-1.8],[-18.5,24,13213786,1.2]]){let o=Cd({body:r,head:1578e4,hair:[2759954,3815994,7032880][Math.floor((e+n+60)%3)],scale:.95});o.group.position.set(e,0,n),o.group.rotation.y=a,t.add(o.group),i(e,n,.35,.35)}return e.add(t),{group:t,floorY:0,outdoor:!0,entry:{x:Pd.x,z:Pd.z-14.5},bounds:{minX:Pd.x-33,maxX:Pd.x+33,minZ:Pd.z-16.2,maxZ:Pd.z+31.5},rects:r,occluders:a,pts:{station:{x:Pd.x,z:Pd.z-15.6},depato:{x:Pd.x+12.5,z:Pd.z+17},gamecen:{x:Pd.x-23.3,z:Pd.z-5},honya:{x:Pd.x-23.3,z:Pd.z+3},omiyage:{x:Pd.x-23.3,z:Pd.z+11},vending:{x:Pd.x+12.5,z:Pd.z-14}}}}function Id(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Mr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Ld(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Ld(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Ld(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new _r(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Rd(e,t){let n={meshBefore:0,meshAfter:0,groups:0},r=new Set([t.train,t.furin,t.capMarker,t.odoriGroup,t.festivalGroup,t.gakusaiGroup,t.trainRide&&t.trainRide.group,t.interior&&t.interior.baachan,...t.laundry||[],...t.ayu||[]].filter(Boolean)),i=new Set([t.riverWaterMat,t.fallMat,t.foamMat,...t.sawaMats||[],...t.lanternMats||[]].filter(Boolean));for(let e of t.occluders)for(let t of e.mats)i.add(t);let a=e=>{for(let t=e;t;t=t.parent)if(r.has(t)||t.userData.noMerge||t.visible===!1)return!0;return!1},o=e=>{let t=e.material;return!t||Array.isArray(t)||!t.isMeshLambertMaterial&&!t.isMeshBasicMaterial||t.transparent||(t.alphaTest||0)>0?null:[t.type,t.map?t.map.uuid:``,t.emissive?t.emissive.getHex():0,t.emissiveIntensity??1,t.side,+!!t.flatShading,t.fog===!1?0:1,+!!t.depthWrite,+!!t.depthTest,t.blending,+!!t.toneMapped,+!!e.castShadow,+!!e.receiveShadow,e.renderOrder].join(`|`)},s=e=>{let t=e.geometry.clone();t.index&&(t=t.toNonIndexed()),t.applyMatrix4(e.matrixWorld),t.attributes.normal||t.computeVertexNormals();let n=t.attributes.position.count,r=e.material,i=new Float32Array(n*3),a=t.attributes.color;for(let e=0;e<n;e++)i[e*3]=r.color.r*(a?a.getX(e):1),i[e*3+1]=r.color.g*(a?a.getY(e):1),i[e*3+2]=r.color.b*(a?a.getZ(e):1);return t.setAttribute(`color`,new _r(i,3)),r.map||t.deleteAttribute(`uv`),t.attributes.uv1&&t.deleteAttribute(`uv1`),t.attributes.uv2&&t.deleteAttribute(`uv2`),t},c=e=>{let t=new(e.isMeshBasicMaterial?ci:Ga)({color:16777215,vertexColors:!0,map:e.map||null,side:e.side,flatShading:e.flatShading,fog:e.fog,depthWrite:e.depthWrite,depthTest:e.depthTest,blending:e.blending,toneMapped:e.toneMapped});return t.emissive&&e.emissive&&(t.emissive.copy(e.emissive),t.emissiveIntensity=e.emissiveIntensity),t},l=(e,t)=>{let r=[];for(let i of e){if(i.items.length<1)continue;let e=Id(i.items.map(e=>s(e)),!1);if(!e)continue;let a=new H(e,t(i));a.castShadow=i.cast,a.receiveShadow=i.recv,a.renderOrder=i.ro,a.matrixAutoUpdate=!1,a.userData.noMerge=!0;for(let e of i.items)e.removeFromParent();r.push(a),n.groups++}return r},u=(e,t)=>{let n=new Map,r=[];e.traverse(e=>r.push(e));for(let e of r){if(!e.isMesh||e.isInstancedMesh||!t(e))continue;let r=o(e);r&&(n.has(r)||n.set(r,{mat:e.material,cast:e.castShadow,recv:e.receiveShadow,ro:e.renderOrder,items:[]}),n.get(r).items.push(e))}return[...n.values()]};e.updateMatrixWorld(!0),e.traverse(e=>{e.isMesh&&n.meshBefore++});for(let n of t.occluders){if(!n.obj||!n.obj.isObject3D)continue;let t=u(n.obj,e=>!e.material.transparent);if(t.reduce((e,t)=>e+t.items.length,0)<2)continue;let r=[],a=l(t,e=>{let t=c(e.mat);return i.add(t),r.push(t),t});for(let t of a)e.add(t);r.length&&(n.mats=r)}let d=new Map,f=l(u(e,e=>!i.has(e.material)&&!a(e)),e=>{let t=o({material:e.mat,castShadow:e.cast,receiveShadow:e.recv,renderOrder:e.ro});return d.has(t)||d.set(t,c(e.mat)),d.get(t)}),p=new B;p.name=`staticMerged`;for(let e of f)p.add(e);e.add(p);let m=0;return e.traverse(e=>{e.isMesh&&m++}),n.meshAfter=m,console.info(`[optimize] mesh ${n.meshBefore}→${n.meshAfter} / 結合グループ ${n.groups}`),n}var zd=e=>-8+13*Math.sin(e/41)-Math.max(0,e-70)*.5-Math.max(0,-e-70)*.35,Y={x:130,z:78,r:15},Bd=-20.8,Vd=-137.5,Hd={x:168,z:52,h:9.5,r:24},Ud={x:-60,z:-165,h:30,r:52},Wd=[{x:-140,z:-152,h:12,r:38},{x:62,z:-154,h:14,r:40},{x:155,z:-147,h:10,r:32}],X={x:-33,z:-127,r:4.2,shelf:15.4,y:15.1},Z=(e,t)=>{let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};function Gd(e,t){let n=0;e<-60&&(n+=(-60-e)*.055),t<-80&&(n+=(-80-t)*.05);let r=Math.hypot(e-Hd.x,t-Hd.z);n+=Hd.h*Math.exp(-(r*r)/(Hd.r*Hd.r));let i=Math.hypot(e-Ud.x,t-Ud.z);n+=Ud.h*Math.exp(-(i*i)/(Ud.r*Ud.r));for(let r of Wd){let i=Math.hypot(e-r.x,t-r.z);n+=r.h*Math.exp(-(i*i)/(r.r*r.r))}return n}function Kd(e,t){let n=Math.abs(t-zd(e)),r=Math.hypot(e-Y.x,t-Y.z),i=Math.min(1,n/12)*Math.min(1,r/(Y.r+6));return Gd(e,t)+.35*Math.sin(e/23)*Math.sin(t/19)*i}var qd=e=>Gd(e,zd(e))-.55,Jd=Gd(Y.x,Y.z)-.5;function Yd(e,t){let n=Kd(e,t),r=Math.abs(t-zd(e));r<9&&(n-=2.3*.5*(1+Math.cos(Math.PI*r/9)));let i=Math.hypot(e-Y.x,t-Y.z);i<Y.r+3&&(n-=1.7*.5*(1+Math.cos(Math.PI*i/(Y.r+3))));let a=Math.hypot(e-X.x,t-X.z);if(a<X.r+5){let e=.5*(1+Math.cos(Math.PI*Math.min(1,Math.max(0,a-X.r)/5)));n=n*(1-e)+X.shelf*e,a<X.r&&(n-=.75*.5*(1+Math.cos(Math.PI*a/X.r)))}return n}var Xd=[{pts:[[-230,-38],[-180,-24],[-140,-16],[-95,8],[-78,24],[38,24],[56,21],[76,14],[100,5],[160,3],[230,7]],w:3.6},{pts:[[20,25],[20,7]],w:2.6},{pts:[[20,-6],[14,-28],[5,-44],[1,-52],[0,-58]],w:2.6},{pts:[[-70,24],[-70,60],[-62,80]],w:2.6},{pts:[[-70,60],[-52,60]],w:2.2},{pts:[[32,24],[32,19]],w:2.2},{pts:[[-20,24],[-20.6,-5.5]],w:2.6},{pts:[[-20.9,-22.3],[-21.1,-23.2]],w:2.6},{pts:[[127.5,13],[120.5,15.3]],w:2},{pts:[[108,3.8],[109,-8]],w:2.4},{pts:[[126,3.4],[128,24],[129,44],[128,60]],w:2.4},{pts:[[129,44],[144,44],[156,43]],w:2.2},{pts:[[-180,-24],[-184,-8]],w:2.4},{pts:[[-140,-16],[-138.5,-20]],w:1.8},{pts:[[-136.4,-38],[-135.5,-44]],w:1.8},{pts:[[156,43],[157,50],[157,57]],w:2},{pts:[[-22,-84],[-28,-98],[-33,-112],[-36,-121],[-42,-126]],w:1.9},{pts:[[-42,-126],[-52,-130],[-60,-136],[-66,-144],[-64,-152],[-56,-152],[-48,-155],[-52,-161],[-60,-165]],w:1.7},{pts:[[-39,-124.5],[-36,-125.5]],w:1.4},{pts:[[138,8],[141,18]],w:1.8},{pts:[[48,24],[48,10]],w:1.8},{pts:[[48,-2],[56,-8]],w:1.8},{pts:[[56,21],[58,-8],[60,-26],[66,-30]],w:3},{pts:[[-20.6,3],[-27,3]],w:2.2}];function Zd(e,t,n,r,i,a){let o=i-n,s=a-r,c=Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/(o*o+s*s||1)));return Math.hypot(e-(n+o*c),t-(r+s*c))}function Qd(e,t){let n=1e9;for(let r of Xd)for(let i=0;i<r.pts.length-1;i++){let a=Zd(e,t,...r.pts[i],...r.pts[i+1])-r.w/2;a<n&&(n=a)}return n}var $d=[[-240,-102],[-145,-90],[-90,-60],[-25,-30],[40,-24],[95,-18],[240,8]];function ef(e,t){let n=1e9;for(let r=0;r<$d.length-1;r++){let i=Zd(e,t,...$d[r],...$d[r+1]);i<n&&(n=i)}return n}function tf(e,t){let n=Yd(e,t),r=Math.abs(t-zd(e)),i=Math.max(0,Math.min(1,(14-r)/8));return Math.max(n,n+(qd(e)+1-n)*i)+.1}function nf(e,t,n,r,i){let a=[],o=[],s=[],c=t/2,l=0,u=(e,t)=>i?i(e,t):Yd(e,t)+n;for(let n=0;n<e.length;n++){let r=e[n],i=e[Math.min(n+1,e.length-1)],d=e[Math.max(n-1,0)],f=i[0]-d[0],p=i[1]-d[1],m=Math.hypot(f,p)||1,h=-p/m,g=f/m,_=[r[0]+h*c,r[1]+g*c],v=[r[0]-h*c,r[1]-g*c];if(n>0&&(l+=Math.hypot(r[0]-d[0],r[1]-d[1])/t),a.push(_[0],u(_[0],_[1]),_[1],v[0],u(v[0],v[1]),v[1]),o.push(0,l,1,l),n>0){let e=(n-1)*2;s.push(e,e+2,e+1,e+1,e+2,e+3)}}let d=new Mr;d.setAttribute(`position`,new br(a,3)),d.setAttribute(`uv`,new br(o,2)),d.setIndex(s),d.computeVertexNormals();let f=new H(d,q(r));return f.receiveShadow=!0,f}function rf(e,t=4){let n=[];for(let r=0;r<e.length-1;r++){let[i,a]=e[r],[o,s]=e[r+1],c=Math.max(1,Math.ceil(Math.hypot(o-i,s-a)/t));for(let e=0;e<c;e++)n.push([i+(o-i)*e/c,a+(s-a)*e/c])}return n.push(e[e.length-1]),n}var af=()=>{let e=[];for(let t=-238;t<=238;t+=4)e.push([t,zd(t)]);return e};function of(e){let t={circles:[],rects:[],npcColliders:[],trees:[],grassAreas:[{x:22,z:27,r:6},{x:10,z:10,r:6},{x:30,z:44,r:8},{x:-28,z:42,r:8},{x:112,z:12,r:6},{x:124,z:60,r:7},{x:-152,z:-10,r:7}],lanternMats:[],groundY:(e,n)=>{if(t.indoor)return t.sub.floorY;let r=Math.abs(n-zd(e));if(Math.abs(e-20)<2.3&&r<8.2){let t=Math.min(1,(8.2-r)/1.2);return Math.max(Yd(e,n),.49*t)}if(Math.abs(e- -20.8)<2.3&&r<8.2){let t=Math.min(1,(8.2-r)/1.2);return Math.max(Yd(e,n),.49*t)}if(Math.abs(e- -137.5)<2.3&&r<8.2){let t=Math.min(1,(8.2-r)/1.2),i=Kd(Vd,zd(Vd)-9);return Math.max(Yd(e,n),(i+.49)*t+Yd(e,n)*(1-t))}if(Math.abs(e-48)<1.4&&r<8.4){let t=Math.min(1,(8.4-r)/1.6);return Math.max(Yd(e,n),Yd(e,n)+(qd(e)+.34-Yd(e,n))*t)}return Yd(e,n)}},n=(e,n,r)=>t.circles.push({x:e,z:n,r}),r=(e,n,r,i)=>t.rects.push({x:e,z:n,hx:r,hz:i}),i=(e,n,i,a,o=1)=>{r(e,n,i/2+.3,a/2+.3),r(e,n+o*(a/2+.7),i*.45,.78),t.camObstacles.push({x:e,z:n,r:Math.max(i,a)/2+.6,y0:Yd(e,n)+2.2,y1:Yd(e,n)+6.4})};t.indoor=!1,t.occluders=[],t.camObstacles=[];let a=(e,n,r,i,a)=>{let o=new Set;e.traverse(e=>{e.isMesh&&o.add(e.material)}),t.occluders.push({obj:e,x:n,z:r,r:i,topY:a,mats:[...o],fade:1})},o=(e,t)=>Yd(e,t),s=new kn,c=new ja(520,520,260,260);c.rotateX(-Math.PI/2);let l=c.attributes.position,u=new Float32Array(l.count*3),d=new V,f=new V(10324579),p=new V().setHSL(.12,.32,.5),m=new V(9274484),h=new V(8223342);for(let e=0;e<l.count;e++){let t=l.getX(e),n=l.getZ(e),r=Yd(t,n);l.setY(e,r);let i=Z(Math.floor(t/5),Math.floor(n/5)),a=Kd(t,n)-r;d.setHSL(.24+i*.03,.32+i*.14,Math.max(.28,.42+i*.1-r*.012)),r>22&&d.lerp(h,Math.min(1,(r-22)/10)*.38),a>.5?d.setHSL(.11,.3,.52+i*.06):a>.18&&d.lerp(p,.55),Math.hypot(t-X.x,n-X.z)<X.r+1.6&&d.setHSL(.55,.12,.42+i*.05);let o=Qd(t,n);o<2.4&&d.lerp(f,Math.max(0,1-Math.max(0,o)/2.4)*.5);let s=ef(t,n);s<2.4&&d.lerp(m,Math.max(0,1-s/2.4)*.45),u[e*3]=d.r,u[e*3+1]=d.g,u[e*3+2]=d.b}c.setAttribute(`color`,new _r(u,3)),c.computeVertexNormals();let g=new H(c,new Ga({map:Gu(),vertexColors:!0}));g.receiveShadow=!0,e.add(g);let _=nf(af(),13,0,16777215,e=>qd(e));_.material.map=Ku(),_.material.transparent=!0,_.material.opacity=.92,e.add(_),t.riverWaterMat=_.material;let v=new ji(new na(.32,0),q(10130828),110);for(let e=0;e<110;e++){let t=-220+Z(e,1)*440,n=Z(e,2)<.5?-1:1,r=6.2+Z(e,3)*2,i=zd(t)+n*r;s.position.set(t,o(t,i)+.1,i),s.rotation.set(Z(e,4)*3,Z(e,5)*3,0),s.scale.setScalar(.5+Z(e,6)*1.3),s.updateMatrix(),v.setMatrixAt(e,s.matrix)}e.add(v);let y=new ea(.1,1.3,4);y.translate(0,.6,0);let b=new ji(y,q(6983498),200);for(let e=0;e<200;e++){let t,n;if(e<170){t=-215+Z(e,7)*430;let r=Z(e,8)<.5?-1:1;n=zd(t)+r*(6+Z(e,9)*1.6)}else{let r=Z(e,7)*Math.PI*2,i=13+Z(e,9)*2;t=Y.x+Math.cos(r)*i,n=Y.z+Math.sin(r)*i}s.position.set(t,o(t,n),n),s.rotation.y=Z(e,10)*6,s.rotation.z=(Z(e,11)-.5)*.3,s.scale.set(1,.7+Z(e,12)*.9,1),s.updateMatrix(),b.setMatrixAt(e,s.matrix)}e.add(b);let x=new H(new $i(Y.r+1.2,32),q(5212840,{transparent:!0,opacity:.9}));x.rotation.x=-Math.PI/2,x.position.set(Y.x,Jd,Y.z),e.add(x);let S=id();S.position.set(125.5,o(125.5,60),60),S.rotation.y=-Math.PI*.3,e.add(S),r(125.5,60,1,.5);for(let t of Xd)e.add(nf(rf(t.pts),t.w,.05,13086078));let C=ed();C.position.set(20,0,zd(20)),e.add(C);let w=ed();w.position.set(Bd,0,zd(Bd)),e.add(w);let T=ed();T.position.set(Vd,Kd(Vd,zd(Vd)-9),zd(Vd)),e.add(T);let E=rf($d,3);e.add(nf(E,3.4,0,9274484,(e,t)=>tf(e,t)));let D=(e,t)=>e.map((n,r)=>{let i=e[Math.min(r+1,e.length-1)],a=e[Math.max(r-1,0)],o=i[0]-a[0],s=i[1]-a[1],c=Math.hypot(o,s)||1;return[n[0]-s/c*t,n[1]+o/c*t]});for(let t of[-.7,.7])e.add(nf(D(E,t),.16,0,7368808,(e,t)=>tf(e,t)+.22));let ee=[0];for(let e=1;e<E.length;e++)ee.push(ee[e-1]+Math.hypot(E[e][0]-E[e-1][0],E[e][1]-E[e-1][1]));let te=ee[ee.length-1],ne=e=>{e=Math.max(0,Math.min(te,e));let t=1;for(;t<ee.length-1&&ee[t]<e;)t++;let n=(e-ee[t-1])/(ee[t]-ee[t-1]||1),r=E[t-1][0]+(E[t][0]-E[t-1][0])*n,i=E[t-1][1]+(E[t][1]-E[t-1][1])*n,a=E[t][0]-E[t-1][0],o=E[t][1]-E[t-1][1];return{x:r,z:i,y:tf(r,i),rot:-Math.atan2(o,a)}};t.railPath={length:te,pointAt:ne};let re=Math.floor(te/3.2),O=new ji(new U(.3,.08,2.2),q(5917240),re);for(let e=0;e<re;e++){let t=ne(e*3.2+1);s.position.set(t.x,t.y+.14,t.z),s.rotation.set(0,t.rot,0),s.scale.setScalar(1),s.updateMatrix(),O.setMatrixAt(e,s.matrix)}e.add(O);let k=0,ie=1e9;for(let e=0;e<te;e+=2){let t=ne(e),n=Math.abs(t.z-zd(t.x));n<ie&&(ie=n,k=e)}let ae=ne(k),A=new H(new U(30,.9,3.6),q(4151878));A.position.set(ae.x,qd(ae.x)+.72,ae.z),A.rotation.y=ae.rot,e.add(A);for(let t of[-9,0,9]){let n=ae.x+Math.cos(-ae.rot)*t,r=ae.z+Math.sin(-ae.rot)*t,i=new H(new W(.5,.6,2.6,8),Ru(9078138));i.position.set(n,qd(ae.x)-.9,r),e.add(i)}let oe=gd();oe.position.set(-22.3,o(-22.3,-26.1),-26.1),oe.rotation.y=-.092+Math.PI,e.add(oe),r(-22.3,-26.3,8.3,3.2),a(oe,-22.3,-26.1,9,o(-22.3,-26.1)+5.4);let se=gd();se.position.set(109.4,o(109.4,-11.8),-11.8),se.rotation.y=-.1774+Math.PI,e.add(se),r(109.4,-12,8.3,3.2),a(se,109.4,-11.8,9,o(109.4,-11.8)+5.4);let ce=hd();ce.visible=!1,e.add(ce),t.train=ce;let le=Xu({w:9,d:6.5,h:3.1,roofC:`#454f5a`,doorSide:1});le.position.set(118,o(118,10),10),e.add(le),i(118,10,9,6.5,1),a(le,118,10,7,o(118,10)+6);for(let[t,n]of[[112.8,5],[123.4,5.5]]){let i=ld(n);i.position.set(t,o(t,5.6),5.6),e.add(i),r(t,5.6,n/2,.5)}let ue=qu(!1,11);ue.position.set(124,o(124,13),13),e.add(ue),t.trees.push({x:124,z:13,big:!1}),n(124,13,.6);let de=xd();de.position.set(108.5,o(108.5,13),13),e.add(de),r(108.5,13,2.3,1.8);for(let[t,n,r,s,c,l]of[[100,14,6,4.6,`#5f5346`,-1],[134,12,5.4,4.4,`#6b4438`,-1],[98,-2,5.6,4.4,`#4e5a4e`,1]]){let u=Xu({w:r,d:s,h:2.7,roofC:c,doorSide:l});u.position.set(t,o(t,n),n),e.add(u),i(t,n,r,s,l),a(u,t,n,r/2+2,o(t,n)+5.2)}let fe=ud();fe.position.set(105,o(105,-7),-7),fe.rotation.y=.2,e.add(fe),n(105,-7,.7);let j=new H(new ea(15,11,12),q(new V().setHSL(.35,.3,.3)));j.position.set(Hd.x,Gd(Hd.x,Hd.z)+4,Hd.z),e.add(j),n(Hd.x,Hd.z,12),a(j,Hd.x,Hd.z,15.5,j.position.y+5.5);for(let r=0;r<9;r++){let i=Z(r,61)*Math.PI*2,a=13+Z(r,62)*9,s=Hd.x+Math.cos(i)*a,c=Hd.z+Math.sin(i)*a,l=Ju(r);l.position.set(s,o(s,c),c),e.add(l),t.trees.push({x:s,z:c,big:!1}),n(s,c,.5)}let pe=sd();pe.position.set(154,o(154,47),47),pe.rotation.y=.5,e.add(pe),n(154,47,1.1);let me=[];for(let e=0;e<4;e++)for(let t=0;t<3;t++)me.push([12+e*13,50+t*11]);for(let e=0;e<3;e++)for(let t=0;t<3;t++)me.push([90+e*13,24+t*11]);let he=nd(me.length*14*8),ge=0;for(let[t,n]of me){let r=o(t,n),i=new H(new U(11.4,.14,9.4),q(8231534,{transparent:!0,opacity:.93}));i.position.set(t,r+.2,n),e.add(i);let a=new H(new U(12.4,.55,10.4),q(10521182));a.position.set(t,r+.05,n),a.receiveShadow=!0,e.add(a);for(let e=0;e<8;e++)for(let i=0;i<14;i++)s.position.set(t-5.1+i*.78,r+.24,n-3.9+e*1.1),s.rotation.set(0,Z(i,e)*3,0),s.scale.setScalar(.85+Z(i+t,e+n)*.4),s.updateMatrix(),he.setMatrixAt(ge++,s.matrix)}e.add(he);let _e=[];for(let e of[-149,-142,-128,-121])for(let t of[-49,-59])_e.push([e,t]);let ve=nd(_e.length*8*7),ye=0;for(let[t,n]of _e){let i=o(t,n),a=new H(new U(7,1.1,9.2),q(10521182));a.position.set(t,i+.2,n),a.receiveShadow=!0,e.add(a);let c=new H(new U(6.2,.14,8.4),q(8231534,{transparent:!0,opacity:.93}));c.position.set(t,i+.62,n),e.add(c);let l=ld(9);l.rotation.y=Math.PI/2,l.position.set(t+3.6,o(t+3.6,n),n),e.add(l);for(let e=0;e<7;e++)for(let r=0;r<8;r++)s.position.set(t-2.7+r*.78,i+.66,n-3.3+e*1.1),s.rotation.set(0,Z(r+t,e)*3,0),s.scale.setScalar(.85+Z(r,e+n)*.4),s.updateMatrix(),ve.setMatrixAt(ye++,s.matrix);r(t,n,3.5,4.6)}e.add(ve);let be=new B,xe=new H(new U(2.6,2.1,2.2),q(7033142));xe.position.y=1.05,xe.castShadow=!0;let Se=new H(new ea(2.3,1.2,4),q(4864556));Se.position.y=2.7,Se.rotation.y=Math.PI/4,be.add(xe,Se),be.position.set(-130,o(-130,-41.5),-41.5),e.add(be),n(-130,-41.5,1.7);let Ce=new B,we=new H(new W(.06,.09,2.1,5),q(9071170));we.position.y=1.05;let Te=new H(new U(1.5,.09,.09),q(9071170));Te.position.y=1.55;let Ee=new H(new U(.7,.75,.4),q(11553338));Ee.position.y=1.25;let De=new H(new Ma(.24,8,6),q(15785136));De.position.y=1.85;let Oe=new H(new ea(.42,.32,8),q(13150286));Oe.position.y=2.05,Ce.add(we,Te,Ee,De,Oe),Ce.traverse(e=>{e.castShadow=!0}),Ce.position.set(-135,o(-135,-49),-49),Ce.rotation.y=.4,e.add(Ce),n(-135,-49,.4);let ke=Xu({w:9,d:6.5,h:3.1,roofC:`#5a4438`});ke.position.set(32,o(32,14),14),e.add(ke),i(32,14,9,6.5,1),a(ke,32,14,7,o(32,14)+6);for(let[t,n]of[[26.5,5],[38,5.5]]){let i=ld(n);i.position.set(t,o(t,20.8),20.8),e.add(i),r(t,20.8,n/2,.5)}for(let t=0;t<36;t++){let n=td(t),r=17+t%6*1.5+Math.sin(t*7)*.4,i=27+Math.floor(t/6)*1.4+Math.cos(t*5)*.4;n.position.set(r,o(r,i),i),n.rotation.y=-.6+Math.sin(t)*.25,e.add(n)}let Ae=Xu({w:7.5,d:5,h:2.9,roofC:`#5a4438`});Ae.position.set(-52,o(-52,17),17),e.add(Ae),i(-52,17,7.5,5,1),a(Ae,-52,17,6.2,o(-52,17)+5.5);let je=new H(new U(3,.9,.06),q(2903416));je.position.set(-52,o(-52,20)+2.2,20),e.add(je);let Me=dd();Me.position.set(-48,o(-48,21.2),21.2),e.add(Me),n(-48,21.2,.5);let Ne=Xu({w:5.6,d:4.6,h:2.6,roofC:`#7a3a30`});Ne.position.set(-63,o(-63,17.2),17.2),e.add(Ne),i(-63,17.2,5.6,4.6,1),a(Ne,-63,17.2,5.2,o(-63,17.2)+5);for(let[t,n,r,s]of[[-40,6,4.6,`#5f5346`],[-31.5,5.2,4.3,`#6b4438`],[-72.5,5.4,4.4,`#4e5a4e`]]){let c=Xu({w:n,d:r,h:2.7,roofC:s});c.position.set(t,o(t,17.4),17.4),e.add(c),i(t,17.4,n,r,1),a(c,t,17.4,n/2+2,o(t,17.4)+5.2)}let Pe=ad();Pe.position.set(-56.5,o(-56.5,20.6),20.6),Pe.rotation.y=.15,e.add(Pe),n(-56.5,20.6,.7);let Fe=ud();Fe.position.set(-59.6,o(-59.6,19.9),19.9),Fe.rotation.y=.1,e.add(Fe),n(-59.6,19.9,.7);let Ie=fd();Ie.position.set(-20,o(-20,26.6),26.6),e.add(Ie),n(-20,26.6,.4);let M=Zu(1.15);M.position.set(2.5,o(2.5,-47),-47),M.rotation.y=.15,e.add(M),n(.5,-47,.4),n(4.6,-47,.4);let Le=Qu();Le.position.set(0,o(0,-66),-66),e.add(Le),r(0,-66,4.9,3.9),r(0,-62,1.5,1.3),a(Le,0,-66,6.5,o(0,-66)+5.5);for(let t of[-1,1]){let r=$u();r.position.set(t*3,o(t*3,-58),-58),e.add(r),n(t*3,-58,.4)}let Re=qu(!0,3);Re.position.set(-9,o(-9,-54),-54),e.add(Re),t.trees.push({x:-9,z:-54,big:!0}),n(-9,-54,1.2);for(let t=0;t<16;t++){let n=-16-Z(t,21)*9,r=-68-Z(t,22)*8,i=Yu(t);i.position.set(n,o(n,r),r),e.add(i)}n(-20,-72,4.5);let ze=Zu(.82);ze.position.set(13,o(13,-53),-53),ze.rotation.y=-.12,e.add(ze),n(11.6,-53,.35),n(14.4,-53,.35);let N=Qu();N.scale.setScalar(.72),N.position.set(14,o(14,-64),-64),N.rotation.y=-.12,e.add(N),r(14,-64,3.6,2.9),r(13.7,-61.1,1.2,1),a(N,14,-64,5,o(14,-64)+4.4);for(let[t,n,r,s]of[[-150,-12,`#5f5346`,-1],[-172,-10,`#6b4438`,-1]]){let c=Xu({w:7,d:5,h:2.8,roofC:r,doorSide:s});c.position.set(t,o(t,n),n),e.add(c),i(t,n,7,5,s),a(c,t,n,5.8,o(t,n)+5.3)}for(let t=0;t<3;t++)for(let r=0;r<2;r++){let i=-186+t*4.2,a=-10+r*4.4,s=od(t*3+r);s.position.set(i,o(i,a),a),e.add(s),n(i,a,.5)}let Be=rd(15);Be.position.set(-181.8,o(-181.8,-2.5),-2.5),e.add(Be);for(let[t,n]of[[26.5,7.6],[31.5,8]]){let i=zd(t)+n,a=id();a.position.set(t,o(t,i),i),a.rotation.y=Math.PI,e.add(a),r(t,i,1,.35)}let P=vd(),Ve=o(66,-44);P.position.set(66,Ve,-44),e.add(P),r(66,-44,17.3,8.3),a(P,66,-44,19,Ve+8.6),e.add(nf(rf([[51,-32.5],[81,-32.5]],4),13,.07,9408660));for(let t=0;t<7;t++){let n=54+t*4,r=new H(new U(.18,.05,4.8),q(15790314));r.position.set(n,o(n,-33.2)+.12,-33.2),e.add(r)}let He=[13685976,11811380,3824276,15262412];[[56,-33.3,.05],[60,-33.3,0],[64,-33.3,-.04],[72,-33.3,.08]].forEach(([t,n,i],a)=>{let s=Sd(He[a%He.length]);s.position.set(t,o(t,n)+.08,n),s.rotation.y=Math.PI/2+i,e.add(s),r(t,n,1.1,2)});let Ue=yd();Ue.position.set(-32,o(-32,3),3),Ue.rotation.y=Math.PI/2,e.add(Ue),r(-32,3,4.3,6.8),a(Ue,-32,3,8.5,o(-32,3)+7);let We=Xu({w:10,d:6,h:3.4,roofC:`#3f4f5f`});We.position.set(-8,o(-8,17.5),17.5),e.add(We),i(-8,17.5,10,6,1),a(We,-8,17.5,8,o(-8,17.5)+6.4);let Ge=_d(`うどんかいかん`,{bg:`#2c4d78`,fg:`#ffffff`,w:5.6,h:1.05});Ge.position.set(-8,o(-8,17.5)+3.35,20.7),e.add(Ge);for(let[t,n,r,s,c,l,u]of[[-76,29.5,5.6,4.4,`#5f5346`,-1,.05],[-46,29.5,5.2,4.2,`#6b4438`,-1,-.04],[-36,29.5,6,4.6,`#4e5a4e`,-1,.03],[-26,29.5,5.4,4.4,`#5a4438`,-1,0],[-12,29.5,5.8,4.5,`#5f5346`,-1,-.05],[0,29.5,5.2,4.2,`#454f5a`,-1,.04],[10,29.5,6,4.6,`#6b4438`,-1,0],[94,13.4,5.4,4.4,`#6b4438`,-1,.04],[144,-3,5.6,4.4,`#5f5346`,1,-.03],[98,-6,5.2,4.2,`#454f5a`,1,.05],[-128,-3,5.6,4.4,`#5f5346`,-1,.06]]){let d=Xu({w:r,d:s,h:2.7,roofC:c,doorSide:l});d.position.set(t,o(t,n),n),d.rotation.y=u,e.add(d),i(t,n,r+.5,s+.5,l),a(d,t,n,r/2+2.2,o(t,n)+5.2)}let Ke=q(2763304),qe=(t,r)=>{let i=[];for(let a of t){let t=cd(),s=o(a,r);t.position.set(a,s,r),e.add(t),n(a,r,.3),i.push({px:a,py:s})}for(let t=0;t<i.length-1;t++)for(let n of[7.9,7.2]){let a=new R(i[t].px,i[t].py+n,r),o=new R(i[t+1].px,i[t+1].py+n,r),s=a.clone().lerp(o,.5);s.y-=.7;let c=new Oa(a,s,o);e.add(new H(new Pa(c,10,.03,4),Ke))}};qe([-78,-59,-40,-21,-2,17,36],22),qe([98,116,134,152],6.3),[[10,2],[26,-2],[38,3],[-6,-4],[-14,-2],[-38,-6],[43,-11],[58,2],[8,-46],[24,-52],[-14,-64],[6,-70],[-18,-44],[26,-64],[40,30],[50,40],[-20,55],[-52,50],[-30,76],[-14,40],[60,60],[70,20],[-80,40],[-90,10],[-40,-30],[-60,-20],[-75,-45],[30,-30],[40,-48],[70,-15],[-25,-75],[35,70],[66,44],[100,20],[126,16],[142,10],[108,54],[140,66],[118,86],[144,88],[160,20],[96,-2],[130,-6],[-120,-4],[-136,4],[-158,-2],[-176,-20]].forEach(([r,i],a)=>{Math.abs(i-zd(r))<10&&(i+=13);let s=a%5==4?Ju(a):qu(!1,a);s.position.set(r,o(r,i),i),e.add(s),t.trees.push({x:r,z:i,big:!1}),n(r,i,.6)});let Je=0,Ye=0;for(;Je<240&&Ye++<12e3;){let t=-228+Z(Ye,31)*456,n=-142+Z(Ye,32)*284;if(!(t<-95||n<-85||n>95||t>175||Kd(t,n)>3)||Math.abs(n-zd(t))<10||Math.hypot(t-Y.x,n-Y.z)<Y.r+6||Qd(t,n)<2.4||ef(t,n)<3.5||t>-152&&t<-118&&n>-68&&n<-38)continue;let r=Ye%3==0?Ju(Ye):qu(!1,Ye);r.scale.setScalar(.95+Z(Ye,33)*.7),r.position.set(t,o(t,n),n),e.add(r),Je++}let Xe=new ea(.22,.55,4);Xe.translate(0,.24,0);let Ze=new ji(Xe,new Ga({color:16777215}),6e3),Qe=new V,$e=0,et=0;for(;$e<6e3&&et++<9e4;){let e=-228+Z(et,41)*456,n=-208+Z(et,42)*353;if(Math.abs(n-zd(e))<7.5||Math.hypot(e-Y.x,n-Y.z)<Y.r+4||Math.hypot(e-X.x,n-X.z)<X.r+1.5||Qd(e,n)<.7||ef(e,n)<2.2||e>4&&e<60&&n>43&&n<79||e>82&&e<124&&n>17&&n<53||e>45&&e<87&&n>-55&&n<-24||e>-152&&e<-118&&n>-68&&n<-38||e>-55&&e<-30&&n>47&&n<68)continue;let r=!1;for(let i of t.rects)if(Math.abs(e-i.x)<i.hx+1&&Math.abs(n-i.z)<i.hz+1){r=!0;break}r||(s.position.set(e,o(e,n),n),s.rotation.set(0,Z(et,43)*6,0),s.scale.setScalar(.6+Z(et,44)*1.1),s.updateMatrix(),Ze.setMatrixAt($e,s.matrix),Qe.setHSL(.26+Z(et,45)*.04,.55,.16+Z(et,46)*.09),Ze.setColorAt($e,Qe),$e++)}Ze.count=$e,e.add(Ze);let F=new Ma(.09,6,5);F.translate(0,.17,0);let I=new ji(F,new Ga({color:16777215}),420),tt=[16117462,15782504,14721204,14541808],nt=0,rt=0;for(;nt<420&&rt++<3e4;){let e=-225+Z(rt,51)*450,n=-140+Z(rt,52)*280,r=Qd(e,n);if(r<1.2||r>6||Math.abs(n-zd(e))<8||Math.hypot(e-Y.x,n-Y.z)<Y.r+4||ef(e,n)<2.4||e>4&&e<60&&n>43&&n<79||e>82&&e<124&&n>17&&n<53||e>45&&e<87&&n>-55&&n<-24||e>-55&&e<-30&&n>47&&n<68)continue;let i=!1;for(let r of t.rects)if(Math.abs(e-r.x)<r.hx+1&&Math.abs(n-r.z)<r.hz+1){i=!0;break}i||(s.position.set(e,o(e,n),n),s.rotation.set(0,0,0),s.scale.setScalar(.7+Z(rt,53)*.7),s.updateMatrix(),I.setMatrixAt(nt,s.matrix),Qe.set(tt[rt%tt.length]),I.setColorAt(nt,Qe),nt++)}I.count=nt,e.add(I);let it=rd(50);it.position.set(31.5,o(31.5,43.6),43.6),e.add(it);let at=rd(20);at.rotation.y=Math.PI/2,at.position.set(3.6,o(3.6,55),55),e.add(at);let ot=rd(26);ot.position.set(96,o(96,16.4),16.4),e.add(ot);for(let t=0;t<12;t++){let n=t/12*Math.PI*2+.3,r=250+t%3*40,i=42+t%4*18,a=new V().setHSL(.36-t%3*.02,.25,.34+t%3*.06),o=new H(new ea(64+t%3*24,i,9),q(a)),s=Math.cos(n)*r,c=Math.sin(n)*r*.85;o.position.set(s,i/2-5+Gd(s,c)*.5,c),e.add(o)}for(let[t,n,r,i]of[[-290,-145,52,48]]){let a=new H(new ea(i,r,16),q(new V().setHSL(.42,.24,.4)));a.position.set(t,r/2-3+Gd(t,n)*.6,n),e.add(a)}let st=[[-70,124,18,22],[40,126,22,26],[105,122,14,18]];for(let t=0;t<st.length;t++){let[r,i,s,c]=st[t],l=new V().setHSL(.33+Z(t,91)*.05,.3,.3+Z(t,92)*.08),u=new H(new ea(c,s,10),q(l));u.position.set(r,o(r,i)+s/2-.6,i),e.add(u),n(r,i,c*.75),i>0&&a(u,r,i,c+.5,o(r,i)+s*.5);for(let a=0;a<5;a++){let s=Z(t,a)*Math.PI*2,l=c*(.85+Z(a,t+40)*.35),u=r+Math.cos(s)*l,d=i+Math.sin(s)*l;if(Math.abs(u)>228||Math.abs(d)>145)continue;let f=Ju(t*7+a);f.position.set(u,o(u,d),d),e.add(f),n(u,d,.5)}}let ct=[{c:Ud,n:52},{c:Wd[0],n:13},{c:Wd[1],n:15},{c:Wd[2],n:10}],lt=0;for(let r of ct)for(let i=0;i<r.n;i++){lt++;let i=Z(lt,301)*Math.PI*2,a=r.c.r*(.16+Z(lt,302)*.92),s=r.c.x+Math.cos(i)*a,c=r.c.z+Math.sin(i)*a;if(Math.abs(s)>228||c>145||c<-208||Qd(s,c)<2.1||Math.hypot(s-X.x,c-X.z)<X.r+5.5||Math.hypot(s-Ud.x,c-Ud.z)<8||Math.abs(c-zd(s))<10)continue;let l=Z(lt,303)<.62?Ju(lt):qu(Z(lt,304)<.25,lt);l.position.set(s,o(s,c)-.12,c),e.add(l),n(s,c,.55),Z(lt,303)>=.62&&t.trees.push({x:s,z:c,big:Z(lt,304)<.25})}let ut=new ji(new na(.6,0),q(9078652),24);for(let e=0;e<24;e++){let t=Z(e,311)*Math.PI*2,n=Ud.r*(.12+Z(e,312)*.55),r=Ud.x+Math.cos(t)*n,i=Ud.z+Math.sin(t)*n;s.position.set(r,o(r,i)+.12,i),s.rotation.set(Z(e,313)*3,Z(e,314)*3,0),s.scale.setScalar(.5+Z(e,315)*1.5),s.updateMatrix(),ut.setMatrixAt(e,s.matrix)}e.add(ut);let dt=Td([{text:`つつみやま`,side:-1},{text:`たきのみや`,side:1}]);dt.position.set(-19.5,o(-19.5,-83),-83),dt.rotation.y=.5,e.add(dt),n(-19.5,-83,.25);let ft=Td([{text:`たきつぼ`,side:1},{text:`さんちょう`,side:-1}]);ft.position.set(-41,o(-41,-122.5),-122.5),ft.rotation.y=-.4,e.add(ft),n(-41,-122.5,.25);let pt=new H(new $i(X.r+.5,26),q(6728383,{transparent:!0,opacity:.72}));pt.rotation.x=-Math.PI/2,pt.position.set(X.x,X.y,X.z),e.add(pt);let mt=new Ga({map:Ku(),transparent:!0,opacity:.85,emissive:1849928}),ht=new H(new ja(2.6,4.6),mt);ht.position.set(X.x,X.y+1.7,X.z-3.35),ht.rotation.x=-.09,e.add(ht),t.fallMat=mt;let gt=new H(new $i(1.5,18),q(15266548,{transparent:!0,opacity:.6}));gt.rotation.x=-Math.PI/2,gt.position.set(X.x,X.y+.02,X.z-3.1),e.add(gt),t.foamMat=gt.material;for(let[t,r,i]of[[-35.7,-131.4,2.1],[-30.3,-131.2,1.9],[-33,-132.8,2.5],[-37.9,-129.6,1.4],[-28.3,-129.4,1.3]]){let a=new H(new na(i,0),q(7828586));a.position.set(t,o(t,r)+i*.3,r),a.rotation.set(Z(t,r)*3,Z(r,t)*3,0),e.add(a),n(t,r,i*.75)}t.sawaMats=[];for(let n of[[[-51,-157],[-45,-151],[-40,-146],[-35,-138],[-33.4,-133.4]],[[-31.8,-122.8],[-29.5,-113],[-26.5,-101],[-24,-92],[-22.5,-86.5]]]){let r=nf(rf(n,2),1,.07,16777215);r.material.map=Ku(),r.material.transparent=!0,r.material.opacity=.85,e.add(r),t.sawaMats.push(r.material)}t.ayu=[];for(let n=0;n<3;n++){let r=new B,i=new H(new Ma(.3,8,6),q(4609630,{transparent:!0,opacity:.88}));i.scale.set(1.5,.38,.55);let a=new H(new ea(.11,.28,4),q(3951186,{transparent:!0,opacity:.88}));a.rotation.z=Math.PI/2,a.position.x=-.52,r.add(i,a),r.position.set(X.x+Math.cos(n*2.1)*1.8,X.y-.08,X.z+Math.sin(n*2.1)*1.8),r.visible=!1,e.add(r),t.ayu.push(r)}let _t=new H(new na(1.9,0),q(9276030));_t.position.set(Ud.x,o(Ud.x,Ud.z-1.5)+.5,Ud.z-1.5),_t.scale.set(1.35,.72,1.1),_t.rotation.y=.7,e.add(_t),n(Ud.x,Ud.z-1.5,1.8);let vt=new B,yt=new H(new U(.9,.5,.7),q(10130828));yt.position.y=.25;let bt=new H(new U(.68,.6,.55),q(9078138));bt.position.y=.8;let xt=new H(new ea(.62,.42,4),q(6972764));xt.position.y=1.31,xt.rotation.y=Math.PI/4,vt.add(yt,bt,xt),vt.position.set(-64.5,o(-64.5,-163),-163),vt.rotation.y=.6,e.add(vt),n(-64.5,-163,.7);let St=Td([{text:`つつみやま 201m`,side:1}]);St.position.set(-56.5,o(-56.5,-162.5),-162.5),St.rotation.y=.3,e.add(St),n(-56.5,-162.5,.25),t.summit={x:-58.5,z:-163.8};let Ct=e=>{let t=new B;for(let e of[-1.55,1.55]){let n=new H(new W(.05,.06,1.8,5),q(9078136));n.position.set(e,.9,0),t.add(n)}let n=new H(new W(.035,.035,3.1,5),q(13154448));return n.rotation.z=Math.PI/2,n.position.y=1.62,t.add(n),e.forEach((e,n)=>{let r=new H(new U(.55,.68,.05),q(e));r.position.set(-1.05+n*.72,1.24,0),t.add(r)}),t};t.laundry=[];for(let n of[{x:112.5,z:16.5,ry:.2,cols:[15789540,8102872,15255744,15789540]},{x:38.7,z:17,ry:-.3,cols:[14213354,15787696,13162688]},{x:-144.5,z:-16.5,ry:.15,cols:[16777215,8956104,14735560]}]){let r=Ct(n.cols);r.position.set(n.x,o(n.x,n.z),n.z),r.rotation.y=n.ry,e.add(r),t.laundry.push(r)}let wt=new B,Tt=new H(new W(.012,.012,.5,4),q(5592405));Tt.position.y=.25;let Et=new H(new ea(.13,.16,10),q(8044760,{transparent:!0,opacity:.85}));Et.position.y=0;let Dt=new H(new ja(.09,.26),q(16711422,{side:2}));Dt.position.y=-.24,wt.add(Tt,Et,Dt),wt.position.set(115.4,o(115.4,14.2)+2.42,14.2),e.add(wt),t.furin=wt;let Ot=[[-300,-270,85,130],[-190,-320,68,110],[-80,-345,92,140],[30,-350,72,115],[140,-330,88,135],[250,-290,64,105],[335,-220,74,115],[-355,-60,78,120],[355,-30,66,105]];for(let t=0;t<Ot.length;t++){let[n,r,i,a]=Ot[t],o=new V().setHSL(.4,.22,.3+t%3*.05),s=new H(new ea(a,i,10),q(o));s.position.set(n,i/2-6,r),e.add(s)}let kt=new B,At=[14172987,3895e3,14197307];[[-7,-46],[0,-44],[7,-46]].forEach(([e,n],r)=>{let i=pd(At[r]);i.position.set(e,o(e,n),n),i.rotation.y=Math.PI,kt.add(i),t.festivalRects=t.festivalRects||[],t.festivalRects.push({x:e,z:n,hx:1.5,hz:.9})});for(let e=0;e<10;e++){let n=-9+e*2,r=md();r.position.set(n,o(n,-50)+3+Math.sin(e*1.3)*.15,-50),kt.add(r),r.traverse(e=>{e.userData&&e.userData.lantern&&t.lanternMats.push(e.material)})}for(let e=0;e<8;e++){let n=.5+e%2*4,r=-46+e*1.2-4,i=md();i.position.set(n,o(n,r)+2.6,r),kt.add(i),i.traverse(e=>{e.userData&&e.userData.lantern&&t.lanternMats.push(e.material)})}let jt=new B,L=[];for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=Cd({body:e%2?3890904:15262416,hat:13150286,scale:.95}).group;n.position.set(Math.cos(t)*3.2,0,Math.sin(t)*3.2),n.rotation.y=Math.atan2(-Math.cos(t),-Math.sin(t)),jt.add(n),L.push(n)}let Nt=Cd({body:13122098,hat:2760728}).group;jt.add(Nt);let Pt=new H(new W(.5,.5,.6,10),q(10504744));Pt.position.set(1.3,.62,0),Pt.rotation.z=Math.PI/2,jt.add(Pt),jt.position.set(0,o(0,-55),-55),kt.add(jt),t.odoriGroup=jt,t.odoriDancers=L,kt.visible=!1,e.add(kt),t.festivalGroup=kt;let z=new B;z.add(Object.assign(new H(new W(.14,.16,.05,10),q(15777856,{emissive:9071130}))));let Ft=new H(new Ma(.32,8,6),new ci({color:16769162,transparent:!0,opacity:.22,depthWrite:!1}));Ft.position.y=.1,z.add(Ft),z.visible=!1,e.add(z),t.capMarker=z;let It=bd();It.position.set(-42,o(-42,52),52),e.add(It),r(-42,52,8.9,3),a(It,-42,52,9.5,o(-42,52)+6.5),e.add(nf(rf([[-51,60],[-33.5,60]],3),13,.04,13349511));let Lt=new B;for(let e of[-1.1,1.1]){let t=new H(new W(.05,.05,1.15,6),q(3829413));t.position.set(e,.55,0),Lt.add(t)}let Rt=new H(new W(.03,.03,2.3,6),q(13159632));Rt.rotation.z=Math.PI/2,Rt.position.y=1.1,Lt.add(Rt),Lt.position.set(-35.5,o(-35.5,64.5),64.5),e.add(Lt),r(-35.5,64.5,1.3,.2);let zt=new B,Bt=new H(new U(.8,.8,.8),q(15921902));Bt.position.y=1,Bt.castShadow=!0,zt.add(Bt);for(let[e,t]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]]){let n=new H(new W(.04,.04,.7,5),q(15921902));n.position.set(e,.35,t),zt.add(n)}zt.position.set(-49.5,o(-49.5,56.5),56.5),e.add(zt),n(-49.5,56.5,.6);for(let t of[58.2,61.8]){let r=new H(new U(.6,1.7,.6),q(10130570));r.position.set(-51.3,o(-51.3,t)+.85,t),r.castShadow=!0,e.add(r),n(-51.3,t,.5)}for(let[r,i]of[[-31,54],[-53.5,63.5]]){let a=qu(!1,r+i);a.position.set(r,o(r,i),i),e.add(a),t.trees.push({x:r,z:i,big:!1}),n(r,i,.6)}let Vt=new B;t.gakusaiRects=[],[[-47,61.5],[-42,62.5],[-37,61.5]].forEach(([e,n],r)=>{let i=pd(At[(r+1)%3]);i.position.set(e,o(e,n),n),Vt.add(i),t.gakusaiRects.push({x:e,z:n,hx:1.5,hz:.9})});for(let e=0;e<8;e++){let n=-49+e*2,r=md();r.position.set(n,o(n,58.5)+3+Math.sin(e*1.7)*.15,58.5),Vt.add(r),r.traverse(e=>{e.userData&&e.userData.lantern&&t.lanternMats.push(e.material)})}Vt.visible=!1,e.add(Vt),t.gakusaiGroup=Vt;for(let[t,r,i,a]of[[16,-11.8,.1,[{text:`たきのみや`,side:-1},{text:`すえ・モール`,side:1}]],[17.2,27.5,0,[{text:`てんまんぐう`,side:-1},{text:`ミナんち`,side:1}]],[-16,27.2,0,[{text:`しょうてんがい`,side:-1},{text:`はし・かわら`,side:1}]],[123.5,4.8,-.15,[{text:`すえの えき`,side:-1},{text:`ほうじょういけ`,side:1}]],[131.5,41.5,.2,[{text:`とかめやま`,side:1}]],[-92,13,.5,[{text:`あやかみ (とおい)`,side:-1}]],[-68,56.5,.3,[{text:`しょうがっこう`,side:1}]]]){let s=Td(a);s.position.set(t,o(t,r),r),s.rotation.y=i,e.add(s),n(t,r,.35)}for(let t=0;t<26;t++){let n=9+Z(t,71)*12,r=zd(n)+6+.8+Z(t,72)*3.4,i=new H(new na(.16+Z(t,73)*.22,0),Ru(Z(t,74)<.5?10130570:9078140));i.scale.y=.4,i.rotation.y=Z(t,75)*3,i.position.set(n,o(n,r)+.05,r),i.castShadow=!0,e.add(i)}for(let[t,r,i]of[[11,1.4,.55],[16.5,2.6,.7],[24.5,1.8,.5]]){let a=zd(t)+6+r,s=new H(new na(i,0),Ru(9275518));s.scale.y=.62,s.position.set(t,o(t,a)+i*.25,a),s.castShadow=!0,e.add(s),n(t,a,i*.8)}for(let t=0;t<7;t++){let n=zd(48)-6+1+10/6*t,r=48+(Z(t,81)-.5)*.7,i=new H(new na(.62+Z(t,82)*.15,0),Ru(9670794));i.scale.y=.45,i.rotation.y=Z(t,83)*3,i.position.set(r,qd(r)+.12,n),i.castShadow=!0,e.add(i)}let Ht=Ed();Ht.position.set(-15,o(-15,-78),-78),Ht.rotation.y=.5,e.add(Ht),a(Ht,-15,-78,3.4,o(-15,-78)+2.2),r(-15.9,-78.8,1.4,.5);for(let t=0;t<14;t++){let r=t/14*Math.PI*2,i=-15+Math.cos(r)*(5+Z(t,91)*2.5),a=-78+Math.sin(r)*(4.5+Z(t,92)*2);if(a>-74.5&&i>-17&&i<-12)continue;let s=Yu(t+40);s.position.set(i,o(i,a),a),e.add(s),n(i,a,.25)}for(let t=0;t<5;t++){let r=140+t%3*1.7,i=19.5+Math.floor(t/3)*1.9,a=Dd(t);a.position.set(r,o(r,i),i),a.rotation.y=-.1+Z(t,95)*.2,e.add(a),n(r,i,.5)}let Ut=ld(7);Ut.position.set(141.7,o(141.7,23.4),23.4),e.add(Ut),r(141.7,23.4,3.5,.4);let Wt=Ju(77);Wt.position.set(137.5,o(137.5,21.5),21.5),e.add(Wt),t.trees.push({x:137.5,z:21.5,big:!1}),n(137.5,21.5,.5);let Gt=Od(),Kt={x:157,z:59.5};Gt.position.set(Kt.x,o(Kt.x,Kt.z),Kt.z),Gt.rotation.y=Math.PI,e.add(Gt),t.lookout=Kt,r(Kt.x,Kt.z+1.5,2.3,.2);for(let[r,i]of[[153,46],[160,50],[154,56],[161,62]]){let a=Ju(r+i);a.position.set(r,o(r,i),i),e.add(a),t.trees.push({x:r,z:i,big:!1}),n(r,i,.5)}let qt=nf(rf([[4,44],[4,76]],4),1.1,.05,5929610);qt.material.transparent=!0,qt.material.opacity=.9,e.add(qt);for(let t of[50,62,74]){let n=new H(new U(1.5,.08,1.1),q(9071172));n.position.set(4,o(4,t)+.12,t),e.add(n)}t.canal={x:4,z1:44,z2:76},t.interior=kd(e),t.interior2f=Ad(e),t.trainRide=Nd(e),t.trainRide.group.visible=!1,t.takamatsu=Fd(e),t.sub=null;for(let e of t.takamatsu.occluders)t.occluders.push(e);t.isBlocked=(e,n,r=!1,i=null)=>{if(t.indoor){let r=t.sub.bounds;if(e<r.minX||e>r.maxX||n<r.minZ||n>r.maxZ)return!0;for(let r of t.sub.rects)if(Math.abs(e-r.x)<r.hx+.35&&Math.abs(n-r.z)<r.hz+.35)return!0;let i=t.sub.baachan;return!!(i&&i.visible&&Math.hypot(e-i.position.x,n-i.position.z)<.66)}for(let r of t.npcColliders)if(r.id!==i&&Math.abs(e-r.x)<r.r&&Math.abs(n-r.z)<r.r&&Math.hypot(e-r.x,n-r.z)<r.r)return!0;if(Math.abs(e)>232||n>148||n<-212)return!0;let a=zd(e),o=Math.abs(n-a);if(o<6.5&&!(e>17.8&&e<22.2)&&!(e>-23&&e<-18.6)&&!(e>-139.7&&e<-135.3)&&!(e>46.8&&e<49.2)||o<13&&ef(e,n)<1.6||Math.hypot(e-Y.x,n-Y.z)<Y.r+.5)return!0;for(let r of t.circles)if(Math.hypot(e-r.x,n-r.z)<r.r+.45)return!0;for(let r of t.rects)if(Math.abs(e-r.x)<r.hx+.4&&Math.abs(n-r.z)<r.hz+.4)return!0;if(r&&t.activeFestivalRects){for(let r of t.activeFestivalRects)if(Math.abs(e-r.x)<r.hx+.4&&Math.abs(n-r.z)<r.hz+.4)return!0}return!1},t.updateOcclusion=(e,n,r)=>{for(let i of t.occluders){let a=1;if((!t.indoor||t.sub&&t.sub.outdoor)&&Math.abs(e.x-i.x)<45&&Math.abs(e.z-i.z)<45){let t=n.x-e.x,r=n.z-e.z,o=Math.max(0,Math.min(1,((i.x-e.x)*t+(i.z-e.z)*r)/(t*t+r*r||1)));Math.hypot(i.x-(e.x+t*o),i.z-(e.z+r*o))<i.r&&e.y+2.4+(n.y-e.y-2.4)*o<i.topY&&(a=.24)}if(!(a===1&&i.fade===1)){i.fade+=(a-i.fade)*Math.min(1,r*7),a===1&&i.fade>.99&&(i.fade=1);for(let e of i.mats)e.opacity=i.fade,e.transparent=i.fade<.995}}};{e.updateMatrixWorld(!0);let n=new R,r=new Mt,i=new R;e.traverse(e=>{let a=e.userData&&e.userData.camBlock;if(!a)return;e.matrixWorld.decompose(n,r,i);let o=(i.x+i.z)/2;t.camObstacles.push({x:n.x,z:n.z,r:a.r*o,y0:n.y+a.y0*i.y,y1:n.y+a.y1*i.y})})}return Rd(e,t),t.waterZone=(e,n)=>{if(t.indoor)return null;let r=zd(e),i=Math.abs(n-r);if(i>=6.4&&i<10.5&&Math.abs(e)<230&&!(e>17&&e<23)&&!(e>-23.8&&e<-17.8)&&!(e>-140.5&&e<-134.5))return{zone:`river`,spot:new R(e,qd(e)+.06,r)};let a=Math.hypot(e-Y.x,n-Y.z);if(a>=Y.r+.4&&a<Y.r+4){let t=.55;return{zone:`pond`,spot:new R(Y.x+(e-Y.x)*t,Jd+.06,Y.z+(n-Y.z)*t)}}return null},t}var sf=[[340,2764885],[370,16238986],[430,11458286],[720,7650800],[950,9094376],[1010,15907176],[1055,15761472],[1095,14178880],[1130,10114416],[1165,4865909],[1210,2304589],[1290,1580604]],cf={sunny:[0,0],cloudy:[.55,.25],rain:[.78,.5],storm:[.9,.65]},lf=new V(9675179),uf=new V(5068382),df=new V(16777215),ff=new V(10336488),pf=new V(3108804),mf=new V(15660532),hf=new V(16051416),gf=new V(16742976),_f=new V;function vf(e){let t=new V;for(let n=0;n<sf.length-1;n++){let[r,i]=sf[n],[a,o]=sf[n+1];if(e>=r&&e<=a)return t.set(i).lerp(_f.set(o),(e-r)/(a-r)),t}return t.set(e<340?2764885:1580604)}function yf(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,4,64,64,64);return n.addColorStop(0,`rgba(255,250,235,1)`),n.addColorStop(.25,`rgba(255,235,190,0.85)`),n.addColorStop(.6,`rgba(255,215,150,0.25)`),n.addColorStop(1,`rgba(255,200,120,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new Ji(e)}function bf(e){let t=new B,n=new Ga({color:16777215,emissive:10134704,emissiveIntensity:.35}),r=t=>(Math.sin(e*91.7+t*47.3)*4375.8%1+1)%1,i=9+Math.floor(r(0)*5);for(let e=0;e<i;e++){let a=new H(new Ma(9+r(e+1)*14*(1-e/i),10,8),n);a.position.set((r(e+2)-.5)*44,e*6.5+r(e+3)*6,(r(e+4)-.5)*22),a.scale.y=.75,t.add(a)}return t}var xf=class{constructor(e){this.scene=e,this.uniforms={topColor:{value:new V(4161488)},bottomColor:{value:new V(11458286)},offset:{value:10},exponent:{value:.52}};let t=new Ua({uniforms:this.uniforms,side:1,depthWrite:!1,fog:!1,vertexShader:`varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform vec3 topColor; uniform vec3 bottomColor; uniform float offset; uniform float exponent; varying vec3 vPos;
        void main(){ float h = normalize(vPos + vec3(0.0, offset, 0.0)).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, pow(max(h, 0.0), exponent)), 1.0); }`});this.dome=new H(new Ma(400,24,12),t),this.dome.renderOrder=-10,e.add(this.dome),this.hemi=new fo(13624562,6980168,.9),e.add(this.hemi),this.sun=new ko(16772560,1.8),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-4e-4;let n=this.sun.shadow.camera;n.left=-75,n.right=75,n.top=75,n.bottom=-75,n.far=320,this.sunTarget=new kn,e.add(this.sunTarget),this.sun.target=this.sunTarget,e.add(this.sun),this.glow=new Qr(new Rr({map:yf(),transparent:!0,depthWrite:!1,fog:!1})),this.glow.scale.setScalar(110),e.add(this.glow),e.fog=new Ln(10406888,110,380);let r=new Mr,i=[];for(let e=0;e<400;e++){let e=Math.random()*Math.PI*2,t=Math.random()*Math.PI*.45+.12;i.push(Math.cos(e)*Math.cos(t)*360,Math.sin(t)*360,Math.sin(e)*Math.cos(t)*360)}r.setAttribute(`position`,new br(i,3)),this.stars=new Gi(r,new Bi({color:16777198,size:1.2,transparent:!0,opacity:0,sizeAttenuation:!1,fog:!1})),e.add(this.stars),this.moon=new H(new Ma(7,16,12),new ci({color:16117976,fog:!1})),e.add(this.moon),this.cumulus=[];for(let[t,n,r]of[[150,-270,0],[-230,-200,3],[260,-120,6],[-120,290,9]]){let i=bf(r);i.position.set(t,14,n),i.scale.setScalar(1.15),e.add(i),this.cumulus.push(i)}this.clouds=new B;for(let e=0;e<9;e++){let t=new B,n=new Ga({color:16777215,transparent:!0,opacity:.88,emissive:8949920,emissiveIntensity:.3});for(let r=0;r<5;r++){let i=new H(new Ma(4.5+(r*7+e*3)%6,8,6),n);i.position.set(r*6.5-13,(r*5+e)%3,(r*11+e*7)%8-4),i.scale.y=.5,t.add(i)}t.position.set(e/9*440-220,62+e%3*12,e*53%240-120),this.clouds.add(t)}e.add(this.clouds)}update(e,t,n){let r=e.min,i=e.weather,[a,o]=cf[i],s=vf(r);a&&s.lerp(lf,a),o&&s.lerp(uf,o*.6);let c=jt.clamp((r-350)/810,0,1),l=Math.max(0,Math.sin(c*Math.PI)),u=r>1160?Math.min(1,(r-1160)/80):Math.max(0,Math.min(1,(350-r)/40)),d=s.clone();u>.5?d.multiplyScalar(.45):d.lerp(pf,(.4+l*.4)*(1-a*.7)),this.uniforms.bottomColor.value.copy(s),u<.5&&this.uniforms.bottomColor.value.lerp(mf,l*.5*(1-a)),this.uniforms.topColor.value.copy(d),this.dome.position.set(t.x,0,t.z);let f=jt.clamp(1-Math.abs(c-.9)*4.5,0,1),p=jt.clamp(1-Math.abs(c-.05)*8,0,1)*.7,m=Math.max(f,p),h=l*(i===`sunny`?1:i===`cloudy`?.55:i===`rain`?.2:.1);this.scene.fog.color.copy(s).lerp(hf,h*.5),this.scene.fog.near=(i===`storm`?40:i===`rain`?65:110-m*45)-h*12,this.scene.fog.far=(i===`storm`?180:i===`rain`?240:380-m*90)-h*70;let g=Math.PI*(1-c),_=Math.sin(c*Math.PI)*1.15+.05;this.sun.position.set(t.x+Math.cos(g)*(80+m*40),Math.max(7,Math.sin(_)*90*(1-m*.62)),t.z+30),this.sunTarget.position.copy(t);let v=i===`storm`?.25:i===`rain`?.4:i===`cloudy`?.7:1;this.sun.intensity=Math.max((.7+l*1.7+m*.5)*v*(1-u*.85),u*.55*v),u>.55?(this.sun.color.setHSL(.6,.22,.74),this.sun.position.set(t.x+42,74,t.z+46)):this.sun.color.setHSL(.1-m*.055,.5+m*.4,.75-m*.16),this.hemi.intensity=(.62+l*.55)*(i===`storm`?.5:1)*(1-u*.34),this.hemi.color.copy(s).lerp(df,.45),u>0&&this.hemi.color.lerp(ff,u*.5),this.hemi.groundColor.setHSL(.22,.3,.22+l*.12);let y=new R(Math.cos(g)*300,Math.sin(_)*260,60);this.glow.position.copy(t).add(y),this.glow.material.opacity=l*(1-a)*(.55+m*.45);let b=110+m*70;this.glow.scale.setScalar(b),this.glow.material.color.setHSL(.09-m*.04,.8,.8-m*.1),this.stars.material.opacity=u*(i===`sunny`?.9:i===`cloudy`?.3:0),this.moon.visible=u>.1,this.moon.position.set(t.x-150,120,t.z-200),this.moon.material.color.setScalar(.7+u*.3);let x=new V(i===`sunny`?16777215:i===`cloudy`?14212576:9410462);(i===`sunny`||i===`cloudy`)&&x.lerp(new V(16752736),m*.75);for(let e of this.cumulus)e.visible=i!==`storm`,e.traverse(e=>{e.material&&(e.material.emissiveIntensity=.2+l*.25+m*.3,e.material.color.copy(x),e.material.emissive.setHex(10134704).lerp(gf,m*.8))});let S=i===`sunny`?.75:.95;this.clouds.children.forEach((e,t)=>{e.position.x+=n*(2+t%3)*(i===`storm`?6:1),e.position.x>240&&(e.position.x=-240),e.children.forEach(e=>{e.material.opacity=S*(1-u*.65),e.material.color.copy(x)})})}};function Sf(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,30);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new Ji(e)}var Cf=class{constructor(e,t,n,r){Object.assign(this,{scene:e,world:t,clock:n,audio:r});let i=new Mr,a=[];this.rainCount=700;for(let e=0;e<this.rainCount;e++)a.push((Math.random()-.5)*70,Math.random()*30,(Math.random()-.5)*70);i.setAttribute(`position`,new br(a,3)),this.rain=new Gi(i,new Bi({color:11191517,size:.14,transparent:!0,opacity:.7})),this.rain.visible=!1,e.add(this.rain);let o=new Mr,s=[];this.fireflyBase=[];for(let e=0;e<46;e++){let e=-20+Math.random()*60,t=zd(e)+(Math.random()<.5?-1:1)*(7+Math.random()*4),n=qd(e)+1.4;this.fireflyBase.push({x:e,y:n,z:t,ph:Math.random()*10}),s.push(e,n,t)}o.setAttribute(`position`,new br(s,3)),this.fireflies=new Gi(o,new Bi({color:13959034,size:.7,map:Sf(),transparent:!0,opacity:.9,blending:2,depthWrite:!1})),this.fireflies.visible=!1,e.add(this.fireflies);let c=(e,t)=>{let n=new Qr(new Rr({map:Sf(),color:11464959,transparent:!0,opacity:t,blending:2,depthWrite:!1}));return n.scale.setScalar(e),n};this.obake=new B,this.obakeCore=c(1.7,.85),this.obakeW1=c(.8,.5),this.obakeW2=c(.55,.4),this.obake.add(this.obakeCore,this.obakeW1,this.obakeW2),this.obakeY=Yd(141.6,20.4),this.obake.visible=!1,e.add(this.obake);let l=new B;[16738906,16755274,16770666,8050794,5941480,9071328].forEach((e,t)=>{let n=new H(new Na(58-t*1.5,.9,6,48,Math.PI),new ci({color:e,transparent:!0,opacity:.3,depthWrite:!1}));l.add(n)}),l.position.set(10,-32,-175),l.scale.setScalar(1.1),l.visible=!1,e.add(l),this.rainbowGroup=l,this.rainbowFade=0,this.sparklePos=()=>{if(Math.random()<.68){let e=-140+Math.random()*300,t=zd(e)+(Math.random()-.5)*6*1.5;return[e,qd(e)+.1,t]}let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*(Y.r-1.5);return[Y.x+Math.cos(e)*t,Jd+.1,Y.z+Math.sin(e)*t]},this.sparkles=[];for(let t=0;t<2;t++){let n=new Float32Array(210);for(let e=0;e<70;e++)n.set(this.sparklePos(),e*3);let r=new Mr;r.setAttribute(`position`,new _r(n,3));let i=new Gi(r,new Bi({color:16774872,size:.55,map:Sf(),transparent:!0,opacity:0,blending:2,depthWrite:!1}));i.visible=!1,e.add(i),this.sparkles.push({pts:i,ph:t*Math.PI*.5})}this.sparkleTimer=0,this._spWhite=new V(16774872),this._spGold=new V(16756823),this.tomboBase=[];let u=[],d=[[24,60],[45,55],[30,68],[96,30],[110,40]];for(let e=0;e<16;e++){let[t,n]=d[e%d.length],r=t+(Math.random()-.5)*10,i=n+(Math.random()-.5)*8;this.tomboBase.push({cx:r,cz:i,y:Yd(r,i)+1.5+Math.random()*1.5,rx:2+Math.random()*3,rz:1.5+Math.random()*2.5,sp:.5+Math.random()*.7,ph:Math.random()*9}),u.push(r,0,i)}let f=new Mr;f.setAttribute(`position`,new br(u,3)),this.tombo=new Gi(f,new Bi({color:15225898,size:.52,transparent:!0,opacity:.95})),this.tombo.visible=!1,e.add(this.tombo),this.plane=new H(new Ma(1.5,6,5),new ci({color:15922680,fog:!1})),this.contrail=new H(new W(1.4,.7,1,6,1,!0),new ci({color:16777215,transparent:!0,opacity:.62,fog:!1,depthWrite:!1})),this.contrail.rotation.z=Math.PI/2,this.plane.visible=this.contrail.visible=!1,e.add(this.plane,this.contrail),this.planeT=-1,this.planeDay=0,this.bursts=[],this.fwTimer=0,this.fireworksOn=!1,this.trainT=-1,this.lastMin=0,this.t=0}launchFirework(){let e=new Mr,t=new Float32Array(210);e.setAttribute(`position`,new _r(t,3));let n=[16765562,16743034,8042751,12189562,16751326],r=new Gi(e,new Bi({color:n[Math.floor(Math.random()*n.length)],size:.9,map:Sf(),transparent:!0,opacity:1,blending:2,depthWrite:!1})),i=-10+Math.random()*20,a=32+Math.random()*12,o=-75-Math.random()*15,s=[];for(let e=0;e<70;e++){let n=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),c=7+Math.random()*5;s.push(new R(Math.sin(r)*Math.cos(n)*c,Math.cos(r)*c,Math.sin(r)*Math.sin(n)*c)),t[e*3]=i,t[e*3+1]=a,t[e*3+2]=o}this.scene.add(r),this.bursts.push({pts:r,vels:s,life:2.1}),this.audio.sfx(`boom`)}update(e,t){this.t+=e;let n=this.clock.weather,r=this.clock.min,i=this.world.riverWaterMat;if(i&&i.map&&(i.map.offset.y-=e*.08),this.world.fallMat&&this.world.fallMat.map&&(this.world.fallMat.map.offset.y-=e*.6),this.world.sawaMats)for(let t of this.world.sawaMats)t.map&&(t.map.offset.y-=e*.3);this.world.foamMat&&(this.world.foamMat.opacity=.5+Math.sin(this.t*5.2)*.14);let a=n===`rain`||n===`storm`;if(this.rain.visible=a&&(!this.world.indoor||!!(this.world.sub&&this.world.sub.outdoor)),a){let r=this.rain.geometry.attributes.position.array,i=n===`storm`?42:26,a=n===`storm`?14:2;for(let n=0;n<this.rainCount;n++)r[n*3+1]-=i*e,r[n*3]+=a*e,r[n*3+1]<0&&(r[n*3]=t.x+(Math.random()-.5)*70,r[n*3+1]=25+Math.random()*8,r[n*3+2]=t.z+(Math.random()-.5)*70);this.rain.geometry.attributes.position.needsUpdate=!0}let o=!!this.clock.rainbow&&!this.world.indoor;this.rainbowFade+=(+!!o-this.rainbowFade)*Math.min(1,e*.8),this.rainbowGroup.visible=this.rainbowFade>.02,this.rainbowGroup.visible&&this.rainbowGroup.children.forEach((e,t)=>{e.material.opacity=.3*this.rainbowFade*(1-t*.06)});let s=this.clock.event===`hotaru`&&r>=1150;if(this.fireflies.visible=s,s){let e=this.fireflies.geometry.attributes.position.array;for(let t=0;t<this.fireflyBase.length;t++){let n=this.fireflyBase[t];e[t*3]=n.x+Math.sin(this.t*.5+n.ph)*2,e[t*3+1]=n.y+Math.sin(this.t*.8+n.ph*2)*.5,e[t*3+2]=n.z+Math.cos(this.t*.4+n.ph)*1.5}this.fireflies.geometry.attributes.position.needsUpdate=!0,this.fireflies.material.opacity=.5+Math.sin(this.t*2.2)*.4}let c=r>=1170&&!this.world.indoor;this.obake.visible=c,c&&(this.obake.position.set(141.6+Math.sin(this.t*.45)*1.5,this.obakeY+1.6+Math.sin(this.t*1.1)*.35,20.4+Math.cos(this.t*.32)*1.1),this.obakeW1.position.set(-.35+Math.sin(this.t*2.1)*.3,-.3+Math.sin(this.t*1.7)*.12,.2),this.obakeW2.position.set(.4+Math.sin(this.t*1.6)*.25,-.45+Math.cos(this.t*1.9)*.12,-.15),this.obakeCore.material.opacity=.7+Math.sin(this.t*3.1)*.25),this.fireworksOn=this.clock.event===`matsuri`&&r>=1170&&r<=1240,this.fireworksOn&&(this.fwTimer-=e,this.fwTimer<=0&&(this.fwTimer=2.5+Math.random()*2.5,this.launchFirework()));for(let t of[...this.bursts]){if(t.life-=e,t.life<=0){this.scene.remove(t.pts),this.bursts=this.bursts.filter(e=>e!==t);continue}let n=t.pts.geometry.attributes.position.array;for(let r=0;r<t.vels.length;r++){let i=t.vels[r];i.y-=3.5*e,n[r*3]+=i.x*e,n[r*3+1]+=i.y*e,n[r*3+2]+=i.z*e}t.pts.geometry.attributes.position.needsUpdate=!0,t.pts.material.opacity=Math.min(1,t.life/1.2)}for(let e of[480,750,1050])this.lastMin<e&&r>=e&&this.trainT<0&&(this.trainT=0,this.audio.sfx(`train`));if(this.lastMin=r,this.trainT>=0){this.trainT+=e;let t=this.world.railPath,n=this.trainT*30,r=this.world.train;r.visible=!0;for(let e=0;e<r.children.length;e++){let i=t.pointAt(Math.max(0,n-e*9.8));r.children[e].position.set(i.x,i.y+.18,i.z),r.children[e].rotation.y=i.rot}n>t.length+15&&(this.trainT=-1,r.visible=!1)}if(this.world.riverWaterMat){let e=.55+Math.sin(this.t*.8)*.015;this.world.riverWaterMat.color.setHSL(.55,.5,r>=1150?.22:e*.9)}let l=jt.clamp((r-350)/810,0,1),u=Math.max(0,Math.sin(l*Math.PI)),d=jt.clamp(1-Math.abs(l-.9)*4.5,0,1),f=n===`sunny`?1:n===`cloudy`?.3:0,p=this.world.indoor?0:u*f;this.sparkleTimer-=e;let m=this.sparkleTimer<=0;m&&(this.sparkleTimer=.24);for(let e of this.sparkles)if(e.pts.visible=p>.03,e.pts.visible&&(e.pts.material.opacity=p*(.3+.7*Math.abs(Math.sin(this.t*2.1+e.ph))),e.pts.material.color.copy(this._spWhite).lerp(this._spGold,d*.85),m)){let t=e.pts.geometry.attributes.position.array;for(let e=0;e<5;e++){let e=Math.floor(Math.random()*(t.length/3));t.set(this.sparklePos(),e*3)}e.pts.geometry.attributes.position.needsUpdate=!0}let h=this.clock.day>=13&&r>=960&&r<=1140&&(n===`sunny`||n===`cloudy`)&&!this.world.indoor;if(this.tombo.visible=h,h){let e=this.tombo.geometry.attributes.position.array;for(let t=0;t<this.tomboBase.length;t++){let n=this.tomboBase[t],r=this.t*n.sp+n.ph;e[t*3]=n.cx+Math.cos(r)*n.rx,e[t*3+1]=n.y+Math.sin(r*2.3)*.4,e[t*3+2]=n.cz+Math.sin(r)*n.rz}this.tombo.geometry.attributes.position.needsUpdate=!0}if(this.planeT<0&&this.planeDay!==this.clock.day&&n===`sunny`){let e=620+this.clock.day*97%260;r>=e&&r<=e+40&&(this.planeDay=this.clock.day,this.planeT=0,this.contrail.material.opacity=.62)}if(this.planeT>=0){this.planeT+=e;let t=-240+this.planeT*11,n=12+this.planeT*.09,r=-110,i=!this.world.indoor;if(t<=245){this.plane.position.set(t,n,r),this.plane.visible=i;let e=t-2.2,a=Math.max(-238,e-70),o=e-a;o>1&&(this.contrail.scale.set(1,o,1),this.contrail.position.set((a+e)/2,n-(t-(a+e)/2)*.09/11,r),this.contrail.visible=i)}else this.plane.visible=!1,this.contrail.visible=i,this.contrail.material.opacity-=e*.12,this.contrail.material.opacity<=.02&&(this.contrail.visible=!1,this.planeT=-1)}}},wf=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Tf=`
  uniform sampler2D tDiffuse;
  uniform float threshold;
  uniform float knee;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb;
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    float b = smoothstep(threshold, threshold + knee, l);
    gl_FragColor = vec4(c * b, 1.0);
  }
`,Ef=`
  uniform sampler2D tDiffuse;
  uniform vec2 dir;
  varying vec2 vUv;
  void main() {
    vec3 s = vec3(0.0);
    s += texture2D(tDiffuse, vUv + dir * -4.0).rgb * 0.0162;
    s += texture2D(tDiffuse, vUv + dir * -3.0).rgb * 0.0540;
    s += texture2D(tDiffuse, vUv + dir * -2.0).rgb * 0.1216;
    s += texture2D(tDiffuse, vUv + dir * -1.0).rgb * 0.1945;
    s += texture2D(tDiffuse, vUv               ).rgb * 0.2270;
    s += texture2D(tDiffuse, vUv + dir *  1.0).rgb * 0.1945;
    s += texture2D(tDiffuse, vUv + dir *  2.0).rgb * 0.1216;
    s += texture2D(tDiffuse, vUv + dir *  3.0).rgb * 0.0540;
    s += texture2D(tDiffuse, vUv + dir *  4.0).rgb * 0.0162;
    gl_FragColor = vec4(s, 1.0);
  }
`,Df=`
  uniform sampler2D tScene;
  uniform sampler2D tBloom;
  uniform float uBloom;
  uniform float uExposure;  // 全体の あかるさ
  uniform float uLift;      // かげを 褪せた 暖色に もちあげる 量
  uniform float uContrast;  // S字コントラストの つよさ
  uniform float uVignette;
  uniform vec3  uVigCol;
  uniform float uGrain;
  uniform float uSat;
  uniform float uWarm;    // 夕方など、暖色に よせる量 (0..1)
  uniform float uDay;     // 昼らしさ (1=昼, 0=夜)。夜は 暖色かぶり/持ち上げを 弱めて 青い夜を まもる
  uniform float uTime;
  uniform vec2  uRes;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  vec3 sat(vec3 c, float s) {
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    return mix(vec3(l), c, s);
  }

  void main() {
    vec3 col = texture2D(tScene, vUv).rgb;
    vec3 bl  = texture2D(tBloom, vUv).rgb;

    // ① ブルームを のせる (白とびを ほどよく おさえて にじませる)
    col += bl * uBloom * (1.0 - col * 0.35);

    // 露出 (夜は すこし もちあげて、スマホでも 見える くらさに)
    col *= uExposure * (1.0 + (1.0 - uDay) * 0.16);
    // 夏の日ざしの あたたかい色かぶり (昼は ほんのり 金色。夜は かけない = 青い夜をまもる)
    col *= mix(vec3(1.0), vec3(1.045, 1.005, 0.945), uDay);
    float l = dot(col, vec3(0.299, 0.587, 0.114));

    // ② フィルム・グレード ---------------------------------
    // かげを 褪せた 暖色に もちあげる (黒を しめきらない = 古い写真の ミルキーな味)。夜は 弱める
    col += vec3(0.075, 0.046, 0.024) * uLift * uDay * (1.0 - smoothstep(0.0, 0.62, l));
    // ひかりは 金いろに にじませる
    col *= mix(vec3(1.0), vec3(1.06, 1.02, 0.92), smoothstep(0.35, 1.0, l));
    // ごく ゆるい S字コントラスト (褪せた 写真の 低コントラスト)
    vec3 s = col * col * (3.0 - 2.0 * col);
    col = mix(col, s, uContrast);
    // 彩度: すこし 褪せさせる (夏の 白っぽい みどり)
    col = sat(col, uSat);
    // 深い かげに ほんのり 青 (奥ゆき) — でも 暖色を のこすため ひかえめに
    col = mix(col, col * vec3(0.96, 0.99, 1.04), (1.0 - smoothstep(0.0, 0.30, l)) * 0.10);
    // 夕方は 画面全体を さらに 茜へ
    col *= mix(vec3(1.0), vec3(1.09, 0.98, 0.86), uWarm);

    // ③ ビネット (すみを 暖色に おとす) ------------------
    vec2 q = vUv - 0.5;
    q.x *= uRes.x / uRes.y;      // 画面比を 補正して まるい ビネットに
    float r = length(q);
    float vig = 1.0 - smoothstep(0.58, 1.18, r) * uVignette;
    col *= vig;
    col = mix(col, col * uVigCol, (1.0 - vig) * 0.5);

    // ④ フィルム粒子 -------------------------------------
    float g = hash(vUv * uRes + fract(uTime) * 431.0) - 0.5;
    col += g * uGrain;

    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
  }
`,Of=class{constructor(e,t={}){this.renderer=e,this.enabled=!0,this._res=new L,this._texel=new L;let{w:n,h:r}=this._drawSize();this.sceneRT=new Qt(n,r,{depthBuffer:!0,stencilBuffer:!1,samples:t.samples==null?4:t.samples}),this.sceneRT.texture.colorSpace=Ve,this.sceneRT.texture.minFilter=o,this.sceneRT.texture.magFilter=o;let i=Math.max(1,n>>1),a=Math.max(1,r>>1),s={depthBuffer:!1,stencilBuffer:!1};this.rtA=new Qt(i,a,s),this.rtB=new Qt(i,a,s);for(let e of[this.rtA,this.rtB])e.texture.colorSpace=``,e.texture.minFilter=o,e.texture.magFilter=o;this._texel.set(1/i,1/a),this.fsCam=new Do(-1,1,1,-1,0,1),this.fsScene=new Rn,this.quad=new H(new ja(2,2),null),this.quad.frustumCulled=!1,this.fsScene.add(this.quad),this.brightMat=new Ua({uniforms:{tDiffuse:{value:null},threshold:{value:.58},knee:{value:.32}},vertexShader:wf,fragmentShader:Tf,depthTest:!1,depthWrite:!1}),this.blurMat=new Ua({uniforms:{tDiffuse:{value:null},dir:{value:new L}},vertexShader:wf,fragmentShader:Ef,depthTest:!1,depthWrite:!1}),this.compMat=new Ua({uniforms:{tScene:{value:null},tBloom:{value:null},uBloom:{value:1},uExposure:{value:1.16},uLift:{value:1.7},uContrast:{value:.03},uVignette:{value:.09},uVigCol:{value:new V(16769200)},uGrain:{value:.03},uSat:{value:.94},uWarm:{value:0},uDay:{value:1},uTime:{value:0},uRes:{value:this._res.clone()}},vertexShader:wf,fragmentShader:Df,depthTest:!1,depthWrite:!1});for(let e of[this.brightMat,this.blurMat,this.compMat])e.toneMapped=!1}_drawSize(){return this.renderer.getDrawingBufferSize(this._res),{w:Math.max(1,Math.floor(this._res.x)),h:Math.max(1,Math.floor(this._res.y))}}setSize(){let{w:e,h:t}=this._drawSize(),n=Math.max(1,e>>1),r=Math.max(1,t>>1);this.sceneRT.setSize(e,t),this.rtA.setSize(n,r),this.rtB.setSize(n,r),this._texel.set(1/n,1/r),this.compMat.uniforms.uRes.value.set(e,t)}setWarm(e){this.compMat.uniforms.uWarm.value=e}setDay(e){this.compMat.uniforms.uDay.value=e}render(e,t,n){let r=this.renderer;if(!this.enabled){r.setRenderTarget(null),r.render(e,t);return}let i=r.autoClear;r.autoClear=!0,r.setRenderTarget(this.sceneRT),r.render(e,t),this.quad.material=this.brightMat,this.brightMat.uniforms.tDiffuse.value=this.sceneRT.texture,r.setRenderTarget(this.rtA),r.render(this.fsScene,this.fsCam),this.quad.material=this.blurMat;let a=this._texel.x,o=this._texel.y;for(let e of[1.25,2.8])this.blurMat.uniforms.tDiffuse.value=this.rtA.texture,this.blurMat.uniforms.dir.value.set(a*e,0),r.setRenderTarget(this.rtB),r.render(this.fsScene,this.fsCam),this.blurMat.uniforms.tDiffuse.value=this.rtB.texture,this.blurMat.uniforms.dir.value.set(0,o*e),r.setRenderTarget(this.rtA),r.render(this.fsScene,this.fsCam);this.quad.material=this.compMat,this.compMat.uniforms.tScene.value=this.sceneRT.texture,this.compMat.uniforms.tBloom.value=this.rtA.texture,this.compMat.uniforms.uTime.value=n||0,r.setRenderTarget(null),r.render(this.fsScene,this.fsCam),r.autoClear=i}},kf=class{constructor(){this.keys=new Set,this.pressed=new Set,this.axisX=0,this.axisY=0,this.yawDelta=0,window.addEventListener(`keydown`,e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&e.preventDefault())}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.keys.clear())}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}get interact(){return this.hit(`KeyE`)||this.hit(`Space`)||this.hit(`Enter`)}endFrame(){this.pressed.clear()}},Af=`ayagawa.ctrl`,jf=class{constructor(e){let t=matchMedia(`(pointer: coarse)`).matches||`ontouchstart`in window,n=localStorage.getItem(Af)||(t?`touch`:`kb`),r=document.getElementById(`ctrl-toggle`),i=()=>{document.body.classList.toggle(`touch`,n===`touch`),r.textContent=n===`touch`?`そうさ: タッチ`:`そうさ: キーボード`};r.addEventListener(`pointerdown`,e=>{e.preventDefault(),n=n===`touch`?`kb`:`touch`,localStorage.setItem(Af,n),i()}),i();let a=document.getElementById(`joy`),o=document.getElementById(`joy-knob`),s=null,c=t=>{let n=a.getBoundingClientRect(),r=(t.clientX-(n.left+n.width/2))/42,i=(t.clientY-(n.top+n.height/2))/42,s,c;document.body.classList.contains(`force-landscape`)?(s=i,c=-r):(s=r,c=i);let l=Math.hypot(s,c);l>1&&(s/=l,c/=l),e.axisX=s,e.axisY=c,o.style.transform=`translate(${s*42}px, ${c*42}px)`},l=()=>{s=null,e.axisX=e.axisY=0,o.style.transform=``};a.addEventListener(`pointerdown`,e=>{e.preventDefault(),s=e.pointerId;try{a.setPointerCapture(s)}catch{}c(e)}),a.addEventListener(`pointermove`,e=>{e.pointerId===s&&c(e)}),a.addEventListener(`pointerup`,e=>{e.pointerId===s&&l()}),a.addEventListener(`pointercancel`,l);let u=(t,n)=>{let r=document.getElementById(t);r.addEventListener(`pointerdown`,t=>{t.preventDefault(),e.pressed.add(n),r.classList.add(`press`)}),r.addEventListener(`pointerup`,()=>r.classList.remove(`press`)),r.addEventListener(`pointercancel`,()=>r.classList.remove(`press`))};u(`btnA`,`KeyE`),u(`btnZ`,`KeyZ`),u(`btnX`,`KeyX`)}},Mf=`ayagawa.opts`,Nf=Object.assign({sound:!0,camBob:!0},JSON.parse(localStorage.getItem(Mf)||`null`));function Pf(){localStorage.setItem(Mf,JSON.stringify(Nf))}var Ff=5.4,If=9.5,Lf=class{constructor(e,t,n,r){this.world=t,this.input=n,this.camera=r;let i=Cd({body:16777215,head:1578e4,hat:5078729,hair:2759954,scale:.85});this.mesh=i.group,this.parts=i.parts,this.mesh.position.set(114,0,17),e.add(this.mesh),this.heading=Math.PI,this.walkT=0,this.moving=!1,this.running=!1,this.camPos=new R,this.lookUpT=0,this.camYaw=0,this.camDist=9.3,this.camHigh=4.1,this.camLook=2.3,this.snapCamera()}get pos(){return this.mesh.position}clampCamY(e){if(this.world.indoor||!this.world.groundY)return e;let t=this.world.groundY(e.x,e.z);return e.y<t+1.6&&(e.y=t+1.6),e}resolveCamBlock(e){let t=this.world.camObstacles;if(!t||this.world.indoor)return e;let n=this.pos.x,r=this.pos.y+2.3,i=this.pos.z,a=e.x-n,o=e.y-r,s=e.z-i,c=Math.hypot(a,s)+.001,l=1;for(let e of t)if(!(Math.abs(e.x-n)>c+e.r||Math.abs(e.z-i)>c+e.r))for(let t=2;t<=10;t++){let c=t/10;if(c>=l)break;let u=r+o*c;if(!(u<e.y0||u>e.y1)&&Math.hypot(n+a*c-e.x,i+s*c-e.z)<e.r){l=Math.max(.18,c-.1);break}}return l<1&&e.set(n+a*l,r+o*l,i+s*l),e}snapCamera(){this.world.indoor&&(this.camYaw=0);let e=this.camYaw;this.camPos.copy(this.pos).add(new R(this.camDist*Math.sin(e),this.camHigh,this.camDist*Math.cos(e))),this.clampCamY(this.camPos),this.resolveCamBlock(this.camPos),this.camera.position.copy(this.camPos),this.camera.lookAt(this.pos.x,this.pos.y+this.camLook,this.pos.z)}update(e,t,n,r){let i=this.input,a=0,o=0,s=0;if(!t&&((i.down(`KeyW`)||i.down(`ArrowUp`))&&--o,(i.down(`KeyS`)||i.down(`ArrowDown`))&&(o+=1),(i.down(`KeyA`)||i.down(`ArrowLeft`))&&--a,(i.down(`KeyD`)||i.down(`ArrowRight`))&&(a+=1),s=Math.hypot(i.axisX,i.axisY),s>.18&&(a+=i.axisX,o+=i.axisY),!this.world.indoor)){let t=i.yawDelta;i.down(`KeyQ`)&&(t+=e*2.4),i.down(`KeyR`)&&(t-=e*2.4),this.camYaw+=t}if(i.yawDelta=0,this.world.indoor&&this.camYaw!==0){let t=this.camYaw;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;t*=Math.max(0,1-e*5),this.camYaw=Math.abs(t)<.01?0:t}let c=Math.cos(this.camYaw),l=Math.sin(this.camYaw);if(this.moving=a!==0||o!==0,this.running=this.moving&&(i.down(`ShiftLeft`)||i.down(`ShiftRight`)||s>.92),this.moving){let t=a*c+o*l,r=-a*l+o*c,i=Math.hypot(t,r),s=this.running?If:Ff,u=t/i*s*e,d=r/i*s*e,f=this.pos,p=this.world.groundY,m=(e,t,r,i)=>!(this.world.isBlocked(r,i,n)||!this.world.indoor&&p&&(p(r,i)-p(e,t))/(Math.hypot(r-e,i-t)||1)>1.6);m(f.x,f.z,f.x+u,f.z)&&(f.x+=u),m(f.x,f.z,f.x,f.z+d)&&(f.z+=d);let h=Math.atan2(t/i,r/i)-this.heading;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;this.heading+=h*Math.min(1,e*14),this.mesh.rotation.y=this.heading,this.walkT+=e*(this.running?13:9)}else this.walkT*=.8;let u=Math.sin(this.walkT)*(this.moving?.75:.06);this.parts.armL.rotation.x=u,this.parts.armR.rotation.x=-u,this.parts.legL.rotation.x=-u,this.parts.legR.rotation.x=u;let d=this.world.groundY,f=d?d(this.pos.x,this.pos.z):0,p=0;if(d&&!this.world.indoor){let e=Math.abs(d(this.pos.x+.4,this.pos.z)-d(this.pos.x-.4,this.pos.z)),t=Math.abs(d(this.pos.x,this.pos.z+.4)-d(this.pos.x,this.pos.z-.4));p=Math.min(.22,Math.max(e,t)*.35)}this.mesh.position.y=f+p+(this.moving&&Nf.camBob?Math.abs(Math.sin(this.walkT))*.09:0);let m=r&&!this.moving?1:0;this.lookUpT+=(m-this.lookUpT)*Math.min(1,e*1.4);let h=this.lookUpT,g=new R(this.pos.x+this.camDist*l,this.pos.y+this.camHigh-h*2.8,this.pos.z+this.camDist*c);this.clampCamY(g),this.resolveCamBlock(g),this.camPos.lerp(g,Math.min(1,e*4.5)),this.camera.position.copy(this.camPos),this.camera.lookAt(this.pos.x,this.pos.y+this.camLook+h*12,this.pos.z),this.world.updateOcclusion&&this.world.updateOcclusion(this.pos,this.camera.position,e)}},Rf={1:.92,2:.75,3:.55},zf=class{constructor(e,t,n,r,i,a){Object.assign(this,{scene:e,world:t,state:n,clock:r,ui:i,audio:a}),this.active=[],this.spawnT=0}validSpecies(e){let{min:t,day:n,weather:r}={min:this.clock.min,day:this.clock.day,weather:this.clock.weather};return r===`rain`||r===`storm`?[]:Cu.filter(r=>{if(r.spot!==e)return!1;let i=e=>e&&t>=e[0]&&t<=e[1];return!(!i(r.time)&&!i(r.time2)||r.days&&(n<r.days[0]||n>r.days[1]))})}spawnOne(e){let t=[];for(let n of this.world.trees){let r=Math.hypot(n.x-e.x,n.z-e.z);r>6&&r<42&&t.push({spot:`tree`,ref:n})}for(let n of this.world.grassAreas)Math.hypot(n.x-e.x,n.z-e.z)<40&&t.push({spot:`grass`,ref:n});let n=zd(e.x);if(Math.abs(e.z-n)<30&&t.push({spot:`water`,ref:{x:e.x+(Math.random()*30-15),z:0,river:!0}}),Math.hypot(Y.x-e.x,Y.z-e.z)<35&&t.push({spot:`water`,ref:{x:Y.x,z:Y.z,pond:!0}}),Math.abs(e.z-n)<26&&t.push({spot:`river`,ref:{x:e.x+(Math.random()*24-12),z:0,river:!0}}),!t.length)return;let r=t[Math.floor(Math.random()*t.length)],i=this.validSpecies(r.spot);if(!i.length)return;let a=[];i.forEach(e=>{for(let t=0;t<4-e.rarity;t++)a.push(e)});let o=a[Math.floor(Math.random()*a.length)],s=wd(o),c={spec:o,mesh:s,t:Math.random()*10,fleeT:0,kind:r.spot};if(r.spot===`tree`){let e=Math.random()*Math.PI*2,t=o.id===`kabuto`||o.id===`nokogiri`?.9+Math.random()*.8:1.4+Math.random()*1.4,n=r.ref.big?.55:.34,i=this.world.groundY(r.ref.x,r.ref.z);s.position.set(r.ref.x+Math.cos(e)*n,i+t,r.ref.z+Math.sin(e)*n),s.lookAt(r.ref.x,i+t+1,r.ref.z),c.static=!0}else if(r.spot===`grass`){let e=Math.random()*Math.PI*2,t=Math.random()*r.ref.r,n=r.ref.x+Math.cos(e)*t,i=r.ref.z+Math.sin(e)*t;c.home=new R(n,this.world.groundY(n,i)+.7,i),s.position.copy(c.home)}else if(r.spot===`water`||r.spot===`river`){if(r.ref.pond){let e=Math.random()*Math.PI*2;c.home=new R(r.ref.x+Math.cos(e)*(Y.r+1.5),Jd+1.1,r.ref.z+Math.sin(e)*(Y.r+1.5))}else{let e=r.ref.x;c.home=new R(e,qd(e)+(r.spot===`river`?.9:1.2),zd(e)+(Math.random()<.5?-6.5:6.5))}s.position.copy(c.home)}this.scene.add(s),this.active.push(c)}flee(e){e.fleeT>0||(e.fleeT=.9,this.audio.sfx(`flee`))}tryCatch(e){let t=e.spec;if(Math.random()<Rf[t.rarity]){let n=!this.state.bugs[t.id];this.state.bugs[t.id]=(this.state.bugs[t.id]||0)+1,this.audio.sfx(`catch`),this.ui.toast(`${t.name} をつかまえた!${n?` 【ずかんに とうろく!】`:``}`,n?`gold`:null),K(this.state,`${t.name}をつかまえた`),this.remove(e)}else this.ui.toast(`あっ、にげられた…`),this.flee(e)}remove(e){this.scene.remove(e.mesh),this.active=this.active.filter(t=>t!==e)}update(e,t,n){let r=t.pos;this.spawnT-=e,this.spawnT<=0&&(this.spawnT=1.4,this.active.length<7&&this.spawnOne(r));let i=null,a=1e9;for(let n of[...this.active]){n.t+=e;let o=n.mesh.position,s=Math.hypot(o.x-r.x,o.z-r.z);if(n.fleeT>0){n.fleeT-=e,o.y+=e*6,o.x+=Math.sin(n.t*8)*e*4,n.fleeT<=0&&this.remove(n);continue}if(s>65){this.remove(n);continue}if(t.running&&s<6.5){this.flee(n);continue}if(n.kind===`grass`){if(o.x=n.home.x+Math.sin(n.t*.7)*2.2,o.z=n.home.z+Math.cos(n.t*.53)*2.2,o.y=n.home.y+Math.sin(n.t*2.2)*.35,n.mesh.userData.wings){let e=Math.sin(n.t*14)*.9;n.mesh.userData.wings[0].rotation.z=e,n.mesh.userData.wings[1].rotation.z=-e}}else if(n.kind===`water`)o.x=n.home.x+Math.sin(n.t*.9)*4,o.z=n.home.z+Math.sin(n.t*.62)*2.5,o.y=n.home.y+Math.sin(n.t*3.1)*.2,n.mesh.rotation.y=Math.atan2(Math.cos(n.t*.9)*4,Math.cos(n.t*.62)*2.5);else if(n.kind===`river`){o.x=n.home.x+Math.sin(n.t*.4)*3,o.z=n.home.z+Math.cos(n.t*.33)*2,o.y=n.home.y+Math.sin(n.t*.9)*.4;let e=(Math.sin(n.t*2.4)+1)/2;n.mesh.children[0].material.emissiveIntensity=.2+e*1.2}s<2.7&&s<a&&(i=n,a=s)}i&&n.push({dist:a,label:`あみをふる (${i.spec.name}?)`,action:()=>this.tryCatch(i)})}clearAll(){for(let e of[...this.active])this.remove(e)}};function Bf(e,t){let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`);r.font=`bold 52px sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillStyle=t,r.strokeStyle=`#fff`,r.lineWidth=8,r.strokeText(e,32,34),r.fillText(e,32,34);let i=new Qr(new Rr({map:new Ji(n),depthTest:!1}));return i.scale.set(1.4,1.4,1),i}var Vf=class{constructor(e,t,n,r,i,a){Object.assign(this,{scene:e,world:t,state:n,clock:r,ui:i,audio:a}),this.phase=`idle`,this.timer=0,this.bobber=new B;let o=new H(new Ma(.16,8,8),new Ga({color:14496546})),s=new H(new Ma(.16,8,8),new Ga({color:16777215}));s.position.y=-.1,this.bobber.add(o,s),this.bobber.visible=!1,e.add(this.bobber),this.mark=Bf(`!`,`#e33`),this.mark.visible=!1,e.add(this.mark),this.t=0}get active(){return this.phase!==`idle`}start(e){this.phase=`wait`,this.zone=e.zone,this.baseY=e.spot.y+.1,this.bobber.position.copy(e.spot),this.bobber.visible=!0;let t=this.clock.weather===`rain`?.55:1;this.timer=(2.2+Math.random()*5)*t,this.audio.sfx(`splash`)}stop(){this.phase=`idle`,this.bobber.visible=!1,this.mark.visible=!1}pickFish(){let e=this.clock.min,t=this.clock.day,n=this.clock.weather,r=[];for(let i of wu){if(i.zone!==`both`&&i.zone!==this.zone)continue;let a=!i.time||e>=i.time[0]&&e<=i.time[1],o=i.time2&&e>=i.time2[0]&&e<=i.time2[1];if(!(!a&&!o)&&!(i.days&&(t<i.days[0]||t>i.days[1]))&&!(i.weather&&!i.weather.includes(n))&&!(i.flag&&!this.state.flags[i.flag])&&!(i.nushi&&Math.random()>.3))for(let e=0;e<Math.max(1,4-i.rarity);e++)r.push(i)}return r.length?r[Math.floor(Math.random()*r.length)]:null}hook(){let e=this.pickFish();if(this.stop(),!e){this.ui.toast(`なにも つれなかった…`);return}let t=!this.state.fish[e.id];if(this.state.fish[e.id]=(this.state.fish[e.id]||0)+1,this.audio.sfx(`catch`),e.nushi){this.state.flags.nushiCaught=!0,this.ui.toast(`つ、つれた……!! ${e.name} (${e.len})!!`,`gold`),K(this.state,`ほうじょういけのぬしをつりあげた!!`);return}this.ui.toast(`${e.name} (${e.len}) をつった!${t?` 【ずかんに とうろく!】`:``}`,t?`gold`:null),K(this.state,`${e.name}をつった`),e.id===`unagi`&&(this.state.flags.unagi=!0)}update(e,t,n,r){if(this.t+=e,this.phase===`idle`){if(t.moving)return;let e=this.world.waterZone(t.pos.x,t.pos.z);e&&n.push({dist:1.5,label:`つりをする (${e.zone===`river`?`あやがわ`:`ほうじょういけ`})`,action:()=>this.start(e)});return}if(this.bobber.position.y=this.baseY+Math.sin(this.t*2.4)*.05,this.phase===`wait`){if(this.timer-=e,r){this.stop(),this.ui.toast(`つりをやめた`);return}this.timer<=0&&(this.phase=`bite`,this.timer=.85,this.mark.position.copy(this.bobber.position).add(new R(0,1.6,0)),this.mark.visible=!0,this.bobber.position.y=this.baseY-.3,this.audio.sfx(`bite`))}else if(this.phase===`bite`){if(this.timer-=e,r){this.hook();return}this.timer<=0&&(this.stop(),this.ui.toast(`のがした! はやく E をおすんだ!`))}}},Hf=(e,t)=>e[t%e.length],Uf=[{id:`baachan`,name:`おばあちゃん`,body:8943530,head:1578e4,hat:null,hair:13421772,elder:!0,sched(e){return e.day===1&&!e.state.flags.metBaachan?{x:111.5,z:-5.5}:e.event===`matsuri`&&e.phase===`night`?{x:-6,z:-50}:e.day===1&&e.min<600?null:e.min>=500&&e.min<1020?{x:113,z:16}:null},talk(e){let t=e.friend,n=e.state;return e.day===1&&!n.flags.metBaachan?[`よう来たなあ! まあ、まあ、おおきゅうなって……。`,`ひとりで でんしゃ、こわなかったか? ようがんばった、ようがんばった。`,`ばあちゃんの家はな、ここから みちなりに みなみへ いったとこじゃ。`,`さきに帰って、むぎちゃ ひやしとくけんな。ゆっくり おいで。`]:e.day===1?[`ついたか、ついたか。きょうから ひと月、ここが あんたの家じゃ。`,`えんりょは いらんよ。れいぞうこも おしいれも、すきに あけたらええ。`,`2かいに ふとんと つくえ、よういしといたけんな。`,`くらぁなる前には 帰っておいでよ。ばんごはん こしらえて まっとるけん。`]:e.day===2?[`ゆうべは ねむれたかな。まくらが かわると ねむれん子も おるけんな。`,`きょうから ほんばんの なつやすみじゃ。`,`かどの みちをな、ずーっと いったら 川に でるよ。いっといでまい。`]:n.flags.rodFound&&!n.flags.rodBaachan?(n.flags.rodBaachan=!0,n.friend.baachan=(n.friend.baachan||0)+1,[`ん? どうしたんな、そんな ふるいもん かかえて。……ああ。おしいれの おくかあ。`,`それはな、おじいさんの 竿じゃ。あんたの おじいさん ―― 修二さんのな。`,`釣りが すきで すきでなあ。やすみの日は あさから 北条池に おって、ばんに なっても 帰ってこん。`,`いっつも いっしょに おったんが、ため池の げんじいさんよ。ふたりで よう けんかして、よう わろうて。`,`……その竿、あんたが つかい。しまいこんどくより、おじいさんも そのほうが よろこぶわ。`,`げんじいさんにも 見せてあげまい。きっと なつかしがるけんな。`]):e.event===`obon`&&e.day===13?[`きょうから お盆じゃ。むかえびを 焚いてな、ご先祖さまを おむかえするんよ。`,`おじいさんもな、きっと もう そのへんに おるわ。`,`なすと きゅうりの うま、ぶつだんに かざっとるけん、みてみまい。`]:e.event===`obon`&&e.day===14?[`けさ、お墓まいりに いってきたんよ。`,`おじいさんにな、「まごが 来とるよ」って ゆうといた。`,`ふふ。はか石が、こころなしか つやつや しとったわ。`]:e.event===`obon`&&e.day===15?[`きょうで お盆も おしまい。ゆうがた、おくりびを 焚くんよ。`,`ご先祖さまはな、けむりに のって 帰っていきよるんじゃと。`,`また来年な、いうてな。……ええ ならわしじゃろ。`]:e.event===`typhoon`?[`えらい風じゃなあ! きょうは 遠くへ いきなさんなよ。`,`川と ため池には ぜったい 近づいたら いかん。やくそくじゃよ。`,`雨戸も しめたし、ろうそくも 出した。こういう日は 家で ごろごろ しとくんが いちばんじゃ。`]:e.day===21?[`台風一過、いうてな。あらしの あくる日は、からっと 晴れるんよ。`,`にわの あさがおが たおれとったわ。あとで おこしてやらな。`,`セミもな、きのうは だんまりじゃったのに、けさは もう ないとる。げんきなもんじゃ。`]:e.event===`matsuri`&&e.phase===`night`?[`ばあちゃんも 来たよ、まつり。ことしも ようけ 人が でとるなあ。`,`もうすぐ はなびが あがるけん、よう見ときな。`,`あんたと いっしょに 見られて、ばあちゃん しあわせじゃわ。`]:e.event===`matsuriEve`?[`あしたは 滝宮さんの 夏まつりじゃ。`,`ゆうがたから 屋台が でるけんな。ばあちゃんも あとから いくけん、さきに 楽しんどきまい。`,`おこづかい、ちいとだけ はずんじゃろかな。ふふ。`]:e.day===31?[`……もう 帰る日かあ。ひと月なんて、あっという間じゃなあ。`,`あんたが おってくれて、この家も にぎやかじゃったわ。`,`むこうに 帰ってもな、ちゃんと ごはん 食べるんよ。`,`ゆうがたに なったら、駅まで おくるけんな。それまで めいっぱい あそんどいで。`]:e.day>=29?[`なつやすみも あと ちょっとじゃなあ。`,`さみしゅうなるけど、それは ゆわんとこ。`,`あそびのこしの ないようにな。`]:t>=10?Hf([[`あんた、こんがり やけて、すっかり あやがわの子じゃ。`,`おかあさんの ちいさいころに、そっくりに なってきたわ。`],[`ばあちゃんな、あさ おきるんが 楽しみに なったんよ。`,`あんたの「おはよう」が きけるけんな。`]],e.day):e.weather===`rain`?[`ようふるなあ。かえるが よろこんどるわ。`,`こういう日はな、えんがわで 雨の音 きいとるんが ええんよ。`,`かみなりが 鳴ったら、おへそ かくしなよ。ふふ。`]:e.phase===`morning`?Hf([[`おはようさん。けさも セミが やかましいこと。`,`きょうも あつうなるよ。むぎちゃ のんで いきまい。`],[`おはよう。ラジオたいそうは いったんかな?`,`滝宮さんの ひろばで、6時から やっとるけんな。`],[`あさはな、げんさんとこの うどんが いちばんじゃ。`,`「朝うどん」いうてな、こっちの ならわしよ。ばあちゃんの わかいころからじゃ。`],[`けさ、にわで きゅうりを もいだんよ。`,`とれたてはな、みそ つけて そのまま かじるんが いちばん うまいんじゃ。`]],e.day):e.phase===`night`?Hf([[`おかえり。ようけ あそんだ かおしとるわ。`,`ねるまえに、きょうの こと、にっきに つけときまい。`],[`スズムシが なきよるなあ。`,`おじいさんが すきじゃったんよ、この こえ。ええ こもりうたじゃ。`]],e.day):Hf([[`あついなあ。むりせんと、木かげで ひとやすみ しまいよ。`,`ぼうしは? ……ほら、ちゃんと かぶりない。`],[`川でな、おじいさんと よう およいだもんよ。`,`ながれの はやいとこは いかんのよ。ひざより ふかいとこもな。やくそくじゃ。`],[`ため池の げんじいさんに よろしゅうな。`,`あのひと、30年も おんなじ ゆめを おいかけとるんじゃ。うなぎのな。ふふ。`],[`滝宮の 天神さんはな、菅原道真こうを まつっとるんよ。`,`べんきょうの 神さまじゃ。2がっきの まえに、おまいり しとき。`]],e.day)}},{id:`gen`,name:`げんさん`,body:3364266,head:14198904,hat:15658734,hair:5592405,sched(e){return e.event===`matsuri`&&e.phase===`night`?{x:6,z:-48}:e.min>=360&&e.min<=840?{x:-52,z:23}:null},talk(e){let t=e.friend,n=e.state;return e.event===`matsuri`&&e.phase===`night`?n.flags.genMusuko1&&!n.flags.genMusuko2?(n.flags.genMusuko2=!0,n.friend.gen=(n.friend.gen||0)+1,[`おう坊主! 見てみい、きょうは 屋台に すけっとが おるんじゃ。`,`うちの せがれよ。「まつりは 人手が いるじゃろ」いうて、たかまつから 帰ってきよった。`,`だしの ひきかた、見てみい。なんも ゆわんでも、手が おぼえとるんじゃ。ガキのころ、あんなに いやいや てつどうとったのにのう。`,`……つがんでも ええんよ。こうして まつりの ばんに ならんで 立てたら、それで じゅうぶんじゃ。`,`よっしゃ、しっぽくうどん いっちょう! きょうのは とびきり うまいぞ、食うていけ食うていけ!`]):[`おう坊主! 屋台で しっぽくうどん 作っとるぞ。`,`まつりの日ぐらい、だしを ぜいたくに ひくんじゃ。食うていけ食うていけ!`]:e.day===31?[`なんじゃ、もう帰るんか。`,`……ちぇっ。せっかく ええ 客に なってきたとこじゃのに。`,`また来い。来年は 麺のふみかた、いちから しこんじゃる。`,`わすれんなよ。綾川は うどん発祥の地じゃけんな!`]:t>=6&&!n.flags.genMusuko1?(n.flags.genMusuko1=!0,[`坊主、おまえ きょうだいは おるんか? ……ほうか、ひとりっこか。`,`うちには せがれが ひとり おってな。いまは たかまつで 会社づとめよ。`,`ことしの はる、「おれは うどんは つがん」と。まっすぐ わしの めえ 見て ゆいよったわ。`,`……ええんじゃ、それで。あいつの じんせいじゃけんな。`,`せやけどな、ここだけの はなし ―― あいつの ふんだ 麺は、わしのより こしが あった。……だれにも ゆうなよ。`]):e.weather===`rain`?[`雨の日は うどんが うまいんじゃ。だしの かおりが しっとり たつんよ。`,`そのかわり 客は こん。坊主、ゆっくり すすっていけ。`]:Hf(t>=8?[[`坊主も だいぶ 常連じゃな。かおを 見りゃ、なんばい めか わかるわい。`,`そろそろ 麺のふみかた おしえちゃろか。かかとに たいじゅうを のせるんじゃ。`],[`ええ 食いっぷりに なったのう。`,`讃岐の男はな、こしで 食うんじゃ。うどんも おんなじよ。`]]:t>=4?[[`おう、来たか坊主! きょうの 麺は じしんさくじゃぞ。`,`ゆうべの しおかげんが、ばっちり きまったけんな。`],[`綾川はな、うどん発祥の地 いわれとるんぞ。`,`空海さんの 甥っこの 智泉さんが つたえたんじゃと。えっへん。`]]:[[`いらっしゃい! 松原製麺所じゃ。朝うどん、食うていくか?`,`ゆでたてに なましょうゆ。それだけで じゅうぶん うまいんじゃ。`],[`だしは イリコよ。瀬戸内の イリコが いちばんじゃ。`,`こんぶ? ありゃ よそいきの あじじゃ。`],[`麺はな、いきもんじゃ。`,`その日の しつどと きおんで しおかげんを かえる。まいにちが しんけんしょうぶよ。`]],e.day)}},{id:`miyaji`,name:`みやじさん`,body:15658734,head:15253656,hat:null,hair:3355443,sched(e){return e.event===`matsuri`&&e.phase===`night`?{x:0,z:-64}:e.min>=360&&e.min<=1080?{x:3,z:-58}:null},talk(e){return e.event===`matsuri`&&e.phase===`night`?[`ようこそ、滝宮の夏まつりへ。`,`ことしも 無事に この日を むかえられました。ありがたいことです。`,`19時半ごろ、花火が あがりますよ。空を 見ていてごらんなさい。`]:e.event===`matsuriEve`?[`あすは 夏まつりです。いま、総出で 準備を していましてね。`,`ちょうちんを 飾って、屋台も ならびます。`,`ゆうがたから、ぜひ いらっしゃい。`]:e.event===`typhoon`?[`この風では、境内の 木も 心配です。`,`きょうは おまいりは よろしいですから、はやく お帰りなさい。`]:e.min<420&&!e.state.flags[`taiso`+e.day]?[`おはようございます。ラジオ体操の 時間ですよ。`,`そこの 広場で やっていますから、どうぞ。`,`つづけて 通うとね、からだが かってに おぼえるものです。`]:e.state.stamps>=20?[`体操の スタンプ、もう 20を こえましたか。`,`「継続は力なり」。むずかしい 勉強より、よほど りっぱな ことですよ。`]:e.weather===`rain`?[`雨の 境内も、よいものでしょう。`,`クスノキの 葉の音が、いつもと ちがって きこえます。`]:Hf([[`ここ滝宮天満宮は、菅原道真公を おまつりしています。`,`道真公は 讃岐の国司として、この地に おられたのですよ。`],[`夏の境内は、セミの声が にぎやかでしょう。`,`あの大きな クスノキにも、いろんな 虫が 来ますよ。`],[`「うそかえ神事」というのが ありましてね。`,`「うそ」を「まこと」に かえる。おもしろいでしょう。`],[`この クスノキはね、樹齢 何百年に なります。`,`あなたの おかあさんが 子どものころも、もう この大きさでしたよ。`]],e.day)}},{id:`kenta`,name:`ケンタ`,body:13386803,head:15249544,hat:16768324,hair:2236962,sched(e){return e.day===16&&e.phase===`evening`&&e.state.flags.kentaPapa2?{x:108,z:-4}:e.weather===`rain`||e.weather===`storm`?null:e.event===`matsuri`&&e.phase===`night`?{x:-3,z:-44}:e.event===`gakusai`&&e.min>=1020?{x:-45.5,z:65.5}:e.phase===`morning`||e.phase===`day`?{x:10,z:9}:e.phase===`evening`?{x:38,z:-14}:null},talk(e){let t=e.state,n=bu(t);return e.day===1?[`お、見ん顔やな! 東京から来たんか?`,`おれ、ケンタ。虫とりなら このへんで おれが一番や。`,`あっちの 神社の森にな、でっかい クスノキが あるんや。`,`セミも カブトも、木に おるけん、そーっと 近づくんやで!`]:e.event===`matsuri`&&e.phase===`night`?[`まつりや〜!! りんごあめ くったか? おれ 2ほんめ!`,`あとで 花火 あがるんやで。やぐらの よこが いちばん よう見えるけん、ばしょ とっとこうぜ!`]:e.event===`gakusai`&&e.min>=1020?[`がっこうの まつりも ええやろ! ちいさいけど、ぜんぶ ただみたいなもんや!`,`かきごおり くったか? おれ ブルーハワイで したが まっさおや。ほら見て!`]:e.day===31?[`……なあ、ほんまに 帰るんか。`,`おまえ、来たときは もやしみたいやったのに、まっくろに なったなあ。`,`来年も ぜったい 来いよ! やくそくやぞ!!`,`……クスノキのうろ、来年まで だれにも ゆわんと いたるけん。`]:e.day===16&&e.phase===`evening`&&t.flags.kentaPapa2&&!t.flags.kentaPapa3?(t.flags.kentaPapa3=!0,t.friend.kenta=(t.friend.kenta||0)+2,[`……。`,`……とうちゃん、いまの 上りで いってもうた。つぎは しょうがつまで 帰ってこん。`,`しごとやけん、しゃあないんや。おれ もう 6年やし? そんなん へいきやし?`,`…………っ。`,`……なんや、あめ。かおが ぬれるやろ、あめ。`,`……みとらんかったことに せえよ。ぜったいやぞ。`,`(ケンタは そでで かおを ごしごし こすって、いつもの かおに もどった)`]):e.day>=13&&e.day<=15&&!t.flags.kentaPapa2?(t.flags.kentaPapa1=!0,t.flags.kentaPapa2=!0,[`きけ!! とうちゃんが 帰ってきた!! ゆうべの ばんの でんしゃで!`,`けさな、キャッチボールしてん! とうちゃんの たま、てが じんじんするくらい はやいんやで!`,`こんやは にわで はなびや! とうちゃんが たかまつで おっきいの こうてきた!`,`……なあ。おぼんが、ずーっと つづいたら ええのにな。`]):e.day>=10&&e.day<=12&&e.phase===`evening`&&!t.flags.kentaPapa1?(t.flags.kentaPapa1=!0,[`お、おまえか。……いま、でんしゃ みとってん。`,`あの じかんの 上りな、たかまつで のりかえたら、とうきょうまで つながっとるんやで。しっとった?`,`おれの とうちゃん、とうきょうで はたらいとんねん。帰ってくるんは、しょうがつと ぼんだけや。`,`もうすぐ おぼんやろ。せやから まあ、……べつに? たのしみとか、そういうんと ちゃうけど?`,`……はよ こんかな、おぼん。`]):e.friend>=3&&!t.flags.kentaBase?(t.flags.kentaBase=!0,[`……よし、きめた。おまえ、もう なかまや。`,`天満宮の うらの 竹やぶにな、おれらの「ひみつきち」が あるんや。`,`「たちいりきんし」の かんばんが めじるしや。……おまえは もう はいって ええけん!`,`あとで こいよ! ミナも よんどくけん!`]):e.friend>=5&&!t.flags.kentaTree?(t.flags.kentaTree=!0,[`……おまえ、もう ダチやけん、とっておきを おしえたる。`,`神社の でっかい クスノキ あるやろ。あれのな、じゅえきの でる「うろ」が あるんや。`,`夜か、あさの はよに のぞいてみ。でっかいのが きとるけん。`,`ほかのやつには ぜったい ないしょやぞ!!`]):e.day>=27&&!t.flags.kentaSabishii?(t.flags.kentaSabishii=!0,[`……なあ。おまえ、あと なんにちで かえるん?`,`…………ふーん。`,`…………。`,`よし! ほな のこり ぜんぶ あそぶで!! 1にちも むだに せんからな!`]):(t.mizukiri||0)>=5&&!t.flags.mizukiriTold?(t.flags.mizukiriTold=!0,t.friend.kenta=(t.friend.kenta||0)+1,[`おまえ、みずきり ${t.mizukiri}だん いったんやって? ミナに きいたで。`,`おれの きろく 4だんやのに……東京もんに まけるとか、くやしすぎるわ!`,`ひらたい いし、どこで ひろいよん? なあ、おしえてや!`]):Hf(n>=10?[[`げっ、おまえ 図鑑もう ${n}種類!?`,`おれの たちば ないやん…。む、むしとり名人の座は ゆずらんぞ!`],[`おまえ、もう 綾川の 虫はかせやな。`,`よし、しょうぶや! つぎ レアな虫 みつけたほうが 勝ちな!`]]:n>=4?[[`おっ、図鑑 ${n}種類か。やるやん!`,`カブトはな、夜か 朝はやくに 木に おるんやで。`],[`ヒグラシはな、夕方しか 鳴かんのや。`,`カナカナカナ〜って。あれ きくと、なんか 泣きそうに なるんよな。`]]:[[`虫とりの コツはな、走らんこと!`,`走って 近づいたら、ぜったい 逃げられるで。`],[`オニヤンマ 見たことあるか? 川の上を ずーっと 飛んどる。`,`あれ 捕まえたら、まじで 英雄やで。`],[`神社の森は セミの天国や。ため池のまわりは トンボやな。`,`ばしょで おる虫が ちがうんやで。`],[`きのうな、セミのぬけがら 17こ あつめた。`,`……おかんに ぜんぶ すてられたけど。`]],e.day)}},{id:`mina`,name:`ミナ`,body:14514073,head:1578e4,hat:16777215,hair:4465186,sched(e){return e.weather===`storm`?null:e.event===`matsuri`&&e.phase===`night`?{x:3,z:-46}:e.event===`gakusai`&&e.min>=1020?{x:-43,z:66}:e.event===`hotaru`&&e.phase===`night`?{x:16,z:6}:e.phase===`morning`?{x:22,z:27}:e.phase===`day`?{x:-61,z:24}:null},talk(e){let t=e.friend,n=e.state;if(n.flags.keyholder)return n.flags.keyholder=!1,n.flags.keyholderGiven=!0,n.friend.mina=(n.friend.mina||0)+2,[`ん? なに、それ。`,`……え、ことでんの キーホルダー? うちに?`,`…………ありがと。たいせつに するわ。`,`(ミナは さっそく かばんに つけてくれた)`];if(e.day===1)return[`あ、おばあちゃんちの子や。うわさ きいとったよ。`,`うち、ミナ。よろしくね。`,`ひまわり、きれいやろ? うちが 水やり しとるんよ。`];if(e.friend>=4&&!n.flags.minaYuki1&&e.phase!==`night`&&e.event!==`matsuri`&&e.event!==`gakusai`&&e.day<27)return n.flags.minaYuki1=!0,[`なあ、この ひまわりな。うち ひとりで うえたんと ちがうんよ。`,`ユキちゃんいう、いちばんの ともだちと、はるに たねを まいたんや。`,`……そのユキちゃんな、おとうさんの しごとで、5月に とおくへ てんこうしていってしもてん。`,`「ひまわりが さくころ、また あそびに くる」って やくそくしたんやけど……まだ、こんのよ。`,`せやけん うち、まいにち 水やり しとるん。さいたよって、おしえたいけんな。`];if(e.friend>=7&&n.flags.minaYuki1&&!n.flags.minaYuki2&&e.phase!==`night`&&e.event!==`matsuri`&&e.event!==`gakusai`)return n.flags.minaYuki2=!0,n.friend.mina=(n.friend.mina||0)+1,[`あんな、きのう ユキちゃんから てがみ きたんよ! ひさしぶりに!`,`むこうの まちにも なれて、あたらしい ともだちも できたんやって。よかったわ。`,`……でもな、さいごに ちいさい じで「あやがわに かえりたい」って かいてあってん。`,`うち、へんじに ひまわりの しゃしん はっといた。「こんなに おおきなったで」って。`,`……えらいやろ? ほんまは、ちょっと だけ、なきそうやったんやけどな。`];if(e.event===`hotaru`&&e.phase===`night`)return[`来た来た! ほら、川のほう 見てみ。`,`ホタルやで。いまの 時期だけしか 見られんのよ。`,`……きれいやねえ。ずっと 見とれるわ。`];if(e.event===`matsuri`&&e.phase===`night`)return[`ゆかた、へんじゃない? おかあちゃんに 着せてもろたんよ。`,`あとで 花火、いっしょに 見よ!`];if(e.event===`gakusai`&&e.min>=1020)return[`がっこうの なつまつり、きたんやね!`,`ちょうちんが ついた こうてい、なんか べつの ばしょみたいで ふしぎやろ?`,`うち、ヨーヨー 2こも つれたんよ。すごくない?`];if(e.day===31){let e=[`きょうで さいごなんやね。`,`……ホタル、いっしょに 見たん、おぼえとる?`,`うち、わすれんけんね。`];return n.flags.keyholderGiven&&e.push(`キーホルダー、2がっきは らんどせるに つけるわ。じまんするんや。`),n.flags.minaYuki2&&e.push(`ひまわりの たね、なくさんときや。……はなれても、ともだちやからな。ユキちゃんとも、あんたとも。`),e.push(`また来年な! ぜったいやで!`),e}return e.day>=27&&!n.flags.minaSabishii?(n.flags.minaSabishii=!0,n.flags.minaYuki2?(n.friend.mina=(n.friend.mina||0)+1,[`ひまわりな、もう たね つくりはじめとるんよ。したむいて、なんか さびしそうやろ。`,`このたね、ユキちゃんに おくろうおもてん。「らいねん、そっちで さかせ」って。`,`ほんでな、あんたにも いっこ あげる。とうきょうで うえてみ。`,`そしたら さ、はなれとっても、おんなじ はなが さいとるやろ? ……なんか、ええやん。`,`……うちらは、はなれても ともだちや。ひまわりが、その しるしや。`]):[`ひまわりな、もう たね つくりはじめとるんよ。`,`したむいて、なんか さびしそうやろ。`,`……なつの おわりって、なんで こんな きもちに なるんかなあ。`,`あんたが きめたわけでも ないのにな。ごめん、へんなこと ゆうた。`]):e.weather===`rain`?[`あめの日は、のきさきで ラムネ のむんが ええんよ。`,`あまやどりって、なんか たのしいやん?`]:t>=6?Hf([[`あんたと 話すん、なんか もう ふつうに なったなあ。`,`ずっと おったら ええのに。……なんてな。`],[`駄菓子屋の ラムネ、はんぶんこ する?`,`ビー玉は じゃんけんで きめよ。`]],e.day):e.phase===`day`?Hf([[`ここの駄菓子屋、なんでも あるんよ。`,`うちの おすすめは きなこ棒。10円で あたりつき!`],[`夏まつりの日はな、滝宮さんに 屋台が いーっぱい でるんよ。`,`はよ 来んかなあ、まつり。`]],e.day):Hf([[`ひまわりはな、あさは 東、ゆうがたは 西を むくんやで。`,`……って 学校で ならった。ほんまかな?`],[`川の音って、ずっと きいとれるよね。`],[`ひまわりの たね、しゅうくだいの かんさつにっきに かくんよ。`,`あんたも にっき つけとる? えらいやん。`]],e.day)}},{id:`genjii`,name:`げんじい`,body:5596740,head:14198904,hat:8943428,hair:14540253,elder:!0,sched(e){return e.weather===`storm`?null:e.event===`matsuri`&&e.phase===`night`?{x:-8,z:-46}:e.phase===`morning`||e.phase===`evening`||e.phase===`night`?{x:117,z:67}:null},talk(e){let t=e.state,n=xu(t);if(t.flags.rodBaachan&&!t.flags.rodStory)return t.flags.rodStory=!0,t.friend.genjii=(t.friend.genjii||0)+2,[`……坊。その竿、どこで それを。`,`…………シュウさんの 竿じゃ。まちがいない。にぎりの くろずみかたまで、おぼえとるわい。`,`おまえさん、シュウさんの 孫じゃったんか。……そうか。そうかそうか。どうりで、みょうに かまえが さまに なっとると おもうたわ。`,`わしと シュウさんはな、ガキのころから この池で きそいおうた なかよ。フナも ナマズも、どっちが 先に 釣るか、いっつも しょうぶでな。`,`さいごに のこったんが ウナギじゃ。「あやがわの主は、どっちが 先に 釣るか」いうてな。ふたりで やくそくした。`,`……そのまんまよ。シュウさんは、しょうぶの とちゅうで、先に いってしもうた。`,`わしが 30年、あきらめもせんと 池に かよいよるんはな。ゆめじゃのうて、やくそくじゃけんよ。しょうぶは まだ、おわっとらん。`,`……ええもん 見せてもろた。坊、その竿 だいじにせえ。それはな、まだ しょうぶの とちゅうの 竿なんじゃ。ひっひ。`];if(t.flags.unagi&&!t.flags.unagiTold){t.flags.unagiTold=!0,t.friend.genjii=(t.friend.genjii||0)+2;let e=[`な……なんじゃと!? ウナギを 釣った!?`,`わしが 30年 かけても 釣れんかった やつを……。`];return t.flags.rodStory&&e.push(`……その竿でか。シュウさんの 竿で、シュウさんの 孫が 釣りよったんか。`,`…………ほんなら、しょうぶは わしの まけじゃな。シュウさんの、勝ちじゃ。`,`(げんじいは 池を みつめて、ながいこと だまっとった。それから ふーっと、いきを はいて わらった)`),e.push(`……ひっひ。まいった、まいった。きょうから おまえさんが「あやがわの主」じゃ。`,`(げんじいは くやしそうで、でも どこか うれしそうやった)`),e}if(t.flags.rodStory&&!t.flags.nushiHint&&e.day>=16)return t.flags.nushiHint=!0,[`坊、シュウさんの竿にも だいぶ なじんできたのう。ほんなら ええこと おしえたろ。`,`あやがわの主 (ウナギ) とは べつにな、この 北条池にも「ぬしさま」が おる。としふりた 大ゴイよ。`,`はれた日の ゆうがた、みなもが 金色に なるころ……ぬーっと、たたみ いちまいぶんの かげが うごくんじゃ。`,`わしも シュウさんも、なんべんも はりを のされてなあ。ひっひ。坊の うでなら、どうかの。`];if(t.flags.nushiCaught&&!t.flags.nushiTold)return t.flags.nushiTold=!0,t.friend.genjii=(t.friend.genjii||0)+2,[`な……なんじゃ その どでかいの!? ぬ、ぬしさまか!? ほんまに あげたんか!!`,`30年 この池に かよって、わしでさえ 2かいしか かおを 見とらんのじゃぞ……。`,`……シュウさん、見よったか。あんたの 孫は、もう いっちょまえの 釣り師じゃわ。`,`(げんじいは むぎわらぼうしを とって、池に むかって ふかぶかと おじぎを した)`];if(e.event===`matsuri`&&e.phase===`night`)return[`わしゃ 屋台の 金魚すくいの 番じゃ。`,`……ほんまは 釣りのほうが ええんじゃがのう。ひっひ。`];if(e.day===31){if(t.flags.unagiTold){let e=[`帰るんか、坊。`,`おまえさんは、わしの 30年のゆめを かなえてしもた たいした 釣り師じゃ。`];return t.flags.rodStory&&e.push(`シュウさんの 竿は、もって帰り。しょうぶの けっかは、わしが むこうで ほうこくしとくけん。`),e.push(`来年は わしが 釣る。しょうぶは おあずけじゃぞ。ひっひ。`),e}return t.flags.rodStory?[`帰るんか、坊。`,`その竿は、むこうに もって帰り。シュウさんも、東京いうもんを 見てみたいじゃろうけん。`,`ほんで 来年、その竿と いっしょに もどってこい。`,`ウナギの しょうぶ、こんどは 坊も いれて 3にんじゃ。ひっひ。`]:[`帰るんか、坊。`,`おまえさんと 釣りした夏は、わすれんよ。`,`ウナギはな……来年、いっしょに 釣ろうや。`]}return n>=8?Hf([[`図鑑 ${n}種類とはのう。わしの 弟子いうても ええぞ。`,`あとは ウナギじゃ。夜の川で、大物を 待つんじゃ。`],[`おまえさん、竿の あつかいが さまに なってきたのう。`,`釣りはな、待つあいだが いちばん ええ時間なんじゃ。`]],e.day):e.weather===`rain`?[`雨の日はな、魚が ようけ 食いつくんじゃ。`,`ひっひ、釣り人だけの ひみつじゃぞ。`]:Hf([[`ため池はな、讃岐の宝じゃ。雨が すくないけん、ようけ こしらえたんよ。`,`このへんだけでも、なんぼ あるか わからんぞ。`],[`ナマズはな、夕方からじゃ。のんびり 待つんが 釣りよ。`,`せっかちは いかん、せっかちは。`],[`川では オイカワ、池では ブルーギルが よう釣れる。`,`まずは 数を釣って、腕を みがくんじゃな。`],[`わしの ゆめはな、あやがわの ウナギを 釣ることじゃ。`,`夜の川に おるんじゃが……もう 30年 釣れとらん。ひっひ。`]],e.day)}},{id:`noboru`,name:`ノボルさん`,body:4877114,head:13146216,hat:14205064,hair:4469538,sched(e){return e.weather===`storm`||e.event===`matsuri`&&e.phase===`night`?null:e.min>=380&&e.min<=1050?{x:-134.5,z:-46}:null},talk(e){let t=e.state.nouka||0;return e.day===31?[`ぼん、きょうで 帰るんか。`,`おまえさんの ぬいてくれた あぜはな、いまも きれいなもんじゃ。`,`あきの いねかり、見せてやれんのが ざんねんじゃのう。また来い!`]:e.weather===`rain`?[`あめは のうかの やすみの日……と いいたいとこじゃがな。`,`みずの みまわりだけは かかせんのじゃ。ふえすぎても こまるけんな。`]:Hf(t>=7?[[`おう、わしの いちばん弟子! きょうも ええ かおしとるのう。`,`しんまいの やくそく、わすれとらんぞ。あきを たのしみに しとりまい。`],[`たなだの こめはな、へいちの こめより うまいんじゃ。`,`みずが つめたいけん、ゆっくり そだつ。ひとと おんなじじゃな。`]]:t>=1?[[`おう、この前の てつだい、たすかったわ!`,`また ひまなときに よってくれや。しごとは なんぼでも あるけんな。`],[`この 石がきはな、じいさんの じいさんが つんだんじゃと。`,`いしを つんで、たいらな とこを こしらえる。やまの ちえじゃ。`],[`たなだの みずはな、いちばん うえから じゅんばんに おりてくるんじゃ。`,`けんかせんように、むかしから みんなで きめごとを しとる。`]]:[[`ここの たなだはな、うえから 見ると かがみみたいに ひかるんじゃ。`,`ゆうがた、やまみちから 見おろしてみまい。ええもんじゃぞ。`],[`あついのう、ぼん。むぎわらぼうし、かぶっとるか?`,`のうかは あさと ゆうがたに はたらいて、ひるは ひとやすみするんじゃ。`],[`この やまの みずで そだった こめはな、ほんまに うまいんじゃぞ。`,`ひまが あったら、のさぎょう てつどうてくれや。`]],e.day)}},{id:`haru`,name:`ハルさん`,body:12216906,head:1578e4,hat:null,hair:9079434,sched(e){return e.weather===`storm`?null:e.event===`gakusai`&&e.min>=1020?{x:-33.5,z:63.5}:e.event===`matsuri`&&e.phase===`night`?{x:9.5,z:-48.5}:e.min>=480&&e.min<=1120?{x:-66,z:20.5}:null},talk(e){let t=e.friend;return e.event===`gakusai`&&e.min>=1020?[`いらっしゃい! がっこうまつりの かきごおりは、うちの たんとうなんよ。`,`こおりはな、けさ しんがいの こおりやさんから とどいた ほんまもんよ。`,`ようけ おたべ。こどもは それが しごとじゃ。`]:e.event===`matsuri`&&e.phase===`night`?[`まつりの ばんは、だがしやは おやすみ。うちも あそぶ ばんじゃ。`,`ほら、りんごあめ もっとるじゃろ。うふふ、としがいもなくな。`]:e.day===31?[`あら、きょうで さいごかね。`,`あんたが ガラガラくじ ひくとき、いっつも しんけんな かおで……うふふ。`,`らいねんも おいで。あたりの アイス、とっとくけんな。`]:e.day===8?[`あしたはな、しょうがっこうで なつまつりが あるんよ。`,`うちも かきごおりの みせを だすんじゃ。ゆうがたから おいでまい。`]:t>=5?Hf([[`あんた、もう じょうれんさんじゃね。かおを 見たら わかるわ。`,`きょうは とくべつに、きなこぼう 1ぽん おまけしとこ。ないしょよ。`],[`この みせはな、あんたの おかあさんも かよっとったんよ。`,`すきなんは ラムネじゃった。おやこで にとるわ、うふふ。`]],e.day):e.weather===`rain`?[`あめの日は、のきさきで あまやどりしていきまい。`,`ラムネの びんを ながめとるだけでも、ここは たのしいけんな。`]:Hf([[`いらっしゃい。10円 にぎって、なにを かうか なやむんが だがしやの だいごみよ。`,`ゆっくり えらんだら ええけんな。`],[`ガラガラくじはな、そこの はこに はいっとるんよ。`,`きょうは あたりが まだ のこっとるけん……おっと、ゆうてしもた。`],[`この しょうてんがいもな、むかしは こんぴらまいりの ひとで にぎおうたんよ。`,`いまは しずかなもんじゃけど、うちは ここが すきでな。`]],e.day)}},{id:`ekicho`,name:`えきちょうさん`,body:2767445,head:14725256,hat:2767445,hair:5592405,sched(e){return e.weather===`storm`?null:e.min>=380&&e.min<=1200?{x:-16.5,z:-22.3}:null},talk(e){let t=e.state;return e.day===31?[`きょうで お帰りですか。陶の駅から 乗られるんですな。`,`ことでんの まどから 見える 夕やけは、きっと わすれられませんよ。`,`また 来年、この ホームで お待ちしとります。`]:e.event===`matsuri`?[`きょうは 滝宮の 夏まつり。ことでんも まつりダイヤで 増発しとります。`,`よその まちからも ようけ 来られますけんな。駅も おおいそがしですわ。`]:e.event===`typhoon`?[`たいふうで 上下線とも 運転を 見あわせとります。`,`こんな日に 駅に おるんは、わしと ツバメの すだけですわ。はよ お帰り。`]:t.flags.rideTrain?Hf([[`この前は ことでんに 乗ってくれたそうで。どうでした、かわらまち。`,`単線ですけんな、すれちがいの 駅で ちょっと 待つんも、また ええもんでしょう。`],[`ことでんはな、100年ちかく この まちを 走っとるんですわ。`,`あんたの おかあさんも、この 駅から 学校に かよいよりました。`]],e.day):Hf([[`ようこそ、滝宮駅へ。この 駅しゃはな、大正時代からの 木の えきしゃですわ。`,`ふるいけど、なつは ひんやり すずしいんで。`],[`つぎの 上りは もうすこし あとですな。いそがんでも だいじょうぶ。`,`いなかの 駅は、じかんも ゆっくり ながれとりますけん。`],[`ホームの つばめの す、見えますか。ことしは ひなが 4わ。`,`あの子らが 飛びたつと、なつも おわりですわ。`],[`陶の駅までは ひと駅。かわらまちへは 40分ほどですわ。`,`でんしゃたびも、なつやすみの だいごみでっせ。`]],e.day)}},{id:`kocho`,name:`こうちょうせんせい`,body:7824981,head:15253656,hat:null,hair:10066329,elder:!0,sched(e){return e.weather===`storm`?null:e.event===`gakusai`&&e.min>=1020?{x:-39.5,z:65}:e.min>=480&&e.min<=1020?{x:-44.5,z:56.5}:null},talk(e){let t=e.state;return e.event===`gakusai`&&e.min>=1020?[`やあ、来てくれましたね。あやがわ小学校の 夏まつりへ ようこそ。`,`PTAの みなさんと 子どもたちで、まいとし やっとるんですよ。`,`ちいさな まつりですが、この ちょうちんの あかりが、わたしは じまんでしてね。`]:e.day===9?[`きょうの ゆうがたから、この 校庭で 夏まつりを やるんですよ。`,`ヨーヨーつりに かきごおり、くじびきも あります。`,`くらくなるころに、ぜひ あそびに いらっしゃい。`]:e.day===31?[`あすから 9月。あなたも あちらの 学校で 2学期ですね。`,`あやがわの 夏を、たくさん おぼえて 帰ってください。`,`それが なにより の べんきょうですよ。`]:e.day>=8&&!t.flags.bunshuHint?(t.flags.bunshuHint=!0,[`ん? ……ああ、あなたでしたか。とうきょうから 来とる、うわさの。`,`いや、おどろいた。おかあさんの 子ども時分に、かおが そっくりだ。`,`そうだ。ほんかんの ろうかにね、むかしの「学級文集」を ならべてあるんですよ。`,`あなたの おかあさんの 学年のも あります。ひるまなら、いつでも 見せてあげますよ。`]):e.day>=27?[`なつやすみも のこり わずか。うちの 児童らは しゅくだいに おおあわてです。`,`ふふ。まいとし おなじことを ゆうとるんですがねえ。`]:(t.stamps||0)>=10?[`ラジオ体操、よく つづけとるそうですね。みやじさんから 聞きましたよ。`,`つづける ちからは、いちばんの たからものです。りっぱ りっぱ。`]:Hf([[`なつやすみの 学校はね、しずかで いいものですよ。`,`セミの こえと、プールの 水の 音だけ。ぜいたくな じかんです。`],[`この 校しゃはね、あなたの おかあさんの ころから かわっとりません。`,`ろうかの ゆかは、児童らが 80年 みがいた ゆかなんですよ。`],[`校庭の サクラはね、2学期の はじめには 葉ざくらです。`,`でも はるには、それはそれは みごとに さきますよ。また 見においで。`],[`てつぼうの さかあがり、できますか?`,`できんでも だいじょうぶ。れんしゅうした 手の まめが、あなたの メダルです。`]],e.day)}}],Wf=class{constructor(e,t,n,r,i,a){Object.assign(this,{scene:e,world:t,state:n,clock:r,ui:i,audio:a}),this.npcs=Uf.map(t=>{let n=Cd({body:t.body,head:t.head,hat:t.hat,hair:t.hair,elder:!!t.elder,scale:t.id===`kenta`||t.id===`mina`?.85:1});return n.group.visible=!1,e.add(n.group),{def:t,mesh:n.group,parts:n.parts,t:Math.random()*10,wanderT:0,target:null}});let o=document.createElement(`canvas`);o.width=64,o.height=96;let s=o.getContext(`2d`);s.font=`bold 76px sans-serif`,s.textAlign=`center`,s.textBaseline=`middle`,s.lineWidth=12,s.strokeStyle=`#7a4a00`,s.strokeText(`!`,32,50),s.fillStyle=`#ffd452`,s.fillText(`!`,32,50),this.marker=new Qr(new Rr({map:new Ji(o),transparent:!0,depthWrite:!1})),this.marker.scale.set(.7,1.05,1),this.marker.visible=!1,e.add(this.marker),this.markerT=0}ctx(){let e=this.state;return{day:e.day,min:e.min,phase:Mu(e.min),weather:Au(e.day).weather,event:Au(e.day).event||null,state:e,friend:0}}async talk(e){let t=this.ctx();t.friend=this.state.friend[e.def.id]||0;let n=[`rodBaachan`,`rodStory`,`kentaPapa1`,`kentaPapa2`,`kentaPapa3`,`genMusuko1`,`genMusuko2`,`minaYuki1`,`minaYuki2`],r={};for(let e of n)r[e]=this.state.flags[e];let i=e.def.talk(t);if(this.state.talkedToday[e.def.id]||(this.state.talkedToday[e.def.id]=!0,this.state.friend[e.def.id]=(this.state.friend[e.def.id]||0)+1,K(this.state,`${e.def.name}とはなした`)),await this.ui.say(e.def.name,i),e.def.id===`baachan`&&!this.state.flags.metBaachan){if(this.state.flags.metBaachan=!0,!this.state.flags.tutorial){this.state.flags.tutorial=!0;let e=this.ui.touchUI,t=[];e&&this.state.flags.touchTut||t.push(`<b>― あそびかた ―</b><br><br>${e?`ひだりの スティック`:`WASD キー`}で あるく。<br>${e?`スティックを おおきく たおすと`:`Shift を おしながら あるくと`} はしれる。<br><br>きになるものの ちかくで<br>${e?`「しらべる」ボタン`:`E キー`}を おすと しらべられるよ。`,`つかまえた むしや さかなは<br>${e?`「ずかん」ボタン`:`Z キー`}で ずかんに きろくされる。<br><br>みちに まよったら<br>${e?`「ちず」ボタン`:`X キー`}で まちの ちずが みられるよ。`),t.push(`この まちには、じかんが ながれとる。<br>あさ、ひる、ゆうがた、よる……<br>じかんや ひにちで、あえるひとや<br>おこることが かわっていくんや。<br><br><b>8がつ31にち</b>まで、<br>じゆうに なつやすみを すごそう。`),await this.ui.showStory(t)}this.ui.toast(`おばあちゃんは さきに いえへ もどっていった。ついていこう (みなみへ)`)}let a={rodBaachan:`じいちゃんの つりざおの はなしを、ばあちゃんに きいた`,rodStory:`げんじいに じいちゃんの 竿を 見せた`,kentaPapa1:`ケンタが とうちゃんの はなしを した`,kentaPapa2:`ケンタの とうちゃんが お盆で かえってきとった`,kentaPapa3:`ケンタの とうちゃんを、いっしょに 見おくった`,genMusuko1:`げんさんの せがれの はなしを きいた`,genMusuko2:`げんさんの せがれが まつりの 屋台を てつどうとった`,minaYuki1:`ミナの てんこうした ともだち、ユキちゃんの はなしを きいた`,minaYuki2:`ミナが ユキちゃんから てがみを もらったと 話しとった`};for(let e of n)!r[e]&&this.state.flags[e]&&a[e]&&K(this.state,a[e]);e.def.id===`kenta`&&await this.maybeBugSumo(),e.def.id===`mina`&&await this.maybeMushiQuiz()}async maybeMushiQuiz(){let e=this.state;if(e.day===1||e.day===31||e.flags[`quiz`+e.day]||bu(e)<3)return;let t=Mu(e.min);if(t!==`morning`&&t!==`day`)return;if(await this.ui.say(`ミナ`,[`ねえねえ、あんた むしに くわしくなってきたんやろ?`,`ほな、うちの「むしクイズ」に ちょうせんしてみる? 2もんね。`]),await this.ui.choice(`むしクイズ、うける?`,[`うける!`,`またこんど`])!==0){await this.ui.say(`ミナ`,[`ふうん。じしんないんや? ま、いつでも どうぞ。`]);return}e.flags[`quiz`+e.day]=!0;let n=[...Cu].sort(()=>Math.random()-.5),r=0;for(let e=0;e<2;e++){let t=n[e],i=[t,...n.filter(e=>e.id!==t.id).slice(-2)].sort(()=>Math.random()-.5);i[await this.ui.choice(`だい${e+1}もん! 「${t.desc}」……なーんだ?`,i.map(e=>e.name))].id===t.id?(r+=1,this.audio.sfx(`coin`),this.ui.toast(`ミナ「せいかーい!」`)):(this.audio.sfx(`flee`),this.ui.toast(`ミナ「ぶっぶー。こたえは ${t.name}でした」`))}r===2?(e.friend.mina=(e.friend.mina||0)+2,await this.ui.say(`ミナ`,[`2もん せいかい! ……やるやん。`,`うち、しょうらい むしはかせと けっこんしよう おもとるんよね。じょうだんやけど。`]),K(e,`ミナのむしクイズにぜんもんせいかいした`)):r===1?(e.friend.mina=(e.friend.mina||0)+1,await this.ui.say(`ミナ`,[`1もん せいかい。まあまあやね。`,`ずかんを よみこんだら、もっと わかるように なるよ。`]),K(e,`ミナのむしクイズにちょうせんした`)):(await this.ui.say(`ミナ`,[`ぜんぜん やん! ずかん もっとる いみ ある?`,`ふふ、また ちょうせんしてな。`]),K(e,`ミナのむしクイズにちょうせんした`))}async maybeBugSumo(){let e=this.state;if(e.day===1||e.day===31||e.flags[`sumo`+e.day])return;let t=(e.bugs.kabuto||0)>0,n=(e.bugs.nokogiri||0)>0;if(!t&&!n)return;let r=Mu(e.min);if(r!==`morning`&&r!==`day`)return;let i=t?`カブトムシ`:`ノコギリクワガタ`;if(await this.ui.say(`ケンタ`,[`……ん? おまえ、虫かごに ${i} おるやん!`,`ちょうどええ。おれの ノコギリの「よこづな」と しょうぶさせようや!`,`むしずもうや! まけたほうが ジュース おごりな!`]),await this.ui.choice(`むしずもう、うけてたつ?`,[`うけてたつ!`,`またこんど`])!==0){await this.ui.say(`ケンタ`,[`なんや、びびっとん? ……ま、いつでも こいや。`]);return}e.flags[`sumo`+e.day]=!0,this.audio.sfx(`taiso`),this.ui.toast(`きの えだの どひょうに 2ひきを のせた。はっけよーい……のこった!`);let a=[`おしだす`,`ねばる`,`つのですくう`],o={0:1,1:2,2:0},s=[`ぐいぐい おしこむ! ${i}が どひょうぎわまで おしきった!`,`よこづなの すくいなげを、ろっぽんの あしで こらえた!`,`つのが がっちり はいった! ${i}の うっちゃり!`],c=[`おしこんだところを ひらりと かわされた…!`,`ねばりくらべで まけた! よこづな、びくとも せん…!`,`すくいに いった すきに おしだされた…!`],l=0,u=0;for(;l<2&&u<2;){let e=await this.ui.choice(`${i} ${l} - ${u} よこづな ▶ どうする!?`,a),t=Math.floor(Math.random()*3);if(e===t){this.audio.sfx(`bite`),this.ui.toast(`がっぷり よつ! りょうしゃ うごかん…!`);continue}o[e]===t?(l+=1,this.audio.sfx(`catch`),this.ui.toast(s[e])):(u+=1,this.audio.sfx(`flee`),this.ui.toast(c[e]))}l>=2?(e.friend.kenta=(e.friend.kenta||0)+2,await this.ui.say(`ケンタ`,[`ま……まけた〜!! よこづなが まけた!!`,`おまえの ${i}、なんちゅう ちからや…。`,`ラムネ おごったる。そのかわり、あしたは リベンジやけんな!`]),this.ui.toast(`むしずもうに かった! ケンタに ラムネを おごってもろた`,`gold`),K(e,`むしずもうでケンタのよこづなにかった`)):(e.friend.kenta=(e.friend.kenta||0)+1,await this.ui.say(`ケンタ`,[`よっしゃー! やっぱり よこづなは つよいんや!`,`けど おまえの ${i}も、なかなか やったで。`,`また しょうぶしような!`]),K(e,`むしずもうでケンタにまけた`))}update(e,t,n){let r=this.ctx();this.markerT+=e,this.world.npcColliders.length=0;let i=null,a=null,o=1e9;for(let n of this.npcs){if(n.t+=e,this.hideKids&&(n.def.id===`kenta`||n.def.id===`mina`)){n.mesh.visible=!1;continue}let s=n.def.sched(r);if(!s){n.mesh.visible=!1;continue}n.mesh.visible?(!n.anchor||n.anchor.x!==s.x||n.anchor.z!==s.z)&&(n.mesh.position.set(s.x,0,s.z),n.anchor=s):(n.mesh.visible=!0,n.mesh.position.set(s.x,0,s.z),n.anchor=s);let c=n.mesh.position;c.y=this.world.groundY?this.world.groundY(c.x,c.z):0;let l=Math.hypot(c.x-t.pos.x,c.z-t.pos.z);if((n.def.id===`kenta`||n.def.id===`mina`)&&l>3){if(n.wanderT-=e,n.wanderT<=0){n.wanderT=2+Math.random()*3;let e=Math.random()*Math.PI*2;n.target={x:s.x+Math.cos(e)*2.5,z:s.z+Math.sin(e)*2.5}}if(n.target){let t=n.target.x-c.x,r=n.target.z-c.z,i=Math.hypot(t,r);if(i>.2){let a=1.6*e,o=c.x+t/i*a,s=c.z+r/i*a;this.world.isBlocked(o,s,!1,n.def.id)||(c.x=o,c.z=s),n.mesh.rotation.y=Math.atan2(t/i,r/i);let l=Math.sin(n.t*7)*.5;n.parts.armL.rotation.x=l,n.parts.armR.rotation.x=-l,n.parts.legL.rotation.x=-l,n.parts.legR.rotation.x=l}}}else n.parts.armL.rotation.x=Math.sin(n.t*1.4)*.06,n.parts.armR.rotation.x=-Math.sin(n.t*1.4)*.06,n.parts.legL.rotation.x=0,n.parts.legR.rotation.x=0;l<4&&(n.mesh.rotation.y=Math.atan2(t.pos.x-c.x,t.pos.z-c.z)),l<2.6&&l<o&&(a=n,o=l),this.world.npcColliders.push({x:c.x,z:c.z,r:.62,id:n.def.id}),n.def.id===`baachan`&&r.day===1&&!this.state.flags.metBaachan&&(i=n)}if(i&&i.mesh.visible){let e=i.mesh.position;this.marker.visible=!0,this.marker.position.set(e.x,e.y+2.35+Math.abs(Math.sin(this.markerT*3.2))*.28,e.z)}else this.marker.visible=!1;a&&n.push({dist:o,label:`はなす (${a.def.name})`,action:()=>this.talk(a)})}};function Gf(){let e=Math.random()*100;for(let t of Tu)if(e-=t.w,e<=0)return t;return Tu[0]}var Kf=[{x:-64,z:23,hint:`だがしやの うら`},{x:28,z:74,hint:`たんぼの あぜみち`},{x:20,z:22,hint:`はしの たもと`},{x:42,z:14,hint:`かわらの くさむら`},{x:92,z:20,hint:`すえの たんぼみち`},{x:128,z:62,hint:`ため池の ほとり`}],qf=30,Jf=44,Yf=[[`はただ`,2],[`かざしがおか`,5],[`おかもと`,7],[`えんざ`,10],[`いちのみや`,12],[`くうこうどおり`,14],[`ぶっしょうざん`,17],[`おおた`,19],[`ふせいし`,21],[`さんじょう`,23],[`りつりんこうえん`,25]],Xf=[[`りつりんこうえん`,4],[`さんじょう`,6],[`ふせいし`,8],[`おおた`,10],[`ぶっしょうざん`,12],[`くうこうどおり`,15],[`いちのみや`,17],[`えんざ`,19],[`おかもと`,22],[`かざしがおか`,24],[`はただ`,26]],Zf=[{id:`hashi`,x:17.6,z:4.2,place:`はしのした`,hint:`みずの おとに まじって、わらいごえが きこえたような…`},{id:`kusu`,x:-6.2,z:-53.2,place:`クスノキの うら`,hint:`じんじゃの ほうで スズメが いっせいに とびたった`},{id:`take`,x:-13.4,z:-65.4,place:`たけやぶの なか`,hint:`たけやぶが ガサガサッと ゆれた。……かぜかなあ?`},{id:`eki`,x:108,z:-8,place:`えきの ベンチの かげ`,hint:`えきの ほうへ かけていく せなかが ちらっと みえた`},{id:`himawari`,x:21,z:30.5,place:`ひまわりばたけ`,hint:`はたけの ひまわりが 2ほんだけ ぐらぐら ゆれとる`}],Qf=class{constructor(e,t,n,r,i,a){Object.assign(this,{world:e,state:t,clock:n,ui:r,audio:i,sleepFn:a})}get spots(){let e=this.state,t=this.clock,n=[];if(this.world.indoor&&this.world.sub===this.world.trainRide){let e=this.world.trainRide;return n.push({x:e.entry.x,z:e.entry.z,r:2.2,label:`しゃそうを ながめる`,action:async()=>{let e=[`たんぼの みどりが ずーっと つづいとる`,`さぬきふじみたいな おむすびやまが みえる!`,`うどんやの かんばん、もう 3けんめや`,`ためいけが きらきら ひかっとる`,`ガタンゴトン… でんしゃの ゆれ、ねむくなるなあ`];this.ui.toast(e[(this.rideViews=(this.rideViews||0)+1)%e.length])}}),n}if(this.world.indoor&&this.world.sub===this.world.takamatsu){let r=this.world.takamatsu.pts;return n.push({x:r.station.x,z:r.station.z,r:3,label:`ことでんで すえへ かえる`,action:()=>this.boardTrain(-1)}),e.flags[`soft`+t.day]||n.push({x:r.depato.x,z:r.depato.z,r:2.4,label:`デパートの おくじょうで ソフトクリーム`,action:async()=>{e.flags[`soft`+t.day]=!0,this.audio.sfx(`coin`),await this.ui.fadePulse(),this.ui.toast(`おくじょうから たかまつの まちが みわたせる! ソフトクリームが とける〜`,`gold`),K(e,`デパートのおくじょうでソフトクリームをたべた`)}}),n.push({x:r.gamecen.x,z:r.gamecen.z,r:2.2,label:`ゲームセンターで あそぶ`,action:async()=>{this.audio.sfx(`coin`);let n=[`レースゲームで 1い! やったー!`,`シューティングは むずかしい… すぐ やられた`,`たいせんかくとうで おにいさんに まけた…`,`クレーンゲームは あと ちょっとやった!`];this.ui.toast(`100えん とうにゅう… ${n[(t.day+Math.floor(t.min/60))%n.length]}`),K(e,`かわらまちのゲーセンであそんだ`)}}),n.push({x:r.honya.x,z:r.honya.z,r:2.2,label:`ほんやで まんがを たちよみする`,action:async()=>{let t=Math.random()<.7;this.ui.toast(t?`しんかんの まんがを たちよみ… つづきが きになる!`:`おばちゃんに「かうの? かわんの?」って にらまれた…`),K(e,`ほんやでまんがをたちよみした`)}}),!e.flags[`omiyage`+t.day]&&!e.flags.keyholder&&!e.flags.keyholderGiven&&n.push({x:r.omiyage.x,z:r.omiyage.z,r:2.2,label:`おみやげの キーホルダーを かう`,action:async()=>{e.flags[`omiyage`+t.day]=!0,e.flags.keyholder=!0,this.audio.sfx(`coin`),this.ui.toast(`ことでんの キーホルダーを かった! ミナに あげたら よろこぶかなあ`,`gold`),K(e,`おみやげのキーホルダーをかった`)}}),n.push({x:r.vending.x,z:r.vending.z,r:1.8,label:`つめたい ジュースを かう`,action:async()=>{this.audio.sfx(`coin`),this.ui.toast(`ガコン! …ぷはー、とかいの ジュースも うまい`)}}),n}if(this.world.indoor&&this.world.sub===this.world.interior2f){let r=this.world.interior2f.spots;return n.push({x:r.stairs.x,z:r.stairs.z,r:1.5,label:`いちかいへ おりる`,action:()=>this.warpTo(this.world.interior,1.7,-.9,0,250)}),n.push({x:r.futon.x,z:r.futon.z,r:1.9,label:`ふとんで ねる`,action:async()=>{if(t.min>=1020||t.day===31){await this.ui.choice(`きょうはもう ねる?`,[`ねる`,`まだあそぶ`])===0&&this.sleepFn();return}await this.ui.choice(`まだ ひが たかいけど…`,[`ひるねする (ゆうがたまで)`,`やめとく`])===0&&(await this.ui.fade(!0,700),e.min=Math.max(e.min,Math.min(Math.max(e.min+60,980),1015)),await new Promise(e=>setTimeout(e,500)),await this.ui.fade(!1,700),this.ui.toast(`セミのこえを ききながら うとうと…… おきたら もう ゆうがたや`),K(e,`ふとんでひるねした`))}}),n.push({x:r.caps.x,z:r.caps.z,r:1.5,label:`王冠コレクションを みる`,action:async()=>{let t=Su(e);if(t===0){this.ui.toast(`たなは まだ からっぽ。だがしやで ラムネを のむと 王冠が もらえるらしい`);return}let n=Tu.map(t=>e.caps[t.id]?`${t.name} ×${e.caps[t.id]}`:`???`).join(` ・ `);await this.ui.choice(`ラムネの王冠 (${t}/${Tu.length}しゅるい)<br><small>${n}</small>`,[`とじる`])}}),n.push({x:r.desk.x,z:r.desk.z,r:1.7,label:`つくえで にっきを よみかえす`,action:async()=>{if(!e.diary||e.diary.length===0){this.ui.toast(`にっきちょうは まだ まっしろ。きょうの よるから つけよう`);return}this.audio.sfx(`page`),await this.ui.showDiaryBook()}}),n.push({x:r.shelf.x,z:r.shelf.z,r:1.7,label:`ラジオを つける`,action:async()=>{this.audio.sfx(`taiso`);let n=this.koshienLine(t.day),r=t.min>=1140?[`ザーッ… 「こんやも ひとつ、むかしばなしを」… ラジオドラマや`,`ざつおんの むこうで、しずかな おんがくが ながれとる`]:t.min<600?[`「ラジオたいそう、だいいち〜!」 ちょっと からだが うずうずする`,`「つづいて、ぜんこくの てんきよほう です」`,`あさの ニュースが ながれとる。とうきょうの はなしも しとった`]:n?[n]:[`ザーッ… 「カキーン! はいった! ホームラン!」 やきゅうちゅうけいや!`,`かようきょくが ながれとる。おばあちゃんも しっとるかな`,`「つづいて、ぜんこくの てんきよほう です」`];this.ui.toast(r[(t.day+Math.floor(t.min/120))%r.length]),n&&t.min>=600&&t.min<1140&&!e.flags[`koshien`+t.day]?(e.flags[`koshien`+t.day]=!0,K(e,`ラジオで こうしえんの ちゅうけいを きいた`)):K(e,`へやでラジオをきいた`)}}),n.push({x:r.closet.x,z:r.closet.z,r:1.7,label:`おしいれを あけてみる`,action:async()=>{if(!e.flags.rodFound)e.flags.rodFound=!0,this.audio.sfx(`page`),await this.ui.showStory([`ふすまを あけると、ふるい なつの においが した。<br><br>こうりの おくに、しんぶんしに つつまれた<br>ながい ぼうが たてかけて ある。`,`そっと ひらいてみる。<br><br>―― つりざおだ。<br>たけの、ふるい つりざお。<br>にぎるところだけ、つやつやに くろずんでいる。`,`いっしょに、やぶれた むぎわらぼうしと、<br>しろくろの しゃしんが 1まい。<br><br>いけの まえで、わかい おじさんが ふたり、<br>おっきな さかなを もって わらっている。`]),this.ui.toast(`【はっけん】ふるい つりざおを みつけた。だれのやろ? ばあちゃんに きいてみよう`,`gold`),K(e,`おしいれで ふるいつりざおを みつけた`);else{this.audio.sfx(`page`);let n=[`むぎわらぼうしを かぶってみた。ちょっと おっきい`,`しゃしんの おじさんたち、ほんまに うれしそうに わろうとる`,`じいちゃんの つりざお。にぎると、なんか あんしんする`];this.ui.toast(n[(t.day+ +!!e.flags.rodStory)%n.length])}}}),n.push({x:r.window.x,z:r.window.z,r:1.6,label:`まどから そとを ながめる`,action:async()=>{let e={morning:`あさの ひかりが たんぼに さしとる。きょうは なにしよう`,day:`にゅうどうぐもが もくもく。セミが ないとる`,evening:`ゆうやけで まちが まっかっか。カラスが かえっていく`,night:`ほしが いっぱい。とうきょうじゃ こんなに みえんかった`}[Mu(t.min)]||`かぜが きもちいい`;this.ui.toast(e)}}),n}if(this.world.indoor&&this.world.sub===this.world.interior){n.push({x:6.2,z:3.5,r:1.5,label:`そとにでる`,action:()=>this.exitHouse()}),n.push({x:2.75,z:-1.5,r:1.4,label:`にかいの じぶんのへやへ`,action:()=>{let e=this.world.interior2f.entry;return this.warpTo(this.world.interior2f,e.x,e.z,Math.PI,250)}});let r=this.baachanHome();return r&&(n.push({x:r.x,z:r.z,r:2,label:`はなす (おばあちゃん)`,action:()=>this.talkBaachanIndoor()}),t.min<540&&!e.flags[`asagohan`+t.day]&&n.push({x:0,z:1.8,r:1.9,label:`あさごはんを たべる`,action:async()=>{e.flags[`asagohan`+t.day]=!0,await this.ui.say(`おばあちゃん`,[`ほれ、あさごはん。ようけ たべて いきな。`]),this.audio.sfx(`slurp`),await this.ui.fadePulse();let n=[`ごはんと おみそしる、たまごやき`,`たまごかけごはん と きゅうりの つけもの`,`おにぎりと ゆでとうもろこし`,`ごはんと のりと あじの ひもの`];this.ui.toast(`${n[t.day%n.length]}。あさから おなかいっぱい!`),K(e,`おばあちゃんとあさごはんをたべた`)}}),t.min>=1020&&!e.flags[`bangohan`+t.day]&&n.push({x:0,z:1.8,r:1.9,label:`ばんごはんを たべる`,action:async()=>{e.flags[`bangohan`+t.day]=!0,await this.ui.say(`おばあちゃん`,[`きょうは ごちそうじゃよ。`,`ようけ あそんだあとの ごはんは、うまいじゃろう。`]),this.audio.sfx(`slurp`),await this.ui.fadePulse();let n=[`カレーライス! おかわりした`,`てんぷらと ひやしそうめん`,`にくじゃがと ほかほかごはん`,`やきざかなと デザートの スイカ`,`ちらしずしと おすまし`];this.ui.toast(`${n[t.day%n.length]}。ごちそうさまでした!`),K(e,`おばあちゃんとばんごはんをたべた`)}})),t.min>=660&&t.min<=840&&!e.flags[`hirugohan`+t.day]&&n.push({x:0,z:1.8,r:1.9,label:`ちゃぶだいの おひるを たべる`,action:async()=>{e.flags[`hirugohan`+t.day]=!0,this.ui.toast(`ちゃぶだいに ふきんの かかった おさら。「おひるは これを おたべ。ばあちゃん」`),await new Promise(e=>setTimeout(e,1400)),this.audio.sfx(`slurp`),await this.ui.fadePulse();let n=[`おにぎりと きゅうりの あさづけ。うめぼしが すっぱい!`,`ひやしそうめん。みょうがは よけて たべた`,`むすびと たまごやき。おなかが おちついた`,`ひやしうどんに レモンを しぼって。つるつる いけた`];this.ui.toast(n[t.day%n.length]),K(e,`おばあちゃんのおいてくれたおひるをたべた`)}}),n.push({x:-2,z:-3,r:1.9,label:`テレビを みる`,action:async()=>{this.audio.sfx(`coin`);let n;n=t.event===`typhoon`?[`台風じょうほう。「香川県の 中讃地方、暴風に 警戒してください」`,`ずっと 台風の ニュースや。きしょうよほうしの ひとも ねむそう`]:t.min<600?[`あさの れんぞくドラマ。おばあちゃんが かかさず みとるやつ`,`あさの ニュース。とうきょうの えいぞうが うつって、ちょっと なつかしい`,`てんきよほう。「きょうも 35どを こえるでしょう」…またか!`]:t.min<780?ku(t.day)===`日`?[`のどじまん! かねが カンカンカン! って なっとる`,`のどじまんの おばちゃんが うたっとる。おんち やけど たのしそう`]:[`ひるの ドラマ。よめと しゅうとめが もめとる…`,`ひるの ワイドショー。とかいは きょうも いそがしそうや`]:t.min<990?[`こうこうやきゅう! エースが れんとうしとる。がんばれ〜!`,`こうこうやきゅう。9かいうら、まんるい…! てに あせにぎるわ`,`こうこうやきゅう。かんとくが しんぱんに もんく ゆうとる`]:t.min<1140?[`ゆうがたの アニメの さいほうそう。なんかい みても おもろい`,`ローカルニュース。「あやがわの ためいけで すいしつちょうさが…」あ、しっとる池や!`]:[`ナイターちゅうけい。おじいちゃんも すきやったんかな`,`クイズばんぐみ。おばあちゃんのほうが はやく こたえる`],this.ui.toast(n[(t.day+Math.floor(t.min/120))%n.length]),K(e,`いえでテレビをみた`)}}),n.push({x:-2.3,z:1.7,r:1.6,label:`せんぷうきに あたる`,action:async()=>{let e=[`あ゛ー゛ー゛ー゛… (せんぷうきの まえで こえを だす)`,`われわれは うちゅうじんだ… (せんぷうきの こえに なる)`,`シャツの なかに かぜを いれる。さいこうや`];this.ui.toast(e[(this.fanCount=(this.fanCount||0)+1)%e.length])}}),e.flags[`butsudan`+t.day]||n.push({x:6.2,z:-2.8,r:1.7,label:`ぶつだんに おまいりする`,action:async()=>{e.flags[`butsudan`+t.day]=!0,this.audio.sfx(`suzu`);let n=t.event===`obon`?[`チーン…… (おじいちゃん、おぼんじゃね。かえってきとる?)`,`チーン…… (おばあちゃんが きゅうりの うまを かざっとったよ)`]:[`チーン…… (おじいちゃん、きょうも あそんでくるね)`,`チーン…… (しゃしんの おじいちゃん、わらっとる)`,`チーン…… (おじいちゃん、きょうは むしを つかまえたよ)`];this.ui.toast(n[t.day%n.length]),K(e,`ぶつだんのおじいちゃんにあいさつした`)}}),n.push({x:-8.3,z:-2.9,r:1.6,label:`れいぞうこの むぎちゃを のむ`,action:async()=>{this.audio.sfx(`splash`);let e=[`キンキンに ひえた むぎちゃ! いきかえる〜`,`やかんごと コップに そそぐ。つめたさで コップが くもった`,`ぐびぐびぐび…… ぷはーっ! おかわり!`];this.ui.toast(e[(this.chaCount=(this.chaCount||0)+1)%e.length])}}),n}if(n.push({x:118,z:16.1,r:2.4,label:`いえにはいる`,action:()=>this.enterHouse()}),n.push({x:115.4,z:15.6,r:1.7,label:`ふうりんを ならす`,action:()=>{this.audio.sfx(`suzu`),this.furinT=1.8,e.flags[`furin`+t.day]||(e.flags[`furin`+t.day]=!0,this.ui.toast(`ちりん…。なつの おとが した`),K(e,`えんがわのふうりんをならした`))}}),this.world.summit&&n.push({x:this.world.summit.x,z:this.world.summit.z,r:2.8,label:`まちを ながめる`,action:()=>this.summitView()}),this.ayuState&&this.player){let e=this.player.pos,t=null,r=1e9;for(let n of this.ayuState.fish){if(!n.alive)continue;let i=Math.hypot(e.x-n.x,e.z-n.z);i<r&&(r=i,t=n)}t&&r<1.5&&n.push({x:t.x,z:t.z,r:1.6,label:`あゆに とびつく!`,action:()=>this.grabAyu(t)})}if(t.min<=420&&!e.flags[`taiso`+t.day]&&n.push({x:0,z:-55,r:4,label:`ラジオたいそうに さんかする`,action:async()=>{e.flags[`taiso`+t.day]=!0,e.stamps+=1,this.audio.sfx(`taiso`),await this.ui.fadePulse(),this.ui.toast(`ラジオたいそう かんりょう! スタンプ ${e.stamps}こめ`,`gold`),e.stamps===10&&this.ui.toast(`スタンプ10こ! みやじさんも かんしんしとる`,`gold`),e.stamps===31&&this.ui.toast(`パーフェクト!! でんせつの きんべんしょうねん!`,`gold`),K(e,`あさのラジオたいそうにいった`)}}),t.min<=840&&!e.flags[`udon`+t.day]&&n.push({x:-50.5,z:21.5,r:2.4,label:`あさうどんを たべる`,action:async()=>{e.flags[`udon`+t.day]=!0,e.udon+=1,this.audio.sfx(`slurp`),await this.ui.fadePulse();let n=[`かけうどん、いりこだしが うまい!!`,`ひやあつ、コシが すごい!!`,`しょうゆうどん、シンプルで うまい!!`,`ぶっかけ、レモンが きいとる!!`];this.ui.toast(`${n[e.udon%n.length]} (あさうどん ${e.udon}かいめ)`),e.friend.gen=(e.friend.gen||0)+1,K(e,`げんさんのあさうどんをたべた`)}}),!e.flags.udonHelp&&t.min>=600&&t.min<=840&&t.day>=5&&n.push({x:-53.5,z:21.5,r:2,label:`うどんづくりを てつだう`,action:async()=>{await this.ui.choice(`げんさん「おっ、ぼうず。うどんうち、やってみるか?<br>綾川はな、【うどん発祥の地】いわれとるんやで」`,[`やってみる!`,`またこんど`])===0&&(e.flags.udonHelp=!0,await this.ui.showStory([`こむぎこに しおみずを まぜて、ぐっ、ぐっと こねる。<br><br>「そうや、たいじゅうを のせて こねるんや」`,`ビニールに つつんだ きじを、あしで ふみふみ、ふみふみ…<br><br>なんだか おどりみたいで たのしい。`,`ねかせた きじを ぼうで のばして、たたんで、<br>とん、とん、とん…と ほそく きっていく。<br><br>「じょうずやないか! ええ コシが でとるで」`,`ゆであがった うどんに、いりこの だしを かけて…<br><br>じぶんで うった うどんは、<br>せかいで いちばん うまい きが した。`]),this.audio.sfx(`slurp`),this.ui.toast(`げんさん「また てつだいに こいや!」`,`gold`),e.friend.gen=(e.friend.gen||0)+2,K(e,`げんさんとうどんをうった (綾川はうどん発祥の地)`))}}),t.min>=480&&t.min<=1080&&n.push({x:-63,z:21,r:2.2,label:`だがしやで かいもの`,action:async()=>{let n=e.flags[`ramune`+t.day]||0,r=[],i=[];n<3&&(r.push(`ラムネを のむ (30えん)`),i.push(`ramune`)),e.flags[`dagashi`+t.day]||(r.push(`だがしを かう (20えん)`),i.push(`dagashi`)),r.push(`やめとく`);let a=i[await this.ui.choice(`いらっしゃい! なにに する?<br><small>おこづかい ${e.money}えん ・ 王冠 ${Su(e)}/${Tu.length}しゅるい</small>`,r)];if(a===`ramune`){if(e.money<30){this.ui.toast(`おこづかいが たりない…`);return}e.money-=30,e.flags[`ramune`+t.day]=n+1,this.audio.sfx(`coin`),this.ui.toast(`カラン…と ビーだまを おとして、ラムネを ごくごく。しゅわしゅわや!`),this.gainCap(`ラムネのふたから`),K(e,`だがしやでラムネをのんだ`)}else if(a===`dagashi`){if(e.money<20){this.ui.toast(`おこづかいが たりない…`);return}e.money-=20,e.flags[`dagashi`+t.day]=!0,this.audio.sfx(`coin`);let n=[`きなこぼう`,`あんずあめ`,`ソースせんべい`,`ふがし`,`カレーせん`],r=n[t.day*3%n.length],i=Math.random()<.2;this.ui.toast(`${r}を かった!${i?` 【あたりつき! もう1こ!】`:``}`,i?`gold`:null),K(e,`だがしやで${r}をかった`)}}}),!e.flags[`capspot`+t.day]){let r=Kf[(t.day*7+3)%Kf.length];n.push({x:r.x,z:r.z,r:2,label:`なにか おちてる…`,action:async()=>{e.flags[`capspot`+t.day]=!0,Math.random()<.3?(e.money+=10,this.audio.sfx(`coin`),this.ui.toast(`10えん玉を ひろった! ラッキー!`,`gold`),K(e,`${r.hint}で10えん玉をひろった`)):(this.audio.sfx(`coin`),this.gainCap(`みちばたで`))}})}t.event===`matsuri`&&!e.flags.matsuriOdori&&n.push({x:0,z:-55,r:4.5,label:`ねんぶつおどりを みる`,action:async()=>{e.flags.matsuriOdori=!0,this.audio.sfx(`suzu`),await this.ui.showStory([`ドン、ドン… カン、カン…<br><br>たいこと かねの おとに あわせて、<br>むぎわらぼうしの ひとたちが 輪になって おどっとる。`,`「ナームアミドーヤ」<br><br>まんなかの あかい はっぴの ひとが、<br>おおきな うちわを ふりあげた。`,`ばあちゃんが おしえてくれた。<br><br>「これはな、【滝宮の念仏踊(ねんぶつおどり)】いうてな、<br>千年ちかく つづいとる 雨ごいの おどりなんやで」`,`「むかし ひでりで こまっとったとき、<br>菅原道真(すがわらのみちざね)公が いのって、<br>あめを ふらせてくれたんやと。<br>そのよろこびが、いまも つづいとるんや」`,`せんねん…。<br><br>ぼくの なつやすみの なんまんばいも むかしから、<br>この おどりは ここで おどられてきたんや。`]),K(e,`せんねんつづく滝宮の念仏踊をみた`),this.ui.toast(`ずっと むかしから つづく おどり、すごかった…`,`gold`)}}),t.event===`matsuri`&&t.min>=1020&&(e.flags.matsuriUdon||n.push({x:-7,z:-44.5,r:2,label:`しっぽくうどんを たべる`,action:async()=>{e.flags.matsuriUdon=!0,this.audio.sfx(`slurp`),this.ui.toast(`おまつりの しっぽくうどん、さいこうや!`,`gold`),K(e,`まつりでしっぽくうどんをたべた`)}}),e.flags.matsuriKingyo||n.push({x:0,z:-42.5,r:2,label:`きんぎょすくいを する`,action:async()=>{e.flags.matsuriKingyo=!0;let t=Math.random()<.6;this.audio.sfx(t?`catch`:`splash`),this.ui.toast(t?`きんぎょが すくえた! たいせつにそだてよう`:`ポイが やぶれた…! ざんねん`,t?`gold`:null),K(e,t?`きんぎょをすくった`:`きんぎょすくいはしっぱいした`)}}),e.flags.matsuriAme||n.push({x:7,z:-44.5,r:2,label:`りんごあめを かう`,action:async()=>{e.flags.matsuriAme=!0,this.audio.sfx(`coin`),this.ui.toast(`りんごあめ、ほっぺが おちそう!`),K(e,`りんごあめをたべた`)}})),t.event===`gakusai`&&t.min>=1020&&(e.flags.gakusaiYoyo||n.push({x:-47,z:63.2,r:2,label:`ヨーヨーつりを する`,action:async()=>{e.flags.gakusaiYoyo=!0;let t=Math.random()<.65;this.audio.sfx(t?`catch`:`splash`),this.ui.toast(t?`こよりが きれるまえに…… とれた! みずいろの ヨーヨーや!`:`こよりが プツン。……ざんねん! でも おまけで 1こ もろた`,t?`gold`:null),K(e,t?`がっこうまつりでヨーヨーをつった`:`ヨーヨーつりはおまけをもろた`)}}),e.flags.gakusaiKori||n.push({x:-42,z:64.2,r:2,label:`かきごおりを たべる`,action:async()=>{e.flags.gakusaiKori=!0;let t=[`いちご`,`メロン`,`ブルーハワイ`][await this.ui.choice(`なにあじに する?`,[`いちご`,`メロン`,`ブルーハワイ`])];this.audio.sfx(`slurp`),this.ui.toast(`${t}の かきごおり! いそいで たべたら あたまが キーン!!`,`gold`),K(e,`がっこうまつりで${t}のかきごおりをたべた`)}}),e.flags.gakusaiKuji||n.push({x:-37,z:63.2,r:2,label:`くじびきを する`,action:async()=>{e.flags.gakusaiKuji=!0;let t=Math.random()<.3;this.audio.sfx(t?`boom`:`coin`),this.ui.toast(t?`【あたり!!】カランカラン! けいひんは ちょうデカい うちわ!`:`はずれ…… ざんねんしょうの あめだま 3こ。まあ ええか`,t?`gold`:null),K(e,t?`がっこうまつりのくじであたりをひいた`:`がっこうまつりでくじびきをした`)}})),t.min>=420&&t.min<=900&&n.push({x:109.4,z:-11.5,r:4.4,label:`ことでんに のる (かわらまち・たかまつほうめん)`,action:()=>this.boardTrain(1)}),e.flags.kentaTree&&!e.flags[`uro`+t.day]&&(t.min>=1080||t.min<=470)&&n.push({x:-7.3,z:-51.2,r:2,label:`クスノキの うろを のぞく`,action:async()=>{e.flags[`uro`+t.day]=!0;let n=Math.random();if(n<.4){let t=Math.random()<.5?`kabuto`:`nokogiri`,n=t===`kabuto`?`カブトムシ`:`ノコギリクワガタ`,r=!e.bugs[t];e.bugs[t]=(e.bugs[t]||0)+1,this.audio.sfx(`catch`),this.ui.toast(`うろの じゅえきに ${n}が! そーっと… つかまえた!!${r?` 【ずかんに とうろく!】`:``}`,`gold`),K(e,`クスノキのうろで${n}をつかまえた`)}else if(n<.7){let t=!e.bugs.kanabun;e.bugs.kanabun=(e.bugs.kanabun||0)+1,this.audio.sfx(`catch`),this.ui.toast(`きょうは カナブンだけ。それでも つかまえた${t?` 【ずかんに とうろく!】`:``}`),K(e,`クスノキのうろをのぞいた`)}else this.audio.sfx(`flee`),this.ui.toast(`じゅえきの においだけ。……スズメバチが きたので しずかに はなれた`),K(e,`クスノキのうろをのぞいた`)}});let r=t.day>=26&&!e.flags.hagaki3?3:t.day>=15&&!e.flags.hagaki2?2:+(t.day>=7&&!e.flags.hagaki1);if(r&&n.push({x:120.5,z:18.5,r:2,label:`ゆうびんうけを のぞく`,action:()=>this.readHagaki(r)}),e.flags.bunshuHint&&!e.flags.bunshuDone&&t.min>=480&&t.min<=1020&&t.weather!==`storm`&&n.push({x:-42.5,z:58.5,r:2.5,label:`ぶんしゅうを 見せてもらう`,action:()=>this.bunshu()}),t.day===13&&t.min>=1080&&!e.flags.mukaebi&&n.push({x:117.5,z:19.5,r:2.6,label:`むかえびを たく (ばあちゃんと)`,action:()=>this.mukaebi()}),t.day===15&&t.min>=1080&&!e.flags.okuribi&&n.push({x:117.5,z:19.5,r:2.6,label:`おくりびを たく (ばあちゃんと)`,action:()=>this.okuribi()}),t.weather===`sunny`&&t.min>=600&&t.min<960&&t.day>=2&&!e.flags[`oyogu`+t.day]&&n.push({x:48,z:11.2,r:2.8,label:`かわに はいって あそぶ`,action:()=>this.kawaAsobi()}),t.min>=540&&t.min<1080&&t.weather!==`rain`&&t.weather!==`storm`&&t.day>=2)for(let e of[20,Bd])n.push({x:e,z:zd(e),r:2.3,label:`はしから かわに とびこむ`,action:()=>this.tobikomi()});if(t.min>=420&&t.min<1140&&t.weather!==`storm`&&n.push({x:14,z:6.5,r:2.2,label:`かわらで みずきりを する`,action:()=>this.mizukiri()}),t.weather===`sunny`&&t.phase===`day`&&t.day>=2&&t.day!==31&&!e.flags[`suika`+t.day]&&n.push({x:7,z:12,r:2.4,label:`すいかわりを する (ケンタとミナと)`,action:()=>this.suikawari()}),(t.phase===`morning`||t.phase===`day`)&&t.weather!==`rain`&&t.weather!==`storm`&&t.day>=2&&t.day!==31&&!e.flags[`nou`+t.day]&&n.push({x:-135,z:-52.5,r:2.6,label:`たなだの のさぎょうを てつだう`,action:()=>this.tanadaWork()}),(t.min<600||t.min>=960&&t.min<1140)&&t.weather!==`rain`&&t.weather!==`storm`&&!e.flags[`mizuyari`+t.day]&&n.push({x:108.5,z:16,r:2.3,label:`はたけに みずやりを する`,action:()=>this.mizuyari()}),(t.phase===`morning`||t.phase===`day`)&&t.weather!==`rain`&&t.weather!==`storm`&&t.day>=2&&t.day!==31&&!e.flags[`kakurenbo`+t.day]&&!this.hide&&n.push({x:12.5,z:11,r:2.2,label:`かくれんぼを する (ケンタたちと)`,action:()=>this.startKakurenbo()}),this.hide)for(let e of Zf)n.push({x:e.x,z:e.z,r:2.6,label:`${e.place}を さがす`,action:()=>this.searchKakurenbo(e)});t.min>=1140&&t.weather!==`rain`&&t.weather!==`storm`&&t.day>=2&&t.event!==`matsuri`&&!e.flags[`hanabi`+t.day]&&n.push({x:114.5,z:19.5,r:2.4,label:`えんがわで はなびを する`,action:()=>this.hanabi()}),t.min>=380&&t.min<1140&&t.day>=2&&n.push({x:114.5,z:19.5,r:2.4,label:`えんがわに こしかける`,action:()=>this.engawaRest()}),e.flags.kentaBase?n.push({x:-13.8,z:-76.2,r:2.4,label:`ひみつきちで すごす`,action:()=>this.himitsukichi()}):n.push({x:-13.8,z:-76.2,r:2.4,label:`いたの こやを のぞく`,action:async()=>{this.ui.toast(`「たちいりきんし!!」って かいてある。だれの ひみつきちやろ…`)}}),this.world.lookout&&!e.flags[`miharashi`+t.day]&&n.push({x:this.world.lookout.x,z:this.world.lookout.z,r:2.6,label:`けしきを ながめる`,action:()=>this.miharashi()}),t.min>=420&&t.min<1140&&t.weather!==`storm`&&!e.flags[`zari`+t.day]&&n.push({x:5.4,z:60,r:2.4,label:`ようすいろを のぞく`,action:()=>this.zariganiPeek()}),t.day>=13&&t.day<=15&&t.min<1100&&!e.flags.obonHaka&&n.push({x:141.5,z:17.8,r:2.6,label:`おはかまいりを する (ばあちゃんと)`,action:()=>this.ohakamairi()}),t.day===13&&t.min>=1140&&!e.flags.mukaebi&&n.push({x:120.5,z:15.8,r:2.2,label:`むかえびを たく (ばあちゃんと)`,action:()=>this.mukaebi()}),t.day===15&&t.min>=1140&&!e.flags.okuribi&&n.push({x:120.5,z:15.8,r:2.2,label:`おくりびを たく (ばあちゃんと)`,action:()=>this.okuribi()}),t.min>=1170&&n.push({x:141.6,z:20.4,r:3.4,label:e.flags.obake?`ひとだまに はなしかける`:`あおしろい ひに そっと ちかづく`,action:()=>this.obakeTalk()});for(let t of[{id:`hashi`,x:16.5,z:3.2,label:`はしのしたを のぞく`,sfx:`splash`,msg:`はしのしたは ひんやりして きもちいい! ツバメのすを みつけた`,log:`はしのしたで ツバメのすをみつけた`},{id:`kusu`,x:-7.3,z:-52.2,label:`おおきな きを しらべる`,sfx:`catch`,msg:`セミのぬけがらを みつけた! せなかが ぱっくり われとる`,log:`クスノキでセミのぬけがらをみつけた`},{id:`take`,x:-14.5,z:-66.5,label:`たけやぶに はいってみる`,sfx:`suzu`,msg:`たけやぶの なかは すずしい。かぜで サラサラ いうとる…`,log:`たけやぶでひとやすみした`},{id:`ike`,x:116,z:66,label:`いけを のぞきこむ`,sfx:`splash`,msg:`おたまじゃくしが うじゃうじゃ おる! つかまえたいなあ`,log:`ためいけでおたまじゃくしをみた`},{id:`rail`,x:119.5,z:-7.8,label:`せんろを ながめる`,sfx:`train`,msg:`レールが ぴかぴか ひかっとる。とおくから カタンコトン…`,log:`えきでことでんをまった`},{id:`himawari`,x:20,z:29.5,label:`ひまわりと せいくらべ`,sfx:`taiso`,msg:`ひまわりのほうが ずっと おっきい。まけた!`,log:`ひまわりとせいくらべをした`},{id:`kama`,x:154,z:47,label:`かまあとを しらべる`,sfx:`catch`,msg:`つちのなかに とうきの かけらが! むかし ここで やきものを やいとったんや`,log:`とうびんやまのかまあとをしらべた`},{id:`keikoku`,x:-205,z:-32,label:`たにがわを のぞく`,sfx:`splash`,msg:`みずが つめたい! やまの みずは ぜんぜん ちがうなあ`,log:`あやかみのたにがわであそんだ`},{id:`tanada`,x:-135,z:-54,label:`たなだを ながめる`,sfx:`catch`,msg:`やまの しゃめんに たんぼが だんだんに ならんどる! みずかがみが ぴかぴかや`,log:`あやかみのたなだをみにいった`}])e.flags[`secret_`+t.id]||n.push({x:t.x,z:t.z,r:2.2,label:t.label,action:async()=>{e.flags[`secret_`+t.id]=!0,this.audio.sfx(t.sfx),this.ui.toast(`【はっけん!】${t.msg}`,`gold`),K(e,t.log)}});return e.flags[`omairi`+t.day]||n.push({x:0,z:-61.5,r:2,label:`おまいりする`,action:async()=>{e.flags[`omairi`+t.day]=!0,this.audio.sfx(`suzu`);let n=[`なつやすみが ずっとつづきますように…`,`カブトムシが つかまえられますように…`,`おおきな さかなが つれますように…`,`みんなが げんきで いられますように…`,`また らいねんも これますように…`];this.ui.toast(`パンパン… (${n[t.day%n.length]})`),K(e,`てんまんぐうにおまいりした`)}}),!e.flags[`omikuji`+t.day]&&t.min>=480&&t.min<=1080&&n.push({x:3.2,z:-60.5,r:1.8,label:`おみくじを ひく (10えん)`,action:async()=>{if(e.money<10){this.ui.toast(`おこづかいが たりない…`);return}e.money-=10,e.flags[`omikuji`+t.day]=!0,this.audio.sfx(`suzu`);let n=[[`だいきち`,`きょうは なんでも うまくいく ひ!<br>めずらしい 虫や さかなに あえるかも`,`gold`],[`きち`,`いいことが ありそうな ひ。<br>かわの ちかくで はっけんが あるかも`],[`ちゅうきち`,`まあまあの ひ。<br>ごはんを しっかり たべると うんきが あがる`],[`しょうきち`,`あわてず ゆっくりの ひ。<br>ひるねを すると いいことが あるかも`],[`すえきち`,`わすれものに ちゅうい。<br>でも ゆうがたに いいことが まっとるよ`]],[r,i,a]=n[Math.floor(Math.random()*n.length)];await this.ui.choice(`おみくじ 【${r}】<br><small>${i}</small>`,[`えだに むすんで かえる`]),this.ui.toast(`おみくじは ${r}やった!`,a||null),K(e,`おみくじをひいたら${r}だった`)}}),n}async warpTo(e,t,n,r=Math.PI,i=350){let a=this.player;await this.ui.fade(!0,i),this.world.indoor=!!e,this.world.sub=e,this.world.trainRide&&(this.world.trainRide.group.visible=e===this.world.trainRide),a.mesh.position.set(t,e?e.floorY:this.world.groundY(t,n),n),a.heading=r,a.mesh.rotation.y=r,a.snapCamera(),await this.ui.fade(!1,i)}async enterHouse(){this.audio.sfx(`coin`);let e=this.world.interior.entry;await this.warpTo(this.world.interior,e.x,e.z)}async exitHouse(){await this.warpTo(null,118,16.4,0)}baachanHome(){let e=this.state,t=this.clock;return e.day===1&&!e.flags.metBaachan||t.event===`matsuri`&&t.min>=1020?null:t.min<500||e.day===1&&t.min<600?{x:-6,z:-2.5,ry:Math.PI}:t.min>=1200?{x:0,z:-1.7,ry:0}:t.min>=1020?{x:-6,z:-2.5,ry:Math.PI}:null}async talkBaachanIndoor(){let e=this.state,t=this.clock.min,n=this.clock.day,r=e=>e[n%e.length];if(e.flags.rodFound&&!e.flags.rodBaachan){e.flags.rodBaachan=!0,e.friend.baachan=(e.friend.baachan||0)+1,e.talkedToday.baachan||(e.talkedToday.baachan=!0),await this.ui.say(`おばあちゃん`,[`ん? どうしたんな、そんな ふるいもん かかえて。……ああ。おしいれの おくかあ。`,`それはな、おじいさんの 竿じゃ。あんたの おじいさん ―― 修二さんのな。`,`釣りが すきで すきでなあ。やすみの日は あさから 北条池に おって、ばんに なっても 帰ってこん。`,`いっつも いっしょに おったんが、ため池の げんじいさんよ。ふたりで よう けんかして、よう わろうて。`,`……その竿、あんたが つかい。しまいこんどくより、おじいさんも そのほうが よろこぶわ。`,`げんじいさんにも 見せてあげまい。きっと なつかしがるけんな。`]),K(e,`じいちゃんのつりざおのこと、ばあちゃんにきいた`);return}let i;n===1&&t<600?i=[`おお、ついたか、ついたか。とおいとこ、ようがんばったなあ。`,`あさごはん、よういしとるよ。ちゃぶ台に おすわり。`,`たべたら、まちを ぶらぶら みてくると ええわ。`]:t<500?i=r([[`おはようさん。よう ねむれたかな?`,`あさごはん、ちゃぶ台に よそっとるけん、たべてお いき。`],[`おはよう。ゆうべ、あんたの ねごと きこえたよ。ふふ。`,`なんの ゆめ みとったんかな?`],[`おはようさん。おみそしるの だし、ええにおい じゃろ?`,`イリコはな、げんさんとこの となりで こうとるんよ。`]]):t<1200?i=r([[`おかえり。もうすぐ ばんごはんじゃけん、てを あろうときな。`],[`おかえり。きょうは なにして あそんだん?`,`ごはんの とき、ゆっくり きかせてな。`],[`おかえり。まっとったよ。`,`なべの ふたを あけて ごらん。……ふふ、ごちそうじゃろ。`]]):n>=28&&!e.flags.baachanSabishii?(e.flags.baachanSabishii=!0,i=[`……あと すこしで かえってしまうんじゃねえ。`,`あんたが きてから、いえの なかが ずっと にぎやかでなあ。`,`ひとりの ばんごはんに もどるんは、ちょっと さびしいわ。`,`……なんてな。としよりの たわごとじゃ。はよ おやすみ。ふふ。`],e.friend.baachan=(e.friend.baachan||0)+1):i=r([[`きょうも ようけ あそんだなあ。`,`ふとんは 2かいに しいとるよ。おやすみ。`],[`よなべは ほどほどにな。`,`にっきを つけたら、はよ おやすみ。`],[`か とりせんこう、たいとくけんな。`,`ぷーんいうのが きたら、ばあちゃんの まけじゃ。おやすみ。`]]),e.talkedToday.baachan||(e.talkedToday.baachan=!0,e.friend.baachan=(e.friend.baachan||0)+1,K(e,`おばあちゃんとはなした`)),await this.ui.say(`おばあちゃん`,i)}async readHagaki(e){let t=this.state;t.flags[`hagaki`+e]=!0,this.audio.sfx(`page`),this.ui.toast(`ゆうびんうけに はがきが はいっとった。……おかあさんの じだ!`),await this.ui.say(`おかあさんの はがき`,{1:[`げんきに してますか。ちゃんと やさい たべてますか。`,`おばあちゃんの いうことを よく きくこと。よふかしは しないこと。`,`ついしん ── せんたくものは じぶんで かごに いれること! かあさんより`],2:[`おぼんに かえれなくて ごめんね。おばあちゃんに よろしく つたえてください。`,`かあさんも こどものころ、じんじゃの クスノキに のぼって、よく しかられました。`,`あなたは のぼっては いけません。 かあさんより`],3:[`なつやすみも もうすぐ おわりですね。31にちの ゆうがた、とうきょうえきまで むかえに いきます。`,`まっくろに ひやけした かおを みるのが たのしみです。`,`おみやげばなし、たくさん きかせてね。 かあさんより`]}[e]),K(t,`おかあさんからはがきがとどいた`)}async mizukiri(){let e=this.state,t=await this.ui.choice(`あしもとの いしを えらぶ`,[`ひらたい いし`,`まるい いし`,`でっかい いし`]),n;if(n=t===0?2+Math.floor(Math.random()*5):t===1?1+Math.floor(Math.random()*3):Math.random()<.15?4:0,this.audio.sfx(`splash`),n===0)this.ui.toast(`ドッボーン!! でっかい みずしぶきが あがっただけ。……これはこれで きもちええ`);else{let e=[`ピッ`,`ピッ、ピッ`,`ピッ、ピッ、ピッ`,`ピピッ、ピッ、ピッ`,`ピピピッ、ピピッ`,`ピピピピピッ、ピッ`][n-1];this.ui.toast(`よこなげで シュッ! ${e}… ${n}だん!`)}n>(e.mizukiri||0)&&(e.mizukiri=n,this.audio.sfx(`catch`),this.ui.toast(`じこしんきろく こうしん! ${n}だん!!`,`gold`)),e.flags[`mizukiri`+e.day]||(e.flags[`mizukiri`+e.day]=!0,K(e,`かわらでみずきりをした`))}async suikawari(){let e=this.state,t=this.clock;e.flags[`suika`+t.day]=!0,await this.ui.say(`ケンタ`,[`おっ、ええとこ きた! ばあちゃんに すいか もろたんや。`,`ミナも よんできたけん、すいかわりに しようや。おまえ めかくし な!`]),await this.ui.say(`ミナ`,[`タオル まくよ。……はい、まっくら。`,`うちらの こえだけが たよりやからね。ケンタの こえは しんじすぎんように。`]),this.audio.sfx(`taiso`);let n=[`ひだりへ`,`まっすぐ`,`みぎへ`],r=0;for(let e=0;e<3;e++){let t=Math.floor(Math.random()*3),i=e===1?`ケンタ`:`ミナ`,a=i===`ケンタ`&&Math.random()<.4,o=`${i}「${n[a?(t+1+Math.floor(Math.random()*2))%3:t]}や${i===`ケンタ`?`って!`:`!`}」${a?` ……(わらいを こらえとる?)`:``}`;await this.ui.choice(o,n)===t?(r+=1,this.audio.sfx(`coin`),this.ui.toast(`${e+1}ぽめ… すいかの けはいが ちかい!`)):(this.audio.sfx(`flee`),this.ui.toast(`${e+1}ぽめ… あれ? くさの うえを ふんどる…?`))}r===3?(this.audio.sfx(`boom`),this.ui.toast(`えいっ!! ……パッカーン!!! どまんなか!`,`gold`),await this.ui.say(`ケンタ`,[`うっそやろ!? いっぱつで わりよった!`,`おれの ウソにも ひっかからんし……おまえ、すごいわ。`]),e.friend.kenta=(e.friend.kenta||0)+2,e.friend.mina=(e.friend.mina||0)+2,K(e,`すいかわりでいっぱつでわった`)):r===2?(this.audio.sfx(`bite`),this.ui.toast(`えいっ! ……コツン。はしっこに あたった! ひびが はいった!`),await this.ui.say(`ミナ`,[`おしい〜! でも ひび はいったけん、もう われたも どうぜんよ。`]),e.friend.kenta=(e.friend.kenta||0)+1,e.friend.mina=(e.friend.mina||0)+1,K(e,`すいかわりであとちょっとだった`)):(this.audio.sfx(`flee`),this.ui.toast(`えいっ! ……ブンッ。じめんを たたいた。ふたりの わらいごえが ひびく`),await this.ui.say(`ケンタ`,[`あっはっは! ぜんぜん ちゃうとこ たたきよる!`,`ま、われんでも たべられるけん。ほら、すわり!`]),e.friend.kenta=(e.friend.kenta||0)+1,e.friend.mina=(e.friend.mina||0)+1,K(e,`すいかわりはずしてわらわれた`)),this.audio.sfx(`slurp`),this.ui.toast(`3にんで かわらに すわって すいかを たべた。たねを どこまで とばせるか きょうそうした`)}async tanadaWork(){let e=this.state,t=this.clock;e.flags[`nou`+t.day]=!0,e.nouka||await this.ui.say(`ノボルさん`,[`ん? まちの子か。こんな やまおくまで ようきたのう。`,`わしは ノボル。この たなだを じいさんの代から まもっとるんじゃ。`,`なんな、てつどうてくれるんか? ほな たのむわ。のうかは ねこのてでも かりたいんじゃ!`]);let n=await this.ui.choice(`なにを てつだう?`,[`あぜの くさぬき`,`みずの みまわり`,`かかしの なおし`]);if(await this.ui.fadePulse(),this.audio.sfx(`taiso`),n===0?(this.ui.toast(`あぜの くさを ずんずん ぬいた。てのひらが くさの においに なった`),Math.random()<.4&&(this.audio.sfx(`flee`),this.ui.toast(`くさむらから バッタが とびだして びっくりした!`))):n===1?(this.audio.sfx(`splash`),this.ui.toast(`みなくちを あけて、たんぼに みずを いれた。ひざしで ぬるんだ みずが きもちええ`)):this.ui.toast(`かかしの ぼうしを かぶせなおして、むきを ととのえた。……なんか えらそうな かおに なった`),e.min=Math.min(e.min+50,1280),e.nouka=(e.nouka||0)+1,e.friend.noboru=(e.friend.noboru||0)+1,e.nouka===3)this.audio.sfx(`catch`),await this.ui.say(`ノボルさん`,[`もう 3かいめか。ぼん、みどころ あるわ。`,`ほれ、うちの もぎたての トマトじゃ。まるかじりが いちばん うまいんぞ。`]),this.ui.toast(`とれたての トマトを もろた! あまくて、ちょっと あおくさい なつの あじや`,`gold`),K(e,`ノボルさんにトマトをもろた`);else if(e.nouka===7)this.audio.sfx(`catch`),await this.ui.say(`ノボルさん`,[`ぼんは もう いっちょまえの のうかじゃ。`,`この たなだの こめはな、やまの みずだけで そだつんじゃ。`,`あきに とれた しんまい、ばあちゃんとこへ とどけちゃるけん。たのしみに しとりまい。`]),this.ui.toast(`【やくそく】あきに ノボルさんの しんまいが とどくことになった!`,`gold`),K(e,`ノボルさんとしんまいのやくそくをした`);else{let e=[`おおきに、たすかったわ。ぼんは ええ てつだいじゃ。`,`きょうも あついのう。むぎちゃ のんで いきまい。`,`たなだの みずかがみはな、ゆうがたが いちばん きれいなんじゃ。`,`いねの はなはな、あさの すずしいうちに さくんぞ。しっとったか?`];await this.ui.say(`ノボルさん`,[e[t.day%e.length]])}K(e,`たなだののさぎょうをてつだった`)}async mizuyari(){let e=this.state,t=this.clock;e.flags[`mizuyari`+t.day]=!0,await this.ui.fadePulse(),this.audio.sfx(`splash`),e.mizuyariN=(e.mizuyariN||0)+1,e.min=Math.min(e.min+20,1280),this.ui.toast(`じょうろで たっぷり みずやり。かわいた つちの においが ふわっと たった`),e.mizuyariN>=5&&!e.flags.kyuriMogi?(e.flags.kyuriMogi=!0,this.audio.sfx(`catch`),this.ui.toast(`【おおきくなった!】そだてた きゅうりを 1ぽん もいで、まるかじりした! みずみずしい!`,`gold`),e.friend.baachan=(e.friend.baachan||0)+1,K(e,`そだてたきゅうりをまるかじりした`)):e.mizuyariN===1?this.ui.toast(`ばあちゃんの こえ「まいにち みずを やるとな、やさいは こたえてくれるんよ」`):Math.random()<.3&&(this.audio.sfx(`suzu`),this.ui.toast(`トマトの みが すこし あこうなっとる。もうちょっとや`)),K(e,`ばあちゃんのはたけにみずやりをした`)}async startKakurenbo(){let e=this.state;e.flags[`kakurenbo`+e.day]=!0,await this.ui.say(`ケンタ`,[`かくれんぼ しようや! おまえ おに な!`,`クスノキんとこで 30 かぞえてから こいよ!`]),await this.ui.say(`ミナ`,[`まちの どこかに かくれるけん。`,`くらくなるまでに みつけてな!`]);let t=Zf[Math.floor(Math.random()*Zf.length)];this.hide={id:t.id,wrong:0},await this.ui.fadePulse(),this.audio.sfx(`taiso`),this.ui.toast(`30…… 29…… (とばして) …… 3、2、1。もう ええかい!?`),this.ui.toast(`(${t.hint})`)}async searchKakurenbo(e){let t=this.state,n=Zf.find(e=>e.id===this.hide.id);if(e.id!==this.hide.id){this.hide.wrong+=1,this.audio.sfx(`flee`);let e=[`おらんなあ。セミの こえが するだけや。`,`はずれ。アリの ぎょうれつを みつけただけやった。`,`おらん。……でも どっかから くすくす きこえる!`];this.ui.toast(e[Math.min(this.hide.wrong-1,e.length-1)]),this.hide.wrong>=2&&this.ui.toast(`(もういちど ヒント: ${n.hint})`);return}this.audio.sfx(`catch`),this.ui.toast(`${e.place}から あたまが 2つ、ぴょこっ。……みーつけた!!`,`gold`),await this.ui.say(`ケンタ`,[`うわっ、なんで わかったん!? おまえ はなが きくのう!`,`よし、こんどは おれが おにやけん…… って、もう ええ じかんか。またな!`]),t.friend.kenta=(t.friend.kenta||0)+1,t.friend.mina=(t.friend.mina||0)+1,K(t,`ケンタとミナとかくれんぼをした`),this.hide=null}async hanabi(){let e=this.state,t=this.clock;if(e.flags[`hanabi`+t.day]=!0,await this.ui.say(`おばあちゃん`,[`ほれ、しんがいの スーパーで はなび こうてきとるよ。`,`バケツに みずも くんだけん、えんがわで やろうか。`]),await this.ui.choice(`どの はなびに する?`,[`せんこうはなび (ばあちゃんと しょうぶ)`,`ススキはなび (パチパチの おおきいの)`])===0){this.audio.sfx(`suzu`),this.ui.toast(`シュッ…… ちいさな ひだまが ジジジ…… パチ、パチ……`),await new Promise(e=>setTimeout(e,1800));let e=Math.random()<.5;this.audio.sfx(e?`catch`:`flee`),e?(this.ui.toast(`おばあちゃんのが さきに ポトッ。……かった!`,`gold`),await this.ui.say(`おばあちゃん`,[`ありゃりゃ、おちてしもた。あんたの かちじゃ。`,`せんこうはなびはな、いきを とめたら いかんのよ。……ばあちゃんが いうても せんないか。ふふ。`])):(this.ui.toast(`あっ……ぼくのが ポトッ。まけた!`),await this.ui.say(`おばあちゃん`,[`ふふ、ばあちゃんの かち。`,`てに ちからが はいっとった。ちからを ぬいて、じっと まつんよ。なんでも いっしょじゃ。`]))}else this.audio.sfx(`boom`),this.ui.toast(`シュボッ! パチパチパチ!! オレンジの ひばなが よるの にわを てらす!`),await new Promise(e=>setTimeout(e,1500)),this.ui.toast(`けむりの におい。……なんでか、なつの おわりの においが した`),await this.ui.say(`おばあちゃん`,[`きれいじゃねえ。`,`おじいさんも はなびが すきでな。よう ここで、こどもらと やりよったんよ。`]);e.friend.baachan=(e.friend.baachan||0)+1,K(e,`おばあちゃんとえんがわではなびをした`)}async himitsukichi(){let e=this.state,t=this.clock,n=`kichi`+t.day;if(!e.flags.kichiFirst){e.flags.kichiFirst=!0,e.flags[n]=!0,await this.ui.say(`ケンタ`,[`ようこそ、おれらの ひみつきちへ!!`,`ここはな、おれと ミナしか しらんかった ばしょや。おまえで 3にんめ。`,`みかんばこの つくえに、ビーだまの びん。ぜんぶ おれらの たからもんや。`]),await this.ui.say(`ミナ`,[`ここに おると、あめの ひでも たいくつせんのよ。`,`……あんたも きょうから メンバーやけん。ないしょやで。`]),this.audio.sfx(`catch`),this.ui.toast(`【ひみつきちの メンバーに なった!】`,`gold`),e.friend.kenta=(e.friend.kenta||0)+1,e.friend.mina=(e.friend.mina||0)+1,K(e,`ひみつきちのメンバーになった`);return}if(e.flags[n]){this.ui.toast(`きょうは もう たっぷり あそんだ。きちは にげへん`);return}e.flags[n]=!0;let r=[async()=>{await this.ui.say(`ケンタ`,[`さくせんかいぎや。あしたは どこで あそぶ?`,`川か、やまか、いけか……ぜんぶって いうのも ありやな!`]),K(e,`ひみつきちでさくせんかいぎをした`)},async()=>{this.audio.sfx(`coin`),await this.ui.say(`ミナ`,[`ラムネ もってきたんよ。3ぼん あるけん、いっぽんずつな。`,`ビーだまが カラカラ いうの、なんか すきなんよなあ。`]),this.ui.toast(`つめたい ラムネを のんだ。ビーだまが カラン と なった`),K(e,`ひみつきちでラムネをのんだ`)},async()=>{await this.ui.say(`ケンタ`,[`たからもの こうかんせえへん? おれは この セミのぬけがら な。`,`……え、いらん? なんでや! いちばん ええ やつやのに!`]),K(e,`ひみつきちでたからものじまんをした`)},async()=>{await this.ui.say(`ミナ`,[`ここだけの はなしな。ケンタ、ほんまは よる こわいらしいで。`,`こないだ きもだめしの はなしに なったら、きゅうに だまっとった。ふふ。`]),K(e,`ひみつきちでないしょばなしをきいた`)}];await r[t.day%r.length](),t.day>=27&&await this.ui.say(`ケンタ`,[`……なあ。おまえが かえっても、この きち、このままに しとくけん。`,`らいねん きたとき、また ここ あつまろうや。やくそくな。`])}koshienLine(e){return e===3?`ザーッ…「かがわ代表・あやうら、1回戦とっぱ! 3たい1!」 えっ、うちのけん かったんや!`:e>=4&&e<=5?`「あやうら高、みごとな しろぼしスタート。エースの右うでが ひかります」`:e>=6&&e<=7?`ザーッ…「えんちょう10かい、あやうら サヨナラ勝ちィ――!!」 うわっ、しびれる しあいや!`:e>=8&&e<=9?`「2回戦とっぱ。あやうら、ベスト16へ。こうこうやきゅうは、なつの まんなかです」`:e>=10&&e<=12?`ザーッ…「あやうら、3回戦も 制す! ベスト8! かがわぜんいきが わいております!」`:e>=13&&e<=15?`「おぼんの あまぞらの した、あやうら じゅんじゅんけっしょう。……かった! ベスト4じゃ!」`:e>=16&&e<=17?`ザーッ…「あやうら、じゅんけっしょう とっぱァ!! なんと けっしょうしんしゅつ!!」 しんじられん…!`:e===18?`「いよいよ あす、けっしょうせん。あやうらのエース、この なつ さいごの マウンドです」`:e===19?`ザーッ…「けっしょうせん、2たい1。あやうら、あと ひとりで…… ―― うたれたァ。……ゲームセット」`:e===20?`「あやうら、じゅんゆうしょう。ないた ないた、ナインが みんな ないとる。……ええ なつやったのう」`:e===21?`ザーッ…「こうしえんの つちを つめる きゅうじ。……ことしの なつも、おわりましたね」 …なんか さびしいな。`:null}async engawaRest(){let e=this.state,t=this.clock;this.audio.sfx(`slurp`),this.ui.toast(`えんがわに こしかけた。ばあちゃんが むぎちゃを もってきてくれた`),await new Promise(e=>setTimeout(e,1700)),await this.ui.fadePulse(),e.min=Math.min(e.min+45,1255);let n=Mu(e.min);n===`morning`?(this.audio.sfx(`suzu`),await this.ui.showStory([`あさの かぜが えんがわを とおりぬけていく。<br>のきさきの ふうりんが、ちりん、と なった。<br><br>きょうは、なにして あそぼう。`])):n===`day`?await this.ui.showStory([`セミしぐれの なか、つめたい むぎちゃを ごくり。<br>グラスの そとがわに、みずの つゆが ついとる。<br><br>なにも せんでも、じかんは すぎていく。<br>……それが、なんか ええ。`]):n===`evening`&&t.day>=20?await this.ui.showStory([`ゆうやけが、きのうより すこし はやい きがする。<br><br>ばあちゃんが よこに こしかけて、ぽつりと いった。<br>「なつやすみも、あと すこしやなあ」<br><br>……うん。しっとる。いま、いわんといて。`]):n===`evening`?await this.ui.showStory([`そらが すこしずつ 茜色に なっていく。<br>やまの ほうで、ヒグラシが なきはじめた。<br><br>たのしい 1にちは、なんで こんなに はやいんやろ。`]):await this.ui.showStory([`よるの えんがわ。すずむしの こえ。<br>せんぷうきも いらんくらい、かぜが すずしい。<br><br>とうきょうでは みたことない かずの ほしが みえる。`]),K(e,`えんがわでぼーっとした`)}async bunshu(){let e=this.state;e.flags.bunshuDone=!0,this.audio.sfx(`page`);let t=[`こうちょうせんせいが、ろうかの たなから<br>ひやけした ぶんしゅうを だしてくれた。<br><br>『あやがわ小 6年1組 学級文集』<br><br>―― おかあさんの、小学生のときのだ。`,`もくじから なまえを さがして、ページを ひらく。<br><br>「わたしの なつやすみ」<br><br>『なつやすみは、まいにち 川で およぎました。<br>おとうさんと きょうそうして、いちども かてません。<br>おとうさんは かっぱの うまれかわりだと 思います』`,`『おとうさんには 池の ライバルが いて、<br>ふたりで ウナギを ねらっています。<br>つれたら 見せてくれると いっていますが、<br>たぶん いっしょう むりだと 思います』`,`『でも、つれない日も おとうさんは たのしそうです。<br>わたしも おとなに なったら、こんな なつやすみを<br>じぶんの こどもに あげたいです』`];e.flags.rodStory&&t.push(`……げんじいの かおが うかんだ。<br><br>しょうぶは、まだ つづいている。<br>おしいれで ねむっていた、あの竿と いっしょに。`),t.push(`さいごの ぎょうに、せんせいの あかペンで<br>「よい なつやすみですね。はなまる」<br><br>おかあさんにも、ぼくと おんなじ<br>なつやすみが あったんだ。`),await this.ui.showStory(t),this.ui.toast(`【はっけん】おかあさんの さくぶんを よんだ`,`gold`),K(e,`おかあさんの がっきゅうぶんしゅうを よんだ`)}async kawaAsobi(){let e=this.state;e.flags[`oyogu`+e.day]=!0,this.audio.sfx(`splash`),this.ui.toast(`くつを ぬいで、そーっと かわに はいる。……つめたっ!`),await new Promise(e=>setTimeout(e,1500)),await this.ui.fadePulse(),e.min=Math.min(e.min+50,1255);let t=[];e.flags.bunshuDone?t.push(`ながれに さからって バシャバシャ あるく。<br>みずを かけあう あいてが いたら、もっと たのしい。<br><br>――おかあさんも、この川で およいだんだ。<br>じいちゃんと きょうそうして、いちども かてなくて。`):t.push(`ながれに さからって バシャバシャ あるいて、<br>あしのゆびの あいだの すなの かんしょくに わらう。<br><br>ひざより ふかいとこには いかない。<br>ばあちゃんとの、やくそくだから。`),e.day>=25?t.push(`ひらたい いしに ねころんで こうらぼしを した。<br><br>みずは まだ なつの つめたさなのに、<br>かわらを わたる かぜは、もう すこしだけ すずしい。`):t.push(`さいごは ひらたい いしの うえで こうらぼし。<br><br>いしが ほかほかで、せなかが あったかい。<br>みずの おと。セミの こえ。ながれる くも。<br><br>なつやすみで いちばん ぜいたくな ひるまかもしれない。`),await this.ui.showStory(t),this.audio.sfx(`splash`),this.ui.toast(`ようけ あそんだ! ……くちびるが ちょっと むらさきに なっとる`),K(e,`かわであそんだ`)}async mukaebi(){let e=this.state;e.flags.mukaebi=!0,e.friend.baachan=(e.friend.baachan||0)+1,this.audio.sfx(`coin`),await this.ui.fadePulse(),e.min=Math.max(e.min,1130);let t=[`いえの まえで、ばあちゃんと ちいさな たきびを たく。<br>おがらが パチ、パチ、と はぜて、<br>けむりが まっすぐ そらへ のぼっていく。`,`「このけむりを めじるしに、ご先祖さまが 帰ってくるんよ」<br><br>ばあちゃんは ひに むかって、<br>ちいさく てを あわせた。`];e.flags.rodBaachan?t.push(`「おじいさん、みてみまい。あんたの 竿、<br>この子が つこうとるんよ」<br><br>ゆらめく ひの むこうに、<br>あったこともない じいちゃんが おる気がした。`):t.push(`ひの ゆらめきを みとったら、<br>あったことのない じいちゃんの ことを<br>かんがえとった。<br><br>どんな ひとやったんかな。`),await this.ui.showStory(t),this.ui.toast(`けむりの におい、なんだか なつかしい……`),K(e,`ばあちゃんとむかえびをたいた`)}async okuribi(){let e=this.state;e.flags.okuribi=!0,e.friend.baachan=(e.friend.baachan||0)+1,this.audio.sfx(`coin`),await this.ui.fadePulse(),e.min=Math.max(e.min,1130),await this.ui.showStory([`きょうで おぼんは おしまい。<br>いえの まえで、おくりびを たく。<br><br>おがらの ひが、ゆうやみに ぽつんと あかるい。`,`「ご先祖さまは、この けむりに のって 帰りよるんよ。<br>……また来年な、いうてな」<br><br>ばあちゃんの こえが、いつもより ちょっと ちいさい。`,`けむりは ゆっくり、たかく たかく のぼって、<br>いちばんぼしの ちかくで 見えんくなった。<br><br>「また来年」って、ぼくも こころのなかで いうた。<br>じいちゃんにも。この なつにも。`]),this.ui.toast(`そらの たかいとこで、ひこうきぐもが ひかっとった`),K(e,`ばあちゃんとおくりびをたいた`)}async dinner(){let e=this.state,t=e.day;if(e.flags[`dinner`+t])return;e.flags[`dinner`+t]=!0;let n=[{m:`しょうゆまめと むぎめし`,l:`「まめは はたけの にくやけんな。ようけ おあがり」`},{m:`ひやしそうめんと きゅうりの もみもの`,l:`「そうめんは のどごしや。ズルッと いくんが ええんよ」`},{m:`アジの ひらきと なすの にびたし`,l:`「なすは ばあちゃんの はたけの や。あまいやろ」`},{m:`ちらしずしと おつゆ`,l:`「きょうは なんとなく ごちそうの きぶんやってん」`},{m:`カレーライス (じゃがいも ゴロゴロ)`,l:`「こどもは みんな カレーが すきやけんな」`},{m:`たきこみごはんと とうふの みそしる`,l:`「おこげの ところ、あんたに あげよ」`},{m:`てんぷらと そうめん`,l:`「さぬきの てんぷらは あげたてが いちばんや」`},{m:`にくじゃがと むぎちゃ`,l:`「ようけ あそんだ かおしとるわ。おかわり あるで」`}],r=n[t%n.length],i;t>=31?(e.flags.baachanLetter=!0,i=[`さいごの ばんごはんは、ちゃぶだいに のりきらんくらいの ごちそうやった。<br><br>ちらしずし。てんぷら。しょうゆまめ。<br>はじめての ばんと、おんなじ おかずが ならんどる。`,`ばあちゃんは あんまり しゃべらんと、<br>ぼくが たべるのを ずっと にこにこ みとった。<br><br>「たんと おあがり。……たんとな」`,`たべおわると、ばあちゃんは たんすの ひきだしから<br>ふうとうを いちまい だして、ぼくの てに のせた。<br><br>「でんしゃの なかで よみまい。<br>いま よんだら、ばあちゃんが なくけんな」`]):i=t===1?[`ちゃぶだいに、ばんごはんが ならんどる。<br>きょうは おいわいやいうて、ちらしずしに てんぷらに、<br>さぬきうどんまで ついとる。<br><br>「よう きたなあ。この なつは、ここが あんたの いえや」`,`せんぷうきの かぜ。とけいの コチコチ。<br>しらない いえの においが、すこしずつ<br>「なつやすみの におい」に かわっていく。`]:t>=13&&t<=15?[`ちゃぶだいに ${t===14?`おはぎと そうめん`:`おぼんの ごちそう`}が ならぶ。<br><br>「おぼんはな、ごせんぞさんが かえってくる ひなんよ。<br>じいちゃんも、きっと この いえに おるで」`,`ばあちゃんは そういって、ぶつだんの ごはんを<br>ちいさな おちゃわんに よそった。<br><br>ろうそくの ひが、ゆらゆら ゆれとる。`]:t===20?[`たいふうで でんきが ちらちらする。<br>ろうそくの あかりで、おにぎりと つけものの ばんごはん。<br><br>「こんな ばんも、わるうないやろ」<br>あめの おとの なか、ばあちゃんが わらった。`]:t===24?[`きょうは ${r.m}。<br><br>「あしたは まつりやなあ。じいちゃんは まいとし<br>いちばん のりで でかけよったんよ」<br><br>なんだか こっちまで そわそわしてくる。`]:t===25?[`まつりの よるは、やたいの やきそばが ばんごはん。<br><br>ソースの におい。ちょうちんの あかり。<br>とおくで たいこの おと。<br><br>おなかも むねも いっぱいや。`]:t===30?[`きょうは ${r.m}。<br><br>「……あしたで さいごやなあ」<br>ばあちゃんは それだけ いうて、<br>いつもより ゆっくり おちゃを のんだ。`,`ぼくも なにか いおうと したけど、<br>ことばに ならんかった。<br><br>せんぷうきだけが、いつもどおり まわっとる。`]:[`ちゃぶだいに ばんごはんが ならぶ。<br>きょうは ${r.m}。<br><br>${r.l}`],await this.ui.showStory(i),K(e,`ばあちゃんとばんごはんをたべた`)}async tobikomi(){let e=this.state;if(await this.ui.choice(`らんかんの むこうで、みなもが きらきらしとる。<br>……とぶ?`,[`えいっ!`,`やっぱり やめとく`])!==0){this.ui.toast(`……きょうは ながめるだけに しとこ`);return}this.ui.toast(`いきを おおきく すいこんで――`),await new Promise(e=>setTimeout(e,900)),this.audio.sfx(`splash`),await this.ui.fadePulse(),e.min=Math.min(e.min+25,1255);let t=!e.flags.tobikomiDone;e.flags.tobikomiDone=!0,await this.ui.showStory([`ふわっと からだが うく。<br>つぎの しゅんかん、みずの つめたさが ドン! とくる。<br><br>あわの むこうに、ゆらゆら ひかる みなも。`,t?`かわから かおを だすと、はなの おくが ツンとした。<br><br>「じいちゃんも わかいころ、あのはしから とんだんやで」<br>いつか ばあちゃんが いうとった。<br><br>おなじ はしから。おなじ なつに。`:`ぬれた シャツが はだに はりつく。<br>それが きもちいいくらい、きょうの そらは あつい。<br><br>もういっかい、とぼうかな。`]);let n=this.player.pos;await this.warpTo(null,n.x+1.6,zd(n.x)+6+1.8,0,400),this.ui.toast(`びしょぬれで 岸に あがった。……さいこうや!`),K(e,`はしから かわに とびこんだ`)}async miharashi(){let e=this.state,t=this.clock;e.flags[`miharashi`+t.day]=!0;let n=Mu(t.min);if(await this.ui.fadePulse(),n===`evening`)this.audio.sfx(`suzu`),t.day>=24?(await this.ui.showStory([`ゆうひが、まちを ぜんぶ オレンジいろに そめとる。<br><br>ことでんが ちいさく みえる。<br>かわが ひかっとる。ばあちゃんの いえの やねも みえる。`,`この けしきを、とうきょうに もって かえれたら いいのに。<br><br>……め に、やきつけて おこう。`]),K(e,`みはらしだいでゆうひをめにやきつけた`)):(await this.ui.showStory([`ゆうひが しずんでいく。<br><br>とんぼの むれが、ひかりの なかを とんでいく。<br>まちの どこかから、ゆうげの においが してくる。`]),K(e,`みはらしだいからゆうひをみた`)),this.ui.toast(`【とっておきの けしき】ゆうひが めに やきついた`,`gold`);else if(n===`night`)await this.ui.showStory([`まちの あかりが ぽつぽつ ともっとる。<br><br>とうきょうの よるは あかるいけど、<br>ここの よるは、ほしが あかるい。`]),K(e,`みはらしだいからよるのまちをみた`);else{let n=[`まちが ぜんぶ みえる! あれが ばあちゃんの いえで、あっちが てんまんぐう…`,`かわが きらきら ひかって、ことでんが おもちゃみたいに はしっとる`,`とおくに さぬきふじ! ほんまに おむすびの かたちや`];this.ui.toast(n[t.day%n.length]),K(e,`みはらしだいからまちをみた`)}}updateAyu(e,t){let n=this.world;if(!n.ayu||!t)return;let r=this.clock.day;(!this.ayuState||this.ayuState.day!==r)&&(this.ayuState={day:r,fish:[0,1,2].map(e=>({x:X.x+Math.cos(e*2.1+r)*1.8,z:X.z+Math.sin(e*2.1+r)*1.8,a:e*2.1,panic:0,alive:!0}))});let i=this.ayuState,a=t.pos,o=!n.indoor&&Math.hypot(a.x-X.x,a.z-X.z)<55,s=this.evT||0;i.fish.forEach((t,r)=>{let i=n.ayu[r],c=o&&t.alive;if(i.visible!==c&&(i.visible=c),!c)return;let l=Math.hypot(a.x-t.x,a.z-t.z);if(l<3.4&&(t.panic<.2&&l<2.6&&s-(this.ayuSfxT||0)>1.4&&(this.audio.sfx(`splash`),this.ayuSfxT=s),t.panic=Math.min(1.5,t.panic+e*6)),t.panic=Math.max(0,t.panic-e*.8),t.panic>.2){let n=Math.atan2(t.z-a.z,t.x-a.x)+Math.sin(s*4+r*7)*.55-t.a;n=Math.atan2(Math.sin(n),Math.cos(n)),t.a+=n*Math.min(1,e*8)}else t.a+=Math.sin(s*.6+r*5.3)*e*1.3;if(Math.hypot(t.x-X.x,t.z-X.z)>X.r-1){let n=Math.atan2(X.z-t.z,X.x-t.x)-t.a;n=Math.atan2(Math.sin(n),Math.cos(n)),t.a+=n*Math.min(1,e*(t.panic>.2?4:2.2))}let u=t.panic>.2?3.1:.75;t.x+=Math.cos(t.a)*u*e,t.z+=Math.sin(t.a)*u*e;let d=Math.hypot(t.x-X.x,t.z-X.z);d>X.r-.45&&(t.x=X.x+(t.x-X.x)*(X.r-.45)/d,t.z=X.z+(t.z-X.z)*(X.r-.45)/d),i.position.set(t.x,X.y-.08+Math.sin(s*3+r)*.02,t.z),i.rotation.y=-t.a,i.rotation.z=Math.sin(s*(t.panic>.2?14:6)+r)*.16})}async grabAyu(e){let t=this.state,n=this.player.pos,r=Math.hypot(n.x-X.x,n.z-X.z)<X.r,i=Math.hypot(e.x-X.x,e.z-X.z)>X.r-1.7,a=e.panic<.35;if(Math.random()<.42+(i?.28:0)+(a?.18:0)+(r?.06:-.12)){e.alive=!1;let n=!t.fish.ayu;t.fish.ayu=(t.fish.ayu||0)+1,this.audio.sfx(`catch`),this.ui.toast(`アユ (17cm) を てづかみで つかまえた!${n?` 【ずかんに とうろく!】`:``}`,`gold`),K(t,`たきつぼでアユをつかみどりした`),n&&(t.flags.ayuFirst=!0,await this.ui.showStory([`つめたい! ぬるぬるして、ちからづよい!<br><br>りょうてのなかで、アユが ぴちぴち はねとる。<br>かわの、きゅうりみたいな においが した。`,`ばあちゃんに もって かえろう。<br>しおやきに してもらうんじゃ!<br><br>ゆうごはんが たのしみに なってきた。`])),this.ayuState.fish.some(e=>e.alive)||this.ui.toast(`きょうの あゆは でつくしたみたい。また あした!`)}else e.panic=1.6,this.audio.sfx(`splash`),this.ui.toast(`するり! にげられた…`)}async summitView(){let e=this.state,t=this.clock,n=Mu(t.min);if(await this.ui.fadePulse(),!e.flags.tsutsumiTop)e.flags.tsutsumiTop=!0,await this.ui.showStory([`のぼった…! つつみやまの さんちょうじゃ!<br><br>かぜが ごうっと ふきぬけて、<br>せなかの あせが、すうっと ひいていく。`,`あやがわの まちが ぜんぶ みえる。<br>ばあちゃんの いえ。てんまんぐう。ことでんの せんろ。<br><br>かわが、ぎんいろの リボンみたいに ひかっとる。`]),this.ui.toast(`【とっておきの けしき】つつみやまに のぼった!`,`gold`),K(e,`つつみやまのさんちょうにはじめてのぼった`);else if(n===`evening`)await this.ui.showStory([`ゆうやけが、まち ぜんたいを あかく そめとる。<br><br>いえいえの まどが、ぽつ、ぽつ、と ひかりだす。<br>どこかで ひぐらしが ないとる。`]),K(e,`つつみやまからゆうやけをみた`),this.ui.toast(`【とっておきの けしき】やまの ゆうやけ`,`gold`);else if(n===`night`)await this.ui.showStory([`よるの まちは しずかで、ほしが ちかい。<br><br>したから かえるの こえが きこえてくる。<br>やまの よるは、ちょっと どきどきする。`]),K(e,`よるのつつみやまにのぼった`);else{let n=[`ことでんが おもちゃみたいに はしっとる! ばあちゃんの いえも みえるぞ`,`とおくの おむすびがたの やまは さぬきふじ。きょうも ええ てんきじゃ`,`たきつぼが きらっと ひかった。あゆ、おるかなあ`];this.ui.toast(n[t.day%n.length]),K(e,`つつみやまからまちをながめた`)}}async zariganiPeek(){let e=this.state,t=this.clock;e.flags[`zari`+t.day]=!0,this.ui.toast(`ようすいろを そーっと のぞく……`),await new Promise(e=>setTimeout(e,900));let n=Math.random();if(n<.45){this.audio.sfx(`catch`);let t=!e.flags.zariganiEver;e.flags.zariganiEver=!0,e.zarigani=(e.zarigani||0)+1,this.ui.toast(`まっかな ザリガニ ゲット! はさみが りっぱや${t?` 【はじめての ザリガニ!】`:` (${e.zarigani}ひきめ)`}`,t?`gold`:void 0),K(e,`ようすいろでザリガニをつかまえた`)}else n<.7?(this.audio.sfx(`splash`),this.ui.toast(`あめんぼが スイーッ。ザリガニは いしの かげに かくれてしもた`),K(e,`ようすいろをのぞいた`)):(this.audio.sfx(`flee`),this.ui.toast(`でっかい トノサマガエルが ドボン! びっくりしたぁ…`),K(e,`ようすいろでカエルにおどろいた`))}async ohakamairi(){let e=this.state;e.flags.obonHaka=!0,await this.ui.fadePulse(),await this.ui.say(`おばあちゃん`,[`ちょうど ええところに。おはかまいり、いっしょに いこか。`,`おみずと おはな、もって おいで。`]),this.audio.sfx(`splash`),this.ui.toast(`おはかに みずを かけて、おはなを いけた`),await new Promise(e=>setTimeout(e,900)),this.audio.sfx(`suzu`),await this.ui.say(`おばあちゃん`,[`ここには ひいじいちゃんと ひいばあちゃんが ねむっとるんよ。`,`あんたの おかあさんも、ちいさいころ ようここへ きてな。`,`せみとりの あみを もったまま てを あわせよったわ。ふふ。`,`……ごせんぞさんに、あんたが きたこと、ちゃんと ほうこくしとこな。`]),this.ui.toast(`めを つぶって、てを あわせた。せみの こえだけが きこえる`),e.friend.baachan=(e.friend.baachan||0)+2,K(e,`ばあちゃんとおはかまいりをした`)}async mukaebi(){let e=this.state;e.flags.mukaebi=!0,await this.ui.say(`おばあちゃん`,[`きょうは おぼんの いりじゃけん、むかえびを たくんよ。`,`おがらに ひを つけて…… ほれ、けむりが まっすぐ のぼるじゃろ。`]),this.audio.sfx(`boom`),this.ui.toast(`もんさきで ちいさな ひが パチパチ もえる。けむりが よるの そらへ のぼっていく`),await new Promise(e=>setTimeout(e,1200)),await this.ui.say(`おばあちゃん`,[`ごせんぞさんは、この けむりに のって かえってくるんよ。`,`おじいさんも、ことしも まよわず かえってこれるわ。`,`……おかえりなさい、いうて あげような。`]),this.ui.toast(`「おかえりなさい」 ちいさなこえで いってみた`),e.friend.baachan=(e.friend.baachan||0)+1,K(e,`ばあちゃんとむかえびをたいた`)}async okuribi(){let e=this.state;e.flags.okuribi=!0,await this.ui.say(`おばあちゃん`,[`おぼんも おしまい。こんどは おくりびを たいて、みおくるんよ。`]),this.audio.sfx(`boom`),this.ui.toast(`また ちいさな ひが ともる。こんどの けむりは、なんだか さびしい`),await new Promise(e=>setTimeout(e,1200)),await this.ui.say(`おばあちゃん`,[`「また らいねん、きてつかあさいよ」いうてな。`,`……ひとは なんども わかれて、なんども また あうんよ。`,`あんたと ばあちゃんも おんなじ。じゃけん、わかれは かなしいことばっかりじゃ ないんよ。`]),this.ui.toast(`ひが きえるまで、ふたりで だまって みとった`),e.friend.baachan=(e.friend.baachan||0)+1,K(e,`ばあちゃんとおくりびをたいた`)}async obakeTalk(){let e=this.state,t=this.clock;if(!e.flags.obake)this.audio.sfx(`flee`),this.ui.toast(`うわっ…!? あおしろい ひが、ふわ…と ういとる…`),await new Promise(e=>setTimeout(e,1100)),this.audio.sfx(`suzu`),await this.ui.say(`???`,[`…………`,`…ぼうや。こんな よるふけに、ようきたのう。`,`こわがらんでも ええ。わしは ずーっと むかしから、ここで ねむっとる もんじゃ。`,`わしも こどものころは、あの あやがわで さかなを おいかけて、まっくらに なるまで あそんだもんよ。`,`……なつは、ええのう。`,`ぼうやの なつやすみは、いましか ない たからもんじゃ。だいじに しなさいよ。`]),e.flags.obake=!0,this.ui.toast(`【ふしぎ】ひとだまは ふわりと ゆれて、おはかの うえに もどっていった`,`gold`),K(e,`よるのはかばで ひとだまにあった`);else if(t.day>=13&&t.day<=15)this.audio.sfx(`suzu`),await this.ui.say(`ひとだま`,[`おぼんじゃけんな、いまは みんな いえに かえっとって、はかばは るすばんばっかりよ。`,`ぼうやの ばあちゃんちにも、なつかしい ひとが かえっとるはずじゃ。だいじに してあげんさい。`]),K(e,`おぼんのよるに ひとだまとはなした`);else if(e.flags.rodStory&&!e.flags.obakeRod)e.flags.obakeRod=!0,this.audio.sfx(`suzu`),await this.ui.say(`ひとだま`,[`……ぼうや。ええ竿、もっとるのう。`,`その竿の ぬしはな、まいばん ここらで、げんじいの ウナギの はなしを して わろうとったんじゃ。`,`「あいつ、まーだ 釣れんのか」いうてな。……ほんまは、うれしそうにな。`,`しょうぶの つづき、たのんだで。……ひ、ひ、ひ。`]),this.ui.toast(`【ふしぎ】ひとだまは、いけの ほうへ すーっと とんでいった…`,`gold`),K(e,`ひとだまが じいちゃんのさおを しっとった`);else{let n=[[`こんばんは、ぼうや。……ええ よかぜじゃのう。`],[`よるの むしのこえは、なんべん きいても ええもんじゃ。`],[`ほしが ようみえる よるじゃ。わしの ころと おんなじじゃなあ。`],[`はよ かえらんと、ばあちゃんが しんぱいするで。`],[`きょうは なにして あそんだんな? ……ふふ、かおを みたら わかるわ。`]];this.audio.sfx(`suzu`),await this.ui.say(`ひとだま`,n[t.day%n.length]),K(e,`よるのはかばで ひとだまとはなした`)}}async opening(){let e=this.state;e.min=480,await this.ui.showStory([`8がつ 1にち、あさ。<br><br>よるの ねだいれっしゃ「サンライズせと」は、<br>ぼくを のせて うみの うえの おおきな はしを わたった。`,`「なつやすみのあいだ、おばあちゃんの いえで<br>すごしておいで」<br><br>おかあさんは そう いって、<br>とうきょうえきの ホームで みおくってくれた。`,`たかまつに ついたら、ちっこうえきから<br>きいろい ことでんに のりかえる。<br><br>まどのそとは、みたことのない みどりいろ。`,`かがわけん あやがわちょう。<br>おかあさんが うまれそだった まち ――<br><br>おばあちゃんの いえで、ぼくの なつやすみが はじまる。`]),this.audio.sfx(`train`);let t=this.world.trainRide;await this.warpTo(t,t.entry.x,t.entry.z,Math.PI,700),this.ride={t:0,dir:-1,next:0,stops:[[`すえ`,6]],realS:15,gameMin:10,opening:!0,arriving:!1},this.clock.rate=10/(15*Pu),this.ui.toast(`ガタンゴトン… もうすぐ おばあちゃんの まちに つく`)}async boardTrain(e){let t=e>0?`ことでんに のって かわらまちへ? (やく30ぷん)`:`ことでんに のって すえまで かえる? (やく30ぷん)`;if(await this.ui.choice(t,[`のる`,`やめとく`])!==0)return;this.state.flags.rideTrain=!0,this.audio.sfx(`train`);let n=this.world.trainRide;await this.warpTo(n,n.entry.x,n.entry.z,Math.PI,500),this.ride={t:0,dir:e,next:0,stops:e>0?Yf:Xf,realS:Jf,gameMin:qf,arriving:!1},this.clock.rate=qf/(Jf*Pu),this.ui.toast(e>0?`「すえ〜、すえ です。ドアが しまります」ガタン…`:`「かわらまち はっしゃ。ことひらほうめん です」ガタン…`)}async arrive(e){let t=this.state,n=e.dir;if(this.ride=null,this.clock.rate=1,this.audio.sfx(`train`),e.opening){this.ui.toast(`「まもなく〜、すえ、すえ です」`),await this.warpTo(null,109.4,-7.6,Math.PI,700),this.ui.toast(`8月1日 ― なつやすみが はじまった!`,`gold`),this.ui.toast(`えきまえで おばあちゃんが まっとる! (${this.ui.touchUI?`「しらべる」`:`E `}ではなす)`),K(t,`ひとりでことでんにのってあやがわにきた`);return}if(n>0){this.ui.toast(`「まもなく〜、かわらまち、かわらまち。おでぐちは みぎがわ です」`);let e=this.world.takamatsu;await this.warpTo(e,e.entry.x,e.entry.z,Math.PI,500),this.ui.toast(`かわらまちに とうちゃく! たかまつは とかいや…!`,`gold`),t.flags[`takamatsu`+this.clock.day]||(t.flags[`takamatsu`+this.clock.day]=!0,K(t,`ことでんでたかまつへあそびにいった`))}else this.ui.toast(`「まもなく〜、すえ、すえ です」`),await this.warpTo(null,109.4,-7.6,Math.PI,500),this.ui.toast(`すえに かえってきた。やっぱり あやがわは おちつくなあ`),K(t,`ことでんですえまでかえってきた`)}cancelRide(){this.ride=null,this.clock.rate=1}gainCap(e){let t=this.state,n=Gf(),r=!t.caps[n.id];t.caps[n.id]=(t.caps[n.id]||0)+1;let i=Su(t);return this.ui.toast(r?`はじめての「${n.name}」の王冠! (${i}/${Tu.length}しゅるい)`:`「${n.name}」の王冠だった (2こめいこうは つくえに たまっていく)`,r?`gold`:null),r&&K(t,`${e}「${n.name}」の王冠をてにいれた`),r&&i===Tu.length&&(this.ui.toast(`王冠 ぜんしゅるい コンプリート!! へやの たなに ぜんぶ ならんだ!`,`gold`),K(t,`ラムネの王冠をぜんしゅるいあつめた`)),this.world.interior2f&&this.world.interior2f.capShelf&&this.world.interior2f.capShelf.refresh(t),n}update(e,t,n){this.player=t,bu(this.state)+xu(this.state)>=(this.state.zukanReward+1)*5&&(this.state.zukanReward+=1,this.state.money+=50,this.audio.sfx(`coin`),this.ui.toast(`ずかんが ${this.state.zukanReward*5}しゅるいに! ばあちゃんが おこづかいを 50えん くれた!`,`gold`),K(this.state,`ずかんが${this.state.zukanReward*5}しゅるいになって、ばあちゃんにほめられた`));let r=this.world.capMarker;if(r){let t=!this.world.indoor&&!this.state.flags[`capspot`+this.clock.day];if(r.visible=t,t){let t=Kf[(this.clock.day*7+3)%Kf.length];r.position.set(t.x,this.world.groundY(t.x,t.z)+.1,t.z),r.rotation.y+=e*2.2}}if(this.evT=(this.evT||0)+e,this.updateAyu(e,t),this.world.laundry){let e=!(this.clock.weather===`rain`||this.clock.weather===`storm`)&&this.clock.min>=480&&this.clock.min<=1020;for(let t of this.world.laundry)t.visible!==e&&(t.visible=e)}if(this.world.furin&&(this.furinT=Math.max(0,(this.furinT||0)-e),this.world.furin.rotation.x=Math.sin(this.evT*2.7)*(.05+this.furinT*.2)),this.ride){let t=this.ride;t.t+=e,this.world.trainRide.update(e,t.dir);let n=t.t/t.realS*t.gameMin;for(;t.next<t.stops.length&&n>=t.stops[t.next][1];){let[e]=t.stops[t.next];this.ui.toast(`「つぎは〜、${e}、${e} です」`),t.next+=1}t.t>=t.realS&&!t.arriving&&(t.arriving=!0,this.arrive(t))}let i=this.world.interior&&this.world.interior.fanHead;i&&this.world.indoor&&(i.rotation.y=-2.1+Math.sin(performance.now()/2400)*.6);let a=this.world.interior;if(a&&a.baachan){let e=this.baachanHome();if(a.baachan.visible=!!e,e)if(a.baachan.position.set(e.x,a.floorY,e.z),this.world.sub===a){let n=Math.hypot(e.x-t.pos.x,e.z-t.pos.z);a.baachan.rotation.y=n<3.2?Math.atan2(t.pos.x-e.x,t.pos.z-e.z):e.ry}else a.baachan.rotation.y=e.ry}let o=this.clock.event===`matsuri`,s=this.clock.event===`gakusai`;if(this.world.festivalGroup.visible=o,this.world.gakusaiGroup&&(this.world.gakusaiGroup.visible=s),this.world.activeFestivalRects=o?this.world.festivalRects:s?this.world.gakusaiRects:null,this.festivalOn=o||s,this.festivalOn){let e=this.clock.min>=1020?1.2:0;for(let t of this.world.lanternMats)t.emissiveIntensity=e}if(o&&this.world.odoriGroup){let e=performance.now()/1e3;this.world.odoriGroup.rotation.y=e*.4,this.world.odoriDancers.forEach((t,n)=>{t.position.y=Math.abs(Math.sin(e*3.2+n*1.05))*.14})}!this.world.indoor&&this.clock.min>=1020&&this.clock.min<1060&&!this.state.flags[`chime`+this.clock.day]&&(this.state.flags[`chime`+this.clock.day]=!0,this.audio.chime(),this.ui.toast(`とおくの スピーカーから 5じの チャイム。……そろそろ かえる じかんや`)),!this.world.indoor&&this.clock.min>=1080&&this.clock.min<1120&&!this.state.flags[`kane`+this.clock.day]&&(this.state.flags[`kane`+this.clock.day]=!0,this.audio.sfx(`kane`),this.ui.toast(`やまの おてらから、かねの おと。……ゴーン……`)),!this.world.indoor&&this.clock.yudachi&&!this.state.flags[`yudachi`+this.clock.day]&&(this.state.flags[`yudachi`+this.clock.day]=!0,this.ui.toast(`ポツ、ポツ…… ザーッ!! ゆうだちや! セミが いっせいに だまった`),K(this.state,`ゆうだちにあった`)),!this.world.indoor&&this.clock.rainbow&&!this.state.flags[`niji`+this.clock.day]&&(this.state.flags[`niji`+this.clock.day]=!0,this.audio.sfx(`suzu`),this.ui.toast(`【にじ!】あめあがりの そらに、おっきな にじが かかっとる!`,`gold`),K(this.state,`ゆうだちのあとのにじをみた`)),this.hide&&this.clock.min>=1140&&(this.hide=null,this.ui.toast(`くらくなってきた。ふたりとも、いつのまにか いえに かえったみたいや`)),!this.world.indoor&&this.clock.min>=1160&&this.clock.weather===`sunny`&&!this.state.flags[`hoshi`+this.clock.day]&&Math.random()<e*.02&&(this.state.flags[`hoshi`+this.clock.day]=!0,this.audio.sfx(`suzu`),this.ui.toast(`あっ……! ながれぼし! (きえるまえに ねがいごとを 3かい……まにあわんかった)`,`gold`),K(this.state,`ながれぼしをみた`));for(let e of this.spots){let r=Math.hypot(e.x-t.pos.x,e.z-t.pos.z);r<e.r&&n.push({dist:r,label:e.label,action:e.action})}}},$f=class{constructor(){this.ctx=null,this.muted=!1,this.layers={}}init(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.3,this.master.connect(this.ctx.destination);let t=this.makeNoise();this.layers.cicada=this.noiseLayer(t,4800,7,26),this.layers.kuma=this.noiseLayer(t,6300,8,13),this.layers.rain=this.noiseLayer(t,1e3,.6,0),this.layers.wind=this.noiseLayer(t,280,.8,.13),this.layers.higurashi={gain:{value:0}},this.layers.cricket={gain:{value:0}},this.layers.matsuri={gain:{value:0}},this.layers.tsukutsuku={gain:{value:0}},this.layers.crow={gain:{value:0}},this._patternGains={higurashi:0,cricket:0,matsuri:0,tsukutsuku:0,crow:0},setInterval(()=>this.higurashiPhrase(),4200),setInterval(()=>this.cricketChirp(),1200),setInterval(()=>this.matsuriBeat(),1900),setInterval(()=>this.tsukutsukuPhrase(),6500),setInterval(()=>this.crowCaw(),9e3)}makeNoise(){let e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let t=0;t<e;t++)n[t]=Math.random()*2-1;return t}noiseLayer(e,t,n,r){let i=this.ctx.createBufferSource();i.buffer=e,i.loop=!0;let a=this.ctx.createBiquadFilter();a.type=t>2e3?`bandpass`:`lowpass`,a.frequency.value=t,a.Q.value=n;let o=this.ctx.createGain();if(o.gain.value=0,i.connect(a).connect(o).connect(this.master),r){let e=this.ctx.createOscillator();e.frequency.value=r;let t=this.ctx.createGain();t.gain.value=.5;let n=this.ctx.createGain();n.gain.value=.5,e.connect(t);let i=this.ctx.createGain();i.gain.value=0,t.connect(i.gain),e.start()}return i.start(),o}setLayer(e,t,n=2){if(!this.ctx)return;let r=this.layers[e];r&&(r.gain&&r.gain.setTargetAtTime?r.gain.setTargetAtTime(t,this.ctx.currentTime,n):this._patternGains[e]=t)}setScene({phase:e,weather:t,festivalNight:n,lateSummer:r}){if(!this.ctx)return;let i=t===`rain`||t===`storm`,a=e===`day`||e===`morning`;this.setLayer(`cicada`,!i&&a?r?.09:.16:0,3),this.setLayer(`kuma`,!i&&e===`morning`&&!r?.12:0,3),this.setLayer(`rain`,i?t===`storm`?.3:.18:0,1.5),this.setLayer(`wind`,t===`storm`?.28:0,2),this._patternGains.higurashi=!i&&e===`evening`?.9:0,this._patternGains.cricket=!i&&e===`night`?.4:0,this._patternGains.matsuri=n?.5:0,this._patternGains.tsukutsuku=!i&&a&&r?.5:0,this._patternGains.crow=!i&&e===`evening`?.6:0}tone(e,t,{type:n=`sine`,vol:r=.2,when:i=0,glide:a=null}={}){if(!this.ctx||this.muted)return;let o=this.ctx.currentTime+i,s=this.ctx.createOscillator();s.type=n,s.frequency.setValueAtTime(e,o),a&&s.frequency.exponentialRampToValueAtTime(a,o+t);let c=this.ctx.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(r,o+.015),c.gain.exponentialRampToValueAtTime(.001,o+t),s.connect(c).connect(this.master),s.start(o),s.stop(o+t+.05)}noiseBurst(e,t,{vol:n=.25,when:r=0,type:i=`bandpass`}={}){if(!this.ctx||this.muted)return;let a=this.ctx.currentTime+r,o=this.ctx.createBufferSource();o.buffer=this.makeNoise();let s=this.ctx.createBiquadFilter();s.type=i,s.frequency.value=e;let c=this.ctx.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(s).connect(c).connect(this.master),o.start(a),o.stop(a+t+.05)}higurashiPhrase(){let e=this._patternGains.higurashi;if(!(!e||this.muted)){for(let t=0;t<9;t++)this.tone(3700-t*60,.1,{vol:.05*e,when:t*.15});for(let t=0;t<7;t++)this.tone(3450-t*55,.1,{vol:.022*e,when:1.9+t*.16})}}crowCaw(){let e=this._patternGains.crow;if(!e||this.muted||Math.random()<.35)return;let t=1+Math.floor(Math.random()*2);for(let n=0;n<t;n++){let t=n*(.7+Math.random()*.3);this.tone(760+Math.random()*60,.34,{type:`sawtooth`,vol:.016*e,when:t,glide:520}),this.noiseBurst(1400,.2,{vol:.012*e,when:t})}}cricketChirp(){let e=this._patternGains.cricket;if(!(!e||this.muted))for(let t=0;t<3;t++)this.tone(4300,.05,{vol:.05*e,when:t*.09})}tsukutsukuPhrase(){let e=this._patternGains.tsukutsuku;if(!(!e||this.muted)){for(let t=0;t<3;t++){let n=t*.75;this.tone(3e3,.06,{vol:.05*e,when:n}),this.tone(3e3,.06,{vol:.05*e,when:n+.12}),this.tone(3400,.3,{vol:.06*e,when:n+.28,glide:2700})}this.tone(2900,.9,{vol:.03*e,when:2.4,glide:2400})}}chime(){if(!this.ctx||this.muted)return;let e={E4:329.6,G4:392,A4:440,C5:523.3},t=[[`G4`,.5],[`G4`,.5],[`A4`,.5],[`G4`,.5],[`E4`,1],[`G4`,1.4],[`E4`,.5],[`G4`,.5],[`A4`,.5],[`C5`,.5],[`A4`,1],[`G4`,1.6]],n=0;for(let[r,i]of t)this.tone(e[r],i*.92,{type:`triangle`,vol:.07,when:n}),this.tone(e[r]*2,i*.92,{type:`sine`,vol:.02,when:n}),n+=i*.62}matsuriBeat(){let e=this._patternGains.matsuri;!e||this.muted||(this.tone(75,.3,{vol:.3*e}),this.tone(75,.3,{vol:.3*e,when:.45}),this.noiseBurst(2500,.08,{vol:.12*e,when:.9}),Math.random()<.4&&this.tone(1560,.7,{vol:.04*e,when:.3,glide:1320}))}sfx(e){if(!(!this.ctx||this.muted))switch(e){case`catch`:this.tone(660,.12,{vol:.25}),this.tone(880,.2,{vol:.25,when:.1});break;case`flee`:this.tone(900,.15,{glide:300,vol:.12});break;case`splash`:this.noiseBurst(800,.35,{vol:.2});break;case`bite`:this.tone(1300,.08,{vol:.3}),this.tone(1300,.08,{vol:.3,when:.12});break;case`taiso`:[523,659,784,1046].forEach((e,t)=>this.tone(e,.22,{vol:.18,when:t*.2}));break;case`slurp`:this.noiseBurst(600,.25,{vol:.18}),this.tone(300,.3,{glide:700,vol:.1,when:.05});break;case`coin`:this.tone(1e3,.08,{type:`square`,vol:.1}),this.tone(1500,.18,{type:`square`,vol:.1,when:.08});break;case`suzu`:this.tone(2500,.5,{type:`triangle`,vol:.15}),this.tone(3100,.4,{type:`triangle`,vol:.1,when:.03});break;case`boom`:this.tone(60,1.2,{vol:.4}),this.noiseBurst(400,1,{vol:.2,type:`lowpass`});break;case`train`:this.noiseBurst(200,3,{vol:.15,type:`lowpass`}),this.tone(550,.6,{vol:.08,when:.4}),this.tone(440,.6,{vol:.08,when:.5});break;case`kane`:[[146,4.5,.2],[146*2.76,3.2,.07],[146*4.07,1.8,.045],[146*1.02,4.2,.1]].forEach(([e,t,n])=>{this.tone(e,t,{type:`sine`,vol:n})}),this.noiseBurst(500,.25,{vol:.06,type:`lowpass`});break;case`sleep`:[784,659,523].forEach((e,t)=>this.tone(e,.5,{vol:.12,when:t*.35}));break;case`page`:this.noiseBurst(3e3,.12,{vol:.08});break}}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:.3)}toggleMute(){return this.setMuted(!this.muted),this.muted}};function ep(){return document.fullscreenElement||document.webkitFullscreenElement||null}function tp(){let e=document.documentElement;return!!(e.requestFullscreen||e.webkitRequestFullscreen)}function np(){try{let e=screen.orientation;e&&e.lock&&e.lock(`landscape`).catch(()=>{})}catch{}}function rp(){let e=document.documentElement,t=e.requestFullscreen||e.webkitRequestFullscreen;if(!t)return Promise.reject(Error(`fullscreen unsupported`));try{let n=Promise.resolve(t.call(e,{navigationUI:`hide`}));return n.then(np).catch(()=>{}),n}catch(e){return Promise.reject(e)}}function ip(){let e=document.exitFullscreen||document.webkitExitFullscreen;try{e&&ep()&&e.call(document)}catch{}}function ap(){ep()?ip():rp().catch(()=>{})}var op={sunny:`☀`,cloudy:`☁`,rain:`🌧`,storm:`🌀`},sp=e=>document.getElementById(e),cp=class{constructor(e,t){this.state=e,this.audio=t,this.isTouch=matchMedia(`(pointer: coarse)`).matches,this.modalCount=0,this.zukanOpen=!1,this.settingsOpen=!1,this.pauseOpen=!1,this.mapOpen=!1,this.tutorialOpen=!1,this.guideText=``,this.els={hud:sp(`hud`),prompt:sp(`prompt`),toasts:sp(`toasts`),fade:sp(`fade`),dialogue:sp(`dialogue`),dlgName:sp(`dlg-name`),dlgText:sp(`dlg-text`),choice:sp(`choice`),zukan:sp(`zukan`),map:sp(`map`),settings:sp(`settings`),pause:sp(`pause`),diary:sp(`diary`),title:sp(`title`),ending:sp(`ending`),note:sp(`daynote`),guide:sp(`guide`),tutorial:sp(`tutorial`)}}get modal(){return this.modalCount>0||this.zukanOpen||this.settingsOpen||this.pauseOpen||this.mapOpen||this.tutorialOpen}get touchUI(){return document.body.classList.contains(`touch`)}setGuide(e){(e||``)!==this.guideText&&(this.guideText=e||``,this.els.guide.textContent=this.guideText,this.els.guide.classList.toggle(`on`,!!this.guideText))}updateHUD(e,t){this.els.hud.style.display=`flex`;let n=e.day,r=Au(n);this.els.hud.innerHTML=`<span class="hud-date">8月${n}日 (${ku(n)})</span><span class="hud-time">${e.fmt()}</span><span class="hud-weather">${op[e.weather]} ${e.yudachi?`ゆうだち`:ju[e.weather]}</span>`+(t?`<span class="hud-money">${t.money}えん</span>`:``),this.els.note.textContent=r.note||``,this.els.note.style.opacity=r.note&&e.min<480?1:0}showPrompt(e){e?(this.els.prompt.textContent=this.touchUI?e:`E ${e}`,this.els.prompt.classList.add(`on`),document.body.classList.add(`can-act`)):(this.els.prompt.classList.remove(`on`),document.body.classList.remove(`can-act`))}showTutorial(){return new Promise(e=>{this.tutorialOpen=!0,document.body.classList.add(`tutorial`);let t=this.els.tutorial,n=this.touchUI,r=n?`タップ`:`クリック`,i=n?[{mark:`tut-s1`,html:`<b>あるく</b><br>↙ ひだりしたの まるに ゆびを おいて、いきたい ほうへ スライド。<br><small>そとまで ぐーっと たおすと はしれるよ</small>`},{mark:`tut-s2`,html:`<b>しらべる・はなす</b><br>ひとや ものに ちかづくと あんないが でて、↘「しらべる」ボタンが <b>きいろく ひかる</b>。ひかったら おそう。<br><small>はなす・むしとり・つり・かいもの、ぜんぶ この ボタン</small>`},{mark:``,html:`<b>カメラを まわす</b><br>ボタンの ない ところを よこに <b>ドラッグ</b>すると、まわりを ぐるっと 見まわせる。<br><small>スティック うえ = カメラの おくへ すすむよ</small>`},{mark:`tut-s3`,html:`<b>ずかん・ちず</b><br>↘「ずかん」で つかまえた むしと さかなの きろく、「ちず」で まちの ちずが みられる。<br><small>かいわは がめんの どこを タップしても すすむよ</small>`}]:[{mark:``,html:`<b>あるく</b><br><b>WASD</b> か やじるしキーで あるく。<br><b>Shift</b> を おしながらだと はしれる。`},{mark:``,html:`<b>しらべる・はなす</b><br>ひとや ものに ちかづくと、したに あんないが でる。<br>そのとき <b>E キー</b>で しらべる・はなす。`},{mark:``,html:`<b>そのほか</b><br><b>Q / R</b> か 画面ドラッグで カメラを まわす<br><b>Z</b> ずかん / <b>X</b> ちず / <b>P</b> ポーズ / <b>M</b> おと`}],a=0,o=()=>document.body.classList.remove(`tut-s1`,`tut-s2`,`tut-s3`),s=()=>{o(),i[a].mark&&document.body.classList.add(i[a].mark),t.innerHTML=`<div class="tut-bubble">${i[a].html}<div class="tut-next">${a===i.length-1?`${r}して はじめる`:`${r}で つぎへ ▼`}</div></div>`},c=n=>{n.type===`keydown`&&![`KeyE`,`Space`,`Enter`].includes(n.code)||(n.preventDefault(),this.audio.sfx(`page`),a++,a>=i.length?(window.removeEventListener(`pointerdown`,c),window.removeEventListener(`keydown`,c,!0),o(),t.classList.remove(`on`),document.body.classList.remove(`tutorial`),setTimeout(()=>{this.tutorialOpen=!1,e()},60)):s())};s(),t.classList.add(`on`),setTimeout(()=>{window.addEventListener(`pointerdown`,c),window.addEventListener(`keydown`,c,!0)},350)})}toast(e,t){let n=document.createElement(`div`);n.className=`toast`+(t===`gold`?` gold`:``),n.textContent=e,this.els.toasts.appendChild(n),requestAnimationFrame(()=>n.classList.add(`show`)),setTimeout(()=>{n.classList.remove(`show`),setTimeout(()=>n.remove(),500)},3400)}say(e,t){return new Promise(n=>{this.modalCount++;let r=this.els.dialogue;this.els.dlgName.textContent=e,r.classList.add(`on`);let i=0,a=()=>{this.els.dlgText.textContent=t[i]},o=e=>{e.type===`keydown`&&![`KeyE`,`Space`,`Enter`].includes(e.code)||(e.preventDefault(),this.audio.sfx(`page`),i++,i>=t.length?(window.removeEventListener(`keydown`,o,!0),window.removeEventListener(`pointerdown`,o),r.classList.remove(`on`),setTimeout(()=>{this.modalCount--,n()},60)):a())};a(),setTimeout(()=>{window.addEventListener(`keydown`,o,!0),window.addEventListener(`pointerdown`,o)},120)})}choice(e,t){return new Promise(n=>{this.modalCount++;let r=this.els.choice;r.innerHTML=`<div class="choice-text">${e}</div>`+t.map((e,t)=>`<button class="choice-btn" data-i="${t}">${e}</button>`).join(``),r.classList.add(`on`);let i=0,a=[...r.querySelectorAll(`.choice-btn`)],o=()=>a.forEach((e,t)=>e.classList.toggle(`sel`,t===i));o();let s=e=>{window.removeEventListener(`keydown`,c,!0),r.classList.remove(`on`),setTimeout(()=>{this.modalCount--,n(e)},60)},c=e=>{e.preventDefault(),(e.code===`ArrowUp`||e.code===`KeyW`)&&(i=(i+t.length-1)%t.length,o()),(e.code===`ArrowDown`||e.code===`KeyS`)&&(i=(i+1)%t.length,o()),[`KeyE`,`Space`,`Enter`].includes(e.code)&&s(i),e.code===`Escape`&&s(t.length-1)};a.forEach(e=>e.addEventListener(`pointerdown`,()=>s(+e.dataset.i))),setTimeout(()=>window.addEventListener(`keydown`,c,!0),120)})}fade(e,t=900){return new Promise(n=>{this.els.fade.style.transitionDuration=t+`ms`,this.els.fade.style.opacity=+!!e,setTimeout(n,t+30)})}async fadePulse(){this.modalCount++,await this.fade(!0,400),await new Promise(e=>setTimeout(e,350)),await this.fade(!1,400),this.modalCount--}toggleMap(e){this.mapOpen=!this.mapOpen,this.mapOpen?(this.renderMap(e),this.els.map.classList.add(`on`),this.audio.sfx(`page`)):this.els.map.classList.remove(`on`)}renderMap(e){this.els.map.innerHTML=`
      <div class="map-inner">
        <div class="map-head">🗾 あやがわちょうの ちず<span class="map-close">とじる [X]</span></div>
        <canvas width="860" height="580"></canvas>
      </div>`,this.els.map.querySelector(`.map-close`).addEventListener(`pointerdown`,()=>this.toggleMap());let t=this.els.map.querySelector(`canvas`),n=t.getContext(`2d`),r=t.width,i=t.height,a=e=>(e+232)/464*(r-60)+30,o=e=>(e+212)/360*(i-60)+30;n.fillStyle=`#eee5c8`,n.fillRect(0,0,r,i),n.fillStyle=`#cfe0ae`;let s=(e,t,r)=>{n.beginPath(),n.arc(a(e),o(t),r,0,7),n.fill()};s(-140,-152,52),s(-200,-130,70),s(-60,-165,62),s(62,-154,48),s(155,-147,50),s(Hd.x,Hd.z,40),s(-210,-40,46),s(-232,40,40),s(210,110,44),n.fillStyle=`#b8d194`,s(-60,-165,34),n.fillStyle=`#cfe0ae`,n.fillStyle=`#d9e6a8`;let c=(e,t,r,i)=>n.fillRect(a(e)-r/2,o(t)-i/2,r,i);c(31,61,90,46),c(103,35,62,42),c(-135,-54,42,30),n.strokeStyle=`#d3bd8e`,n.lineCap=`round`,n.lineJoin=`round`;for(let e of Xd)n.lineWidth=Math.max(3,e.w*1.6),n.beginPath(),e.pts.forEach(([e,t],r)=>r?n.lineTo(a(e),o(t)):n.moveTo(a(e),o(t))),n.stroke();n.strokeStyle=`#8fbdd8`,n.lineWidth=12*1.7,n.beginPath();for(let e=-232;e<=232;e+=8)n[e===-232?`moveTo`:`lineTo`](a(e),o(zd(e)));n.stroke(),n.fillStyle=`#8fbdd8`,n.beginPath(),n.arc(a(Y.x),o(Y.z),Y.r*1.7,0,7),n.fill(),n.fillStyle=`#a5713f`;for(let e of[20,Bd,Vd])n.fillRect(a(e)-4,o(zd(e))-13,8,26);n.fillStyle=`#9a948a`;for(let e=0;e<4;e++)n.beginPath(),n.arc(a(48),o(zd(48))+(e-1.5)*6,2.2,0,7),n.fill();n.strokeStyle=`#7a7268`,n.lineWidth=4,n.beginPath(),$d.forEach(([e,t],r)=>r?n.lineTo(a(e),o(t)):n.moveTo(a(e),o(t))),n.stroke(),n.strokeStyle=`#f2ead2`,n.lineWidth=2,n.setLineDash([7,7]),n.beginPath(),$d.forEach(([e,t],r)=>r?n.lineTo(a(e),o(t)):n.moveTo(a(e),o(t))),n.stroke(),n.setLineDash([]);let l=[[113,16,`🏠`,`ばあちゃんち`],[109,-10,`🚉`,`すえのえき`],[-21,-25,`🚉`,`たきのみやえき`],[0,-60,`⛩`,`てんまんぐう`],[-49,63,`🏫`,`しょうがっこう`],[70,-34,`🛒`,`モール`],[-16,25,`🍧`,`しょうてんがい`],[130,78,``,`ほうじょういけ`],[143,20,`🪦`,`おはか`],[-135,-56,``,`たなだ`],[-181,-6,`🍎`,`りんごえん`],[160,61,`🌄`,`みはらしだい`],[21,31,`🌻`,`ひまわり`],[-70,42,``,`こんぴらかいどう`],[-60,-168,`⛰`,`つつみやま`],[-33,-129,``,`たきつぼ`]];n.textAlign=`center`;for(let[e,t,r,i]of l)r&&(n.font=`17px sans-serif`,n.fillStyle=`#000`,n.fillText(r,a(e),o(t)+5)),n.font=`bold 11px sans-serif`,n.strokeStyle=`rgba(247,239,220,0.85)`,n.lineWidth=3,n.strokeText(i,a(e),o(t)+17),n.fillStyle=`#5a4a30`,n.fillText(i,a(e),o(t)+17);if(n.font=`bold 12px sans-serif`,n.fillStyle=`#4a7898`,n.fillText(`あ や が わ`,a(-60),o(zd(-60))+4),n.font=`bold 12px sans-serif`,n.fillStyle=`#8a7455`,n.fillText(`→ きた (すえ)`,r-70,22),n.fillText(`← みなみ (あやかみ)`,92,22),e){let t=a(e.x),r=o(e.z);n.beginPath(),n.arc(t,r,7,0,7),n.fillStyle=`#e8503a`,n.fill(),n.lineWidth=2.5,n.strokeStyle=`#fff`,n.stroke(),n.font=`bold 12px sans-serif`,n.strokeStyle=`rgba(247,239,220,0.9)`,n.lineWidth=4,n.strokeText(`いま ここ!`,t,r-12),n.fillStyle=`#c03a28`,n.fillText(`いま ここ!`,t,r-12)}}toggleZukan(){this.zukanOpen=!this.zukanOpen,this.zukanOpen?(this.renderZukan(`bugs`),this.els.zukan.classList.add(`on`),this.audio.sfx(`page`)):this.els.zukan.classList.remove(`on`)}renderZukan(e){let t=this.state,n=e===`bugs`?Cu:wu,r=e===`bugs`?t.bugs:t.fish,i=n.map(e=>{let t=r[e.id]||0;return t?`<div class="zcell"><b>${e.name}</b><span class="zn">×${t}</span><small>${e.desc}</small></div>`:`<div class="zcell empty">???</div>`}).join(``);e===`bugs`?bu(t):xu(t),this.els.zukan.innerHTML=`
      <div class="zukan-inner">
        <div class="ztabs">
          <button class="ztab ${e===`bugs`?`sel`:``}" data-t="bugs">むし ${bu(t)}/${Cu.length}</button>
          <button class="ztab ${e===`fish`?`sel`:``}" data-t="fish">さかな ${xu(t)}/${wu.length}</button>
          <span class="zclose">とじる [Z]</span>
        </div>
        <div class="zgrid">${i}</div>
        <div class="zfoot">ラジオたいそう ${t.stamps}かい ・ あさうどん ${t.udon}はい</div>
      </div>`,this.els.zukan.querySelectorAll(`.ztab`).forEach(e=>e.addEventListener(`pointerdown`,()=>this.renderZukan(e.dataset.t))),this.els.zukan.querySelector(`.zclose`).addEventListener(`pointerdown`,()=>this.toggleZukan())}togglePause(){this.pauseOpen=!this.pauseOpen,this.pauseOpen?(this.els.pause.innerHTML=`
        <div class="pause-inner">
          <div class="pause-big">⏸ ポーズちゅう</div>
          <div class="pause-sub">じかんは とまっとるよ。<br>ゆっくり きゅうけいしてな</div>
          <button class="pause-resume">つづける</button>
        </div>`,this.els.pause.querySelector(`.pause-resume`).addEventListener(`pointerdown`,e=>{e.preventDefault(),this.togglePause()}),this.els.pause.classList.add(`on`),this.audio.sfx(`page`)):(this.els.pause.classList.remove(`on`),this.audio.sfx(`page`))}toggleSettings(){this.settingsOpen=!this.settingsOpen,this.settingsOpen?(this.renderSettings(),this.els.settings.classList.add(`on`),this.audio.sfx(`page`)):this.els.settings.classList.remove(`on`)}renderSettings(){let e=[{key:`sound`,label:`おと`,desc:`BGM と こうかおん (M キーでも きりかえ)`},{key:`camBob`,label:`カメラのゆれ`,desc:`あるくときの じょうげのゆれ。よいやすいひとは OFF`}],t=tp()?`
      <div class="set-row">
        <div class="set-label">ぜんがめん<small>URLバーを かくして よこ画面で あそぶ</small></div>
        <button class="set-btn ${ep()?`on`:``}" data-fs="1">${ep()?`ON`:`OFF`}</button>
      </div>`:``;this.els.settings.innerHTML=`
      <div class="set-inner">
        <div class="set-head">せってい <span class="set-close">とじる</span></div>
        ${e.map(e=>`
          <div class="set-row">
            <div class="set-label">${e.label}<small>${e.desc}</small></div>
            <button class="set-btn ${Nf[e.key]?`on`:``}" data-k="${e.key}">${Nf[e.key]?`ON`:`OFF`}</button>
          </div>`).join(``)}
        ${t}
        <div class="set-row">
          <div class="set-label">そうさガイド<small>あそびかたの せつめいを もういちど みる</small></div>
          <button class="set-btn" data-tut="1">みる</button>
        </div>
      </div>`,this.els.settings.querySelectorAll(`.set-btn[data-k]`).forEach(e=>e.addEventListener(`pointerdown`,()=>{let t=e.dataset.k;Nf[t]=!Nf[t],Pf(),t===`sound`&&this.audio.setMuted(!Nf.sound),this.audio.sfx(`page`),this.renderSettings()}));let n=this.els.settings.querySelector(`.set-btn[data-fs]`);n&&n.addEventListener(`pointerdown`,()=>{ap(),this.audio.sfx(`page`),setTimeout(()=>{this.settingsOpen&&this.renderSettings()},120)}),this.els.settings.querySelector(`.set-btn[data-tut]`).addEventListener(`pointerdown`,()=>{this.toggleSettings(),this.showTutorial()}),this.els.settings.querySelector(`.set-close`).addEventListener(`pointerdown`,()=>this.toggleSettings())}diaryMotif(e){let t=t=>e.today.some(e=>e.includes(t)),n=Au(e.day);return n.event===`matsuri`||t(`はなび`)||t(`やたい`)?`hanabi`:n.event===`hotaru`&&(t(`ホタル`)||t(`ボタル`))||t(`ホタル`)?`hotaru`:t(`ながれぼし`)||t(`ほしぞら`)||t(`ゆうひをめにやきつけた`)?`hoshi`:t(`ウナギ`)||t(`つり`)||t(`さかな`)||t(`ザリガニ`)?`fishing`:t(`むしずもう`)||t(`カブト`)||t(`クワガタ`)||t(`むしとり`)||t(`セミ`)||t(`チョウ`)||t(`トンボ`)?`bug`:t(`すいか`)?`suika`:t(`かわであそんだ`)||t(`みずきり`)||t(`およ`)?`kawa`:t(`こうしえん`)?`radio`:t(`たいそう`)?`taiso`:t(`おはかまいり`)||t(`むかえび`)||t(`おくりび`)?`obon`:`natsu`}diaryPicture(e,t){let n=document.createElement(`canvas`);n.width=300,n.height=190;let r=n.getContext(`2d`),i=(t*131+e.length*37+7)%233280,a=()=>(i=(i*9301+49297)%233280,i/233280),o=e=>(a()-.5)*e;r.lineCap=`round`,r.lineJoin=`round`;let s=(e,t,n)=>{r.strokeStyle=t,r.lineWidth=n,r.beginPath(),e.forEach((e,t)=>{let n=e[0]+o(1.6),i=e[1]+o(1.6);t?r.lineTo(n,i):r.moveTo(n,i)}),r.stroke()},c=(e,t,n,i)=>{r.fillStyle=i,r.beginPath(),r.arc(e,t,n,0,7),r.fill()},l=(e,t)=>{r.fillStyle=t,r.beginPath(),e.forEach((e,t)=>t?r.lineTo(e[0],e[1]):r.moveTo(e[0],e[1])),r.closePath(),r.fill()},u=(e,t)=>{let n=r.createLinearGradient(0,0,0,190);n.addColorStop(0,e||`#8fd0f0`),n.addColorStop(1,t||`#dff2ec`),r.fillStyle=n,r.fillRect(0,0,300,190)},d=()=>{let e=r.createLinearGradient(0,0,0,190);e.addColorStop(0,`#0f1f40`),e.addColorStop(1,`#3a2a56`),r.fillStyle=e,r.fillRect(0,0,300,190);for(let e=0;e<45;e++)c(a()*300,a()*190*.78,a()*1.2+.3,`rgba(255,255,240,${.4+a()*.6})`)},f=(e,t)=>{c(e,t,15,`#ffd83a`),r.strokeStyle=`#ffcc2a`,r.lineWidth=3;for(let n=0;n<8;n++){let i=n/8*6.28;r.beginPath(),r.moveTo(e+Math.cos(i)*19,t+Math.sin(i)*19),r.lineTo(e+Math.cos(i)*27,t+Math.sin(i)*27),r.stroke()}},p=(e,t)=>{r.fillStyle=`#fff`,c(e,t,11,`#fff`),c(e+13,t+3,14,`#fff`),c(e+28,t,11,`#fff`),r.fillRect(e,t,28,12)},m=(e,t)=>{r.fillStyle=e,r.beginPath(),r.moveTo(0,t);for(let e=0;e<=300;e+=22)r.lineTo(e,t+o(4));r.lineTo(300,190),r.lineTo(0,190),r.closePath(),r.fill()};if(e===`hanabi`){d(),m(`#20202e`,158),[130,168].forEach(e=>{s([[e,158],[e,84]],`#7a4a2c`,4)}),r.fillStyle=`#d24b3a`,r.fillRect(120,74,58,12);let e=(e,t,n)=>{for(let r=0;r<12;r++){let i=r/12*6.28;s([[e,t],[e+Math.cos(i)*22,t+Math.sin(i)*22]],n,2),c(e+Math.cos(i)*24,t+Math.sin(i)*24,2,n)}};e(72,54,`#ff6b8a`),e(210,44,`#ffe066`),e(150,96,`#7ad0ff`)}else if(e===`hotaru`){d(),l([[0,190],[0,118],[70,78],[140,120],[140,190]],`#123320`),l([[150,190],[150,130],[230,92],[300,128],[300,190]],`#0e2a1a`);for(let e=0;e<20;e++){let e=40+a()*230,t=70+a()*100;c(e,t,5.5,`rgba(180,255,120,0.28)`),c(e,t,2.4,`rgba(210,255,150,0.95)`)}}else if(e===`hoshi`){let e=r.createLinearGradient(0,0,0,190);e.addColorStop(0,`#132b58`),e.addColorStop(1,`#c96a4a`),r.fillStyle=e,r.fillRect(0,0,300,190);for(let e=0;e<40;e++)c(a()*300,a()*190*.6,a()*1.2+.3,`rgba(255,255,240,0.9)`);s([[60,40],[130,72]],`#fff`,2),c(60,40,2.5,`#fff`),m(`#2a2434`,150)}else if(e===`fishing`)u(),f(44,34),p(200,30),r.fillStyle=`#4aa6d6`,r.fillRect(0,116,300,74),m(`#6fae4a`,118),s([[64,62],[150,112]],`#8a5a2a`,3),s([[150,112],[150,138]],`#eef`,1.4),c(150,142,6,`#e0662f`),l([[206,128],[232,118],[244,130],[230,138]],`#cdd9e0`),c(214,126,2,`#333`),s([[150,116],[150,108]],`#cdeefb`,2);else if(e===`bug`)u(),f(250,34),p(38,28),m(`#7ec24f`,132),l([[62,132],[70,58],[86,58],[82,132]],`#7a4a22`),c(80,52,33,`#4e9e3e`),c(54,60,22,`#57ab45`),c(106,60,22,`#57ab45`),c(72,100,11,`#241610`),c(72,88,7,`#241610`),s([[72,84],[72,72]],`#241610`,3),s([[72,84],[66,74]],`#241610`,3),s([[150,138],[182,78]],`#a06a2c`,4),r.strokeStyle=`rgba(255,255,255,0.55)`,r.lineWidth=2,r.beginPath(),r.arc(186,70,15,0,7),r.stroke();else if(e===`suika`){u(),f(42,30),p(210,32),m(`#7ec24f`,138),r.fillStyle=`#e4edf2`,r.fillRect(84,136,132,18),r.fillStyle=`#2e7d32`,r.beginPath(),r.arc(150,138,30,Math.PI,0),r.fill(),r.fillStyle=`#ea4b5a`,r.beginPath(),r.arc(150,138,23,Math.PI,0),r.fill();for(let e=0;e<6;e++)c(128+e*9,128+o(6),2,`#241610`)}else if(e===`kawa`){u(),f(252,30),p(40,30),r.fillStyle=`#5bb0da`,r.fillRect(0,108,300,82),m(`#6fae4a`,110);for(let e=0;e<6;e++)c(28+e*46,132+o(10),7,`#9a8f7a`);s([[150,108],[150,88]],`#cdeefb`,2),s([[144,104],[134,90]],`#cdeefb`,2),s([[156,104],[166,90]],`#cdeefb`,2)}else if(e===`radio`)u(`#9fd8f2`,`#eaf6e6`),m(`#8fbf5a`,150),r.fillStyle=`#b5763b`,r.fillRect(96,78,100,62),r.fillStyle=`#8a5730`,r.fillRect(96,78,100,8),r.fillStyle=`#2e2018`,r.beginPath(),r.arc(130,112,17,0,7),r.fill(),c(178,98,5,`#eee`),c(178,124,5,`#eee`),r.strokeStyle=`#fff`,r.lineWidth=2,[16,26,36].forEach(e=>{r.beginPath(),r.arc(200,96,e,-.6,.6),r.stroke()}),s([[186,78],[216,50]],`#777`,2);else if(e===`taiso`)u(`#bfe6f5`,`#f3eecf`),f(244,30),m(`#8fbf5a`,142),c(146,78,8,`#f0c090`),s([[146,86],[146,116]],`#3a6ea5`,5),s([[146,94],[128,70]],`#f0c090`,4),s([[146,94],[164,70]],`#f0c090`,4),s([[146,116],[135,142]],`#333`,4),s([[146,116],[157,142]],`#333`,4),r.fillStyle=`#c46`,r.fillRect(70,108,22,32),c(81,100,7,`#241610`);else if(e===`obon`)u(`#a9c6e0`,`#e7ddc6`),f(246,30),m(`#8aa86a`,142),r.fillStyle=`#9a9a9a`,r.fillRect(132,88,30,56),r.fillStyle=`#7a7a7a`,r.fillRect(122,140,50,8),c(114,138,5,`#e55d6a`),c(180,138,5,`#e55d6a`),s([[147,88],[152,60],[143,40]],`rgba(210,210,210,0.75)`,3);else{u(),f(252,34),p(38,26),p(150,40),m(`#7ec24f`,138),r.fillStyle=`#ead9b2`,r.fillRect(56,96,72,46),l([[50,96],[92,66],[134,96]],`#b5563a`),r.fillStyle=`#7a4a2a`,r.fillRect(84,118,18,24),r.fillStyle=`#bfe3ff`,r.fillRect(110,104,14,14),s([[210,142],[210,96]],`#3f8f3f`,4);for(let e=0;e<10;e++){let t=e/10*6.28;c(210+Math.cos(t)*15,90+Math.sin(t)*15,4.5,`#ffcf3a`)}c(210,90,11,`#f0b400`),c(210,90,6,`#7a4a1a`)}return r.strokeStyle=`rgba(60,50,34,0.35)`,r.lineWidth=3,r.strokeRect(2,2,296,186),n.toDataURL(`image/png`)}diaryText(e){let t=this.state,n=Au(t.day),r={sunny:[`きょうも すごく あつかった。`,`あさから セミが ワシワシ ないていた。`,`そらが まぶしいくらい はれていた。`],cloudy:[`きょうは くもり。ちょっとだけ すずしかった。`,`そらが ずっと ねずみいろだった。`],rain:[`きょうは あめ。かえるが おおよろこびで ないていた。`,`あめの おとを ききながら すごした。`],storm:[`きょうは たいふう! かぜが ゴーゴー いって、いえが ミシミシ いった。`]}[n.weather],i=r[t.day%r.length];t.today.some(e=>e.includes(`ゆうだちにあった`))&&(i=`きょうは とつぜん ゆうだちが きた。セミが いっせいに だまって、びっくりした。`);let a;if(t.today.length===0)a=`きょうは なんにも しなかった。でも、それも なつやすみだと おもう。`;else{let e=t.today.slice(0,5),n=[`それから、`,`あと、`,`それと、`,`そのあと、`];a=`きょうは、`+e[0]+`。`+e.slice(1).map((e,t)=>`${n[t%n.length]}${e}。`).join(` `)}let o=[`あしたは なにを しようかな。`,`はやく あしたに ならないかな。`,`おばあちゃんの ごはんは、なんで あんなに おいしいんだろう。`,`とうきょうの ともだちは、いま なにしてるかな。`,`ねるまえの むぎちゃが、いちばん おいしい きがする。`],s=o[t.day%o.length];if(t.today.some(e=>e.includes(`むしずもう`)&&e.includes(`かった`))&&(s=`ケンタの よこづなに かった。ちょっと じまんの あいぼうだ。`),t.today.some(e=>e.includes(`ウナギ`))&&(s=`げんじいに はやく じまんしに いこう。`),t.today.some(e=>e.includes(`みずきり`))&&(s=`いしは ひらたいのが いい。いまの きろくは ${t.mizukiri||0}だんだ。`),t.today.some(e=>e.includes(`すいかわりでいっぱつ`))&&(s=`めかくししてても わかった。すいかは においが するんだ。`),t.today.some(e=>e.includes(`かくれんぼ`))&&(s=`こんどは ぼくが かくれる ばんだ。ぜったい みつからない ばしょを かんがえておこう。`),t.today.some(e=>e.includes(`はなび`))&&(s=`せんこうはなびの ひだまは、おちるとき ちょっと さびしい。`),t.today.some(e=>e.includes(`ながれぼし`))&&(s=`ねがいごとは いえなかったけど、みられただけで いいことが ありそうだ。`),t.today.some(e=>e.includes(`はがき`))&&(s=`おかあさんの じで なまえを よばれると、なんだか くすぐったい。`),t.today.some(e=>e.includes(`むしクイズにぜんもん`))&&(s=`ミナの クイズに ぜんぶ こたえられた。ずかんは よんでおくものだ。`),t.today.some(e=>e.includes(`ゆうだちにあった`))&&(s=`ゆうだちの あとの つちの におい。あれが なつの においだと おもう。`),t.today.some(e=>e.includes(`にじをみた`))&&(s=`にじの ねもとには なにが あるんだろう。こんど ケンタと さがしに いこう。`),t.today.some(e=>e.includes(`ザリガニをつかまえた`))&&(s=`ザリガニの はさみは みかけだおしじゃ なかった。ちょっと いたかった。`),t.today.some(e=>e.includes(`ひみつきちのメンバー`))&&(s=`ひみつきちの ばしょは、ぜったいの ひみつだ。にっきにも かかない。……かいちゃった。`),t.today.some(e=>e.includes(`ひみつきちで`))&&(s=`きちに いると、なんでか ひみつの はなしが したくなる。`),t.today.some(e=>e.includes(`おはかまいり`))&&(s=`あったことのない ひいじいちゃんに、こころの なかで あいさつした。`),t.today.some(e=>e.includes(`むかえび`))&&(s=`けむりに のって かえってくるなんて、ちょっと かっこいいと おもった。`),t.today.some(e=>e.includes(`おくりび`))&&(s=`「また らいねん」って ばあちゃんが いってた。わかれは かなしいだけじゃ ないんだ。`),t.today.some(e=>e.includes(`つりざお`))&&(s=`あったことのない じいちゃんの つりざお。にぎると、なんだか せなかが しゃんとする。`),t.today.some(e=>e.includes(`げんじいに じいちゃんの 竿`))&&(s=`げんじいの 30ねんは、ゆめじゃなくて やくそくだった。しょうぶは、まだ おわってない。`),t.today.some(e=>e.includes(`がっきゅうぶんしゅう`))&&(s=`おかあさんにも、ぼくと おなじ なつやすみが あったんだ。かえったら、はなそう。`),t.today.some(e=>e.includes(`かわであそんだ`))&&(s=`みずの つめたさと、いしの あたたかさ。なつは、からだで おぼえるものだと おもう。`),t.today.some(e=>e.includes(`こうしえん`))&&(s=`ラジオの むこうで、しらない せんしゅたちが ないていた。なつは、だれにとっても みじかい。`),t.today.some(e=>e.includes(`とうちゃんを、いっしょに 見おくった`))&&(s=`ケンタは あめのせいだって いってた。……ぼくも、みてないことにした。`),t.today.some(e=>e.includes(`とうちゃんが お盆で`))&&(s=`ケンタが あんなに うれしそうな かお、はじめて みた。おぼんって、いいな。`),t.today.some(e=>e.includes(`せがれが まつり`))&&(s=`つがなくても、まつりの ばんに ならんで 立てたら いい。げんさんの ことばが のこってる。`),t.today.some(e=>e.includes(`ユキちゃんの はなし`))&&(s=`ミナの ともだちは、とおくへ いってしまった。ぼくも、もうすぐ とおくへ かえる。`),t.today.some(e=>e.includes(`ユキちゃんから てがみ`))&&(s=`はなれても ともだち。ひまわりが、そのしるし。……ぼくにも、そんなの できるかな。`),t.day>=24&&t.day<29){let e=[`せみの こえが、すこし かわった きがする。`,`カレンダーを みたら、のこりの ひにちを かぞえてしまった。`,`ひぐらしの こえを きくと、なんで むねの おくが すーすーするんだろう。`,`かえったら、ケンタや ミナと あそべなくなる。かんがえないように しよう。`,`ゆうやけが きょうは やけに きれいだった。`];s=e[t.day%e.length]}return t.today.some(e=>e.includes(`ゆうひをめにやきつけた`))&&(s=`めを つぶると、さっきの ゆうやけが まだ みえる。「やきつける」って、こういうことか。`),t.day>=29&&t.day<31&&(s=`なつやすみも あと すこしだ。なんだか むねが きゅっとする。`),t.day===30&&(s=`あしたで さいごだ。ぜったい わすれないぞ、この なつ。`),n.event===`matsuri`&&(s=`はなびが きれいだった。ずっと おぼえていたいな。`),n.event===`hotaru`&&t.today.some(e=>e.includes(`ホタル`)||e.includes(`ボタル`))&&(s=`ホタルの ひかりが ゆめみたいだった。`),{header:`8月${t.day}日 (${ku(t.day)}) ${ju[n.weather]}`,text:`${i} ${a} ${s}`}}showDiary(e){return new Promise(t=>{this.modalCount++;let{header:n,text:r}=this.diaryText(e),i=this.state,a=this.diaryMotif(i);i.diary.some(e=>e.day===i.day)||i.diary.push({day:i.day,header:n,text:r,motif:a});let o=this.diaryPicture(a,i.day);this.els.diary.innerHTML=`
        <div class="diary-page">
          <div class="diary-head">${n}</div>
          <img class="diary-pic" src="${o}" alt="えにっき">
          <div class="diary-body">${r}</div>
          <div class="diary-next">— ${this.isTouch?`タッチ`:`E`} で つぎのひへ —</div>
        </div>`,this.els.diary.classList.add(`on`),this.audio.sfx(`sleep`);let s=e=>{![`KeyE`,`Space`,`Enter`].includes(e.code)&&e.type===`keydown`||(window.removeEventListener(`keydown`,s,!0),this.els.diary.removeEventListener(`pointerdown`,s),this.els.diary.classList.remove(`on`),this.modalCount--,t())};setTimeout(()=>{window.addEventListener(`keydown`,s,!0),this.els.diary.addEventListener(`pointerdown`,s)},900)})}showDiaryBook(){return new Promise(e=>{this.modalCount++;let t=this.state,n=t.diary.length-1,r=()=>{window.removeEventListener(`keydown`,a,!0),this.els.diary.classList.remove(`on`),setTimeout(()=>{this.modalCount--,e()},60)},i=()=>{let e=t.diary[n],a=this.diaryPicture(e.motif||`natsu`,e.day);this.els.diary.innerHTML=`
          <div class="diary-page">
            <div class="diary-head">${e.header}</div>
            <img class="diary-pic" src="${a}" alt="えにっき">
            <div class="diary-body">${e.text}</div>
            <div style="display:flex;gap:10px;justify-content:center;align-items:center;margin-top:16px;flex-wrap:wrap">
              <button class="choice-btn" data-n="-1" style="${n===0?`opacity:.35`:``}">← まえのひ</button>
              <span style="opacity:.7">${n+1} / ${t.diary.length}</span>
              <button class="choice-btn" data-n="1" style="${n===t.diary.length-1?`opacity:.35`:``}">つぎのひ →</button>
              <button class="choice-btn" data-n="x">とじる</button>
            </div>
          </div>`,this.els.diary.querySelectorAll(`button`).forEach(e=>e.addEventListener(`pointerdown`,a=>{if(a.stopPropagation(),e.dataset.n===`x`)return r();let o=n+Number(e.dataset.n);o>=0&&o<t.diary.length&&(n=o,this.audio.sfx(`page`),i())}))},a=e=>{[`KeyA`,`ArrowLeft`].includes(e.code)&&n>0?(n--,this.audio.sfx(`page`),i()):[`KeyD`,`ArrowRight`].includes(e.code)&&n<t.diary.length-1?(n++,this.audio.sfx(`page`),i()):[`KeyE`,`Escape`,`Enter`,`Space`].includes(e.code)&&r(),e.preventDefault()};i(),this.els.diary.classList.add(`on`),setTimeout(()=>window.addEventListener(`keydown`,a,!0),200)})}async showStory(e){this.modalCount++,this.els.ending.classList.add(`on`);for(let t of e)await new Promise(e=>{this.els.ending.innerHTML=`<div class="end-page">${t}<div class="diary-next">— ${this.isTouch?`タッチ`:`E`} で つづく —</div></div>`;let n=t=>{t.type===`keydown`&&![`KeyE`,`Space`,`Enter`].includes(t.code)||(window.removeEventListener(`keydown`,n,!0),this.els.ending.removeEventListener(`pointerdown`,n),e())};setTimeout(()=>{window.addEventListener(`keydown`,n,!0),this.els.ending.addEventListener(`pointerdown`,n)},900)}),this.audio.sfx(`page`);this.els.ending.classList.remove(`on`),this.modalCount--}showTitle(e,t){return new Promise(n=>{this.modalCount++,this.els.title.innerHTML=`
        <div class="title-inner">
          <div class="title-sub">かがわけん あやがわちょう ものがたり</div>
          <h1 class="title-main">あやがわの夏</h1>
          <div class="title-menu">
            <button class="title-btn" data-a="new">はじめから</button>
            ${e?`<button class="title-btn" data-a="continue">つづきから</button>`:``}
            ${t?`<button class="title-btn" data-a="album">おもいでアルバム</button>`:``}
          </div>
          <div class="title-help">WASD/やじるし: あるく ・ Shift: はしる ・ E: しらべる/はなす ・ Z: ずかん ・ X: ちず ・ M: おと</div>
          <div class="title-note">クリックすると おとが でます</div>
        </div>`,this.els.title.classList.add(`on`),this.els.title.querySelectorAll(`.title-btn`).forEach(e=>e.addEventListener(`pointerdown`,()=>{if(this.audio.init(),this.audio.sfx(`catch`),this.isTouch)try{let e=document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();e&&e.then&&e.then(()=>{if(screen.orientation&&screen.orientation.lock)return screen.orientation.lock(`landscape`)}).catch(()=>{})}catch{}this.els.title.classList.remove(`on`),this.modalCount--,n(e.dataset.a)}))})}async showAlbum(e){if(!e)return;this.modalCount++;let t=Object.keys(e.bugs||{}).length,n=Object.keys(e.fish||{}).length,r=Object.keys(e.caps||{}).length,i=Object.values(e.friend||{}).filter(e=>e>=3).length,a=[`<span class="end-title">おもいでアルバム</span><br><br>あの なつの、31にちの きろく。`,`<div class="end-stats">
        <div>つかまえた むし …… ${t} しゅるい</div>
        <div>つった さかな …… ${n} しゅるい</div>
        <div>あつめた 王冠 …… ${r} しゅるい</div>
        <div>ラジオたいそう …… ${e.stamps||0} かい</div>
        <div>あさうどん …… ${e.udon||0} はい</div>
        <div>みずきり さいこう …… ${e.mizukiri||0} だん</div>
        <div>かきつづけた にっき …… ${(e.diary||[]).length} ページ</div>
        <div>なかよくなった ひと …… ${i} にん</div>
      </div>`],o=e.diary||[],s=[1,6,9,13,20,25,30],c=[];for(let e of s){let t=o.find(t=>t.day===e);t&&c.push(t)}!c.length&&o.length&&c.push(o[0],o[Math.floor(o.length/2)],o[o.length-1]);for(let e of c.filter(Boolean).slice(0,7))a.push(`<div class="diary-head">${e.header}</div><br>${e.text}`);let l=[];e.flags&&(e.flags.rodStory&&l.push(`じいちゃんの 竿で、げんじいと はなした`),e.flags.unagiTold&&l.push(`あやがわの主 (ウナギ) を つりあげた`),e.flags.nushiTold&&l.push(`ほうじょういけの ぬしさまを つりあげた`),e.flags.mukaebi&&l.push(`むかえびと おくりびを たいた`),e.flags.bunshuDone&&l.push(`おかあさんの ぶんしゅうを よんだ`)),l.length&&a.push(`<b>この なつに できたこと</b><br><br>${l.join(`<br>`)}`),a.push(`なんど よみかえしても、<br>あの なつの においが する。<br><br>― おもいでアルバム おしまい ―`),await this.showStory(a),this.modalCount--}async showEnding(){let e=this.state;this.modalCount++;let t=Object.values(e.friend).filter(e=>e>=3).length,n=Object.keys(e.flags).filter(e=>e.startsWith(`secret_`)).length,r=[`8月31日。<br><br>ばあちゃんが 駅まで おくってくれた。<br>ことでんが ホームに すべりこんでくる。`],i=[];(e.friend.kenta||0)>=6?i.push(`「おーい!!」<br>ケンタが じてんしゃで つっこんできた。<br>「これ! よこづな つれてけ! 東京で さいきょうに なれ!!」<br>むしかごを おしつけて、はなを すすった。`):e.flags.kentaPapa3&&i.push(`ケンタが ホームの はしまで ならんで はしってきた。<br>「見おくりは なれとんねん! おれ、なかんぞ!!」<br><br>……うん。しっとる。ぼくも、なかない。`),e.flags.keyholderGiven?i.push(`ミナが かばんを もちあげて みせた。<br>ことでんの キーホルダーが ゆれとる。<br>「ちゃんと つけとるけんね。……また来年、ぜったいやで」`):e.flags.minaYuki2&&i.push(`ミナが ホームまで はしってきた。<br>「たね、うえてや。ぜったいやで」<br>したを むいて、それだけ いうと、<br>くるっと せなかを むけて はしっていった。`),e.flags.unagiTold&&i.push(`かいさつの むこうで、げんじいが つりざおを ふっとる。<br>「あやがわの主ー! 来年は わしが 釣るけんのー!」`),i.length&&r.push(...i),r.push(`「また おいでな」<br><br>ばあちゃんの こえが、セミのこえに まじって きこえた。<br>まどのそとで、あやがわの まちが ながれていく。`),e.flags.baachanLetter&&r.push(`でんしゃが うごきだしてから、<br>ポケットの ふうとうを あけた。<br><br>ふるい えんぴつの じで、こう かいてあった。`,`『この なつ、あんたが おってくれて<br>ばあちゃんは まいにちが たからもんじゃった。<br><br>おじいさんもな、きっと ずっと<br>あんたの よこで いっしょに あそびよったよ。』`,`『とうきょうに かえっても、<br>ごはんは ようけ たべること。<br>こまったときは、この なつを おもいだすこと。<br><br>ほんで また、来年の なつも おいでまい。<br>ばあちゃんは ずっと ここに おるけんな。』`,`まどの そとの たんぼが にじんで、<br>よく 見えんくなった。<br><br>……セミの こえだけが、ずっと ついてくる。`),e.flags.nushiTold&&r.push(`つりばこの なかには、げんじいが くれた<br>ぬしさまの うろこが いちまい。<br><br>「30年もんの しょうこじゃ。もっとけ」<br><br>てのひらで、金いろに ひかっとる。`),e.flags.rodStory&&r.push(`ひざの うえには、しんぶんしに つつんだ<br>じいちゃんの つりざお。<br><br>「来年は その竿と しょうぶじゃ」<br>げんじいの こえが、まだ みみに のこっとる。`),e.flags.bunshuDone&&r.push(`かえったら、おかあさんに はなそう。<br><br>ぶんしゅうの こと。かっぱの こと。<br>おかあさんの なつやすみと、<br>ぼくの なつやすみの こと。`),e.flags.minaYuki2&&r.push(`ポケットの おくに、ミナから もらった<br>ひまわりの たねが ひとつぶ。<br><br>「はなれても ともだちや」<br><br>とうきょうの ベランダに うえたら、<br>らいねんの なつ、あやがわと おなじ はなが さく。`),r.push(`<div class="end-stats">
        <div>つかまえた むし …… ${bu(e)} しゅるい</div>
        <div>つった さかな …… ${xu(e)} しゅるい</div>
        <div>ラジオたいそう …… ${e.stamps} かい</div>
        <div>あさうどん …… ${e.udon} はい</div>
        <div>みつけた ひみつのばしょ …… ${n} かしょ</div>
        <div>みずきりの さいこうきろく …… ${e.mizukiri||0} だん</div>
        <div>つかまえた ザリガニ …… ${e.zarigani||0} ひき</div>
        <div>かきつづけた にっき …… ${e.diary.length} ページ</div>
        <div>なかよくなった ひと …… ${t} にん</div>
      </div>`,`── それから、なんねんも たった。<br><br>おとなに なった いまでも、<br>8がつの ゆうがたに セミのこえを きくと、<br>あの なつの においが する。`,`ぼくは きっと、この なつを わすれない。<br><br><span class="end-title">あやがわの夏</span><br><br>― おわり ―`,`この なつの きろくは、タイトルの<br>「おもいでアルバム」に のこりました。<br><br>いつでも、あいに きてください。`),await this.showStory(r),this.modalCount--}},lp=matchMedia(`(pointer: coarse)`).matches,up=new du({antialias:!0});up.setSize(window.innerWidth,window.innerHeight),up.setPixelRatio(Math.min(devicePixelRatio,lp?1.75:2)),up.shadowMap.enabled=!0,up.shadowMap.type=2,up.toneMapping=4,up.toneMappingExposure=1.2,document.body.prepend(up.domElement);var dp=new Of(up,{samples:lp?2:4}),fp=new Rn,pp=new wo(42,innerWidth/innerHeight,.1,600),mp=!1,hp=!1;function gp(){let e=mp?innerHeight:innerWidth,t=mp?innerWidth:innerHeight;pp.aspect=e/t,pp.updateProjectionMatrix(),up.setSize(e,t),dp.setSize()}var _p=matchMedia(`(pointer: coarse)`),vp=null;function yp(){innerHeight>innerWidth&&_p.matches&&!hp?!mp&&vp===null&&(vp=setTimeout(()=>{vp=null,mp=!0,document.body.classList.add(`force-landscape`),gp()},5e3)):(vp!==null&&(clearTimeout(vp),vp=null),mp&&(mp=!1,document.body.classList.remove(`force-landscape`))),gp()}if(window.addEventListener(`resize`,yp),window.addEventListener(`orientationchange`,()=>setTimeout(yp,200)),yp(),_p.matches&&tp()){let e=!0;window.addEventListener(`pointerdown`,()=>{!e||ep()||rp().then(()=>{e=!1}).catch(()=>{})},!0);let t=()=>{ep()?(e=!1,np()):e=!0};document.addEventListener(`fullscreenchange`,t),document.addEventListener(`webkitfullscreenchange`,t)}var bp=document.getElementById(`a2hs`),xp=null;function Sp(){hp&&(hp=!1,bp.classList.remove(`on`),xp&&=(clearTimeout(xp),null),yp())}function Cp(){let e=navigator.userAgent,t=/iPhone|iPod/.test(e)||/iPad/.test(e)||navigator.maxTouchPoints>1&&/Macintosh/.test(e),n=navigator.standalone===!0||matchMedia(`(display-mode: standalone)`).matches;!t||n||tp()||!_p.matches||localStorage.getItem(`ayagawa.a2hs`)!==`1`&&(localStorage.setItem(`ayagawa.a2hs`,`1`),hp=!0,bp.classList.add(`on`),xp=setTimeout(Sp,12e3))}bp.querySelector(`.a2hs-close`).addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),Sp()});var Q=gu(),wp=new Ko,Tp=new Lu(Q),Ep=new $f;Ep.setMuted(!Nf.sound);var $=new cp(Q,Ep);document.getElementById(`opt-toggle`).addEventListener(`pointerdown`,e=>{e.preventDefault(),$.toggleSettings()}),document.getElementById(`pause-toggle`).addEventListener(`pointerdown`,e=>{e.preventDefault(),Ip&&!Lp&&(!$.modal||$.pauseOpen)&&$.togglePause()});var Dp=new kf;new jf(Dp);{let e=up.domElement,t=null,n=0,r=0,i=0;e.addEventListener(`pointerdown`,e=>{t=e.pointerId,n=e.clientX,r=e.clientY,i=0}),window.addEventListener(`pointermove`,e=>{if(t!==e.pointerId)return;let a=document.body.classList.contains(`force-landscape`)?e.clientY-r:e.clientX-n;n=e.clientX,r=e.clientY,i+=Math.abs(a),i>6&&(Dp.yawDelta-=a*.0052)});let a=e=>{t===e.pointerId&&(t=null)};window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a)}var Op=of(fp),kp=new xf(fp),Ap=new Cf(fp,Op,Tp,Ep),jp=new Lf(fp,Op,Dp,pp),Mp=new zf(fp,Op,Q,Tp,$,Ep),Np=new Vf(fp,Op,Q,Tp,$,Ep),Pp=new Wf(fp,Op,Q,Tp,$,Ep),Fp=new Qf(Op,Q,Tp,$,Ep,()=>Up(!1));Fp.player=jp;var Ip=!1,Lp=!1,Rp=!1,zp=0;function Bp(){let e=Op.sub;return e?e===Op.interior?`interior`:e===Op.interior2f?`interior2f`:e===Op.takamatsu?`takamatsu`:e===Op.trainRide?`trainRide`:`field`:`field`}function Vp(){Q._resume={sub:Bp(),x:jp.pos.x,z:jp.pos.z,h:jp.heading},_u(Q)}function Hp(){!Rp||!Ip||Lp||Vp()}document.addEventListener(`visibilitychange`,()=>{document.hidden&&Hp()}),window.addEventListener(`pagehide`,Hp);async function Up(e){if(Lp||!Ip)return;if(Lp=!0,Np.stop(),e&&$.toast(`もう おそい… ねむくなってきた`),Q.day>=31){await $.fade(!0,1600),await Fp.dinner(),Ep.setScene({phase:`night`,weather:`sunny`,festivalNight:!1}),Ep.sfx(`train`),await $.showEnding(),mu({finishedAt:Date.now(),diary:Q.diary,bugs:Q.bugs,fish:Q.fish,caps:Q.caps,stamps:Q.stamps,udon:Q.udon,mizukiri:Q.mizukiri||0,zarigani:Q.zarigani||0,friend:Q.friend,flags:{rodStory:!!Q.flags.rodStory,unagiTold:!!Q.flags.unagiTold,nushiTold:!!Q.flags.nushiTold,bunshuDone:!!Q.flags.bunshuDone,mukaebi:!!Q.flags.mukaebi,okuribi:!!Q.flags.okuribi,minaYuki2:!!Q.flags.minaYuki2,kentaPapa3:!!Q.flags.kentaPapa3}}),yu(),location.reload();return}await $.fade(!0,1200),await Fp.dinner(),await $.showDiary(Tp),Q.day+=1,Q.min=360,Q.today=[],Q.talkedToday={},Mp.clearAll(),Fp.cancelRide(),Op.indoor=!0,Op.sub=Op.interior2f,jp.mesh.position.set(38.9,Op.interior2f.floorY,-1.2),jp.heading=Math.PI/2,jp.mesh.rotation.y=Math.PI/2,jp.snapCamera(),Vp(),await new Promise(e=>setTimeout(e,300)),Q.day===31&&await $.showStory([`8がつ 31にち。<br><br>めが さめたとき、いつもの セミのこえが<br>きのうより とおくに きこえた。<br><br>きょうが、さいごの ひだ。`]),await $.fade(!1,1200);let t=Au(Q.day),n=31-Q.day,r=Q.day>=25&&n>0?` ……なつやすみは あと${n}にち。`:``;$.toast(`8月${Q.day}日の あさ。${t.note?` 〜`+t.note+`〜`:``}${r}`),Lp=!1}Tp.onDayEnd=()=>Up(!0);async function Wp(){$.els.fade.style.opacity=1,Q.min=1035;let e=vu();setTimeout(()=>{$.els.fade.style.opacity=0},400),Cp();let t=await $.showTitle(!!e,!!hu());for(;t===`album`;)await $.showAlbum(hu()),t=await $.showTitle(!!e,!!hu());if(t===`continue`&&e?Object.assign(Q,e):(yu(),Object.assign(Q,gu()),delete Q._resume),await $.fade(!0,500),Op.interior2f&&Op.interior2f.capShelf&&Op.interior2f.capShelf.refresh(Q),jp.snapCamera(),Ip=!0,document.body.classList.add(`started`),Q.day===1&&!Q.flags.metBaachan&&Q.min<=370)await Fp.opening();else{let e=Q._resume,t={interior:Op.interior,interior2f:Op.interior2f,takamatsu:Op.takamatsu};e&&e.sub&&e.sub in t?await Fp.warpTo(t[e.sub],e.x,e.z,e.h??Math.PI,900):e&&e.sub===`field`?await Fp.warpTo(null,e.x,e.z,e.h??Math.PI,900):await Fp.warpTo(null,114,17,Math.PI,900),$.toast(`8月${Q.day}日 ― つづきから`)}Rp=!0,Vp(),$.touchUI&&!Q.flags.touchTut&&(Q.flags.touchTut=!0,await $.showTutorial(),_u(Q))}var Gp=0,Kp=null,qp=document.getElementById(`grade`);function Jp(e,t){return e>=1170||e<340?`rgba(52, 72, 134, 0.13)`:e>=1105?`rgba(125, 70, 140, 0.20)`:e>=1030?`rgba(255, 115, 45, 0.21)`:e>=980?`rgba(255, 172, 80, 0.14)`:t===`rain`||t===`storm`?`rgba(150, 160, 172, 0.15)`:e>=640?`rgba(255, 245, 214, 0.20)`:`rgba(245, 240, 220, 0.12)`}function Yp(e){let t=e===void 0?Math.min(wp.getDelta(),.05):e,n=$.modal,r=!Ip||n||Np.active||Lp;document.body.classList.toggle(`modal`,!!(n||Lp)),Ip&&!n&&!Lp&&(Tp.tick(t),zp+=t,zp>=12&&(zp=0,Hp())),kp.update(Tp,jp.pos,t),Ap.update(t,jp.pos),jp.update(t,r,Fp.festivalOn,Ap.fireworksOn);let i=[];if(Ip&&!n&&!Lp){let e=Dp.interact;if(Op.indoor||(Mp.update(t,jp,i),Pp.hideKids=!!Fp.hide,Pp.update(t,jp,i)),Fp.update(t,jp,i),Op.indoor||Np.update(t,jp,Np.active?[]:i,Np.active?e:!1),Np.active)$.showPrompt(Np.phase===`bite`?`いまだ!!`:`まつ… (やめられる)`),Kp=null;else{i.sort((e,t)=>e.dist-t.dist);let t=i[0]||null;$.showPrompt(t?t.label:null),Kp=t?t.action:null,e&&Kp&&Kp()}Dp.hit(`KeyZ`)&&$.toggleZukan(),Dp.hit(`KeyX`)&&$.toggleMap(jp.pos)}else $.zukanOpen&&Dp.hit(`KeyZ`)?$.toggleZukan():$.mapOpen&&Dp.hit(`KeyX`)?$.toggleMap():(n||Lp)&&$.showPrompt(null);if(Ip){let e=null;Q.day===1&&!Q.flags.metBaachan?e=`えきまえの おばあちゃんに はなしかけよう`:Q.flags.rodFound&&!Q.flags.rodBaachan?e=`つりざおの こと、おばあちゃんに きいてみよう`:Q.flags.rodBaachan&&!Q.flags.rodStory?e=`じいちゃんの つりざおを、ため池の げんじいに 見せにいこう`:Q.flags.bunshuHint&&!Q.flags.bunshuDone?e=`ひるまに 小学校で ぶんしゅうを 見せてもらおう`:Q.day===13&&!Q.flags.mukaebi?e=`ゆうがた、いえのまえで むかえびを たく (ばあちゃんと)`:Q.day===15&&!Q.flags.okuribi?e=`ゆうがた、いえのまえで おくりびを たく (ばあちゃんと)`:Q.flags.rodStory&&Q.day>=16&&!Q.flags.nushiHint?e=`げんじいが なにか おしえたそうに しとる (ため池)`:Q.flags.nushiHint&&!Q.flags.nushiCaught?e=`はれ/くもりの ゆうがた、ため池に「ぬしさま」の かげが 出る`:Q.flags.nushiCaught&&!Q.flags.nushiTold&&(e=`ぬしさまの こと、げんじいに ほうこくしよう`),e||=Du[Q.day]||null,$.setGuide(e)}if((Dp.hit(`KeyP`)||Dp.hit(`Escape`))&&Ip&&!Lp&&(!$.modal||$.pauseOpen)&&$.togglePause(),Dp.hit(`KeyM`)){let e=Ep.toggleMute();Nf.sound=!e,Pf(),$.settingsOpen&&$.renderSettings(),$.toast(e?`おと OFF`:`おと ON`)}Ip&&$.updateHUD(Tp,Q),Gp-=t,Gp<=0&&(Gp=1,qp.style.backgroundColor=Jp(Q.min,Tp.weather),Ep.setScene({phase:Mu(Q.min),weather:Tp.weather,festivalNight:[`matsuri`,`gakusai`].includes(Au(Q.day).event)&&Q.min>=1020,lateSummer:Q.day>=18})),Dp.endFrame();let a=Q.min,o=0;a>=980&&a<=1140?o=Math.max(0,1-Math.abs(a-1070)/90)*.55:a>=350&&a<=440&&(o=Math.max(0,1-Math.abs(a-395)/45)*.28);let s=Tp.weather===`rain`||Tp.weather===`storm`;dp.setWarm(o*(s?.4:1));let c=1;a<345?c=(a-295)/50:a>1140&&(c=1-(a-1140)/55),dp.setDay(.26+.74*Math.min(1,Math.max(0,c))),dp.render(fp,pp,performance.now()*.001)}up.compile(fp,pp),up.setAnimationLoop(()=>Yp()),Wp(),window.__game={state:Q,player:jp,npcs:Pp,bugs:Mp,fishing:Np,events:Fp,ui:$,renderer:up,camera:pp,effects:Ap,post:dp,step:(e=.016)=>Yp(e),get clock(){return Tp},forceLandscape(e){mp=!!e,document.body.classList.toggle(`force-landscape`,mp),gp()}};