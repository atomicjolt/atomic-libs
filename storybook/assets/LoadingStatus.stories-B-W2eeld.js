import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as O}from"./cssprops-DECR0Nbg.js";import{T as D}from"./ThreeDotLoader.component-X-MowdSH.js";import{E as W}from"./DismissableBanner.component-hE1ug-cH.js";import{S as R}from"./SpinnerLoader.component-BakStGbE.js";import{T as c}from"./Text.component-CPzUByWa.js";const A=e=>{const{error:d}=e;return a.jsx(W,{children:d})};function m(e){const{isLoading:d=!1,renderLoading:u=D,loadingMessage:P=null,loadingPlacement:q="center",loadingOrientation:B,error:h=null,renderError:g=A,children:l=null,data:p,fallback:V}=e;if(h)return typeof g=="function"?a.jsx(g,{error:h}):g;if(d)return typeof u=="function"?a.jsx(u,{isLoading:d,message:P,placement:q,orientation:B}):u;if(p!==void 0){if(typeof l!="function")throw new Error("LoadingStatus was provided a data prop but children is not a function.");return p===null?V:l(p)}if(typeof l=="function")throw new Error("LoadingStatus was provided a children function but no data was present.");return l}try{m.displayName="LoadingStatus",m.__docgenInfo={description:"Component to render the status of a loading resource.\n- When `isLoading` is true, a loading animation is displayed.\n- When `error` is present, an error banner is displayed.\n- Otherwise, the `children` are rendered",displayName:"LoadingStatus",props:{data:{defaultValue:null,description:"The data to be rendered by the component. When provided and `isLoading` is false,\nthe component will render the `children`. If `data` is null, the `fallback` will\nbe rendered instead.",name:"data",required:!1,type:{name:"T"}},fallback:{defaultValue:null,description:"Fallback if data is null",name:"fallback",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:null,description:"Loading status, when true, a loading state will be rendered",name:"isLoading",required:!1,type:{name:"boolean"}},loadingMessage:{defaultValue:null,description:"Optional message to display beneath the loading animation",name:"loadingMessage",required:!1,type:{name:"ReactNode"}},loadingPlacement:{defaultValue:null,description:"Placement of the loader",name:"loadingPlacement",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"block"'},{value:'"inline"'},{value:'"absolute center"'}]}},loadingOrientation:{defaultValue:null,description:"Direction of the loader and message placement",name:"loadingOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderLoading:{defaultValue:null,description:"Customize what is rendered when in a loading state",name:"renderLoading",required:!1,type:{name:"ReactNode | ComponentType<LoaderProps>"}},error:{defaultValue:null,description:"An error. When present, an error state will be rendered",name:"error",required:!1,type:{name:"ReactNode"}},renderError:{defaultValue:null,description:"Customize what is rendered when in an error state",name:"renderError",required:!1,type:{name:"ReactNode | ComponentType<ErrorStateProps>"}}}}}catch{}const F={title:"Feedback/LoadingStatus",component:m,tags:["!autodocs"],parameters:{cssprops:O("Loader")},argTypes:{loadingMessage:{type:"string"},error:{type:"string"}}},r={args:{isLoading:!0,loadingMessage:"Loading...",error:"",children:"This is the content"}},n={args:{isLoading:!1,loadingMessage:"",error:"An error occurred",children:"This is the content"}},t={args:{isLoading:!0,loadingMessage:"Loading...",error:"",children:"This is the content",renderLoading:a.jsx(R,{})}},o={args:{isLoading:!1,loadingMessage:"",error:"An error occurred",children:"This is the content",renderError:a.jsx(c,{$size:"4",$color:"error-clr",$weight:"bold",children:"Error!"})}},s={args:{children:e=>a.jsx(c,{$size:"4",children:e}),data:"This is the data!"},parameters:{docs:{source:{code:`
<LoadingStatus data="This is the data!">
  {(data) => <Text $size="4">{data}</Text>}
</LoadingStatus>
`}}}},i={args:{data:null,children:e=>a.jsx(c,{$size:"4",children:e}),fallback:a.jsx(c,{$size:"4",$color:"error-clr",children:"No data available"})},parameters:{docs:{source:{code:`
<LoadingStatus data={null} fallback={<Banner variant="warning">No data available</Banner>}>
  {(data) => <Banner variant="info">{data}</Banner>}
</LoadingStatus>
        `}}}};var f,L,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content"
  }
}`,...(T=(L=r.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var b,y,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    loadingMessage: "",
    error: "An error occurred",
    children: "This is the content"
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,v,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content",
    renderLoading: <SpinnerLoader />
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var E,z,$;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    loadingMessage: "",
    error: "An error occurred",
    children: "This is the content",
    renderError: <Text $size="4" $color="error-clr" $weight="bold">
        Error!
      </Text>
  }
}`,...($=(z=o.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var N,_,k;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var M,j,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const I=["Primary","Error","CustomizeLoadingState","CustomizeErrorState","WithData","NoDataFallback"],X=Object.freeze(Object.defineProperty({__proto__:null,CustomizeErrorState:o,CustomizeLoadingState:t,Error:n,NoDataFallback:i,Primary:r,WithData:s,__namedExportsOrder:I,default:F},Symbol.toStringTag,{value:"Module"}));export{X as L,i as N,s as W};
