import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as O}from"./cssprops-DECR0Nbg.js";import{T as D}from"./ThreeDotLoader.component-Dx1SOPmk.js";import{u as W}from"./Loading.context-C7II2W1n.js";import{E as R}from"./DismissableBanner.component-gRNmLZZ1.js";import{T as c}from"./Text.component-BFPr0tnf.js";import{S as A}from"./SpinnerLoader.component-DSWkxcW2.js";const F=e=>{const{error:r}=e;return a.jsx(R,{children:r})};function p(e){const{renderLoading:r=D,loadingMessage:P=null,loadingPlacement:q="center",loadingOrientation:B,error:m=null,renderError:u=F,children:l=null,data:g,fallback:V}=e,{isLoading:h=!1}=W(e);if(m)return typeof u=="function"?a.jsx(u,{error:m}):u;if(h)return typeof r=="function"?a.jsx(r,{isLoading:h,message:P,placement:q,orientation:B}):r;if(g!==void 0){if(typeof l!="function")throw new Error("LoadingStatus was provided a data prop but children is not a function.");return g===null?V:l(g)}if(typeof l=="function")throw new Error("LoadingStatus was provided a children function but no data was present.");return l}try{p.displayName="LoadingStatus",p.__docgenInfo={description:"Component to render the status of a loading resource.\n- When `isLoading` is true, a loading animation is displayed.\n- When `error` is present, an error banner is displayed.\n- Otherwise, the `children` are rendered",displayName:"LoadingStatus",props:{data:{defaultValue:null,description:"The data to be rendered by the component. When provided and `isLoading` is false,\nthe component will render the `children`. If `data` is null, the `fallback` will\nbe rendered instead.",name:"data",required:!1,type:{name:"T | null | undefined"}},fallback:{defaultValue:null,description:"Fallback if data is null",name:"fallback",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:null,description:"Loading status, when true, a loading state will be rendered",name:"isLoading",required:!1,type:{name:"boolean | undefined"}},loadingMessage:{defaultValue:null,description:"Optional message to display beneath the loading animation",name:"loadingMessage",required:!1,type:{name:"ReactNode"}},loadingPlacement:{defaultValue:null,description:"Placement of the loader",name:"loadingPlacement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"block"'},{value:'"inline"'},{value:'"center"'},{value:'"absolute center"'}]}},loadingOrientation:{defaultValue:null,description:"Direction of the loader and message placement",name:"loadingOrientation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},renderLoading:{defaultValue:null,description:"Customize what is rendered when in a loading state",name:"renderLoading",required:!1,type:{name:"ReactNode | ComponentType<LoaderProps>"}},error:{defaultValue:null,description:"An error. When present, an error state will be rendered",name:"error",required:!1,type:{name:"ReactNode"}},renderError:{defaultValue:null,description:"Customize what is rendered when in an error state",name:"renderError",required:!1,type:{name:"ReactNode | ComponentType<ErrorStateProps>"}}}}}catch{}const I={title:"Feedback/LoadingStatus",component:p,tags:["!autodocs"],parameters:{cssprops:O("Loader")},argTypes:{loadingMessage:{type:"string"},error:{type:"string"}}},n={args:{isLoading:!0,loadingMessage:"Loading...",error:"",children:"This is the content"}},t={args:{isLoading:!1,loadingMessage:"",error:"An error occurred",children:"This is the content"}},o={args:{isLoading:!0,loadingMessage:"Loading...",error:"",children:"This is the content",renderLoading:a.jsx(A,{})}},s={args:{isLoading:!1,loadingMessage:"",error:"An error occurred",children:"This is the content",renderError:a.jsx(c,{$size:"4",$color:"error-clr",$weight:"bold",children:"Error!"})}},i={args:{children:e=>a.jsx(c,{$size:"4",children:e}),data:"This is the data!"},parameters:{docs:{source:{code:`
<LoadingStatus data="This is the data!">
  {(data) => <Text $size="4">{data}</Text>}
</LoadingStatus>
`}}}},d={args:{data:null,children:e=>a.jsx(c,{$size:"4",children:e}),fallback:a.jsx(c,{$size:"4",$color:"error-clr",children:"No data available"})},parameters:{docs:{source:{code:`
<LoadingStatus data={null} fallback={<Banner variant="warning">No data available</Banner>}>
  {(data) => <Banner variant="info">{data}</Banner>}
</LoadingStatus>
        `}}}};var f,L,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content"
  }
}`,...(T=(L=n.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var b,y,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    loadingMessage: "",
    error: "An error occurred",
    children: "This is the content"
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,v,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content",
    renderLoading: <SpinnerLoader />
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var E,z,$;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    loadingMessage: "",
    error: "An error occurred",
    children: "This is the content",
    renderError: <Text $size="4" $color="error-clr" $weight="bold">
        Error!
      </Text>
  }
}`,...($=(z=s.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var N,_,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: (data: any) => <Text $size="4">{data}</Text>,
    data: "This is the data!"
  },
  parameters: {
    docs: {
      source: {
        code: \`
<LoadingStatus data="This is the data!">
  {(data) => <Text $size="4">{data}</Text>}
</LoadingStatus>
\`
      }
    }
  }
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var M,j,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data: null,
    children: (data: any) => <Text $size="4">{data}</Text>,
    fallback: <Text $size="4" $color="error-clr">
        No data available
      </Text>
  },
  parameters: {
    docs: {
      source: {
        code: \`
<LoadingStatus data={null} fallback={<Banner variant="warning">No data available</Banner>}>
  {(data) => <Banner variant="info">{data}</Banner>}
</LoadingStatus>
        \`
      }
    }
  }
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const G=["Primary","Error","CustomizeLoadingState","CustomizeErrorState","WithData","NoDataFallback"],Z=Object.freeze(Object.defineProperty({__proto__:null,CustomizeErrorState:s,CustomizeLoadingState:o,Error:t,NoDataFallback:d,Primary:n,WithData:i,__namedExportsOrder:G,default:I},Symbol.toStringTag,{value:"Module"}));export{Z as L,d as N,i as W};
