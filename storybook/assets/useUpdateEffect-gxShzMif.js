import{r as t}from"./index-DmM0KDA7.js";function a(u,e){const r=t.useRef(!0),f=t.useRef(null);t.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),t.useEffect(()=>{let s=f.current;r.current?r.current=!1:(!s||e.some((c,n)=>!Object.is(c,s[n])))&&u(),f.current=e},e)}export{a as $};
