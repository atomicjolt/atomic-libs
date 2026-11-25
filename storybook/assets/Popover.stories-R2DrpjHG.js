import{j as e,r as v}from"./iframe-CGPW5dgX.js";import{i as x,I as o}from"./helpers-tUmR_xN7.js";import{M as P}from"./MenuTrigger-fof7Lex8.js";import{P as n}from"./Popover.component-DVBx73LK.js";import{B as f}from"./Button.component-Bd4z0Gnh.js";import{M as R}from"./Menu.component-D_obDr5z.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useMenuTrigger-BtfO2YQa.js";import"./useSelectableItem-BeBcEVva.js";import"./usePress-BioWcz2v.js";import"./useEvent-CiV_uWQE.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DFxiutEz.js";import"./context-CLSG1ylv.js";import"./useDescription-DvoUWjyy.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./useOverlayTrigger-Bavuc6A6.js";import"./useCloseOnScroll-CTNw5Yby.js";import"./PressResponder-xHF_wXhX.js";import"./Provider-CKCHWQEo.js";import"./Popover.context-D_v2VeGP.js";import"./index-C0dagnaq.js";import"./context-ID_07sjv.js";import"./useFocusWithin-BzfIRRcZ.js";import"./getScrollParent-BL0kfGii.js";import"./useOverlayTriggerState-DfGm2mCW.js";import"./useLabels-Bveo7T3X.js";import"./VisuallyHidden-BPd2hceK.js";import"./useOverlayPosition-HaX0xHeb.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BytR9cji.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./colors-PU9nFmCW.js";import"./useForwardedRef-DFbI-FzN.js";import"./BaseButton-B8bVR-o6.js";import"./mixins-BJuiWlrm.js";import"./useFocusRing-Dbcio0BW.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./displayName-CEXLPPBu.js";import"./useSelectableList-BWSkIROv.js";import"./DOMLayoutDelegate-OHLFlax3.js";import"./useCollator-BIvanRFU.js";import"./getItemCount-_wmYjxUG.js";import"./useHover-9VTiwztB.js";import"./useCollectionRenderer-BQP_5EoS.js";import"./Divider.component-B1vAuf1o.js";const Ee={title:"Overlays/Popover",component:n,parameters:{layout:"centered"},argTypes:{offset:{control:"number",description:"The distance in pixels between the popover and the target element.",table:{defaultValue:{summary:"8"}}},variant:{control:"select",options:["listbox","menu","datepicker"]},isOpen:{control:"boolean",description:"Whether the popover is open or not. Not needed when paired with a Trigger Wrapper. Ignored inside a trigger wrapper, which controls the state itself (see the Standalone story)."},defaultOpen:{control:"boolean",description:"Whether the popover is open by default. Not needed when paired with a Trigger Wrapper. Ignored inside a trigger wrapper, which controls the state itself.",table:{defaultValue:{summary:"false"}}},placement:{...x.placement,table:{defaultValue:{summary:'"bottom"'}}}}},t={render:i=>e.jsxs(P,{children:[e.jsx(f,{children:"Press Me"}),e.jsx(n,{...i,children:e.jsxs(R,{children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})})]}),args:{}},r={render:function(h){const p=v.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(f,{ref:p,children:"Trigger"}),e.jsx(n,{...h,triggerRef:p,children:e.jsx("div",{style:{padding:"8px 12px"},children:"Popover content"})})]})},args:{isOpen:!0},parameters:{docs:{story:{inline:!1,height:"200px"},source:{language:"jsx",code:`
const triggerRef = useRef(null);

<Button ref={triggerRef}>Trigger</Button>
<Popover triggerRef={triggerRef} isOpen={isOpen} onOpenChange={setIsOpen}>
  <div style={{ padding: "8px 12px" }}>Popover content</div>
</Popover>
        `}}}},ke=["Default","Standalone"];var s,a,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <MenuTrigger>
        <Button>Press Me</Button>
        <Popover {...args}>
          <Menu>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Menu>
        </Popover>
      </MenuTrigger>;
  },
  args: {}
}`,...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var g,l,d,c,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function StandalonePopover(args) {
    const triggerRef = useRef<HTMLButtonElement>(null);
    return <>
        <Button ref={triggerRef}>Trigger</Button>
        <Popover {...args} triggerRef={triggerRef}>
          <div style={{
          padding: "8px 12px"
        }}>Popover content</div>
        </Popover>
      </>;
  },
  args: {
    isOpen: true
  },
  parameters: {
    docs: {
      // An open popover is modal (it locks scrolling), so keep it in an iframe.
      story: {
        inline: false,
        height: "200px"
      },
      source: {
        language: "jsx",
        code: \`
const triggerRef = useRef(null);

<Button ref={triggerRef}>Trigger</Button>
<Popover triggerRef={triggerRef} isOpen={isOpen} onOpenChange={setIsOpen}>
  <div style={{ padding: "8px 12px" }}>Popover content</div>
</Popover>
        \`
      }
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"Without a trigger wrapper, pass a `triggerRef` to position the popover and\ncontrol it with `isOpen` / `onOpenChange`.",...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.description}}};export{t as Default,r as Standalone,ke as __namedExportsOrder,Ee as default};
