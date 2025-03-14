import{$ as ye}from"./NumberFormatter-DNR9MAW-.js";import{a as he,$ as ge}from"./LiveAnnouncer-CeCcBDbP.js";import{r as D}from"./index-DmM0KDA7.js";import{d as xe}from"./usePress-Cxy0og0d.js";import{d as I}from"./useObjectRef-BO7mrmvR.js";import{$ as ve}from"./useLocalizedStringFormatter-BJB32GAh.js";const Ee=new RegExp("^.*\\(.*\\).*$"),Pe=["latn","arab","hanidec","deva","beng"];class Se{parse(e){return T(this.locale,this.options,e).parse(e)}isValidPartialNumber(e,t,r){return T(this.locale,this.options,e).isValidPartialNumber(e,t,r)}getNumberingSystem(e){return T(this.locale,this.options,e).options.numberingSystem}constructor(e,t={}){this.locale=e,this.options=t}}const V=new Map;function T(i,e,t){let r=A(i,e);if(!i.includes("-nu-")&&!r.isValidPartialNumber(t)){for(let n of Pe)if(n!==r.options.numberingSystem){let o=A(i+(i.includes("-u-")?"-nu-":"-u-nu-")+n,e);if(o.isValidPartialNumber(t))return o}}return r}function A(i,e){let t=i+(e?Object.entries(e).sort((n,o)=>n[0]<o[0]?-1:1).join():""),r=V.get(t);return r||(r=new De(i,e),V.set(t,r)),r}class De{parse(e){let t=this.sanitize(e);if(this.symbols.group&&(t=N(t,this.symbols.group,"")),this.symbols.decimal&&(t=t.replace(this.symbols.decimal,".")),this.symbols.minusSign&&(t=t.replace(this.symbols.minusSign,"-")),t=t.replace(this.symbols.numeral,this.symbols.index),this.options.style==="percent"){let m=t.indexOf("-");t=t.replace("-","");let l=t.indexOf(".");l===-1&&(l=t.length),t=t.replace(".",""),l-2===0?t=`0.${t}`:l-2===-1?t=`0.0${t}`:l-2===-2?t="0.00":t=`${t.slice(0,l-2)}.${t.slice(l-2)}`,m>-1&&(t=`-${t}`)}let r=t?+t:NaN;if(isNaN(r))return NaN;if(this.options.style==="percent"){var n,o;let m={...this.options,style:"decimal",minimumFractionDigits:Math.min(((n=this.options.minimumFractionDigits)!==null&&n!==void 0?n:0)+2,20),maximumFractionDigits:Math.min(((o=this.options.maximumFractionDigits)!==null&&o!==void 0?o:0)+2,20)};return new Se(this.locale,m).parse(new ye(this.locale,m).format(r))}return this.options.currencySign==="accounting"&&Ee.test(e)&&(r=-1*r),r}sanitize(e){return e=e.replace(this.symbols.literals,""),this.symbols.minusSign&&(e=e.replace("-",this.symbols.minusSign)),this.options.numberingSystem==="arab"&&(this.symbols.decimal&&(e=e.replace(",",this.symbols.decimal),e=e.replace("،",this.symbols.decimal)),this.symbols.group&&(e=N(e,".",this.symbols.group))),this.options.locale==="fr-FR"&&(e=N(e,"."," ")),e}isValidPartialNumber(e,t=-1/0,r=1/0){return e=this.sanitize(e),this.symbols.minusSign&&e.startsWith(this.symbols.minusSign)&&t<0?e=e.slice(this.symbols.minusSign.length):this.symbols.plusSign&&e.startsWith(this.symbols.plusSign)&&r>0&&(e=e.slice(this.symbols.plusSign.length)),this.symbols.group&&e.startsWith(this.symbols.group)||this.symbols.decimal&&e.indexOf(this.symbols.decimal)>-1&&this.options.maximumFractionDigits===0?!1:(this.symbols.group&&(e=N(e,this.symbols.group,"")),e=e.replace(this.symbols.numeral,""),this.symbols.decimal&&(e=e.replace(this.symbols.decimal,"")),e.length===0)}constructor(e,t={}){this.locale=e,this.formatter=new Intl.NumberFormat(e,t),this.options=this.formatter.resolvedOptions(),this.symbols=we(e,this.formatter,this.options,t);var r,n;this.options.style==="percent"&&(((r=this.options.minimumFractionDigits)!==null&&r!==void 0?r:0)>18||((n=this.options.maximumFractionDigits)!==null&&n!==void 0?n:0)>18)&&console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.")}}const B=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]),Ne=[0,4,2,1,11,20,3,7,100,21,.1,1.1];function we(i,e,t,r){var n,o,m,l;let h=new Intl.NumberFormat(i,{...t,minimumSignificantDigits:1,maximumSignificantDigits:21,roundingIncrement:1,roundingPriority:"auto",roundingMode:"halfExpand"}),u=h.formatToParts(-10000.111),$=h.formatToParts(10000.111),c=Ne.map(a=>h.formatToParts(a));var d;let b=(d=(n=u.find(a=>a.type==="minusSign"))===null||n===void 0?void 0:n.value)!==null&&d!==void 0?d:"-",p=(o=$.find(a=>a.type==="plusSign"))===null||o===void 0?void 0:o.value;!p&&((r==null?void 0:r.signDisplay)==="exceptZero"||(r==null?void 0:r.signDisplay)==="always")&&(p="+");let f=(m=new Intl.NumberFormat(i,{...t,minimumFractionDigits:2,maximumFractionDigits:2}).formatToParts(.001).find(a=>a.type==="decimal"))===null||m===void 0?void 0:m.value,w=(l=u.find(a=>a.type==="group"))===null||l===void 0?void 0:l.value,g=u.filter(a=>!B.has(a.type)).map(a=>C(a.value)),x=c.flatMap(a=>a.filter(s=>!B.has(s.type)).map(s=>C(s.value))),y=[...new Set([...g,...x])].sort((a,s)=>s.length-a.length),v=y.length===0?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${y.join("|")}|[\\p{White_Space}]`,"gu"),E=[...new Intl.NumberFormat(t.locale,{useGrouping:!1}).format(9876543210)].reverse(),P=new Map(E.map((a,s)=>[a,s])),S=new RegExp(`[${E.join("")}]`,"g");return{minusSign:b,plusSign:p,decimal:f,group:w,literals:v,numeral:S,index:a=>String(P.get(a))}}function N(i,e,t){return i.replaceAll?i.replaceAll(e,t):i.split(e).join(t)}function C(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var L={};L={Empty:"فارغ"};var M={};M={Empty:"Изпразни"};var z={};z={Empty:"Prázdné"};var _={};_={Empty:"Tom"};var k={};k={Empty:"Leer"};var G={};G={Empty:"Άδειο"};var K={};K={Empty:"Empty"};var U={};U={Empty:"Vacío"};var j={};j={Empty:"Tühjenda"};var W={};W={Empty:"Tyhjä"};var q={};q={Empty:"Vide"};var H={};H={Empty:"ריק"};var O={};O={Empty:"Prazno"};var Y={};Y={Empty:"Üres"};var Z={};Z={Empty:"Vuoto"};var J={};J={Empty:"空"};var X={};X={Empty:"비어 있음"};var Q={};Q={Empty:"Tuščias"};var ee={};ee={Empty:"Tukšs"};var te={};te={Empty:"Tom"};var re={};re={Empty:"Leeg"};var ie={};ie={Empty:"Pusty"};var se={};se={Empty:"Vazio"};var ae={};ae={Empty:"Vazio"};var ne={};ne={Empty:"Gol"};var oe={};oe={Empty:"Не заполнено"};var le={};le={Empty:"Prázdne"};var ue={};ue={Empty:"Prazen"};var me={};me={Empty:"Prazno"};var ce={};ce={Empty:"Tomt"};var de={};de={Empty:"Boş"};var pe={};pe={Empty:"Пусто"};var fe={};fe={Empty:"空"};var $e={};$e={Empty:"空白"};var be={};be={"ar-AE":L,"bg-BG":M,"cs-CZ":z,"da-DK":_,"de-DE":k,"el-GR":G,"en-US":K,"es-ES":U,"et-EE":j,"fi-FI":W,"fr-FR":q,"he-IL":H,"hr-HR":O,"hu-HU":Y,"it-IT":Z,"ja-JP":J,"ko-KR":X,"lt-LT":Q,"lv-LV":ee,"nb-NO":te,"nl-NL":re,"pl-PL":ie,"pt-BR":se,"pt-PT":ae,"ro-RO":ne,"ru-RU":oe,"sk-SK":le,"sl-SI":ue,"sr-SP":me,"sv-SE":ce,"tr-TR":de,"uk-UA":pe,"zh-CN":fe,"zh-TW":$e};function Fe(i){return i&&i.__esModule?i.default:i}function Ce(i){const e=D.useRef(void 0);let{value:t,textValue:r,minValue:n,maxValue:o,isDisabled:m,isReadOnly:l,isRequired:h,onIncrement:u,onIncrementPage:$,onDecrement:c,onDecrementPage:d,onDecrementToMin:b,onIncrementToMax:p}=i;const R=ve(Fe(be),"@react-aria/spinbutton"),f=()=>clearTimeout(e.current);D.useEffect(()=>()=>f(),[]);let w=s=>{if(!(s.ctrlKey||s.metaKey||s.shiftKey||s.altKey||l))switch(s.key){case"PageUp":if($){s.preventDefault(),$==null||$();break}case"ArrowUp":case"Up":u&&(s.preventDefault(),u==null||u());break;case"PageDown":if(d){s.preventDefault(),d==null||d();break}case"ArrowDown":case"Down":c&&(s.preventDefault(),c==null||c());break;case"Home":b&&(s.preventDefault(),b==null||b());break;case"End":p&&(s.preventDefault(),p==null||p());break}},g=D.useRef(!1),x=()=>{g.current=!0},y=()=>{g.current=!1},v=r===""?R.format("Empty"):(r||`${t}`).replace("-","−");D.useEffect(()=>{g.current&&(he("assertive"),ge(v,"assertive"))},[v]);const E=I(s=>{f(),u==null||u(),e.current=window.setTimeout(()=>{(o===void 0||isNaN(o)||t===void 0||isNaN(t)||t<o)&&E(60)},s)}),P=I(s=>{f(),c==null||c(),e.current=window.setTimeout(()=>{(n===void 0||isNaN(n)||t===void 0||isNaN(t)||t>n)&&P(60)},s)});let S=s=>{s.preventDefault()},{addGlobalListener:F,removeAllGlobalListeners:a}=xe();return{spinButtonProps:{role:"spinbutton","aria-valuenow":t!==void 0&&!isNaN(t)?t:void 0,"aria-valuetext":v,"aria-valuemin":n,"aria-valuemax":o,"aria-disabled":m||void 0,"aria-readonly":l||void 0,"aria-required":h||void 0,onKeyDown:w,onFocus:x,onBlur:y},incrementButtonProps:{onPressStart:()=>{E(400),F(window,"contextmenu",S)},onPressEnd:()=>{f(),a()},onFocus:x,onBlur:y},decrementButtonProps:{onPressStart:()=>{P(400),F(window,"contextmenu",S)},onPressEnd:()=>{f(),a()},onFocus:x,onBlur:y}}}export{Se as $,Ce as a};
