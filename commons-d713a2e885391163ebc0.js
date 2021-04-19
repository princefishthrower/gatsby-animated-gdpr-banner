/*! For license information please see commons-d713a2e885391163ebc0.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{6505:function(e,t){"use strict";t.Q=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},o=t||{},s=e.split(i),l=o.decode||n,u=0;u<s.length;u++){var c=s[u],f=c.indexOf("=");if(!(f<0)){var d=c.substr(0,f).trim(),p=c.substr(++f,c.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),null==r[d]&&(r[d]=a(p,l))}}return r},t.q=function(e,t,n){var i=n||{},a=i.encode||r;if("function"!=typeof a)throw new TypeError("option encode is invalid");if(!o.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!o.test(s))throw new TypeError("argument val is invalid");var l=e+"="+s;if(null!=i.maxAge){var u=i.maxAge-0;if(isNaN(u))throw new Error("maxAge should be a Number");l+="; Max-Age="+Math.floor(u)}if(i.domain){if(!o.test(i.domain))throw new TypeError("option domain is invalid");l+="; Domain="+i.domain}if(i.path){if(!o.test(i.path))throw new TypeError("option path is invalid");l+="; Path="+i.path}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");l+="; Expires="+i.expires.toUTCString()}i.httpOnly&&(l+="; HttpOnly");i.secure&&(l+="; Secure");if(i.sameSite){switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return l};var n=decodeURIComponent,r=encodeURIComponent,i=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e,t){try{return t(e)}catch(n){return e}}},3884:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),i=n(6505);function o(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(r){}return e}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?i.Q(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=i.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),o(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var r in this.cookies)n[r]=o(this.cookies[r],e);return n},e.prototype.set=function(e,t,n){var r;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=a(a({},this.cookies),((r={})[e]=t,r)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=a(a({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=a({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),l=r.createContext(new s),u=(l.Provider,l.Consumer,l);function c(e){var t=(0,r.useContext)(u);if(!t)throw new Error("Missing <CookiesProvider>");var n=t.getAll(),i=(0,r.useState)(n),o=i[0],a=i[1],s=(0,r.useRef)(o);return(0,r.useEffect)((function(){function n(){var n=t.getAll();(function(e,t,n){if(!e)return!0;for(var r=0,i=e;r<i.length;r++){var o=i[r];if(t[o]!==n[o])return!0}return!1})(e||null,n,s.current)&&a(n),s.current=n}return t.addChangeListener(n),function(){t.removeChangeListener(n)}}),[t]),[o,(0,r.useMemo)((function(){return t.set.bind(t)}),[t]),(0,r.useMemo)((function(){return t.remove.bind(t)}),[t])]}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(!o(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},14:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){var n=t.distance,r=t.left,i=t.right,o=t.up,a=t.down,s=t.top,u=t.bottom,c=t.big,f=t.mirror,p=t.opposite,h=(n?n.toString():0)+((r?1:0)|(i?2:0)|(s||a?4:0)|(u||o?8:0)|(f?16:0)|(p?32:0)|(e?64:0)|(c?128:0));if(d.hasOwnProperty(h))return d[h];var v=r||i||o||a||s||u,m=void 0,y=void 0;if(v){if(!f!=!(e&&p)){var b=[i,r,u,s,a,o];r=b[0],i=b[1],s=b[2],u=b[3],o=b[4],a=b[5]}var w=n||(c?"2000px":"100%");m=r?"-"+w:i?w:"0",y=a||s?"-"+w:o||u?w:"0"}return d[h]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),d[h]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,o=(e.out,e.forever),a=e.timeout,s=e.duration,u=void 0===s?l.defaults.duration:s,f=e.delay,d=void 0===f?l.defaults.delay:f,p=e.count,h=void 0===p?l.defaults.count:p,v=r(e,["children","out","forever","timeout","duration","delay","count"]),m={make:i,duration:void 0===a?u:a,delay:d,forever:o,count:h,style:{animationFillMode:"both"},reverse:v.left};return t?(0,c.default)(v,m,m,n):m}Object.defineProperty(t,"__esModule",{value:!0});var a,s=n(5697),l=n(5321),u=n(1719),c=(a=u)&&a.__esModule?a:{default:a},f={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},d={};o.propTypes=f,t.default=o,e.exports=t.default},3853:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(7294),u=(r=l)&&r.__esModule?r:{default:r},c=n(5697),f=n(5321),d=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),p={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:d.isRequired,outEffect:(0,c.oneOfType)([d,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},h={transitionGroup:c.object},v=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.isOn=void 0===e.when||!!e.when,r.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:r.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},r.savedChild=!1,r.isShown=!1,f.observerMode?r.handleObserve=r.handleObserve.bind(r):(r.revealHandler=r.makeHandler(r.reveal),r.resizeHandler=r.makeHandler(r.resize)),r.saveRef=r.saveRef.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!f.observerMode&&this.props.collapse&&window.document.dispatchEvent(f.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var r=this,i=n.forever,o=n.count,a=n.delay,s=n.duration;if(!i){this.animationEndTimeout=window.setTimeout((function(){r&&r.el&&(r.animationEndTimeout=void 0,e.call(r))}),a+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var r=n.duration+(t.cascade?n.duration:0),i=this.isOn?this.getDimensionValue():0,o=void 0,a=void 0;if(t.collapseOnly)o=n.duration/3,a=n.delay;else{var s=r>>2,l=s>>1;o=s,a=n.delay+(this.isOn?0:r-s-l),e.style.animationDuration=r-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:i,transition:"height "+o+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],r="style"in n&&n.style.animationName||void 0,i=void 0;e.collapseOnly?i={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(r=n.make),i={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:r}),className:n.className}),this.setState(e.collapse?this.collapse(i,e,n):i),t?(this.savedChild=u.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),f.ssr&&(0,f.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&f.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];f.globalHide||(0,f.hideAll)(),this&&this.el&&(e||(e=this.props),f.ssr&&(0,f.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):f.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,r=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!r||f.ssr&&!f.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):f.ssr&&(f.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return u.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):u.default.Children.toArray(e);var r=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=r.duration,s=r.reverse,l=n.length,c=2*o;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),o=c/2);var d=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":i(e))&&e?u.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,f.cascade)(s?d--:d++,0,l,o,c))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===i(this.props.children)){var e=u.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:u.default.createElement("div",null,e)}return u.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,r=t.props,i=r.style,o=r.className,s=r.children,l=this.props.disabled?o:(this.props.outEffect?f.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),c=a({},i,{opacity:1})):c=this.props.disabled?i:a({},i,this.state.style);var d=a({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:c},this.props.refProp,this.saveRef)),p=u.default.cloneElement(t,d,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?u.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):u.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,f.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,r=window.pageYOffset-t.getTop(this.el),i=Math.min(n,window.innerHeight)*(f.globalHide?e.fraction:0);return r>i-window.innerHeight&&r<n-i}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){f.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!f.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(u.default.Component);v.propTypes=p,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=h,v.displayName="RevealBase",t.default=v,e.exports=t.default},5321:function(e,t){"use strict";function n(e){try{return p.insertRule(e,p.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function r(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",r,!0),n("."+i+" { opacity: 0; }"),window.removeEventListener("orientationchange",r,!0),window.document.removeEventListener("visibilitychange",r))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,n,r,i){var o=Math.log(r),a=(Math.log(i)-o)/(n-t);return Math.exp(o+a*(e-t))},t.animation=function(e){if(!p)return"";var t="@keyframes "+(h+f)+"{"+e+"}",n=d[e];return n?""+h+n:(p.insertRule(t,p.cssRules.length),d[e]=f,""+h+f++)},t.hideAll=r,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var i=t.namespace="react-reveal",o=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,s=t.raf=function(e){return window.setTimeout(e,66)},l=t.disableSsr=function(){return t.ssr=o=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),f=1,d={},p=!1,h=i+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||s,t.ssr=o=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),o&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=o=!1),o&&window.setTimeout(l,1500),a||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(p=v.sheet,window.addEventListener("scroll",r,!0),window.addEventListener("orientationchange",r,!0),window.document.addEventListener("visibilitychange",r))}},1719:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t,n,r){return"in"in e&&(e.when=e.in),o.default.Children.count(r)<2?o.default.createElement(a.default,i({},e,{inEffect:t,outEffect:n,children:r})):(r=o.default.Children.map(r,(function(r){return o.default.createElement(a.default,i({},e,{inEffect:t,outEffect:n,children:r}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,r):o.default.createElement("span",null,r))};var o=r(n(7294)),a=r(n(3853));e.exports=t.default},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function c(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),c()},a.componentDidUpdate=function(){c()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",s),f}}},2740:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,i,o,a,s=n(7294),l=n(5697),u=n.n(l),c=n(4839),f=n.n(c),d=n(2993),p=n.n(d),h=n(6494),v=n.n(h),m="bodyAttributes",y="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",O="href",T="http-equiv",S="innerHTML",C="itemprop",A="name",k="property",L="rel",x="src",_="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",M="defer",I="encodeSpecialCharacters",N="onChangeClientState",P="titleTemplate",H=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],q="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,w.TITLE),n=J(e,P);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,R);return t||r||void 0},W=function(e){return J(e,N)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();-1===t.indexOf(l)||n===L&&"canonical"===e[n].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==S&&s!==E&&s!==C||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=v()({},r[s],i[s]);r[s]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,f=e.title,d=e.titleAttributes;le(w.BODY,r),le(w.HTML,i),se(f,d);var p={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,o),metaTags:ue(w.META,a),noscriptTags:ue(w.NOSCRIPT,s),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,c)},h={},v={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(v[e]=p[e].oldTags)})),t&&t(),l(e,h,v)},ae=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var c=o.indexOf(l);-1!==c&&o.splice(c,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(q,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,i=fe(n,r),[s.createElement(w.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=ce(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case y:return{toComponent:function(){return fe(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,c=e.title,f=void 0===c?"":c,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(m,n,r),htmlAttributes:de(y,i,r),link:de(w.LINK,o,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,s,r),script:de(w.SCRIPT,l,r),style:de(w.STYLE,u,r),title:de(w.TITLE,{title:f,titleAttributes:d},r)}},he=f()((function(e){return{baseTag:Z([O,_],e),bodyAttributes:Q(m,e),defer:J(e,M),encode:J(e,I),htmlAttributes:Q(y,e),linkTags:$(w.LINK,[L,O],e),metaTags:$(w.META,[A,g,T,k,C],e),noscriptTags:$(w.NOSCRIPT,[S],e),onChangeClientState:W(e),scriptTags:$(w.SCRIPT,[x,S],e),styleTags:$(w.STYLE,[E],e),title:G(e),titleAttributes:Q(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),pe)((function(){return null})),ve=(i=he,a=o=function(e){function t(){return Y(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return B({},i,((t={})[r.type]=a,t.titleAttributes=B({},o),t));case w.BODY:return B({},i,{bodyAttributes:B({},o)});case w.HTML:return B({},i,{htmlAttributes:B({},o)})}return B({},i,((n={})[r.type]=B({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(K(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(i,r)},U(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ve.renderStatic=ve.rewind;var me=n(5444);function ye(e){var t,n,r=e.description,i=e.lang,o=e.meta,a=e.title,l=(0,me.useStaticQuery)("63159454").site,u=r||l.siteMetadata.description,c=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return s.createElement(ve,{htmlAttributes:{lang:i},title:a,titleTemplate:c?"%s | "+c:null,meta:[{name:"description",content:u},{property:"og:title",content:a},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:u}].concat(o)})}ye.defaultProps={lang:"en",meta:[],description:""};var be=ye},3848:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),i=n(5444),o=function(e){var t=e.siteTitle;return r.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},r.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.createElement("h1",{style:{margin:0}},r.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.defaultProps={siteTitle:""};var a=o,s=n(3884),l=n(14),u=n.n(l),c=n(5218);function f(){var e=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){n(!0)}),[]),t}(),t=(0,s.Z)([c.g.GOOGLE_ANALYTICS_COOKIE_NAME]),n=t[0],i=t[1],o=function(e){i(c.g.GOOGLE_ANALYTICS_COOKIE_NAME,e)},a="true"!==n[c.g.GOOGLE_ANALYTICS_COOKIE_NAME]&&"false"!==n[c.g.GOOGLE_ANALYTICS_COOKIE_NAME],l=a?c.g.ANIMATION_DELAY:0;return r.createElement(u(),{bottom:!0,delay:l,when:e&&a,duration:c.g.ANIMATION_DURATION},r.createElement("div",{className:"fixed-bottom bg-gold p-2"},r.createElement("div",{className:"row justify-content-center align-items-center"},r.createElement("span",{className:"text-dark font-weight-bold mx-3"},"We use cookies to track the count of visits to this site, but that's it. ♥️"),r.createElement("button",{className:"btn btn-primary mr-3",onClick:function(){return o("true")}},"Allow"),r.createElement("button",{className:"btn btn-secondary",onClick:function(){return o("false")}},"Disable"))))}var d=function(e){var t,n=e.children,o=(0,i.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(a,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},r.createElement("main",null,n),r.createElement(f,null),r.createElement("footer",{style:{marginTop:"2rem"}},"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},5218:function(e,t,n){"use strict";n.d(t,{g:function(){return r}});var r=function(){};r.GOOGLE_ANALYTICS_COOKIE_NAME="gatsby-gdpr-google-analytics",r.ANIMATION_DELAY=600,r.ANIMATION_DURATION=1e3}}]);
//# sourceMappingURL=commons-d713a2e885391163ebc0.js.map