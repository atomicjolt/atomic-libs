import{$}from"./context-BQ3_Es2z.js";let t=new Map;function b(a){let{locale:r}=$(),e=r+(a?Object.entries(a).sort((f,l)=>f[0]<l[0]?-1:1).join():"");if(t.has(e))return t.get(e);let c=new Intl.Collator(r,a);return t.set(e,c),c}export{b as $};
