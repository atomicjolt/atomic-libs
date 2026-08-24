import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-BgLytPr-.js";import{F as m}from"./index-BKev5x84.js";import{I as i}from"./Collection-DwMxgycI.js";import{P as t}from"./Pagination.component-DLfq_YCu.js";import"./index-BCtMShv3.js";import"./index-C_lK3xe_.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./CollectionBuilder-L_wKxqRd.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useControlledState-vzCMHZvt.js";import"./Button.context-e0zTg6D5.js";import"./IconButton.component-BNkclI4L.js";import"./index-BgPCn92x.js";import"./Icons.styles-qcj_pyb3.js";import"./filterDOMProps-CeZl_uWj.js";import"./BaseButton-BDQAI67e.js";import"./mixins-CcgEHb9c.js";import"./useFocusRing-zxvArQTZ.js";import"./useFocusWithin-dfJl9rAf.js";import"./usePress-BJ4Xpz5E.js";import"./useButton-B6TSBwA2.js";import"./useLink-C7Cuty20.js";import"./SpinnerLoader.component-Bxwb61tI.js";import"./Loader.component-Bropnax8.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-CUPFcyys.js";import"./ProgressCircle.component-B-u6Y9UX.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.component-DQdyGbmA.js";import"./CustomSelect.component-BH10kq_G.js";import"./useTranslations-lvMpgG-n.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./FloatingFieldInputWrapper-DfiyPfPS.js";import"./Label.component-PV5tL6Vm.js";import"./Label.context-Bxyvy4yx.js";import"./Message.component-BkeRZygz.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.component-B_60Itgy.js";import"./ErrorMessage.context-B4seO6gR.js";import"./Dropdowns.styles-BgGXBCyL.js";import"./SelectField.component-C7HoC5fk.js";import"./useSelectableList-am-fquo2.js";import"./useSelectableItem-CB6YxwGd.js";import"./useEvent-CI_xZcmG.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-CZScMWlh.js";import"./useDescription-BfD2gYva.js";import"./DOMLayoutDelegate-Cf7ai49Z.js";import"./useCollator-CKtzjMN3.js";import"./useField-D8gfBVj0.js";import"./useMenuTrigger-BrUw3rky.js";import"./useOverlayTrigger-DK-ooV0I.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidation-CnIG3AAh.js";import"./VisuallyHidden-DMkWAsdD.js";import"./PressResponder-BmlOUkeL.js";import"./context-BGWN95Kf.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-op_UCnZE.js";import"./Popover.context-wYAB1U4T.js";import"./useFormValidationState-CONlS5Wo.js";import"./useOverlayTriggerState-B3l5rho6.js";import"./useSingleSelectListState-DG2mThDA.js";import"./useListState-DzwI-ba9.js";import"./useCollectionRenderer-BmZBBt5O.js";import"./ListBox.component-BK7i6XkW.js";import"./getItemCount-DoOlIVRG.js";import"./useHover-Cvy3Ip4i.js";import"./useForwardedRef-DuXBQIpF.js";import"./Divider.component-BOfRfkgE.js";import"./Popover.component-B20HLeMt.js";import"./useOverlayPosition-CwzQS3_v.js";const tt={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const et=["Primary","WithPageNumbers","WithPageSize"];export{e as Primary,a as WithPageNumbers,n as WithPageSize,et as __namedExportsOrder,tt as default};
