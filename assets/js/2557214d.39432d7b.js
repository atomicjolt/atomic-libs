"use strict";(self.webpackChunkatomic_packages=self.webpackChunkatomic_packages||[]).push([[2583],{397:(e,r,n)=>{n.d(r,{G:()=>i});var t=["0","1","2","3","4","5","6","7","8","9"];function i(e){if(e)return t.includes(e)?"var(--space-"+e+")":e}},529:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>N,contentTitle:()=>C,default:()=>G,frontMatter:()=>S,metadata:()=>t,toc:()=>V});const t=JSON.parse('{"id":"Theme/Layout","title":"Layout","description":"Atomic Elements provides a set of layout components to help you build your application.","source":"@site/../packages/atomic-elements/docs/Theme/Layout.mdx","sourceDirName":"Theme","slug":"/Theme/Layout","permalink":"/atomic-libs/elements/Theme/Layout","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"mainSidebar","previous":{"title":"Theming","permalink":"/atomic-libs/elements/Theme/Intro"},"next":{"title":"Spacing","permalink":"/atomic-libs/elements/Theme/Spacing"}}');var i,a=n(4848),o=n(8453),l=n(6166),s=n(1852),d=n(7198),c=n(8587),p=n(6540),u=n(9344),h=n(2895),b=(0,n(3539).x)(),g=n(5276),x=n(3540),m=n(5920),v=n(9870),f=n(397);function y(e){return(0,v.Q)(e)?"repeat("+e+", minmax(0, 1fr))":e}var w=x.Ay.div(i||(i=(0,g.A)(["\n  ","\n  ","\n"])),(function(e){var r=e.$display,n=void 0===r?"grid":r,t=e.$columns,i=e.$rows,a=e.$areas,o=e.$flow,l=e.$align,s=e.$justify,d=e.$gap,c=e.$gapX,p=e.$gapY;return{display:n,gridTemplateColumns:t&&y(t),gridTemplateRows:i&&y(i),gridTemplateAreas:a,gridAutoFlow:o,alignItems:l,justifyContent:s,gap:(0,f.G)(d),columnGap:(0,f.G)(c),rowGap:(0,f.G)(p)}}),m.Zp),$=["className","style","children"],j=(0,p.forwardRef)((function(e,r){var n=(0,u.J)(b,e,r);e=n[0],r=n[1];var t=e,i=t.className,o=t.style,l=t.children,s=(0,c.A)(t,$),d=(0,h.S)({componentClassName:"aje-grid",className:i,style:o,children:l});return(0,a.jsx)(w,Object.assign({ref:r},d,s,{children:d.children}))}));j.displayName="Grid";var z=n(6875),k=n(9057),A=n(5579);const S={},C="Layout",N={},V=[{value:"Components",id:"components",level:2},{value:"View",id:"view",level:3},{value:"Flex",id:"flex",level:3},{value:"Grid",id:"grid",level:3},{value:"Group",id:"group",level:3}];function R(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return l.R||O("Example",!1),l.R.Code||O("Example.Code",!0),l.R.Rendered||O("Example.Rendered",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"layout",children:"Layout"})}),"\n",(0,a.jsx)(r.p,{children:"Atomic Elements provides a set of layout components to help you build your application."}),"\n",(0,a.jsx)(r.h2,{id:"components",children:"Components"}),"\n",(0,a.jsx)(r.h3,{id:"view",children:"View"}),"\n",(0,a.jsx)(r.p,{children:"View is the most basic layout component. It is a block-level element that can be used to create a container for other elements. The View component provides props for setting the width, height, padding, margins and background color of the element."}),"\n",(0,a.jsxs)(l.R,{children:[(0,a.jsx)(l.R.Rendered,{children:(0,a.jsx)(s.S,{$width:"100px",$height:"100px",$bg:"accent-clr"})}),(0,a.jsx)(l.R.Code,{children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-tsx",children:'<View $width="100px" $height="100px" $bg="accent-clr" />\n'})})})]}),"\n",(0,a.jsx)(r.h3,{id:"flex",children:"Flex"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"Flex"})," component is a flexible layout component that allows you to create a wide variety of layouts using a simple API. The ",(0,a.jsx)(r.code,{children:"Flex"})," component uses the ",(0,a.jsx)(r.code,{children:"display: flex"})," CSS property to create a flex container, and provides props for configuring the flex direction, alignment, and spacing."]}),"\n",(0,a.jsxs)(l.R,{children:[(0,a.jsx)(l.R.Rendered,{children:(0,a.jsxs)(d.s,{$direction:"row",$gap:"3",children:[(0,a.jsx)(s.S,{$width:"100px",$height:"100px",$bg:"primary400"}),(0,a.jsx)(s.S,{$width:"100px",$height:"100px",$bg:"primary500"}),(0,a.jsx)(s.S,{$width:"100px",$height:"100px",$bg:"primary600"})]})}),(0,a.jsx)(l.R.Code,{children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-tsx",children:'<Flex $direction="row" $gap="3">\n  <View $width="100px" $height="100px" $bg="primary400" />\n  <View $width="100px" $height="100px" $bg="primary500" />\n  <View $width="100px" $height="100px" $bg="primary600" />\n</Flex>\n'})})})]}),"\n",(0,a.jsx)(r.h3,{id:"grid",children:"Grid"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"Grid"})," component is a layout component that allows you to create grid layouts using a simple API. The ",(0,a.jsx)(r.code,{children:"Grid"})," component uses the ",(0,a.jsx)(r.code,{children:"display: grid"})," CSS property to create a grid container, and provides props for configuring the grid template columns, rows, and gaps."]}),"\n",(0,a.jsxs)(l.R,{children:[(0,a.jsx)(l.R.Rendered,{children:(0,a.jsxs)(j,{$columns:"3",$rows:"3",$gap:"3",children:[(0,a.jsx)(s.S,{$height:"100px",$bg:"primary400"}),(0,a.jsx)(s.S,{$height:"100px",$bg:"primary500"}),(0,a.jsx)(s.S,{$height:"100px",$bg:"primary600"}),(0,a.jsx)(s.S,{$height:"100px",$bg:"primary400"}),(0,a.jsx)(s.S,{$height:"100px",$bg:"primary500"}),(0,a.jsx)(s.S,{$height:"100px",$bg:"primary600"}),(0,a.jsx)(s.S,{$height:"100px",$bg:"primary400"}),(0,a.jsx)(s.S,{$height:"100px",$bg:"primary500"}),(0,a.jsx)(s.S,{$height:"100px",$bg:"primary600"})]})}),(0,a.jsx)(l.R.Code,{children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-tsx",children:'<Grid $columns="3" $rows="3" $gap="3">\n  <View $height="100px" $bg="primary400" />\n  <View $height="100px" $bg="primary500" />\n  <View $height="100px" $bg="primary600" />\n  <View $height="100px" $bg="primary400" />\n  <View $height="100px" $bg="primary500" />\n  <View $height="100px" $bg="primary600" />\n  <View $height="100px" $bg="primary400" />\n  <View $height="100px" $bg="primary500" />\n  <View $height="100px" $bg="primary600" />\n</Grid>\n'})})})]}),"\n",(0,a.jsx)(r.h3,{id:"group",children:"Group"}),"\n",(0,a.jsx)(r.p,{children:"Group is a special component to visually and semantically group a set of elements together."}),"\n",(0,a.jsxs)(l.R,{children:[(0,a.jsx)(l.R.Rendered,{children:(0,a.jsxs)(z.Y,{isMerged:!0,children:[(0,a.jsx)(k.p,{placeholder:"Username"}),(0,a.jsx)(k.p,{placeholder:"Password"}),(0,a.jsx)(A.$,{children:"Login"})]})}),(0,a.jsx)(l.R.Code,{children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-tsx",children:'<Group isMerged>\n  <Input placeholder="Username" />\n  <Input placeholder="Password" />\n  <Button>Login</Button>\n</Group>\n'})})})]})]})}function G(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(R,{...e})}):R(e)}function O(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},741:(e,r,n)=>{n.d(r,{E:()=>t});var t=(0,n(3539).x)()},783:(e,r,n)=>{n.d(r,{o:()=>i});var t=n(6133);function i(e){var r=(0,t.o)(e),n=r.focusProps,i=r.isFocusVisible,a=r.isFocused;return{focusProps:Object.assign({},n,{"data-focus-visible":i||void 0}),isFocusVisible:i,isFocused:a}}},1388:(e,r,n)=>{n.d(r,{Ay:()=>x});var t,i,a,o,l,s,d,c,p,u,h=n(5276),b=n(3540),g=(0,b.AH)(t||(t=(0,h.A)(["\n  &.is-small {\n    --size-x: var(--size-sm-x);\n    --size-y: var(--size-sm-y);\n  }\n\n  &.is-medium {\n    --size-x: var(--size-md-x);\n    --size-y: var(--size-md-y);\n  }\n\n  &.is-large {\n    --size-x: var(--size-lg-x);\n    --size-y: var(--size-lg-y);\n  }\n\n  &.is-full {\n    --size-x: var(--size-full-x);\n    --size-y: var(--size-full-y);\n  }\n\n  &.is-auto {\n    --size-x: auto;\n    --size-y: auto;\n  }\n"]))),x={Bold:(0,b.AH)(i||(i=(0,h.A)(["\n  font-family: var(--font-family);\n  font-weight: var(--font-weight-bold);\n"]))),Regular:(0,b.AH)(a||(a=(0,h.A)(["\n  font-family: var(--font-family);\n  font-weight: var(--font-weight-regular);\n"]))),FieldStatus:(0,b.AH)(o||(o=(0,h.A)(['\n  &[data-required] {\n    label::after {\n      content: " *";\n    }\n  }\n\n  &[data-invalid] {\n    --input-outline: 1px solid var(--error-clr);\n  }\n\n  &[data-disabled] {\n    opacity: 0.5;\n  }\n\n  &[data-readonly] {\n    --input-border-clr: var(--neutral100);\n    --input-bg-clr: var(--neutral100);\n  }\n']))),InputLike:(0,b.AH)(l||(l=(0,h.A)(["\n  border-style: var(--input-border-style);\n  border-width: var(--input-border-width);\n  border-color: var(--input-border-clr);\n  border-radius: var(--input-border-radius);\n  min-height: var(--input-height);\n  padding: 0 var(--input-padding-horiz);\n  font-size: var(--input-font-size);\n  color: var(--input-text-clr);\n  background-color: var(--input-bg-clr);\n  text-align: left;\n\n  i {\n    color: var(--input-icon-clr);\n  }\n\n  &:focus,\n  &:focus-within {\n    --input-border-clr: var(--outline-clr-primary);\n    outline: var(--input-outline);\n  }\n"]))),Sizing:g,SizingX:(0,b.AH)(s||(s=(0,h.A)(["\n  ","\n  width: var(--size-x);\n"])),g),SizingY:(0,b.AH)(d||(d=(0,h.A)(["\n  ","\n  height: var(--size-y);\n"])),g),FocusVisible:function(e){return void 0===e&&(e=0),(0,b.AH)(c||(c=(0,h.A)(['\n  &:focus-visible {\n    outline: none;\n  }\n\n  &[data-focus-visible="true"] {\n    outline: var(--outline);\n    outline-offset: ',"px;\n  }\n"])),e)},ToggleInputLike:function(e){return(0,b.AH)(p||(p=(0,h.A)(["\n    display: block;\n\n    :is(input):focus-visible ~ ",":before {\n      outline: var(--outline);\n      outline-offset: 2px;\n    }\n\n    :is(input):focus:not(:focus-visible) {\n      outline: none;\n    }\n\n    &[data-invalid] span::before {\n      border-color: var(--error700);\n    }\n  "])),e)},Border:function(e,r){var n=(void 0===r?{}:r).style,t=void 0===n?"solid":n;return(0,b.AH)(u||(u=(0,h.A)(["\n  border-width: var(--","-border-width);\n  border-color: var(--","-border-clr);\n  border-style: var(--","-border-style, ",");\n  border-radius: var(--","-border-radius, 0);\n"])),e,e,e,t,e)}}},1852:(e,r,n)=>{n.d(r,{S:()=>b});var t=n(8587),i=n(4848),a=n(6540),o=n(9344),l=n(2895),s=(0,n(3539).x)(),d=n(3540),c=n(5920),p=n(4238),u=d.Ay.div((function(e){return Object.assign({},(0,c.Zp)(e),(0,c.Vy)(e),(0,p.oR)(e))})),h=["className","style","children"],b=(0,a.forwardRef)((function(e,r){var n=(0,o.J)(s,e,r);e=n[0],r=n[1];var a=e,d=a.className,c=a.style,p=a.children,b=(0,t.A)(a,h),g=(0,l.S)({componentClassName:"aje-view",className:d,style:c,children:p});return(0,i.jsx)(u,Object.assign({ref:r},g,b))}))},2297:(e,r,n)=>{n.d(r,{U:()=>i,V:()=>a});var t=n(397);function i(e){var r=e.$display,n=void 0===r?"flex":r,i=e.$direction,o=e.$align,l=e.$justify,s=e.$wrap,d=e.$gap,c=e.$gapX,p=e.$gapY;return{display:n,flexDirection:i,alignItems:o&&a[o]||o,justifyContent:l,flexWrap:s,gap:(0,t.G)(d),columnGap:(0,t.G)(c),rowGap:(0,t.G)(p)}}var a={end:"flex-end",start:"flex-start"}},2895:(e,r,n)=>{n.d(r,{S:()=>a});var t=n(4561),i=n(6540);function a(e){var r=e.componentClassName,n=e.className,a=e.style,o=e.children,l=e.defaultChildren,s=e.size,d=e.values,c=void 0===d?{}:d,p=e.variant,u=e.selectors;return(0,i.useMemo)((function(){var e,i=t(r,"function"==typeof n?n(c):n,((e={})[r+"--"+p]=p,e["is-"+s]=s,e)),d=o;"function"==typeof o?d=o(c):void 0===o&&(d=l);var h=Object.entries(u||{}).reduce((function(e,r){var n=r[0];return r[1]&&(e[n]="true"),e}),{}),b="function"==typeof a?a(c):a;return Object.assign({className:i,children:d,style:b},h)}),[r,n,a,o,s,l,c,p,u])}},3539:(e,r,n)=>{n.d(r,{x:()=>i});var t=n(6540);function i(){return t.createContext(null)}},4238:(e,r,n)=>{function t(e,r){var n=function(n){var t,i,a=n[r],o=n.theme;return null!=o&&o.variables&&a&&a in o.variables?((i={})[e]=o.getVar(a),i):((t={})[e]=a,t)};return n.defaults=function(e){return function(r){return n(Object.assign({},e,r))}},n}n.d(r,{hk:()=>i,oR:()=>a,pf:()=>l,w7:()=>o});var i=t("color","$color"),a=t("background","$bg"),o=t("stroke","$stroke"),l=t("fill","$fill")},5579:(e,r,n)=>{n.d(r,{$:()=>Z});var t,i,a,o,l=n(4848),s=n(6540),d=n(3908),c=n(2217),p=n(5987),u=n(7198),h=n(2895),b=n(5276),g=n(1388),x=n(3540),m=(0,x.i7)(t||(t=(0,b.A)(["\n  0% {\n    opacity: 0;\n    transform: rotate(90deg) scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: rotate(45deg) scale(1);\n  }\n"]))),v=x.Ay.span(i||(i=(0,b.A)(["\n  ","\n  --size-sm-x: 10px;\n  --size-md-x: 20px;\n  --size-lg-x: 30px;\n\n  font-size: var(--size-x);\n\n  display: inline-block;\n  position: relative;\n  top: -0.125em;\n  width: 0.5em;\n  height: 1em;\n  border-bottom: 0.2em solid var(--animation-clr);\n  border-right: 0.2em solid var(--animation-clr);\n  transform: rotate(45deg) scale(0);\n  animation: "," 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n"])),g.Ay.Sizing,m);function f(e){var r=e.size,n=void 0===r?"medium":r,t=(0,h.S)(Object.assign({},e,{componentClassName:"aje-checkmark",size:n}));return(0,l.jsx)(v,Object.assign({},t,{"data-testid":"checkmark"}))}var y=x.Ay.div(a||(a=(0,b.A)(["\n  ",'\n  --size-sm-x: 12px;\n  --size-md-x: 16px;\n  --size-lg-x: 30px;\n  --animation-clr: var(--loader-clr);\n\n  font-size: var(--size-x);\n\n  &[data-placement="inline"] {\n    display: inline-block;\n  }\n\n  &[data-placement="block"] {\n    display: block;\n  }\n\n  &[data-placement="center"] {\n    flex-grow: 1;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &[data-placement="absolute center"] {\n    position: absolute;\n    display: grid;\n    inset: 0;\n    place-items: center;\n  }\n'])),g.Ay.Sizing),w=x.Ay.p(o||(o=(0,b.A)(["\n  ","\n  font-size: inherit;\n  color: var(--text-clr);\n"])),g.Ay.Regular);function $(e){var r=e.isLoading,n=void 0===r||r,t=e.placement,i=void 0===t?"center":t,a=e.orientation,o=void 0===a?"vertical":a,s=e.size,d=void 0===s?"medium":s,c=e.message,b=["inline","block"].includes(i)?"inline":"center",g=(0,h.S)(Object.assign({componentClassName:"aje-loader"},e,{size:d,values:{isLoading:n}})),x="horizontal"===o?"row":"column",m=(0,p.$)(e);return(0,l.jsx)(y,Object.assign({},g,m,{"data-placement":i,children:n?(0,l.jsxs)(u.s,{$display:"inline"===b?"inline-flex":"flex",$direction:x,$gap:"row"===x?"1rem":"0",$justify:"center",$align:"center",children:[g.children,c&&(0,l.jsx)(w,{children:c})]}):"function"==typeof e.children?g.children:(0,l.jsx)(f,{size:d})}))}var j,z,k,A,S,C,N=n(8587),V=n(2662),R=n(9344),G=(0,n(3539).x)(),O=n(4238),L=(0,x.i7)(j||(j=(0,b.A)(["\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),P=(0,x.i7)(z||(z=(0,b.A)(["\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -98;\n  }\n"]))),T=x.Ay.circle(k||(k=(0,b.A)(["\n  transition: stroke-dasharray 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n  fill: transparent;\n  ","\n"])),O.w7.defaults({$stroke:"var(--progress-circle-indicator-clr)"})),F=x.Ay.circle(A||(A=(0,b.A)(["\n  fill: transparent;\n  ","\n"])),O.w7.defaults({$stroke:"var(--progress-circle-track-clr)"})),E=x.Ay.circle(S||(S=(0,b.A)(["\n  ","\n"])),O.pf.defaults({$fill:"var(--progress-circle-bg-clr)"})),B=x.Ay.svg(C||(C=(0,b.A)(["\n  &[data-indeterminate] {\n    animation: "," 2s linear infinite;\n\n    "," {\n      transition: unset;\n      animation: "," 1.5s ease-in-out infinite;\n    }\n  }\n"])),L,T,P),H=["value","$size","$trackWidth","$indicatorColor","$trackColor","$bg","$linecap","className","style","isIndeterminate","minValue","maxValue","showValueLabel"],I=(0,s.forwardRef)((function(e,r){var n=(0,R.J)(G,e,r);e=n[0],r=n[1];var t=e,i=t.value,a=void 0===i?0:i,o=t.$size,d=void 0===o?"60":o,c=t.$trackWidth,p=void 0===c?"10":c,u=t.$indicatorColor,b=void 0===u?"var(--progress-circle-indicator-clr)":u,g=t.$trackColor,x=void 0===g?"var(--progress-circle-track-clr)":g,m=t.$bg,v=void 0===m?"var(--progress-circle-bg-clr)":m,f=t.$linecap,y=t.className,w=t.style,$=t.isIndeterminate,j=t.minValue,z=void 0===j?0:j,k=t.maxValue,A=void 0===k?100:k,S=t.showValueLabel,C=(0,N.A)(t,H),O=(0,V.E)(e).progressBarProps,L=(0,s.useMemo)((function(){var e=(a-z)/(A-z)*100;return e>100?[100,0]:e<0?[0,100]:[e,100-e]}),[a,z,A]),P=L[0],I=L[1],U=(0,h.S)({componentClassName:"aje-progresscircle",className:y,style:w,selectors:{"data-indeterminate":$}});return(0,l.jsxs)(B,Object.assign({width:d,height:d,viewBox:"0 0 44 44"},O,U,C,{children:[(0,l.jsx)(E,{cx:"22",cy:"22",r:16,$fill:v}),(0,l.jsx)(F,{cx:"22",cy:"22",r:16,$stroke:x,strokeWidth:p}),(0,l.jsx)(T,{cx:"22",cy:"22",r:16,$stroke:b,strokeWidth:p,strokeDasharray:P+" "+I,strokeDashoffset:"25",strokeLinecap:f}),S&&(0,l.jsx)("text",{x:"22",y:"22",textAnchor:"middle",dominantBaseline:"middle",fill:b,fontSize:"10",children:O["aria-valuetext"]})]}))}));function U(e){return(0,l.jsx)(I,Object.assign({$size:"40px",$trackWidth:"6",$linecap:"round",$trackColor:"transparent",$indicatorColor:"var(--animation-clr)",isIndeterminate:!0},e,{className:["aje-spinner",e.className],"data-testid":"spinner-svg"}))}function W(e){var r=e.className;return(0,l.jsx)($,Object.assign({},e,{className:["aje-loader--spinner",r],children:(0,l.jsx)(U,{$size:"2em"})}))}I.displayName="ProgressCircle";var _,D=n(783),J=n(9229),M=n(9561);var Y=x.Ay.button(_||(_=(0,b.A)(["\n  ","\n  ","\n  ","\n  padding: var(--btn-padding-vert) var(--btn-padding-horiz);\n  border-radius: var(--btn-border-radius);\n  font-size: var(--btn-font-size);\n  min-height: var(--btn-height);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--btn-icon-gap);\n  text-decoration: none;\n  transition: background 100ms ease, color 100ms ease, transform 100ms ease,\n    box-shadow 100ms ease;\n\n  color: var(--btn-text-clr);\n  background-color: var(--btn-bg-clr);\n  border: var(--btn-border, none);\n  box-shadow: var(--btn-shadow, none);\n  --loader-clr: var(--btn-text-clr);\n\n  &:hover {\n    cursor: pointer;\n    color: var(--btn-hover-text-clr);\n    background-color: var(--btn-hover-bg-clr);\n    box-shadow: var(--btn-hover-shadow);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  &[data-pressed] {\n    transform: var(--btn-pressed-transform);\n  }\n\n  &[data-loading] {\n    position: relative;\n    color: transparent;\n\n    .aje-spinner,\n    .aje-three-dot-loader {\n      --loader-clr: var(--btn-text-clr);\n      --loader-size: 1em;\n    }\n  }\n\n  &.aje-btn--primary {\n    --btn-text-clr: var(--text-clr-inverted);\n    --btn-bg-clr: var(--accent-clr);\n    --btn-hover-text-clr: var(--btn-text-clr);\n    --btn-hover-bg-clr: var(--accent-clr-alt);\n  }\n\n  &.aje-btn--secondary {\n    --btn-text-clr: var(--text-clr-alt);\n    --btn-bg-clr: var(--neutral100);\n    --btn-hover-text-clr: var(--text-clr);\n    --btn-hover-bg-clr: var(--neutral200);\n    --btn-border: var(--border);\n  }\n\n  &.aje-btn--link {\n    --btn-text-clr: var(--accent-clr);\n    --btn-bg-clr: var(--neutral50);\n    --btn-hover-text-clr: var(--text-clr);\n    --btn-hover-bg-clr: var(--neutral100);\n    text-decoration: underline;\n  }\n\n  &.aje-btn--error {\n    --btn-text-clr: var(--text-clr-inverted);\n    --btn-bg-clr: var(--error700);\n    --btn-hover-text-clr: var(--btn-text-clr);\n    --btn-hover-bg-clr: var(--error800);\n  }\n\n  &.aje-btn--success {\n    --btn-text-clr: var(--text-clr-inverted);\n    --btn-bg-clr: var(--success700);\n    --btn-hover-text-clr: var(--btn-text-clr);\n    --btn-hover-bg-clr: var(--success800);\n  }\n\n  &.aje-btn--inverted {\n    --btn-text-clr: var(--text-clr);\n    --btn-bg-clr: var(--neutral50);\n    --btn-hover-text-clr: var(--btn-text-clr);\n    --btn-hover-bg-clr: var(--btn-bg-clr);\n    --btn-hover-shadow: 0 1px 3px hsla(221, 39%, 11%, 0.5);\n  }\n\n  &.aje-btn--content {\n    --btn-text-clr: var(--text-clr);\n    --btn-bg-clr: transparent;\n    --btn-hover-text-clr: var(--btn-text-clr);\n    --btn-hover-bg-clr: transparent;\n    --btn-hover-shadow: none;\n    --btn-padding-horiz: 0px;\n    --btn-padding-vert: 0px;\n    --btn-height: auto;\n  }\n\n  &.aje-btn--border {\n    --btn-text-clr: var(--text-clr-alt);\n    --btn-bg-clr: var(--neutral50);\n    --btn-hover-text-clr: var(--text-clr);\n    --btn-hover-bg-clr: var(--neutral100);\n    --btn-border: var(--border);\n  }\n\n  &.aje-btn--ghost {\n    --btn-text-clr: var(--text-clr-alt);\n    --btn-bg-clr: transparent;\n    --btn-hover-text-clr: var(--text-clr);\n    --btn-hover-bg-clr: var(--neutral100);\n    --btn-border: transparent;\n  }\n\n  & > i {\n    color: inherit;\n    font-size: var(--btn-icon-size);\n    margin-left: calc(var(--btn-padding-horiz) / -2.5);\n  }\n"])),g.Ay.SizingX,g.Ay.Bold,g.Ay.FocusVisible(2)),X=n(6900),Z=(0,s.forwardRef)((function(e,r){var n=(0,R.J)(X.k,e,r);e=n[0],r=n[1];var t=(0,d.U)(r),i=e,a=i.isLoading,o=void 0!==a&&a,s=i.loadingLabel,p=i.loadingComplete,u=void 0!==p&&p,b=i.as,g=void 0===b?e.href?"a":"button":b,x=i.variant,m=void 0===x?"primary":x,v=i.size,f=void 0===v?"auto":v,y=function(e,r){var n=(0,J.s)(e,r),t=n.buttonProps,i=n.isPressed,a=(0,M.i)(e,r),o=a.linkProps,l=a.isPressed;return"a"===e.elementType?{buttonProps:o,isPressed:l}:{buttonProps:t,isPressed:i}}(Object.assign({},e,{elementType:g,"aria-label":o?s:e["aria-label"]}),t),w=y.buttonProps,$=y.isPressed,j=(0,D.o)(),z=j.focusProps,k=j.isFocusVisible,A=j.isFocused,S=(0,h.S)(Object.assign({componentClassName:"aje-btn"},e,{variant:m,size:f,values:{isPressed:$,isLoading:o,isFocusVisible:k,isFocused:A},selectors:{"data-pressed":$,"data-loading":o}}));return(0,l.jsxs)(Y,Object.assign({as:g,ref:t},(0,c.v)(w,z,S),{children:[o&&(0,l.jsx)(W,{isLoading:!u,placement:"absolute center"}),S.children]}))}))},5920:(e,r,n)=>{n.d(r,{KQ:()=>d,Vy:()=>o,Zp:()=>c,yq:()=>l});var t=n(397),i=n(2297),a=n(7581);function o(e){return{display:e.$display}}function l(e){var r=e.$m,n=e.$mx,i=e.$my,a=e.$mt,o=e.$mr,l=e.$mb,s=e.$ml;return{margin:(0,t.G)(r),marginTop:(0,t.G)(a)||(0,t.G)(i),marginRight:(0,t.G)(o)||(0,t.G)(n),marginBottom:(0,t.G)(l)||(0,t.G)(i),marginLeft:(0,t.G)(s)||(0,t.G)(n)}}function s(e){var r=e.$p,n=e.$px,i=e.$py,a=e.$pt,o=e.$pr,l=e.$pb,s=e.$pl;return{padding:(0,t.G)(r),paddingTop:(0,t.G)(a)||(0,t.G)(i),paddingRight:(0,t.G)(o)||(0,t.G)(n),paddingBottom:(0,t.G)(l)||(0,t.G)(i),paddingLeft:(0,t.G)(s)||(0,t.G)(n)}}function d(e){return Object.assign({},function(e){return{width:e.$width,minWidth:e.$minWidth,maxWidth:e.$maxWidth}}(e),function(e){return{height:e.$height,minHeight:e.$minHeight,maxHeight:e.$maxHeight}}(e))}function c(e){return Object.assign({},function(e){return Object.assign({},l(e),s(e))}(e),d(e),function(e){return{position:e.$position,top:e.$top,right:e.$right,bottom:e.$bottom,left:e.$left}}(e),function(e){return{overflow:e.$overflow,overflowX:e.$overflowX,overflowY:e.$overflowY}}(e),function(e){var r=e.$flexAlign,n=e.$flexOrder,t=e.$flexGrow,a=e.$flexShrink,o=e.$flexBasis;return{alignSelf:r&&i.V[r]||r,order:n,flexGrow:t,flexShrink:a,flexBasis:o}}(e),function(e){return{gridArea:e.$gridArea,gridRow:e.$gridRow,gridRowStart:e.$gridRowStart,gridRowEnd:e.$gridRowEnd,gridColumn:e.$gridColumn,gridColumnStart:e.$gridColumnStart,gridColumnEnd:e.$gridColumnEnd}}(e))}l.defaults=(0,a.gB)(l),s.defaults=(0,a.gB)(s),c.defaults=(0,a.gB)(c)},6166:(e,r,n)=>{n.d(r,{R:()=>a});var t=n(6799),i=(n(6540),n(4848));function a(e){var r=e.style,n=void 0===r?{}:r,t=e.children;return(0,i.jsx)("div",{className:"example",style:n,children:t})}a.Code=function(e){var r=e.style,n=void 0===r?{}:r,t=e.children;return(0,i.jsx)("div",{className:"example__code",style:Object.assign({},n),children:t})},a.Rendered=function(e){var r=e.style,n=void 0===r?{}:r,a=e.children;return(0,i.jsx)("div",{className:"example__rendered",style:n,children:(0,i.jsx)(t.r,{children:a})})}},6799:(e,r,n)=>{n.d(r,{r:()=>u});var t,i,a=n(4848),o=n(6540),l=n(3540),s=n(5276),d=(0,l.DU)(t||(t=(0,s.A)(["\nhtml {\n  font-size: 10px;\n}\n\nhtml,\nhtml a {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  text-rendering: optimizeLegibility;\n  font-family: var(--font-family)\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:focus:not(:focus-visible) {\n  outline: none;\n}\n"])));var c=function(e){var r=e.variables,n=e.cssVarPrefix,t=void 0===n?"":n,a=e.cssVarsSelector,o=void 0===a?":root":a,d=e.base,c=void 0===d?{variables:{},resolvedVariables:{},cssVarPrefix:"",_Component:function(){return null}}:d,p=Object.assign({},c.variables,r),u={};Object.entries(p).forEach((function(e){var r=e[0],n=e[1].replace(/{([^}:]+)(?::([^}]+))?}/g,(function(e,r,n){if(r in p||n)return n?"var(--"+t+r+", "+n+")":"var(--"+t+r+")";throw new Error("Variable "+r+" not found in theme, make sure you have defined it, or provide a default value ({variable-name:default-valu})")}));u["--"+t+r]=n}));var h=(0,l.AH)(u),b=(0,l.DU)(i||(i=(0,s.A)(["\n    "," {\n      ","\n    }\n  "])),o,h);return{variables:p,resolvedVariables:u,cssVarPrefix:t,getVar:function(e){return"var(--"+t+e+")"},getVarName:function(e){return"--"+t+e},getVarValue:function(e){return u["--"+t+e]},_Component:b}}({variables:Object.assign({},{"border-width":"1px","border-style":"solid","border-clr-primary":"{neutral300}",radius:"5px",border:"{border-width} {border-style} {border-clr-primary}","outline-width":"2px","outline-style":"solid","outline-clr-primary":"{neutral600}",outline:"{outline-width} {outline-style} {outline-clr-primary}"},{"font-family":'"Lato", sans-serif',"font-weight-light":"200","font-weight-regular":"400","font-weight-medium":"500","font-weight-bold":"700"},{"font-size-1":"12px","font-size-2":"14px","font-size-3":"16px","font-size-4":"18px","font-size-5":"20px","font-size-6":"24px","font-size-7":"28px","font-size-8":"35px","font-size-9":"60px"},{"letter-spacing-1":".0025em","letter-spacing-2":"0em","letter-spacing-3":"0em","letter-spacing-4":"-.0025em","letter-spacing-5":"-.005em","letter-spacing-6":"-.00625em","letter-spacing-7":"-.0075em","letter-spacing-8":"-.01em","letter-spacing-9":"-.025em"},{"line-height-1":"16px","line-height-2":"20px","line-height-3":"24px","line-height-4":"26px","line-height-5":"28px","line-height-6":"30px","line-height-7":"36px","line-height-8":"40px","line-height-9":"60px"},{neutral50:"hsl(0, 0%, 100%)",neutral100:"hsl(220, 14%, 96%)",neutral200:"hsl(220, 13%, 91%)",neutral300:"hsl(216, 12%, 84%)",neutral400:"hsl(218, 11%, 66%)",neutral500:"hsl(220, 9%, 44%)",neutral600:"hsl(215, 14%, 36%)",neutral700:"hsl(217, 19%, 27%)",neutral800:"hsl(215, 28%, 17%)",neutral900:"hsl(221, 39%, 11%)",error100:"hsl(0, 93%, 94%)",error200:"hsl(0, 96%, 89%)",error300:"hsl(0, 94%, 82%)",error400:"hsl(0, 91%, 71%)",error500:"hsl(0, 84%, 60%)",error600:"hsl(0, 72%, 51%)",error700:"hsl(0, 74%, 42%)",error800:"hsl(0, 70%, 35%)",error900:"hsl(0, 63%, 31%)",warning100:"hsl(55, 97%, 90%)",warning200:"hsl(53, 98%, 83%)",warning300:"hsl(50, 98%, 75%)",warning400:"hsl(48, 96%, 53%)",warning500:"hsl(45, 93%, 47%)",warning600:"hsl(41, 96%, 40%)",warning700:"hsl(35, 92%, 33%)",warning800:"hsl(32, 81%, 29%)",warning900:"hsl(28, 73%, 26%)",success100:"hsl(100, 89%, 89%)",success200:"hsl(101, 88%, 80%)",success300:"hsl(102, 85%, 67%)",success400:"hsl(103, 78%, 55%)",success500:"hsl(104, 81%, 44%)",success600:"hsl(105, 85%, 35%)",success700:"hsl(106, 78%, 27%)",success800:"hsl(107, 69%, 23%)",success900:"hsl(108, 61%, 20%)",primary100:"hsl(185, 96%, 94%)",primary200:"hsl(186, 94%, 88%)",primary300:"hsl(187, 92%, 75%)",primary400:"hsl(188, 86%, 53%)",primary500:"hsl(189, 94%, 43%)",primary600:"hsl(190, 91%, 36%)",primary700:"hsl(191, 82%, 31%)",primary800:"hsl(192, 70%, 27%)",primary900:"hsl(193, 64%, 24%)","text-clr":"{neutral800}","text-clr-alt":"{neutral600}","text-clr-inverted":"{neutral50}","background-clr":"{neutral50}","background-clr-alt":"{neutral100}","background-clr-inverted":"{neutral800}","accent-clr":"{primary700}","accent-clr-alt":"{primary800}","error-clr":"{error600}","error-clr-alt":"{error700}","success-clr":"{success600}","success-clr-alt":"{success700}","warning-clr":"{warning600}","warning-clr-alt":"{warning700}","info-clr":"{primary100}","info-clr-alt":"{primary200}"},{"size-sm-x":"100px","size-md-x":"200px","size-lg-x":"300px","size-full-x":"100%","size-sm-y":"40px","size-md-y":"60px","size-lg-y":"80px","size-full-y":"100%"},{"space-0":"0","space-1":"4px","space-2":"8px","space-3":"12px","space-4":"16px","space-5":"24px","space-6":"32px","space-7":"40px","space-8":"48px","space-9":"64px"},{"input-border-clr":"{border-clr-primary}","input-border-width":"{border-width}","input-border-style":"{border-style}","input-border-radius":"{radius}","input-border":"1px solid {input-border-clr}","input-outline":"1px solid {outline-clr-primary}","input-height":"40px","input-padding-horiz":"12px","input-gap":"12px","input-font-size":"1.6rem","input-icon-size":"2.4rem","input-icon-clr":"{neutral600}","input-text-clr":"{text-clr}","input-bg-clr":"none","input-transition":"none"},{"btn-font-size":"1.6rem","btn-icon-size":"2.4rem","btn-icon-gap":"8px","btn-text-clr":"{text-clr-alt}","btn-bg-clr":"{neutral50}","btn-hover-text-clr":"{text-clr}","btn-hover-bg-clr":"{neutral100}","btn-hover-shadow":"none","btn-border":"none","btn-border-radius":"{radius}","btn-height":"40px","btn-padding-vert":"0.25em","btn-padding-horiz":"1em","btn-pressed-transform":"translateY(1px)"},{"banner-bg-clr":"{neutral100}","banner-text-clr":"{text-clr}","banner-icon-clr":"{primary700}","banner-btn-hover-clr":"{neutral200}","banner-btn-active-clr":"{neutral300}","banner-btn-size":"40px","banner-border-radius":"{radius}"},{"dropdown-bg-clr":"{background-clr}","dropdown-max-height":"300px","dropdown-text-clr":"{text-clr}","dropdown-text-size":"1.6rem","dropdown-icon-size":"2.4rem","dropdown-icon-clr":"{neutral600}","dropdown-box-shadow":"0 1px 3px hsla(0, 0%, 0%, 0.5)","dropdown-border-radius":"{radius}"},{"menu-bg-clr":"{dropdown-bg-clr}","menu-box-shadow":"{dropdown-box-shadow}","menu-border-radius":"{dropdown-border-radius}","menu-item-font-size":"{dropdown-text-size}","menu-item-icon-size":"{dropdown-icon-size}","menu-item-border-clr":"{dropdown-bg-clr:transparent}","menu-item-height":"32px","menu-padding-top":"calc({menu-item-height} / 8)"},{"listbox-bg-clr":"{dropdown-bg-clr}","listbox-selected-clr":"{text-clr-inverted}","listbox-box-shadow":"{dropdown-box-shadow}","listbox-font-size":"{dropdown-text-size}","listbox-icon-clr":"{dropdown-icon-clr}","listbox-max-height":"{dropdown-max-height}","listbox-item-height":"36px","listbox-border-radius":"{dropdown-border-radius}"},{"textarea-height-sm":"80px","textarea-height-md":"140px","textarea-height-lg":"200px"},{"toggle-unchecked":"{neutral400}","toggle-checked":"{primary700}","toggle-error":"{error600}","toggle-size":"2.4rem","toggle-travel":"calc({toggle-size} * 0.666)"},{"loader-clr":"{neutral500}","loader-size":"16px"},{"skeleton-bg-clr":"{neutral200}","skeleton-fg-clr":"{neutral100}","skeleton-bg-opacity":"1","skeleton-fg-opacity":"1"},{"table-border-clr":"{neutral300}","table-border-width":"1px","table-bg-clr":"{neutral50}","table-font-size":"1.6rem","table-header-font-size":"1.4rem","table-cell-font-size":"1em","table-border-radius":"{radius}","table-padding-vert":"8px","table-padding-horz":"12px","table-sort-icon-clr":"{text-clr}","table-sort-icon-hover-clr":"{neutral400}","table-nesting-offset":"{table-padding-horz}","table-cell-height":"48px"},{"tab-border-width":"1px","tab-border-clr":"transparent","tab-padding-hori":"16px","tab-padding-vert":"8px","tab-radius":"{radius}","tab-text-clr":"{text-clr-alt}","tab-bg-clr":"{neutral50}"},{"icon-size-sm":"18px","icon-size-md":"24px","icon-size-lg":"36px"},{"popover-animation":"transform 200ms ease, opacity 200ms","popover-distance":"5px"},{"checkbox-border-radius":"{radius}","checkbox-checked":"{accent-clr}","checkbox-border-clr":"{neutral600}","checkbox-border-width":"2px","checkbox-icon-clr":"{neutral50}","checkbox-bg-clr":"none","checkbox-text-clr":"{text-clr}","checkbox-size":"20px","checkbox-label-spacing":"12px","checkbox-label-font-size":"1.6rem","checkbox-label-height":"24px"},{"radio-border-radius":"50%","radio-checked":"{accent-clr}","radio-border-clr":"{neutral600}","radio-border-width":"2px","radio-bg-clr":"none","radio-size":"20px","radio-label-spacing":"12px","radio-label-font-size":"1.6rem","radio-label-padding-top":"0","radio-label-padding-left":"32px","radio-label-height":"24px"},{"time-clr":"{neutral200}","time-selected-back-clr":"{primary600}","time-selected-text-clr":"{neutral100}"},{"calendar-clr":"{neutral200}","calendar-selected-bg-clr":"{accent-clr}","calendar-selected-text-clr":"{neutral100}"},{"card-bg-clr":"{background-clr-alt}","card-text-clr":"{text-clr}","card-radius":"{radius}","card-border":"none","card-padding":"10px","card-panel-bg-clr":"{background-clr}","card-panel-text-clr":"{text-clr}","card-panel-padding":"10px","card-divider-border":"1px solid {neutral300}","card-divider-margin":"10px"},{"tooltip-bg-clr":"{background-clr-inverted}","tooltip-text-clr":"{text-clr-inverted}","tooltip-radius":"{radius}","tooltip-arrow-radius":"2px","tooltip-padding-vert":"8px","tooltip-padding-horiz":"8px","tooltip-font-size":"1.3rem","tooltip-font-weight":"normal"},{"chip-bg-clr":"{neutral100}","chip-text-clr":"{text-clr-alt}","chip-radius":"{radius}","chip-hover-bg-clr":"{neutral200}","chip-selected-bg-clr":"{accent-clr}","chip-selected-hover-bg-clr":"{primary800}","chip-selected-text-clr":"{text-clr-inverted}","chip-btn-hover-bg-clr":"{neutral200}","chip-border-clr":"{neutral300}","chip-border":"1px solid {chip-border-clr}"},{"divider-bg-clr":"{neutral300}","divider-width":"1px","divider-margin-main":"5px","divider-margin-secondary":"0px"},{"link-text-clr":"{accent-clr}","link-bg-clr":"transparent","link-hover-text-clr":"{accent-clr-alt}","link-hover-bg-clr":"transparent","link-text-decoration":"underline"},{"animation-clr":"{neutral500}"},{"list-bg-clr":"transparent","list-border-clr":"{border-clr-primary}","list-border-width":"{border-width}","list-border-style":"{border-style}","list-border-radius":"{radius}","list-item-padding":"{space-4}","list-divider-border-clr":"{list-border-clr}","list-divider-border-width":"{list-border-width}","list-divider-border-style":"{list-border-style}"},{"progress-circle-bg-clr":"transparent","progress-circle-track-clr":"{neutral200}","progress-circle-indicator-clr":"{accent-clr}"})}),p=(0,o.createContext)(null);function u(e){var r=e.children,n=e.theme,t=void 0===n?c:n,i=e.applyDefaultStyles,o=void 0!==i&&i,s=t._Component;return(0,a.jsx)(p.Provider,{value:{theme:t,applyDefaultStyles:o},children:(0,a.jsxs)(l.NP,{theme:t,children:[(0,a.jsx)(s,{}),o&&(0,a.jsx)(d,{}),r]})})}},6875:(e,r,n)=>{n.d(r,{Y:()=>h});var t,i=n(8587),a=n(4848),o=n(5276),l=n(3540),s=n(5920),d=n(2297),c=l.Ay.div(t||(t=(0,o.A)(["\n  ","\n  ",'\n\n  &[data-merged] {\n    gap: 0;\n\n    // Stops button from moving when you click on them\n    & > [data-pressed="true"] {\n      transform: none;\n    }\n  }\n\n  &[data-direction="column"] {\n    &[data-merged] > {\n      :first-child,\n      :first-child input {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n        border-bottom: 0;\n      }\n\n      :not(:first-child):not(:last-child),\n      :not(:first-child):not(:last-child) input {\n        border-bottom: 0;\n        border-radius: 0;\n      }\n\n      :last-child,\n      :last-child input {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n      }\n    }\n  }\n\n  &[data-direction="column-reverse"] {\n    &[data-merged] > {\n      :first-child,\n      :first-child input {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        border-top: 0;\n      }\n\n      :not(:first-child):not(:last-child),\n      :not(:first-child):not(:last-child) input {\n        border-top: 0;\n        border-radius: 0;\n      }\n\n      :last-child,\n      :last-child input {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n    }\n  }\n\n  &[data-direction="row"] {\n    &[data-merged] > {\n      :first-child,\n      :first-child input {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-right: 0;\n      }\n\n      :not(:first-child):not(:last-child),\n      :not(:first-child):not(:last-child) input {\n        border-right: 0;\n        border-radius: 0;\n      }\n\n      :last-child,\n      :last-child input {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      }\n    }\n  }\n\n  &[data-direction="row-reverse"] {\n    &[data-merged] > {\n      :first-child,\n      :first-child input {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        border-left: 0;\n      }\n\n      :not(:first-child):not(:last-child),\n      :not(:first-child):not(:last-child) input {\n        border-left: 0;\n        border-radius: 0;\n      }\n\n      :last-child,\n      :last-child input {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n    }\n  }\n'])),d.U,s.Zp),p=n(2895),u=["children","isMerged","className","id","style","$direction"];function h(e){var r=e.children,n=e.isMerged,t=e.className,o=e.id,l=e.style,s=e.$direction,d=void 0===s?"row":s,h=(0,i.A)(e,u),b=(0,p.S)({componentClassName:"aje-group",className:t,children:r,style:l,selectors:{"data-merged":n}});return(0,a.jsx)(c,Object.assign({role:"group",id:o,"data-direction":d,$direction:d},b,h,{children:b.children}))}},6900:(e,r,n)=>{n.d(r,{k:()=>t});var t=(0,n(3539).x)()},7198:(e,r,n)=>{n.d(r,{s:()=>x});var t,i=n(8587),a=n(4848),o=n(6540),l=n(9344),s=n(2895),d=(0,n(3539).x)(),c=n(5276),p=n(3540),u=n(5920),h=n(2297),b=p.Ay.div(t||(t=(0,c.A)(["\n  ","\n  ","\n"])),h.U,u.Zp),g=["className","style","children"],x=(0,o.forwardRef)((function(e,r){var n=(0,l.J)(d,e,r);e=n[0],r=n[1];var t=e,o=t.className,c=t.style,p=t.children,u=(0,i.A)(t,g),h=(0,s.S)({componentClassName:"aje-flex",className:o,style:c,children:p});return(0,a.jsx)(b,Object.assign({ref:r},h,u,{children:h.children}))}));x.displayName="Flex"},7581:(e,r,n)=>{function t(e){return"number"==typeof e?e+"px":e}function i(e){return function(r){return function(n){return e(Object.assign({},r,n))}}}n.d(r,{Eu:()=>t,gB:()=>i})},9057:(e,r,n)=>{n.d(r,{p:()=>g});var t,i=n(8587),a=n(5276),o=n(4848),l=n(6540),s=n(3540),d=n(1388),c=n(9344),p=n(2895),u=n(741),h=["className","size","style"],b=s.Ay.input(t||(t=(0,a.A)(["\n  ","\n  ","\n  ","\n"])),d.Ay.Regular,d.Ay.InputLike,d.Ay.SizingX),g=(0,l.forwardRef)((function(e,r){var n=(0,c.J)(u.E,e,r);e=n[0],r=n[1];var t=e,a=t.className,l=t.size,s=t.style,d=(0,i.A)(t,h),g=(0,p.S)({componentClassName:a,size:l,style:s});return(0,o.jsx)(b,Object.assign({ref:r},g,d,{slot:d.slot||void 0}))}))},9344:(e,r,n)=>{n.d(r,{J:()=>c});var t=n(8587),i=n(3908),a=n(7099),o=n(2217),l=n(6540),s=Symbol("DEFAULT_SLOT");var d=["ref"];function c(e,r,n){var c=function(e,r){var n=(0,l.useContext)(e);if(null===r)return null;if(n&&"object"==typeof n&&"slots"in n&&n.slots){var t=Object.keys(n.slots);if(!r&&!n.slots[s])throw new Error("A slot prop is required. Valid slot names are "+t.join(", "));var i=r||s;if(!n.slots[i])throw new Error("Invalid slot name. Valid slot names are "+t.join(", "));return n.slots[i]}return n}(e,r.slot)||{},p=c.ref,u=(0,t.A)(c,d),h=(0,i.U)((0,a.P)(n,p));return[(0,o.v)(u,r),h]}},9870:(e,r,n)=>{n.d(r,{Q:()=>i});var t=["1","2","3","4","5","6","7","8","9"];function i(e){return t.includes(e)}}}]);