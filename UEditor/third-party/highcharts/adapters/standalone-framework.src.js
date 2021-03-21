/*! For license information please see standalone-framework.src.js.LICENSE.txt */
var HighchartsAdapter=function(){var t,e,n=document,i=[],r=[];function s(t){function e(t,e,n){t.removeEventListener(e,n,!1)}function n(t,e,n){n=t.HCProxiedMethods[n.toString()],t.detachEvent("on"+e,n)}function i(t,i){var r,s,a,o,h=t.HCEvents;if(t.removeEventListener)r=e;else{if(!t.attachEvent)return;r=n}for(o in i?(s={})[i]=!0:s=h,s)if(h[o])for(a=h[o].length;a--;)r(t,o,h[o][a])}return t.HCExtended||Highcharts.extend(t,{HCExtended:!0,HCEvents:{},bind:function(t,e){var n,i=this,r=this.HCEvents;i.addEventListener?i.addEventListener(t,e,!1):i.attachEvent&&(n=function(t){e.call(i,t)},i.HCProxiedMethods||(i.HCProxiedMethods={}),i.HCProxiedMethods[e.toString()]=n,i.attachEvent("on"+t,n)),void 0===r[t]&&(r[t]=[]),r[t].push(e)},unbind:function(t,r){var s,a;t?(s=this.HCEvents[t]||[],r?((a=HighchartsAdapter.inArray(r,s))>-1&&(s.splice(a,1),this.HCEvents[t]=s),this.removeEventListener?e(this,t,r):this.attachEvent&&n(this,t,r)):(i(this,t),this.HCEvents[t]=[])):(i(this),this.HCEvents={})},trigger:function(t,e){var n,i,r,s=this.HCEvents[t]||[],a=s.length;for(i=function(){e.defaultPrevented=!0},n=0;n<a;n++){if(r=s[n],e.stopped)return;e.preventDefault=i,e.target=this,e.type=t,!1===r.call(this,e)&&e.preventDefault()}}}),t}return Math.easeInOutSine=function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e},{init:function(i){n.defaultView||(this._getStyle=function(t,e){var n;return t.style[e]?t.style[e]:("opacity"===e&&(e="filter"),n=t.currentStyle[e.replace(/\-(\w)/g,(function(t,e){return e.toUpperCase()}))],"filter"===e&&(n=n.replace(/alpha\(opacity=([0-9]+)\)/,(function(t,e){return e/100}))),""===n?1:n)},this.adapterRun=function(t,e){var n={width:"clientWidth",height:"clientHeight"}[e];if(n)return t.style.zoom=1,t[n]-2*parseInt(HighchartsAdapter._getStyle(t,"padding"),10)}),Array.prototype.forEach||(this.each=function(t,e){for(var n=0,i=t.length;n<i;n++)if(!1===e.call(t[n],t[n],n,t))return n}),Array.prototype.indexOf||(this.inArray=function(t,e){var n,i=0;if(e)for(n=e.length;i<n;i++)if(e[i]===t)return i;return-1}),Array.prototype.filter||(this.grep=function(t,e){for(var n=[],i=0,r=t.length;i<r;i++)e(t[i],i)&&n.push(t[i]);return n}),(e=function(t,e,n){this.options=e,this.elem=t,this.prop=n}).prototype={update:function(){var t,e=this.paths,n=this.elem,r=n.element;e&&r?n.attr("d",i.step(e[0],e[1],this.now,this.toD)):n.attr?r&&n.attr(this.prop,this.now):((t={})[n]=this.now+this.unit,Highcharts.css(n,t)),this.options.step&&this.options.step.call(this.elem,this.now,this)},custom:function(e,n,i){var s,a=this,o=function(t){return a.step(t)};this.startTime=+new Date,this.start=e,this.end=n,this.unit=i,this.now=this.start,this.pos=this.state=0,o.elem=this.elem,o()&&1===r.push(o)&&(t=setInterval((function(){for(s=0;s<r.length;s++)r[s]()||r.splice(s--,1);r.length||clearInterval(t)}),13))},step:function(t){var e,n,i,r=+new Date,s=this.options;if(this.elem.stopAnimation)e=!1;else if(t||r>=s.duration+this.startTime){for(i in this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0,n=!0,s.curAnim)!0!==s.curAnim[i]&&(n=!1);n&&s.complete&&s.complete.call(this.elem),e=!1}else{var a=r-this.startTime;this.state=a/s.duration,this.pos=s.easing(a,0,1,s.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update(),e=!0}return e}},this.animate=function(t,n,r){var s,a,o,h,u,c="";for(u in t.stopAnimation=!1,"object"==typeof r&&null!==r||(r={duration:(h=arguments)[2],easing:h[3],complete:h[4]}),"number"!=typeof r.duration&&(r.duration=400),r.easing=Math[r.easing]||Math.easeInOutSine,r.curAnim=Highcharts.extend({},n),n)o=new e(t,r,u),a=null,"d"===u?(o.paths=i.init(t,t.d,n.d),o.toD=n.d,s=0,a=1):t.attr?s=t.attr(u):(s=parseFloat(HighchartsAdapter._getStyle(t,u))||0,"opacity"!==u&&(c="px")),a||(a=parseFloat(n[u])),o.custom(s,a,c)}},_getStyle:function(t,e){return window.getComputedStyle(t).getPropertyValue(e)},getScript:function(t,e){var i=n.getElementsByTagName("head")[0],r=n.createElement("script");r.type="text/javascript",r.src=t,r.onload=e,i.appendChild(r)},inArray:function(t,e){return e.indexOf?e.indexOf(t):i.indexOf.call(e,t)},adapterRun:function(t,e){return parseInt(HighchartsAdapter._getStyle(t,e),10)},grep:function(t,e){return i.filter.call(t,e)},map:function(t,e){for(var n=[],i=0,r=t.length;i<r;i++)n[i]=e.call(t[i],t[i],i,t);return n},offset:function(t){for(var e=0,n=0;t;)e+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent;return{left:e,top:n}},addEvent:function(t,e,n){s(t).bind(e,n)},removeEvent:function(t,e,n){s(t).unbind(e,n)},fireEvent:function(t,e,i,r){var s;n.createEvent&&(t.dispatchEvent||t.fireEvent)?((s=n.createEvent("Events")).initEvent(e,!0,!0),s.target=t,Highcharts.extend(s,i),t.dispatchEvent?t.dispatchEvent(s):t.fireEvent(e,s)):!0===t.HCExtended&&(i=i||{},t.trigger(e,i)),i&&i.defaultPrevented&&(r=null),r&&r(i)},washMouseEvent:function(t){return t},stop:function(t){t.stopAnimation=!0},each:function(t,e){return Array.prototype.forEach.call(t,e)}}}();