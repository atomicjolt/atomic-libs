import{j as t}from"./iframe-CGPW5dgX.js";import{T as o,C as s,D as b,R as k,M as z}from"./helpers-tUmR_xN7.js";import{T as f}from"./Text.component-Br2J6Hgv.js";import{V as j}from"./View.component-BOuwyr5T.js";import{L as v}from"./Link.component-CV_fEdvk.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./index-C0dagnaq.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./typography-DqSTiArL.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./colors-PU9nFmCW.js";import"./useLink-PwQmwW74.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BioWcz2v.js";var n;const N={title:"Typography/Text",component:f,parameters:{primaryStyleProps:["$size","$weight","$color","$align","$lineHeight","$letterSpacing","$wrap","$truncate","$clamp","$decoration","$transform"]},argTypes:{...z,...k,...o,...s,...b,$color:{...s.$color,table:{...(n=s.$color)==null?void 0:n.table,defaultValue:{summary:'"text-clr"'}}},$align:{...o.$align,description:"Horizontal text alignment."},as:{control:"select",options:["div","span","p","label"]}}},r={args:{as:"div",$size:"3",children:"The quick brown fox jumps over the lazy dog"}},e={args:{as:"p",$size:"3",children:["The quick brown fox jumps over the ",t.jsx(v,{target:"_blank",href:"https://example.com",children:"lazy dog"})]}},a={render:q=>t.jsx(j,{$maxWidth:"250px",children:t.jsx(f,{...q,children:"The quick brown fox jumps over the lazy dog"})}),args:{...r.args,$truncate:!0}},i={args:{...r.args,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium distinctio eius nesciunt eveniet sint ad dicta suscipit, quod ipsum facere laboriosam adipisci excepturi quia deserunt, aperiam maxime neque dignissimos atque!",$clamp:"2",$maxWidth:"250px"}},Q=["Primary","WithLink","Truncated","Clamped"];var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    as: "div",
    $size: "3",
    children: "The quick brown fox jumps over the lazy dog"
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    as: "p",
    $size: "3",
    children: ["The quick brown fox jumps over the ", <Link target="_blank" href="https://example.com">
        lazy dog
      </Link>]
  }
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <View $maxWidth="250px">
        <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
      </View>;
  },
  args: {
    ...Primary.args,
    $truncate: true
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var $,y,T;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: \`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium distinctio eius nesciunt eveniet sint ad dicta suscipit, quod ipsum facere laboriosam adipisci excepturi quia deserunt, aperiam maxime neque dignissimos atque!\`,
    $clamp: "2",
    $maxWidth: "250px"
  }
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};export{i as Clamped,r as Primary,a as Truncated,e as WithLink,Q as __namedExportsOrder,N as default};
