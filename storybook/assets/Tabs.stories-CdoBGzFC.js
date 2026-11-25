import{r as d,g as u,j as n,a3 as ie}from"./iframe-CGPW5dgX.js";import{$ as le,m as ce,r as de,s as be,n as me,R as pe}from"./helpers-tUmR_xN7.js";import{s as k}from"./displayName-CEXLPPBu.js";import{$ as R,e as ue,d as fe}from"./useObjectRef-CjsC0YUg.js";import{$ as ge}from"./filterDOMProps-CeZl_uWj.js";import{b as ye}from"./usePress-BioWcz2v.js";import{$ as Te}from"./useFocusable-DT9_LXVA.js";import{f as ve,b as he}from"./useSelectableItem-BeBcEVva.js";import{$ as U}from"./useLabels-Bveo7T3X.js";import{$ as xe}from"./useHasTabbableChild-Dkhd6ZX_.js";import{$ as $e}from"./context-CLSG1ylv.js";import{c as W,u as H}from"./index-C0dagnaq.js";import{u as Y}from"./useRenderProps-B7rIWDyP.js";import{u as Pe}from"./useCollectionRenderer-BQP_5EoS.js";import{P as G}from"./Provider-CKCHWQEo.js";import{m as C}from"./mixins-BJuiWlrm.js";import{$ as ke}from"./useSingleSelectListState-CzUghzMl.js";import{T as N}from"./Text.component-Br2J6Hgv.js";import"./preload-helper-Dp1pzeXC.js";import"./SSRProvider-Dwr0Ku02.js";import"./spacing-Bd-CIscW.js";import"./scale-CqCDTNu0.js";import"./useEvent-CiV_uWQE.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-DFxiutEz.js";import"./useDescription-DvoUWjyy.js";import"./index-BjoBGrPA.js";import"./useListState-BFwRYvsY.js";import"./typography-DqSTiArL.js";import"./layout-Dd7m2B0D.js";import"./utils-DqmNl-Il.js";import"./colors-PU9nFmCW.js";function Ke(a){var e,t;let r=ke({...a,suppressTextValueWarning:!0,defaultSelectedKey:(t=(e=a.defaultSelectedKey)!==null&&e!==void 0?e:w(a.collection,a.disabledKeys?new Set(a.disabledKeys):new Set))!==null&&t!==void 0?t:void 0}),{selectionManager:s,collection:o,selectedKey:l}=r,b=d.useRef(l);return d.useEffect(()=>{let i=l;a.selectedKey==null&&(s.isEmpty||i==null||!o.getItem(i))&&(i=w(o,r.disabledKeys),i!=null&&s.setSelectedKeys([i])),(i!=null&&s.focusedKey==null||!s.isFocused&&i!==b.current)&&s.setFocusedKey(i),b.current=i}),{...r,isDisabled:a.isDisabled||!1}}function w(a,e){let t=null;if(a){var r,s,o,l;for(t=a.getFirstKey();t!=null&&(e.has(t)||!((s=a.getItem(t))===null||s===void 0||(r=s.props)===null||r===void 0)&&r.isDisabled)&&t!==a.getLastKey();)t=a.getKeyAfter(t);t!=null&&(e.has(t)||!((l=a.getItem(t))===null||l===void 0||(o=l.props)===null||o===void 0)&&o.isDisabled)&&t===a.getLastKey()&&(t=a.getFirstKey())}return t}const J=new WeakMap;function P(a,e,t){return a?(typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${J.get(a)}-${t}-${e}`):""}function Ne(a,e,t){let{key:r,isDisabled:s,shouldSelectOnPressUp:o}=a,{selectionManager:l,selectedKey:b}=e,i=r===b,m=s||e.isDisabled||e.selectionManager.isDisabled(r),{itemProps:y,isPressed:T}=ve({selectionManager:l,key:r,ref:t,isDisabled:m,shouldSelectOnPressUp:o,linkBehavior:"selection"}),K=P(e,r,"tab"),re=P(e,r,"tabpanel"),{tabIndex:se}=y,f=e.collection.getItem(r),j=ge(f==null?void 0:f.props,{labelable:!0});delete j.id;let ne=ye(f==null?void 0:f.props),{focusableProps:oe}=Te({isDisabled:m},t);return{tabProps:R(j,oe,ne,y,{id:K,"aria-selected":i,"aria-disabled":m||void 0,"aria-controls":i?re:void 0,tabIndex:m?void 0:se,role:"tab"}),isSelected:i,isDisabled:m,isPressed:T}}function Ce(a,e,t){let r=xe(t)?void 0:0;var s;const o=P(e,(s=a.id)!==null&&s!==void 0?s:e==null?void 0:e.selectedKey,"tabpanel"),l=U({...a,id:o,"aria-labelledby":P(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:R(l,{tabIndex:r,role:"tabpanel","aria-describedby":a["aria-describedby"],"aria-details":a["aria-details"]})}}class Se{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}isDisabled(e){var t,r;return this.disabledKeys.has(e)||!!(!((r=this.collection.getItem(e))===null||r===void 0||(t=r.props)===null||t===void 0)&&t.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getKeyAbove(e){return this.tabDirection?null:this.getPreviousKey(e)}getKeyBelow(e){return this.tabDirection?null:this.getNextKey(e)}getNextKey(e){do e=this.collection.getKeyAfter(e),e==null&&(e=this.collection.getFirstKey());while(this.isDisabled(e));return e}getPreviousKey(e){do e=this.collection.getKeyBefore(e),e==null&&(e=this.collection.getLastKey());while(this.isDisabled(e));return e}constructor(e,t,r,s=new Set){this.collection=e,this.flipDirection=t==="rtl"&&r==="horizontal",this.disabledKeys=s,this.tabDirection=r==="horizontal"}}function De(a,e,t){let{orientation:r="horizontal",keyboardActivation:s="automatic"}=a,{collection:o,selectionManager:l,disabledKeys:b}=e,{direction:i}=$e(),m=d.useMemo(()=>new Se(o,i,r,b),[o,b,r,i]),{collectionProps:y}=he({ref:t,selectionManager:l,keyboardDelegate:m,selectOnFocus:s==="automatic",disallowEmptySelection:!0,scrollRef:t,linkBehavior:"selection"}),T=ue();J.set(e,T);let K=U({...a,id:T});return{tabListProps:{...R(y,K),role:"tablist","aria-orientation":r,tabIndex:void 0}}}const Q=W(),Re=W(),g=d.createContext(null),je=u.div`
  margin-bottom: calc(var(--tab-border-width) * -1);
  display: flex;
  justify-content: space-between;
`,X=u.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;u.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;const we=u.div`
  font-size: 1.4rem;
`,$=u.div`
  ${C.Regular}
  --tab-bg-clr: var(--background-clr-subtle);

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
    --tab-border-clr: var(--border-clr);
    --tab-bg-clr: var(--background-clr-subtle-hover);
    cursor: pointer;
  }

  &:focus-visible {
    outline: var(--outline);
    outline-offset: -1px;
  }

  &[aria-disabled="true"] {
    --tab-bg-clr: var(--background-clr-disabled);
    --tab-border-clr: transparent;

    &:hover {
      cursor: not-allowed;
    }
  }
`,S=u.div`
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
`,Ie=u.div`
  &.aje-tabs--default {
    ${$}[aria-selected="true"] {
      --tab-bg-clr: var(--background-clr);
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

    ${S} {
      border-top: 0px solid transparent;
      padding: var(--tab-padding-vert) var(--tab-padding-hori);
      border-radius: 0 var(--tab-radius) var(--tab-radius) var(--tab-radius);
    }

    ${$} {
      ${C.Bold}
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
        background-color: var(--background-clr-subtle);
        color: $text;

        &:hover {
          background-color: var(--background-clr-subtle);
        }

        &::after {
          display: none;
        }
      }

      &:hover {
        background-color: var(--background-clr-hover);
        color: $text;
        cursor: pointer;
      }

      &[aria-disabled="true"] {
        color: var(--text-clr-disabled);
        cursor: not-allowed;

        &:hover {
          background-color: transparent;
        }
      }
    }
  }

  &.aje-tabs--toggle {
    ${X} {
      display: flex;
      align-items: center;
      border: 1px solid var(--tab-border-clr);
      background-color: var(--background-clr);
      border-radius: var(--tab-radius);
      padding: 0.4rem;
    }

    ${S} {
      border-top: 0px solid transparent;
      padding: 0px;
      border-radius: 0 var(--tab-radius) var(--tab-radius) var(--tab-radius);
    }

    ${$} {
      ${C.Bold}
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
        background-color: var(--background-clr-subtle);
        color: var(--text-clr);

        &:hover {
          background-color: var(--background-clr-subtle);
        }
      }

      &:hover {
        background-color: var(--background-clr-hover);
        color: var(--text-clr);
        cursor: pointer;
      }
    }

    ${we} {
      padding: 0.6rem 1.6rem;
      border-radius: 0.5rem;
      background-color: var(--background-clr);
      min-height: 4rem;
      display: flex;
      align-items: center;
    }
  }
