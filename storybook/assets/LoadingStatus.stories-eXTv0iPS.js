import{j as a,q as R}from"./iframe-CGPW5dgX.js";import{d as W}from"./helpers-tUmR_xN7.js";import{E as A}from"./DismissableBanner.component-DAPhub_k.js";import{u as B}from"./useTranslations-BQv9_06X.js";import{T as I}from"./ThreeDotLoader.component-CtY68PDd.js";import{u as G}from"./Loading.context-EUscm4UA.js";import{T as l}from"./Text.component-Br2J6Hgv.js";import{S as H}from"./SpinnerLoader.component-BfUo5Fvz.js";const J=e=>{const{error:t}=e;return a.jsx(A,{children:t})};function g(e){const{renderLoading:t=I,loadingMessage:q=null,loadingPlacement:C="center",loadingOrientation:V,error:p=null,renderError:m=J,children:c=null,data:u,fallback:O}=e,{isLoading:L=!1,loadingLabel:D}=G(e),M=B();if(p)return typeof m=="function"?a.jsx(m,{error:p}):m;if(L)return typeof t=="function"?a.jsx(t,{isLoading:L,"aria-label":D??M("loading"),message:q,placement:C,orientation:V}):t;if(u!==void 0){if(typeof c!="function")throw new Error("LoadingStatus was provided a data prop but children is not a function.");return u===null?O:c(u)}if(typeof c=="function")throw new Error("LoadingStatus was provided a children function but no data was present.");return c}try{g.displayName="LoadingStatus",g.__docgenInfo={description:"Component to render the status of a loading resource.\n- When `isLoading` is true, a loading animation is displayed.\n- When `error` is present, an error banner is displayed.\n- Otherwise, the `children` are rendered",displayName:"LoadingStatus",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",methods:[],props:{children:{defaultValue:{value:"null"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"Content rendered when not loading and there's no error.\nMust be a function `(data) => node` when `data` is provided.",name:"children",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{default:"null"},type:{name:"ReactNode | ((data: T) => ReactNode)"}},data:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"The data to be rendered by the component. When provided and `isLoading` is false,\nthe component will render the `children`. If `data` is null, the `fallback` will\nbe rendered instead.",name:"data",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{},type:{name:"T | null"}},fallback:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"Fallback if data is null",name:"fallback",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{},type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"the ambient `Loading` state, or `false` if there is none"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"Loading status, when true, a loading state will be rendered.\nWhen omitted, falls back to the loading state of the nearest `<Loading>` ancestor.",name:"isLoading",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{default:"the ambient `Loading` state, or `false` if there is none"},type:{name:"boolean"}},loadingLabel:{defaultValue:{value:'the ambient `Loading` label, or "Loading" (translated)'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"Label announced to screen readers while loading.\nOnly used when `renderLoading` is a component, not an element.",name:"loadingLabel",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{default:'the ambient `Loading` label, or "Loading" (translated)'},type:{name:"string"}},loadingMessage:{defaultValue:{value:"null"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"Optional message to display beneath the loading animation.\nOnly used when `renderLoading` is a component, not an element.",name:"loadingMessage",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{default:"null"},type:{name:"ReactNode"}},loadingPlacement:{defaultValue:{value:'"center"'},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"Placement of the loader",name:"loadingPlacement",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{default:'"center"'},type:{name:"enum",raw:"LoaderPlacement",value:[{value:'"center"'},{value:'"inline"'},{value:'"block"'},{value:'"absolute center"'}]}},loadingOrientation:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"Direction of the loader and message placement",name:"loadingOrientation",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{},type:{name:"enum",raw:'"horizontal" | "vertical"',value:[{value:'"horizontal"'},{value:'"vertical"'}]}},renderLoading:{defaultValue:{value:"ThreeDotLoader"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"Customize what is rendered when in a loading state",name:"renderLoading",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{default:"ThreeDotLoader"},type:{name:"ReactNode | ComponentType<LoaderProps>"}},error:{defaultValue:{value:"null"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"An error. When present, an error state will be rendered",name:"error",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{default:"null"},type:{name:"ReactNode"}},renderError:{defaultValue:{value:"an `ErrorBanner` containing the `error`"},declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"}],description:"Customize what is rendered when in an error state",name:"renderError",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/LoadingStatus/LoadingStatus.component.tsx",name:"LoadingStatusProps"},required:!1,tags:{default:"an `ErrorBanner` containing the `error`"},type:{name:"ReactNode | ComponentType<ErrorStateProps>"}}},tags:{}}}catch{}const K={title:"Feedback/LoadingStatus",component:g,tags:["!autodocs"],parameters:{cssprops:{loader:R}},argTypes:{...W,loadingMessage:{type:"string"},error:{type:"string"},children:{control:!1},renderLoading:{control:!1},renderError:{control:!1}}},n={args:{isLoading:!0,loadingMessage:"Loading...",children:"This is the content"}},o={args:{error:"An error occurred",children:"This is the content"}},r={args:{isLoading:!0,children:"This is the content",renderLoading:a.jsx(H,{"aria-label":"Loading"})}},s={args:{error:"An error occurred",children:"This is the content",renderError:a.jsx(l,{$size:"4",$color:"error-clr",$weight:"bold",children:"Error!"})}},i={args:{children:e=>a.jsx(l,{$size:"4",children:e}),data:"This is the data!"},parameters:{docs:{source:{code:`
<LoadingStatus data="This is the data!">
  {(data) => <Text $size="4">{data}</Text>}
</LoadingStatus>
`}}}},d={args:{data:null,children:e=>a.jsx(l,{$size:"4",children:e}),fallback:a.jsx(l,{$size:"4",$color:"error-clr",children:"No data available"})},parameters:{docs:{source:{code:`
<LoadingStatus
  data={null}
  fallback={
    <Text $size="4" $color="error-clr">
      No data available
    </Text>
  }
>
  {(data) => <Text $size="4">{data}</Text>}
</LoadingStatus>
`}}}},Q=["Primary","Error","CustomizeLoadingState","CustomizeErrorState","WithData","NoDataFallback"];var f,h,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    children: "This is the content"
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,k,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    error: "An error occurred",
    children: "This is the content"
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var T,N,y;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: "This is the content",
    renderLoading: <SpinnerLoader aria-label="Loading" />
  }
}`,...(y=(N=r.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var P,v,w;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    error: "An error occurred",
    children: "This is the content",
    renderError: <Text $size="4" $color="error-clr" $weight="bold">
        Error!
      </Text>
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var F,E,z;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(E=i.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var $,_,j;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
<LoadingStatus
  data={null}
  fallback={
    <Text $size="4" $color="error-clr">
      No data available
    </Text>
  }
>
  {(data) => <Text $size="4">{data}</Text>}
</LoadingStatus>
\`
      }
    }
  }
}`,...(j=(_=d.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const oe=Object.freeze(Object.defineProperty({__proto__:null,CustomizeErrorState:s,CustomizeLoadingState:r,Error:o,NoDataFallback:d,Primary:n,WithData:i,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{r as C,o as E,oe as L,d as N,i as W,s as a};
