import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DmM0KDA7.js";import{$ as p}from"./useOverlayTrigger-BaVZjogA.js";import{$ as d}from"./PressResponder-D-PDHmhd.js";import{P as m}from"./Popover.context-CkZWeej5.js";import{P as c}from"./Provider-op_UCnZE.js";import{O as g}from"./context-D5CkyXRW.js";import{M as f}from"./Modal.context-CnJk84dQ.js";import{$ as v}from"./useOverlayTriggerState-3VWy5d8s.js";function i(e){const r=v(e),t=n.useRef(null),{type:s="dialog"}=e,{overlayProps:o,triggerProps:l}=p({type:s},r,t);return a.jsx(c,{values:[[g.Provider,r],[m.Provider,{triggerRef:t,isOpen:r.isOpen,...o}],[f.Provider,{triggerRef:t,...o}]],children:a.jsx(d,{...l,ref:t,isPressed:r.isOpen,children:e.children})})}try{i.displayName="OverlayTrigger",i.__docgenInfo={description:`OverlayTrigger wraps a trigger target & a overlay element.
When the target is clicked, the overlay will be opened.`,displayName:"OverlayTrigger",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"menu"'},{value:'"listbox"'},{value:'"tree"'},{value:'"grid"'},{value:'"dialog"'}]}}}}}catch{}export{i as O};
