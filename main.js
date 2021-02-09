!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){"use strict";t.a=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var a=n.then;if("function"==typeof a)return void a.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var a=0;a<r.length;a++)i(a,r[a])}))}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(0),o=n(1),i=setTimeout;function a(e){return Boolean(e&&void 0!==e.length)}function c(){}function u(e){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],v(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,u._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(o){return void f(t.promise,o)}l(t.promise,r)}else(1===e._state?l:f)(t.promise,e._value)}))):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof u)return e._state=3,e._value=t,void d(e);if("function"==typeof n)return void v((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,d(e)}catch(i){f(e,i)}var r,o}function f(e,t){e._state=2,e._value=t,d(e)}function d(e){2===e._state&&0===e._deferreds.length&&u._immediateFn((function(){e._handled||u._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function h(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function v(e,t){var n=!1;try{e((function(e){n||(n=!0,l(t,e))}),(function(e){n||(n=!0,f(t,e))}))}catch(r){if(n)return;n=!0,f(t,r)}}u.prototype.catch=function(e){return this.then(null,e)},u.prototype.then=function(e,t){var n=new this.constructor(c);return s(this,new h(e,t,n)),n},u.prototype.finally=r.a,u.all=function(e){return new u((function(t,n){if(!a(e))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,(function(t){i(e,t)}),n)}r[e]=a,0==--o&&t(r)}catch(u){n(u)}}for(var c=0;c<r.length;c++)i(c,r[c])}))},u.allSettled=o.a,u.resolve=function(e){return e&&"object"==typeof e&&e.constructor===u?e:new u((function(t){t(e)}))},u.reject=function(e){return new u((function(t,n){n(e)}))},u.race=function(e){return new u((function(t,n){if(!a(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)u.resolve(e[r]).then(t,n)}))},u._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){i(e,0)},u._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=u}).call(this,n(6).setImmediate)},function(e){e.exports=JSON.parse('{"a":"3.0.6"}')},function(e,t,n){"use strict";(function(e){var t=n(3),r=n(0),o=n(1),i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();"function"!=typeof i.Promise?i.Promise=t.a:i.Promise.prototype.finally?i.Promise.allSettled||(i.Promise.allSettled=o.a):i.Promise.prototype.finally=r.a}).call(this,n(2))},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(7),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(2))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,c,u=1,s={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){v(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){v(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){v(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(v,0,e)}:(a="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&v(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),r=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[u]=o,r(u),u++},d.clearImmediate=h}function h(e){delete s[e]}function v(e){if(l)setTimeout(v,0,e);else{var t=s[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{h(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(2),n(8))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=c(d);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new v(e,t)),1!==s.length||l||c(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;Object.create;n(5);var a=n(4);function c(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function u(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function s(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function l(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function f(e,t){return[e[0]^t[0],e[1]^t[1]]}function d(e){return e=f(e,[0,e[0]>>>1]),e=f(e=u(e,[4283543511,3981806797]),[0,e[0]>>>1]),e=f(e=u(e,[3301882366,444984403]),[0,e[0]>>>1])}function h(e){var t;return r({name:e.name,message:e.message,stack:null===(t=e.stack)||void 0===t?void 0:t.split("\n")},e)}function v(e){return parseInt(e)}function p(e){return parseFloat(e)}function m(e){return e.reduce((function(e,t){return e+(t?1:0)}),0)}function g(){var e=window,t=navigator;return m(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in t,"msPointerEnabled"in t])>=4}function y(e,t,n){(function(e){return e&&"function"==typeof e.setValueAtTime})(t)&&t.setValueAtTime(n,e.currentTime)}function w(e){return new Promise((function(t,n){e.oncomplete=function(e){return t(e.renderedBuffer)};var r=3,o=function(){switch(e.startRendering(),e.state){case"running":setTimeout((function(){return n(T("timeout"))}),1e3);break;case"suspended":document.hidden||r--,r>0?setTimeout(o,500):n(T("suspended"))}};o()}))}function b(e){for(var t=0,n=4500;n<5e3;++n)t+=Math.abs(e[n]);return t}function T(e){var t=new Error(e);return t.name=e,t}var S=["monospace","sans-serif","serif"],C=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"],A={fontStyle:"normal",fontWeight:"normal",letterSpacing:"normal",lineBreak:"auto",lineHeight:"normal",textTransform:"none",textAlign:"left",textDecoration:"none",textShadow:"none",whiteSpace:"normal",wordBreak:"normal",wordSpacing:"normal",position:"absolute",left:"-9999px",fontSize:"48px"};function M(e){return e.toDataURL()}var x={osCpu:function(){return navigator.oscpu},languages:function(){var e,t=navigator,n=[],r=t.language||t.userLanguage||t.browserLanguage||t.systemLanguage;if(void 0!==r&&n.push([r]),Array.isArray(t.languages))(function(){var e=window,t=navigator;return m(["webkitPersistentStorage"in t,"webkitTemporaryStorage"in t,0===t.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5})()&&m([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||n.push(t.languages);else if("string"==typeof t.languages){var o=t.languages;o&&n.push(o.split(","))}return n},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return e=p(navigator.deviceMemory),t=void 0,"number"==typeof e&&isNaN(e)?t:e;var e,t},screenResolution:function(){var e=screen,t=[v(e.width),v(e.height)];return t.sort().reverse(),t},availableScreenResolution:function(){var e=screen;if(e.availWidth&&e.availHeight){var t=[v(e.availWidth),v(e.availHeight)];return t.sort().reverse(),t}},hardwareConcurrency:function(){try{var e=v(navigator.hardwareConcurrency);return isNaN(e)?1:e}catch(t){return 1}},timezoneOffset:function(){var e=(new Date).getFullYear();return Math.max(p(new Date(e,0,1).getTimezoneOffset()),p(new Date(e,6,1).getTimezoneOffset()))},timezone:function(){var e,t=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(t)return(new t).resolvedOptions().timeZone},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){var e,t;if(!(g()||(e=window,t=navigator,m(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in t,"msSaveBlob"in t])>=3&&!g())))try{return!!window.indexedDB}catch(n){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){return navigator.platform},plugins:function(){if(g())return[];if(navigator.plugins){for(var e=[],t=0;t<navigator.plugins.length;++t){var n=navigator.plugins[t];if(n){for(var r=[],o=0;o<n.length;++o){var i=n[o];r.push({type:i.type,suffixes:i.suffixes})}e.push({name:n.name,description:n.description,mimeTypes:r})}}return e}},canvas:function(){var e=function(){var e=document.createElement("canvas");return e.width=240,e.height=140,e.style.display="inline",[e,e.getContext("2d")]}(),t=e[0],n=e[1];if(!function(e,t){return!(!t||!e.toDataURL)}(t,n))return{winding:!1,data:""};n.rect(0,0,10,10),n.rect(2,2,6,6);var r=!n.isPointInPath(5,5,"evenodd");n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.font="11pt no-real-font-123";var o="Cwm fjordbank 😃 gly";return n.fillText(o,2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText(o,4,45),n.globalCompositeOperation="multiply",n.fillStyle="rgb(255,0,255)",n.beginPath(),n.arc(50,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(0,255,255)",n.beginPath(),n.arc(100,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,255,0)",n.beginPath(),n.arc(75,100,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,0,255)",n.arc(75,75,75,0,2*Math.PI,!0),n.arc(75,75,25,0,2*Math.PI,!0),n.fill("evenodd"),{winding:r,data:M(t)}},touchSupport:function(){var e,t=navigator,n=0;void 0!==t.maxTouchPoints?n=v(t.maxTouchPoints):void 0!==t.msMaxTouchPoints&&(n=t.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(r){e=!1}return{maxTouchPoints:n,touchEvent:e,touchStart:"ontouchstart"in window}},fonts:function(){var e=document,t=e.body,n=e.createElement("div"),r=e.createElement("div"),o={},i={},a=function(){var t=e.createElement("span");t.textContent="mmMwWLliI0O&1";for(var n=0,r=Object.keys(A);n<r.length;n++){var o=r[n];t.style[o]=A[o]}return t},c=function(e){return S.some((function(t,n){return e[n].offsetWidth!==o[t]||e[n].offsetHeight!==i[t]}))},u=S.map((function(e){var t=a();return t.style.fontFamily=e,n.appendChild(t),t}));t.appendChild(n);for(var s=0,l=S.length;s<l;s++)o[S[s]]=u[s].offsetWidth,i[S[s]]=u[s].offsetHeight;var f=function(){for(var e={},t=function(t){e[t]=S.map((function(e){var n=function(e,t){var n=a();return n.style.fontFamily="'"+e+"',"+t,n}(t,e);return r.appendChild(n),n}))},n=0,o=C;n<o.length;n++){t(o[n])}return e}();t.appendChild(r);for(var d=[],h=0,v=C.length;h<v;h++)c(f[C[h]])&&d.push(C[h]);return t.removeChild(r),t.removeChild(n),d},audio:function(){return o(this,void 0,void 0,(function(){var e,t,n,r,o,a,c;return i(this,(function(i){switch(i.label){case 0:if(e=window,!(t=e.OfflineAudioContext||e.webkitOfflineAudioContext))return[2,-2];if(function(){var e=window,t=navigator;return m(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===t.vendor.indexOf("Apple"),"getStorageUpdates"in t,"WebKitMediaKeys"in e])>=4}()&&!function(){var e=window;return m(["safari"in e,!("DeviceMotionEvent"in e),!("ongestureend"in e),!("standalone"in navigator)])>=3}()&&!function(){var e=window;return m(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}())return[2,-1];n=new t(1,44100,44100),(r=n.createOscillator()).type="triangle",y(n,r.frequency,1e4),o=n.createDynamicsCompressor(),y(n,o.threshold,-50),y(n,o.knee,40),y(n,o.ratio,12),y(n,o.reduction,-20),y(n,o.attack,0),y(n,o.release,.25),r.connect(o),o.connect(n.destination),r.start(0),i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,w(n)];case 2:return a=i.sent(),[3,5];case 3:if("timeout"===(c=i.sent()).name||"suspended"===c.name)return[2,-3];throw c;case 4:return r.disconnect(),o.disconnect(),[7];case 5:return[2,b(a.getChannelData(0))]}}))}))},pluginsSupport:function(){return void 0!==navigator.plugins},productSub:function(){return navigator.productSub},emptyEvalLength:function(){return eval.toString().length},errorFF:function(){try{throw"a"}catch(e){try{return e.toSource(),!0}catch(t){return!1}}},vendor:function(){return navigator.vendor},chrome:function(){return void 0!==window.chrome},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var t=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",t}catch(n){return!1}}};function P(){return function(e,t,n){return o(this,void 0,void 0,(function(){var o,a,c,u,s,l,f,d,h;return i(this,(function(i){switch(i.label){case 0:o=Date.now(),a={},c=0,u=Object.keys(e),i.label=1;case 1:if(!(c<u.length))return[3,7];if(s=u[c],function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return!0;return!1}(n,s))return[3,6];l=void 0,i.label=2;case 2:return i.trys.push([2,4,,5]),h={},[4,e[s](t)];case 3:return h.value=i.sent(),l=h,[3,5];case 4:return f=i.sent(),l=f&&"object"==typeof f&&"message"in f?{error:f}:{error:{message:f}},[3,5];case 5:d=Date.now(),a[s]=r(r({},l),{duration:d-o}),o=d,i.label=6;case 6:return c++,[3,1];case 7:return[2,a]}}))}))}(x,void 0,[])}function _(e){return JSON.stringify(e,(function(e,t){return t instanceof Error?h(t):t}),2)}function E(e){return function(e,t){t=t||0;var n,r=(e=e||"").length%16,o=e.length-r,i=[0,t],a=[0,t],h=[0,0],v=[0,0],p=[2277735313,289559509],m=[1291169091,658871167];for(n=0;n<o;n+=16)h=[255&e.charCodeAt(n+4)|(255&e.charCodeAt(n+5))<<8|(255&e.charCodeAt(n+6))<<16|(255&e.charCodeAt(n+7))<<24,255&e.charCodeAt(n)|(255&e.charCodeAt(n+1))<<8|(255&e.charCodeAt(n+2))<<16|(255&e.charCodeAt(n+3))<<24],v=[255&e.charCodeAt(n+12)|(255&e.charCodeAt(n+13))<<8|(255&e.charCodeAt(n+14))<<16|(255&e.charCodeAt(n+15))<<24,255&e.charCodeAt(n+8)|(255&e.charCodeAt(n+9))<<8|(255&e.charCodeAt(n+10))<<16|(255&e.charCodeAt(n+11))<<24],h=s(h=u(h,p),31),i=c(i=s(i=f(i,h=u(h,m)),27),a),i=c(u(i,[0,5]),[0,1390208809]),v=s(v=u(v,m),33),a=c(a=s(a=f(a,v=u(v,p)),31),i),a=c(u(a,[0,5]),[0,944331445]);switch(h=[0,0],v=[0,0],r){case 15:v=f(v,l([0,e.charCodeAt(n+14)],48));case 14:v=f(v,l([0,e.charCodeAt(n+13)],40));case 13:v=f(v,l([0,e.charCodeAt(n+12)],32));case 12:v=f(v,l([0,e.charCodeAt(n+11)],24));case 11:v=f(v,l([0,e.charCodeAt(n+10)],16));case 10:v=f(v,l([0,e.charCodeAt(n+9)],8));case 9:v=u(v=f(v,[0,e.charCodeAt(n+8)]),m),a=f(a,v=u(v=s(v,33),p));case 8:h=f(h,l([0,e.charCodeAt(n+7)],56));case 7:h=f(h,l([0,e.charCodeAt(n+6)],48));case 6:h=f(h,l([0,e.charCodeAt(n+5)],40));case 5:h=f(h,l([0,e.charCodeAt(n+4)],32));case 4:h=f(h,l([0,e.charCodeAt(n+3)],24));case 3:h=f(h,l([0,e.charCodeAt(n+2)],16));case 2:h=f(h,l([0,e.charCodeAt(n+1)],8));case 1:h=u(h=f(h,[0,e.charCodeAt(n)]),p),i=f(i,h=u(h=s(h,31),m))}return i=c(i=f(i,[0,e.length]),a=f(a,[0,e.length])),a=c(a,i),i=c(i=d(i),a=d(a)),a=c(a,i),("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)+("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)}(function(e){for(var t="",n=0,r=Object.keys(e);n<r.length;n++){var o=r[n],i=e[o],a=i.error?"error":JSON.stringify(i.value);t+=(t?"|":"")+o.replace(/([:|\\])/g,"\\$1")+":"+a}return t}(e))}var O=function(){function e(){}return e.prototype.get=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return[4,P()];case 1:return t=r.sent(),n=function(e){var t;return{components:e,get visitorId(){return void 0===t&&(t=E(this.components)),t},set visitorId(e){t=e}}}(t),e.debug&&console.log("Copy the text below to get the debug data:\n\n```\nversion: "+a.a+"\nuserAgent: "+navigator.userAgent+"\ngetOptions: "+JSON.stringify(e,void 0,2)+"\nvisitorId: "+n.visitorId+"\ncomponents: "+_(t)+"\n```"),[2,n]}}))}))},e}();function k(e){var t=(void 0===e?{}:e).delayFallback,n=void 0===t?50:t;return o(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,(t=n,r=2*n,void 0===r&&(r=1/0),new Promise((function(e){var n=window.requestIdleCallback;n?n((function(){return e()}),{timeout:r}):setTimeout(e,Math.min(t,r))})))];case 1:return e.sent(),[2,new O]}var t,r}))}))}function I(){return o(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,k()];case 1:return[4,e.sent().get({debug:!0})];case 2:return[2,e.sent()]}}))}))}function L(e,t,n,r){var o=document.createElement("div");o.classList.add("heading"),o.textContent=t,e.appendChild(o);var i=document.createElement("pre");r&&i.classList.add(r),i.textContent=n,e.appendChild(i)}function j(e){var t=document.querySelector("#debugCopy");t instanceof HTMLButtonElement&&(t.disabled=!1,t.addEventListener("click",(function(t){t.preventDefault(),function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(n){}document.body.removeChild(t)}(e)})));var n=document.querySelector("#debugShare");n instanceof HTMLButtonElement&&(n.disabled=!1,n.addEventListener("click",(function(t){t.preventDefault(),function(e){o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:if(!navigator.share)return alert("Sharing is unavailable.\n\nSharing is available in mobile browsers and only on HTTPS websites. "+("https:"===location.protocol?"Use a mobile device or the Copy button instead.":"Open https://"+location.host+location.pathname+location.search+" instead.")),[2];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,navigator.share({text:e})];case 2:return t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:return[2]}}))}))}(e)})))}!function(){o(this,void 0,void 0,(function(){var e,t,n,r,o,a,c,u;return i(this,(function(i){switch(i.label){case 0:if(!(e=document.querySelector(".output")))throw new Error("The output element isn't found in the HTML code");t=Date.now(),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,I()];case 2:return n=i.sent(),r=n.visitorId,o=n.components,c=Date.now()-t,e.innerHTML="",L(e,"Visitor identifier:",r,"giant"),L(e,"Time took to get the identifier:",c+"ms","big"),L(e,"User agent:",navigator.userAgent),L(e,"Entropy components:",_(o)),j("Visitor identifier: `"+r+"`\nUser agent: `"+navigator.userAgent+"`\nEntropy components:\n```\n"+_(o)+"\n```"),[3,4];case 3:throw a=i.sent(),c=Date.now()-t,u=h(a),e.innerHTML="",L(e,"Unexpected error:",JSON.stringify(u,null,2)),L(e,"Time passed before the error:",c+"ms","big"),L(e,"User agent:",navigator.userAgent),j("Unexpected error:\n\n```\n"+JSON.stringify(u,null,2)+"\n```\nTime passed before the error: "+c+"ms\nUser agent: `"+navigator.userAgent+"`"),a;case 4:return[2]}}))}))}()}]);
//# sourceMappingURL=main.js.map?f222db488a7814ec84c2