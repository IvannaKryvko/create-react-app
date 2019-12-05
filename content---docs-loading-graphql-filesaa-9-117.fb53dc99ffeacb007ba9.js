/*! For license information please see content---docs-loading-graphql-filesaa-9-117.fb53dc99ffeacb007ba9.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{212:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return i}));r(58),r(31),r(22),r(23),r(59),r(231);var t=r(230);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var a={id:"loading-graphql-files",title:"Loading .graphql Files",sidebar_label:"Loading .graphql Files"},u=[],l={rightToc:u},c="wrapper";function i(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["components"]);return Object(t.b)(c,o({},l,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"To load ",Object(t.b)("inlineCode",{parentName:"p"},".gql")," and ",Object(t.b)("inlineCode",{parentName:"p"},".graphql")," files, first install the ",Object(t.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/graphql"}),Object(t.b)("inlineCode",{parentName:"a"},"graphql"))," and ",Object(t.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/graphql.macro"}),Object(t.b)("inlineCode",{parentName:"a"},"graphql.macro"))," packages by running:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npm install --save graphql graphql.macro\n")),Object(t.b)("p",null,"Alternatively you may use ",Object(t.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-sh"}),"yarn add graphql graphql.macro\n")),Object(t.b)("p",null,"Then, whenever you want to load ",Object(t.b)("inlineCode",{parentName:"p"},".gql")," or ",Object(t.b)("inlineCode",{parentName:"p"},".graphql")," files, import the ",Object(t.b)("inlineCode",{parentName:"p"},"loader")," from the macro package:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-js"}),"import { loader } from 'graphql.macro';\n\nconst query = loader('./foo.graphql');\n")),Object(t.b)("p",null,"And your results get automatically inlined! This means that if the file above, ",Object(t.b)("inlineCode",{parentName:"p"},"foo.graphql"),", contains the following:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-graphql"}),"query {\n  hello {\n    world\n  }\n}\n")),Object(t.b)("p",null,"The previous example turns into:"),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const query = {\n  'kind': 'Document',\n  'definitions': [{\n    ...\n  }],\n  'loc': {\n    ...\n    'source': {\n      'body': '\\\\\\\\n  query {\\\\\\\\n    hello {\\\\\\\\n      world\\\\\\\\n    }\\\\\\\\n  }\\\\\\\\n',\n      'name': 'GraphQL request',\n      ...\n    }\n  }\n};\n")),Object(t.b)("p",null,"You can also use the ",Object(t.b)("inlineCode",{parentName:"p"},"gql")," template tag the same way you would use the non-macro version from ",Object(t.b)("inlineCode",{parentName:"p"},"graphql-tag")," package with the added benefit of inlined parsing results."),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-js"}),"import { gql } from 'graphql.macro';\n \nconst query = gql`\n  query User {\n    user(id: 5) {\n      lastName\n      ...UserEntry1\n    }\n  }\n`;\n")))}i.isMDXComponent=!0},230:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return p}));var t=r(0),o=r.n(t),a=o.a.createContext({}),u=function(e){var n=o.a.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},l=function(e){var n=u(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var c="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,c=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),f=u(r),p=t,s=f[l+"."+p]||f[p]||i[p]||a;return r?o.a.createElement(s,Object.assign({},{ref:n},c,{components:r})):o.a.createElement(s,Object.assign({},{ref:n},c))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,u=new Array(a);u[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:t,u[1]=l;for(var p=2;p<a;p++)u[p]=r[p];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},231:function(e,n,r){"use strict";e.exports=r(232)},232:function(e,n,r){"use strict";var t=r(233),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function j(e,n,r){this.props=e,this.context=n,this.refs=v,this.updater=r||g}function O(){}function w(e,n,r){this.props=e,this.context=n,this.refs=v,this.updater=r||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var q=w.prototype=new O;q.constructor=w,t(q,j.prototype),q.isPureReactComponent=!0;var C={current:null},S={current:null},k=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,r){var t,o={},u=null,l=null;if(null!=n)for(t in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(u=""+n.key),n)k.call(n,t)&&!N.hasOwnProperty(t)&&(o[t]=n[t]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var i=Array(c),f=0;f<c;f++)i[f]=arguments[f+2];o.children=i}if(e&&e.defaultProps)for(t in c=e.defaultProps)void 0===o[t]&&(o[t]=c[t]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,P=[];function $(e,n,r,t){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=n,o.func=r,o.context=t,o.count=0,o}return{result:e,keyPrefix:n,func:r,context:t,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,n,r){return null==e?0:function e(n,r,t,o){var l=typeof n;"undefined"!==l&&"boolean"!==l||(n=null);var c=!1;if(null===n)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(n.$$typeof){case a:case u:c=!0}}if(c)return t(o,n,""===r?"."+A(n,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(n))for(var i=0;i<n.length;i++){var f=r+A(l=n[i],i);c+=e(l,f,t,o)}else if(null===n||"object"!=typeof n?f=null:f="function"==typeof(f=d&&n[d]||n["@@iterator"])?f:null,"function"==typeof f)for(n=f.call(n),i=0;!(l=n.next()).done;)c+=e(l=l.value,f=r+A(l,i++),t,o);else if("object"===l)throw t=""+n,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(n).join(", ")+"}":t,""));return c}(e,"",n,r)}function A(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function L(e,n){e.func.call(e.context,n,e.count++)}function M(e,n,r){var t=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?U(e,t,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),t.push(e))}function U(e,n,r,t,o){var a="";null!=r&&(a=(""+r).replace(E,"$&/")+"/"),T(e,M,n=$(n,a,t,o)),R(n)}function D(){var e=C.current;if(null===e)throw Error(h(321));return e}var F={Children:{map:function(e,n,r){if(null==e)return e;var t=[];return U(e,t,null,n,r),t},forEach:function(e,n,r){if(null==e)return e;T(e,L,n=$(null,null,n,r)),R(n)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var n=[];return U(e,n,null,(function(e){return e})),n},only:function(e){if(!x(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,n){return void 0===n&&(n=null),(e={$$typeof:p,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,n){return{$$typeof:b,type:e,compare:void 0===n?null:n}},useCallback:function(e,n){return D().useCallback(e,n)},useContext:function(e,n){return D().useContext(e,n)},useEffect:function(e,n){return D().useEffect(e,n)},useImperativeHandle:function(e,n,r){return D().useImperativeHandle(e,n,r)},useDebugValue:function(){},useLayoutEffect:function(e,n){return D().useLayoutEffect(e,n)},useMemo:function(e,n){return D().useMemo(e,n)},useReducer:function(e,n,r){return D().useReducer(e,n,r)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:l,Profiler:i,StrictMode:c,Suspense:y,createElement:_,cloneElement:function(e,n,r){if(null==e)throw Error(h(267,e));var o=t({},e.props),u=e.key,l=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(l=n.ref,c=S.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in n)k.call(n,f)&&!N.hasOwnProperty(f)&&(o[f]=void 0===n[f]&&void 0!==i?i[f]:n[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){i=Array(f);for(var p=0;p<f;p++)i[p]=arguments[p+2];o.children=i}return{$$typeof:a,type:e.type,key:u,ref:l,props:o,_owner:c}},createFactory:function(e){var n=_.bind(null,e);return n.type=e,n},isValidElement:x,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:t}},I={default:F},V=I&&F||I;e.exports=V.default||V},233:function(e,n,r){"use strict";var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,n){for(var r,l,c=u(e),i=1;i<arguments.length;i++){for(var f in r=Object(arguments[i]))o.call(r,f)&&(c[f]=r[f]);if(t){l=t(r);for(var p=0;p<l.length;p++)a.call(r,l[p])&&(c[l[p]]=r[l[p]])}}return c}}}]);