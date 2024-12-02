import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{g as Z}from"./cssprops-BGfeK0jo.js";import{f as ee}from"./index-YkVIqR4J.js";import{R as te}from"./helpers-DsiJys5i.js";import{r as c}from"./index-DJO9vBfz.js";import{$ as C,c as ae,a as re}from"./useObjectRef-C4RVQRRU.js";import{$ as ie}from"./filterDOMProps-CeZl_uWj.js";import{b as ne}from"./usePress-DG8LklVH.js";import{f as oe,a as se}from"./useSelectableItem-ohL7oXES.js";import{$ as M}from"./useLabels-DtS694vG.js";import{$ as le}from"./useHasTabbableChild-PsHGjMga.js";import{$ as de}from"./context-CKyfYUWk.js";import{c as ce,a as be,e as ue,d as fe}from"./CollectionBuilder-Vf4TV1hX.js";import{c as z,u as E}from"./index-CXdyvu6V.js";import{u as q}from"./useRenderProps-BqJZ5b79.js";import{u as pe}from"./useCollectionRenderer-DooeD2Pa.js";import{P as A}from"./Provider-B9Eqn13H.js";import{a as me}from"./Collection-Bcaq8CIK.js";import{d as b}from"./styled-components.browser.esm-WCay-hu9.js";import{m as P}from"./mixins-TlkgTuSN.js";import{$ as ge}from"./useSingleSelectListState-CcBly1Od.js";import"./Section-BBepoPM4.js";import"./useLayoutEffect-Bj1hLagI.js";import"./SSRProvider-DAMUgb6s.js";import"./focusSafely-GXGk_mpd.js";import"./useControlledState-CN8sBTKq.js";import"./index-DJdX7xnk.js";import"./FocusScope-BKSplYEH.js";import"./useEvent-CWcEg10T.js";import"./scrollIntoView-DWX27Gz-.js";import"./isScrollable-BSEN4xi5.js";import"./useDescription-DnVXAhCi.js";import"./index-i5X67GZP.js";import"./useListState-sdH-ZySf.js";function ve(t){var e;let a=ge({...t,suppressTextValueWarning:!0,defaultSelectedKey:(e=t.defaultSelectedKey)!==null&&e!==void 0?e:D(t.collection,t.disabledKeys?new Set(t.disabledKeys):new Set)}),{selectionManager:r,collection:i,selectedKey:o}=a,s=c.useRef(o);return c.useEffect(()=>{let l=o;(r.isEmpty||!i.getItem(l))&&(l=D(i,a.disabledKeys),l!=null&&r.setSelectedKeys([l])),(l!=null&&r.focusedKey==null||!r.isFocused&&l!==s.current)&&r.setFocusedKey(l),s.current=l}),{...a,isDisabled:t.isDisabled||!1}}function D(t,e){let a=null;if(t){var r,i,o,s;for(a=t.getFirstKey();(e.has(a)||!((i=t.getItem(a))===null||i===void 0||(r=i.props)===null||r===void 0)&&r.isDisabled)&&a!==t.getLastKey();)a=t.getKeyAfter(a);(e.has(a)||!((s=t.getItem(a))===null||s===void 0||(o=s.props)===null||o===void 0)&&o.isDisabled)&&a===t.getLastKey()&&(a=t.getFirstKey())}return a}const B=new WeakMap;function T(t,e,a){return t?(typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${B.get(t)}-${a}-${e}`):""}function he(t,e,a){let{key:r,isDisabled:i,shouldSelectOnPressUp:o}=t,{selectionManager:s,selectedKey:l}=e,u=r===l,f=i||e.isDisabled||e.selectionManager.isDisabled(r),{itemProps:v,isPressed:h}=oe({selectionManager:s,key:r,ref:a,isDisabled:f,shouldSelectOnPressUp:o,linkBehavior:"selection"}),K=T(e,r,"tab"),Q=T(e,r,"tabpanel"),{tabIndex:X}=v,p=e.collection.getItem(r),S=ie(p==null?void 0:p.props,{labelable:!0});delete S.id;let Y=ne(p==null?void 0:p.props);return{tabProps:C(S,Y,v,{id:K,"aria-selected":u,"aria-disabled":f||void 0,"aria-controls":u?Q:void 0,tabIndex:f?void 0:X,role:"tab"}),isSelected:u,isDisabled:f,isPressed:h}}function xe(t,e,a){let r=le(a)?void 0:0;var i;const o=T(e,(i=t.id)!==null&&i!==void 0?i:e==null?void 0:e.selectedKey,"tabpanel"),s=M({...t,id:o,"aria-labelledby":T(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:C(s,{tabIndex:r,role:"tabpanel","aria-describedby":t["aria-describedby"],"aria-details":t["aria-details"]})}}class ye{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}isDisabled(e){var a,r;return this.disabledKeys.has(e)||!!(!((r=this.collection.getItem(e))===null||r===void 0||(a=r.props)===null||a===void 0)&&a.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getKeyAbove(e){return this.tabDirection?null:this.getPreviousKey(e)}getKeyBelow(e){return this.tabDirection?null:this.getNextKey(e)}getNextKey(e){do e=this.collection.getKeyAfter(e),e==null&&(e=this.collection.getFirstKey());while(this.isDisabled(e));return e}getPreviousKey(e){do e=this.collection.getKeyBefore(e),e==null&&(e=this.collection.getLastKey());while(this.isDisabled(e));return e}constructor(e,a,r,i=new Set){this.collection=e,this.flipDirection=a==="rtl"&&r==="horizontal",this.disabledKeys=i,this.tabDirection=r==="horizontal"}}function $e(t,e,a){let{orientation:r="horizontal",keyboardActivation:i="automatic"}=t,{collection:o,selectionManager:s,disabledKeys:l}=e,{direction:u}=de(),f=c.useMemo(()=>new ye(o,u,r,l),[o,l,r,u]),{collectionProps:v}=se({ref:a,selectionManager:s,keyboardDelegate:f,selectOnFocus:i==="automatic",disallowEmptySelection:!0,scrollRef:a,linkBehavior:"selection"}),h=ae();B.set(e,h);let K=M({...t,id:h});return{tabListProps:{...C(v,K),role:"tablist","aria-orientation":r,tabIndex:void 0}}}const W=z(),Te=z(),g=c.createContext(null),Ke=b.div`
  margin-bottom: calc(var(--tab-border-width) * -1);
  display: flex;
  justify-content: space-between;
`,U=b.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;const Pe=b.div`
  font-size: 1.4rem;
`,$=b.div`
  ${P.Regular}
  --tab-bg-clr: var(--neutral100);

  display: inline-block;
  padding: var(--tab-padding-vert) var(--tab-padding-hori);
  background-color: var(--tab-bg-clr);
  border-radius: var(--tab-radius) var(--tab-radius) 0 0;
  border: 0 solid;
  border-color: var(--tab-border-clr);
  position: relative;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--tab-text-clr);

  &:hover {
    --tab-text-clr: var(--text-clr);
    --tab-border-clr: var(--border-clr-primary);
    --tab-bg-clr: var(--neutral200);
    cursor: pointer;
  }

  &:focus-visible {
    outline: var(--outline);
    outline-offset: -1px;
  }

  &[aria-disabled="true"] {
    --tab-bg-clr: var(--neutral300);
    --tab-border-clr: transparent;

    &:hover {
      cursor: not-allowed;
    }
  }
`,j=b.div`
  position: relative;
  z-index: 2;
  background-color: var(--tab-bg-clr);
  border-top: var(--border);
  min-height: 4px;

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: -2px;
  }
