/*! For license information please see content---docs-adding-a-css-modules-stylesheet-692-c8f.300f03251ce5b07ba3ca.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));n(58),n(31),n(22),n(23),n(59),n(231);var r=n(230);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={id:"adding-a-css-modules-stylesheet",title:"Adding a CSS Modules Stylesheet",sidebar_label:"Adding CSS Modules"},u=[{value:"Button.module.css",id:"buttonmodulecss",children:[]},{value:"another-stylesheet.css",id:"another-stylesheetcss",children:[]},{value:"Button.js",id:"buttonjs",children:[]},{value:"Result",id:"result",children:[]}],l={rightToc:u},c="wrapper";function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(c,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(r.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(r.b)("p",null,"This project supports ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"CSS Modules")," alongside regular stylesheets using the ",Object(r.b)("inlineCode",{parentName:"p"},"[name].module.css")," file naming convention. CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format ",Object(r.b)("inlineCode",{parentName:"p"},"[filename]\\_[classname]\\_\\_[hash]"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Tip:")," Should you want to preprocess a stylesheet with Sass then make sure to ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/adding-a-sass-stylesheet"}),"follow the installation instructions")," and then change the stylesheet file extension as follows: ",Object(r.b)("inlineCode",{parentName:"p"},"[name].module.scss")," or ",Object(r.b)("inlineCode",{parentName:"p"},"[name].module.sass"),".")),Object(r.b)("p",null,"CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules ",Object(r.b)("a",o({parentName:"p"},{href:"https://css-tricks.com/css-modules-part-1-need/"}),"here"),"."),Object(r.b)("h2",{id:"buttonmodulecss"},Object(r.b)("inlineCode",{parentName:"h2"},"Button.module.css")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-css"}),".error {\n  background-color: red;\n}\n")),Object(r.b)("h2",{id:"another-stylesheetcss"},Object(r.b)("inlineCode",{parentName:"h2"},"another-stylesheet.css")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-css"}),".error {\n  color: red;\n}\n")),Object(r.b)("h2",{id:"buttonjs"},Object(r.b)("inlineCode",{parentName:"h2"},"Button.js")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport styles from './Button.module.css'; // Import css modules stylesheet as styles\nimport './another-stylesheet.css'; // Import regular stylesheet\n\nclass Button extends Component {\n  render() {\n    // reference as a js object\n    return <button className={styles.error}>Error Button</button>;\n  }\n}\n")),Object(r.b)("h2",{id:"result"},"Result"),Object(r.b)("p",null,"No clashes from other ",Object(r.b)("inlineCode",{parentName:"p"},".error")," class names"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-html"}),'\x3c!-- This button has red background but not red text --\x3e\n<button class="Button_error_ax7yz">Error Button</button>\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This is an optional feature.")," Regular ",Object(r.b)("inlineCode",{parentName:"p"},"<link>")," stylesheets and CSS files are fully supported. CSS Modules are turned on for files ending with the ",Object(r.b)("inlineCode",{parentName:"p"},".module.css")," extension."))}s.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},i=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),i=u(n),f=r,p=i[l+"."+f]||i[f]||s[f]||a;return n?o.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(p,Object.assign({},{ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=i;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,u[1]=l;for(var f=2;f<a;f++)u[f]=n[f];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";e.exports=n(232)},232:function(e,t,n){"use strict";var r=n(233),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,i=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||v}function O(){}function S(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=g.prototype;var w=S.prototype=new O;w.constructor=S,r(w,g.prototype),w.isPureReactComponent=!0;var C={current:null},k={current:null},_=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},u=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),i=0;i<c;i++)s[i]=arguments[i+2];o.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,R=[];function $(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case u:c=!0}}if(c)return r(o,t,""===n?"."+q(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var i=n+q(l=t[s],s);c+=e(l,i,r,o)}else if(null===t||"object"!=typeof t?i=null:i="function"==typeof(i=m&&t[m]||t["@@iterator"])?i:null,"function"==typeof i)for(t=i.call(t),s=0;!(l=t.next()).done;)c+=e(l=l.value,i=n+q(l,s++),r,o);else if("object"===l)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),M(e,B,t=$(t,a,r,o)),T(t)}function D(){var e=C.current;if(null===e)throw Error(h(321));return e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,A,t=$(null,null,t,n)),T(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return D().useCallback(e,t)},useContext:function(e,t){return D().useContext(e,t)},useEffect:function(e,t){return D().useEffect(e,t)},useImperativeHandle:function(e,t,n){return D().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return D().useLayoutEffect(e,t)},useMemo:function(e,t){return D().useMemo(e,t)},useReducer:function(e,t,n){return D().useReducer(e,t,n)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:l,Profiler:s,StrictMode:c,Suspense:d,createElement:x,cloneElement:function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),u=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=k.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)_.call(t,i)&&!N.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==s?s[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){s=Array(i);for(var f=0;f<i;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:a,type:e.type,key:u,ref:l,props:o,_owner:c}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r}},U={default:L},F=U&&L||U;e.exports=F.default||F},233:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,c=u(e),s=1;s<arguments.length;s++){for(var i in n=Object(arguments[s]))o.call(n,i)&&(c[i]=n[i]);if(r){l=r(n);for(var f=0;f<l.length;f++)a.call(n,l[f])&&(c[l[f]]=n[l[f]])}}return c}}}]);