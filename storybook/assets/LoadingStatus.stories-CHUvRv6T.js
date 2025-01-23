import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{g as D}from"./cssprops-BTVAmD30.js";import{T as R}from"./ThreeDotLoader.component-BG9MPsIk.js";import{E as W}from"./DismissableBanner.component-DS6jT5r8.js";import{S as A}from"./SpinnerLoader.component-CZS0l4HJ.js";import{B as p}from"./Banner.component-uzHU7axj.js";const F=e=>{const{error:d}=e;return a.jsx(W,{children:d})};function m(e){const{isLoading:d=!1,renderLoading:c=R,loadingMessage:q=null,loadingPlacement:V="center",loadingOrientation:z,error:f=null,renderError:u=F,children:l=null,data:g,fallback:O}=e;if(f)return typeof u=="function"?a.jsx(u,{error:f}):u;if(d)return typeof c=="function"?a.jsx(c,{isLoading:d,message:q,placement:V,orientation:z}):c;if(g!==void 0){if(typeof l!="function")throw new Error("LoadingStatus was provided a data prop but children is not a function.");return g===null?O:l(g)}if(typeof l=="function")throw new Error("LoadingStatus was provided a children function but no data was present.");return l}try{m.displayName="LoadingStatus",m.__docgenInfo={description:"Component to render the status of a loading resource.\n- When `isLoading` is true, a loading animation is displayed.\n- When `error` is present, an error banner is displayed.\n- Otherwise, the `children` are rendered",displayName:"LoadingStatus",props:{data:{defaultValue:null,description:"The data to render when not in a loading state",name:"data",required:!1,type:{name:"T"}},fallback:{defaultValue:null,description:"Fallback if data is null",name:"fallback",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:null,description:"Loading status, when true, a loading animation is displayed",name:"isLoading",required:!1,type:{name:"boolean"}},loadingMessage:{defaultValue:null,description:"Optional message to display beneath the loading animation",name:"loadingMessage",required:!1,type:{name:"ReactNode"}},loadingPlacement:{defaultValue:null,description:"Placement of the loader",name:"loadingPlacement",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"center"'},{value:'"inline"'},{value:'"absolute center"'}]}},loadingOrientation:{defaultValue:null,description:"Direction of the loader and message placement",name:"loadingOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderLoading:{defaultValue:null,description:"Customize what is rendered when in a loading state",name:"renderLoading",required:!1,type:{name:"ReactNode | ComponentType<LoaderProps>"}},error:{defaultValue:null,description:"An error. When present, an error banner will be displayed",name:"error",required:!1,type:{name:"ReactNode"}},renderError:{defaultValue:null,description:"Customize what is rendered when in an error state",name:"renderError",required:!1,type:{name:"ReactNode | ComponentType<ErrorStateProps>"}}}}}catch{}const I={title:"Loaders/LoadingStatus",component:m,tags:["!autodocs"],parameters:{cssprops:D("Loader")},argTypes:{loadingMessage:{type:"string"},error:{type:"string"}}},r={args:{isLoading:!0,loadingMessage:"Loading...",error:"",children:"This is the content"}},n={args:{isLoading:!1,loadingMessage:"",error:"An error occurred",children:"This is the content"}},t={args:{isLoading:!0,loadingMessage:"Loading...",error:"",children:"This is the content",renderLoading:a.jsx(A,{})}},o={args:{isLoading:!1,loadingMessage:"",error:"An error occurred",children:"This is the content",renderError:a.jsx("div",{children:"Error!"})}},i={args:{children:e=>a.jsx(p,{variant:"info",children:e}),data:"This is the data!"},parameters:{docs:{source:{code:`
<LoadingStatus data="This is the data!">
  {(data) => <Banner variant="info">{data}</Banner>}
</LoadingStatus>
`}}}},s={args:{data:null,children:e=>a.jsx(p,{variant:"info",children:e}),fallback:a.jsx(p,{variant:"warning",children:"No data available"})},parameters:{docs:{source:{code:`
<LoadingStatus data={null} fallback={<Banner variant="warning">No data available</Banner>}>
  {(data) => <Banner variant="info">{data}</Banner>}
</LoadingStatus>
        `}}}};var h,L,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content"
  }
}`,...(y=(L=r.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var v,S,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    loadingMessage: "",
    error: "An error occurred",
    children: "This is the content"
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var B,E,T;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content",
    renderLoading: <SpinnerLoader />
  }
}`,...(T=(E=t.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var w,N,_;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    loadingMessage: "",
    error: "An error occurred",
    children: "This is the content",
    renderError: <div>Error!</div>
  }
}`,...(_=(N=o.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var M,j,x;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: (data: any) => <Banner variant="info">{data}</Banner>,
    data: "This is the data!"
  },
  parameters: {
    docs: {
      source: {
        code: \`
<LoadingStatus data="This is the data!">
  {(data) => <Banner variant="info">{data}</Banner>}
</LoadingStatus>
\`
      }
    }
  }
}`,...(x=(j=i.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var k,C,P;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: null,
    children: (data: any) => <Banner variant="info">{data}</Banner>,
    fallback: <Banner variant="warning">No data available</Banner>
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
}`,...(P=(C=s.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const $=["Primary","Error","CustomizeLoadingState","CustomizeErrorState","WithData","NoDataFallback"],X=Object.freeze(Object.defineProperty({__proto__:null,CustomizeErrorState:o,CustomizeLoadingState:t,Error:n,NoDataFallback:s,Primary:r,WithData:i,__namedExportsOrder:$,default:I},Symbol.toStringTag,{value:"Module"}));export{X as L,s as N,i as W};
