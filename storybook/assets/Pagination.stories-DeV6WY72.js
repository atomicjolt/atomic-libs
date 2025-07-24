import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-BgJgh-x_.js";import{F as m}from"./index-BqqCK9sT.js";import{I as i}from"./Collection-C2kgHJSW.js";import{P as t}from"./Pagination.component-CAySRKk2.js";import"./index-BCtMShv3.js";import"./index-C_lK3xe_.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useControlledState-vzCMHZvt.js";import"./Button.context-e0zTg6D5.js";import"./IconButton.component-C57JyDaI.js";import"./index-SPKsbD02.js";import"./Icons.styles-D-JqKhr6.js";import"./filterDOMProps-CeZl_uWj.js";import"./Button.component-I4DbnubE.js";import"./useFocusRing-BT9oCgfs.js";import"./useFocusWithin-J-xELNez.js";import"./usePress-CzPFgv00.js";import"./useButton-CIXIyXj7.js";import"./useLink-C_TmUO2i.js";import"./mixins-XviowZ_6.js";import"./SpinnerLoader.component-CZyqbQAt.js";import"./Loader.component-Bbv54XPB.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-CKgxLGDu.js";import"./ProgressCircle.component-BOqryRrp.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./CustomSelect.component-GTrbqYQ1.js";import"./FloatingFieldInputWrapper-CxL-Kbyh.js";import"./Label.component-B9Ls_jeT.js";import"./Label.context-Bxyvy4yx.js";import"./Message.component-C2RnBMtT.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.component-C4MrFAT_.js";import"./ErrorMessage.context-B4seO6gR.js";import"./Dropdowns.styles-N-QU7Zui.js";import"./SelectField.component-Bkhfg_DU.js";import"./useSelectableList-D9su3VTu.js";import"./useSelectableItem-D3m3t1p1.js";import"./useEvent-CI_xZcmG.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-BPqc7wak.js";import"./useDescription-BfD2gYva.js";import"./DOMLayoutDelegate-B_mVtI8s.js";import"./useCollator-CKtzjMN3.js";import"./useField-D8gfBVj0.js";import"./useMenuTrigger-CN6-7slb.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useOverlayTrigger-DK-ooV0I.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidation-CnIG3AAh.js";import"./VisuallyHidden-B9f1mXg1.js";import"./PressResponder-BCICcMDM.js";import"./context-XEak4h-o.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-op_UCnZE.js";import"./Popover.context-wYAB1U4T.js";import"./useFormValidationState-CONlS5Wo.js";import"./useOverlayTriggerState-RNOws59S.js";import"./useSingleSelectListState-CfGrmvDz.js";import"./useListState-Tb9DJULI.js";import"./useCollectionRenderer-Dbyt1FhG.js";import"./ListBox.component-Da2sBc6I.js";import"./getItemCount-Wvv0CPgU.js";import"./useHover-BOO5kGTb.js";import"./useForwardedRef-DuXBQIpF.js";import"./Divider.component-DNSQqAMQ.js";import"./Popover.component-DXMSqQQZ.js";import"./useOverlayPosition-CwzQS3_v.js";const Zr={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var P,c,l;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const rt=["Primary","WithPageNumbers","WithPageSize"];export{e as Primary,a as WithPageNumbers,n as WithPageSize,rt as __namedExportsOrder,Zr as default};
