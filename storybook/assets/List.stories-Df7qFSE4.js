import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{R as S,h as C}from"./helpers-CB0EgwPk.js";import{F as n}from"./index-5u02HfcA.js";import{V as o}from"./index-CwFJb3A2.js";import{C as h}from"./index-ClOCYYKZ.js";import{g as F}from"./cssprops-BO85xpNm.js";import{r as D}from"./index-DJO9vBfz.js";import{c as k,u as _}from"./index-CHPAqjqs.js";import{u as G}from"./useRenderProps-Bk8BH60l.js";import{d as V}from"./styled-components.browser.esm-BQf_XqKi.js";import{m as B}from"./mixins-B7X2BZyR.js";import{m as N,p as P}from"./layout-UyCWIQlE.js";import{T as i}from"./Text.component-EtjVwgso.js";import{I as r}from"./IconButton.component-CFNeuELj.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./colors-x_YFGAop.js";import"./useFormValidation-CdG9-Yzp.js";import"./focusSafely-BOUv7I-8.js";import"./useObjectRef-CA0MXmrf.js";import"./useFormValidationState-DFldk10H.js";import"./useToggle-C8QZ9710.js";import"./useControlledState-CN8sBTKq.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D24hgWtm.js";import"./useFocusable-DHL4UX94.js";import"./useFocus-DXSPV_um.js";import"./utils-CrQpPYo7.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-DBLAzBwe.js";import"./context-BQ3_Es2z.js";import"./Inputs.styles-X1GDHMEw.js";import"./ComboInput.styles-x3aI4rV_.js";import"./TextField.component-CdIc8mBt.js";import"./useTextField-Bu86_h4p.js";import"./useField-DAe_M2wp.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./Field.styles-wtg9rJuP.js";import"./Provider-B9Eqn13H.js";import"./Label.context-BY30H9b8.js";import"./Message.context-BF8cnA0i.js";import"./ErrorMessage.context-Cr_J9O6j.js";import"./ComboInput.context-yOfG-dCd.js";import"./Input.context-Cu61juEz.js";import"./TextArea.context-DyHQEaSC.js";import"./NumberField.component-BNJO-Ai-.js";import"./useFocusWithin-Bb3mfDwa.js";import"./useEvent-D91OnqQ2.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-CkfgV2Fh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./utils-2VFVy79V.js";import"./RequiredMarker-DVRabd4Z.js";import"./Message.component-DuLpH4ma.js";import"./ErrorMessage.component-NUTqPfNd.js";import"./index-i5X67GZP.js";import"./typography-B_qJ0BtB.js";import"./index-jGwUeqkW.js";import"./Icons.styles-BaNpbbIh.js";import"./Button.component-7ZEnE2xC.js";import"./useFocusRing-PETNqKnG.js";import"./useButton-Bk3lNUMb.js";import"./useLink-XD5ax7xG.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";const R=k(),M=V.ul`
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
`,t=D.forwardRef(function(s,l){[s,l]=_(R,s,l);const{children:p,className:g,style:x,as:$,...u}=s,a=G({componentClassName:"aje-list",children:p,className:g,style:x});return e.jsx(M,{as:$,ref:l,...a,...u,children:a.children})});t.displayName="List";const A=D.forwardRef(function(s,l){const{children:p,className:g,style:x,showDivider:$=!0,...u}=s,a=G({componentClassName:"aje-list__item",children:p,className:g,style:x,selectors:{"data-divider":$}});return e.jsx(W,{ref:l,...a,...u,children:a.children})});t.Item=A;t.Item.displayName="List.Item";try{t.displayName="List",t.__docgenInfo={description:"Displays a list of items in a vertical layout",displayName:"List",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"ol"'},{value:'"ul"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}}}}}catch{}const di={title:"Content/List",component:t,subcomponents:{"List.Item":t.Item},parameters:{cssprops:F("List")},argTypes:{...S,...C}},c={args:{children:[e.jsxs(t.Item,{children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"4"),e.jsxs(t.Item,{children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"5"),e.jsxs(t.Item,{children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},"6")]}},m={args:{children:[e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(r,{icon:"edit",variant:"ghost"}),e.jsx(r,{icon:"close",variant:"ghost"})]})},"4"),e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(r,{icon:"edit",variant:"ghost"}),e.jsx(r,{icon:"close",variant:"ghost"})]})},"5"),e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(r,{icon:"edit",variant:"ghost"}),e.jsx(r,{icon:"close",variant:"ghost"})]})},"6")]}},d={args:{children:[e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsx(h,{"aria-label":"Select medicine",defaultSelected:!0}),e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Medicine"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for medicine. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"4"),e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsx(h,{"aria-label":"Select travelling"}),e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Travelling"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for travelling. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"5"),e.jsx(t.Item,{children:e.jsxs(n,{$gap:"2",$align:"center",children:[e.jsx(h,{"aria-label":"Select gaming",defaultSelected:!0}),e.jsxs(o,{$flexGrow:"1",children:[e.jsx(i,{as:"div",$size:"3",$weight:"bold",children:"Gaming"}),e.jsx(i,{$size:"2",$color:"neutral500",children:"Description for gaming. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})},"6")]}};var v,j,L;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const pi=["Primary","WithActions","WithSelection"];export{c as Primary,m as WithActions,d as WithSelection,pi as __namedExportsOrder,di as default};
