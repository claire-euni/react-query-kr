"use strict";(self.webpackChunkreact_query_kr=self.webpackChunkreact_query_kr||[]).push([[2822],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(t),f=o,g=l["".concat(u,".").concat(f)]||l[f]||p[f]||i;return t?r.createElement(g,a(a({ref:n},d),{},{components:t})):r.createElement(g,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3955:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:7,title:"\ubc31\uadf8\ub77c\uc6b4\ub4dc \ud398\uce6d \ud655\uc778 \ubcc0\uc218 (Background Fetching Indicators)"},u="\ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 \uc788\ub294 \uacbd\uc6b0",s={unversionedId:"guide_and_concepts/background_fetching_indicator",id:"guide_and_concepts/background_fetching_indicator",title:"\ubc31\uadf8\ub77c\uc6b4\ub4dc \ud398\uce6d \ud655\uc778 \ubcc0\uc218 (Background Fetching Indicators)",description:"\ubcf4\ud1b5\uc758 \uacbd\uc6b0\uc5d4 \ucffc\ub9ac\uac00 \xa0status === 'loading'\xa0\uc0c1\ud0dc\uc774\uba74 \ub85c\ub529\uc911\uc784\uc744 \uc54c\ub824\uc8fc\ub294 \ubaa8\ub2ec\uc744 \ub744\uc6cc\uc8fc\uba74 \ub429\ub2c8\ub2e4.",source:"@site/docs/guide_and_concepts/background_fetching_indicator.md",sourceDirName:"guide_and_concepts",slug:"/guide_and_concepts/background_fetching_indicator",permalink:"/react-query-kr/docs/guide_and_concepts/background_fetching_indicator",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\ubc31\uadf8\ub77c\uc6b4\ub4dc \ud398\uce6d \ud655\uc778 \ubcc0\uc218 (Background Fetching Indicators)"},sidebar:"defaultSidebar",previous:{title:"\uc758\uc874\uc801 \ucffc\ub9ac \uc2e4\ud589(Dependent Queries)",permalink:"/react-query-kr/docs/guide_and_concepts/dependent_queries"},next:{title:"\ud3ec\ucee4\uc2f1 \uc2dc \ub9ac\ud398\uce6d (Window Focus Refetching)",permalink:"/react-query-kr/docs/guide_and_concepts/window_focus_refetching"}},d={},p=[],l={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c-\ub370\uc774\ud130\ub97c-\uac00\uc838\uc624\uace0-\uc788\ub294-\uacbd\uc6b0"},"\ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 \uc788\ub294 \uacbd\uc6b0"),(0,i.kt)("p",null,"\ubcf4\ud1b5\uc758 \uacbd\uc6b0\uc5d4 \ucffc\ub9ac\uac00 \xa0",(0,i.kt)("inlineCode",{parentName:"p"},"status === 'loading'"),"\xa0\uc0c1\ud0dc\uc774\uba74 \ub85c\ub529\uc911\uc784\uc744 \uc54c\ub824\uc8fc\ub294 \ubaa8\ub2ec\uc744 \ub744\uc6cc\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uba87\uba87 \uacbd\uc6b0\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ub97c ",(0,i.kt)("strong",{parentName:"p"},"\ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0"),"\uc11c \uac00\uc838\uc624\uace0 \uc788\ub2e4\uace0 \uc54c\ub824\uc57c\ud560 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub7f0 \uacbd\uc6b0\ub97c \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"isFetching"),"\uc774\ub77c\ub294 \uc0c1\ud0dc\uac12\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. status \uac12\uc5d0 \uad00\uacc4\uc5c6\uc774 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 \uc788\ub294 \uc0c1\ud0dc\uc778\uac81\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function Todos() {\n    const { status, data: todos, error, isFetching } = useQuery('todos', fetchTodos);\n\n    return status === 'loading' ? (\n        <span>Loading...</span>\n    ) : status === 'error' ? (\n        <span>Error: {error.message}</span>\n    ) : (\n        <>\n            {isFetching ? <div>Refreshing...</div> : null}\n\n            <div>\n                {todos.map((todo) => (\n                    <Todo todo={todo} />\n                ))}\n            </div>\n        </>\n    );\n}\n")),(0,i.kt)("h1",{id:"\uc804\uc5ed\uc5d0\uc11c-\ubc31\uadf8\ub77c\uc6b4\ub4dc-\ud398\uce6d-\uc0c1\ud0dc-\uc811\uadfc\ud558\uae30"},"\uc804\uc5ed\uc5d0\uc11c \ubc31\uadf8\ub77c\uc6b4\ub4dc \ud398\uce6d \uc0c1\ud0dc \uc811\uadfc\ud558\uae30"),(0,i.kt)("p",null,"\uac1c\ubcc4 \ucffc\ub9ac\uc5d0 \uc801\uc6a9\ud558\ub294\uac83\ub3c4 \uc88b\uc9c0\ub9cc, ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"\uc5b4\ub5a4 \ucffc\ub9ac\uac00 \uc9c0\uae08 \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \ud638\ucd9c\uc911\uc774\ub2e4")),"\ub77c\ub294 \uc0ac\uc2e4\uc744 \uc54c\ub824\uc57c\ud560 \uacbd\uc6b0\ub3c4 \uc788\uc5b4\uc694. \uc774\ub7f4 \ub550 ",(0,i.kt)("inlineCode",{parentName:"p"},"useIsFetching")," \ud6c5\uc744 \ud65c\uc6a9\ud574\uc11c, \uc804\uc5ed\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"isFetching")," \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uc138\uc694."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useIsFetching } from 'react-query';\n\nfunction GlobalLoadingIndicator() {\n    const isFetching = useIsFetching();\n\n    return isFetching ? <div>Queries are fetching in the background...</div> : null;\n}\n")))}f.isMDXComponent=!0}}]);