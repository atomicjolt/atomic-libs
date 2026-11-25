import{j as e}from"./iframe-CGPW5dgX.js";import{R as x}from"./helpers-tUmR_xN7.js";import{a as g,D as r}from"./Disclosure.component-BIbhklHM.js";import{F as f}from"./Flex.component-BDldr6hG.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./displayName-CEXLPPBu.js";import"./useEvent-CiV_uWQE.js";import"./index-C0dagnaq.js";import"./Button.component-Bd4z0Gnh.js";import"./BaseButton-B8bVR-o6.js";import"./mixins-BJuiWlrm.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./useFocusRing-Dbcio0BW.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./useButton-CjI92Tj6.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./context-CLSG1ylv.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";import"./Provider-CKCHWQEo.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,se={title:"Content/Disclosure/DisclosureGroup",component:g,argTypes:{children:x.children,allowsMultipleExpanded:{type:"boolean",description:"Allow multiple panels to be expanded at once",table:{defaultValue:{summary:"false"}}},defaultExpandedKeys:{control:"multi-select",options:["d1","d2"],description:"Keys of the panels that are expanded by default (uncontrolled)"},expandedKeys:{control:"multi-select",options:["d1","d2"],description:"Keys of the panels that are expanded (controlled)"},onExpandedChange:{table:{category:"Events"}},isDisabled:{type:"boolean",description:"Disable all panels"}}},i={args:{onExpandedChange:D(),children:[e.jsxs(f,{$direction:"column",$gap:"10px",children:[e.jsxs(r,{id:"d1",children:[e.jsx(r.Trigger,{children:"First Disclosure"}),e.jsx(r.Panel,{children:e.jsx("p",{style:{fontSize:"25px"},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid consequuntur expedita ratione sed ab fugiat laudantium. Porro expedita, voluptate aspernatur consequatur inventore corporis odio voluptatem quod, corrupti, iste tempora."})})]},"d1"),e.jsxs(r,{id:"d2",children:[e.jsx(r.Trigger,{children:"Second Disclosure"}),e.jsx(r.Panel,{children:e.jsx("p",{style:{fontSize:"25px"},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo expedita officia quod, nihil molestiae voluptate vel laudantium facilis culpa debitis labore obcaecati temporibus ut repellendus, ab similique harum accusantium."})})]},"d2")]},"flex")]}},o={args:{...i.args,allowsMultipleExpanded:!0}},t={args:{...i.args,defaultExpandedKeys:["d2"]}},ae=["Primary","AllowsMultipleExpanded","DefaultExpandedKeys"];var s,a,n;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    onExpandedChange: fn(),
    children: [<Flex key="flex" $direction="column" $gap="10px">
        <Disclosure key="d1" id="d1">
          <Disclosure.Trigger>First Disclosure</Disclosure.Trigger>
          <Disclosure.Panel>
            <p style={{
            fontSize: "25px"
          }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              aliquid consequuntur expedita ratione sed ab fugiat laudantium.
              Porro expedita, voluptate aspernatur consequatur inventore
              corporis odio voluptatem quod, corrupti, iste tempora.
            </p>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure key="d2" id="d2">
          <Disclosure.Trigger>Second Disclosure</Disclosure.Trigger>
          <Disclosure.Panel>
            <p style={{
            fontSize: "25px"
          }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nemo expedita officia quod, nihil molestiae voluptate vel
              laudantium facilis culpa debitis labore obcaecati temporibus ut
              repellendus, ab similique harum accusantium.
            </p>
          </Disclosure.Panel>
        </Disclosure>
      </Flex>]
  }
}`,...(n=(a=i.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    allowsMultipleExpanded: true
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    defaultExpandedKeys: ["d2"]
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{o as AllowsMultipleExpanded,t as DefaultExpandedKeys,i as Primary,ae as __namedExportsOrder,se as default};
