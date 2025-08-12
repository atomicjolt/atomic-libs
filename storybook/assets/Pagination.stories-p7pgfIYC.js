import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-BgJgh-x_.js";import{I as i}from"./Collection-C2kgHJSW.js";import{P as t}from"./Pagination.component-CRqPU9-B.js";import{F as m}from"./Flex.component-DQOBdO96.js";import"./CollectionBuilder-4ZFsDDvv.js";import"./index-BCtMShv3.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-B7HbK8LX.js";import"./useObjectRef-B4hnndUj.js";import"./SSRProvider-DyiXDq2k.js";import"./useControlledState-vzCMHZvt.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Button.context-e0zTg6D5.js";import"./index-C_lK3xe_.js";import"./IconButton.component-DYMySrnG.js";import"./index-BW0EyjKD.js";import"./Icons.styles-D-JqKhr6.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./filterDOMProps-CeZl_uWj.js";import"./BaseButton-BqyEzw-_.js";import"./mixins-XviowZ_6.js";import"./useFocusRing-C-zHDrKK.js";import"./useFocusWithin-CUff8KyO.js";import"./usePress-DRrD1IP8.js";import"./useButton-5e9SJH5K.js";import"./useLink-CA4JS4F-.js";import"./SpinnerLoader.component-CZvQLF64.js";import"./Loader.component-wPnnWLbJ.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-CKgxLGDu.js";import"./ProgressCircle.component-BOqryRrp.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.component-xB07nOWT.js";import"./CustomSelect.component-Bp7Ko_mn.js";import"./useTranslations-lvMpgG-n.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./index-BZZhbT2T.js";import"./VisuallyHidden-BB9-VGne.js";import"./context-De4It0JK.js";import"./FocusScope-BPqc7wak.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-CwzQS3_v.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useOverlayTriggerState-iq8quOSU.js";import"./PressResponder-CKyj7ZvN.js";import"./useForwardedRef-DuXBQIpF.js";import"./Popover.context-wYAB1U4T.js";import"./index-BmSY-buX.js";import"./useSelectableList-_nP8zjTo.js";import"./useSelectableItem-CnP4hcGx.js";import"./useEvent-CI_xZcmG.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-BfD2gYva.js";import"./DOMLayoutDelegate-DheANdCr.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-V7wxzfpj.js";import"./useHover-BaamvfgK.js";import"./useCollectionRenderer-BLw3beW_.js";import"./Provider-op_UCnZE.js";import"./Label.component-Mdsn2Vg-.js";import"./Label.context-Bxyvy4yx.js";import"./useListState-k5RNTMXM.js";import"./Divider.component-3mzPbMTT.js";import"./utils-DqmNl-Il.js";import"./FloatingFieldInputWrapper-DuMUMYG2.js";import"./Message.component-LTtkPuHW.js";import"./Message.context-CzffOAUK.js";import"./ErrorMessage.component-DXRHu5W2.js";import"./ErrorMessage.context-B4seO6gR.js";import"./Dropdowns.styles-N-QU7Zui.js";import"./SelectField.component-BGm5AJG2.js";import"./useField-D8gfBVj0.js";import"./useMenuTrigger-C3jA6F6b.js";import"./useOverlayTrigger-DK-ooV0I.js";import"./useFormReset-GcAVnfXr.js";import"./useFormValidation-CnIG3AAh.js";import"./useFormValidationState-CONlS5Wo.js";import"./useSingleSelectListState-B0rsPWv9.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";const tt={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
