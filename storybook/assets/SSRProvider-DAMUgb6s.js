import{R as a,r as c}from"./index-DJO9vBfz.js";const u={prefix:String(Math.round(Math.random()*1e10)),current:0},s=a.createContext(u),l=a.createContext(!1);let f=!!(typeof window<"u"&&window.document&&window.document.createElement),d=new WeakMap;function p(t=!1){let e=c.useContext(s),r=c.useRef(null);if(r.current===null&&!t){var n,i;let o=(i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||i===void 0||(n=i.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(o){let $=d.get(o);$==null?d.set(o,{id:e.current,state:o.memoizedState}):o.memoizedState!==$.state&&(e.current=$.id,d.delete(o))}r.current=++e.current}return r.current}function v(t){let e=c.useContext(s);e===u&&!f&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=p(!!t),n=`react-aria${e.prefix}`;return t||`${n}-${r}`}function x(t){let e=a.useId(),[r]=c.useState(w()),n=r?"react-aria":`react-aria${u.prefix}`;return t||`${n}-${e}`}const y=typeof a.useId=="function"?x:v;function b(){return!1}function S(){return!0}function m(t){return()=>{}}function w(){return typeof a.useSyncExternalStore=="function"?a.useSyncExternalStore(m,b,S):c.useContext(l)}export{w as $,y as a};
