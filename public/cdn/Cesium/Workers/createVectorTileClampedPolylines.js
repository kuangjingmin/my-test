define(["./when-cbf8cd21","./Check-35e1a91d","./Math-6a1814d8","./Cartesian2-c451a606","./WebGLConstants-95ceb4e9","./AttributeCompression-bb3dc748","./IndexDatatype-354a5ea3","./createTaskProcessorWorker"],function(a,e,q,z,t,L,_,r){"use strict";var G=32767,o=Math.cos(q.CesiumMath.toRadians(150)),Z=new z.Cartographic,Y=new z.Cartesian3;var j=new z.Cartographic,J=new z.Cartographic;function K(a){var e=8*a,t=3*e,r=4*e;this.startEllipsoidNormals=new Float32Array(t),this.endEllipsoidNormals=new Float32Array(t),this.startPositionAndHeights=new Float32Array(r),this.startFaceNormalAndVertexCornerIds=new Float32Array(r),this.endPositionAndHeights=new Float32Array(r),this.endFaceNormalAndHalfWidths=new Float32Array(r),this.vertexBatchIds=new Uint16Array(e),this.indices=_.IndexDatatype.createTypedArray(e,36*a),this.vec3Offset=0,this.vec4Offset=0,this.batchIdOffset=0,this.indexOffset=0,this.volumeStartIndex=0}var d=new z.Cartesian3,l=new z.Cartesian3;function H(a,e,t,r,s){var n=z.Cartesian3.subtract(t,e,l),i=z.Cartesian3.subtract(e,a,d);return z.Cartesian3.normalize(n,n),z.Cartesian3.normalize(i,i),z.Cartesian3.dot(n,i)<o&&(i=z.Cartesian3.multiplyByScalar(i,-1,d)),z.Cartesian3.add(n,i,s),z.Cartesian3.equals(s,z.Cartesian3.ZERO)&&(s=z.Cartesian3.subtract(a,e)),z.Cartesian3.cross(s,r,s),z.Cartesian3.cross(r,s,s),z.Cartesian3.normalize(s,s),s}var O=[0,2,6,0,6,4,0,1,3,0,3,2,0,4,5,0,5,1,5,3,1,5,7,3,7,5,4,7,4,6,7,6,2,7,2,3],P=O.length,S=new z.Cartesian3,D=new z.Cartesian3,M=new z.Cartesian3,B=new z.Cartesian3,R=new z.Cartesian3;K.prototype.addVolume=function(a,e,t,r,s,n,i,o,d,l){var c=z.Cartesian3.add(e,d,S),h=l.geodeticSurfaceNormal(c,D);c=z.Cartesian3.add(t,d,S);var f,u=l.geodeticSurfaceNormal(c,B),C=H(a,e,t,h,M),p=H(r,t,e,u,R),v=this.startEllipsoidNormals,m=this.endEllipsoidNormals,A=this.startPositionAndHeights,b=this.startFaceNormalAndVertexCornerIds,w=this.endPositionAndHeights,g=this.endFaceNormalAndHalfWidths,N=this.vertexBatchIds,y=this.batchIdOffset,k=this.vec3Offset,I=this.vec4Offset;for(f=0;f<8;f++)z.Cartesian3.pack(h,v,k),z.Cartesian3.pack(u,m,k),z.Cartesian3.pack(e,A,I),A[I+3]=s,z.Cartesian3.pack(t,w,I),w[I+3]=n,z.Cartesian3.pack(C,b,I),b[I+3]=f,z.Cartesian3.pack(p,g,I),g[I+3]=i,N[y++]=o,k+=3,I+=4;this.batchIdOffset=y,this.vec3Offset=k,this.vec4Offset=I;var x=this.indices,E=this.volumeStartIndex,F=this.indexOffset;for(f=0;f<P;f++)x[F+f]=O[f]+E;this.volumeStartIndex+=8,this.indexOffset+=P};var Q=new z.Rectangle,X=new z.Ellipsoid,$=new z.Cartesian3,aa=new z.Cartesian3,ea=new z.Cartesian3,ta=new z.Cartesian3,ra=new z.Cartesian3;return r(function(a,e){var t,r=new Uint16Array(a.positions),s=new Uint16Array(a.widths),n=new Uint32Array(a.counts),i=new Uint16Array(a.batchIds),o=Q,d=X,l=$,c=new Float64Array(a.packedBuffer),h=0,f=c[h++],u=c[h++];z.Rectangle.unpack(c,h,o),h+=z.Rectangle.packedLength,z.Ellipsoid.unpack(c,h,d),h+=z.Ellipsoid.packedLength,z.Cartesian3.unpack(c,h,l);var C=r.length/3,p=r.subarray(0,C),v=r.subarray(C,2*C),m=r.subarray(2*C,3*C);L.AttributeCompression.zigZagDeltaDecode(p,v,m),function(a,e,t,r){for(var s=r.length,n=a.length,i=new Uint8Array(n),o=j,d=J,l=0,c=0;c<s;c++){for(var h=r[c],f=h,u=1;u<h;u++){var C=l+u,p=C-1;d.longitude=a[C],d.latitude=e[C],o.longitude=a[p],o.latitude=e[p],z.Cartographic.equals(d,o)&&(f--,i[p]=1)}r[c]=f,l+=h}for(var v=0,m=0;m<n;m++)1!==i[m]&&(a[v]=a[m],e[v]=e[m],t[v]=t[m],v++)}(p,v,m,n);var A=n.length,b=0;for(t=0;t<A;t++){b+=n[t]-1}var w=new K(b),g=function(a,e,t,r,s,n,i,o){for(var d=a.length,l=new Float32Array(3*d),c=0;c<d;++c){var h=a[c],f=e[c],u=t[c],C=q.CesiumMath.lerp(r.west,r.east,h/G),p=q.CesiumMath.lerp(r.south,r.north,f/G),v=q.CesiumMath.lerp(s,n,u/G),m=z.Cartographic.fromRadians(C,p,v,Z),A=i.cartographicToCartesian(m,Y),b=z.Cartesian3.subtract(A,o,Y);z.Cartesian3.pack(b,l,3*c)}return l}(p,v,m,o,f,u,d,l),N=0,y=0;for(t=0;t<A;t++){for(var k=n[t]-1,I=.5*s[t],x=i[t],E=N,F=0;F<k;F++){var H=z.Cartesian3.unpack(g,N,ea),O=z.Cartesian3.unpack(g,N+3,ta),P=m[y],S=m[y+1];P=q.CesiumMath.lerp(f,u,P/G),S=q.CesiumMath.lerp(f,u,S/G),y++;var D=aa,M=ra;if(0===F){var B=E+3*k,R=z.Cartesian3.unpack(g,B,aa);if(z.Cartesian3.equals(R,H))z.Cartesian3.unpack(g,B-3,D);else{var U=z.Cartesian3.subtract(H,O,aa);D=z.Cartesian3.add(U,H,aa)}}else z.Cartesian3.unpack(g,N-3,D);if(F===k-1){var T=z.Cartesian3.unpack(g,E,ra);if(z.Cartesian3.equals(T,O))z.Cartesian3.unpack(g,E+3,M);else{var V=z.Cartesian3.subtract(O,H,ra);M=z.Cartesian3.add(V,O,ra)}}else z.Cartesian3.unpack(g,N+6,M);w.addVolume(D,H,O,M,P,S,I,x,l,d),N+=3}N+=3,y++}var W=w.indices;return e.push(w.startEllipsoidNormals.buffer),e.push(w.endEllipsoidNormals.buffer),e.push(w.startPositionAndHeights.buffer),e.push(w.startFaceNormalAndVertexCornerIds.buffer),e.push(w.endPositionAndHeights.buffer),e.push(w.endFaceNormalAndHalfWidths.buffer),e.push(w.vertexBatchIds.buffer),e.push(W.buffer),{indexDatatype:2===W.BYTES_PER_ELEMENT?_.IndexDatatype.UNSIGNED_SHORT:_.IndexDatatype.UNSIGNED_INT,startEllipsoidNormals:w.startEllipsoidNormals.buffer,endEllipsoidNormals:w.endEllipsoidNormals.buffer,startPositionAndHeights:w.startPositionAndHeights.buffer,startFaceNormalAndVertexCornerIds:w.startFaceNormalAndVertexCornerIds.buffer,endPositionAndHeights:w.endPositionAndHeights.buffer,endFaceNormalAndHalfWidths:w.endFaceNormalAndHalfWidths.buffer,vertexBatchIds:w.vertexBatchIds.buffer,indices:W.buffer}})});
