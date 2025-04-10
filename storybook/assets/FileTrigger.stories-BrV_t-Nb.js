import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{fn as b}from"./index-BgJgh-x_.js";import{D as F}from"./index-C9m8dSmq.js";import{F as u}from"./FileTrigger.component-BadQm_BE.js";import{B as x}from"./Button.component-B1VuTqO-.js";import"./index-BCtMShv3.js";import"./useFocusable-DacP9xvE.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./useDescription-CqPnuqnT.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./context-z6pb9OkM.js";import"./useButton-nVeIkIqk.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B9aiz4Kw.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useHover-Cc-utFbH.js";import"./VisuallyHidden-XQ8XJ7MR.js";import"./useFocusWithin-BshFo8_g.js";import"./useFocusRing-CLjBjOxD.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./useForwardedRef-Tweo1nQG.js";import"./PressResponder-DMBUHunT.js";import"./useLink-FIfyncSu.js";import"./index-CsiUWFDz.js";import"./mixins-XviowZ_6.js";import"./SpinnerLoader.component-m7qmEdMF.js";import"./Loader.component-CAkSYpHw.js";import"./index-CgV6Zd7Q.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-ByE1AGU6.js";import"./Spinner.component-Bslo7_jG.js";import"./ProgressCircle.component-OpnlU6y-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";const dr={title:"Buttons/FileTrigger",component:u,parameters:{layout:"centered"},argTypes:{children:{control:!1}}},r={args:{onSelect:b(),children:e.jsx(x,{children:"Upload File"})}},n={args:{...r.args,allowsMultiple:!0}},o={render:f=>e.jsx(F,{onDrop:t=>{const h=t.items.filter(D=>D.kind==="file");console.log(h)},children:({isDropTarget:t})=>e.jsx("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center",border:t?"2px dashed black":"2px dashed transparent",backgroundColor:t?"rgba(0,0,0,0.1)":"transparent",padding:"1rem",borderRadius:"8px",textAlign:"center"},children:e.jsx(u,{...f})})}),args:{...r.args,children:e.jsx(x,{children:"Drop Files Here"})},parameters:{docs:{source:{code:`
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
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var a,l,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    allowsMultiple: true
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,c,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const mr=["Primary","AllowMultipleFiles","WithDragAndDrop"];export{n as AllowMultipleFiles,r as Primary,o as WithDragAndDrop,mr as __namedExportsOrder,dr as default};
