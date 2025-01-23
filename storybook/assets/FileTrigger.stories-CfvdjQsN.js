import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{f as b}from"./index-YkVIqR4J.js";import{D as F}from"./index-Ckhd_Y_y.js";import{F as u}from"./FileTrigger.component-CLVkpUOB.js";import{B as x}from"./Button.component-DtbpFVXN.js";import"./index-DJO9vBfz.js";import"./focusSafely-f-NvfehK.js";import"./useObjectRef-CjtaasUj.js";import"./SSRProvider-DAMUgb6s.js";import"./useDescription-B_JleuLr.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./context-BQ3_Es2z.js";import"./useFocus-zOn8SIU-.js";import"./utils-Bz-oJdcG.js";import"./useButton-CK1XMKNi.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CRaVIClu.js";import"./useKeyboard-A8_doyNT.js";import"./usePress-DOH0gK78.js";import"./useHover-D34ofACQ.js";import"./VisuallyHidden-NGXyR_YU.js";import"./useFocusWithin-BwiFBvMF.js";import"./FocusScope-D8kX7o4N.js";import"./useFocusRing-CkPe2VLa.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./useForwardedRef-BqZ3RrEL.js";import"./PressResponder-DcoPugtK.js";import"./useLink-Bis7wRJn.js";import"./index-Co2NqHf1.js";import"./mixins-D6ZuOvce.js";import"./SpinnerLoader.component-CZS0l4HJ.js";import"./Loader.component-DTNPwaWm.js";import"./Flex.component-BqyhhyXT.js";import"./layout-qoR695S7.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-DV3x2bJU.js";import"./Spinner.component-LKZLOMLe.js";const sr={title:"Buttons/FileTrigger",component:u,parameters:{layout:"centered"},argTypes:{children:{control:!1}}},r={args:{onSelect:b(),children:e.jsx(x,{children:"Upload File"})}},t={args:{...r.args,allowsMultiple:!0}},o={render:f=>e.jsx(F,{onDrop:n=>{const h=n.items.filter(D=>D.kind==="file");console.log(h)},children:({isDropTarget:n})=>e.jsx("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center",border:n?"2px dashed black":"2px dashed transparent",backgroundColor:n?"rgba(0,0,0,0.1)":"transparent",padding:"1rem",borderRadius:"8px",textAlign:"center"},children:e.jsx(u,{...f})})}),args:{...r.args,children:e.jsx(x,{children:"Drop Files Here"})},parameters:{docs:{source:{code:`
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
