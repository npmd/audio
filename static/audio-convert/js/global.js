!function e(t,n,o){function i(a,r){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!r&&c)return c(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[a]={exports:{}};t[a][0].call(d.exports,(function(e){return i(t[a][1][e]||e)}),d,d.exports,e,t,n,o)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){t.exports=function(e){return e&&e.__esModule?e:{default:e}}},{}],2:[function(e,t,n){function o(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=o=function(e){return typeof e}:t.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}t.exports=o},{}],3:[function(e,t,n){!function(e){if(!e.hasInitialised){var t={escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},hasClass:function(e,t){var n=" ";return 1===e.nodeType&&(n+e.className+n).replace(/[\n\t]/g,n).indexOf(n+t+n)>=0},addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var n=new RegExp("\\b"+this.escapeRegExp(t)+"\\b");e.className=e.className.replace(n,"")},interpolateString:function(e,t){return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi,(function(e){return t(arguments[1])||""}))},getCookie:function(e){var t=("; "+document.cookie).split("; "+e+"=");return t.length<2?void 0:t.pop().split(";").shift()},setCookie:function(e,t,n,o,i,s){var a=new Date;a.setHours(a.getHours()+24*(n||365));var r=[e+"="+t,"expires="+a.toUTCString(),"path="+(i||"/")];o&&r.push("domain="+o),s&&r.push("secure"),document.cookie=r.join(";")},deepExtend:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(n in e&&this.isPlainObject(e[n])&&this.isPlainObject(t[n])?this.deepExtend(e[n],t[n]):e[n]=t[n]);return e},throttle:function(e,t){var n=!1;return function(){n||(e.apply(this,arguments),n=!0,setTimeout((function(){n=!1}),t))}},hash:function(e){var t,n,o=0;if(0===e.length)return o;for(t=0,n=e.length;t<n;++t)o=(o<<5)-o+e.charCodeAt(t),o|=0;return o},normaliseHex:function(e){return"#"==e[0]&&(e=e.substr(1)),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e},getContrast:function(e){return e=this.normaliseHex(e),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000":"#fff"},getLuminance:function(e){var t=parseInt(this.normaliseHex(e),16),n=38+(t>>16),o=38+(t>>8&255),i=38+(255&t);return"#"+(16777216+65536*(n<255?n<1?0:n:255)+256*(o<255?o<1?0:o:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isPlainObject:function(e){return"object"==typeof e&&null!==e&&e.constructor==Object},traverseDOMPath:function(e,n){return e&&e.parentNode?t.hasClass(e,n)?e:this.traverseDOMPath(e.parentNode,n):null}};e.status={deny:"deny",allow:"allow",dismiss:"dismiss"},e.transitionEnd=function(){var e=document.createElement("div"),t={t:"transitionend",OT:"oTransitionEnd",msT:"MSTransitionEnd",MozT:"transitionend",WebkitT:"webkitTransitionEnd"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n+"ransition"])return t[n];return""}(),e.hasTransition=!!e.transitionEnd;var n=Object.keys(e.status).map(t.escapeRegExp);e.customStyles={},e.Popup=function(){var o={enabled:!0,container:null,cookie:{name:"cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(e){},onStatusChange:function(e,t){},onRevokeChoice:function(){},onNoCookieLaw:function(e,t){},content:{header:"Cookies used on the website!",message:"This website uses cookies to ensure you get the best experience on our website.",dismiss:"Got it!",allow:"Allow cookies",deny:"Decline",link:"Learn more",href:"https://www.cookiesandyou.com",close:"&#x274c;",target:"_blank",policy:"Cookie Policy"},elements:{header:'<span class="cc-header">{{header}}</span>&nbsp;',message:'<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',dismiss:'<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',allow:'<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',deny:'<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',link:'<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',close:'<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'},window:'<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',revokeBtn:'<div class="cc-revoke {{classes}}">{{policy}}</div>',compliance:{info:'<div class="cc-compliance">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',"opt-out":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'},type:"info",layouts:{basic:"{{messagelink}}{{compliance}}","basic-close":"{{messagelink}}{{compliance}}{{close}}","basic-header":"{{header}}{{message}}{{link}}{{compliance}}"},layout:"basic",position:"bottom",theme:"block",static:!1,palette:null,revokable:!1,animateRevokable:!0,showLink:!0,dismissOnScroll:!1,dismissOnTimeout:!1,dismissOnWindowClick:!1,ignoreClicksFrom:["cc-revoke","cc-btn"],autoOpen:!0,autoAttach:!0,whitelistPage:[],blacklistPage:[],overrideHTML:null};function i(){this.initialise.apply(this,arguments)}function s(e){this.openingTimeout=null,t.removeClass(e,"cc-invisible")}function a(t){t.style.display="none",t.removeEventListener(e.transitionEnd,this.afterTransition),this.afterTransition=null}function r(){var e=this.options.position.split("-"),t=[];return e.forEach((function(e){t.push("cc-"+e)})),t}function c(o){var i=this.options,s=document.createElement("div"),a=i.container&&1===i.container.nodeType?i.container:document.body;s.innerHTML=o;var r=s.children[0];return r.style.display="none",t.hasClass(r,"cc-window")&&e.hasTransition&&t.addClass(r,"cc-invisible"),this.onButtonClick=function(o){var i=t.traverseDOMPath(o.target,"cc-btn")||o.target;if(t.hasClass(i,"cc-btn")){var s=i.className.match(new RegExp("\\bcc-("+n.join("|")+")\\b")),a=s&&s[1]||!1;a&&(this.setStatus(a),this.close(!0))}t.hasClass(i,"cc-close")&&(this.setStatus(e.status.dismiss),this.close(!0)),t.hasClass(i,"cc-revoke")&&this.revokeChoice()}.bind(this),r.addEventListener("click",this.onButtonClick),i.autoAttach&&(a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r)),r}function l(e){return"000000"==(e=t.normaliseHex(e))?"#222":t.getLuminance(e)}function d(e,t){for(var n=0,o=e.length;n<o;++n){var i=e[n];if(i instanceof RegExp&&i.test(t)||"string"==typeof i&&i.length&&i===t)return!0}return!1}return i.prototype.initialise=function(n){this.options&&this.destroy(),t.deepExtend(this.options={},o),t.isPlainObject(n)&&t.deepExtend(this.options,n),function(){var t=this.options.onInitialise.bind(this);if(!window.navigator.cookieEnabled)return t(e.status.deny),!0;if(window.CookiesOK||window.navigator.CookiesOK)return t(e.status.allow),!0;var n=Object.keys(e.status),o=this.getStatus(),i=n.indexOf(o)>=0;return i&&t(o),i}.call(this)&&(this.options.enabled=!1),d(this.options.blacklistPage,location.pathname)&&(this.options.enabled=!1),d(this.options.whitelistPage,location.pathname)&&(this.options.enabled=!0);var i=this.options.window.replace("{{classes}}",function(){var n=this.options,o="top"==n.position||"bottom"==n.position?"banner":"floating";t.isMobile()&&(o="floating");var i=["cc-"+o,"cc-type-"+n.type,"cc-theme-"+n.theme];return n.static&&i.push("cc-static"),i.push.apply(i,r.call(this)),function(n){var o=t.hash(JSON.stringify(n)),i="cc-color-override-"+o,s=t.isPlainObject(n);return this.customStyleSelector=s?i:null,s&&function(n,o,i){if(e.customStyles[n])++e.customStyles[n].references;else{var s={},a=o.popup,r=o.button,c=o.highlight;a&&(a.text=a.text?a.text:t.getContrast(a.background),a.link=a.link?a.link:a.text,s[i+".cc-window"]=["color: "+a.text,"background-color: "+a.background],s[i+".cc-revoke"]=["color: "+a.text,"background-color: "+a.background],s[i+" .cc-link,"+i+" .cc-link:active,"+i+" .cc-link:visited"]=["color: "+a.link],r&&(r.text=r.text?r.text:t.getContrast(r.background),r.border=r.border?r.border:"transparent",s[i+" .cc-btn"]=["color: "+r.text,"border-color: "+r.border,"background-color: "+r.background],r.padding&&s[i+" .cc-btn"].push("padding: "+r.padding),"transparent"!=r.background&&(s[i+" .cc-btn:hover, "+i+" .cc-btn:focus"]=["background-color: "+(r.hover||l(r.background))]),c?(c.text=c.text?c.text:t.getContrast(c.background),c.border=c.border?c.border:"transparent",s[i+" .cc-highlight .cc-btn:first-child"]=["color: "+c.text,"border-color: "+c.border,"background-color: "+c.background]):s[i+" .cc-highlight .cc-btn:first-child"]=["color: "+a.text]));var d=document.createElement("style");document.head.appendChild(d),e.customStyles[n]={references:1,element:d.sheet};var u=-1;for(var h in s)s.hasOwnProperty(h)&&d.sheet.insertRule(h+"{"+s[h].join(";")+"}",++u)}}(o,n,"."+i),s}.call(this,this.options.palette),this.customStyleSelector&&i.push(this.customStyleSelector),i}.call(this).join(" ")).replace("{{children}}",function(){var e={},n=this.options;n.showLink||(n.elements.link="",n.elements.messagelink=n.elements.message),Object.keys(n.elements).forEach((function(o){e[o]=t.interpolateString(n.elements[o],(function(e){var t=n.content[e];return e&&"string"==typeof t&&t.length?t:""}))}));var o=n.compliance[n.type];o||(o=n.compliance.info),e.compliance=t.interpolateString(o,(function(t){return e[t]}));var i=n.layouts[n.layout];return i||(i=n.layouts.basic),t.interpolateString(i,(function(t){return e[t]}))}.call(this)),s=this.options.overrideHTML;if("string"==typeof s&&s.length&&(i=s),this.options.static){var a=c.call(this,'<div class="cc-grower">'+i+"</div>");a.style.display="",this.element=a.firstChild,this.element.style.display="none",t.addClass(this.element,"cc-invisible")}else this.element=c.call(this,i);(function(){var n=this.setStatus.bind(this),o=this.close.bind(this),i=this.options.dismissOnTimeout;"number"==typeof i&&i>=0&&(this.dismissTimeout=window.setTimeout((function(){n(e.status.dismiss),o(!0)}),Math.floor(i)));var s=this.options.dismissOnScroll;if("number"==typeof s&&s>=0){var a=function(t){window.pageYOffset>Math.floor(s)&&(n(e.status.dismiss),o(!0),window.removeEventListener("scroll",a),this.onWindowScroll=null)};this.options.enabled&&(this.onWindowScroll=a,window.addEventListener("scroll",a))}var r=this.options.dismissOnWindowClick,c=this.options.ignoreClicksFrom;if(r){var l=function(i){for(var s=!1,a=i.path.length,r=c.length,d=0;d<a;d++)if(!s)for(var u=0;u<r;u++)s||(s=t.hasClass(i.path[d],c[u]));s||(n(e.status.dismiss),o(!0),window.removeEventListener("click",l),window.removeEventListener("touchend",l),this.onWindowClick=null)}.bind(this);this.options.enabled&&(this.onWindowClick=l,window.addEventListener("click",l),window.addEventListener("touchend",l))}}).call(this),function(){if("info"!=this.options.type&&(this.options.revokable=!0),t.isMobile()&&(this.options.animateRevokable=!1),this.options.revokable){var e=r.call(this);this.options.animateRevokable&&e.push("cc-animate"),this.customStyleSelector&&e.push(this.customStyleSelector);var n=this.options.revokeBtn.replace("{{classes}}",e.join(" ")).replace("{{policy}}",this.options.content.policy);this.revokeBtn=c.call(this,n);var o=this.revokeBtn;if(this.options.animateRevokable){var i=t.throttle((function(e){var n=!1,i=window.innerHeight-20;t.hasClass(o,"cc-top")&&e.clientY<20&&(n=!0),t.hasClass(o,"cc-bottom")&&e.clientY>i&&(n=!0),n?t.hasClass(o,"cc-active")||t.addClass(o,"cc-active"):t.hasClass(o,"cc-active")&&t.removeClass(o,"cc-active")}),200);this.onMouseMove=i,window.addEventListener("mousemove",i)}}}.call(this),this.options.autoOpen&&this.autoOpen()},i.prototype.destroy=function(){this.onButtonClick&&this.element&&(this.element.removeEventListener("click",this.onButtonClick),this.onButtonClick=null),this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null),this.onWindowScroll&&(window.removeEventListener("scroll",this.onWindowScroll),this.onWindowScroll=null),this.onWindowClick&&(window.removeEventListener("click",this.onWindowClick),this.onWindowClick=null),this.onMouseMove&&(window.removeEventListener("mousemove",this.onMouseMove),this.onMouseMove=null),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.revokeBtn&&this.revokeBtn.parentNode&&this.revokeBtn.parentNode.removeChild(this.revokeBtn),this.revokeBtn=null,function(n){if(t.isPlainObject(n)){var o=t.hash(JSON.stringify(n)),i=e.customStyles[o];if(i&&!--i.references){var s=i.element.ownerNode;s&&s.parentNode&&s.parentNode.removeChild(s),e.customStyles[o]=null}}}(this.options.palette),this.options=null},i.prototype.open=function(t){if(this.element)return this.isOpen()||(e.hasTransition?this.fadeIn():this.element.style.display="",this.options.revokable&&this.toggleRevokeButton(),this.options.onPopupOpen.call(this)),this},i.prototype.close=function(t){if(this.element)return this.isOpen()&&(e.hasTransition?this.fadeOut():this.element.style.display="none",t&&this.options.revokable&&this.toggleRevokeButton(!0),this.options.onPopupClose.call(this)),this},i.prototype.fadeIn=function(){var n=this.element;if(e.hasTransition&&n&&(this.afterTransition&&a.call(this,n),t.hasClass(n,"cc-invisible"))){if(n.style.display="",this.options.static){var o=this.element.clientHeight;this.element.parentNode.style.maxHeight=o+"px"}this.openingTimeout=setTimeout(s.bind(this,n),20)}},i.prototype.fadeOut=function(){var n=this.element;e.hasTransition&&n&&(this.openingTimeout&&(clearTimeout(this.openingTimeout),s.bind(this,n)),t.hasClass(n,"cc-invisible")||(this.options.static&&(this.element.parentNode.style.maxHeight=""),this.afterTransition=a.bind(this,n),n.addEventListener(e.transitionEnd,this.afterTransition),t.addClass(n,"cc-invisible")))},i.prototype.isOpen=function(){return this.element&&""==this.element.style.display&&(!e.hasTransition||!t.hasClass(this.element,"cc-invisible"))},i.prototype.toggleRevokeButton=function(e){this.revokeBtn&&(this.revokeBtn.style.display=e?"":"none")},i.prototype.revokeChoice=function(e){this.options.enabled=!0,this.clearStatus(),this.options.onRevokeChoice.call(this),e||this.autoOpen()},i.prototype.hasAnswered=function(t){return Object.keys(e.status).indexOf(this.getStatus())>=0},i.prototype.hasConsented=function(t){var n=this.getStatus();return n==e.status.allow||n==e.status.dismiss},i.prototype.autoOpen=function(e){!this.hasAnswered()&&this.options.enabled?this.open():this.hasAnswered()&&this.options.revokable&&this.toggleRevokeButton(!0)},i.prototype.setStatus=function(n){var o=this.options.cookie,i=t.getCookie(o.name),s=Object.keys(e.status).indexOf(i)>=0;Object.keys(e.status).indexOf(n)>=0?(t.setCookie(o.name,n,o.expiryDays,o.domain,o.path,o.secure),this.options.onStatusChange.call(this,n,s)):this.clearStatus()},i.prototype.getStatus=function(){return t.getCookie(this.options.cookie.name)},i.prototype.clearStatus=function(){var e=this.options.cookie;t.setCookie(e.name,"",-1,e.domain,e.path)},i}(),e.Location=function(){var e={timeout:5e3,services:["ipinfo"],serviceDefinitions:{ipinfo:function(){return{url:"//ipinfo.io",headers:["Accept: application/json"],callback:function(e,t){try{var n=JSON.parse(t);return n.error?s(n):{code:n.country}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},ipinfodb:function(e){return{url:"//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",isScript:!0,callback:function(e,t){try{var n=JSON.parse(t);return"ERROR"==n.statusCode?s({error:n.statusMessage}):{code:n.countryCode}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},maxmind:function(){return{url:"//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",isScript:!0,callback:function(e){window.geoip2?geoip2.country((function(t){try{e({code:t.country.iso_code})}catch(t){e(s(t))}}),(function(t){e(s(t))})):e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))}}}}};function n(n){t.deepExtend(this.options={},e),t.isPlainObject(n)&&t.deepExtend(this.options,n),this.currentServiceIndex=-1}function o(e,t,n){var o,i=document.createElement("script");i.type="text/"+(e.type||"javascript"),i.src=e.src||e,i.async=!1,i.onreadystatechange=i.onload=function(){var e=i.readyState;clearTimeout(o),t.done||e&&!/loaded|complete/.test(e)||(t.done=!0,t(),i.onreadystatechange=i.onload=null)},document.body.appendChild(i),o=setTimeout((function(){t.done=!0,t(),i.onreadystatechange=i.onload=null}),n)}function i(e,t,n,o,i){var s=new(window.XMLHttpRequest||window.ActiveXObject)("MSXML2.XMLHTTP.3.0");if(s.open(o?"POST":"GET",e,1),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),Array.isArray(i))for(var a=0,r=i.length;a<r;++a){var c=i[a].split(":",2);s.setRequestHeader(c[0].replace(/^\s+|\s+$/g,""),c[1].replace(/^\s+|\s+$/g,""))}"function"==typeof t&&(s.onreadystatechange=function(){s.readyState>3&&t(s)}),s.send(o)}function s(e){return new Error("Error ["+(e.code||"UNKNOWN")+"]: "+e.error)}return n.prototype.getNextService=function(){var e;do{e=this.getServiceByIdx(++this.currentServiceIndex)}while(this.currentServiceIndex<this.options.services.length&&!e);return e},n.prototype.getServiceByIdx=function(e){var n=this.options.services[e];if("function"==typeof n){var o=n();return o.name&&t.deepExtend(o,this.options.serviceDefinitions[o.name](o)),o}return"string"==typeof n?this.options.serviceDefinitions[n]():t.isPlainObject(n)?this.options.serviceDefinitions[n.name](n):null},n.prototype.locate=function(e,t){var n=this.getNextService();n?(this.callbackComplete=e,this.callbackError=t,this.runService(n,this.runNextServiceOnError.bind(this))):t(new Error("No services to run"))},n.prototype.setupUrl=function(e){var t=this.getCurrentServiceOpts();return e.url.replace(/\{(.*?)\}/g,(function(n,o){if("callback"===o){var i="callback"+Date.now();return window[i]=function(t){e.__JSONP_DATA=JSON.stringify(t)},i}if(o in t.interpolateUrl)return t.interpolateUrl[o]}))},n.prototype.runService=function(e,t){var n=this;e&&e.url&&e.callback&&(e.isScript?o:i)(this.setupUrl(e),(function(o){var i=o?o.responseText:"";e.__JSONP_DATA&&(i=e.__JSONP_DATA,delete e.__JSONP_DATA),n.runServiceCallback.call(n,t,e,i)}),this.options.timeout,e.data,e.headers)},n.prototype.runServiceCallback=function(e,t,n){var o=this,i=t.callback((function(t){i||o.onServiceResult.call(o,e,t)}),n);i&&this.onServiceResult.call(this,e,i)},n.prototype.onServiceResult=function(e,t){t instanceof Error||t&&t.error?e.call(this,t,null):e.call(this,null,t)},n.prototype.runNextServiceOnError=function(e,t){if(e){this.logError(e);var n=this.getNextService();n?this.runService(n,this.runNextServiceOnError.bind(this)):this.completeService.call(this,this.callbackError,new Error("All services failed"))}else this.completeService.call(this,this.callbackComplete,t)},n.prototype.getCurrentServiceOpts=function(){var e=this.options.services[this.currentServiceIndex];return"string"==typeof e?{name:e}:"function"==typeof e?e():t.isPlainObject(e)?e:{}},n.prototype.completeService=function(e,t){this.currentServiceIndex=-1,e&&e(t)},n.prototype.logError=function(e){var t=this.currentServiceIndex,n=this.getServiceByIdx(t);console.warn("The service["+t+"] ("+n.url+") responded with the following error",e)},n}(),e.Law=function(){var e={regionalLaw:!0,hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","ES","SE","GB","UK","GR","EU"],revokable:["HR","CY","DK","EE","FR","DE","LV","LT","NL","PT","ES"],explicitAction:["HR","IT","ES"]};function n(e){this.initialise.apply(this,arguments)}return n.prototype.initialise=function(n){t.deepExtend(this.options={},e),t.isPlainObject(n)&&t.deepExtend(this.options,n)},n.prototype.get=function(e){var t=this.options;return{hasLaw:t.hasLaw.indexOf(e)>=0,revokable:t.revokable.indexOf(e)>=0,explicitAction:t.explicitAction.indexOf(e)>=0}},n.prototype.applyLaw=function(e,t){var n=this.get(t);return n.hasLaw||(e.enabled=!1,"function"==typeof e.onNoCookieLaw&&e.onNoCookieLaw(t,n)),this.options.regionalLaw&&(n.revokable&&(e.revokable=!0),n.explicitAction&&(e.dismissOnScroll=!1,e.dismissOnTimeout=!1)),e},n}(),e.initialise=function(n,o,i){var s=new e.Law(n.law);o||(o=function(){}),i||(i=function(){});var a=Object.keys(e.status),r=t.getCookie("cookieconsent_status");a.indexOf(r)>=0?o(new e.Popup(n)):e.getCountryCode(n,(function(t){delete n.law,delete n.location,t.code&&(n=s.applyLaw(n,t.code)),o(new e.Popup(n))}),(function(t){delete n.law,delete n.location,i(t,new e.Popup(n))}))},e.getCountryCode=function(t,n,o){t.law&&t.law.countryCode?n({code:t.law.countryCode}):t.location?new e.Location(t.location).locate((function(e){n(e||{})}),o):n({})},e.utils=t,e.hasInitialised=!0,window.cookieconsent=e}}(window.cookieconsent||{})},{}],4:[function(e,t,n){var o,i;o=this,i=function(){"use strict";return(()=>{const e=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];class t{constructor({targetModal:e,triggers:t=[],onShow:n=(()=>{}),onClose:o=(()=>{}),openTrigger:i="data-micromodal-trigger",closeTrigger:s="data-micromodal-close",disableScroll:a=!1,disableFocus:r=!1,awaitCloseAnimation:c=!1,awaitOpenAnimation:l=!1,debugMode:d=!1}){this.modal=document.getElementById(e),this.config={debugMode:d,disableScroll:a,openTrigger:i,closeTrigger:s,onShow:n,onClose:o,awaitCloseAnimation:c,awaitOpenAnimation:l,disableFocus:r},t.length>0&&this.registerTriggers(...t),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}registerTriggers(...e){e.filter(Boolean).forEach(e=>{e.addEventListener("click",e=>this.showModal(e))})}showModal(){if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){const e=()=>{this.modal.removeEventListener("animationend",e,!1),this.setFocusToFirstNode()};this.modal.addEventListener("animationend",e,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement)}closeModal(){const e=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",(function t(){e.classList.remove("is-open"),e.removeEventListener("animationend",t,!1)}),!1):e.classList.remove("is-open")}closeModalById(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}scrollBehaviour(e){if(!this.config.disableScroll)return;const t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:"",height:""});break;case"disable":Object.assign(t.style,{overflow:"hidden",height:"100vh"})}}addEventListeners(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}removeEventListeners(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}onClick(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}onKeydown(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}getFocusableNodes(){const t=this.modal.querySelectorAll(e);return Array(...t)}setFocusToFirstNode(){if(this.config.disableFocus)return;const e=this.getFocusableNodes();e.length&&e[0].focus()}maintainFocus(e){const t=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){const n=t.indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),e.shiftKey||n!==t.length-1||(t[0].focus(),e.preventDefault())}else t[0].focus()}}let n=null;const o=e=>{if(!document.getElementById(e))return console.warn(`MicroModal: ❗Seems like you have missed %c'${e}'`,"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",`<div class="modal" id="${e}"></div>`),!1},i=(e,t)=>{if((e=>{e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))})(e),!t)return!0;for(var n in t)o(n);return!0};return{init:e=>{const o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),s=[...document.querySelectorAll(`[${o.openTrigger}]`)],a=((e,t)=>{const n=[];return e.forEach(e=>{const o=e.attributes[t].value;void 0===n[o]&&(n[o]=[]),n[o].push(e)}),n})(s,o.openTrigger);if(!0!==o.debugMode||!1!==i(s,a))for(var r in a){let e=a[r];o.targetModal=r,o.triggers=[...e],n=new t(o)}},show:(e,i)=>{const s=i||{};s.targetModal=e,!0===s.debugMode&&!1===o(e)||(n=new t(s),n.showModal())},close:e=>{e?n.closeModalById(e):n.closeModal()}}})()},"object"==typeof n&&void 0!==t?t.exports=i():"function"==typeof define&&define.amd?define(i):(o=o||self).MicroModal=i()},{}],5:[function(e,t,n){"use strict";t.exports=function(){function e(){_.removeClass("#modal_feedback","sent")}function t(){var e=_.id("#feedback_email"),t=_.id("#feedback_message"),o=e.value,i=t.value;return n(e,/\S+@\S+\.\S+/.test(o))&&n(t,i.length>4)}function n(e,n){return n?(_.removeClass(e,"not_valid"),_.addClass(e,"valid"),_.off(e,"input",t),!0):(_.hasClass(e,"not_valid")||(_.addClass(e,"not_valid"),e.focus(),_.on(e,"input",t)),!1)}return{init:function(n){_.on("#feedback_submit","click",(function(e){var n=_.id("#feedback_email").value,o=_.id("#feedback_message").value;t()&&_.ajax({type:"POST",url:"/save_feedback/",responseType:"json",data:{email:n,message:o,uid:glob.uid,site_id:glob.site_id,extras:JSON.stringify({s_encoder:glob.s_encoder})},success:function(e){var t,n;t=_.first("#modal_feedback .cnt_initial"),n=_.first("#modal_feedback .cnt_sent"),_.css(n,"width",t.offsetWidth+"px"),_.css(n,"height",t.offsetHeight+"px"),_.addClass("#modal_feedback","sent"),_.id("#feedback_message").value=""},error:function(e){_.l(e)}})})),_.on(".feedback_button","click",(function(t){_.id("modal_feedback_title").innerHTML=t.target.dataset.h?t.target.dataset.h:t.target.innerText,t.target.dataset.desc?(_.id("modal_feedback_desc").innerHTML=t.target.dataset.desc,_.show("#modal_feedback_desc")):_.hide("#modal_feedback_desc"),n.MicroModal.show("modal_feedback",{onClose:function(){e()}}),t.preventDefault()})),_.on("#feedback_back","click",(function(){e()}))}}}()},{}],6:[function(e,t,n){"use strict";t.exports=function(){function e(t){_.hide("#lang_panel"),_.off(document,"click",e)}return{init:function(){var t=_.id("lang_link"),n=_.id("lang_panel");t?t.onclick=function(t){t.stopImmediatePropagation(),"none"==n.style.display||""==n.style.display?(n.style.display="block",_.on(document,"click",e)):e()}:_.e("no lang link"),_.find("#lang_panel a").forEach((function(e,t,n){e.onclick=function(){var e=n[t].dataset.lang_id;"string"==typeof e&&e.length>=2?document.cookie="lang_id="+e+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/":_.l("Error: Can't get lang_id attr")}}))}}}()},{}],7:[function(e,t,n){"use strict";var o=e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof")),i=e("micromodal"),s=(e("cookieconsent"),e("./feedback")),a=e("./lang_panel"),r=e("./usersystem");document.addEventListener("DOMContentLoaded",(function(){self!=top&&(top.location=self.location),window.MicroModal=i,window.UserSystem=r,i.init(),s.init({MicroModal:i}),"pdf"!=window.glob.site_id&&(a.init(),r.init({MicroModal:i})),"123apps"!=window.glob.site_id&&window.cookieconsent.initialise({palette:{popup:{background:"#252e39"},button:{background:"#14a7d0"}},theme:"classic",position:"bottom-left",content:{href:"/legal/",dismiss:"Accept",message:'By clicking "Accept" or continuing to use the site, you agree to the use of our and third-party cookies and other similar technologies. Cookies from Google Drive and Dropbox enable our sites with cloud storage features. Cookies from Google Analytics help us analyze and measure engagement with our content. Cookies from Google AdSense are used for collection, sharing, and use of personal data for personalization of ads.'},law:{countryCode:window.glob.country}})})),window.sendStat=function(e){if("object"==(0,o.default)(e))try{var t=JSON.stringify(e),n=new XMLHttpRequest;n.open("POST","/sendStat/",!0),n.setRequestHeader("Content-type","application/json"),n.send(t)}catch(e){_.e(e)}else _.e("sendStat accepts only objects as input")},window.browser_require_feature=function(){var e=Array.prototype.slice.call(arguments),t=[];if(-1!==e.indexOf("WebAssembly")){var n=!1;try{if("object"===("undefined"==typeof WebAssembly?"undefined":(0,o.default)(WebAssembly))&&"function"==typeof WebAssembly.instantiate){var i=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));i instanceof WebAssembly.Module&&new WebAssembly.Instance(i)instanceof WebAssembly.Instance&&(n=!0)}}catch(e){n=!1}t.push(n)}if(-1!==e.indexOf("AudioContext")&&t.push("function"==typeof window.AudioContext||"function"==typeof window.webkitAudioContext),-1!==e.indexOf("MediaRecorder")&&t.push("function"==typeof MediaRecorder),-1!==e.indexOf("NotSafari")){var s=-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome");t.push(!s)}var a=t.reduce((function(e,t){return e&&t}),!0);if(!a){var r=document.getElementById("better_browser_please");r&&window.glob.lang.hasOwnProperty("bad_browser")?(r.innerHTML="<span>"+window.glob.lang.bad_browser+"</span>",r.style.display="flex"):_.e("no div or window.glob.lang.bad_browser")}}},{"./feedback":5,"./lang_panel":6,"./usersystem":8,"@babel/runtime/helpers/interopRequireDefault":1,"@babel/runtime/helpers/typeof":2,cookieconsent:3,micromodal:4}],8:[function(e,t,n){"use strict";var o=e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"));t.exports=function(){var e,t=!1,n=new URL(window.location.href),i=n.searchParams.get("product_id"),s=(n.origin,n.pathname,n.hash,{MicroModal:null});function a(n){"object"==("undefined"==typeof Paddle?"undefined":(0,o.default)(Paddle))?n&&n():_.loadJS("https://cdn.paddle.com/paddle/paddle.js",(function(){Paddle.Setup({vendor:101937,eventCallback:function(n){"Checkout.PaymentMethodSelected"==n.event&&n.eventData.payment_method&&(e=n.eventData.payment_method),"Checkout.Complete"==n.event&&(t=!0,n.eventData.checkout.completed&&e&&fetch("/account/payment_method/update/?subscription_id="+n.eventData.checkout.id+"&payment_method="+e)),"Checkout.Close"==n.event&&t&&function(e){setTimeout((function(){e?location.href=e:location.reload()}),500)}()}}),n&&n()}))}function r(e){e.target.closest(".user_profile")&&!_.hasClass(e.toElement,"item")||(_.addClass("#avatar_popup","hidden"),e.stopPropagation())}function c(e,t){var n={USD:"en-US",RUB:"ru-RU",GBP:"en-GB",EUR:"de-DE",AUD:"en-AU",BRL:"pt-BR",CAD:"en-CA",CHF:"fr-CH",CNY:"ii-CN",PLN:"pl-PL",SEK:"sv-SE",ZAR:"en-ZA",CZK:"cs-CZ",HUF:"hu-HU",DKK:"da-DK",NZD:"en-NZ",SGD:"en-SG",HKD:"en-HK",INR:"hi-IN",JPY:"ja-JP",KRW:"ko-KR",MXN:"es-MX",ARS:"es-AR"};if(n.hasOwnProperty(t)){var o={style:"currency",currency:t};return parseInt(e)==parseFloat(e)&&(o.minimumFractionDigits=0,o.maximumFractionDigits=0),new Intl.NumberFormat(n[t],o).format(e)}return t+" "+e}function l(e,t){var n=["filesize","filesize_limit"];for(var o in t){if(n.includes(o))var i=d(t[o]);else i=t[o];e=e.replace("{"+o+"}",i)}return e}function d(e){if(0===e)return"0 Bytes";var t=Math.floor(Math.log(e)/Math.log(1024)),n=t>2?2:0;return parseFloat((e/Math.pow(1024,t)).toFixed(n))+"&nbsp;"+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}return{init:function(e){s=_.deepMerge(s,e),i>0&&glob.userinfo.logged_in&&!glob.userinfo.premium&&a((function(){Paddle.Checkout.open({product:i,email:glob.userinfo.email})})),_.on("#avatar","click",(function(){var e=_.id("avatar_popup");_.hasClass(e,"hidden")?(_.removeClass(e,"hidden"),_.on(document,"click",r)):(_.addClass(e,"hidden"),_.off(document,"click",r))})),_.on("a.buy_plan, button.buy_plan","click",(function(e){var t=["ar","zh-Hans","nl","en","fr","de","it","ja","kr","pl","pt","ru","es"];a((function(){var n={product:e.target.dataset.product,email:e.target.dataset.email};t.includes(window.glob.lang_id)&&(n.locale=window.glob.lang_id),Paddle.Checkout.open(n)})),e.preventDefault()})),_.on("a.modify_subscription","click",(function(e){a((function(){Paddle.Checkout.open({override:e.target.href})})),e.preventDefault()}))},show_premium_popup:function(e,t,n){if(e){"file_too_big"==e&&(t.filesize_limit=window.glob.quota.filesize);var o=window.glob.lang["warning_h_"+e],i=window.glob.lang["warning_desc_"+e];o?(o=l(o,t),_.first("#modal_premium .warning_h").innerHTML=o,_.show("#modal_premium .warning_h")):_.hide("#modal_premium .warning_h"),i?(i=l(i,t),_.first("#modal_premium .warning_desc").innerHTML=i,_.show("#modal_premium .warning_desc")):_.hide("#modal_premium .warning_desc"),_.show("#modal_premium .modal__header")}else _.hide("#modal_premium .modal__header");var r=_.first("#modal_premium .price");_.hasClass(r,"modified")||a((function(){var e=window.glob.plans[window.glob.plans.length-1].subscription_plan_id;Paddle.Product.Prices(e,(function(e){var t=e.price.gross,n=/(\w{3})([\d.]+)/.exec(t);n?(r.innerHTML=c(n[2],n[1]),_.addClass(r,"modified")):_.e("unable to parse price")}))})),s.MicroModal.show("modal_premium",{onClose:function(){_.run_cb(n)}})},pretty_price:c,get_quota:function(e){var t={uid:s.uid,site_id:s.site_id};s.user_id&&(t.user_id=s.user_id),_.ajax({url:"/quota/",type:"POST",responseType:"json",data:t,success:function(t){_.l(t),_.run_cb(e,t)},error:function(){_.run_cb(e,data)}})}}}()},{"@babel/runtime/helpers/interopRequireDefault":1,"@babel/runtime/helpers/typeof":2}]},{},[7]);