import t from"tiny-emitter";import i from"virtual-scroll";class o extends t{constructor({lerp:t=.1,smooth:o=!0,direction:s="vertical"}={}){var e,l,r;super(),this.onResize=t=>{const i=t[0];if(i){const t=i.contentRect;this.limit="horizontal"===this.direction?t.width-this.windowWidth:t.height-this.windowHeight}},this.onWindowResize=()=>{this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth},this.onVirtualScroll=({deltaY:t,originalEvent:i})=>{var o,s;this.stopped?i.preventDefault():(this.smooth&&!i.ctrlKey&&i.preventDefault(),this.targetScroll-=t,this.targetScroll=(s=this.limit,(o=this.targetScroll)<0?0:o>s?s:o))},this.onScroll=t=>{this.scrolling&&this.smooth||(this.targetScroll=this.scroll="horizontal"===this.direction?window.scrollX:window.scrollY,this.notify())},this.lerp=t,this.smooth=o,this.direction=s,window.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1);const n=(null==(e=navigator)||null==(l=e.userAgentData)?void 0:l.platform)||(null==(r=navigator)?void 0:r.platform)||"unknown";this.virtualScroll=new i({firefoxMultiplier:50,mouseMultiplier:n.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),this.virtualScroll.on(this.onVirtualScroll),this.onWindowResize(),this.limit="horizontal"===this.direction?document.body.offsetWidth-this.windowWidth:document.body.offsetHeight-this.windowHeight,this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(document.body),this.targetScroll=this.scroll="horizontal"===this.direction?window.scrollX:window.scrollY}start(){this.stopped=!1}stop(){this.stopped=!0}destroy(){window.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),this.virtualScroll.destroy(),this.resizeObserver.disconnect()}raf(){var t;this.smooth&&!this.stopped&&(this.scroll=(1-(t=this.lerp))*this.scroll+t*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=this.targetScroll),this.scrolling&&("horizontal"===this.direction?window.scrollTo(this.scroll,0):window.scrollTo(0,this.scroll),this.notify()),this.scrolling=this.scroll!==this.targetScroll)}notify(){this.emit("scroll",{scroll:this.scroll,limit:this.limit})}scrollTo(t,{offset:i=0}={}){let o;if("number"==typeof t)o=t;else if("#top"===t)o=0;else if("#bottom"===t)o=this.limit;else{let i;if("string"==typeof t)i=document.querySelector(t);else{if(null==t||!t.nodeType)return;i=t}if(!t)return;const s=i.getBoundingClientRect();o=("horizontal"===this.direction?s.left:s.top)+this.scroll}o+=i,this.targetScroll=o,this.scrolling=!0,this.smooth||(this.scroll=o)}}export{o as default};
//# sourceMappingURL=lenis.modern.js.map
