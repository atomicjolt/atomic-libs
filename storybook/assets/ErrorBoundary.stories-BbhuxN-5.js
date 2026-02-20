import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BCtMShv3.js";import"./index-6mvPDbgF.js";import{B as a}from"./Button.component-BMnCqhoB.js";import{E as d}from"./DismissableBanner.component-B0dstwdl.js";import{T as I}from"./Text.component-Ddw2E8on.js";import"./index-CsiUWFDz.js";import"./useObjectRef-D2RG7rRi.js";import"./SSRProvider-DyiXDq2k.js";import"./BaseButton-DNF272oQ.js";import"./styled-components.browser.esm-Y4FpNNpy.js";import"./mixins-XviowZ_6.js";import"./useRenderProps-CP918x9p.js";import"./index-EJ0-2BeM.js";import"./useFocusRing-88kjlAJd.js";import"./useFocusable-DacP9xvE.js";import"./useFocusWithin-AgzTPs3-.js";import"./usePress-CzUfyTu7.js";import"./index-BqCLlfdy.js";import"./index-D-fs5e6L.js";import"./useButton-DYDUZLxM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLink-D8UViwUR.js";import"./SpinnerLoader.component-Q4VFvN57.js";import"./Loader.component-C7K3HAGY.js";import"./index-CyCRagT9.js";import"./Flex.component-fpVWlrim.js";import"./layout-D683Cy6J.js";import"./utils-DqmNl-Il.js";import"./Checkmark.component-Bisr1A6O.js";import"./Spinner.component-C44VOTWe.js";import"./ProgressCircle.component-_TQleApR.js";import"./number-nHrFdSb-.js";import"./useLabel-DDcndmXW.js";import"./useLabels-B8dXFA8d.js";import"./useNumberFormatter-BHOsbS6G.js";import"./context-z6pb9OkM.js";import"./NumberFormatter-DNR9MAW-.js";import"./colors-x_YFGAop.js";import"./Button.context-BxdzJgC_.js";import"./useTranslations-lvMpgG-n.js";import"./useLocalizedStringFormatter-BmC8c4z2.js";import"./Banner.component-D9qABG_I.js";import"./IconButton.component-D56fGC-z.js";import"./MaterialIcon.component-DPOUm_7i.js";import"./Icons.styles-D-JqKhr6.js";import"./typography-B_qJ0BtB.js";import"./scale-CqCDTNu0.js";class i extends s.Component{constructor(o){super(o),this.reset=()=>{var n,t;(t=(n=this.props).onReset)==null||t.call(n),this.setState({hasError:!1,error:null})},this.state={hasError:!1,error:null}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,n){var t,m;(m=(t=this.props).onError)==null||m.call(t,o,n)}componentDidUpdate(o){const{resetKeys:n}=this.props,t=o.resetKeys;this.state.hasError&&t!==n&&(n&&t?n.some((T,S)=>t[S]!==T)&&this.reset():n!==t&&this.reset())}render(){if(this.state.hasError&&this.state.error){const{fallback:o}=this.props;return typeof o=="function"?o(this.state.error,this.reset):o}return this.props.children}}try{i.displayName="ErrorBoundary",i.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{fallback:{defaultValue:null,description:"Fallback UI to display when an error is caught. Can be a ReactNode or a function that receives the error and a reset function.",name:"fallback",required:!0,type:{name:"ReactNode | ((error: Error, reset: () => void) => ReactNode)"}},onError:{defaultValue:null,description:"Callback invoked when an error is caught.",name:"onError",required:!1,type:{name:"(error: Error, errorInfo: ErrorInfo) => void"}},onReset:{defaultValue:null,description:"Callback invoked when the error boundary is reset.",name:"onReset",required:!1,type:{name:"() => void"}},resetKeys:{defaultValue:null,description:"An array of values that, when changed, will reset the error boundary.",name:"resetKeys",required:!1,type:{name:"any[]"}}}}}catch{}const jr={title:"Feedback/ErrorBoundary",component:i,parameters:{layout:"centered"},argTypes:{fallback:{control:"text",description:"The fallback UI to display when an error is caught. This can be a React node or a function that receives the error and a reset function as arguments."},resetKeys:{control:!1,description:"An array of values that, when changed, will reset the error boundary's state."},onError:{action:"error captured",description:"Callback function that is called when an error is caught. It receives the error and additional info as arguments."},onReset:{action:"reset triggered",description:"Callback function that is called when the error boundary is reset."}}},p=({shouldThrow:e})=>{if(e)throw new Error("Something went wrong in the component!");return r.jsx(I,{as:"div",$size:"3",$mt:"4",children:"Everything is working fine!"})},K=()=>{const[e,o]=s.useState(0);if(e>3)throw new Error("Count cannot be greater than 3!");return r.jsxs("div",{children:[r.jsxs("p",{children:["Count: ",e]}),r.jsx(a,{onPress:()=>o(e+1),children:"Increment"})]})},l={render:()=>{const[e,o]=s.useState(!1);return r.jsxs("div",{children:[r.jsx(a,{onPress:()=>o(!e),variant:e?"success":"error",children:e?"Fix Component":"Break Component"}),r.jsx(i,{resetKeys:[e],fallback:r.jsx(d,{children:"Oops! Something went wrong. Please try refreshing the page."}),children:r.jsx(p,{shouldThrow:e})})]})}},u={render:()=>{const[e,o]=s.useState(!1);return r.jsxs("div",{children:[r.jsx(a,{onPress:()=>o(!e),variant:e?"success":"error",children:e?"Fix Component":"Break Component"}),r.jsx(i,{fallback:(n,t)=>r.jsxs(d,{children:[r.jsx("strong",{children:"Error:"})," ",n.message,r.jsx("br",{}),r.jsx(a,{onPress:()=>{o(!1),t()},variant:"inverted",style:{marginTop:"8px"},children:"Try Again"})]}),resetKeys:[e],onError:(n,t)=>{console.log("Error caught:",n),console.log("Error info:",t)},onReset:()=>{console.log("Error boundary reset")},children:r.jsx(p,{shouldThrow:e})})]})}},c={render:()=>{const[e,o]=s.useState(0),[n,t]=s.useState("user1");return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"16px"},children:[r.jsxs("p",{children:["Reset key: ",e," | User ID: ",n]}),r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(a,{onPress:()=>o(e+1),children:"Change Reset Key"}),r.jsx(a,{onPress:()=>t(n==="user1"?"user2":"user1"),children:"Change User ID"})]}),r.jsx("p",{style:{fontSize:"12px",color:"#666"},children:"Changing either value will reset the error boundary"})]}),r.jsx(i,{fallback:r.jsx(d,{children:"Component crashed! Change the reset key or user ID above to recover."}),resetKeys:[e,n],onReset:()=>{console.log("Error boundary reset due to resetKeys change")},children:r.jsx(K,{})})]})}},h={render:()=>{const[e,o]=s.useState(!1),[n,t]=s.useState(!1);return r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"},children:[r.jsxs(a,{onPress:()=>o(!e),variant:e?"success":"error",children:[e?"Fix":"Break"," Outer Component"]}),r.jsxs(a,{onPress:()=>t(!n),variant:n?"success":"error",children:[n?"Fix":"Break"," Inner Component"]})]}),r.jsx(i,{resetKeys:[e],fallback:r.jsx(d,{children:"Outer error boundary caught an error!"}),children:r.jsxs("div",{style:{padding:"16px",border:"2px solid blue",margin:"8px"},children:[r.jsx("h3",{children:"Outer Component"}),r.jsx(p,{shouldThrow:e}),r.jsx(i,{fallback:r.jsx(d,{children:"Inner error boundary caught an error!"}),resetKeys:[n],children:r.jsxs("div",{style:{padding:"16px",border:"2px solid green",margin:"8px"},children:[r.jsx("h4",{children:"Inner Component"}),r.jsx(p,{shouldThrow:n})]})})]})})]})}};var y,g,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [shouldThrow, setShouldThrow] = useState(false);
    return <div>
        <Button onPress={() => setShouldThrow(!shouldThrow)} variant={shouldThrow ? "success" : "error"}>
          {shouldThrow ? "Fix Component" : "Break Component"}
        </Button>

        <ErrorBoundary resetKeys={[shouldThrow]} fallback={<ErrorBanner>
              Oops! Something went wrong. Please try refreshing the page.
            </ErrorBanner>}>
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>;
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var E,f,B;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
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
            </ErrorBanner>} resetKeys={[shouldThrow]} onError={(error, errorInfo) => {
        console.log("Error caught:", error);
        console.log("Error info:", errorInfo);
      }} onReset={() => {
        console.log("Error boundary reset");
      }}>
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>;
  }
}`,...(B=(f=u.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var v,b,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
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

        <ErrorBoundary fallback={<ErrorBanner>
              Component crashed! Change the reset key or user ID above to
              recover.
            </ErrorBanner>} resetKeys={[resetKey, userId]} onReset={() => {
        console.log("Error boundary reset due to resetKeys change");
      }}>
          <BuggyCounter />
        </ErrorBoundary>
      </div>;
  }
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var C,j,k;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
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

        <ErrorBoundary resetKeys={[outerError]} fallback={<ErrorBanner>Outer error boundary caught an error!</ErrorBanner>}>
          <div style={{
          padding: "16px",
          border: "2px solid blue",
          margin: "8px"
        }}>
            <h3>Outer Component</h3>
            <BuggyComponent shouldThrow={outerError} />

            <ErrorBoundary fallback={<ErrorBanner>Inner error boundary caught an error!</ErrorBanner>} resetKeys={[innerError]}>
              <div style={{
              padding: "16px",
              border: "2px solid green",
              margin: "8px"
            }}>
                <h4>Inner Component</h4>
                <BuggyComponent shouldThrow={innerError} />
              </div>
            </ErrorBoundary>
          </div>
        </ErrorBoundary>
      </div>;
  }
}`,...(k=(j=h.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const kr=["WithStaticFallback","WithFunctionFallback","WithResetKeys","NestedErrorBoundaries"];export{h as NestedErrorBoundaries,u as WithFunctionFallback,c as WithResetKeys,l as WithStaticFallback,kr as __namedExportsOrder,jr as default};
