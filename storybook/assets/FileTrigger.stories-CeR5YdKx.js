import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{fn as b}from"./index-D1pa-M5k.js";import{D as F}from"./index-DpWTEOnt.js";import{F as u}from"./FileTrigger.component-YzN98R2f.js";import{B as x}from"./Button.component-BcdaaP2f.js";import"./index-DmM0KDA7.js";import"./useFocusable-B7cTVP20.js";import"./useObjectRef-BO7mrmvR.js";import"./SSRProvider-nIDwi1ZO.js";import"./useDescription-CP-qk7_s.js";import"./useLocalizedStringFormatter-BJB32GAh.js";import"./context-BF7eBGFA.js";import"./useButton-CBzhh6F5.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Cng8MYxN.js";import"./index-D_Kw7eWP.js";import"./index-nLeaPAJ8.js";import"./useHover-WxTHsieF.js";import"./VisuallyHidden-Yvqu08fX.js";import"./useFocusWithin-C-e8UI97.js";import"./useFocusRing-BmyBc2tX.js";import"./useRenderProps-BzxgHqRb.js";import"./index-CrEZfznw.js";import"./styled-components.browser.esm-S-CusIP4.js";import"./useForwardedRef-BWfLegUW.js";import"./PressResponder-CHEeukYG.js";import"./useLink-BTwsTyp1.js";import"./index-CqJC2f1M.js";import"./mixins-BOHXBJW9.js";import"./SpinnerLoader.component-DJXvo7dP.js";import"./Loader.component-Dt3yODGv.js";import"./Flex.component-LqFgqvCS.js";import"./layout-C5ppTKTq.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-CRE6wLUH.js";import"./Spinner.component-C1TzuC8j.js";import"./ProgressCircle.component-BlbtEDe_.js";import"./useLabel-B1sX0IQZ.js";import"./useLabels-D0NjiLiF.js";import"./useNumberFormatter-CH8tnwcW.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";const dr={title:"Buttons/FileTrigger",component:u,parameters:{layout:"centered"},argTypes:{children:{control:!1}}},r={args:{onSelect:b(),children:e.jsx(x,{children:"Upload File"})}},n={args:{...r.args,allowsMultiple:!0}},o={render:f=>e.jsx(F,{onDrop:t=>{const h=t.items.filter(D=>D.kind==="file");console.log(h)},children:({isDropTarget:t})=>e.jsx("div",{style:{width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center",border:t?"2px dashed black":"2px dashed transparent",backgroundColor:t?"rgba(0,0,0,0.1)":"transparent",padding:"1rem",borderRadius:"8px",textAlign:"center"},children:e.jsx(u,{...f})})}),args:{...r.args,children:e.jsx(x,{children:"Drop Files Here"})},parameters:{docs:{source:{code:`
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