`,je=b.div`
  &.aje-tabs--default {
    ${$}[aria-selected="true"] {
      --tab-bg-clr: var(--neutral50);
      --tab-text-clr: var(--text-clr);

      border: var(--border);

      &::after {
        content: "";
        position: absolute;
        height: calc(var(--tab-border-width) + 2px);
        bottom: -1px;
        left: 0;
        right: 0;
        background-color: var(--tab-bg-clr);
        z-index: 3;
      }
    }
  }

  &.aje-tabs--card {
    --tab-radius: var(--card-radius);
    --tab-bg-clr: var(--card-bg-clr);
    --tab-padding-vert: var(--card-padding);
    --tab-padding-hori: var(--card-padding);
    --tab-radius: var(--card-radius);
    --tab-text-clr: var(--card-text-clr);

    ${j} {
      border-top: 0px solid transparent;
      padding: var(--tab-padding-vert) var(--tab-padding-hori);
      border-radius: 0 var(--tab-radius) var(--tab-radius) var(--tab-radius);
    }

    ${$} {
      ${P.Bold}
      border: none;
      font-size: 1.6rem;
      color: var(--tab-text-clr);
      background: none;
      min-height: 4rem;
      padding: 0.8rem 1.6rem;
      border-radius: var(--tab-radius) var(--tab-radius) 0 0;
      display: inline-flex;
      align-items: center;
      transition: background-color 100ms ease;

      &[aria-selected="true"] {
        background-color: var(--neutral100);
        color: $text;

        &:hover {
          background-color: var(--neutral100);
        }

        &::after {
          display: none;
        }
      }

      &:hover {
        background-color: var(--neutral100);
        color: $text;
        cursor: pointer;
      }

      &[aria-disabled="true"] {
        color: var(--neutral300);
        cursor: not-allowed;

        &:hover {
          background-color: transparent;
        }
      }
    }
  }

  &.aje-tabs--toggle {
    ${U} {
      display: flex;
      align-items: center;
      border: 1px solid var(--tab-border-clr);
      background-color: var(--neutral50);
      border-radius: var(--tab-radius);
      padding: 0.4rem;
    }

    ${j} {
      border-top: 0px solid transparent;
      padding: 0px;
      border-radius: 0 var(--tab-radius) var(--tab-radius) var(--tab-radius);
    }

    ${$} {
      ${P.Bold}
      background: none;
      border: none;
      font-size: 1.4rem;
      color: var(--tab-text-clr);
      background: none;
      min-height: 3.2rem;
      padding: 0.6rem 1.6rem;
      border-radius: 0.3rem;
      display: inline-flex;
      align-items: center;
      transition: background-color 100ms ease;

      &[aria-selected="true"] {
        background-color: var(--neutral100);
        color: var(--text-clr);

        &:hover {
          background-color: var(--neutral100);
        }
      }

      &:hover {
        background-color: var(--neutral100);
        color: var(--text-clr);
        cursor: pointer;
      }
    }

    ${Pe} {
      padding: 0.6rem 1.6rem;
      border-radius: 0.5rem;
      background-color: var(--neutral50);
      min-height: 4rem;
      display: flex;
      align-items: center;
    }
  }
