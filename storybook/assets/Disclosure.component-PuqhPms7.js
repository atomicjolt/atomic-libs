import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r,R as D}from"./index-DmM0KDA7.js";import{r as j}from"./index-CnHy7ftH.js";import{$ as p,c as _}from"./useObjectRef-BO7mrmvR.js";import{$ as T}from"./useEvent-Qm4q9YOK.js";import{$ as M}from"./SSRProvider-nIDwi1ZO.js";import{c as E,u as $,D as A}from"./index-CqJC2f1M.js";import{d as m}from"./styled-components.browser.esm-B0S50oBn.js";import{B as N,a as B}from"./Button.component-DnMutOi6.js";import{u as P}from"./useRenderProps-BzxgHqRb.js";import{P as I}from"./Provider-op_UCnZE.js";import{$ as y}from"./useControlledState-sJfMLWrs.js";import{M as F}from"./MaterialIcon.component-CIaYzniN.js";function k(n){let[e,t]=y(n.isExpanded,n.defaultExpanded||!1,n.onExpandedChange);const s=r.useCallback(()=>{t(!0)},[t]),a=r.useCallback(()=>{t(!1)},[t]),o=r.useCallback(()=>{t(!e)},[t,e]);return{isExpanded:e,setExpanded:t,expand:s,collapse:a,toggle:o}}function G(n){let{allowsMultipleExpanded:e=!1,isDisabled:t=!1}=n,[s,a]=y(r.useMemo(()=>n.expandedKeys?new Set(n.expandedKeys):void 0,[n.expandedKeys]),r.useMemo(()=>n.defaultExpandedKeys?new Set(n.defaultExpandedKeys):new Set,[n.defaultExpandedKeys]),n.onExpandedChange);return r.useEffect(()=>{!e&&s.size>1&&a(new Set([s.values().next().value]))}),{allowsMultipleExpanded:e,isDisabled:t,expandedKeys:s,setExpandedKeys:a,toggleKey(o){let d;e?(d=new Set(s),d.has(o)?d.delete(o):d.add(o)):d=new Set(s.has(o)?[]:[o]),a(d)}}}function L(n,e,t){let{isDisabled:s}=n,a=p(),o=p(),l=!M()&&"onbeforematch"in document.body,i=r.useRef(null),u=r.useCallback(()=>{i.current=requestAnimationFrame(()=>{t.current&&t.current.setAttribute("hidden","until-found")}),j.flushSync(()=>{e.toggle()})},[t,e]);return T(t,"beforematch",l?u:null),_(()=>{i.current&&cancelAnimationFrame(i.current),l&&t.current&&!s&&(e.isExpanded?t.current.removeAttribute("hidden"):t.current.setAttribute("hidden","until-found"))},[s,t,e.isExpanded,l]),r.useEffect(()=>()=>{i.current&&cancelAnimationFrame(i.current)},[]),{buttonProps:{id:a,"aria-expanded":e.isExpanded,"aria-controls":o,onPress:f=>{!s&&f.pointerType!=="keyboard"&&e.toggle()},isDisabled:s,onPressStart(f){f.pointerType==="keyboard"&&!s&&e.toggle()}},panelProps:{id:o,role:"group","aria-labelledby":a,"aria-hidden":!e.isExpanded,hidden:l?!0:!e.isExpanded}}}const W=E(),v=E(),b=D.createContext(null),C=D.createContext(null),q=m.div``,z=m(N)`
  justify-content: flex-start;
  min-height: 48px;
  border: none;
  padding: 12px;
  padding-left: 16px;
  isolation: isolate;

  &.aje-btn--disclosure-trigger {
    width: 100%;
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral200);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral300);
    --btn-border: var(--border);
    --btn-pressed-transform: "";
  }
`,O=m.div``,x=r.forwardRef(function(e,t){[e,t]=$(W,e,t);const s=p(e.id),a=r.useContext(b),o=a?a.expandedKeys.has(s):e.isExpanded,d=k({...e,isExpanded:o,onExpandedChange:K=>{var h;a&&a.toggleKey(s),(h=e.onExpandedChange)==null||h.call(e,K)}}),l=r.useRef(null),i=r.useRef(null),u=(e.isDisabled||(a==null?void 0:a.isDisabled))??!1,{buttonProps:f,panelProps:S}=L(e,d,l),g=P({componentClassName:"aje-disclosure",...e,values:{isExpanded:d.isExpanded,isDisabled:u},selectors:{"data-expanded":d.isExpanded,"data-disabled":u}});return c.jsx(q,{...g,ref:t,children:c.jsx(I,{values:[[b.Provider,{}],[C.Provider,d],[B.Provider,{slots:{[A]:{},trigger:{...f,isDisabled:u,ref:i}}}],[v.Provider,{ref:l,...S}]],children:g.children})})}),w=r.forwardRef(function(e,t){[e,t]=$(v,e,t);const{className:s,style:a,children:o,slot:d,...l}=e,i=P({componentClassName:"aje-disclosure-panel",...e});return c.jsx(O,{...l,...i,ref:t,children:i.children})});w.displayName="Disclosure.Panel";x.Panel=w;const U={expanded:"expand_less",collapsed:"expand_more"},R=r.forwardRef(function(e,t){const s=r.useContext(C),a={...U,...e.icons};return c.jsxs(z,{slot:"trigger",variant:"disclosure-trigger",ref:t,...e,children:[c.jsx(F,{icon:s.isExpanded?a.expanded:a.collapsed}),e.children]})});R.displayName="Disclosure.Trigger";x.Trigger=R;function oe(n){const e=G(n);return c.jsx(b.Provider,{value:e,children:n.children})}try{x.Panel.displayName="Disclosure.Panel",x.Panel.__docgenInfo={description:`DisclosureGroup wraps several Disclosures so that their behavior can be
controlled together. This is often used to create an accordion.`,displayName:"Disclosure.Panel",props:{}}}catch{}export{x as D,oe as a};
