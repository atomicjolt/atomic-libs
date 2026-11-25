import{h as S,j as o}from"./iframe-CGPW5dgX.js";import{l as u,f as h,A as f,a as y,k as x,I as i}from"./helpers-tUmR_xN7.js";import{L as b}from"./ListBox.component-CnBM7hB0.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useSelectableList-BWSkIROv.js";import"./useSelectableItem-BeBcEVva.js";import"./useEvent-CiV_uWQE.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DFxiutEz.js";import"./context-CLSG1ylv.js";import"./useDescription-DvoUWjyy.js";import"./DOMLayoutDelegate-OHLFlax3.js";import"./useCollator-BIvanRFU.js";import"./getItemCount-_wmYjxUG.js";import"./useHover-9VTiwztB.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./useFocusRing-Dbcio0BW.js";import"./useForwardedRef-DFbI-FzN.js";import"./useCollectionRenderer-BQP_5EoS.js";import"./Provider-CKCHWQEo.js";import"./index-C0dagnaq.js";import"./mixins-BJuiWlrm.js";import"./Label.component-Bo8kkSzq.js";import"./Label.context-D58S6_wU.js";import"./useListState-BFwRYvsY.js";import"./Divider.component-B1vAuf1o.js";import"./utils-DqmNl-Il.js";const{fn:M}=__STORYBOOK_MODULE_TEST__,ae={title:"Dropdowns/Selection/ListBox",component:b,parameters:{cssprops:{listbox:S}},argTypes:{...y,...f,...h,size:{control:"select",options:["small","medium","large","auto","full"],description:"The size of the listbox",table:{defaultValue:{summary:'"medium"'}}},label:{control:"text",description:"Visible label rendered above the listbox. Without one, set `aria-label`."},children:{control:!1}}},e={args:{"aria-label":"Categories",selectionMode:"single",defaultSelectedKeys:["news"],selectionBehavior:"toggle",children:u,onSelectionChange:M()}},t={args:{...e.args,selectionMode:"multiple",defaultSelectedKeys:["news","gaming"]}},r={args:{...e.args,children:[...u,o.jsxs(x,{title:"Section Title",children:[o.jsx(i,{id:4,children:"Option 4"}),o.jsx(i,{id:5,children:"Option 5"})]})]}},le=["Primary","MultipleSelection","WithSections"];var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    "aria-label": "Categories",
    selectionMode: "single",
    defaultSelectedKeys: ["news"],
    selectionBehavior: "toggle",
    children: MultiSelectItemChildren,
    onSelectionChange: fn()
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    selectionMode: "multiple",
    defaultSelectedKeys: ["news", "gaming"]
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: [...MultiSelectItemChildren, <Section title="Section Title">
        <Item id={4}>Option 4</Item>
        <Item id={5}>Option 5</Item>
      </Section>]
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};export{t as MultipleSelection,e as Primary,r as WithSections,le as __namedExportsOrder,ae as default};
