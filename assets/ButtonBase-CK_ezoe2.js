import{r as l,_ as Te,R as H,c as y,j as N,u as re,s as Q}from"./iframe-DHdCyQc7.js";import{_ as ve,h as Pe,T as ie,i as Ve,c as ae,b as Be,s as Z,g as Se,u as oe,a as _,d as we}from"./useTimeout-D0EDQB2X.js";import{i as se}from"./isFocusVisible-B8k4qzLc.js";function De(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ee(t,e){var i=function(o){return e&&l.isValidElement(o)?e(o):o},a=Object.create(null);return t&&l.Children.map(t,function(n){return n}).forEach(function(n){a[n.key]=i(n)}),a}function Le(t,e){t=t||{},e=e||{};function i(f){return f in e?e[f]:t[f]}var a=Object.create(null),n=[];for(var o in t)o in e?n.length&&(a[o]=n,n=[]):n.push(o);var s,c={};for(var u in e){if(a[u])for(s=0;s<a[u].length;s++){var p=a[u][s];c[a[u][s]]=i(p)}c[u]=i(u)}for(s=0;s<n.length;s++)c[n[s]]=i(n[s]);return c}function k(t,e,i){return i[e]!=null?i[e]:t.props[e]}function je(t,e){return ee(t.children,function(i){return l.cloneElement(i,{onExited:e.bind(null,i),in:!0,appear:k(i,"appear",t),enter:k(i,"enter",t),exit:k(i,"exit",t)})})}function ke(t,e,i){var a=ee(t.children),n=Le(e,a);return Object.keys(n).forEach(function(o){var s=n[o];if(l.isValidElement(s)){var c=o in e,u=o in a,p=e[o],f=l.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[o]=l.cloneElement(s,{onExited:i.bind(null,s),in:!0,exit:k(s,"exit",t),enter:k(s,"enter",t)}):!u&&c&&!f?n[o]=l.cloneElement(s,{in:!1}):u&&c&&l.isValidElement(p)&&(n[o]=l.cloneElement(s,{onExited:i.bind(null,s),in:p.props.in,exit:k(s,"exit",t),enter:k(s,"enter",t)}))}}),n}var Ne=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},$e={component:"div",childFactory:function(e){return e}},te=function(t){ve(e,t);function e(a,n){var o;o=t.call(this,a,n)||this;var s=o.handleExited.bind(De(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var i=e.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(n,o){var s=o.children,c=o.handleExited,u=o.firstRender;return{children:u?je(n,c):ke(n,s,c),firstRender:!1}},i.handleExited=function(n,o){var s=ee(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var u=Te({},c.children);return delete u[n.key],{children:u}}))},i.render=function(){var n=this.props,o=n.component,s=n.childFactory,c=Pe(n,["component","childFactory"]),u=this.state.contextValue,p=Ne(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,o===null?H.createElement(ie.Provider,{value:u},p):H.createElement(ie.Provider,{value:u},H.createElement(o,c,p))},e}(H.Component);te.propTypes={};te.defaultProps=$e;class G{static create(){return new G}static use(){const e=Ve(G.create).current,[i,a]=l.useState(!1);return e.shouldMount=i,e.setShouldMount=a,l.useEffect(e.mountEffect,[i]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Ie(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}function Fe(){return G.use()}function Ie(){let t,e;const i=new Promise((a,n)=>{t=a,e=n});return i.resolve=t,i.reject=e,i}function Ue(t){const{className:e,classes:i,pulsate:a=!1,rippleX:n,rippleY:o,rippleSize:s,in:c,onExited:u,timeout:p}=t,[f,h]=l.useState(!1),M=y(e,i.ripple,i.rippleVisible,a&&i.ripplePulsate),P={width:s,height:s,top:-(s/2)+o,left:-(s/2)+n},g=y(i.child,f&&i.childLeaving,a&&i.childPulsate);return!c&&!f&&h(!0),l.useEffect(()=>{if(!c&&u!=null){const w=setTimeout(u,p);return()=>{clearTimeout(w)}}},[u,c,p]),N.jsx("span",{className:M,style:P,children:N.jsx("span",{className:g})})}const b=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,ze=80,Oe=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ae=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Xe=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ye=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ke=Z(Ue,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Oe};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${b.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${b.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${b.childLeaving} {
    opacity: 0;
    animation-name: ${Ae};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Xe};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,We=l.forwardRef(function(e,i){const a=re({props:e,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:s,...c}=a,[u,p]=l.useState([]),f=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),P=Be(),g=l.useRef(null),w=l.useRef(null),C=l.useCallback(d=>{const{pulsate:E,rippleX:R,rippleY:I,rippleSize:D,cb:U}=d;p(x=>[...x,N.jsx(Ke,{classes:{ripple:y(o.ripple,b.ripple),rippleVisible:y(o.rippleVisible,b.rippleVisible),ripplePulsate:y(o.ripplePulsate,b.ripplePulsate),child:y(o.child,b.child),childLeaving:y(o.childLeaving,b.childLeaving),childPulsate:y(o.childPulsate,b.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:I,rippleSize:D},f.current)]),f.current+=1,h.current=U},[o]),$=l.useCallback((d={},E={},R=()=>{})=>{const{pulsate:I=!1,center:D=n||E.pulsate,fakeElement:U=!1}=E;if(d?.type==="mousedown"&&M.current){M.current=!1;return}d?.type==="touchstart"&&(M.current=!0);const x=U?null:w.current,V=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,S;if(D||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)B=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:z,clientY:L}=d.touches&&d.touches.length>0?d.touches[0]:d;B=Math.round(z-V.left),T=Math.round(L-V.top)}if(D)S=Math.sqrt((2*V.width**2+V.height**2)/3),S%2===0&&(S+=1);else{const z=Math.max(Math.abs((x?x.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;S=Math.sqrt(z**2+L**2)}d?.touches?g.current===null&&(g.current=()=>{C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},P.start(ze,()=>{g.current&&(g.current(),g.current=null)})):C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},[n,C,P]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((d,E)=>{if(P.clear(),d?.type==="touchend"&&g.current){g.current(),g.current=null,P.start(0,()=>{F(d,E)});return}g.current=null,p(R=>R.length>0?R.slice(1):R),h.current=E},[P]);return l.useImperativeHandle(i,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(Ye,{className:y(b.root,o.root,s),ref:w,...c,children:N.jsx(te,{component:null,exit:!0,children:u})})});function He(t){return Se("MuiButtonBase",t)}const _e=ae("MuiButtonBase",["root","disabled","focusVisible"]),Ge=t=>{const{disabled:e,focusVisible:i,focusVisibleClassName:a,classes:n}=t,s=we({root:["root",e&&"disabled",i&&"focusVisible"]},He,n);return i&&a&&(s.root+=` ${a}`),s},qe=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${_e.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),et=l.forwardRef(function(e,i){const a=re({props:e,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:s,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:g="a",onBlur:w,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:d,onKeyDown:E,onKeyUp:R,onMouseDown:I,onMouseLeave:D,onMouseUp:U,onTouchEnd:x,onTouchMove:V,onTouchStart:B,tabIndex:T=0,TouchRippleProps:S,touchRippleRef:z,type:L,...O}=a,A=l.useRef(null),m=Fe(),le=oe(m.ref,z),[j,K]=l.useState(!1);p&&j&&K(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ue=m.shouldMount&&!f&&!p;l.useEffect(()=>{j&&M&&!f&&m.pulsate()},[f,M,j,m]);const ce=v(m,"start",I,h),pe=v(m,"stop",$,h),de=v(m,"stop",Y,h),fe=v(m,"stop",U,h),he=v(m,"stop",r=>{j&&r.preventDefault(),D&&D(r)},h),me=v(m,"start",B,h),ge=v(m,"stop",x,h),be=v(m,"stop",V,h),Me=v(m,"stop",r=>{se(r.target)||K(!1),w&&w(r)},!1),Re=_(r=>{A.current||(A.current=r.currentTarget),se(r.target)&&(K(!0),d&&d(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ee=_(r=>{M&&!r.repeat&&j&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),E&&E(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!p&&(r.preventDefault(),C&&C(r))}),xe=_(r=>{M&&r.key===" "&&j&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=g);const X={};W==="button"?(X.type=L===void 0?"button":L,X.disabled=p):(!O.href&&!O.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const ye=oe(i,A),ne={...a,centerRipple:o,component:u,disabled:p,disableRipple:f,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Ce=Ge(ne);return N.jsxs(qe,{as:W,className:y(Ce.root,c),ownerState:ne,onBlur:Me,onClick:C,onContextMenu:pe,onFocus:Re,onKeyDown:Ee,onKeyUp:xe,onMouseDown:ce,onMouseLeave:he,onMouseUp:fe,onDragLeave:de,onTouchEnd:ge,onTouchMove:be,onTouchStart:me,ref:ye,tabIndex:p?-1:T,type:L,...X,...O,children:[s,ue?N.jsx(We,{ref:le,center:o,...S}):null]})});function v(t,e,i,a=!1){return _(n=>(i&&i(n),a||t[e](n),!0))}export{et as B};
