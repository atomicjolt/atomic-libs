import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{fn as b}from"./index-BgLytPr-.js";import{F as u}from"./FileTrigger.component-CjufrinE.js";import{B as x}from"./Button.component-DZz4XKQI.js";import{D as F}from"./DropZone.component-FV25-6B7.js";import"./useForwardedRef-DuXBQIpF.js";import"./useObjectRef-B4hnndUj.js";import"./index-BCtMShv3.js";import"./SSRProvider-DyiXDq2k.js";import"./PressResponder-BmlOUkeL.js";import"./usePress-BJ4Xpz5E.js";import"./useFocusable-B7HbK8LX.js";import"./index-q6RvvsFA.js";import"./index-D-fs5e6L.js";import"./index-C_lK3xe_.js";import"./BaseButton-2ZuT2Jet.js";import"./styled-components.browser.esm-DC3GK9Rn.js";import"./mixins-CcgEHb9c.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./useFocusRing-zxvArQTZ.js";import"./useFocusWithin-dfJl9rAf.js";import"./useButton-B6TSBwA2.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-C7Cuty20.js";import"./SpinnerLoader.component-BajFQvUK.js";import"./Loader.component-CdKgI0wc.js";import"./index-BKev5x84.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-BsvhAJlZ.js";import"./Spinner.component-TZts3DK4.js";import"./ProgressCircle.component-C9C-EnQN.js";import"./number-nHrFdSb-.js";import"./useLabel-Bew-gTxt.js";import"./useLabels-BQTM_NWA.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-e0zTg6D5.js";import"./useDescription-BfD2gYva.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./useHover-Cvy3Ip4i.js";import"./VisuallyHidden-DMkWAsdD.js";const gr={title:"Buttons/FileTrigger",component:u,parameters:{layout:"centered"},argTypes:{children:{control:!1}}},r={args:{onSelect:b(),children:e.jsx(x,{children:"Upload File"})}},n={args:{...r.args,allowsMultiple:!0}},o={render:f=>e.jsx(F,{onDrop:t=>{const h=t.items.filter(D=>D.kind==="file");console.log(h)},children:({isDropTarget:t})=>e.jsx("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center",border:t?"2px dashed black":"2px dashed transparent",backgroundColor:t?"rgba(0,0,0,0.1)":"transparent",padding:"1rem",borderRadius:"8px",textAlign:"center"},children:e.jsx(u,{...f})})}),args:{...r.args,children:e.jsx(x,{children:"Drop Files Here"})},parameters:{docs:{source:{code:`
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
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const ur=["Primary","AllowMultipleFiles","WithDragAndDrop"];export{n as AllowMultipleFiles,r as Primary,o as WithDragAndDrop,ur as __namedExportsOrder,gr as default};
