(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{No2Z:function(R,O,o){"use strict";o.r(O);var i=o("k1fw"),t=o("q1tI"),v=o.n(t),m=o("dEAq"),l=o.n(m),C=o("Zxc8"),n=o("nKUr"),S=o.n(n),B=v.a.memo(s=>{var _=s.demos,b=_["chart-render-demo1"].component,f=_["chart-render-demo2"].component,y=_["chart-render-demo3"].component;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(v.a.Fragment,{children:[Object(n.jsx)("div",{className:"markdown",children:Object(n.jsxs)("h2",{id:"\u57FA\u7840\u6848\u4F8B",children:[Object(n.jsx)(m.AnchorLink,{to:"#\u57FA\u7840\u6848\u4F8B","aria-hidden":"true",tabIndex:-1,children:Object(n.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u6848\u4F8B"]})}),Object(n.jsx)(C.default,Object(i.a)(Object(i.a)({},_["chart-render-demo1"].previewerProps),{},{children:Object(n.jsx)(b,{})})),Object(n.jsx)("div",{className:"markdown",children:Object(n.jsxs)("h2",{id:"\u9690\u85CF\u641C\u7D22\u8868\u5355\u5E76\u624B\u52A8\u63A7\u5236\u5237\u65B0\u65F6\u673A",children:[Object(n.jsx)(m.AnchorLink,{to:"#\u9690\u85CF\u641C\u7D22\u8868\u5355\u5E76\u624B\u52A8\u63A7\u5236\u5237\u65B0\u65F6\u673A","aria-hidden":"true",tabIndex:-1,children:Object(n.jsx)("span",{className:"icon icon-link"})}),"\u9690\u85CF\u641C\u7D22\u8868\u5355\u5E76\u624B\u52A8\u63A7\u5236\u5237\u65B0\u65F6\u673A"]})}),Object(n.jsx)(C.default,Object(i.a)(Object(i.a)({},_["chart-render-demo2"].previewerProps),{},{children:Object(n.jsx)(f,{})})),Object(n.jsx)("div",{className:"markdown",children:Object(n.jsxs)("h2",{id:"\u642D\u914D\u5176\u4ED6\u7EC4\u4EF6\u4E00\u8D77\u5C55\u793A",children:[Object(n.jsx)(m.AnchorLink,{to:"#\u642D\u914D\u5176\u4ED6\u7EC4\u4EF6\u4E00\u8D77\u5C55\u793A","aria-hidden":"true",tabIndex:-1,children:Object(n.jsx)("span",{className:"icon icon-link"})}),"\u642D\u914D\u5176\u4ED6\u7EC4\u4EF6\u4E00\u8D77\u5C55\u793A"]})}),Object(n.jsx)(C.default,Object(i.a)(Object(i.a)({},_["chart-render-demo3"].previewerProps),{},{children:Object(n.jsx)(y,{})}))]})})});O.default=s=>{var _=v.a.useContext(m.context),b=_.demos;return v.a.useEffect(()=>{var f;s!=null&&(f=s.location)!==null&&f!==void 0&&f.hash&&m.AnchorLink.scrollToAnchor(decodeURIComponent(s.location.hash.slice(1)))},[]),Object(n.jsx)(B,{demos:b})}},RZMt:function(R,O,o){},Zxc8:function(R,O,o){"use strict";o.r(O);var i=o("q1tI"),t=o.n(i),v=o("k3GJ"),m=o("MZF8"),l=o("dEAq"),C=o.n(l),n=o("H1Ra"),S=o("RZMt"),B=o.n(S);function s(r,u){return $(r)||y(r,u)||b(r,u)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(r,u){if(!!r){if(typeof r=="string")return f(r,u);var a=Object.prototype.toString.call(r).slice(8,-1);if(a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set")return Array.from(r);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(r,u)}}function f(r,u){(u==null||u>r.length)&&(u=r.length);for(var a=0,d=new Array(u);a<u;a++)d[a]=r[a];return d}function y(r,u){var a=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var d=[],E=!0,h=!1,D,j;try{for(a=a.call(r);!(E=(D=a.next()).done)&&(d.push(D.value),!(u&&d.length===u));E=!0);}catch(e){h=!0,j=e}finally{try{!E&&a.return!=null&&a.return()}finally{if(h)throw j}}return d}}function $(r){if(Array.isArray(r))return r}function x(r,u){var a,d=(a=r.match(/\.(\w+)$/))===null||a===void 0?void 0:a[1];return d||(d=u.tsx?"tsx":"jsx"),d}var Z=function(u){var a,d,E,h=Object(i.useRef)(),D=Object(i.useContext)(l.context),j=D.locale,e=Object(l.useLocaleProps)(j,u),J=Object(l.useDemoUrl)(e.identifier),g=e.demoUrl||J,H=(m.a===null||m.a===void 0?void 0:m.a.location.hash)==="#".concat(e.identifier),G=Object.keys(e.sources).length===1,I=Object(l.useCodeSandbox)(((a=e.hideActions)===null||a===void 0?void 0:a.includes("CSB"))?null:e),T=Object(l.useRiddle)(((d=e.hideActions)===null||d===void 0?void 0:d.includes("RIDDLE"))?null:e),X=Object(l.useMotions)(e.motions||[],h.current),L=s(X,2),z=L[0],Q=L[1],V=Object(l.useCopy)(),U=s(V,2),Y=U[0],q=U[1],ee=Object(i.useState)(function(){return e.sources._?"_":Object.keys(e.sources)[0]}),N=s(ee,2),p=N[0],te=N[1],re=Object(i.useState)(x(p,e.sources[p])),F=s(re,2),P=F[0],ae=F[1],ne=Object(i.useState)(Boolean(e.defaultShowCode)),w=s(ne,2),A=w[0],oe=w[1],ue=Object(i.useState)(Math.random()),k=s(ue,2),ie=k[0],K=k[1],M=e.sources[p][P]||e.sources[p].content,ce=Object(l.useTSPlaygroundUrl)(j,M),le=Object(i.useRef)(),se=Object(l.usePrefersColor)(),de=s(se,1),me=de[0],W=e.actionBarRender,_e=W===void 0?function(c){return c}:W;Object(i.useEffect)(function(){K(Math.random())},[me]);function fe(c){te(c),ae(x(c,e.sources[c]))}return t.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",H?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&t.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),t.a.createElement("div",{ref:h,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?t.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:ie,src:g,ref:le}):e.children),t.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&t.a.createElement(l.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&t.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),t.a.createElement("div",{className:"__dumi-default-previewer-actions"},_e(t.a.createElement(t.a.Fragment,null,I&&t.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:I}),T&&t.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:T}),e.motions&&t.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:Q,onClick:function(){return z()}}),e.iframe&&t.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return K(Math.random())}}),!((E=e.hideActions)===null||E===void 0?void 0:E.includes("EXTERNAL"))&&t.a.createElement(l.Link,{target:"_blank",to:g},t.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),t.a.createElement("span",null),t.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":q,onClick:function(){return Y(M)}}),P==="tsx"&&A&&t.a.createElement(l.Link,{target:"_blank",to:ce},t.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),t.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(A?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return oe(!A)}})))),A&&t.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&t.a.createElement(v.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:p,onChange:fe},Object.keys(e.sources).map(function(c){return t.a.createElement(v.TabPane,{tab:c==="_"?"index.".concat(x(c,e.sources[c])):c,key:c})})),t.a.createElement("div",{className:"__dumi-default-previewer-source"},t.a.createElement(n.a,{code:M,lang:P,showCopy:!1}))))};O.default=Z}}]);
