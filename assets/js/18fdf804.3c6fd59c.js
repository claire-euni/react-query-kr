"use strict";(self.webpackChunkreact_query_kr=self.webpackChunkreact_query_kr||[]).push([[350],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return b}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(t),b=o,y=f["".concat(a,".").concat(b)]||f[b]||l[b]||i;return t?n.createElement(y,s(s({ref:r},p),{},{components:t})):n.createElement(y,s({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9007:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],u={sidebar_position:14,title:"QueriesObserver"},a="\ucffc\ub9ac \uc635\uc838\ubc84",c={unversionedId:"api_reference/queriesObserver",id:"api_reference/queriesObserver",title:"QueriesObserver",description:"QueriesObserver",source:"@site/docs/api_reference/queriesObserver.md",sourceDirName:"api_reference",slug:"/api_reference/queriesObserver",permalink:"/react-query-kr/docs/api_reference/queriesObserver",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"QueriesObserver"},sidebar:"defaultSidebar",previous:{title:"infiniteQueryObserver",permalink:"/react-query-kr/docs/api_reference/infiniteQueryObserver"},next:{title:"QueryErrorResetObserver",permalink:"/react-query-kr/docs/api_reference/queryErrorResetBoundary"}},p={},l=[{value:"<strong><code>QueriesObserver</code></strong>",id:"queriesobserver",level:2}],f={toc:l};function b(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ucffc\ub9ac-\uc635\uc838\ubc84"},"\ucffc\ub9ac \uc635\uc838\ubc84"),(0,i.kt)("h2",{id:"queriesobserver"},(0,i.kt)("strong",{parentName:"h2"},(0,i.kt)("inlineCode",{parentName:"strong"},"QueriesObserver"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"QueriesObserver"),"\xa0\ub294 \uc5ec\ub7ec\uac1c\uc758 \ucffc\ub9ac\ub97c \uad6c\ub3c5\ud569\ub2c8\ub2e4 \ud83d\udc40"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const observer = new QueriesObserver(queryClient, [\n    { queryKey: ['post', 1], queryFn: fetchPost },\n    { queryKey: ['post', 2], queryFn: fetchPost },\n]);\n\nconst unsubscribe = observer.subscribe((result) => {\n    console.log(result);\n    unsubscribe();\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"QueriesObserver"),"\xa0\uc758 \uc635\uc158\uc740\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"[useQueries](https://react-query.tanstack.com/reference/useQueries)")),"\uc758 \uc635\uc158\uacfc 100%\uc77c\uce58\ud569\ub2c8\ub2e4."))}b.isMDXComponent=!0}}]);