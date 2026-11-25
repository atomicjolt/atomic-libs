import{j as e}from"./iframe-CGPW5dgX.js";import{A as F,I as i}from"./helpers-tUmR_xN7.js";import{P as a}from"./Pagination.component-Bhqcx9Vd.js";import{F as g}from"./Flex.component-BDldr6hG.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./BaseButton-B8bVR-o6.js";import"./mixins-BJuiWlrm.js";import"./index-C0dagnaq.js";import"./useFocusRing-Dbcio0BW.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./context-CLSG1ylv.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";import"./IconButton.component-CifirOzj.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";import"./Button.component-Bd4z0Gnh.js";import"./CustomSelect.component-D5T6ns3z.js";import"./useTranslations-BQv9_06X.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./ListBox.component-CnBM7hB0.js";import"./useSelectableList-BWSkIROv.js";import"./useSelectableItem-BeBcEVva.js";import"./useEvent-CiV_uWQE.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DFxiutEz.js";import"./useDescription-DvoUWjyy.js";import"./DOMLayoutDelegate-OHLFlax3.js";import"./useCollator-BIvanRFU.js";import"./getItemCount-_wmYjxUG.js";import"./useHover-9VTiwztB.js";import"./useForwardedRef-DFbI-FzN.js";import"./useCollectionRenderer-BQP_5EoS.js";import"./Provider-CKCHWQEo.js";import"./Label.component-Bo8kkSzq.js";import"./Label.context-D58S6_wU.js";import"./useListState-BFwRYvsY.js";import"./Divider.component-B1vAuf1o.js";import"./utils-DqmNl-Il.js";import"./FloatingFieldInputWrapper-Y4NWaWCQ.js";import"./Message.component-CIEamcUq.js";import"./Message.context-D_Dpg15a.js";import"./ErrorMessage.component-DUCD1jzH.js";import"./ErrorMessage.context-tIEpfdG1.js";import"./Dropdowns.styles-BcxgVFgx.js";import"./SelectField.component-DMoaNqwA.js";import"./displayName-CEXLPPBu.js";import"./useField-DXQ2XZid.js";import"./useMenuTrigger-BtfO2YQa.js";import"./useOverlayTrigger-Bavuc6A6.js";import"./useCloseOnScroll-CTNw5Yby.js";import"./useFormReset-mO407CKi.js";import"./useFormValidation-hpNb-DuC.js";import"./VisuallyHidden-BPd2hceK.js";import"./PressResponder-xHF_wXhX.js";import"./context-ID_07sjv.js";import"./getScrollParent-BL0kfGii.js";import"./Popover.context-D_v2VeGP.js";import"./useFormValidationState-CWonILzS.js";import"./useOverlayTriggerState-DfGm2mCW.js";import"./useSingleSelectListState-CzUghzMl.js";import"./SkeletonLoader.component-DalY9QZY.js";import"./Popover.component-DVBx73LK.js";import"./useOverlayPosition-HaX0xHeb.js";import"./layout-Dd7m2B0D.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,Xa={title:"Pagination/Pagination",component:a,subcomponents:{"Pagination.FirstPage":a.FirstPage,"Pagination.PrevPage":a.PrevPage,"Pagination.NextPage":a.NextPage,"Pagination.LastPage":a.LastPage,"Pagination.Page":a.Page,"Pagination.PageList":a.PageList,"Pagination.CurrentPage":a.CurrentPage,"Pagination.PageSize":a.PageSize},parameters:{layout:"centered"},argTypes:{...F,defaultPage:{control:"number"},totalPages:{control:"number"},children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},t={args:{onPageChange:u(),defaultPage:2,totalPages:10,children:e.jsxs(g,{$align:"center",$gap:"1",children:[e.jsx(a.FirstPage,{}),e.jsx(a.PrevPage,{}),e.jsx(a.CurrentPage,{}),e.jsx(a.NextPage,{}),e.jsx(a.LastPage,{})]})}},n={args:{...t.args,children:e.jsxs(g,{$align:"center",$gap:"1",children:[e.jsx(a.FirstPage,{}),e.jsx(a.PrevPage,{}),e.jsx(a.PageList,{children:(o,j)=>e.jsx(a.Page,{page:o,variant:o===j.page?"primary":"ghost",children:o})}),e.jsx(a.NextPage,{}),e.jsx(a.LastPage,{})]})},parameters:{docs:{source:{code:`
<Pagination defaultPage={2} totalPages={10}>
  <Flex $align="center" $gap="1">
    <Pagination.FirstPage />
    <Pagination.PrevPage />
    <Pagination.PageList>
      {(page, state) => (
        <Pagination.Page
          page={page}
          variant={page === state.page ? "primary" : "ghost"}
        >
          {page}
        </Pagination.Page>
      )}
    </Pagination.PageList>
    <Pagination.NextPage />
    <Pagination.LastPage />
  </Flex>
</Pagination>
`}}}},r={args:{...t.args,onPageSizeChange:u(),children:e.jsxs(g,{$align:"center",$gap:"1",children:[e.jsx(a.FirstPage,{}),e.jsx(a.PrevPage,{}),e.jsx(a.CurrentPage,{}),e.jsx(a.NextPage,{}),e.jsx(a.LastPage,{}),e.jsxs(a.PageSize,{children:[e.jsx(i,{id:10,children:"10 entries"}),e.jsx(i,{id:25,children:"25 entries"}),e.jsx(i,{id:50,children:"50 entries"}),e.jsx(i,{id:100,children:"100 entries"})]})]})}},Za=["Primary","WithPageNumbers","WithPageSize"];var s,P,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(P=t.parameters)==null?void 0:P.docs)==null?void 0:p.source}}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Pagination defaultPage={2} totalPages={10}>
  <Flex $align="center" $gap="1">
    <Pagination.FirstPage />
    <Pagination.PrevPage />
    <Pagination.PageList>
      {(page, state) => (
        <Pagination.Page
          page={page}
          variant={page === state.page ? "primary" : "ghost"}
        >
          {page}
        </Pagination.Page>
      )}
    </Pagination.PageList>
    <Pagination.NextPage />
    <Pagination.LastPage />
  </Flex>
</Pagination>
\`
      }
    }
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,x,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    onPageSizeChange: fn(),
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
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};export{t as Primary,n as WithPageNumbers,r as WithPageSize,Za as __namedExportsOrder,Xa as default};
