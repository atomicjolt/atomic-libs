import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{g as ee}from"./cssprops-BO85xpNm.js";import{fn as te}from"./index-D1pa-M5k.js";import{R as ae}from"./helpers-2OzYQ_mY.js";import{r as c}from"./index-DmM0KDA7.js";import{b as j,$ as re,a as ie}from"./useObjectRef-BO7mrmvR.js";import{$ as ne}from"./filterDOMProps-CeZl_uWj.js";import{b as oe}from"./usePress-Cxy0og0d.js";import{$ as se}from"./useFocusable-B7cTVP20.js";import{f as le,b as de}from"./useSelectableItem-CQFuthIx.js";import{$ as V}from"./useLabels-D0NjiLiF.js";import{$ as ce}from"./useHasTabbableChild-5m2xZxEz.js";import{$ as be}from"./context-BF7eBGFA.js";import{$ as ue,b as fe,e as pe,a as me}from"./CollectionBuilder-BOiBnYCj.js";import{c as z,u as E}from"./index-CqJC2f1M.js";import{u as q}from"./useRenderProps-BzxgHqRb.js";import{u as ge}from"./useCollectionRenderer-Dwym1jfR.js";import{P as A}from"./Provider-op_UCnZE.js";import{a as ve}from"./Collection-CfmUX7eJ.js";import{d as f}from"./styled-components.browser.esm-B0S50oBn.js";import{m as K}from"./mixins-CgZ-Dp8B.js";import{$ as he}from"./useSingleSelectListState-LStq8ygZ.js";import"./index-Cb-P59qZ.js";import"./index-C0OdgCuT.js";import"./index-Do_mbUnv.js";import"./index-BDzxygkP.js";import"./index-CyCRagT9.js";import"./scale-CqCDTNu0.js";import"./SSRProvider-nIDwi1ZO.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./useEvent-Qm4q9YOK.js";import"./scrollIntoView-DuDju04b.js";import"./isScrollable-BSEN4xi5.js";import"./FocusScope-CLRP0VYY.js";import"./useDescription-CP-qk7_s.js";import"./index-CrEZfznw.js";import"./useControlledState-sJfMLWrs.js";import"./useListState-wIipAK1w.js";function xe(t){var e,a;let r=he({...t,suppressTextValueWarning:!0,defaultSelectedKey:(a=(e=t.defaultSelectedKey)!==null&&e!==void 0?e:D(t.collection,t.disabledKeys?new Set(t.disabledKeys):new Set))!==null&&a!==void 0?a:void 0}),{selectionManager:i,collection:o,selectedKey:l}=r,b=c.useRef(l);return c.useEffect(()=>{let s=l;t.selectedKey==null&&(i.isEmpty||s==null||!o.getItem(s))&&(s=D(o,r.disabledKeys),s!=null&&i.setSelectedKeys([s])),(s!=null&&i.focusedKey==null||!i.isFocused&&s!==b.current)&&i.setFocusedKey(s),b.current=s}),{...r,isDisabled:t.isDisabled||!1}}function D(t,e){let a=null;if(t){var r,i,o,l;for(a=t.getFirstKey();a!=null&&(e.has(a)||!((i=t.getItem(a))===null||i===void 0||(r=i.props)===null||r===void 0)&&r.isDisabled)&&a!==t.getLastKey();)a=t.getKeyAfter(a);a!=null&&(e.has(a)||!((l=t.getItem(a))===null||l===void 0||(o=l.props)===null||o===void 0)&&o.isDisabled)&&a===t.getLastKey()&&(a=t.getFirstKey())}return a}const B=new WeakMap;function T(t,e,a){return t?(typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${B.get(t)}-${a}-${e}`):""}function ye(t,e,a){let{key:r,isDisabled:i,shouldSelectOnPressUp:o}=t,{selectionManager:l,selectedKey:b}=e,s=r===b,u=i||e.isDisabled||e.selectionManager.isDisabled(r),{itemProps:v,isPressed:h}=le({selectionManager:l,key:r,ref:a,isDisabled:u,shouldSelectOnPressUp:o,linkBehavior:"selection"}),P=T(e,r,"tab"),Q=T(e,r,"tabpanel"),{tabIndex:X}=v,p=e.collection.getItem(r),S=ne(p==null?void 0:p.props,{labelable:!0});delete S.id;let Y=oe(p==null?void 0:p.props),{focusableProps:Z}=se({isDisabled:u},a);return{tabProps:j(S,Z,Y,v,{id:P,"aria-selected":s,"aria-disabled":u||void 0,"aria-controls":s?Q:void 0,tabIndex:u?void 0:X,role:"tab"}),isSelected:s,isDisabled:u,isPressed:h}}function $e(t,e,a){let r=ce(a)?void 0:0;var i;const o=T(e,(i=t.id)!==null&&i!==void 0?i:e==null?void 0:e.selectedKey,"tabpanel"),l=V({...t,id:o,"aria-labelledby":T(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:j(l,{tabIndex:r,role:"tabpanel","aria-describedby":t["aria-describedby"],"aria-details":t["aria-details"]})}}class Te{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}isDisabled(e){var a,r;return this.disabledKeys.has(e)||!!(!((r=this.collection.getItem(e))===null||r===void 0||(a=r.props)===null||a===void 0)&&a.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return e!=null&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return e!=null&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getKeyAbove(e){return this.tabDirection?null:this.getPreviousKey(e)}getKeyBelow(e){return this.tabDirection?null:this.getNextKey(e)}getNextKey(e){do e=this.collection.getKeyAfter(e),e==null&&(e=this.collection.getFirstKey());while(this.isDisabled(e));return e}getPreviousKey(e){do e=this.collection.getKeyBefore(e),e==null&&(e=this.collection.getLastKey());while(this.isDisabled(e));return e}constructor(e,a,r,i=new Set){this.collection=e,this.flipDirection=a==="rtl"&&r==="horizontal",this.disabledKeys=i,this.tabDirection=r==="horizontal"}}function Pe(t,e,a){let{orientation:r="horizontal",keyboardActivation:i="automatic"}=t,{collection:o,selectionManager:l,disabledKeys:b}=e,{direction:s}=be(),u=c.useMemo(()=>new Te(o,s,r,b),[o,b,r,s]),{collectionProps:v}=de({ref:a,selectionManager:l,keyboardDelegate:u,selectOnFocus:i==="automatic",disallowEmptySelection:!0,scrollRef:a,linkBehavior:"selection"}),h=re();B.set(e,h);let P=V({...t,id:h});return{tabListProps:{...j(v,P),role:"tablist","aria-orientation":r,tabIndex:void 0}}}const W=z(),Ke=z(),g=c.createContext(null),Ce=f.div`
  margin-bottom: calc(var(--tab-border-width) * -1);
  display: flex;
  justify-content: space-between;
`,U=f.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;const je=f.div`
  font-size: 1.4rem;
`,$=f.div`
  ${K.Regular}
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
`,C=f.div`
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
`,Se=f.div`
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

    ${C} {
      border-top: 0px solid transparent;
      padding: var(--tab-padding-vert) var(--tab-padding-hori);
      border-radius: 0 var(--tab-radius) var(--tab-radius) var(--tab-radius);
    }

    ${$} {
      ${K.Bold}
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

    ${C} {
      border-top: 0px solid transparent;
      padding: 0px;
      border-radius: 0 var(--tab-radius) var(--tab-radius) var(--tab-radius);
    }

    ${$} {
      ${K.Bold}
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

    ${je} {
      padding: 0.6rem 1.6rem;
      border-radius: 0.5rem;
      background-color: var(--neutral50);
      min-height: 4rem;
      display: flex;
      align-items: center;
    }
  }
`,d=c.forwardRef(function(e,a){return[e,a]=E(W,e,a),n.jsx(ue,{content:e.children,children:r=>n.jsx(De,{...e,collection:r,tabsRef:a})})});d.displayName="Tabs";function De(t){const{tabsRef:e,id:a}=t,r=xe({...t,children:void 0}),i=q({componentClassName:"aje-tabs",...t,variant:t.variant||"default"});return n.jsx(Se,{...i,id:a,ref:e,children:n.jsx(A,{values:[[g.Provider,r],[ve.Provider,{render:H}]],children:t.children})})}function _(t){return c.useContext(g)?n.jsx(ke,{...t}):n.jsx(me,{...t})}_.displayName="Tabs.List";d.List=_;function ke(t){const e=c.useContext(g),a=c.useRef(null),{tabListProps:r}=Pe(t,e,a),{CollectionRenderer:i}=ge();return n.jsx(Ce,{...r,ref:a,children:n.jsx(U,{children:n.jsx(i,{collection:e.collection})})})}function H(t,e,a){[t,e]=E(Ke,t,e);const r=c.useContext(g),{key:i}=a,{tabProps:o}=ye({key:i},r,e),l=q({componentClassName:"aje-tabs__tab",...t,values:{isSelected:r.selectedKey===i,isFocused:!1,isFocusVisible:!1},selectors:{"data-selected":r.selectedKey===i}}),b=t.href?"a":"div";return n.jsx($,{as:b,...o,...l,ref:e,children:l.children})}const G=fe("item",H);G.displayName="Tabs.Tab";d.Tab=G;function Le(t,e){const a=c.useContext(g),r=ie(e),{tabPanelProps:i}=$e(t,a,r);return(a==null?void 0:a.selectedKey)===t.id?n.jsx(C,{...i,ref:r,children:n.jsx(A,{values:[[W.Provider,{}],[g.Provider,null]],children:t.children})}):null}const J=pe(Le);J.displayName="Tabs.Panel";d.Panel=J;try{d.displayName="Tabs",d.__docgenInfo={description:"",displayName:"Tabs",props:{collection:{defaultValue:null,description:"",name:"collection",required:!0,type:{name:"BaseCollection<T>"}},tabsRef:{defaultValue:null,description:"",name:"tabsRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},disabledKeys:{defaultValue:null,description:"Disabled tabs",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"SuggestStrings<TabVariant>"}}}}}catch{}const gt={title:"Content/Tabs",component:d,parameters:{cssprops:ee("Tab")},argTypes:{...ae,selectedKey:{control:"select",options:["tab1","tab2"],description:"The key of the selected tab in a controlled component."},defaultSelectedKey:{control:"select",options:["tab1","tab2"],description:"The key of the selected tab in an uncontrolled component."},children:{control:!1},disabledKeys:{control:"select",options:["None","Tab 1","Tab 2"],mapping:{None:[],"Tab 1":["tab1"],"Tab 2":["tab2"],"All Tabs":["tab1","tab2","tab3"]},description:"An array of keys to disable."},onSelectionChange:{table:{category:"Events"}},tabsRef:{table:{disable:!0}},collection:{table:{disable:!0}}}},m={args:{onSelectionChange:te(),children:[n.jsxs(d.List,{children:[n.jsx(d.Tab,{id:"tab1",children:"Tab One"}),n.jsx(d.Tab,{id:"tab2",children:"Tab Two"}),n.jsx(d.Tab,{id:"tab3",children:"Tab Three"})]},"tab-list"),n.jsx(d.Panel,{id:"tab1",children:n.jsx("h1",{children:"Tab One Content"})},"tab1"),n.jsx(d.Panel,{id:"tab2",children:n.jsx("h1",{children:"Tab Two Content"})},"tab2"),n.jsx(d.Panel,{id:"tab3",children:n.jsx("h1",{children:"Tab Three Content"})},"tab3")]}},x={args:{...m.args,variant:"card"}},y={args:{...m.args,variant:"toggle"}};var k,L,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(N=x.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var O,F,M;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "toggle"
  }
}`,...(M=(F=y.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const vt=["Primary","Cards","Toggle"];export{x as Cards,m as Primary,y as Toggle,vt as __namedExportsOrder,gt as default};
