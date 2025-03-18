import{_ as K}from"./usePress-BejIIMCm.js";function C(r,e){return r-e*Math.floor(r/e)}const Le=1721426;function w(r,e,t,n){e=k(r,e);let a=e-1,o=-2;return t<=2?o=0:g(e)&&(o=-1),Le-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*t-362)/12+o+n)}function g(r){return r%4===0&&(r%100!==0||r%400===0)}function k(r,e){return r==="BC"?1-e:e}function P(r){let e="AD";return r<=0&&(e="BC",r=1-r),[e,r]}const fr={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class ${fromJulianDay(e){let t=e,n=t-Le,a=Math.floor(n/146097),o=C(n,146097),i=Math.floor(o/36524),c=C(o,36524),s=Math.floor(c/1461),l=C(c,1461),x=Math.floor(l/365),E=a*400+i*100+s*4+x+(i!==4&&x!==4?1:0),[I,D]=P(E),b=t-w(I,D,1,1),X=2;t<w(I,D,3,1)?X=0:g(D)&&(X=1);let be=Math.floor(((b+X)*12+373)/367),sr=t-w(I,D,be,1)+1;return new f(I,D,be,sr)}toJulianDay(e){return w(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return fr[g(e.year)?"leapyear":"standard"][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return g(e.year)?366:365}getYearsInEra(e){return 9999}getEras(){return["BC","AD"]}isInverseEra(e){return e.era==="BC"}balanceDate(e){e.year<=0&&(e.era=e.era==="BC"?"AD":"BC",e.year=1-e.year)}constructor(){this.identifier="gregory"}}const lr={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1};function ur(r,e){return e=h(e,r.calendar),r.era===e.era&&r.year===e.year&&r.month===e.month&&r.day===e.day}function rt(r,e){return r.calendar.identifier===e.calendar.identifier&&r.era===e.era&&r.year===e.year&&r.month===e.month&&r.day===e.day}function tt(r,e){return ur(r,dr(e))}const hr={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};function Qe(r,e,t){let n=r.calendar.toJulianDay(r),a=t?hr[t]:br(e),o=Math.ceil(n+1-a)%7;return o<0&&(o+=7),o}function $r(r){return y(Date.now(),r)}function dr(r){return Dr($r(r))}function ke(r,e){return r.calendar.toJulianDay(r)-e.calendar.toJulianDay(e)}function Fe(r,e){return Me(r)-Me(e)}function Me(r){return r.hour*36e5+r.minute*6e4+r.second*1e3+r.millisecond}let z=null;function Ne(){return z==null&&(z=new Intl.DateTimeFormat().resolvedOptions().timeZone),z}function Oe(r){return r.subtract({days:r.day-1})}function nt(r){return r.add({days:r.calendar.getDaysInMonth(r)-r.day})}function at(r){return Oe(r.subtract({months:r.month-1}))}function ot(r){return r.calendar.getMinimumMonthInYear?r.calendar.getMinimumMonthInYear(r):1}function it(r){return r.calendar.getMinimumDayInMonth?r.calendar.getMinimumDayInMonth(r):1}function yr(r,e,t){let n=Qe(r,e,t);return r.subtract({days:n})}function ct(r,e,t){return yr(r,e,t).add({days:6})}const ge=new Map;function mr(r){if(Intl.Locale){let t=ge.get(r);return t||(t=new Intl.Locale(r).maximize().region,t&&ge.set(r,t)),t}let e=r.split("-")[1];return e==="u"?void 0:e}function br(r){let e=mr(r);return e&&lr[e]||0}function st(r,e,t){let n=r.calendar.getDaysInMonth(r);return Math.ceil((Qe(Oe(r),e,t)+n)/7)}function ft(r,e){return r&&e?r.compare(e)<=0?r:e:r||e}function lt(r,e){return r&&e?r.compare(e)>=0?r:e:r||e}function U(r){r=h(r,new $);let e=k(r.era,r.year);return _e(e,r.month,r.day,r.hour,r.minute,r.second,r.millisecond)}function _e(r,e,t,n,a,o,i){let c=new Date;return c.setUTCHours(n,a,o,i),c.setUTCFullYear(r,e-1,t),c.getTime()}function te(r,e){if(e==="UTC")return 0;if(r>0&&e===Ne())return new Date(r).getTimezoneOffset()*-6e4;let{year:t,month:n,day:a,hour:o,minute:i,second:c}=qe(r,e);return _e(t,n,a,o,i,c,0)-Math.floor(r/1e3)*1e3}const De=new Map;function qe(r,e){let t=De.get(e);t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),De.set(e,t));let n=t.formatToParts(new Date(r)),a={};for(let o of n)o.type!=="literal"&&(a[o.type]=o.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const pe=864e5;function Mr(r,e,t,n){return(t===n?[t]:[t,n]).filter(o=>gr(r,e,o))}function gr(r,e,t){let n=qe(t,e);return r.year===n.year&&r.month===n.month&&r.day===n.day&&r.hour===n.hour&&r.minute===n.minute&&r.second===n.second}function d(r,e,t="compatible"){let n=J(r);if(e==="UTC")return U(n);if(e===Ne()&&t==="compatible"){n=h(n,new $);let s=new Date,l=k(n.era,n.year);return s.setFullYear(l,n.month-1,n.day),s.setHours(n.hour,n.minute,n.second,n.millisecond),s.getTime()}let a=U(n),o=te(a-pe,e),i=te(a+pe,e),c=Mr(n,e,a-o,a-i);if(c.length===1)return c[0];if(c.length>1)switch(t){case"compatible":case"earlier":return c[0];case"later":return c[c.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(t){case"earlier":return Math.min(a-o,a-i);case"compatible":case"later":return Math.max(a-o,a-i);case"reject":throw new RangeError("No such absolute time found")}}function Ze(r,e,t="compatible"){return new Date(d(r,e,t))}function y(r,e){let t=te(r,e),n=new Date(r+t),a=n.getUTCFullYear(),o=n.getUTCMonth()+1,i=n.getUTCDate(),c=n.getUTCHours(),s=n.getUTCMinutes(),l=n.getUTCSeconds(),x=n.getUTCMilliseconds();return new Q(a<1?"BC":"AD",a<1?-a+1:a,o,i,e,t,c,s,l,x)}function Dr(r){return new f(r.calendar,r.era,r.year,r.month,r.day)}function J(r,e){let t=0,n=0,a=0,o=0;if("timeZone"in r)({hour:t,minute:n,second:a,millisecond:o}=r);else if("hour"in r&&!e)return r;return e&&({hour:t,minute:n,second:a,millisecond:o}=e),new Z(r.calendar,r.era,r.year,r.month,r.day,t,n,a,o)}function ut(r){return new $e(r.hour,r.minute,r.second,r.millisecond)}function h(r,e){if(r.calendar.identifier===e.identifier)return r;let t=e.fromJulianDay(r.calendar.toJulianDay(r)),n=r.copy();return n.calendar=e,n.era=t.era,n.year=t.year,n.month=t.month,n.day=t.day,A(n),n}function pr(r,e,t){if(r instanceof Q)return r.timeZone===e?r:Ar(r,e);let n=d(r,e,t);return y(n,e)}function wr(r){let e=U(r)-r.offset;return new Date(e)}function Ar(r,e){let t=U(r)-r.offset;return h(y(t,e),r.calendar)}const B=36e5;function j(r,e){let t=r.copy(),n="hour"in t?He(t,e):0;ne(t,e.years||0),t.calendar.balanceYearMonth&&t.calendar.balanceYearMonth(t,r),t.month+=e.months||0,ae(t),Ve(t),t.day+=(e.weeks||0)*7,t.day+=e.days||0,t.day+=n,xr(t),t.calendar.balanceDate&&t.calendar.balanceDate(t),t.year<1&&(t.year=1,t.month=1,t.day=1);let a=t.calendar.getYearsInEra(t);if(t.year>a){var o,i;let s=(o=(i=t.calendar).isInverseEra)===null||o===void 0?void 0:o.call(i,t);t.year=a,t.month=s?1:t.calendar.getMonthsInYear(t),t.day=s?1:t.calendar.getDaysInMonth(t)}t.month<1&&(t.month=1,t.day=1);let c=t.calendar.getMonthsInYear(t);return t.month>c&&(t.month=c,t.day=t.calendar.getDaysInMonth(t)),t.day=Math.max(1,Math.min(t.calendar.getDaysInMonth(t),t.day)),t}function ne(r,e){var t,n;!((t=(n=r.calendar).isInverseEra)===null||t===void 0)&&t.call(n,r)&&(e=-e),r.year+=e}function ae(r){for(;r.month<1;)ne(r,-1),r.month+=r.calendar.getMonthsInYear(r);let e=0;for(;r.month>(e=r.calendar.getMonthsInYear(r));)r.month-=e,ne(r,1)}function xr(r){for(;r.day<1;)r.month--,ae(r),r.day+=r.calendar.getDaysInMonth(r);for(;r.day>r.calendar.getDaysInMonth(r);)r.day-=r.calendar.getDaysInMonth(r),r.month++,ae(r)}function Ve(r){r.month=Math.max(1,Math.min(r.calendar.getMonthsInYear(r),r.month)),r.day=Math.max(1,Math.min(r.calendar.getDaysInMonth(r),r.day))}function A(r){r.calendar.constrainDate&&r.calendar.constrainDate(r),r.year=Math.max(1,Math.min(r.calendar.getYearsInEra(r),r.year)),Ve(r)}function se(r){let e={};for(let t in r)typeof r[t]=="number"&&(e[t]=-r[t]);return e}function We(r,e){return j(r,se(e))}function fe(r,e){let t=r.copy();return e.era!=null&&(t.era=e.era),e.year!=null&&(t.year=e.year),e.month!=null&&(t.month=e.month),e.day!=null&&(t.day=e.day),A(t),t}function L(r,e){let t=r.copy();return e.hour!=null&&(t.hour=e.hour),e.minute!=null&&(t.minute=e.minute),e.second!=null&&(t.second=e.second),e.millisecond!=null&&(t.millisecond=e.millisecond),Ge(t),t}function Er(r){r.second+=Math.floor(r.millisecond/1e3),r.millisecond=F(r.millisecond,1e3),r.minute+=Math.floor(r.second/60),r.second=F(r.second,60),r.hour+=Math.floor(r.minute/60),r.minute=F(r.minute,60);let e=Math.floor(r.hour/24);return r.hour=F(r.hour,24),e}function Ge(r){r.millisecond=Math.max(0,Math.min(r.millisecond,1e3)),r.second=Math.max(0,Math.min(r.second,59)),r.minute=Math.max(0,Math.min(r.minute,59)),r.hour=Math.max(0,Math.min(r.hour,23))}function F(r,e){let t=r%e;return t<0&&(t+=e),t}function He(r,e){return r.hour+=e.hours||0,r.minute+=e.minutes||0,r.second+=e.seconds||0,r.millisecond+=e.milliseconds||0,Er(r)}function Ke(r,e){let t=r.copy();return He(t,e),t}function Ir(r,e){return Ke(r,se(e))}function le(r,e,t,n){let a=r.copy();switch(e){case"era":{let c=r.calendar.getEras(),s=c.indexOf(r.era);if(s<0)throw new Error("Invalid era: "+r.era);s=m(s,t,0,c.length-1,n==null?void 0:n.round),a.era=c[s],A(a);break}case"year":var o,i;!((o=(i=a.calendar).isInverseEra)===null||o===void 0)&&o.call(i,a)&&(t=-t),a.year=m(r.year,t,-1/0,9999,n==null?void 0:n.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,r);break;case"month":a.month=m(r.month,t,1,r.calendar.getMonthsInYear(r),n==null?void 0:n.round);break;case"day":a.day=m(r.day,t,1,r.calendar.getDaysInMonth(r),n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+e)}return r.calendar.balanceDate&&r.calendar.balanceDate(a),A(a),a}function ue(r,e,t,n){let a=r.copy();switch(e){case"hour":{let o=r.hour,i=0,c=23;if((n==null?void 0:n.hourCycle)===12){let s=o>=12;i=s?12:0,c=s?23:11}a.hour=m(o,t,i,c,n==null?void 0:n.round);break}case"minute":a.minute=m(r.minute,t,0,59,n==null?void 0:n.round);break;case"second":a.second=m(r.second,t,0,59,n==null?void 0:n.round);break;case"millisecond":a.millisecond=m(r.millisecond,t,0,999,n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+e)}return a}function m(r,e,t,n,a=!1){if(a){r+=Math.sign(e),r<t&&(r=n);let o=Math.abs(e);e>0?r=Math.ceil(r/o)*o:r=Math.floor(r/o)*o,r>n&&(r=t)}else r+=e,r<t?r=n-(t-r-1):r>n&&(r=t+(r-n-1));return r}function Pe(r,e){let t;if(e.years!=null&&e.years!==0||e.months!=null&&e.months!==0||e.weeks!=null&&e.weeks!==0||e.days!=null&&e.days!==0){let a=j(J(r),{years:e.years,months:e.months,weeks:e.weeks,days:e.days});t=d(a,r.timeZone)}else t=U(r)-r.offset;t+=e.milliseconds||0,t+=(e.seconds||0)*1e3,t+=(e.minutes||0)*6e4,t+=(e.hours||0)*36e5;let n=y(t,r.timeZone);return h(n,r.calendar)}function vr(r,e){return Pe(r,se(e))}function Cr(r,e,t,n){switch(e){case"hour":{let a=0,o=23;if((n==null?void 0:n.hourCycle)===12){let b=r.hour>=12;a=b?12:0,o=b?23:11}let i=J(r),c=h(L(i,{hour:a}),new $),s=[d(c,r.timeZone,"earlier"),d(c,r.timeZone,"later")].filter(b=>y(b,r.timeZone).day===c.day)[0],l=h(L(i,{hour:o}),new $),x=[d(l,r.timeZone,"earlier"),d(l,r.timeZone,"later")].filter(b=>y(b,r.timeZone).day===l.day).pop(),E=U(r)-r.offset,I=Math.floor(E/B),D=E%B;return E=m(I,t,Math.floor(s/B),Math.floor(x/B),n==null?void 0:n.round)*B+D,h(y(E,r.timeZone),r.calendar)}case"minute":case"second":case"millisecond":return ue(r,e,t,n);case"era":case"year":case"month":case"day":{let a=le(J(r),e,t,n),o=d(a,r.timeZone);return h(y(o,r.timeZone),r.calendar)}default:throw new Error("Unsupported field "+e)}}function Yr(r,e,t){let n=J(r),a=L(fe(n,e),e);if(a.compare(n)===0)return r;let o=d(a,r.timeZone,t);return h(y(o,r.timeZone),r.calendar)}function je(r){return`${String(r.hour).padStart(2,"0")}:${String(r.minute).padStart(2,"0")}:${String(r.second).padStart(2,"0")}${r.millisecond?String(r.millisecond/1e3).slice(1):""}`}function Xe(r){let e=h(r,new $),t;return e.era==="BC"?t=e.year===1?"0000":"-"+String(Math.abs(1-e.year)).padStart(6,"00"):t=String(e.year).padStart(4,"0"),`${t}-${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}`}function ze(r){return`${Xe(r)}T${je(r)}`}function Sr(r){let e=Math.sign(r)<0?"-":"+";r=Math.abs(r);let t=Math.floor(r/36e5),n=r%36e5/6e4;return`${e}${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Ur(r){return`${ze(r)}${Sr(r.offset)}[${r.timeZone}]`}function he(r){let e=typeof r[0]=="object"?r.shift():new $,t;if(typeof r[0]=="string")t=r.shift();else{let i=e.getEras();t=i[i.length-1]}let n=r.shift(),a=r.shift(),o=r.shift();return[e,t,n,a,o]}var Jr=new WeakMap;class f{copy(){return this.era?new f(this.calendar,this.era,this.year,this.month,this.day):new f(this.calendar,this.year,this.month,this.day)}add(e){return j(this,e)}subtract(e){return We(this,e)}set(e){return fe(this,e)}cycle(e,t,n){return le(this,e,t,n)}toDate(e){return Ze(this,e)}toString(){return Xe(this)}compare(e){return ke(this,e)}constructor(...e){K(this,Jr,{writable:!0,value:void 0});let[t,n,a,o,i]=he(e);this.calendar=t,this.era=n,this.year=a,this.month=o,this.day=i,A(this)}}var Br=new WeakMap;class $e{copy(){return new $e(this.hour,this.minute,this.second,this.millisecond)}add(e){return Ke(this,e)}subtract(e){return Ir(this,e)}set(e){return L(this,e)}cycle(e,t,n){return ue(this,e,t,n)}toString(){return je(this)}compare(e){return Fe(this,e)}constructor(e=0,t=0,n=0,a=0){K(this,Br,{writable:!0,value:void 0}),this.hour=e,this.minute=t,this.second=n,this.millisecond=a,Ge(this)}}var Tr=new WeakMap;class Z{copy(){return this.era?new Z(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new Z(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return j(this,e)}subtract(e){return We(this,e)}set(e){return fe(L(this,e),e)}cycle(e,t,n){switch(e){case"era":case"year":case"month":case"day":return le(this,e,t,n);default:return ue(this,e,t,n)}}toDate(e,t){return Ze(this,e,t)}toString(){return ze(this)}compare(e){let t=ke(this,e);return t===0?Fe(this,J(e)):t}constructor(...e){K(this,Tr,{writable:!0,value:void 0});let[t,n,a,o,i]=he(e);this.calendar=t,this.era=n,this.year=a,this.month=o,this.day=i,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,A(this)}}var Rr=new WeakMap;class Q{copy(){return this.era?new Q(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new Q(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return Pe(this,e)}subtract(e){return vr(this,e)}set(e,t){return Yr(this,e,t)}cycle(e,t,n){return Cr(this,e,t,n)}toDate(){return wr(this)}toString(){return Ur(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-pr(e,this.timeZone).toDate().getTime()}constructor(...e){K(this,Rr,{writable:!0,value:void 0});let[t,n,a,o,i]=he(e),c=e.shift(),s=e.shift();this.calendar=t,this.era=n,this.year=a,this.month=o,this.day=i,this.timeZone=c,this.offset=s,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,A(this)}}const Y=[[1868,9,8],[1912,7,30],[1926,12,25],[1989,1,8],[2019,5,1]],Lr=[[1912,7,29],[1926,12,24],[1989,1,7],[2019,4,30]],O=[1867,1911,1925,1988,2018],M=["meiji","taisho","showa","heisei","reiwa"];function we(r){const e=Y.findIndex(([t,n,a])=>r.year<t||r.year===t&&r.month<n||r.year===t&&r.month===n&&r.day<a);return e===-1?Y.length-1:e===0?0:e-1}function ee(r){let e=O[M.indexOf(r.era)];if(!e)throw new Error("Unknown era: "+r.era);return new f(r.year+e,r.month,r.day)}class Qr extends ${fromJulianDay(e){let t=super.fromJulianDay(e),n=we(t);return new f(this,M[n],t.year-O[n],t.month,t.day)}toJulianDay(e){return super.toJulianDay(ee(e))}balanceDate(e){let t=ee(e),n=we(t);M[n]!==e.era&&(e.era=M[n],e.year=t.year-O[n]),this.constrainDate(e)}constrainDate(e){let t=M.indexOf(e.era),n=Lr[t];if(n!=null){let[a,o,i]=n,c=a-O[t];e.year=Math.max(1,Math.min(c,e.year)),e.year===c&&(e.month=Math.min(o,e.month),e.month===o&&(e.day=Math.min(i,e.day)))}if(e.year===1&&t>=0){let[,a,o]=Y[t];e.month=Math.max(a,e.month),e.month===a&&(e.day=Math.max(o,e.day))}}getEras(){return M}getYearsInEra(e){let t=M.indexOf(e.era),n=Y[t],a=Y[t+1];if(a==null)return 9999-n[0]+1;let o=a[0]-n[0];return(e.month<a[1]||e.month===a[1]&&e.day<a[2])&&o++,o}getDaysInMonth(e){return super.getDaysInMonth(ee(e))}getMinimumMonthInYear(e){let t=Ae(e);return t?t[1]:1}getMinimumDayInMonth(e){let t=Ae(e);return t&&e.month===t[1]?t[2]:1}constructor(...e){super(...e),this.identifier="japanese"}}function Ae(r){if(r.year===1){let e=M.indexOf(r.era);return Y[e]}}const er=-543;class kr extends ${fromJulianDay(e){let t=super.fromJulianDay(e),n=k(t.era,t.year);return new f(this,n-er,t.month,t.day)}toJulianDay(e){return super.toJulianDay(xe(e))}getEras(){return["BE"]}getDaysInMonth(e){return super.getDaysInMonth(xe(e))}balanceDate(){}constructor(...e){super(...e),this.identifier="buddhist"}}function xe(r){let[e,t]=P(r.year+er);return new f(e,t,r.month,r.day)}const V=1911;function rr(r){return r.era==="minguo"?r.year+V:1-r.year+V}function Ee(r){let e=r-V;return e>0?["minguo",e]:["before_minguo",1-e]}class Fr extends ${fromJulianDay(e){let t=super.fromJulianDay(e),n=k(t.era,t.year),[a,o]=Ee(n);return new f(this,a,o,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Ie(e))}getEras(){return["before_minguo","minguo"]}balanceDate(e){let[t,n]=Ee(rr(e));e.era=t,e.year=n}isInverseEra(e){return e.era==="before_minguo"}getDaysInMonth(e){return super.getDaysInMonth(Ie(e))}getYearsInEra(e){return e.era==="before_minguo"?9999:9999-V}constructor(...e){super(...e),this.identifier="roc"}}function Ie(r){let[e,t]=P(rr(r));return new f(e,t,r.month,r.day)}const ve=1948320,Ce=[0,31,62,93,124,155,186,216,246,276,306,336];class Nr{fromJulianDay(e){let t=e-ve,n=1+Math.floor((33*t+3)/12053),a=365*(n-1)+Math.floor((8*n+21)/33),o=t-a,i=o<216?Math.floor(o/31):Math.floor((o-6)/30),c=o-Ce[i]+1;return new f(this,n,i+1,c)}toJulianDay(e){let t=ve-1+365*(e.year-1)+Math.floor((8*e.year+21)/33);return t+=Ce[e.month-1],t+=e.day,t}getMonthsInYear(){return 12}getDaysInMonth(e){return e.month<=6?31:e.month<=11||C(25*e.year+11,33)<8?30:29}getEras(){return["AP"]}getYearsInEra(){return 9377}constructor(){this.identifier="persian"}}const re=78,Ye=80;class Or extends ${fromJulianDay(e){let t=super.fromJulianDay(e),n=t.year-re,a=e-w(t.era,t.year,1,1),o;a<Ye?(n--,o=g(t.year-1)?31:30,a+=o+155+90+10):(o=g(t.year)?31:30,a-=Ye);let i,c;if(a<o)i=1,c=a+1;else{let s=a-o;s<155?(i=Math.floor(s/31)+2,c=s%31+1):(s-=155,i=Math.floor(s/30)+7,c=s%30+1)}return new f(this,n,i,c)}toJulianDay(e){let t=e.year+re,[n,a]=P(t),o,i;return g(a)?(o=31,i=w(n,a,3,21)):(o=30,i=w(n,a,3,22)),e.month===1?i+e.day-1:(i+=o+Math.min(e.month-2,5)*31,e.month>=8&&(i+=(e.month-7)*30),i+=e.day-1,i)}getDaysInMonth(e){return e.month===1&&g(e.year+re)||e.month>=2&&e.month<=6?31:30}getYearsInEra(){return 9919}getEras(){return["saka"]}balanceDate(){}constructor(...e){super(...e),this.identifier="indian"}}const W=1948440,Se=1948439,u=1300,v=1600,_r=460322;function G(r,e,t,n){return n+Math.ceil(29.5*(t-1))+(e-1)*354+Math.floor((3+11*e)/30)+r-1}function tr(r,e,t){let n=Math.floor((30*(t-e)+10646)/10631),a=Math.min(12,Math.ceil((t-(29+G(e,n,1,1)))/29.5)+1),o=t-G(e,n,a,1)+1;return new f(r,n,a,o)}function Ue(r){return(14+11*r)%30<11}class de{fromJulianDay(e){return tr(this,W,e)}toJulianDay(e){return G(W,e.year,e.month,e.day)}getDaysInMonth(e){let t=29+e.month%2;return e.month===12&&Ue(e.year)&&t++,t}getMonthsInYear(){return 12}getDaysInYear(e){return Ue(e.year)?355:354}getYearsInEra(){return 9665}getEras(){return["AH"]}constructor(){this.identifier="islamic-civil"}}class qr extends de{fromJulianDay(e){return tr(this,Se,e)}toJulianDay(e){return G(Se,e.year,e.month,e.day)}constructor(...e){super(...e),this.identifier="islamic-tbla"}}const Zr="qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";let oe,S;function _(r){return _r+S[r-u]}function T(r,e){let t=r-u,n=1<<11-(e-1);return(oe[t]&n)===0?29:30}function Je(r,e){let t=_(r);for(let n=1;n<e;n++)t+=T(r,n);return t}function Be(r){return S[r+1-u]-S[r-u]}class Vr extends de{fromJulianDay(e){let t=e-W,n=_(u),a=_(v);if(t<n||t>a)return super.fromJulianDay(e);{let o=u-1,i=1,c=1;for(;c>0;){o++,c=t-_(o)+1;let s=Be(o);if(c===s){i=12;break}else if(c<s){let l=T(o,i);for(i=1;c>l;)c-=l,i++,l=T(o,i);break}}return new f(this,o,i,t-Je(o,i)+1)}}toJulianDay(e){return e.year<u||e.year>v?super.toJulianDay(e):W+Je(e.year,e.month)+(e.day-1)}getDaysInMonth(e){return e.year<u||e.year>v?super.getDaysInMonth(e):T(e.year,e.month)}getDaysInYear(e){return e.year<u||e.year>v?super.getDaysInYear(e):Be(e.year)}constructor(){if(super(),this.identifier="islamic-umalqura",oe||(oe=new Uint16Array(Uint8Array.from(atob(Zr),e=>e.charCodeAt(0)).buffer)),!S){S=new Uint32Array(v-u+1);let e=0;for(let t=u;t<=v;t++){S[t-u]=e;for(let n=1;n<=12;n++)e+=T(t,n)}}}}const Te=347997,nr=1080,ar=24*nr,Wr=29,Gr=12*nr+793,Hr=Wr*ar+Gr;function p(r){return C(r*7+1,19)<7}function q(r){let e=Math.floor((235*r-234)/19),t=12084+13753*e,n=e*29+Math.floor(t/25920);return C(3*(n+1),7)<3&&(n+=1),n}function Kr(r){let e=q(r-1),t=q(r);return q(r+1)-t===356?2:t-e===382?1:0}function R(r){return q(r)+Kr(r)}function or(r){return R(r+1)-R(r)}function Pr(r){let e=or(r);switch(e>380&&(e-=30),e){case 353:return 0;case 354:return 1;case 355:return 2}}function N(r,e){if(e>=6&&!p(r)&&e++,e===4||e===7||e===9||e===11||e===13)return 29;let t=Pr(r);return e===2?t===2?30:29:e===3?t===0?29:30:e===6?p(r)?30:0:30}class jr{fromJulianDay(e){let t=e-Te,n=t*ar/Hr,a=Math.floor((19*n+234)/235)+1,o=R(a),i=Math.floor(t-o);for(;i<1;)a--,o=R(a),i=Math.floor(t-o);let c=1,s=0;for(;s<i;)s+=N(a,c),c++;c--,s-=N(a,c);let l=i-s;return new f(this,a,c,l)}toJulianDay(e){let t=R(e.year);for(let n=1;n<e.month;n++)t+=N(e.year,n);return t+e.day+Te}getDaysInMonth(e){return N(e.year,e.month)}getMonthsInYear(e){return p(e.year)?13:12}getDaysInYear(e){return or(e.year)}getYearsInEra(){return 9999}getEras(){return["AM"]}balanceYearMonth(e,t){t.year!==e.year&&(p(t.year)&&!p(e.year)&&t.month>6?e.month--:!p(t.year)&&p(e.year)&&t.month>6&&e.month++)}constructor(){this.identifier="hebrew"}}const ie=1723856,Re=1824665,ce=5500;function H(r,e,t,n){return r+365*e+Math.floor(e/4)+30*(t-1)+n-1}function ye(r,e){let t=Math.floor(4*(e-r)/1461),n=1+Math.floor((e-H(r,t,1,1))/30),a=e+1-H(r,t,n,1);return[t,n,a]}function ir(r){return Math.floor(r%4/3)}function cr(r,e){return e%13!==0?30:ir(r)+5}class me{fromJulianDay(e){let[t,n,a]=ye(ie,e),o="AM";return t<=0&&(o="AA",t+=ce),new f(this,o,t,n,a)}toJulianDay(e){let t=e.year;return e.era==="AA"&&(t-=ce),H(ie,t,e.month,e.day)}getDaysInMonth(e){return cr(e.year,e.month)}getMonthsInYear(){return 13}getDaysInYear(e){return 365+ir(e.year)}getYearsInEra(e){return e.era==="AA"?9999:9991}getEras(){return["AA","AM"]}constructor(){this.identifier="ethiopic"}}class Xr extends me{fromJulianDay(e){let[t,n,a]=ye(ie,e);return t+=ce,new f(this,"AA",t,n,a)}getEras(){return["AA"]}getYearsInEra(){return 9999}constructor(...e){super(...e),this.identifier="ethioaa"}}class zr extends me{fromJulianDay(e){let[t,n,a]=ye(Re,e),o="CE";return t<=0&&(o="BCE",t=1-t),new f(this,o,t,n,a)}toJulianDay(e){let t=e.year;return e.era==="BCE"&&(t=1-t),H(Re,t,e.month,e.day)}getDaysInMonth(e){let t=e.year;return e.era==="BCE"&&(t=1-t),cr(t,e.month)}isInverseEra(e){return e.era==="BCE"}balanceDate(e){e.year<=0&&(e.era=e.era==="BCE"?"CE":"BCE",e.year=1-e.year)}getEras(){return["BCE","CE"]}getYearsInEra(e){return e.era==="BCE"?9999:9715}constructor(...e){super(...e),this.identifier="coptic"}}function ht(r){switch(r){case"buddhist":return new kr;case"ethiopic":return new me;case"ethioaa":return new Xr;case"coptic":return new zr;case"hebrew":return new jr;case"indian":return new Or;case"islamic-civil":return new de;case"islamic-tbla":return new qr;case"islamic-umalqura":return new Vr;case"japanese":return new Qr;case"persian":return new Nr;case"roc":return new Fr;case"gregory":default:return new $}}export{dr as $,Ne as a,$r as b,$e as c,pr as d,ut as e,$ as f,J as g,Dr as h,lt as i,ft as j,at as k,Oe as l,yr as m,h as n,Qe as o,ur as p,ct as q,nt as r,rt as s,tt as t,st as u,ht as v,it as w,ot as x,f as y};
