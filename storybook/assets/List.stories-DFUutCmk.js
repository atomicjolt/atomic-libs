import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as S,R as C}from"./helpers-B5Ajgn2E.js";import{V as n}from"./index-J6U_l2Hf.js";import{I as r}from"./index-D3soG6-v.js";import{C as h}from"./index-DDc601ti.js";import{g as F}from"./cssprops-BO85xpNm.js";import{r as D}from"./index-BCtMShv3.js";import{c as k,u as _}from"./index-CsiUWFDz.js";import{u as G}from"./useRenderProps-CP918x9p.js";import{d as V}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as B}from"./mixins-XviowZ_6.js";import{m as N,p as P}from"./layout-C5ppTKTq.js";import{T as i}from"./Text.component-B9x4Xs0H.js";import{F as s}from"./Flex.component-rrKmR1Yr.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./colors-x_YFGAop.js";import"./Button.component-CR9mri1v.js";import"./useFocusRing-CLjBjOxD.js";import"./useFocusWithin-BshFo8_g.js";import"./usePress-B9aiz4Kw.js";import"./useButton-nVeIkIqk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-FIfyncSu.js";import"./SpinnerLoader.component-D-tKw9E3.js";import"./Loader.component-D7Erho5g.js";import"./Checkmark.component-9SUCBX5x.js";import"./Spinner.component-Bslo7_jG.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./index-EJ0-2BeM.js";import"./MaterialIcon.component-Ca-Jxrbg.js";import"./Icons.styles-D-JqKhr6.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFormValidation-BfT1egZx.js";import"./useToggle-CLxvcIRx.js";import"./useControlledState-vzCMHZvt.js";import"./useFormReset-BY6BQbOl.js";import"./Inputs.styles-DLBKMeQO.js";import"./ComboInput.styles-GNwh4bFc.js";import"./TextField.component-CnQxSBpY.js";import"./useTextField-CQoa95kJ.js";import"./useField-BY78xfaL.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./ComboInput.context-BgrINUmq.js";import"./Input.context-CDXu9Ele.js";import"./TextArea.context-C6JAP7JO.js";import"./NumberField.component-Dt_c_dU5.js";import"./useEvent-CeKNPFU-.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useSpinButton-LE97PPA9.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./utils-DqmNl-Il.js";import"./RequiredMarker-CwAzCIB3.js";import"./Message.component-FuO2yEmk.js";import"./ErrorMessage.component-ukBp7bMH.js";import"./typography-B_qJ0BtB.js";const R=k(),M=V.ul`
  ${B.Border("list")}
  ${N.defaults({$m:"0"})}
  padding: 0;
  list-style-type: none;
`,W=V.li`
  ${P.defaults({$p:"var(--list-item-padding)"})}

  &[data-divider]:not(:last-child) {
    border-bottom-color: var(--list-divider-border-clr);
    border-bottom-width: var(--list-divider-border-width);
    border-bottom-style: var(--list-divider-border-style);
  }
`,t=D.forwardRef(function(o,l){[o,l]=_(R,o,l);const{children:p,className:g,style:x,as:$,...u}=o,a=G({componentClassName:"aje-list",children:p,className:g,style:x});return e.jsx(M,{as:$,ref:l,...a,...u,children:a.children})});t.displayName="List";const A=D.forwardRef(function(o,l){const{children:p,className:g,style:x,showDivider:$=!0,...u}=o,a=G({componentClassName:"aje-list__item",children:p,className:g,style:x,selectors:{"data-divider":$}});return e.jsx(W,{ref:l,...a,...u,children:a.children})});t.Item=A;t.Item.displayName="List.Item";try{t.displayName="List",t.__docgenInfo={description:"Displays a list of items in a vertical layout",displayName:"List",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"ol"'},{value:'"ul"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}const li={title:"Content/List",component:t,subcomponents:{"List.Item":t.Item},parameters:{cssprops:F("List")},argTypes:{...C,...S}},c={args:{children:[e.jsxs(t.Item,{children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"4"),e.jsxs(t.Item,{children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"5"),e.jsxs(t.Item,{children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"6")]}},m={args:{children:[e.jsx(t.Item,{children:e.jsxs(s,{$gap:"2",$align:"center",children:[e.jsxs(n,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(r,{icon:"edit",variant:"ghost"}),e.jsx(r,{icon:"close",variant:"ghost"})]})},"4"),e.jsx(t.Item,{children:e.jsxs(s,{$gap:"2",$align:"center",children:[e.jsxs(n,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(r,{icon:"edit",variant:"ghost"}),e.jsx(r,{icon:"close",variant:"ghost"})]})},"5"),e.jsx(t.Item,{children:e.jsxs(s,{$gap:"2",$align:"center",children:[e.jsxs(n,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(r,{icon:"edit",variant:"ghost"}),e.jsx(r,{icon:"close",variant:"ghost"})]})},"6")]}},d={args:{children:[e.jsx(t.Item,{children:e.jsxs(s,{$gap:"2",$align:"center",children:[e.jsx(h,{"aria-label":"Select medicine",defaultSelected:!0}),e.jsxs(n,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"4"),e.jsx(t.Item,{children:e.jsxs(s,{$gap:"2",$align:"center",children:[e.jsx(h,{"aria-label":"Select travelling"}),e.jsxs(n,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"5"),e.jsx(t.Item,{children:e.jsxs(s,{$gap:"2",$align:"center",children:[e.jsx(h,{"aria-label":"Select gaming",defaultSelected:!0}),e.jsxs(n,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"6")]}};var v,j,L;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(j=c.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var w,T,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
          <IconButton icon="edit" variant="ghost" />
          <IconButton icon="close" variant="ghost" />
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
          <IconButton icon="edit" variant="ghost" />
          <IconButton icon="close" variant="ghost" />
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
          <IconButton icon="edit" variant="ghost" />
          <IconButton icon="close" variant="ghost" />
        </Flex>
      </List.Item>]
  }
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var z,b,y;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const ai=["Primary","WithActions","WithSelection"];export{c as Primary,m as WithActions,d as WithSelection,ai as __namedExportsOrder,li as default};