`,d=c.forwardRef(function(e,a){return[e,a]=E(W,e,a),n.jsx(ce,{content:e.children,children:r=>n.jsx(Ce,{...e,collection:r,tabsRef:a})})});d.displayName="Tabs";function Ce(t){const{tabsRef:e,id:a}=t,r=ve({...t,children:void 0}),i=q({componentClassName:"aje-tabs",...t,variant:t.variant||"default"});return n.jsx(je,{...i,id:a,ref:e,children:n.jsx(A,{values:[[g.Provider,r],[me.Provider,{render:H}]],children:t.children})})}function _(t){return c.useContext(g)?n.jsx(Se,{...t}):n.jsx(fe,{...t})}_.displayName="Tabs.List";d.List=_;function Se(t){const e=c.useContext(g),a=c.useRef(null),{tabListProps:r}=$e(t,e,a),{CollectionRenderer:i}=pe();return n.jsx(Ke,{...r,ref:a,children:n.jsx(U,{children:n.jsx(i,{collection:e.collection})})})}function H(t,e,a){[t,e]=E(Te,t,e);const r=c.useContext(g),{key:i}=a,{tabProps:o}=he({key:i},r,e),s=q({componentClassName:"aje-tabs__tab",...t,values:{isSelected:r.selectedKey===i,isFocused:!1,isFocusVisible:!1},selectors:{"data-selected":r.selectedKey===i}}),l=t.href?"a":"div";return n.jsx($,{as:l,...o,...s,ref:e,children:s.children})}const G=be("item",H);G.displayName="Tabs.Tab";d.Tab=G;function De(t,e){const a=c.useContext(g),r=re(e),{tabPanelProps:i}=xe(t,a,r);return(a==null?void 0:a.selectedKey)===t.id?n.jsx(j,{...i,ref:r,children:n.jsx(A,{values:[[W.Provider,{}],[g.Provider,null]],children:t.children})}):null}const J=ue(De);J.displayName="Tabs.Panel";d.Panel=J;try{d.displayName="Tabs",d.__docgenInfo={description:"",displayName:"Tabs",props:{collection:{defaultValue:null,description:"",name:"collection",required:!0,type:{name:"BaseCollection<T>"}},tabsRef:{defaultValue:null,description:"",name:"tabsRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},disabledKeys:{defaultValue:null,description:"Disabled tabs",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"SuggestStrings<TabVariant>"}}}}}catch{}const dt={title:"Layouts/Tabs",component:d,parameters:{cssprops:Z("Tab")},argTypes:{...te,selectedKey:{control:"select",options:["tab1","tab2"],description:"The key of the selected tab in a controlled component."},defaultSelectedKey:{control:"select",options:["tab1","tab2"],description:"The key of the selected tab in an uncontrolled component."},children:{control:!1},disabledKeys:{control:"select",options:["None","Tab 1","Tab 2"],mapping:{None:[],"Tab 1":["tab1"],"Tab 2":["tab2"],"All Tabs":["tab1","tab2","tab3"]},description:"An array of keys to disable."},onSelectionChange:{table:{category:"Events"}},tabsRef:{table:{disable:!0}},collection:{table:{disable:!0}}}},m={args:{onSelectionChange:ee(),children:[n.jsxs(d.List,{children:[n.jsx(d.Tab,{id:"tab1",children:"Tab One"}),n.jsx(d.Tab,{id:"tab2",children:"Tab Two"}),n.jsx(d.Tab,{id:"tab3",children:"Tab Three"})]},"tab-list"),n.jsx(d.Panel,{id:"tab1",children:n.jsx("h1",{children:"Tab One Content"})},"tab1"),n.jsx(d.Panel,{id:"tab2",children:n.jsx("h1",{children:"Tab Two Content"})},"tab2"),n.jsx(d.Panel,{id:"tab3",children:n.jsx("h1",{children:"Tab Three Content"})},"tab3")]}},x={args:{...m.args,variant:"card"}},y={args:{...m.args,variant:"toggle"}};var k,L,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    onSelectionChange: fn(),
    children: [<Tabs.List key="tab-list">
        <Tabs.Tab id="tab1">Tab One</Tabs.Tab>
        <Tabs.Tab id="tab2">Tab Two</Tabs.Tab>
        <Tabs.Tab id="tab3">Tab Three</Tabs.Tab>
      </Tabs.List>, <Tabs.Panel id="tab1" key="tab1">
        <h1>Tab One Content</h1>
      </Tabs.Panel>, <Tabs.Panel id="tab2" key="tab2">
        <h1>Tab Two Content</h1>
      </Tabs.Panel>, <Tabs.Panel id="tab3" key="tab3">
        <h1>Tab Three Content</h1>
      </Tabs.Panel>]
  }
}`,...(w=(L=m.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var R,N,I;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "card"
  }
}`,...(I=(N=x.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var O,V,F;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "toggle"
  }
}`,...(F=(V=y.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const ct=["Primary","Cards","Toggle"];export{x as Cards,m as Primary,y as Toggle,ct as __namedExportsOrder,dt as default};
