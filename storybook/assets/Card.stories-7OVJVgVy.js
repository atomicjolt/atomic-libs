import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{g as z}from"./cssprops-CrN9keDZ.js";import{c as q}from"./index-i5X67GZP.js";import{d as s}from"./styled-components.browser.esm-WCay-hu9.js";import{m as w}from"./mixins-TlkgTuSN.js";import{F as W}from"./index-CiylWqPi.js";import{D as A}from"./Divider.component-DwvL9aOv.js";import"./index-DJO9vBfz.js";import"./utils-CWBnbg5w.js";import"./useRenderProps-BqJZ5b79.js";import"./filterDOMProps-CeZl_uWj.js";const i=s.div`
  background-color: var(--card-panel-bg-clr);
  color: var(--card-panel-text-clr);
  border-radius: var(--card-radius);
  padding: var(--card-panel-padding);
  font-size: 1.6rem;

  &.is-small {
    flex: 0 0 25%;
  }

  &.is-medium {
    flex: 0 0 50%;
  }

  &.is-large {
    flex: 0 0 75%;
  }

  &.is-full {
    flex: 1;
  }

  &.is-auto {
    flex: 0 0 auto;
  }
`,p=s.div`
  background-color: var(--card-bg-clr);
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);

  --divider-margin-secondary: calc(var(--card-panel-padding) * -1);

  & > ${i} {
    margin-bottom: var(--card-padding);
  }
  & > ${i}:last-child {
    margin-bottom: 0px;
  }
`,u=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px;
`,c=s.span`
  ${w.Bold}
  flex: 1;
  display: flex;
  align-items: center;
  color: var(--card-text-clr);
  font-size: 16px;
`,f=s.div`
  display: flex;
  flex-direction: row;
  gap: var(--card-padding);
`;try{i.displayName="StyledCardPanel",i.__docgenInfo={description:"",displayName:"StyledCardPanel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="CardWrapper",p.__docgenInfo={description:"",displayName:"CardWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="CardHeader",u.__docgenInfo={description:"",displayName:"CardHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="CardTitle",c.__docgenInfo={description:"",displayName:"CardTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{f.displayName="CardColumns",f.__docgenInfo={description:"",displayName:"CardColumns",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function e(a){const{children:n,id:l,className:d}=a;return r.jsx(p,{id:l,className:q("aje-card",d),children:n})}function N(a){const{size:n="full",children:l,className:d,...P}=a;return r.jsx(i,{className:q(d,`is-${n}`),...P,children:l})}function V(a){const{children:n}=a;return r.jsx(W,{gap:"var(--card-padding)",children:n})}e.Title=c;c.displayName="Card.Title";e.Panel=N;N.displayName="Card.Panel";e.Columns=V;V.displayName="Card.Columns";e.Header=u;u.displayName="Card.Header";e.Divider=A;try{e.Title.displayName="Card.Title",e.Title.__docgenInfo={description:"",displayName:"Card.Title",props:{id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}try{e.Panel.displayName="Card.Panel",e.Panel.__docgenInfo={description:"",displayName:"Card.Panel",props:{size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}}}}}catch{}try{e.Columns.displayName="Card.Columns",e.Columns.__docgenInfo={description:"",displayName:"Card.Columns",props:{}}}catch{}try{e.Header.displayName="Card.Header",e.Header.__docgenInfo={description:"",displayName:"Card.Header",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{e.Divider.displayName="Card.Divider",e.Divider.__docgenInfo={description:"A visual divider between two groups of content",displayName:"Card.Divider",props:{orientation:{defaultValue:null,description:"The orientation of the divider",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},spacing:{defaultValue:null,description:`The margins along the primary axis of the divider.
When "horizontal" it's the top & bottom margin and when
"vertical" it's the left & right margin`,name:"spacing",required:!1,type:{name:"string | number"}},as:{defaultValue:null,description:"The HTML element type that will be used to render the divider.",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Layouts/Card",component:e,parameters:{cssprops:z("Card")},subcomponents:{"Card.Title":e.Title,"Card.Panel":e.Panel,"Card.Columns":e.Columns}},t={args:{children:[r.jsx(e.Header,{children:r.jsx(e.Title,{children:"Card Title"})},"header"),r.jsx(e.Panel,{children:"Here is some content within a panel"},"panel")]}},o={render:a=>{const{column1Size:n,column2Size:l,...d}=a;return r.jsxs(e,{...d,children:[r.jsx(e.Header,{children:r.jsx(e.Title,{children:"Card Title"})}),r.jsxs(e.Columns,{children:[r.jsx(e.Panel,{size:n,children:"Column 1"}),r.jsx(e.Panel,{size:l,children:"Column 2"})]})]})},argTypes:{column1Size:{name:"Column 1 Size",control:"select",options:["small","medium","large","full","auto"]},column2Size:{name:"Column 2 Size",control:"select",options:["small","medium","large","full","auto"]}}},m={args:{...t.args,children:[r.jsx(e.Panel,{children:"Here is some content within a panel"},"panel1"),r.jsx(e.Divider,{},"divider"),r.jsx(e.Panel,{children:"Here is some content within a panel"},"panel2")]}};var y,g,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<Card.Header key="header">
        <Card.Title>Card Title</Card.Title>
      </Card.Header>, <Card.Panel key="panel">Here is some content within a panel</Card.Panel>]
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,_,v;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const {
      column1Size,
      column2Size,
      ...rest
    } = args;
    return <Card {...rest}>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Columns>
          <Card.Panel size={column1Size}>Column 1</Card.Panel>
          <Card.Panel size={column2Size}>Column 2</Card.Panel>
        </Card.Columns>
      </Card>;
  },
  argTypes: {
    column1Size: {
      name: "Column 1 Size",
      control: "select",
      options: ["small", "medium", "large", "full", "auto"]
    },
    column2Size: {
      name: "Column 2 Size",
      control: "select",
      options: ["small", "medium", "large", "full", "auto"]
    }
  }
}`,...(v=(_=o.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var T,b,x;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Card.Panel key="panel1">Here is some content within a panel</Card.Panel>, <Card.Divider key="divider" />, <Card.Panel key="panel2">Here is some content within a panel</Card.Panel>]
  }
}`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const L=["Primary","WithColumns","WithDivider"];export{t as Primary,o as WithColumns,m as WithDivider,L as __namedExportsOrder,F as default};
