import{j as i}from"./iframe-CGPW5dgX.js";import{T as r,C as n,M as m,D as S,R as b}from"./helpers-tUmR_xN7.js";import{H as p}from"./Heading.component-OIsccaQK.js";import{F as T}from"./Flex.component-BDldr6hG.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./index-C0dagnaq.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./typography-DqSTiArL.js";import"./colors-PU9nFmCW.js";var l,c,d;const B={title:"Typography/Heading",component:p,parameters:{primaryStyleProps:["$size","$weight","$color","$align","$lineHeight","$letterSpacing","$wrap","$truncate","$clamp","$decoration","$transform"]},argTypes:{...b,...m,...r,...n,...S,$size:{...r.$size,table:{...(l=r.$size)==null?void 0:l.table,defaultValue:{summary:'"6"'}}},$m:{...m.$m,table:{...(c=m.$m)==null?void 0:c.table,defaultValue:{summary:'"0"'}}},$color:{...n.$color,table:{...(d=n.$color)==null?void 0:d.table,defaultValue:{summary:'"text-clr"'}}},$align:{...r.$align,description:"Horizontal text alignment."},as:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The semantic element to use for the heading. Does not affect styling."}}},a={args:{children:"Heading"}},s={render:t=>i.jsx(T,{$direction:"column",$gap:"2",children:["9","8","7","6","5","4","3","2","1"].map(e=>i.jsxs(p,{...t,$size:e,children:["Size ",e]},e))})},o={render:t=>i.jsx(T,{$direction:"column",$gap:"2",children:["h1","h2","h3","h4","h5","h6"].map(e=>i.jsxs(p,{...t,as:e,children:["Heading ",e]},e))})},G=["Primary","Sizes","Levels"];var g,$,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Heading"
  }
}`,...(h=($=a.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var u,y,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Flex $direction="column" $gap="2">
      {(["9", "8", "7", "6", "5", "4", "3", "2", "1"] as const).map(size => <Heading key={size} {...args} $size={size}>
          Size {size}
        </Heading>)}
    </Flex>
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var H,z,f;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Flex $direction="column" $gap="2">
      {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map(level => <Heading key={level} {...args} as={level}>
          Heading {level}
        </Heading>)}
    </Flex>
}`,...(f=(z=o.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};export{o as Levels,a as Primary,s as Sizes,G as __namedExportsOrder,B as default};
