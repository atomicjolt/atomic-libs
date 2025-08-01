import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as S,R as C}from"./helpers-C1PCfQ2p.js";import{F as n}from"./index-DzGcUmQS.js";import{V as o}from"./index-V5Hbp4UL.js";import{C as h}from"./index-BhUwXIW0.js";import{g as F}from"./cssprops-DECR0Nbg.js";import{r as D}from"./index-BCtMShv3.js";import{c as k,u as _}from"./index-CsiUWFDz.js";import{u as G}from"./useRenderProps-CP918x9p.js";import{d as V}from"./styled-components.browser.esm-Y4FpNNpy.js";import{m as B}from"./mixins-XviowZ_6.js";import{m as N,p as P}from"./layout-Dd7m2B0D.js";import{T as i}from"./Text.component-BZqSJ84J.js";import{I as r}from"./IconButton.component-BiujLnIS.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-DqSZYP0m.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./colors-x_YFGAop.js";import"./useFormValidationState-CONlS5Wo.js";import"./useFormValidation-BfT1egZx.js";import"./usePress-CzUfyTu7.js";import"./useToggle-BPntlL3P.js";import"./useControlledState-vzCMHZvt.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BY6BQbOl.js";import"./context-z6pb9OkM.js";import"./Inputs.styles-DtauTzvO.js";import"./ComboInput.styles-GNwh4bFc.js";import"./TextField.component-BvhYwr3I.js";import"./useTextField-CQoa95kJ.js";import"./useField-BY78xfaL.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./Field.styles-D_hvWyI3.js";import"./Provider-op_UCnZE.js";import"./Label.context-BbpE5KUK.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./ComboInput.context-BgrINUmq.js";import"./Input.context-CDXu9Ele.js";import"./TextArea.context-C6JAP7JO.js";import"./NumberField.component-lGAG1bSL.js";import"./useFocusWithin-AgzTPs3-.js";import"./useEvent-CeKNPFU-.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-bPI1pp_e.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button.context-BxdzJgC_.js";import"./number-nHrFdSb-.js";import"./utils-DqmNl-Il.js";import"./RequiredMarker-CwAzCIB3.js";import"./Message.component-BY76Ts6Z.js";import"./ErrorMessage.component-Dcm6zm2l.js";import"./index-EJ0-2BeM.js";import"./typography-B_qJ0BtB.js";import"./Button.component-D9ft15z0.js";import"./useFocusRing-88kjlAJd.js";import"./useButton-DYDUZLxM.js";import"./useLink-D8UViwUR.js";import"./SpinnerLoader.component-Cop6aFHP.js";import"./Loader.component-CsFH7sO8.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C59bpdXu.js";import"./ProgressCircle.component-gsiCSqhQ.js";import"./MaterialIcon.component-iQbEbiKP.js";import"./Icons.styles-D-JqKhr6.js";const R=k(),M=V.ul`
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
`,t=D.forwardRef(function(s,l){[s,l]=_(R,s,l);const{children:p,className:g,style:x,as:$,...u}=s,a=G({componentClassName:"aje-list",children:p,className:g,style:x});return e.jsx(M,{as:$,ref:l,...a,...u,children:a.children})});t.displayName="List";const A=D.forwardRef(function(s,l){const{children:p,className:g,style:x,showDivider:$=!0,...u}=s,a=G({componentClassName:"aje-list__item",children:p,className:g,style:x,selectors:{"data-divider":$}});return e.jsx(W,{ref:l,...a,...u,children:a.children})});t.Item=A;t.Item.displayName="List.Item";try{t.displayName="List",t.__docgenInfo={description:"Displays a list of items in a vertical layout",displayName:"List",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"ol"'},{value:'"ul"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}const ci={title:"Content/List",component:t,subcomponents:{"List.Item":t.Item},parameters:{cssprops:F("List")},argTypes:{...C,...S}},c={args:{children:[e.jsxs(t.Item,{children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"4"),e.jsxs(t.Item,{children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"5"),e.jsxs(t.Item,{children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"6")]}},m={args:{children:[e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(r,{icon:"edit",variant:"ghost"}),e.jsx(r,{icon:"close",variant:"ghost"})]})},"4"),e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(r,{icon:"edit",variant:"ghost"}),e.jsx(r,{icon:"close",variant:"ghost"})]})},"5"),e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(r,{icon:"edit",variant:"ghost"}),e.jsx(r,{icon:"close",variant:"ghost"})]})},"6")]}},d={args:{children:[e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsx(h,{"aria-label":"Select medicine",defaultSelected:!0}),e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"4"),e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsx(h,{"aria-label":"Select travelling"}),e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"5"),e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsx(h,{"aria-label":"Select gaming",defaultSelected:!0}),e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"6")]}};var v,j,L;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const mi=["Primary","WithActions","WithSelection"];export{c as Primary,m as WithActions,d as WithSelection,mi as __namedExportsOrder,ci as default};
