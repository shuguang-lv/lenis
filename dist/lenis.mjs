import t from"tiny-emitter";import e from"virtual-scroll";function r(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},i.apply(this,arguments)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function s(t,e,r){return Math.max(t,Math.min(e,r))}var l=["duration","easing"],a=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.to=function(t,e){var r=this,o=void 0===e?{}:e,n=o.duration,s=void 0===n?1:n,a=o.easing,c=void 0===a?function(t){return t}:a,h=function(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)e.indexOf(r=n[o])>=0||(i[r]=t[r]);return i}(o,l);this.target=t,this.fromKeys=i({},h),this.toKeys=i({},h),this.keys=Object.keys(i({},h)),this.keys.forEach(function(e){r.fromKeys[e]=t[e]}),this.duration=s,this.easing=c,this.currentTime=0,this.isRunning=!0},e.raf=function(t){var e=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+.001*t,this.duration);var r=this.easing(this.progress);this.keys.forEach(function(t){var o=e.fromKeys[t];e.target[t]=o+(e.toKeys[t]-o)*r}),1===r&&(this.isRunning=!1)}},o(t,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),t}(),c=/*#__PURE__*/function(t){var r,i;function l(r){var o,i,n,l,c=void 0===r?{}:r,h=c.duration,p=void 0===h?1.2:h,d=c.easing,u=void 0===d?function(t){return 1===t?1:1-Math.pow(2,-10*t)}:d,f=c.smooth,v=void 0===f||f,g=c.direction,w=void 0===g?"vertical":g,y=c.wrapper,m=void 0===y?window:y,S=c.content,b=void 0===S?document.body:S;(l=t.call(this)||this).onWindowResize=function(){l.wrapperWidth=window.innerWidth,l.wrapperHeight=window.innerHeight},l.onWrapperResize=function(t){var e=t[0];if(e){var r=e.contentRect;l.wrapperWidth=r.width,l.wrapperHeight=r.height}},l.onContentResize=function(t){var e=t[0];if(e){var r=e.contentRect;l.contentWidth=r.width,l.contentHeight=r.height}},l.onVirtualScroll=function(t){var e=t.deltaY,r=t.originalEvent;r.ctrlKey||(l.stopped?r.preventDefault():l.smooth&&4!==r.buttons&&(l.smooth&&r.preventDefault(),l.targetScroll-=e,l.targetScroll=s(0,l.targetScroll,l.limit),l.scrollTo(l.targetScroll)))},l.onScroll=function(t){l.isScrolling&&l.smooth&&!l.holdWheelScrolling||(l.targetScroll=l.scroll=l.lastScroll=l.wrapperNode[l.scrollProperty],l.notify())},void 0!==arguments[0].lerp&&console.warn("Lenis: lerp option is deprecated, you must use duration and easing options instead. See documentation https://github.com/studio-freight/lenis"),window.lenisVersion="0.2.3",l.wrapperNode=m,l.contentNode=b,l.duration=p,l.easing=u,l.smooth=v,l.direction=w,l.wrapperNode.addEventListener("scroll",l.onScroll),l.wrapperNode===window?(l.wrapperNode.addEventListener("resize",l.onWindowResize),l.onWindowResize()):(l.wrapperHeight=l.wrapperNode.offsetHeight,l.wrapperWidth=l.wrapperNode.offsetWidth,l.wrapperObserver=new ResizeObserver(l.onWrapperResize),l.wrapperObserver.observe(l.wrapperNode)),l.contentHeight=l.contentNode.offsetHeight,l.contentWidth=l.contentNode.offsetWidth,l.contentObserver=new ResizeObserver(l.onContentResize),l.contentObserver.observe(l.contentNode),l.targetScroll=l.scroll=l.lastScroll=l.wrapperNode[l.scrollProperty],l.animate=new a;var O=(null==(o=navigator)||null==(i=o.userAgentData)?void 0:i.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return l.virtualScroll=new e({el:l.wrapperNode,firefoxMultiplier:50,mouseMultiplier:O.includes("Win")?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),l.virtualScroll.on(l.onVirtualScroll),l}i=t,(r=l).prototype=Object.create(i.prototype),r.prototype.constructor=r,n(r,i);var c=l.prototype;return c.start=function(){this.stopped=!1},c.stop=function(){this.stopped=!0},c.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},c.raf=function(t){var e=t-(this.now||0);this.now=t,this.stopped||!this.smooth||this.holdWheelScrolling||(this.lastScroll=this.scroll,this.animate.raf(e),Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.lastScroll=this.targetScroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},c.setScroll=function(t){"horizontal"===this.direction?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)},c.notify=function(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})},c.scrollTo=function(t,e){var r,o=void 0===e?{}:e,i=o.offset,n=o.immediate,s=void 0!==n&&n,l=o.duration,a=void 0===l?this.duration:l,c=o.easing,h=void 0===c?this.easing:c;r="number"==typeof t?t:0,this.targetScroll=r+=void 0===i?0:i,!this.smooth||s?this.setScroll(this.targetScroll):this.animate.to(this,{duration:a,easing:h,scroll:this.targetScroll})},o(l,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),l}(t);export{c as default};
//# sourceMappingURL=lenis.mjs.map
