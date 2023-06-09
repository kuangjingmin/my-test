define(["./when-cbf8cd21","./Check-35e1a91d","./Math-6a1814d8","./Cartesian2-c451a606","./Transforms-e4be2a30","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./AttributeCompression-bb3dc748","./IntersectionTests-8371bf29","./Plane-929e0674","./WebMercatorProjection-a8c0125a","./createTaskProcessorWorker","./EllipsoidTangentPlane-af8ae194","./OrientedBoundingBox-b779e812","./TerrainEncoding-0f15d8e5"],function(Fe,e,Oe,Ye,ke,Ue,t,i,a,n,r,Ve,o,He,Le,De){"use strict";var Ge=Uint16Array.BYTES_PER_ELEMENT,je=Int32Array.BYTES_PER_ELEMENT,ze=Uint32Array.BYTES_PER_ELEMENT,qe=Float32Array.BYTES_PER_ELEMENT,Je=Float64Array.BYTES_PER_ELEMENT;function Ke(e,t,i){i=Fe.defaultValue(i,Oe.CesiumMath);for(var a=e.length,n=0;n<a;++n)if(i.equalsEpsilon(e[n],t,Oe.CesiumMath.EPSILON12))return n;return-1}var Qe=new Ye.Cartographic,Xe=new Ye.Cartesian3,Ze=new Ye.Cartesian3,$e=new Ye.Cartesian3,et=new ke.Matrix4;function tt(e,t,i,a,n,r,o,s,u,h){for(var c=o.length,d=0;d<c;++d){var g=o[d],l=g.cartographic,m=g.index,p=e.length,v=l.longitude,I=l.latitude;I=Oe.CesiumMath.clamp(I,-Oe.CesiumMath.PI_OVER_TWO,Oe.CesiumMath.PI_OVER_TWO);var E=l.height-r.skirtHeight;r.hMin=Math.min(r.hMin,E),Ye.Cartographic.fromRadians(v,I,E,Qe),u&&(Qe.longitude+=s),u?d===c-1?Qe.latitude+=h:0===d&&(Qe.latitude-=h):Qe.latitude+=s;var T=r.ellipsoid.cartographicToCartesian(Qe);e.push(T),t.push(E),i.push(Ye.Cartesian2.clone(i[m])),0<a.length&&a.push(a[m]),ke.Matrix4.multiplyByPoint(r.toENU,T,Xe);var f=r.minimum,C=r.maximum;Ye.Cartesian3.minimumByComponent(Xe,f,f),Ye.Cartesian3.maximumByComponent(Xe,C,C);var M=r.lastBorderPoint;if(Fe.defined(M)){var N=M.index;n.push(N,p-1,p,p,m,N)}r.lastBorderPoint=g}}return o(function(e,t){e.ellipsoid=Ye.Ellipsoid.clone(e.ellipsoid),e.rectangle=Ye.Rectangle.clone(e.rectangle);var i=function(e,t,i,a,n,r,o,s,u,h){var c,d,g,l,m,p;p=Fe.defined(a)?(c=a.west,d=a.south,g=a.east,l=a.north,m=a.width,a.height):(c=Oe.CesiumMath.toRadians(n.west),d=Oe.CesiumMath.toRadians(n.south),g=Oe.CesiumMath.toRadians(n.east),l=Oe.CesiumMath.toRadians(n.north),m=Oe.CesiumMath.toRadians(a.width),Oe.CesiumMath.toRadians(a.height));var v,I,E=[d,l],T=[c,g],f=ke.Transforms.eastNorthUpToFixedFrame(t,i),C=ke.Matrix4.inverseTransformation(f,et);s&&(v=Ve.WebMercatorProjection.geodeticLatitudeToMercatorAngle(d),I=1/(Ve.WebMercatorProjection.geodeticLatitudeToMercatorAngle(l)-v));var M=new DataView(e),N=Number.POSITIVE_INFINITY,x=Number.NEGATIVE_INFINITY,b=Ze;b.x=Number.POSITIVE_INFINITY,b.y=Number.POSITIVE_INFINITY,b.z=Number.POSITIVE_INFINITY;var S=$e;S.x=Number.NEGATIVE_INFINITY,S.y=Number.NEGATIVE_INFINITY,S.z=Number.NEGATIVE_INFINITY;var w,P,B=0,y=0,A=0;for(P=0;P<4;++P){var R=B;w=M.getUint32(R,!0),R+=ze;var _=Oe.CesiumMath.toRadians(180*M.getFloat64(R,!0));R+=Je,-1===Ke(T,_)&&T.push(_);var W=Oe.CesiumMath.toRadians(180*M.getFloat64(R,!0));R+=Je,-1===Ke(E,W)&&E.push(W),R+=2*Je;var F=M.getInt32(R,!0);R+=je,y+=F,F=M.getInt32(R,!0),A+=3*F,B+=w+ze}var O=[],Y=[],k=new Array(y),U=new Array(y),V=new Array(y),H=s?new Array(y):[],L=new Array(A),D=[],G=[],j=[],z=[],q=0,J=0;for(P=B=0;P<4;++P){w=M.getUint32(B,!0);var K=B+=ze,Q=Oe.CesiumMath.toRadians(180*M.getFloat64(B,!0));B+=Je;var X=Oe.CesiumMath.toRadians(180*M.getFloat64(B,!0));B+=Je;var Z=Oe.CesiumMath.toRadians(180*M.getFloat64(B,!0)),$=.5*Z;B+=Je;var ee=Oe.CesiumMath.toRadians(180*M.getFloat64(B,!0)),te=.5*ee;B+=Je;var ie=M.getInt32(B,!0);B+=je;var ae=M.getInt32(B,!0);B+=je,B+=je;for(var ne=new Array(ie),re=0;re<ie;++re){var oe=Q+M.getUint8(B++)*Z;Qe.longitude=oe;var se=X+M.getUint8(B++)*ee;Qe.latitude=se;var ue=M.getFloat32(B,!0);if(B+=qe,0!==ue&&ue<h&&(ue*=-Math.pow(2,u)),ue*=6371010*r,Qe.height=ue,-1!==Ke(T,oe)||-1!==Ke(E,se)){var he=Ke(O,Qe,Ye.Cartographic);if(-1!==he){ne[re]=Y[he];continue}O.push(Ye.Cartographic.clone(Qe)),Y.push(q)}ne[re]=q,Math.abs(oe-c)<$?D.push({index:q,cartographic:Ye.Cartographic.clone(Qe)}):Math.abs(oe-g)<$?j.push({index:q,cartographic:Ye.Cartographic.clone(Qe)}):Math.abs(se-d)<te?G.push({index:q,cartographic:Ye.Cartographic.clone(Qe)}):Math.abs(se-l)<te&&z.push({index:q,cartographic:Ye.Cartographic.clone(Qe)}),N=Math.min(ue,N),x=Math.max(ue,x),V[q]=ue;var ce=i.cartographicToCartesian(Qe);k[q]=ce,s&&(H[q]=(Ve.WebMercatorProjection.geodeticLatitudeToMercatorAngle(se)-v)*I),ke.Matrix4.multiplyByPoint(C,ce,Xe),Ye.Cartesian3.minimumByComponent(Xe,b,b),Ye.Cartesian3.maximumByComponent(Xe,S,S);var de=(oe-c)/(g-c);de=Oe.CesiumMath.clamp(de,0,1);var ge=(se-d)/(l-d);ge=Oe.CesiumMath.clamp(ge,0,1),U[q]=new Ye.Cartesian2(de,ge),++q}for(var le=3*ae,me=0;me<le;++me,++J)L[J]=ne[M.getUint16(B,!0)],B+=Ge;if(w!==B-K)throw new Ue.RuntimeError("Invalid terrain tile.")}k.length=q,U.length=q,V.length=q,s&&(H.length=q);var pe=q,ve=J,Ie={hMin:N,lastBorderPoint:void 0,skirtHeight:o,toENU:C,ellipsoid:i,minimum:b,maximum:S};D.sort(function(e,t){return t.cartographic.latitude-e.cartographic.latitude}),G.sort(function(e,t){return e.cartographic.longitude-t.cartographic.longitude}),j.sort(function(e,t){return e.cartographic.latitude-t.cartographic.latitude}),z.sort(function(e,t){return t.cartographic.longitude-e.cartographic.longitude});var Ee=1e-5;if(tt(k,V,U,H,L,Ie,D,-Ee*m,!0,-Ee*p),tt(k,V,U,H,L,Ie,G,-Ee*p,!1),tt(k,V,U,H,L,Ie,j,Ee*m,!0,Ee*p),tt(k,V,U,H,L,Ie,z,Ee*p,!1),0<D.length&&0<z.length){var Te=D[0].index,fe=pe,Ce=z[z.length-1].index,Me=k.length-1;L.push(Ce,Me,fe,fe,Te,Ce)}y=k.length;var Ne,xe=ke.BoundingSphere.fromPoints(k);Fe.defined(a)&&(Ne=Le.OrientedBoundingBox.fromRectangle(a,N,x,i));for(var be=new De.EllipsoidalOccluder(i).computeHorizonCullingPointPossiblyUnderEllipsoid(t,k,N),Se=new He.AxisAlignedBoundingBox(b,S,t),we=new De.TerrainEncoding(Se,Ie.hMin,x,f,!1,s),Pe=new Float32Array(y*we.getStride()),Be=0,ye=0;ye<y;++ye)Be=we.encode(Pe,Be,k[ye],U[ye],V[ye],void 0,H[ye]);var Ae=D.map(function(e){return e.index}).reverse(),Re=G.map(function(e){return e.index}).reverse(),_e=j.map(function(e){return e.index}).reverse(),We=z.map(function(e){return e.index}).reverse();return Re.unshift(_e[_e.length-1]),Re.push(Ae[0]),We.unshift(Ae[Ae.length-1]),We.push(_e[0]),{vertices:Pe,indices:new Uint16Array(L),maximumHeight:x,minimumHeight:N,encoding:we,boundingSphere3D:xe,orientedBoundingBox:Ne,occludeePointInScaledSpace:be,vertexCountWithoutSkirts:pe,indexCountWithoutSkirts:ve,westIndicesSouthToNorth:Ae,southIndicesEastToWest:Re,eastIndicesNorthToSouth:_e,northIndicesWestToEast:We}}(e.buffer,e.relativeToCenter,e.ellipsoid,e.rectangle,e.nativeRectangle,e.exaggeration,e.skirtHeight,e.includeWebMercatorT,e.negativeAltitudeExponentBias,e.negativeElevationThreshold),a=i.vertices;t.push(a.buffer);var n=i.indices;return t.push(n.buffer),{vertices:a.buffer,indices:n.buffer,numberOfAttributes:i.encoding.getStride(),minimumHeight:i.minimumHeight,maximumHeight:i.maximumHeight,boundingSphere3D:i.boundingSphere3D,orientedBoundingBox:i.orientedBoundingBox,occludeePointInScaledSpace:i.occludeePointInScaledSpace,encoding:i.encoding,vertexCountWithoutSkirts:i.vertexCountWithoutSkirts,indexCountWithoutSkirts:i.indexCountWithoutSkirts,westIndicesSouthToNorth:i.westIndicesSouthToNorth,southIndicesEastToWest:i.southIndicesEastToWest,eastIndicesNorthToSouth:i.eastIndicesNorthToSouth,northIndicesWestToEast:i.northIndicesWestToEast}})});