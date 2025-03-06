import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I as _,M as N}from"./helpers-CB0EgwPk.js";import{g as M}from"./cssprops-BO85xpNm.js";import{f as P}from"./index-YkVIqR4J.js";import{C as u}from"./ChipGroupField.component-ayKi4dza.js";import{L as c}from"./Label.component-DWUg6KQj.js";import{M as I}from"./Message.component-DuLpH4ma.js";import{E as F}from"./ErrorMessage.component-NUTqPfNd.js";import{C as o}from"./Chip.component-8TyT2O6C.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./Collection-CnHW8amz.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./index-CHPAqjqs.js";import"./useObjectRef-CA0MXmrf.js";import"./Provider-B9Eqn13H.js";import"./useCollectionRenderer-DZUEjMJ2.js";import"./useControlledState-CN8sBTKq.js";import"./useSelectableItem-c4_FIivV.js";import"./FocusScope-BnAoeAyt.js";import"./focusSafely-BOUv7I-8.js";import"./usePress-DBLAzBwe.js";import"./useEvent-D91OnqQ2.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./context-BQ3_Es2z.js";import"./useDescription-DnVXAhCi.js";import"./mixins-B7X2BZyR.js";import"./useListState-CLmrS6CG.js";import"./Label.context-BY30H9b8.js";import"./Message.context-BF8cnA0i.js";import"./ErrorMessage.context-Cr_J9O6j.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-Cco9av5W.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-BQpRQjOj.js";import"./useField-DAe_M2wp.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./useFocusWithin-Bb3mfDwa.js";import"./utils-CrQpPYo7.js";import"./useHighlightSelectionDescription-Cdub3fbR.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useUpdateEffect-BzsCcazj.js";import"./useHasTabbableChild-CnPy-0wR.js";import"./getScrollParent-BL0kfGii.js";import"./useFocusRing-PETNqKnG.js";import"./useFocus-DXSPV_um.js";import"./IconButton.component-CFNeuELj.js";import"./index-jGwUeqkW.js";import"./Icons.styles-BaNpbbIh.js";import"./useFocusable-DHL4UX94.js";import"./useKeyboard-A8_doyNT.js";import"./Button.component-7ZEnE2xC.js";import"./useButton-Bk3lNUMb.js";import"./useLink-XD5ax7xG.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./index-5u02HfcA.js";import"./layout-UyCWIQlE.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./useNumberFormatter-D5qg7lg6.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";function p(l){const{label:i,message:n,error:m,labelPlacement:d="above",items:G,children:R,...V}=l;return e.jsxs(u,{...V,children:[d==="above"&&i&&e.jsx(c,{$paddingBottom:"0px",children:i}),e.jsx(u.List,{items:G,beforeChildren:d==="inline"&&i&&e.jsx(c,{$paddingBottom:"0px",children:i}),children:R}),n&&e.jsx(I,{children:n}),m&&e.jsx(F,{children:m})]})}try{p.displayName="ChipGroup",p.__docgenInfo={description:"A generic ChipGroup component that renders a group of chips with optional labels, messages, and error messages.",displayName:"ChipGroup",props:{labelPlacement:{defaultValue:null,description:`Whether the label is placed above the
group, or inline with the chips`,name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"above"'}]}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message for the field",name:"error",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Size of the component",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:`Add classes to the root element of the component.
Refer to this for possible values: https://github.com/JedWatson/classnames#readme`,name:"className",required:!1,type:{name:"Argument | Argument[]"}},label:{defaultValue:null,description:`A visible label for the field. Labels are always Sentence case.
If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.`,name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Name of the Field",name:"name",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"For additional information (ex. date format mm/dd/yy)",name:"message",required:!1,type:{name:"ReactNode"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}}}}}catch{}const ir={title:"Chips/ChipGroup",component:p,parameters:{layout:"centered",cssprops:M("ChipGroup")},argTypes:{..._,...N,children:{control:!1},onRemove:{description:"Function to call when a chip is removed",table:{category:"Events"}}}},r={args:{label:"Chip Group",children:[e.jsx(o,{id:"news",children:"News"}),e.jsx(o,{id:"travel",children:"Travel"}),e.jsx(o,{id:"gaming",children:"Gaming"}),e.jsx(o,{id:"shopping",children:"Shopping"})]}},a={args:{...r.args,onRemove:P()}},t={args:{...r.args,selectionMode:"multiple",defaultSelectedKeys:["news","shopping"]}},s={args:{...r.args,disabledKeys:["shopping"]}};var h,g,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Chip Group",
    children: [<Chip id="news">News</Chip>, <Chip id="travel">Travel</Chip>, <Chip id="gaming">Gaming</Chip>, <Chip id="shopping">Shopping</Chip>]
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,y,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    onRemove: fn()
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,x,q;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    selectionMode: "multiple",
    defaultSelectedKeys: ["news", "shopping"]
  }
}`,...(q=(x=t.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var S,w,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabledKeys: ["shopping"]
  }
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const or=["Primary","RemoveChip","MultipleSelection","DisabledChips"];export{s as DisabledChips,t as MultipleSelection,r as Primary,a as RemoveChip,or as __namedExportsOrder,ir as default};
