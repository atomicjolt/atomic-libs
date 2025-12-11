import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{O as f,e as P,f as w,D as F,S,R as H}from"./helpers-C1PCfQ2p.js";import{M as o}from"./Modal.component-B2D8MVQ0.js";import{I as j}from"./IconButton.component-DRrjRzam.js";import{T as l}from"./Text.component-BfsDNNuI.js";import{B as n}from"./Button.component-B5rVO3av.js";import{O as C}from"./OverlayTrigger.component-fXJ8h4hL.js";import{M as i}from"./MaterialIcon.component-CXly2orp.js";const $={title:"Overlays/Modals/Modal",component:o,parameters:{docs:{story:{inline:!1,height:"400px"}}},argTypes:{...H,...S,...F,...w,...P,...f}},r={args:{isOpen:!0,children:[e.jsxs(o.Header,{children:[e.jsx(o.Title,{children:"Title"}),e.jsx(j,{icon:"close",variant:"ghost"})]},"header"),e.jsx(o.Body,{children:e.jsx(l,{$size:"3",children:"This is the content of the modal"})},"body"),e.jsxs(o.Footer,{children:[e.jsx(n,{variant:"secondary",children:"Cancel"}),e.jsx(n,{variant:"primary",children:"Save"})]},"footer")]}},a={render:O=>e.jsxs(C,{children:[e.jsx(n,{children:"Open Modal"}),e.jsx(o,{...O,children:d=>e.jsxs(e.Fragment,{children:[e.jsxs(o.Header,{children:[e.jsx(o.Title,{children:"Modal Title"}),e.jsx(j,{icon:"close",variant:"ghost",onPress:d})]}),e.jsx(o.Body,{children:e.jsx(l,{$size:"3",children:"Modal Body"})}),e.jsxs(o.Footer,{children:[e.jsx(n,{variant:"secondary",onPress:d,children:"Cancel"}),e.jsx(n,{variant:"primary",onPress:d,children:"Save"})]})]})})]}),parameters:{docs:{source:{language:"jsx",code:`
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
          <Text $size="3">Modal Body</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onPress={close}>Cancel</Button>
          <Button variant="primary" onPress={close}>Save</Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
</OverlayTrigger>
        `}}}},t={args:{...r.args,$width:"400px",children:e.jsxs(e.Fragment,{children:[e.jsxs(o.Header,{children:[e.jsx(i,{icon:"check"}),e.jsx(o.Title,{children:"Your Download is Ready!"})]}),e.jsx(o.Body,{children:e.jsx(l,{$size:"3",children:"Your download is ready! Click the button below to download your file."})}),e.jsx(o.Footer,{children:e.jsxs(n,{variant:"success",children:[e.jsx(i,{icon:"download"}),"Download"]})})]})}},s={args:{...r.args,children:e.jsx(l,{$size:"20px",children:"You are able to put whatever content you'd like into the modal, the helper components are there for the common use cases."})}};var c,u,M;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: [<Modal.Header key="header">
        <Modal.Title>Title</Modal.Title>
        <IconButton icon="close" variant="ghost" />
      </Modal.Header>, <Modal.Body key="body">
        <Text $size="3">This is the content of the modal</Text>
      </Modal.Body>, <Modal.Footer key="footer">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>]
  }
}`,...(M=(u=r.parameters)==null?void 0:u.docs)==null?void 0:M.source}}};var h,p,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
                <Text $size="3">Modal Body</Text>
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
          <Text $size="3">Modal Body</Text>
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
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var m,g,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    $width: "400px",
    children: <>
        <Modal.Header>
          <MaterialIcon icon="check" />
          <Modal.Title>Your Download is Ready!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Text $size="3">
            Your download is ready! Click the button below to download your
            file.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            <MaterialIcon icon="download" />
            Download
          </Button>
        </Modal.Footer>
      </>
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var T,B,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <Text $size="20px">
        You are able to put whatever content you'd like into the modal, the
        helper components are there for the common use cases.
      </Text>
  }
}`,...(v=(B=s.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const b=["Primary","WithOverlayTrigger","PopupModal","WithCustomContent"],W=Object.freeze(Object.defineProperty({__proto__:null,PopupModal:t,Primary:r,WithCustomContent:s,WithOverlayTrigger:a,__namedExportsOrder:b,default:$},Symbol.toStringTag,{value:"Module"}));export{W as M,r as P,s as W,a};
