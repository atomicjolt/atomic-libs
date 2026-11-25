import{r as a,j as r}from"./iframe-CGPW5dgX.js";import{E as l}from"./DismissableBanner.component-DAPhub_k.js";import{B as i}from"./Button.component-Bd4z0Gnh.js";import{T as g}from"./Text.component-Br2J6Hgv.js";import"./preload-helper-Dp1pzeXC.js";import"./useRenderProps-B7rIWDyP.js";import"./index-BjoBGrPA.js";import"./useTranslations-BQv9_06X.js";import"./useLocalizedStringFormatter-CLx94-cg.js";import"./context-CLSG1ylv.js";import"./SSRProvider-Dwr0Ku02.js";import"./Banner.component-_HzM6Lm9.js";import"./displayName-CEXLPPBu.js";import"./mixins-BJuiWlrm.js";import"./layout-Dd7m2B0D.js";import"./spacing-Bd-CIscW.js";import"./utils-DqmNl-Il.js";import"./MaterialIcon.component-Dhrh5rCP.js";import"./Icons.styles-tJBW4wd9.js";import"./useObjectRef-CjsC0YUg.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DT9_LXVA.js";import"./IconButton.component-CifirOzj.js";import"./BaseButton-B8bVR-o6.js";import"./index-C0dagnaq.js";import"./useFocusRing-Dbcio0BW.js";import"./useFocusWithin-BzfIRRcZ.js";import"./usePress-BioWcz2v.js";import"./useButton-CjI92Tj6.js";import"./useLink-PwQmwW74.js";import"./Loading.context-EUscm4UA.js";import"./SpinnerLoader.component-BfUo5Fvz.js";import"./Loader.component-oLyQpXum.js";import"./Flex.component-BDldr6hG.js";import"./Checkmark.component-DL9zPInj.js";import"./Spinner.component-CLncQyFJ.js";import"./ProgressCircle.component-Cc0SXoU-.js";import"./useLabel-BytR9cji.js";import"./useLabels-Bveo7T3X.js";import"./useNumberFormatter-CgBbBkmi.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-PU9nFmCW.js";import"./typography-DqSTiArL.js";import"./scale-CqCDTNu0.js";class d extends a.Component{constructor(n){super(n),this.reset=()=>{var e,o;(o=(e=this.props).onReset)==null||o.call(e),this.setState({hasError:!1,error:null})},this.state={hasError:!1,error:null}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,e){var o,t;(t=(o=this.props).onError)==null||t.call(o,n,e)}componentDidUpdate(n){const{resetKeys:e}=this.props,o=n.resetKeys;this.state.hasError&&o!==e&&(e&&o?e.some((c,K)=>o[K]!==c)&&this.reset():e!==o&&this.reset())}render(){if(this.state.hasError&&this.state.error){const{fallback:n}=this.props;return typeof n=="function"?n(this.state.error,this.reset):n}return this.props.children}}try{d.displayName="ErrorBoundary",d.__docgenInfo={description:"Catches errors thrown while rendering its children and shows a\n`fallback` instead. Changing a value in `resetKeys`, or calling the\n`reset` function passed to a function `fallback`, renders the children again.",displayName:"ErrorBoundary",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"}],description:"Content to render. If it throws while rendering, `fallback` is shown instead.",name:"children",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"},required:!0,tags:{},type:{name:"ReactNode"}},fallback:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"}],description:"Fallback UI to display when an error is caught. Can be a ReactNode or a function that receives the error and a reset function.",name:"fallback",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"},required:!0,tags:{},type:{name:"ReactNode | ((error: Error, reset: () => void) => ReactNode)"}},onError:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"}],description:"Callback invoked when an error is caught.",name:"onError",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"},required:!1,tags:{},type:{name:"((error: Error, errorInfo: ErrorInfo) => void)"}},onReset:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"}],description:"Callback invoked when the error boundary is reset.",name:"onReset",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"},required:!1,tags:{},type:{name:"(() => void)"}},resetKeys:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"}],description:"An array of values that, when changed, will reset the error boundary.",name:"resetKeys",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Feedback/ErrorBoundary/ErrorBoundary.component.tsx",name:"ErrorBoundaryProps"},required:!1,tags:{},type:{name:"any[]"}}},tags:{}}}catch{}const xr={title:"Feedback/ErrorBoundary",component:d,parameters:{layout:"centered"},argTypes:{children:{control:!1,description:"Content to render. If it throws while rendering, `fallback` is shown instead.",type:{name:"other",value:"ReactNode",required:!0},table:{type:{summary:"ReactNode"}}},fallback:{control:"text",description:"The fallback UI to display when an error is caught. This can be a React node or a function that receives the error and a reset function as arguments."},resetKeys:{control:!1,description:"An array of values that, when changed, will reset the error boundary's state."},onError:{action:"error captured",description:"Callback function that is called when an error is caught. It receives the error and additional info as arguments."},onReset:{action:"reset triggered",description:"Callback function that is called when the error boundary is reset."}}},y=({shouldThrow:s})=>{if(s)throw new Error("Something went wrong in the component!");return r.jsx(g,{as:"div",$size:"3",$mt:"4",children:"Everything is working fine!"})},I=()=>{const[s,n]=a.useState(0);if(s>3)throw new Error("Count cannot be greater than 3!");return r.jsxs("div",{children:[r.jsxs("p",{children:["Count: ",s]}),r.jsx(i,{onPress:()=>n(s+1),children:"Increment"})]})},u={render:function(n){const[e,o]=a.useState(!1);return r.jsxs("div",{children:[r.jsx(i,{onPress:()=>o(!e),variant:e?"success":"error",children:e?"Fix Component":"Break Component"}),r.jsx(d,{resetKeys:[e],onError:n.onError,onReset:n.onReset,fallback:n.fallback??r.jsx(l,{children:"Oops! Something went wrong. Please try refreshing the page."}),children:r.jsx(y,{shouldThrow:e})})]})},parameters:{docs:{source:{code:`
<ErrorBoundary
  resetKeys={[shouldThrow]}
  fallback={
    <ErrorBanner>
      Oops! Something went wrong. Please try refreshing the page.
    </ErrorBanner>
  }
>
  <BuggyComponent shouldThrow={shouldThrow} />
</ErrorBoundary>
`}}}},h={argTypes:{fallback:{control:!1}},render:function(n){const[e,o]=a.useState(!1);return r.jsxs("div",{children:[r.jsx(i,{onPress:()=>o(!e),variant:e?"success":"error",children:e?"Fix Component":"Break Component"}),r.jsx(d,{fallback:(t,c)=>r.jsxs(l,{children:[r.jsx("strong",{children:"Error:"})," ",t.message,r.jsx("br",{}),r.jsx(i,{onPress:()=>{o(!1),c()},variant:"inverted",style:{marginTop:"8px"},children:"Try Again"})]}),resetKeys:[e],onError:n.onError,onReset:n.onReset,children:r.jsx(y,{shouldThrow:e})})]})},parameters:{docs:{source:{code:`
<ErrorBoundary
  resetKeys={[shouldThrow]}
  onError={(error, errorInfo) => logError(error, errorInfo)}
  fallback={(error, reset) => (
    <ErrorBanner>
      <strong>Error:</strong> {error.message}
      <Button
        variant="inverted"
        onPress={() => {
          setShouldThrow(false);
          reset();
        }}
      >
        Try Again
      </Button>
    </ErrorBanner>
  )}
>
  <BuggyComponent shouldThrow={shouldThrow} />
</ErrorBoundary>
`}}}},p={render:function(n){const[e,o]=a.useState(0),[t,c]=a.useState("user1");return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"16px"},children:[r.jsxs("p",{children:["Reset key: ",e," | User ID: ",t]}),r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(i,{onPress:()=>o(e+1),children:"Change Reset Key"}),r.jsx(i,{onPress:()=>c(t==="user1"?"user2":"user1"),children:"Change User ID"})]}),r.jsx("p",{style:{fontSize:"12px",color:"#666"},children:"Changing either value will reset the error boundary"})]}),r.jsx(d,{fallback:n.fallback??r.jsx(l,{children:"Component crashed! Change the reset key or user ID above to recover."}),resetKeys:[e,t],onError:n.onError,onReset:n.onReset,children:r.jsx(I,{})})]})},parameters:{docs:{source:{code:`
<ErrorBoundary
  resetKeys={[resetKey, userId]}
  fallback={
    <ErrorBanner>
      Component crashed! Change the reset key or user ID above to recover.
    </ErrorBanner>
  }
>
  <BuggyCounter />
</ErrorBoundary>
`}}}},m={argTypes:{fallback:{control:!1}},render:function(n){const[e,o]=a.useState(!1),[t,c]=a.useState(!1);return r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"},children:[r.jsxs(i,{onPress:()=>o(!e),variant:e?"success":"error",children:[e?"Fix":"Break"," Outer Component"]}),r.jsxs(i,{onPress:()=>c(!t),variant:t?"success":"error",children:[t?"Fix":"Break"," Inner Component"]})]}),r.jsx(d,{resetKeys:[e],onError:n.onError,onReset:n.onReset,fallback:r.jsx(l,{children:"Outer error boundary caught an error!"}),children:r.jsxs("div",{style:{padding:"16px",border:"2px solid blue",margin:"8px"},children:[r.jsx(g,{as:"div",$weight:"bold",children:"Outer Component"}),r.jsx(y,{shouldThrow:e}),r.jsx(d,{fallback:r.jsx(l,{children:"Inner error boundary caught an error!"}),resetKeys:[t],children:r.jsxs("div",{style:{padding:"16px",border:"2px solid green",margin:"8px"},children:[r.jsx(g,{as:"div",$weight:"bold",children:"Inner Component"}),r.jsx(y,{shouldThrow:t})]})})]})})]})},parameters:{docs:{source:{code:`
<ErrorBoundary
  resetKeys={[outerError]}
  fallback={<ErrorBanner>Outer error boundary caught an error!</ErrorBanner>}
>
  <BuggyComponent shouldThrow={outerError} />

  <ErrorBoundary
    resetKeys={[innerError]}
    fallback={<ErrorBanner>Inner error boundary caught an error!</ErrorBanner>}
  >
    <BuggyComponent shouldThrow={innerError} />
  </ErrorBoundary>
</ErrorBoundary>
`}}}},kr=["WithStaticFallback","WithFunctionFallback","WithResetKeys","NestedErrorBoundaries"];var E,B,f;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function Render(args) {
    const [shouldThrow, setShouldThrow] = useState(false);
    return <div>
        <Button onPress={() => setShouldThrow(!shouldThrow)} variant={shouldThrow ? "success" : "error"}>
          {shouldThrow ? "Fix Component" : "Break Component"}
        </Button>

        <ErrorBoundary resetKeys={[shouldThrow]} onError={args.onError} onReset={args.onReset} fallback={args.fallback ?? <ErrorBanner>
                Oops! Something went wrong. Please try refreshing the page.
              </ErrorBanner>}>
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<ErrorBoundary
  resetKeys={[shouldThrow]}
  fallback={
    <ErrorBanner>
      Oops! Something went wrong. Please try refreshing the page.
    </ErrorBanner>
  }
>
  <BuggyComponent shouldThrow={shouldThrow} />
</ErrorBoundary>
\`
      }
    }
  }
}`,...(f=(B=u.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var b,x,k;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    fallback: {
      control: false
    }
  },
  render: function Render(args) {
    const [shouldThrow, setShouldThrow] = useState(false);
    return <div>
        <Button onPress={() => setShouldThrow(!shouldThrow)} variant={shouldThrow ? "success" : "error"}>
          {shouldThrow ? "Fix Component" : "Break Component"}
        </Button>

        <ErrorBoundary fallback={(error, reset) => <ErrorBanner>
              <strong>Error:</strong> {error.message}
              <br />
              <Button onPress={() => {
          setShouldThrow(false);
          reset();
        }} variant="inverted" style={{
          marginTop: "8px"
        }}>
                Try Again
              </Button>
            </ErrorBanner>} resetKeys={[shouldThrow]} onError={args.onError} onReset={args.onReset}>
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<ErrorBoundary
  resetKeys={[shouldThrow]}
  onError={(error, errorInfo) => logError(error, errorInfo)}
  fallback={(error, reset) => (
    <ErrorBanner>
      <strong>Error:</strong> {error.message}
      <Button
        variant="inverted"
        onPress={() => {
          setShouldThrow(false);
          reset();
        }}
      >
        Try Again
      </Button>
    </ErrorBanner>
  )}
>
  <BuggyComponent shouldThrow={shouldThrow} />
</ErrorBoundary>
\`
      }
    }
  }
}`,...(k=(x=h.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,v,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: function Render(args) {
    const [resetKey, setResetKey] = useState(0);
    const [userId, setUserId] = useState("user1");
    return <div>
        <div style={{
        marginBottom: "16px"
      }}>
          <p>
            Reset key: {resetKey} | User ID: {userId}
          </p>
          <div style={{
          display: "flex",
          gap: "8px"
        }}>
            <Button onPress={() => setResetKey(resetKey + 1)}>
              Change Reset Key
            </Button>
            <Button onPress={() => setUserId(userId === "user1" ? "user2" : "user1")}>
              Change User ID
            </Button>
          </div>
          <p style={{
          fontSize: "12px",
          color: "#666"
        }}>
            Changing either value will reset the error boundary
          </p>
        </div>

        <ErrorBoundary fallback={args.fallback ?? <ErrorBanner>
                Component crashed! Change the reset key or user ID above to
                recover.
              </ErrorBanner>} resetKeys={[resetKey, userId]} onError={args.onError} onReset={args.onReset}>
          <BuggyCounter />
        </ErrorBoundary>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<ErrorBoundary
  resetKeys={[resetKey, userId]}
  fallback={
    <ErrorBanner>
      Component crashed! Change the reset key or user ID above to recover.
    </ErrorBanner>
  }
>
  <BuggyCounter />
</ErrorBoundary>
\`
      }
    }
  }
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,R,j;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  argTypes: {
    fallback: {
      control: false
    }
  },
  render: function Render(args) {
    const [outerError, setOuterError] = useState(false);
    const [innerError, setInnerError] = useState(false);
    return <div>
        <div style={{
        display: "flex",
        gap: "8px",
        marginBottom: "16px"
      }}>
          <Button onPress={() => setOuterError(!outerError)} variant={outerError ? "success" : "error"}>
            {outerError ? "Fix" : "Break"} Outer Component
          </Button>
          <Button onPress={() => setInnerError(!innerError)} variant={innerError ? "success" : "error"}>
            {innerError ? "Fix" : "Break"} Inner Component
          </Button>
        </div>

        <ErrorBoundary resetKeys={[outerError]} onError={args.onError} onReset={args.onReset} fallback={<ErrorBanner>Outer error boundary caught an error!</ErrorBanner>}>
          <div style={{
          padding: "16px",
          border: "2px solid blue",
          margin: "8px"
        }}>
            <Text as="div" $weight="bold">
              Outer Component
            </Text>
            <BuggyComponent shouldThrow={outerError} />

            <ErrorBoundary fallback={<ErrorBanner>Inner error boundary caught an error!</ErrorBanner>} resetKeys={[innerError]}>
              <div style={{
              padding: "16px",
              border: "2px solid green",
              margin: "8px"
            }}>
                <Text as="div" $weight="bold">
                  Inner Component
                </Text>
                <BuggyComponent shouldThrow={innerError} />
              </div>
            </ErrorBoundary>
          </div>
        </ErrorBoundary>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<ErrorBoundary
  resetKeys={[outerError]}
  fallback={<ErrorBanner>Outer error boundary caught an error!</ErrorBanner>}
>
  <BuggyComponent shouldThrow={outerError} />

  <ErrorBoundary
    resetKeys={[innerError]}
    fallback={<ErrorBanner>Inner error boundary caught an error!</ErrorBanner>}
  >
    <BuggyComponent shouldThrow={innerError} />
  </ErrorBoundary>
</ErrorBoundary>
\`
      }
    }
  }
}`,...(j=(R=m.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};export{m as NestedErrorBoundaries,h as WithFunctionFallback,p as WithResetKeys,u as WithStaticFallback,kr as __namedExportsOrder,xr as default};
