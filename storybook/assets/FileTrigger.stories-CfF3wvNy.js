import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{f as b}from"./index-YkVIqR4J.js";import{F as u}from"./FileTrigger.component-WUVLsGfj.js";import{B as x}from"./Button.component-7ZEnE2xC.js";import{D as F}from"./DropZone.component-xhsBllEr.js";import"./index-DJO9vBfz.js";import"./useForwardedRef-BqZ3RrEL.js";import"./PressResponder-DHeHotEt.js";import"./usePress-DBLAzBwe.js";import"./focusSafely-BOUv7I-8.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./useObjectRef-CA0MXmrf.js";import"./useFocusRing-PETNqKnG.js";import"./useFocus-DXSPV_um.js";import"./utils-CrQpPYo7.js";import"./useFocusWithin-Bb3mfDwa.js";import"./useRenderProps-Bk8BH60l.js";import"./index-i5X67GZP.js";import"./useButton-Bk3lNUMb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DHL4UX94.js";import"./useKeyboard-A8_doyNT.js";import"./useLink-XD5ax7xG.js";import"./index-CHPAqjqs.js";import"./styled-components.browser.esm-BQf_XqKi.js";import"./mixins-B7X2BZyR.js";import"./SpinnerLoader.component-BvhIBz4v.js";import"./Loader.component-BDvxQSI3.js";import"./index-5u02HfcA.js";import"./layout-UyCWIQlE.js";import"./spacing-Bd-CIscW.js";import"./utils-2VFVy79V.js";import"./Checkmark.component-uYKMesek.js";import"./Spinner.component-CK7MNkmm.js";import"./ProgressCircle.component-BbXhAaqf.js";import"./useLabel-CTphHQ-t.js";import"./useLabels-6dTMP4oW.js";import"./useNumberFormatter-D5qg7lg6.js";import"./context-BQ3_Es2z.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./useDescription-DnVXAhCi.js";import"./useLocalizedStringFormatter-DBaQHtvd.js";import"./useHover-D34ofACQ.js";import"./VisuallyHidden-CFly2HD4.js";import"./FocusScope-BnAoeAyt.js";const ur={title:"Buttons/FileTrigger",component:u,parameters:{layout:"centered"},argTypes:{children:{control:!1}}},r={args:{onSelect:b(),children:e.jsx(x,{children:"Upload File"})}},n={args:{...r.args,allowsMultiple:!0}},o={render:f=>e.jsx(F,{onDrop:t=>{const h=t.items.filter(D=>D.kind==="file");console.log(h)},children:({isDropTarget:t})=>e.jsx("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center",border:t?"2px dashed black":"2px dashed transparent",backgroundColor:t?"rgba(0,0,0,0.1)":"transparent",padding:"1rem",borderRadius:"8px",textAlign:"center"},children:e.jsx(u,{...f})})}),args:{...r.args,children:e.jsx(x,{children:"Drop Files Here"})},parameters:{docs:{source:{code:`
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
`}}}};var i,s,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onSelect: fn(),
    children: <Button>Upload File</Button>
  }
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var a,l,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    allowsMultiple: true
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,c,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const xr=["Primary","AllowMultipleFiles","WithDragAndDrop"];export{n as AllowMultipleFiles,r as Primary,o as WithDragAndDrop,xr as __namedExportsOrder,ur as default};
