import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as S,R as C}from"./helpers-CVUqcLcb.js";import{V as n}from"./index-DHvmYUXb.js";import{g as F}from"./cssprops-BO85xpNm.js";import{r as D}from"./index-DmM0KDA7.js";import{c as k,u as _}from"./index-9MQGFWEg.js";import{u as G}from"./useRenderProps-BzxgHqRb.js";import{d as V}from"./styled-components.browser.esm-B0S50oBn.js";import{m as B}from"./mixins-CgZ-Dp8B.js";import{m as N,p as P}from"./layout-C5ppTKTq.js";import{T as i}from"./Text.component-k2WoJ1iK.js";import{F as s}from"./Flex.component-CLGTqHVr.js";import{I as r}from"./IconButton.component-D_uitLdX.js";import{C as h}from"./Checkbox.component-uz051Vcl.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-Blx8idkz.js";import"./CollectionBuilder-C8aBQCuV.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-DDF3Tgcq.js";import"./useObjectRef-BMBYa31u.js";import"./SSRProvider-nIDwi1ZO.js";import"./colors-x_YFGAop.js";import"./index-CrEZfznw.js";import"./utils-DqmNl-Il.js";import"./typography-B_qJ0BtB.js";import"./index-DGavfVYP.js";import"./Icons.styles-D2L4nNgu.js";import"./filterDOMProps-CeZl_uWj.js";import"./Button.component-Bc8mRpye.js";import"./useFocusRing-CMFCJy1v.js";import"./useFocusWithin-ypR2cHkl.js";import"./usePress-BejIIMCm.js";import"./useButton-EuBryRSZ.js";import"./useLink-ytEWay4y.js";import"./SpinnerLoader.component-CKnzGd3o.js";import"./Loader.component-BVJk9SjC.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-Dtx1YsdI.js";import"./ProgressCircle.component-DRcKSkPB.js";import"./useLabel-C1USB2dP.js";import"./useLabels-DqNC8NnF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFormValidationState-CKAS44yz.js";import"./useFormValidation-Dk9gOIEC.js";import"./useToggle-DUU44cvO.js";import"./useControlledState-sJfMLWrs.js";import"./useFormReset-BZUjp8ic.js";import"./Inputs.styles--I-r401d.js";import"./ComboInput.styles-BLZOd1-l.js";import"./TextField.component-CaDaExmI.js";import"./useTextField-DhS2yjr8.js";import"./useField-BmPvDaI7.js";import"./Field.styles-B11u_h4j.js";import"./Provider-op_UCnZE.js";import"./Label.context-BCDtyvV0.js";import"./Message.context-D6YW8C9h.js";import"./ErrorMessage.context-B9WfFUFn.js";import"./ComboInput.context-U0WiImMe.js";import"./Input.context-CrdQundv.js";import"./TextArea.context-DZF5_oGm.js";import"./NumberField.component-DL9ZFZzi.js";import"./useEvent-DX5YI6yT.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useSpinButton-DcXDMVC3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./RequiredMarker-CwAzCIB3.js";import"./Message.component-B6INgsEF.js";import"./ErrorMessage.component-Bw4NU7_y.js";const R=k(),M=V.ul`
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
