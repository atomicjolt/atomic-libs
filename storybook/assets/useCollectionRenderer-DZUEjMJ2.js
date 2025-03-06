import{R as S,r as a}from"./index-DJO9vBfz.js";import{$ as k}from"./useControlledState-CN8sBTKq.js";import{c as I,d as A,$ as D}from"./useSelectableItem-c4_FIivV.js";import{d as z}from"./CollectionBuilder-Xbel4YvD.js";class V{build(e,t){return this.context=t,R(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if(S.isValidElement(t)&&t.type===S.Fragment)yield*this.iterateCollection({children:t.props.children,items:l});else if(typeof t=="function"){if(!l)throw new Error("props.children was a function but props.items is missing");let i=0;for(let o of l)yield*this.getFullNode({value:o,index:i},{renderer:t}),i++}else{let i=[];S.Children.forEach(t,s=>{s&&i.push(s)});let o=0;for(let s of i){let c=this.getFullNode({element:s,index:o},{});for(let u of c)o++,yield u}}}getKey(e,t,l,i){if(e.key!=null)return e.key;if(t.type==="cell"&&t.key!=null)return`${i}${t.key}`;let o=t.value;if(o!=null){var s;let c=(s=o.key)!==null&&s!==void 0?s:o.id;if(c==null)throw new Error("No key found for item");return c}return i?`${i}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,i){if(S.isValidElement(e.element)&&e.element.type===S.Fragment){let r=[];S.Children.forEach(e.element.props.children,f=>{r.push(f)});var o;let h=(o=e.index)!==null&&o!==void 0?o:0;for(const f of r)yield*this.getFullNode({element:f,index:h++},t,l,i);return}let s=e.element;if(!s&&e.value&&t&&t.renderer){let r=this.cache.get(e.value);if(r&&(!r.shouldInvalidate||!r.shouldInvalidate(this.context))){r.index=e.index,r.parentKey=i?i.key:null,yield r;return}s=t.renderer(e.value)}if(S.isValidElement(s)){let r=s.type;if(typeof r!="function"&&typeof r.getCollectionNode!="function"){let v=s.type;throw new Error(`Unknown element <${v}> in collection.`)}let h=r.getCollectionNode(s.props,this.context);var c;let f=(c=e.index)!==null&&c!==void 0?c:0,d=h.next();for(;!d.done&&d.value;){let v=d.value;e.index=f;var u;let C=(u=v.key)!==null&&u!==void 0?u:null;C==null&&(C=v.element?null:this.getKey(s,e,t,l));let M=[...this.getFullNode({...v,key:C,index:f,wrapper:P(e.wrapper,v.wrapper)},this.getChildState(t,v),l?`${l}${s.key}`:s.key,i)];for(let m of M){var K,$;m.value=($=(K=v.value)!==null&&K!==void 0?K:e.value)!==null&&$!==void 0?$:null,m.value&&this.cache.set(m.value,m);var b;if(e.type&&m.type!==e.type)throw new Error(`Unsupported type <${E(m.type)}> in <${E((b=i==null?void 0:i.type)!==null&&b!==void 0?b:"unknown parent type")}>. Only <${E(e.type)}> is supported.`);f++,yield m}d=h.next(M)}return}if(e.key==null||e.type==null)return;let x=this;var g,w;let p={type:e.type,props:e.props,key:e.key,parentKey:i?i.key:null,value:(g=e.value)!==null&&g!==void 0?g:null,level:i?i.level+1:0,index:e.index,rendered:e.rendered,textValue:(w=e.textValue)!==null&&w!==void 0?w:"","aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes||!1,childNodes:R(function*(){if(!e.hasChildNodes||!e.childNodes)return;let r=0;for(let h of e.childNodes()){h.key!=null&&(h.key=`${p.key}${h.key}`);let f=x.getFullNode({...h,index:r},x.getChildState(t,h),p.key,p);for(let d of f)r++,yield d}})};yield p}constructor(){this.cache=new WeakMap}}function R(n){let e=[],t=null;return{*[Symbol.iterator](){for(let l of e)yield l;t||(t=n());for(let l of t)e.push(l),yield l}}}function P(n,e){if(n&&e)return t=>n(e(t));if(n)return n;if(e)return e}function E(n){return n[0].toUpperCase()+n.slice(1)}function H(n,e,t){let l=a.useMemo(()=>new V,[]),{children:i,items:o,collection:s}=n;return a.useMemo(()=>{if(s)return s;let u=l.build({children:i,items:o},t);return e(u)},[l,i,o,s,t,e])}class y extends Set{constructor(e,t,l){super(e),e instanceof y?(this.anchorKey=t??e.anchorKey,this.currentKey=l??e.currentKey):(this.anchorKey=t??null,this.currentKey=l??null)}}function T(n,e){if(n.size!==e.size)return!1;for(let t of n)if(!e.has(t))return!1;return!0}function J(n){let{selectionMode:e="none",disallowEmptySelection:t=!1,allowDuplicateSelectionEvents:l,selectionBehavior:i="toggle",disabledBehavior:o="all"}=n,s=a.useRef(!1),[,c]=a.useState(!1),u=a.useRef(null),K=a.useRef(null),[,$]=a.useState(null),b=a.useMemo(()=>F(n.selectedKeys),[n.selectedKeys]),x=a.useMemo(()=>F(n.defaultSelectedKeys,new y),[n.defaultSelectedKeys]),[g,w]=k(b,x,n.onSelectionChange),p=a.useMemo(()=>n.disabledKeys?new Set(n.disabledKeys):new Set,[n.disabledKeys]),[r,h]=a.useState(i);i==="replace"&&r==="toggle"&&typeof g=="object"&&g.size===0&&h("replace");let f=a.useRef(i);return a.useEffect(()=>{i!==f.current&&(h(i),f.current=i)},[i]),{selectionMode:e,disallowEmptySelection:t,selectionBehavior:r,setSelectionBehavior:h,get isFocused(){return s.current},setFocused(d){s.current=d,c(d)},get focusedKey(){return u.current},get childFocusStrategy(){return K.current},setFocusedKey(d,v="first"){u.current=d,K.current=v,$(d)},selectedKeys:g,setSelectedKeys(d){(l||!T(d,g))&&w(d)},disabledKeys:p,disabledBehavior:o}}function F(n,e){return n?n==="all"?"all":new y(n):e}class Q{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys==="all"?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){if(this.state.selectionMode==="none")return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys==="all"?this.canSelectItem(t):this.state.selectedKeys.has(t)}get isEmpty(){return this.state.selectedKeys!=="all"&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys==="all")return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(l=>t.has(l)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let l of this.state.selectedKeys){let i=this.collection.getItem(l);(!e||i&&I(this.collection,i,e)<0)&&(e=i)}var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}get lastSelectedKey(){let e=null;for(let l of this.state.selectedKeys){let i=this.collection.getItem(l);(!e||i&&I(this.collection,i,e)>0)&&(e=i)}var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let l;if(this.state.selectedKeys==="all")l=new y([t],t,t);else{let s=this.state.selectedKeys;var i;let c=(i=s.anchorKey)!==null&&i!==void 0?i:t;l=new y(s,c,t);var o;for(let u of this.getKeyRange(c,(o=s.currentKey)!==null&&o!==void 0?o:t))l.delete(u);for(let u of this.getKeyRange(t,c))this.canSelectItem(u)&&l.add(u)}this.state.setSelectedKeys(l)}getKeyRange(e,t){let l=this.collection.getItem(e),i=this.collection.getItem(t);return l&&i?I(this.collection,l,i)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){var l;if(!((l=this.layoutDelegate)===null||l===void 0)&&l.getKeyRange)return this.layoutDelegate.getKeyRange(e,t);let i=[],o=e;for(;o!=null;){let s=this.collection.getItem(o);if(s&&(s.type==="item"||s.type==="cell"&&this.allowsCellSelection)&&i.push(o),o===t)return i;o=this.collection.getKeyAfter(o)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type==="cell"&&this.allowsCellSelection)return e;for(;t&&t.type!=="item"&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!=="item"?null:t.key}toggleSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let l=new y(this.state.selectedKeys==="all"?this.getSelectAllKeys():this.state.selectedKeys);l.has(t)?l.delete(t):this.canSelectItem(t)&&(l.add(t),l.anchorKey=t,l.currentKey=t),!(this.disallowEmptySelection&&l.size===0)&&this.state.setSelectedKeys(l)}replaceSelection(e){if(this.selectionMode==="none")return;let t=this.getKey(e);if(t==null)return;let l=this.canSelectItem(t)?new y([t],t,t):new y;this.state.setSelectedKeys(l)}setSelectedKeys(e){if(this.selectionMode==="none")return;let t=new y;for(let l of e){let i=this.getKey(l);if(i!=null&&(t.add(i),this.selectionMode==="single"))break}this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=l=>{for(;l!=null;){if(this.canSelectItem(l)){var i;let s=this.collection.getItem(l);(s==null?void 0:s.type)==="item"&&e.push(l);var o;s!=null&&s.hasChildNodes&&(this.allowsCellSelection||s.type!=="item")&&t((o=(i=A(D(s,this.collection)))===null||i===void 0?void 0:i.key)!==null&&o!==void 0?o:null)}l=this.collection.getKeyAfter(l)}};return t(this.collection.getFirstKey()),e}selectAll(){!this.isSelectAll&&this.selectionMode==="multiple"&&this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys==="all"||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new y)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!=="none"&&(this.selectionMode==="single"?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior==="toggle"||t&&(t.pointerType==="touch"||t.pointerType==="virtual")?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let l of t)if(!e.has(l))return!1;return!0}canSelectItem(e){var t;if(this.state.selectionMode==="none"||this.state.disabledKeys.has(e))return!1;let l=this.collection.getItem(e);return!(!l||!(l==null||(t=l.props)===null||t===void 0)&&t.isDisabled||l.type==="cell"&&!this.allowsCellSelection)}isDisabled(e){var t,l;return this.state.disabledBehavior==="all"&&(this.state.disabledKeys.has(e)||!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.isDisabled))}isLink(e){var t,l;return!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.href)}getItemProps(e){var t;return(t=this.collection.getItem(e))===null||t===void 0?void 0:t.props}constructor(e,t,l){this.collection=e,this.state=t;var i;this.allowsCellSelection=(i=l==null?void 0:l.allowsCellSelection)!==null&&i!==void 0?i:!1,this._isSelectAll=null,this.layoutDelegate=(l==null?void 0:l.layoutDelegate)||null}}function B(n){const{collection:e,parent:t}=n;return z({items:t?e.getChildren(t.key):e,children:l=>l.render(l)})}const U={CollectionRenderer:n=>B({...n,parent:null}),CollectionBranchRenderer:n=>B(n)},q=a.createContext(U);function X(){return a.useContext(q)}export{J as $,H as a,Q as b,X as u};
