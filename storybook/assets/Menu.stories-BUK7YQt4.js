import{j as e}from"./iframe-CGPW5dgX.js";import{A as d,I as t,k as i}from"./helpers-tUmR_xN7.js";import{M as I}from"./Menu.component-D_obDr5z.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./displayName-CEXLPPBu.js";import"./index-BjoBGrPA.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-BWSkIROv.js";import"./useSelectableItem-BeBcEVva.js";import"./usePress-BioWcz2v.js";import"./useEvent-CiV_uWQE.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DFxiutEz.js";import"./context-CLSG1ylv.js";import"./useDescription-DvoUWjyy.js";import"./DOMLayoutDelegate-OHLFlax3.js";import"./useCollator-BIvanRFU.js";import"./getItemCount-_wmYjxUG.js";import"./useHover-9VTiwztB.js";import"./useForwardedRef-DFbI-FzN.js";import"./Provider-CKCHWQEo.js";import"./useCollectionRenderer-BQP_5EoS.js";import"./useRenderProps-B7rIWDyP.js";import"./useFocusRing-Dbcio0BW.js";import"./useFocusWithin-BzfIRRcZ.js";import"./index-C0dagnaq.js";import"./mixins-BJuiWlrm.js";import"./Divider.component-B1vAuf1o.js";import"./utils-DqmNl-Il.js";const V={title:"Dropdowns/Menu/Menu",component:I,decorators:[p=>e.jsx("div",{style:{border:"var(--border)",borderRadius:"var(--radius)",padding:"1px"},children:e.jsx(p,{})})],parameters:{layout:"centered"},argTypes:{...d,onAction:{action:"onAction",description:"Called with the key of the item the user selects.",table:{category:"Events"}},selectionMode:{control:"select",options:["none","single","multiple"],description:"Whether items can be selected, and how many at once.",table:{category:"Selection"}},selectedKeys:{control:"multi-select",options:["1","2","3"],description:"Keys of the selected items (controlled).",table:{category:"Selection"}},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},disabledKeys:{control:"multi-select",options:["1","2","3"],description:"Keys of items that should be disabled."},shouldFocusWrap:{control:"boolean",description:"Whether focus should wrap around the menu when using the keyboard."}}},o={args:{"aria-label":"Actions",children:[e.jsx(t,{onAction:()=>alert("Item 1"),children:"Item 1"},"1"),e.jsx(t,{onAction:()=>alert("Item 2"),children:"Item 2"},"2"),e.jsx(t,{onAction:()=>alert("Item 3"),children:"Item 3"},"3")]}},n={...o,args:{"aria-label":"Actions",children:[e.jsxs(i,{title:"Section 1",children:[e.jsx(t,{onAction:()=>alert("Item 1"),children:"First Item in Section 1"},"1"),e.jsx(t,{onAction:()=>alert("Item 2"),children:"Second Item in Section 1"},"2")]},"section1"),e.jsxs(i,{title:"Section 2",children:[e.jsx(t,{onAction:()=>alert("Item 3"),children:"First Item in Section 2"},"3"),e.jsx(t,{onAction:()=>alert("Item 4"),children:"Second Item in Section 2"},"4")]},"section2")]}},X=["Primary","WithSections"];var r,c,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    "aria-label": "Actions",
    children: [<Item key="1" onAction={() => alert("Item 1")}>
        Item 1
      </Item>, <Item key="2" onAction={() => alert("Item 2")}>
        Item 2
      </Item>, <Item key="3" onAction={() => alert("Item 3")}>
        Item 3
      </Item>]
  }
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var m,a,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Primary,
  args: {
    "aria-label": "Actions",
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
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};export{o as Primary,n as WithSections,X as __namedExportsOrder,V as default};
