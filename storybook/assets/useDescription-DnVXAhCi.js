import{$ as f}from"./useLayoutEffect-Bj1hLagI.js";import{r as $}from"./index-DJO9vBfz.js";let l=0;const r=new Map;function s(t){let[o,d]=$.useState();return f(()=>{if(!t)return;let e=r.get(t);if(e)d(e.element.id);else{let n=`react-aria-description-${l++}`;d(n);let a=document.createElement("div");a.id=n,a.style.display="none",a.textContent=t,document.body.appendChild(a),e={refCount:0,element:a},r.set(t,e)}return e.refCount++,()=>{e&&--e.refCount===0&&(e.element.remove(),r.delete(t))}},[t]),{"aria-describedby":t?o:void 0}}export{s as $};
