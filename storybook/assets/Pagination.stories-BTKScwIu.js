import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-BgJgh-x_.js";import{F as m}from"./index-CgV6Zd7Q.js";import{I as i}from"./Collection-DqSZYP0m.js";import{P as t}from"./Pagination.component-BNW9BK7L.js";import"./index-BCtMShv3.js";import"./index-CsiUWFDz.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./CollectionBuilder-D7AJqdfd.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useControlledState-vzCMHZvt.js";import"./Button.component-B1VuTqO-.js";import"./useFocusRing-CLjBjOxD.js";import"./useFocusWithin-BshFo8_g.js";import"./usePress-B9aiz4Kw.js";import"./useButton-nVeIkIqk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-FIfyncSu.js";import"./mixins-XviowZ_6.js";import"./SpinnerLoader.component-m7qmEdMF.js";import"./Loader.component-CAkSYpHw.js";import"./Checkmark.component-ByE1AGU6.js";import"./Spinner.component-Bslo7_jG.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./IconButton.component-BLxKwVs3.js";import"./MaterialIcon.component-DVFNi2Fq.js";import"./Icons.styles-D-JqKhr6.js";import"./CustomSelect.component-gbaEouaq.js";import"./index-CNUwzMAm.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./VisuallyHidden-XQ8XJ7MR.js";import"./context-CHG5exGL.js";import"./FocusScope-DX4qyq_T.js";import"./getScrollParent-BL0kfGii.js";import"./isScrollable-BSEN4xi5.js";import"./useOverlayPosition-BbsEgUQ6.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useOverlayTriggerState-P0osIcob.js";import"./PressResponder-DMBUHunT.js";import"./useForwardedRef-Tweo1nQG.js";import"./Popover.context-C-WvC77F.js";import"./index-CjF0UCmx.js";import"./useSelectableList-Ds66KyIO.js";import"./useSelectableItem-Kg4f-Zia.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./useDescription-CqPnuqnT.js";import"./DOMLayoutDelegate-I1X3xMo1.js";import"./useCollator-CKtzjMN3.js";import"./getItemCount-Cm3pwbxO.js";import"./useHover-Cc-utFbH.js";import"./useCollectionRenderer-qIlVmK1t.js";import"./Provider-op_UCnZE.js";import"./Label.component-SkkW6TeV.js";import"./Label.context-BbpE5KUK.js";import"./useListState-CznNPLiL.js";import"./Divider.component-B3utIuXm.js";import"./FloatingFieldInputWrapper-DFdArAwE.js";import"./Message.component-CGdHk5Gg.js";import"./Message.context-D8t47jMD.js";import"./ErrorMessage.component-CCJCuFB5.js";import"./ErrorMessage.context-PYwFF-7o.js";import"./Dropdowns.styles-N-QU7Zui.js";import"./SelectField.component-Ci4o9y35.js";import"./useField-BY78xfaL.js";import"./useMenuTrigger-BHVMtN_y.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidation-BfT1egZx.js";import"./DropdownButton-DbeDbYFX.js";import"./useFormValidationState-CONlS5Wo.js";import"./useSingleSelectListState-CYv7PGb3.js";const Yr={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const Zr=["Primary","WithPageNumbers","WithPageSize"];export{e as Primary,a as WithPageNumbers,n as WithPageSize,Zr as __namedExportsOrder,Yr as default};