`,c=d.forwardRef(function(e,t){return[e,t]=H(Q,e,t),n.jsx(le,{content:e.children,children:r=>n.jsx(D,{...e,collection:r,tabsRef:t})})});k(c,"Tabs");function D(a){const{tabsRef:e,id:t}=a,r=Ke({...a,children:void 0}),s=Y({componentClassName:"aje-tabs",...a,variant:a.variant||"default"});return n.jsx(Ie,{...s,id:t,ref:e,children:n.jsx(G,{values:[[g.Provider,r],[ce.Provider,{render:ee}]],children:a.children})})}function Z(a){return d.useContext(g)?n.jsx(Le,{...a}):n.jsx(me,{...a})}k(Z,"Tabs.List");c.List=Z;function Le(a){const e=d.useContext(g),t=d.useRef(null),{tabListProps:r}=De(a,e,t),{CollectionRenderer:s}=Pe();return n.jsx(je,{...r,ref:t,children:n.jsx(X,{children:n.jsx(s,{collection:e.collection})})})}function ee(a,e,t){[a,e]=H(Re,a,e);const r=d.useContext(g),{key:s}=t,{tabProps:o}=Ne({key:s},r,e),l=Y({componentClassName:"aje-tabs__tab",...a,values:{isSelected:r.selectedKey===s,isFocused:!1,isFocusVisible:!1},selectors:{"data-selected":r.selectedKey===s}}),b=a.href?"a":"div";return n.jsx($,{as:b,...o,...l,ref:e,children:l.children})}const ae=de("item",ee);k(ae,"Tabs.Tab");c.Tab=ae;function Ve(a,e){const t=d.useContext(g),r=fe(e),{tabPanelProps:s}=Ce(a,t,r);return(t==null?void 0:t.selectedKey)===a.id?n.jsx(S,{...s,ref:r,children:n.jsx(G,{values:[[Q.Provider,{}],[g.Provider,null]],children:a.children})}):null}const te=be(Ve);k(te,"Tabs.Panel");c.Panel=te;try{D.displayName="TabsInner",D.__docgenInfo={description:"",displayName:"TabsInner",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.component.tsx",methods:[],props:{collection:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.component.tsx",name:"TabsInnerProps"}],description:"",name:"collection",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.component.tsx",name:"TabsInnerProps"},required:!0,tags:{},type:{name:"BaseCollection<T>"}},tabsRef:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.component.tsx",name:"TabsInnerProps"}],description:"",name:"tabsRef",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.component.tsx",name:"TabsInnerProps"},required:!0,tags:{},type:{name:"RefObject<HTMLDivElement | null>"}},children:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.types.ts",name:"TabsProps"}],description:"A `Tabs.List` followed by one `Tabs.Panel` per tab, matched by `id`.",name:"children",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.types.ts",name:"TabsProps"},required:!0,tags:{},type:{name:"ReactNode"}},disabledKeys:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.types.ts",name:"TabsProps"}],description:"Keys of the tabs that are disabled and can't be selected.",name:"disabledKeys",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.types.ts",name:"TabsProps"},required:!1,tags:{},type:{name:"Iterable<Key>"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}},id:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"}],description:"Unique id for the component",name:"id",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"},required:!1,tags:{},type:{name:"string"}},variant:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasVariant"}],description:"Visual style of the component.",name:"variant",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasVariant"},required:!1,tags:{},type:{name:"SuggestStrings<TabVariant>"}}},tags:{}}}catch{}try{c.displayName="Tabs",c.__docgenInfo={description:"",displayName:"Tabs",filePath:"/home/runner/work/atomic-libs/atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.component.tsx",methods:[],props:{children:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.types.ts",name:"TabsProps"}],description:"A `Tabs.List` followed by one `Tabs.Panel` per tab, matched by `id`.",name:"children",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.types.ts",name:"TabsProps"},required:!0,tags:{},type:{name:"ReactNode"}},disabledKeys:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.types.ts",name:"TabsProps"}],description:"Keys of the tabs that are disabled and can't be selected.",name:"disabledKeys",parent:{fileName:"atomic-libs/packages/atomic-elements/src/components/Content/Tabs/Tabs.types.ts",name:"TabsProps"},required:!1,tags:{},type:{name:"Iterable<Key>"}},className:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"className",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderClassName<never>"}},style:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"}],description:"",name:"style",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/render.ts",name:"RenderStyleProps"},required:!1,tags:{},type:{name:"RenderStyle<never>"}},id:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"}],description:"Unique id for the component",name:"id",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"DomProps"},required:!1,tags:{},type:{name:"string"}},variant:{defaultValue:null,declarations:[{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasVariant"}],description:"Visual style of the component.",name:"variant",parent:{fileName:"atomic-libs/packages/atomic-elements/src/types/common.ts",name:"HasVariant"},required:!1,tags:{},type:{name:"SuggestStrings<TabVariant>"}}},tags:{}}}catch{}const{fn:_e}=__STORYBOOK_MODULE_TEST__,ga={title:"Content/Tabs",component:c,parameters:{cssprops:{tab:ie}},argTypes:{...pe,variant:{control:"select",options:["default","card","toggle"],table:{defaultValue:{summary:'"default"'}}},selectedKey:{control:"select",options:["tab1","tab2","tab3"],description:"The key of the selected tab in a controlled component."},defaultSelectedKey:{control:"select",options:["tab1","tab2","tab3"],description:"The key of the selected tab in an uncontrolled component."},children:{control:!1,description:"A `Tabs.List` followed by one `Tabs.Panel` per tab, matched by `id`."},disabledKeys:{control:"select",options:["None","Tab 1","Tab 2","All Tabs"],mapping:{None:[],"Tab 1":["tab1"],"Tab 2":["tab2"],"All Tabs":["tab1","tab2","tab3"]}},onSelectionChange:{table:{category:"Events"}},tabsRef:{table:{disable:!0}},collection:{table:{disable:!0}}}},p={args:{onSelectionChange:_e(),children:[n.jsxs(c.List,{children:[n.jsx(c.Tab,{id:"tab1",children:"Tab One"}),n.jsx(c.Tab,{id:"tab2",children:"Tab Two"}),n.jsx(c.Tab,{id:"tab3",children:"Tab Three"})]},"tab-list"),n.jsx(c.Panel,{id:"tab1",children:n.jsx(N,{$size:"3",children:"Tab One Content"})},"tab1"),n.jsx(c.Panel,{id:"tab2",children:n.jsx(N,{$size:"3",children:"Tab Two Content"})},"tab2"),n.jsx(c.Panel,{id:"tab3",children:n.jsx(N,{$size:"3",children:"Tab Three Content"})},"tab3")]}},v={args:{...p.args,variant:"card"}},h={args:{...p.args,variant:"toggle"}},x={args:{...p.args,disabledKeys:["tab2"]}},ya=["Primary","Cards","Toggle","DisabledTab"];var I,L,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    onSelectionChange: fn(),
    children: [<Tabs.List key="tab-list">
        <Tabs.Tab id="tab1">Tab One</Tabs.Tab>
        <Tabs.Tab id="tab2">Tab Two</Tabs.Tab>
        <Tabs.Tab id="tab3">Tab Three</Tabs.Tab>
      </Tabs.List>, <Tabs.Panel id="tab1" key="tab1">
        <Text $size="3">Tab One Content</Text>
      </Tabs.Panel>, <Tabs.Panel id="tab2" key="tab2">
        <Text $size="3">Tab Two Content</Text>
      </Tabs.Panel>, <Tabs.Panel id="tab3" key="tab3">
        <Text $size="3">Tab Three Content</Text>
      </Tabs.Panel>]
  }
}`,...(V=(L=p.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,q,O;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "card"
  }
}`,...(O=(q=v.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var z,A,E;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "toggle"
  }
}`,...(E=(A=h.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var M,F,B;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabledKeys: ["tab2"]
  }
}`,...(B=(F=x.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};export{v as Cards,x as DisabledTab,p as Primary,h as Toggle,ya as __namedExportsOrder,ga as default};
