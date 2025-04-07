import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-D1pa-M5k.js";import{I as i}from"./Collection-CfmUX7eJ.js";import{P as t}from"./Pagination.component-WuyADsSW.js";import{F as m}from"./Flex.component-DSJ8Mwfi.js";import"./CollectionBuilder-BOiBnYCj.js";import"./index-DmM0KDA7.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useControlledState-sJfMLWrs.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Button.component-BYfZ8zv5.js";import"./useFocusRing-4PdL76fJ.js";import"./useFocusWithin-CrVHK3Cv.js";import"./usePress-Cxy0og0d.js";import"./useButton-DlM8S39G.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-CqmZ9M1P.js";import"./index-CqJC2f1M.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./mixins-CgZ-Dp8B.js";import"./SpinnerLoader.component-Biwz_qZP.js";import"./Loader.component-CDjyoMXt.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-DLnyo3xc.js";import"./ProgressCircle.component-RfFeL5kh.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./IconButton.component-DyPTWEfZ.js";import"./MaterialIcon.component-BRVfLQTV.js";import"./Icons.styles-D2L4nNgu.js";import"./CustomSelect.component-CIyRsbrP.js";import"./index-CLYxO_qr.js";import"./FloatingFieldInputWrapper-Bj9yLkWF.js";import"./Label.component-BzbmvXGx.js";import"./Label.context-8YwVGsEO.js";import"./Message.component-CufFXYCC.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.component-CS4OzHGN.js";import"./ErrorMessage.context-D-RNFvKn.js";import"./Dropdowns.styles-BNfmDUhX.js";import"./SelectField.component-0chMVHYI.js";import"./useSelectableList-CerkSCCR.js";import"./useSelectableItem-CQFuthIx.js";import"./useEvent-Qm4q9YOK.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-CLRP0VYY.js";import"./useDescription-CP-qk7_s.js";import"./DOMLayoutDelegate-NFyoR3Uz.js";import"./useCollator-DZEoqIyA.js";import"./useField-BhG43OVF.js";import"./useMenuTrigger-DLEtYr5F.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useOverlayTrigger-BaVZjogA.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./useFormReset-DvzwwQm6.js";import"./useFormValidation-CsrNRCZi.js";import"./VisuallyHidden-BPDCoBu-.js";import"./PressResponder-D-PDHmhd.js";import"./context-D5CkyXRW.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-op_UCnZE.js";import"./Popover.context-CkZWeej5.js";import"./DropdownButton-BO23ADJx.js";import"./useFormValidationState-CKAS44yz.js";import"./useOverlayTriggerState-3VWy5d8s.js";import"./useSingleSelectListState-LStq8ygZ.js";import"./useListState-wIipAK1w.js";import"./useCollectionRenderer-Dwym1jfR.js";import"./ListBox.component--eojI4xZ.js";import"./getItemCount-CHdBXIUM.js";import"./useHover-BMz_rS5A.js";import"./useForwardedRef-BWfLegUW.js";import"./Divider.component-BFlV1fwZ.js";import"./utils-DqmNl-Il.js";import"./Popover.component-B9wX7a1P.js";import"./useOverlayPosition-VPCsNkJJ.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";const Zr={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
