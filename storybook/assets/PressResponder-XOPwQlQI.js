import{e as c}from"./usePress-BejIIMCm.js";import{b as d,a as i}from"./useObjectRef-BMBYa31u.js";import{g as b}from"./useFocusable-DDF3Tgcq.js";import{R as f,r as t}from"./index-DmM0KDA7.js";const m=f.forwardRef(({children:o,...a},r)=>{let s=t.useRef(!1),e=t.useContext(c);r=d(r||(e==null?void 0:e.ref));let n=i(e||{},{...a,ref:r,register(){s.current=!0,e&&e.register()}});return b(e,r),t.useEffect(()=>{s.current||(console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."),s.current=!0)},[]),f.createElement(c.Provider,{value:n},o)});function x({children:o}){let a=t.useMemo(()=>({register:()=>{}}),[]);return f.createElement(c.Provider,{value:a},o)}export{m as $,x as a};
