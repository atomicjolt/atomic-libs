import{$}from"./context-BQ3_Es2z.js";import{r as b}from"./index-DJO9vBfz.js";const g=Symbol.for("react-aria.i18n.locale"),h=Symbol.for("react-aria.i18n.strings");let i;class c{getStringForLocale(e,t){let a=this.getStringsForLocale(t)[e];if(!a)throw new Error(`Could not find intl message ${e} in ${t} locale`);return a}getStringsForLocale(e){let t=this.strings[e];return t||(t=p(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if(typeof window>"u")return null;let t=window[g];if(i===void 0){let a=window[h];if(!a)return null;i={};for(let o in a)i[o]=new c({[t]:a[o]},t)}let r=i==null?void 0:i[e];if(!r)throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return r}constructor(e,t="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter(([,r])=>r)),this.defaultLocale=t}}function p(n,e,t="en-US"){if(e[n])return e[n];let r=w(n);if(e[r])return e[r];for(let a in e)if(a.startsWith(r+"-"))return e[a];return e[t]}function w(n){return Intl.Locale?new Intl.Locale(n).language:n.split("-")[0]}const s=new Map,f=new Map;class m{format(e,t){let r=this.strings.getStringForLocale(e,this.locale);return typeof r=="function"?r(t,this):r}plural(e,t,r="cardinal"){let a=t["="+e];if(a)return typeof a=="function"?a():a;let o=this.locale+":"+r,l=s.get(o);l||(l=new Intl.PluralRules(this.locale,{type:r}),s.set(o,l));let d=l.select(e);return a=t[d]||t.other,typeof a=="function"?a():a}number(e){let t=f.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),f.set(this.locale,t)),t.format(e)}select(e,t){let r=e[t]||e.other;return typeof r=="function"?r():r}constructor(e,t){this.locale=e,this.strings=t}}const u=new WeakMap;function y(n){let e=u.get(n);return e||(e=new c(n),u.set(n,e)),e}function S(n,e){return e&&c.getGlobalDictionaryForPackage(e)||y(n)}function F(n,e){let{locale:t}=$(),r=S(n,e);return b.useMemo(()=>new m(t,r),[t,r])}export{F as $,c as a,m as b,S as c};
