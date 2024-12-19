import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{f as j}from"./index-YkVIqR4J.js";import{A as y}from"./helpers-vNBwIeRc.js";import{F as m}from"./index-CiylWqPi.js";import{I as i}from"./Collection-_kdosoh5.js";import{P as e}from"./Pagination.component-BQNom8Xy.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./CollectionBuilder-DRj8-oKX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./utils-CWBnbg5w.js";import"./useRenderProps-BqJZ5b79.js";import"./index-i5X67GZP.js";import"./useControlledState-CN8sBTKq.js";import"./Button.component-CvwjrRb6.js";import"./useObjectRef-B0fXxeND.js";import"./useFocusRing-DokLxauV.js";import"./useFocus-CqC7M1wJ.js";import"./utils-BwOaQS7j.js";import"./focusSafely-DAnwb70X.js";import"./useFocusWithin-Dppy9HPm.js";import"./useButton-CctGfIuY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CsZREXhx.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-DLdGKM_D.js";import"./useLink-BfspLt2l.js";import"./index-B_KxbAnX.js";import"./mixins-TlkgTuSN.js";import"./SpinnerLoader.component-Bg5XyiJ8.js";import"./Loader.component-D2-tScza.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./IconButton.component-Bk3DfWc9.js";import"./MaterialIcon.component-DppQdNZ1.js";import"./Icons.styles-Doaby5xe.js";import"./CustomSelect.component-PTq2MtyT.js";import"./FloatingFieldInputWrapper-BXp7WKGQ.js";import"./Label.component-O0nDRyru.js";import"./Label.context-BAKeKK5_.js";import"./Message.component-Ccl3wjCe.js";import"./Message.context-CRQ8oljB.js";import"./ErrorMessage.component-CV4lQ-GN.js";import"./ErrorMessage.context-aoPfhCA3.js";import"./Dropdowns.styles-98uzmGSa.js";import"./SelectField.component-D-ssKZeI.js";import"./useSelectableList-D3ubgvA_.js";import"./useSelectableItem-DvhFvnzE.js";import"./FocusScope-F7zojRTj.js";import"./useEvent-DE_dT4RF.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./context-CKyfYUWk.js";import"./useDescription-DnVXAhCi.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-DksGeqLW.js";import"./useField-DF4uEtB8.js";import"./useLabel-Dumhvd6m.js";import"./useLabels-DVGDEngn.js";import"./useMenuTrigger-Cw5CX3Pa.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./useOverlayTrigger-CznOZ0w1.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./useFormReset-CiimGfOH.js";import"./useFormValidation-D6UvTinM.js";import"./VisuallyHidden-Co53BRDr.js";import"./PressResponder-BPXFM0Rx.js";import"./context-C20uxASh.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-B9Eqn13H.js";import"./Popover.context-8QQeO7WZ.js";import"./DropdownButton-Bre7mdnN.js";import"./useFormValidationState-Cu8bp2uX.js";import"./useOverlayTriggerState-CQYPpINQ.js";import"./useSingleSelectListState-CAIU-qFx.js";import"./useListState-B7LLLFFQ.js";import"./useCollectionRenderer-DqbkNnVh.js";import"./ListBox.component-BrQV02KJ.js";import"./getItemCount-v0kWppE5.js";import"./useHover-D34ofACQ.js";import"./useForwardedRef-BqZ3RrEL.js";import"./Divider.component-DwvL9aOv.js";import"./Popover.component-DzwRr1Vg.js";import"./useOverlayPosition-C9xJM2-X.js";import"./number-nHrFdSb-.js";const re={title:"Pagination/Pagination",component:e,parameters:{layout:"centered"},argTypes:{...y,children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},t={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{alignItems:"center",gap:8,children:[r.jsx(e.FirstPage,{}),r.jsx(e.PrevPage,{}),r.jsx(e.CurrentPage,{}),r.jsx(e.NextPage,{}),r.jsx(e.LastPage,{})]})}},a={args:{...t.args,children:r.jsxs(m,{alignItems:"center",gap:8,children:[r.jsx(e.FirstPage,{}),r.jsx(e.PrevPage,{}),r.jsx(e.PageList,{children:(o,u)=>r.jsx(e.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(e.NextPage,{}),r.jsx(e.LastPage,{})]})}},n={args:{...t.args,onPageSizeChange:j(),children:r.jsxs(m,{alignItems:"center",gap:8,children:[r.jsx(e.FirstPage,{}),r.jsx(e.PrevPage,{}),r.jsx(e.CurrentPage,{}),r.jsx(e.NextPage,{}),r.jsx(e.LastPage,{}),r.jsxs(e.PageSize,{children:[r.jsx(i,{children:"10 entries"},10),r.jsx(i,{children:"25 entries"},25),r.jsx(i,{children:"50 entries"},50),r.jsx(i,{children:"100 entries"},100)]})]})}};var s,p,g;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    onPageChange: fn(),
    defaultPage: 2,
    totalPages: 10,
    children: <Flex alignItems="center" gap={8}>
        <Pagination.FirstPage />
        <Pagination.PrevPage />
        <Pagination.CurrentPage />
        <Pagination.NextPage />
        <Pagination.LastPage />
      </Flex>
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var P,c,l;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <Flex alignItems="center" gap={8}>
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var x,d,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    onPageSizeChange: fn(),
    children: <Flex alignItems="center" gap={8}>
        <Pagination.FirstPage />
        <Pagination.PrevPage />
        <Pagination.CurrentPage />
        <Pagination.NextPage />
        <Pagination.LastPage />
        <Pagination.PageSize>
          <Item key={10}>10 entries</Item>
          <Item key={25}>25 entries</Item>
          <Item key={50}>50 entries</Item>
          <Item key={100}>100 entries</Item>
        </Pagination.PageSize>
      </Flex>
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const ee=["Primary","WithPageNumbers","WithPageSize"];export{t as Primary,a as WithPageNumbers,n as WithPageSize,ee as __namedExportsOrder,re as default};
