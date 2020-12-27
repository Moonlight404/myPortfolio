(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),i=a.n(s),c=a(20),r=a.n(c),o=(a(67),a(12)),l=a(2),_=a(3),p=a(5),u=a(4),d=(a(68),a(42)),m=a.n(d),j=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(_.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"appD",children:[Object(n.jsx)("div",{className:"transparent"}),Object(n.jsx)("img",{className:"image",src:this.props.image}),Object(n.jsx)("span",{className:"".concat(this.props.focus?"focus":""),children:this.props.name})]})}}]),a}(i.a.Component),b=a(60),h=a.n(b),O=[{text:"node example.js",cmd:!0,delay:80},{text:"\u2714 Loaded app",cmd:!1,repeat:!0,repeatCount:5,frames:["\u280b","\u2819","\u2839","\u2838","\u283c","\u2834","\u2826","\u2827","\u2807","\u280f"].map((function(e){return{text:e+" Loading app",delay:40}}))},{text:"",cmd:!0}],g=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(_.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"appDesktop terminal",children:Object(n.jsx)(h.a,{lines:O,interval:80})})}}]),a}(i.a.Component),f=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(_.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"appDesktop aboutMe",children:[Object(n.jsx)("div",{className:"avatar",children:Object(n.jsx)("img",{src:"./apps/me.jpg"})}),Object(n.jsx)("h1",{className:"nameMe",children:"Alexandre Silva"}),Object(n.jsx)("p",{children:Object(n.jsxs)("span",{className:"normal",children:["I'm a web developer, I know",Object(n.jsx)("span",{className:"react tec",children:"React"}),",",Object(n.jsx)("span",{className:"vue tec",children:"Vue"})," and ",Object(n.jsx)("span",{className:"php tec",children:"PHP"}),",",Object(n.jsx)("span",{className:"angular tec",children:"Angular"})," and ",Object(n.jsx)("span",{className:"nodejs tec",children:"NodeJS."})]})})]})}}]),a}(i.a.Component),v=a(43),x=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={backgrounds:[{title:"Blue Tower",image:"./backgrounds/1.jpg"},{title:"Linux Kernel",image:"./backgrounds/2.png"},{title:"Watermill",image:"./backgrounds/3.jpg"},{title:"City",image:"./backgrounds/4.jpg"},{title:"Green",image:"./backgrounds/5.jpg"},{title:"Pinguim",image:"./backgrounds/6.png"},{title:"Big Sur",image:"./backgrounds/7.jpg"}]},n}return Object(_.a)(a,[{key:"selectBackground",value:function(e){window.localStorage.setItem("background",e)}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"appDesktop ConfigBackgrounds",children:Object(n.jsx)("div",{className:"center",children:this.state.backgrounds.map((function(t,a){return Object(n.jsxs)("div",{className:"item \n                ".concat(window.localStorage.getItem("background")==t.image?"selected":"notSelect","\n                ").concat(null==window.localStorage.getItem("background")&&0==a?"selected":"notSelect","\n                "),onClick:function(){return e.selectBackground(t.image)},children:[Object(n.jsx)("img",{src:t.image}),Object(n.jsx)("div",{className:"right",children:Object(n.jsx)("h3",{children:t.title})})]})}))})})}}]),a}(i.a.Component),C=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={inConfigAba:!1,whoAbaConfig:null,settingsArray:[{title:"Appearance",srcImg:"./icons/appe_settings.png",aba:x}]},n}return Object(_.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"appDesktop Config",children:[null!=this.state.whoAbaConfig&&Object(n.jsx)("div",{onClick:function(){return e.setState({whoAbaConfig:null})},className:"back",children:"All settings"}),null==this.state.whoAbaConfig&&this.state.settingsArray.map((function(t,a){return Object(n.jsxs)("div",{className:"list",onClick:function(){return e.setState({whoAbaConfig:t})},children:[Object(n.jsxs)("h2",{children:[Object(n.jsx)("img",{src:t.srcImg}),t.title]}),Object(n.jsxs)("div",{className:"item",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("img",{src:"./icons/background_settings.png"})}),Object(n.jsx)("span",{children:"Backgrounds"})]})]})})),Object(n.jsx)("div",{className:"show ".concat(null!=this.state.whoAbaConfig?"showed":"notShow"),children:null!=this.state.whoAbaConfig&&Object(n.jsx)(this.state.whoAbaConfig.aba,{})})]})}}]),a}(i.a.Component),k=a(61),D=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={appFocus:-1,ativoMenu:!1,appOpeneds:[],zIndex:1,hours:"00:00",appsOptionsBar:[{name:"Terminal",image:"./apps/terminal.png",opened:g},{name:"Me",image:"./apps/me.png",app:f},{name:"Calculator",image:"./apps/calculator.png",app:v.a,zIndex:9001,fullScreen:!1,mini:!1},{name:"Settings",image:"./apps/settings.png",app:C,zIndex:9001,fullScreen:!1,mini:!1,seeDesktop:!0}],allApps:[{name:"Terminal",image:"./apps/terminal.png",app:g,zIndex:9001,fullScreen:!1,mini:!1,seeDesktop:!0},{name:"Me",image:"./apps/me.png",app:f,zIndex:9001,fullScreen:!1,mini:!1,seeDesktop:!0},{name:"Calculator",image:"./apps/calculator.png",app:v.a,zIndex:9001,fullScreen:!1,mini:!1,seeDesktop:!1},{name:"Settings",image:"./apps/settings.png",app:C,zIndex:9001,fullScreen:!1,mini:!1,seeDesktop:!0}]},n}return Object(_.a)(a,[{key:"componentDidMount",value:function(){this.horario()}},{key:"horario",value:function(){var e=this;setInterval((function(){var t=new Date,a="",n="";parseFloat(t.getMinutes())<10&&(a="0"),parseFloat(t.getHours())<10&&(n="0"),e.setState({hours:"".concat(n).concat(t.getHours(),":").concat(a).concat(t.getMinutes())})}),1e3)}},{key:"zIndexApp",value:function(e){var t=Object(o.a)(this.state.allApps),a=t.find((function(t){return t.name==e})),n=t.indexOf(a);if(a){var s=t[n].zIndex;s=s+=1,t[n].zIndex=s,this.setState({allApps:t})}}},{key:"openApp",value:function(e,t,a,n){var s=this;this.state.appOpeneds.find((function(e){return e.title==t}))||(this.zIndexApp(t),this.setState((function(n){return{appOpeneds:[].concat(Object(o.a)(s.state.appOpeneds),[{app:e,title:t,image:a,zIndex:s.state.zIndex}])}}))),this.onStartDrag()}},{key:"closeApp",value:function(e){if(this.state.appOpeneds.find((function(t){return t.title==e}))){var t=Object(o.a)(this.state.appOpeneds),a=this.state.appOpeneds.find((function(t){return t.title==e})),n=this.state.appOpeneds.indexOf(a);a&&(t.splice(n,1),this.setState({appOpeneds:t}))}}},{key:"fullScreen",value:function(e){var t=Object(o.a)(this.state.allApps),a=this.state.allApps.find((function(t){return t.name==e})),n=this.state.allApps.indexOf(a);a&&(t[n].fullScreen=!t[n].fullScreen,this.setState({allApps:t}))}},{key:"onStartDrag",value:function(){this.setState({appFocus:-1}),this.setState({ativoMenu:!1})}},{key:"onDragApp",value:function(e){this.zIndexApp(e),this.setState({appFocus:-1}),this.setState({ativoMenu:!1})}},{key:"mini",value:function(e){var t=this.state.allApps.find((function(t){return t.name==e}));if(t){var a=Object(o.a)(this.state.allApps),n=a.indexOf(t);a[n].mini=!0,this.setState({allApps:a})}}},{key:"openAppBar",value:function(e){var t=this.state.allApps.find((function(t){return t.name==e}));if(t){var a=Object(o.a)(this.state.allApps),n=a.indexOf(t);a[n].mini=!a[n].mini,this.setState({allApps:a})}}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"App",style:{backgroundImage:"url(".concat(window.localStorage.getItem("background"),")")},children:Object(n.jsxs)("div",{className:"desktop",children:[Object(n.jsx)(k.SelectableGroup,{children:Object(n.jsx)("div",{className:"allScreen",children:Object(n.jsx)("h1",{className:"hoursScreen",children:this.state.hours})})}),Object(n.jsx)("div",{className:"apps",children:this.state.allApps.map((function(t,a){return t.seeDesktop&&Object(n.jsx)(m.a,{grid:[95,45],onDrag:function(){return e.onStartDrag()},children:Object(n.jsx)("div",{onDoubleClick:function(){return e.openApp(t.opened,t.name,t.image,!1)},children:Object(n.jsx)(j,{name:t.name,image:t.image})})})}))}),Object(n.jsxs)("div",{className:"optionsBar ".concat(this.state.ativoMenu?"abertoFocus":"dontAberto"),children:[Object(n.jsx)("div",{className:"applicationBar",children:this.state.appsOptionsBar.map((function(t,a){return Object(n.jsx)("div",{onMouseEnter:function(){return e.setState({appFocus:a})},onMouseLeave:function(){return e.setState({appFocus:-1})},onClick:function(){return e.openApp(t.opened,t.name,t.image,!1)},children:Object(n.jsx)(j,{name:t.name,image:t.image,focus:e.state.appFocus==a})})}))}),Object(n.jsx)("div",{className:"appsSearch",children:Object(n.jsx)("input",{type:"text",placeholder:"Search app's"})})]}),Object(n.jsxs)("div",{className:"bottomBar",children:[Object(n.jsx)("div",{onClick:function(){return e.setState({ativoMenu:!e.state.ativoMenu})},className:"appLogo ".concat(this.state.ativoMenu?"appLogoAtivo":"AppLogoDontAtivo"),children:Object(n.jsx)("img",{src:"./apps/logo.png"})}),this.state.appOpeneds.map((function(t,a){return Object(n.jsx)("div",{onClick:function(){return e.openAppBar(t.title)},className:"appLogo inlineApp\n          ".concat(e.state.allApps.find((function(e){return e.name==t.title})).mini?"isNotMini":"isMini","\n          "),children:Object(n.jsx)("img",{src:t.image})})})),Object(n.jsx)("div",{className:"right",children:Object(n.jsx)("div",{className:"hours",children:Object(n.jsx)("span",{children:this.state.hours})})})]}),this.state.allApps.map((function(t,a){return Object(n.jsx)(m.a,{handle:".move",onDrag:function(){return e.onDragApp(t.name)},children:Object(n.jsx)("div",{className:"relativeApp",style:{zIndex:t.zIndex},children:Object(n.jsxs)("div",{className:"appL\n          ".concat(e.state.appOpeneds.find((function(e){return e.title==t.name}))?"appAberto":"appNaoAberto","\n          ").concat(t.mini?"mini":"notMini","\n          "),children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{onClick:function(){return e.onDragApp(t.name)},className:"move"}),Object(n.jsx)("span",{children:t.name}),Object(n.jsxs)("div",{className:"right",children:[Object(n.jsx)("button",{onClick:function(){return e.mini(t.name)},children:Object(n.jsx)("i",{class:"fas fa-minus"})}),Object(n.jsx)("button",{onClick:function(){return e.closeApp(t.name)},children:Object(n.jsx)("i",{class:"fas fa-times"})})]})]}),Object(n.jsx)(t.app,{})]})})})})),Object(n.jsx)("span",{className:"demoPort",children:"Version Portf\xf3lio, created by kaway404"})]})})}}]),a}(i.a.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),A()},43:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),C_Users_MICRO_Documents_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_MICRO_Documents_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),C_Users_MICRO_Documents_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),C_Users_MICRO_Documents_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),Calculator=function(_React$Component){Object(C_Users_MICRO_Documents_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_React$Component);var _super=Object(C_Users_MICRO_Documents_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(e){var t;return Object(C_Users_MICRO_Documents_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Calculator),(t=_super.call(this,e)).state={numbers:[7,8,9,4,5,6,1,2,3,0],operacoes:["+","-","/","*","="],visor:"",total:0},t}return Object(C_Users_MICRO_Documents_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,[{key:"addOperacoes",value:function addOperacoes(op){"+"!=this.state.visor[this.state.visor.length-1]&&"-"!=this.state.visor[this.state.visor.length-1]&&"/"!=this.state.visor[this.state.visor.length-1]&&"*"!=this.state.visor[this.state.visor.length-1]&&"="!=this.state.visor[this.state.visor.length-1]&&("="!=op?this.setState({visor:this.state.visor+=op}):(this.setState({total:eval(this.state.visor)}),this.setState({visor:""})))}},{key:"addNumbers",value:function(e){"0"==e&&0==this.state.visor.length||this.setState({visor:this.state.visor+=e.toString()})}},{key:"render",value:function(){var e=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"appDesktop calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"visor",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:this.state.total}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:this.state.visor})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"numbers",children:this.state.numbers.map((function(t,a){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return e.addNumbers(t)},className:"".concat(0==t?"zero":""),children:t})}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"operacoes",children:this.state.operacoes.map((function(t,a){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return e.addOperacoes(t)},children:t})}))})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},67:function(e,t,a){},68:function(e,t,a){}},[[129,1,2]]]);