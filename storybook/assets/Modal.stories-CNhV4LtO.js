import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{M as e}from"./Modal.component-BX2NP9md.js";import{I as x}from"./IconButton.component-Dg_s0u7A.js";import{B as a}from"./Button.component-DtbpFVXN.js";import{O as w}from"./OverlayTrigger.component-DxUIsmls.js";import{M as s}from"./MaterialIcon.component-Bb94pzqW.js";const f={title:"Overlays/Modals/Modal",component:e,tags:["!autodocs"],parameters:{docs:{story:{inline:!1,height:"400px"}}},argTypes:{children:{control:!1},variant:{control:"select",options:["default","popup"]}}},n={args:{isOpen:!0,children:o.jsxs(o.Fragment,{children:[o.jsxs(e.Header,{children:[o.jsx(e.Title,{children:"Title"}),o.jsx(x,{icon:"close",variant:"ghost"})]}),o.jsx(e.Body,{children:o.jsx("p",{children:"This is the content of the modal"})}),o.jsxs(e.Footer,{children:[o.jsx(a,{variant:"secondary",children:"Cancel"}),o.jsx(a,{variant:"primary",children:"Save"})]})]})},parameters:{docs:{source:{language:"jsx",code:`
<Modal isOpen>
  <Modal.Header>
    <Modal.Title>Title</Modal.Title>
    <IconButton icon="close" variant="ghost" />
  </Modal.Header>
  <Modal.Body>
    <p>This is the content of the modal</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Save</Button>
  </Modal.Footer>
</Modal>
        `}}}},r={render:j=>o.jsxs(w,{children:[o.jsx(a,{children:"Open Modal"}),o.jsx(e,{...j,children:d=>o.jsxs(o.Fragment,{children:[o.jsxs(e.Header,{children:[o.jsx(e.Title,{children:"Modal Title"}),o.jsx(x,{icon:"close",variant:"ghost",onPress:d})]}),o.jsx(e.Body,{children:o.jsx("p",{children:"Modal Body"})}),o.jsxs(e.Footer,{children:[o.jsx(a,{variant:"secondary",onPress:d,children:"Cancel"}),o.jsx(a,{variant:"primary",onPress:d,children:"Save"})]})]})})]}),parameters:{docs:{source:{language:"jsx",code:`
<OverlayTrigger>
  <Button>Open Modal</Button>
  <Modal>
    {(close) => (
      <>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <IconButton icon="close" variant="ghost" onPress={close} />
        </Modal.Header>
        <Modal.Body>
          <p>Modal Body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onPress={close}>Cancel</Button>
          <Button variant="primary" onPress={close}>Save</Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
</OverlayTrigger>
        `}}}},t={args:{...n.args,variant:"popup",children:o.jsxs(o.Fragment,{children:[o.jsxs(e.Header,{children:[o.jsx(s,{icon:"check"}),o.jsx(e.Title,{children:"Your Download is Ready!"})]}),o.jsx(e.Body,{children:o.jsx("p",{children:"Your download is ready! Click the button below to download your file."})}),o.jsx(e.Footer,{children:o.jsxs(a,{variant:"success",children:[o.jsx(s,{icon:"download"}),"Download"]})})]})},parameters:{docs:{source:{code:`
<Modal isOpen variant="popup">
  <Modal.Header>
    <MaterialIcon icon="check" />
    <Modal.Title>Your Download is Ready!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Your download is ready! Click the button below to download your file.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="success">
      <MaterialIcon icon="download" />
      Download
    </Button>
  </Modal.Footer>
</Modal>
        `}}}},l={args:{...n.args,children:o.jsx("p",{style:{fontSize:"20px"},children:"You are able to put whatever content you'd like into the modal, the helper components are there for the common use cases."})}};var i,c,M;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <>
        <Modal.Header>
          <Modal.Title>Title</Modal.Title>
          <IconButton icon="close" variant="ghost" />
        </Modal.Header>
        <Modal.Body>
          <p>This is the content of the modal</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </>
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: \`
<Modal isOpen>
  <Modal.Header>
    <Modal.Title>Title</Modal.Title>
    <IconButton icon="close" variant="ghost" />
  </Modal.Header>
  <Modal.Body>
    <p>This is the content of the modal</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Save</Button>
  </Modal.Footer>
</Modal>
        \`
      }
    }
  }
}`,...(M=(c=n.parameters)==null?void 0:c.docs)==null?void 0:M.source}}};var u,p,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <OverlayTrigger>
        <Button>Open Modal</Button>
        <Modal {...args}>
          {close => <>
              <Modal.Header>
                <Modal.Title>Modal Title</Modal.Title>
                <IconButton icon="close" variant="ghost" onPress={close} />
              </Modal.Header>
              <Modal.Body>
                <p>Modal Body</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onPress={close}>
                  Cancel
                </Button>
                <Button variant="primary" onPress={close}>
                  Save
                </Button>
              </Modal.Footer>
            </>}
        </Modal>
      </OverlayTrigger>;
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: \`
<OverlayTrigger>
  <Button>Open Modal</Button>
  <Modal>
    {(close) => (
      <>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <IconButton icon="close" variant="ghost" onPress={close} />
        </Modal.Header>
        <Modal.Body>
          <p>Modal Body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onPress={close}>Cancel</Button>
          <Button variant="primary" onPress={close}>Save</Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
</OverlayTrigger>
        \`
      }
    }
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var y,B,m;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "popup",
    children: <>
        <Modal.Header>
          <MaterialIcon icon="check" />
          <Modal.Title>Your Download is Ready!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your download is ready! Click the button below to download your
            file.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            <MaterialIcon icon="download" />
            Download
          </Button>
        </Modal.Footer>
      </>
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Modal isOpen variant="popup">
  <Modal.Header>
    <MaterialIcon icon="check" />
    <Modal.Title>Your Download is Ready!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Your download is ready! Click the button below to download your file.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="success">
      <MaterialIcon icon="download" />
      Download
    </Button>
  </Modal.Footer>
</Modal>
        \`
      }
    }
  }
}`,...(m=(B=t.parameters)==null?void 0:B.docs)==null?void 0:m.source}}};var g,v,T;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <p style={{
      fontSize: "20px"
    }}>
        You are able to put whatever content you'd like into the modal, the
        helper components are there for the common use cases.
      </p>
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const F=["Primary","WithOverlayTrigger","PopupModal","WithCustomContent"],b=Object.freeze(Object.defineProperty({__proto__:null,PopupModal:t,Primary:n,WithCustomContent:l,WithOverlayTrigger:r,__namedExportsOrder:F,default:f},Symbol.toStringTag,{value:"Module"}));export{b as M,n as P,l as W,r as a};
