import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{I as e,S as n}from"./Collection-_kdosoh5.js";import{M as d}from"./Menu.component-CBFymae4.js";import"./index-DJO9vBfz.js";import"./CollectionBuilder-DRj8-oKX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./index-i5X67GZP.js";import"./useObjectRef-B0fXxeND.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-D3ubgvA_.js";import"./useSelectableItem-DvhFvnzE.js";import"./FocusScope-F7zojRTj.js";import"./focusSafely-DAnwb70X.js";import"./usePress-DLdGKM_D.js";import"./useEvent-DE_dT4RF.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./context-CKyfYUWk.js";import"./useDescription-DnVXAhCi.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-DksGeqLW.js";import"./getItemCount-v0kWppE5.js";import"./useFocus-CqC7M1wJ.js";import"./utils-BwOaQS7j.js";import"./useHover-D34ofACQ.js";import"./useKeyboard-A8_doyNT.js";import"./useForwardedRef-BqZ3RrEL.js";import"./Provider-B9Eqn13H.js";import"./useCollectionRenderer-DqbkNnVh.js";import"./useControlledState-CN8sBTKq.js";import"./useRenderProps-BqJZ5b79.js";import"./useFocusRing-DokLxauV.js";import"./useFocusWithin-Dppy9HPm.js";import"./index-B_KxbAnX.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./mixins-TlkgTuSN.js";import"./Divider.component-DwvL9aOv.js";import"./utils-CWBnbg5w.js";const tt={title:"Dropdowns/Menu/Menu",component:d,decorators:[l=>t.jsx("div",{style:{border:"1px solid gray",borderRadius:"5px",padding:"1px"},children:t.jsx(l,{})})],parameters:{layout:"centered"},argTypes:{onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},disabledKeys:{control:"multi-select",options:["1","2","3"],description:"Keys of items that should be disabled."},shouldFocusWrap:{control:"boolean",description:"Whether focus should wrap around the menu when using the keyboard."}}},o={args:{children:[t.jsx(e,{onAction:()=>alert("Item 1"),children:"Item 1"},"1"),t.jsx(e,{onAction:()=>alert("Item 2"),children:"Item 2"},"2"),t.jsx(e,{onAction:()=>alert("Item 3"),children:"Item 3"},"3")]}},r={...o,args:{children:[t.jsxs(n,{title:"Section 1",children:[t.jsx(e,{onAction:()=>alert("Item 1"),children:"First Item in Section 1"},"1"),t.jsx(e,{onAction:()=>alert("Item 2"),children:"Second Item in Section 1"},"2")]},"section1"),t.jsxs(n,{title:"Section 2",children:[t.jsx(e,{onAction:()=>alert("Item 3"),children:"First Item in Section 2"},"3"),t.jsx(e,{onAction:()=>alert("Item 4"),children:"Second Item in Section 2"},"4")]},"section2")]}};var i,m,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Primary","WithSections"];export{o as Primary,r as WithSections,et as __namedExportsOrder,tt as default};
