import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{f as j}from"./index-YkVIqR4J.js";import{A as y}from"./helpers-DsiJys5i.js";import{F as m}from"./index-K1z_EpAd.js";import{I as i}from"./Collection-Bcaq8CIK.js";import{P as e}from"./Pagination.component-08Z8Vi_U.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./CollectionBuilder-Vf4TV1hX.js";import"./index-DJdX7xnk.js";import"./SSRProvider-DAMUgb6s.js";import"./useLayoutEffect-Bj1hLagI.js";import"./Section-BBepoPM4.js";import"./utils-CWBnbg5w.js";import"./useRenderProps-BqJZ5b79.js";import"./index-i5X67GZP.js";import"./useControlledState-CN8sBTKq.js";import"./Button.component-Bg3ttyxF.js";import"./useObjectRef-C4RVQRRU.js";import"./useFocusRing-MU4psFt8.js";import"./useFocus-C-we61At.js";import"./utils-DHlq6CLd.js";import"./focusSafely-GXGk_mpd.js";import"./useFocusWithin-DOCmU_ML.js";import"./useButton-GWYvoXvT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DyKXFx56.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-DG8LklVH.js";import"./useLink-ytCU544I.js";import"./index-CXdyvu6V.js";import"./mixins-TlkgTuSN.js";import"./SpinnerLoader.component-BS7s8xEm.js";import"./Loader.component-CqkhvLsa.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";import"./IconButton.component-C815Wh4m.js";import"./index-C_RUmn9I.js";import"./Icons.styles-Doaby5xe.js";import"./CustomSelect.component-DdiB8TpK.js";import"./FloatingFieldInputWrapper-CEMLf6YP.js";import"./Label.component-5ShF5vdw.js";import"./Label.context-Cwics8Eu.js";import"./Message.component-DgHLwaZZ.js";import"./Message.context-DfHBDHY_.js";import"./ErrorMessage.component-DYIqQ3G7.js";import"./ErrorMessage.context-D3nT9BuV.js";import"./Dropdowns.styles-98uzmGSa.js";import"./SelectField.component-Bw0yr8VG.js";import"./useSelectableList-B62EEucu.js";import"./useSelectableItem-ohL7oXES.js";import"./FocusScope-BKSplYEH.js";import"./useEvent-CWcEg10T.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./context-CKyfYUWk.js";import"./useDescription-DnVXAhCi.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-DksGeqLW.js";import"./useField-4WjA1Loi.js";import"./useLabel-D3wT2o0c.js";import"./useLabels-DtS694vG.js";import"./useMenuTrigger-RuJE9uUm.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./useOverlayTrigger-DeiYnLln.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./useFormReset-BxS8FGOL.js";import"./useFormValidation-B89CjNwR.js";import"./VisuallyHidden-BPFT_fih.js";import"./PressResponder-Dd5vRurA.js";import"./context-C5Zmhtj1.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-B9Eqn13H.js";import"./context-p027hjsN.js";import"./DropdownButton-CxluEss9.js";import"./useFormValidationState-Cu8bp2uX.js";import"./useOverlayTriggerState-DMR8aBHV.js";import"./useSingleSelectListState-CcBly1Od.js";import"./useListState-sdH-ZySf.js";import"./ListBox.component-BRgs0b2E.js";import"./getItemCount-77JuFrxk.js";import"./useHover-D34ofACQ.js";import"./useForwardedRef-BqZ3RrEL.js";import"./useCollectionRenderer-DooeD2Pa.js";import"./Divider.component-DwvL9aOv.js";import"./Popover.component-CB2Nnidh.js";import"./useOverlayPosition-DNw_PjS2.js";import"./number-nHrFdSb-.js";const re={title:"Pagination/Pagination",component:e,parameters:{layout:"centered"},argTypes:{...y,children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},t={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{alignItems:"center",gap:8,children:[r.jsx(e.FirstPage,{}),r.jsx(e.PrevPage,{}),r.jsx(e.CurrentPage,{}),r.jsx(e.NextPage,{}),r.jsx(e.LastPage,{})]})}},a={args:{...t.args,children:r.jsxs(m,{alignItems:"center",gap:8,children:[r.jsx(e.FirstPage,{}),r.jsx(e.PrevPage,{}),r.jsx(e.PageList,{children:(o,u)=>r.jsx(e.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(e.NextPage,{}),r.jsx(e.LastPage,{})]})}},n={args:{...t.args,onPageSizeChange:j(),children:r.jsxs(m,{alignItems:"center",gap:8,children:[r.jsx(e.FirstPage,{}),r.jsx(e.PrevPage,{}),r.jsx(e.CurrentPage,{}),r.jsx(e.NextPage,{}),r.jsx(e.LastPage,{}),r.jsxs(e.PageSize,{children:[r.jsx(i,{children:"10 entries"},10),r.jsx(i,{children:"25 entries"},25),r.jsx(i,{children:"50 entries"},50),r.jsx(i,{children:"100 entries"},100)]})]})}};var s,p,g;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
