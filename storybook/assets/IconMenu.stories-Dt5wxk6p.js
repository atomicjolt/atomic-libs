import{b as f,m as x,k,j as e}from"./iframe-CGPW5dgX.js";import{A as j,I as t,k as A}from"./helpers-tUmR_xN7.js";import{I as M}from"./IconMenu.component-DtQbg4VI.js";import{M as n}from"./MaterialIcon.component-Dhrh5rCP.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./displayName-CEXLPPBu.js";import"./MenuTrigger-fof7Lex8.js";import"./useMenuTrigger-BtfO2YQa.js";import"./useSelectableItem-BeBcEVva.js";import"./usePress-BioWcz2v.js";import"./useEvent-CiV_uWQE.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DFxiutEz.js";import"./context-CLSG1ylv.js";import"./useDescription-DvoUWjyy.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./useOverlayTrigger-Bavuc6A6.js";import"./useCloseOnScroll-CTNw5Yby.js";import"./PressResponder-xHF_wXhX.js";import"./Provider-CKCHWQEo.js";import"./Popover.context-D_v2VeGP.js";import"./index-C0dagnaq.js";import"./Menu.component-D_obDr5z.js";import"./index-BjoBGrPA.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-BWSkIROv.js";import"./DOMLayoutDelegate-OHLFlax3.js";import"./useCollator-BIvanRFU.js";import"./getItemCount-_wmYjxUG.js";import"./useHover-9VTiwztB.js";import"./useForwardedRef-DFbI-FzN.js";import"./useCollectionRenderer-BQP_5EoS.js";import"./useRenderProps-B7rIWDyP.js";import"./useFocusRing-Dbcio0BW.js";import"./useFocusWithin-BzfIRRcZ.js";import"./mixins-BJuiWlrm.js";import"./Divider.component-B1vAuf1o.js";import"./utils-DqmNl-Il.js";import"./context-ID_07sjv.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-DfGm2mCW.js";import"./IconButton.component-CifirOzj.js";import"./BaseButton-B8bVR-o6.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";import"./Popover.component-DVBx73LK.js";import"./VisuallyHidden-BPd2hceK.js";import"./useOverlayPosition-HaX0xHeb.js";import"./Icons.styles-tJBW4wd9.js";const Le={title:"Dropdowns/Menu/IconMenu",component:M,parameters:{layout:"centered",cssprops:{dropdown:k,menu:x,button:f}},argTypes:{buttonVariant:{control:"select",options:["border","ghost","primary","secondary","link","error","success","inverted","content"],description:"Variant of the trigger button.",table:{defaultValue:{summary:'"border"'}}},icon:{table:{defaultValue:{summary:'"more_vert"'}}},size:{table:{defaultValue:{summary:'"medium"'}}},iconVariant:{control:"select",options:["default","outlined","round","sharp","two-tone"]},children:{control:!1},"aria-label":{...j["aria-label"],description:"Accessible label for the icon-only trigger button and the menu."},onAction:{action:"onAction",description:"Called with the key of the item the user selects.",table:{category:"Events"}},onClose:{description:"Callback for when the menu is closed.",table:{category:"Events"}},onOpenChange:{description:"Callback for when the menu is opened or closed.",table:{category:"Events"}},isOpen:{control:"boolean",description:"Control the open state of the menu externally."},defaultOpen:{control:"boolean",description:"Whether the menu is open by default."},disabledKeys:{control:"multi-select",options:["item1","item2","item3"],description:"Keys of items that should be disabled."}}},r={args:{"aria-label":"More options",children:[e.jsx(t,{id:"item1",onAction:()=>alert("Item 1"),children:"Item 1"},"item1"),e.jsx(t,{id:"item2",onAction:()=>alert("Item 2"),children:"Item 2"},"item2"),e.jsx(t,{id:"item3",onAction:()=>alert("Item 3"),children:"Item 3"},"item3")]}},o={args:{...r.args,children:[e.jsx(t,{children:"Item 1"},"item1"),e.jsx(t,{children:"Item 2"},"item2"),e.jsxs(A,{children:[e.jsx(t,{children:"Item 3"},"item3"),e.jsx(t,{children:"Item 4"},"item4")]},"section")]}},i={args:{...r.args,children:[e.jsxs(t,{children:[e.jsx(n,{icon:"edit"}),"Edit"]},"item1"),e.jsxs(t,{children:[e.jsx(n,{icon:"delete"}),"Delete"]},"item2"),e.jsxs(t,{children:[e.jsx(n,{icon:"archive"}),"Archive"]},"item3")]}},m={args:{...r.args,disabledKeys:["item2"]}},Re=["Primary","WithSections","WithIcons","DisabledItems"];var s,a,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    "aria-label": "More options",
    children: [<Item id="item1" key="item1" onAction={() => alert("Item 1")}>
        Item 1
      </Item>, <Item id="item2" key="item2" onAction={() => alert("Item 2")}>
        Item 2
      </Item>, <Item id="item3" key="item3" onAction={() => alert("Item 3")}>
        Item 3
      </Item>]
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Item key="item1">Item 1</Item>, <Item key="item2">Item 2</Item>, <Section key="section">
        <Item key="item3">Item 3</Item>
        <Item key="item4">Item 4</Item>
      </Section>]
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var I,h,u;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [<Item key="item1">
        <MaterialIcon icon="edit" />
        Edit
      </Item>, <Item key="item2">
        <MaterialIcon icon="delete" />
        Delete
      </Item>, <Item key="item3">
        <MaterialIcon icon="archive" />
        Archive
      </Item>]
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,b,g;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabledKeys: ["item2"]
  }
}`,...(g=(b=m.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};export{m as DisabledItems,r as Primary,i as WithIcons,o as WithSections,Re as __namedExportsOrder,Le as default};
