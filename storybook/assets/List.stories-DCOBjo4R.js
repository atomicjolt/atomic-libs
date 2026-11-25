import{g as z,r as k,j as e,a0 as V}from"./iframe-CGPW5dgX.js";import{M,R as D}from"./helpers-tUmR_xN7.js";import{C as f}from"./CheckBox.component-CxjuYA2v.js";import{s as N}from"./displayName-CEXLPPBu.js";import{c as G,u as R}from"./index-C0dagnaq.js";import{u as P}from"./useRenderProps-B7rIWDyP.js";import{m as C}from"./mixins-BJuiWlrm.js";import{m as F,p as _}from"./layout-Dd7m2B0D.js";import{T as t}from"./Text.component-Br2J6Hgv.js";import{F as r}from"./Flex.component-BDldr6hG.js";import{V as a}from"./View.component-BOuwyr5T.js";import{I as s}from"./IconButton.component-CifirOzj.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useFormValidationState-CWonILzS.js";import"./useFormValidation-hpNb-DuC.js";import"./usePress-BioWcz2v.js";import"./useToggle-IjgFUxMK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-mO407CKi.js";import"./context-CLSG1ylv.js";import"./Inputs.styles-C-Gxmll0.js";import"./ComboInput.styles-CPtnBAXP.js";import"./SkeletonLoader.component-DalY9QZY.js";import"./index-BjoBGrPA.js";import"./TextField.component-DJemlHOu.js";import"./useTextField-CPDUiJax.js";import"./useField-DXQ2XZid.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./Field.styles-CxKAGZMW.js";import"./Provider-CKCHWQEo.js";import"./Label.context-D58S6_wU.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.context-tIEpfdG1.js";import"./ComboInput.context-3NxJI3U3.js";import"./Input.context-DET8yoFh.js";import"./TextArea.context-C9KYZsFH.js";import"./NumberField.component-fcYsibWP.js";import"./useFocusWithin-BzfIRRcZ.js";import"./useEvent-CiV_uWQE.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-BU1srigh.js";import"./LiveAnnouncer-CAA6IyTk.js";import"./BaseButton-B8bVR-o6.js";import"./useFocusRing-Dbcio0BW.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./colors-PU9nFmCW.js";import"./utils-DqmNl-Il.js";import"./RequiredMarker-C4F_ExJL.js";import"./Message.component-CIEamcUq.js";import"./ErrorMessage.component-DUCD1jzH.js";import"./typography-DqSTiArL.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";const B=G(),q=z.ul`
  ${C.Border("list")}
  ${F.defaults({$m:"0"})}
  padding: 0;
  list-style-type: none;
`,E=z.li`
  ${_.defaults({$p:"var(--list-item-padding)"})}

  &[data-divider]:not(:last-child) {
    border-bottom-color: var(--list-divider-border-clr);
    border-bottom-width: var(--list-divider-border-width);
    border-bottom-style: var(--list-divider-border-style);
  }
`,i=k.forwardRef(function(n,o){[n,o]=R(B,n,o);const{children:d,className:g,style:u,as:x,...$}=n,l=P({componentClassName:"aje-list",children:d,className:g,style:u});return e.jsx(q,{as:x,ref:o,...l,...$,children:l.children})});N(i,"List");const W=k.forwardRef(function(n,o){const{children:d,className:g,style:u,showDivider:x=!0,...$}=n,l=P({componentClassName:"aje-list__item",children:d,className:g,style:u,selectors:{"data-divider":x}});return e.jsx(E,{ref:o,...l,...$,children:l.children})});i.Item=W;N(i.Item,"List.Item");try{i.displayName="List",i.__docgenInfo={description:"Displays a list of items in a vertical layout",displayName:"List",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Content/List/List.component.tsx",methods:[],props:{as:{defaultValue:{value:'"ul"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/List/List.component.tsx",name:"ListProps"}],description:"",name:"as",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/List/List.component.tsx",name:"ListProps"},required:!1,tags:{default:'"ul"'},type:{name:"enum",raw:'"ol" | "ul"',value:[{value:'"ol"'},{value:'"ul"'}]}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}},$m:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"}],description:"",name:"$m",parent:{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"},required:!1,tags:{},type:{name:"SuggestStrings<Spacing>"}},$mx:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"}],description:"",name:"$mx",parent:{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"},required:!1,tags:{},type:{name:"SuggestStrings<Spacing>"}},$my:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"}],description:"",name:"$my",parent:{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"},required:!1,tags:{},type:{name:"SuggestStrings<Spacing>"}},$mt:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"}],description:"",name:"$mt",parent:{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"},required:!1,tags:{},type:{name:"SuggestStrings<Spacing>"}},$mr:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"}],description:"",name:"$mr",parent:{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"},required:!1,tags:{},type:{name:"SuggestStrings<Spacing>"}},$mb:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"}],description:"",name:"$mb",parent:{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"},required:!1,tags:{},type:{name:"SuggestStrings<Spacing>"}},$ml:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"}],description:"",name:"$ml",parent:{fileName:"atomic-libs/packages/atomic-elements/src/styles/layout.ts",name:"MarginProps"},required:!1,tags:{},type:{name:"SuggestStrings<Spacing>"}}},tags:{}}}catch{}const rt={title:"Content/List",component:i,subcomponents:{"List.Item":i.Item},parameters:{cssprops:{list:V}},argTypes:{...D,...M}},m={args:{children:[e.jsxs(i.Item,{children:[e.jsx(t,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(t,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"4"),e.jsxs(i.Item,{children:[e.jsx(t,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(t,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"5"),e.jsxs(i.Item,{children:[e.jsx(t,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(t,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"6")]}},c={args:{children:[e.jsx(i.Item,{children:e.jsxs(r,{$gap:"2",$align:"center",children:[e.jsxs(a,{$flexGrow:"1",children:[e.jsx(t,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(t,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(s,{icon:"edit",variant:"ghost","aria-label":"Edit"}),e.jsx(s,{icon:"close",variant:"ghost","aria-label":"Remove"})]})},"4"),e.jsx(i.Item,{children:e.jsxs(r,{$gap:"2",$align:"center",children:[e.jsxs(a,{$flexGrow:"1",children:[e.jsx(t,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(t,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(s,{icon:"edit",variant:"ghost","aria-label":"Edit"}),e.jsx(s,{icon:"close",variant:"ghost","aria-label":"Remove"})]})},"5"),e.jsx(i.Item,{children:e.jsxs(r,{$gap:"2",$align:"center",children:[e.jsxs(a,{$flexGrow:"1",children:[e.jsx(t,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(t,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(s,{icon:"edit",variant:"ghost","aria-label":"Edit"}),e.jsx(s,{icon:"close",variant:"ghost","aria-label":"Remove"})]})},"6")]}},p={args:{children:[e.jsx(i.Item,{children:e.jsxs(r,{$gap:"2",$align:"center",children:[e.jsx(f,{"aria-label":"Select medicine",defaultSelected:!0}),e.jsxs(a,{$flexGrow:"1",children:[e.jsx(t,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(t,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"4"),e.jsx(i.Item,{children:e.jsxs(r,{$gap:"2",$align:"center",children:[e.jsx(f,{"aria-label":"Select travelling"}),e.jsxs(a,{$flexGrow:"1",children:[e.jsx(t,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(t,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"5"),e.jsx(i.Item,{children:e.jsxs(r,{$gap:"2",$align:"center",children:[e.jsx(f,{"aria-label":"Select gaming",defaultSelected:!0}),e.jsxs(a,{$flexGrow:"1",children:[e.jsx(t,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(t,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"6")]}},at=["Primary","WithActions","WithSelection"];var y,b,v;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<List.Item key="4">
        <Text as="div" $size="3" $weight="bold">
          Medicine
        </Text>
        <Text $size="2" $color="neutral500">
          Description for medicine. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
      </List.Item>, <List.Item key="5">
        <Text as="div" $size="3" $weight="bold">
          Travelling
        </Text>
        <Text $size="2" $color="neutral500">
          Description for travelling. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
      </List.Item>, <List.Item key="6">
        <Text as="div" $size="3" $weight="bold">
          Gaming
        </Text>
        <Text $size="2" $color="neutral500">
          Description for gaming. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
      </List.Item>]
  }
}`,...(v=(b=m.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var L,j,w;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: [<List.Item key="4">
        <Flex $gap="2" $align="center">
          <View $flexGrow="1">
            <Text as="div" $size="3" $weight="bold">
              Medicine
            </Text>
            <Text $size="2" $color="neutral500">
              Description for medicine. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Text>
          </View>
          <IconButton icon="edit" variant="ghost" aria-label="Edit" />
          <IconButton icon="close" variant="ghost" aria-label="Remove" />
        </Flex>
      </List.Item>, <List.Item key="5">
        <Flex $gap="2" $align="center">
          <View $flexGrow="1">
            <Text as="div" $size="3" $weight="bold">
              Travelling
            </Text>
            <Text $size="2" $color="neutral500">
              Description for travelling. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Text>
          </View>
          <IconButton icon="edit" variant="ghost" aria-label="Edit" />
          <IconButton icon="close" variant="ghost" aria-label="Remove" />
        </Flex>
      </List.Item>, <List.Item key="6">
        <Flex $gap="2" $align="center">
          <View $flexGrow="1">
            <Text as="div" $size="3" $weight="bold">
              Gaming
            </Text>
            <Text $size="2" $color="neutral500">
              Description for gaming. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Text>
          </View>
          <IconButton icon="edit" variant="ghost" aria-label="Edit" />
          <IconButton icon="close" variant="ghost" aria-label="Remove" />
        </Flex>
      </List.Item>]
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var T,I,S;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: [<List.Item key="4">
        <Flex $gap="2" $align="center">
          <CheckBox aria-label="Select medicine" defaultSelected />
          <View $flexGrow="1">
            <Text as="div" $size="3" $weight="bold">
              Medicine
            </Text>
            <Text $size="2" $color="neutral500">
              Description for medicine. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Text>
          </View>
        </Flex>
      </List.Item>, <List.Item key="5">
        <Flex $gap="2" $align="center">
          <CheckBox aria-label="Select travelling" />
          <View $flexGrow="1">
            <Text as="div" $size="3" $weight="bold">
              Travelling
            </Text>
            <Text $size="2" $color="neutral500">
              Description for travelling. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Text>
          </View>
        </Flex>
      </List.Item>, <List.Item key="6">
        <Flex $gap="2" $align="center">
          <CheckBox aria-label="Select gaming" defaultSelected />
          <View $flexGrow="1">
            <Text as="div" $size="3" $weight="bold">
              Gaming
            </Text>
            <Text $size="2" $color="neutral500">
              Description for gaming. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Text>
          </View>
        </Flex>
      </List.Item>]
  }
}`,...(S=(I=p.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};export{m as Primary,c as WithActions,p as WithSelection,at as __namedExportsOrder,rt as default};
