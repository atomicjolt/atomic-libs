class c{getItemRect(t){let e=this.ref.current,i=t!=null?e.querySelector(`[data-key="${CSS.escape(t.toString())}"]`):null;if(!i)return null;let l=e.getBoundingClientRect(),r=i.getBoundingClientRect();return{x:r.left-l.left+e.scrollLeft,y:r.top-l.top+e.scrollTop,width:r.width,height:r.height}}getContentSize(){let t=this.ref.current;return{width:t.scrollWidth,height:t.scrollHeight}}getVisibleRect(){let t=this.ref.current;return{x:t.scrollLeft,y:t.scrollTop,width:t.offsetWidth,height:t.offsetHeight}}constructor(t){this.ref=t}}export{c as $};
