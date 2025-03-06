import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{f as j}from"./index-YkVIqR4J.js";import{F as m}from"./index-5u02HfcA.js";import{I as e}from"./Collection-CnHW8amz.js";import{P as t}from"./Pagination.component-DhR-HwUU.js";import"./index-DJO9vBfz.js";import"./index-CHPAqjqs.js";import"./useObjectRef-CA0MXmrf.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./layout-UyCWIQlE.js";import"./spacing-Bd-CIscW.js";import"./utils-2VFVy79V.js";import"./CollectionBuilder-Xbel4YvD.js";import"./index-DJdX7xnk.js";import"./useControlledState-CN8sBTKq.js";import"./Button.component-7ZEnE2xC.js";import"./useFocusRing-PETNqKnG.js";import"./useFocus-DXSPV_um.js";import"./utils-CrQpPYo7.js";import"./focusSafely-BOUv7I-8.js";import"./useFocusWithin-Bb3mfDwa.js";import"./useButton-Bk3lNUMb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DHL4UX94.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-DBLAzBwe.js";import"./useLink-XD5ax7xG.js";import"./mixins-B7X2BZyR.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./IconButton.component-CFNeuELj.js";import"./index-jGwUeqkW.js";import"./Icons.styles-BaNpbbIh.js";import"./CustomSelect.component-BxHjy-p-.js";import"./FloatingFieldInputWrapper-BnU18c0l.js";import"./Label.component-DWUg6KQj.js";import"./Label.context-BY30H9b8.js";import"./Message.component-DuLpH4ma.js";import"./Message.context-BF8cnA0i.js";import"./ErrorMessage.component-NUTqPfNd.js";import"./ErrorMessage.context-Cr_J9O6j.js";import"./Dropdowns.styles-DEj6YwAG.js";import"./SelectField.component-CO1439Kr.js";import"./useSelectableList-Cco9av5W.js";import"./useSelectableItem-c4_FIivV.js";import"./FocusScope-BnAoeAyt.js";import"./useEvent-D91OnqQ2.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./useDescription-DnVXAhCi.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-BQpRQjOj.js";import"./useField-DAe_M2wp.js";import"./useMenuTrigger-D4JZZ4oE.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useOverlayTrigger-1aF1CP0g.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./useFormReset-D24hgWtm.js";import"./useFormValidation-CdG9-Yzp.js";import"./VisuallyHidden-CFly2HD4.js";import"./PressResponder-DHeHotEt.js";import"./context-BILoGgXl.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-B9Eqn13H.js";import"./Popover.context-aAMlw-9Y.js";import"./DropdownButton-DvEUW-Ke.js";import"./useFormValidationState-DFldk10H.js";import"./useOverlayTriggerState-B9DFGNg6.js";import"./useSingleSelectListState-BlZjwFBF.js";import"./useListState-CLmrS6CG.js";import"./useCollectionRenderer-DZUEjMJ2.js";import"./ListBox.component-Bh_34Rg-.js";import"./getItemCount-DVbD48h8.js";import"./useHover-D34ofACQ.js";import"./useForwardedRef-BqZ3RrEL.js";import"./Divider.component-BK_sltmD.js";import"./Popover.component-CMdXs4Vo.js";import"./useOverlayPosition-DJHgNtuZ.js";const it={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},i={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...i.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...i.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(e,{id:10,children:"10 entries"}),r.jsx(e,{id:25,children:"25 entries"}),r.jsx(e,{id:50,children:"50 entries"}),r.jsx(e,{id:100,children:"100 entries"})]})]})}};var p,s,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onPageChange: fn(),
    defaultPage: 2,
    totalPages: 10,
    children: <Flex $align="center" $gap="1">
        <Pagination.FirstPage />
        <Pagination.PrevPage />
        <Pagination.CurrentPage />
        <Pagination.NextPage />
        <Pagination.LastPage />
      </Flex>
  }
}`,...(g=(s=i.parameters)==null?void 0:s.docs)==null?void 0:g.source}}};var P,c,l;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <Flex $align="center" $gap="1">
        <Pagination.FirstPage />
        <Pagination.PrevPage />
        <Pagination.PageList>
          {(page, state) => <Pagination.Page page={page} variant={page === state.page ? "primary" : "ghost"}>
              {page}
            </Pagination.Page>}
        </Pagination.PageList>
        <Pagination.NextPage />
        <Pagination.LastPage />
      </Flex>
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,x,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    onPageSizeChange: fn(),
    defaultPageSize: 10,
    children: <Flex $align="center" $gap="1">
        <Pagination.FirstPage />
        <Pagination.PrevPage />
        <Pagination.CurrentPage />
        <Pagination.NextPage />
        <Pagination.LastPage />
        <Pagination.PageSize>
          <Item id={10}>10 entries</Item>
          <Item id={25}>25 entries</Item>
          <Item id={50}>50 entries</Item>
          <Item id={100}>100 entries</Item>
        </Pagination.PageSize>
      </Flex>
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const et=["Primary","WithPageNumbers","WithPageSize"];export{i as Primary,a as WithPageNumbers,n as WithPageSize,et as __namedExportsOrder,it as default};
