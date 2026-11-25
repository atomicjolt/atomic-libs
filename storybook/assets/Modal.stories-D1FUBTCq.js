import{j as e}from"./iframe-CGPW5dgX.js";import{S as u,D as r,O as P,g as H,h as S,R as z}from"./helpers-tUmR_xN7.js";import{M as o}from"./Modal.component-FNfoIcVj.js";import{I as C}from"./IconButton.component-CifirOzj.js";import{T as i}from"./Text.component-Br2J6Hgv.js";import{B as n}from"./Button.component-Bd4z0Gnh.js";import{M}from"./MaterialIcon.component-Dhrh5rCP.js";import{O as k}from"./OverlayTrigger.component-7L8D-EzU.js";const I={title:"Overlays/Modals/Modal",component:o,parameters:{docs:{story:{inline:!1,height:"400px"}}},argTypes:{...z,...u,...r,...S,...H,...P,$width:{...r.$width,table:{...r.$width.table,defaultValue:{summary:'"100%"'}}},$maxWidth:{...r.$maxWidth,table:{...r.$maxWidth.table,defaultValue:{summary:'"800px"'}}},$p:{...u.$p,table:{...u.$p.table,defaultValue:{summary:'"5"'}}}}},a={args:{isOpen:!0,children:[e.jsxs(o.Header,{children:[e.jsx(o.Title,{children:"Title"}),e.jsx(C,{icon:"close",variant:"ghost"})]},"header"),e.jsx(o.Body,{children:e.jsx(i,{$size:"3",children:"This is the content of the modal"})},"body"),e.jsxs(o.Footer,{children:[e.jsx(n,{variant:"secondary",children:"Cancel"}),e.jsx(n,{variant:"primary",children:"Save"})]},"footer")]}},t={render:F=>e.jsxs(k,{children:[e.jsx(n,{children:"Open Modal"}),e.jsx(o,{...F,children:c=>e.jsxs(e.Fragment,{children:[e.jsxs(o.Header,{children:[e.jsx(o.Title,{children:"Modal Title"}),e.jsx(C,{icon:"close",variant:"ghost",onPress:c})]}),e.jsx(o.Body,{children:e.jsx(i,{$size:"3",children:"Modal Body"})}),e.jsxs(o.Footer,{children:[e.jsx(n,{variant:"secondary",onPress:c,children:"Cancel"}),e.jsx(n,{variant:"primary",onPress:c,children:"Save"})]})]})})]}),parameters:{docs:{source:{language:"jsx",code:`
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
        `}}}},s={args:{...a.args,$width:"400px",children:e.jsxs(e.Fragment,{children:[e.jsxs(o.Header,{children:[e.jsx(M,{icon:"check"}),e.jsx(o.Title,{children:"Your Download is Ready!"})]}),e.jsx(o.Body,{children:e.jsx(i,{$size:"3",children:"Your download is ready! Click the button below to download your file."})}),e.jsx(o.Footer,{children:e.jsxs(n,{variant:"success",children:[e.jsx(M,{icon:"download"}),"Download"]})})]})},parameters:{docs:{source:{language:"jsx",code:`
<Modal isOpen $width="400px">
  <Modal.Header>
    <MaterialIcon icon="check" />
    <Modal.Title>Your Download is Ready!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Text $size="3">
      Your download is ready! Click the button below to download your file.
    </Text>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="success">
      <MaterialIcon icon="download" />
      Download
    </Button>
  </Modal.Footer>
</Modal>
        `}}}},d={args:{...a.args,children:e.jsx(i,{$size:"20px",children:"You are able to put whatever content you'd like into the modal, the helper components are there for the common use cases."})},parameters:{docs:{source:{language:"jsx",code:`
<Modal isOpen>
  <Text $size="20px">
    You are able to put whatever content you'd like into the modal, the
    helper components are there for the common use cases.
  </Text>
</Modal>
        `}}}},l={args:{...a.args,isCentered:!0},parameters:{docs:{source:{language:"jsx",code:`
<Modal isOpen isCentered>
  <Modal.Header>
    <Modal.Title>Title</Modal.Title>
    <IconButton icon="close" variant="ghost" />
  </Modal.Header>
  <Modal.Body>
    <Text $size="3">This is the content of the modal</Text>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Save</Button>
  </Modal.Footer>
</Modal>
        `}}}},Y=["Primary","WithOverlayTrigger","PopupModal","WithCustomContent","Centered"];var h,p,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,x,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,B,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: \`
<Modal isOpen $width="400px">
  <Modal.Header>
    <MaterialIcon icon="check" />
    <Modal.Title>Your Download is Ready!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Text $size="3">
      Your download is ready! Click the button below to download your file.
    </Text>
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
}`,...(v=(B=s.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var j,w,f;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <Text $size="20px">
        You are able to put whatever content you'd like into the modal, the
        helper components are there for the common use cases.
      </Text>
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: \`
<Modal isOpen>
  <Text $size="20px">
    You are able to put whatever content you'd like into the modal, the
    helper components are there for the common use cases.
  </Text>
</Modal>
        \`
      }
    }
  }
}`,...(f=(w=d.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var O,$,b;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isCentered: true
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: \`
<Modal isOpen isCentered>
  <Modal.Header>
    <Modal.Title>Title</Modal.Title>
    <IconButton icon="close" variant="ghost" />
  </Modal.Header>
  <Modal.Body>
    <Text $size="3">This is the content of the modal</Text>
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
}`,...(b=($=l.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const G=Object.freeze(Object.defineProperty({__proto__:null,Centered:l,PopupModal:s,Primary:a,WithCustomContent:d,WithOverlayTrigger:t,__namedExportsOrder:Y,default:I},Symbol.toStringTag,{value:"Module"}));export{l as C,G as M,s as P,d as W,t as a};
