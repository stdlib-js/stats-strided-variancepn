"use strict";var d=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var x=d(function(E,m){
var w=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray;function j(r,a,e,v,c){var o,p,q,t,i,u,n,s,y;for(o=e.data,p=e.accessors[0],q=w(r,o,v,c)/r,s=r-a,t=c,i=0,u=0,y=0;y<r;y++)n=p(o,t)-q,i+=n*n,u+=n,t+=v;return i/s-u/r*(u/s)}m.exports=j
});var f=d(function(F,M){
var k=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray,O=require('@stdlib/array-base-arraylike2object/dist'),P=x();function R(r,a,e,v,c){var o,p,q,t,i,u,n,s;if(n=r-a,r<=0||n<=0)return NaN;if(r===1||v===0)return 0;if(t=O(e),t.accessorProtocol)return P(r,a,t,v,c);for(o=k(r,e,v,c)/r,p=c,q=0,i=0,s=0;s<r;s++)u=e[p]-o,q+=u*u,i+=u,p+=v;return q/n-i/r*(i/n)}M.exports=R
});var l=d(function(G,g){
var h=require('@stdlib/strided-base-stride2offset/dist'),z=f();function A(r,a,e,v){return z(r,a,e,v,h(r,v))}g.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=l(),C=f();B(b,"ndarray",C);module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
