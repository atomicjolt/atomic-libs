import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{f as j}from"./index-YkVIqR4J.js";import{A as y}from"./helpers-fQWfWkgV.js";import{I as i}from"./Collection-DjPHrlSR.js";import{P as e}from"./Pagination.component-J58vMfkp.js";import{F as m}from"./Flex.component-BqyhhyXT.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./layout-qoR695S7.js";import"./utils-2VFVy79V.js";import"./index-Co2NqHf1.js";import"./useObjectRef-CjtaasUj.js";import"./SSRProvider-DAMUgb6s.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./CollectionBuilder-JuF9vAdV.js";import"./index-DJdX7xnk.js";import"./useControlledState-CN8sBTKq.js";import"./Button.component-DtbpFVXN.js";import"./useFocusRing-CkPe2VLa.js";import"./useFocus-zOn8SIU-.js";import"./utils-Bz-oJdcG.js";import"./focusSafely-f-NvfehK.js";import"./useFocusWithin-BwiFBvMF.js";import"./useButton-CK1XMKNi.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CRaVIClu.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-DOH0gK78.js";import"./useLink-Bis7wRJn.js";import"./mixins-D6ZuOvce.js";import"./SpinnerLoader.component-CZS0l4HJ.js";import"./Loader.component-DTNPwaWm.js";import"./Checkmark.component-DV3x2bJU.js";import"./Spinner.component-LKZLOMLe.js";import"./IconButton.component-Dg_s0u7A.js";import"./MaterialIcon.component-Bb94pzqW.js";import"./Icons.styles-BaNpbbIh.js";import"./CustomSelect.component-C5tp6Fly.js";import"./FloatingFieldInputWrapper-COAUq1MS.js";import"./Label.component-BZ-jUZHh.js";import"./Label.context-BBG6Xa_C.js";import"./Message.component-DWiHyL-P.js";import"./Message.context-DZr9m1_6.js";import"./ErrorMessage.component-DPAek6pW.js";import"./ErrorMessage.context-Buhm2lRy.js";import"./Dropdowns.styles-BreEPtxx.js";import"./SelectField.component-DntQeZSQ.js";import"./useSelectableList-mEN2zsP6.js";import"./useSelectableItem-CQRiYui4.js";import"./FocusScope-D8kX7o4N.js";import"./useEvent-CWl__ymk.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./context-BQ3_Es2z.js";import"./useDescription-B_JleuLr.js";import"./DOMLayoutDelegate-NL2UALsg.js";import"./useCollator-BQpRQjOj.js";import"./useField-c4_Ph5j6.js";import"./useLabel-7v3RoPQd.js";import"./useLabels-DvZR7g99.js";import"./useMenuTrigger-CZON2-u9.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useOverlayTrigger-BMp1DQII.js";import"./useCloseOnScroll-ChRhZSVB.js";import"./useFormReset-Bq2IuLnF.js";import"./useFormValidation-CkGNgIJp.js";import"./VisuallyHidden-NGXyR_YU.js";import"./PressResponder-DcoPugtK.js";import"./context-C-yxdEES.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-B9Eqn13H.js";import"./Popover.context--7q0wYv0.js";import"./DropdownButton-DQc4LsnR.js";import"./useFormValidationState-DFldk10H.js";import"./useOverlayTriggerState-D-lvPMs5.js";import"./useSingleSelectListState-Bkx1VDRS.js";import"./useListState-D8dCYdA8.js";import"./useCollectionRenderer-Crm-vNbA.js";import"./ListBox.component-eMEPQxY-.js";import"./getItemCount-DIKwApTf.js";import"./useHover-D34ofACQ.js";import"./useForwardedRef-BqZ3RrEL.js";import"./Divider.component-BK_sltmD.js";import"./Popover.component-C_GNLa8i.js";import"./useOverlayPosition-aJa5QpHr.js";import"./number-nHrFdSb-.js";const $r={title:"Pagination/Pagination",component:e,parameters:{layout:"centered"},argTypes:{...y,children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},t={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{alignItems:"center",gap:8,children:[r.jsx(e.FirstPage,{}),r.jsx(e.PrevPage,{}),r.jsx(e.CurrentPage,{}),r.jsx(e.NextPage,{}),r.jsx(e.LastPage,{})]})}},a={args:{...t.args,children:r.jsxs(m,{alignItems:"center",gap:8,children:[r.jsx(e.FirstPage,{}),r.jsx(e.PrevPage,{}),r.jsx(e.PageList,{children:(o,u)=>r.jsx(e.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(e.NextPage,{}),r.jsx(e.LastPage,{})]})}},n={args:{...t.args,onPageSizeChange:j(),children:r.jsxs(m,{alignItems:"center",gap:8,children:[r.jsx(e.FirstPage,{}),r.jsx(e.PrevPage,{}),r.jsx(e.CurrentPage,{}),r.jsx(e.NextPage,{}),r.jsx(e.LastPage,{}),r.jsxs(e.PageSize,{children:[r.jsx(i,{children:"10 entries"},10),r.jsx(i,{children:"25 entries"},25),r.jsx(i,{children:"50 entries"},50),r.jsx(i,{children:"100 entries"},100)]})]})}};var s,p,g;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const re=["Primary","WithPageNumbers","WithPageSize"];export{t as Primary,a as WithPageNumbers,n as WithPageSize,re as __namedExportsOrder,$r as default};
