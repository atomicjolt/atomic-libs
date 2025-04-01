import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{fn as j}from"./index-D1pa-M5k.js";import{I as i}from"./Collection-Blx8idkz.js";import{P as t}from"./Pagination.component-Msim9cw9.js";import{F as m}from"./Flex.component-CLGTqHVr.js";import"./CollectionBuilder-C8aBQCuV.js";import"./index-DmM0KDA7.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useFocusable-DDF3Tgcq.js";import"./useObjectRef-BMBYa31u.js";import"./SSRProvider-nIDwi1ZO.js";import"./useControlledState-sJfMLWrs.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./Button.component-CR20HsxD.js";import"./useFocusRing-CMFCJy1v.js";import"./useFocusWithin-ypR2cHkl.js";import"./usePress-BejIIMCm.js";import"./useButton-EuBryRSZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-ytEWay4y.js";import"./index-9MQGFWEg.js";import"./styled-components.browser.esm-B0S50oBn.js";import"./mixins-CgZ-Dp8B.js";import"./SpinnerLoader.component-pPupCEPz.js";import"./Loader.component-CjZASL4X.js";import"./Checkmark.component-CdBGiybJ.js";import"./Spinner.component-CXWvSCLl.js";import"./ProgressCircle.component-DE6AAkbz.js";import"./useLabel-C1USB2dP.js";import"./useLabels-DqNC8NnF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./context-BF7eBGFA.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./IconButton.component-B1ndx4B1.js";import"./index-DaCyrt1s.js";import"./Icons.styles-D2L4nNgu.js";import"./CustomSelect.component-D19ustvD.js";import"./FloatingFieldInputWrapper-CeE2Fdja.js";import"./Label.component-ve3BZ3AV.js";import"./Label.context-BCDtyvV0.js";import"./Message.component-BDMPukxI.js";import"./Message.context-D6YW8C9h.js";import"./ErrorMessage.component-SZdxpdif.js";import"./ErrorMessage.context-B9WfFUFn.js";import"./Dropdowns.styles-BNfmDUhX.js";import"./SelectField.component-sa2xj1xQ.js";import"./useSelectableList-BlmLA-dr.js";import"./useSelectableItem-BlMo16Kr.js";import"./useEvent-DX5YI6yT.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DY128LIr.js";import"./useDescription-DEja_w9s.js";import"./DOMLayoutDelegate-CYEMPlg-.js";import"./useCollator-DZEoqIyA.js";import"./useField-BmPvDaI7.js";import"./useMenuTrigger-DUYA4yl7.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./useOverlayTrigger-DR7rG5da.js";import"./useCloseOnScroll-CkGkhb-Y.js";import"./useFormReset-BZUjp8ic.js";import"./useFormValidation-Dk9gOIEC.js";import"./VisuallyHidden-CdaVAzx-.js";import"./PressResponder-XOPwQlQI.js";import"./context-Cc6JC_Nk.js";import"./getScrollParent-BL0kfGii.js";import"./Provider-op_UCnZE.js";import"./Popover.context-Cb09Dlmi.js";import"./DropdownButton-_WDIgdjp.js";import"./useFormValidationState-CKAS44yz.js";import"./useOverlayTriggerState-DiYlioC9.js";import"./useSingleSelectListState-CfQmZLaP.js";import"./useListState-ekQbMX2i.js";import"./useCollectionRenderer-D0KC5ksC.js";import"./ListBox.component-BcUZ49wy.js";import"./getItemCount-bvAGpgdb.js";import"./useHover-BXnVJtPw.js";import"./useForwardedRef-CeqQ-Fh5.js";import"./Divider.component-BFlV1fwZ.js";import"./utils-DqmNl-Il.js";import"./Popover.component-Dzhi1oLp.js";import"./useOverlayPosition-DY7J2sl_.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";const Yr={title:"Pagination/Pagination",component:t,parameters:{layout:"centered"},argTypes:{children:{control:!1},onPageChange:{table:{category:"Events"}},onPageSizeChange:{table:{category:"Events"}},variant:{control:"select",options:["primary","secondary","link","error","success","inverted","content","border","ghost"]}}},e={args:{onPageChange:j(),defaultPage:2,totalPages:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},a={args:{...e.args,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.PageList,{children:(o,u)=>r.jsx(t.Page,{page:o,variant:o===u.page?"primary":"ghost",children:o})}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{})]})}},n={args:{...e.args,onPageSizeChange:j(),defaultPageSize:10,children:r.jsxs(m,{$align:"center",$gap:"1",children:[r.jsx(t.FirstPage,{}),r.jsx(t.PrevPage,{}),r.jsx(t.CurrentPage,{}),r.jsx(t.NextPage,{}),r.jsx(t.LastPage,{}),r.jsxs(t.PageSize,{children:[r.jsx(i,{id:10,children:"10 entries"}),r.jsx(i,{id:25,children:"25 entries"}),r.jsx(i,{id:50,children:"50 entries"}),r.jsx(i,{id:100,children:"100 entries"})]})]})}};var s,p,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
