import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-BgJgh-x_.js";import{I as i}from"./Collection-DqSZYP0m.js";import{P as t}from"./Pagination.component-CQv-ukvB.js";import{F as m}from"./Flex.component-BTH7Jim3.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BCtMShv3.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useControlledState-vzCMHZvt.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Button.context-BxdzJgC_.js";import"./index-CsiUWFDz.js";import"./IconButton.component-CI_25ya5.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./BaseButton-BDx2_M0a.js";import"./mixins-XviowZ_6.js";import"./useFocusRing-88kjlAJd.js";import"./useFocusWithin-AgzTPs3-.js";import"./usePress-CzUfyTu7.js";import"./useButton-DYDUZLxM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-D8UViwUR.js";import"./SpinnerLoader.component-BmufHWNN.js";import"./Loader.component-B9P6-PTY.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-Bk1ZLwdS.js";import"./Icons.styles-D-JqKhr6.js";import"./Button.component-BS1Jz_R0.js";import"./CustomSelect.component-ByClHeKW.js";import"./useTranslations-lvMpgG-n.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./index-qM-_Oyts.js";import"./VisuallyHidden-zwVgBnCN.js";import"./context-AES9ne4t.js";import"./FocusScope-DX4qyq_T.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-CUQlxOSl.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useOverlayTriggerState-e1JH9f22.js";import"./PressResponder-Ct7jIFb_.js";import"./useForwardedRef-Tweo1nQG.js";import"./Popover.context-C-WvC77F.js";import"./index-BwQsrH9j.js";import"./useSelectableList-DOP2QP6A.js";import"./useSelectableItem-CvsJxqRU.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-CqPnuqnT.js";import"./DOMLayoutDelegate-BJPzvQxW.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-CzsFhO7O.js";import"./useHover-OH12LaHi.js";import"./useCollectionRenderer-3wNxxKkU.js";import"./Provider-op_UCnZE.js";import"./Label.component-CkFYuFtU.js";import"./Label.context-BbpE5KUK.js";import"./useListState-DGbAgUcw.js";import"./Divider.component-DNSQqAMQ.js";import"./utils-DqmNl-Il.js";import"./FloatingFieldInputWrapper-hrpI_ABc.js";import"./Message.component-BY76Ts6Z.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.component-Dcm6zm2l.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./Dropdowns.styles-N-QU7Zui.js";import"./SelectField.component-D03Uoovk.js";import"./useField-BY78xfaL.js";import"./useMenuTrigger-oprA2QPW.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidation-BfT1egZx.js";import"./useFormValidationState-CONlS5Wo.js";import"./useSingleSelectListState-fRrDGIUL.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";const tt={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
