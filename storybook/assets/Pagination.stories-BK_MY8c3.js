import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-BgLytPr-.js";import{F as m}from"./index-CB5SOmuf.js";import{I as i}from"./Collection-DjjOtLT0.js";import{P as t}from"./Pagination.component-C4webVgC.js";import"./index-BCtMShv3.js";import"./index-CKqsTkFX.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./CollectionBuilder-D3rKkOdu.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./useFocusable-DacP9xvE.js";import"./useControlledState-vzCMHZvt.js";import"./index-CAG34_pn.js";import"./BaseButton-q691yrhy.js";import"./mixins-CcgEHb9c.js";import"./useFocusRing-DIS5Kyrs.js";import"./useFocusWithin-BJ0-_hiU.js";import"./usePress-CqXh5MnK.js";import"./useButton-9RZc7-Gk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-DD4jtrk3.js";import"./SpinnerLoader.component-DPXU7dwy.js";import"./Loader.component-DymTTd71.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-DhurfhG1.js";import"./ProgressCircle.component-CdiYhWSj.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-CorcCtTC.js";import"./MaterialIcon.component-DA7_w7ev.js";import"./Icons.styles-qcj_pyb3.js";import"./Button.component-CNGC1O2X.js";import"./CustomSelect.component-9ZNZuXib.js";import"./useTranslations-lvMpgG-n.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./FloatingFieldInputWrapper-BHlKgPTk.js";import"./Label.component-DWBdTC80.js";import"./Label.context-CCD9MV1z.js";import"./Message.component-C8C40eHJ.js";import"./Message.context-Dd4cT4rL.js";import"./ErrorMessage.component-C9Yj4uFD.js";import"./ErrorMessage.context-AYC8UfzI.js";import"./Dropdowns.styles-BgGXBCyL.js";import"./SelectField.component-B3U-Ysci.js";import"./useSelectableList-DMpX2rIu.js";import"./useSelectableItem-DFVaGUjR.js";import"./useEvent-CeKNPFU-.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-Dv5_DXCK.js";import"./useDescription-CqPnuqnT.js";import"./DOMLayoutDelegate-y3WJR4ir.js";import"./useCollator-CKtzjMN3.js";import"./useField-BY78xfaL.js";import"./useMenuTrigger-DskRE53S.js";import"./useOverlayTrigger-BvUXQ3-b.js";import"./useCloseOnScroll-DJl1HlMv.js";import"./useFormReset-BY6BQbOl.js";import"./useFormValidation-BfT1egZx.js";import"./VisuallyHidden-CdgZn78T.js";import"./PressResponder-BZaXPZ_t.js";import"./context-fqV0sG25.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-op_UCnZE.js";import"./Popover.context-DOHdq5Dm.js";import"./useFormValidationState-CONlS5Wo.js";import"./useOverlayTriggerState-wHDN265d.js";import"./useSingleSelectListState-DE72zkM2.js";import"./useListState-BNhgGgFG.js";import"./useCollectionRenderer-gXFztQxQ.js";import"./ListBox.component-KtCBSIUT.js";import"./getItemCount-BoAGj9zy.js";import"./useHover-CQZXfm5n.js";import"./useForwardedRef-Tweo1nQG.js";import"./Divider.component-BG0lJY_j.js";import"./Popover.component-zopJ0pRc.js";import"./useOverlayPosition-CUQlxOSl.js";const tt={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
