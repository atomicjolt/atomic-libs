import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-D1pa-M5k.js";import"./index-CyCRagT9.js";import{I as i}from"./Collection-cZH6f0Bi.js";import{P as t}from"./Pagination.component-BqMYHeX_.js";import{F as m}from"./Flex.component-CUA2hDLx.js";import"./CollectionBuilder-DglRgqo3.js";import"./index-DmM0KDA7.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useControlledState-sJfMLWrs.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./index-CmTRtbgT.js";import"./Button.component-DRJR9m07.js";import"./useFocusRing-BmyBc2tX.js";import"./useFocusWithin-C-e8UI97.js";import"./usePress-Cng8MYxN.js";import"./useButton-CBzhh6F5.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-BTwsTyp1.js";import"./index-CqJC2f1M.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./mixins-BOHXBJW9.js";import"./SpinnerLoader.component-uF9SY2FS.js";import"./Loader.component-C9UWSKIc.js";import"./Checkmark.component-CRE6wLUH.js";import"./Spinner.component-BQyrLFoY.js";import"./ProgressCircle.component-D57_vbeK.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./IconButton.component-blxnUvMB.js";import"./MaterialIcon.component-DZmnA2mz.js";import"./Icons.styles-T5NoJEsB.js";import"./CustomSelect.component-TdnTqWWG.js";import"./FloatingFieldInputWrapper-BYUYsVjJ.js";import"./Label.component-Bux1bQyn.js";import"./Label.context-8YwVGsEO.js";import"./Message.component-D8ICG7W9.js";import"./Message.context-4_rHhebz.js";import"./ErrorMessage.component-BVX2wl3L.js";import"./ErrorMessage.context-D-RNFvKn.js";import"./Dropdowns.styles-c5wm-1S0.js";import"./SelectField.component-1RJP0cG0.js";import"./useSelectableList-Ca_ZI4zK.js";import"./useSelectableItem-C-hNvN1k.js";import"./useEvent-Qm4q9YOK.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-CLRP0VYY.js";import"./useDescription-CP-qk7_s.js";import"./DOMLayoutDelegate-Dsrs9r60.js";import"./useCollator-DZEoqIyA.js";import"./useField-BhG43OVF.js";import"./useMenuTrigger-Cre1gTLs.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useOverlayTrigger-BaVZjogA.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./useFormReset-DvzwwQm6.js";import"./useFormValidation-CsrNRCZi.js";import"./VisuallyHidden-Yvqu08fX.js";import"./PressResponder-CHEeukYG.js";import"./context-DYfCRJJJ.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-op_UCnZE.js";import"./Popover.context-CkZWeej5.js";import"./DropdownButton-Cu0B0cJS.js";import"./useFormValidationState-CKAS44yz.js";import"./useOverlayTriggerState-BxLf_MI7.js";import"./useSingleSelectListState-CT1HfnY0.js";import"./useListState-BOwdsj8-.js";import"./useCollectionRenderer-BeqeLBJu.js";import"./ListBox.component-Co4ZNLx6.js";import"./getItemCount-C96_vkqw.js";import"./useHover-WxTHsieF.js";import"./useForwardedRef-BWfLegUW.js";import"./Divider.component-Bpnxmsv4.js";import"./utils-DqmNl-Il.js";import"./Popover.component-BFqnB8tM.js";import"./useOverlayPosition-DAZA0ZVA.js";import"./layout-ez2uQdt_.js";const Zr={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
