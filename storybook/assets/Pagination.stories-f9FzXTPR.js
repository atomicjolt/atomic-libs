import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-BgJgh-x_.js";import{I as i}from"./Collection-C4fZf6qK.js";import{P as t}from"./Pagination.component-CKvUOB4D.js";import{F as m}from"./Flex.component-BTH7Jim3.js";import"./CollectionBuilder-BcAYd8lA.js";import"./index-BCtMShv3.js";import"./index-B1k-hWqK.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useControlledState-vzCMHZvt.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Button.context-BxdzJgC_.js";import"./index-CsiUWFDz.js";import"./IconButton.component-DUSHZeQX.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./BaseButton-CJnyFvr6.js";import"./mixins-XviowZ_6.js";import"./useFocusRing-CzfpHkj_.js";import"./useFocusWithin-A-CR497l.js";import"./usePress-DWgw6o5d.js";import"./useButton-D1bzctNv.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-BGiV_6Hq.js";import"./SpinnerLoader.component-BGvGcm58.js";import"./Loader.component-BdxZFUk6.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C59bpdXu.js";import"./ProgressCircle.component-gsiCSqhQ.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-DqfVfr8E.js";import"./Icons.styles-D-JqKhr6.js";import"./Button.component-N85zXdtT.js";import"./CustomSelect.component-CaPQgFw3.js";import"./useTranslations-lvMpgG-n.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./index-CkWQKF5S.js";import"./VisuallyHidden-CAaDEiDk.js";import"./context-BQ_LTZSM.js";import"./FocusScope-DX4qyq_T.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-CUQlxOSl.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useOverlayTriggerState-B1GSxLCH.js";import"./PressResponder-Cuy-CUqK.js";import"./useForwardedRef-Tweo1nQG.js";import"./Popover.context-C-WvC77F.js";import"./index-Ca6VQPzI.js";import"./useSelectableList-Bxw6w89V.js";import"./useSelectableItem-DG3EUeOV.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-CqPnuqnT.js";import"./DOMLayoutDelegate-CHoMc6K8.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-o8orwjds.js";import"./useHover-BE1TTE1Q.js";import"./useCollectionRenderer-YX6BTLW_.js";import"./Provider-op_UCnZE.js";import"./Label.component-CTkew7VZ.js";import"./Label.context-BbpE5KUK.js";import"./useListState-CAPwuFJz.js";import"./Divider.component-3mzPbMTT.js";import"./utils-DqmNl-Il.js";import"./FloatingFieldInputWrapper-DBNCPJTE.js";import"./Message.component-lYjvw1hp.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.component-rlazMD1s.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./Dropdowns.styles-N-QU7Zui.js";import"./SelectField.component-C9o7PgEF.js";import"./useField-BY78xfaL.js";import"./useMenuTrigger-X5VEQ_wu.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidation-BfT1egZx.js";import"./useFormValidationState-CONlS5Wo.js";import"./useSingleSelectListState-KSYTLREm.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";const tt={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
