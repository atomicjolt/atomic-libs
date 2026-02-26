import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-BgJgh-x_.js";import"./index-CyCRagT9.js";import{I as e}from"./Collection-Cmq5KClr.js";import{P as t}from"./Pagination.component-BhCRnXYF.js";import{F as m}from"./Flex.component-fpVWlrim.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-BCtMShv3.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useControlledState-vzCMHZvt.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Button.context-BxdzJgC_.js";import"./index-CsiUWFDz.js";import"./IconButton.component-B6sooa0d.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./BaseButton-BpwrdOfN.js";import"./mixins-XviowZ_6.js";import"./useFocusRing-DIS5Kyrs.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./useButton-9RZc7-Gk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-Bw-qRosp.js";import"./Loader.component-CTOZVNHq.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C59bpdXu.js";import"./ProgressCircle.component-gsiCSqhQ.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-B9aixorD.js";import"./Icons.styles-D-JqKhr6.js";import"./Button.component-C7yuenoX.js";import"./CustomSelect.component-CjJLg0Hc.js";import"./useTranslations-lvMpgG-n.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./index-C3G89a7t.js";import"./FloatingFieldInputWrapper-hrpI_ABc.js";import"./Label.component-CkFYuFtU.js";import"./Label.context-BbpE5KUK.js";import"./Message.component-BY76Ts6Z.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.component-Dcm6zm2l.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./Dropdowns.styles-N-QU7Zui.js";import"./SelectField.component-BKUmg-aI.js";import"./useSelectableList-DMhBOA5A.js";import"./useSelectableItem-D8NZ7OgS.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DX4qyq_T.js";import"./useDescription-CqPnuqnT.js";import"./DOMLayoutDelegate-BpvY9qNl.js";import"./useCollator-CKtzjMN3.js";import"./useField-BY78xfaL.js";import"./useMenuTrigger-DTce57WR.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidation-BfT1egZx.js";import"./VisuallyHidden-CdgZn78T.js";import"./PressResponder-BZaXPZ_t.js";import"./context-CRoXGI2o.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-op_UCnZE.js";import"./Popover.context-C-WvC77F.js";import"./useFormValidationState-CONlS5Wo.js";import"./useOverlayTriggerState-BQyhQ6xD.js";import"./useSingleSelectListState-Dc6Unpr0.js";import"./useListState-BkhTmwJg.js";import"./useCollectionRenderer-BGbQCQld.js";import"./ListBox.component-B61h1tc8.js";import"./getItemCount-lnyFJ-qq.js";import"./useHover-CQZXfm5n.js";import"./useForwardedRef-Tweo1nQG.js";import"./Divider.component-DNSQqAMQ.js";import"./utils-DqmNl-Il.js";import"./Popover.component-CCHWTFUn.js";import"./useOverlayPosition-CUQlxOSl.js";import"./layout-D683Cy6J.js";const it={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},i={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...i.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...i.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(e,{id:10,children:"10 entries"}),r.jsx(e,{id:25,children:"25 entries"}),r.jsx(e,{id:50,children:"50 entries"}),r.jsx(e,{id:100,children:"100 entries"})]})]})}};var p,s,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
