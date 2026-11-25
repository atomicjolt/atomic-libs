import{j as t}from"./iframe-CGPW5dgX.js";import{D as P}from"./DropZone.component-C_mdnCKH.js";import{F as O}from"./FileTrigger.component-BT0NXOEu.js";import{B as m}from"./Button.component-Bd4z0Gnh.js";import"./preload-helper-Dp1pzeXC.js";import"./useFocusable-DT9_LXVA.js";import"./useObjectRef-CjsC0YUg.js";import"./SSRProvider-Dwr0Ku02.js";import"./useDescription-DvoUWjyy.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./context-CLSG1ylv.js";import"./useButton-CjI92Tj6.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BioWcz2v.js";import"./useHover-9VTiwztB.js";import"./VisuallyHidden-BPd2hceK.js";import"./useFocusWithin-BzfIRRcZ.js";import"./useFocusRing-Dbcio0BW.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./useForwardedRef-DFbI-FzN.js";import"./PressResponder-xHF_wXhX.js";import"./index-C0dagnaq.js";import"./BaseButton-B8bVR-o6.js";import"./mixins-BJuiWlrm.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";const{fn:U}=__STORYBOOK_MODULE_TEST__,{action:b}=__STORYBOOK_MODULE_ACTIONS__,Te={title:"Buttons/FileTrigger",component:O,parameters:{layout:"centered"},argTypes:{children:{control:!1}}},e={args:{onSelect:U(),children:t.jsx(m,{children:"Upload File"})}},s={args:{...e.args,allowsMultiple:!0}},w=r=>({width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center",border:r?"2px dashed black":"2px dashed transparent",backgroundColor:r?"rgba(0,0,0,0.1)":"transparent",padding:"1rem",borderRadius:"8px",textAlign:"center"}),Z=b("handleFiles"),a={render:r=>{const c=o=>Z(o);return t.jsx(P,{onDrop:async o=>{const n=o.items.filter(i=>i.kind==="file");c(await Promise.all(n.map(i=>i.getFile())))},children:({isDropTarget:o})=>t.jsx("div",{style:w(o),children:t.jsx(O,{...r,onSelect:n=>{var i;(i=r.onSelect)==null||i.call(r,n),c(Array.from(n))}})})})},args:{...e.args,children:t.jsx(m,{children:"Drop Files Here"})},parameters:{docs:{source:{code:`
const handleFiles = (files: File[]) => {
  // Upload or store the files
};

<DropZone
  onDrop={async (e) => {
    const items = e.items.filter(
      (item) => item.kind === "file"
    ) as FileDropItem[];
    handleFiles(await Promise.all(items.map((item) => item.getFile())));
  }}
>
  {({ isDropTarget }) => (
    <div style={{ border: isDropTarget ? "2px dashed black" : "2px dashed transparent" }}>
      <FileTrigger onSelect={(files) => handleFiles(Array.from(files))}>
        <Button>Drop Files Here</Button>
      </FileTrigger>
    </div>
  )}
</DropZone>
`}}}},l={args:{...e.args,acceptedFileTypes:["image/png","image/jpeg"],children:t.jsx(m,{children:"Upload Image"})}},p={args:{...e.args,accept:"directories",children:t.jsx(m,{children:"Upload Folder"})}},xe=["Primary","AllowMultipleFiles","WithDragAndDrop","AcceptedFileTypes","Directories"];var d,g,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    onSelect: fn(),
    children: <Button>Upload File</Button>
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var F,h,f;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    allowsMultiple: true
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var D,y,T;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    // Dropped and selected files go through the same handler.
    const handleFiles = (files: File[]) => logFiles(files);
    return <DropZone onDrop={async e => {
      const items = e.items.filter(item => item.kind === "file") as FileDropItem[];
      handleFiles(await Promise.all(items.map(item => item.getFile())));
    }}>
        {({
        isDropTarget
      }) => <div style={dropZoneStyle(isDropTarget)}>
            <FileTrigger {...args} onSelect={files => {
          args.onSelect?.(files);
          handleFiles(Array.from(files));
        }} />
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
const handleFiles = (files: File[]) => {
  // Upload or store the files
};

<DropZone
  onDrop={async (e) => {
    const items = e.items.filter(
      (item) => item.kind === "file"
    ) as FileDropItem[];
    handleFiles(await Promise.all(items.map((item) => item.getFile())));
  }}
>
  {({ isDropTarget }) => (
    <div style={{ border: isDropTarget ? "2px dashed black" : "2px dashed transparent" }}>
      <FileTrigger onSelect={(files) => handleFiles(Array.from(files))}>
        <Button>Drop Files Here</Button>
      </FileTrigger>
    </div>
  )}
</DropZone>
\`
      }
    }
  }
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,S,B;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    acceptedFileTypes: ["image/png", "image/jpeg"],
    children: <Button>Upload Image</Button>
  }
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var _,j,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    accept: "directories",
    children: <Button>Upload Folder</Button>
  }
}`,...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};export{l as AcceptedFileTypes,s as AllowMultipleFiles,p as Directories,e as Primary,a as WithDragAndDrop,xe as __namedExportsOrder,Te as default};
