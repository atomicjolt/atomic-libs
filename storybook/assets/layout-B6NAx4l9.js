import{g as r}from"./index-CyCRagT9.js";import{m}from"./utils-2VFVy79V.js";function W(t){const{$display:n="flex",$direction:o,$align:i,$justify:e,$wrap:a,$gap:d,$gapX:g,$gapY:l}=t;return{display:n,flexDirection:o,alignItems:i&&s[i]||i,justifyContent:e,flexWrap:a,gap:r(d),columnGap:r(g),rowGap:r(l)}}const s={end:"flex-end",start:"flex-start"};function b(t){const{$display:n}=t;return{display:n}}function f(t){const{$m:n,$mx:o,$my:i,$mt:e,$mr:a,$mb:d,$ml:g}=t;return{margin:r(n),marginTop:r(e)||r(i),marginRight:r(a)||r(o),marginBottom:r(d)||r(i),marginLeft:r(g)||r(o)}}f.defaults=m(f);function $(t){const{$p:n,$px:o,$py:i,$pt:e,$pr:a,$pb:d,$pl:g}=t;return{padding:r(n),paddingTop:r(e)||r(i),paddingRight:r(a)||r(o),paddingBottom:r(d)||r(i),paddingLeft:r(g)||r(o)}}$.defaults=m($);function c(t){return{...f(t),...$(t)}}function p(t){const{$width:n,$minWidth:o,$maxWidth:i}=t;return{width:n,minWidth:o,maxWidth:i}}function h(t){const{$height:n,$minHeight:o,$maxHeight:i}=t;return{height:n,minHeight:o,maxHeight:i}}function x(t){return{...p(t),...h(t)}}function w(t){const{$position:n,$top:o,$right:i,$bottom:e,$left:a}=t;return{position:n,top:o,right:i,bottom:e,left:a}}function y(t){const{$overflow:n,$overflowX:o,$overflowY:i}=t;return{overflow:n,overflowX:o,overflowY:i}}function R(t){const{$flexAlign:n,$flexOrder:o,$flexGrow:i,$flexShrink:e,$flexBasis:a}=t;return{alignSelf:n&&s[n]||n,order:o,flexGrow:i,flexShrink:e,flexBasis:a}}function S(t){const{$gridArea:n,$gridRow:o,$gridRowStart:i,$gridRowEnd:e,$gridColumn:a,$gridColumnStart:d,$gridColumnEnd:g}=t;return{gridArea:n,gridRow:o,gridRowStart:i,gridRowEnd:e,gridColumn:a,gridColumnStart:d,gridColumnEnd:g}}function u(t){return{...c(t),...x(t),...w(t),...y(t),...R(t),...S(t)}}u.defaults=m(u);export{x as a,b as d,W as f,u as l,f as m,$ as p};
