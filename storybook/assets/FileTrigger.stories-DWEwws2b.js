import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{f as b}from"./index-YkVIqR4J.js";import{D as F}from"./index-CCeZ0_6Y.js";import{F as u}from"./FileTrigger.component-DZaE6jyg.js";import{B as x}from"./Button.component-CvwjrRb6.js";import"./index-DJO9vBfz.js";import"./focusSafely-DAnwb70X.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./useDescription-DnVXAhCi.js";import"./useLocalizedStringFormatter-CIL7QaWo.js";import"./context-CKyfYUWk.js";import"./useObjectRef-B0fXxeND.js";import"./useFocus-CqC7M1wJ.js";import"./utils-BwOaQS7j.js";import"./useButton-CctGfIuY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CsZREXhx.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-DLdGKM_D.js";import"./useHover-D34ofACQ.js";import"./VisuallyHidden-Co53BRDr.js";import"./useFocusWithin-Dppy9HPm.js";import"./FocusScope-F7zojRTj.js";import"./useFocusRing-DokLxauV.js";import"./useRenderProps-BqJZ5b79.js";import"./index-i5X67GZP.js";import"./styled-components.browser.esm-WCay-hu9.js";import"./useForwardedRef-BqZ3RrEL.js";import"./PressResponder-BPXFM0Rx.js";import"./useLink-BfspLt2l.js";import"./index-B_KxbAnX.js";import"./mixins-TlkgTuSN.js";import"./SpinnerLoader.component-Bg5XyiJ8.js";import"./Loader.component-D2-tScza.js";import"./index-CiylWqPi.js";import"./utils-CWBnbg5w.js";import"./Checkmark.component-CAhyXLZS.js";import"./Spinner.component-DpjfBBgU.js";const sr={title:"Buttons/FileTrigger",component:u,parameters:{layout:"centered"},argTypes:{children:{control:!1}}},r={args:{onSelect:b(),children:e.jsx(x,{children:"Upload File"})}},t={args:{...r.args,allowsMultiple:!0}},o={render:f=>e.jsx(F,{onDrop:n=>{const h=n.items.filter(D=>D.kind==="file");console.log(h)},children:({isDropTarget:n})=>e.jsx("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center",border:n?"2px dashed black":"2px dashed transparent",backgroundColor:n?"rgba(0,0,0,0.1)":"transparent",padding:"1rem",borderRadius:"8px",textAlign:"center"},children:e.jsx(u,{...f})})}),args:{...r.args,children:e.jsx(x,{children:"Drop Files Here"})},parameters:{docs:{source:{code:`
<DropZone
  onDrop={(e) => {
    const files = e.items.filter(
      (item) => item.kind === "file"
    ) as FileDropItem[];

    console.log(files);
  }}
>
  {({ isDropTarget }) => (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: isDropTarget
          ? "2px dashed black"
          : "2px dashed transparent",
        backgroundColor: isDropTarget ? "rgba(0,0,0,0.1)" : "transparent",
        padding: "1rem",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <FileTrigger>
        <Button>Drop Files Here</Button>
      </FileTrigger>
    </div>
  )}
</DropZone>
`}}}};var i,s,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onSelect: fn(),
    children: <Button>Upload File</Button>
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    allowsMultiple: true
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,c,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <DropZone onDrop={e => {
      const files = e.items.filter(item => item.kind === "file") as FileDropItem[];
      console.log(files);
    }}>
        {({
        isDropTarget
      }) => <div style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: isDropTarget ? "2px dashed black" : "2px dashed transparent",
        backgroundColor: isDropTarget ? "rgba(0,0,0,0.1)" : "transparent",
        padding: "1rem",
        borderRadius: "8px",
        textAlign: "center"
      }}>
            <FileTrigger {...args} />
          </div>}
      </DropZone>;
  },
  args: {
    ...Primary.args,
    children: <Button>Drop Files Here</Button>
  },
  parameters: {
    docs: {
      source: {
        code: \`
<DropZone
  onDrop={(e) => {
    const files = e.items.filter(
      (item) => item.kind === "file"
    ) as FileDropItem[];

    console.log(files);
  }}
>
  {({ isDropTarget }) => (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: isDropTarget
          ? "2px dashed black"
          : "2px dashed transparent",
        backgroundColor: isDropTarget ? "rgba(0,0,0,0.1)" : "transparent",
        padding: "1rem",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <FileTrigger>
        <Button>Drop Files Here</Button>
      </FileTrigger>
    </div>
  )}
</DropZone>
\`
      }
    }
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const ar=["Primary","AllowMultipleFiles","WithDragAndDrop"];export{t as AllowMultipleFiles,r as Primary,o as WithDragAndDrop,ar as __namedExportsOrder,sr as default};
