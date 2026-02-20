import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as e,S as n}from"./Collection-DqSZYP0m.js";import{M as d}from"./Menu.component-D86lteMu.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BCtMShv3.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./index-EJ0-2BeM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-DOP2QP6A.js";import"./useSelectableItem-CvsJxqRU.js";import"./usePress-CzUfyTu7.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DX4qyq_T.js";import"./context-z6pb9OkM.js";import"./useDescription-CqPnuqnT.js";import"./DOMLayoutDelegate-BJPzvQxW.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-CzsFhO7O.js";import"./useHover-OH12LaHi.js";import"./useForwardedRef-Tweo1nQG.js";import"./Provider-op_UCnZE.js";import"./useCollectionRenderer-3wNxxKkU.js";import"./useControlledState-vzCMHZvt.js";import"./useRenderProps-CP918x9p.js";import"./useFocusRing-88kjlAJd.js";import"./useFocusWithin-AgzTPs3-.js";import"./index-CsiUWFDz.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./mixins-XviowZ_6.js";import"./Divider.component-BrVxhPI1.js";import"./utils-DqmNl-Il.js";const X={title:"Dropdowns/Menu/Menu",component:d,decorators:[l=>t.jsx("div",{style:{border:"var(--border)",borderRadius:"var(--radius)",padding:"1px"},children:t.jsx(l,{})})],parameters:{layout:"centered"},argTypes:{onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},disabledKeys:{control:"multi-select",options:["1","2","3"],description:"Keys of items that should be disabled."},shouldFocusWrap:{control:"boolean",description:"Whether focus should wrap around the menu when using the keyboard."}}},o={args:{children:[t.jsx(e,{onAction:()=>alert("Item 1"),children:"Item 1"},"1"),t.jsx(e,{onAction:()=>alert("Item 2"),children:"Item 2"},"2"),t.jsx(e,{onAction:()=>alert("Item 3"),children:"Item 3"},"3")]}},r={...o,args:{children:[t.jsxs(n,{title:"Section 1",children:[t.jsx(e,{onAction:()=>alert("Item 1"),children:"First Item in Section 1"},"1"),t.jsx(e,{onAction:()=>alert("Item 2"),children:"Second Item in Section 1"},"2")]},"section1"),t.jsxs(n,{title:"Section 2",children:[t.jsx(e,{onAction:()=>alert("Item 3"),children:"First Item in Section 2"},"3"),t.jsx(e,{onAction:()=>alert("Item 4"),children:"Second Item in Section 2"},"4")]},"section2")]}};var i,m,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: [<Item key="1" onAction={() => alert("Item 1")}>
        Item 1
      </Item>, <Item key="2" onAction={() => alert("Item 2")}>
        Item 2
      </Item>, <Item key="3" onAction={() => alert("Item 3")}>
        Item 3
      </Item>]
  }
}`,...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var c,a,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Primary,
  args: {
    children: [<Section key="section1" title="Section 1">
        <Item key="1" onAction={() => alert("Item 1")}>
          First Item in Section 1
        </Item>
        <Item key="2" onAction={() => alert("Item 2")}>
          Second Item in Section 1
        </Item>
      </Section>, <Section key="section2" title="Section 2">
        <Item key="3" onAction={() => alert("Item 3")}>
          First Item in Section 2
        </Item>
        <Item key="4" onAction={() => alert("Item 4")}>
          Second Item in Section 2
        </Item>
      </Section>]
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Y=["Primary","WithSections"];export{o as Primary,r as WithSections,Y as __namedExportsOrder,X as default};
