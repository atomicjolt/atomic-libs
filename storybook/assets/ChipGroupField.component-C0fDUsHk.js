import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-DmM0KDA7.js";import{$ as y,a as p,b as f,c as g,d as G}from"./Chip.component-QUw_Zbuq.js";import{$ as q,a as F}from"./CollectionBuilder-BOiBnYCj.js";import{u as $}from"./useRenderProps-BzxgHqRb.js";import{u as h}from"./index-CqJC2f1M.js";import{P as R}from"./Provider-op_UCnZE.js";import{u as P}from"./useCollectionRenderer-Dwym1jfR.js";import{d as b}from"./styled-components.browser.esm-B0S50oBn.js";import{m as c}from"./mixins-CgZ-Dp8B.js";import{a as V}from"./Collection-CfmUX7eJ.js";import{$ as j}from"./useListState-wIipAK1w.js";import{L as w}from"./Label.context-8YwVGsEO.js";import{M as I}from"./Message.context-4_rHhebz.js";import{E as L}from"./ErrorMessage.context-D-RNFvKn.js";const z=b.div`
  ${c.FieldStatus}
  ${c.SizingX}

  --size-sm-x: 20rem;
  --size-md-x: 30rem;
  --size-lg-x: 40rem;
  --size-full-x: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,N=b.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0;
`,C=t.forwardRef(function(e,i){return[e,i]=h(G,e,i),a.jsx(q,{content:e.children,children:l=>a.jsx(S,{...e,collection:l,chipGroupRef:i})})});C.displayName="ChipFieldGroup";function S(r){const{isInvalid:e,isDisabled:i,isRequired:l,chipGroupRef:n}=r,o=j({...r,children:void 0}),{gridProps:s,labelProps:d,descriptionProps:u,errorMessageProps:x}=y({...r,label:!0},o,n),m=$({componentClassName:"aje-chip-group",...r,selectors:{"data-disabled":i,"data-invalid":e,"data-required":l}});return a.jsx(z,{...m,children:a.jsx(R,{values:[[w.Provider,d],[I.Provider,u],[L.Provider,{...x,isInvalid:e}],[p.Provider,o],[f.Provider,{...s,ref:n}],[V.Provider,{render:g}]],children:m.children})})}const v=t.forwardRef(function(e,i){return[e,i]=h(f,e,i),t.useContext(p)?a.jsx(_,{...e,ref:i}):a.jsx(F,{...e})});v.displayName="ChipGroupField.List";C.List=v;const _=t.forwardRef(function(e,i){const{items:l,children:n,beforeChildren:o,...s}=e,d=t.useContext(p),{CollectionRenderer:u}=P();return a.jsxs(N,{...s,ref:i,children:[o,a.jsx(u,{collection:d.collection})]})});try{ChipFieldGroup.displayName="ChipFieldGroup",ChipFieldGroup.__docgenInfo={description:"Building blocks for constructing a ChipGroup field.",displayName:"ChipFieldGroup",props:{onRemove:{defaultValue:null,description:"Handler called when a user deletes a chip",name:"onRemove",required:!1,type:{name:"(removed: Set<Key>) => void"}},selectionBehavior:{defaultValue:null,description:"How multiple selection should behave in the collection.",name:"selectionBehavior",required:!1,type:{name:"enum",value:[{value:'"replace"'},{value:'"toggle"'}]}},size:{defaultValue:null,description:"Size of the chip group",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"auto"'},{value:'"full"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"RenderClassName<never>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"RenderStyle<never>"}},id:{defaultValue:null,description:"Unique id for the component",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"",name:"aria-details",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:`Field must be interacted with. Should be indicated in the UI
@selector [data-required]`,name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Field has an error. Should be made to look like an error.\nControls whether the value of `error` is displayed\n@selector [data-invalid]",name:"isInvalid",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:`Field cannot be interacted with, should be de-emphasized in the UI
@selector [data-disabled]`,name:"isDisabled",required:!1,type:{name:"boolean"}}}}}catch{}export{C};
