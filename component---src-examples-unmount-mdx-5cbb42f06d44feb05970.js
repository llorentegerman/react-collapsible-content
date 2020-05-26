(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{MzSt:function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return b})),e.d(t,"default",(function(){return C}));e("5hJT"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("PJhk");var o=e("ERkP"),a=e("/FXl"),r=e("TjRS"),i=e("ZFoC"),s=e("D9Iw"),u=e("75hS"),l=e("IT2Y"),d=e("hSUT"),c=e("H9qe");e("aD51");function p(){return(p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/examples/Unmount.mdx"}});var m={_frontmatter:b},f=r.a;function C(n){var t,e=n.components,C=function(n,t){if(null==n)return{};var e,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,["components"]);return Object(a.b)(f,p({},m,C,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"unmount-on-collapse"},"Unmount On Collapse"),Object(a.b)("p",null,"In case you need to unmount the content when it's collapsed."),Object(a.b)(i.c,{__position:0,__code:"() => {\n  const [expanded, setExpanded] = React.useState(false)\n  const transitioningRef = React.useRef(false)\n  const [transitionStatus, setTransitionStatus] = React.useState(\n    'has not yet started',\n  )\n  const isMounted = expanded || transitioningRef.current\n  return (\n    <Column>\n      <div style={{ marginBottom: 10 }}>\n        <div>\n          Transition status: <b>{transitionStatus}</b>\n          <br />\n          Is mounted? <b>{isMounted ? 'Yes' : 'No'}</b>\n        </div>\n      </div>\n      <Column style={{ maxWidth: 600, width: '100%' }}>\n        <ToggleButtonComponent\n          expanded={expanded}\n          onClick={() => {\n            transitioningRef.current = true\n            setExpanded(prev => !prev)\n          }}\n        />\n        <CollapsibleContent\n          expanded={expanded}\n          onTransitionStart={() => setTransitionStatus('has started')}\n          onTransitionEnd={() => {\n            transitioningRef.current = false\n            setTransitionStatus('is over')\n          }}\n        >\n          {isMounted ? <TextComponent /> : <div></div>}\n        </CollapsibleContent>\n      </Column>\n    </Column>\n  )\n}",__scope:(t={props:C,DefaultLayout:r.a,Playground:i.c,Props:i.d,Code:s.a,Column:u.Column,CollapsibleContent:l.a,ToggleButtonComponent:d.a,TextComponent:c.a},t.DefaultLayout=r.a,t._frontmatter=b,t),mdxType:"Playground"},(function(){var n=o.useState(!1),t=n[0],e=n[1],r=o.useRef(!1),i=o.useState("has not yet started"),s=i[0],p=i[1],b=t||r.current;return Object(a.b)(u.Column,{mdxType:"Column"},Object(a.b)("div",{style:{marginBottom:10}},Object(a.b)("div",null,"Transition status:"," "," ",Object(a.b)("b",null,s),Object(a.b)("br",null),"Is mounted?"," "," ",Object(a.b)("b",null,b?"Yes":"No"))),Object(a.b)(u.Column,{style:{maxWidth:600,width:"100%"},mdxType:"Column"},Object(a.b)(d.a,{expanded:t,onClick:function(){r.current=!0,e((function(n){return!n}))},mdxType:"ToggleButtonComponent"}),Object(a.b)(l.a,{expanded:t,onTransitionStart:function(){return p("has started")},onTransitionEnd:function(){r.current=!1,p("is over")},mdxType:"CollapsibleContent"},b?Object(a.b)(c.a,{mdxType:"TextComponent"}):Object(a.b)("div",null))))})))}void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&!C.hasOwnProperty("__filemeta")&&Object.defineProperty(C,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/examples/Unmount.mdx"}}),C.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-examples-unmount-mdx-5cbb42f06d44feb05970.js.map