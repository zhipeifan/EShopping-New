function JPEGEncoder(t){function e(t){var e,a,r,n,o,i,c,f,h,s=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99];for(e=0;64>e;e++)a=y((s[e]*t+50)/100),1>a?a=1:a>255&&(a=255),I[q[e]]=a;for(r=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],n=0;64>n;n++)o=y((r[n]*t+50)/100),1>o?o=1:o>255&&(o=255),L[q[n]]=o;for(i=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],c=0,f=0;8>f;f++)for(h=0;8>h;h++)A[c]=1/(8*I[q[c]]*i[f]*i[h]),p[c]=1/(8*L[q[c]]*i[f]*i[h]),c++}function a(t,e){var a,r,n=0,o=0,i=new Array;for(a=1;16>=a;a++){for(r=1;r<=t[a];r++)i[e[o]]=[],i[e[o]][0]=n,i[e[o]][1]=a,o++,n++;n*=2}return i}function r(){R=a(z,F),M=a(Q,S),U=a(G,J),k=a(K,V)}function n(){var t,e,a,r=1,n=2;for(t=1;15>=t;t++){for(e=r;n>e;e++)D[32767+e]=t,E[32767+e]=[],E[32767+e][1]=t,E[32767+e][0]=e;for(a=-(n-1);-r>=a;a++)D[32767+a]=t,E[32767+a]=[],E[32767+a][1]=t,E[32767+a][0]=n-1+a;r<<=1,n<<=1}}function o(){for(var t=0;256>t;t++)N[t]=19595*t,N[t+256>>0]=38470*t,N[t+512>>0]=7471*t+32768,N[t+768>>0]=-11059*t,N[t+1024>>0]=-21709*t,N[t+1280>>0]=32768*t+8421375,N[t+1536>>0]=-27439*t,N[t+1792>>0]=-5329*t}function i(t){for(var e=t[0],a=t[1]-1;a>=0;)e&1<<a&&(P|=1<<H),a--,H--,0>H&&(255==P?(c(255),c(0)):c(P),H=7,P=0)}function c(t){C.push(B[t])}function f(t){c(255&t>>8),c(255&t)}function h(t,e){var a,r,n,o,i,c,f,h,s,d,u,g,w,l,m,v,b,y,I,L,A,p,R,M,U,k,E,D,x,C,P,H,W,O,T,B,N,_,q,z,F,G,J,Q,S,K,V,X,Y=0;const Z=8,$=64;for(s=0;Z>s;++s)a=t[Y],r=t[Y+1],n=t[Y+2],o=t[Y+3],i=t[Y+4],c=t[Y+5],f=t[Y+6],h=t[Y+7],d=a+h,u=a-h,g=r+f,w=r-f,l=n+c,m=n-c,v=o+i,b=o-i,y=d+v,I=d-v,L=g+l,A=g-l,t[Y]=y+L,t[Y+4]=y-L,p=.707106781*(A+I),t[Y+2]=I+p,t[Y+6]=I-p,y=b+m,L=m+w,A=w+u,R=.382683433*(y-A),M=.5411961*y+R,U=1.306562965*A+R,k=.707106781*L,E=u+k,D=u-k,t[Y+5]=D+M,t[Y+3]=D-M,t[Y+1]=E+U,t[Y+7]=E-U,Y+=8;for(Y=0,s=0;Z>s;++s)a=t[Y],r=t[Y+8],n=t[Y+16],o=t[Y+24],i=t[Y+32],c=t[Y+40],f=t[Y+48],h=t[Y+56],x=a+h,C=a-h,P=r+f,H=r-f,W=n+c,O=n-c,T=o+i,B=o-i,N=x+T,_=x-T,q=P+W,z=P-W,t[Y]=N+q,t[Y+32]=N-q,F=.707106781*(z+_),t[Y+16]=_+F,t[Y+48]=_-F,N=B+O,q=O+H,z=H+C,G=.382683433*(N-z),J=.5411961*N+G,Q=1.306562965*z+G,S=.707106781*q,K=C+S,V=C-S,t[Y+40]=V+J,t[Y+24]=V-J,t[Y+8]=K+Q,t[Y+56]=K-Q,Y++;for(s=0;$>s;++s)X=t[s]*e[s],j[s]=X>0?0|X+.5:0|X-.5;return j}function s(){f(65504),f(16),c(74),c(70),c(73),c(70),c(0),c(1),c(1),c(0),f(1),f(1),c(0),c(0)}function d(t,e){f(65472),f(17),c(8),f(e),f(t),c(3),c(1),c(17),c(0),c(2),c(17),c(1),c(3),c(17),c(1)}function u(){var t,e;for(f(65499),f(132),c(0),t=0;64>t;t++)c(I[t]);for(c(1),e=0;64>e;e++)c(L[e])}function g(){var t,e,a,r,n,o,i,h;for(f(65476),f(418),c(0),t=0;16>t;t++)c(z[t+1]);for(e=0;11>=e;e++)c(F[e]);for(c(16),a=0;16>a;a++)c(G[a+1]);for(r=0;161>=r;r++)c(J[r]);for(c(1),n=0;16>n;n++)c(Q[n+1]);for(o=0;11>=o;o++)c(S[o]);for(c(17),i=0;16>i;i++)c(K[i+1]);for(h=0;161>=h;h++)c(V[h])}function w(){f(65498),f(12),c(3),c(1),c(0),c(2),c(17),c(3),c(17),c(0),c(63),c(0)}function l(t,e,a,r,n){var o,c,f,s,d,u,g,w,l,m,v=n[0],b=n[240];const y=16,I=63,L=64;for(c=h(t,e),f=0;L>f;++f)x[q[f]]=c[f];for(s=x[0]-a,a=x[0],0==s?i(r[0]):(o=32767+s,i(r[D[o]]),i(E[o])),d=63;d>0&&0==x[d];d--);if(0==d)return i(v),a;for(u=1;d>=u;){for(w=u;0==x[u]&&d>=u;++u);if(l=u-w,l>=y){for(g=l>>4,m=1;g>=m;++m)i(b);l=15&l}o=32767+x[u],i(n[(l<<4)+D[o]]),i(E[o]),u++}return d!=I&&i(v),a}function m(){var t,e=String.fromCharCode;for(t=0;256>t;t++)B[t]=e(t)}function v(t){if(0>=t&&(t=1),t>100&&(t=100),_!=t){var a=0;a=Math.floor(50>t?5e3/t:200-2*t),e(a),_=t,console.log("Quality set to: "+t+"%")}}function b(){var e,a=(new Date).getTime();t||(t=50),m(),r(),n(),o(),v(t),e=(new Date).getTime()-a,console.log("Initialization "+e+"ms")}var y,I,L,A,p,R,M,U,k,E,D,j,x,C,P,H,W,O,T,B,N,_,q,z,F,G,J,Q,S,K,V;Math.round,y=Math.floor,I=new Array(64),L=new Array(64),A=new Array(64),p=new Array(64),E=new Array(65535),D=new Array(65535),j=new Array(64),x=new Array(64),C=[],P=0,H=7,W=new Array(64),O=new Array(64),T=new Array(64),B=new Array(256),N=new Array(2048),q=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],z=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],F=[0,1,2,3,4,5,6,7,8,9,10,11],G=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],J=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],Q=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],S=[0,1,2,3,4,5,6,7,8,9,10,11],K=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],V=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250],this.encode=function(t,e){var a,r,n,o,c,h,m,b,y,I,L,E,D,j,x,B,_,q,z,F,G=(new Date).getTime();for(e&&v(e),C=new Array,P=0,H=7,f(65496),s(),u(),d(t.width,t.height),g(),w(),a=0,r=0,n=0,P=0,H=7,this.encode.displayName="_encode_",o=t.data,c=t.width,h=t.height,m=4*c,y=0;h>y;){for(b=0;m>b;){for(D=m*y+b,j=D,x=-1,B=0,_=0;64>_;_++)B=_>>3,x=4*(7&_),j=D+B*m+x,y+B>=h&&(j-=m*(y+1+B-h)),b+x>=m&&(j-=b+x-m+4),I=o[j++],L=o[j++],E=o[j++],W[_]=(N[I]+N[L+256>>0]+N[E+512>>0]>>16)-128,O[_]=(N[I+768>>0]+N[L+1024>>0]+N[E+1280>>0]>>16)-128,T[_]=(N[I+1280>>0]+N[L+1536>>0]+N[E+1792>>0]>>16)-128;a=l(W,A,a,R,U),r=l(O,p,r,M,k),n=l(T,p,n,M,k),b+=32}y+=8}return H>=0&&(q=[],q[1]=H+1,q[0]=(1<<H+1)-1,i(q)),f(65497),z="data:image/jpeg;base64,"+btoa(C.join("")),C=[],F=(new Date).getTime()-G,console.log("Encoding time: "+F+"ms"),z},b()}!function(){function t(t){var e,a,r=t.naturalWidth,n=t.naturalHeight;return r*n>1048576?(e=document.createElement("canvas"),e.width=e.height=1,a=e.getContext("2d"),a.drawImage(t,-r+1,0),0===a.getImageData(0,0,1,1).data[3]):!1}function e(t,e,a){var r,n,o,i,c,f,h,s=document.createElement("canvas");for(s.width=1,s.height=a,r=s.getContext("2d"),r.drawImage(t,0,0),n=r.getImageData(0,0,1,a).data,o=0,i=a,c=a;c>o;)f=n[4*(c-1)+3],0===f?i=c:o=c,c=i+o>>1;return h=c/a,0===h?1:h}function a(t,e,a){var n=document.createElement("canvas");return r(t,n,e,a),n.toDataURL("image/jpeg",e.quality||.8)}function r(a,r,o,i){var c,f,h,s,d,u,g,w,l,m,v,b=a.naturalWidth,y=a.naturalHeight,I=o.width,L=o.height,A=r.getContext("2d");for(A.save(),n(r,A,I,L,o.orientation),c=t(a),c&&(b/=2,y/=2),f=1024,h=document.createElement("canvas"),h.width=h.height=f,s=h.getContext("2d"),d=i?e(a,b,y):1,u=Math.ceil(f*I/b),g=Math.ceil(f*L/y/d),w=0,l=0;y>w;){for(m=0,v=0;b>m;)s.clearRect(0,0,f,f),s.drawImage(a,-m,-w),A.drawImage(h,0,0,f,f,v,l,u,g),m+=f,v+=u;w+=f,l+=g}A.restore(),h=s=null}function n(t,e,a,r,n){switch(n){case 5:case 6:case 7:case 8:t.width=r,t.height=a;break;default:t.width=a,t.height=r}switch(n){case 2:e.translate(a,0),e.scale(-1,1);break;case 3:e.translate(a,r),e.rotate(Math.PI);break;case 4:e.translate(0,r),e.scale(1,-1);break;case 5:e.rotate(.5*Math.PI),e.scale(1,-1);break;case 6:e.rotate(.5*Math.PI),e.translate(0,-r);break;case 7:e.rotate(.5*Math.PI),e.translate(a,-r),e.scale(-1,1);break;case 8:e.rotate(-.5*Math.PI),e.translate(-a,0)}}function o(t){var e,a,r;if(window.Blob&&t instanceof Blob){if(e=new Image,a=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null,!a)throw Error("No createObjectURL function found to create blob url");e.src=a.createObjectURL(t),this.blob=t,t=e}t.naturalWidth||t.naturalHeight||(r=this,t.onload=function(){var t,e,a=r.imageLoadListeners;if(a)for(r.imageLoadListeners=null,t=0,e=a.length;e>t;t++)a[t]()},this.imageLoadListeners=[]),this.srcImage=t}o.prototype.render=function(t,e,n){var o,i,c,f,h,s,d,u,g,w,l;if(this.imageLoadListeners)return o=this,void this.imageLoadListeners.push(function(){o.render(t,e,n)});e=e||{},i=this.srcImage.naturalWidth,c=this.srcImage.naturalHeight,f=e.width,h=e.height,s=e.maxWidth,d=e.maxHeight,u=!this.blob||"image/jpeg"===this.blob.type,f&&!h?h=c*f/i<<0:h&&!f?f=i*h/c<<0:(f=i,h=c),s&&f>s&&(f=s,h=c*f/i<<0),d&&h>d&&(h=d,f=i*h/c<<0),g={width:f,height:h};for(w in e)g[w]=e[w];l=t.tagName.toLowerCase(),"img"===l?t.src=a(this.srcImage,g,u):"canvas"===l&&r(this.srcImage,t,g,u),"function"==typeof this.onrender&&this.onrender(t),n&&n()},"function"==typeof define&&define.amd?define([],function(){return o}):this.MegaPixImage=o}();