import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-BgJgh-x_.js";import{I as i}from"./Collection-DqSZYP0m.js";import{P as t}from"./Pagination.component-D7h_IE1o.js";import{F as m}from"./Flex.component-rrKmR1Yr.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BCtMShv3.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useControlledState-vzCMHZvt.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./Button.context-BxdzJgC_.js";import"./index-CsiUWFDz.js";import"./IconButton.component-otNKvy02.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./Button.component-D1yzEu33.js";import"./useFocusRing-CLjBjOxD.js";import"./useFocusWithin-BshFo8_g.js";import"./usePress-B9aiz4Kw.js";import"./useButton-nVeIkIqk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-FIfyncSu.js";import"./mixins-XviowZ_6.js";import"./SpinnerLoader.component-HcikDw2l.js";import"./Loader.component-CNDf2ZKt.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./MaterialIcon.component-CgeEkdBw.js";import"./Icons.styles-D-JqKhr6.js";import"./CustomSelect.component-DPqEHSFG.js";import"./index-C47D2q8X.js";import"./useSelectableList-Ds66KyIO.js";import"./useSelectableItem-Kg4f-Zia.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DX4qyq_T.js";import"./useDescription-CqPnuqnT.js";import"./DOMLayoutDelegate-I1X3xMo1.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-Cm3pwbxO.js";import"./useHover-Cc-utFbH.js";import"./useForwardedRef-Tweo1nQG.js";import"./useCollectionRenderer-qIlVmK1t.js";import"./Provider-op_UCnZE.js";import"./Label.component-CkFYuFtU.js";import"./Label.context-BbpE5KUK.js";import"./useListState-CznNPLiL.js";import"./Divider.component-DNSQqAMQ.js";import"./utils-DqmNl-Il.js";import"./FloatingFieldInputWrapper-hrpI_ABc.js";import"./Message.component-BY76Ts6Z.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.component-Dcm6zm2l.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./Dropdowns.styles-N-QU7Zui.js";import"./SelectField.component-DTzMbSiK.js";import"./useField-BY78xfaL.js";import"./useMenuTrigger-BHVMtN_y.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidation-BfT1egZx.js";import"./VisuallyHidden-XQ8XJ7MR.js";import"./PressResponder-DMBUHunT.js";import"./context-CHG5exGL.js";import"./getScrollParent-BL0kfGii.js";import"./Popover.context-C-WvC77F.js";import"./useFormValidationState-CONlS5Wo.js";import"./useOverlayTriggerState-P0osIcob.js";import"./useSingleSelectListState-CYv7PGb3.js";import"./Popover.component-BZrmwpsv.js";import"./useOverlayPosition-CUQlxOSl.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";const Zr={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
