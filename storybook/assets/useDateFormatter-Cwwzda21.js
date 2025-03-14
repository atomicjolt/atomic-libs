import{$ as h}from"./context-BF7eBGFA.js";import{r as s}from"./index-DmM0KDA7.js";function d(r,e){let t=s.useRef(null);return r&&t.current&&e(r,t.current)&&(r=t.current),t.current=r,r}let u=new Map;class m{format(e){return this.formatter.format(e)}formatToParts(e){return this.formatter.formatToParts(e)}formatRange(e,t){if(typeof this.formatter.formatRange=="function")return this.formatter.formatRange(e,t);if(t<e)throw new RangeError("End date must be >= start date");return`${this.formatter.format(e)} – ${this.formatter.format(t)}`}formatRangeToParts(e,t){if(typeof this.formatter.formatRangeToParts=="function")return this.formatter.formatRangeToParts(e,t);if(t<e)throw new RangeError("End date must be >= start date");let o=this.formatter.formatToParts(e),a=this.formatter.formatToParts(t);return[...o.map(f=>({...f,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(f=>({...f,source:"endRange"}))]}resolvedOptions(){let e=this.formatter.resolvedOptions();return y()&&(this.resolvedHourCycle||(this.resolvedHourCycle=b(e.locale,this.options)),e.hourCycle=this.resolvedHourCycle,e.hour12=this.resolvedHourCycle==="h11"||this.resolvedHourCycle==="h12"),e.calendar==="ethiopic-amete-alem"&&(e.calendar="ethioaa"),e}constructor(e,t={}){this.formatter=i(e,t),this.options=t}}const c={true:{ja:"h11"},false:{}};function i(r,e={}){if(typeof e.hour12=="boolean"&&$()){e={...e};let a=c[String(e.hour12)][r.split("-")[0]],f=e.hour12?"h12":"h23";e.hourCycle=a??f,delete e.hour12}let t=r+(e?Object.entries(e).sort((a,f)=>a[0]<f[0]?-1:1).join():"");if(u.has(t))return u.get(t);let o=new Intl.DateTimeFormat(r,e);return u.set(t,o),o}let n=null;function $(){return n==null&&(n=new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0))==="24"),n}let l=null;function y(){return l==null&&(l=new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle==="h12"),l}function b(r,e){if(!e.timeStyle&&!e.hour)return;r=r.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,""),r+=(r.includes("-u-")?"":"-u")+"-nu-latn";let t=i(r,{...e,timeZone:void 0}),o=parseInt(t.formatToParts(new Date(2020,2,3,0)).find(f=>f.type==="hour").value,10),a=parseInt(t.formatToParts(new Date(2020,2,3,23)).find(f=>f.type==="hour").value,10);if(o===0&&a===23)return"h23";if(o===24&&a===23)return"h24";if(o===0&&a===11)return"h11";if(o===12&&a===11)return"h12";throw new Error("Unexpected hour cycle result")}function C(r){r=d(r??{},g);let{locale:e}=h();return s.useMemo(()=>new m(e,r),[e,r])}function g(r,e){if(r===e)return!0;let t=Object.keys(r),o=Object.keys(e);if(t.length!==o.length)return!1;for(let a of t)if(e[a]!==r[a])return!1;return!0}export{C as $,m as a,d as b};
